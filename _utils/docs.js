const fs = require("fs");
const fetch = require("node-fetch");
const Gootenberg = require("gootenberg");
const parsers = require("./parsers");

const secrets = require("../_config/secrets.json");
const { getConfig } = require( "./config" );

const cleanupArchieObject = async (obj) => {
  const entries = Object.entries(obj);
  const isObject = (val) => typeof val === "object" && !Array.isArray(val);

  const keysToLowerCase = obj => Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v])
  );

  if (obj.type) {
    obj.type = obj.type.toLowerCase();
  }

  if (isObject(obj.value)) {
    obj.value = keysToLowerCase(obj.value);
  }

  const parser = obj && parsers[obj.type];

  if (parser) {
    await parser( obj );
  }

  for (var i = 0; i < entries.length; i++) {
    let [key, entry] = entries[i];

    if (Array.isArray(entry)) {
      for (var j = 0; j < entry.length; j++) {
        await cleanupArchieObject(entry[j]);
      }
    } else if (isObject(entry)) {
      entry = keysToLowerCase(entry);
      await cleanupArchieObject(entry);
    }
  }
};

async function fetchDocs(files, parser) {
  if (!files) return;

  let names = Object.keys(files);

  for (let i = 0; i < names.length; i++) {
    const filename = names[i];
    const data = await parser(files[filename]);

    await cleanupArchieObject(data);
    saveDataToFile( data, filename );
  }
}

function saveDataToFile( data, filename ) {
  if (!fs.existsSync("src/data")) {
    fs.mkdirSync("src/data");
  }
  fs.writeFile(
    `src/data/${filename}.json`,
    JSON.stringify(data, null, "  "),
    (err) => {
      console.log(`Completed ${filename}.json`);
      if (err) {
        console.log(`Unable to write file: ${filename}.json`);
      }
    }
  );
}

async function fetchComposerStory(id) {

  const getStory = async ( published ) => {
    const response = await fetch(
      `https://api.inquirer.com/v1/arc-content?apikey=L7ABFZ8CJuAs1JyeK75UQtbBoGtfoG0M&_id=${id}&published=${published}`
    );
    const json = await response.json();
    return json;
  }

  const extractStory = ( story ) => {
    if( !story || story.message )
      return false;

    const { _id, last_updated_date, display_date, credits, promo_items, label, headlines, subheadlines } = story;
    const extracted = { _id, last_updated_date, display_date, credits, promo_items, label, headlines, subheadlines };

    saveDataToFile( extracted, "story" );
    console.log( `🗞  ${id}`);
    return true;
  }

  const published = await getStory(true);
  if( extractStory(published) )
    return;

  const notPublished = await getStory( false );
  if( extractStory(notPublished) )
    return;

  console.log( `⛔️ ${id}`);
}


(async () => {
  const config_id = process.env.npm_config_project;

  const goot = new Gootenberg();
  await goot.auth.oauth(secrets, secrets);
  const config = await getConfig( config_id );

  await fetchDocs(config.docs, goot.parse.archie);
  await fetchDocs(config.sheets, goot.parse.table);

  await fetchComposerStory( config.composer );
})();

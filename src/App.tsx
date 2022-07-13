import React from "react";
import ArchieContent from "./modules/templated/ArchieContent";

import data from "./data/data.json";
import story from "./data/story.json";

export default function App() {
  return (
    <div className='inno'>
      <div className='inno-container'>
        <div className='inno-content'>
          <ArchieContent data={data.content} story={story} />
        </div>
      </div>
    </div>
  );
}



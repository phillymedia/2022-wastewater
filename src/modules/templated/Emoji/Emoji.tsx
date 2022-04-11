import React from "react";
import emojiUnicode from "emoji-unicode";

export default function Emoji({emoji}) {
  if (emoji) {
    const unicode = emojiUnicode(emoji).replace(/ /g, '-');

    return (
      <img className='inno-emoji' src={`https://media.inquirer.com/storage/inquirer/projects/twemoji/svg/${unicode}.svg`} />
    )
  }
}
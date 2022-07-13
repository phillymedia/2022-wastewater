import React from "react";

let currentAd = 0;

const Ad = ({ slotName, articleId = "" }) => {
  currentAd++;
  const id = `ad${currentAd}010`;

  return (
    <div
      id={`${id}-sticky`}
      data-ad-name="cube"
      data-article-id={ articleId }
      data-id={id}
      data-slotName={slotName}
      className='arc-ad-wrapper container-column spaced spaced-top spaced-lg righ-rail-ad-desktop js-inno-ad-wrapper inno-uncontent'
    >
      <div className="container-row justify-center">
        <div
          id={id}
          className='arcad ad-responsive js-inno-ad'
        ></div>
      </div>
    </div>
  );
};

export default Ad;

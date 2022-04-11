import React from "react";

import Caption from "../Caption";

const getAlignmentClass = (align) => {
  if (align === "wide") return "inno-uncontent";
  else if (align === "full") return "inno-uncontent";
  else return "";
};

const Video = ({ id, streams, autoplay, poster = "", caption, credit, align = null }) => {
  let stream = streams?.find( s => s.height == 480 && !s.url.includes('.m3u8') );

  return (
    <figure className={`inno-video ${getAlignmentClass(align)}`}>
      <video className="inno-video__video inq-image inq-video" controlsList="nodownload" controls autoPlay={autoplay} poster={poster}>
        <source src={ stream?.url }/>
      </video>
      <Caption caption={caption} credit={credit} />
    </figure>
  );
};

export default Video;

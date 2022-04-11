import React from "react";

import StoryMeta from "../StoryMeta";
import Image from "../Image";
import Video from "../Video";

const setCustomClasses = (data, mediaType) => {
  let classes = new Array;

  if (data.background) {
    classes.push(`inno-hero--bg-${data.background}`);
  }

  if (data.font) {
    classes.push(`inno-hero--font-${data.font}`)
  }

  if (data.layout) {
    classes.push(`inno-hero--layout-${data.layout}`)
  }

  if (mediaType) {
    classes.push(`inno-hero--has-${mediaType}`);
  } else {
    classes.push('inno-hero--has-no-media');
  }

  return classes.join(' ');
}

const Hero = ({ story, data }) => {
  data = data.reduce((acc, datum) => {
    return {
      ...acc,
      [datum.type]: datum.value
    }
  }, {});

  let mediaType = null;

  mediaType = data.image ? 'image' : mediaType;
  mediaType = data.video ? 'video' : mediaType;

  return (
    <div className={`inno-hero inno-uncontain ${setCustomClasses(data, mediaType)}`}>
      <div className='inno-hero__content'>
        <div className='inno-container'>
          <div className='inno-content'>
            {story?.label?.eyebrows &&
              <a className='inno-hero__eyebrow' href={ story.label.eyebrows?.url }>{ story.label.eyebrows?.text }</a>
            }
            <h1 className='inno-hero__headline'>{story?.headlines?.print || 'SET STORY HEADLINE IN COMPOSER'}</h1>
            <p className='inno-hero__subheadline'>{story?.subheadlines?.basic || 'SET SUBHEADLINE IN COMPOSER'}</p>
          </div>
        </div>
      </div>

      <div className='inno-container'>
        {mediaType == 'image' &&
          <div className='inno-hero__media'>
            <div className='inno-content'>
              <Image srcSet={data.image.srcSet} caption={data.image.caption} credit={data.image.credit} align='wide' />
            </div>
          </div>
        }

        {mediaType == 'video' &&
          <div className='inno-hero__media'>
            <Video id={data.video.id} streams={data.video.streams} autoplay={data.video.autoplay} poster={data.video.poster || data.image?.srcSet[2].src } caption={data.video.caption} credit={data.video.credit}/>
          </div>
        }

        <StoryMeta story={story} />
      </div>
    </div>
  )
}

export default Hero;

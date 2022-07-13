import React from "react";

import { renderMarkdownInline } from "../../templated/ArchieContent/ArchieContent";
import MonthsSwarm from "../MonthsSwarm";

const convertParToHTML = markdownText => {
  let html = renderMarkdownInline(markdownText);

  if (html) {
    const strongTagsToReplace = html.match(/<strong>(.*?)<\/strong>/g);

    if (strongTagsToReplace) {
      const cleanTags = strongTagsToReplace.map(tag => {
        const className = 'inno-span inno-span--' + tag.replace(/<\/?strong>/g,'').toLowerCase().replace(/ /g, '-').replace(/’/g, '');
        return tag.replace('<strong>', `<strong class="${className}">`);
      })

      for (let i in strongTagsToReplace) {
        html = html.replace(strongTagsToReplace[i], cleanTags[i])
      }
    }
  }

  return html;
}

const Steps = ({ steps }) => {
  return (
    <div className='inno-steps inno-uncontain js-steps' data-type={steps[0].step.includes('line-') ? 'line' : 'radar'}>
      <div className='inno-container'>
        <ul className='inno-steps__steps inno-content'>
          {steps.map(step => (
            <li className='inno-steps__step js-steps-step' data-step={step.step} data-score={step.score}>

              {typeof step.text == 'string' &&
                <p className="inno-p" dangerouslySetInnerHTML={{__html: convertParToHTML(step.text) }}></p>
              }

              {typeof step.text == 'object' &&
                step.text.map(par => (
                  <p className="inno-p" dangerouslySetInnerHTML={{__html: convertParToHTML(par.value) }}></p>
                ))
              }
            </li>
          ))}
        </ul>
      </div>

      <div className='inno-steps__content'>
        {steps[0].step == ('initial-step') &&
          <MonthsSwarm />
        }
      </div>
    </div>
  );
};

export default Steps;
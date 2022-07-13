import dayjs from "dayjs";

const updateTimestamp = () => {
  window.addEventListener('DOMContentLoaded', () => {
    const timeStampEl = document.querySelector('.js-timestamp');

    if (timeStampEl) {
      const timeStampFromPage = (document.querySelector('meta[name="date"]') as HTMLMetaElement).content; 

      if (timeStampFromPage) {
        timeStampEl.querySelector('.js-timestamp-date').textContent = outputDateTime(timeStampFromPage);
      }
    }
  });
}

const outputDateTime = date => {
  if (date !== '') {
    let pubDate = dayjs(date);
    let month = pubDate.format('MMM');

    return `${month} ${pubDate.format( 'D, YYYY' )}`;
  }

  return '';
};

export default {
  init: () => {
    updateTimestamp();
  }
}
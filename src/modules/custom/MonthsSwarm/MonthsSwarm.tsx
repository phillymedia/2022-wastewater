import React from 'react';

import * as d3 from "d3";
import ReactFauxDOM from 'react-faux-dom';

const MonthsSwarm = () => {
  const margin = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }

  const width = 900;
  const height = 600;

  const svgEl = ReactFauxDOM.createElement('svg');

  const svg = d3.select(svgEl)
    .attr('className', 'inno-months__chart')
    .attr('viewBox', `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')


  return (
    <div className={`inno-months`}>
      <iframe src='https://flo.uri.sh/visualisation/8836278/embed'className='inno-months__iframe inno-months__iframe--nov' frameBorder='0' scrolling='no' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
      <iframe src='https://datawrapper.dwcdn.net/htrJw/1/'className='inno-months__iframe inno-months__iframe--philly' frameBorder='0' scrolling='no' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
      <iframe src='https://datawrapper.dwcdn.net/cnazG/2/'className='inno-months__iframe inno-months__iframe--pa' frameBorder='0' scrolling='no' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
      <iframe src='https://datawrapper.dwcdn.net/szNsu/1/'className='inno-months__iframe inno-months__iframe--initial' frameBorder='0' scrolling='no' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
      <iframe src='https://datawrapper.dwcdn.net/otIuk/1/'className='inno-months__iframe inno-months__iframe--aug' frameBorder='0' scrolling='no' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
      <iframe src='https://flo.uri.sh/visualisation/8836014/embed'className='inno-months__iframe inno-months__iframe--sept' frameBorder='0' scrolling='no' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
      <iframe src='https://flo.uri.sh/visualisation/8833263/embed'className='inno-months__iframe inno-months__iframe--oct' frameBorder='0' scrolling='no' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
      <iframe src='https://flo.uri.sh/visualisation/8842465/embed'className='inno-months__iframe inno-months__iframe--penultimate' frameBorder='0' scrolling='no' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
      <iframe src='https://flo.uri.sh/visualisation/8836270/embed'className='inno-months__iframe inno-months__iframe--final' frameBorder='0' scrolling='no' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
      <iframe src='https://flo.uri.sh/visualisation/8811923/embed'className='inno-months__iframe inno-months__iframe--another' frameBorder='0' scrolling='no' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>


      <iframe src='https://flo.uri.sh/visualisation/8843815/embed'className='inno-months__iframe inno-months__iframe--realfinal' frameBorder='0' scrolling='no' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>

      <iframe src='https://flo.uri.sh/visualisation/8843788/embed'className='inno-months__iframe inno-months__iframe--real' frameBorder='0' scrolling='no' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>

      <iframe src='https://flo.uri.sh/visualisation/8842571/embed'className='inno-months__iframe inno-months__iframe--end' frameBorder='0' scrolling='no' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>


      {svgEl.toReact()}
    </div>
  );
}

export default MonthsSwarm;
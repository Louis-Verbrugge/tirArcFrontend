
import * as echarts from 'echarts';
import { useEffect, useRef } from "react";

import startPage from '../../_helpers/annimation/startPage';

import './Home.css';


function Home({ setRefPage, refPage}) {

  
  // useEffect(() => {
  //   var dom = document.getElementById('chart-container');
  //   if (dom) {
  //     var myChart = echarts.init(dom, null, {
  //       renderer: 'canvas',
  //       useDirtyRect: false
  //     });

  //     var option = {
  //       graphic: {
  //         elements: [
  //           {
  //             type: 'text',
  //             left: 'center',
  //             top: 'center',
  //             style: {
  //               text: 'Louis Verbrugge',
  //               fontSize: 100,
  //               fontWeight: 'bold',
  //               lineDash: [0, 200],
  //               fontFamily: 'Courier-New',
  //               lineDashOffset: 0,
  //               fill: 'transparent',
  //               stroke: '#fff',
  //               lineWidth: 4
  //             },  
  //             keyframeAnimation: {
  //               duration: 2000,
  //               keyframes: [
  //                 {
  //                   percent: 0.7,
  //                   style: {
  //                     fill: 'transparent',
  //                     lineDashOffset: 200,
  //                     lineDash: [200, 0]
  //                   }
  //                 },
  //                 {
  //                   percent: 1,
  //                   style: {
  //                     fill: 'white',
                      
  //                     lineWidth: 0,
  //                   }
  //                 }
  //               ]
  //             }
  //           }
  //         ]
  //       }
  //     };

  //     if (option && typeof option === 'object') {
  //       myChart.setOption(option);
  //     }
  //   }
  // }, []);


  const pageProjects = useRef(null);
  useEffect(() => {
    if (pageProjects.current) {

      setRefPage(pageProjects);
      startPage(pageProjects);
    }
  }, [pageProjects, refPage]);

  return (
    <div ref={pageProjects}>
    
    <h1>Louis Verbrugge</h1>
      {/* {<div id="chart-container"></div>} */}
    </div>
  )
}

export default Home;
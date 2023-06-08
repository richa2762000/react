import React, { useState } from 'react';
import './traffic.css'
import Chart from "react-apexcharts";
function Traffic() {
    const [state, setState] = useState({
        series: [50],
        options: {
          chart: {
            height: 130,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              hollow: {
                // size: '50%',
              }
            },
          },
          labels: ['Direct'],
        },
        })
    return (
        <>
            <div className='container'>
                <h2 className='source'>Traffic Sources</h2>
                <hr></hr>
                <div className='main'>
                    <div><input placeholder='Source   Traffic source%'></input></div>
                    <div className='chart'>
                        <div id="chart">
                            <Chart
                                options={state.options}
                                series={state.series}
                                type="radialBar"
                                width={220} 
                                height={150}/>
                        </div>
                    </div>
                </div>
                <div className='cont'>
                    <tr>
                        <th><button className='button'></button>Direct</th>
                        <th>50</th>
                    </tr>
                    <tr>
                        <th><button className='button2'></button>Search</th>
                        <th>50</th>
                    </tr>
                </div>
            </div>
        </>
    )

}
export default Traffic;
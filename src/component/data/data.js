import React, { useState } from 'react';
import Chart from "react-apexcharts";
import './data.css'
function Data() {
    const [state, setState] = useState({
        options: {
            chart: {
                id: "basic-bar",
            },
            xaxis: {
                categories: ['Feb', 'March', 'Apr', 'May', 'June', 'July']
            },
            yaxis: {
                tickAmount: 5,
                min: 0,
                max: 50000000
            },
            stroke: {
                curve: "smooth",
              },
        },
        series: [
            {
                name: "series-1",
                data: [20050000, 30050000, 20050000, 30050000, 24000033, 30000000]
            },
        ]
    })

    return (
        <>
            <div className='data1'>
                <div className='total'>
                    <h2>Total visits</h2>
                    <h1>42,43M</h1>
                </div>
                <hr></hr>
                <div className="mixed-chart">
                    <Chart
                        options={state.options}
                        series={state.series}
                        type="line"
                        width="400"
                        height={230}
                    />
                </div>
            </div>
        </>
    )
}
export default Data;
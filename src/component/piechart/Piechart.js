import React from 'react'
import './piechart.css'
import Chart from 'react-apexcharts'
const Piechart = () => {
    return (
        <div className='pie-chart'>
            <h4>Balance statistics</h4>
            <Chart
                type='donut'
                width={370}
                height={300}
                series={[1223, 414]}
                options={{
                    labels: ['Spent', 'Referral',],
                    colors: ['#4424a7', '#09c0d7', '#e4e9f2'],
                    plotOptions:{
                        pie:{
                            donut:{
                                labels:{
                                    show:true,
                                    name:{
                                        text:'hello'
                                    },
                                    value:{
                                        text:'fdkfja'
                                    }
                                }
                            }
                        }
                    }
                }}
            />
        </div>
    )
}

export default Piechart
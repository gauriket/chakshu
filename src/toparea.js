import React, { Component } from "react";
import Chart from "react-apexcharts";

export class Toparea extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        data: [400, 200, 1200, 1000, 500], colors: ['#EB150E']
      }],
      options: {
        chart: {
          type: 'bar',
          height: 250,
          colors: ['#EB150E']
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
            height: 50
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['Kothrud', 'Warje', 'Peth', 'PCMC', 'Hinjewadi'
          ],
        }
      },


    };
  }



  render() {
    return (


      <div id="chart">
        <Chart options={this.state.options} series={this.state.series} type="bar" height={150} />
      </div>
    );
  }
}

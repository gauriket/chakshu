import React, { Component } from "react";
import Chart from "react-apexcharts";

export class Toparea extends Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          data: [400,  200, 1200, 1300]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: ['Kothrud', 'Warje', 'Peth', 'Pimpri-Chinchwad'
            ],
          }
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart">
<Chart options={this.state.options} series={this.state.series} type="bar" height={350} />
</div>
);
}
}

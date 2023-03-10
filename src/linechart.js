import React, { Component } from "react";
import Chart from "react-apexcharts";

 export class Bar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91, 60, 70, 91, 45, 50]
        }
      ],
      colors:['#CCCACC '],
      fill: {
        opacity: 1,
        type: 'solid'
      }
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
              color="grey"
            />
          </div>
        </div>
      </div>
    );
  }
}

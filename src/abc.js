import React, { Component } from 'react';
import Chart from 'react-apexcharts'

export class Donut extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {},
      series: [44, 55, 141],
      labels: ['A', 'B', 'C']
    }
  }

  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
      </div>
    );
  }
}

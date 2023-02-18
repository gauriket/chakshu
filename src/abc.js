import React, { Component } from 'react';
import Chart from 'react-apexcharts'

export class Donut extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {colors: ['#EB150E', '#BF3434', '#FF9E9E']},
      series: [44, 55, 141],
      labels: ['Severe', 'Moderate', 'Low'],
      categories: ['Severe', 'Moderate', 'Low']
    }
  }

  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="400" />
      </div>
    );
  }
}

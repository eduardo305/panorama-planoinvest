import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getLineChartData } from '../actions/index';
import { wallet_data } from '../../data/wallet_performance_data';

class WalletPerformance extends Component {

  componentWillMount() {
    this.props.getLineChartData('data/wallet_performance.json');
  }

  componentDidUpdate() {
      this.buildChart.bind(this)();
  }

  formatChartData(chartData) {
    return chartData.map((data) => {
      data.item1 = parseInt(data.item1);
      data.item2 = parseInt(data.item2);

      return data;
    });
  }

  buildChart() {
    // AREA CHART
    var area = new Morris.Line({
      element: 'revenue-chart',
      resize: true,
      data: wallet_data,
      xkey: 'y',
      ykeys: ['item1', 'item2'],
      labels: ['Item 1', 'Item 2'],
      lineColors: ['#a0d0e0', '#3c8dbc'],
      hideHover: 'auto'
    });
  }

  render() {

    if (!this.props.walletPerformance) {
      return;
    }

    return (
      <div className="nav-tabs-custom">
        {/* Tabs within a box */}
        <ul className="nav nav-tabs pull-right">
          <li className="active"><a href="#revenue-chart" data-toggle="tab">Area</a></li>

          <li className="pull-left header"><i className="fa fa-inbox" /> Nossa carteira</li>
        </ul>
        <div className="tab-content no-padding">
          {/* Morris chart - Sales */}
          <div className="chart tab-pane active" id="revenue-chart" style={{position: 'relative', height: 300}} />
          <div className="chart tab-pane" id="sales-chart" style={{position: 'relative', height: 300}} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { walletPerformance: state.walletPerformance };
}

export default connect(mapStateToProps, { getLineChartData })(WalletPerformance);

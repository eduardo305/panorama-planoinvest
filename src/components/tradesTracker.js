import React, { Component } from 'react';

import TradeList from './tradeList';

class TradesTracker extends Component {

  render() {
    return (
      <div>
        <TradeList url="data/ended_trades.json" componentId="ended"/>
      </div>
    );
  }
}

export default TradesTracker;

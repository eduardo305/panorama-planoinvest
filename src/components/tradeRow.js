import React, { Component } from 'react';

class TradeRow extends Component {

  render() {
    return (
      <tr key={ this.props.rowid }>
        <td>{ this.props.trade.company }</td>
        <td>{ this.props.trade.stock }</td>
        <td>{ this.props.trade.buy } </td>
        <td>{ this.props.trade.price }</td>
        <td>{ this.props.trade.stoploss }</td>
        <td>{ this.props.trade.goal }</td>
        <td>{ this.props.trade.sell }</td>
        <td>{ this.props.trade.sellprice }</td>
        <td>{ this.props.trade.result }</td>
      </tr>
    )
  }
}

export default TradeRow;

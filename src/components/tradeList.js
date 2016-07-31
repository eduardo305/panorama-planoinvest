import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTrades } from '../actions/index';
import TradeRow from './tradeRow';

class TradeList extends Component {
  componentWillMount() {
    this.props.getTrades(this.props.url);
  }

  componentDidUpdate() {
    const that = this;

    $(function () {
      $('#' + that.props.componentId).DataTable({
        "paging": true,
        "lengthChange": false,
        "searching": false,
        "ordering": false,
        "info": true,
        "autoWidth": false
      });
    });
  }

  renderTradeRow() {
    if (!this.props.trades) {
      return;
    }

    return this.props.trades.map( (trade, i) => {
      return (
        <TradeRow trade={ trade } key={ i } />
      );
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="box scrollable">
            <div className="box-header">
              <h3 className="box-title">Finalizados</h3>
            </div>
            {/* /.box-header */}
            <div className="box-body">
              <table id={ this.props.componentId } className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Empresa</th>
                    <th>Ação</th>
                    <th>Compra</th>
                    <th>Preço</th>
                    <th>Stop Loss</th>
                    <th>Objetivo</th>
                    <th>Venda</th>
                    <th>Preço</th>
                    <th>Resultado</th>
                  </tr>
                </thead>

                <tbody>
                  { this.renderTradeRow() }
                </tbody>

              </table>
            </div>
            {/* /.box-body */}
          </div>
          {/* /.box */}
        </div>
      </div>

    );
  }

}

function mapStateToProps(state) {
  return { trades: state.ended_trades.ended_trades };
}

export default connect(mapStateToProps, { getTrades })(TradeList);

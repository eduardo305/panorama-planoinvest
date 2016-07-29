import React, { Component } from 'react';

import TradesTracker from './tradesTracker';

class Panorama extends Component {

  componentDidMount() {

    var graphInit = $(function () {
      "use strict";

      // AREA CHART
      var area = new Morris.Area({
        element: 'revenue-chart',
        resize: true,
        data: [
          {y: '2011 Q1', item1: 2666, item2: 2666},
          {y: '2011 Q2', item1: 2778, item2: 2294},
          {y: '2011 Q3', item1: 4912, item2: 1969},
          {y: '2011 Q4', item1: 3767, item2: 3597},
          {y: '2012 Q1', item1: 6810, item2: 1914},
          {y: '2012 Q2', item1: 5670, item2: 4293},
          {y: '2012 Q3', item1: 4820, item2: 3795},
          {y: '2012 Q4', item1: 15073, item2: 5967},
          {y: '2013 Q1', item1: 10687, item2: 4460},
          {y: '2013 Q2', item1: 8432, item2: 5713}
        ],
        xkey: 'y',
        ykeys: ['item1', 'item2'],
        labels: ['Item 1', 'Item 2'],
        lineColors: ['#a0d0e0', '#3c8dbc'],
        hideHover: 'auto'
      });
    });
  }

  render() {
    return (
      <div>
        {/* Small boxes (Stat box) */}
        <div className="row hidden-md-up">
          <div className="col-lg-3 col-xs-6">
            {/* small box */}
            <div className="small-box bg-aqua">
              <div className="inner">
                <h3>R$ 40.000,00</h3>
                <p>Investimento Inicial</p>
              </div>
              <div className="icon">
                <i className="ion ion-bag" />
              </div>
              <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right" /></a>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-xs-6">
            {/* small box */}
            <div className="small-box bg-yellow">
              <div className="inner">
                <h3>R$ 43.840,00</h3>
                <p>Capital Atualizado</p>
              </div>
              <div className="icon">
                <i className="ion ion-stats-bars" />
              </div>
              <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right" /></a>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-6 col-xs-12">
            {/* small box */}
            <div className="small-box bg-green">
              <div className="inner">
                <h3>+9.60<sup style={{fontSize: 20}}>%</sup></h3>
                <p>Sobre um investimento de <br />R$ 40.000,00 iniciados no mês de Junho de 2016</p>
              </div>
              <div className="icon">
                <i className="ion ion-person-add" />
              </div>
              <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right" /></a>
            </div>
          </div>
        </div>


        <div className="row">
          {/* Left col */}
          <section className="col-lg-7 connectedSortable">
            {/* Custom tabs (Charts with tabs)*/}
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
          </section>

          <section class="col-lg-5 connectedSortable">
            {/* ./col */}
            <div className="col-lg-5 col-xs-12">
              {/* Small boxes (Stat box) */}
              <div className="row hidden-sm-down">
                <div className="col-lg-6 col-xs-6">
                  {/* small box */}
                  <div className="small-box bg-aqua">
                    <div className="inner">
                      <h3>R$ 40.000,00</h3>
                      <p>Investimento Inicial</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-bag" />
                    </div>
                    <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right" /></a>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-6 col-xs-6">
                  {/* small box */}
                  <div className="small-box bg-yellow">
                    <div className="inner">
                      <h3>R$ 43.840,00</h3>
                      <p>Capital Atualizado</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-stats-bars" />
                    </div>
                    <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right" /></a>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-12 col-xs-12">
                  {/* small box */}
                  <div className="small-box bg-green">
                    <div className="inner">
                      <h3>+9.60<sup style={{fontSize: 20}}>%</sup></h3>
                      <p>Sobre um investimento de <br />R$ 40.000,00 iniciados no mês de Junho de 2016</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-person-add" />
                    </div>
                    <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right" /></a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <TradesTracker />

      </div>
    );
  }
}

export default Panorama;

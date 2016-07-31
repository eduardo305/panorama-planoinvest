import React, { Component } from 'react';

import TradesTracker from './tradesTracker';
import WalletPerformance from './walletPerformance';

class Panorama extends Component {

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
            <WalletPerformance />
          </section>

          <section className="col-lg-5 connectedSortable hidden-sm-down">
            {/* ./col */}
            <div className="col-lg-12 col-xs-12">
              {/* Small boxes (Stat box) */}
              <div className="row">
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

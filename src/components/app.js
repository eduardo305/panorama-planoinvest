import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './header';

class App extends Component {
  render() {
    return (

      <div>
        <Header />
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <h1>
              Panorama Matinal
              <small>Iniciamos um investimento de R$ 40.000,00 em Junho de 2016</small>
            </h1>
            <ol className="breadcrumb">
              <li><a href="#"><i className="fa fa-dashboard" /> Level</a></li>
              <li className="active">Here</li>
            </ol>
          </section>
          {/* Main content */}
          <section className="content">
            {/* Your Page Content Here */}
            { this.props.children }
          </section>
          {/* /.content */}
        </div>
        {/* /.content-wrapper */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { navVisible: state.nav.visible };
}

export default connect(mapStateToProps)(App);

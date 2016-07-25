import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div id="pl-main-content">
          { this.props.children }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { navVisible: state.nav.visible };
}

export default connect(mapStateToProps)(App);

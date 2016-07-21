import React, { Component } from 'react';
import { connect } from  'react-redux';
import NavItem from './navItem';

class Nav extends Component {

  render() {
    return (
      <div className="pl-mobile-nav">
        <div className="pl-nav-items-wrapper">
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default connect(null)(Nav);

import React, { Component } from 'react';
import { Link } from 'react-router';

class NavItem extends Component {

  render() {
    return (
      <div className="pl-nav-item"><Link to='/'>{ this.props.children }</Link></div>
    );
  }

}

export default NavItem;

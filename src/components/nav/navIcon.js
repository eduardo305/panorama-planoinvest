import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class NavIcon extends Component {

  toggleNav() {
    this.props.toggleNav();
  }

  render() {
    return (
      <div className="pl-hamburguer-icon" onClick={ this.toggleNav.bind(this) }>
        <span>
          &#9776;
        </span>
      </div>
    );
  }
}

export default connect(null, actions)(NavIcon);

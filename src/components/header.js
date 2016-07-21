import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import NavIcon from './nav/navIcon';
import Nav from './nav/nav';
import NavItem from './nav/navItem';

class Header extends Component {

  renderLinks() {
    if (this.props.authenticated) {
      return (
        <Link to="/signout" key="1">sair</Link>
      );
    } else {
      return [
        <Link to="/signin" key="2">entrar</Link>
      ];
    }
  }

  render() {
    return (
      <div className="pl-header-wrapper">
        <header>
          <div className="pl-header-inner-wrapper">
            <Link to="/" className="pl-logo-link"><img src="/img/logo-yellow.png" alt="logo" className="pl-logo-image"></img></Link>
            <nav className="pl-navbar">
              <ul>
                <li><Link to="/">Quem Somos</Link></li>
                <li><Link to="/">Panorama Matinal</Link></li>
              </ul>
            </nav>
            <div className="pl-auth-wrapper">
              { this.renderLinks() }
            </div>
            <NavIcon />
          </div>
        </header>
        <Nav ref="mobilenav">
          <NavItem url="/">Quem Somos</NavItem>
          <NavItem url="/">Panorama Matinal</NavItem>
          <NavItem url={ this.props.authenticated ? '/signout' : '/signin' }>
            { this.props.authenticated ? 'entrar' : 'sair' }
          </NavItem>
        </Nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);

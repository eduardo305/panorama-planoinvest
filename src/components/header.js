import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const Menu = require('react-burger-menu').slide;

//import NavIcon from './nav/navIcon';
//import Nav from './nav/nav';
//import NavItem from './nav/navItem';

class Header extends Component {

  renderLinks() {
    if (this.props.authenticated) {
      return (
        <Link to="/signout" className="menu-item" key="1">Sair</Link>
      );
    } else {
      return [
        <Link to="/signin" className="menu-item" key="2">Entrar</Link>
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
          </div>
          <Menu right>
            <Link to="/" className="menu-item">Quem Somos</Link>
            <Link to="/" className="menu-item">Panorama Matinal</Link>
            { this.renderLinks() }
          </Menu>
        </header>

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

import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

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
      <header>
        <div className="pl-header-wrapper">
          <Link to="/" className="pl-logo-link"><img src="" alt="logo" className="pl-logo-image"></img></Link>
          <nav className="pl-navbar">
            <ul>
              <li>Quem Somos</li>
              <li>Panorama Matinal</li>
            </ul>
          </nav>
          <div className="pl-auth-wrapper">
            { this.renderLinks() }
          </div>
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);

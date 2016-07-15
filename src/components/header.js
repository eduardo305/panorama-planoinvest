import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {

  render() {
    return (
      <header>
        <div className="pl-header-wrapper">
          <nav className="pl-navbar">
            <ul>
              <li>Quem Somos</li>
              <li>Panorama Matinal</li>
            </ul>
          </nav>
          <Link to="/signin">Entrar</Link>
          <Link to="/signup">Cadastrar</Link>
        </div>
      </header>
    );
  }
}

export default Header;

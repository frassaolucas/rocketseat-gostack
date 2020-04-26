import React from "react";

import "./styles.css";

import facebookLogo from "../../assets/facebook.png";
import iconHelp from "../../assets/icon-help.png";

function Header() {
  return (
    <header>
      <div className="container">
        <img src={facebookLogo} alt="Facebook Logo" />

        <a href="">
          <span>Meu Perfil</span>
          <img src={iconHelp} alt="Help" />
        </a>
      </div>
    </header>
  );
}

export default Header;

import React from "react";

import logoImg from "../../assets/images/logo.svg";

import "./styles.css";

function UserInfo() {
  return (
    <div id="side-container">
      <img src={logoImg} alt="Proffy" />
      <div className="text-block">
        <p>Sua plataforma de estudos online</p>
      </div>
    </div>
  );
}

export default UserInfo;

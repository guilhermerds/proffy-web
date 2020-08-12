import React from "react";
import { Link } from "react-router-dom";

import successIcon from "../../assets/images/icons/success-check-icon.svg";

import "./styles.css";

function SentEmail() {
  return (
    <main className="success">
      <img src={successIcon} alt="Check" />
      <h1>Redefinição enviada!</h1>
      <p>
        Boa, agora é só checar o e-mail que foi enviado para você redefinir sua
        senha e aproveitar os estudos.
      </p>

      <Link className="success-button" to="/">
        Voltar ao login
      </Link>
    </main>
  );
}

export default SentEmail;

import React, { useState, useEffect, FormEvent } from "react";
import { Link, useHistory } from "react-router-dom";

import UserInfo from "../../components/UserInfo";

import InputLogin from "../../components/InputLogin";

import backIcon from "../../assets/images/icons/back.svg";

import "./styles.css";

function ForgotPass() {
  const history = useHistory();
  const [isActive, setIsActive] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (email.trim() !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [email]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (isActive) {
      history.push("/sent-email");
    }
  }

  return (
    <main className="forgot-pass">
      <div className="forgot-pass-container">
        <header className="top-bar-container">
          <Link to="/">
            <img src={backIcon} alt="Voltar" />
          </Link>
        </header>
        <form id="forgot-pass-form" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Eita, esqueceu sua senha?</legend>
            <p className="legend-subtitle">
              Não esquenta, vamos dar um jeito nisso.
            </p>
            <InputLogin
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
            />
            <button
              className={
                isActive ? "button-submit-active" : "button-submit-inactive"
              }
            >
              Enviar
            </button>
          </fieldset>
        </form>
      </div>
      <div className="forgot-pass-side">
        <UserInfo />
      </div>
    </main>
  );
}

export default ForgotPass;

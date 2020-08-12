import React, { useState, useEffect, FormEvent } from "react";
import { Link } from "react-router-dom";

import UserInfo from "../../components/UserInfo";
import InputLogin from "../../components/InputLogin";
import InputPass from "../../components/InputPass";

import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";
import checkIcon from "../../assets/images/icons/check-icon.svg";

import "./styles.css";

function Login() {
  const [isChecked, setIsChecked] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function handleCheckbox() {
    setIsChecked(!isChecked);
  }

  useEffect(() => {
    if (email.trim() !== "" && pass.trim() !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [email, pass]);

  function handleLogin(e: FormEvent) {
    e.preventDefault();

    if (isActive) {
      console.log("Clicko");
    } else {
      console.log("não deu");
    }
  }

  return (
    <main>
      <div className="login-side">
        <UserInfo />
      </div>
      <div className="login-container">
        <form id="login-user" onSubmit={handleLogin}>
          <fieldset>
            <legend className="login-text">Fazer login</legend>

            <InputLogin
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
            />
            <InputPass
              name="pass"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
              placeholder="Senha"
            />
            <div id="form-footer">
              <div className="remember-check">
                <button type="button" onClick={handleCheckbox}>
                  <img
                    src={checkIcon}
                    alt="checked img"
                    className={isChecked ? "" : "not-checked"}
                  />
                </button>
                <p onClick={handleCheckbox}>Lembrar-me</p>
              </div>
              <Link to="/forgot-pass" className="forget-pass-link">
                Esqueci minha senha
              </Link>
            </div>
            <button
              type="submit"
              className={
                isActive ? "login-button-active" : "login-button-inactive"
              }
            >
              Entrar
            </button>
          </fieldset>
        </form>

        <footer>
          <div className="footer-label">
            <p>Não tem conta?</p>
            <Link className="footer-link" to="/sign-up">
              Cadastre-se
            </Link>
          </div>
          <div className="footer-label-small">
            É de graça <img src={purpleHeartIcon} alt="coração roxo" />
          </div>
        </footer>
      </div>
    </main>
  );
}

export default Login;

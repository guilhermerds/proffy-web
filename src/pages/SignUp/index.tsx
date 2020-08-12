import React, { useEffect, useState, FormEvent } from "react";
import { Link, useHistory } from "react-router-dom";

import UserInfo from "../../components/UserInfo";

import backIcon from "../../assets/images/icons/back.svg";

import "./styles.css";
import InputLogin from "../../components/InputLogin";
import InputPass from "../../components/InputPass";

function SignUp() {
  const history = useHistory();
  const [isActive, setIsActive] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (
      email.trim() !== "" &&
      pass.trim() !== "" &&
      name.trim() !== "" &&
      lastName.trim() !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [email, pass, name, lastName]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (isActive) {
      history.push("/");
    }
  }

  return (
    <main>
      <div className="sign-up-container">
        <header className="top-bar-container">
          <Link to="/">
            <img src={backIcon} alt="Voltar" />
          </Link>
        </header>
        <form id="sign-up-form" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Cadastro</legend>
            <p className="legend-subtitle">
              Preencha todos os dados abaixo para começar.
            </p>

            <InputLogin
              name="first-name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Nome"
            />
            <InputLogin
              name="last-name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder="Sobrenome"
            />
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

            <button
              type="submit"
              className={
                isActive ? "button-submit-active" : "button-submit-inactive"
              }
            >
              Concluir cadastro
            </button>
          </fieldset>
        </form>
      </div>
      <div className="float">
        <UserInfo />
      </div>
    </main>
  );
}

export default SignUp;

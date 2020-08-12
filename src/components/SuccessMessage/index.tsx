import React from "react";
import { Link } from "react-router-dom";

import successIcon from "../../assets/images/icons/success-check-icon.svg";

import "./styles.css";

interface SuccessMessageProps {
  title: string;
  message: string;
  link: string;
  buttonText: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({
  title,
  message,
  link,
  buttonText,
}) => {
  return (
    <section className="success">
      <img src={successIcon} alt="Check" />
      <h1>{title}</h1>
      <p>{message}</p>

      <Link className="success-button" to={link}>
        {buttonText}
      </Link>
    </section>
  );
};

export default SuccessMessage;

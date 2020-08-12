import React, { InputHTMLAttributes, useState } from "react";

import eyeIcon from "../../assets/images/icons/eye.svg";
import blindEyeIcon from "../../assets/images/icons/blind-eye.svg";

import "./styles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
}

const InputPass: React.FC<InputProps> = ({ name, placeholder, ...rest }) => {
  const [isPass, setIsPass] = useState(true);

  function handleShowPass() {
    setIsPass(!isPass);
  }

  return (
    <div className="input-pass-block">
      <input
        type={isPass ? "password" : "text"}
        id={name}
        placeholder={placeholder}
        {...rest}
      />
      <label>{placeholder}</label>
      <button className="eye-button" type="button" onClick={handleShowPass}>
        <img src={isPass ? eyeIcon : blindEyeIcon} alt="Mostrar senha" />
      </button>
    </div>
  );
};

export default InputPass;

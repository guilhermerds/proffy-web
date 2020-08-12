import React, { InputHTMLAttributes } from "react";

import "./styles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
}

const InputLogin: React.FC<InputProps> = ({ name, placeholder, ...rest }) => {
  return (
    <div className="input-block">
      <input type="text" id={name} placeholder={placeholder} {...rest} />
      <label>{placeholder}</label>
    </div>
  );
};

export default InputLogin;

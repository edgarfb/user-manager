import React from "react";
import css from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={css.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;

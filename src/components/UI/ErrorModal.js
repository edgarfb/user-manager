import React from "react";
import css from "./ErrorModal.module.css";
import Card from "../UI/Card";
import Button from "./Button/Button";

const BackDrop = (props) => {
  return (
    <div onClick={props.onClick} className={css.backdrop}>
      {props.children}
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <BackDrop onClick={props.onError}>
      <Card className={css.modal}>
        <header className={css.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={css.content}>
          <p>{props.content}</p>
        </div>
        <footer className={css.actions}>
          <Button onClick={props.onError}>Okay</Button>
        </footer>
      </Card>
    </BackDrop>
  );
};

export default ErrorModal;

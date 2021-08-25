import React from "react";
import Button from "../UI/Button";
import styles from "./UsersAdd.module.css";

export default function UsersAdd() {
  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="userName" className={styles.label}>
          User Name
        </label>
        <input type="text" id="userName" className={styles.input} />
      </div>
      <div className={styles.userAge}>
        <label className={styles.label} htmlFor="userAge">
          User Age
        </label>
        <input className={styles.input} type="text" id="userAge" />
      </div>

      <Button />
    </div>
  );
}

import React from "react";
import styles from "./button.module.scss";

interface IButtonProps {
  text: string;
  color: string;
}

export const ButtonRounded: React.FC<IButtonProps> = ({ text, color }) => {
  return (
    <button
      className={
        styles.button +
        " " +
        styles.button__type_rounded +
        " " +
        styles[`button__color_${color}`]
      }
    >
      {text}
    </button>
  );
};

export const Button: React.FC<IButtonProps> = ({ text, color }) => {
  return (
    <button
      className={
        `${styles.button} ${styles.button__type_normal}` +
        " " +
        styles[`button__color_${color}`]
      }
    >
      {text}
    </button>
  );
};

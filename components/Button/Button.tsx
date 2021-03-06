import React from "react";
import styles from "./button.module.scss";

interface IButtonProps {
  text: string;
  color?: string;
  onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
}

export const ButtonRounded: React.FC<IButtonProps> = ({ text, color="primary_light", onClick }) => {
  return (
    <button
      className={
        styles.button +
        " " +
        styles.button__type_rounded +
        " " +
        styles[`button__color_${color}`]
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const Button: React.FC<IButtonProps> = ({ text, color="primary_light", onClick }) => {
  return (
    <button
      className={
        `${styles.button} ${styles.button__type_normal}` +
        " " +
        styles[`button__color_${color}`]
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
};

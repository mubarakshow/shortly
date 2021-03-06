import React from "react";
import styles from "./button.module.scss";

interface IButtonProps {
  text: string;
  color?: string;
  onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
  size?: string;
}

export const ButtonRounded: React.FC<IButtonProps> = ({ text, color="primary_light", size, onClick }) => {
  return (
    <button
      className={
        styles.button +
        " " +
        styles.button__type_rounded +
        " " +
        styles[`button__color_${color}`] +
        " " +
        styles[`button__size_${size}`]
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const Button: React.FC<IButtonProps> = ({ text, color="primary_light", size, onClick }) => {
  return (
    <button
      className={
        `${styles.button} ${styles.button__type_normal}` +
        " " +
        styles[`button__color_${color}`] +
        " " +
        styles[`button__size_${size}`]
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
};

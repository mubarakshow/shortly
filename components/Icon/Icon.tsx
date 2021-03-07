import styles from "./icon.module.scss";
import React from "react";

type svgElement = SVGElement;

export interface IiconProps {
  iconImage?: string;
  iconColor?: string | null;
  iconBgColor?: string | null;
  iconAltText?: string;
}

const Icon: React.FC<IiconProps> = ({
  iconBgColor,
  iconImage,
  iconColor,
  iconAltText,
}) => {
  return (
    <div
      className={
        styles.icon__container +
        " " +
        styles[
          `icon__container__color_${iconBgColor ? iconBgColor : "primary_dark"}`
        ]
      }
    >
      <img 
        className={styles.icon__image + " " + styles[`icon__image_color`]} 
        src={iconImage} alt={iconAltText} />
    </div>
  );
};

export default Icon;

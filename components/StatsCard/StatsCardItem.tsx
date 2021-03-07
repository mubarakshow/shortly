import React from "react";
import Icon, { IiconProps } from "../Icon/Icon";
import styles from "./card-item.module.scss";

export interface IStatsCardProps extends IiconProps {
  cardTitle: string;
  cardDescription: string;
}

const StatsCardItem: React.FC<IStatsCardProps> = ({
  iconImage,
  iconColor,
  iconBgColor,
  iconAltText,
  cardTitle,
  cardDescription,
}) => {
  return (
    <div className={styles.statsCard}>
      {/* ICON */}
      <div className={styles.statsCard__icon}>
        <Icon
          iconImage={iconImage}
          iconColor={iconColor}
          iconBgColor={iconBgColor}
          iconAltText={iconAltText}
        />
      </div>
      <div className={styles.statsCard__text}>
        {/* TITLE */}
        <h3 className={styles.statsCard__text_title}>{cardTitle}</h3>
        <p className={styles.statsCard__text_description}>{cardDescription}</p>
      </div>
    </div>
  );
};

export default StatsCardItem;

import React from "react";
import StatsCardItem, { IStatsCardProps } from "./StatsCardItem";
import styles from "./card-list.module.scss";

interface IStatsCardListProps {
  data: Array<IStatsCardProps>;
}

const StatsCardList: React.FC<IStatsCardListProps> = ({ data }) => {
  return (
    <div className={styles.cardList__container}>
      {data.map((item, i) =>
        item ? (
          <StatsCardItem
            key={i}
            iconImage={item.iconImage}
            iconBgColor={item.iconBgColor}
            iconColor={item.iconColor}
            iconAltText={item.iconAltText}
            cardTitle={item.cardTitle}
            cardDescription={item.cardDescription}
          />
        ) : (
          ""
        )
      )}
      <div className={styles.cardList__container_line}></div>
    </div>
  );
};

export default StatsCardList;

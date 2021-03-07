import React, { useEffect, useRef, useState } from "react";
import styles from "./shortner-section.module.scss";
import LinkShortener from "../../../../components/LinkShortener/LinkShortener";
import LinkHistory, { ILinkHistoryProps } from "../../../../components/LinksHistory/LinkHistory";
import StatsCardList from "../../../../components/StatsCard/StatsCardList";
import { cardData } from "../../../../components/StatsCard/card-data";

// interface IShortnerSectionProps {
//   shortenedLinksHistory: ILinkHistoryProps
// }


const ShortenerSection: React.FC = () => {
  const [historyData, setHistoryData]= useState([])
  
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('shortLinks') || "{}");
    setHistoryData(data)
  }, [])

  // Could be used to simulate realtime update.
  // useEffect(() => {}, [historyData])
  
  return (
    // LINK SHORTNER FORM & SHORTENED LINK HISTORY
    <section className={styles.shortner__section}>
      <section className={styles.shortner__section_shortner}>
        <div className={styles.shortner_textfield}>
          <LinkShortener />
        </div>
        <div className={styles.shortner__history}>
          <LinkHistory data={historyData}  />
        </div>
      </section>

      {/* ADVANCED STATS */}
      <section className={styles.shortner__section_stats}>
        <div className={styles.stats__texts}>
          <h2 className={styles.stats__texts_title}>
            Advanced Statistics
          </h2>
          <p className={styles.stats__texts_subtitle}>
            Track how your links are performing across the web with our advanced statistics dashboard.
          </p>
        </div>
        <div className={styles.stats__cards}>
          <StatsCardList data={cardData} />
        </div>
      </section>
    </section>
  );
};

export default ShortenerSection;

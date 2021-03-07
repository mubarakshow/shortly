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
      <section className="shortner__section_stats">
        <div className="stats__texs">
          <h2 className="stats__texts_title"></h2>
          <p className="stats__texts_subtitle"></p>
        </div>
        <div className="stats__cards">
          <StatsCardList data={cardData} />
        </div>
      </section>
    </section>
  );
};

export default ShortenerSection;

import React, { useState } from "react";
import styles from "./shortner-section.module.scss";
import LinkShortener from "../../../../components/LinkShortener/LinkShortener";

const ShortenerSection = () => {
  return (
    // LINK SHORTNER FORM & SHORTENED LINK HISTORY
    <section className={styles.shortner__section}>
      <section className={styles.shortner__section_shortner}>
        <div className={styles.shortner_textfield}>
          <LinkShortener />
        </div>
        <div className={styles.shortner__history}>
          
        </div>
      </section>

      {/* ADVANCED STATS */}
      <section className="shortner__section_stats">
        <div className="stats__texs">
          <h2 className="stats__texts_title"></h2>
          <p className="stats__texts_subtitle"></p>
        </div>
        <div className="stats__cards">
          {/* <CardList cardsData={data} /> */}
        </div>
      </section>
    </section>
  );
};

export default ShortenerSection;

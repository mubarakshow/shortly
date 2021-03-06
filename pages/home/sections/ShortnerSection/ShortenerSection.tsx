import React, { useState } from "react";
import styles from "./shortner-section.module.scss";
// import CardList from '../../../../components/Card/CardList';
import { TextField } from "../../../../components/Form";
import { strict } from "assert";
import { Button } from "../../../../components/Button/Button";

const ShortenerSection = () => {
  const [value, setValue] = useState<string>("");

  return (
    // LINK SHORTNER FORM & SHORTENED LINK HISTORY
    <section className={styles.shortner__section}>
      <section className={styles.shortner__section_shortner}>
        <div className={styles.shortner_textfield}>
          <div>
            <TextField
              name="url"
              id="urlInput"
              value={value}
              label="Url Input"
              placeholder="type a valid url here..."
              onChange={(e) => {
                console.log("value", value);
                setValue(e.target.value);
              }}
            />
          </div>
          <div>
            <Button text="Shorten It!" onClick={e => {
              e.preventDefault()
              let url: string = `https://api.shrtco.de/v2/shorten?url=${value}` 
              fetch(url)
                .then(res => res.json())
                .then(({ result}) => {
                  if(!localStorage.getItem('shortLinks')) {
                    console.log("shortLinks", result)
                    localStorage.setItem('shortLinks', JSON.stringify([result]))
                  } else {
                    const storedLinks = JSON.parse(localStorage.getItem('shortLinks') || "{}");
                    storedLinks.push(result)
                    localStorage.setItem('shortLinks', JSON.stringify(storedLinks))
                  }
                })
                .catch(err => {
                  console.log("error encountered while shortening link", err.message)
                })
            }} />
          </div>
        </div>
        <div className={styles.shortner__history}></div>
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

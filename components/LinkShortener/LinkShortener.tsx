import React, { useState } from "react";
import { Button } from "../Button/Button";
import { TextField } from "../Form/TextField";
import styles from "./link-shortener.module.scss";

const LinkShortener = () => {
  const [value, setValue] = useState<string>("");

  return (
    <div className={styles.shortener__container}>
      <div className={styles.shortener_textfield}>
        <TextField
          name="url"
          id="urlInput"
          value={value}
          placeholder="Shorten a link here..."
          onChange={(e) => {
            console.log("value", value);
            setValue(e.target.value);
          }}
        />
      </div>
      <div className={styles.shortener_button}>
        <Button
          text="Shorten It!"
          size="fullWidth"
          onClick={(e) => {
            let url: string = `https://api.shrtco.de/v2/shorten?url=${value}`;
            fetch(url)
              .then((res) => res.json())
              .then(({ result }) => {
                if (!localStorage.getItem("shortLinks")) {
                  console.log("shortLinks", result);
                  localStorage.setItem("shortLinks", JSON.stringify([result]));
                } else {
                  const storedLinks = JSON.parse(
                    localStorage.getItem("shortLinks") || "{}"
                  );
                  storedLinks.push(result);
                  localStorage.setItem(
                    "shortLinks",
                    JSON.stringify(storedLinks)
                  );
                }
              })
              .catch((err) => {
                console.log(
                  "error encountered while shortening link",
                  err.message
                );
              });
          }}
        />
      </div>
    </div>
  );
};

export default LinkShortener;

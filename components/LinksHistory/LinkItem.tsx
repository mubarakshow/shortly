import React, { useState } from "react";
import { Button } from "../Button/Button";
import styles from "./link-item.module.scss";

interface ILinkItemProp {
  originalLink: string;
  shortLink: string;
}

const LinkItem: React.FC<ILinkItemProp> = ({ originalLink, shortLink }) => {
  const [copied, setCopied] = useState<boolean>(false);

  return (
    <div className={styles.link__item}>
      <div className={styles.link__item_original}>
        <p>{originalLink}</p>
      </div>
      <div className={styles.link__item_shortened}>
        <p>{shortLink}</p>
        <Button
          text={copied ? "Copied!" : "Copy"}
          color={copied ? "primary_dark" : "primary_light"}
          size="fullWidth"
          onClick={(e) => {
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
            }, 5000);
          }}
        />
      </div>
      {/* <div className={styles.link__item_action}></div> */}
    </div>
  );
};
interface ILinkItemProp {}

export default LinkItem;

import React from 'react';
import LinkItem from './LinkItem';
import styles from './link-history.module.scss';

type ShortenedShape = {
  original_link: string;
  full_short_link2: string
}

export interface ILinkHistoryProps {
  data?: Array<ShortenedShape> | null;
}


const LinkHistory: React.FC<ILinkHistoryProps> = ({ data }) => {
  return (
    <div className={styles.link__history_container}>
      {data ? (
        data.map((item, i) => (
        <LinkItem
          key={i}
          originalLink={item.original_link}
          shortLink={item.full_short_link2}
        />))
      ) : ""}
    </div>
  )
}

export default LinkHistory

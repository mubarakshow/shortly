import React from "react";
import styles from "./footer.module.scss";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__logo}>
        <img src="/logo.svg" alt="shortly logo" />
      </div>
      <div className={styles.footer__links}>
        <ul className={styles.footer__links_features}>
          <li>Features</li>
          <li>Link Shortening</li>
          <li>Brand Links</li>
          <li>Analytics</li>
        </ul>
        <ul className={styles.footer__links_resources}>
          <li>Resources</li>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
        <ul className={styles.footer__links_company}>
          <li>Company</li>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul> 
      </div>
      <div className={styles.footer__icons}>
        <ul>
          <li>
            <img src="/icon-facebook.svg" alt="shortly facebook page" />
          </li>
          <li>
            <img src="/icon-twitter.svg" alt="shortly twitter page" />
          </li>
          <li>
            <img src="/icon-pinterest.svg" alt="shortly pinterest page" />
          </li>
          <li>
            <img src="/icon-instagram.svg" alt="shortly instagram page" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

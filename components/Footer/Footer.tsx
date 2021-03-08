import React from "react";
import styles from "./footer.module.scss";
import Logo from '../../public/logo.svg';
import TwitterIcon from '../../public/icon-twitter.svg';
import FacebookIcon from '../../public/icon-facebook.svg';
import InstagramIcon from '../../public/icon-instagram.svg';
import PinterestIcon from '../../public/icon-pinterest.svg';

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__logo}>
        {<Logo />}
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
            {<FacebookIcon />}
          </li>
          <li>
            {<TwitterIcon />}
          </li>
          <li>
            {<PinterestIcon />}
          </li>
          <li>
            {<InstagramIcon />}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

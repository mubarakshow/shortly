import Link from "next/link";
import styles from "./navbar.module.scss";
import { ButtonRounded } from "../Button/Button";
import MenuIcon from "../../public/icons-menu.svg";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__items_left}>
        <div className={styles.navbar__item_logo}>
          <img src="/logo.svg" alt="shortly logo" srcSet="" />
        </div>
        <div className={styles.navbar__item_links}>
          <ul>
            <li>
              <Link href="/">Features</Link>
            </li>
            <li>
              <Link href="/">Pricing</Link>
            </li>
            <li>
              <Link href="/">Resources</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.navbar__items_right}>
        <ul>
          <li>
            <Link href="/">Login</Link>
          </li>
          <li>
            <ButtonRounded text="Sign Up" color="primary_light" />
          </li>
          <li>
            <MenuIcon />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

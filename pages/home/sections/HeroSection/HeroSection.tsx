import { ButtonRounded } from "../../../../components/Button/Button";
import styles from "./hero-section.module.scss";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__text}>
        <div className={styles.hero__text}>
          <div className={styles.hero__text_main}>
            <h1 className={styles.hero__text_main_title}>
              More than just shorter links
            </h1>
            <p className={styles.hero__text_main_subtitle}>
              {" "}
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
          </div>
          <div className={styles.hero__text_btn}>
            <ButtonRounded text="Get Started" />
          </div>
        </div>
      </div>
      <div className={styles.hero__image}>
        <img src="/illustration-working.svg" alt="shortly hero image" srcSet="" />
      </div>
    </section>
  );
};

export default HeroSection;

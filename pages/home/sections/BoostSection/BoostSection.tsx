import React from "react";
import { ButtonRounded } from "../../../../components/Button/Button";
import styles from "./boost-section.module.scss";

const BoostSection: React.FC = () => {
  return (
    <section className={styles.boost__container}>
      <div className={styles.boost__container_item}>
        <h2>Boost your links today</h2>
        <ButtonRounded text="Get Started" />
      </div>
    </section>
  );
};

export default BoostSection;

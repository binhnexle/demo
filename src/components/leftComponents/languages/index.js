import React from "react";
import styles from "./styles.module.scss";
import Percentage from "./percentage";

function Languages({ languages }) {
  console.log(languages);
  return (
    <div className={styles.container}>
      <div className={styles.container_title}>Languages</div>

      {languages.map((item) => {
        return <Percentage title={item.title} percentage={item.percentage} />;
      })}
    </div>
  );
}

export default Languages;

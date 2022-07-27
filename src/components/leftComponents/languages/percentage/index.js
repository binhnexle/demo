import React from "react";
import styles from "./styles.module.scss";

function Percentage({ title, percentage }) {
  console.log(title);
  return (
    <div className={styles.container_content}>
      <div className={styles.container_content_title}>{title}</div>
      <div className={styles.container_content_percentage}>
        <div
          className={styles.content_percentage_showPercentage}
          style={{ width: `${percentage}%` }}
        />
        <div
          className={styles.content_percentage_hidePercentage}
          style={{ width: `${100 - percentage}%` }}
        />
      </div>
    </div>
  );
}

export default Percentage;

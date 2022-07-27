import React from "react";
import styles from "./styles.module.scss";

function Avatar({ avatar }) {
  return (
    <div className={styles.container}>
      <div className={styles.container_border}>
        <img
          className={styles.container_border_image}
          src={`images/avatar/${avatar}`}
          alt="Avatar"
        />
      </div>
    </div>
  );
}

export default Avatar;

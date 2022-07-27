import React from "react";
import styles from "./styles.module.scss";

function Contact({ tel, address, email }) {
  return (
    <div className={styles.container}>
      <div className={styles.container_title}>CONTACT</div>
      <div className={styles.container_contact}>
        <div className={styles.container_contact_icon}>
          <i className="fa-solid fa-mobile-screen-button" />
        </div>
        <div className={styles.container_contact_content}>{tel}</div>
      </div>
      <div className={styles.container_contact}>
        <div className={styles.container_contact_icon}>
          <i className="fa-solid fa-location-dot" />
        </div>
        <div className={styles.container_contact_content}>{address}</div>
      </div>
      <div className={styles.container_contact}>
        <div className={styles.container_contact_icon}>
          <i className="fa-solid fa-envelope" />
        </div>
        <div className={styles.container_contact_content}>{email}</div>
      </div>
    </div>
  );
}

export default Contact;

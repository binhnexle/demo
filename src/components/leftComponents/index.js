import React from "react";
import styles from "./styles.module.scss";

import Avatar from "./avatar";
import Contact from "./contact";
import Languages from "./languages";
import Skills from "./skills";

function LeftComponents({ avatar, contact, languages }) {
  return (
    <div className={styles.container}>
      <Avatar avatar={avatar.avatar} />
      <Contact
        tel={contact.tel}
        address={contact.address}
        email={contact.email}
      />
      <Languages languages={languages} />
      <Skills />
    </div>
  );
}

export default LeftComponents;

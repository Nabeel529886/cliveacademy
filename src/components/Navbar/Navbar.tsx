import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.root}>
      <div>
        <h4>CLIVEACADEMY</h4>
      </div>
      <ul className={styles.nav}>
        <li>courses</li>
        <li>pricing</li>
        <li>about</li>
        <li>contact</li>
      </ul>
    </div>
  );
};

export default Navbar;

import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.root}>
      <h5>CLIVEACADEMY</h5>
      <div>
        <h5>clive academy</h5>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <h5>Pricing</h5>
        <ul>
          <li>Basic</li>
          <li>Premium</li>
          <li>Business</li>
        </ul>
      </div>
      <div>
        <h5>contact</h5>
        <ul>
          <li>Email</li>
          <li>Linkedin</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
      <div>
        <h5>join our newsletter</h5>
        <div className={styles.newsletter}>
          <input type={"email"} />
          <button>SUBMIT</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

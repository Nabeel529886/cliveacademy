import React from "react";
import styles from "./Intro.module.css";
import introimg from "src/assets/intro.png";
import ibm from "src/assets/ibm.png";
import microsoft from "src/assets/microsoft.png";
import accenture from "src/assets/accenture.png";
import aws from "src/assets/aws.png";

const Intro = () => {
  return (
    <div className={styles.root}>
      <div className={styles.mainContainer}>
        <div className={styles.textSection}>
          <h1>
            Welcome to <br /> CLIVE ACADEMY
          </h1>
          <p>Learn today and change the world tomorrow</p>
          <button>GET STARTED</button>
        </div>
        <div className={styles.imageSection}>
          <img src={introimg} alt="Intro pic" width="400" />
        </div>
      </div>
      <div className={styles.sponsors}>
        <h4>OUR SPONSORS</h4>
        <div className={styles.sponsorsList}>
          <img src={ibm} alt={"ibm"} />
          <img src={microsoft} alt={"microsoft"} />
          <img src={accenture} alt={"accenture"} />
          <img src={aws} alt={"aws"} />
        </div>
      </div>
    </div>
  );
};

export default Intro;

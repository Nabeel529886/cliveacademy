import React from "react";
import styles from "./Explore.module.css";
import explore from "src/assets/explore.png";
import app from "src/assets/app.png";
import business from "src/assets/business.png";

const Explore = () => {
  return (
    <div className={styles.root}>
      <div className={styles.explore}>
        <div className={styles.imgContainer}>
          <img src={explore} alt="" />
        </div>
        <div className={styles.content}>
          <h1>Explore In-demand courses</h1>
          <p>2000+ courses and 500+ instructors to learn without any limits</p>
          <button>VIEW OUR PRICING</button>
        </div>
      </div>
      <div className={styles.app}>
        <div className={styles.imgContainer}>
          <img src={app} alt="" />
        </div>
        <div className={styles.content}>
          <h1>Get our App</h1>
          <p>
            Learn anywhere and anytime using our smartphone app. Download our
            App on Android and iOS.
          </p>
          <button>DOWNLOAD ON ANDROID</button> <br />
          <button>DOWNLOAD ON iOS</button>
        </div>
      </div>
      <div className={styles.business}>
        <div className={styles.imgContainer}>
          <img src={business} alt="" />
        </div>
        <div className={styles.content}>
          <h1>Clive Academy for Business</h1>
          <p>
            Get world-class training and development programs developed by top
            universities and companies. All on Clive Academy for Business.
          </p>
          <button>CLIVE ACADEMY FOR BUSINESS</button> <br />
          <button>CLIVE ACADEMY FOR ENTERPRISE</button>
        </div>
      </div>
    </div>
  );
};

export default Explore;

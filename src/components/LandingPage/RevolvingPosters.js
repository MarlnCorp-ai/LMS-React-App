import { Fragment } from "react";
import styles from "./styles/RevolvingPosters.module.css";
import applestore from "../../images/applestore.png";
import googleplay from "../../images/googleplay.png";
import companylogo from "../../images/companylogo.png";
import banner from "../../images/LandingPage/MainBanner.png";

function RevolvingPosters() {
  return (
    <Fragment>
      <div className={styles["revolving-posters"]}>
        <header>
          <h2>Meet peers that are already using Nexus Hive</h2>
        </header>
        <main>
          <div className={styles["image-container"]}>
            <div className={styles["image-scroll-wrapper"]}>
              <img src={googleplay} alt="some" />
              <img src={applestore} alt="some" />
              <img src={applestore} alt="some" />
              <img src={googleplay} alt="some" />
              <img src={applestore} alt="some" />
              <img src={googleplay} alt="some" />
              <img src={applestore} alt="some" />
              <img src={googleplay} alt="some" />
              <img src={applestore} alt="some" />
              <img src={googleplay} alt="some" />
              <img src={applestore} alt="some" />
              <img src={googleplay} alt="some" />
              <img src={applestore} alt="some" />
            </div>
          </div>
          <div className={styles["image-container"]}>
            <div className={styles["image-scroll-wrapper"]}>
              <img src={companylogo} alt="some" />
              <img src={banner} alt="some" />
              <img src={companylogo} alt="some" />
              <img src={banner} alt="some" />
              <img src={companylogo} alt="some" />
              <img src={banner} alt="some" />
              <img src={companylogo} alt="some" />
              <img src={banner} alt="some" />
              <img src={companylogo} alt="some" />
              <img src={banner} alt="some" />
              <img src={companylogo} alt="some" />
              <img src={banner} alt="some" />
              <img src={applestore} alt="some" />
              <img src={googleplay} alt="some" />
              <img src={applestore} alt="some" />
              <img src={googleplay} alt="some" />
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
}

// #F4F7FA
export default RevolvingPosters;

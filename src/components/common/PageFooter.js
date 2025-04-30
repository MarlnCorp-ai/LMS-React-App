import styles from "./styles/PageFooter.module.css";
import googleplay from "../../images/googleplay.png";
import applestore from "../../images/applestore.png"

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

function PageFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.column}>
          <h3 className={styles.heading}>Get in touch with us</h3>
          <div className={styles.contact}>
            <FaEnvelope className={styles.icon} />
            <a href="mailto:hello@marlncorp.com">Contact@marlncorp.ai</a>
          </div>
          <div className={styles.contact}>
            <FaPhone className={styles.icon} />
            <a href="tel:408-888-9109">408-888-9109</a>
          </div>
          <div className={styles.contact}>
            <FaMapMarkerAlt className={styles.icon} />
            <p>MarlnCorp Office</p>
          </div>
          <button className={styles.button}>
            Talk to our experts <span className={styles.arrow}>→</span>
          </button>
          <div className={styles.social}>
            <a href="#" className={styles.socialIcon}>
              <FaFacebookF />
            </a>
            <a href="#" className={styles.socialIcon}>
              <FaTwitter />
            </a>
            <a href="#" className={styles.socialIcon}>
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div className={styles.column}>
          <h3 className={styles.heading}>Solutions</h3>
          <ul className={styles.list}>
            <li>Employee development</li>
            <li>Compliance training</li>
            <li>Sales training</li>
            <li>Customer training</li>
            <li>Partner training</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3 className={styles.heading}>Products</h3>
          <ul className={styles.list}>
            <li>Nexushive LMS</li>
            <li>A1 Silicon Valley Training</li>
            <li>MARLN</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3 className={styles.heading}>Company</h3>
          <ul className={styles.list}>
            <li>About</li>
            <li>Careers</li>
            <li>Contact us</li>
            <li>Support</li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.appStores}>
          <span><img src={googleplay} alt="Get it on Google Play"/></span>
          <span><img src={applestore} alt="Download it on Apple Store" /></span>
        </div>
      </div>
    </footer>
  );
}

export default PageFooter;

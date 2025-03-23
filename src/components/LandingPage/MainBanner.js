import mainBanner from "../../images/LandingPage/MainBanner.png";
import styles from "./styles/MainBanner.module.css";

function MainBanner() {
  return <img src={mainBanner} alt="Main Banner" className={styles.image}/>
}

export default MainBanner;
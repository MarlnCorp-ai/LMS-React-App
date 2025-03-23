import styles from "./styles/HandsOnSection.module.css";
import handsOnImage from "../../images/LandingPage/HandsOn.png";

function HandsOnSection()
{
    return <img src={handsOnImage} alt="Hands On Courses" className={styles.image}/>
}

export default HandsOnSection;
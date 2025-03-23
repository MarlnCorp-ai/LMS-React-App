import tutorImages from "../../images/LandingPage/Tutors.png";
import styles from "./styles/Tutors.module.css";

function Tutors()
{
    return <img src={tutorImages} alt="Tutors" className={styles.image}/>
}

export default Tutors;
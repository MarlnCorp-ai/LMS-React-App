import styles from "./styles/TechSkillsSection.module.css";
import techSkillsImage from "../../images/LandingPage/TechSkills.png";

function TechSkillsSection()
{
    return <img src={techSkillsImage} alt="Tech Skills" className={styles.image}/>
}

export default TechSkillsSection;
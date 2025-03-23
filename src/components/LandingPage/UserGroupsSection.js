import userGroups from "../../images/LandingPage/UserGroups.png";
import styles from "./styles/UserGroupsSection.module.css";

function UserGroupsSection()
{
    return <img src={userGroups} alt="User Groups" className={styles.image}/>
}

export default UserGroupsSection;
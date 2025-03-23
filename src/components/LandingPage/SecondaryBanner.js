import styles from "./styles/SecondaryBanner.module.css";
import Button from "./Button";

function SecondaryBanner()
{
    return <div className={styles.banner}>
        <Button className={styles.button}>See NexusHive in action</Button>
    </div>
}

export default SecondaryBanner;
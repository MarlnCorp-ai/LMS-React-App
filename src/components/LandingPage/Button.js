import styles from "./styles/Button.module.css";
import rightArrow from "../../images/arrow_right_alt.png";

function Button({ children, className}) {
    const classes = `${styles.button} ${className}`
  return (
    <div className={classes}>
      <span>{children}</span>
      <div className={styles.arrow}>
        <img src={rightArrow} alt="Right Arrow"/>
      </div>
    </div>
  );
}

export default Button;

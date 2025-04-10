import styles from "./styles/Card.module.css";


const Card = ({ children, className, key}) => {
    const classes = `${styles.card} ${className}`;
  return (
    <div className={classes} key={key}>
      {children}
    </div>
  );
};

export default Card;

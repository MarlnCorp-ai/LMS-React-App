import styles from "./styles/Card.module.css";

const Card = ({ children, className }) => {
  const classes = `${styles.card} ${className}`;
  return (
    <div className={classes}>
      {children}
    </div>
  );
};

// likely temporarily making CardContent as a child component
const CardContent = ({ children, className }) => {
  const contentClasses = `${styles['card-content']} ${className || ''}`;
  return (
    <div className={contentClasses}>
      {children}
    </div>
  );
};

export { Card as default, CardContent };
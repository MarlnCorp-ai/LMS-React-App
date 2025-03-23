import Card from "../common/Card";
import plan1 from "../../images/SubscriptionPage/plan1.png";
import plan2 from "../../images/SubscriptionPage/plan2.png";
import plan3 from "../../images/SubscriptionPage/plan3.png";
import styles from "./styles/Plans.module.css"

function Plans() {
  return (
    <div className={styles["plans-available"]}>
      <Card>
        <img src={plan1} alt="plan1" className={styles.image}/>
      </Card>
      <Card>
        <img src={plan2} alt="plan2" />
      </Card>
      <Card>
        <img src={plan3} alt="plan3" />
      </Card>
    </div>
  );
}

export default Plans;

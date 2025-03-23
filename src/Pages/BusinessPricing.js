import { Fragment } from "react";
import Plans from "../components/SubscriptionPage/Plans";
import ComparePlans from "../components/SubscriptionPage/ComparePlans";

function BusinessPricing() {
    return (
      <Fragment>
        <main>
          <Plans />
          <ComparePlans />
        </main>
      </Fragment>
    );
  }
  
  export default BusinessPricing;
  
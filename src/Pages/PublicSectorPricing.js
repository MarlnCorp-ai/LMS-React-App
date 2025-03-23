import { Fragment } from "react";
import Plans from "../components/SubscriptionPage/Plans";
import ComparePlans from "../components/SubscriptionPage/ComparePlans";

function PublicSectorPricing() {
    return (
      <Fragment>
        <main>
          <Plans />
          <ComparePlans />
        </main>
      </Fragment>
    );
  }
  
  export default PublicSectorPricing;
  
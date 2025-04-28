import { useState } from "react";
import companylogo from "../../images/companylogo.png";

import SageChat from "../Sage/SageChat";

function Sage() {
  const [panelState, setPanelState] = useState("inactive");

  const clickHandler = () => {
    setPanelState((state) => (state === "inactive" ? "active" : "inactive"));
  };

  return (
    <div className="fixed bottom-6 right-8 flex flex-col gap-2 items-end">
      <div
        className={`${
          panelState === "active" ? "visible" : "invisible"
        } w-[30rem] h-[50rem] rounded-lg border-2 border-gray-400 shadow-lg bg-[#FFFDF8]`}
      >
        <SageChat />
      </div>
      <div
        className="w-16 h-16 rounded-full bg-purple-grad flex items-center justify-center border-2 border-black"
        onClick={clickHandler}
      >
        <img src={companylogo} alt="company logo" className="w-12" />
      </div>
    </div>
  );
}

export default Sage;

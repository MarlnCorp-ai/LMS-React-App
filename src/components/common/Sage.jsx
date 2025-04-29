import { useState } from "react";
import logo1 from "../../images/Sage/logo-1.png";
import logo2 from "../../images/Sage/logo-2.png";

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
        className="w-16 h-20"
        onClick={clickHandler}
      >
        <img src={logo1} alt="Logo-1" className="w-16 h-17" />
      </div>
    </div>
  );
}

export default Sage;

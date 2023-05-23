// import React from "react";
// import { useSnapshot } from "valtio";
// import state from "../store";

// const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
//   const snap = useSnapshot(state);

//   const activeStyles =
//     isFilterTab && isActiveTab
//       ? { backgroundColor: snap.color, opacity: 0.5 }
//       : { backgroundColor: "transparent", opacity: 1 };

//   return (
//     <div
//       key={tab.name}
//       className={`tab-btn ${
//         isFilterTab ? "rounded-full-glassmorphism" : "rounded-4"
//       } `}
//       onClick={handleClick}
//       style={activeStyles}
//     >
//       <img
//         src={tab.icon}
//         alt={tab.name}
//         className={`${
//           (isFilterTab ? "w-2/3 h-2/3" : "w-11/12 h-11/12", "object-contain")
//         }`}
//       />
//     </div>
//   );
// };

// export default Tab;

import React, { useState } from "react";
import { useSnapshot } from "valtio";
import state from "../store";

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
  const snap = useSnapshot(state);
  const [clickCount, setClickCount] = useState(0);

  const activeStyles =
    isFilterTab && isActiveTab
      ? { backgroundColor: snap.color, opacity: 0.5 }
      : { backgroundColor: "transparent", opacity: 1 };

  const handleClickWithCount = () => {
    setClickCount((prevCount) => prevCount + 1);

    if (clickCount === 1 && isActiveTab) {
      // Close the tab or perform any action you want on the second click
      // You can call a closeTab function or toggle a state variable here
      setClickCount(0); // Reset click count for the next tab click
    } else {
      handleClick();
    }
  };

  return (
    <div
      key={tab.name}
      className={`tab-btn ${
        isFilterTab ? "rounded-full-glassmorphism" : "rounded-4"
      } `}
      onClick={handleClickWithCount}
      style={activeStyles}
    >
      <img
        src={tab.icon}
        alt={tab.name}
        className={`${
          isFilterTab ? "w-2/3 h-2/3" : "w-11/12 h-11/12"
        } object-contain`}
      />
    </div>
  );
};

export default Tab;

import { useState } from "react";
import "./Tabs.scss";
const Tabs: React.FC<{ tabs: any }> = ({ tabs }) => {
  const [active, setActive] = useState();

  return (
    <div className="tabs ">
      <div className="tabs-wrapper">
        {Object.keys(tabs).map((tab, indx) => {
          return (
            <div
              key={indx}
              data-value={tab}
              className={`tabs-tab ${active === tab ? "tabs-tab-active" : ""}`}
              onClick={(e) => setActive((e.target as any).dataset.value)}
            >
              {tab}
            </div>
          );
        })}
      </div>
      {active && tabs[active].content}
    </div>
  );
};
export default Tabs;

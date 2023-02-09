import { useState, useEffect } from "react";
import "./Bar.scss";
const Bar: React.FC<{ transitionEnd: any; active: boolean }> = ({
  transitionEnd,
  active = false,
}) => {
  const [trans, setTrans] = useState(false);
  useEffect(() => {
    if (active) {
      setTrans(true);
    }
  }, [active]);
  return (
    <div className="bar">
      <div
        className={`bar-progress ${trans && "bar-active"}`}
        onTransitionEnd={() => transitionEnd()}
      ></div>
    </div>
  );
};
export default Bar;

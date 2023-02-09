import { useState } from "react";
import Bar from "./widgets/Bar";
import Button from "./widgets/Button";

const ProgressBars = () => {
  const [bars, setBars] = useState(0);

  const [activeBar, setActiveBar] = useState(0);
  const transitionEnd = () => {
    console.log("transition end");
    setActiveBar(activeBar + 1);
  };
  return (
    <div className="d-flex align-items-start justify-content-start w-100 gap-4">
      <Button className=" Button" onClick={() => setBars(bars + 1)}>
        Add
      </Button>
      <div className=" w-75">
        {Array(bars)
          .fill("")
          .map((item, idx) => (
            <Bar
              key={idx}
              transitionEnd={transitionEnd}
              active={activeBar === idx}
            />
          ))}
      </div>
    </div>
  );
};
export default ProgressBars;

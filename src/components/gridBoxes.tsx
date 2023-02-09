import { useEffect, useState } from "react";
import "./GridBoxes.scss";
export default function Gridboxes() {
  const [boxes, setBoxes] = useState(Array(9).fill(false));
  const [clicked, setClicked] = useState<Array<number>>([]);
  const [countDown, setCountDown] = useState(0);

  const handleOnClick = (e: any) => {
    const idx = e.target.dataset.idx;

    let newBoxes = [...boxes];
    newBoxes[idx] = true;
    setBoxes(newBoxes);
    setClicked([...clicked, idx]);
    setCountDown(countDown + 1);
  };
  useEffect(() => {
    let timer: any;
    if (clicked.length >= boxes.length - 1) {
      timer = window.setInterval(() => {
        console.log("interval", countDown);
        if (countDown >= 0) {
          const newBoxes = [...boxes];
          newBoxes[clicked[countDown]] = false;
          setBoxes(newBoxes);
        }
        if (countDown > 0) {
          setCountDown(countDown - 1);
        }
        if (countDown === 0) {
          setClicked([]);
          window.clearInterval(timer);
        }
      }, 300);
    }
    // if (countDown === 0) window.clearInterval(timer);
    return () => window.clearInterval(timer);
  }, [boxes, clicked, countDown]);

  return (
    <div className="grid-boxes">
      <div className="container">
        {boxes.map((item, idx: number) => {
          return (
            <button
              key={idx}
              data-idx={idx}
              className={`box ${boxes[idx] ? "box-clicked" : ""}`}
              onClick={(e) => handleOnClick(e)}
              disabled={idx === 4 ? true : boxes[idx]}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

import { useState } from "react";
import "./Accordion.scss";

const Accordion: React.FC<{ label?: string; children?: any }> = ({
  label,
  children,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="accordion">
      <div className="accordion-label" onClick={() => setOpen(!open)}>
        {label || "Label"}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className={`bi bi-chevron-up ${open ? "down" : ""}`}
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
      </div>
      {open && <div className="accordion-content">{children} </div>}
    </div>
  );
};
export default Accordion;

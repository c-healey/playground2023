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
      </div>
      {open && <div className="accordion-content">{children} </div>}
    </div>
  );
};
export default Accordion;

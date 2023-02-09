import Accordion from "./Accordion";

const Accordions: React.FC<{ accordions: any }> = ({ accordions }) => {
  return (
    <div>
      {Object.keys(accordions).map((key, idx) => (
        <div key={`accordion-${idx}`}>
          <Accordion label={key}>{accordions[key].content}</Accordion>
        </div>
      ))}
    </div>
  );
};
export default Accordions;

import "./TextInput.scss";
const TextInput: React.FC<{
  label: string;
  className?: string;
  pattern?: string;
}> = ({ className = "", label, pattern = "\\w{3,16}" }) => {
  const name = label.replace(" ", "-");
  return (
    <>
      <input
        type="text"
        name={name}
        className={`text-input ${className}`}
        pattern={pattern}
      />
      <label htmlFor={name}>{label}</label>
    </>
  );
};
export default TextInput;

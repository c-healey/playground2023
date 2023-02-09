import "./Button.scss";
const Button: React.FC<{
  onClick?: any;
  children: any;
  className?: string;
}> = ({ onClick, className, children }) => {
  return (
    <button className={className || ""} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;

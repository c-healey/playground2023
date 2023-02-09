import "./Card.scss";
const Card: React.FC<{
  className?: string;
  header?: any;
  footer?: any;
  children?: any;
}> = ({ className = "", header, footer, children }) => {
  return (
    <div className={`Card ${className}`}>
      {header && <div className="Card-header">{header}</div>}
      <div className="Card-body">{children}</div>
      {footer && <div className="Card-footer">{footer}</div>}
    </div>
  );
};
export default Card;

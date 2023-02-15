import { useState } from "react";
import "./Menu.scss";
const Menu: React.FC<{ items: Array<string> }> = ({ items }) => {
  const [closed, setClosed] = useState(true);
  return (
    <div className="menu">
      <div className="menu-brand">Brand</div>
      <div className="menu-items">
        {items &&
          items.map((item, idx) => (
            <div key={`menu-${idx}`} className="menu-item">
              {item}
            </div>
          ))}
      </div>
      <div className="menu-always">
        <div className="menu-item">Shop</div>
        <div className="menu-item">Account</div>
      </div>
      <div className="menu-button" onClick={(e) => setClosed(false)}>
        Menu
      </div>
      {!closed && (
        <div className="menu-mobile">
          <div className="menu-close" onClick={(e) => setClosed(!closed)}>
            X
          </div>
          {items &&
            items.map((item, idx) => (
              <div key={`menu-${idx}`} className="menu-item">
                {item}
              </div>
            ))}
          <div className="menu-item">Shop</div>
          <div className="menu-item">Account</div>
        </div>
      )}
    </div>
  );
};
export default Menu;

import Button from "../widgets/Button";
import "../../Themes/tesla/styles.scss";
import { useEffect } from "react";
import DownArrowBox from "../widgets/DownArrowBox";
import Menu from "../widgets/Menu";
const TeslaHome = () => {
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        document.body.style.setProperty(
          "--scroll",
          window.pageYOffset /
            (document.body.offsetHeight - window.innerHeight) +
            ""
        );
      },
      false
    );
  }, []);
  return (
    <div className="tesla container-fluid ">
      <Menu items={["Model S", "Model 3", "Model X", "Model Y"]} />
      <section className="section section-1">
        <h1>Model 3</h1>
        <DownArrowBox className="Button-box Button-box-1">
          <Button className="Button">Custom Order</Button>
          <Button className="Button Button-secondary">Demo Drive</Button>
        </DownArrowBox>
      </section>
      <section className="section section-1">
        <h1>Model 4</h1>
        <DownArrowBox className="Button-box Button-box-2">
          <Button className="Button">Custom Order</Button>
          <Button className="Button Button-secondary">Demo Drive</Button>
        </DownArrowBox>
      </section>
      <section className="section section-1">
        <h1>Model 5</h1>
        <DownArrowBox className="Button-box Button-box-3">
          <Button className="Button">Custom Order</Button>
          <Button className="Button Button-secondary">Demo Drive</Button>
        </DownArrowBox>
      </section>
    </div>
  );
};
export default TeslaHome;

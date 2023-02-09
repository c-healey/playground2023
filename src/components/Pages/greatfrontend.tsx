import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../widgets/Button";
import Card from "../widgets/Card";

import Tabs from "../widgets/Tabs";
import Clock from "../AnalogClock";
import LikeButton from "../widgets/LikeButton";
import Stars from "../widgets/Stars";
import ProgressBars from "../ProgressBars";
import Accordions from "../widgets/Accordions";
import TextInput from "../widgets/TextInput";
import Gridboxes from "../gridBoxes";
const renderButtons = (buttons: any) => {
  return (
    <>
      {buttons.map((button: any, idx: number) => {
        return (
          <div key={`button-${idx}`} className="col-sm-4">
            <Button className={button.class}>{button.label}</Button>
          </div>
        );
      })}
    </>
  );
};
const renderCards = (cards: any) => {
  return (
    <>
      {cards.map((card: any, idx: number) => {
        return (
          <div key={`button-${idx}`} className="col-lg-4">
            <Card className={"Card--no-padding"} header={card.header}>
              {card.content}
            </Card>
          </div>
        );
      })}
    </>
  );
};
const tabs = {
    HTML: {
      content: (
        <p>
          The HyperText Markup Language or HTML is the standard markup language
          for documents designed to be displayed in a web browser.
        </p>
      ),
    },
    CSS: {
      content: (
        <p>
          Cascading Style Sheets is a style sheet language used for describing
          the presentation of a document written in a markup language such as
          HTML or XML.
        </p>
      ),
    },
    JavaScript: {
      content: (
        <p>
          JavaScript, often abbreviated as JS, is a programming language that is
          one of the core technologies of the World Wide Web, alongside HTML and
          CSS.
        </p>
      ),
    },
  },
  accordions = {
    lorem: {
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
    soluta, sint qui, vel voluptates esse odit libero nostrum,
    perspiciatis fugit placeat non. In illo cupiditate odit ad ullam
    ut architecto.`,
    },

    lorem2: {
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
    soluta, `,
    },
  },
  buttons = [
    {
      label: "Default",
      class: "Button ",
    },
    {
      label: "Error",
      class: "Button Button--state-error",
    },
    {
      label: "Borderless",
      class: "Button Button--type-borderless",
    },
    {
      label: "Secondary",
      class: "Button Button--type-secondary",
    },
    {
      label: "Tertiery",
      class: "Button Button--type-tertiary",
    },
    {
      label: "Small",
      class: "Button Button--type-small",
    },
  ],
  cards = [
    {
      header: "Buttons",
      content: (
        <div className="row gx-4 gy-2 px-2">
          {renderButtons(buttons)}
          <div className="col-lg-4">
            <LikeButton />
          </div>
        </div>
      ),
    },
    {
      header: "Stars",
      content: (
        <div className="d-flex align-items-start flex-column gap-2">
          <Stars max={5} current={3} />
          <Stars max={5} current={5} />
        </div>
      ),
    },
    { header: "Progress Bars", content: <ProgressBars /> },
    { header: "Accordion", content: <Accordions accordions={accordions} /> },
    { header: "Tabs", content: <Tabs tabs={tabs} /> },
    { header: "Clock", content: <Clock /> },

    { header: "Form", content: <TextInput label="alphnum" /> },
    { header: "Form", content: <Gridboxes /> },
  ];

const Greatfrontend = () => {
  return (
    <main className="container mt-4 border ">
      <div className="row g-4">{renderCards(cards)}</div>
    </main>
  );
};

export default Greatfrontend;

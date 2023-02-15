// import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";
import "./Themes/buffer/styles.scss";

import Greatfrontend from "./components/Pages/greatfrontend";
import { Route, Routes } from "react-router";
import { HashRouter as Router } from "react-router-dom";
import Carousel from "./components/Carousel/Carousel";
import TeslaHome from "./components/Pages/tesla";
const App = () => {
  return (
    <div className="buffer">
      <Router>
        <Routes>
          <Route path={"/"} element={<Greatfrontend />} />
          <Route path={"/carousel"} element={<Carousel />} />
          <Route path={"/tesla"} element={<TeslaHome />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;

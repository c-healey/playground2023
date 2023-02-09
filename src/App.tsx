// import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";
import "./Themes/buffer/styles.scss";
import Greatfrontend from "./components/Pages/greatfrontend";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Carousel from "./components/Carousel/Carousel";
const App = () => {
  return (
    <div className="buffer">
      <Router>
        <Routes>
          <Route path={"/"} element={<Greatfrontend />} />
          <Route path={"/carousel"} element={<Carousel />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;

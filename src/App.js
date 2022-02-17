import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Aboutus from "./pages/aboutus/Aboutus ";
import MovieInfo from "./pages/movieInfo/MovieInfo";
import Header from "./components/Header";
import Control from "./pages/control/Control";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/movieInfo/:slug" element={<MovieInfo />} />
          <Route path="/control" element={<Control />} />
          <Route path="/a" element={<Aboutus />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

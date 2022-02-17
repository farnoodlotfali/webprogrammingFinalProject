import { Link } from "react-router-dom";
import "../style/header.css";

const Header = () => {
  return (
    <div className="header  d-flex justify-content-between p-4">
      <div className="title">FARNOOD</div>
      <div className="links  d-flex  align-items-center">
        <Link to="/">Home</Link>
        <Link to="/control">control</Link>
      </div>
    </div>
  );
};

export default Header;

import { Star, StarHalf, ThumbDownAlt, ThumbUp } from "@mui/icons-material";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ListViewMovie = ({ id, name, year, desc, image }) => {
  function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }
  return (
    <div className="movieItem  m-2 d-flex flex-lg-row flex-column p-3 rounded">
      <Col lg="2" xs="4" className="itemImage align-self-center  ">
        <Link to={`/movieInfo/${id}`}>
          <img className="h-100 w-100 rounded" src={image} alt="" />
        </Link>
      </Col>
      <Col lg="9" className="info d-grid align-item-center ">
        <Link to={`/movieInfo/${id}`}>
          <div className="title">{name}</div>
        </Link>
        <div className="year mt-2 ">Year : {year}</div>
        <div className="desc my-3 text-justify ">
          Description : {truncateString(desc, 350)}
        </div>
        <div className="d-flex ">
          Rate:
          <Star color="warning" />
          <Star color="warning" />
          <Star color="warning" />
          <Star color="warning" />
          <StarHalf color="warning" />
        </div>
        <div className="d-flex justify-content-end">
          <div className="mx-2">
            <ThumbUp color="success" />
          </div>
          <div className="">
            <ThumbDownAlt color="error" />
          </div>
        </div>
      </Col>
    </div>
  );
};

export default ListViewMovie;

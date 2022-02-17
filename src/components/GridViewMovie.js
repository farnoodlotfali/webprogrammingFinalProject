import { Star, StarHalf, ThumbDownAlt, ThumbUp } from "@mui/icons-material";
import { Link } from "react-router-dom";
const GridViewMovie = ({ id, name, year, desc, image }) => {
  return (
    <div className="movieItemGrid h-100 rounded m-2">
      <Link to={`/movieInfo/${id}`}>
        <div className="image ">
          <img className=" h-100 w-100 " src={image} alt="" />
        </div>
      </Link>
      <div className="info d-grid align-item-center px-1 py-3">
        <Link to={`/movieInfo/${id}`}>
          <div className="title"> {name}</div>{" "}
        </Link>
        <div className="year">Year : {year}</div>
        <div className="d-flex ">
          Rate:
          <Star color="warning" />
          <Star color="warning" />
          <Star color="warning" />
          <Star color="warning" />
          <StarHalf color="warning" />
        </div>
        <div className="d-flex justify-content-end mt-2">
          <div className="mx-2">
            <ThumbUp color="success" />
          </div>
          <div className="">
            <ThumbDownAlt color="error" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridViewMovie;

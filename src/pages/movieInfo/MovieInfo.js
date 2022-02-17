import { ThumbDownAlt, ThumbUp } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "../../style/pages/movieInfo.css";

const MovieInfo = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    getMoives();
  }, []);

  const getMoives = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`http://127.0.0.1:8001/read?id=${slug}`);
      //   console.log(res.data[0]);
      setMovie(res.data[0]);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  };

  return (
    movie && (
      <div className="movieInfo text-white  my-4 ">
        <Link to="/" className="text-black mx-3 bg-white rounded py-2 px-3">
          go back
        </Link>
        <Container>
          <div className="d-flex flex-lg-row flex-column-reverse  justify-content-evenly">
            <Col lg="4" className="movieInfoImage mt-4 ">
              <img className="rounded" src={movie.image} alt="" />
              <div className="middle d-flex ">
                <div className="mx-2">
                  <ThumbUp color="success" fontSize="large" />
                </div>
                <div className="">
                  <ThumbDownAlt color="error" fontSize="large" />
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="name text-justify">{movie.name}</div>
              <div className="year text-justify mb-3 mt-4">
                <span className="text-info ">year</span>: {movie.year}
              </div>
              <div className="desc text-justify">
                <span className="text-info">desc</span>: {movie.desc}
              </div>
            </Col>
          </div>
        </Container>
      </div>
    )
  );
};

export default MovieInfo;

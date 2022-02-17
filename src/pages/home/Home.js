import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import GridViewMovie from "../../components/GridViewMovie";
import ListViewMovie from "../../components/ListViewMovie";
import "../../style/movieItem.css";
import Fade from "@mui/material/Fade";
import { CircularProgress } from "@mui/material";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [girdview, setGirdView] = useState(true);
  const [movies, setMovies] = useState([]);
  const [animation, setAnimation] = useState(true);
  const animationTime = 300;
  useEffect(() => {
    getMoives();
  }, []);
  const handleStep = () => {
    setAnimation((prev) => !prev);
    setTimeout(() => {
      setGirdView((prev) => !prev);
      setAnimation((prev) => !prev);
    }, animationTime);
  };
  // api
  const getMoives = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://127.0.0.1:8001/getall");
      setMovies(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  };
  return (
    <div className="mt-5 mx-3">
      <Button onClick={() => handleStep()}>change view</Button>
      {loading ? (
        <div className="d-flex  justify-content-center">
          <CircularProgress color="inherit" size={60} />
        </div>
      ) : (
        <Fade in={animation} timeout={animationTime}>
          <Container>
            <div className="d-flex flex-wrap justify-content-center">
              {movies.map((movie) => {
                return girdview ? (
                  <GridViewMovie
                    key={movie.id}
                    id={movie.id}
                    name={movie.name}
                    year={movie.year}
                    desc={movie.desc}
                    image={movie.image}
                  />
                ) : (
                  <ListViewMovie
                    key={movie.id}
                    id={movie.id}
                    name={movie.name}
                    year={movie.year}
                    desc={movie.desc}
                    image={movie.image}
                  />
                );
              })}
            </div>
          </Container>
        </Fade>
      )}
    </div>
  );
};

export default Home;

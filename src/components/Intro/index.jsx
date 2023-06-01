import { Carousel } from "react-bootstrap";
import { Rating, Info, IntroWrap, Title, Img } from "./Intro.styled";
import { Btn } from "../Button";
import { FaPlay, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Intro = ({ nowPlayingMovies }) => {
  return (
    <Carousel indicators={false}>
      {nowPlayingMovies &&
        nowPlayingMovies.map((movie) => (
          <Carousel.Item style={{ height: "80vh" }} key={movie.id}>
            <Img
              url={`url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie.poster_path})`}
            />

            <Carousel.Caption>
              <IntroWrap>
                <Title>{movie.title}</Title>
                <Info>
                  <span>{movie.release_date.slice(0, 4)}</span>
                  <Rating>Rating: {movie.vote_average}</Rating>
                </Info>
                <p>{movie.overview}</p>
                <div>
                  <Link to={`/movies/${movie.id}`}>
                    <Btn className="me-3">
                      <FaPlay className="me-2"></FaPlay>Details
                    </Btn>
                  </Link>
                </div>
              </IntroWrap>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
    </Carousel>
  );
};

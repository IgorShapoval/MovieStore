import { useParams } from "react-router-dom";
import { getMoviesById } from "../../services/movies-api";
import { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import {
  CardWrap,
  ImgWrap,
  InfoList,
  InfoWrap,
  Title,
} from "./MovieDetails.styled";
import {
  FaClock,
  FaRegCalendarAlt,
  FaRegListAlt,
  FaGlobe,
  FaFilm,
  FaDollarSign,
} from "react-icons/fa";
import { Cast, Recommendations, Reviews } from "../../components";
import * as Scroll from "react-scroll";
import { Loader } from "../../components/Loader";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fieldRef = useRef(null);
  const scroll = Scroll.animateScroll;

  useEffect(() => {
    setIsLoading(true);
    async function getMovie() {
      try {
        const movieDetails = await getMoviesById(id);
        setMovie(movieDetails);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
    getMovie();

    if (fieldRef.current) {
      scroll.scrollToTop();
    }
  }, [id, fieldRef]);

  if (!movie) return null;

  const {
    backdrop_path,
    genres,
    title,
    overview,
    vote_average,
    release_date,
    production_countries,
    production_companies,
    budget,
    runtime,
  } = movie;

  return (
    <>
      {" "}
      {isLoading && <Loader />}
      <Container>
        <CardWrap className="d-flex py-4">
          <ImgWrap ref={fieldRef} className="col-md-3">
            <img
              src={
                backdrop_path
                  ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${backdrop_path}`
                  : "https://via.placeholder.com/300x450"
              }
              alt={title}
              className="mb-3"
            />
            <div className="text-center">Rating: {vote_average.toFixed(1)}</div>
          </ImgWrap>
          <InfoWrap className="col-md-9">
            <Title>{title}</Title>
            <InfoList>
              <li>
                <FaClock /> <span>{runtime} min</span>
              </li>
              <li>
                <FaRegCalendarAlt /> <span>{release_date.slice(0, 4)}</span>
              </li>
              {genres.length > 0 && (
                <li>
                  <FaRegListAlt /> <span>{genres[0].name}</span>
                </li>
              )}
              {production_countries.length > 0 && (
                <li>
                  <FaGlobe /> <span>{production_countries[0].name}</span>
                </li>
              )}
              {production_companies.length > 0 && (
                <li>
                  <FaFilm /> <span>{production_companies[0].name}</span>
                </li>
              )}
              {budget > 0 && (
                <li>
                  <FaDollarSign /> <span>{budget}</span>
                </li>
              )}
            </InfoList>
            <p>{overview}</p>
            <div></div>
            <div></div>
          </InfoWrap>
        </CardWrap>
        <Cast id={id} />
        <Reviews id={id} />
        <Recommendations id={id} />
      </Container>
    </>
  );
};

export default MovieDetails;

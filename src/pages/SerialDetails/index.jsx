import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getSerialById } from "../../services/movies-api";
import { Container } from "react-bootstrap";
import {
  CardWrap,
  ImgWrap,
  InfoList,
  InfoWrap,
  Title,
} from "../MovieDetails/MovieDetails.styled";
import {
  FaClock,
  FaRegCalendarAlt,
  FaRegListAlt,
  FaGlobe,
  FaFilm,
} from "react-icons/fa";
import { Cast, Recommendations, Reviews } from "../../components";
import * as Scroll from "react-scroll";
import { Loader } from "../../components/Loader";

const SerialDetails = () => {
  const { id } = useParams();
  const [serial, setSerial] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fieldRef = useRef(null);
  const scroll = Scroll.animateScroll;

  useEffect(() => {
    setIsLoading(true);
    async function getSerial() {
      try {
        const serialDetails = await getSerialById(id);
        setSerial(serialDetails);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }

    getSerial();

    if (fieldRef.current) {
      scroll.scrollToTop();
    }
  }, [id]);

  if (!serial) return null;
  const {
    backdrop_path,
    name,
    overview,
    vote_average,
    first_air_date,
    genres,
    networks,
    production_countries,
    number_of_seasons,
    type,
  } = serial;

  return (
    <>
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
              alt={name}
              className="mb-3"
            />
            <div className="text-center">Rating: {vote_average.toFixed(1)}</div>
          </ImgWrap>
          <InfoWrap className="col-md-9">
            <Title>{name}</Title>
            <InfoList>
              <li>
                <FaClock /> <span>{number_of_seasons} seasons</span>
              </li>
              <li>
                <FaRegCalendarAlt /> <span>{first_air_date.slice(0, 4)}</span>
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
              {networks.length > 0 && (
                <li>
                  <FaFilm /> <span>{networks[0].name}</span>
                </li>
              )}
            </InfoList>
            <p>{overview}</p>
            <div></div>
            <div></div>
          </InfoWrap>
        </CardWrap>
        <Cast id={id} type={type} />
        <Reviews id={id} type={type} />
        <Recommendations id={id} type={type} />
      </Container>
    </>
  );
};

export default SerialDetails;

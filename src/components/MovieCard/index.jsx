import { allGanres, renderGenres } from "../../utils/data/ganres";
import { CardList, CardWrap, ImgWrap, Title } from "./MovieCard.styled";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
  return (
    <>
      <li>
        <CardWrap>
          <Link to={movie.title ? `/movies/${movie.id}` : `/shows/${movie.id}`}>
            <ImgWrap>
              <img
                src={
                  movie.backdrop_path
                    ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.backdrop_path}`
                    : "https://via.placeholder.com/300x450"
                }
                alt="Movie picture"
              />
            </ImgWrap>
            <div>
              {movie.title ? (
                <Title>{movie.title}</Title>
              ) : (
                <Title>{movie.name}</Title>
              )}
              <CardList>
                {movie.release_date ? (
                  <li>{movie.release_date.slice(0, 4)}</li>
                ) : (
                  <li>{movie.first_air_date.slice(0, 4)}</li>
                )}
                <li>{movie.vote_average > 0 && movie.vote_average}</li>
                <li>{renderGenres(movie.genre_ids, allGanres)}</li>
              </CardList>
            </div>
          </Link>
        </CardWrap>
      </li>
    </>
  );
};

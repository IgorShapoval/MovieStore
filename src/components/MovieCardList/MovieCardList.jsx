import { allGanres, renderGenres } from "../../utils/data/ganres";
import {
  CardList,
  CardWrap,
  ImgWrap,
  List,
  Title,
} from "../MovieCard/MovieCard.styled";
import { Link } from "react-router-dom";

export const MovieCardList = ({ movie }) => {
  return (
    <>
      <List>
        {movie.length > 0 &&
          movie.map(
            ({
              title,
              release_date,
              vote_average,
              genre_ids,
              id,
              backdrop_path,
              name,
              first_air_date,
              media_type,
            }) => {
              if (media_type === "person") return;
              return (
                <li key={id}>
                  <CardWrap>
                    <Link to={title ? `/movies/${id}` : `/shows/${id}`}>
                      <ImgWrap>
                        <img
                          src={
                            backdrop_path
                              ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${backdrop_path}`
                              : "https://via.placeholder.com/300x450"
                          }
                          alt="Movie picture"
                        />
                      </ImgWrap>
                      <div>
                        {title ? (
                          <Title>{title.slice(0, 20)}</Title>
                        ) : (
                          <Title>{name.slice(0, 20)}</Title>
                        )}
                        <CardList>
                          {release_date &&
                            (release_date ? (
                              <li>{release_date.slice(0, 4)}</li>
                            ) : (
                              <li>{first_air_date.slice(0, 4)}</li>
                            ))}
                          <li>{vote_average > 0 && vote_average}</li>
                          <li>{renderGenres(genre_ids, allGanres)}</li>
                        </CardList>
                      </div>
                    </Link>
                  </CardWrap>
                </li>
              );
            }
          )}
      </List>
    </>
  );
};

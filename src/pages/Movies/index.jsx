import { useFetch } from "../../utils/hooks/useFetch";
import {
  getPopularMovies,
  getTopMoviesOfWeek,
  getTopRatetgMovies,
  getUpcomingMovies,
} from "../../services/movies-api";
import { Loader } from "../../components/Loader";
import { MoviesBox } from "../../components";

const Movies = () => {
  const {
    data: topMoviesWeek,
    error: errorTopMoviesWeek,
    isLoading: isLoadingTopMoviesWeek,
  } = useFetch(getTopMoviesOfWeek);

  const {
    data: popularMovies,
    error: errorPopularMovies,
    isLoading: isLoadingPopularMovies,
  } = useFetch(getPopularMovies);

  const {
    data: topRatetgMovies,
    error: errorTopRatetgMovies,
    isLoading: isLoadingTopRatetgMovies,
  } = useFetch(getTopRatetgMovies);

  const {
    data: upcomingMovies,
    error: errorUpcomingMovies,
    isLoading: isLoadingUpcomingMovies,
  } = useFetch(getUpcomingMovies);

  return (
    <>
      {isLoadingPopularMovies &&
        isLoadingTopRatetgMovies &&
        isLoadingUpcomingMovies &&
        isLoadingTopMoviesWeek && <Loader />}
      {topMoviesWeek && topMoviesWeek.results && (
        <MoviesBox
          title="Top 10 Movies Of The Week"
          movies={topMoviesWeek.results}
        />
      )}
      {topRatetgMovies && topRatetgMovies.results && (
        <MoviesBox
          title="Top Ratet Movies All Time"
          movies={topRatetgMovies.results}
        />
      )}
      {popularMovies && popularMovies.results && (
        <MoviesBox title="Popular Movies" movies={popularMovies.results} />
      )}
      {upcomingMovies && upcomingMovies.results && (
        <MoviesBox title="Upcoming Movies" movies={upcomingMovies.results} />
      )}
    </>
  );
};

export default Movies;

import { Intro, MoviesBox } from "../../components";
import {
  getComedyMovies,
  getDramaMovies,
  getHorrorMovies,
  getNowPlayingMovies,
  getTopMoviesOfWeek,
  getTopSerialsOfWeek,
} from "../../services/movies-api";
import { useFetch } from "../../utils/hooks/useFetch";
import { Loader } from "../../components/Loader";
import { useEffect, useState } from "react";

const Home = () => {
  const [comedyMovies, setComedyMovies] = useState([]);
  const [dramaMovies, setDramaMovies] = useState([]);
  const [hororMovies, setHororMovies] = useState([]);

  const {
    data: topMoviesWeek,
    error: errorTopMoviesWeek,
    isLoading: isLoadingTopMoviesWeek,
  } = useFetch(getTopMoviesOfWeek);

  const {
    data: topSerialsWeek,
    error: errorTopSerialsWeek,
    isLoading: isLoadingTopSerialsWeek,
  } = useFetch(getTopSerialsOfWeek);

  const {
    data: nowPlayingMovies,
    error: errorNowPlayingMovies,
    isLoading: isLoadingNowPlayingMovies,
  } = useFetch(getNowPlayingMovies);

  useEffect(() => {
    const getMovie = async () => {
      const { results } = await getComedyMovies();
      setComedyMovies(results);
    };

    getMovie();
  }, []);

  useEffect(() => {
    const getMovie = async () => {
      const { results } = await getDramaMovies();
      setDramaMovies(results);
    };

    getMovie();
  }, []);

  useEffect(() => {
    const getMovie = async () => {
      const { results } = await getHorrorMovies();
      setHororMovies(results);
    };

    getMovie();
  }, []);

  return (
    <>
      {isLoadingNowPlayingMovies &&
        isLoadingTopMoviesWeek &&
        isLoadingTopSerialsWeek && <Loader />}
      {nowPlayingMovies && nowPlayingMovies.results && (
        <Intro nowPlayingMovies={nowPlayingMovies.results.slice(0, 5)} />
      )}
      {topMoviesWeek && topMoviesWeek.results && (
        <MoviesBox
          title="Top 10 Movies Of The Week"
          movies={topMoviesWeek.results}
        />
      )}
      {topSerialsWeek && topSerialsWeek.results && (
        <MoviesBox
          title="Top 10 Serials Of The Week"
          movies={topSerialsWeek.results}
        />
      )}
      {comedyMovies.length > 0 && (
        <MoviesBox title="Comedy Movies" movies={comedyMovies} />
      )}
      {dramaMovies.length > 0 && (
        <MoviesBox title="Drama Movies" movies={dramaMovies} />
      )}
      {hororMovies.length > 0 && (
        <MoviesBox title="Horor Movies" movies={hororMovies} />
      )}
    </>
  );
};

export default Home;

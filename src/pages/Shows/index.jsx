import { MoviesBox } from "../../components";
import { useFetch } from "../../utils/hooks/useFetch";
import {
  getPopularSerials,
  getTopRatetSerials,
  getTopSerialsOfWeek,
} from "../../services/movies-api";
import { Loader } from "../../components/Loader";

const Shows = () => {
  const {
    data: topRatetSerials,
    error: errorTopRatetSerial,
    isLoading: isLoadingTopRatetSerials,
  } = useFetch(getTopRatetSerials);

  const {
    data: topSerialsWeek,
    error: errorTopSerialsWeek,
    isLoading: isLoadingTopSerialsWeek,
  } = useFetch(getTopSerialsOfWeek);

  const {
    data: popularSerials,
    error: errorPopularSerials,
    isLoading: isLoadingPopularSerials,
  } = useFetch(getPopularSerials);

  return (
    <>
      {isLoadingTopRatetSerials &&
        isLoadingTopSerialsWeek &&
        isLoadingPopularSerials && <Loader />}
      {topSerialsWeek && topSerialsWeek.results && (
        <MoviesBox
          title="Top Ratet Serials Of The Week"
          movies={topSerialsWeek.results}
        />
      )}
      {topRatetSerials && topRatetSerials.results && (
        <MoviesBox
          title="Top Ratet Serials All Time"
          movies={topRatetSerials.results}
        />
      )}
      {popularSerials && popularSerials.results && (
        <MoviesBox title="Popular Serials" movies={popularSerials.results} />
      )}
    </>
  );
};

export default Shows;

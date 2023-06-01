import { useContext, useEffect, useState } from "react";
import { Btn, Context } from "../../components";
import { getMoviesByGanres, getMoviesByQuery } from "../../services/movies-api";
import { MovieCardList } from "../../components/MovieCardList/MovieCardList";
import { Container, Dropdown } from "react-bootstrap";
import { allGanres } from "../../utils/data/ganres";
import * as Scroll from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import { Loader } from "../../components/Loader";

const Search = () => {
  const { searchParams, topMoviesWeek } = useContext(Context);
  const [searchMovies, setSearchMovies] = useState([]);
  const [totalResult, setTotalResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const searchQuery = searchParams.get("query") ?? "";
  const scroll = Scroll.animateScroll;

  useEffect(() => {
    setIsLoading(true);
    async function getMovies() {
      try {
        const { results, total_results } = await getMoviesByQuery(
          searchQuery,
          page
        );
        if (!searchQuery) setSearchMovies([]);
        setSearchMovies((prevState) => [...prevState, ...results]);
        setTotalResult(total_results);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, [searchParams, page]);

  useEffect(() => {
    setIsLoading(true);
    async function getMovies() {
      try {
        const { results, total_results } = await getMoviesByQuery(
          searchQuery,
          page
        );

        setSearchMovies(results);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, [searchQuery.length]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
    scroll.scrollToBottom();
  };

  return (
    <>
      {isLoading && <Loader />}
      <Container className="py-4">
        <Dropdown className="mb-4">
          <Dropdown.Toggle variant="danger" id="dropdown-autoclose-true">
            Ganres
          </Dropdown.Toggle>
          <Dropdown.Menu className="d-flex flex-column align-items-center">
            {allGanres.map((ganre) => (
              <Link key={ganre.id} to={`/search/${ganre.id}`}>
                {ganre.name}
              </Link>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        {searchQuery === "" ? (
          <>
            <MovieCardList movie={topMoviesWeek.results} />
          </>
        ) : (
          <>
            <MovieCardList movie={searchMovies} />
            {totalResult >= 20 && (
              <div className="text-center">
                <Btn onClick={loadMore}>Load More</Btn>
              </div>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default Search;

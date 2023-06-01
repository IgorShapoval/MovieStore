import { useEffect, useState } from "react";
import { getMoviesByGanres } from "../../services/movies-api";
import * as Scroll from "react-scroll";
import { Link, useParams } from "react-router-dom";
import { Container, Dropdown } from "react-bootstrap";
import { Loader } from "../../components/Loader";
import { MovieCardList } from "../../components/MovieCardList/MovieCardList";
import { Btn } from "../../components";
import { allGanres } from "../../utils/data/ganres";

export const Ganre = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [totalResult, setTotalResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const { ganreId } = useParams();
  const scroll = Scroll.animateScroll;

  useEffect(() => {
    setIsLoading(true);
    const getMovie = async () => {
      const { results, total_results } = await getMoviesByGanres(ganreId, page);
      setSearchMovies((prevState) => [...prevState, ...results]);
      setTotalResult(total_results);
      setIsLoading(false);
    };

    getMovie();
  }, [ganreId, page]);

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

        <>
          <MovieCardList movie={searchMovies} />
          {totalResult >= 20 && (
            <div className="text-center">
              <Btn onClick={loadMore}>Load More</Btn>
            </div>
          )}
        </>
      </Container>
    </>
  );
};

import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useSearchParams } from "react-router-dom";
import { Layout } from "../Layout";
import { routes } from "../../utils/data/routes";
import React, { lazy, useState } from "react";
import { getTopMoviesOfWeek } from "../../services/movies-api";
import { useFetch } from "../../utils/hooks/useFetch";
import { Ganre } from "../../pages";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, darkTheme, lightTheme } from "../../utils/theme/theme";

export const Context = React.createContext();

const Home = lazy(() => import("../../pages/Home"));
const Movies = lazy(() => import("../../pages/Movies"));
const MovieDetails = lazy(() => import("../../pages/MovieDetails"));
const Shows = lazy(() => import("../../pages/Shows"));
const SerialDetails = lazy(() => import("../../pages/SerialDetails"));
const Search = lazy(() => import("../../pages/Search"));

export const App = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    data: topMoviesWeek,
    error: errorTopMoviesWeek,
    isLoading: isLoadingTopMoviesWeek,
  } = useFetch(getTopMoviesOfWeek);

  const [theme, setTheme] = useState("dark");

  const switchTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Context.Provider
        value={{
          searchParams,
          setSearchParams,
          topMoviesWeek,
          isLoadingTopMoviesWeek,
          switchTheme,
        }}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={routes.movies} element={<Movies />} />
            <Route path={routes.movies + "/:id"} element={<MovieDetails />} />
            <Route path={routes.shows} element={<Shows />} />
            <Route path={routes.shows + "/:id"} element={<SerialDetails />} />
            <Route path={routes.search} element={<Search />} />
            <Route path={routes.search + "/:ganreId"} element={<Ganre />} />
          </Route>
        </Routes>
      </Context.Provider>
    </ThemeProvider>
  );
};

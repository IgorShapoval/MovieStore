import axios from "axios";

const MY_KEY = "eefd47684bf93c126bb0b38b3baeccd7";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const getNowPlayingMovies = async () => {
  const response = await axios.get(`/movie/now_playing?api_key=${MY_KEY}`);

  return response.data;
};

export const getPopularMovies = async () => {
  const response = await axios.get(`/movie/popular?api_key=${MY_KEY}&page=2`);

  return response.data;
};

export const getUpcomingMovies = async () => {
  const response = await axios.get(`/movie/upcoming?api_key=${MY_KEY}`);

  return response.data;
};

export const getTopRatetgMovies = async () => {
  const response = await axios.get(`/movie/top_rated?api_key=${MY_KEY}`);

  return response.data;
};

export const getMoviesById = async (id) => {
  const response = await axios.get(`/movie/${id}?api_key=${MY_KEY}`);

  return response.data;
};

export const getCastInfoById = async (id) => {
  const response = await axios.get(`/movie/${id}/credits?api_key=${MY_KEY}`);
  return response.data;
};

export const getSerialsCastInfoById = async (id) => {
  const response = await axios.get(`/tv/${id}/credits?api_key=${MY_KEY}`);
  return response.data;
};

export const getReviewsById = async (id) => {
  const response = await axios.get(`/movie/${id}/reviews?api_key=${MY_KEY}`);
  return response.data;
};

export const getSerialsReviewsById = async (id) => {
  const response = await axios.get(`/tv/${id}/reviews?api_key=${MY_KEY}`);
  return response.data;
};

export const getRecommendationsById = async (id) => {
  const response = await axios.get(
    `/movie/${id}/recommendations?api_key=${MY_KEY}`
  );
  return response.data;
};

export const getSerialsRecommendationsById = async (id) => {
  const response = await axios.get(
    `/tv/${id}/recommendations?api_key=${MY_KEY}`
  );
  return response.data;
};

export const getMoviesByQuery = async (query, page) => {
  const response = await axios.get(
    `search/multi?api_key=${MY_KEY}&query=${query}&page=${page}`
  );
  return response.data;
};

export const getTopMoviesOfWeek = async () => {
  const response = await axios.get(`/trending/movie/week?api_key=${MY_KEY}`);

  return response.data;
};

export const getTopSerialsOfWeek = async () => {
  const response = await axios.get(`/trending/tv/week?api_key=${MY_KEY}`);

  return response.data;
};

export const getAiringTodaySerials = async () => {
  const response = await axios.get(`/tv/airing_today?api_key=${MY_KEY}`);

  return response.data;
};

export const getOnTheAirSerials = async () => {
  const response = await axios.get(`/tv/on_the_air?api_key=${MY_KEY}`);

  return response.data;
};

export const getPopularSerials = async () => {
  const response = await axios.get(
    `/tv/popular?api_key=${MY_KEY}&page=3&sort_by=popularity.asc`
  );

  return response.data;
};

export const getTopRatetSerials = async () => {
  const response = await axios.get(`/tv/top_rated?api_key=${MY_KEY}`);

  return response.data;
};

export const getSerialById = async (id) => {
  const response = await axios.get(`/tv/${id}?api_key=${MY_KEY}`);

  return response.data;
};

export async function getMoviesByGanres(ganreId, page) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZWZkNDc2ODRiZjkzYzEyNmJiMGIzOGIzYmFlY2NkNyIsInN1YiI6IjY0NDRlNTE1MDU4MjI0MDQ5NTMzMmQ4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8WQiak38dOZ1mNh1WusFLXHWBnYOMqKs5xqtVRtJd_s`,
    },
  };
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${ganreId}&page=${page}`,
      options
    );

    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getComedyMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZWZkNDc2ODRiZjkzYzEyNmJiMGIzOGIzYmFlY2NkNyIsInN1YiI6IjY0NDRlNTE1MDU4MjI0MDQ5NTMzMmQ4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8WQiak38dOZ1mNh1WusFLXHWBnYOMqKs5xqtVRtJd_s`,
    },
  };
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35`,
      options
    );

    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getDramaMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZWZkNDc2ODRiZjkzYzEyNmJiMGIzOGIzYmFlY2NkNyIsInN1YiI6IjY0NDRlNTE1MDU4MjI0MDQ5NTMzMmQ4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8WQiak38dOZ1mNh1WusFLXHWBnYOMqKs5xqtVRtJd_s`,
    },
  };
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=18`,
      options
    );

    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getHorrorMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZWZkNDc2ODRiZjkzYzEyNmJiMGIzOGIzYmFlY2NkNyIsInN1YiI6IjY0NDRlNTE1MDU4MjI0MDQ5NTMzMmQ4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8WQiak38dOZ1mNh1WusFLXHWBnYOMqKs5xqtVRtJd_s`,
    },
  };
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=27`,
      options
    );

    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

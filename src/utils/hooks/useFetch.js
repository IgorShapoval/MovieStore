import { useEffect, useState } from "react";

export const useFetch = (getFetch) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (!getFetch) {
      return;
    }

    async function getMovies() {
      try {
        const results = await getFetch();
        setData(results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, []);

  return { data, error, isLoading };
};

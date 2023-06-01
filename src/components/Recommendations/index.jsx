import { Container } from "react-bootstrap";
import { Section } from "../Section";
import { useEffect, useState } from "react";
import {
  getRecommendationsById,
  getSerialsRecommendationsById,
} from "../../services/movies-api";
import { MovieCardList } from "../MovieCardList/MovieCardList";

export const Recommendations = ({ id, type }) => {
  const [recommendations, setRecommendations] = useState([]);

  if (type) {
    useEffect(() => {
      async function getRecommendations() {
        try {
          const { results } = await getSerialsRecommendationsById(id);
          setRecommendations(results.slice(0, 4));
        } catch (error) {}
      }

      getRecommendations();
    }, [id]);
  } else {
    useEffect(() => {
      async function getRecommendations() {
        try {
          const { results } = await getRecommendationsById(id);
          setRecommendations(results.slice(0, 4));
        } catch (error) {}
      }

      getRecommendations();
    }, [id]);
  }

  return (
    <>
      {recommendations.length > 0 && (
        <Container>
          <Section title="RELATED MOVIES">
            <ul className="d-flex p-0 gap-3">
              <MovieCardList movie={recommendations} />
            </ul>
          </Section>
        </Container>
      )}
    </>
  );
};

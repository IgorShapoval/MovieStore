import { Section, Swiper } from "..";
import { Container } from "react-bootstrap";

export const MoviesBox = ({ title, movies }) => {
  return (
    <Container>
      <Section title={title}>
        <Swiper movie={movies} />
      </Section>
    </Container>
  );
};

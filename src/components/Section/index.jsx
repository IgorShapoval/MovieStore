import { Title } from "../Title";
import { SectionStyled } from "./Section.styled";

export const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <Title>{title}</Title>
      {children}
    </SectionStyled>
  );
};

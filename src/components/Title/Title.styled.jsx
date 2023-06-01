import styled from "@emotion/styled";

export const TitleStyled = styled.h2`
  margin-bottom: 45px;
  position: relative;
  letter-spacing: 0.64px;
  color: #fff;
  line-height: 25px;
  font-weight: 700;
  font-size: 28px;
  text-transform: uppercase;

  ::before {
    background: #ff0000;
    content: "";
    height: 3px;
    left: 0;
    position: absolute;
    bottom: -15px;
    width: 50px;
  }
`;

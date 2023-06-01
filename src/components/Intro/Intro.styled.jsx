import styled from "@emotion/styled";

export const Title = styled.h1`
  font-weight: 700;
  font-size: 64px;
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Info = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
  span {
    color: #fff;
    margin-right: 15px;
  }
`;

export const Rating = styled.span`
  border: #ff0000 2px solid;
  border-radius: 20px;
  padding: 3px 10px;
`;

export const IntroWrap = styled.div`
  width: 700px;
  padding: 100px 0 200px 0;

  @media (max-width: 1200px) {
    padding: 50px 0 100px 0;
  }

  @media (max-width: 992px) {
    width: 100%;
    padding: 0;
  }
`;

export const Img = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background: ${(p) => p.url};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  @media (max-width: 1400px) {
    width: 1400px;
  }

  @media (max-width: 1200px) {
    width: 1200px;
  }

  @media (max-width: 992px) {
    width: 992px;
  }

  @media (max-width: 768px) {
    width: 768px;
  }

  @media (max-width: 576px) {
    width: 576px;
  }
`;

import styled from "@emotion/styled";

export const ImgWrap = styled.div`
  padding: 0 15px 0 15px;
  @media (max-width: 1400px) {
    width: 400px;
    margin: 0 auto;
  }
`;

export const InfoWrap = styled.div`
  padding: 0 15px 0 15px;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  margin: 30px 0;
  font-weight: 700;
  font-size: 42px;
  color: #ffffff;
  text-transform: uppercase;
  @media (max-width: 1400px) {
    text-align: center;
  }
`;

export const InfoList = styled.ul`
  padding: 0;
  display: flex;
  gap: 20px;
  color: #a3a3a3;

  @media (max-width: 1400px) {
    flex-direction: column;
    gap: 5px;
  }

  li {
    display: flex;
    align-items: center;
  }

  span {
    margin-left: 10px;
  }
`;

export const CardWrap = styled.div`
  display: flex;
  padding: 15px 0 15px 0;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

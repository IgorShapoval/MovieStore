import styled from "@emotion/styled";

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const CastItem = styled.li`
  padding-bottom: 10px;
  border-radius: 10px;
  overflow: hidden;
  min-width: 140px;
  width: 140px;
  min-height: 255px;
`;

export const CastImg = styled.div`
  min-width: 138px;
  width: 138px;
  height: 175px;
`;

export const Name = styled.div`
  font-weight: bold;
  padding: 10px 5px 0 5px;
  margin-bottom: 10px;
`;

export const Character = styled.div`
  padding: 0 5px 0 5px;
`;

export const Styled = styled.div`
  .swiper-container {
    @media (max-width: 1400px) {
      width: 1200px;
    }

    @media (max-width: 1200px) {
      width: 992px;
    }

    @media (max-width: 992px) {
      width: 768px;
    }

    @media (max-width: 768px) {
      width: 576px;
    }

    @media (max-width: 576px) {
      width: 320px;
    }

    @media (max-width: 320px) {
      width: 320px;
    }
  }
`;

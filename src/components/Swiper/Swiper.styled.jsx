import styled from "@emotion/styled";

export const Styled = styled.div`
  .swiper-button-prev,
  .swiper-button-next {
    color: #ff0000;
  }

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
  }
`;

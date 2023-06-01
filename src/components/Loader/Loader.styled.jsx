import styled from "@emotion/styled";

export const Overlay = styled.div`
  position: fixed; /* Sit on top of the page content */
  display: block; /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 10;
`;
export const Wrap = styled.div`
  position: fixed;
  top: 40%;
  left: 45%;
  width: 200px;
  height: 100px;
  z-index: 11;
`;

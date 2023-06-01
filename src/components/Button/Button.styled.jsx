import styled from "@emotion/styled";

export const Button = styled.button`
  background: #ff0000;
  color: #fff;
  padding: 10px 30px;
  border: 0;
  border-radius: 0;
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  transition-property: color;
  transition-duration: 0.3s;

  :before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #212529;
    transform: scaleX(0);
    transform-origin: 0 50%;
    transition-property: transform;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }

  :active,
  :focus,
  :hover {
    color: #fff;
    background: black;
  }

  :active:before,
  :focus:before,
  :hover:before {
    transform: scaleX(1);
  }

  :not(:disabled):not(.disabled) {
    cursor: pointer;
  }
`;

import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Logo = styled.div`
  font-family: "EB Garamond", serif;
  color: #fff;
  font-size: 24px;
  margin-right: 32px;
`;

export const LogoRed = styled.span`
  color: #fc030b;
  margin-right: 8px;
`;

export const LinkNav = styled(NavLink)`
  color: #fff;
  line-height: 50px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0;
  position: relative;
  transition: all ease 0.4s;
  padding: 10px 22px;
  text-decoration: none;

  ::before {
    position: absolute;
    left: 0;
    content: "";
    width: 1px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    top: 0;
    bottom: 0;
    margin: auto;
  }

  :hover,
  :focus {
    color: #fc030b;
  }
`;

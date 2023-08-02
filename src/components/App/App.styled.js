import styled from "styled-components";
import { NavLink } from "react-router-dom";








export const Main = styled.main`

`;

export const Link = styled(NavLink)`
  padding: 8px 16px;

  text-decoration: none;
  color: black;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 20px;
  color: white;

  &.active {
    color: #537FE7;
  }
`;



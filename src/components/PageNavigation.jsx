import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageNavigation = ({ title }) => {
  return (
    <Wrapper>
      <NavLink to="/">Home</NavLink>/{title}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 10rem;
  width: 100vw;
  /* background-color: ${({ theme }) => theme.colors.bg}; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 3.2rem;
  padding-left: 1.2rem;
  background: -webkit-linear-gradient(#39e098, #1e6167);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* z-index: -7; */
  a {
    font-size: 3.2rem;
    background: -webkit-linear-gradient(#39e098, #1e6167);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default PageNavigation;

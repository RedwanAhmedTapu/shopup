import React from "react";
import { GiClothJar } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <GiClothJar className="logo" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  height: 10rem;
  padding: 0rem 4rem;
  background: radial-gradient(ellipse at top, #e9e9e9, transparent);
  /* box-shadow: -6px -6px 9px #fff,3px 3px 6px rgba(0,0,0,0.4); */
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
  right: 0;

  .logo {
    font-size: 4rem;
    color: black;
  }
`;

export default Header;

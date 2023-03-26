import React, { useState } from "react";
import { CgClose, CgMenu } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useCartContext } from "../context/CartContext";

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState();
  const { total_item } = useCartContext();
  console.log(total_item);

  const Navbar = styled.nav`
    width: auto;
    height: auto;

    .unordrlist {
      display: flex;
      width: auto;
      height: 3rem;
      gap: 4rem;
      justify-content: space-around;
      align-items: center;
      box-sizing: border-box;
      .navbar-link {
        color: black;
        font-weight: 490;
        text-decoration: none;
        font-size: 2rem;
        text-transform: uppercase;
        transition: all 0.3s linear;
      }
      .navbar-link:hover {
        color: ${({ theme }) => theme.colors.helper};
      }

      #cartshping {
        font-size: 3.5rem;
      }
    }

    .mobile-navbar-btn {
      display: none;
    }
    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }
    .close-outline {
      display: none;
    }
    /* .mobile-nav-icon{
  display: none;
  background-color: transparent;
  cursor: pointer;
  border: none;
} */
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
        position: absolute;
        top: 30%;
        right: 10%;
        border: ${({ theme }) => theme.colors.black};
        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }
      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 999;
      }
      .active .close-outline {
        display: inline-block;
      }
      .unordrlist {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(to bottom, #80fac3, #aa78ff);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        visibility: hidden;
        opacity: 0.4;
        z-index: 999;
        transform: translateX(100%);
        transform-origin: top;

        transition: all 3s linear;
      }
      .active .unordrlist {
        visibility: visible;
        opacity: 1;
        transform: translateY(0);
        z-index: 999;
        transform-origin: top;
        transition: all 3s linear;

        .navbar-link {
          font-size: 4rem;
        }
      }
    }
    .cart_item {
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
      background: -webkit-linear-gradient(#39e098, #1e6167);
      position: absolute;
      top: 12%;
      left: 96%;
      font-size: 2rem;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;
  return (
    <>
      <Navbar>
        <div className={menuIcon ? " active inactive" : "inactive"}>
          <ul className="unordrlist">
            <li className="list">
              <NavLink
                to="/"
                className="navbar-link"
                onClick={() => setMenuIcon(false)}
              >
                Home
              </NavLink>
            </li>
            <li className="list">
              <NavLink
                to="/about"
                className="navbar-link"
                onClick={() => setMenuIcon(false)}
              >
                About
              </NavLink>
            </li>
            <li className="list">
              <NavLink
                to="/products"
                className="navbar-link"
                onClick={() => setMenuIcon(false)}
              >
                products
              </NavLink>
            </li>
            <li className="list">
              <NavLink
                to="/contact"
                className="navbar-link"
                onClick={() => setMenuIcon(false)}
              >
                Contact
              </NavLink>
            </li>
            <li className="cart">
              <NavLink
                to="/cart"
                className="navbar-link"
                onClick={() => setMenuIcon(false)}
                id="cartshping"
              >
                <FiShoppingCart />
                <div className="cart_item">{total_item}</div>
              </NavLink>
            </li>
          </ul>

          {/* open and close menu icon */}
          <div className="mobile-navbar-btn">
            <CgMenu
              name="menu-outline"
              className="mobile-nav-icon menu-outline"
              onClick={() => setMenuIcon(true)}
            />
            <CgClose
              name="close-outline"
              className="mobile-nav-icon close-outline"
              onClick={() => setMenuIcon(false)}
            />
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default Nav;

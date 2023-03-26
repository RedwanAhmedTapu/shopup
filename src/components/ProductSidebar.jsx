import React, { useState } from "react";
import styled from "styled-components";
import Category from "./Category";
// import Menu from "./menu";

const ProductSidebar = () => {
  const [category, setCategory] = useState("");

  const mobileCategory = () => {
    setCategory("mobile");
  };
  const laptopCategory = () => {
    setCategory("laptop");
  };
  const accessoriesCategory = () => {
    setCategory("accessories");
  };
  const computerCategory = () => {
    setCategory("computer");
  };
  const watchCategory = () => {
    setCategory("watch");
  };
  const allCategory = () => {
    setCategory("all");
  };

  // console.log(category);
  const Wrapper = styled.section`
    padding: 0rem 35rem;
    position: absolute;
    top: 20rem;
    left: -32rem;

    display: flex;
    flex-shrink: 1;
    z-index: 4;
    gap: 5rem;

    .productsidebar {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      gap: 2rem;
      /* z-index: 4; */

      .text {
        font-weight: 600;
      }
      .btn {
        width: 10rem;
        height: 3.5rem;
        background-color: rgb(121, 24, 169, 0.5);
        border: 0px solid;
        border-radius: 0.3rem;
        box-shadow: 0.3rem 0.3rem rgba(121, 24, 169, 0.2);
      }
      .list {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        font-size: 1.5rem;
        .device-list:hover {
          background-color: #e9e9e9;
          box-shadow: inset 0.1rem 0.1rem 0.1rem 0.1rem #4baee0,
            0.1rem 0.1rem 0.1rem 0.1rem #28769d,
            0.1rem 0.1rem 0.1rem 0.1rem #28769d,
            0.1rem 0.1rem 0.1rem 0.1rem #28769d;
        }
      }
      .cmpny-text,
      .colortxt,
      .prices {
        font-weight: 600;
      }
      .color-all {
        font-size: 1.4rem;
      }
      .divcolor-list {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
      }
      .color {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
      }
      #colorRed {
        background: red;
      }
      #colorBlue {
        background: blue;
      }
      #colorBlack {
        background: black;
      }
      #colorGreen {
        background: green;
      }
      #colorViolet {
        background: violet;
      }
    }

    .category {
      /* width: 100vw; */
      /* height: 100rem; */
      /* display: grid;
      grid-template-columns: repeat(4, 1fr); */
      display: flex;

      /* padding-left: -100rem; */
      /* flex-direction: column; */
      /* justify-content: center; */
      align-items: flex-start;
      /* background-color: yellow; */
      z-index: -1;
      position: relative;
      overflow-x: hidden;
      top: 0rem;

      left: -45rem;
    }
    select {
      width: 10rem;
      height: 3rem;
      border-radius: 1rem;
      background-color: #e9e9e9;
    }
    select:hover {
      background: #33997c;
      transition: 0.5s;
    }
    .option {
      font-size: 1.8rem;
      padding: 8px 16px;
      border: 1px solid transparent;
      border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
      cursor: pointer;
    }
    /* tab resposive */
    @media (max-width: 1288px) {
      /* .productsidebar {
        position: absolute;
        left: 3rem;
      } */
    }
    /* mobile responsive */
    @media (max-width: 665px) {
      /* .productsidebar {
        position: absolute;
        left: 1rem;
      } */
      .productsidebar {
      }
    }
  `;

  return (
    <Wrapper>
      <div className="productsidebar">
        <p className="text">Category</p>
        <ul className="list">
          <li className="device-list" onClick={allCategory}>
            All
          </li>
          <li className="device-list" onClick={mobileCategory}>
            Mobile
          </li>
          <li className="device-list" onClick={laptopCategory}>
            Laptop
          </li>
          <li className="device-list" onClick={computerCategory}>
            Computer
          </li>
          <li className="device-list" onClick={accessoriesCategory}>
            Accessories
          </li>
          <li className="device-list" onClick={watchCategory}>
            Watch
          </li>
        </ul>
        <div className="company">
          <p className="cmpny-text">Company</p>
          <select className="selction">
            <option value="" className="option">
              Asus
            </option>
            <option value="" className="option">
              Hp
            </option>
            <option value="" className="option">
              Toshiba
            </option>
            <option value="" className="option">
              Hukong
            </option>
          </select>
        </div>
        <div className="colors">
          <p className="colortxt">Colors</p>
          <div className="divcolor-list">
            <div className="color-all">All</div>
            <div className="color" id="colorRed"></div>
            <div className="color" id="colorBlue"></div>
            <div className="color" id="colorBlack"></div>
            <div className="color" id="colorGreen"></div>
            <div className="color" id="colorViolet"></div>
          </div>
        </div>
        <div className="price">
          <p className="prices">price</p>
          <p className="currency">88$</p>
        </div>
        <button className="btn">Clear Filter</button>
      </div>
      <div className="category">
        <Category value={category} />
      </div>
    </Wrapper>
  );
};

export default ProductSidebar;

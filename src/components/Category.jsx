import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GridCategoryProducts from "./GridCategoryProducts";
import Menu from "./menu";
// const API = "https://api.pujakaitem.com/api/products";

const Category = (value) => {
  const [products, setProducts] = useState(Menu);

  const Type = value.value;
  useEffect(() => {
    const UpdateItems = Menu.filter((curElem) => {
      return curElem.category === Type;
    });
    Type && setProducts(UpdateItems);
    if (Type === "all") {
      setProducts(products);
    }
  }, [Type, products]);

  console.log(products);
  return (
    <Wrapper>
      <div className="container grid grid-three-column">
        {products.map((Elem) => {
          return <GridCategoryProducts key={Elem.id} {...Elem} />;
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  /* position: fixed;
  left: 25rem; */
  /* top: 20rem; */
  margin-left: 40rem;
  /* width: 20rem; */
  /* height: 100rem; */
  .container {
    max-width: 220rem;
    padding: 2rem 1rem;
    display: grid;

    grid-template-columns: repeat(3, 1fr);
    /* background-color: red; */
  }
  .grid {
    gap: 10rem;
    /* height: 100rem; */
  }
  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }
  .card {
    width: 30rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    .card-data {
      padding: 0 1rem;
    }
    .card-data-flex {
      margin: 2rem 0rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }
    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: rgb(98 84 243);
      }
      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
  /* tab responsive */
  @media (max-width: 1288px) {
    .container {
      position: relative;
      left: 2rem;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 1122px) {
    .container {
      display: grid;
      position: relative;
      left: -2rem;
      grid-template-columns: repeat(2, 1fr);
    }
    .grid {
      gap: 0.5rem;
    }
  }

  /* mobile responsive */
  @media (max-width: 665px) {
    margin-left: 2rem;

    .container {
      display: grid;
      width: 100rem;
      position: relative;
      left: 24rem;
      right: 0;
      grid-template-columns: repeat(1, 1fr);
      padding-left: 13rem;
      gap: 0.5rem;
    }
    .grid {
      gap: 0.5rem;
    }
    figure {
      width: 30rem;
    }
    .card {
      width: 30rem;
    }
  }
  @media (max-width: 280px) {
    .container {
      display: grid;
      width: 100rem;
      position: relative;
      left: 22rem;
      right: 0;
      grid-template-columns: repeat(1, 1fr);
      padding-left: 13rem;
      gap: 0.5rem;
    }
    .card {
      width: 10rem;
    }
    figure {
      width: 20rem;
    }
  }
`;

export default Category;

// import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GridProducts from "./GridProducts";
const API = "https://api.pujakaitem.com/api/products";
const GridView = () => {
  const [products, setProducts] = useState([
    {
      id: "thapaserialnoa",
      name: "iphone x",
      company: "apple",
      price: 6000000,
      colors: ["#ff0000", "#000000", "#CDD0D0"],
      image:
        "https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
      category: "mobile",
      featured: true,
    },
    {
      id: "thapaserialnob",
      name: "samsung s20",
      company: "samsung",
      price: 5000000,
      colors: ["#000", "#22D3EF"],
      image:
        "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
      category: "mobile",
      shipping: true,
    },
    {
      id: "thapaserialnoc",
      name: "Dell Series",
      company: "dell",
      price: 600000,
      colors: ["#22D3EF", "#CDD0D0"],
      image:
        "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "The Laptop is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
      category: "laptop",
    },
    {
      id: "thapaserialnod",
      name: "Nokia 420",
      company: "nokia",
      price: 12599,
      colors: ["#000", "#000000", "#CDD0D0"],
      image:
        "https://images.pexels.com/photos/4224099/pexels-photo-4224099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
      category: "mobile",
      shipping: true,
    },
    {
      id: "thapaserialnoe",
      name: "Mac Pc",
      company: "apple",
      price: 4000099,
      colors: ["#000", "#CDD0D0"],
      image:
        "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "The Computer is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
      category: "computer",
      shipping: true,
    },
    {
      id: "thapaserialnof",
      name: "Macbook Pro",
      company: "apple",
      price: 42999,
      colors: ["#000000", "#CDD0D0"],
      image:
        "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "The Laptop is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
      category: "laptop",
      shipping: true,
    },
    {
      id: "thapaserialnog",
      name: "Asus gseries",
      company: "asus",
      price: 23999,
      colors: ["#CDD0D0", "#000"],
      image:
        "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "The laptop is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
      category: "laptop",
      shipping: true,
    },
    {
      id: "thapaserialnoh",
      name: "Accessories",
      price: 1099999,
      company: "lenova",
      colors: ["#000", "#CDD0D0"],
      image:
        "https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "The accessories is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
      category: "accessories",
      featured: true,
      shipping: true,
    },
    {
      id: "thapaserialnoi",
      name: "Iwatch",
      price: 39999,
      company: "apple",
      colors: ["#000000"],
      image:
        "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "This watch is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
      category: "watch",
      shipping: true,
    },
    {
      id: "thapaserialnoj",
      name: "user need",
      company: "apple",
      price: 300099,
      colors: ["#ff0000", "#22D3EF", "#000000"],
      image:
        "https://images.pexels.com/photos/1619651/pexels-photo-1619651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
      category: "accessories",
    },
    {
      id: "thapaserialnok",
      name: "rolex premium",
      company: "rolex",
      price: 999999,
      colors: ["#000000", "#CDD0D0"],
      image:
        "https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "This watch is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
      category: "watch",
    },
    {
      id: "thapaserialnol",
      name: "galaxy w20",
      price: 311999,
      company: "samsung",
      colors: ["#22D3EF", "#ff0000", "#000000"],
      image:
        "https://images.pexels.com/photos/51011/pexels-photo-51011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "This watch is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
      category: "watch",
      featured: true,
    },
  ]);

  useEffect(() => {
    const products = async () => {
      await fetch(API)
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
        });
    };
    products();
  }, []);
  console.log(products);

  return (
    <Wrapper className="section">
      <div className="container grid grid-three-column">
        {products.map((curElem) => {
          return <GridProducts key={curElem.id} {...curElem} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 0rem 20rem;
  position: relative;
  left: 15rem;
  /* z-index: -1; */
  .container {
    max-width: 120rem;
    padding: 2rem 2rem;
    display: grid;
    /* z-index: -1; */
    grid-template-columns: repeat(4, 1fr);
    /* background-color: #e9e9e9; */
  }
  .grid {
    gap: 2.2rem;
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
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    .card-data {
      padding: 0 1rem;
    }
    .card-data-flex {
      margin: 2rem 0;
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
`;

export default GridView;

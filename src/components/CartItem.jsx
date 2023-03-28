// import axios from "axios";
// import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
// import { useParams } from "react-router-dom";
import styled from "styled-components";
// import useProductContext from "../context/ProductContext";
// import Menu from "./menu";
import { useState } from "react";
import { useCartContext } from "../context/CartContext";
// import { SingleMenuProduct } from "./SingleMenuProduct";
import CartAmountToggle from "./CartAmountToggle";

// const API1 = "https://api.pujakaitem.com/api/products/";

const CartItem = (curElem) => {
  // const [products, setProducts] = useState(Menu);
  // const [amount, setAmount] = useState(0);
  const [ID, setId] = useState();
  const { cart, removeItem, setDecrease, setIncrease } = useCartContext();
  // console.log(ID);
  // // console.log(products);
  // const { id } = useParams();
  // console.log(id);
  // const { singleProduct, getsingleProduct } = useProductContext();
  // const {
  //   id: alias,
  //   name,
  //   company,
  //   price,
  //   description,
  //   category,
  //   stock,
  //   stars,
  //   reviews,
  //   image,
  // } = singleProduct;
  // console.log(singleProduct);
  // console.log(singleProduct);

  // useEffect(() => {
  //   getsingleProduct(`${API1}${"thapaserialnol"}`);
  // }, ["thapaserialnol"]);
  // const getProducts = async (url) => {
  //   const res = await axios.get(url);
  //   const products = await res.data;
  //   setProducts(products);
  // };
  // useEffect(() => {
  //   getProducts(API1);
  // }, [id]);

  // total cartItems
  const { id, name, price, image, amount, stock } = curElem;
  console.log(curElem);
  // const iD = Menu.id;
  // const setDecrease = () => {
  //   amount > 1 ? setAmount(amount - 1) : setAmount(0);
  // };

  // const setIncrease = () => {
  //   amount < stock ? setAmount(amount + 1) : setAmount(stock);
  // };

  //starting  FormatPrice
  const FormatPrice = Intl.NumberFormat("us-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format((price / 8116) * amount);

  // end of Format price
  // ProductImages
  const ImgSrc = image[0].url;
  // console.log(amount);
  // console.log(FormatPrice);

  // deleting of cartItems

  // const DltItem = () => {
  //   setId(id);
  // };
  // if (curElem.id === ID)
  //   curElem.filter((arrelm, index) => {
  //     return index !== ID;
  //   });
  // console.log(M.id);

  return (
    <Wrapper>
      <div className="cart">
        <div className="cartItem">
          <div className="img">
            <img src={ImgSrc} className="cartImg" />
          </div>
          <p className="itemName">{name}</p>

          <CartAmountToggle
            className="cartAmount"
            amount={amount}
            setDecrease={() => {
              setDecrease(id);
            }}
            setIncrease={() => {
              setIncrease(id);
            }}
          />

          <div className="price">{FormatPrice}</div>

          <div className="dlt">
            <MdDelete
              onClick={() => {
                removeItem(id);
              }}
            />
          </div>
        </div>
        {/* <div className="hr"></div> */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;

  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  margin-top: 1rem;
  position: relative;
  left: 5rem;
  /* top: 12rem; */
  margin-top: 12rem;

  .cart {
    display: flex;
    flex-direction: column;
  }
  .cartAmount {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }

  .cartItem {
    width: 100rem;
    height: 25rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: -webkit-linear-gradient(#39e098, #1e6167);
    /* -webkit-background-clip: text; */
    /* -webkit-text-fill-color: transparent; */
  }
  .img {
    width: 25rem;
    height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1e6167;
  }
  .cartImg {
    width: 20rem;
    height: 15rem;
  }
  .img:hover {
    /* width: 100%;
    height: 100%; */
    transition: 0.3s ease-in-out;
    background: rgba(0, 0, 0, 0.4);
  }
  .itemName {
    color: #fff;
    font-size: 3rem;
  }
  .increDecre {
    width: 5rem;
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-size: 2rem;
  }
  .itemsNumber {
    color: #fff;
    font-size: 3rem;
  }
  .price {
    color: #fff;
    font-size: 3rem;
  }
  .dlt {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    color: #fff;
  }

  @media (max-width: 1400px) {
    position: relative;
    left: 10rem;
    .cartItem {
      width: 70rem;
      height: 20rem;
      padding: 5rem;
      box-sizing: border-box;
      gap: 2rem;
    }
    .img {
      width: 20rem;
      height: 15rem;
    }
    .cartImg {
      width: 15rem;
      height: 10rem;
    }
  }

  @media (max-width: 730px) {
    position: relative;
    left: 5rem;
    .cartItem {
      width: 60rem;
      height: 20rem;
      padding: 5rem;
      box-sizing: border-box;
      gap: 2rem;
    }
    .img {
      width: 15rem;
      height: 10rem;
    }
    .cartImg {
      width: 10rem;
      height: 8rem;
    }
  }

  @media (max-width: 585px) {
    position: relative;
    left: 1rem;

    .cartItem {
      width: 30rem;
      height: 40rem;
      gap: 0rem;
      padding: 5rem;
      display: flex;
      box-sizing: border-box;
      gap: 2rem;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      box-sizing: border-box;
    }
    .img {
      width: 14rem;
      height: 10rem;
    }
    .cartImg {
      width: 13rem;
      height: 10rem;
      padding: 1rem;
    }
    .cart {
      display: flex;
      flex-direction: row;
    }
  }
  @media (max-width: 950px) {
    position: relative;
    left: 1rem;
  }
`;

export default CartItem;

import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/CartContext";

const TotalItem = () => {
  const { total_item, total_price } = useCartContext();
  console.log(total_price);

  const FormatPrice = Intl.NumberFormat("us-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(total_price / 8116);

  const Wrapper = styled.div`
    .CartTotal {
      width: 30rem;
      height: 10rem;
      background: #e9e9e9;
      display: grid;
      /* place-self: center; */
      grid-template-columns: repeat(2, 1fr);
      gap: 0.5rem;
      box-sizing: border-box;
      overflow: hidden;
      position: fixed;
      top: 10rem;
      left: 60rem;
    }
    .total {
      background: -webkit-linear-gradient(#39e098, #1e6167);
      /* width: 10rem;
      height: 5rem; */
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 1.6rem;
    }

    @media (max-width: 1260px) {
      .CartTotal {
        left: ;
      }
    }
    @media (max-width: 950px) {
      .CartTotal {
        left: 30.5rem;
      }
    }
    @media (max-width: 560px) {
      .CartTotal {
        left: 14rem;
      }
    }
    @media (max-width: 400px) {
      .CartTotal {
        left: 9.5rem;
      }
    }
    @media (max-width: 290px) {
      .CartTotal {
        left: 3.5rem;
      }
    }
  `;
  return (
    <Wrapper>
      <div className="CartTotal">
        <div className="total">Total Item</div>
        <div className="total">Total Price</div>
        <div className="total">{total_item}</div>
        <div className="total">{FormatPrice}</div>
      </div>
    </Wrapper>
  );
};

export default TotalItem;

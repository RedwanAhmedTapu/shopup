import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import styled from "styled-components";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <Wrapper>
      <div className="cart-button">
        <div className="amount-toggle">
          <button onClick={() => setIncrease()}>
            <FaPlus className="increDecre" />
          </button>
          <div className="amount_style">{amount}</div>
          <button onClick={() => setDecrease()}>
            <FaMinus className="increDecre" />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
 
  justify-content: center;
  align-items: center;
  .increDecre {
    width: 2rem;
    height: 2rem;
    background: -webkit-linear-gradient(#39e098, #1e6167);

    color: #fff;
  }
  .amount_style {
   background-color#fff;   
   color :#39e098 ;
  
    font-weight: 900;
    font-size: 2.5rem;
    padding: 1rem;
  }
  @media (max-width: 585px) {
    .amount-toggle{
  display: flex;
  justify-content: space-between;
}

  }
`;

export default CartAmountToggle;

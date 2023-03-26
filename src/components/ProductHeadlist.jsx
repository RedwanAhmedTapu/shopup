import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";
import styled from "styled-components";

const ProductHeadlist = () => {
  const Wrapper = styled.section`
  /* position: fixed;
 
  width: 100vh;
  top: 9.2rem; */
    .headlist {
      width: 160rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      
     background-color: #fff;
      padding: 2rem 30rem;
      .input {
        width: 20rem;
        height: 5rem;
        border-radius: 1rem;
        -webkit-border-before: none;
        border: 0px solid;
      }
      input::placeholder {
        padding: 4rem;
      }
      .input:hover {
        -webkit-animation: alternate-reverse;
        -
      }
      .grid-menuicon{
        width: 20rem;
        height: 5rem;
        gap: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .icon{
            font-size: 3rem;
        }
        
        
      }
    }
    /* tab responsive */
    @media (max-width: 1288px) {
.headlist{
  margin-left:10rem;
  margin-right:100rem;
  padding: 0rem;
  display: grid;
  grid-template-columns:0fr 3fr 2fr 12fr;
  gap: 0rem;
  .selection{
    width: 10rem;
  }
  
}

    }
    /* movile responsive */
    @media (max-width: 564px) {
      
  .headlist{
      
.grid-menuicon{
  display: none;
}
.selection{
  display: none;
}
.text{
  display: none;
}
.input{
  width: 30rem;
}
    }
    }

  `;
  return (
    <Wrapper>
      <div className="headlist">
        <input className="input" type="search" placeholder="search"></input>
        <div className="grid-menuicon">
          <BsFillGridFill className="icon" />
          <IoMdMenu className="icon" />
        </div>
        <p className="text">12 total products</p>
        <select className="selection">
          <option value="1000" className="option">
            price(lowest)
          </option>
          <option value="200" className="option">
            200$
          </option>
          <option value="34" className="option">
            300$
          </option>
          <option value="455" className="option">
            400$
          </option>
          <option value="1234" className="option">
            10$
          </option>
        </select>
      </div>
    </Wrapper>
  );
};

export default ProductHeadlist;

import React from "react";
import styled from "styled-components";
import Card from "./Card.jsx";
import data from "./Link.jsx";

const Slider = () => {
  const Slider = styled.section`
    .slider {
      width: 100vw;
      height: 60rem;
      padding: 3rem 3rem;
      background: #e9e9e9;
      display: flex;
      flex-direction: column;
      opacity: 0.9;
      box-sizing: border-box;
      .subSlider {
        height: 60rem;
        padding-left: 4rem;
        opacity: 0.9;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        gap: 0.3rem;
      }

      .text {
        display: flex;

        flex-direction: column;

        .check {
          background: -webkit-linear-gradient(#39b5e0, #301e67);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: 1.8rem;
          font-weight: 900;
        }
        .serviceText {
          font-size: 3rem;
        }
      }
    }

    /* tab responsive */

    @media (max-width: 1115px) {
      padding: 0rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .slider {
        height: 130rem;
        gap: 0rem;
        .subSlider {
          padding: 0rem 0rem;
          width: 60rem;
          height: 100rem;
          /* background-color: red; */
          justify-content: center;
          align-items: center;
          flex-direction: column;
          flex-wrap: wrap;
          gap: 0rem;
        }
      }
    }

    /* mobile responsive */

    @media (max-width: 624px) {
      .slider {
        height: 220rem;
        padding-right: 30%;
        gap: 0rem;
        .subSlider {
          height: 400rem;
          padding: 2rem 20%;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 0rem;
        }
      }
    }
  `;
  return (
    <Slider>
      <div className="slider">
        <div className="text">
          <p className="check">Check Now!</p>
          <p className="check serviceText">Our Feature Services </p>
        </div>
        <div className="subSlider">
          {data.map((val) => {
            return (
              <Card
                imgsrc={val.imgsrc}
                title={val.title}
                sname={val.sname}
                link={val.link}
                className="cardbox"
              />
            );
          })}
        </div>
      </div>
    </Slider>
  );
};

export default Slider;

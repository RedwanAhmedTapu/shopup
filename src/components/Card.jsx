import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";

const Card = function Card(props) {
  const Card = styled.section`
    .cards {
      width: 100%;
      height: 50rem;
      /* padding: 6rem 3rem; */
      box-sizing: border-box;
      .card {
        width: 70.25%;
        height: 40rem;
        padding: 14rem 3rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        margin: 0%;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
        background-color: #fff;
        border-radius: 3rem;
        box-shadow: 0rem 1.3rem 1rem -0.7rem rgba(0, 0, 0, 0.1);
      }
      .card:hover {
        box-shadow: 0rem 3rem 1.8rem -0.8rem rgba(0, 0, 0, 0.1);
        transform: scale(1.05, 1.05);
      }
      .card_img {
        width: 100%;
        height: 24rem;
        border-radius: 1rem;
        /* box-sizing: border-box; */
      }

      .card_info {
        box-sizing: border-box;
        background-color: #fff;
        border-bottom-left-radius: 1.2rem;
        border-bottom-right-radius: 1.2rem;
        padding: 1.6rem 2.4rem 2.4rem 2.4rem;
      }

      .card_category {
        text-transform: uppercase;
        font-size: 1.3rem;
        letter-spacing: 0.2rem;
        font-weight: 500;
        color: #868686;
        background-color: #fff;
      }

      .card_title {
        margin-top: 0.5rem;
        margin-bottom: 1rem;
        background-color: #fff;
        text-transform: capitalize;
      }
    }
    /* @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .cards {
        width: 90%;
        padding: 3rem;
        /* height: 100rem; */
      }
      .card_info {
        padding: 1rem;
      }
    } */
  `;
  return (
    <Card>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="mypic" className="card_img" />

          <div className="card_info">
            <span className="card_category">{props.title}</span>
            <h3 className="card_title">{props.sname}</h3>
            <a href={props.link} rel="noreferrer">
              <Button>See Details</Button>
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default Card;

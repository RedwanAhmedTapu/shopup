import React, { useState } from "react";
import styled from "styled-components";

const MyImage = ({ imgs = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(imgs[0]);

  return (
    <Wrapper>
      <div className="grid grid_four_column">
        {imgs.map((curElm, index) => {
          return (
            <figure>
              <img
                src={curElm.url}
                alt={curElm.filename}
                className="box-image--style"
                key={index}
                onClick={() => setMainImage(curElm)}
              />
            </figure>
          );
        })}
      </div>
      {/* 2nd column  */}

      <div className="main_screen">
        <img src={mainImage.url} alt={mainImage.filename} />
        {/* <p>{id}</p> */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  width: 100vw;
  height: 40rem;
  padding: 0rem 4rem;
  position: relative;
  top: 20rem;
  grid-template-columns: 1fr 3fr;
  gap: 0rem;

  .grid {
    /* flex-direction: row; */
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 0.5rem;
    /* order: 2; */
    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  .main_screen {
    display: grid;
    place-items: center;
    order: 1;
    img {
      max-width: 50%;
      height: auto;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  .grid_four_column {
    grid-template-columns: 0.5fr;
    grid-template-rows: repeat(4, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    order: 1;
    .grid_four_column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default MyImage;

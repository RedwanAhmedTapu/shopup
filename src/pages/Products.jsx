import React from "react";
import styled from "styled-components";
// import GridView from "../components/GridView";
// import Category from "../components/Category";
import ProductHeadlist from "../components/ProductHeadlist";
import ProductSidebar from "../components/ProductSidebar";
// import useProductContext from "../context/ProductContext";

const Products = () => {
  // const { products } = useProductContext();
  // console.log(products);

  const Wrapper = styled.section`
    height: 100vh;

    /* background-color: ${({ theme }) => theme.colors.bg}; */
  `;
  return (
    <Wrapper>
      <ProductHeadlist />
      <ProductSidebar />
      {/* <GridView /> */}
      {/* <Category /> */}
    </Wrapper>
  );
};

export default Products;

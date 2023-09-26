import React from "react";
import styled from "styled-components";
// import { SingleMenuProduct } from "../components/SingleMenuProduct";
import CartItem from "../components/CartItem";
import TotalItem from "../components/TotalItem";
import { useCartContext } from "../context/CartContext";
const Cart = () => {
  const { cart } = useCartContext();
  console.log(cart + "cartpro");
  // const location = useLocation();
  // console.log(cart);
  // const { Cartitems, items } = location.state;
  // // const { ID } = location.state;
  // const [Array, setArray] = useState([]);
  // console.log(Cartitems);
  // console.log(items);

  // useEffect(() => {
  //   setArray(items);
  // }, []);
  // if (Cartitems.id === ID)
  //   Cartitems.filter((arrelm, index) => {
  //     return index !== ID;
  //   });

  // const value = { name: name, price: price, stock: stock, image: image };
  // console.log(id);
  // const value = { name, price, image, stock };
  const Wrapper = styled.section`
    height: 100vh;
    /* background-color: ${({ theme }) => theme.colors.bg}; */
  `;
  return (
    <>
      {cart &&
        cart.map((curElem, index) => {
          return <CartItem key={index} {...curElem} />;
        })}
      <TotalItem cart={cart} />
    </>
  );
};

export default Cart;

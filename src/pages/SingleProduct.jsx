// import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
// import MyImage from "../components/MyImage";
import PageNavigation from "../components/PageNavigation";

import { TbTruckDelivery } from "react-icons/tb";

import AddToCart from "../components/AddToCart";
import Star from "../components/Star";
import { useCartContext } from "../context/CartContext";
import { useProductContext } from "../context/ProductContext";
import FormatPrice from "../Helpers/FormatPrice";
import Products from "./Products";

const API1 = "https://api.pujakaitem.com/api/products/";

const SingleProduct = () => {
  // const [products, setProducts] = useState(Menu);
  // const [items, setItems] = useState([]);
  const { addToCart } = useCartContext();
  // console.log(products);
  const { id } = useParams();
  // console.log(id);
  const { singleProduct, getsingleProduct } = useProductContext();
  const {
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;
  console.log(singleProduct);
  console.log(singleProduct);

  useEffect(() => {
    getsingleProduct(`${API1}${id}`);
    // setItems(singleProduct);
  }, []);
  // console.log(items);

  // const getProducts = async (url) => {
  //   const res = await axios.get(url);
  //   const products = await res.data;
  //   setProducts(products);
  // };

  // useEffect(() => {
  //   getProducts(API1);
  // }, [id]);
  // const img = products.image;
  // const carts = {
  //   id: singleProduct.id,
  //   name: singleProduct.name,
  //   price: singleProduct.price,
  //   image: singleProduct.image[0].url,
  //   stock: singleProduct.stock,
  // };
  // const arr = [];
  // local data
  // const getData = () => {
  //   var new_Data = singleProduct;

  //   if (localStorage.getItem("data" === null)) {
  //     localStorage.setItem("data", []);
  //   } else {
  //     var old_Data = [JSON.parse(localStorage.getItem("data"))];
  //     old_Data.push(new_Data);
  //     // old_Data.shift(old_Data[0]);
  //     // console.log(old_Data);

  //     localStorage.setItem("data", JSON.stringify(old_Data));
  //   }
  //   return old_Data;
  // };
  // var localdata = getData();
  // console.log(localdata);

  // console.log(localdata);

  // const Cartitems = [];
  // Cartitems.push(singleProduct);
  // console.log(items);
  // console.log(Cartitems);
  return (
    <Wrapper>
      <PageNavigation title={name} />

      <div className="gird grid_two_column">
        {image ? (
          <img src={image[0].url} alt={name} className="singleImage" />
        ) : (
          <Products />
        )}

        {/* product images */}
        {/* <div className="product_images">
          <MyImage imgs={image} id={id} />
        </div> */}

        {/* product data */}
        <div className="product_data">
          <h2>{name}</h2>
          <Star stars={stars} reviews={reviews} />

          <div className="product_data_price">
            MRP:
            <del>
              <FormatPrice price={price + 30.86} />
            </del>
            <p>{description}</p>
            <div className="product_data_warranty">
              <TbTruckDelivery className="warranty_icon" />
              <p>Free Delivery</p>
            </div>
            <div className="product_data_warranty">
              <TbTruckDelivery className="warranty_icon" />
              <p>Free Delivery</p>
            </div>
            <div className="product_data_warranty">
              <TbTruckDelivery className="warranty_icon" />
              <p>Free Delivery</p>
            </div>
            <div className="product_data_warranty">
              <TbTruckDelivery className="warranty_icon" />
              <p>Free Delivery</p>
            </div>
          </div>
        </div>

        <div className="addTOcart">
          <AddToCart curElem={singleProduct} />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* padding: 3rem; 
  position: absolute;
  top: 10rem;  */
  height: 100vh;

  .container {
    padding: 3rem 0rem;
    display: flex;
  }
  .grid {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
  }
  /* .product_data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem; */

  .product_data_warranty {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    margin-bottom: 1rem;

    .product_warranty_data {
      text-align: center;

      .warranty_icon {
        background-color: rgba(220, 220, 220, 0.5);
        border-radius: 150%;
        width: 4rem;
        height: 4rem;
        padding: 0.6rem;
      }
      p {
        font-size: 1.4rem;
        padding-top: 0.4rem;
      }
    }
  }

  .product_data {
    font-weight: bold;
    width: 60rem;
    z-index: 1;
    position: absolute;

    left: 50rem;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: -webkit-linear-gradient(
      #39e098,
      #000,
      #1e6167,
      #0fc3e7,
      #39e098
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .singleImage {
    width: 60rem;
    height: 35rem;
    position: relative;
    left: 50rem;
  }
  .product_data_price {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .product_data_real_price {
    color: ${({ theme }) => theme.colors.btn};
  }
  .product_data_info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 1.8rem;

    span {
      font-weight: bold;
    }
  }

  hr {
    max-width: 100%;
    width: 90%;
    /* height: 0.2rem; */
    border: 0.1rem solid #2ccb8e;
    color: #00ffff;
  }

  h2 {
    background: -webkit-linear-gradient(#39e098, #1e6167);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .warranty_icon {
    font-size: 5rem;
    background: -webkit-linear-gradient(#39e098, #1e6167);
    border-radius: 5rem;
    color: #fff;
    padding: 1rem;
    /* -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
  }
  .addTOcart {
    position: absolute;
    top: 115rem;
    left: 70rem;
  }

  @media (max-width: 1344px) {
    .addTOcart {
      position: absolute;
      top: 133rem;
      left: 47rem;
    }
    .singleImage {
      position: relative;
      left: 30rem;
      width: 50rem;
      height: 40rem;
    }
    .product_data {
      position: absolute;
      left: 30rem;
      width: 50rem;
      font-size: 3rem;
      .product_data_price {
        font-size: 3rem;
      }
    }
  }
  @media (max-width: 954px) {
    .singleImage {
      position: relative;
      left: 4rem;
      width: 40rem;
      height: 35rem;
    }
    .product_data {
      position: absolute;
      left: 4rem;
      width: 40rem;
    }
    .addTOcart {
      position: absolute;
      top: 130rem;
      left: 15rem;
    }
  }
  @media (max-width: 285px) {
    .singleImage {
      position: relative;
      left: 1rem;
      width: 30rem;
      height: 25rem;
    }
    .product_data {
      position: absolute;
      left: 1rem;
      width: 30rem;
    }
    .addTOcart {
      position: absolute;
      top: 130rem;
      left: 9rem;
    }
  }
`;

export default SingleProduct;

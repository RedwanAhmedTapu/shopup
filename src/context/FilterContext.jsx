import { createContext, useContext, useEffect, useReducer } from "react";
import useProductContext from "../context/ProductContext";
import filterReducer from "../reducer/FilterReducer";
const FilterContext = createContext();

const API1 = "https://api.pujakaitem.com/api/products/";

const initialState = {
  filter_products: [],
  all_products: [],
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  // console.log(products);

  const [state, dispatch] = useReducer(filterReducer, initialState);
  // useEffect(async () => {
  //   const products = await fetch(API1)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);
  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFiltercontext = () => {
  return useContext(FilterContext);
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, name, price, image, stock, amount, singleproduct } =
      action.payload;

    // tackle the existing product

    // let existingProduct = state.cart.find(
    //   (curItem) => curItem.id === id + color
    // );

    // if (existingProduct) {
    //   let updatedProduct = state.cart.map((curElem) => {
    //     if (curElem.id === id + color) {
    //       let newAmount = curElem.amount + amount;

    //       if (newAmount >= curElem.max) {
    //         newAmount = curElem.max;
    //       }
    //       return {
    //         ...curElem,
    //         amount: newAmount,
    //       };
    //     } else {
    //       return curElem;
    //     }
    //   });
    //   return {
    //     ...state,
    //     cart: updatedProduct,
    //   };
    // } else {
    let cartProduct = {
      id: singleproduct.id,
      name: singleproduct.name,
      price: singleproduct.price,

      image: singleproduct.image,

      stock: singleproduct.stock,
      amount: amount,
    };
    console.log(cartProduct);
    return {
      ...state,
      cart: [...state.cart, cartProduct],
    };
  }
  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "CART_ITEM_PRICE_TOTAL") {
    let { total_item, total_price } = state.cart.reduce(
      (accum, curElem) => {
        let { price, amount } = curElem;
        console.log(curElem);

        accum.total_item += amount;

        accum.total_price += price * amount;
        console.log(accum.total_item);
        console.log(accum.total_price);

        return accum;
      },
      {
        total_item: 0,
        total_price: 0,
      }
    );
    return {
      ...state,
      total_item,
      total_price,
    };
  }

  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      console.log(curElem.id);
      if (curElem.id === action.payload) {
        let decAmount = curElem.amount - 1;

        if (decAmount <= 1) {
          decAmount = 1;
        }

        return {
          ...curElem,
          amount: decAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incAmount = curElem.amount + 1;

        if (incAmount >= curElem.stock) {
          incAmount = curElem.stock;
        }

        return {
          ...curElem,
          amount: incAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  // if (action.type === "CART_TOTAL_ITEM") {
  //   let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
  //     let { amount } = curElem;

  //     initialVal = initialVal + amount;
  //     return initialVal;
  //   }, 0);

  //   return {
  //     ...state,
  //     total_item: updatedItemVal,
  //   };
  // }

  return state;
};
// to set the increment and decrement
// if (action.type === "SET_DECREMENT") {
//   let updatedProduct = state.cart.map((curElem) => {
//     if (curElem.id === action.payload) {
//       let decAmount = curElem.amount - 1;

//       if (decAmount <= 1) {
//         decAmount = 1;
//       }

//       return {
//         ...curElem,
//         amount: decAmount,
//       };
//     } else {
//       return curElem;
//     }
//   });
//   return { ...state, cart: updatedProduct };
// }

// if (action.type === "SET_INCREMENT") {
//   let updatedProduct = state.cart.map((curElem) => {
//     if (curElem.id === action.payload) {
//       let incAmount = curElem.amount + 1;

//       if (incAmount >= curElem.max) {
//         incAmount = curElem.max;
//       }

//       return {
//         ...curElem,
//         amount: incAmount,
//       };
//     } else {
//       return curElem;
//     }
//   });
//   return { ...state, cart: updatedProduct };
// }

// to empty or to clear to cart
// if (action.type === "CLEAR_CART") {
//   return {
//     ...state,
//     cart: [],
//   };
// }

// }

// if (action.type === "CART_TOTAL_PRICE") {
//   let total_price = state.cart.reduce((initialVal, curElem) => {
//     let { price, amount } = curElem;

//     initialVal = initialVal + price * amount;

//     return initialVal;
//   }, 0);

//   return {
//     ...state,
//     total_price,
//   };
// }

// return {
//   ...state,
//   total_item,
//   total_price,
// };
// return state;

export default cartReducer;

// https://stackoverflow.com/questions/63117470/how-to-return-two-values-in-reduce#:~:text=You%20cannot%20return%20two%20values%20in%20reduce%20.

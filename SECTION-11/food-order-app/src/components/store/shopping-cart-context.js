import React, { useEffect, useReducer, useState } from "react";
import { addToShoppingCartHandler } from "../service/helpers";

export const ShoppingCartContext = React.createContext({
  items: [],
  shoppingCart: [],
  badgeValue: 0,
  dispatchShoppingCart: () => {},
  // placeAnOrder: () => {}, //add later
  // isLoggedIn: false, //add later
});
//later add logic for logged user an
//and different possibilities for admin
//----------------------------------------------

const ShoppingCartContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const [shoppingCartState, dispatchShoppingCart] =
    useReducer(shoppingCartReducer);

  const shoppingCartReducer = (state, action) => {
    if (action.body) {
      //through action.body pass arguments, when dispatching
      const { id, amount, price, title } = { ...action.body };
      if (action.type === "ADD_TO_CART") {
        return addToShoppingCartHandler(
          id,
          amount,
          price,
          title,
          state,
          setItems
        );
      } else if (action.type === "TAKE_FROM_CART") {
        return {
          /*--------------------------------------
          -------------------------
          Pending tasks: 
          ------enter helpers.js and set logic for removeFromShoppingCardHandler-------
          ------dispatch actions ADD_TO_CART and TAKE_FROM_CART
          -----------------------------------*/
          shoppingCart: removeFromShoppingCartHandler(id, state, setItems),
        };
      }
    }
    return { shoppingCart: [], badgeValue: false };
  };

  useEffect(() => {
    let shoppingCartStored =
      localStorage.getItem("SHOPPING_CART")?.JSON.parse() || [];
    //fetchdata and check local storage Reminder!: remember to store shopping-cart data with: JSON.stringify()
    setShoppingCart(shoppingCartStored);
  }, []);

  return (
    <ShoppingCartContext.Provider
      value={{
        items: items,
        shoppingCart: shoppingCartState.shoppingCart,
        badgeValue: shoppingCartState.badgeValue,
        dispatchShoppingCart: dispatchShoppingCart,
      }}
    >
      {props.children}
    </ShoppingCartContext.Provider>
  );
};
export default ShoppingCartContextProvider;

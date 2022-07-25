import React, { useReducer, useState } from "react";
import {
  decreaseAmountOfExisting,
  DUMMY_DATA,
  increaseAmountOfExisting,
  shoppingCartReducer,
} from "../service/helpers";

export const ShoppingCartContext = React.createContext({
  items: [],
  returnBackToItemsList: () => {},
  takeFromItemsList: () => {},
  shoppingCart: [],
  badgeValue: 0,
  dispatchShoppingCart: () => {},
});

const ShoppingCartContextProvider = (props) => {
  const [items, setItems] = useState(DUMMY_DATA);
  console.log("...the beginning");

  const [shoppingCartState, dispatchShoppingCart] =
    useReducer(shoppingCartReducer);

  const returnBackToItemsListHandler = (id) => {
    setItems((prev) => increaseAmountOfExisting(id, 1, prev));
  };
  const takeFromItemsListHandler = (id, amount) => {
    setItems((prev) => decreaseAmountOfExisting(id, amount, prev));
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        items: items,
        returnBackToItemsList: returnBackToItemsListHandler,
        takeFromItemsList: takeFromItemsListHandler,
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

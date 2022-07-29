import React, { useReducer, useState } from "react";
import {
  addNewItem,
  decreaseAmountOfExisting,
  increaseAmountOfExisting,
  shoppingCartReducer,
} from "../service/helpers";

export const ShoppingCartContext = React.createContext({
  items: [],
  placeItems: () => {},
  returnBackToItemsList: () => {},
  takeFromItemsList: () => {},
  shoppingCart: [],
  badgeValue: 0,
  dispatchShoppingCart: () => {},
});

const ShoppingCartContextProvider = (props) => {
  const [items, setItems] = useState([]);

  const [shoppingCartState, dispatchShoppingCart] = useReducer(
    shoppingCartReducer,
    { shoppingCart: [], badgeValue: 0 }
  );

  const getItemsHandler = (arr) => {
    setItems(arr);
  };
  const returnBackToItemsListHandler = (id, title, amount, price) => {
    const index = items.find((el) => el.id === id);
    if (index == !-1) {
      return setItems((prev) => addNewItem(id, title, amount, price, prev));
    }
    console.log("here");
    setItems((prev) => increaseAmountOfExisting(id, 1, prev));
  };

  const takeFromItemsListHandler = (id, amount) => {
    setItems((prev) => decreaseAmountOfExisting(id, amount, prev));
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        items: items,
        placeItems: getItemsHandler,
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

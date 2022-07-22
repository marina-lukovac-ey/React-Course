import React, { useEffect, useReducer, useState } from "react";

export const ShoppingCartContext = React.createContext({
  shoppingCart: [],
  badgeValue: 0,
  showCart: false,
  addToShoppingCart: () => {},
  removeFromShoppingCart: () => {},
  openShoppingCart: () => {},
  // placeAnOrder: () => {}, //add later
  // isLoggedIn: false, //add later
});
//later add logic for logged user an
//and different possibilities for admin
//----------------------------------------------

const ShoppingCartContextProvider = (props) => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [badgeValue, setBadgeValue] = useState(0);
  // const [shoppingCartState,dispatchShoppingCart] = useReducer(shoppingCartReducer)
  const [showCart, setShowCart] = useState(false);
  const [items, setItems] = useState([]);

  const addToShoppingCartHandler = ({ id, amount, price, title }) => {
    setShoppingCart((prev) => {
      let newItem = { id: id, amount: amount, price: price, title: title }; //until items' state is lifted here
      if (!prev.length) return [newItem];

      let index = prev.findIndex((el) => el.id === id);
      if (index === -1) {
        return [...prev, newItem];
      } else {
        let temp = [...prev];
        temp.splice(index, 1, newItem);
        temp[index].amount += amount;
        return temp;
      }
    });
    setBadgeValue((prev) => {
      return prev + +amount;
    });
  };
  const openShoppingCartHandler = () => {
    setShowCart((prev) => !prev);
  };

  const removeFromShoppingCartHandler = (id) => {
    setShoppingCart((prev) => {
      let index = prev.findIndex((el) => el.id === id);
      let item = { ...prev[index] };
      let restItems = prev.filter((el) => el.id !== id);
      if (item.amount === 1) {
        return restItems;
      } else {
        return [...restItems, { ...item, amount: --item.amount }];
      }
    });
  };

  //later
  ///*
  useEffect(() => {
    let shoppingCartStored =
      localStorage.getItem("SHOPPING_CART")?.JSON.parse() || [];
    setShoppingCart(shoppingCartStored);
    //fetchdata
    setItems(DUMMY_DATA);
  }, []);
  //*/
  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart: shoppingCart,
        badgeValue: badgeValue,
        showCart: showCart,
        addToShoppingCart: addToShoppingCartHandler,
        removeFromShoppingCart: removeFromShoppingCartHandler,
        openShoppingCart: openShoppingCartHandler,
      }}
    >
      {props.children}
    </ShoppingCartContext.Provider>
  );
};
export default ShoppingCartContextProvider;

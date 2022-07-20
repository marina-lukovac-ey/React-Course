import React, { useState } from "react";
const DUMMY_DATA = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
export const ItemsContext = React.createContext({
  items: [],
  shoppingCart: [], //{id: {`shopping-cart${item.id}`, amount: string}
  addToShoppingCart: () => {},
  removeFromShoppingCart: () => {},
  placeAnOrder: () => {},
  openCartHandler: () => {},
  isLoggedIn: false,
});
//later add logic for logged user an
//and different possibilities for admin
const ItemsContextProvider = (props) => {
  //handling the logic for shoppingCart state and
  const [shoppingCart, setShoppingCart] = useState([
    { amount: 5 },
    { amount: 10 },
    { amount: 2 },
  ]);
  const [items, setItems] = useState(DUMMY_DATA);

  /*const addToShoppingCartHandler = (id, amount) => {
    //
    const item = { ...items.find((item) => item.id === id) };

    setShoppingCart((prev) => {
      let index = prev.findIndex((el) => el.id === `shopping-cart${id}`);
      if (index === -1) {
        return [...prev, { ...item }];
      } else {
        return [
          ...prev.filter((el) => el.id !== id),
          { id: item.id, amount: prev[index].amount + amount },
        ];
      }
    });
    setItems(
      (prev) => {
        let index = prev.findIndex((el) => el.id === id);

        //1.case if amount === item.amount
        //2.case if not //change amount
      }
      //   prev.map((el) => {
      //     if (el.id === id) {
      //         if(el.amount ===item.amount){

      //         }
      //       return { ...item, amount: item.amount - amount };
      //     } else {
      //       return item;
      //     }
      //   })
    );
  };
  */

  /* shopping Cart Badge Logic: ==> useReducer (total, badgeAmount, shoppingCart) go together
    const ctx = useContext(ItemsContext);

  if (ctx.shoppingCart.length) {
    badgeAmount = ctx.shoppingCart.reduce(
      (prev, cur) => prev.amount + cur.amount,
      0
    );
    console.log("badge amount: ", badgeAmount);
  }
  */

  const openCartHandler = () => {
    setShoppingCart([{ amount: 7 }, { amount: 3 }]);
  };
  return (
    <ItemsContext.Provider
      value={{
        items: items,
        shoppingCart: shoppingCart,
        // addToShoppingCart: addToShoppingCartHandler,
        openCartHandler: openCartHandler,
      }}
    >
      {props.children}
    </ItemsContext.Provider>
  );
};
export default ItemsContextProvider;

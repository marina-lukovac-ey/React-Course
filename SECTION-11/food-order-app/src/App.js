import { useState } from "react";
import "./App.css";
import Cart from "./components/Header/Cart/Cart";
import Header from "./components/Header/Header";
import MealList from "./components/Meals/MealList";
import MealsSummary from "./components/MealsSummary/MealsSummary";
import {
  addNewItem,
  increaseAmountOfExisting,
} from "./components/service/helpers";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    availableAmount: 14,
  },
  {
    id: "m2",
    title: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    availableAmount: 5,
  },
  {
    id: "m3",
    title: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    availableAmount: 2,
  },
  {
    id: "m4",
    title: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    availableAmount: 10,
  },
];
function App() {
  const [items, setItems] = useState(DUMMY_DATA);
  const [showCart, setShowCart] = useState(false);
  //useReducer for these: shoppingCart, badgeValue
  const [shoppingCart, setShoppingCart] = useState([]);
  const [badgeValue, setBadgeValue] = useState(0);

  //shopping cart logic
  const addToShoppingCartHandler = (id, amount, price, title) => {
    setShoppingCart((prev) => {
      let index = prev.findIndex((el) => el.id === id);
      if (!prev.length || index === -1) {
        return addNewItem(id, title, amount, price, prev);
      } else {
        increaseAmountOfExisting(id, amount, prev);
      }
    });
    setBadgeValue((prev) => prev + +amount);
  };
  const removeFromShoppingCartHandler = (id) => {
    setShoppingCart((prev) => {
      if (prev[index].amount === 1) {
        return prev
          .filter((el) => el.id !== id)
          .map((el) => {
            return { ...el };
          });
      } else {
        prev.map((el) =>
          el.id === id ? { ...el, amount: el.amount - 1 } : { ...el }
        );
      }
    });
  };
  const openShoppingCartHandler = () => {
    setShowCart((prev) => !prev);
  };

  return (
    <>
      <Header cartOpenner={openShoppingCartHandler} />
      <MealsSummary />
      <MealList items={items} addToCart={addToShoppingCartHandler} />
      {showCart && <Cart />}
    </>
  );
}

export default App;

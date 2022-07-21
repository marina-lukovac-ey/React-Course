import classes from "./MealList.module.css";
import { useContext, useState } from "react";
import MealItem from "./MealItem";
import { ShoppingCartContext } from "../store/shopping-cart-context";
import Cart from "../Header/Cart/Cart";

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
const MealList = () => {
  const [items, setItems] = useState(DUMMY_DATA);
  //import list items from context
  return (
    <div className={`${classes.card} ${classes.meals}`}>
      <ul>
        {items.map((item) => (
          <MealItem key={item.id} item={item} />
        ))}
      </ul>
      {/* place cart here so there is accessibility to setItems */}
    </div>
  );
};
export default MealList;

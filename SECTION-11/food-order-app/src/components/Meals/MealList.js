import classes from "./MealList.module.css";
import { useContext } from "react";
import { ShoppingCartContext } from "../store/shopping-cart-context";
import MealItem from "./MealItem";

const MealList = () => {
  const ctx = useContext(ShoppingCartContext);
  return (
    <div className={`${classes.card} ${classes.meals}`}>
      <ul>
        {ctx.items.map((item) => (
          <MealItem key={item.id} item={item} />
        ))}
      </ul>
      {/* place cart here so there is accessibility to setItems */}
    </div>
  );
};
export default MealList;

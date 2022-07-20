import classes from "./MealList.module.css";
import { useContext } from "react";
import { ItemsContext } from "../store/items-context";
import MealItem from "./MealItem";

const MealList = () => {
  //import list items from context
  const ctx = useContext(ItemsContext);
  return (
    <div className={`${classes.card} ${classes.meals}`}>
      <ul>
        {ctx.items.map((item) => (
          <MealItem
            key={item.id}
            price={item.price}
            title={item.title}
            amount={item.amount}
          />
        ))}
      </ul>
    </div>
  );
};
export default MealList;

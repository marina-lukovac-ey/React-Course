import classes from "./MealList.module.css";
import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../store/shopping-cart-context";
import MealItem from "./MealItem";
import { getMealsFromDB } from "../service/http-requests";

const MealList = () => {
  const { items, placeItems } = useContext(ShoppingCartContext);

  useEffect(() => {
    const getMealsList = (data) => {
      let temp = [];
      for (const key in data) {
        temp.push({ ...data[key], id: key });
      }
      placeItems(temp);
    };
    getMealsFromDB(getMealsList);
  }, []);
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

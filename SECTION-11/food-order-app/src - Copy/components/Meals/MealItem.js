import classes from "./MealItem/MealItem.module.css";
import MealItemForm from "./MealItem/MealItemForm";

const MealItem = ({ item }) => {
  return (
    <li className={classes.meal}>
      <article className={classes.info}>
        <h3>{item.title}</h3>
        <p className={classes.description}>{item.description}</p>
        <p className={classes.price}>${item.price}</p>
      </article>
      <MealItemForm item={item} />
    </li>
  );
};
export default MealItem;

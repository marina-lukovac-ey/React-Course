import classes from "./MealItem/MealItem.module.css";
import formStyle from "./MealItem/MealItemForm.module.css";

const MealItem = ({ price, amount, description }) => {
  return (
    <li className={classes.meal}>
      <article className={classes.info}>
        <h3>Meal Name</h3>
        <p className={classes.description}>this is a description</p>
        <p className={classes.price}>$353</p>
      </article>
      <form className={formStyle.form}>
        <div className={formStyle.input}>
          <label>Amount</label>
          <input />
          {/* only used for display purposes */}
        </div>
        <button>+</button>
        <button>-</button>
      </form>
    </li>
  );
};
export default MealItem;

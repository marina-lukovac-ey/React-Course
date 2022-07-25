import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = ({ meal }) => {
  const { id, title, price, amount, description } = meal;
  const priceFormat = `$${price.toFixed(2)}`;

  const cartContext = useContext(CartContext);

  const addToCartHandler = (amountEntered) => {
    // /*
    cartContext.addItem({
      title: title,
      amount: amountEntered,
      id: `cart-item:${id}`,
      price: price,
    });
    // */
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{title}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{priceFormat}</div>
      </div>
      <div>
        <MealItemForm
          id={id}
          maxAmount={amount}
          onAddToCart={addToCartHandler}
        />
      </div>
    </li>
  );
};

export default MealItem;

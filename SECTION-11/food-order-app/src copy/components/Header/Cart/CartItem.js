import { useContext } from "react";
import { ShoppingCartContext } from "../../store/shopping-cart-context";
import classes from "./CartItem.module.css";

const CartItem = ({ item }) => {
  const price = `$${(+item.price).toFixed(2)}`;
  const ctx = useContext(ShoppingCartContext);
  onClickDecreaseAmount = () => {
    ctx.removeFromShoppingCart(item.id);
  };
  onClickIncreaseAmount = () => {
    ctx.addToShoppingCart(item.id, item.amount);
  };
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{item.title}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {item.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onClickDecreaseAmount}>−</button>
        <button onClick={onClickIncreaseAmount}>+</button>
      </div>
    </li>
  );
};

export default CartItem;

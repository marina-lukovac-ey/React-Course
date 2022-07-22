import classes from "./CartItem.module.css";
import { useContext } from "react";
import { ShoppingCartContext } from "../../store/shopping-cart-context";

const CartItem = ({ item }) => {
  const { id, amount, price, title } = { ...item };
  const totalPrice = `$${(+item.price).toFixed(2)}`; //per item
  const ctx = useContext(ShoppingCartContext);

  onClickDecreaseAmount = () => {
    ctx.returnBackToItemsList(id);
    ctx.dispatchShoppingCart({
      action: "TAKE_FROM_CART",
      body: { id: id },
    });
  };

  onClickIncreaseAmount = () => {
    ctx.takeFromItemsList(id, amount);
    ctx.dispatchShoppingCart({
      action: "ADD_TO_CART",
      body: { id: id, amount: 1, price: price, title: title },
    });
  };

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{title}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {amount}</span>
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

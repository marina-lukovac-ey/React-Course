import { useContext } from "react";
import { ItemsContext } from "../store/items-context";
import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";

const CartButton = () => {
  let badgeAmount = 0;

  return (
    <button className={classes.button}>
      <div className={classes.icon}>
        <CartIcon />
      </div>
      Your Cart
      <div className={classes.badge}>{badgeAmount}</div>
    </button>
  );
};
export default CartButton;

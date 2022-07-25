import classes from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";
import { useContext } from "react";
import { ShoppingCartContext } from "../store/shopping-cart-context";

const CartButton = ({ onClickOpen }) => {
  const ctx = useContext(ShoppingCartContext);
  return (
    <button className={classes.button} onClick={onClickOpen}>
      <div className={classes.icon}>
        <CartIcon />
      </div>
      Your Cart
      <div className={classes.badge}>{ctx.badgeValue}</div>
    </button>
  );
};
export default CartButton;

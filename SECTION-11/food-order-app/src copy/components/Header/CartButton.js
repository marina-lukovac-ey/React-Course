import React, { useContext } from "react";
import { ShoppingCartContext } from "../store/shopping-cart-context";
import Cart from "./Cart/Cart";
import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";

const CartButton = () => {
  const ctx = useContext(ShoppingCartContext);
  return (
    <React.Fragment>
      <button className={classes.button} onClick={ctx.openShoppingCart}>
        <div className={classes.icon}>
          <CartIcon />
        </div>
        Your Cart
        <div className={classes.badge}>{ctx.badgeValue}</div>
      </button>
      {ctx.showCart && <Cart />}
    </React.Fragment>
  );
};
export default CartButton;

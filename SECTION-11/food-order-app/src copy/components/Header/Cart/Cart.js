import classes from "./Cart.module.css";
import display from "../../UI/Modal/Modal.module.css";
import React, { useContext } from "react";
import { ShoppingCartContext } from "../../store/shopping-cart-context";
import CartItem from "./CartItem";
//create portal to body... (modal)

function Cart() {
  const ctx = useContext(ShoppingCartContext);
  console.log(ctx.shoppingCart);
  return (
    <article className={display.modal}>
      <div className={classes.total}>
        <h3>Total Amount:</h3>
      </div>
      <ul className={classes[`cart-items`]}>
        {ctx.shoppingCart.length &&
          ctx.shoppingCart.map((item) => (
            <CartItem key={`$shopping-cart-${item.id}`} item={item} />
          ))}
      </ul>
    </article>
  );
}

export default Cart;

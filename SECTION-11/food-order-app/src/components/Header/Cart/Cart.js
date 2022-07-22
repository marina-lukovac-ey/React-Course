import classes from "./Cart.module.css";
import React, { useContext } from "react";
import { ShoppingCartContext } from "../../store/shopping-cart-context";
import CartItem from "./CartItem";
import Modal from "../../UI/Modal/Modal";
//create portal to body... (modal)

function Cart() {
  const ctx = useContext(ShoppingCartContext);
  console.log(ctx.shoppingCart);

  return (
    <Modal closeModal={ctx.openShoppingCart}>
      <div className={classes.total}>
        <h3>Total Amount:</h3>
      </div>
      <ul className={classes[`cart-items`]}>
        {ctx.shoppingCart.length &&
          ctx.shoppingCart.map((item) => (
            <CartItem key={`$shopping-cart-${item.id}`} item={item} />
          ))}
      </ul>
    </Modal>
  );
}

export default Cart;

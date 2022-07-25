import classes from "./Cart.module.css";
import React, { useContext } from "react";
import { ShoppingCartContext } from "../../store/shopping-cart-context";
import CartItem from "./CartItem";
import Modal from "../../UI/Modal/Modal";
//create portal to body... (modal)

function Cart({ openCloseCart }) {
  const ctx = useContext(ShoppingCartContext);

  return (
    <Modal closeModal={openCloseCart}>
      <ul className={classes[`cart-items`]}>
        {ctx.shoppingCart.length &&
          ctx.shoppingCart.map((item) => (
            <CartItem key={`$shopping-cart-${item.id}`} item={item} />
          ))}
      </ul>
      <div className={classes.total}>
        <h3>Total Amount:</h3>
        <button className={classes.button} onClick={openCloseCart}>
          Cancel
        </button>
        <button
          className={`${classes.button} ${classes.actions}`}
          onClick={openCloseCart}
        >
          Order
        </button>
      </div>
    </Modal>
  );
}

export default Cart;

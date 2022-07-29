import classes from "./Cart.module.css";
import React, { useContext } from "react";
import { ShoppingCartContext } from "../../store/shopping-cart-context";
import CartItem from "./CartItem";
import Modal from "../../UI/Modal/Modal";
//create portal to body... (modal)

function Cart({ openCloseCart }) {
  const ctx = useContext(ShoppingCartContext);

  let showCartContent = (
    <div className={classes.total}>
      <h3>Your Cart is empty</h3>
      <button className={classes.button} onClick={openCloseCart}>
        Back to Shop
      </button>
    </div>
  );
  if (ctx.shoppingCart.length !== 0) {
    showCartContent = (
      <>
        <ul className={classes[`cart-items`]}>
          {ctx.shoppingCart.map((item) => (
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
      </>
    );
  }

  return <Modal closeModal={openCloseCart}>{showCartContent}</Modal>;
}

export default Cart;

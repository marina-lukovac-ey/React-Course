import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;
  const cartItemAddToCartHandler = (item) => {
    cartContext.addItem(item);
  };
  const cartItemRemoveFromCartHandler = (id) => {
    cartContext.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onRemove={cartItemRemoveFromCartHandler.bind(null, item.id)} //bind null and pass item.id
          onAdd={cartItemAddToCartHandler.bind(null, { ...item, amount: 1 })}
        />
      ))}
    </ul>
  );
  return (
    <Modal onShowHideCart={props.onShowHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div>
        <button
          onClick={props.onShowHideCart}
          className={classes["button--alt"]}
        >
          Close
        </button>
        {hasItems && (
          <button onClick={props.onShowHideCart} className={classes.button}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;

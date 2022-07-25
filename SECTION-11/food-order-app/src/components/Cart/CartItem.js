import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { title, amount, price } = props.item;
  return (
    <li className={classes["cart-item"]}>
      <h2>{title}</h2>
      <div className={classes.summary}>
        <span className={classes.price}>{price}</span>
        <span className={classes.amount}>{amount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;

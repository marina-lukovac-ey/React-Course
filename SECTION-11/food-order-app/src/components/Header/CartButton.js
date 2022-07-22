import classes from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";

const CartButton = () => {
  return (
    <button className={classes.button}>
      <div className={classes.icon}>
        <CartIcon />
      </div>
      Your Cart
      <div className={classes.badge}>{ctx.badgeValue}</div>
    </button>
  );
};
export default CartButton;

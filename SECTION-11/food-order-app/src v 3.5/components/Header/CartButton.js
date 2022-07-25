import classes from "./HeaderCartButton.module.css";

const CartButton = (props) => {
  return <button className={classes.button}>{props.children}</button>;
};
export default CartButton;

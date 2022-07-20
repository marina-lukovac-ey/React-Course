import classes from "./Header.module.css";
import CartIcon from "./CartIcon";
import CartButton from "./CartButton";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>React App</h1>
      <CartButton>
        <CartIcon className={classes["main-image"]}></CartIcon>
      </CartButton>
    </header>
  );
};
export default Header;

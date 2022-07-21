import classes from "./Header.module.css";
import mealsImage from "./meals.jpg";
import CartButton from "./CartButton";
import ShoppingCartContextProvider from "../store/shopping-cart-context";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>React App</h1>
        <CartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Prepared food" />
      </div>
    </>
  );
};
export default Header;

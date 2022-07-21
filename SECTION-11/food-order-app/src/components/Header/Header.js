import classes from "./Header.module.css";
import mealsImage from "./meals.jpg";
import CartButton from "./CartButton";
import ShoppingCartContextProvider from "../store/shopping-cart-context";

const Header = ({ cartOpenner }) => {
  const cartOpennerHandler = () => {
    cartOpenner();
  };
  return (
    <>
      <header className={classes.header}>
        <h1>React App</h1>
        <CartButton onClick={cartOpennerHandler} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Prepared food" />
      </div>
    </>
  );
};
export default Header;

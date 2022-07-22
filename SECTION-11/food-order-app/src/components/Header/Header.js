import classes from "./Header.module.css";
import mealsImage from "./meals.jpg";
import { useState } from "react";
import Cart from "./Cart/Cart";
import CartButton from "./CartButton";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const openShoppingCartHandler = () => {
    setShowCart((prev) => !prev);
  };
  return (
    <>
      <header className={classes.header}>
        <h1>React App</h1>
        <CartButton onClick={openShoppingCartHandler} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Prepared food" />
      </div>
      {showCart && <Cart openCloseCart={openShoppingCartHandler} />}
    </>
  );
};
export default Header;

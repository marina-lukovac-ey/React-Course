import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);
  const showHideCartHandler = () => {
    setShowCart((prev) => !prev);
  };
  return (
    <CartProvider>
      {showCart && <Cart onShowHideCart={showHideCartHandler} />}
      <Header onShowHideCart={showHideCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

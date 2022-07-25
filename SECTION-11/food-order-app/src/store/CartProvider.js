import CartContext from "./cart-context";
import { useReducer } from "react";
//needed for reducer: defaultstate, and reducer function
const defaultCartState = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    if (existingCartItemIndex === -1 || !state.items.length) {
      const updatedItems = state.items.concat(action.item);
      return { items: updatedItems, totalAmount: updatedTotalAmount };
    } else {
      return {
        items: state.items.map((item, index) =>
          index === existingCartItemIndex
            ? { ...item, amount: item.amount + action.item.amount }
            : { ...item }
        ),
        totalAmount: updatedTotalAmount,
      };
    }
  } else if (action.type === "REMOVE") {
    const existingCartItem = state.items.find((item) => item.id === action.id);
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;

    if (existingCartItem.amount === 1) {
      return {
        items: state.items.filter((item) => item.id !== action.id),
        totalAmount: updatedTotalAmount,
      };
    } else {
      return {
        items: state.items.map((item) => {
          if (item.id === action.id) {
            return { ...item, amount: item.amount - 1 };
          } else {
            return { ...item };
          }
        }),
        totalAmount: updatedTotalAmount,
      };
    }
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
{
}

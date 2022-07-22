```

export const ShoppingCartContext = React.createContext({
  items: [],
  returnBackToItemsList: () => {},
  takeFromItemsList: () => {},
  shoppingCart: [],
  badgeValue: 0,
  dispatchShoppingCart: () => {},
  // placeAnOrder: () => {}, //add later
  // isLoggedIn: false, //add later
});
//later add logic for logged user an
//and different possibilities for admin
//----------------------------------------------

const ShoppingCartContextProvider = (props) => {
  const [items, setItems] = useState([]);

  const [shoppingCartState, dispatchShoppingCart] =
    useReducer(shoppingCartReducer);

  const returnBackToItemsListHandler = (id) => {
    setItems((prev) => increaseAmountOfExisting(id, 1, prev));
  };
  const takeFromItemsListHandler = (id, amount) => {
    setItems((prev) => decreaseAmountOfExisting(id, amount, prev));
  };
  // useEffect(() => {
  //   let shoppingCartStored =
  //     localStorage.getItem("SHOPPING_CART")?.JSON.parse() || [];
  //   //fetchdata and check local storage Reminder!: remember to store shopping-cart data with: JSON.stringify()
  //   setShoppingCart(shoppingCartStored);
  // }, []);

  return (
    <ShoppingCartContext.Provider
      value={{
        items: items,
        returnBackToItemsList: returnBackToItemsListHandler,
        takeFromItemsList: takeFromItemsListHandler,
        shoppingCart: shoppingCartState.shoppingCart,
        badgeValue: shoppingCartState.badgeValue,
        dispatchShoppingCart: dispatchShoppingCart,
      }}
    >
      {props.children}
    </ShoppingCartContext.Provider>
  );
};
export default ShoppingCartContextProvider;
```

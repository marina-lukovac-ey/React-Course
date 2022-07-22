//purpose of these helpers is deepCopy without a library handling of a state
export const addNewItem = (id, title, amount, price, array) => {
  return [
    array.map((el) => {
      return { ...el };
    }),
    { id: id, title: title, amount: amount, price: price },
  ];
};

export const increaseAmountOfExisting = (id, amountIncrement, array) => {
  return array.map((el) =>
    el.id === id ? { ...el, amount: el.amount + amountIncrement } : { ...el }
  );
};
export const decreaseAmountOfExistingIncrementally = (id, array) => {
  return array.map((el) =>
    el.id === id ? { ...el, amount: el.amount - 1 } : { ...el }
  );
};
export const removeCompletelyFromArray = (id, array) => {
  return prev
    .filter((el) => el.id !== id)
    .map((el) => {
      return { ...el };
    });
};
export const addToShoppingCartHandler = ({
  id,
  amount,
  price,
  title,
  state,
  setItems,
}) => {
  const shoppingCart = state.shoppingCart;
  const badgeValue = state.badgeValue + +amount;

  //logic where items are set

  setItems((prev) => {
    if (prev[index].amount === 1) {
      removeCompletelyFromArray(id, prev);
    } else {
      decreaseAmountOfExistingIncrementally(id, prev);
    }
  });

  //logic where shoppingCartState is set
  let index = shoppingCart.findIndex((el) => el.id === id);
  if (!shoppingCart.length || index === -1) {
    return {
      shoppingCart: addNewItem(id, title, amount, price, shoppingCart),
      badgeValue: badgeValue,
    };
  } else {
    return {
      shoppingCart: increaseAmountOfExisting(id, amount, shoppingCart),
      badgeValue: badgeValue,
    };
  }
};

const removeFromShoppingCartHandler = (id, state, setItems) => {
  setShoppingCart((prev) => {
    let index = prev.findIndex((el) => el.id === id);
    let item = { ...prev[index] };
    let restItems = prev.filter((el) => el.id !== id);
    if (item.amount === 1) {
      return restItems;
    } else {
      return [...restItems, { ...item, amount: --item.amount }];
    }
  });
};
export const DUMMY_DATA = [
  {
    id: "m1",
    title: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    availableAmount: 14,
  },
  {
    id: "m2",
    title: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    availableAmount: 5,
  },
  {
    id: "m3",
    title: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    availableAmount: 2,
  },
  {
    id: "m4",
    title: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    availableAmount: 10,
  },
];

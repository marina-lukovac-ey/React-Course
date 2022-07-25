//Functions and dummy-data
//purpose of these helpers is deepCopy without a library handling of a state
//******************************* */
//ReducerFn
//shoppingCartAdd / Remove Logic
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
export const decreaseAmountOfExisting = (id, amount, array) => {
  return array.map((el) =>
    el.id === id ? { ...el, amount: el.amount - amount } : { ...el }
  );
};
export const removeCompletelyFromArray = (id, array) => {
  return array
    .filter((el) => el.id !== id)
    .map((el) => {
      return { ...el };
    });
};
export const addToShoppingCartHandler = (id, amount, price, title, state) => {
  const shoppingCart = state.shoppingCart;
  const badgeValue = state.badgeValue + +amount;

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

export const removeFromShoppingCartHandler = (id, state) => {
  const shoppingCart = state.shoppingCart;
  const badgeValue = state.badgeValue + +amount;

  let index = shoppingCart.findIndex((el) => el.id === id);

  if (shoppingCart[index].amount === 1) {
    return {
      shoppingCart: shoppingCart
        .filter((el) => el.id !== id)
        .map((el) => {
          return { ...el };
        }),
      badgeValue: badgeValue - 1,
    };
  } else {
    return {
      shoppingCart: shoppingCart.map((el) =>
        el.id === id ? { ...el, amount: el.amount - amount } : { ...el }
      ),
      badgeValue: badgeValue - 1,
    };
  }
};
export const DUMMY_DATA = [
  {
    id: "m1",
    title: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    amount: 14,
  },
  {
    id: "m2",
    title: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    amount: 5,
  },
  {
    id: "m3",
    title: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    amount: 2,
  },
  {
    id: "m4",
    title: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    amount: 10,
  },
];

export const shoppingCartReducer = (state, action) => {
  const [id, amount, price, title] = action.body;
  const shoppingCart = state.shoppingCart;
  const badgeValue = state.badgeValue + +amount;
  let index = shoppingCart.findIndex((el) => el.id === id);
  if (action.type === "ADD_TO_CART") {
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
  } else if (action.type === "TAKE_FROM_CART") {
    if (shoppingCart[index].amount === 1) {
      return {
        shoppingCart: shoppingCart
          .filter((el) => el.id !== id)
          .map((el) => {
            return { ...el };
          }),
        badgeValue: badgeValue - 1,
      };
    } else {
      return {
        shoppingCart: shoppingCart.map((el) =>
          el.id === id ? { ...el, amount: el.amount - 1 } : { ...el }
        ),
        badgeValue: badgeValue - 1,
      };
    }
  }

  return { shoppingCart: [], badgeValue: 0 };
};

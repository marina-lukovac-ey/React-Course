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

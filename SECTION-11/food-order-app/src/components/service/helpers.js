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

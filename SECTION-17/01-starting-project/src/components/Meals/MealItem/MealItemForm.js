import React, { useContext, useState } from "react";
import { ShoppingCartContext } from "../../store/shopping-cart-context";
import formStyle from "./MealItemForm.module.css";

function MealItemForm({ item }) {
  const { id, amount, price, title } = item;
  const [inputAmount, setInputAmount] = useState(1);
  const ctx = useContext(ShoppingCartContext);
  const submitFormHandler = (e) => {
    e.preventDefault();
    ctx.takeFromItemsList(id, inputAmount);

    ctx.dispatchShoppingCart({
      type: "ADD_TO_CART",
      body: [id, inputAmount, price, title],
    });
  };

  const inputAmountHandler = (e) => {
    setInputAmount(+e.target.value);
  };
  return (
    <form className={formStyle.form} onSubmit={submitFormHandler}>
      <div className={formStyle.input}>
        <label>Amount</label>
        <input
          type="number"
          value={inputAmount}
          max={amount}
          min={0}
          onChange={inputAmountHandler}
        />
        {/* only used for display purposes */}
      </div>
      <button>+ Add</button>
    </form>
  );
}

export default MealItemForm;

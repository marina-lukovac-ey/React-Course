import React, { useContext, useState } from "react";
import { ShoppingCartContext } from "../../store/shopping-cart-context";
import formStyle from "./MealItemForm.module.css";

function MealItemForm({ item }) {
  const [inputAmount, setInputAmount] = useState(1);
  const ctx = useContext(ShoppingCartContext);

  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log("submit");
    ctx.addToShoppingCart({ ...item, amount: +inputAmount });
  };

  const onChangeAmountHandler = (e) => {
    console.log("amount handler");
    setInputAmount(e.target.value);
  };
  return (
    <form className={formStyle.form} onSubmit={submitFormHandler}>
      <div className={formStyle.input}>
        <label>Amount</label>
        <input
          type="number"
          value={inputAmount}
          max={item.amount}
          onChange={onChangeAmountHandler}
        />
        {/* only used for display purposes */}
      </div>
      <button>+ Add</button>
    </form>
  );
}

export default MealItemForm;

import React, { useState } from "react";
import formStyle from "./MealItemForm.module.css";

function MealItemForm({ item }) {
  const [inputAmount, setInputAmount] = useState(1);

  const submitFormHandler = (e) => {
    e.preventDefault();
    addtoCart(item.id, inputAmount, item.price, item.title);
  };

  const onChangeAmountHandler = (e) => {
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

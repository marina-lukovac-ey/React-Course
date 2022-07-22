import React, { useContext, useState } from "react";
import { ShoppingCartContext } from "../../store/shopping-cart-context";
import formStyle from "./MealItemForm.module.css";

function MealItemForm({ item }) {
  const inputAmountNode = useRef();
  const ctx = useContext(ShoppingCartContext);
  const submitFormHandler = (e) => {
    e.preventDefault();
    ctx.takeFromItemsList(item.id, inputAmountNode.current.value);
    ctx.dispatchShoppingCart({
      type: "ADD_TO_CART",
      body: {
        id: item.id,
        amount: inputAmountNode.current.value,
        price: item.price,
        title: item.title,
      },
    });
  };

  return (
    <form className={formStyle.form} onSubmit={submitFormHandler}>
      <div className={formStyle.input}>
        <label>Amount</label>
        <input
          type="number"
          value={inputAmount}
          max={item.amount}
          ref={inputAmountNode}
        />
        {/* only used for display purposes */}
      </div>
      <button>+ Add</button>
    </form>
  );
}

export default MealItemForm;

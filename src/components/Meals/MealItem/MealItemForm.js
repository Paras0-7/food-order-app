import { Input } from "../../UI/Input";
import styles from "./MealItemForm.module.css";

import { useState, useRef } from "react";
export const MealItemForm = function (props) {
  const [isValid, setIsValid] = useState(true);
  const amountRef = useRef();
  const submitHandler = function (e) {
    e.preventDefault();
    const enteredAmount = amountRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit"> + Add</button>
      {!isValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

import { MealItemForm } from "./MealItemForm";
import { useContext } from "react";
import { CartContext } from "../../../store/cart-context";
import styles from "./MealItem.module.css";

export const MealItem = function (props) {
  const price = `$ ${props.price.toFixed(2)}`;

  const cartCtx = useContext(CartContext);

  const addToCart = function (amount) {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount,
      price: props.price,
    });
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCart} />
      </div>
    </li>
  );
};

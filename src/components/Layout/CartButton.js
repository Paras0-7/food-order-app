import { useContext } from "react";
import { CartIcon } from "./../Cart/CartIcon";
import styles from "./CartButton.module.css";
import { CartContext } from "./../../store/cart-context";

export const CartButton = function (props) {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((acc, item) => {
    return (acc += item.amount);
  }, 0);
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>69</span>
    </button>
  );
};

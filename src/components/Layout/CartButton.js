import { CartIcon } from "./../Cart/CartIcon";
import styles from "./CartButton.module.css";

export const CartButton = function (props) {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>69</span>
    </button>
  );
};

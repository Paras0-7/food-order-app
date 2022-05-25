import { useContext, useEffect, useState } from "react";
import { CartIcon } from "./../Cart/CartIcon";
import styles from "./CartButton.module.css";
import { CartContext } from "./../../store/cart-context";

export const CartButton = function (props) {
  const cartCtx = useContext(CartContext);
  const [btnHighlight, setBtnHighlight] = useState(false);

  const numberOfCartItems = cartCtx.items.reduce((acc, item) => {
    return (acc += item.amount);
  }, 0);

  const { items } = cartCtx;
  const btnClasses = `${styles.button} ${btnHighlight ? styles.bump : ""}`;
  useEffect(
    function () {
      if (items.length === 0) {
        return;
      }
      setBtnHighlight(true);

      const timer = setTimeout(() => {
        setBtnHighlight(false);
        console.log("Removing");
      }, 300);

      return () => {
        console.log("Clearing");
        clearTimeout(timer);
      };
    },
    [items]
  );
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

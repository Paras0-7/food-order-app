import { CartContext } from "./cart-context";

export const CartProvider = function (props) {
  const addItem = function (item) {};
  const removeItem = function (id) {};
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

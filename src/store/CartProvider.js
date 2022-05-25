import { CartContext } from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cardReducer = function (state, action) {
  if (action.type === "ADD") {
    const index = state.items.findIndex(function (item) {
      return item.id === action.item.id;
    });

    let updatedItems = [...state.items];

    if (index >= 0) {
      updatedItems[index].amount += action.item.amount;
    } else {
      updatedItems.push(action.item);
    }
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "Remove") {
    const index = state.items.findIndex(function (item) {
      return item.id === action.id;
    });

    const existingItem = state.items[index];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(function (item) {
        return item.id !== action.id;
      });
    } else {
      updatedItems = [...state.items];
      updatedItems[index].amount -= 1;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};
export const CartProvider = function (props) {
  const [cartState, dispatchCartAction] = useReducer(
    cardReducer,
    defaultCartState
  );

  const addItem = function (item) {
    dispatchCartAction({
      type: "ADD",
      item,
    });
  };
  const removeItem = function (id) {
    dispatchCartAction({
      type: "Remove",
      id,
    });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItem,
    removeItem: removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

import { useReducer } from "react";

function useCartValue(init) {
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        const isItemExist = state.items.find((i) => i.id === action.value.id);

        let updatedItems;
        if (isItemExist) {
          updatedItems = state.items.map((i) =>
            i.id === isItemExist.id
              ? { ...i, quantity: i.quantity + action.value.quantity }
              : i
          );
        } else updatedItems = state.items.concat(action.value);

        const newTotalAmt =
          state.totalAmt + action.value.price * action.value.quantity;

        return {
          items: updatedItems,
          totalAmt: newTotalAmt,
        };

      case "decrementItem":
        const existingCardItem = state.items.find((i) => i.id === action.value);

        let currentMeals;
        if (existingCardItem.quantity === 1) {
          currentMeals = state.items.filter(
            (i) => i.id !== existingCardItem.id
          );
        } else {
          currentMeals = state.items.map((i) =>
            i.id === existingCardItem.id
              ? { ...i, quantity: i.quantity - 1 }
              : i
          );
        }

        const newAmt = state.totalAmt - existingCardItem.price;

        return {
          items: currentMeals,
          totalAmt: newAmt,
        };

      case "clearCart":
        return init;
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, init);

  return [state, dispatch];
}
export { useCartValue };

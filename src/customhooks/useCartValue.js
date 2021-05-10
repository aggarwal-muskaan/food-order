import { useReducer } from "react";

function useCartValue(init) {
  const [state, dispatch] = useReducer(reducer, init);

  return [state, dispatch];
}

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      const updatedItems = state.items.concat(action.value);
      const newTotalAmt =
        state.totalAmt + action.value.price * action.value.quantity;

      return {
        items: updatedItems,
        totalAmt: newTotalAmt,
      };
    // case "remove":
    //   return state;
    default:
      return state;
  }
};
export { useCartValue };

import { createContext } from "react";
import { useCartValue } from "../customhooks/useCartValue";

const cartContext = createContext();
const changeCartValue = createContext();

function CartProvider(props) {
  const [state, dispatch] = useCartValue({ items: [], totalAmt: 0 });

  return (
    <cartContext.Provider value={state}>
      <changeCartValue.Provider value={dispatch}>
        {props.children}
      </changeCartValue.Provider>
    </cartContext.Provider>
  );
}

export { CartProvider };
export { cartContext };
export { changeCartValue };

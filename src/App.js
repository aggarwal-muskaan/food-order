import { useState } from "react";
import { CartProvider } from "./store/cart.context";
import Header from "./components/Header";
import Meals from "./components/meals/Meals";
import Cart from "./components/cart/Cart";
// import "./App.css";
function App() {
  const [cartOpen, setCartState] = useState(false);

  return (
    <CartProvider>
      {cartOpen && <Cart onClose={() => setCartState(false)} />}
      <Header onShowCart={() => setCartState(true)} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

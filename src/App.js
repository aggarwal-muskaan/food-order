import Header from "./components/Header";
import Meals from "./components/meals/Meals";
import Cart from "./components/cart/Cart";
// import "./App.css";
function App() {
  return (
    <>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;

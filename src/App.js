import "./App.css";
import Cart from "./components/Cart";
import Product from "./components/Product";
import { Title } from "./components/Cart/style";
import { BsBook } from "react-icons/bs";

function App() {
  return (
    <div className="App">
      <Title>
        <h1>
          Livraria Kenzie
          <BsBook color="red" />{" "}
        </h1>
      </Title>
      <header className="App-header">
        <Product />
        <Cart />
      </header>
    </div>
  );
}

export default App;

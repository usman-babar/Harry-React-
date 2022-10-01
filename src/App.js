// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Forms from "./components/Forms";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Navbar title="Saim Babar" about="About Us" />

      <div className="container" my-10>
        <Forms heading="My First Form" />
      </div>

      <div className="container my-3">
        <Counter />
      </div>
    </>
  );
}

export default App;

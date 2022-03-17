import logo from "./logo.svg";
import "./App.css";
import Async from "./components/Async";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://reactjs.org">learn react</a>
        {/* <Button label="click me please" /> */}
        <Async />
      </header>
    </div>
  );
}

export default App;

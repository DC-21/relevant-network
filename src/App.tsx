import "./App.css";
import Navbar from "./component/Navbar";
import Values from "./component/Values";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <Home />
      <Values />
    </div>
  );
}

export default App;

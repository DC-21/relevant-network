import "./App.css";
import Navbar from "./components/Navbar";
import Values from "./components/Home/Values";
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

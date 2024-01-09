import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;

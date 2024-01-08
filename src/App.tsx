import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <div className="w-full max-w-7xl mt-20 relative flex-col flex items-center justify-center">
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </div>
    </>
  );
}

export default App;

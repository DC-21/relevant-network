import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="flex flex-col items-center max-w-7xl w-full justify-center mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;

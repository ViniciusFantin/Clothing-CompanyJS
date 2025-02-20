import "./App.css";

// config routes
import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAges
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";

// config routes
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// components
import Navbar from "./components/Navbar";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Info from "./Pages/Info";
import NotFound from "./Pages/NotFound";
import SearchForm from "./components/SearchForm";
import Search from "./Pages/Search";

function App() {
  return (
    <div className="App">
      <h1>Universal Clothing Emporium</h1>
      {/* Links com React Router */}
      <BrowserRouter>
        <Navbar />
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/products/:id/info" element={<Info />} />
          <Route path="/search" element={<Search />} />
          {/* Redirect */}
          <Route path="/company" element={<Navigate to="/about" />} />
          {/* No Match Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

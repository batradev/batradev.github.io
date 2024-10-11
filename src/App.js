import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MnemaPage from "./pages/MnemaPage/MnemaPage";
import BrainflixPage from "./pages/BrainflixPage/BrainflixPage";
import Header from "./components/Header/Header";
import "./styles/App.scss";

function App() {
  return (
    <Router>
      <Header />
      <main style={{ marginTop: "40px" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/mnema" element={<MnemaPage />} />
          <Route path="/project/brainflix" element={<BrainflixPage />} />
          <Route path="/about" element={<div>About Page</div>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

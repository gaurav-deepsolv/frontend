import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CompetitorsPage from "./pages/CompetitorsPage";
import ContentsPage from "./pages/ContentsPage";
import Navbar from "./components/Navbar";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CompetitorsPage />} />
        <Route path="/contents" element={<ContentsPage />} />
      </Routes>
    </Router>
  );
};

export default App;

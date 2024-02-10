import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Card, Container } from "react-bootstrap";
import Users from "./components/Users/Users";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import IndividualUser from "./components/IndividualUser/IndividualUser";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page-details/:id" element={<IndividualUser />} />
      </Routes>
    </Router>
  );
}

export default App;

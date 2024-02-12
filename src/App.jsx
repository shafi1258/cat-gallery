import "bootstrap/dist/css/bootstrap.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import IndividualUser from "./components/IndividualUser/IndividualUser";
import AddUsers from "./components/AddUser/AddUser";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page-details/:id" element={<IndividualUser />} />
        <Route path="/adduser" element={<AddUsers/>} />
      </Routes>
    </Router>
  );
}

export default App;

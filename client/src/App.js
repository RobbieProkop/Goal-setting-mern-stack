import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./app/pages/Dashboard";
import Header from "./components/Header";
import Login from "./app/pages/Login";
import Register from "./app/pages/Register";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

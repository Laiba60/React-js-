import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login"; // Import Login Page
import Userdata from "./Pages/Userdata";
import Generate from "./Componets/Generate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />  {/* ✅ Added Login Page Route */}
        <Route path="/userdata" element={<Userdata />} />
        <Route path="/generate" element={<Generate />} />
        

      </Routes>
    </Router>
  );
}

export default App;

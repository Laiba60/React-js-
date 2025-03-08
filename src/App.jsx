import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login"; 
import Userdata from "./Pages/Userdata";
import Generate from "./Componets/Generate";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Componets/Register";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/logn" element={<Login />} />  
        <Route path="/userdata" element={<Userdata />} />
        <Route path="/generate" element={<Generate />} />
      </Routes>
    </Router>
  );
}
export default App;

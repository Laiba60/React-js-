import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login"; 
import Userdata from "./Pages/Userdata";
import Generate from "./Componets/Generate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />  
        <Route path="/userdata" element={<Userdata />} />
        <Route path="/generate" element={<Generate />} />
        

      </Routes>
    </Router>
  );
}

export default App;

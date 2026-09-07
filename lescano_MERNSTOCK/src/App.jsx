import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Student from "./components/Student";
import StudentDetails from "./pages/StudentDetails";

function App() {
  return (
    
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/student/:id" element={<StudentDetails />} />
        </Routes>
    </BrowserRouter>

  );
}

export default App;

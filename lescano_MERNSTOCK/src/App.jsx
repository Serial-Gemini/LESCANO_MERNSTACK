import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Student from "./components/Student";

export default function App() {
  return (
    
    <BrowserRouter>
      <div className="min-h-screen-bg-gray-50">
        <nav>
          <Link></Link>
          <Link></Link>
        </nav>
      </div>
    </BrowserRouter>
  );
}

export default App;

import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "1rem", background: "#f0f0f0" }} className="Navbar">
      <Link to="/">Home</Link>
      <Link to="/students">Students List</Link>
      <Link to="/teachers">Teachers List</Link>
      <Link to="/add-student">Add Student</Link>
      <Link to="/add-teacher">Add Teachers</Link>
    </nav>
  );
}
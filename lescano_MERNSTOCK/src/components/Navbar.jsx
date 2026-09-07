import { Link }  from "react-router-dom";

export default function Navbar() {

    return (
    <nav>
        <Link to="/" style="">Home</Link>
        <Link to="/students" style="">Students</Link>
    </nav>
    );
}
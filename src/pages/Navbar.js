import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <Link to="/">Search Movie</Link>
        </li>
        <li>
          <Link to="/favorite-movies">Favorite Movies</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

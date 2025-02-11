import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar container">
      <NavLink to="/" className="fw-bold fs-2 text-decoration-none">
        JayNode
      </NavLink>
      <ul className="navbar-nav d-flex flex-row gap-4">
        <li className="nav-item">
          <NavLink
            to="/about"
            className="text-decoration-none fs-5 fw-semibold"
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/project"
            className="text-decoration-none fs-5 fw-semibold"
          >
            Project
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            className="text-decoration-none fs-5 fw-semibold"
          >
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/login"
            className="text-decoration-none fs-5 fw-semibold"
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

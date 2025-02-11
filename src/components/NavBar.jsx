import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink to="/">JayNode</NavLink>
      <ul>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
        <li>
          <NavLink to="project">Project</NavLink>
        </li>
        <li>
          <NavLink to="contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

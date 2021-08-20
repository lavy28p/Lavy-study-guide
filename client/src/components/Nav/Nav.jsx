import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-container">
      <div className="nav">
        <NavLink className="logo" to="/">
          Lavy's Study guide
        </NavLink>
        <div className="nav-links">
        <NavLink className="link" id="signin-link" to="/sign-in">
          Sign in
        </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
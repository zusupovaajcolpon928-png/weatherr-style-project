import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-light weather-nav">
      <div className="container">
        <Link className="navbar-brand weather-brand" to="/">
          <span className="brand-symbol" aria-hidden="true">W.</span>
          <span>weather<span className="brand-period">.</span></span>
        </Link>
        <div className="navbar-nav ms-auto">
          <NavLink className="nav-link" to="/">Прогноз <span aria-hidden="true">↗</span></NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
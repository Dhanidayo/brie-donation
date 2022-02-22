import "./style.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
          <NavLink activeClassName="active" to="/clothing">
            CLOTHING
          </NavLink>
          <NavLink activeClassName="active" to="/shoes">
            SHOES
          </NavLink>
          <NavLink activeClassName="active" to="/handbags">
            HANDBAGS
          </NavLink>
          <NavLink activeClassName="active" to="/accessories">
            ACCESSORIES
          </NavLink>
          <NavLink activeClassName="active" to="/mystery-boxes">
            MYSTERY BOXES
          </NavLink>
          <NavLink activeClassName="active" to="sustainability">
            SUSTAINABILITY
          </NavLink>
          <NavLink activeClassName="active" to="/our-impact">
            OUR IMPACT
          </NavLink>
          <button className="donate-button">
            DONATE
          </button>
      </nav>
    </>
  );
};

export default Navbar;

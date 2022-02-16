import "./style.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
          <NavLink activeClassName="active" to="/LandingPage">
            CLOTHING
          </NavLink>
          <NavLink activeClassName="active" to="/Shoes">
            SHOES
          </NavLink>
          <NavLink activeClassName="active" to="/Handbags">
            HANDBAGS
          </NavLink>
          <NavLink activeClassName="active" to="/Accessories">
            ACCESSORIES
          </NavLink>
          <NavLink activeClassName="active" to="/MysteryBoxes">
            MYSTERY BOXES
          </NavLink>
          <NavLink activeClassName="active" to="Sustainability">
            SUSTAINABILITY
          </NavLink>
          <NavLink activeClassName="active" to="/OurImpact">
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

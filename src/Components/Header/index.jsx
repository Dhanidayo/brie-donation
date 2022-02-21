// import { FaFontAwesome } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {HiOutlineShoppingCart} from "react-icons/hi";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import logo from "../../Img-Assets/Brie-Logo-Vector.svg";
import "./style.css";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Brie-Logo" className="Logo" />
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="searchbox"
          placeholder="Hey, what are you looking for?"
        />
        <IconContext.Provider
          value={{ className: "react-icons-header search-icon" }}
        >
          <FiSearch />
        </IconContext.Provider>
      </div>
      <IconContext.Provider value={{ className: "react-icons-header" }}>
        <FaRegHeart />
      </IconContext.Provider>
      <div className="sign-in">
        <IconContext.Provider value={{ className: "react-icons-header" }}>
          <FaRegUser />
        </IconContext.Provider>
        <div>
            <span>Hello, Sign in</span>
            <span>My Account</span>
        </div>
      </div>
      <IconContext.Provider
        value={{ className: "react-icons-header cart-icon" }}
      >
        <HiOutlineShoppingCart />
      </IconContext.Provider>
    </header>
  );
};

export default Header;

// import HeartIcon from "./items/HeartIcon";
import Bellcon from "./items/BellIcon";
import EnvelopeIcon from "./items/EnvelopeIcon";
import FaTh from "./items/FaTh";
import SearchBar from "./items/SearchBar";
import FaShoppingCart from "./items/FaShoppingCart";
import ProfileIcon from "./items/ProfileIcon";
import decodedToken from "../../../utils/decryptJWT";
import { Link } from "react-router-dom";

const Navbar = () => {
  const authFromToken = decodedToken();
  console.log(authFromToken.role);

  return (
    <div className="navbar-menu">
      {/* <HeartIcon /> */}
      <Bellcon />
      <EnvelopeIcon />
      <FaTh />

      <div className="navbar-end">
        <SearchBar />
        <div
          className={`navbar-item ${
            authFromToken.role != "client" ? "" : "hidden"
          }`}
        >
          <Link
            to={
              authFromToken.role === "tailleur"
                ? "/tailleur/commande"
                : authFromToken.role === "vendeur"
                ? "/vendeur/commande"
                : ""
            }
            className="button is-solid
            primary-button"
          >
            Dashboard
          </Link>
        </div>
        <FaShoppingCart />
        <ProfileIcon />
      </div>
    </div>
  );
};

export default Navbar;

import HeartIcon from './items/HeartIcon';
import Bellcon from './items/BellIcon';
import EnvelopeIcon from './items/EnvelopeIcon';
import FaTh from './items/FaTh';
import SearchBar from './items/SearchBar';
import FaShoppingCart from './items/FaShoppingCart';
import ProfileIcon from './items/ProfileIcon';


const Navbar =()=>{
    return (
        <div className="navbar-menu">
          <HeartIcon/>
          <Bellcon />
          <EnvelopeIcon />
          <FaTh />
        <div className="navbar-end">
          <SearchBar/>
          <FaShoppingCart/>
          <ProfileIcon/>
        </div>
      </div>
    )
};

export default Navbar;



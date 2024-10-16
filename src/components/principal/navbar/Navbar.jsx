import HeartIcon from './items/HeartIcon';
import Bellcon from './items/BellIcon';
import EnvelopeIcon from './items/EnvelopeIcon';
import FaTh from './items/FaTh';
import SearchBar from './items/SearchBar';
import FaShoppingCart from './items/FaShoppingCart';
import ProfileIcon from './items/ProfileIcon';
import ButtonDashboard from './items/ButtonDashboard';


const Navbar =()=>{
    return (
        <div className="navbar-menu">
          <HeartIcon/>
          <Bellcon />
          <EnvelopeIcon />
          <FaTh />
          

        <div className="navbar-end">
          <SearchBar/>
          <ButtonDashboard/>
          <FaShoppingCart/>
          <ProfileIcon/>

        </div>
      </div>
    )
};

export default Navbar;
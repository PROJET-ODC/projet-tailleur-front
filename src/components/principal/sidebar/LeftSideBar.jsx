import { Link } from "react-router-dom";
import WeatherCard from "./WeatherCard";
import FriendCard from "./FriendCard";

function LeftSideBar() {
  return (
    <div className="column is-3 is-hidden-mobile">
      <WeatherCard />
      <FriendCard />
    </div>
  );
}

export default LeftSideBar;

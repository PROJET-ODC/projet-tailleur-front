import { useEffect, useState } from "react";
import NotificationList from "./itemsComponents/sousComponentitems/NotificationList";
import { getNotificationsByUser } from "../../../../api/clients";
import io from "socket.io-client";
import decodedToken from "../../../../utils/decryptJWT";

const socket = io("http://localhost:5000");

const BellIcon = () => {
  const authFromToken = decodedToken();
  const [notifications, setNotifications] = useState([]);
  const [newNotification, setNewNotification] = useState(false);

  const fetchData = async () => {
    try {
      const result = await getNotificationsByUser();
      console.log(result);
      setNotifications(result.notifications);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  socket.on("newFollow", (data) => {
    setNotifications([...notifications, data]);

    if (data.notifier.identifiant != authFromToken.identifiant) {
      setNewNotification(true);
    }

    console.log("new follow", data);
  });

  useEffect(() => {
    const abortCont = new AbortController();

    fetchData();
    return () => abortCont.abort();
  }, []);

  const handleClickBell = () => {
    setNewNotification(false);
  };

  return (
    <div className="navbar-item is-icon drop-trigger">
      <a
        className={`icon-link ${newNotification ? "is-active" : ""}`}
        onClick={handleClickBell}
        href="javascript:void(0);"
      >
        <i data-feather="bell"></i>
        <span className="indicator"></span>
      </a>

      <div className="nav-drop">
        <div className="inner">
          <div className="nav-drop-header">
            <span>Notifications</span>
            <a href="#">
              <i data-feather="bell"></i>
            </a>
          </div>

          {/* Liste des notifications */}
          <NotificationList notifications={notifications} />

          <div className="nav-drop-footer">
            <a href="#">View All</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BellIcon;

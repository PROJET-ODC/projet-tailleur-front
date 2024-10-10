import React from 'react';
import FriendRequestList from '/home/aissata/projet-tailleur-front/src/components/principal/navbar/items/itemsComponents/sousComponentitems/FriendRequestList.jsx';

const HeartIcon = () => {
  return (
    <div className="navbar-item is-icon drop-trigger">
      <a className="icon-link is-friends" href="#">
        <i data-feather="heart"></i>
        <span className="indicator"></span>
      </a>

      <div className="nav-drop">
        <div className="inner">
          <div className="nav-drop-header">
            <span>Demandes d'amis</span>
            <a href="#">
              <i data-feather="search"></i>
            </a>
          </div>
          
          {/* Liste des demandes d'amis */}
          <FriendRequestList />

          <div className="nav-drop-footer">
            <a href="#">Voir tout</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeartIcon;

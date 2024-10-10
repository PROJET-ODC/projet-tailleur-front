import React from 'react';
import IconLink from '/home/aissata/projet-tailleur-front/src/components/principal/navbar/items/itemsComponents/sousComponentitems/IconLink';
import Icon from '/home/aissata/projet-tailleur-front/src/components/principal/navbar/items/itemsComponents/sousComponentitems/Icon';
import Indicator from '/home/aissata/projet-tailleur-front/src/components/principal/navbar/items/itemsComponents/sousComponentitems/Indicator';

const FaTh = () => {
  return (
    <div className="navbar-item is-icon open-chat">
      <IconLink href="javascript:void(0);" className="is-primary">
        <Icon iconName="message-square" />
        <Indicator />
      </IconLink>
    </div>
  );
};

export default FaTh;

import IconLink from './itemsComponents/sousComponentitems/IconLink';
import Icon from './itemsComponents/sousComponentitems/Icon';
import Indicator from './itemsComponents/sousComponentitems/Indicator';

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

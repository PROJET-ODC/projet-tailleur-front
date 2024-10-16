
const DropdownItem = ({ icon, title, description }) => {
    return (
        <a href="#" className="dropdown-item">
            <div className="media">
                <i data-feather={icon}></i>
                <div className="media-content">
                    <h3>{title}</h3>
                    <small>{description}</small>
                </div>
            </div>
        </a>
    );
};

export default DropdownItem;

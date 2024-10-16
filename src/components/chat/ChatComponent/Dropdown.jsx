
import DropdownMenu from './DropdownMenu'; // Composant pour le contenu du menu déroulant

const Dropdown = () => {
    return (
        <div className="dropdown compose-dropdown is-spaced is-accent is-up dropdown-trigger">
            <div>
                <div className="add-button">
                    <div className="button-inner">
                        <i data-feather="plus"></i>
                    </div>
                </div>
            </div>
            <DropdownMenu />
        </div>
    );
};

export default Dropdown;

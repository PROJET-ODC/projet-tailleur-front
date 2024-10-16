import DropdownMenu from './DropdownMenu';
import ChatSearch from './ChatSearch';

const NavEnd = () => {
    return (
        <div className="nav-end">
            <div className="dropdown is-spaced is-neutral is-right dropdown-trigger">
                <div>
                    <a className="chat-nav-item is-icon">
                        <i data-feather="settings"></i>
                    </a>
                </div>
                <DropdownMenu />
            </div>

            <ChatSearch />

            <a className="chat-nav-item is-icon is-hidden-mobile">
                <i data-feather="at-sign"></i>
            </a>
            <a className="chat-nav-item is-icon is-hidden-mobile">
                <i data-feather="star"></i>
            </a>

            <div className="dropdown is-spaced is-neutral is-right dropdown-trigger">
                <div>
                    <a className="chat-nav-item is-icon no-margin">
                        <i data-feather="more-vertical"></i>
                    </a>
                </div>
                <DropdownMenu />
            </div>

            <a className="chat-nav-item is-icon close-chat">
                <i data-feather="x"></i>
            </a>
        </div>
    );
};

export default NavEnd;

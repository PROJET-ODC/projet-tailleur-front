import React from 'react';

const DropdownMenu = () => {
    return (
        <div className="dropdown-menu" role="menu">
            <div className="dropdown-content">
                <DropdownItem 
                    icon="code" 
                    title="Code snippet" 
                    description="Add and paste a code snippet." 
                />
                <DropdownItem 
                    icon="file-text" 
                    title="Note" 
                    description="Add and paste a note." 
                />
                <hr className="dropdown-divider" />
                <DropdownItem 
                    icon="server" 
                    title="Remote file" 
                    description="Add a file from a remote drive." 
                />
                <DropdownItem 
                    icon="monitor" 
                    title="Local file" 
                    description="Add a file from your computer." 
                />
            </div>
        </div>
    );
};

export default DropdownMenu;

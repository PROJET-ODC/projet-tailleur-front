import React from "react";
// import SearchBarComponent from "./itemsComponents/SearchBarComponent"

const SearchBar = () => {
return (
     <div className="navbar-item">
            <div id="global-search" className="control">
              <input
                id="tipue_drop_input"
                className="input is-rounded"
                type="text"
                placeholder="Search"
                required
              />
              <span id="clear-search" className="reset-search">
                <i data-feather="x"></i>
              </span>
              <span className="search-icon">
                <i data-feather="search"></i>
              </span>

              <div
                id="tipue_drop_content"
                className="tipue-drop-content"
              ></div>
            </div>
          </div> 
)
};

export default SearchBar;

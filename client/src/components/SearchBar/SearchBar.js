import React from "react";
import "./SearchBar.css";

function SearchBar(props) {
    return (
        <div className="container form-container">
            <form className="form-inline my-2 my-lg-0">
                <div className="form-group">
                    <input
                        value={props.searchQuery}
                        onChange={props.handleInputChange}
                        name="searchQuery"
                        type="search"
                        className="form-inline my-2 my-lg-0 search-bar"
                        placeholder="Search" aria-label="Search" />
                    <button type="submit" onClick={props.handleFormSubmit} className="btn btn-outline-primary my-2 my-sm-0">
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;

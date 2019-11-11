import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"



function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/search" className="navbar-brand">
                <img src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png" height="30" alt="book logo" />Google Books Search
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className={window.location.pathname === "/" || window.location.pathname === "/search" ? "nav-link active" : "nav-link"}>
                        <Link to="/search">Search Books</Link>
                    </li>
                    <li className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
                        <Link to="/saved">Saved Books</Link>
                    </li>
                    
                </ul>
            </div>
        </nav>

    )
}

export default Navbar;


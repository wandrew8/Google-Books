import React, { Component } from 'react'
import './SearchBar.css'

export class SearchBar extends Component {
    render() {
        return (
            <div className="container form-container">
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control search-bar mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBar

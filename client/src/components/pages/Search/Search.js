import React, { Component } from 'react'
import Hero from '../../Hero/Hero'
import SearchBar from '../../SearchBar/SearchBar'

export class Search extends Component {
    render() {
        return (
            <div>
            <Hero />
            <SearchBar />
            </div>
        )
    }
}

export default Search

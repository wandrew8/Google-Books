import React, { Component } from 'react'
import Hero from '../../Hero/Hero'
import SearchBar from '../../SearchBar/SearchBar'
import CardBookSearch from '../../CardBookSearch/CardBookSearch'
import API from "../../utils/API";

export class Search extends Component {
    state = {
        searchQuery: "",
        results: [],

    };

    // When the component mounts, get a list of all available base breeds and update this.state.breeds
    //   componentDidMount() {
    //     API.getBaseBreedsList()
    //       .then(res => this.setState({ breeds: res.data.message }))
    //       .catch(err => console.log(err));
    //   }

    handleInputChange = event => {
        this.setState({ searchQuery: event.target.value });
    };

    saveBook = event => {
        event.preventDefault();
        alert("this book has been aded to your collection")
        if (this.state.title && this.state.author) {
            API.saveBook({
              title: this.state.title,
              author: this.state.author,
              synopsis: this.state.synopsis
            })
              .then(res => console.log(res))
              .catch(err => console.log(err));
          }
    }

    handleFormSubmit = event => {
        event.preventDefault();
        
      };

    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({ searchQuery: '' })
        API.searchGoogleBooks(this.state.searchQuery)
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                this.setState({ results: res.data.items });
                console.log(this.state.results)
            })
            .catch(err => this.setState({ error: err.message }));
    };
    render() {
        return (
            <div>
                <Hero />
                <SearchBar
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <div className="container">
                    {this.state.results.map(result => (

                        <CardBookSearch
                            saveBook={this.saveBook}
                            title={result.volumeInfo.title}
                            link={result.volumeInfo.infoLink}
                            synopsis={result.volumeInfo.description}
                            author={result.volumeInfo.authors}
                            id={result.accessInfo.id}
                            releaseDate={result.volumeInfo.publishedDate}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Search

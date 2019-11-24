import React, { Component } from 'react'
import Hero from '../../Hero/Hero'
import SearchBar from '../../SearchBar/SearchBar'
import CardBookSearch from '../../CardBookSearch/CardBookSearch'
import API from "../../../utils/API";
import AddBookModal from "../../AddBookModal/AddBookModal";

export class Search extends Component {
    state = {
        searchQuery: "",
        results: [],

    };

    componentDidMount() {
        setTimeout(() => {
            this.loadBooks();
            console.log('Our data is fetched');
            
          }, 1000)
        }
    

    handleInputChange = event => {
        this.setState({ searchQuery: event.target.value });
    };

    loadBooks = () => {
        API.searchGoogleBooks("coding")
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                this.setState({ results: res.data.items });
                console.log(this.state.results)
            })
            .catch(err => this.setState({ error: err.message }));
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
                    <div>
                    <CardBookSearch
                        title={result.volumeInfo.title}
                        link={result.volumeInfo.infoLink}
                        synopsis={result.volumeInfo.description}
                        authors={result.volumeInfo.authors? result.volumeInfo.authors.join(", "): "Not Available"}
                        id={result.id}
                        releaseDate={result.volumeInfo.publishedDate}
                        image={result.volumeInfo.imageLinks.thumbnail}
                    />
                    </div> 
                ))}
            </div>
        </div>
    )
}
}

export default Search

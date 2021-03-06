import React, { Component } from 'react';
import CardBookSaved from '../../CardBookSaved/CardBookSaved';
import API from "../../../utils/API";


export class Saved extends Component {
    state = {
      books: []

    }

    componentDidMount() {
        this.loadBooks();
      }
    
      loadBooks = () => {
        API.getBooks()
          .then(res =>
            this.setState({ books: res.data })
          )
          .catch(err => console.log(err));
      };

    removeBook = (event) => {
        event.preventDefault();
        alert("This book has been removed from your collection")
    }

    render() {
        return (
            <div className="container">
            <h2>You have no books in your collection</h2>
            </div>
        )
    }
}

export default Saved

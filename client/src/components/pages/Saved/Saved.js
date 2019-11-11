import React, { Component } from 'react';
import CardBookSaved from '../../CardBookSaved/CardBookSaved';

export class Saved extends Component {
    state = {

    }

    removeBook = (event) => {
        event.preventDefault();
        alert("This book has been removed from your collection")
    }

    render() {
        return (
            <div className="container">
            <CardBookSaved 
                removeBook={this.removeBook}
            />
            </div>
        )
    }
}

export default Saved

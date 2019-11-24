import React, { Component } from 'react'
import API from "../../utils/API";
import AddBookModal from "../AddBookModal/AddBookModal";

export class AddBookButton extends Component {
    state = {
        book: []
    }


    addBook = () => {
        console.log(this.props)
        let bookData = this.props
        API.saveBook({ bookData })
            .then((res) => console.log("this may be working " + res))
            .catch(err => console.log(err))
    };

    render() {
        return (
            <React.Fragment>

                <button className="btn btn-primary save-button" type="submit" onClick={() => { this.addBook() }} data-toggle="modal" data-target="#addBook">Save</button>


            </React.Fragment>
        )
    }
}

export default AddBookButton
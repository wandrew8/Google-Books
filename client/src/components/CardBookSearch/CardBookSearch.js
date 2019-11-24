import React, { Component } from 'react'
import './CardBookSearch.css'
import AddBookButton from '../AddBookButton/AddBookButton'
import AddBookModal from "../AddBookModal/AddBookModal";

export class CardBookSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            saveBook: false,
        }
    }

    touch = () => {
        console.log(this.props)
        console.log("this is working")
    }

    render() {
        return (
            <React.Fragment>
                <AddBookModal 
                title={this.props.title}
                />
                <div id={this.props.id} className="col-xs-6 list-container">
                    <div className="card-list mb-2">
                        <div className="list-header">
                            <img className="itemCardImage" src="https://cdn.worldvectorlogo.com/logos/google-play-books.svg" alt='' />
                            <img className="thumbnail desktop-image overlayImage" src={this.props.image === 'undefined' || null || '' ? '' : this.props.image} alt={this.props.title} />
                        </div>
                        <div className="list-content">
                            <h2 onClick={this.touch} className="dish-name">{this.props.title}</h2>
                            <img className="mobile-image overlayImage" src={this.props.image === 'undefined' || null || '' ? '' : this.props.image} alt={this.props.title} />
                            <div className="top-border">


                                <div className="container-fluid cont">
                                    <p>Author: <span className="list-meta">{this.props.authors ? this.props.authors : 'Not Available'}</span></p>
                                    <p>Release Date: <span className="list-meta">{this.props.releaseDate ? this.props.releaseDate : 'Not Available'}</span></p>
                                </div>

                                <p className="ingredients-chef">Synopsis: <span className="list-meta">{this.props.synopsis ? this.props.synopsis : "Not Available"}</span></p>
                                <AddBookButton
                                    title={this.props.title}
                                    link={this.props.link}
                                    synopsis={this.props.synopsis}
                                    authors={this.props.authors}
                                    releaseDate={this.props.releaseDate}
                                    image={this.props.image}
                                />
                                <a href={this.props.link} className="btn btn-primary view-button">View</a>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>


        )
    }
}

export default CardBookSearch
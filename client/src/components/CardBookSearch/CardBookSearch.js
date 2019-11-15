import React, { Component } from 'react'
import './CardBookSearch.css'

export class CardBookSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            saveBook: false,
        }
    }

    render() {
        return (
            <React.Fragment>

                <div id={this.props.id} className="col-xs-6 list-container">
                    <div className="card-list mb-2">

                        <div className="list-header">
                            <img className="itemCardImage" src="https://cdn.worldvectorlogo.com/logos/google-play-books.svg" alt='' />
                        </div>

                        <div className="list-content">
                            <h1></h1>
                            <h2 className="dish-name">{this.props.title}</h2>
                            <div className="top-border">

                                <div className="container-fluid cont">
                                    <p>Author: <span className="list-meta">{this.props.author ? this.props.author : 'Not Available'}</span></p>
                                    <p>Release Date: <span className="list-meta">{this.props.releaseDate ? this.props.releaseDate: 'Not Available'}</span></p>
                                </div>

                                <p className="ingredients-chef">Synopsis: <span className="list-meta">{this.props.synopsis? this.props.synopsis: "Not Available"}</span></p>
                                <button className="btn btn-primary save-button" type="submit" onClick={this.props.saveBook}>Save</button>
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
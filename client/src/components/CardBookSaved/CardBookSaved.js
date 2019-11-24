import React, { Component } from 'react'
import './CardBookSaved.css'

export class CardBookSaved extends Component {
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
                                    <p>Author: <span className="list-meta">{this.props.authors ? this.props.authors : ''}</span></p>
                                    <p>Release Date: <span className="list-meta">{this.props.releaseDate}</span></p>
                                </div>

                                <p className="ingredients-chef">Synopsis: <span className="list-meta">{this.props.synopsis}</span></p>
                                <button className="btn btn-primary save-button" type="submit" onClick={this.props.removeBook}>Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>


        )
    }
}

export default CardBookSaved
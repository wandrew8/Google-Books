import React, { Component } from 'react';
import "./AddBookModal.css";


export class AddBookModal extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div class="modal" tabindex="-1" id="addBook" role="dialog">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header modalOverlay">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <h3 class="modal-title">Book Added To Your Collection</h3>
                            </div>
                            <div class="modal-body">
                                <h5>You have added the following book to your collection</h5>
                                <h5><strong>{this.props.title}</strong> </h5>
                                <img src={this.props.image}></img>
                            </div>
                            <div class="modal-footer">
                                <p>You can see your saved book collection <a href="/saved">HERE</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AddBookModal
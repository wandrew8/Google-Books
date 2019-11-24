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
                                <h3 class="modal-title">Book Added To Your Collection</h3>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <h5>You have added the book <strong>{this.props.title}</strong> to your collection</h5>
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
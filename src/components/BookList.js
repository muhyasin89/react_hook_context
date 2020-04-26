import React, { Component } from 'react'

class BookList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='book-list'> 
                <ul>
                    <li>The way of kings</li>
                    <li>the name of the wind</li>
                    <li>the final empire</li>
                </ul>
            </div>
        );
    }
}

export default BookList;
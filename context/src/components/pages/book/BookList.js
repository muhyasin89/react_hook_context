import React, { Component } from 'react';


class BookList extends Component{
    render(){
        return (
            <div className='book-list'>
                <ul>
                    <li>the art of war</li>
                    <li>the atomic habit</li>
                    <li>The habit of effective people</li>
                </ul>
            </div>
        );
    }
}


export default BookList;
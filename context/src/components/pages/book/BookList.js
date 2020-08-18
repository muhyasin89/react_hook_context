import React, { Component } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';


class BookList extends Component{
    static contextType = ThemeContext;
    render(){
        const  { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
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
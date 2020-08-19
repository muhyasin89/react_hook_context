import React, { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';


const BookList = () => {
    const  { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <div className='book-list' style={{ color: theme.syntax, background: theme.bg }}>
            <ul>
                <li style={{ background: theme.ui }}>the art of war</li>
                <li style={{ background: theme.ui }}>the atomic habit</li>
                <li style={{ background: theme.ui }}>The habit of effective people</li>
            </ul>
        </div>
    );
}


export default BookList;
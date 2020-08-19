import React, { useState } from 'react';

const NewVideoForm = ({ addVideo }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [link, setLink] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addVideo(title, author, link);
        setTitle('');
        setAuthor('');
        setLink('');
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label>Song Name: </label>
            <input type="text" value={title} required onChange={ (e) => { setTitle(e.target.value)}}/>
            <label>Author Name: </label>
            <input type="text" value={author} required onChange={ (e) => { setAuthor(e.target.value)}}/>
            <label>Link Video: </label>
            <input type="text" value={link} required onChange={ (e) => { setLink(e.target.value)}}/>
            <input type="submit" value="add song"/>
        </form>
    );
}

export default NewVideoForm;
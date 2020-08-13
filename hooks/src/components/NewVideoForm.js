import import React, { useState } from 'react'

const  NewSongForm = () => {
    const [title, setTitle] = useState('')
    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(title);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Video name:</label>
            <input type="text" placeholder="Input Video Title"  required />
            <input type="text" placeholder="Input Video Link" required />
            <input type="submit" class="form-control" value="add Video" />
        </form>
    );
}

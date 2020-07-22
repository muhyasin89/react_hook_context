import React, {useState} from 'react';
import uuid from 'uuid/v1';

const SongList = () => {
    const  [songs, setSongs] = useState([
            {
                title: 'peterpan--Semua Tentang Kita',
                artist: 'peterpan',
                id: 1
            },
            { 
                title: 'Mimpi Yang Sempurna', 
                artist: 'peterpan',
                id: 2
            },
            {
                title: 'peterpan--Bintang di Surga',
                artist: 'peterpan',
                id: 3
            } 
    ]);

    const addSongs = () => {
        setSongs([
            ...songs, {
                title: 'new songs',
                artist: 'nobody',
                id: uuid()
            }
        ]);
    }
    return (
         <div className="song-list">
            <ul>
              { songs.map(song => { 
                return (<li key={ song.id }>{song.artist} -- {song.title}</li>);
              }) }
            </ul>
            < button onClick = {
                addSongs
            } > Add a Song < /button>
         </div>
     );
}

export default SongList;
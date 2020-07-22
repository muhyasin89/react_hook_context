import React from 'react';

const SongList = () => {
    useState([
            {
                title: 'peterpan--Semua Tentang Kita',
                artist: 'peterpan',
                id: 1
            },
            { 
                title: 'Mimpi Yang Sempurna', 
                artist: 'peterpan',
                id:2 
            },
            {
                title: 'peterpan--Bintang di Surga',
                artist: 'peterpan',
                id: 3
            } 
    ]);
    return (
         <div className="song-list">
            <ul>
              
            </ul>
         </div>
     );
}

export default SongList;
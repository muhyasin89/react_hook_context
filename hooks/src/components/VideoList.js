import React, {useState} from 'react';
import uuid from 'uuid/v1';

const VideoList = () => {
    const [videos, setVideos] = useState([
            {
                title: 'React Context vs Redux - Who wins?',
                link: 'https://www.youtube.com/watch?v=OvM4hIxrqAw',
                artist: 'Academind',
                id: 1
            },
            { 
                title: 'Heres how React\'s New Context API Works ',
                link: 'https://www.youtube.com/watch?v=XLJN4JfniH4',
                artist: 'peterpan',
                id: 2
            },
            {
                title: 'React Hooks useContext Tutorial (Storing a User)',
                link: 'https://www.youtube.com/watch?v=lhMKvyLRWo0',
                artist: 'Ben Award',
                id: 3
            } 
    ]);

    const addVideos = () => {
        setVideos([
            ...videos, {
                title: 'new songs',
                artist: 'nobody',
                id: uuid()
            }
        ]);
    }
    return (
         <div className="song-list">
            <ul>
              {
                videos.map(video => {
                return (<li key={ video.id }>{ video.artist} -- {video.title}</li>);
              }) }
            </ul>
            <NewVideoForm addVideo={addVideo} />
         </div>
     );
}

export default VideoList;
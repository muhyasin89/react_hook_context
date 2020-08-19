import React, { useState } from 'react';
import NewVideoForm from './NewVideoForm';
import {
    v4 as uuidv4
} from 'uuid';



const VideoList = () => {
    const [videos, setVideos] = useState([
        {
            title: 'React Context vs Redux - Who wins?',
            author: 'academind',
            link: 'https://www.youtube.com/watch?v=OvM4hIxrqAw&t=55s',
            id: 1
        },
        {
            title: 'React, Redux & Firebase App Tutorial #1 - Introduction',
            author: 'net ninja',
            link: 'https://www.youtube.com/watch?v=Oi4v5uxTY5o&list=PL4cUxeGkcC9iWstfXntcj8f-dFZ4UtlN3',
            id: 2
        },
        {
            title: 'Statistics for Data Science & Machine Learning',
            author: 'derek banas',
            link: 'https://www.youtube.com/watch?v=tcusIOfI_GM',
            id: 3
        }
    ]);

    const addVideo = (title, author, link) => {
        setVideos([...videos, {
            title,
            author,
            link,
            id: uuidv4()
        }]);
    }

    
    return (
        <div className="videoList">
            <ul>
            {videos.map(video => {
                return (
                    <li key={video.id}>{video.title} - {video.link} - {video.author}</li>
                );
            })}
        </ul>
        <NewVideoForm addVideo={addVideo} />
        </div>
    );
}

export default VideoList;
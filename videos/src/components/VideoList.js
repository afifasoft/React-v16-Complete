import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {

    const renderedList = videos.map((video) => {
      return <VideoItem video={video}/>
    });
    //console.log(props.videos);
    console.log(videos);
      //    {props.videos.length}
    return (
      <div className="ui relaxed divided list">

      { renderedList }
      </div>
    );
};


export default VideoList;

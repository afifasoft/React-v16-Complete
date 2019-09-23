import React from 'react';

const VideoList = ({ videos }) => {

    //console.log(props.videos);
    console.log(videos);
      //    {props.videos.length} 
    return (
      <div>

      { videos.length }
      </div>
    );
};


export default VideoList;

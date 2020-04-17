import React from 'react';
import ReactPlayer from 'react-player';

function VideoPlayer(props){
 var vid_id = props.vid_id;
 var desc = props.desc;
 var title = props.title;
 var videoUrl = "https://www.youtube.com/watch?v=" + vid_id;
 console.log(videoUrl);
  return (
    <div className = "player">
      <ReactPlayer url = {videoUrl}/>
      <p className = 'p1'>{title}</p>
      <p>{desc}</p>
    </div>
  )
}

export default VideoPlayer;

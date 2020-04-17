import React from 'react';
import ReactPlayer from 'react-player'

class VideoPlayer extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    window.scrollTo(0,0);
    var vid_id = this.props.vid_id;
    var desc = this.props.desc;
    var title = this.props.title;
    var videoUrl = "https://www.youtube.com/watch?v=" + vid_id;
    console.log(videoUrl);
    return (
      <div className = 'player'>
        <div className>
        <ReactPlayer url = {videoUrl}/>
        <p className = 'p1'>{title}</p>
        <p>{desc}</p>
        </div>
        <button className = 'close' onClick ={this.props.closeVideoPlayer}>x</button>
      </div>
    );
  }
}

export default VideoPlayer;

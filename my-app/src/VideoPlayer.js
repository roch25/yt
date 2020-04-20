import React from 'react';
import ReactPlayer from 'react-player'
import {AiTwotoneLike} from 'react-icons/ai'

class VideoPlayer extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    window.scrollTo(0,0);
    let views = this.props.vidStats[0].statistics.viewCount + ' views';
    let likes = this.props.vidStats[0].statistics.likeCount;
    var vid_id = this.props.vid_id;
    var channelName = this.props.channelName + ' ';
    var title = this.props.title;
    var videoUrl = "https://www.youtube.com/watch?v=" + vid_id;
    console.log(videoUrl);
    return (
      <div className = 'player'>
        <div className = 'sub'>
          <ReactPlayer className = 'r-player' url = {videoUrl}/>
          <p className = 'p1 p3'>{title}</p>
          <div className = 'like1'> 
            <AiTwotoneLike className = 'likeIcon'/> 
            <p className = 'p3'>{likes}</p>
          </div>
          <p className = 'p3'>{views}</p>
        </div>
        <button className = 'close' onClick ={this.props.closeVideoPlayer}>x</button>
      </div>
    );
  }
}

export default VideoPlayer;

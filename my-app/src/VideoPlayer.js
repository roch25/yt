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
   /*  let duration = this.props.vidStats[0].contentDetails.duration;
    duration = duration.substring(2);
    console.log(duration); */ 
    // var channelName = this.props.channelName + ' ';
    var title = this.props.title;
    var videoUrl = "https://www.youtube.com/watch?v=" + vid_id;
    console.log(videoUrl);
    return (
      <div className = 'player'>
        <div className = 'player__sub'>
          <ReactPlayer url = {videoUrl}/>
          <p className = 'player__sub__title'>{title}</p>
          <p className = 'player__sub__views'>{views}</p>
          <div className = 'player__sub__likes'> 
            <AiTwotoneLike className = 'player__sub__likes__icon'/> 
            <p className = 'player__sub__likes__value'>{likes}</p>
          </div>
        </div>
        <button className = 'player__close' onClick ={this.props.closeVideoPlayer}>x</button>
      </div>
    );
  }
}

export default VideoPlayer;

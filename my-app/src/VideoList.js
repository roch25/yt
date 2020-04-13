import React from 'react';
import ReactDOM from 'react-dom';
import VideoPlayer from './VideoPlayer'
import ListItems from './ListItems';

class VideoList extends React.Component {
  playVideo = (...vidDetails) => {
    console.log(vidDetails[0]);
    ReactDOM.render(
      <VideoPlayer vid_id = {vidDetails[0]} title = {vidDetails[1]} desc = {vidDetails[2]} />,
      document.getElementById('search-result-box')
    );
  }
  render(){
    return (
      <ul>
      <ListItems li = {this.props.a_list} playVideo = {this.playVideo()}/>
      </ul>
    )
  }
}

export default VideoList;

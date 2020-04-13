import React from 'react';
import ListItems from './ListItems';

class VideoList extends React.Component {
  render(){
    return (
      <ul>
      <ListItems li = {this.props.a_list} playVideo = {this.props.playVideo}/>
      </ul>
    )
  }
}

export default VideoList;

import React from 'react';
import ReactDOM from 'react-dom';
import VideoPlayer from './VideoPlayer'
import ListItems from './ListItems';
import PropTypes from 'prop-types';

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

import React from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player';
import ListItems from './ListItems';

function VideoList(props) {
  return (
    <ul>
    <ListItems li = {props.a_list}/>
    </ul>
  )
}

export default VideoList;

import React from 'react';
import ListItem from './ListItems';

class VideoList extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    const listItems = this.props.a_list;
    return (
      <ul className = 'list'>{
        listItems.map ((item) => (
          <ListItem li = {item} side = {this.props.side} playVideo = {this.props.playVideo}/>
        ))
       }
      </ul>
    );
  }
}

export default VideoList;

import React from 'react';
import ListItem from './ListItems';

class VideoList extends React.Component {
  render(){
    let listItems = this.props.a_list;
    console.log(typeof listItems);
    
    return (
      <ul>{
        listItems.map ((item) => (
          <ListItem li = {item} playVideo = {this.props.playVideo}/>
        ))
       }
      </ul>
    );
  }
}

export default VideoList;

import React from 'react';
import ReactDOM from 'react-dom';

class ListItems extends React.Component{
  render(){
    const a_list = this.props.li;
    var items =  a_list.map((a_list) =>
    <li id = 'li1' key = {a_list.id.videoId} onClick =
    { this.props.playVideo.bind(this, a_list.id.videoId,  a_list.snippet.title, a_list.snippet.description)
      // .bind(this, a_list.id.videoId, a_list.snippet.title, a_list.snippet.description)
           // (a_list.id.videoId,a_list.snippet.title, a_list.snippet.description)
    }>
    <img src={a_list.snippet.thumbnails.default.url} id="thumbnail" alt="" />
     <div id = "li2">
       <p id = "title">{a_list.snippet.title}</p>
       <p id = "desc">{a_list.snippet.description}</p>
     </div>
    </li>)
    return (
      <div>{items}</div>
    );
  }
}

export default ListItems;

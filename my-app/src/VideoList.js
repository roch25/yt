import React from 'react';
import ReactDOM from 'react-dom';

function ListItems(props){
  const a_list = props.li;
  const items =  a_list.map((a_list) =>
  <li id = 'li1' key = {a_list.snippet.title}>
  <img src={a_list.snippet.thumbnails.default.url} id="thumbnail" alt="No Image Available" />
   <div id = "li2">
     <p id = "title">{a_list.snippet.title}</p>
     <p id = "desc">{a_list.snippet.description}</p>
   </div>
  </li>)
  return (
<div>
  {items}
</div>
  )
}

function VideoList(props) {
  return (
    <ul>
    <ListItems li = {props.a_list}/>
    </ul>
  )
}

export default VideoList;

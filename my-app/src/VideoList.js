import React from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player';

function VideoPlayer(props){
 var vid_id = props.vid_id;
 var desc = props.desc;
 var title = props.title;
 var videoUrl = "https://www.youtube.com/watch?v=" + vid_id;
 console.log(videoUrl);
  return (
    <div id = "player">
      <ReactPlayer  url = {videoUrl}/>
      <p id = 'p1'>{title}</p>
      <p>{desc}</p>
    </div>
  )
}

function play_video(vidId, title, desc){
  console.log('boop '+vidId);
  ReactDOM.render(
    <VideoPlayer vid_id = {vidId} title = {title} desc = {desc}/>,
    document.getElementById('search-result-box')
    // window.open();
  );
}

function ListItems(props){
  const a_list = props.li;
  const items =  a_list.map((a_list) =>
  <li id = 'li1' key = {a_list.snippet.title} onClick = {() => play_video(a_list.id.videoId,a_list.snippet.title, a_list.snippet.description)}>
  <img src={a_list.snippet.thumbnails.default.url} id="thumbnail" alt="No Image Available" />
   <div id = "li2">
     <p id = "title">{a_list.snippet.title}</p>
     <p id = "desc">{a_list.snippet.description}</p>
   </div>
  </li>)
  return (
    <div>{items}</div>
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

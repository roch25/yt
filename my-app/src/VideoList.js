import React from 'react';
import ReactDOM from 'react-dom';
import VideoPlayer from './VideoPlayer'

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


// function ImageList(props){
//   const t_img = props.image_list;
//   return (
//
//   )
// }
//
// function Title(props){
//   const title = props.title_items;
//   const title1 = title.map((title) =>
//     title
//   )
//   // console.log(imageThumb);
//   return (
//     <p id = "title">{title1}</p>
//   )
// }
//
// function Description(props){
//   const desc = props.desc_items;
//   const desc_items= desc.map((desc) =>
//   desc
//   )
//   // console.log(imageThumb);
//   return (
//     <p id = "description">{desc}</p>
//   )
// }
// function ListItems(props){
//   const a_list = props.li;
//   const img_items =  a_list.map((a_list) =>
//   a_list.snippet.thumbnails.default.url
//   )
//   const title_items =  a_list.map((a_list) =>
//     a_list.snippet.title
//   )
//   const desc_items =  a_list.map((a_list) =>
//     a_list.snippet.description
//   )
//   return (
//     <li>
//       <ImageList image_list = {img_items}/>
//       <li>
//         <Title title_items ={title_items}/>
//         <Description desc_items= {desc_items}/>
//       </li>
//     </li>
//   )
// }

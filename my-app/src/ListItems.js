import React from 'react';

class ListItem extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    let a_list = this.props.li;
    return (
      <li
      id='li1'
      key={a_list.id.videoId}
      onClick={
        ()=>this.props.playVideo(a_list.id.videoId, a_list.snippet.title, a_list.snippet.description)
      }
      >
        <img src={a_list.snippet.thumbnails.default.url} className="thumbnail" alt="" />
        <div id="li2">
          <p id="title">{a_list.snippet.title}</p>
          <hr></hr>
          <p id="desc">{a_list.snippet.description}</p>
        </div>
      </li>
    );
  }
}

export default ListItem;

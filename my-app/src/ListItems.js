import React from 'react';

class ListItem extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    let a_list = this.props.li;
    return (
      <li
      className='li1'
      key={a_list.id.videoId}
      onClick={
        ()=>this.props.playVideo(a_list.id.videoId, a_list.snippet.title, a_list.snippet.channelTitle)
      }
      >
        <img src={a_list.snippet.thumbnails.default.url} className="thumbnail" alt="" />
        <div className="li2">
          <p className="title p2">{a_list.snippet.title}</p>
          <p className="channelName p2">{a_list.snippet.channelTitle}</p>
          <p className="p2 desc">{a_list.snippet.description}</p>
        </div>
      </li>
    );
  }
}

export default ListItem;

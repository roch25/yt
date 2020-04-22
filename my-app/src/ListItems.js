import React from 'react';

class ListItem extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    let a_list = this.props.li;
    return (
      <li className='list__item' key={a_list.id.videoId}
      onClick={
        ()=>this.props.playVideo(a_list.id.videoId, a_list.snippet.title, a_list.snippet.channelTitle)
      }>
        <div className = 'container'>
          <img src={a_list.snippet.thumbnails.default.url} alt="" />
          <p></p>
        </div>
        <div className="list__item__list2">
          <p className="list__item__list2__title">{a_list.snippet.title}</p>
          <p className="list__item__list2__channelName">{a_list.snippet.channelTitle}</p>
          <p className="list__item__list2__desc">{a_list.snippet.description}</p>
        </div>
      </li>
    );
  }
}

export default ListItem;

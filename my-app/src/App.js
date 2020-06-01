import React from 'react';
import './scss/App.css';
import fetchSearchList from './Request';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer'
import ErrorMsg from './ErrorMsg'
import error from './ne.png'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchStr: "",
      videoList: [],
      showVideoPlayer: false,
      videoDetails: {},
      vidInfo: {},
      class2: 'nope'
    }
  }

  playVideo = async (...videoDetails) => {
    let res = await fetchSearchList('videos', videoDetails[0]);
    console.log(res.items);
    this.setState({ showVideoPlayer: true, videoDetails, vidInfo: res.items, class2: 'side' })
  }

  closeVideoPlayer = () => {
    this.setState({ showVideoPlayer: false, class2: 'nope' })
  }

  saveState = (e) => {
    this.setState({ searchStr: e.target.value })
  }

  handleClick = async () => {
    let str = this.state.searchStr;
    let res = await fetchSearchList('search', str);
    res = res.items;
    console.log(res);
    this.setState({ videoList: res, showVideoPlayer: false, class2: 'nope' })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="search">
            <i className="search-yt" />
            <input type="search" className="search-box" placeholder="Search" onChange={this.saveState} />
            <i class='glyphicon glyphicon-remove search-remove-icon' type="button" ></i>
            <i class='glyphicon glyphicon-search search-icon' type="button" onClick={this.handleClick}></i>
          </div>
        </header>
        <body>
          {
            this.state.showVideoPlayer &&
            <VideoPlayer
              vid_id={this.state.videoDetails[0]}
              title={this.state.videoDetails[1]}
              channelName={this.state.videoDetails[2]}
              vidStats={this.state.vidInfo}
              closeVideoPlayer={this.closeVideoPlayer} />
          }
          {
            this.state.videoList !== undefined ?
              <VideoList a_list={this.state.videoList} playVideo={this.playVideo} side={this.state.class2} />
              : <ErrorMsg msg='An error has occured' src={error} />
          }
        </body>
      </div>
    );
  }
}

export default App;

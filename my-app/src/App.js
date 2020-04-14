import React from 'react';
import ReactDOM from 'react-dom';
import logo from './yt2.svg';
import './App.css';
import fetchSearchList from './Request';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videoList: [],
      showVideoPlayer: false,
      videoDetails: {}
    }
  }
  playVideo = (...videoDetails) => {
    console.log(videoDetails)

    this.setState({ showVideoPlayer : true , videoDetails })
  }
  handleClick = async () => {
    let res = await fetchSearchList()
    this.setState({ videoList: res })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="Search">
            <input type="text" id="search-box" placeholder="Search" />
      &nbsp;
      <input className="search-button" type="button" onClick={this.handleClick} />
          </div>
        </header>
        {
          this.state.showVideoPlayer &&
          <VideoPlayer
            vid_id={this.state.videoDetails[0]}
            title={this.state.videoDetails[1]}
            desc={this.state.videoDetails[2]} />
        }
        <VideoList a_list={this.state.videoList} playVideo={this.playVideo} />
      </div>
    );
  }
}

export default App;

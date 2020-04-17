import React from 'react';
import logo from './yt2.svg';
import './App.css';
import fetchSearchList from './Request';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer'
import ErrorMsg from './ErrorMsg'
import error from './ne.png'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: [],
      showVideoPlayer: false,
      videoDetails: {},
    }
  }
  playVideo = (...videoDetails) => { 
    this.setState({ showVideoPlayer : true , videoDetails })
  }
  handleClick = async () => {
    let str = document.getElementById("search-box").value;
    let res = await fetchSearchList(str)  
    this.setState({ videoList: res }) 
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="Search">
            <input type="text" id="search-box" placeholder="Search" /> &nbsp;
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
        { 
          this.state.videoList !== undefined ? 
          <VideoList a_list={this.state.videoList} playVideo={this.playVideo} /> 
          : <ErrorMsg msg = 'An error has occured' src = {error}/>
        }
      </div>
    );
  }
}

export default App;

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
    this.api_key = "AIzaSyB9jaiRZ6En179_1VcxU4sXeecSd_jg4VM";
    this.url = "https://www.googleapis.com/youtube/v3";
    this.state = {
      videoList: [],
      showVideoPlayer: false,
      videoDetails: {},
      vidInfo: {}
    }
  }
  playVideo = async (...videoDetails) => { 
    let res = await fetchSearchList(null, this.api_key, this.url, 'videos', videoDetails[0]);
    console.log(res.items);
    this.setState({ showVideoPlayer : true , videoDetails, vidInfo: res.items })
  }
  
  closeVideoPlayer = () => { 
    this.setState({showVideoPlayer : false})
  }
  
  handleClick = async () => {
    let str = document.getElementById("search-box").value;
    let res = await fetchSearchList(str, this.api_key, this.url, 'search', null);
    res = res.items;
    this.setState({ videoList: res , showVideoPlayer : false}) 
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
          channelName ={this.state.videoDetails[2]} 
          vidStats = {this.state.vidInfo}
          closeVideoPlayer = {this.closeVideoPlayer} />
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

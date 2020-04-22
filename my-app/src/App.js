import React from 'react';
import logo from './yt2.svg';
import './scss/App.css';
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
      vidInfo: {}
    }
  }
  playVideo = async (...videoDetails) => { 
    let res = await fetchSearchList('videos', videoDetails[0]);
    console.log(res.items);
    this.setState({ showVideoPlayer : true , videoDetails, vidInfo: res.items })
  }
  
  closeVideoPlayer = () => { 
    this.setState({showVideoPlayer : false})
  }
  
  handleClick = async () => {
    let str = document.getElementById("search-box").value;
    let res = await fetchSearchList('search', str);
    res = res.items;
    console.log(res);
    this.setState({ videoList: res , showVideoPlayer : false}) 
  }
  
  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} alt="logo" />
          <div className="Search">
            <input type="search" id="search-box" placeholder="Search" /> &nbsp;
            <i className="search-button" type="button" onClick={this.handleClick} />
          </div>
        </header>
        <div className = 'main-body'>
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
      </div>
    );
  }
}

export default App;

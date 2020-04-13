import React from 'react';
import ReactDOM from 'react-dom';
import logo from './yt2.svg';
import './App.css';
import fetchSearchList from './Request';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer'

class App extends React.Component{
  // constructor(props) {
  //  super(props);
  // }
  playVideo = (...vidDetails) => {
    ReactDOM.render(
      <VideoPlayer vid_id = {vidDetails[0]} title = {vidDetails[1]} desc = {vidDetails[2]} />,
      document.getElementById('search-result-box')
    );
  }
  handleClick = () => {
   fetchSearchList().then(res => {
     ReactDOM.render(
       <VideoList a_list = {res} playVideo = {this.playVideo}/>,
       document.getElementById('search-result-box')
     );
   })
  }
  render(){
    return (
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div className = "Search">
      <input type = "text" id = "search-box" placeholder = "Search" />
      &nbsp;
      <input className = "search-button" type = "button" onClick = {this.handleClick} />
      </div>
      </header>
      <div id="search-result-box">
      </div>
      </div>
    );
  }
}

export default App;

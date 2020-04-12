import React from 'react';
import ReactDOM from 'react-dom';
import logo from './yt2.svg';
import './App.css';
import fetch_search_list from './Request';
import VideoList from './VideoList';

class App extends React.Component{
  constructor(props) {
   super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
   fetch_search_list().then(res => {
     ReactDOM.render(
       <VideoList a_list = {res}/>,
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
      <div id="search-result-box"></div>
      </div>
    );
  }
}

export default App;

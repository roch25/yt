import React from 'react';
import ReactDOM from 'react-dom';
import logo from './yt2.svg';
import './App.css';
import axios from "axios";

function shoot(){
  var url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyB9jaiRZ6En179_1VcxU4sXeecSd_jg4VM";
	var str = document.getElementById("search-box").value;
  const opts = {
  		params: {
 			q: str,
			part: 'snippet',
			type: 'video',
			maxResults: 10
  		}
	}
  axios.get(url, opts)
    .then(function (response) {
      var search_item = response.data.items;
      console.log("tag"+str);
      var a_list = [];
      var vidThumburl = [];
      for(var i = 0; i < search_item.length; i++){
        a_list[i] = search_item[i].snippet.title;
        vidThumburl[i] =  search_item[i].snippet.thumbnails.default.url;
        console.log(a_list[i]);
      }
      function SearchResList(props) {
        const a_list = props.a_list;
        const listItems = a_list.map((a_list) =>
          <li key={a_list}>{a_list} </li>
        );
        return (
          <ul>{listItems}</ul>
        )
      }
      ReactDOM.render(
        <SearchResList a_list={a_list} />,  document.getElementById('search-result-box')
      );

    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {

    });

}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className = "Search">
        <input type = "text" id = "search-box" placeholder = "Search"/>
         &nbsp;
        <input className = "search-button" type = "button" onClick = {shoot} src = "search.png"/>
        </div>
      </header>
      <div id="search-result-box"></div>
    </div>
  );
}

// ReactDOM.render(<Search />, document.getElementById('search-result-box'));
export default App;

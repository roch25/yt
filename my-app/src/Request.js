import axios from "axios";
import React from 'react';
import ReactDOM from 'react-dom';
import VideoList from './VideoList';

async function display_search_list() {
  document.getElementById("search-result-box").style.visibility = "visible";
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
  try {
    const response = await axios.get(url, opts);
    var search_item = response.data.items;
    console.log(search_item);
    ReactDOM.render(
      <VideoList a_list = {search_item}/>,
      document.getElementById('search-result-box')
    );
  } catch (error) {
    console.error(error);
  }
}

export default display_search_list;

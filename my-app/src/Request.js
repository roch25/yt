import axios from "axios";
import React from 'react';
import ReactDOM from 'react-dom';

async function fetch_search_list() {
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
  } catch (error) {
    console.error(error);
  }
  return search_item;
}

export default fetch_search_list;

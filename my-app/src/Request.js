import axios from "axios";

async function fetchSearchList() {
  const url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyB9jaiRZ6En179_1VcxU4sXeecSd_jg4VM";
  let str = document.getElementById("search-box").value;
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
    let search_item = response.data.items;
    return search_item;
  } catch (error) {
    console.error(error);
  }
 
}

export default fetchSearchList;

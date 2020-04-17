import axios from "axios";

async function fetchSearchList(searchString) {
  const url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyB9jaiRZ6En179_1VcxU4sXeecSd_jg4VM";
  const opts = {
    params: {
      q: searchString,
      part: 'snippet',
      type: 'video',
      maxResults: 10
    }
  }
  let search_item;
  try {
    const response = await axios.get(url, opts);
    search_item = response.data.items;
  } catch (error) {
    console.error(error);
  }
  return search_item;
}

export default fetchSearchList;

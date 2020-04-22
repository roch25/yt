async function fetchSearchList(activity, identifier) { //not a good name identifier :/
  const key = "AIzaSyB9jaiRZ6En179_1VcxU4sXeecSd_jg4VM";
  const url = "https://www.googleapis.com/youtube/v3";
  let search_item;
  const final_url = (activity === 'search') ?
  url+"/"+activity+"?key="+key+"&q="+identifier+"&part=snippet&type=video&maxResults=10" : 
  url+"/"+activity+"?key="+key+"&id="+identifier+"&part=snippet,statistics,contentDetails";
  console.log(final_url);
  const response = await fetch(final_url);
  const data = await response.json();
  console.log(data);
  
  search_item = data;
  return search_item;
}

export default fetchSearchList;

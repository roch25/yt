async function fetchSearchList(searchString, key, url, activity, vidId) {
  let search_item;
  const final_url = (activity === 'search') ?
  url+"/"+activity+"?key="+key+"&q="+searchString+"&part=snippet&type=video&maxResults=10" : 
  url+"/"+activity+"?id="+vidId+"&key="+key+"&part=snippet,contentDetails,statistics,status";
  console.log(final_url);
  const response = await fetch(final_url);
  const data = await response.json();
  search_item = data;
  return search_item;
}

export default fetchSearchList;

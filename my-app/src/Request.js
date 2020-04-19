async function fetchSearchList(searchString) {
  let search_item;
  const key = "AIzaSyB9jaiRZ6En179_1VcxU4sXeecSd_jg4VM";
  const url = "https://www.googleapis.com/youtube/v3/search?key="+key+"&q="+searchString+"&part=snippet&type=video&maxResults=10";
  const fetchResult = fetch(url)
  const response = await fetchResult;
  const data = await response.json();
  console.log(data.items);
  search_item = data.items;
  return search_item;
}

export default fetchSearchList;

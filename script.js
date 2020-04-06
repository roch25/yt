function searchlist(){
	var url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyB9jaiRZ6En179_1VcxU4sXeecSd_jg4VM";
	var str = document.getElementById("search_box").value;
	const opts = {
  		params: {
 			q: str,
			part: 'snippet', 
			type: 'video',
			maxResults: 10
  		}
	}
	console.log("tag: "+ str);
	axios.get(url, opts)
	  .then(function (response) {
			console.log(response);
			//console.log(" id");
			document.getElementById("results").innerHTML = "";
			var search_item = response.data.items; 
			//console.log(search_item);
			var i;
			for(i = 0; i < search_item.length; i++){
				vid_id =  search_item[i].id.videoId;
				//console.log("id "+ vid_id);
				vidTitle = search_item[i].snippet.title;  
				desc = search_item[i].snippet.description;
				channelTitle = search_item[i].snippet.channelTitle;
				vidThumburl =  search_item[i].snippet.thumbnails.default.url;                 
				var ul = document.getElementById("results");
				var li = document.createElement("li");
				var img = document.createElement('img');
				img.src  = vidThumburl;
				img.id = "thumb";
				img.alt = "No Image Available";
				li.setAttribute('onclick', play_video(i));
				//img.addEventListener('onclick', play_video(i));
				li.appendChild(img);
				var p = document.createElement("p");
				var title = document.createTextNode(vidTitle);
				p.appendChild(title);
				li.appendChild(p);
				var channel = document.createTextNode(channelTitle);
				var space = document.createTextNode(" | ");
				p.appendChild(space);
				p.appendChild(channel);
				ul.appendChild(li);
			}
	  })
	  .catch(function (error) {
		// handle error
		console.log(error.response);
	  })
	  .then(function () {
		
	  });
}

function play_video(i)
{
	console.log(i);
			
}

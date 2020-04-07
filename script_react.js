function searchlist(){
    var url="https://www.googleapis.com/youtube/v3/search?key=AIzaSyB9jaiRZ6En179_1VcxU4sXeecSd_jg4VM";
    var str=document.getElementById("search_box").value;
    const data = 'Search Results';

    const opts = {
    		params: {
   			q: str,
  			part: 'snippet',
  			type: 'video',
  			maxResults: 10
    		}
  	}

    axios.get(url, opts).then(function(response) {
      	console.log(response);
        var search_item = response.data.items;
        var a_list = [];
        for(var i = 0; i < search_item.length; i++){
          a_list[i] = search_item[i].snippet.title;
        }
        var ListRender = React.createClass({displayName: "ListRender",
        render: function() {
          return (
            React.createElement("ul", null,
              this.props.list.map(function(listValue){
                return React.createElement("li", null, listValue);
              })
            )
          )
        }
        });
        ReactDOM.render(
          React.createElement(ListRender, {list: a_list}),
          document.getElementById('search_result_box')
        );
    })
    .catch(function (error) {
		console.log(error);
	  })
	  .then(function () {

	  });

}


var used_indexes = [];

var videos = [

	"https://www.linkedin.com/in/devoncarlson1"
];


function randomizeVideo(){
	var size  = videos.length-1; 

	var index = Math.floor(Math.random()*(size-0+1)+0);
	if(used_indexes.length == videos.length){
		used_indexes = [];
	}
	while(used_indexes.indexOf(index) > -1){
		index = Math.floor(Math.random()*(size-0+1)+0);
	}
	used_indexes.push(index);

	var video = videos[index];
	// swindow.location.replace(video);
	window.open(
	  video,
	  '_blank' // <- This is what makes it open in a new window.
	);
}

//"https://www.youtube.com/watch?v=9Q9niHvP0g8autoplay=1"
//"http://tinyurl.com/o4dwhql"

var used_indexes = [];

var videos = [
"https://www.youtube.com/watch?v=9Q9niHvP0g8&autoplay=1",
	//"https://www.youtube.com/v/YuS7iToVsa4&start=120&autoplay=1",
	//"https://www.youtube.com/v/wepgRfpjBAQ&autoplay=1",
	//"https://www.youtube.com/v/O_YHbodBzy4&autoplay=1",
	//"https://www.youtube.com/v/F07zOFLf5rk&autoplay=1",
	//"https://www.youtube.com/watch?v=q8DmGy3inh0&start=2430&autoplay=1",
   // "https://www.youtube.com/v/Uhky7pALFSA&start=125&autoplay=1",
  //  "https://www.youtube.com/v/fnkaI8pkhXs&start=160&autoplay=1",
   // "https://www.youtube.com/v/hDXvtqvXL54&autoplay=1"
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

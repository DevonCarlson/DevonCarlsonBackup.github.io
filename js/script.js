
var videos = [
	"https://www.youtube.com/v/YuS7iToVsa4#t=2m0s",
	"https://www.youtube.com/v/wepgRfpjBAQ",
	"https://www.youtube.com/v/O_YHbodBzy4",
	"https://www.youtube.com/v/F07zOFLf5rk",
    "https://www.youtube.com/v/Uhky7pALFSA#t=2m5s",
    "https://www.youtube.com/v/fnkaI8pkhXs#t=2m40s",
    "https://www.youtube.com/v/ViLwNTgfNS8",
    "https://www.youtube.com/v/hDXvtqvXL54",
    "https://www.youtube.com/v/-SomEwQ6L_s",
    "https://www.youtube.com/v/BxjMGiN0jJY&feature=youtu.be",
    "https://www.youtube.com/v/DQ7zStSis_k",
    "https://www.youtube.com/v/bmxACZd36jA#t=2m0s"



];


function randomizeVideo(){
	var index = Math.floor(Math.random()*(24-0+1)+0);
	var video = videos[index];
	// swindow.location.replace(video);
	window.open(
	  video,
	  '_blank' // <- This is what makes it open in a new window.
	);
}

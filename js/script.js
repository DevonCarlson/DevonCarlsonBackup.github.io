
var videos = [
	"https://www.youtube.com/v/DQ7zStSis_k",
	"https://www.youtube.com/v/N6K-aRg2NLk",
	"https://www.youtube.com/v/bmxACZd36jA#t=2m0s",
	"https://www.youtube.com/v/5p0QtJMKt1s",
	"https://www.youtube.com/v/ViLwNTgfNS8",
	"https://www.youtube.com/v/hDXvtqvXL54",
	"https://www.youtube.com/v/-SomEwQ6L_s",
	"https://www.youtube.com/v/w8beANAV8s64",
	"https://www.youtube.com/v/Jkdb_fQGbO4",
	"https://www.youtube.com/v/sz2mmM-kN1I",
	"https://www.youtube.com/v/HrN-GPYlcbQ",
	"https://www.youtube.com/v/BxjMGiN0jJY&feature=youtu.be",
	"https://www.youtube.com/v/eqsAvKqqf2g&feature=youtu.be",
	"https://www.youtube.com/v/32nkdvLq3oQ",
	"https://www.youtube.com/v/=jlTD08isBzo",
	"https://www.youtube.com/v/da0uZmijmdE",
	"https://www.youtube.com/v/YuS7iToVsa4#t=2m0s",
	"https://www.youtube.com/v/niEYaeYa72U#t=0m7s",
	"https://www.youtube.com/v/DTdSFeQ2yVc",
	"https://www.youtube.com/v/wepgRfpjBAQ",
	"https://www.youtube.com/v/O_YHbodBzy4",
	"https://www.youtube.com/v/6Z66wVo7uNw",
	"https://www.youtube.com/v/qY7HQ9Z9lbs#t=4m30s",
	"https://www.youtube.com/v/WSHs27nJ0gk#t=4m45s",
	"https://www.youtube.com/v/F07zOFLf5rk"
];

function randomizeVideo(){
	var index = Math.floor(Math.random()*(24-0+1)+0);
	var video = videos[index];
	window.location.replace(video);
}


var videos = [
	"https://www.youtube.com/watch?v=DQ7zStSis_k",
	"https://www.youtube.com/watch?v=N6K-aRg2NLk",
	"https://www.youtube.com/watch?v=bmxACZd36jA#t=2m0s",
	"https://www.youtube.com/watch?v=5p0QtJMKt1s",
	"https://www.youtube.com/watch?v=ViLwNTgfNS8",
	"https://www.youtube.com/watch?v=hDXvtqvXL54",
	"https://www.youtube.com/watch?v=-SomEwQ6L_s",
	"https://www.youtube.com/watch?v=8beANAV8s64",
	"https://www.youtube.com/watch?v=Jkdb_fQGbO4",
	"https://www.youtube.com/watch?v=sz2mmM-kN1I",
	"https://www.youtube.com/watch?v=HrN-GPYlcbQ",
	"https://www.youtube.com/watch?v=BxjMGiN0jJY&feature=youtu.be",
	"https://www.youtube.com/watch?v=eqsAvKqqf2g&feature=youtu.be",
	"https://www.youtube.com/watch?v=32nkdvLq3oQ",
	"https://www.youtube.com/watch?v=jlTD08isBzo",
	"https://www.youtube.com/watch?v=da0uZmijmdE",
	"https://www.youtube.com/watch?v=YuS7iToVsa4#t=2m0s",
	"https://www.youtube.com/watch?v=niEYaeYa72U#t=0m7s",
	"https://www.youtube.com/watch?v=DTdSFeQ2yVc",
	"https://www.youtube.com/watch?v=wepgRfpjBAQ",
	"https://www.youtube.com/watch?v=O_YHbodBzy4",
	"https://www.youtube.com/watch?v=6Z66wVo7uNw",
	"https://www.youtube.com/watch?v=qY7HQ9Z9lbs#t=4m30s",
	"https://www.youtube.com/watch?v=WSHs27nJ0gk#t=4m45s",
	"https://www.youtube.com/watch?v=F07zOFLf5rk"
];

function randomizeVideo(){
	var index = Math.floor(Math.random()*(24-0+1)+0);
	var video = videos[index];
	window.location.href = video;
}

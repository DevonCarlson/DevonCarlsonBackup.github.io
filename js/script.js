
var videos = [
	"https://www.youtube.com/watch?v=DQ7zStSis_k&output=embed",
	"https://www.youtube.com/watch?v=N6K-aRg2NLk&output=embed",
	"https://www.youtube.com/watch?v=bmxACZd36jA#t=2m0s&output=embed",
	"https://www.youtube.com/watch?v=5p0QtJMKt1s&output=embed",
	"https://www.youtube.com/watch?v=ViLwNTgfNS8&output=embed",
	"https://www.youtube.com/watch?v=hDXvtqvXL54&output=embed",
	"https://www.youtube.com/watch?v=-SomEwQ6L_s&output=embed",
	"https://www.youtube.com/watch?v=8beANAV8s64&output=embed",
	"https://www.youtube.com/watch?v=Jkdb_fQGbO4&output=embed",
	"https://www.youtube.com/watch?v=sz2mmM-kN1I&output=embed",
	"https://www.youtube.com/watch?v=HrN-GPYlcbQ&output=embed",
	"https://www.youtube.com/watch?v=BxjMGiN0jJY&feature=youtu.be&output=embed",
	"https://www.youtube.com/watch?v=eqsAvKqqf2g&feature=youtu.be&output=embed"
];

function randomizeVideo(){
	var index = Math.floor(Math.random()*(24-0+1)+0);
	var video = videos[index];
	window.location.replace(video);
}

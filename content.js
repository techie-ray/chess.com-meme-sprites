console.log("I am the content script");


function logger(msg){
	chrome.runtime.sendMessage({
		load: msg
	}, function(response) {
  		console.log(response.farewell);
	});
}



const PIECES = {
	"p": [
			"https://static.freemake.com/blog/wp-content/uploads/2012/08/troll-face.jpg",
			// "https://www.nicepng.com/png/detail/228-2289538_troll-face-meme-i-saw-tobey-maguire-meme.png"
		], 

	"r": [
			"https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp/220px-Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp.png",
			// "https://www.meme-arsenal.com/memes/ba74b638712668e33fcca147e059df12.jpg"
		], 

	"n": [
			// "https://data.whicdn.com/images/284888463/original.jpg",
			"https://e7.pngegg.com/pngimages/134/484/png-clipart-shiba-inu-doge-run-spokes-amaze-meme-dogecoin-game-mammal.png"
		], 

	"b": [
		// "https://www.kindpng.com/picc/m/125-1257624_transparent-attack-on-titan-png-mikasa-ackerman-eren.png",
		"https://image.pngaaa.com/15/280015-middle.png"	
		], 

	"q": [
			// "https://i.pinimg.com/564x/42/71/bf/4271bf3da306828f386bdff4b83b062a.jpg",
			"https://www.pngitem.com/pimgs/m/141-1416336_imma-firin-mah-lazer-png-transparent-png.png"
		], 

	"k": [
			// "https://i.pinimg.com/originals/42/02/b7/4202b73100bf32e0db92599e66005223.jpg",
			// "https://www.pngitem.com/pimgs/m/211-2113980_surprised-pikachu-meme-hd-png-download.png"
			"https://upload.wikimedia.org/wikipedia/commons/f/ff/BTS_logo_%282017%29.png"
		]

}


function createQuerySelector(colour, piece){
	/***
		@string colour = "w", "b"
		@string piece = "p/r/n/b/q/k/p"
	***/
	
	var querySelectorStr = `.piece.${colour}${piece}`
	return querySelectorStr;

}

function detectColour(){
	const playerPieces = document.querySelectorAll('.player-pieces')[1];
	const ourColour = (playerPieces.color === 1) ? 'b' : 'w' 
	return ourColour;
}


function changeSprites(){
	const ourColour = detectColour();
	
	for (const [pieceType, imageURLs] of Object.entries(PIECES)) {
		querySelectorStr = createQuerySelector(ourColour, pieceType);
  		const pieceSpriteList = document.querySelectorAll(querySelectorStr);
  		for(const ps of pieceSpriteList){
  			const selectedSprite = selectRandom(imageURLs)
  			ps.style.backgroundImage = `url("${selectedSprite}")`;
  
  		}

	}	
}


function selectRandom(spriteArr){
	var sprite = spriteArr[Math.floor(Math.random()*spriteArr.length)];
	return spriteArr;
}


function main(){

	// changeSprites();
	setInterval(() => {
		try{
			changeSprites()	
		}
		catch(e){}
		
	}, 10);
}



main();


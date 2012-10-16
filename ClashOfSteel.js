var diagonalCut = new Card({
  "name": "Diagonal Cut",
  "resTime": "8",
  "type": "Strike",
  "image": "http://fc00.deviantart.net/fs70/f/2011/322/9/e/shieldmaiden_sketch_by_doranbladefist-d4gkyug.png",
  "rules": "Deal 5 damage"
  });

console.log(diagonalCut.getName() + " is the first card!");
console.log("Tt's a " + diagonalCut.getType() + " with resolution time " + diagonalCut.getResTime());


var slam= new Card({
	"name": "Slam",
	"resTime": "7",
	"type": "Strike",
	"image": "http://fc00.deviantart.net/fs70/f/2011/322/9/e/shieldmaiden_sketch_by_doranbladefist-d4gkyug.png",
	});

var superLongCardNameCardForSomeReason= new Card({
	"name": "Super Long Card Name Card For Some Reason",
	"resTime": "10",
	"type": "Defence",
	"image": "http://fc00.deviantart.net/fs70/f/2011/322/9/e/shieldmaiden_sketch_by_doranbladefist-d4gkyug.png",
	});
	
diagonalCut.display();
slam.display();
superLongCardNameCardForSomeReason.display();

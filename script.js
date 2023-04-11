const bowlImgs = ["chinaBowl.jpg", "whiteCeramicBowl.jpg", "metalBucket.jpg", "redWagon.jpg", "bossMug.jpeg"];
const bowlTxt = ["Beautifully Detailed Porcelain Bowl", "Plain White Bowl", "Galvanized Metal Bucket", "Cute Red Wagon!", "Cozy Mug"];
const cerealTxt = ["Fruity Pebbles", "Reese's Puffs", "Cinnamon Toast Crunch", "Frosted Flakes", "Raisin Bran Crunch", "Cap n Crunch", "Cookie Crisp", "Fruit Loops"];
const milkTxt = ["2% Milk", "Strawberry Milk", "Chocolate Milk", "Almond Milk", "Vanilla Soymilk", "Orange Juice", "Water", "Tequila", "Oatmilk", "Henessey"];

function getRandomIndex(range) {
	let randIndex=Math.floor(Math.random()*(range));
	return randIndex;
}
function makeRandomCereal() {
	let bowl=getRandomIndex(bowlTxt.length);
	let cereal=getRandomIndex(cerealTxt.length);
	let milk=getRandomIndex(milkTxt.length);
	restyle(bowl, cereal, milk);
	console.log(name + "'s Random Cereal Bowl: " + cerealTxt[cereal] + " with " + milkTxt[milk] + " in a " + bowlTxt[bowl]);
}
let cerealDiv = document.getElementById("cereal");
let milkDiv = document.getElementById("milk");
let bowlDiv = document.getElementById("bowl");
let button = document.getElementById("goButton");
/*document.getElementById("goButton").onclick = function() {restyle()};*/
function restyle(bowlIndex, cerealIndex, milkIndex) {
	document.getElementById("bowl").innerHTML = bowlTxt[bowlIndex];
	document.getElementById("with").innerHTML = "with";
	if ((bowlIndex %2)==0) {
		document.getElementById("bowl").classList.toggle("bowlText2");
		document.getElementById("bowl").classList.add("bowlText1");
	}
	else {
		document.getElementById("bowl").classList.toggle("bowlText1");
		document.getElementById("bowl").classList.add("bowlText2");
	}
	document.getElementById("cereal").innerHTML = cerealTxt[cerealIndex];
	document.getElementById("ina").innerHTML = "in a";
	if ((cerealIndex%2)== 0) {
		document.getElementById("cereal").classList.toggle("cerealText2");
		document.getElementById("cereal").classList.add("cerealText1");
	}
	else {
		document.getElementById("cereal").classList.toggle("cerealText1");
		document.getElementById("cereal").classList.add("cerealText2");
	}
	document.getElementById("milk").innerHTML = milkTxt[milkIndex];
	if ((milkIndex%2) == 0) {
		document.getElementById("milk").classList.toggle("milkText2");
		document.getElementById("milk").classList.add("milkText1");
	}
	else {
		document.getElementById("milk").classList.toggle("milkText1");
		document.getElementById("milk").classList.add("milkText2");
	}

}


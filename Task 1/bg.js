var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("bg");
var btn = document.getElementById("btn");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", "
		+ color2.value + ")";
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

color1.addEventListener("input", setGradient());
color2.addEventListener("input", setGradient());




btn.addEventListener("click", getRandomColor);

function randomColor() {
	var color = 'rgb(' + (Math.floor(Math.random() * 256)) + ','
		+ (Math.floor(Math.random() * 256)) + ','
		+ (Math.floor(Math.random() * 256)) + ')';
	return color;
}

function getRandomColor() {
	var rndColor1 = randomColor();
	var rndColor2 = randomColor();
	body.style.background = "linear-gradient(to right, " + rndColor1 + ", "
		+ rndColor2 + ")";


}


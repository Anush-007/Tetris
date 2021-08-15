let width = 10;
let height = 20;

var screenbuffer = Array(width * height);

let block = document.getElementById('block')

var pixtags = ""

for (var i = 0; i < height; i++) {
	pixtags += `<div class = "row">`
	for (var j = 0; j < width; j++) {
		pixtags += `<div class = "box" id = bx${i}${j}> </div>`;
	}
	pixtags += `</div>`
}

block.innerHTML += pixtags;
// body.classList.add('box')

console.log(pixtags);
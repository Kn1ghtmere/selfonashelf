var pics = [
  "assets/catto/1.jpeg",
    "assets/catto/2.jpeg",
    "assets/catto/3.jpeg",
    "assets/catto/4.jpeg",
    "assets/catto/5.jpeg",
    "assets/catto/6.jpeg"
] 

var current = 0 ;
function show() {

    document.getElementById("pics").innerHTML = 
    "<img src='" + pics[current] + "'>";
}

show();

document.getElementById("next").onclick = function() {
  if (current < pics.length -1) {current ++; show();}
};

document.getElementById("prev").onclick = function() {
  if(current > 0) {current--; show();}
};
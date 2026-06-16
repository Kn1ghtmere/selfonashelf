
var pics = [
    "assets/cam/1.jpeg",
    "assets/cam/2.jpeg",
    "assets/cam/3.jpeg",
    "assets/cam/4.jpeg",
    "assets/cam/5.jpeg",
    "assets/cam/6.jpeg",
    "assets/cam/7.jpeg",
    "assets/cam/8.jpeg",
    "assets/cam/9.jpeg",
    "assets/cam/10.jpeg",
    "assets/cam/11.jpeg",
    "assets/cam/12.jpeg",
    "assets/cam/13.jpeg",
    "assets/cam/14.jpeg",
    "assets/cam/15.jpeg",
    "assets/cam/16.jpeg",
    "assets/cam/17.jpeg",
    "assets/cam/18.jpeg",
    "assets/cam/19.jpeg",
    "assets/cam/20.jpeg",
    "assets/cam/21.jpeg"

];


var current = 0 ;


function show() {
      
  document.getElementById("pics").innerHTML = 
   "<img src='" + pics[current] + "'>";

}

show ();

document.getElementById("next").onclick = function() {
    if (current < pics.length -1) {current++; show();}
};

document.getElementById("prev").onclick = function(){
    if (current > 0) {current --; show();}
};

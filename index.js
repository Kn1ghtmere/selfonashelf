var qoutes = [

"To write a killer is to be a victim.",
 "The plant dont fruit the day it sprouts",
  "bruce wayne is batman",
  "the more you listen to them, the less u hear yourself",
  "It doesnt look deep , but you're not the one drowning",
  "Dont expect silver lining with your eyes closed",
  "How hard could it really be",
  "not all those who wander are lost.",
  "boredom is the beginning of productivity.",
  "touch grass sometimes."

];

function toggleScroll() {
    var scroll = document.getElementById("words-scroll");
    if (scroll.classList.contains("open")) {
        scroll.classList.remove("open"); 
    } else {
        var r = Math.floor(Math.random() * qoutes.length);
        document.getElementById("words").innerText = qoutes[r];
        scroll.classList.add("open");

    }
}

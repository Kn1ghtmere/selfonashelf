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
const wisdom = new Audio('assets/sounds/wisdom.mp3');
function toggleScroll() {
    var scroll = document.getElementById("words-scroll");
    if (scroll.classList.contains("open")) {
        scroll.classList.remove("open"); 
        wisdom.pause();
    } else {
        var r = Math.floor(Math.random() * qoutes.length);
        document.getElementById("words").innerText = qoutes[r];
        scroll.classList.add("open");
        wisdom.play();
        wisdom.volume = 0.5;

    }
}

const booksound = new Audio('assets/sounds/book.wav');
document.getElementById('book').addEventListener('click', () => {
    booksound.currentTime = 0 ;
    booksound.play();
});
const scrollsound = new Audio('assets/sounds/scroll.wav');
document.getElementById('scroll').addEventListener('click', () => {
    scrollsound.currentTime = 0 ;
    scrollsound.play();
});
const ahem = new Audio('assets/sounds/ahem.mp3');
document.getElementById('poem').addEventListener('click', () => {
    ahem.currentTime = 0 ;
    ahem.play();
});
const tada = new Audio('assets/sounds/tada.mp3');
document.getElementById('paint').addEventListener('click', () => {
    tada.currentTime = 0;
    tada.play();
});
document.getElementById('auntie').addEventListener('click', () => {
    tada.currentTime = 0;
    tada.play();
});
const camera = new Audio('assets/sounds/camera.ogg');
document.getElementById('camer').addEventListener('click', () => {
    camera.currentTime = 0;
    camera.play();
});
const pijon = new Audio('assets/sounds/pigeon.mp3');
document.getElementById('kabooter').addEventListener('click', () => {
    pijon.currentTime = 0;
    pijon.play();
});
const catto = new Audio('assets/sounds/cat.ogg');
document.getElementById('cattos').addEventListener('click', () => {
    catto.currentTime = 0;
    catto.play();
});
const time = new Audio('assets/sounds/clock.mp3');
document.getElementById('leeza').addEventListener('click', () => {
    time.currentTime = 0;
    time.play();
});
const soci = new Audio('assets/sounds/socials.wav');
document.querySelectorAll('.socials').forEach(el => {
    el.addEventListener('click', () => {
    soci.currentTime = 0;
    soci.play();
});
});

var pages = [
    {
        type: "cover",
        title: "The Knights Journey",
        image: "assets/coverpage.png",
        subtitle: "A tale not worth telling",
        lines: "mum said go touch grass , so i just wrote this cuz why not",
        lineHeight: 3.5
    },
    {
        title: "I",
        image: "assets/page1.png",
        lineHeight: "5.2",
        lines : [
             "Another obstacle left behind,",
             "A knight's journey,",
             "the one who was known to be kind,",
             "towards the mountains he inclined."
        ]
    },
    {
        title: "II",
        image: "assets/page2.png",
        lineHeight: "3",
        lines: [
            "Traversing upwards with no dimes,",
            "he stops and rests and greets the nobles.",
            "They offer him food,",
            "and he pays them with rhymes.",
            "They're moved to see a man of such heart,",
            "they are humbled, some honoured,",
            "with just a few lines."
        ]
    },
    {
        title: "III",
        image: "assets/page3.png",
        lineHeight: "2.5",
        lines: [
            "On the path to the mountains he continues.",
            "He was stopped by travellers, they were confused.",
            "Towards the mountains? for what use?",
            "He then explained he's been to shore.",
            "He fished and hunted, he farmed and traded,",
            "but the noble life had made him bored.",
            "He sought to find a one of his kind."

        ]
    },
    {
        title: "IV",
        image: "assets/page4.png",
        lineHeight: "3",
        lines: [
             "He took on a purpose and an oath of a knight,",
              "to reach the summit and cross to the other side,",
              "to find the valley of peace of mind.",
              "They were quick to judge, but he did not mind.",
               "He kept on walking and made up his mind."

        ]
    }
];

var current = 0;

function show() {
    var page = pages[current];
    var html = "";
    if(page.type == "cover") {
        html = "<h1>" + page.title + "</h1>";
        html = html + "<h3>" + page.subtitle + "</h3>";
        html = html + "<p>" + page.lines + "</p>";
} else {
    html = "<h2>" + page.title + "</h2>";
    for (var i = 0; i  < page.lines.length; i++) {
        html = html + "<p>" + page.lines[i] + "</p>";
   }
}

document.getElementById("left").innerHTML= html;
   document.getElementById("left").style.lineHeight = page.lineHeight;

   if (page.image) {
    document.getElementById("right").innerHTML = "<img src='" + page.image + "' style='width: 100%; height: 100%; object-fit: contain;'>";
    
} else {
    document.getElementById("right").innerHTML = "";
}
}
show();
const pagesound = new Audio('assets/sounds/page.wav');

document.getElementById("next").onclick = function() {
    if(current < pages.length - 1) {
        current = current + 1;
        show();
         pagesound.currentTime = 0;
            pagesound.play();

    }
};

document.getElementById("prev").onclick = function() {
    if(current > 0) {
        current = current - 1;
        show();
         pagesound.currentTime = 0;
            pagesound.play();
    }
};


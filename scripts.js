document.getElementById("firstPara").innerHTML += "<span class='tan'>This is new tan text.</span>";

let images = document.getElementsByTagName("img");

for(let image of images){
    image.width ="250";
}

let ltBlueSpans = document.getElementByClassName("light-blue");
let medBlueSpans = document.getElementsByClassName("med-blue");
// console.log(ItBlueSpans);

for(let span of ltBlueSpans){
    span.style.color = "#7C9EA6";
}

for(let span of medBlueSpans){
    span.style.color = "#3C5E73";
}

let colors = ["283040","3C5E73", "7C9EA6", "D9BCA3", "F2DCC9" ];

let svgs = document.querySelectorAll('#svgs svg');

for(let i = 0; i < 5; i++){
    svgs[i].style.stroke = colors[i];
}



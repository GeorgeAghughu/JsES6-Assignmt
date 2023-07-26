
myInterval =setInterval(setColor, 600);
function setColor(){
    let x = document.body;
    x.style.backgroundColor = x.style.backgroundColor == "red",  "green", "blue", "cyan", "magenta", "yellow", "black";
}
function stopColor(){
    clearInterval(myInterval);
}




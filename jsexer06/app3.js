var number =0;


window.onload =function(){
    requestAnimationFrame(countUp);
    showNumber();
}
function countUp(){
    number++;
   showNumber();
   if(numver <100)
   requestAnimationFrame(countUp);
}
function showNumber(){
    document.querySelector("#display")
    .innerHTML=number;
}
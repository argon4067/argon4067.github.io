var number =0;
var holder;

window.onload =function(){
    holder =setInterval(countUp,1000)
    showNumber();
}
function countUp(){
    if(number<100){
    number++;
 } else{
        clearInterval(holder);
}
        console.log(".");
        showNumber();
}
function showNumber(){
    document.querySelector("#display")
    .innerHTML=number;
}
var number =0;


window.onload =function(){
    setTimeout(countUp,50);
    showNumber();
function countUp(){
   number++;
   showNumber();

   if(number <100){
       setTimeout(countUp,50);
   }

}
function showNumber(){
    document.querySelector("#display")
    .innerHTML=number;
}
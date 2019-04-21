



window.onload=function(){
    document.querySelector("#numbersOnly").onkeypress=function(ev){
        //0-48 to 9-57
        if(!ev)
        ev=window.event;

        //console.log(ev);
        if(ev.keyCord<48 || ev.keyCord >57)
        ev.preventDefault();

    }
}
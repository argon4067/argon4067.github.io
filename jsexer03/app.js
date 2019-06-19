


window.onload = function(){

    document.querySelector("#add").onclick=function(){    
        let text = document.querySelector("#city").value;
        let list = document.querySelector("#myList");
        let opt = document.createElement("option");
        opt.innerText = text;
        list.appendChild(opt);
    }

    document.querySelector("#del").onclick=function(){
        let list = document.querySelector("#myList");
        list.remove(list.selectedIndex);  
    }
  
}
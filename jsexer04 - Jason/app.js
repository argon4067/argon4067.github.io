


 data=[
{   "ID":"1",
    "NAME":"Samsung S7",
    "PRICE":"2500"
},
{   "ID":"2",
    "NAME":"Samsung S8",
    "PRICE":"3000"
},
{   "ID":"3",
    "NAME":"Samsung S9",
    "PRICE":"4500"
},
{   "ID":"4",
    "NAME":"LG Optimus 6",
    "PRICE":"3400"
},
{   "ID":"5",
    "NAME":"Samsung Note 8",
    "PRICE":"4000"
}
];

SI = 1;// sort id
SN = 1;// sort name
SP = 1;// sort price

window.onload = init;

function init(){
    //alert("ok");
    document.querySelector("#save").onclick =jojang;
    document.querySelector("#ib").onclick =SoI;// id button
    document.querySelector("#nb").onclick =SoN;// name button
    document.querySelector("#pb").onclick =SoP;// price button
    showData();
}

function showData() {
    tb = document.querySelector("#datax");
    tb.innerHTML = "";   

    for (i = 0; i < data.length; i++) {
        mtr = document.createElement("tr");
        td1 = document.createElement("td");
        td2 = document.createElement("td");
        td3 = document.createElement("td");
        ne = document.createElement("input");// name edit
        pe = document.createElement("input");// price edit
        td1.innerText = data[i].ID;
        ne.value = data[i].NAME;
        pe.value = data[i].PRICE;
        td2.append(ne);
        td3.append(pe);
        mtr.append(td1);
        mtr.append(td2);
        mtr.append(td3);
        tb.append(mtr);
    }
}

function jojang() {
    //console.log("in jojang");
    na = document.querySelector("#na").value;// name
    pr = document.querySelector("#pr").value;// price
    let contact = new Object();
    contact.ID = data.length+1;
    contact.NAME = na;
    contact.PRICE = pr;
    //console.log(contact);
    data.push(contact);
    showData();
}

function SoN(){
    if(SN == 1){
        SN = 0;
        nb.innerText = "▲ NAME";// 오름차순
        data.sort(function(a, b){
            var x = a.NAME.toLowerCase();
            var y = b.NAME.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        });
    }else{
        SN = 1;
        nb.innerText = "▼ NAME";// 내림차순
        data.sort(function(a, b){
            var x = b.NAME.toLowerCase();
            var y = a.NAME.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        });
    }
    showData();
}

function SoP(){
    if(SP == 1){
        SP = 0;
        pb.innerText = "▲ PRICE";
data.sort(function(a, b) { // 오름차순
    return a.PRICE - b.PRICE;});
    }else{
        SP = 1;
        pb.innerText = "▼ PRCIE";

data.sort(function(a, b) { // 내림차순
    return b.PRICE - a.PRICE;});
    }
showData();
}

function SoI(){
    if(SI == 1){
        SI = 0;
        ib.innerText = "▲ ID";
    
data.sort(function(a, b) { // 오름차순
    return a.ID - b.ID;});
    }else{
        SI = 1;
        ib.innerText = "▼ ID";
    
data.sort(function(a, b) { // 내림차순
    return b.ID - a.ID;});
    }
showData();
}

function sujeng(){
    for(i=0; i< data.length; i++){
        ns = document.querySelector("#datax tr:nth-child("+(i+1)+") td:nth-child(2) input");// 2번째 이름 라인=이름 라인, name sujeng
        ps = document.querySelector( "#datax tr:nth-child("+(i+1)+") td:nth-child(3) input");// 3번째 이름 라인=가격 라인, price sujeng
        data[i].NAME = ns.value;
        data[i].PRICE = ps.value;
    }
}

function key(event){
    if(event.keyCode == 13){ //Enter
        sujeng();
    }
    if(event.keyCode == 27){ //Esc press 하면 이게 안됨...
        showData();
    }
}




  
  var firebaseConfig = {
    apiKey: "AIzaSyAfjlfz4prlhlzWxsT9aFQbWEv5kt_vXak",
    authDomain: "suwonu-65844.firebaseapp.com",
    databaseURL: "https://suwonu-65844.firebaseio.com",
    projectId: "suwonu-65844",
    storageBucket: "suwonu-65844.appspot.com",
    messagingSenderId: "1025785659055",
    appId: "1:1025785659055:web:b4eb82dc427d7bce"
  };
  
  firebase.initializeApp(firebaseConfig);
  var athletes = null;
  window.onload=init();

  function init(){
    athletes = firebase.database().ref("athletes");
      document.querySelector("#button_save")
      .addEventListener('click',()=>{
          let ln=document.querySelector("#lastname").value;
          let fn=document.querySelector("#firstname").value;
          let sport=document.querySelector("#sport").value;
//여기 수정하면 데이터베이스에서도 바뀜
ln=ln.trim();
fn=fn.trim();
sport=sport.trim();
let msg = document.querySelector("#msg");
if(ln===""||fn===""||sport===""){
  msg.classList.remove("success")
  msg.classList.add("error");
  msg.innerHTML="실패";
  return;
}
          athletes.push().set({
                        lname:ln,
                        fname:fn,
                        sport:sport
          });
                      msg.classList.remove("error")
                      msg.classList.add("success")
                      msg.innerHTML="성공";
      });
      listeners();


  }
      
  
  function listeners(){

    athletes.on("child_added", function(snap){
        var aList = document.querySelector("#myList");
        const li = document.createElement("li");
        li.innerHTML = snap.child("lname").val() +
         ", " + snap.child("fname").val()
         +"<a href='#' onclick='sakje();'>delete</a>";
        li.id = snap.key;
        aList.appendChild(li);
    });
  }



  function sakje(e){
    let id ;
    if(!e) e = window.event; 
    e.preventDefault();
    //console.log(e.target.parentNode.id);
    id = e.target.parentNode.id
    //remove from firebase
    athletes.child(id).remove();
    //remove from list
    e.target.parentNode.remove();
}
var check=document.getElementById("check");

window.onload= function(){
               if(window.navigator.onLine){
                              online();
               }
               else{
                              offline();
               }
}




function online(){
               check.innerHTML="online"
               check.style.color="green";
}
function offline(){
               check.innerHTML="offline"
               check.style.color="red";
}
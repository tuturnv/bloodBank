var menu = document.querySelectorAll('.menu')[0];
var nav = document.querySelectorAll('nav')[0];
console.log(nav.getBoundingClientRect().bottom);
document.addEventListener('scroll',function(){
  if(menu.getBoundingClientRect().top<=0){
    menu.style.position="fixed";
    menu.style.top="0";
  }
  if (nav.getBoundingClientRect().bottom>=0) {
    menu.style.position="relative";
  }
});





var log_in = document.getElementById("log-in");
log_in.addEventListener('click',function(){
  log_in.classList.add("curr");
  var curr = document.querySelectorAll('.log-in-view')[0];
  curr.style.visibility = "visible";
});

var cross = document.querySelectorAll(".cross")[0];
cross.addEventListener('click',function(){
  log_in.classList.remove("curr");
  var curr = document.querySelectorAll('.log-in-view')[0];
  curr.style.visibility = "hidden";
});
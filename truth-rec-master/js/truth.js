
var explore = document.getElementById("explore");

function showExploreSubnav(){
   var subnav = document.getElementsByClassName("subnav")[0];
   subnav.classList.add("show");
   //subnav.setAttribute("style","display:block");
}

explore.onmouseover = showExploreSubnav;


function hideExploreSubnav(){

var subnav = document.getElementsByClassName("subnav")[0];
subnav.classList.remove("show");

}

explore.onmouseout = hideExploreSubnav;


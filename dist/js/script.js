menu.onclick = function() {
    var x = document.getElementById("topnav");

    if(x.className === "header-nav") {
        x.className += " responsive";
    } else{
        x.className = "header-nav";
    }
}
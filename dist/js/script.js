menu.onclick = function() {
    var x = document.getElementById("mytopnav");

    if(x.className === "header-nav") {
        x.className += " responsive";
    } else{
        x.className = "header-nav";
    }
}
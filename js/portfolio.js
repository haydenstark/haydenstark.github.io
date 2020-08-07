window.onpageshow = fadeIn()

function fadeIn() {
    document.body.classList.remove("fade-in");
}

function dropdown() {
    var x = document.getElementsByClassName("drop-content");
    for (var i = 0; i < x.length; i++) {
        x[i].style.visibility = "visible";
        x[i].style.opacity = "1";
    }
}

function leaveDropdown() {
    var y = document.getElementsByClassName("drop-content");
    for (var i = 0; i < y.length; i++) {
        y[i].style.visibility = "hidden";
        y[i].style.opacity = "0";
    }
}

function scrollF() {
    var z = document.getElementById("nav-home");
    var q = window.scrollY;
    if ( q > 550 ) {
        z.style.visibility = "visible";
        z.style.opacity = "1";
    } else if ( q < 550 ) {
        z.style.visibility = "hidden";
        z.style.opacity = "0";
    }
}

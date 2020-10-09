window.onpageshow = fadeIn()

if (window.innerWidth < 1025 && window.innerWidth < window.innerHeight) {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) { 
        var r = document.getElementById("rotate");
        r.style.opacity = 1;
        r.style.visibility = "visible";
        setTimeout(function() {
            r.style.opacity = 0;
            r.style.visibility = "hidden";
        }, 3500)
    }
}
if (screen.width < 900 && screen.height < 900) {
    document.getElementById("background-video").setAttribute('poster', 'imgs/Headshot_BW.png');
}


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

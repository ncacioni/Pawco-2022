var navbar = document.getElementById('navbar');
var menu = document.getElementById('menu');

window.onscroll = function(){
    if(window.pageYOffset >= menu.offsetTop) {
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
}

var menuBtn = document.getElementById('menuBtn');
var sideNav = document.getElementById('sideNav');
var mobilemenu = document.getElementById('mobilemenu');

sideNav.style.right = "-250px";

menuBtn.onclick = function() {
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0";
        mobilemenu.src = "../images/close.png";
    }
    else {
        sideNav.style.right = "-250px";
        mobilemenu.src = "../images/menu.png";
    }
}

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});


var navbar = document.getElementById('navbar');
var menu = document.getElementById('menu');

window.onscroll = function(){
    if(window.pageYOffset >= menu.offsetTop) {
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
}
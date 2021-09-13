window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
	if (window.pageYOffset > sticky) {	
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
}

function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
	document.getElementById("mainPage").style.marginLeft = "250px";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("mainPage").style.marginLeft = "0";
}
let menuBtn = document.getElementById('menuBtn');
let sideNav = document.getElementById('sideNav');

sideNav.style.right = '-250px';

menuBtn.addEventListener('click', function(){
    if(sideNav.style.right == '-250px'){
        sideNav.style.right = '0px'
    } else{
        sideNav.style.right = '-250px';
    }
})

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 300
});
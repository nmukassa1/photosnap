
// TOGGLE START****************

// Target Menu Id / Toggle
const openMenu = document.getElementById('menu');

// Burger menu + closed image
const burger = '<img src="assets/shared/mobile/menu.svg">';

const closeMenu = '<img src="assets/shared/mobile/close.svg">';

// Target nav-links / Dropdown
const navLinks = document.getElementById('nav-links');


// Event Listener For When Mneu Is Clicked
openMenu.addEventListener('click', () => {

// Burger Menu Change When Clicked
    if(openMenu.innerHTML == closeMenu) {
        openMenu.innerHTML = burger
    }   else{
        openMenu.innerHTML = closeMenu
    }


// Navlinks Dropdown    
    if(navLinks.style.display == 'block') {
        navLinks.style.display = 'none'
    } else{
        navLinks.style.display = 'block'
    }

    

})

// TOGGLE END***************


//Stories bar

const stories = document.getElementsByClassName('individual-stories');

for(let i = 0; i < stories.length; i++) {
    stories[i].addEventListener('mouseover', function() {
        let bar = this.firstElementChild.lastElementChild;
        bar.classList.add('stories-barActive')
    });
}

for(let i = 0; i < stories.length; i++) {
    stories[i].addEventListener('mouseout', function() {
        let bar = this.firstElementChild.lastElementChild;
        bar.classList.remove('stories-barActive')
    });
}
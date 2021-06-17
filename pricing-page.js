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









// PRICEING PAGE

//VARIABLES
const monthly = document.querySelector('.month');
const yearly = document.querySelector('.year');
const switchContainer = document.getElementById('switch-container');
const switchCircle = document.getElementById('switch');
const perLength = document.querySelectorAll('.per-length');
const basicPrice = document.querySelector('.basic .price');
const proPrice = document.querySelector('.pro .price');
const businessPrice = document.querySelector('.business .price');

//EVENT LISTENER
switchContainer.addEventListener('click', priceSwitch);

//FUNCTIONS
function priceSwitch(e) {
    monthly.classList.toggle('toggle-month');
    yearly.classList.toggle('toggle-year');

    switchContainer.classList.toggle('switchContainerToggle');
    switchCircle.classList.toggle('switchCircleToggle');

    for( let i = 0; i < perLength.length; i++) {
        if (perLength[i].textContent === 'per year') {
            perLength[i].textContent = 'per month'
        } else {
            perLength[i].textContent = 'per year'
        }
    }

    if (basicPrice.textContent === '$190.00') {
        basicPrice.textContent = '$19.00'
    } else {
        basicPrice.textContent = '$190.00'
    }

    if (proPrice.textContent === '$390.00') {
        proPrice.textContent = '$30.00'
    } else {
        proPrice.textContent = '$390.00'
    }

    if (businessPrice.textContent === '$990.00') {
        businessPrice.textContent = '$99.00'
    } else {
        businessPrice.textContent = '$990.00'
    }
}





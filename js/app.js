/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const fragment = document.createDocumentFragment();
const subHeadings = document.querySelectorAll('h2');
const navUl = document.querySelector('#navbar__list')
const sections = document.querySelectorAll('section')

for (let i = 0; i < subHeadings.length; i++) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a>${subHeadings[i].textContent}</a>`;
    listItem.querySelector('a').setAttribute('href', '#' + sections[i].id);
    listItem.style.color = 'red';
    listItem.style.padding = '10px';

    fragment.appendChild(listItem);
}

navUl.appendChild(fragment);
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
function respondToClick(evt) {
    if (evt.target.nodeName === 'A') {
        evt.preventDefault();

        document.querySelector(evt.target.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    }
}

navUl.addEventListener('click', respondToClick);

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



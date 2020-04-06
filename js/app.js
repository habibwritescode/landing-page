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
const links = navUl.getElementsByClassName('links')

for (let i = 0; i < subHeadings.length; i++) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a>${subHeadings[i].textContent}</a>`;
    listItem.querySelector('a').setAttribute('href', '#' + sections[i].id);
    listItem.querySelector('a').className = 'link'

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
function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
}


window.addEventListener('scroll', function(event) {
    for (let i = 0; i < sections.length; i++) {
        if (isScrolledIntoView(sections[i])) {
            sections[i].classList.add('your-active-class');
        } else {
            sections[i].classList = "";

        }
    }
})
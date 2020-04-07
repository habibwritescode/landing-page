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

const subHeadings = document.querySelectorAll('h2');
const navUl = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */


// Listener for scrolling into view when navigation is clicked
function respondToClick(evt) {
    if (evt.target.nodeName === 'A') {
        evt.preventDefault();

        document.querySelector(evt.target.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    }
}


// Listener for knowing if a section is in the viewport
function isIntoView(element) {
    const rect = element.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;

    // Visible elements will return true:
    const isInView = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isInView;
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */


// build the nav
function buildNav() {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < subHeadings.length; i++) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a>${subHeadings[i].textContent}</a>`;
        listItem.querySelector('a').setAttribute('href', '#' + sections[i].id);
        listItem.querySelector('a').className = 'menu__link';

        fragment.appendChild(listItem);
    }

    return navUl.appendChild(fragment);
}
buildNav()


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

function scrollToAnchorId() {
    return navUl.addEventListener('click', respondToClick);
}
scrollToAnchorId()


/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu 

// Scroll to section on link click

// Set sections as active

window.addEventListener('scroll', function() {
    const links = navUl.querySelectorAll('a');

    for (let i = 0; i < sections.length; i++) {
        if (isIntoView(sections[i])) {
            // Add active state to section header
            sections[i].classList.add('your-active-class');
            // Add active state to navigation items
            links[i].classList.add('active');

            // if section is not in the viewport
        } else {
            sections[i].classList.remove('your-active-class');
            // Remove active state from navigation items
            links[i].classList.remove('active');

        }
    }
})
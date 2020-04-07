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
    let rect = element.getBoundingClientRect();
    let elemTop = rect.top;
    let elemBottom = rect.bottom;

    // Visible elements will return true:
    let isInView = (elemTop >= 0) && (elemBottom <= window.innerHeight);
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
        listItem.querySelector('a').className = 'link';

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
    for (let i = 0; i < sections.length; i++) {
        if (isIntoView(sections[i])) {
            sections[i].classList.add('your-active-class');
        } else {
            sections[i].classList = "";

        }
    }
})


// Loop through the links and add the active class to the current/clicked link
function addActiveClassToLink() {
    const links = navUl.getElementsByClassName('link')

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");

            // If there's no active class
            if (current.length > 0) {
                current[0].className = current[0].className.replace(" active", "");
            }

            // Add the active class to the current/clicked link
            this.className += " active";
        });
    }
}
addActiveClassToLink()
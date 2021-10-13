const toggleButton = document.getElementsByClassName('toggle-button')[0];
const mobileNav = document.getElementsByClassName('mobile-nav')[0];

toggleButton.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    toggleButton.classList.toggle('is-active')
})
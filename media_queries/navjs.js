let closeMenuBtn = document.querySelector('.close-menu-btn');

closeMenuBtn.addEventListener('click', changeMenu)

function changeMenu(e) {
    if (e.target.parentNode.classList.contains('close-menu')) {
        e.target.parentNode.classList.remove('close-menu');
        e.target.parentNode.classList.add('open-menu');
    } else if (e.target.parentNode.classList.contains('open-menu')){
    e.target.parentNode.classList.add('close-menu');
    e.target.parentNode.classList.remove('open-menu');
    } else {
        e.target.parentNode.classList.add('close-menu')
    }
}


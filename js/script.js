// Responsive navbar
btnOpenNav = document.querySelector('.open-navbar--overlay');
btnCloseNav = document.querySelector('.close-navbar--overlay');
navbarOverlay = document.querySelector('.navbar-overlay');

btnOpenNav.addEventListener('click', () => {
    navbarOverlay.classList.add('navbar-overlay--show');
});

btnCloseNav.addEventListener('click', () => {
    navbarOverlay.classList.remove('navbar-overlay--show');
});

// Modal window
const openModalBtn = document.querySelector('.btn-modal');
const closeModalBtn = document.querySelector('.close-btn');
const modalWindow = document.querySelector('.modal-overlay');

openModalBtn.addEventListener('click', () => {
    modalWindow.classList.add('open-modal');
});

closeModalBtn.addEventListener('click', () => {
    modalWindow.classList.remove('open-modal');
});

window.addEventListener('click', (e) => {
    if (e.target === modalWindow) {
        modalWindow.classList.remove('open-modal');
    }
});
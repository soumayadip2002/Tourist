let menu = document.querySelector('#menu-btn');
let nav = document.querySelector('.navbar');

menu.onclick = () => {
    nav.classList.toggle('active');

}

document.querySelectorAll('.about .video-container .controls .controls-btn').forEach(btn => {
    btn.onclick = () => {
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;

    }
})

window.onscroll = () => {
    nav.classList.remove('active');

}

const navBar = document.querySelectorAll("header .navbar a");
const sec = document.querySelectorAll("section");

function activeMenu() {
    let len = sec.length;
    while (--len && window.scrollY + 97 < sec[len].offsetTop) {

    }

    navBar.forEach(ltx => ltx.classList.remove("active"));
    navBar[len].classList.add("active");
}

window.addEventListener("scroll", activeMenu);
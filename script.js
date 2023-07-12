const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})

// ========= CONTACT ================

let email = document.getElementById('email');
let password = document.getElementById('password');

        email.addEventListener('focus',()=>{
            email.style.borderColor="#4A5F6A";
        });

        email.addEventListener('blur',()=>{
            email.style.borderColor="#ccc";
        });

        password.addEventListener('focus',()=>{
            password.style.borderColor="#4A5F6A";
        });

        password.addEventListener('blur',()=>{
            password.style.borderColor="#ccc";
        });
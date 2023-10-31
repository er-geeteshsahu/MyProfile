const btn = document.querySelector('.btn');
const navList = document.querySelector('nav ul');

btn.addEventListener('click', ()=>{
    btn.classList.toggle('active');
    btn.classList.toggle('active');
});

const typed = new Typed('.multiple', {
    strings: ['Front-End developer', 'Java Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
});
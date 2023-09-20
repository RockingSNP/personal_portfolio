let text = document.getElementById('text');
let maharajaleft = document.getElementById('maharaja1');
let maharajaright = document.getElementById('maharaja2');
let cv = document.getElementById('cv');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    maharajaleft.style.left = value * -2.5 + 'px';
    maharajaright.style.left = value * 2.5 + 'px';
});

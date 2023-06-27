var toggle = document.querySelector('.toggle');
var bar = document.querySelector('.bar');
var list = document.querySelector('.list')

toggle.addEventListener('click', () => {
    bar.classList.toggle('show');
    list.classList.toggle('show');
})

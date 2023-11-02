const redButton = document.getElementById('b1');
const yellowButton = document.getElementById('b2');
const greenButton = document.getElementById('b3');
const box = document.querySelector('.box');

redButton.addEventListener('click', function() {
    box.classList.remove('yellow', 'green');
    box.classList.add('red');
});

yellowButton.addEventListener('click', function() {
    box.classList.remove('red', 'green');
    box.classList.add('yellow');
});

greenButton.addEventListener('click', function() {
    box.classList.remove('red', 'yellow');
    box.classList.add('green');
});

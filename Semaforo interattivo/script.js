document.addEventListener('DOMContentLoaded', function() {
    const redButton = document.getElementById('b1');
    const yellowButton = document.getElementById('b2');
    const greenButton = document.getElementById('b3');
    const box = document.querySelector('.box');

    redButton.addEventListener('click', function() {
        box.style.backgroundColor = 'red';
    });

    yellowButton.addEventListener('click', function() {
        box.style.backgroundColor = 'yellow';
    });

    greenButton.addEventListener('click', function() {
        box.style.backgroundColor = 'green';
    });
});
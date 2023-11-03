const menuButton = document.getElementById('menuButton');
const navList = document.getElementById('navList');

menuButton.addEventListener('click', function() {
    if (navList.style.display === 'block') {
        navList.style.display = 'none';
    } else {
        navList.style.display = 'block';
    }
});
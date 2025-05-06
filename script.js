
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    let offset = window.pageYOffset;
    header.style.backgroundPositionY = offset * 0.5 + 'px';
});

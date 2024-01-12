document.addEventListener('DOMContentLoaded', function () {
    var part4 = document.querySelector('.part4');
    var navParts = document.querySelector('.nav-parts');
    var closeIcon = document.querySelector('.nav-parts .a');

    part4.addEventListener('click', function () {
        navParts.style.display = 'block';
    });

    closeIcon.addEventListener('click', function () {
        navParts.style.display = 'none';
    });
});

let menu = document.querySelectorAll('.menu'),
    li = document.querySelectorAll('.menu-item');

menu[0].insertBefore(li[2], li[1]);
document.body.style.background = 'url(img/apple_true.jpg)'
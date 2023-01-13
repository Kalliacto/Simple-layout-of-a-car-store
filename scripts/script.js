document.getElementById('main-action').onclick = function () {
    document.getElementById('cars').scrollIntoView( {behavior: "smooth"});
}

const carButtons = document.getElementsByClassName('car-button');
for (let i = 0; i < carButtons.length; i++) {
    carButtons[i].onclick = function () {
        document.getElementById('price').scrollIntoView( {behavior: "smooth"});
    }
}

document.getElementById('price-action').onclick = function () {
    if (document.getElementById('name').value === '') {
        alert('Заполните поле имя');
    } else if (document.getElementById('phone').value === '') {
        alert('Укажите ваш номер телефона');
    } else if (document.getElementById('car').value === '') {
        alert('Укажите автомобиль, который вас интересует');
    } else {
        alert('Спасибо за заявку, мы свяжемся с вами в ближайшее время!');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-img');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.2) / 6) + 'px,' + ((event.clientY * 0.2) / 6) + 'px,0px)';
    });

    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.4 * window.pageYOffset) + 'px';
    })
});




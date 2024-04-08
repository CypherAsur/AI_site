// script.js

document.getElementById('getHoroscope').addEventListener('click', function() {
    alert('Ваш личный гороскоп на сегодня: ...');
});

document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.querySelector('input[name="email"]').value;
    alert('Спасибо за подписку на рассылку! Email: ' + email);
});

// script.js

document.getElementById('exploreSpecializations').addEventListener('click', function() {
    alert('Изучите наши специализации для успешной карьеры в IT!');
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.querySelector('input[name="name"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let message = document.querySelector('textarea[name="message"]').value;
    alert('Спасибо, ' + name + '! Ваше сообщение отправлено. Мы свяжемся с вами по email: ' + email);
});

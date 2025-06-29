// main.js

// Мобильное меню
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });
}

// Форма обратной связи
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = contactForm.querySelector('input[type="text"]');
    const contact = contactForm.querySelectorAll('input')[1];
    const message = contactForm.querySelector('textarea');

    const text = 📝 Новая заявка с сайта:\n👤 Имя: ${name.value}\n📧 Контакт: ${contact.value}\n💬 Сообщение: ${message.value};

    fetch(' https://api.telegram.org/bot7598269211 :AAH5zTrpyfQ5R1fGUS6M8rSi_vD-GgE_DOI/sendMessage', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ chat_id: '-1002526295641', text })
    }).then(res => {
      if (res.ok) {
        alert('Спасибо! Ваше сообщение отправлено.');
        contactForm.reset();
      } else {
        alert('Ошибка при отправке. Попробуйте позже.');
      }
    }).catch(err => {
      console.error(err);
      alert('Произошла ошибка. Попробуйте снова.');
    });
  });
}
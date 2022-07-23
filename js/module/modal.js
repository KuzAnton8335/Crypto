// логика модального окна modal__close

const heroBtn = document.querySelector('.hero__btn');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

overlay.style.transitionDuration = '0.36s';
modal.style.transitionDuration = '0.36s';

heroBtn.addEventListener('click', () => {
  overlay.classList.add('overlay__open');
  modal.classList.add('modal__open');
});

overlay.addEventListener('click', (event) => {
  const target = event.target;
  if (target === overlay || target.closest('.modal__close')) {
    overlay.classList.remove('overlay__open');
    modal.classList.remove('modal__open');
  }
});

// логика отправки формы

const form = document.querySelector("form");
const modalTitle = document.querySelector('.modal__title');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = {
    name: form.name.value,
    surname: form.surname.value,
    tel: form.tel.value
  };

  fetch('https://api-form-order.herokuapp.com/api/order', {
    method: 'post',
    body: JSON.stringify(data)
  }).then(response => response.json())
    .then(person => {
      modalTitle.textContent = `${person.name} + ', ваша заявка успешно отправлена, номер:' ${person.id}`;
      form.remove();

      setTimeout(() => {
        overlay.classList.remove('overlay__open');
        modal.classList.remove('modal__open');
      }, 3000)
    })
});

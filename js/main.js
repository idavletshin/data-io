// modal
const requestModal = document.querySelector("#request-modal");
const modal = document.querySelector(".modal");
const body = document.querySelector('body');
const burger = document.querySelector(".burger");
const menuList = document.querySelector(".js-header-list");
const formButtons = document.querySelectorAll(".form__btn");

function closeRequestModal() {
  modal.style.display = 'none';
  requestModal.style.display = 'none';
  body.classList.remove("_overflow-hidden");
}

function closeBurgerAndMenu() {
  burger.classList.remove('_active');
  menuList.classList.remove('_active');
  body.classList.remove("_overflow-hidden");
}

function showModal() {
  modal.style.display = 'flex';
  body.classList.add('_overflow-hidden');
  requestModal.style.display = 'flex';
}

document.querySelectorAll(".js-request-btn").forEach((el) => {
  el.addEventListener("click", () => {
    showModal();
  });
});

document.querySelectorAll(".modal-dialog__close").forEach((button) => {
  button.addEventListener("click", closeRequestModal);
});

window.onclick = function (event) {
  if (event.target == modal) {
    closeRequestModal();
  }
};

burger.addEventListener('click', () => {
  burger.classList.toggle('_active');
  menuList.classList.toggle('_active');
  if (!body.classList.contains("_overflow-hidden")) {
    body.classList.add("_overflow-hidden");
  } else {
    body.classList.remove("_overflow-hidden");
  }
});

formButtons.forEach((el) => {
  el.addEventListener("click", () => {
    if (el.classList.contains("form__btn")) {
      closeRequestModal();
      closeBurgerAndMenu();
    }
  });
});

window.addEventListener('resize', () => {
  closeBurgerAndMenu();
  closeRequestModal();
});

document.querySelectorAll(".js-header-list .nav-list__item-link").forEach((el) => {
  el.addEventListener("click", closeBurgerAndMenu);
});

document.querySelector(".js-request-btn").addEventListener("click", () => {
  closeBurgerAndMenu();
  showModal();
});

function toggleFilledClass(input) {
  const container = input.parentNode;
  container.classList.toggle('_filled', input.value.trim() !== '');
}

function clearInput(img) {
  const container = img.parentNode;
  const input = container.querySelector('.form-control');
  input.value = '';
  container.classList.remove('_filled');
}

const modalForm = document.querySelector('.modal__form');

// modalForm.addEventListener('click', function(event) {
//   const target = event.target;

//   if (target.classList.contains('form-control')) {
//     event.stopPropagation();
//     event.preventDefault();
//   }
// });

// const modalForm = document.querySelector('.modal__form');
const formControls = document.querySelectorAll('.form-control');
// const closeButtons = document.querySelectorAll('.modal-dialog__close');

// Обработчик для предотвращения закрытия модального окна при фокусе на поле ввода
modalForm.addEventListener('focusin', function (event) {
  const target = event.target;

  if (target.classList.contains('form-control')) {
    event.stopPropagation();
  }
});

// Добавляем обработчик для закрытия модального окна
// closeButtons.forEach(function (button) {
//   button.addEventListener('click', closeModal);
// });

// Добавляем обработчик для фокуса на полях ввода
formControls.forEach(function (control) {
  control.addEventListener('focus', function () {
    // Отменяем закрытие модального окна
    modalForm.removeEventListener('click', closeModal);
  });

  // Добавляем обработчик для потери фокуса на полях ввода
  control.addEventListener('blur', function () {
    // Возвращаем обработчик закрытия модального окна
    modalForm.addEventListener('click', closeModal);
  });
});

// Функция закрытия модального окна
// function closeModal() {
//   modal.style.display = 'none';
//   requestModal.style.display = 'none';
//   document.body.classList.remove('_overflow-hidden');
// }

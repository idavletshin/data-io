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

// document.querySelectorAll(".modal-dialog__close").forEach((button) => {
//   button.addEventListener("click", closeRequestModal);
// });

document.querySelectorAll(".modal-dialog__close").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation(); // предотвратим всплытие события
    closeRequestModal();
  });
});


// window.onclick = function (event) {
//   if (event.target == modal) {
//     closeRequestModal();
//   }
// };

window.addEventListener('click', function (event) {
  if (event.target == modal) {
    closeRequestModal();
  }
});

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
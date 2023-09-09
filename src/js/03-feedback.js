import throttle from 'lodash.throttle';
const feedbackForm = document.querySelector('.feedback-form');
const input = document.querySelector('[type = email]');
const textarea = document.querySelector('[name = message]');
const KEY_STORAGE = 'feedback-form-state';

feedbackForm.addEventListener('input', throttle(handleClick, 500));
feedbackForm.addEventListener('submit', onFormSubmit);

const formData = {};
function handleClick(e) {
  formData[e.target.name] = e.target.value;
  storageSetItem(formData);
}

function storageSetItem(formData) {
  localStorage.setItem(KEY_STORAGE, JSON.stringify(formData));
}

populateTaxtarea();

function populateTaxtarea() {
  const savedData = JSON.parse(localStorage.getItem(KEY_STORAGE));
  if (savedData) {
    input.value = savedData.email;
    textarea.value = savedData.message;
  }
}

function onFormSubmit(e) {
  e.preventDefault();

  localStorage.getItem(KEY_STORAGE)
    ? console.log(JSON.parse(localStorage.getItem(KEY_STORAGE)))
    : console.log({});

  localStorage.removeItem(KEY_STORAGE);
  feedbackForm.reset();
}

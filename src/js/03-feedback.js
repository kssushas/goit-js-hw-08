import throttle from "lodash.throttle";
const feedbackForm = document.querySelector('.feedback-form');
const input = document.querySelector('[type = email]');
const textarea = document.querySelector('[name = message]')
const KEY_STORAGE ="feedback-form-state";

feedbackForm.addEventListener('input', throttle(handleClick,500));
feedbackForm.addEventListener('submit', onFormSubmit);

function handleClick(e) {
    const formElements = e.target.elements;
    console.log(formElements);
    const email = formElements.email.value;
    const message = formElements.message.value;
    const formData = {};
    formData.email = email ;
    formData.message = message;
    storageSetItem(formData)
};

function storageSetItem(formData) {
    localStorage.setItem(KEY_STORAGE, JSON.stringify(formData));  
}

populateTaxtarea();

function populateTaxtarea() {
    // if(localStorage.getItem(KEY_STORAGE)){
    // const savedData = JSON.parse(localStorage.getItem(KEY_STORAGE));
    // if (savedData){
    //     input.value = savedData.email;
    //     textarea.value = savedData.message;
    // }
    // }
    const savedData = JSON.parse(localStorage.getItem(KEY_STORAGE));
    if (savedData){
        input.value = savedData.email;
        textarea.value = savedData.message;
    }

};

function onFormSubmit(e) {
    e.preventDefault();
    if (localStorage.getItem(KEY_STORAGE)){
    console.log(JSON.parse(localStorage.getItem(KEY_STORAGE)))} else{
        console.log({});
    }
    localStorage.removeItem(KEY_STORAGE);
    feedbackForm.reset()
};



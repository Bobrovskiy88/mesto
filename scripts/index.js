/*объявили переменные*/
let profileEditButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__close');
let popupName = document.querySelector('.popup__input_theme_name');
let profileName = document.querySelector('.profile__name');
let popupProf = document.querySelector('.popup__input_theme_prof')
let profileProf = document.querySelector('.profile__prof');
let formEdit = document.querySelector('.popup__form');

/*функция переключения popup*/
function togglePopup() {
    if (!popup.classList.contains('popup_open')){
        popupName.value = profileName.textContent;
        popupProf.value = profileProf.textContent;
    }
    popup.classList.toggle('popup_open');
}

profileEditButton.addEventListener('click', togglePopup);
closePopupButton.addEventListener('click', togglePopup);

/* функция для кнопки submit "Сохранить"*/
function formSubmitSave(event) {
    event.preventDefault();
    profileName.textContent = popupName.value;
    profileProf.textContent = popupProf.value;
    togglePopup();
}
formEdit.addEventListener('submit', formSubmitSave);


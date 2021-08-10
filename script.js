const container = document.querySelector('.page');
const profileTitle = container.querySelector('.profile__title');
const profileSubtitle = container.querySelector('.profile__subtitle');
const profileEditButton = container.querySelector('.profile__button-edit');
const popupProfile = container.querySelector('#add-profile');
const profileCloseButton = popupProfile.querySelector('.popup__close-button');
const profileSaveButton = popupProfile.querySelector('#save-button');
const popupProfileTitle = popupProfile.querySelector('#popup-title');
const popupProfileSubtitle = popupProfile.querySelector('#popup-subtitle');
const photoCardList = container.querySelector('.photo-grid__list');
const photoCardAddButton = container.querySelector('.profile__button-add');
const popupPhotoСard = container.querySelector('#add-photo-card');
const photoСardCloseButton = popupPhotoСard.querySelector('.popup__close-button');
const photoСardSaveButton = popupPhotoСard.querySelector('#save-button');
const popupPhotoСardTitle = popupPhotoСard.querySelector('#popup-title');
const popupPhotoСardSubtitle = popupPhotoСard.querySelector('#popup-subtitle');
const popupViewingPhoto = container.querySelector('.viewing-photo');
const viewingPhotoCloseButton = popupViewingPhoto.querySelector('.popup__close-button');
const viewingPhotoLink = popupViewingPhoto.querySelector('.viewing-photo__image');
const viewingPhotoFigcaption = popupViewingPhoto.querySelector('.viewing-photo__figcaption');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
];

function createPhotoCard(cardData) {
  const photoCardTemplate = document.querySelector('#photo-card-template').content;
  const photoCardElement = photoCardTemplate.querySelector('.photo-card').cloneNode(true);
  photoCardElement.querySelector('.photo-card__image').src = cardData.link;
  photoCardElement.querySelector('.photo-card__title').textContent = cardData.name;
  photoCardElement.querySelector('.photo-card__button-heart').addEventListener('click', function (evt) {
    const eventTarget = evt.target;
    eventTarget.classList.toggle('photo-card__button-heart_active');
  });
  photoCardElement.querySelector('.photo-card__button-delete').addEventListener('click', function () {
    const listItem = photoCardElement.querySelector('.photo-card__button-delete').closest('.photo-card');
    listItem.remove();
  });
  const cardImage = photoCardElement.querySelector('.photo-card__image');
  cardImage.addEventListener('click', function () {
    const link = popupViewingPhoto.querySelector('.viewing-photo__image');
    const figcaption = popupViewingPhoto.querySelector('.viewing-photo__figcaption');
    link.src = cardData.link;
    figcaption.textContent = cardData.name;
    popupViewingPhoto.classList.add('popup_opened');
  });
  viewingPhotoCloseButton.addEventListener('click', () => {
    closePopup(popupViewingPhoto);
  });
  return photoCardElement;
}

function addPhotoCard(cardData, cardContainer) {
  const card = createPhotoCard(cardData);
  cardContainer.prepend(card);
};

initialCards.forEach((arrayItem) => {
  addPhotoCard(arrayItem, photoCardList);
});

const openPopup = function (popup) {
  popup.classList.add('popup_opened');
};

const savePopup = (popup) => {
  event.preventDefault();
  closePopup(popup);
};

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
};

profileEditButton.addEventListener('click', () => {
  popupProfileTitle.value = '';
  popupProfileSubtitle.value = '';
  openPopup(popupProfile);
});

profileSaveButton.addEventListener('click', () => {
  profileTitle.textContent = popupProfileTitle.value;
  profileSubtitle.textContent = popupProfileSubtitle.value;
  savePopup(popupProfile);
});

profileCloseButton.addEventListener('click', () => {
  closePopup(popupProfile);
});

photoCardAddButton.addEventListener('click', () => {
  popupPhotoСardTitle.value = '';
  popupPhotoСardSubtitle.value = '';
  openPopup(popupPhotoСard);
});

photoСardSaveButton.addEventListener('click', () => {
  const name = popupPhotoСardTitle.value;
  const link = popupPhotoСardSubtitle.value;
  addPhotoCard({name, link}, photoCardList);
  savePopup(popupPhotoСard);
});

photoСardCloseButton.addEventListener('click', () => {
  closePopup(popupPhotoСard);
});

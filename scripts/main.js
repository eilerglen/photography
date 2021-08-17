/*Находим наш темплейт на странице*/
const reviewList = document.querySelector('.camera__list-reviews');
const templateReview = reviewList.querySelector('#template-review').content;

/*Функция создания картчоки отзыва*/
function createReviewCard(data) {
    const reviewItem = templateReview.querySelector('.camera__review-item').cloneNode(true);
    reviewItem.querySelector('.camera__review-text').textContent = data.text;
    reviewItem.querySelector('.camera__review-user').textContent = data.user;
    reviewItem.querySelector('.camera__review-login').textContent = data.login;  
    return reviewItem;
}

function addReviewCard(data, container) {
    let rev = createReviewCard(data);
    container.append(rev);
  }
  
  /*Вызов функции добавления карточек "из коробки на страницу" на страницу в цикле по массиву*/ 
  
  reviewsArr.forEach((item) => {
    addReviewCard(item, reviewList);
  });


  /*Открытие навигационного меню */ 
const burgerMenuButton = document.querySelector('.header__button-burger');
const burgerMenu = document.querySelector('.header__nav-bar');
const logoHeader = document.querySelector('.header__logo');

function openMenu(burgerMenu) {
    burgerMenu.classList.add('header__nav-bar_active');
    burgerMenuButton.classList.add('header__button-burger_active');
    logoHeader.classList.add('header__logo_active')
  }

burgerMenuButton.addEventListener('click', () => {
    openMenu(burgerMenu);
  }); 


/*Закрытие навигационного меню */ 
const navBarMobileClose = document.querySelector('.header__button-close');

function closeMenu(burgerMenu) {
    burgerMenu.classList.remove("header__nav-bar_active");
    burgerMenuButton.classList.remove('header__button-burger_active');
    logoHeader.classList.remove('header__logo_active')
  }

   navBarMobileClose.addEventListener('click', () => {
    closeMenu(burgerMenu)
  });
  

  const feedbackForm = document.querySelector('.appointment__form');
  const feedbackEmail = feedbackForm.querySelector('.appointment__feedback-email');
  const feedbackSubmit = feedbackForm.querySelector('.appointment__feedback-submit');
  
  /*Функция сохранения email*/

  const changeSubmitValue = (evt) => {
    
    const inputEmailValue = feedbackEmail.value;
    if((inputEmailValue.indexOf('@') != -1) && (inputEmailValue.indexOf('.') != -1)) {
      /*feedbackEmail.value = "";*/
      feedbackSubmit.value = "Спасибо!";
      /*feedBackForm.reset()*/ 
      evt.preventDefault();
      feedbackForm.reset();
    }
  }

  feedbackForm.addEventListener("submit", changeSubmitValue);
  
  
  
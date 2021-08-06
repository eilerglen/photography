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
  
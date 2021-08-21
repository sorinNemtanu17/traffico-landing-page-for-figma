console.log('hello');

('use strict');
const faqUrl = 'https://lxpi9qne2a.api.quickmocker.com/getReactFAQs';

function fetchFaq() {
  fetch(faqUrl)
    .then((res) => res.json())
    .then(({ response, ...data }) => {
      console.log(response);
      response.forEach(({ title, Message }, i, array) => {
        const titleFilter = title.split(' ').filter((el, i, array) => {
          if (!parseInt(el)) {
            return array.slice(3);
          }
        });
        renderHtml(titleFilter.join(' '), Message, i);
      });
    });
}

function renderHtml(title, message, index) {
  const fragment = document.createDocumentFragment();

  const divFirstColumn = document.querySelector('div.first-column');
  const divSecondColumn = document.querySelector('div.second-column');

  const article = document.createElement('article');
  const question = document.createElement('p');
  const answer = document.createElement('p');

  const openBtn = document.createElement('span');
  openBtn.classList.add('open-btn');

  article.appendChild(question);
  article.appendChild(answer);
  fragment.appendChild(article);

  if (index % 2 === 0 && index < 4 * 2) {
    console.log(index, article);
    if (index === 0) {
      answer.classList.add('show');
      openBtn.classList.add('close-btn');
      article.classList.add('expend');
    }
    divFirstColumn.appendChild(fragment);
    question.textContent = title;
    answer.textContent = message;
  } else if (index % 2 === 1 && index < 6 * 2) {
    divSecondColumn.appendChild(fragment);
    question.textContent = title;
    answer.textContent = message;
  }
  if (index > 7 && index % 2 === 0) {
    if (index === 12) {
      console.log(article);
      divSecondColumn.appendChild(fragment);
      question.textContent = title;
      answer.textContent = message;
    }
    divFirstColumn.appendChild(fragment);
    question.textContent = title;
    answer.textContent = message;
    article.style.display = 'none';
  } else if (index > 11 && index % 2 === 1) {
    console.log(index, article);
    divSecondColumn.appendChild(fragment);
    question.textContent = title;
    answer.textContent = message;
    article.style.display = 'none';
  }
  question.appendChild(openBtn);

  openBtn.addEventListener('click', function (e) {
    console.log(e.target.parentElement.parentElement);
    e.target.parentElement.nextSibling.classList.toggle('show');
    e.target.classList.toggle('close-btn');
    e.target.parentElement.parentElement.classList.toggle('expend');
  });
}
fetchFaq();
function handleLoadMore() {
  const loadMore = document.querySelector('.btn-container .open-btn');
  loadMore.addEventListener('click', function () {
    document.querySelectorAll('article').forEach((article) => {
      console.log(article);
      article.classList.toggle('show');
    });
  });
}
handleLoadMore();

//  =============== animation
function animateModel() {
  const model = document.querySelector('.model');
  const options = {
    root: null,
    threshold: 0,
    //rootMargin: '-200px 0px 0px 0px',
  };
  const intersectionObserver = new IntersectionObserver(function (
    entries,
    observer
  ) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        model.classList.add('animate-model');
      } else {
        model.classList.remove('animate-model');
      }
    });
  },
  options);
  intersectionObserver.observe(model);
}
animateModel();

function animateAbouUsIllustration() {
  const aboutUs = document.querySelector('.about-us-illustration');
  const options = {
    root: null,
    threshold: 0,
    //rootMargin: '-200px 0px 0px 0px',
  };
  const intersectionObserver = new IntersectionObserver(function (
    entries,
    observer
  ) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        aboutUs.classList.add('animate-about-us-illustration');
      } else {
        aboutUs.classList.remove('animate-about-us-illustration');
      }
    });
  },
  options);
  intersectionObserver.observe(aboutUs);
}
animateAbouUsIllustration();

function animateHowToIllustration() {
  const howTo = document.querySelector('.how-to-illustration');
  const options = {
    root: null,
    threshold: 0.1,
    //rootMargin: '-100px',
  };
  const intersectionObserver = new IntersectionObserver(function (
    entries,
    observer
  ) {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        howTo.classList.add('animate-how-to-illustration');
      } else {
        howTo.classList.remove('animate-how-to-illustration');
      }
    });
  },
  options);
  intersectionObserver.observe(howTo);
}
animateHowToIllustration();

function animateVehicle() {
  const vehicle = document.querySelector('.vehicle');
  const options = {
    root: null,
    threshold: 0,
    //rootMargin: '-200px 0px 0px 0px',
  };
  const intersectionObserver = new IntersectionObserver(function (
    entries,
    observer
  ) {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        vehicle.classList.add('animate-vehicle');
      } else {
        vehicle.classList.remove('animate-vehicle');
      }
    });
  },
  options);
  intersectionObserver.observe(vehicle);
}
animateVehicle();

// MENU //

function openMenu() {
  const hamburger = document.querySelector('.main-menu-button');
  const mainMenu = document.querySelector('.main-menu');
  console.log(mainMenu);
  hamburger.addEventListener('click', function (e) {
    console.log(e.target);
    mainMenu.classList.toggle('main-menu-open');
  });
}
openMenu();

/* в этот файл добавляет скрипты*/
// Находим кнопку открытия меню и само меню
let navToggle = document.querySelector('.js-toggle-button');
let navMain = document.querySelector('.main-nav');

// Добавляем обработчик события на кнопку
navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

// Получаем элементы слайдера
const slider = document.querySelector('.hero-slider__info');
const prevButton = document.querySelector('.slider-button-prev');
const nextButton = document.querySelector('.slider-button-next');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();

//Range-slider
const sliderElement = document.querySelector('.range__slider');
const inputFrom =document.querySelector('.range__input--from');
const inputTo =document.querySelector('.range__input--to');
const inputs = [inputFrom, inputTo];
const submit = document.querySelector('.form__button--submit');

inputFrom.value = 0;
inputTo.value = 900;

noUiSlider.create(sliderElement, {
  start: [0, 900],
  connect: true,
  step: 5,
  range: {
    min: 0,
    max: 1000,
  },
});
// Привязываем положения слайдера к инпутам цены
sliderElement.noUiSlider.on('update', (values, handle) => {
  inputs[handle].value = Math.round(values[handle]);
});
// Привязываем значение инпутов к положению слайдеров
const setRangeSlider = (i, value) => {
  let arr = [null, null];
  arr[i] = value;

  sliderElement.noUiSlider.set(arr);
};

inputs.forEach((el, index) => {
  el.addEventListener('change', (e) => {
    setRangeSlider(index, e.currentTarget.value);
  });
});


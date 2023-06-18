//Медиа-запросы
const mediaQueryForLaptop = window.matchMedia(
    "(min-width: 1024px) and (max-width: 1440px)"
);
const mediaQueryForTablet = window.matchMedia(
    "(min-width: 768px) and (max-width: 1023px)"
);
//Меняем основное изображение на выбранное пользователем
const photos = document.querySelectorAll(".item__img");
const mainPhoto = document.querySelector(".gallery__main-photo img");
photos.forEach((el) => {
    el.addEventListener("click", (event) => {
        photos.forEach((el1) => {
            if (el1 === event.target) {
                el1.classList.add("selected");
                mainPhoto.src = el1.src;
            } else {
                el1.classList.remove("selected");
            }
        });
    });
});

// Элементы первого слайдера (фотографии)
const leftSliderButton = document.querySelector(".slider__button_left");
const rightSliderButton = document.querySelector(".slider__button_right");
const sliderContainer = document.querySelector(".container__item");

//Кпопки второго слайдера
const leftSliderButtonBottom = document.getElementById("slider__button_left");
const rightSliderButtonBottom = document.getElementById("slider__button_right");
const sliderContainerBottom = document.querySelector(".slider__wrapper");
if (mediaQueryForLaptop.matches) {
    //Код для устройств от 1024px до 1440px
    //Первый слайдер с фото
    leftSliderButton.addEventListener("click", () => {
        if (leftSliderButton.dataset.clicked == "true") {
            sliderContainer.style.left = "-375px";
            leftSliderButton.dataset.clicked = false;
            rightSliderButton.dataset.clicked = true;
        } else {
            leftSliderButton.dataset.clicked = true;
            rightSliderButton.dataset.clicked = false;
            sliderContainer.style.left = "0";
        }
    });
    rightSliderButton.addEventListener("click", () => {
        if (rightSliderButton.dataset.clicked == "true") {
            sliderContainer.style.left = "0";
            rightSliderButton.dataset.clicked = false;
            leftSliderButton.dataset.clicked = true;
        } else {
            leftSliderButton.dataset.clicked = false;
            rightSliderButton.dataset.clicked = true;
            sliderContainer.style.left = "-375px";
        }
    });
    //Второй слайдер
    leftSliderButtonBottom.addEventListener("click", () => {
        if (leftSliderButtonBottom.dataset.clicked == "true") {
            sliderContainerBottom.style.left = "-680px";
            leftSliderButtonBottom.dataset.clicked = false;
            rightSliderButtonBottom.dataset.clicked = true;
        } else {
            leftSliderButtonBottom.dataset.clicked = true;
            rightSliderButtonBottom.dataset.clicked = false;
            sliderContainerBottom.style.left = "0";
        }
    });
    rightSliderButtonBottom.addEventListener("click", () => {
        if (rightSliderButtonBottom.dataset.clicked == "true") {
            sliderContainerBottom.style.left = "0";
            rightSliderButtonBottom.dataset.clicked = false;
            leftSliderButtonBottom.dataset.clicked = true;
        } else {
            leftSliderButtonBottom.dataset.clicked = false;
            rightSliderButtonBottom.dataset.clicked = true;
            sliderContainerBottom.style.left = "-680px";
        }
    });
} else if (mediaQueryForTablet.matches) {
    //Код для устройств от 768px до 1023px
    //Первый слайдер с фото
    leftSliderButton.addEventListener("click", () => {
        if (leftSliderButton.dataset.clicked == "true") {
            sliderContainer.style.left = "-285px";
            leftSliderButton.dataset.clicked = false;
            rightSliderButton.dataset.clicked = true;
        } else {
            leftSliderButton.dataset.clicked = true;
            rightSliderButton.dataset.clicked = false;
            sliderContainer.style.left = "0";
        }
    });
    rightSliderButton.addEventListener("click", () => {
        if (rightSliderButton.dataset.clicked == "true") {
            sliderContainer.style.left = "0";
            rightSliderButton.dataset.clicked = false;
            leftSliderButton.dataset.clicked = true;
        } else {
            leftSliderButton.dataset.clicked = false;
            rightSliderButton.dataset.clicked = true;
            sliderContainer.style.left = "-285px";
        }
    });
    //Второй слайдер
    leftSliderButtonBottom.addEventListener("click", () => {
        if (leftSliderButtonBottom.dataset.clicked == "true") {
            sliderContainerBottom.style.left = "-610px";
            leftSliderButtonBottom.dataset.clicked = false;
            rightSliderButtonBottom.dataset.clicked = true;
        } else {
            leftSliderButtonBottom.dataset.clicked = true;
            rightSliderButtonBottom.dataset.clicked = false;
            sliderContainerBottom.style.left = "0";
        }
    });
    rightSliderButtonBottom.addEventListener("click", () => {
        if (rightSliderButtonBottom.dataset.clicked == "true") {
            sliderContainerBottom.style.left = "0";
            rightSliderButtonBottom.dataset.clicked = false;
            leftSliderButtonBottom.dataset.clicked = true;
        } else {
            leftSliderButtonBottom.dataset.clicked = false;
            rightSliderButtonBottom.dataset.clicked = true;
            sliderContainerBottom.style.left = "-610px";
        }
    });
} else {
    //Код для устройств больше 1440px
    //Первый слайдер с фото
    leftSliderButton.addEventListener("click", () => {
        if (leftSliderButton.dataset.clicked == "true") {
            sliderContainer.style.left = "-525px";
            leftSliderButton.dataset.clicked = false;
            rightSliderButton.dataset.clicked = true;
        } else {
            leftSliderButton.dataset.clicked = true;
            rightSliderButton.dataset.clicked = false;
            sliderContainer.style.left = "0";
        }
    });
    rightSliderButton.addEventListener("click", () => {
        if (rightSliderButton.dataset.clicked == "true") {
            sliderContainer.style.left = "0";
            rightSliderButton.dataset.clicked = false;
            leftSliderButton.dataset.clicked = true;
        } else {
            leftSliderButton.dataset.clicked = false;
            rightSliderButton.dataset.clicked = true;
            sliderContainer.style.left = "-525px";
        }
    });
    //Второй слайдер
    leftSliderButtonBottom.addEventListener("click", () => {
        if (leftSliderButtonBottom.dataset.clicked == "true") {
            sliderContainerBottom.style.left = "-1100px";
            leftSliderButtonBottom.dataset.clicked = false;
            rightSliderButtonBottom.dataset.clicked = true;
        } else {
            leftSliderButtonBottom.dataset.clicked = true;
            rightSliderButtonBottom.dataset.clicked = false;
            sliderContainerBottom.style.left = "0";
        }
    });
    rightSliderButtonBottom.addEventListener("click", () => {
        if (rightSliderButtonBottom.dataset.clicked == "true") {
            sliderContainerBottom.style.left = "0";
            rightSliderButtonBottom.dataset.clicked = false;
            leftSliderButtonBottom.dataset.clicked = true;
        } else {
            leftSliderButtonBottom.dataset.clicked = false;
            rightSliderButtonBottom.dataset.clicked = true;
            sliderContainerBottom.style.left = "-1100px";
        }
    });
}

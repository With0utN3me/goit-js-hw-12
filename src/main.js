export {axios, searchParams, baseURL, loader, gallery, imageList, searchInput};
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
import axios from 'axios';
import renderImages from "./js/render-functions"
import fetchImages from "./js/pixabay-api";

//* Оголошення ДОМ констант
const searchInput = document.querySelector("#search-input");
const searchForm = document.querySelector(".form");
const imageList = document.querySelector(".image-list")
const loader = document.querySelector(".loader");
const loadMoreBtn = document.querySelector(".load-more-btn");



//* Оголошення глобальних змінних
const baseURL = `https://pixabay.com/api/?`;
let searchParams = {}
let page = 0;
let perPage = 15;
let totalImages;
let totalPages;
let searchWord;

let galleryCard;
let cardInfo;
//* Оновлення параметрів запиту
function addSearchParams() {
    page += 1;
    return new URLSearchParams({
        key: `42308406-6cac9d7b9797eefd79d1793c9`,
        q: encodeURIComponent(searchWord),
        page: page,
        per_page: perPage,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    })
}
//* Оголошення Сімпл лайт бокс
let gallery = new SimpleLightbox(`.image-list a`,
    {
        captionsData: `alt`,
        captionDelay: 250,
    }); 
    gallery.on('show.simplelightbox', function () {
        gallery.enableKeyboard;
    });
//* Виконання пошуку запиту та рендер
searchForm.addEventListener("submit", (event) => {
    event.preventDefault()
    //*Перевірка на пустий результат
    if(searchInput.value.trim() === ""){
        return iziToast.error({
            message: "Input should't be blank!",
            position: `topRight`,
        });
    }
    else{
        page = 0;
        searchWord = searchInput.value.trim();
        loader.classList.remove("hidden");
        searchParams = addSearchParams();
    };
    //*Пошук запиту
    fetchImages()
    .then((images) => {
        if(Object.keys(images.hits).length !== 0){
            imageList.innerHTML = "";
            totalImages = images.totalHits;
            renderImages(images)
            searchParams = addSearchParams();
            totalPages = Math.floor(totalImages / perPage);
            if(totalPages > 1){
                loadMoreBtn.classList.remove("hidden");
            }
            galleryCard = document.querySelector(".list-item");
            cardInfo = galleryCard.getBoundingClientRect();
        }
        else {
            loader.classList.add("hidden");
            imageList.innerHTML = "";
            searchInput.value = "";
            return iziToast.error({
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: `topRight`,
            });
        }
        })
    .catch((error) => console.log(error));
})


//* Пошук додаткових зображень
loadMoreBtn.addEventListener("click", () => {
    if (page == totalPages){
        loader.classList.remove("hidden");
        fetchImages()
        .then((images) => {
            renderImages(images)
            searchParams = addSearchParams();
            window.scrollBy({
                top: Math.floor(cardInfo.height * 2),
                behavior: "smooth",
            })
            loadMoreBtn.classList.add("hidden");
            return iziToast.info({
                position: "topRight",
                message: "We're sorry, but you've reached the end of search results."
                
            });
        })
        .catch((error) => console.log(error));
    }
    else {
        loader.classList.remove("hidden");
        fetchImages()
        .then((images) => {
            renderImages(images)
            searchParams = addSearchParams();
            window.scrollBy({
                top: Math.floor(cardInfo.height * 2),
                behavior: "smooth",
            })
        })
        .catch((error) => console.log(error));
    }
})


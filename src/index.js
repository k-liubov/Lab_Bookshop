import "../styles/style.css";
import "../styles/base.scss";
import { initSlider } from "./slider";
import { categories, getBooksCards, showButtons } from "./books";
import { getLoadMore } from "./loadMore";


document.addEventListener("DOMContentLoaded", () => {
    initSlider();
  });

categories.forEach((link) => {
    link.addEventListener("click", getBooksCards
    );
    link.addEventListener("click", () => {
      setTimeout(showButtons, 1000);
    }
    );
  });

let loadMore = document.querySelector(".footer__button_load");

loadMore.addEventListener("click", getLoadMore);

let firstCategory = document.querySelector(".categories__subject");

firstCategory.click();





  
  

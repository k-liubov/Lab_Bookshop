export const apiKey = "AIzaSyDLxjgQZhDdx1m4GFuvW6M9CNSqS9HenVI";
export const booksResult = document.querySelector(".books");
export const categories = document.querySelectorAll(".categories__subject");
export let active;
export let cart;
export let startIndex;
import { initAuthors, initDescription, initPrice, initRate, initTitles, initImages } from "./cards";
import { initAddingToCart, counter } from "./addToCart";
import { localData } from "./local";



export function getBooksCards(e) {
  e.preventDefault();
  removeListener();
  active = e.target;
  let activeCategory = active.textContent;
  categories.forEach((category) => {
    if (category == active) {
      category.classList.add("active-link");
    } else {
      category.classList.remove("active-link");
    }
  });
  let startIndex = 0;
  let paramsString = new URLSearchParams({
    q: `subject: ${activeCategory}`,
    key: `${apiKey}`,
    printType: "books",
    startIndex: startIndex,
    maxResults: 6,
    langRestrict: "en"
  }).toString();
  let url = `https://www.googleapis.com/books/v1/volumes?${paramsString}`;
console.log(url);
  fetch(url)
    .then(data => data.json())
    .then(data => {
      let booksArr = data.items;
      booksArr.forEach((item) => {

        let author = item.volumeInfo.authors;
        let authorRes = initAuthors(author);
        let descr = item.volumeInfo.description;
        let descrRes = initDescription(descr);
        let rate = item.volumeInfo.averageRating;
        let rateRes = initRate(rate);
        let price = item.saleInfo.retailPrice;
        let priceRes = initPrice(price);
        let img = item.volumeInfo.imageLinks.thumbnail;
        let imgRes = initImages(img);
        let title = item.volumeInfo.title;
        let titleRes = initTitles(title);

        const template = `
        <div class = "books__card">
        <div class = "books__card_img"><img src="${imgRes}" alt="Image for ${titleRes}"> </div>
        <div class = "books__card_block">
        <h4 class = "books__card_author">${authorRes}</>
        <h3 class = "books__card_title">${titleRes}</h3>
        <div class="rate_background">
    <div class="rate_gold" style = "width: ${rateRes};"></div>
</div>
        <p class = "books__card_description">${descrRes}</p>
        <p class = "books__card_price">${priceRes}</p>                 
       <button class = "books__button" data-id = ${item.id}>Buy now</button>
       </div>
       </div>
        `;

        booksResult.innerHTML += template;

        let buttons = document.querySelectorAll(".books__button");
        cart = document.querySelector(".menu-icons__cart");

        buttons.forEach((but) => {
          but.addEventListener("click", () => {
            but.classList.toggle("books__button_remove");
            initAddingToCart(but);
          });
        });
        
       


      });


    })

    .catch((err) => {
      console.log("Error", err);
    });
}


function removeListener() {
  booksResult.innerHTML = "";
}

export let showButtons = () => {
  let buttonsOnPage = document.querySelectorAll(".books__button");
  console.log(buttonsOnPage);
  buttonsOnPage.forEach((but) => {
    let butId = but.getAttribute("data-id");
    if (localData.includes(butId)) {
       but.classList.add("books__button_remove");
       but.innerText = "in the cart";
       cart.classList.add("menu-icons__cart_badge");
       cart.innerText = counter;
       } 
  });

};



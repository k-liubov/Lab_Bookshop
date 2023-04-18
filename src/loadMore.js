import { initAuthors, initDescription, initPrice, initRate, initTitles, initImages } from "./cards";
import { initAddingToCart } from "./addToCart";
import * as module from "./books";
let startIndex = 0;
export function getLoadMore(e) {
    e.preventDefault();
    let activeCategory = module.active.textContent;
    startIndex += 6;

    let paramsString = new URLSearchParams({
        q: `subject: ${activeCategory}`,
        key: `${module.apiKey}`,
        printType: "books",
        startIndex: startIndex,
        maxResults: 6,
        langRestrict: "en"
    }).toString();
    let url = `https://www.googleapis.com/books/v1/volumes?${paramsString}`;
 
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
           <button class = "books__button">Buy now</button>
           </div>
           </div>
            `;
            module.booksResult.innerHTML += template;

            let buttons = document.querySelectorAll(".books__button");
            

        buttons.forEach((but) => {
          but.addEventListener("click", () => {
            but.classList.toggle("books__button_remove");
            initAddingToCart(but);
          });
        });
            });
        })
        .catch ((err) => {
                console.log("Error", err);
            });
 }
   


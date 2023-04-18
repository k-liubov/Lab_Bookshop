import { cart } from "./books";

import { localData, removeFromLocal } from "./local";
export let counter = localData.length;

export function initAddingToCart(but) {
  let activeId = but.getAttribute("data-id");
    if (but.classList.contains("books__button_remove")) {
      but.innerText = "in the cart";
      cart.classList.add("menu-icons__cart_badge");
      counter++;
      cart.innerText = counter;
      console.log(localStorage);
      console.log(activeId);
      if (!localData.includes(activeId)) {
        localData.push(activeId);
        let seriaArr = JSON.stringify(localData);
        localStorage.setItem("isClicked", seriaArr);
        console.log(localStorage);
      }
      
    } else {
      but.innerText = "buy now";
      counter--;
      cart.innerText = counter;
      removeFromLocal(activeId);
      console.log(localStorage);
    }
    if (cart.innerText == 0) {
      cart.classList.remove("menu-icons__cart_badge");
      cart.innerText = "";
    }
  }
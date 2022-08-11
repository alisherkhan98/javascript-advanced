// function to create the "load more" button
import { createNextCards } from "./create-next-cards";

 
 
export function createLoadMoreBtn () {
    let cardsContainer = document.querySelector('.cards-container');
    cardsContainer.insertAdjacentHTML("beforeend", ' <div class="load-more-div col-12 p-3 d-flex justify-content-center align-items-center"><button class="load-more-btn btn btn-gradient btn-rounded">Load more</button></div>')
    let loadMoreBtn = document.querySelector('.load-more-div')
    loadMoreBtn.onclick = function () {
    createNextCards();
    
    }

};
// function to load details and create cards for the next 10 articles
import { createDate } from '../utilities/create-date';
import {getDetails} from './get-details';
import { changeOpacity } from '../utilities/change-opacity';
import {allIds} from './get-id-list';

let loadedIds = 0;


export async function createNextCards (array) {
    let cardsContainer = document.querySelector('.cards-container');

    if (loadedIds >= 500) {
        alert('No more news to load...');
        return;
    }
    for (let i = loadedIds; i < loadedIds + 10; i++) {


        
        // load details
        let details = await getDetails(allIds[i]);
        
        // create date
        let date = createDate(details);

        // Creation of card
        let card = document.createElement('div');
        card.setAttribute('class', 'my-card col-12 col-md-6 col-lg-3 p-3');
        card.innerHTML = `<div class="card text-center">
                         <div class="card-body">
                             <p class="card-text">${_.get(details, 'data.title')}</p>
                             <a href="${_.get(details, 'data.url')}" class="btn btn-gradient btn-rounded read-article-btn">Read article</a>
                         </div>
                         <div class="card-footer text-muted">${date}</div>
                         </div>`;
        // the first time the function is called it will append to container but then insert before "load more" button
        if (loadedIds < 10) {
        cardsContainer.append(card);
        } else {
        let loadMoreBtn = document.querySelector('.load-more-div');
        loadMoreBtn.before(card);
        }
        changeOpacity(card, '1', 500);
        
    }
    loadedIds += 10;
    
}
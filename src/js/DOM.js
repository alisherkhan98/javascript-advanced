import {getDetails} from './API';
import {allIds} from './API';
import { isError } from './API';


// Function to get date

export function createDate(details) {
let date =new Date(_.get(details, 'data.time', 'Date not available') * 1000);
let datePretty = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
let now = new Date();
let timePassed = new Date(now - date);

// date is seen as "x" minutes/hours ago for less than one day
if (timePassed < 60 * 60 * 1000) {
    datePretty = `${timePassed.getMinutes()} minutes ago`;
} else if (timePassed >= 60 * 60 * 1000 || timePassed <= 60 * 60 * 24 * 1000) {
    datePretty = `${timePassed.getHours() - 1} hours ago`;
}

return datePretty;

}

// function to change opacity
export function changeOpacity (elem, opacity, interval) {
    setTimeout(() => elem.style.opacity = opacity, interval)
};


// function to create the "load more" button
export async function createLoadMoreBtn () {
    let cardsContainer = document.querySelector('.cards-container');
    cardsContainer.insertAdjacentHTML("beforeend", ' <div class="load-more-div col-12 p-3 d-flex justify-content-center align-items-center"><button class="load-more-btn btn btn-gradient btn-rounded">Load more</button></div>')
    let loadMoreBtn = document.querySelector('.load-more-div');
    loadMoreBtn.addEventListener ('click', function NextCards () {

        // remove click listener so that you can't click multiple times and send too many API requests
        loadMoreBtn.removeEventListener('click', NextCards);
        createNextCards()
        .then(() => {
          setTimeout(() => loadMoreBtn.addEventListener ('click', NextCards), 1000)
        })
    
        }
    )
};



// function to load details and create cards for the next 10 articles

let loadedIds = 0

export async function createNextCards () {
    let cardsContainer = document.querySelector('.cards-container');

    if (loadedIds >= 500) {
        alert('No more news to load...');
        return;
    }
    for (let i = loadedIds; i < loadedIds + 10; i++) {


        
        // load details
        if (!isError) {
        var details = await getDetails(allIds[i]);
        } else {break};
        
        // create date
        let date = createDate(details);

        // Creation of card
        let card = document.createElement('div');
        let url = _.get(details, 'data.url');
        card.setAttribute('class', 'my-card col-12 col-md-6 col-lg-3 p-3');

        // Making the button of articles without url disabled with a tooltip
        if (url) {
            card.innerHTML = `<div class="card text-center">
            <div class="card-body">
                <p class="card-text">${_.get(details, 'data.title')}</p>
                <a href="${url}" class="btn btn-gradient btn-rounded read-article-btn">Read article</a>
            </div>
            <div class="card-footer text-muted">${date}</div>
            </div>`;
        } else {
            card.innerHTML = `<div class="card text-center">
            <div class="card-body">
                <p class="card-text">${_.get(details, 'data.title')}</p>
                <a data-mdb-toggle="tooltip" title="Sorry, article not available" class="btn btn-gradient btn-rounded read-article-btn">Read article</a>
            </div>
            <div class="card-footer text-muted">${date}</div>
            </div>`;
        }
        // the first time the function is called it will append to container but then insert before "load more" button
        if (loadedIds < 10) {
        cardsContainer.append(card);
        } else 
        {
        let loadMoreBtn = document.querySelector('.load-more-div');
        loadMoreBtn.before(card);
        }
        changeOpacity(card, '1', 500);
        
    }
    loadedIds += 10;

    
}


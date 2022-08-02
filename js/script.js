let loadedIds = 0;
let allIds = []; 
let cardsContainer = document.querySelector('.cards-container');
let loadMoreBtn;

// function to create load details and create cards for the next 10 articles
async function createNextCards (array) {
    let numOfIds = 10;
    if (loadedIds >= allIds.length) {
        alert('No more news to load...')
        return;
    }
    for (i = loadedIds; i < loadedIds + numOfIds; i++) {

        
        // load details
        let details = await getDetails(allIds[i]);
        
        // Function to get date
        function createDate() {
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
        let date = createDate();

        // Creation of card
        let card = document.createElement('div');
        card.setAttribute('class', 'my-card col-12 col-md-6 col-lg-3 p-3')
        card.innerHTML = `<div class="card text-center">
                         <div class="card-body">
                             <p class="card-text">${_.get(details, 'data.title')}</p>
                             <a href="${_.get(details, 'data.url')}" class="btn btn-rounded read-article-btn">Read article</a>
                         </div>
                         <div class="card-footer text-muted">${date}</div>
                         </div>`;
        // the first time the function is called it will append to container but then insert before "load more" button
        if (loadedIds < numOfIds) {
        cardsContainer.append(card);
        } else {
        loadMoreBtn.before(card)
        }
        setTimeout(() => card.style.opacity = '1', 500);
        
        
    }
    loadedIds += numOfIds;
    
}


// function to get the list of all 500 ids
async function getIdList (url) {
    let response = await axios.get(url);
    allIds.push(...response.data);
    
   
}

// function to fetch details given the id
async function getDetails (id) {
    let response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    return response;
}


// function to create the "load more" button
function createLoadMoreBtn () {
     
     cardsContainer.insertAdjacentHTML("beforeend", ' <div class="load-more-div col-12 p-3 d-flex justify-content-center align-items-center"><button class="load-more-btn btn btn-rounded">Load more</button></div>')
     loadMoreBtn = document.querySelector('.load-more-div')
     loadMoreBtn.onclick = function () {
     createNextCards();
     }
}

// function for logo intro 
// function printLetterByLetter(destination, message, speed){
//     var i = 0;
//     var interval = setInterval(function(){
//         document.querySelector(destination).innerHTML += (message.charAt(i));
//         i++;
//         if (i > message.length){
//             clearInterval(interval);
//         }
//     }, speed);
// }

// if (document.documentElement.clientWidth > 500) {
//     printLetterByLetter(".logo-animation", "HACKER NEWS, YOUR DAILY TECH FEED!", 50);
// }


function changeOpacity (elem, opacity, interval) {
    setTimeout(() => elem.style.opacity = opacity, interval)
}

changeOpacity(document.querySelector('.logo-animation'), '1', 500)


getIdList('https://hacker-news.firebaseio.com/v0/newstories.json')
.then( () => createNextCards())
.then(() => createLoadMoreBtn());


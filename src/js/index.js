import "../scss/style.scss"

import {getIdList} from './API';
import {createLoadMoreBtn} from './DOM';
import {createNextCards} from './DOM';
import {changeOpacity} from './DOM';


getIdList(process.env.API_URL)
.then( (list) => createNextCards(list))
.then(() => createLoadMoreBtn())
.catch(function (error) {
    let click = new Event ('click')
    let modalBtn = document.getElementById('modal-btn');
    let modalBody = document.querySelector('.modal-body');
    if (error.response.status == 404) {
        modalBody.textContent = "The page was not found. Please check if you set up the environment variable correctly and try again";
        console.log(error.toJSON())

    } else if (error.response.status == 500) {
        modalBody.textContent = "There was an error with the server";
        console.log(error.toJSON())

    } else {
        modalBody.textContent = `Unknown error "${error.message}" \n Status code: ${error.response.status}`;
        console.log(error.toJSON())
        
    }
    setTimeout(() => {
        modalBtn.dispatchEvent(click);
    }, 2000);
});

changeOpacity(document.querySelector('.logo-animation'), '1', 500);
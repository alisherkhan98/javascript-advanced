import "../scss/style.scss"

import {getIdList} from './API';
import {createLoadMoreBtn} from './DOM';
import {createNextCards} from './DOM';
import {changeOpacity} from './DOM';



getIdList(process.env.API_URL)
.then( () => createNextCards())
.then(() => createLoadMoreBtn())
.finally(() => {
    let loader = document.querySelector('.fs-black');
    setTimeout(() => {
        loader.style.display = 'none';
    }, 1000)
})

changeOpacity(document.querySelector('.logo-animation'), '1', 500);
import "../scss/style.scss"

import {getIdList} from './API';
import {createLoadMoreBtn} from './DOM';
import {createNextCards} from './DOM';
import {changeOpacity} from './DOM';

getIdList(process.env.API_URL)
.then( (list) => createNextCards(list))
.then(() => createLoadMoreBtn());

changeOpacity(document.querySelector('.logo-animation'), '1', 500);
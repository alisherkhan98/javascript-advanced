import "../scss/style.scss"

import {getIdList} from './app/get-id-list';
import {createLoadMoreBtn} from './app/create-load-more';
import {createNextCards} from './app/create-next-cards';
import {changeOpacity} from './utilities/change-opacity';


getIdList(process.env.API_URL)
.then( () => createNextCards())
.then(() => createLoadMoreBtn());

changeOpacity(document.querySelector('.logo-animation'), '1', 500);
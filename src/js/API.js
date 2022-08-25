// function to get the list of all 500 ids
export let allIds = [];


export async function getIdList (url) {

    let response = await axios.get(url)
    .catch(function (error) {
        let click = new Event ('click')
        let modalBtn = document.getElementById('modal-btn');
        let modalBody = document.querySelector('.modal-body');
        if (error.response.status == 404) {
            modalBody.textContent = "The page was not found. Please check if you set up the environment variable correctly and try again";
    
        } else if (error.response.status == 500) {
            modalBody.textContent = "There was an error with the server. Please retry later";
    
        } else {
            modalBody.textContent = `Unknown error "${error.message}" Status code: ${error.response.status}`;
            
        }
        setTimeout(() => {
            modalBtn.dispatchEvent(click);
        }, 2000);
    });
    allIds.push(...response.data);
}



// function to fetch details given the id

export let isError = 0;

export async function getDetails (id) {
    let response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    .catch(function (error) {
        let click = new Event ('click')
        let modalBtn = document.getElementById('modal-btn');
        let modalBody = document.querySelector('.modal-body');
        isError = 1;
        if (error.response.status == 404) {
            modalBody.textContent = "There was a problem connecting with the API. Please retry later ";
    
        } else if (error.response.status == 500) {
            modalBody.textContent = "There was an error with the server. Please retry later ";
    
        } else {
            modalBody.textContent = `Unknown error "${error.message}" Status code: ${error.response.status}`;
            
        }
        setTimeout(() => {
            modalBtn.dispatchEvent(click);
        }, 2000);
    })
    return response;
};
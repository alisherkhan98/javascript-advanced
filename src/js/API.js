// function to get the list of all 500 ids

export async function getIdList (url) {
    let response = await axios.get(url);
    return response.data;  
}



// function to fetch details given the id

export async function getDetails (id) {
    let response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    return response;
};
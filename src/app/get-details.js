// function to fetch details given the id

export async function getDetails (id) {
    let response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    return response;
};
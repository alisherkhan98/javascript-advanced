// function to get the list of all 500 ids
export let allIds = []; 

export async function getIdList (url) {
    let response = await axios.get(url);
    allIds.push(...response.data);  
}

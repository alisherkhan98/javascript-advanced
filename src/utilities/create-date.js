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
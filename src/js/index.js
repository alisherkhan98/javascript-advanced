import "../scss/style.scss";

// function to get the list of all 500 ids
let allIds = [];

async function getIdList(url) {
  let response = await axios.get(url).catch(function (error) {
    let modalBody = document.querySelector(".modal-body");
    if (error.response.status == 404) {
      modalBody.textContent =
        "The page was not found. Please check if you set up the environment variable correctly and try again";
    } else if (error.response.status == 500) {
      modalBody.textContent =
        "There was an error with the server. Please retry later";
    } else {
      modalBody.textContent = `Unknown error "${error.message}" Status code: ${error.response.status}`;
    }
    setTimeout(() => {
      $("#errorModal").modal("show");
    }, 2000);
  });

  allIds.push(...response.data);
}

// function to fetch details of the next ten ids
let loadedIds = 0;

function getNextDetails() {
  let nextIds = allIds.slice(loadedIds, loadedIds + 10);
  console.log(nextIds);
  let details = nextIds.map((id) =>
    axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
  );
  loadedIds += 10;
  return Promise.all(details).catch(function (error) {
    let modalBody = document.querySelector(".modal-body");

    if (error.response.status == 404) {
      modalBody.textContent =
        "There was a problem connecting with the API. Please retry later";
    } else if (error.response.status == 500) {
      modalBody.textContent =
        "There was an error with the server. Please retry later ";
    } else {
      modalBody.textContent = `Unknown error "${error.message}" Status code: ${error.response.status}`;
    }
    setTimeout(() => {
      $("#errorModal").modal("show");
    }, 2000);
  });
}

// Function to get date

function createDate(details) {
  let date = new Date(_.get(details, "data.time", "Date not available") * 1000);
  let datePretty =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  let now = new Date();
  let timePassed = new Date(now - date);

  // date is seen as "x" minutes/hours ago for less than one day
  if (timePassed < 60 * 60 * 1000) {
    datePretty = `${timePassed.getMinutes()} minutes ago`;
  } else if (
    timePassed >= 60 * 60 * 1000 ||
    timePassed <= 60 * 60 * 24 * 1000
  ) {
    datePretty = `${timePassed.getHours() - 1} hours ago`;
  }

  return datePretty;
}

// function to change opacity
function changeOpacity(elem, opacity, interval) {
  setTimeout(() => (elem.style.opacity = opacity), interval);
}

// function to load details and create cards for the next 10 articles

function createNextCards(details) {
  let loadMoreDiv = document.querySelector(".load-more-div");
  if (loadedIds > 500) {
    alert("No more news to load...");
    return;
  }
  details.forEach((detail) => {
    // create date
    let date = createDate(detail);

    // Creation of card
    let card = document.createElement("div");
    let url = _.get(detail, "data.url");
    card.className = "my-card col-12 col-md-6 col-lg-3 p-3";

    // Making the button of articles without url disabled with a tooltip
    if (url) {
      card.innerHTML = `<div class="card text-center">
                  <div class="card-body">
                      <p class="card-text">${_.get(detail, "data.title")}</p>
                      <a href="${url}" class="btn btn-gradient btn-rounded read-article-btn">Read article</a>
                  </div>
                  <div class="card-footer text-muted">${date}</div>
                  </div>`;
    } else {
      card.innerHTML = `<div class="card text-center">
                  <div class="card-body">
                      <p class="card-text">${_.get(detail, "data.title")}</p>
                      <a data-mdb-toggle="tooltip" title="Sorry, article not available" class="btn btn-gradient btn-rounded read-article-btn">Read article</a>
                  </div>
                  <div class="card-footer text-muted">${date}</div>
                  </div>`;
    }
    loadMoreDiv.before(card);
    changeOpacity(card, "1", 100);
  });
}

// Function to start loading
function startLoading() {
  let loader = document.querySelector(".fs-black");
  loader.style.display = "flex";
  changeOpacity(loader, "1", 100);
}
//  Function to stop loading
function stopLoading() {
  let loader = document.querySelector(".fs-black");
  changeOpacity(loader, "0", 800);
  setTimeout(() => {
    loader.style.display = "none";
  }, 1100);
}

//  Main Code

//  Starting animation
changeOpacity(document.querySelector(".logo-animation"), "1", 500);

// Loading first ten articles
getIdList(process.env.API_URL)
  .then(() => getNextDetails())
  .then((details) => createNextCards(details))
  .then(() => {
    let loadMoreBtn = document.querySelector(".load-more-btn");
    changeOpacity(loadMoreBtn, "1", 1000);
  })
  .finally(() => stopLoading());

//   Handling Load More button
let loadMoreBtn = document.querySelector(".load-more-btn");
loadMoreBtn.addEventListener("click", function () {
  startLoading();
  loadMoreBtn.setAttribute("disabled", "true");
  getNextDetails()
    .then((details) => createNextCards(details))
    .finally(() => {
      stopLoading();
      loadMoreBtn.removeAttribute("disabled");
    });
});

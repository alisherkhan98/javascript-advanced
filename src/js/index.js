import "../scss/style.scss";
import topStories from "./top-stories"
import newStories from "./new-stories"

newStories();
topStories();

let newTab = document.getElementById("new-tab")
let topTab = document.getElementById("top-tab")

topTab.onclick = () => {
  document.querySelectorAll(".cards-container")[1].classList.add("top")
  document.getElementById("header").classList.add("top")
}

newTab.onclick = () => {
  document.getElementById("header").classList.remove("top")
  document.querySelectorAll(".cards-container")[1].classList.remove("top")
}

console.log(process.env.API_URL)
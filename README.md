
<a name="readme-top"></a>



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="src/assets/img/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Hacker News</h3>

  <p align="center">
    Daily tech news from all over the world
    <br />
    <br />
    <a href="https://github.com/alisherkhan98/javascript-advanced"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://jovial-nougat-5950a7.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/alisherkhan98/javascript-advanced/issues">Report Bug</a>
    ·
    <a href="https://github.com/alisherkhan98/javascript-advanced/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![Product Name Screen Shot][product-screenshot]

This is my second project built with Javascript. The web app is very simple, it fetches the latest 500 articles from the [Hacker News API](https://github.com/HackerNews/API) and it shows 10. You can press the load more button to load the next 10 articles until you load them all.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![webpack][webpack.com]][webpack-url]
* [![Lodash][lodash.com]][lodash-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![Axios][axios.com]][axios-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy of the project up and running follow these simple example steps.

### Prerequisites

* Install [Node.js](https://nodejs.org/it/download)
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/alisherkhan98/javascript-advanced.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a new `.env` file in the root of the project and copy this in it
   ```js
   API_URL="https://hacker-news.firebaseio.com/v0/newstories.json"
   ```
4. Now if you want to open a live server to start developing type this in your terminal:
     ```sh
   npm start
   ```
   
   otherwise if you want to build the  final files bundeled with webpack type
     ```sh
     npmm run build
   ```
   
   This will create a new dist folder with the hashed files in it
   

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

The app is very basic, there's one button at the bottom of the page to load ten more articles, and on every card you can press a "read article" button which leads you to the article itself.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


##ERROR HANDLING

If an error occurs during the calls to the API a custom modal appears with the description of the error. If it's a 404 or a 500 status error a custom message will appear, otherwise it will show the error message and the relative status code.

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>






<!-- CONTACT -->
## Contact

Email: asherkhan982@gmail.com
<br/>
Project Link: [https://github.com/alisherkhan98/javascript-advanced](https://github.com/alisherkhan98/javascript-advanced)

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/alisherkhan98/javascript-advanced.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/alisherkhan98/javascript-advanced.svg?style=for-the-badge
[forks-url]: https://github.com/alisherkhan98/javascript-advanced/network/members
[stars-shield]: https://img.shields.io/github/stars/alisherkhan98/javascript-advanced.svg?style=for-the-badge
[stars-url]: https://github.com/alisherkhan98/javascript-advanced/stargazers
[issues-shield]: https://img.shields.io/github/issues/alisherkhan98/javascript-advanced.svg?style=for-the-badge
[issues-url]: https://github.com/alisherkhan98/javascript-advanced/issues
[license-shield]: https://img.shields.io/github/license/alisherkhan98/javascript-advanced.svg?style=for-the-badge
[license-url]: https://github.com/alisherkhan98/javascript-advanced/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/ali-sher-khan-1331a8205
[product-screenshot]: src/assets/img/screenshot.jpg

[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[webpack.com]: https://img.shields.io/badge/-Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black
[webpack-url]: https://webpack.js.org
[lodash.com]: https://img.shields.io/badge/-lodash-3492FF?style=for-the-badge&logo=lodash&logoColor=white
[lodash-url]: https://lodash.com
[axios.com]: https://img.shields.io/badge/-axios-7e3e8d?style=for-the-badge&logoColor=white
[axios-url]: https://axios-http.com



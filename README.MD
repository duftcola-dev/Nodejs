<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



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
  <a href="https://github.com/duftcola-dev/Nodejs/tree/master/Backend_Service_Template">
    <img src="doc/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Nodejs App Template</h3>
  <p align="center">
    This is a template for creating services based on Nodejs-Express. This template allows 
    to create backend services quickly of any size. The template comes by default with the following features:
  </p>
</div>
  <ul>
    <li>Configuration files for production , development and testing</li>
    <li>Configuration based on environemnt variables</li>
    <li>Routing</li>
    <li>Scripts and automation for launching development and production</li>
    <li>Scripts and automation to create and launch docker and docker-compose containers</li>
    <li>Unittest with Mocha</li>
    <li>Unittest and coverage with Postman/Newman</li>
    <li>Production environment with PM2</li>
    <li>Secure headers with Helmet</li>
    <li>File upload (in progress)</li>
    <li>File download (in progress)</li>
  </ul>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ul>
  <li><a href="#about-the-project">About The Project</a></li>
  <li><a href="#built-with">Built With</a></li>
  <li><a href="#getting-started">Getting Started</a></li>
  <li><a href="#prerequisites">Prerequisites</a></li>
  <li><a href="#installation">Installation</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#roadmap">Roadmap</a></li>
  <li><a href="#license">License</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ul>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<p>Set the application environment</p>

![](https://github.com/duftcola-dev/Nodejs/blob/master/doc/env.gif)

<p>Launch the application.</p>

![](https://github.com/duftcola-dev/Nodejs/blob/master/doc/launch.gif)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![Nodejs][Node.js]][Node-url]
* [![Docker][Docker]][Docker-url]
* [![Mocha][Mocha]][Mocha-url]
* [![PM2][PM2]][PM2-url]
* [![Helmet][Helmet]][Helmet-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

This project was made with Nodejs v18.12.0
In order to use this project is nescessary to have nodejs and npm installed.

### Prerequisites

* Clone this repository.

### Installation

1. Install deppendencies
   ```sh
   npm install
   ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

1. Edit your configuration files and environment variables.
  ```sh
    Backend_Service_Template/
                  config/
                      default.json/
                      dev.json/
                      prod.json/
                      test.json/
  ```
  - Configurations files are stored here.
  - By default, the default.json configuration file is used if no NODE_ENV="" value is specified.
  - Which configuration file is used at run time deppends on the ENV variable NODE_ENV.
  - If NODE_ENV has no value then default.json is used.

  ```sh
    Backend_Service_Template/
                  env/.env
                  config/
                      default.json/
                      dev.json/
                      prod.json/
                      test.json/
  ``` 
  - Additional ENV varaibles can be placed at env/.env.
  - This varaibles are loaded during boot. However NODE_ENV must be se manually 
    and cannot be stored at env/.env

2. Edit your dev.json | prod.json | test.json configuration files.
  ```sh
    {   
      "server":{
          "host":"0.0.0.0",
          "port":8000,
          "auto_restart":true,
          "secret":"",
          "ssl_key":"",
          "ssl_cert":""
      },
      "database":{
          "type":"",
          "name":"",
          "user":"",
          "password":"",
          "host":"",
          "port":0
      }
    }
  ```
  - server : Section related to the basic parameters of your application
  - database : Database connector parameters.
  - (This section is incompleted and will be expanded in the future)

3. Initialize your application
  ```sh
    export NODE_ENV=dev
    npm start
  ```
  - Optionally you can also use :

  ```sh
    export NODE_ENV=dev
    node index
  ```
 
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Develop cluster mode functionality
- [ ] Develop streaming functionalities
- [ ] Develop file upload/download functionalities
- [x] Develop scripts for automation
- [ ] Develop swagger/rest api finctionalities 
- [x] Develop testing features
- [x] Develop CICD with docker
- [x] Develop github/bitbucket workflows/pipelines
- [x] Create production layout


See the [open issues](https://github.com/duftcola-dev/Nodejs/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the <a href="https://github.com/nodejs/node/blob/main/LICENSE">Nodejs license</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Robin Viera - robinviera@hotmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* This is an unfinished project an some features may not work yet or not be implemented.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/duftcola-dev/Nodejs.svg?style=for-the-badge
[contributors-url]: https://github.com/duftcola-dev/Nodejs/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/duftcola-dev/Nodejs.svg?style=for-the-badge
[forks-url]: https://github.com/duftcola-dev/Nodejs/network/members
[stars-shield]: https://img.shields.io/github/stars/duftcola-dev/Nodejs.svg?style=for-the-badge
[stars-url]: https://github.com/duftcola-dev/Nodejs/stargazers
[issues-shield]: https://img.shields.io/github/issues/duftcola-dev/Nodejs.svg?style=for-the-badge
[issues-url]: https://github.com/duftcola-dev/Nodejs/issues
[license-shield]: https://img.shields.io/github/license/duftcola-dev/Nodejs.svg?style=for-the-badge
[license-url]: https://github.com/duftcola-dev/Nodejs/blob/develop/LICENSE.txt
[ApacheLicense-url]:https://www.apache.org/licenses/LICENSE-2.0
[MitLicense-url]:https://choosealicense.com/licenses/mit/
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/robin-viera-17aa2378/
[product-screenshot]: images/screenshot.png
[Docker]:https://img.shields.io/badge/Docker-037ffc?style=for-the-badge&logo=docker&logoColor=white
[Helmet]:https://img.shields.io/badge/Helmet-fcfbfa?style=for-the-badge&logo=helmet&logoColor=black
[Helmet-url]:https://helmetjs.github.io/
[Mocha-url]:https://mochajs.org/
[Mocha]:https://img.shields.io/badge/Mocha-995809?style=for-the-badge&logo=mocha&logoColor=white
[PM2-url]:https://pm2.keymetrics.io/
[PM2]:https://img.shields.io/badge/PM2-6b03fc?style=for-the-badge&logo=pm2&logoColor=white
[Docker-url]:https://www.docker.com/
[Swagger]:https://img.shields.io/badge/Swagger-18a10a?style=for-the-badge&logo=swagger&logoColor=blue
[Swagger-url]:https://swagger.io/
[Click]:https://img.shields.io/badge/click-fafcfa?style=for-the-badge&logo=click&logoColor=black
[Click-url]:https://click.palletsprojects.com/en/8.1.x/
[Python.py]:https://img.shields.io/badge/python-000000?style=for-the-badge&logo=python&logoColor=blue
[Python-url]:https://www.python.org/
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Node.js]: https://img.shields.io/badge/node.js-06ba0c?style=for-the-badge&logo=nodejs&logoColor=white
[Node-url]: https://nodejs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
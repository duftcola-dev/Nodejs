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
[![Apache License 2.0][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/duftcola-dev/SWAGGER_CLI">
    <img src="media/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Swagger cli</h3>

  <p align="center">
    This is a cli that allows to make an easy use of the Swagger api on a local machine.
    The cli allows to clone and build the nescessary deppendencies as well as launch the
    swagger editor and the code generator console. So far the project have only been developed and tested 
    in Ubuntu 20.4 so there is no assurance that it will work on Windows. 

    To make it clear you will need both the editor and code generator.
    The editor for generating rest api studs and server side documentation and the
    code generator to convert this documentation in usefull code.
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
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<p>Execute : python cli to display the user manual and options</p>

![](https://github.com/duftcola-dev/SWAGGER_CLI/blob/master/media/open_cli.gif)

<p>Execute : python cli launch to execute the swagger editor on your localhost</p>

![](https://github.com/duftcola-dev/SWAGGER_CLI/blob/master/media/launching.gif)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Python][Python.py]][Python-url]
* [![Click][Click]][Click-url]
* [![Swagger][Swagger]][Swagger-url]
* [![Docker][Docker]][Docker-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

Download the <a href="">release</a> version. This is a cleaner repository without
some media files you may not want.
### Prerequisites

* pip
  ```sh
  pip install -r requirements.txt --upgrade pip
  ```
### Installation

1. Clone the swagger codegen repository by running:
   ```sh
   python cli clone
   ```
2. Pull the swagger editor
   ```sh
   python cli pull
   ```
3. Build deppendecies (java vm). Also installs tkinter version == your python version.
   ```sh
   python cli build
   ```
4. Launch your editor.
   ```sh
   python cli launch
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage
```sh
  python cli 
```
  - This is the most basic command. It will display all the availabe options 
```sh
  python cli <option> --help 
```
  - Will display the options/flags avaible for a command.
  - Also instructions for its usage.
```sh
  python cli build 
```
  - Builds the required deppendencies
```sh
  python cli clone 
```
  - Clones the swagger code generator repository
```sh
  python cli launch
```
  - Launches the editor in your local machine on your localhost:8000/ by default.
  - options:
    - --build : Forces to build a new container for the editor.
    - --url : Specifies a url to launch the editor. (default localhost)
    - --port : Specifies a port to launch the editor. (default 8000)
```sh
  python cli remove
```
  - Removes the editor container if exists.
```sh
  python cli template
```
  - Launches the editor on localhost:8000 using the specified .json/.yml template.
  - options:
    - --interactive : Opens a file browser to select the template file.
    - --path : Absolute path to the template file. (manual option)
  


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [*] Develop cli skeleton
- [*] Develop Swagger editor cli
- [ ] Create unittest for Swagger editor cli
- [ ] Develop codegen cli
- [ ] Create unittest codegen cli (Therefore code gen is not fully tested yet)


See the [open issues](https://github.com/duftcola-dev/SWAGGER_CLI/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the <a href="https://www.apache.org/licenses/LICENSE-2.0">Apache 2.0 License.</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Robin Viera - robinviera@hotmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* This is an unfinished project an some features may not work yet.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/duftcola-dev/SWAGGER_CLI.svg?style=for-the-badge
[contributors-url]: https://github.com/duftcola-dev/SWAGGER_CLI/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/duftcola-dev/SWAGGER_CLI.svg?style=for-the-badge
[forks-url]: https://github.com/duftcola-dev/SWAGGER_CLI/network/members
[stars-shield]: https://img.shields.io/github/stars/duftcola-dev/SWAGGER_CLI.svg?style=for-the-badge
[stars-url]: https://github.com/duftcola-dev/SWAGGER_CLI/stargazers
[issues-shield]: https://img.shields.io/github/issues/duftcola-dev/SWAGGER_CLI.svg?style=for-the-badge
[issues-url]: https://github.com/duftcola-dev/SWAGGER_CLI/issues
[license-shield]: https://img.shields.io/github/license/duftcola-dev/SWAGGER_CLI.svg?style=for-the-badge
[license-url]: https://github.com/duftcola-dev/SWAGGER_CLI/blob/master/LICENSE.txt
[ApacheLicense-url]:https://www.apache.org/licenses/LICENSE-2.0
[MitLicense-url]:https://choosealicense.com/licenses/mit/
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Docker]:https://img.shields.io/badge/Docker-037ffc?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]:https://www.docker.com/
[Swagger]:https://img.shields.io/badge/Swagger-18a10a?style=for-the-badge&logo=swagger&logoColor=blue
[Swagger-url]:https://swagger.io/
[Click]:https://img.shields.io/badge/click-fafcfa?style=for-the-badge&logo=click&logoColor=black
[Click-url]:https://click.palletsprojects.com/en/8.1.x/
[Python.py]:https://img.shields.io/badge/python-000000?style=for-the-badge&logo=python&logoColor=blue
[Python-url]:https://www.python.org/
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
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
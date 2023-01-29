/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/annunci/annunci.html":
/*!**********************************!*\
  !*** ./src/annunci/annunci.html ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<h1>TODO (filtro) (bottoni o select) per visualizzare gli annunci per categoria o anno</h1>\r\n<h1>TODO (ricerca) (input type search) per visualizzare gli annunci con quel nome nel titolo</h1>\r\n<h1>TODO realizzare una vista di tutti gli annunci dal più recente divisi in pagine da 5 (vedere library)</h1>\r\n<h1>TODO tasto crea anunncio per mostrare template creaAnnuncio</h1>\r\n\r\n<div style=\"display: flex;\">\r\n\r\n    <span style=\"margin-right: 40px\">\r\n        <button class=\"btn btn-primary\" id=\"selectAll\">Visualizza tutti</button>\r\n            </span> <!--funzione che prende tutti gli annunci e li schiaffa nel contenuto annunci-->\r\n                <span style=\"margin-right: 40px\" class=\"dropdown\">\r\n                    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                    Visualizza per Genere\r\n                    </button>\r\n                    <ul id=\"genres\" class=\"dropdown-menu\">\r\n                        <li id=\"PLATFORM\"><button class=\"dropdown-item\" type=\"button\">PLATFORM</button></li>\r\n                    </ul>\r\n                </span>\r\n            <span style=\"margin-right: 40px\" class=\"dropdown\">\r\n                <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                Visualizza per Anno\r\n                </button>\r\n                <ul id=\"years\" class=\"dropdown-menu\">\r\n                <li id=\"1985\"><button class=\"dropdown-item\" type=\"button\">1985</button></li>\r\n                </ul>\r\n            </span>\r\n    <div style=\"vertical-align: middle;\" class=\"col-md-2 mx-auto\">\r\n        <div class=\"input-group\">\r\n            <input class=\"form-control border-end-0 border rounded-pill\" type=\"search\" placeholder=\"cerca\" id=\"searchTitle\">\r\n            <span class=\"input-group-append\">\r\n            <button id=\"searchButton\" class=\"btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill ms-n5\" type=\"button\">\r\n                    trova\r\n            <i class=\"fa fa-search\"></i>\r\n            </button>\r\n            </span>\r\n        </div>\r\n    </div>\r\n\r\n      <span >\r\n        <button  style=\"color:white\" class=\"btn btn-danger\">\r\n            <img src=\"./img/plus.png\" alt=\"plus\" style=\"width:25px\">\r\n            Inserisci Annuncio\r\n        </button>\r\n      </span>      \r\n             \r\n\r\n</div>\r\n\r\n<div>\r\n    <ul id=\"insertionContent\">\r\n        \r\n    </ul>\r\n    \r\n</div>\r\n<div id=\"pages\">\r\n\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./src/footer/footer.html":
/*!********************************!*\
  !*** ./src/footer/footer.html ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<style>\r\n  .cardfooter {\r\n    width: 99%;\r\n    text-align: center;\r\n    margin: 0;\r\n    position: absolute;\r\n  }\r\n\r\n  li {\r\n    display: inline;\r\n    padding-right: 10px;\r\n    padding-left: 10px;\r\n  }\r\n\r\n\r\n</style>\r\n\r\n<div class=\"cardfooter\">\r\n  <hr>\r\n  <div class=\"card-header\">\r\n    <h3 class=\"card-title\">VideoGame Lover</h3>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <p class=\"card-text\">Testo Aggiuntivo Se Volete</p>\r\n    <ul>\r\n      <li> <a href=\"#\" class=\"btn btn-primary\">Home</a> </li>\r\n      <li> <a href=\"#\" class=\"btn btn-primary\">Paolo</a> </li>\r\n      <li> <a href=\"#\" class=\"btn btn-primary\">Piero</a> </li>\r\n      <li> <a href=\"#\" class=\"btn btn-primary\">About Us</a> </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"card-footer text-muted\">\r\n    <p> ©2023 Paolo Enterprise Inc. | Tutti i diritti riservati (a Pierino) </p>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/gestioneUtenti/gestioneUtenti.html":
/*!************************************************!*\
  !*** ./src/gestioneUtenti/gestioneUtenti.html ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<nav aria-label=\"...\">\r\n    <ul id=\"userList\" class=\"list-group\">\r\n        \r\n    </ul>\r\n    <ul id=\"pagination\" class=\"pagination pagination-sm my-2\">\r\n        \r\n    </ul>\r\n</nav>\r\n");

/***/ }),

/***/ "./src/home/home.html":
/*!****************************!*\
  !*** ./src/home/home.html ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div>\r\n    <img src=\"./img/videogamelover.png\" alt=\"not found\" class=\"headerImg\" id=\"headerImg\">\r\n\r\n</div>\r\n\r\n<h1>Ultimi annunci:</h1>\r\n<h2>Controlla qui gli ultimi annunci</h2>\r\n<div id=\"carouselExampleControls\" class=\"carousel slide\" data-bs-ride=\"carousel\">\r\n    <div class=\"carousel-inner\">\r\n      <div class=\"carousel-item active\">\r\n        \r\n        <div class=\"card\" style=\"margin: 20%;\">\r\n            <img src=\"...\" class=\"card-img-top\" alt=\"...\">\r\n            <div class=\"card-body\">\r\n              <h5 id=\"title1\" class=\"card-title\">Card title</h5>\r\n              <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n              <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n            </div>\r\n          </div>\r\n\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        \r\n        <div class=\"card\" style=\"margin: 20%;\">\r\n            <img src=\"...\" class=\"card-img-top\" alt=\"...\">\r\n            <div class=\"card-body\">\r\n              <h5 id=\"title2\" class=\"card-title\">Card title</h5>\r\n              <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n              <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n            </div>\r\n          </div>\r\n\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        \r\n        <div class=\"card\" style=\"margin: 20%;\">\r\n            <img src=\"...\" class=\"card-img-top\" alt=\"...\">\r\n            <div class=\"card-body\">\r\n              <h5 id=\"title3\" class=\"card-title\">Card title</h5>\r\n              <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n              <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n            </div>\r\n          </div>\r\n\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        \r\n        <div class=\"card\" style=\"margin: 20%;\">\r\n            <img src=\"...\" class=\"card-img-top\" alt=\"...\">\r\n            <div class=\"card-body\">\r\n              <h5 id=\"title4\" class=\"card-title\">Card title</h5>\r\n              <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n              <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n            </div>\r\n          </div>\r\n\r\n      </div>\r\n    </div>\r\n    <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#carouselExampleControls\" data-bs-slide=\"prev\">\r\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"visually-hidden\">Previous</span>\r\n    </button>\r\n    <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#carouselExampleControls\" data-bs-slide=\"next\">\r\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"visually-hidden\">Next</span>\r\n    </button>\r\n  </div>\r\n\r\n\r\n<h1>Chi siamo?</h1>\r\n<h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea adipisci architecto libero alias? Numquam atque beatae quis asperiores necessitatibus est quod voluptate eveniet excepturi molestias fugiat nostrum nihil, eligendi vero.</h2>");

/***/ }),

/***/ "./src/login/login.html":
/*!******************************!*\
  !*** ./src/login/login.html ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"mb-3\">\r\n    <label for=\"usernameSignIn\" class=\"form-label\">Nickname</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"usernameSignIn\">\r\n</div>\r\n<div class=\"mb-3\">\r\n    <label for=\"passwordSignIn\" class=\"form-label\">Password</label>\r\n    <input type=\"password\" class=\"form-control\" id=\"passwordSignIn\">\r\n</div>\r\n<div class=\"mb-3 form-check\">\r\n    <input type=\"checkbox\" class=\"form-check-input\" id=\"rememberMeSignIn\">\r\n    <label class=\"form-check-label\" for=\"rememberMeSignIn\">Ricordami</label>\r\n</div>");

/***/ }),

/***/ "./src/login/loginFooter.html":
/*!************************************!*\
  !*** ./src/login/loginFooter.html ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<button type=\"button\" class=\"btn btn-success\">Accedi</button>\r\n<p>Non sei ancora registrato?</p>\r\n<button id=\"loginSignUp\" type=\"button\" class=\"btn btn-warning\">Registrati</button>\r\n<button type=\"button\" class=\"btn btn-danger\" data-bs-dismiss=\"modal\">Chiudi</button>");

/***/ }),

/***/ "./src/logout/logout.html":
/*!********************************!*\
  !*** ./src/logout/logout.html ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"text-center mb-3\">\r\n    <h3>Oh, ci dispiace che vai via!<br>Torna a trovarci!</h3>\r\n    <img src=\"./img/fadFace.png\" width=\"100\" alt=\"immagine triste\">\r\n</div>");

/***/ }),

/***/ "./src/modal/modal.html":
/*!******************************!*\
  !*** ./src/modal/modal.html ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" aria-labelledby=\"signInModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h1 class=\"modal-title fs-5\" id=\"signInModalLabel\">Minchia Johnny Carrabbaggio</h1>\r\n                <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\r\n            </div>\r\n            <div id=\"myModalBody\" class=\"modal-body\">\r\n                \r\n            </div>\r\n            <div id=\"myModalFooter\" class=\"modal-footer\">\r\n                \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/navbar/navbar.html":
/*!********************************!*\
  !*** ./src/navbar/navbar.html ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--navbar controller icon-->\r\n<button id=\"logo\" class=\"logo-button\"> <img class=\"logo\" src=\"./img/profile.png\" alt=\"logo\"></button>\r\n\r\n<nav>\r\n  <ul>\r\n    <!--navbar buttons-->\r\n    <!--y button-->\r\n    <button id=\"insertions\" class=\"button-one nav-button\">Annunci</button>\r\n    <!--x button-->\r\n    <button id=\"management\" class=\"button-two nav-button\">Gestione Utenti</button>\r\n    <!--a button-->\r\n    <button id=\"bho\" class=\"button-three nav-button\">temp button</button>\r\n    <!--b button-->\r\n    <button id=\"login\" class=\"button-four nav-button\" data-bs-toggle=\"modal\"\r\n      data-bs-target=\"#myModal\">Login</button>\r\n    <!--b button-->\r\n    <button id=\"signOutButton\" class=\"button-four nav-button\" data-bs-toggle=\"modal\"\r\n    data-bs-target=\"#myModal\">Logout</button>\r\n\r\n    <button id=\"profile\" class=\"profile-button\">\r\n      <span class=\"position-absolute top-2 start-90 translate-middle p-2 bg-danger border border-light rounded-circle\">\r\n        <span class=\"visually-hidden\">New alerts</span>\r\n      </span>\r\n      <img class=\"logo profile\" src=\"./img/profile.png\" alt=\"logo\">\r\n    </button>\r\n  </ul>\r\n</nav>");

/***/ }),

/***/ "./src/profiloUtente/profile.html":
/*!****************************************!*\
  !*** ./src/profiloUtente/profile.html ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<h1>TODO: mostrare tutte le info dell'utente</h1>\r\n<h1>TODO: form o altro per cambiare nickname e/o password ecc</h1>\r\n<h1>TODO: possibilità di scegliere i giochi che si possiedono</h1>\r\n");

/***/ }),

/***/ "./src/registrazione/registrazione.html":
/*!**********************************************!*\
  !*** ./src/registrazione/registrazione.html ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<form>\r\n    <div class=\"mb-3\">\r\n        <label for=\"nameSignUp\" class=\"form-label\">Nome</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"nameSignUp\" required>\r\n    </div>\r\n    <div class=\"mb-3\">\r\n        <label for=\"surnameSignUp\" class=\"form-label\">Cognome</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"surnameSignUp\" required>\r\n    </div>\r\n    <div class=\"mb-3\">\r\n        <label for=\"usernameSignUp\" class=\"form-label\">Nickname</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"usernameSignUp\" required>\r\n    </div>\r\n    <div class=\"mb-3\">\r\n        <label for=\"emailSignUp\" class=\"form-label\">Email</label>\r\n        <input type=\"email\" class=\"form-control\" id=\"emailSignUp\" required>\r\n    </div>\r\n    <div class=\"mb-3\">\r\n        <label for=\"passwordSignUp\" class=\"form-label\">Password</label>\r\n        <input type=\"password\" class=\"form-control\" id=\"passwordSignUp\" required>\r\n    </div>\r\n    <div class=\"mb-3\">\r\n        <label for=\"confirm_passwordSignUp\" class=\"form-label\">Conferma Password</label>\r\n        <input type=\"password\" class=\"form-control\" id=\"confirm_passwordSignUp\" required>\r\n    </div>\r\n</form>\r\n<!-- \r\n\r\n\r\n\r\n<div class=\"modal fade\" id=\"signUpModal\" tabindex=\"-1\" aria-labelledby=\"signUpModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"signUpModalLabel\">Registrazione</h5>\r\n                <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form>\r\n                    <div class=\"mb-3\">\r\n                        <label for=\"nameSignUp\" class=\"form-label\">Nome</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"nameSignUp\" required>\r\n                    </div>\r\n                    <div class=\"mb-3\">\r\n                        <label for=\"surnameSignUp\" class=\"form-label\">Cognome</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"surnameSignUp\" required>\r\n                    </div>\r\n                    <div class=\"mb-3\">\r\n                        <label for=\"usernameSignUp\" class=\"form-label\">Nickname</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"usernameSignUp\" required>\r\n                    </div>\r\n                    <div class=\"mb-3\">\r\n                        <label for=\"emailSignUp\" class=\"form-label\">Email</label>\r\n                        <input type=\"email\" class=\"form-control\" id=\"emailSignUp\" required>\r\n                    </div>\r\n                    <div class=\"mb-3\">\r\n                        <label for=\"passwordSignUp\" class=\"form-label\">Password</label>\r\n                        <input type=\"password\" class=\"form-control\" id=\"passwordSignUp\" required>\r\n                    </div>\r\n                    <div class=\"mb-3\">\r\n                        <label for=\"confirm_passwordSignUp\" class=\"form-label\">Conferma Password</label>\r\n                        <input type=\"password\" class=\"form-control\" id=\"confirm_passwordSignUp\" required>\r\n                    </div>\r\n                    <button type=\"button\" id=\"submitSignUp\" class=\"btn btn-success\">Registrati</button>\r\n                </form>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-danger\" data-bs-dismiss=\"modal\">Chiudi</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n -->");

/***/ }),

/***/ "./src/registrazione/registrazioneFooter.html":
/*!****************************************************!*\
  !*** ./src/registrazione/registrazioneFooter.html ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<button id=\"signUpLogin\" type=\"button\" class=\"btn btn-primary\">Accedi</button>\r\n<button type=\"button\" class=\"btn btn-success\" data-bs-dismiss=\"modal\">Registrati</button>\r\n<button type=\"button\" class=\"btn btn-danger\" data-bs-dismiss=\"modal\">Chiudi</button>");

/***/ }),

/***/ "./src/annunci/annunci.ts":
/*!********************************!*\
  !*** ./src/annunci/annunci.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPage": () => (/* binding */ createPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let list = [];
let view = 5;
function createPage() {
    document.getElementById("selectAll").onclick = searchByAll;
    assignFilters();
    getAllInsertions();
    createPagination();
    showResults(1);
}
function searchByAll() {
    getAllInsertions();
    createPagination();
    showResults(1);
}
function assignFilters() {
    let generi = document.getElementById("genres").children;
    for (let g of generi) {
        g.onclick = () => {
            searchByGenre(g.id);
        };
    }
    let anni = document.getElementById("years").children;
    for (let a of anni) {
        a.onclick = () => {
            searchByYear(Number(a.id));
        };
    }
    let searchTitle = document.getElementById("searchTitle");
    let searchButton = document.getElementById("searchButton");
    searchButton.onclick = () => {
        searchByTitle(searchTitle.value);
    };
}
function searchByTitle(title) {
    console.log(title);
    let filteredList = [];
    for (let element of list) {
        let titolo = element.title;
        if (titolo.toUpperCase().includes(title.toUpperCase())) {
            filteredList.push(element);
        }
    }
    list = [];
    list = filteredList;
    createPagination();
    showResults(1);
}
function searchByGenre(genre) {
    console.log(genre);
    let filteredList = [];
    for (let element of list) {
        if (element.genre == genre) {
            filteredList.push(element);
        }
    }
    list = [];
    list = filteredList;
    createPagination();
    showResults(1);
}
function searchByYear(year) {
    console.log(year);
    let filteredList = [];
    for (let element of list) {
        if (element.year == year) {
            filteredList.push(element);
        }
    }
    list = [];
    list = filteredList;
    createPagination();
    showResults(1);
}
function getAllInsertions() {
    list = [];
    const gioco1 = {
        title: "SuperMario",
        description: "Idraulico Innamorato",
        genre: "PLATFORM",
        year: "1985"
    };
    const gioco2 = {
        title: "Zelda",
        description: "Cavaliere Innamorato",
        genre: "AVVENTURA",
        year: "1986"
    };
    for (let i = 0; i < 27; i++) {
        if (i != 17) {
            list.push(gioco2);
        }
        else {
            list.push(gioco1);
        }
    }
    /*QUESTO E' LA FUNZIONE GIUSTA NON FAMO CHE SBAGLIATE! */
    /*Fetch a backend con tutti gli annunci, aggiorna la lista list*/
    // list=[];
    // fetch('/TipoAnnunciCheneso')
    // .then((response) => response.json())
    // .then((data) => {
    //     for(let d of data){
    //         list.push(d);
    //     }
    // });
}
/*da qui in poi le funzioni servono a
creare la pagina una volta cliccato
sul bottone annunci e a ricaricarle*/
function createPagination() {
    let size = list.length;
    let tabs = Math.ceil(size / view);
    let pages = document.getElementById("pages");
    pages.innerHTML = "";
    for (let i = 1; i <= tabs; i++) {
        let button = document.createElement("button");
        button.innerHTML = "" + i;
        button.setAttribute("class", "btn btn-primary");
        button.onclick = () => {
            showResults(i);
        };
        document.getElementById("pages").append(button);
    }
}
function showResults(i) {
    let content = document.getElementById("insertionContent");
    content.innerHTML = "";
    let start = (i - 1) * view;
    let stop = (i * view) - 1;
    for (start; start <= stop; start++) {
        try {
            let li = document.createElement("li");
            let title = document.createElement("p");
            let description = document.createElement("p");
            let genre = document.createElement("p");
            let year = document.createElement("p");
            title.innerHTML = list[start].title;
            description.innerHTML = list[start].description;
            genre.innerHTML = list[start].genre;
            year.innerHTML = list[start].title;
            li.appendChild(title);
            li.appendChild(description);
            li.appendChild(genre);
            li.appendChild(year);
            content.append(li);
        }
        catch (_a) {
            console.log("eh niente ci ho provato");
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPage);


/***/ }),

/***/ "./src/footer/footer.ts":
/*!******************************!*\
  !*** ./src/footer/footer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFot": () => (/* binding */ createFot),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _footer_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.html */ "./src/footer/footer.html");

function createFot() {
    document.getElementById("footer").innerHTML = _footer_html__WEBPACK_IMPORTED_MODULE_0__["default"];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFot);


/***/ }),

/***/ "./src/gestioneUtenti/gestioneUtenti.ts":
/*!**********************************************!*\
  !*** ./src/gestioneUtenti/gestioneUtenti.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getAllUsers": () => (/* binding */ getAllUsers)
/* harmony export */ });
let users = [];
let view = 5;
function showUsers(num) {
    let list = document.getElementById("userList");
    list.innerHTML = "";
    for (let i = (num - 1) * view; i < num * view; i++) {
        if (i >= users.length) {
            return;
        }
        let li = document.createElement("li");
        li.setAttribute('class', 'list-group-item');
        li.setAttribute('onmouseover', "setAttribute('class', 'list-group-item active')");
        li.setAttribute('onmouseout', "setAttribute('class', 'list-group-item')");
        let span = document.createElement("span");
        span.setAttribute("class", "float-end");
        let btn_ban = document.createElement("button");
        let btn_adm = document.createElement("button");
        btn_ban.setAttribute("class", "btn btn-danger btn-sm");
        btn_adm.setAttribute("class", "btn btn-success btn-sm");
        btn_ban.innerHTML = "Banna";
        btn_adm.innerHTML = "Rendi Admin";
        btn_ban.onclick = () => { kickHisAssOutOfThisSite(users[i].userId); };
        btn_adm.onclick = () => { makeHimAdmin(users[i].userId); };
        span.append(btn_adm, btn_ban);
        li.innerHTML = users[i].username + " | " + users[i].name + " " + users[i].surname + " | " + users[i].email + " | " + users[i].rating + "<i class='fa-regular fa-star'></i>";
        li.appendChild(span);
        list.appendChild(li);
    }
}
function getAllUsers() {
    fetch("/user")
        .then((response) => response.json())
        .then((data) => {
        users = [];
        for (let element of data) {
            users.push(element);
        }
        createPagination();
        showUsers(1);
    });
}
/*
<li class="page-item active" aria-current="page">
            <span class="page-link">1</span>
        </li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
*/
function createPagination() {
    document.getElementById("pagination").innerHTML = "";
    let numberOfPages = Math.ceil(users.length / view);
    for (let i = 0; i < numberOfPages; i++) {
        let li = document.createElement("li");
        if (i == 0) {
            li.setAttribute("class", "page-item active");
            li.setAttribute("aria-current", "page");
        }
        else {
            li.setAttribute("class", "page-item");
        }
        let btn = document.createElement("button");
        btn.setAttribute("class", "page-link");
        btn.onclick = () => {
            let allLi = document.getElementById("pagination").children;
            for (let oneLi of allLi) {
                oneLi.setAttribute("class", "page-item");
                oneLi.removeAttribute("aria-current");
            }
            li.setAttribute("class", "page-item active");
            li.setAttribute("aria-current", "page");
            showUsers(i + 1);
        };
        btn.innerHTML = "" + (i + 1);
        li.appendChild(btn);
        document.getElementById("pagination").appendChild(li);
    }
}
function makeHimAdmin(id) {
    const request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(id)
    };
    fetch("/admin", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id })
    })
        .then((response) => response.json())
        .then((data) => { console.log("admin creato? " + data); getAllUsers(); });
}
function kickHisAssOutOfThisSite(id) {
    const request = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id })
    };
    fetch("/user", request)
        .then((response) => response.json())
        .then((data) => { console.log("user cancellato? " + data); getAllUsers(); });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllUsers);


/***/ }),

/***/ "./src/home/home.ts":
/*!**************************!*\
  !*** ./src/home/home.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHome": () => (/* binding */ createHome),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.html */ "./src/home/home.html");

function createHome() {
    let main = document.getElementById('main');
    main.innerHTML += _home_html__WEBPACK_IMPORTED_MODULE_0__["default"];
    let head = document.getElementsByTagName('head')[0];
    head.innerHTML += '<link rel="stylesheet" href="./home.css">';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);
/*
async function gettitle(title: string):{
    const response = await fetch()
    const data = await response.json();
    return data;

}
*/ 


/***/ }),

/***/ "./src/modal/modal.ts":
/*!****************************!*\
  !*** ./src/modal/modal.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createModal": () => (/* binding */ createModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.html */ "./src/modal/modal.html");
/* harmony import */ var _login_login_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/login.html */ "./src/login/login.html");
/* harmony import */ var _login_loginFooter_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/loginFooter.html */ "./src/login/loginFooter.html");
/* harmony import */ var _registrazione_registrazione_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../registrazione/registrazione.html */ "./src/registrazione/registrazione.html");
/* harmony import */ var _registrazione_registrazioneFooter_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../registrazione/registrazioneFooter.html */ "./src/registrazione/registrazioneFooter.html");
/* harmony import */ var _logout_logout_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../logout/logout.html */ "./src/logout/logout.html");






function createModal() {
    let divModal = document.createElement("div");
    divModal.innerHTML = _modal_html__WEBPACK_IMPORTED_MODULE_0__["default"];
    document.body.appendChild(divModal);
    showLogInModal();
    document.getElementById("login").onclick = showLogInModal;
    document.getElementById("signOutButton").onclick = showLogOutModal;
}
function showSignUpModal() {
    document.getElementById("myModalBody").innerHTML = _registrazione_registrazione_html__WEBPACK_IMPORTED_MODULE_3__["default"];
    document.getElementById("myModalFooter").innerHTML = _registrazione_registrazioneFooter_html__WEBPACK_IMPORTED_MODULE_4__["default"];
    document.getElementById("signUpLogin").onclick = showLogInModal;
}
function showLogInModal() {
    document.getElementById("myModalBody").innerHTML = _login_login_html__WEBPACK_IMPORTED_MODULE_1__["default"];
    document.getElementById("myModalFooter").innerHTML = _login_loginFooter_html__WEBPACK_IMPORTED_MODULE_2__["default"];
    document.getElementById("loginSignUp").onclick = showSignUpModal;
}
function showLogOutModal() {
    document.getElementById("myModalBody").innerHTML = _logout_logout_html__WEBPACK_IMPORTED_MODULE_5__["default"];
    document.getElementById("myModalFooter").innerHTML = "";
    //TODO: changeNavBar
}
function tryToSignUp() {
    if (!validatePassword2()) {
        return;
    }
    console.log("e facciamola sta fecci");
    const user = {
        username: "",
        password: "",
        name: "",
        surname: "",
        email: ""
    };
    //fetch("/account");
}
function tryToLogIn() {
    //TODO
}
function tryToLogOut() {
    //TODO
}
function validatePassword() {
    let password = document.getElementById("passwordSignUp");
    let confirm_password = document.getElementById("confirm_passwordSignUp");
    if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
    }
    else {
        confirm_password.setCustomValidity('');
    }
}
function validatePassword2() {
    console.log("ciao da validate2");
    let password = document.getElementById("passwordSignUp");
    let confirm_password = document.getElementById("confirm_passwordSignUp");
    confirm_password.setAttribute("style", "");
    if (password.value != confirm_password.value) {
        console.log("ciao dall'if");
        confirm_password.setAttribute("style", "border-color: red;");
        return false;
    }
    return true;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createModal);


/***/ }),

/***/ "./src/navbar/navbar.ts":
/*!******************************!*\
  !*** ./src/navbar/navbar.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNav": () => (/* binding */ createNav),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "setNav": () => (/* binding */ setNav)
/* harmony export */ });
/* harmony import */ var _navbar_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.html */ "./src/navbar/navbar.html");
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal/modal */ "./src/modal/modal.ts");
/* harmony import */ var _annunci_annunci_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../annunci/annunci.html */ "./src/annunci/annunci.html");
/* harmony import */ var _annunci_annunci__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../annunci/annunci */ "./src/annunci/annunci.ts");
/* harmony import */ var _home_home_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/home.html */ "./src/home/home.html");
/* harmony import */ var _profiloUtente_profile_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../profiloUtente/profile.html */ "./src/profiloUtente/profile.html");
/* harmony import */ var _gestioneUtenti_gestioneUtenti_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../gestioneUtenti/gestioneUtenti.html */ "./src/gestioneUtenti/gestioneUtenti.html");
/* harmony import */ var _gestioneUtenti_gestioneUtenti__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../gestioneUtenti/gestioneUtenti */ "./src/gestioneUtenti/gestioneUtenti.ts");








function createNav() {
    document.getElementById("header").innerHTML = _navbar_html__WEBPACK_IMPORTED_MODULE_0__["default"];
    (0,_modal_modal__WEBPACK_IMPORTED_MODULE_1__["default"])();
    document.getElementById("logo").onclick = () => {
        document.getElementById("main").innerHTML = _home_home_html__WEBPACK_IMPORTED_MODULE_4__["default"];
    };
    document.getElementById("insertions").onclick = () => {
        document.getElementById("main").innerHTML = _annunci_annunci_html__WEBPACK_IMPORTED_MODULE_2__["default"];
        (0,_annunci_annunci__WEBPACK_IMPORTED_MODULE_3__["default"])();
    };
    document.getElementById("management").onclick = () => {
        document.getElementById("main").innerHTML = _gestioneUtenti_gestioneUtenti_html__WEBPACK_IMPORTED_MODULE_6__["default"];
        (0,_gestioneUtenti_gestioneUtenti__WEBPACK_IMPORTED_MODULE_7__["default"])();
    };
    document.getElementById("profile").onclick = () => {
        document.getElementById("main").innerHTML = _profiloUtente_profile_html__WEBPACK_IMPORTED_MODULE_5__["default"];
    };
}
function setNav() {
    document.getElementById("header").innerHTML = _navbar_html__WEBPACK_IMPORTED_MODULE_0__["default"];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNav);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home */ "./src/home/home.ts");
/* harmony import */ var _navbar_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar */ "./src/navbar/navbar.ts");
/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer */ "./src/footer/footer.ts");



(0,_navbar_navbar__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_home_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_footer_footer__WEBPACK_IMPORTED_MODULE_2__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUM7QUFDRTtBQUNBO0FBR3ZDLDBEQUFTLEVBQUUsQ0FBQztBQUNaLHNEQUFVLEVBQUUsQ0FBQztBQUNiLDBEQUFTLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2FubnVuY2kvYW5udW5jaS5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2Zvb3Rlci9mb290ZXIuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9nZXN0aW9uZVV0ZW50aS9nZXN0aW9uZVV0ZW50aS5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2hvbWUvaG9tZS5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2xvZ2luL2xvZ2luLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvbG9naW4vbG9naW5Gb290ZXIuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9sb2dvdXQvbG9nb3V0Lmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvbW9kYWwvbW9kYWwuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9uYXZiYXIvbmF2YmFyLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvcHJvZmlsb1V0ZW50ZS9wcm9maWxlLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvcmVnaXN0cmF6aW9uZS9yZWdpc3RyYXppb25lLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvcmVnaXN0cmF6aW9uZS9yZWdpc3RyYXppb25lRm9vdGVyLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvYW5udW5jaS9hbm51bmNpLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2Zvb3Rlci9mb290ZXIudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvZ2VzdGlvbmVVdGVudGkvZ2VzdGlvbmVVdGVudGkudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvaG9tZS9ob21lLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL21vZGFsL21vZGFsLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL25hdmJhci9uYXZiYXIudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjxoMT5UT0RPIChmaWx0cm8pIChib3R0b25pIG8gc2VsZWN0KSBwZXIgdmlzdWFsaXp6YXJlIGdsaSBhbm51bmNpIHBlciBjYXRlZ29yaWEgbyBhbm5vPC9oMT5cXHJcXG48aDE+VE9ETyAocmljZXJjYSkgKGlucHV0IHR5cGUgc2VhcmNoKSBwZXIgdmlzdWFsaXp6YXJlIGdsaSBhbm51bmNpIGNvbiBxdWVsIG5vbWUgbmVsIHRpdG9sbzwvaDE+XFxyXFxuPGgxPlRPRE8gcmVhbGl6emFyZSB1bmEgdmlzdGEgZGkgdHV0dGkgZ2xpIGFubnVuY2kgZGFsIHBpw7kgcmVjZW50ZSBkaXZpc2kgaW4gcGFnaW5lIGRhIDUgKHZlZGVyZSBsaWJyYXJ5KTwvaDE+XFxyXFxuPGgxPlRPRE8gdGFzdG8gY3JlYSBhbnVubmNpbyBwZXIgbW9zdHJhcmUgdGVtcGxhdGUgY3JlYUFubnVuY2lvPC9oMT5cXHJcXG5cXHJcXG48ZGl2IHN0eWxlPVxcXCJkaXNwbGF5OiBmbGV4O1xcXCI+XFxyXFxuXFxyXFxuICAgIDxzcGFuIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IDQwcHhcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBpZD1cXFwic2VsZWN0QWxsXFxcIj5WaXN1YWxpenphIHR1dHRpPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9zcGFuPiA8IS0tZnVuemlvbmUgY2hlIHByZW5kZSB0dXR0aSBnbGkgYW5udW5jaSBlIGxpIHNjaGlhZmZhIG5lbCBjb250ZW51dG8gYW5udW5jaS0tPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiA0MHB4XFxcIiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnkgZHJvcGRvd24tdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgVmlzdWFsaXp6YSBwZXIgR2VuZXJlXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx1bCBpZD1cXFwiZ2VucmVzXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVxcXCJQTEFURk9STVxcXCI+PGJ1dHRvbiBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj5QTEFURk9STTwvYnV0dG9uPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9XFxcIm1hcmdpbi1yaWdodDogNDBweFxcXCIgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnkgZHJvcGRvd24tdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBWaXN1YWxpenphIHBlciBBbm5vXFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8dWwgaWQ9XFxcInllYXJzXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSBpZD1cXFwiMTk4NVxcXCI+PGJ1dHRvbiBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj4xOTg1PC9idXR0b24+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgIDxkaXYgc3R5bGU9XFxcInZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxcIiBjbGFzcz1cXFwiY29sLW1kLTIgbXgtYXV0b1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgYm9yZGVyLWVuZC0wIGJvcmRlciByb3VuZGVkLXBpbGxcXFwiIHR5cGU9XFxcInNlYXJjaFxcXCIgcGxhY2Vob2xkZXI9XFxcImNlcmNhXFxcIiBpZD1cXFwic2VhcmNoVGl0bGVcXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hcHBlbmRcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcInNlYXJjaEJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgYmctd2hpdGUgYm9yZGVyLWJvdHRvbS0wIGJvcmRlciByb3VuZGVkLXBpbGwgbXMtbjVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICB0cm92YVxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1zZWFyY2hcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgPHNwYW4gPlxcclxcbiAgICAgICAgPGJ1dHRvbiAgc3R5bGU9XFxcImNvbG9yOndoaXRlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIuL2ltZy9wbHVzLnBuZ1xcXCIgYWx0PVxcXCJwbHVzXFxcIiBzdHlsZT1cXFwid2lkdGg6MjVweFxcXCI+XFxyXFxuICAgICAgICAgICAgSW5zZXJpc2NpIEFubnVuY2lvXFxyXFxuICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICA8L3NwYW4+ICAgICAgXFxyXFxuICAgICAgICAgICAgIFxcclxcblxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXY+XFxyXFxuICAgIDx1bCBpZD1cXFwiaW5zZXJ0aW9uQ29udGVudFxcXCI+XFxyXFxuICAgICAgICBcXHJcXG4gICAgPC91bD5cXHJcXG4gICAgXFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBpZD1cXFwicGFnZXNcXFwiPlxcclxcblxcclxcbjwvZGl2PlxcclxcblxcclxcblxcclxcblxcclxcblwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPHN0eWxlPlxcclxcbiAgLmNhcmRmb290ZXIge1xcclxcbiAgICB3aWR0aDogOTklO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgfVxcclxcblxcclxcbiAgbGkge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG48L3N0eWxlPlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImNhcmRmb290ZXJcXFwiPlxcclxcbiAgPGhyPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiY2FyZC1oZWFkZXJcXFwiPlxcclxcbiAgICA8aDMgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPlZpZGVvR2FtZSBMb3ZlcjwvaDM+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPlRlc3RvIEFnZ2l1bnRpdm8gU2UgVm9sZXRlPC9wPlxcclxcbiAgICA8dWw+XFxyXFxuICAgICAgPGxpPiA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5Ib21lPC9hPiA8L2xpPlxcclxcbiAgICAgIDxsaT4gPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+UGFvbG88L2E+IDwvbGk+XFxyXFxuICAgICAgPGxpPiA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5QaWVybzwvYT4gPC9saT5cXHJcXG4gICAgICA8bGk+IDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPkFib3V0IFVzPC9hPiA8L2xpPlxcclxcbiAgICA8L3VsPlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWZvb3RlciB0ZXh0LW11dGVkXFxcIj5cXHJcXG4gICAgPHA+IMKpMjAyMyBQYW9sbyBFbnRlcnByaXNlIEluYy4gfCBUdXR0aSBpIGRpcml0dGkgcmlzZXJ2YXRpIChhIFBpZXJpbm8pIDwvcD5cXHJcXG4gIDwvZGl2PlxcclxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPG5hdiBhcmlhLWxhYmVsPVxcXCIuLi5cXFwiPlxcclxcbiAgICA8dWwgaWQ9XFxcInVzZXJMaXN0XFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cFxcXCI+XFxyXFxuICAgICAgICBcXHJcXG4gICAgPC91bD5cXHJcXG4gICAgPHVsIGlkPVxcXCJwYWdpbmF0aW9uXFxcIiBjbGFzcz1cXFwicGFnaW5hdGlvbiBwYWdpbmF0aW9uLXNtIG15LTJcXFwiPlxcclxcbiAgICAgICAgXFxyXFxuICAgIDwvdWw+XFxyXFxuPC9uYXY+XFxyXFxuXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2PlxcclxcbiAgICA8aW1nIHNyYz1cXFwiLi9pbWcvdmlkZW9nYW1lbG92ZXIucG5nXFxcIiBhbHQ9XFxcIm5vdCBmb3VuZFxcXCIgY2xhc3M9XFxcImhlYWRlckltZ1xcXCIgaWQ9XFxcImhlYWRlckltZ1xcXCI+XFxyXFxuXFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGgxPlVsdGltaSBhbm51bmNpOjwvaDE+XFxyXFxuPGgyPkNvbnRyb2xsYSBxdWkgZ2xpIHVsdGltaSBhbm51bmNpPC9oMj5cXHJcXG48ZGl2IGlkPVxcXCJjYXJvdXNlbEV4YW1wbGVDb250cm9sc1xcXCIgY2xhc3M9XFxcImNhcm91c2VsIHNsaWRlXFxcIiBkYXRhLWJzLXJpZGU9XFxcImNhcm91c2VsXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY2Fyb3VzZWwtaW5uZXJcXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcm91c2VsLWl0ZW0gYWN0aXZlXFxcIj5cXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCIgc3R5bGU9XFxcIm1hcmdpbjogMjAlO1xcXCI+XFxyXFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4uLlxcXCIgY2xhc3M9XFxcImNhcmQtaW1nLXRvcFxcXCIgYWx0PVxcXCIuLi5cXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICA8aDUgaWQ9XFxcInRpdGxlMVxcXCIgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPkNhcmQgdGl0bGU8L2g1PlxcclxcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+U29tZSBxdWljayBleGFtcGxlIHRleHQgdG8gYnVpbGQgb24gdGhlIGNhcmQgdGl0bGUgYW5kIG1ha2UgdXAgdGhlIGJ1bGsgb2YgdGhlIGNhcmQncyBjb250ZW50LjwvcD5cXHJcXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPkdvIHNvbWV3aGVyZTwvYT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2Fyb3VzZWwtaXRlbVxcXCI+XFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiIHN0eWxlPVxcXCJtYXJnaW46IDIwJTtcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIuLi5cXFwiIGNsYXNzPVxcXCJjYXJkLWltZy10b3BcXFwiIGFsdD1cXFwiLi4uXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgPGg1IGlkPVxcXCJ0aXRsZTJcXFwiIGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5DYXJkIHRpdGxlPC9oNT5cXHJcXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPlNvbWUgcXVpY2sgZXhhbXBsZSB0ZXh0IHRvIGJ1aWxkIG9uIHRoZSBjYXJkIHRpdGxlIGFuZCBtYWtlIHVwIHRoZSBidWxrIG9mIHRoZSBjYXJkJ3MgY29udGVudC48L3A+XFxyXFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5HbyBzb21ld2hlcmU8L2E+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcm91c2VsLWl0ZW1cXFwiPlxcclxcbiAgICAgICAgXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIiBzdHlsZT1cXFwibWFyZ2luOiAyMCU7XFxcIj5cXHJcXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi4uXFxcIiBjbGFzcz1cXFwiY2FyZC1pbWctdG9wXFxcIiBhbHQ9XFxcIi4uLlxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxoNSBpZD1cXFwidGl0bGUzXFxcIiBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+Q2FyZCB0aXRsZTwvaDU+XFxyXFxuICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj5Tb21lIHF1aWNrIGV4YW1wbGUgdGV4dCB0byBidWlsZCBvbiB0aGUgY2FyZCB0aXRsZSBhbmQgbWFrZSB1cCB0aGUgYnVsayBvZiB0aGUgY2FyZCdzIGNvbnRlbnQuPC9wPlxcclxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+R28gc29tZXdoZXJlPC9hPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJvdXNlbC1pdGVtXFxcIj5cXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCIgc3R5bGU9XFxcIm1hcmdpbjogMjAlO1xcXCI+XFxyXFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4uLlxcXCIgY2xhc3M9XFxcImNhcmQtaW1nLXRvcFxcXCIgYWx0PVxcXCIuLi5cXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICA8aDUgaWQ9XFxcInRpdGxlNFxcXCIgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPkNhcmQgdGl0bGU8L2g1PlxcclxcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+U29tZSBxdWljayBleGFtcGxlIHRleHQgdG8gYnVpbGQgb24gdGhlIGNhcmQgdGl0bGUgYW5kIG1ha2UgdXAgdGhlIGJ1bGsgb2YgdGhlIGNhcmQncyBjb250ZW50LjwvcD5cXHJcXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPkdvIHNvbWV3aGVyZTwvYT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYXJvdXNlbC1jb250cm9sLXByZXZcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10YXJnZXQ9XFxcIiNjYXJvdXNlbEV4YW1wbGVDb250cm9sc1xcXCIgZGF0YS1icy1zbGlkZT1cXFwicHJldlxcXCI+XFxyXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPlByZXZpb3VzPC9zcGFuPlxcclxcbiAgICA8L2J1dHRvbj5cXHJcXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2Fyb3VzZWwtY29udHJvbC1uZXh0XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdGFyZ2V0PVxcXCIjY2Fyb3VzZWxFeGFtcGxlQ29udHJvbHNcXFwiIGRhdGEtYnMtc2xpZGU9XFxcIm5leHRcXFwiPlxcclxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvblxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICA8c3BhbiBjbGFzcz1cXFwidmlzdWFsbHktaGlkZGVuXFxcIj5OZXh0PC9zcGFuPlxcclxcbiAgICA8L2J1dHRvbj5cXHJcXG4gIDwvZGl2PlxcclxcblxcclxcblxcclxcbjxoMT5DaGkgc2lhbW8/PC9oMT5cXHJcXG48aDI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0LCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEVhIGFkaXBpc2NpIGFyY2hpdGVjdG8gbGliZXJvIGFsaWFzPyBOdW1xdWFtIGF0cXVlIGJlYXRhZSBxdWlzIGFzcGVyaW9yZXMgbmVjZXNzaXRhdGlidXMgZXN0IHF1b2Qgdm9sdXB0YXRlIGV2ZW5pZXQgZXhjZXB0dXJpIG1vbGVzdGlhcyBmdWdpYXQgbm9zdHJ1bSBuaWhpbCwgZWxpZ2VuZGkgdmVyby48L2gyPlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgIDxsYWJlbCBmb3I9XFxcInVzZXJuYW1lU2lnbkluXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+Tmlja25hbWU8L2xhYmVsPlxcclxcbiAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInVzZXJuYW1lU2lnbkluXFxcIj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgPGxhYmVsIGZvcj1cXFwicGFzc3dvcmRTaWduSW5cXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5QYXNzd29yZDwvbGFiZWw+XFxyXFxuICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInBhc3N3b3JkU2lnbkluXFxcIj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJtYi0zIGZvcm0tY2hlY2tcXFwiPlxcclxcbiAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWlucHV0XFxcIiBpZD1cXFwicmVtZW1iZXJNZVNpZ25JblxcXCI+XFxyXFxuICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJyZW1lbWJlck1lU2lnbkluXFxcIj5SaWNvcmRhbWk8L2xhYmVsPlxcclxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiPkFjY2VkaTwvYnV0dG9uPlxcclxcbjxwPk5vbiBzZWkgYW5jb3JhIHJlZ2lzdHJhdG8/PC9wPlxcclxcbjxidXR0b24gaWQ9XFxcImxvZ2luU2lnblVwXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiPlJlZ2lzdHJhdGk8L2J1dHRvbj5cXHJcXG48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiBkYXRhLWJzLWRpc21pc3M9XFxcIm1vZGFsXFxcIj5DaGl1ZGk8L2J1dHRvbj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgY2xhc3M9XFxcInRleHQtY2VudGVyIG1iLTNcXFwiPlxcclxcbiAgICA8aDM+T2gsIGNpIGRpc3BpYWNlIGNoZSB2YWkgdmlhITxicj5Ub3JuYSBhIHRyb3ZhcmNpITwvaDM+XFxyXFxuICAgIDxpbWcgc3JjPVxcXCIuL2ltZy9mYWRGYWNlLnBuZ1xcXCIgd2lkdGg9XFxcIjEwMFxcXCIgYWx0PVxcXCJpbW1hZ2luZSB0cmlzdGVcXFwiPlxcclxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgaWQ9XFxcIm15TW9kYWxcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJzaWduSW5Nb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctY2VudGVyZWRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVxcXCJtb2RhbC10aXRsZSBmcy01XFxcIiBpZD1cXFwic2lnbkluTW9kYWxMYWJlbFxcXCI+TWluY2hpYSBKb2hubnkgQ2FycmFiYmFnZ2lvPC9oMT5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4tY2xvc2VcXFwiIGRhdGEtYnMtZGlzbWlzcz1cXFwibW9kYWxcXFwiIGFyaWEtbGFiZWw9XFxcIkNsb3NlXFxcIj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGlkPVxcXCJteU1vZGFsQm9keVxcXCIgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGlkPVxcXCJteU1vZGFsRm9vdGVyXFxcIiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8IS0tbmF2YmFyIGNvbnRyb2xsZXIgaWNvbi0tPlxcclxcbjxidXR0b24gaWQ9XFxcImxvZ29cXFwiIGNsYXNzPVxcXCJsb2dvLWJ1dHRvblxcXCI+IDxpbWcgY2xhc3M9XFxcImxvZ29cXFwiIHNyYz1cXFwiLi9pbWcvcHJvZmlsZS5wbmdcXFwiIGFsdD1cXFwibG9nb1xcXCI+PC9idXR0b24+XFxyXFxuXFxyXFxuPG5hdj5cXHJcXG4gIDx1bD5cXHJcXG4gICAgPCEtLW5hdmJhciBidXR0b25zLS0+XFxyXFxuICAgIDwhLS15IGJ1dHRvbi0tPlxcclxcbiAgICA8YnV0dG9uIGlkPVxcXCJpbnNlcnRpb25zXFxcIiBjbGFzcz1cXFwiYnV0dG9uLW9uZSBuYXYtYnV0dG9uXFxcIj5Bbm51bmNpPC9idXR0b24+XFxyXFxuICAgIDwhLS14IGJ1dHRvbi0tPlxcclxcbiAgICA8YnV0dG9uIGlkPVxcXCJtYW5hZ2VtZW50XFxcIiBjbGFzcz1cXFwiYnV0dG9uLXR3byBuYXYtYnV0dG9uXFxcIj5HZXN0aW9uZSBVdGVudGk8L2J1dHRvbj5cXHJcXG4gICAgPCEtLWEgYnV0dG9uLS0+XFxyXFxuICAgIDxidXR0b24gaWQ9XFxcImJob1xcXCIgY2xhc3M9XFxcImJ1dHRvbi10aHJlZSBuYXYtYnV0dG9uXFxcIj50ZW1wIGJ1dHRvbjwvYnV0dG9uPlxcclxcbiAgICA8IS0tYiBidXR0b24tLT5cXHJcXG4gICAgPGJ1dHRvbiBpZD1cXFwibG9naW5cXFwiIGNsYXNzPVxcXCJidXR0b24tZm91ciBuYXYtYnV0dG9uXFxcIiBkYXRhLWJzLXRvZ2dsZT1cXFwibW9kYWxcXFwiXFxyXFxuICAgICAgZGF0YS1icy10YXJnZXQ9XFxcIiNteU1vZGFsXFxcIj5Mb2dpbjwvYnV0dG9uPlxcclxcbiAgICA8IS0tYiBidXR0b24tLT5cXHJcXG4gICAgPGJ1dHRvbiBpZD1cXFwic2lnbk91dEJ1dHRvblxcXCIgY2xhc3M9XFxcImJ1dHRvbi1mb3VyIG5hdi1idXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJtb2RhbFxcXCJcXHJcXG4gICAgZGF0YS1icy10YXJnZXQ9XFxcIiNteU1vZGFsXFxcIj5Mb2dvdXQ8L2J1dHRvbj5cXHJcXG5cXHJcXG4gICAgPGJ1dHRvbiBpZD1cXFwicHJvZmlsZVxcXCIgY2xhc3M9XFxcInByb2ZpbGUtYnV0dG9uXFxcIj5cXHJcXG4gICAgICA8c3BhbiBjbGFzcz1cXFwicG9zaXRpb24tYWJzb2x1dGUgdG9wLTIgc3RhcnQtOTAgdHJhbnNsYXRlLW1pZGRsZSBwLTIgYmctZGFuZ2VyIGJvcmRlciBib3JkZXItbGlnaHQgcm91bmRlZC1jaXJjbGVcXFwiPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+TmV3IGFsZXJ0czwvc3Bhbj5cXHJcXG4gICAgICA8L3NwYW4+XFxyXFxuICAgICAgPGltZyBjbGFzcz1cXFwibG9nbyBwcm9maWxlXFxcIiBzcmM9XFxcIi4vaW1nL3Byb2ZpbGUucG5nXFxcIiBhbHQ9XFxcImxvZ29cXFwiPlxcclxcbiAgICA8L2J1dHRvbj5cXHJcXG4gIDwvdWw+XFxyXFxuPC9uYXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8aDE+VE9ETzogbW9zdHJhcmUgdHV0dGUgbGUgaW5mbyBkZWxsJ3V0ZW50ZTwvaDE+XFxyXFxuPGgxPlRPRE86IGZvcm0gbyBhbHRybyBwZXIgY2FtYmlhcmUgbmlja25hbWUgZS9vIHBhc3N3b3JkIGVjYzwvaDE+XFxyXFxuPGgxPlRPRE86IHBvc3NpYmlsaXTDoCBkaSBzY2VnbGllcmUgaSBnaW9jaGkgY2hlIHNpIHBvc3NpZWRvbm88L2gxPlxcclxcblwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGZvcm0+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwibmFtZVNpZ25VcFxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPk5vbWU8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJuYW1lU2lnblVwXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwic3VybmFtZVNpZ25VcFxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPkNvZ25vbWU8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJzdXJuYW1lU2lnblVwXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwidXNlcm5hbWVTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5OaWNrbmFtZTwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInVzZXJuYW1lU2lnblVwXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiZW1haWxTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5FbWFpbDwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJlbWFpbFNpZ25VcFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcInBhc3N3b3JkU2lnblVwXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+UGFzc3dvcmQ8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwicGFzc3dvcmRTaWduVXBcXFwiIHJlcXVpcmVkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJjb25maXJtX3Bhc3N3b3JkU2lnblVwXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+Q29uZmVybWEgUGFzc3dvcmQ8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiY29uZmlybV9wYXNzd29yZFNpZ25VcFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZm9ybT5cXHJcXG48IS0tIFxcclxcblxcclxcblxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIGlkPVxcXCJzaWduVXBNb2RhbFxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcInNpZ25VcE1vZGFsTGFiZWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1jZW50ZXJlZFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIiBpZD1cXFwic2lnblVwTW9kYWxMYWJlbFxcXCI+UmVnaXN0cmF6aW9uZTwvaDU+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuLWNsb3NlXFxcIiBkYXRhLWJzLWRpc21pc3M9XFxcIm1vZGFsXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCI+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxmb3JtPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibmFtZVNpZ25VcFxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPk5vbWU8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwibmFtZVNpZ25VcFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInN1cm5hbWVTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5Db2dub21lPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInN1cm5hbWVTaWduVXBcXFwiIHJlcXVpcmVkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJ1c2VybmFtZVNpZ25VcFxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPk5pY2tuYW1lPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInVzZXJuYW1lU2lnblVwXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiZW1haWxTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5FbWFpbDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiZW1haWxTaWduVXBcXFwiIHJlcXVpcmVkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJwYXNzd29yZFNpZ25VcFxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPlBhc3N3b3JkPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJwYXNzd29yZFNpZ25VcFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImNvbmZpcm1fcGFzc3dvcmRTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5Db25mZXJtYSBQYXNzd29yZDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiY29uZmlybV9wYXNzd29yZFNpZ25VcFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBpZD1cXFwic3VibWl0U2lnblVwXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIj5SZWdpc3RyYXRpPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDwvZm9ybT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiBkYXRhLWJzLWRpc21pc3M9XFxcIm1vZGFsXFxcIj5DaGl1ZGk8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG4gLS0+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8YnV0dG9uIGlkPVxcXCJzaWduVXBMb2dpblxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5BY2NlZGk8L2J1dHRvbj5cXHJcXG48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgZGF0YS1icy1kaXNtaXNzPVxcXCJtb2RhbFxcXCI+UmVnaXN0cmF0aTwvYnV0dG9uPlxcclxcbjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIGRhdGEtYnMtZGlzbWlzcz1cXFwibW9kYWxcXFwiPkNoaXVkaTwvYnV0dG9uPlwiOyIsImltcG9ydCBhbm51bmNpIGZyb20gJy4vYW5udW5jaS5odG1sJ1xyXG5pbXBvcnQgY3JlYUFubnVuY2lvIGZyb20gJy4uL2NyZWFBbm51bmNpby9jcmVhQW5udW5jaW8uaHRtbCdcclxuXHJcblxyXG5sZXQgbGlzdDogYW55W10gPSBbXTtcclxubGV0IHZpZXc6IG51bWJlciA9IDVcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQYWdlKCl7ICAgICAgIC8qSW5pemlhbGl6emEgdHV0dG8gY2nDsiBjaGUgc2VydmUgYWxsYSBwYWdpbmEgcGVyIGZ1bnppb25hcmUgKi9cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0QWxsXCIpLm9uY2xpY2sgPSBzZWFyY2hCeUFsbDtcclxuICAgIGFzc2lnbkZpbHRlcnMoKTtcclxuXHJcbiAgICBnZXRBbGxJbnNlcnRpb25zKCk7XHJcbiAgICBjcmVhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICBzaG93UmVzdWx0cygxKTtcclxuXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZWFyY2hCeUFsbCgpeyAgICAgICAgICAgICAvKkxhIGZ1bnppb25hIGRlbCBib3R0b25lIGNoZSBjZXJjYSB0dXR0aSBnbGkgYW5udW5jaSBzZW56YSBmaWx0cmkqL1xyXG4gICAgZ2V0QWxsSW5zZXJ0aW9ucygpO1xyXG4gICAgY3JlYXRlUGFnaW5hdGlvbigpO1xyXG4gICAgc2hvd1Jlc3VsdHMoMSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBhc3NpZ25GaWx0ZXJzKCl7ICAgICAgICAgICAgIC8qQXNzZWduYSBsZSBmdW56aW9uaSBhaSBwdWxzYW50aSBuZWxsZSBkcm9wRG93bkxpc3QgZGEgcHJvdmFyZSovXHJcbiAgICBsZXQgZ2VuZXJpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZW5yZXNcIikuY2hpbGRyZW4gXHJcbiAgICAgIGZvcihsZXQgZyBvZiBnZW5lcmkpe1xyXG4gICAgICAgICAgKGcgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLm9uY2xpY2sgPSAoKT0+e1xyXG4gICAgICAgICAgICBzZWFyY2hCeUdlbnJlKGcuaWQpO1xyXG4gICAgICAgICAgfSBcclxuICAgICAgfVxyXG4gICAgbGV0IGFubmkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInllYXJzXCIpLmNoaWxkcmVuXHJcbiAgICAgICAgZm9yKGxldCBhIG9mIGFubmkpe1xyXG4gICAgICAgICAgICAoYSBhcyBIVE1MQnV0dG9uRWxlbWVudCkub25jbGljayA9ICgpPT57XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hCeVllYXIoTnVtYmVyKCAoYSBhcyBIVE1MQnV0dG9uRWxlbWVudCkuaWQpKTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgbGV0IHNlYXJjaFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hUaXRsZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICBsZXQgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hCdXR0b25cIik7XHJcbiAgICAgIHNlYXJjaEJ1dHRvbi5vbmNsaWNrPSgpPT57XHJcbiAgICAgICAgc2VhcmNoQnlUaXRsZShzZWFyY2hUaXRsZS52YWx1ZSlcclxuICAgICAgfVxyXG4gIH1cclxuXHJcblxyXG5mdW5jdGlvbiBzZWFyY2hCeVRpdGxlKHRpdGxlIDogc3RyaW5nKXtcclxuICAgIGNvbnNvbGUubG9nKHRpdGxlKVxyXG4gICAgbGV0IGZpbHRlcmVkTGlzdD1bXVxyXG4gICAgZm9yKGxldCBlbGVtZW50IG9mIGxpc3Qpe1xyXG4gICAgICAgIGxldCB0aXRvbG8gPSBlbGVtZW50LnRpdGxlO1xyXG4gICAgICAgIGlmKHRpdG9sby50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKHRpdGxlLnRvVXBwZXJDYXNlKCkpKXtcclxuICAgICAgICAgICAgZmlsdGVyZWRMaXN0LnB1c2goZWxlbWVudClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsaXN0ID0gW107XHJcbiAgICBsaXN0ID0gZmlsdGVyZWRMaXN0XHJcbiAgICBjcmVhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICBzaG93UmVzdWx0cygxKTtcclxufSBcclxuXHJcblxyXG5mdW5jdGlvbiBzZWFyY2hCeUdlbnJlKGdlbnJlIDpTdHJpbmcpe1xyXG4gICAgY29uc29sZS5sb2coZ2VucmUpO1xyXG4gICAgbGV0IGZpbHRlcmVkTGlzdD1bXVxyXG4gICAgZm9yKGxldCBlbGVtZW50IG9mIGxpc3Qpe1xyXG4gICAgICAgIGlmKGVsZW1lbnQuZ2VucmU9PWdlbnJlKXtcclxuICAgICAgICAgICAgZmlsdGVyZWRMaXN0LnB1c2goZWxlbWVudClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsaXN0ID0gW107XHJcbiAgICBsaXN0ID0gZmlsdGVyZWRMaXN0XHJcbiAgICBjcmVhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICBzaG93UmVzdWx0cygxKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VhcmNoQnlZZWFyKHllYXIgOiBudW1iZXIpe1xyXG4gICAgY29uc29sZS5sb2coeWVhcik7XHJcbiAgICBsZXQgZmlsdGVyZWRMaXN0PVtdO1xyXG4gICAgZm9yKGxldCBlbGVtZW50IG9mIGxpc3Qpe1xyXG4gICAgICAgIGlmKGVsZW1lbnQueWVhcj09eWVhcil7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkTGlzdC5wdXNoKGVsZW1lbnQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGlzdCA9IFtdO1xyXG4gICAgbGlzdCA9IGZpbHRlcmVkTGlzdFxyXG4gICAgY3JlYXRlUGFnaW5hdGlvbigpO1xyXG4gICAgc2hvd1Jlc3VsdHMoMSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0QWxsSW5zZXJ0aW9ucygpeyAvKiBRdWVzdGEgw6ggc29sbyB1bmEgcHJvdmEsIHNjb21tZW50YXJlIGxhIGZldGNoIHBpw7kgZ2nDuSAqL1xyXG4gICAgbGlzdD1bXTtcclxuICAgIGNvbnN0IGdpb2NvMT17XHJcbiAgICAgICAgdGl0bGU6XCJTdXBlck1hcmlvXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiSWRyYXVsaWNvIElubmFtb3JhdG9cIixcclxuICAgICAgICBnZW5yZTogXCJQTEFURk9STVwiLFxyXG4gICAgICAgIHllYXI6IFwiMTk4NVwiXHJcbiAgICB9XHJcbiAgICBjb25zdCBnaW9jbzI9e1xyXG4gICAgICAgIHRpdGxlOlwiWmVsZGFcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDYXZhbGllcmUgSW5uYW1vcmF0b1wiLFxyXG4gICAgICAgIGdlbnJlOiBcIkFWVkVOVFVSQVwiLFxyXG4gICAgICAgIHllYXI6IFwiMTk4NlwiXHJcbiAgICB9XHJcblxyXG4gICAgZm9yKGxldCBpPTA7IGk8Mjc7IGkrKyl7XHJcbiAgICBpZihpIT0xNyl7XHJcbiAgICAgICAgbGlzdC5wdXNoKGdpb2NvMilcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGxpc3QucHVzaChnaW9jbzEpXHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qUVVFU1RPIEUnIExBIEZVTlpJT05FIEdJVVNUQSBOT04gRkFNTyBDSEUgU0JBR0xJQVRFISAqL1xyXG5cclxuICAgIC8qRmV0Y2ggYSBiYWNrZW5kIGNvbiB0dXR0aSBnbGkgYW5udW5jaSwgYWdnaW9ybmEgbGEgbGlzdGEgbGlzdCovXHJcbiAgICAvLyBsaXN0PVtdO1xyXG4gICAgLy8gZmV0Y2goJy9UaXBvQW5udW5jaUNoZW5lc28nKVxyXG4gICAgLy8gLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAvLyAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgLy8gICAgIGZvcihsZXQgZCBvZiBkYXRhKXtcclxuICAgIC8vICAgICAgICAgbGlzdC5wdXNoKGQpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0pO1xyXG59XHJcblxyXG4vKmRhIHF1aSBpbiBwb2kgbGUgZnVuemlvbmkgc2Vydm9ubyBhIFxyXG5jcmVhcmUgbGEgcGFnaW5hIHVuYSB2b2x0YSBjbGljY2F0byAgXHJcbnN1bCBib3R0b25lIGFubnVuY2kgZSBhIHJpY2FyaWNhcmxlKi9cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVBhZ2luYXRpb24oKXtcclxuICAgIGxldCBzaXplOm51bWJlciA9IGxpc3QubGVuZ3RoXHJcbiAgICBsZXQgdGFiczpudW1iZXIgPSBNYXRoLmNlaWwoc2l6ZS92aWV3KTtcclxuICAgIGxldCBwYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZXNcIik7XHJcbiAgICBwYWdlcy5pbm5lckhUTUw9XCJcIjtcclxuICAgIFxyXG4gICAgZm9yKGxldCBpPTE7IGk8PXRhYnM7IGkrKyl7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUw9XCJcIitpO1xyXG4gICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG4gYnRuLXByaW1hcnlcIik7XHJcbiAgICAgICAgIGJ1dHRvbi5vbmNsaWNrPSgpPT57XHJcbiAgICAgICAgICAgIHNob3dSZXN1bHRzKGkpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlc1wiKS5hcHBlbmQoYnV0dG9uKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1Jlc3VsdHMoaTpudW1iZXIpe1xyXG4gICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnRpb25Db250ZW50XCIpO1xyXG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MPVwiXCI7XHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gKGktMSkqdmlldztcclxuICAgICAgICBsZXQgc3RvcCA9IChpKnZpZXcpLTE7XHJcbiAgICAgICAgZm9yKHN0YXJ0OyBzdGFydDw9c3RvcDsgc3RhcnQrKyl7XHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxyXG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRpb249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ2VucmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgICAgIGxldCB5ZWFyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICAgICAgdGl0bGUuaW5uZXJIVE1MPWxpc3Rbc3RhcnRdLnRpdGxlO1xyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MPWxpc3Rbc3RhcnRdLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgZ2VucmUuaW5uZXJIVE1MPWxpc3Rbc3RhcnRdLmdlbnJlO1xyXG4gICAgICAgICAgICAgICAgeWVhci5pbm5lckhUTUw9bGlzdFtzdGFydF0udGl0bGU7XHJcbiAgICAgICAgICAgICAgICBsaS5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICAgICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChnZW5yZSk7XHJcbiAgICAgICAgICAgICAgICBsaS5hcHBlbmRDaGlsZCh5ZWFyKTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kKGxpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZWggbmllbnRlIGNpIGhvIHByb3ZhdG9cIik7XHJcbiAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGFnZVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IGRpdiBmcm9tICcuL2Zvb3Rlci5odG1sJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb3QoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvb3RlclwiKS5pbm5lckhUTUwgPSBkaXY7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvdDsiLCJpbXBvcnQgZ2VzdGlvbmVVdGVudGkgZnJvbSAnLi9nZXN0aW9uZVV0ZW50aS5odG1sJ1xyXG5cclxuaW50ZXJmYWNlIHZpZGVvZ2FtZSB7XHJcbiAgICBpZDogbnVtYmVyLFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgZ2VucmU6IHN0cmluZyxcclxuICAgIHllYXI6IG51bWJlclxyXG59XHJcblxyXG5pbnRlcmZhY2UgdXNlciB7XHJcbiAgICB1c2VySWQ6IG51bWJlcixcclxuICAgIHVzZXJuYW1lOiBzdHJpbmcsXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBzdXJuYW1lOiBzdHJpbmcsXHJcbiAgICBlbWFpbDogc3RyaW5nLFxyXG4gICAgcmF0aW5nOiBudW1iZXIsXHJcbiAgICB2aWRlb2dhbWVzOiB2aWRlb2dhbWVbXVxyXG59XHJcblxyXG5sZXQgdXNlcnM6IHVzZXJbXSA9IFtdO1xyXG5sZXQgdmlldyA9IDU7XHJcblxyXG5mdW5jdGlvbiBzaG93VXNlcnMobnVtOiBudW1iZXIpIHtcclxuICAgIGxldCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyTGlzdFwiKTtcclxuICAgIGxpc3QuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gKG51bSAtIDEpICogdmlldzsgaSA8IG51bSAqIHZpZXc7IGkrKykge1xyXG4gICAgICAgIGlmIChpID49IHVzZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpc3QtZ3JvdXAtaXRlbScpO1xyXG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZSgnb25tb3VzZW92ZXInLCBcInNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGlzdC1ncm91cC1pdGVtIGFjdGl2ZScpXCIpO1xyXG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZSgnb25tb3VzZW91dCcsIFwic2V0QXR0cmlidXRlKCdjbGFzcycsICdsaXN0LWdyb3VwLWl0ZW0nKVwiKTtcclxuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmbG9hdC1lbmRcIik7XHJcbiAgICAgICAgbGV0IGJ0bl9iYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGxldCBidG5fYWRtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBidG5fYmFuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXCIpO1xyXG4gICAgICAgIGJ0bl9hZG0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtXCIpO1xyXG4gICAgICAgIGJ0bl9iYW4uaW5uZXJIVE1MID0gXCJCYW5uYVwiO1xyXG4gICAgICAgIGJ0bl9hZG0uaW5uZXJIVE1MID0gXCJSZW5kaSBBZG1pblwiO1xyXG4gICAgICAgIGJ0bl9iYW4ub25jbGljayA9ICgpID0+IHsga2lja0hpc0Fzc091dE9mVGhpc1NpdGUodXNlcnNbaV0udXNlcklkKX07XHJcbiAgICAgICAgYnRuX2FkbS5vbmNsaWNrID0gKCkgPT4geyBtYWtlSGltQWRtaW4odXNlcnNbaV0udXNlcklkKSB9O1xyXG4gICAgICAgIHNwYW4uYXBwZW5kKGJ0bl9hZG0sIGJ0bl9iYW4pO1xyXG4gICAgICAgIGxpLmlubmVySFRNTCA9IHVzZXJzW2ldLnVzZXJuYW1lICsgXCIgfCBcIiArIHVzZXJzW2ldLm5hbWUgKyBcIiBcIiArIHVzZXJzW2ldLnN1cm5hbWUgKyBcIiB8IFwiICsgdXNlcnNbaV0uZW1haWwgKyBcIiB8IFwiICsgdXNlcnNbaV0ucmF0aW5nICsgXCI8aSBjbGFzcz0nZmEtcmVndWxhciBmYS1zdGFyJz48L2k+XCI7XHJcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsVXNlcnMoKTogdm9pZCB7XHJcbiAgICBmZXRjaChcIi91c2VyXCIpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdXNlcnMgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgZWxlbWVudCBvZiBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB1c2Vycy5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNyZWF0ZVBhZ2luYXRpb24oKTtcclxuICAgICAgICAgICAgc2hvd1VzZXJzKDEpO1xyXG4gICAgICAgIH0pO1xyXG59XHJcblxyXG4vKlxyXG48bGkgY2xhc3M9XCJwYWdlLWl0ZW0gYWN0aXZlXCIgYXJpYS1jdXJyZW50PVwicGFnZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBhZ2UtbGlua1wiPjE8L3NwYW4+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3M9XCJwYWdlLWl0ZW1cIj48YSBjbGFzcz1cInBhZ2UtbGlua1wiIGhyZWY9XCIjXCI+MjwvYT48L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cInBhZ2UtaXRlbVwiPjxhIGNsYXNzPVwicGFnZS1saW5rXCIgaHJlZj1cIiNcIj4zPC9hPjwvbGk+XHJcbiovXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQYWdpbmF0aW9uKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdpbmF0aW9uXCIpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBsZXQgbnVtYmVyT2ZQYWdlcyA9IE1hdGguY2VpbCh1c2Vycy5sZW5ndGggLyB2aWV3KTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZQYWdlczsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWl0ZW0gYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIiwgXCJwYWdlXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWxpbmtcIik7XHJcbiAgICAgICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBhbGxMaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnaW5hdGlvblwiKS5jaGlsZHJlbjtcclxuICAgICAgICAgICAgZm9yIChsZXQgb25lTGkgb2YgYWxsTGkpIHtcclxuICAgICAgICAgICAgICAgIG9uZUxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgb25lTGkucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtIGFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIsIFwicGFnZVwiKTtcclxuICAgICAgICAgICAgc2hvd1VzZXJzKGkgKyAxKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGJ0bi5pbm5lckhUTUwgPSBcIlwiICsgKGkgKyAxKTtcclxuICAgICAgICBsaS5hcHBlbmRDaGlsZChidG4pO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnaW5hdGlvblwiKS5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gbWFrZUhpbUFkbWluKGlkOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaWQpXHJcbiAgICB9XHJcbiAgICBmZXRjaChcIi9hZG1pblwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe2lkOiBpZH0pXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7IGNvbnNvbGUubG9nKFwiYWRtaW4gY3JlYXRvPyBcIiArIGRhdGEpOyBnZXRBbGxVc2VycygpOyB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24ga2lja0hpc0Fzc091dE9mVGhpc1NpdGUoaWQ6IG51bWJlcikge1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtpZDogaWR9KVxyXG4gICAgfVxyXG4gICAgZmV0Y2goXCIvdXNlclwiLCByZXF1ZXN0KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7IGNvbnNvbGUubG9nKFwidXNlciBjYW5jZWxsYXRvPyBcIiArIGRhdGEpOyBnZXRBbGxVc2VycygpOyB9KTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldEFsbFVzZXJzOyIsImltcG9ydCBob21lIGZyb20gJy4vaG9tZS5odG1sJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhvbWUoKXtcclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuICAgIG1haW4uaW5uZXJIVE1MICs9IGhvbWU7XHJcbiAgICBsZXQgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XHJcbiAgICBoZWFkLmlubmVySFRNTCArPSAnPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIuL2hvbWUuY3NzXCI+JztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZTtcclxuXHJcbi8qXHJcbmFzeW5jIGZ1bmN0aW9uIGdldHRpdGxlKHRpdGxlOiBzdHJpbmcpOntcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goKVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG5cclxufVxyXG4qLyIsImltcG9ydCBtb2RhbCBmcm9tICcuL21vZGFsLmh0bWwnXHJcbmltcG9ydCBsb2dpbiBmcm9tICcuLi9sb2dpbi9sb2dpbi5odG1sJ1xyXG5pbXBvcnQgbG9naW5Gb290ZXIgZnJvbSAnLi4vbG9naW4vbG9naW5Gb290ZXIuaHRtbCdcclxuaW1wb3J0IHJlZ2lzdHJhemlvbmUgZnJvbSAnLi4vcmVnaXN0cmF6aW9uZS9yZWdpc3RyYXppb25lLmh0bWwnXHJcbmltcG9ydCByZWdGb290ZXIgZnJvbSAnLi4vcmVnaXN0cmF6aW9uZS9yZWdpc3RyYXppb25lRm9vdGVyLmh0bWwnXHJcbmltcG9ydCBsb2dvdXQgZnJvbSAnLi4vbG9nb3V0L2xvZ291dC5odG1sJ1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vZGFsKCl7XHJcbiAgICBsZXQgZGl2TW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGl2TW9kYWwuaW5uZXJIVE1MID0gbW9kYWw7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdk1vZGFsKTtcclxuICAgIHNob3dMb2dJbk1vZGFsKCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luXCIpLm9uY2xpY2sgPSBzaG93TG9nSW5Nb2RhbDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbk91dEJ1dHRvblwiKS5vbmNsaWNrID0gc2hvd0xvZ091dE1vZGFsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93U2lnblVwTW9kYWwoKXtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbEJvZHlcIikuaW5uZXJIVE1MID0gcmVnaXN0cmF6aW9uZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbEZvb3RlclwiKS5pbm5lckhUTUwgPSByZWdGb290ZXI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25VcExvZ2luXCIpLm9uY2xpY2sgPSBzaG93TG9nSW5Nb2RhbDsgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dMb2dJbk1vZGFsKCl7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxCb2R5XCIpLmlubmVySFRNTCA9IGxvZ2luO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteU1vZGFsRm9vdGVyXCIpLmlubmVySFRNTCA9IGxvZ2luRm9vdGVyO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpblNpZ25VcFwiKS5vbmNsaWNrID0gc2hvd1NpZ25VcE1vZGFsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93TG9nT3V0TW9kYWwoKXtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbEJvZHlcIikuaW5uZXJIVE1MID0gbG9nb3V0O1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteU1vZGFsRm9vdGVyXCIpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAvL1RPRE86IGNoYW5nZU5hdkJhclxyXG59XHJcblxyXG5mdW5jdGlvbiB0cnlUb1NpZ25VcCgpIHtcclxuICAgIGlmICghdmFsaWRhdGVQYXNzd29yZDIoKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKFwiZSBmYWNjaWFtb2xhIHN0YSBmZWNjaVwiKTtcclxuICAgIGNvbnN0IHVzZXIgPSB7XHJcbiAgICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBzdXJuYW1lOiBcIlwiLFxyXG4gICAgICAgIGVtYWlsOiBcIlwiXHJcbiAgICB9XHJcblxyXG4gICAgLy9mZXRjaChcIi9hY2NvdW50XCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0cnlUb0xvZ0luKCkge1xyXG4gICAgLy9UT0RPXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRyeVRvTG9nT3V0KCkge1xyXG4gICAgLy9UT0RPXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlUGFzc3dvcmQoKSB7XHJcbiAgICBsZXQgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBsZXQgY29uZmlybV9wYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uZmlybV9wYXNzd29yZFNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgaWYgKHBhc3N3b3JkLnZhbHVlICE9IGNvbmZpcm1fcGFzc3dvcmQudmFsdWUpIHtcclxuICAgICAgICBjb25maXJtX3Bhc3N3b3JkLnNldEN1c3RvbVZhbGlkaXR5KFwiUGFzc3dvcmRzIERvbid0IE1hdGNoXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25maXJtX3Bhc3N3b3JkLnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVQYXNzd29yZDIoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNpYW8gZGEgdmFsaWRhdGUyXCIpO1xyXG4gICAgbGV0IHBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzd29yZFNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgbGV0IGNvbmZpcm1fcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbmZpcm1fcGFzc3dvcmRTaWduVXBcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbmZpcm1fcGFzc3dvcmQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJcIik7XHJcbiAgICBpZiAocGFzc3dvcmQudmFsdWUgIT0gY29uZmlybV9wYXNzd29yZC52YWx1ZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2lhbyBkYWxsJ2lmXCIpO1xyXG4gICAgICAgIGNvbmZpcm1fcGFzc3dvcmQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJib3JkZXItY29sb3I6IHJlZDtcIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNb2RhbDsiLCJpbXBvcnQgbmF2IGZyb20gXCIuL25hdmJhci5odG1sXCI7XHJcbmltcG9ydCBjcmVhdGVNb2RhbCBmcm9tIFwiLi4vbW9kYWwvbW9kYWxcIjtcclxuaW1wb3J0IGFubnVuY2kgZnJvbSBcIi4uL2FubnVuY2kvYW5udW5jaS5odG1sXCI7XHJcbmltcG9ydCBjcmVhdGVQYWdlIGZyb20gXCIuLi9hbm51bmNpL2FubnVuY2lcIjtcclxuaW1wb3J0IGhvbWUgZnJvbSBcIi4uL2hvbWUvaG9tZS5odG1sXCI7XHJcbmltcG9ydCBwcm9maWxlIGZyb20gXCIuLi9wcm9maWxvVXRlbnRlL3Byb2ZpbGUuaHRtbFwiO1xyXG5pbXBvcnQgZ2VzdGlvbmVVdGVudGkgZnJvbSBcIi4uL2dlc3Rpb25lVXRlbnRpL2dlc3Rpb25lVXRlbnRpLmh0bWxcIjtcclxuaW1wb3J0IGdldEFsbFVzZXJzIGZyb20gXCIuLi9nZXN0aW9uZVV0ZW50aS9nZXN0aW9uZVV0ZW50aVwiO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOYXYoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKS5pbm5lckhUTUwgPSBuYXY7XHJcbiAgICBjcmVhdGVNb2RhbCgpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dvXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGhvbWU7XHJcbiAgICB9O1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnRpb25zXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGFubnVuY2k7XHJcbiAgICAgICAgY3JlYXRlUGFnZSgpO1xyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFuYWdlbWVudFwiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBnZXN0aW9uZVV0ZW50aTtcclxuICAgICAgICBnZXRBbGxVc2VycygpO1xyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZmlsZVwiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBwcm9maWxlO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldE5hdigpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpLmlubmVySFRNTCA9IG5hdjtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVOYXY7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSBcIi4vaG9tZS9ob21lXCI7XHJcbmltcG9ydCBjcmVhdGVOYXYgZnJvbSBcIi4vbmF2YmFyL25hdmJhclwiXHJcbmltcG9ydCBjcmVhdGVGb3QgZnJvbSBcIi4vZm9vdGVyL2Zvb3RlclwiXHJcblxyXG5cclxuY3JlYXRlTmF2KCk7XHJcbmNyZWF0ZUhvbWUoKTtcclxuY3JlYXRlRm90KCk7XHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
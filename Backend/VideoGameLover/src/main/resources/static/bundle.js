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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<h1>TODO mostrare la lista completa degli utenti con tasto banna e tasto rendi ADMIN</h1>\r\n\r\n\r\n<nav aria-label=\"...\">\r\n    <ul id=\"userList\" class=\"list-group\">\r\n        \r\n    </ul>\r\n    <ul id=\"pagination\" class=\"pagination pagination-sm my-2\">\r\n        <li class=\"page-item active\" aria-current=\"page\">\r\n            <span class=\"page-link\">1</span>\r\n        </li>\r\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n    </ul>\r\n</nav>\r\n");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<h1>TODO: SEZIONE BENVENUTI NEL SITO</h1>\r\n<h1>TODO: SEZIONE carosello con ultimi 4 Annunci</h1>\r\n<div id=\"carouselProduct\" class=\"carousel slide\" data-bs-ride=\"carousel\">\r\n    <div class=\"carousel-inner\" id=\"item-1\">\r\n        <div class=\"carousel-item active\" id=\"element\">\r\n            <div class=\"card\" style=\"width: 18rem;\">\r\n                <img src=\"...\" class=\"card-img-top\" alt=\"...\">\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">Card title</h5>\r\n                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the\r\n                        card's\r\n                        content.</p>\r\n                    <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"carousel-item\" id=\"item-2\">\r\n            <div class=\"card\" style=\"width: 18rem;\">\r\n                <img src=\"...\" class=\"card-img-top\" alt=\"...\">\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">Card title</h5>\r\n                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the\r\n                        card's\r\n                        content.</p>\r\n                    <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"carousel-item\" id=\"item-3\">\r\n            <div class=\"card\" style=\"width: 18rem;\">\r\n                <img src=\"...\" class=\"card-img-top\" alt=\"...\">\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">Card title</h5>\r\n                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the\r\n                        card's\r\n                        content.</p>\r\n                    <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"carousel-item\" id=\"item-4\">\r\n            <div class=\"card\" style=\"width: 18rem;\">\r\n                <img src=\"...\" class=\"card-img-top\" alt=\"...\">\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">Card title</h5>\r\n                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the\r\n                        card's\r\n                        content.</p>\r\n                    <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#carouselExampleControls\" data-bs-slide=\"prev\">\r\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n        <span class=\"visually-hidden\">Previous</span>\r\n    </button>\r\n    <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#carouselExampleControls\" data-bs-slide=\"next\">\r\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n        <span class=\"visually-hidden\">Next</span>\r\n    </button>\r\n</div>\r\n\r\n<h1>TODO: SEZIONE chi siamo</h1>\r\n\r\n<script src=\"home.js\"></script>");

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
function showAllUsers() {
    let list = document.getElementById("userList");
    list.innerHTML = "";
    for (let user of users) {
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
        btn_ban.onclick = () => { kickHisAssOutOfThisSite(user.id); };
        btn_adm.onclick = () => { makeHimAdmin(user.id); };
        span.append(btn_adm, btn_ban);
        li.innerHTML = user.username + " | " + user.name + " " + user.surname + " | " + user.email + " | " + user.rating + "<i class='fa-regular fa-star'></i>";
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
        showAllUsers();
    });
}
function makeHimAdmin(id) {
    const request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'id': id })
    };
    fetch("/admin", request)
        .then((response) => response.json())
        .then((data) => console.log("admin creato? " + data));
}
function kickHisAssOutOfThisSite(id) {
    const request = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'id': id })
    };
    fetch("/user", request)
        .then((response) => response.json())
        .then((data) => console.log("user cancellato? " + data));
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
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QywwREFBUyxFQUFFLENBQUM7QUFDWixzREFBVSxFQUFFLENBQUM7QUFDYiwwREFBUyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9hbm51bmNpL2FubnVuY2kuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9mb290ZXIvZm9vdGVyLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvZ2VzdGlvbmVVdGVudGkvZ2VzdGlvbmVVdGVudGkuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9ob21lL2hvbWUuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9sb2dpbi9sb2dpbi5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2xvZ2luL2xvZ2luRm9vdGVyLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvbG9nb3V0L2xvZ291dC5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL21vZGFsL21vZGFsLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvbmF2YmFyL25hdmJhci5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL3Byb2ZpbG9VdGVudGUvcHJvZmlsZS5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL3JlZ2lzdHJhemlvbmUvcmVnaXN0cmF6aW9uZS5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL3JlZ2lzdHJhemlvbmUvcmVnaXN0cmF6aW9uZUZvb3Rlci5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2FubnVuY2kvYW5udW5jaS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9mb290ZXIvZm9vdGVyLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2dlc3Rpb25lVXRlbnRpL2dlc3Rpb25lVXRlbnRpLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2hvbWUvaG9tZS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9tb2RhbC9tb2RhbC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9uYXZiYXIvbmF2YmFyLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI8aDE+VE9ETyAoZmlsdHJvKSAoYm90dG9uaSBvIHNlbGVjdCkgcGVyIHZpc3VhbGl6emFyZSBnbGkgYW5udW5jaSBwZXIgY2F0ZWdvcmlhIG8gYW5ubzwvaDE+XFxyXFxuPGgxPlRPRE8gKHJpY2VyY2EpIChpbnB1dCB0eXBlIHNlYXJjaCkgcGVyIHZpc3VhbGl6emFyZSBnbGkgYW5udW5jaSBjb24gcXVlbCBub21lIG5lbCB0aXRvbG88L2gxPlxcclxcbjxoMT5UT0RPIHJlYWxpenphcmUgdW5hIHZpc3RhIGRpIHR1dHRpIGdsaSBhbm51bmNpIGRhbCBwacO5IHJlY2VudGUgZGl2aXNpIGluIHBhZ2luZSBkYSA1ICh2ZWRlcmUgbGlicmFyeSk8L2gxPlxcclxcbjxoMT5UT0RPIHRhc3RvIGNyZWEgYW51bm5jaW8gcGVyIG1vc3RyYXJlIHRlbXBsYXRlIGNyZWFBbm51bmNpbzwvaDE+XFxyXFxuXFxyXFxuPGRpdiBzdHlsZT1cXFwiZGlzcGxheTogZmxleDtcXFwiPlxcclxcblxcclxcbiAgICA8c3BhbiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiA0MHB4XFxcIj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgaWQ9XFxcInNlbGVjdEFsbFxcXCI+VmlzdWFsaXp6YSB0dXR0aTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvc3Bhbj4gPCEtLWZ1bnppb25lIGNoZSBwcmVuZGUgdHV0dGkgZ2xpIGFubnVuY2kgZSBsaSBzY2hpYWZmYSBuZWwgY29udGVudXRvIGFubnVuY2ktLT5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XFxcIm1hcmdpbi1yaWdodDogNDBweFxcXCIgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5IGRyb3Bkb3duLXRvZ2dsZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIFZpc3VhbGl6emEgcGVyIEdlbmVyZVxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XFxcImdlbnJlc1xcXCIgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cXFwiUExBVEZPUk1cXFwiPjxidXR0b24gY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+UExBVEZPUk08L2J1dHRvbj48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IDQwcHhcXFwiIGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5IGRyb3Bkb3duLXRvZ2dsZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgVmlzdWFsaXp6YSBwZXIgQW5ub1xcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPHVsIGlkPVxcXCJ5ZWFyc1xcXCIgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgaWQ9XFxcIjE5ODVcXFwiPjxidXR0b24gY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+MTk4NTwvYnV0dG9uPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICA8ZGl2IHN0eWxlPVxcXCJ2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcXCIgY2xhc3M9XFxcImNvbC1tZC0yIG14LWF1dG9cXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGJvcmRlci1lbmQtMCBib3JkZXIgcm91bmRlZC1waWxsXFxcIiB0eXBlPVxcXCJzZWFyY2hcXFwiIHBsYWNlaG9sZGVyPVxcXCJjZXJjYVxcXCIgaWQ9XFxcInNlYXJjaFRpdGxlXFxcIj5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYXBwZW5kXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJzZWFyY2hCdXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJnLXdoaXRlIGJvcmRlci1ib3R0b20tMCBib3JkZXIgcm91bmRlZC1waWxsIG1zLW41XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgdHJvdmFcXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtc2VhcmNoXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgIDxzcGFuID5cXHJcXG4gICAgICAgIDxidXR0b24gIHN0eWxlPVxcXCJjb2xvcjp3aGl0ZVxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi9pbWcvcGx1cy5wbmdcXFwiIGFsdD1cXFwicGx1c1xcXCIgc3R5bGU9XFxcIndpZHRoOjI1cHhcXFwiPlxcclxcbiAgICAgICAgICAgIEluc2VyaXNjaSBBbm51bmNpb1xcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgPC9zcGFuPiAgICAgIFxcclxcbiAgICAgICAgICAgICBcXHJcXG5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2PlxcclxcbiAgICA8dWwgaWQ9XFxcImluc2VydGlvbkNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgXFxyXFxuICAgIDwvdWw+XFxyXFxuICAgIFxcclxcbjwvZGl2PlxcclxcbjxkaXYgaWQ9XFxcInBhZ2VzXFxcIj5cXHJcXG5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxzdHlsZT5cXHJcXG4gIC5jYXJkZm9vdGVyIHtcXHJcXG4gICAgd2lkdGg6IDk5JTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGxpIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuPC9zdHlsZT5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjYXJkZm9vdGVyXFxcIj5cXHJcXG4gIDxocj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5cXHJcXG4gICAgPGgzIGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5WaWRlb0dhbWUgTG92ZXI8L2gzPlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcclxcbiAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj5UZXN0byBBZ2dpdW50aXZvIFNlIFZvbGV0ZTwvcD5cXHJcXG4gICAgPHVsPlxcclxcbiAgICAgIDxsaT4gPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+SG9tZTwvYT4gPC9saT5cXHJcXG4gICAgICA8bGk+IDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPlBhb2xvPC9hPiA8L2xpPlxcclxcbiAgICAgIDxsaT4gPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+UGllcm88L2E+IDwvbGk+XFxyXFxuICAgICAgPGxpPiA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5BYm91dCBVczwvYT4gPC9saT5cXHJcXG4gICAgPC91bD5cXHJcXG4gIDwvZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiY2FyZC1mb290ZXIgdGV4dC1tdXRlZFxcXCI+XFxyXFxuICAgIDxwPiDCqTIwMjMgUGFvbG8gRW50ZXJwcmlzZSBJbmMuIHwgVHV0dGkgaSBkaXJpdHRpIHJpc2VydmF0aSAoYSBQaWVyaW5vKSA8L3A+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxoMT5UT0RPIG1vc3RyYXJlIGxhIGxpc3RhIGNvbXBsZXRhIGRlZ2xpIHV0ZW50aSBjb24gdGFzdG8gYmFubmEgZSB0YXN0byByZW5kaSBBRE1JTjwvaDE+XFxyXFxuXFxyXFxuXFxyXFxuPG5hdiBhcmlhLWxhYmVsPVxcXCIuLi5cXFwiPlxcclxcbiAgICA8dWwgaWQ9XFxcInVzZXJMaXN0XFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cFxcXCI+XFxyXFxuICAgICAgICBcXHJcXG4gICAgPC91bD5cXHJcXG4gICAgPHVsIGlkPVxcXCJwYWdpbmF0aW9uXFxcIiBjbGFzcz1cXFwicGFnaW5hdGlvbiBwYWdpbmF0aW9uLXNtIG15LTJcXFwiPlxcclxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJwYWdlLWl0ZW0gYWN0aXZlXFxcIiBhcmlhLWN1cnJlbnQ9XFxcInBhZ2VcXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJwYWdlLWxpbmtcXFwiPjE8L3NwYW4+XFxyXFxuICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJwYWdlLWl0ZW1cXFwiPjxhIGNsYXNzPVxcXCJwYWdlLWxpbmtcXFwiIGhyZWY9XFxcIiNcXFwiPjI8L2E+PC9saT5cXHJcXG4gICAgICAgIDxsaSBjbGFzcz1cXFwicGFnZS1pdGVtXFxcIj48YSBjbGFzcz1cXFwicGFnZS1saW5rXFxcIiBocmVmPVxcXCIjXFxcIj4zPC9hPjwvbGk+XFxyXFxuICAgIDwvdWw+XFxyXFxuPC9uYXY+XFxyXFxuXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8aDE+VE9ETzogU0VaSU9ORSBCRU5WRU5VVEkgTkVMIFNJVE88L2gxPlxcclxcbjxoMT5UT0RPOiBTRVpJT05FIGNhcm9zZWxsbyBjb24gdWx0aW1pIDQgQW5udW5jaTwvaDE+XFxyXFxuPGRpdiBpZD1cXFwiY2Fyb3VzZWxQcm9kdWN0XFxcIiBjbGFzcz1cXFwiY2Fyb3VzZWwgc2xpZGVcXFwiIGRhdGEtYnMtcmlkZT1cXFwiY2Fyb3VzZWxcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYXJvdXNlbC1pbm5lclxcXCIgaWQ9XFxcIml0ZW0tMVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJvdXNlbC1pdGVtIGFjdGl2ZVxcXCIgaWQ9XFxcImVsZW1lbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMThyZW07XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4uLlxcXCIgY2xhc3M9XFxcImNhcmQtaW1nLXRvcFxcXCIgYWx0PVxcXCIuLi5cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5DYXJkIHRpdGxlPC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPlNvbWUgcXVpY2sgZXhhbXBsZSB0ZXh0IHRvIGJ1aWxkIG9uIHRoZSBjYXJkIHRpdGxlIGFuZCBtYWtlIHVwIHRoZSBidWxrIG9mIHRoZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQnc1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuPC9wPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+R28gc29tZXdoZXJlPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2Fyb3VzZWwtaXRlbVxcXCIgaWQ9XFxcIml0ZW0tMlxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCIgc3R5bGU9XFxcIndpZHRoOiAxOHJlbTtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi4uXFxcIiBjbGFzcz1cXFwiY2FyZC1pbWctdG9wXFxcIiBhbHQ9XFxcIi4uLlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPkNhcmQgdGl0bGU8L2g1PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+U29tZSBxdWljayBleGFtcGxlIHRleHQgdG8gYnVpbGQgb24gdGhlIGNhcmQgdGl0bGUgYW5kIG1ha2UgdXAgdGhlIGJ1bGsgb2YgdGhlXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZCdzXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC48L3A+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5HbyBzb21ld2hlcmU8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJvdXNlbC1pdGVtXFxcIiBpZD1cXFwiaXRlbS0zXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIiBzdHlsZT1cXFwid2lkdGg6IDE4cmVtO1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIuLi5cXFwiIGNsYXNzPVxcXCJjYXJkLWltZy10b3BcXFwiIGFsdD1cXFwiLi4uXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+Q2FyZCB0aXRsZTwvaDU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj5Tb21lIHF1aWNrIGV4YW1wbGUgdGV4dCB0byBidWlsZCBvbiB0aGUgY2FyZCB0aXRsZSBhbmQgbWFrZSB1cCB0aGUgYnVsayBvZiB0aGVcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkJ3NcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LjwvcD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPkdvIHNvbWV3aGVyZTwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcm91c2VsLWl0ZW1cXFwiIGlkPVxcXCJpdGVtLTRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMThyZW07XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4uLlxcXCIgY2xhc3M9XFxcImNhcmQtaW1nLXRvcFxcXCIgYWx0PVxcXCIuLi5cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5DYXJkIHRpdGxlPC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPlNvbWUgcXVpY2sgZXhhbXBsZSB0ZXh0IHRvIGJ1aWxkIG9uIHRoZSBjYXJkIHRpdGxlIGFuZCBtYWtlIHVwIHRoZSBidWxrIG9mIHRoZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQnc1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuPC9wPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+R28gc29tZXdoZXJlPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2Fyb3VzZWwtY29udHJvbC1wcmV2XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdGFyZ2V0PVxcXCIjY2Fyb3VzZWxFeGFtcGxlQ29udHJvbHNcXFwiIGRhdGEtYnMtc2xpZGU9XFxcInByZXZcXFwiPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+UHJldmlvdXM8L3NwYW4+XFxyXFxuICAgIDwvYnV0dG9uPlxcclxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYXJvdXNlbC1jb250cm9sLW5leHRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10YXJnZXQ9XFxcIiNjYXJvdXNlbEV4YW1wbGVDb250cm9sc1xcXCIgZGF0YS1icy1zbGlkZT1cXFwibmV4dFxcXCI+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb25cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwidmlzdWFsbHktaGlkZGVuXFxcIj5OZXh0PC9zcGFuPlxcclxcbiAgICA8L2J1dHRvbj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48aDE+VE9ETzogU0VaSU9ORSBjaGkgc2lhbW88L2gxPlxcclxcblxcclxcbjxzY3JpcHQgc3JjPVxcXCJob21lLmpzXFxcIj48L3NjcmlwdD5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICA8bGFiZWwgZm9yPVxcXCJ1c2VybmFtZVNpZ25JblxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPk5pY2tuYW1lPC9sYWJlbD5cXHJcXG4gICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJ1c2VybmFtZVNpZ25JblxcXCI+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgIDxsYWJlbCBmb3I9XFxcInBhc3N3b3JkU2lnbkluXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+UGFzc3dvcmQ8L2xhYmVsPlxcclxcbiAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJwYXNzd29yZFNpZ25JblxcXCI+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwibWItMyBmb3JtLWNoZWNrXFxcIj5cXHJcXG4gICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBjbGFzcz1cXFwiZm9ybS1jaGVjay1pbnB1dFxcXCIgaWQ9XFxcInJlbWVtYmVyTWVTaWduSW5cXFwiPlxcclxcbiAgICA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY2hlY2stbGFiZWxcXFwiIGZvcj1cXFwicmVtZW1iZXJNZVNpZ25JblxcXCI+Umljb3JkYW1pPC9sYWJlbD5cXHJcXG48L2Rpdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIj5BY2NlZGk8L2J1dHRvbj5cXHJcXG48cD5Ob24gc2VpIGFuY29yYSByZWdpc3RyYXRvPzwvcD5cXHJcXG48YnV0dG9uIGlkPVxcXCJsb2dpblNpZ25VcFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIj5SZWdpc3RyYXRpPC9idXR0b24+XFxyXFxuPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgZGF0YS1icy1kaXNtaXNzPVxcXCJtb2RhbFxcXCI+Q2hpdWRpPC9idXR0b24+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGNsYXNzPVxcXCJ0ZXh0LWNlbnRlciBtYi0zXFxcIj5cXHJcXG4gICAgPGgzPk9oLCBjaSBkaXNwaWFjZSBjaGUgdmFpIHZpYSE8YnI+VG9ybmEgYSB0cm92YXJjaSE8L2gzPlxcclxcbiAgICA8aW1nIHNyYz1cXFwiLi9pbWcvZmFkRmFjZS5wbmdcXFwiIHdpZHRoPVxcXCIxMDBcXFwiIGFsdD1cXFwiaW1tYWdpbmUgdHJpc3RlXFxcIj5cXHJcXG48L2Rpdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIGlkPVxcXCJteU1vZGFsXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwic2lnbkluTW9kYWxMYWJlbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLWNlbnRlcmVkXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cXFwibW9kYWwtdGl0bGUgZnMtNVxcXCIgaWQ9XFxcInNpZ25Jbk1vZGFsTGFiZWxcXFwiPk1pbmNoaWEgSm9obm55IENhcnJhYmJhZ2dpbzwvaDE+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuLWNsb3NlXFxcIiBkYXRhLWJzLWRpc21pc3M9XFxcIm1vZGFsXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCI+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwibXlNb2RhbEJvZHlcXFwiIGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwibXlNb2RhbEZvb3RlclxcXCIgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPCEtLW5hdmJhciBjb250cm9sbGVyIGljb24tLT5cXHJcXG48YnV0dG9uIGlkPVxcXCJsb2dvXFxcIiBjbGFzcz1cXFwibG9nby1idXR0b25cXFwiPiA8aW1nIGNsYXNzPVxcXCJsb2dvXFxcIiBzcmM9XFxcIi4vaW1nL3Byb2ZpbGUucG5nXFxcIiBhbHQ9XFxcImxvZ29cXFwiPjwvYnV0dG9uPlxcclxcblxcclxcbjxuYXY+XFxyXFxuICA8dWw+XFxyXFxuICAgIDwhLS1uYXZiYXIgYnV0dG9ucy0tPlxcclxcbiAgICA8IS0teSBidXR0b24tLT5cXHJcXG4gICAgPGJ1dHRvbiBpZD1cXFwiaW5zZXJ0aW9uc1xcXCIgY2xhc3M9XFxcImJ1dHRvbi1vbmUgbmF2LWJ1dHRvblxcXCI+QW5udW5jaTwvYnV0dG9uPlxcclxcbiAgICA8IS0teCBidXR0b24tLT5cXHJcXG4gICAgPGJ1dHRvbiBpZD1cXFwibWFuYWdlbWVudFxcXCIgY2xhc3M9XFxcImJ1dHRvbi10d28gbmF2LWJ1dHRvblxcXCI+R2VzdGlvbmUgVXRlbnRpPC9idXR0b24+XFxyXFxuICAgIDwhLS1hIGJ1dHRvbi0tPlxcclxcbiAgICA8YnV0dG9uIGlkPVxcXCJiaG9cXFwiIGNsYXNzPVxcXCJidXR0b24tdGhyZWUgbmF2LWJ1dHRvblxcXCI+dGVtcCBidXR0b248L2J1dHRvbj5cXHJcXG4gICAgPCEtLWIgYnV0dG9uLS0+XFxyXFxuICAgIDxidXR0b24gaWQ9XFxcImxvZ2luXFxcIiBjbGFzcz1cXFwiYnV0dG9uLWZvdXIgbmF2LWJ1dHRvblxcXCIgZGF0YS1icy10b2dnbGU9XFxcIm1vZGFsXFxcIlxcclxcbiAgICAgIGRhdGEtYnMtdGFyZ2V0PVxcXCIjbXlNb2RhbFxcXCI+TG9naW48L2J1dHRvbj5cXHJcXG4gICAgPCEtLWIgYnV0dG9uLS0+XFxyXFxuICAgIDxidXR0b24gaWQ9XFxcInNpZ25PdXRCdXR0b25cXFwiIGNsYXNzPVxcXCJidXR0b24tZm91ciBuYXYtYnV0dG9uXFxcIiBkYXRhLWJzLXRvZ2dsZT1cXFwibW9kYWxcXFwiXFxyXFxuICAgIGRhdGEtYnMtdGFyZ2V0PVxcXCIjbXlNb2RhbFxcXCI+TG9nb3V0PC9idXR0b24+XFxyXFxuXFxyXFxuICAgIDxidXR0b24gaWQ9XFxcInByb2ZpbGVcXFwiIGNsYXNzPVxcXCJwcm9maWxlLWJ1dHRvblxcXCI+XFxyXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcInBvc2l0aW9uLWFic29sdXRlIHRvcC0yIHN0YXJ0LTkwIHRyYW5zbGF0ZS1taWRkbGUgcC0yIGJnLWRhbmdlciBib3JkZXIgYm9yZGVyLWxpZ2h0IHJvdW5kZWQtY2lyY2xlXFxcIj5cXHJcXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPk5ldyBhbGVydHM8L3NwYW4+XFxyXFxuICAgICAgPC9zcGFuPlxcclxcbiAgICAgIDxpbWcgY2xhc3M9XFxcImxvZ28gcHJvZmlsZVxcXCIgc3JjPVxcXCIuL2ltZy9wcm9maWxlLnBuZ1xcXCIgYWx0PVxcXCJsb2dvXFxcIj5cXHJcXG4gICAgPC9idXR0b24+XFxyXFxuICA8L3VsPlxcclxcbjwvbmF2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGgxPlRPRE86IG1vc3RyYXJlIHR1dHRlIGxlIGluZm8gZGVsbCd1dGVudGU8L2gxPlxcclxcbjxoMT5UT0RPOiBmb3JtIG8gYWx0cm8gcGVyIGNhbWJpYXJlIG5pY2tuYW1lIGUvbyBwYXNzd29yZCBlY2M8L2gxPlxcclxcbjxoMT5UT0RPOiBwb3NzaWJpbGl0w6AgZGkgc2NlZ2xpZXJlIGkgZ2lvY2hpIGNoZSBzaSBwb3NzaWVkb25vPC9oMT5cXHJcXG5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxmb3JtPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcIm5hbWVTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5Ob21lPC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwibmFtZVNpZ25VcFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcInN1cm5hbWVTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5Db2dub21lPC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwic3VybmFtZVNpZ25VcFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcInVzZXJuYW1lU2lnblVwXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+Tmlja25hbWU8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJ1c2VybmFtZVNpZ25VcFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImVtYWlsU2lnblVwXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+RW1haWw8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiZW1haWxTaWduVXBcXFwiIHJlcXVpcmVkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJwYXNzd29yZFNpZ25VcFxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPlBhc3N3b3JkPC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInBhc3N3b3JkU2lnblVwXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiY29uZmlybV9wYXNzd29yZFNpZ25VcFxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPkNvbmZlcm1hIFBhc3N3b3JkPC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImNvbmZpcm1fcGFzc3dvcmRTaWduVXBcXFwiIHJlcXVpcmVkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Zvcm0+XFxyXFxuPCEtLSBcXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiBpZD1cXFwic2lnblVwTW9kYWxcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJzaWduVXBNb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctY2VudGVyZWRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCIgaWQ9XFxcInNpZ25VcE1vZGFsTGFiZWxcXFwiPlJlZ2lzdHJhemlvbmU8L2g1PlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0bi1jbG9zZVxcXCIgZGF0YS1icy1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgYXJpYS1sYWJlbD1cXFwiQ2xvc2VcXFwiPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8Zm9ybT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5hbWVTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5Ob21lPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcIm5hbWVTaWduVXBcXFwiIHJlcXVpcmVkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJzdXJuYW1lU2lnblVwXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+Q29nbm9tZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJzdXJuYW1lU2lnblVwXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwidXNlcm5hbWVTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5OaWNrbmFtZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJ1c2VybmFtZVNpZ25VcFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImVtYWlsU2lnblVwXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+RW1haWw8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImVtYWlsU2lnblVwXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwicGFzc3dvcmRTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5QYXNzd29yZDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwicGFzc3dvcmRTaWduVXBcXFwiIHJlcXVpcmVkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJjb25maXJtX3Bhc3N3b3JkU2lnblVwXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+Q29uZmVybWEgUGFzc3dvcmQ8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImNvbmZpcm1fcGFzc3dvcmRTaWduVXBcXFwiIHJlcXVpcmVkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgaWQ9XFxcInN1Ym1pdFNpZ25VcFxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCI+UmVnaXN0cmF0aTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgZGF0YS1icy1kaXNtaXNzPVxcXCJtb2RhbFxcXCI+Q2hpdWRpPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuIC0tPlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGJ1dHRvbiBpZD1cXFwic2lnblVwTG9naW5cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+QWNjZWRpPC9idXR0b24+XFxyXFxuPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIGRhdGEtYnMtZGlzbWlzcz1cXFwibW9kYWxcXFwiPlJlZ2lzdHJhdGk8L2J1dHRvbj5cXHJcXG48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiBkYXRhLWJzLWRpc21pc3M9XFxcIm1vZGFsXFxcIj5DaGl1ZGk8L2J1dHRvbj5cIjsiLCJpbXBvcnQgYW5udW5jaSBmcm9tICcuL2FubnVuY2kuaHRtbCdcclxuaW1wb3J0IGNyZWFBbm51bmNpbyBmcm9tICcuLi9jcmVhQW5udW5jaW8vY3JlYUFubnVuY2lvLmh0bWwnXHJcblxyXG5cclxubGV0IGxpc3Q6IGFueVtdID0gW107XHJcbmxldCB2aWV3OiBudW1iZXIgPSA1XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGFnZSgpeyAgICAgICAvKkluaXppYWxpenphIHR1dHRvIGNpw7IgY2hlIHNlcnZlIGFsbGEgcGFnaW5hIHBlciBmdW56aW9uYXJlICovXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdEFsbFwiKS5vbmNsaWNrID0gc2VhcmNoQnlBbGw7XHJcbiAgICBhc3NpZ25GaWx0ZXJzKCk7XHJcblxyXG4gICAgZ2V0QWxsSW5zZXJ0aW9ucygpO1xyXG4gICAgY3JlYXRlUGFnaW5hdGlvbigpO1xyXG4gICAgc2hvd1Jlc3VsdHMoMSk7XHJcblxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2VhcmNoQnlBbGwoKXsgICAgICAgICAgICAgLypMYSBmdW56aW9uYSBkZWwgYm90dG9uZSBjaGUgY2VyY2EgdHV0dGkgZ2xpIGFubnVuY2kgc2VuemEgZmlsdHJpKi9cclxuICAgIGdldEFsbEluc2VydGlvbnMoKTtcclxuICAgIGNyZWF0ZVBhZ2luYXRpb24oKTtcclxuICAgIHNob3dSZXN1bHRzKDEpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gYXNzaWduRmlsdGVycygpeyAgICAgICAgICAgICAvKkFzc2VnbmEgbGUgZnVuemlvbmkgYWkgcHVsc2FudGkgbmVsbGUgZHJvcERvd25MaXN0IGRhIHByb3ZhcmUqL1xyXG4gICAgbGV0IGdlbmVyaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2VucmVzXCIpLmNoaWxkcmVuIFxyXG4gICAgICBmb3IobGV0IGcgb2YgZ2VuZXJpKXtcclxuICAgICAgICAgIChnIGFzIEhUTUxCdXR0b25FbGVtZW50KS5vbmNsaWNrID0gKCk9PntcclxuICAgICAgICAgICAgc2VhcmNoQnlHZW5yZShnLmlkKTtcclxuICAgICAgICAgIH0gXHJcbiAgICAgIH1cclxuICAgIGxldCBhbm5pID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ5ZWFyc1wiKS5jaGlsZHJlblxyXG4gICAgICAgIGZvcihsZXQgYSBvZiBhbm5pKXtcclxuICAgICAgICAgICAgKGEgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLm9uY2xpY2sgPSAoKT0+e1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoQnlZZWFyKE51bWJlciggKGEgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmlkKSk7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgIGxldCBzZWFyY2hUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoVGl0bGVcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgbGV0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQnV0dG9uXCIpO1xyXG4gICAgICBzZWFyY2hCdXR0b24ub25jbGljaz0oKT0+e1xyXG4gICAgICAgIHNlYXJjaEJ5VGl0bGUoc2VhcmNoVGl0bGUudmFsdWUpXHJcbiAgICAgIH1cclxuICB9XHJcblxyXG5cclxuZnVuY3Rpb24gc2VhcmNoQnlUaXRsZSh0aXRsZSA6IHN0cmluZyl7XHJcbiAgICBjb25zb2xlLmxvZyh0aXRsZSlcclxuICAgIGxldCBmaWx0ZXJlZExpc3Q9W11cclxuICAgIGZvcihsZXQgZWxlbWVudCBvZiBsaXN0KXtcclxuICAgICAgICBsZXQgdGl0b2xvID0gZWxlbWVudC50aXRsZTtcclxuICAgICAgICBpZih0aXRvbG8udG9VcHBlckNhc2UoKS5pbmNsdWRlcyh0aXRsZS50b1VwcGVyQ2FzZSgpKSl7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkTGlzdC5wdXNoKGVsZW1lbnQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGlzdCA9IFtdO1xyXG4gICAgbGlzdCA9IGZpbHRlcmVkTGlzdFxyXG4gICAgY3JlYXRlUGFnaW5hdGlvbigpO1xyXG4gICAgc2hvd1Jlc3VsdHMoMSk7XHJcbn0gXHJcblxyXG5cclxuZnVuY3Rpb24gc2VhcmNoQnlHZW5yZShnZW5yZSA6U3RyaW5nKXtcclxuICAgIGNvbnNvbGUubG9nKGdlbnJlKTtcclxuICAgIGxldCBmaWx0ZXJlZExpc3Q9W11cclxuICAgIGZvcihsZXQgZWxlbWVudCBvZiBsaXN0KXtcclxuICAgICAgICBpZihlbGVtZW50LmdlbnJlPT1nZW5yZSl7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkTGlzdC5wdXNoKGVsZW1lbnQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGlzdCA9IFtdO1xyXG4gICAgbGlzdCA9IGZpbHRlcmVkTGlzdFxyXG4gICAgY3JlYXRlUGFnaW5hdGlvbigpO1xyXG4gICAgc2hvd1Jlc3VsdHMoMSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlYXJjaEJ5WWVhcih5ZWFyIDogbnVtYmVyKXtcclxuICAgIGNvbnNvbGUubG9nKHllYXIpO1xyXG4gICAgbGV0IGZpbHRlcmVkTGlzdD1bXTtcclxuICAgIGZvcihsZXQgZWxlbWVudCBvZiBsaXN0KXtcclxuICAgICAgICBpZihlbGVtZW50LnllYXI9PXllYXIpe1xyXG4gICAgICAgICAgICBmaWx0ZXJlZExpc3QucHVzaChlbGVtZW50KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxpc3QgPSBbXTtcclxuICAgIGxpc3QgPSBmaWx0ZXJlZExpc3RcclxuICAgIGNyZWF0ZVBhZ2luYXRpb24oKTtcclxuICAgIHNob3dSZXN1bHRzKDEpO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEFsbEluc2VydGlvbnMoKXsgLyogUXVlc3RhIMOoIHNvbG8gdW5hIHByb3ZhLCBzY29tbWVudGFyZSBsYSBmZXRjaCBwacO5IGdpw7kgKi9cclxuICAgIGxpc3Q9W107XHJcbiAgICBjb25zdCBnaW9jbzE9e1xyXG4gICAgICAgIHRpdGxlOlwiU3VwZXJNYXJpb1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIklkcmF1bGljbyBJbm5hbW9yYXRvXCIsXHJcbiAgICAgICAgZ2VucmU6IFwiUExBVEZPUk1cIixcclxuICAgICAgICB5ZWFyOiBcIjE5ODVcIlxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2lvY28yPXtcclxuICAgICAgICB0aXRsZTpcIlplbGRhXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ2F2YWxpZXJlIElubmFtb3JhdG9cIixcclxuICAgICAgICBnZW5yZTogXCJBVlZFTlRVUkFcIixcclxuICAgICAgICB5ZWFyOiBcIjE5ODZcIlxyXG4gICAgfVxyXG5cclxuICAgIGZvcihsZXQgaT0wOyBpPDI3OyBpKyspe1xyXG4gICAgaWYoaSE9MTcpe1xyXG4gICAgICAgIGxpc3QucHVzaChnaW9jbzIpXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBsaXN0LnB1c2goZ2lvY28xKVxyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKlFVRVNUTyBFJyBMQSBGVU5aSU9ORSBHSVVTVEEgTk9OIEZBTU8gQ0hFIFNCQUdMSUFURSEgKi9cclxuXHJcbiAgICAvKkZldGNoIGEgYmFja2VuZCBjb24gdHV0dGkgZ2xpIGFubnVuY2ksIGFnZ2lvcm5hIGxhIGxpc3RhIGxpc3QqL1xyXG4gICAgLy8gbGlzdD1bXTtcclxuICAgIC8vIGZldGNoKCcvVGlwb0FubnVuY2lDaGVuZXNvJylcclxuICAgIC8vIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLy8gLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIC8vICAgICBmb3IobGV0IGQgb2YgZGF0YSl7XHJcbiAgICAvLyAgICAgICAgIGxpc3QucHVzaChkKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9KTtcclxufVxyXG5cclxuLypkYSBxdWkgaW4gcG9pIGxlIGZ1bnppb25pIHNlcnZvbm8gYSBcclxuY3JlYXJlIGxhIHBhZ2luYSB1bmEgdm9sdGEgY2xpY2NhdG8gIFxyXG5zdWwgYm90dG9uZSBhbm51bmNpIGUgYSByaWNhcmljYXJsZSovXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQYWdpbmF0aW9uKCl7XHJcbiAgICBsZXQgc2l6ZTpudW1iZXIgPSBsaXN0Lmxlbmd0aFxyXG4gICAgbGV0IHRhYnM6bnVtYmVyID0gTWF0aC5jZWlsKHNpemUvdmlldyk7XHJcbiAgICBsZXQgcGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VzXCIpO1xyXG4gICAgcGFnZXMuaW5uZXJIVE1MPVwiXCI7XHJcbiAgICBcclxuICAgIGZvcihsZXQgaT0xOyBpPD10YWJzOyBpKyspe1xyXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICBidXR0b24uaW5uZXJIVE1MPVwiXCIraTtcclxuICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnRuIGJ0bi1wcmltYXJ5XCIpO1xyXG4gICAgICAgICBidXR0b24ub25jbGljaz0oKT0+e1xyXG4gICAgICAgICAgICBzaG93UmVzdWx0cyhpKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZXNcIikuYXBwZW5kKGJ1dHRvbik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dSZXN1bHRzKGk6bnVtYmVyKXtcclxuICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zZXJ0aW9uQ29udGVudFwiKTtcclxuICAgICAgICBjb250ZW50LmlubmVySFRNTD1cIlwiO1xyXG4gICAgICAgIGxldCBzdGFydCA9IChpLTEpKnZpZXc7XHJcbiAgICAgICAgbGV0IHN0b3AgPSAoaSp2aWV3KS0xO1xyXG4gICAgICAgIGZvcihzdGFydDsgc3RhcnQ8PXN0b3A7IHN0YXJ0Kyspe1xyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcclxuICAgICAgICAgICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGdlbnJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgeWVhcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgICAgIHRpdGxlLmlubmVySFRNTD1saXN0W3N0YXJ0XS50aXRsZTtcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTD1saXN0W3N0YXJ0XS5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgICAgIGdlbnJlLmlubmVySFRNTD1saXN0W3N0YXJ0XS5nZW5yZTtcclxuICAgICAgICAgICAgICAgIHllYXIuaW5uZXJIVE1MPWxpc3Rbc3RhcnRdLnRpdGxlO1xyXG4gICAgICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoZ2VucmUpO1xyXG4gICAgICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoeWVhcik7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50LmFwcGVuZChsaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2h7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVoIG5pZW50ZSBjaSBobyBwcm92YXRvXCIpO1xyXG4gICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBhZ2VcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBkaXYgZnJvbSAnLi9mb290ZXIuaHRtbCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRm90KCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb290ZXJcIikuaW5uZXJIVE1MID0gZGl2O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGb3Q7IiwiaW1wb3J0IGdlc3Rpb25lVXRlbnRpIGZyb20gJy4vZ2VzdGlvbmVVdGVudGkuaHRtbCdcclxuXHJcbmludGVyZmFjZSB2aWRlb2dhbWV7XHJcbiAgICBpZCA6IG51bWJlcixcclxuICAgIG5hbWUgOiBzdHJpbmcsXHJcbiAgICBnZW5yZSA6IHN0cmluZyxcclxuICAgIHllYXIgOiBudW1iZXJcclxufVxyXG5cclxuaW50ZXJmYWNlIHVzZXJ7XHJcbiAgICBpZCA6IG51bWJlcixcclxuICAgIHVzZXJuYW1lIDogc3RyaW5nLFxyXG4gICAgbmFtZSA6IHN0cmluZyxcclxuICAgIHN1cm5hbWUgOiBzdHJpbmcsXHJcbiAgICBlbWFpbCA6IHN0cmluZyxcclxuICAgIHJhdGluZyA6IG51bWJlcixcclxuICAgIHZpZGVvZ2FtZXMgOiB2aWRlb2dhbWVbXVxyXG59XHJcblxyXG5sZXQgdXNlcnMgOiB1c2VyW10gPSBbXTtcclxuXHJcbmZ1bmN0aW9uIHNob3dBbGxVc2Vycygpe1xyXG4gICAgbGV0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJMaXN0XCIpO1xyXG4gICAgbGlzdC5pbm5lckhUTUw9IFwiXCI7XHJcbiAgICBmb3IobGV0IHVzZXIgb2YgdXNlcnMpe1xyXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnbGlzdC1ncm91cC1pdGVtJyk7XHJcbiAgICAgICAgbGkuc2V0QXR0cmlidXRlKCdvbm1vdXNlb3ZlcicsXCJzZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpc3QtZ3JvdXAtaXRlbSBhY3RpdmUnKVwiKTtcclxuICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoJ29ubW91c2VvdXQnLFwic2V0QXR0cmlidXRlKCdjbGFzcycsICdsaXN0LWdyb3VwLWl0ZW0nKVwiKTtcclxuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmbG9hdC1lbmRcIik7XHJcbiAgICAgICAgbGV0IGJ0bl9iYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGxldCBidG5fYWRtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBidG5fYmFuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXCIpO1xyXG4gICAgICAgIGJ0bl9hZG0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtXCIpO1xyXG4gICAgICAgIGJ0bl9iYW4uaW5uZXJIVE1MID0gXCJCYW5uYVwiO1xyXG4gICAgICAgIGJ0bl9hZG0uaW5uZXJIVE1MID0gXCJSZW5kaSBBZG1pblwiO1xyXG4gICAgICAgIGJ0bl9iYW4ub25jbGljayA9ICgpID0+IHtraWNrSGlzQXNzT3V0T2ZUaGlzU2l0ZSh1c2VyLmlkKX07XHJcbiAgICAgICAgYnRuX2FkbS5vbmNsaWNrID0gKCkgPT4ge21ha2VIaW1BZG1pbih1c2VyLmlkKX07XHJcbiAgICAgICAgc3Bhbi5hcHBlbmQoYnRuX2FkbSwgYnRuX2Jhbik7XHJcbiAgICAgICAgbGkuaW5uZXJIVE1MID0gdXNlci51c2VybmFtZSArIFwiIHwgXCIgK3VzZXIubmFtZSArIFwiIFwiICt1c2VyLnN1cm5hbWUgKyBcIiB8IFwiICt1c2VyLmVtYWlsICsgXCIgfCBcIiArIHVzZXIucmF0aW5nICsgXCI8aSBjbGFzcz0nZmEtcmVndWxhciBmYS1zdGFyJz48L2k+XCI7XHJcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxVc2VycygpIDogdm9pZHtcclxuICAgIGZldGNoKFwiL3VzZXJcIilcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICB1c2VycyA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgZWxlbWVudCBvZiBkYXRhKXtcclxuICAgICAgICAgICAgdXNlcnMucHVzaChlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2hvd0FsbFVzZXJzKCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFrZUhpbUFkbWluKGlkIDogbnVtYmVyKXtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgbWV0aG9kIDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnMgOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keSA6IEpTT04uc3RyaW5naWZ5KHsnaWQnOmlkfSlcclxuICAgIH1cclxuICAgIGZldGNoKFwiL2FkbWluXCIsIHJlcXVlc3QpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKT0+Y29uc29sZS5sb2coXCJhZG1pbiBjcmVhdG8/IFwiICsgZGF0YSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBraWNrSGlzQXNzT3V0T2ZUaGlzU2l0ZShpZCA6IG51bWJlcil7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0ge1xyXG4gICAgICAgIG1ldGhvZCA6ICdERUxFVEUnLFxyXG4gICAgICAgIGhlYWRlcnMgOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeydpZCc6aWR9KVxyXG4gICAgfVxyXG4gICAgZmV0Y2goXCIvdXNlclwiLCByZXF1ZXN0KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigoZGF0YSk9PmNvbnNvbGUubG9nKFwidXNlciBjYW5jZWxsYXRvPyBcIiArIGRhdGEpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0QWxsVXNlcnM7IiwiaW1wb3J0IGhvbWUgZnJvbSAnLi9ob21lLmh0bWwnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSG9tZSgpe1xyXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xyXG4gICAgbWFpbi5pbm5lckhUTUwgKz0gaG9tZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZTsiLCJpbXBvcnQgbW9kYWwgZnJvbSAnLi9tb2RhbC5odG1sJ1xyXG5pbXBvcnQgbG9naW4gZnJvbSAnLi4vbG9naW4vbG9naW4uaHRtbCdcclxuaW1wb3J0IGxvZ2luRm9vdGVyIGZyb20gJy4uL2xvZ2luL2xvZ2luRm9vdGVyLmh0bWwnXHJcbmltcG9ydCByZWdpc3RyYXppb25lIGZyb20gJy4uL3JlZ2lzdHJhemlvbmUvcmVnaXN0cmF6aW9uZS5odG1sJ1xyXG5pbXBvcnQgcmVnRm9vdGVyIGZyb20gJy4uL3JlZ2lzdHJhemlvbmUvcmVnaXN0cmF6aW9uZUZvb3Rlci5odG1sJ1xyXG5pbXBvcnQgbG9nb3V0IGZyb20gJy4uL2xvZ291dC9sb2dvdXQuaHRtbCdcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNb2RhbCgpe1xyXG4gICAgbGV0IGRpdk1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRpdk1vZGFsLmlubmVySFRNTCA9IG1vZGFsO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXZNb2RhbCk7XHJcbiAgICBzaG93TG9nSW5Nb2RhbCgpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpblwiKS5vbmNsaWNrID0gc2hvd0xvZ0luTW9kYWw7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25PdXRCdXR0b25cIikub25jbGljayA9IHNob3dMb2dPdXRNb2RhbDtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1NpZ25VcE1vZGFsKCl7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxCb2R5XCIpLmlubmVySFRNTCA9IHJlZ2lzdHJhemlvbmU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxGb290ZXJcIikuaW5uZXJIVE1MID0gcmVnRm9vdGVyO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduVXBMb2dpblwiKS5vbmNsaWNrID0gc2hvd0xvZ0luTW9kYWw7IFxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93TG9nSW5Nb2RhbCgpe1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteU1vZGFsQm9keVwiKS5pbm5lckhUTUwgPSBsb2dpbjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbEZvb3RlclwiKS5pbm5lckhUTUwgPSBsb2dpbkZvb3RlcjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5TaWduVXBcIikub25jbGljayA9IHNob3dTaWduVXBNb2RhbDtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0xvZ091dE1vZGFsKCl7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxCb2R5XCIpLmlubmVySFRNTCA9IGxvZ291dDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbEZvb3RlclwiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgLy9UT0RPOiBjaGFuZ2VOYXZCYXJcclxufVxyXG5cclxuZnVuY3Rpb24gdHJ5VG9TaWduVXAoKSB7XHJcbiAgICBpZiAoIXZhbGlkYXRlUGFzc3dvcmQyKCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhcImUgZmFjY2lhbW9sYSBzdGEgZmVjY2lcIik7XHJcbiAgICBjb25zdCB1c2VyID0ge1xyXG4gICAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgc3VybmFtZTogXCJcIixcclxuICAgICAgICBlbWFpbDogXCJcIlxyXG4gICAgfVxyXG5cclxuICAgIC8vZmV0Y2goXCIvYWNjb3VudFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdHJ5VG9Mb2dJbigpIHtcclxuICAgIC8vVE9ET1xyXG59XHJcblxyXG5mdW5jdGlvbiB0cnlUb0xvZ091dCgpIHtcclxuICAgIC8vVE9ET1xyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZVBhc3N3b3JkKCkge1xyXG4gICAgbGV0IHBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzd29yZFNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgbGV0IGNvbmZpcm1fcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbmZpcm1fcGFzc3dvcmRTaWduVXBcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGlmIChwYXNzd29yZC52YWx1ZSAhPSBjb25maXJtX3Bhc3N3b3JkLnZhbHVlKSB7XHJcbiAgICAgICAgY29uZmlybV9wYXNzd29yZC5zZXRDdXN0b21WYWxpZGl0eShcIlBhc3N3b3JkcyBEb24ndCBNYXRjaFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uZmlybV9wYXNzd29yZC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlUGFzc3dvcmQyKCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc29sZS5sb2coXCJjaWFvIGRhIHZhbGlkYXRlMlwiKTtcclxuICAgIGxldCBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmRTaWduVXBcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGxldCBjb25maXJtX3Bhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb25maXJtX3Bhc3N3b3JkU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBjb25maXJtX3Bhc3N3b3JkLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiXCIpO1xyXG4gICAgaWYgKHBhc3N3b3JkLnZhbHVlICE9IGNvbmZpcm1fcGFzc3dvcmQudmFsdWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNpYW8gZGFsbCdpZlwiKTtcclxuICAgICAgICBjb25maXJtX3Bhc3N3b3JkLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYm9yZGVyLWNvbG9yOiByZWQ7XCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTW9kYWw7IiwiaW1wb3J0IG5hdiBmcm9tIFwiLi9uYXZiYXIuaHRtbFwiO1xyXG5pbXBvcnQgY3JlYXRlTW9kYWwgZnJvbSBcIi4uL21vZGFsL21vZGFsXCI7XHJcbmltcG9ydCBhbm51bmNpIGZyb20gXCIuLi9hbm51bmNpL2FubnVuY2kuaHRtbFwiO1xyXG5pbXBvcnQgY3JlYXRlUGFnZSBmcm9tIFwiLi4vYW5udW5jaS9hbm51bmNpXCI7XHJcbmltcG9ydCBob21lIGZyb20gXCIuLi9ob21lL2hvbWUuaHRtbFwiO1xyXG5pbXBvcnQgcHJvZmlsZSBmcm9tIFwiLi4vcHJvZmlsb1V0ZW50ZS9wcm9maWxlLmh0bWxcIjtcclxuaW1wb3J0IGdlc3Rpb25lVXRlbnRpIGZyb20gXCIuLi9nZXN0aW9uZVV0ZW50aS9nZXN0aW9uZVV0ZW50aS5odG1sXCI7XHJcbmltcG9ydCBnZXRBbGxVc2VycyBmcm9tIFwiLi4vZ2VzdGlvbmVVdGVudGkvZ2VzdGlvbmVVdGVudGlcIjtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIikuaW5uZXJIVE1MID0gbmF2O1xyXG4gICAgY3JlYXRlTW9kYWwoKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nb1wiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBob21lO1xyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zZXJ0aW9uc1wiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBhbm51bmNpO1xyXG4gICAgICAgIGNyZWF0ZVBhZ2UoKTtcclxuICAgIH07XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hbmFnZW1lbnRcIikub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MID0gZ2VzdGlvbmVVdGVudGk7XHJcbiAgICAgICAgZ2V0QWxsVXNlcnMoKTtcclxuICAgIH07XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2ZpbGVcIikub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MID0gcHJvZmlsZTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXROYXYoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKS5pbm5lckhUTUwgPSBuYXY7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTmF2O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVIb21lIGZyb20gXCIuL2hvbWUvaG9tZVwiO1xyXG5pbXBvcnQgY3JlYXRlTmF2IGZyb20gXCIuL25hdmJhci9uYXZiYXJcIlxyXG5pbXBvcnQgY3JlYXRlRm90IGZyb20gXCIuL2Zvb3Rlci9mb290ZXJcIlxyXG5cclxuXHJcbmNyZWF0ZU5hdigpO1xyXG5jcmVhdGVIb21lKCk7XHJcbmNyZWF0ZUZvdCgpO1xyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
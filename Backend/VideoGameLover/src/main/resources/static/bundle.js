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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<h1>TODO (filtro) (bottoni o select) per visualizzare gli annunci per categoria o anno</h1>\r\n<h1>TODO (ricerca) (input type search) per visualizzare gli annunci con quel nome nel titolo</h1>\r\n<h1>TODO realizzare una vista di tutti gli annunci dal più recente divisi in pagine da 5 (vedere library)</h1>\r\n<h1>TODO tasto crea anunncio per mostrare template creaAnnuncio</h1>\r\n\r\n<div>\r\n\r\n    <button class=\"btn btn-primary\" id=\"selectAll\">Visualizza tutti</button> <!--funzione che prendere tutti gli annunci e li schiaffa nel contenuto annunci-->\r\n    <span style=\"display:inline\" class=\"dropdown\">\r\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n        Visualizza per Genere\r\n        </button>\r\n        <ul class=\"dropdown-menu\">\r\n        <li><button class=\"dropdown-item\" type=\"button\">Lista dei generi</button></li>\r\n        </ul>\r\n    </span>\r\n    <span class=\"dropdown\">\r\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n        Visualizza per Anno\r\n        </button>\r\n        <ul class=\"dropdown-menu\">\r\n        <li><button class=\"dropdown-item\" type=\"button\">Lista degli anni</button></li>\r\n        </ul>\r\n        <div class=\"col-md-2 mx-auto\">\r\n            <div class=\"input-group\">\r\n                <input class=\"form-control border-end-0 border rounded-pill\" type=\"search\" value=\"search\" id=\"example-search-input\">\r\n                <span class=\"input-group-append\">\r\n                    <button class=\"btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill ms-n5\" type=\"button\">\r\n                        <i class=\"fa fa-search\"></i>\r\n                    </button>\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </span>\r\n\r\n            \r\n             \r\n\r\n</div>\r\n\r\n<div id=\"insertionContent\">\r\n    \r\n</div>\r\n\r\n\r\n\r\n");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<h1>TODO mostrare la lista completa degli utenti con tasto banna e tasto rendi ADMIN</h1>\r\n\r\n\r\n<nav aria-label=\"...\">\r\n    <ul id=\"userList\" class=\"list-group\">\r\n        <li class=\"list-group-item\" onmouseover=\"setAttribute('class', 'list-group-item active')\"\r\n            onmouseout=\"setAttribute('class', 'list-group-item')\">\r\n            Utente 1\r\n        </li>\r\n        <li class=\"list-group-item\" onmouseover=\"setAttribute('class', 'list-group-item active')\"\r\n            onmouseout=\"setAttribute('class', 'list-group-item')\">\r\n            Utente 2\r\n        </li>\r\n        <li class=\"list-group-item\" onmouseover=\"setAttribute('class', 'list-group-item active')\"\r\n            onmouseout=\"setAttribute('class', 'list-group-item')\">\r\n            Utente 3\r\n        </li>\r\n        <li class=\"list-group-item\" onmouseover=\"setAttribute('class', 'list-group-item active')\"\r\n            onmouseout=\"setAttribute('class', 'list-group-item')\">\r\n            Utente 4\r\n        </li>\r\n        <li class=\"list-group-item\" onmouseover=\"setAttribute('class', 'list-group-item active')\"\r\n            onmouseout=\"setAttribute('class', 'list-group-item')\">\r\n            Utente 5\r\n        </li>\r\n    </ul>\r\n    <ul id=\"pagination\" class=\"pagination pagination-sm my-2\">\r\n        <li class=\"page-item active\" aria-current=\"page\">\r\n            <span class=\"page-link\">1</span>\r\n        </li>\r\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n    </ul>\r\n</nav>\r\n");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" aria-labelledby=\"signInModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h1 class=\"modal-title fs-5\" id=\"signInModalLabel\">Log In</h1>\r\n                <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\r\n            </div>\r\n            <div id=\"myModalBody\" class=\"modal-body\">\r\n                \r\n            </div>\r\n            <div id=\"myModalFooter\" class=\"modal-footer\">\r\n                \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

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
    fetch("/account");
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
/* harmony import */ var _home_home_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/home.html */ "./src/home/home.html");
/* harmony import */ var _profiloUtente_profile_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profiloUtente/profile.html */ "./src/profiloUtente/profile.html");
/* harmony import */ var _gestioneUtenti_gestioneUtenti_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../gestioneUtenti/gestioneUtenti.html */ "./src/gestioneUtenti/gestioneUtenti.html");






function createNav() {
    document.getElementById("header").innerHTML = _navbar_html__WEBPACK_IMPORTED_MODULE_0__["default"];
    (0,_modal_modal__WEBPACK_IMPORTED_MODULE_1__["default"])();
    document.getElementById("logo").onclick = () => {
        document.getElementById("main").innerHTML = _home_home_html__WEBPACK_IMPORTED_MODULE_3__["default"];
    };
    document.getElementById("insertions").onclick = () => {
        document.getElementById("main").innerHTML = _annunci_annunci_html__WEBPACK_IMPORTED_MODULE_2__["default"];
    };
    document.getElementById("management").onclick = () => {
        document.getElementById("main").innerHTML = _gestioneUtenti_gestioneUtenti_html__WEBPACK_IMPORTED_MODULE_5__["default"];
    };
    document.getElementById("management").onclick = () => {
        document.getElementById("main").innerHTML = _profiloUtente_profile_html__WEBPACK_IMPORTED_MODULE_4__["default"];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztJQUN4RCxDQUFDLENBQUM7QUFDTixDQUFDO0FBRU0sU0FBUyxNQUFNO0lBQ2xCLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxHQUFHLG9EQUFHLENBQUM7QUFDdEQsQ0FBQztBQUlELGlFQUFlLFNBQVMsRUFBQzs7Ozs7OztVQy9CekI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnFDO0FBQ0U7QUFDQTtBQUl2QywwREFBUyxFQUFFLENBQUM7QUFDWixzREFBVSxFQUFFLENBQUM7QUFDYiwwREFBUyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9hbm51bmNpL2FubnVuY2kuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9mb290ZXIvZm9vdGVyLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvZ2VzdGlvbmVVdGVudGkvZ2VzdGlvbmVVdGVudGkuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9ob21lL2hvbWUuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9sb2dpbi9sb2dpbi5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2xvZ2luL2xvZ2luRm9vdGVyLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvbG9nb3V0L2xvZ291dC5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL21vZGFsL21vZGFsLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvbmF2YmFyL25hdmJhci5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL3Byb2ZpbG9VdGVudGUvcHJvZmlsZS5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL3JlZ2lzdHJhemlvbmUvcmVnaXN0cmF6aW9uZS5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL3JlZ2lzdHJhemlvbmUvcmVnaXN0cmF6aW9uZUZvb3Rlci5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2Zvb3Rlci9mb290ZXIudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvaG9tZS9ob21lLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL21vZGFsL21vZGFsLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL25hdmJhci9uYXZiYXIudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjxoMT5UT0RPIChmaWx0cm8pIChib3R0b25pIG8gc2VsZWN0KSBwZXIgdmlzdWFsaXp6YXJlIGdsaSBhbm51bmNpIHBlciBjYXRlZ29yaWEgbyBhbm5vPC9oMT5cXHJcXG48aDE+VE9ETyAocmljZXJjYSkgKGlucHV0IHR5cGUgc2VhcmNoKSBwZXIgdmlzdWFsaXp6YXJlIGdsaSBhbm51bmNpIGNvbiBxdWVsIG5vbWUgbmVsIHRpdG9sbzwvaDE+XFxyXFxuPGgxPlRPRE8gcmVhbGl6emFyZSB1bmEgdmlzdGEgZGkgdHV0dGkgZ2xpIGFubnVuY2kgZGFsIHBpw7kgcmVjZW50ZSBkaXZpc2kgaW4gcGFnaW5lIGRhIDUgKHZlZGVyZSBsaWJyYXJ5KTwvaDE+XFxyXFxuPGgxPlRPRE8gdGFzdG8gY3JlYSBhbnVubmNpbyBwZXIgbW9zdHJhcmUgdGVtcGxhdGUgY3JlYUFubnVuY2lvPC9oMT5cXHJcXG5cXHJcXG48ZGl2PlxcclxcblxcclxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIGlkPVxcXCJzZWxlY3RBbGxcXFwiPlZpc3VhbGl6emEgdHV0dGk8L2J1dHRvbj4gPCEtLWZ1bnppb25lIGNoZSBwcmVuZGVyZSB0dXR0aSBnbGkgYW5udW5jaSBlIGxpIHNjaGlhZmZhIG5lbCBjb250ZW51dG8gYW5udW5jaS0tPlxcclxcbiAgICA8c3BhbiBzdHlsZT1cXFwiZGlzcGxheTppbmxpbmVcXFwiIGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeSBkcm9wZG93bi10b2dnbGVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCI+XFxyXFxuICAgICAgICBWaXN1YWxpenphIHBlciBHZW5lcmVcXHJcXG4gICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXHJcXG4gICAgICAgIDxsaT48YnV0dG9uIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPkxpc3RhIGRlaSBnZW5lcmk8L2J1dHRvbj48L2xpPlxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgPC9zcGFuPlxcclxcbiAgICA8c3BhbiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnkgZHJvcGRvd24tdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiPlxcclxcbiAgICAgICAgVmlzdWFsaXp6YSBwZXIgQW5ub1xcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgPGxpPjxidXR0b24gY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+TGlzdGEgZGVnbGkgYW5uaTwvYnV0dG9uPjwvbGk+XFxyXFxuICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTIgbXgtYXV0b1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbCBib3JkZXItZW5kLTAgYm9yZGVyIHJvdW5kZWQtcGlsbFxcXCIgdHlwZT1cXFwic2VhcmNoXFxcIiB2YWx1ZT1cXFwic2VhcmNoXFxcIiBpZD1cXFwiZXhhbXBsZS1zZWFyY2gtaW5wdXRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYXBwZW5kXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgYmctd2hpdGUgYm9yZGVyLWJvdHRvbS0wIGJvcmRlciByb3VuZGVkLXBpbGwgbXMtbjVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXNlYXJjaFxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L3NwYW4+XFxyXFxuXFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgIFxcclxcblxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgaWQ9XFxcImluc2VydGlvbkNvbnRlbnRcXFwiPlxcclxcbiAgICBcXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxzdHlsZT5cXHJcXG4gIC5jYXJkZm9vdGVyIHtcXHJcXG4gICAgd2lkdGg6IDk5JTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGxpIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuPC9zdHlsZT5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjYXJkZm9vdGVyXFxcIj5cXHJcXG4gIDxocj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5cXHJcXG4gICAgPGgzIGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5WaWRlb0dhbWUgTG92ZXI8L2gzPlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcclxcbiAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj5UZXN0byBBZ2dpdW50aXZvIFNlIFZvbGV0ZTwvcD5cXHJcXG4gICAgPHVsPlxcclxcbiAgICAgIDxsaT4gPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+SG9tZTwvYT4gPC9saT5cXHJcXG4gICAgICA8bGk+IDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPlBhb2xvPC9hPiA8L2xpPlxcclxcbiAgICAgIDxsaT4gPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+UGllcm88L2E+IDwvbGk+XFxyXFxuICAgICAgPGxpPiA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5BYm91dCBVczwvYT4gPC9saT5cXHJcXG4gICAgPC91bD5cXHJcXG4gIDwvZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiY2FyZC1mb290ZXIgdGV4dC1tdXRlZFxcXCI+XFxyXFxuICAgIDxwPiDCqTIwMjMgUGFvbG8gRW50ZXJwcmlzZSBJbmMuIHwgVHV0dGkgaSBkaXJpdHRpIHJpc2VydmF0aSAoYSBQaWVyaW5vKSA8L3A+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxoMT5UT0RPIG1vc3RyYXJlIGxhIGxpc3RhIGNvbXBsZXRhIGRlZ2xpIHV0ZW50aSBjb24gdGFzdG8gYmFubmEgZSB0YXN0byByZW5kaSBBRE1JTjwvaDE+XFxyXFxuXFxyXFxuXFxyXFxuPG5hdiBhcmlhLWxhYmVsPVxcXCIuLi5cXFwiPlxcclxcbiAgICA8dWwgaWQ9XFxcInVzZXJMaXN0XFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGkgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCIgb25tb3VzZW92ZXI9XFxcInNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGlzdC1ncm91cC1pdGVtIGFjdGl2ZScpXFxcIlxcclxcbiAgICAgICAgICAgIG9ubW91c2VvdXQ9XFxcInNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGlzdC1ncm91cC1pdGVtJylcXFwiPlxcclxcbiAgICAgICAgICAgIFV0ZW50ZSAxXFxyXFxuICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiIG9ubW91c2VvdmVyPVxcXCJzZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpc3QtZ3JvdXAtaXRlbSBhY3RpdmUnKVxcXCJcXHJcXG4gICAgICAgICAgICBvbm1vdXNlb3V0PVxcXCJzZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpc3QtZ3JvdXAtaXRlbScpXFxcIj5cXHJcXG4gICAgICAgICAgICBVdGVudGUgMlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgICAgIDxsaSBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIiBvbm1vdXNlb3Zlcj1cXFwic2V0QXR0cmlidXRlKCdjbGFzcycsICdsaXN0LWdyb3VwLWl0ZW0gYWN0aXZlJylcXFwiXFxyXFxuICAgICAgICAgICAgb25tb3VzZW91dD1cXFwic2V0QXR0cmlidXRlKCdjbGFzcycsICdsaXN0LWdyb3VwLWl0ZW0nKVxcXCI+XFxyXFxuICAgICAgICAgICAgVXRlbnRlIDNcXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8bGkgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCIgb25tb3VzZW92ZXI9XFxcInNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGlzdC1ncm91cC1pdGVtIGFjdGl2ZScpXFxcIlxcclxcbiAgICAgICAgICAgIG9ubW91c2VvdXQ9XFxcInNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGlzdC1ncm91cC1pdGVtJylcXFwiPlxcclxcbiAgICAgICAgICAgIFV0ZW50ZSA0XFxyXFxuICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiIG9ubW91c2VvdmVyPVxcXCJzZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpc3QtZ3JvdXAtaXRlbSBhY3RpdmUnKVxcXCJcXHJcXG4gICAgICAgICAgICBvbm1vdXNlb3V0PVxcXCJzZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpc3QtZ3JvdXAtaXRlbScpXFxcIj5cXHJcXG4gICAgICAgICAgICBVdGVudGUgNVxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgPC91bD5cXHJcXG4gICAgPHVsIGlkPVxcXCJwYWdpbmF0aW9uXFxcIiBjbGFzcz1cXFwicGFnaW5hdGlvbiBwYWdpbmF0aW9uLXNtIG15LTJcXFwiPlxcclxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJwYWdlLWl0ZW0gYWN0aXZlXFxcIiBhcmlhLWN1cnJlbnQ9XFxcInBhZ2VcXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJwYWdlLWxpbmtcXFwiPjE8L3NwYW4+XFxyXFxuICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJwYWdlLWl0ZW1cXFwiPjxhIGNsYXNzPVxcXCJwYWdlLWxpbmtcXFwiIGhyZWY9XFxcIiNcXFwiPjI8L2E+PC9saT5cXHJcXG4gICAgICAgIDxsaSBjbGFzcz1cXFwicGFnZS1pdGVtXFxcIj48YSBjbGFzcz1cXFwicGFnZS1saW5rXFxcIiBocmVmPVxcXCIjXFxcIj4zPC9hPjwvbGk+XFxyXFxuICAgIDwvdWw+XFxyXFxuPC9uYXY+XFxyXFxuXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8aDE+VE9ETzogU0VaSU9ORSBCRU5WRU5VVEkgTkVMIFNJVE88L2gxPlxcclxcbjxoMT5UT0RPOiBTRVpJT05FIGNhcm9zZWxsbyBjb24gdWx0aW1pIDQgQW5udW5jaTwvaDE+XFxyXFxuPGRpdiBpZD1cXFwiY2Fyb3VzZWxQcm9kdWN0XFxcIiBjbGFzcz1cXFwiY2Fyb3VzZWwgc2xpZGVcXFwiIGRhdGEtYnMtcmlkZT1cXFwiY2Fyb3VzZWxcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYXJvdXNlbC1pbm5lclxcXCIgaWQ9XFxcIml0ZW0tMVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJvdXNlbC1pdGVtIGFjdGl2ZVxcXCIgaWQ9XFxcImVsZW1lbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMThyZW07XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4uLlxcXCIgY2xhc3M9XFxcImNhcmQtaW1nLXRvcFxcXCIgYWx0PVxcXCIuLi5cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5DYXJkIHRpdGxlPC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPlNvbWUgcXVpY2sgZXhhbXBsZSB0ZXh0IHRvIGJ1aWxkIG9uIHRoZSBjYXJkIHRpdGxlIGFuZCBtYWtlIHVwIHRoZSBidWxrIG9mIHRoZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQnc1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuPC9wPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+R28gc29tZXdoZXJlPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2Fyb3VzZWwtaXRlbVxcXCIgaWQ9XFxcIml0ZW0tMlxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCIgc3R5bGU9XFxcIndpZHRoOiAxOHJlbTtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi4uXFxcIiBjbGFzcz1cXFwiY2FyZC1pbWctdG9wXFxcIiBhbHQ9XFxcIi4uLlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPkNhcmQgdGl0bGU8L2g1PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+U29tZSBxdWljayBleGFtcGxlIHRleHQgdG8gYnVpbGQgb24gdGhlIGNhcmQgdGl0bGUgYW5kIG1ha2UgdXAgdGhlIGJ1bGsgb2YgdGhlXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZCdzXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC48L3A+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5HbyBzb21ld2hlcmU8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJvdXNlbC1pdGVtXFxcIiBpZD1cXFwiaXRlbS0zXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIiBzdHlsZT1cXFwid2lkdGg6IDE4cmVtO1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIuLi5cXFwiIGNsYXNzPVxcXCJjYXJkLWltZy10b3BcXFwiIGFsdD1cXFwiLi4uXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+Q2FyZCB0aXRsZTwvaDU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj5Tb21lIHF1aWNrIGV4YW1wbGUgdGV4dCB0byBidWlsZCBvbiB0aGUgY2FyZCB0aXRsZSBhbmQgbWFrZSB1cCB0aGUgYnVsayBvZiB0aGVcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkJ3NcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LjwvcD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPkdvIHNvbWV3aGVyZTwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcm91c2VsLWl0ZW1cXFwiIGlkPVxcXCJpdGVtLTRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMThyZW07XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4uLlxcXCIgY2xhc3M9XFxcImNhcmQtaW1nLXRvcFxcXCIgYWx0PVxcXCIuLi5cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5DYXJkIHRpdGxlPC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPlNvbWUgcXVpY2sgZXhhbXBsZSB0ZXh0IHRvIGJ1aWxkIG9uIHRoZSBjYXJkIHRpdGxlIGFuZCBtYWtlIHVwIHRoZSBidWxrIG9mIHRoZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQnc1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuPC9wPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+R28gc29tZXdoZXJlPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2Fyb3VzZWwtY29udHJvbC1wcmV2XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdGFyZ2V0PVxcXCIjY2Fyb3VzZWxFeGFtcGxlQ29udHJvbHNcXFwiIGRhdGEtYnMtc2xpZGU9XFxcInByZXZcXFwiPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+UHJldmlvdXM8L3NwYW4+XFxyXFxuICAgIDwvYnV0dG9uPlxcclxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYXJvdXNlbC1jb250cm9sLW5leHRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10YXJnZXQ9XFxcIiNjYXJvdXNlbEV4YW1wbGVDb250cm9sc1xcXCIgZGF0YS1icy1zbGlkZT1cXFwibmV4dFxcXCI+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb25cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwidmlzdWFsbHktaGlkZGVuXFxcIj5OZXh0PC9zcGFuPlxcclxcbiAgICA8L2J1dHRvbj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48aDE+VE9ETzogU0VaSU9ORSBjaGkgc2lhbW88L2gxPlxcclxcblxcclxcbjxzY3JpcHQgc3JjPVxcXCJob21lLmpzXFxcIj48L3NjcmlwdD5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICA8bGFiZWwgZm9yPVxcXCJ1c2VybmFtZVNpZ25JblxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPk5pY2tuYW1lPC9sYWJlbD5cXHJcXG4gICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJ1c2VybmFtZVNpZ25JblxcXCI+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgIDxsYWJlbCBmb3I9XFxcInBhc3N3b3JkU2lnbkluXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+UGFzc3dvcmQ8L2xhYmVsPlxcclxcbiAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJwYXNzd29yZFNpZ25JblxcXCI+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwibWItMyBmb3JtLWNoZWNrXFxcIj5cXHJcXG4gICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBjbGFzcz1cXFwiZm9ybS1jaGVjay1pbnB1dFxcXCIgaWQ9XFxcInJlbWVtYmVyTWVTaWduSW5cXFwiPlxcclxcbiAgICA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY2hlY2stbGFiZWxcXFwiIGZvcj1cXFwicmVtZW1iZXJNZVNpZ25JblxcXCI+Umljb3JkYW1pPC9sYWJlbD5cXHJcXG48L2Rpdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIj5BY2NlZGk8L2J1dHRvbj5cXHJcXG48cD5Ob24gc2VpIGFuY29yYSByZWdpc3RyYXRvPzwvcD5cXHJcXG48YnV0dG9uIGlkPVxcXCJsb2dpblNpZ25VcFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIj5SZWdpc3RyYXRpPC9idXR0b24+XFxyXFxuPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgZGF0YS1icy1kaXNtaXNzPVxcXCJtb2RhbFxcXCI+Q2hpdWRpPC9idXR0b24+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGNsYXNzPVxcXCJ0ZXh0LWNlbnRlciBtYi0zXFxcIj5cXHJcXG4gICAgPGgzPk9oLCBjaSBkaXNwaWFjZSBjaGUgdmFpIHZpYSE8YnI+VG9ybmEgYSB0cm92YXJjaSE8L2gzPlxcclxcbiAgICA8aW1nIHNyYz1cXFwiLi9pbWcvZmFkRmFjZS5wbmdcXFwiIHdpZHRoPVxcXCIxMDBcXFwiIGFsdD1cXFwiaW1tYWdpbmUgdHJpc3RlXFxcIj5cXHJcXG48L2Rpdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIGlkPVxcXCJteU1vZGFsXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwic2lnbkluTW9kYWxMYWJlbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLWNlbnRlcmVkXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cXFwibW9kYWwtdGl0bGUgZnMtNVxcXCIgaWQ9XFxcInNpZ25Jbk1vZGFsTGFiZWxcXFwiPkxvZyBJbjwvaDE+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuLWNsb3NlXFxcIiBkYXRhLWJzLWRpc21pc3M9XFxcIm1vZGFsXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCI+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwibXlNb2RhbEJvZHlcXFwiIGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwibXlNb2RhbEZvb3RlclxcXCIgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPCEtLW5hdmJhciBjb250cm9sbGVyIGljb24tLT5cXHJcXG48YnV0dG9uIGlkPVxcXCJsb2dvXFxcIiBjbGFzcz1cXFwibG9nby1idXR0b25cXFwiPiA8aW1nIGNsYXNzPVxcXCJsb2dvXFxcIiBzcmM9XFxcIi4vaW1nL3Byb2ZpbGUucG5nXFxcIiBhbHQ9XFxcImxvZ29cXFwiPjwvYnV0dG9uPlxcclxcblxcclxcbjxuYXY+XFxyXFxuICA8dWw+XFxyXFxuICAgIDwhLS1uYXZiYXIgYnV0dG9ucy0tPlxcclxcbiAgICA8IS0teSBidXR0b24tLT5cXHJcXG4gICAgPGJ1dHRvbiBpZD1cXFwiaW5zZXJ0aW9uc1xcXCIgY2xhc3M9XFxcImJ1dHRvbi1vbmUgbmF2LWJ1dHRvblxcXCI+QW5udW5jaTwvYnV0dG9uPlxcclxcbiAgICA8IS0teCBidXR0b24tLT5cXHJcXG4gICAgPGJ1dHRvbiBpZD1cXFwibWFuYWdlbWVudFxcXCIgY2xhc3M9XFxcImJ1dHRvbi10d28gbmF2LWJ1dHRvblxcXCI+R2VzdGlvbmUgVXRlbnRpPC9idXR0b24+XFxyXFxuICAgIDwhLS1hIGJ1dHRvbi0tPlxcclxcbiAgICA8YnV0dG9uIGlkPVxcXCJiaG9cXFwiIGNsYXNzPVxcXCJidXR0b24tdGhyZWUgbmF2LWJ1dHRvblxcXCI+dGVtcCBidXR0b248L2J1dHRvbj5cXHJcXG4gICAgPCEtLWIgYnV0dG9uLS0+XFxyXFxuICAgIDxidXR0b24gaWQ9XFxcImxvZ2luXFxcIiBjbGFzcz1cXFwiYnV0dG9uLWZvdXIgbmF2LWJ1dHRvblxcXCIgZGF0YS1icy10b2dnbGU9XFxcIm1vZGFsXFxcIlxcclxcbiAgICAgIGRhdGEtYnMtdGFyZ2V0PVxcXCIjbXlNb2RhbFxcXCI+TG9naW48L2J1dHRvbj5cXHJcXG4gICAgPCEtLWIgYnV0dG9uLS0+XFxyXFxuICAgIDxidXR0b24gaWQ9XFxcInNpZ25PdXRCdXR0b25cXFwiIGNsYXNzPVxcXCJidXR0b24tZm91ciBuYXYtYnV0dG9uXFxcIiBkYXRhLWJzLXRvZ2dsZT1cXFwibW9kYWxcXFwiXFxyXFxuICAgIGRhdGEtYnMtdGFyZ2V0PVxcXCIjbXlNb2RhbFxcXCI+TG9nb3V0PC9idXR0b24+XFxyXFxuXFxyXFxuICAgIDxidXR0b24gaWQ9XFxcInByb2ZpbGVcXFwiIGNsYXNzPVxcXCJwcm9maWxlLWJ1dHRvblxcXCI+XFxyXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcInBvc2l0aW9uLWFic29sdXRlIHRvcC0yIHN0YXJ0LTkwIHRyYW5zbGF0ZS1taWRkbGUgcC0yIGJnLWRhbmdlciBib3JkZXIgYm9yZGVyLWxpZ2h0IHJvdW5kZWQtY2lyY2xlXFxcIj5cXHJcXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPk5ldyBhbGVydHM8L3NwYW4+XFxyXFxuICAgICAgPC9zcGFuPlxcclxcbiAgICAgIDxpbWcgY2xhc3M9XFxcImxvZ28gcHJvZmlsZVxcXCIgc3JjPVxcXCIuL2ltZy9wcm9maWxlLnBuZ1xcXCIgYWx0PVxcXCJsb2dvXFxcIj5cXHJcXG4gICAgPC9idXR0b24+XFxyXFxuICA8L3VsPlxcclxcbjwvbmF2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGgxPlRPRE86IG1vc3RyYXJlIHR1dHRlIGxlIGluZm8gZGVsbCd1dGVudGU8L2gxPlxcclxcbjxoMT5UT0RPOiBmb3JtIG8gYWx0cm8gcGVyIGNhbWJpYXJlIG5pY2tuYW1lIGUvbyBwYXNzd29yZCBlY2M8L2gxPlxcclxcbjxoMT5UT0RPOiBwb3NzaWJpbGl0w6AgZGkgc2NlZ2xpZXJlIGkgZ2lvY2hpIGNoZSBzaSBwb3NzaWVkb25vPC9oMT5cXHJcXG5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxmb3JtPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcIm5hbWVTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5Ob21lPC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwibmFtZVNpZ25VcFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcInN1cm5hbWVTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5Db2dub21lPC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwic3VybmFtZVNpZ25VcFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcInVzZXJuYW1lU2lnblVwXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+Tmlja25hbWU8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJ1c2VybmFtZVNpZ25VcFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImVtYWlsU2lnblVwXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+RW1haWw8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiZW1haWxTaWduVXBcXFwiIHJlcXVpcmVkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJwYXNzd29yZFNpZ25VcFxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPlBhc3N3b3JkPC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInBhc3N3b3JkU2lnblVwXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiY29uZmlybV9wYXNzd29yZFNpZ25VcFxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPkNvbmZlcm1hIFBhc3N3b3JkPC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImNvbmZpcm1fcGFzc3dvcmRTaWduVXBcXFwiIHJlcXVpcmVkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Zvcm0+XFxyXFxuPCEtLSBcXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiBpZD1cXFwic2lnblVwTW9kYWxcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJzaWduVXBNb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctY2VudGVyZWRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCIgaWQ9XFxcInNpZ25VcE1vZGFsTGFiZWxcXFwiPlJlZ2lzdHJhemlvbmU8L2g1PlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0bi1jbG9zZVxcXCIgZGF0YS1icy1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgYXJpYS1sYWJlbD1cXFwiQ2xvc2VcXFwiPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8Zm9ybT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5hbWVTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5Ob21lPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcIm5hbWVTaWduVXBcXFwiIHJlcXVpcmVkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJzdXJuYW1lU2lnblVwXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+Q29nbm9tZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJzdXJuYW1lU2lnblVwXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwidXNlcm5hbWVTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5OaWNrbmFtZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJ1c2VybmFtZVNpZ25VcFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImVtYWlsU2lnblVwXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+RW1haWw8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImVtYWlsU2lnblVwXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwicGFzc3dvcmRTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5QYXNzd29yZDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwicGFzc3dvcmRTaWduVXBcXFwiIHJlcXVpcmVkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJjb25maXJtX3Bhc3N3b3JkU2lnblVwXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+Q29uZmVybWEgUGFzc3dvcmQ8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImNvbmZpcm1fcGFzc3dvcmRTaWduVXBcXFwiIHJlcXVpcmVkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgaWQ9XFxcInN1Ym1pdFNpZ25VcFxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCI+UmVnaXN0cmF0aTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgZGF0YS1icy1kaXNtaXNzPVxcXCJtb2RhbFxcXCI+Q2hpdWRpPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuIC0tPlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGJ1dHRvbiBpZD1cXFwic2lnblVwTG9naW5cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+QWNjZWRpPC9idXR0b24+XFxyXFxuPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIGRhdGEtYnMtZGlzbWlzcz1cXFwibW9kYWxcXFwiPlJlZ2lzdHJhdGk8L2J1dHRvbj5cXHJcXG48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiBkYXRhLWJzLWRpc21pc3M9XFxcIm1vZGFsXFxcIj5DaGl1ZGk8L2J1dHRvbj5cIjsiLCJpbXBvcnQgZGl2IGZyb20gJy4vZm9vdGVyLmh0bWwnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvdCgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9vdGVyXCIpLmlubmVySFRNTCA9IGRpdjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm90OyIsImltcG9ydCBob21lIGZyb20gJy4vaG9tZS5odG1sJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhvbWUoKXtcclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuICAgIG1haW4uaW5uZXJIVE1MICs9IGhvbWU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWU7IiwiaW1wb3J0IG1vZGFsIGZyb20gJy4vbW9kYWwuaHRtbCdcclxuaW1wb3J0IGxvZ2luIGZyb20gJy4uL2xvZ2luL2xvZ2luLmh0bWwnXHJcbmltcG9ydCBsb2dpbkZvb3RlciBmcm9tICcuLi9sb2dpbi9sb2dpbkZvb3Rlci5odG1sJ1xyXG5pbXBvcnQgcmVnaXN0cmF6aW9uZSBmcm9tICcuLi9yZWdpc3RyYXppb25lL3JlZ2lzdHJhemlvbmUuaHRtbCdcclxuaW1wb3J0IHJlZ0Zvb3RlciBmcm9tICcuLi9yZWdpc3RyYXppb25lL3JlZ2lzdHJhemlvbmVGb290ZXIuaHRtbCdcclxuaW1wb3J0IGxvZ291dCBmcm9tICcuLi9sb2dvdXQvbG9nb3V0Lmh0bWwnXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW9kYWwoKXtcclxuICAgIGxldCBkaXZNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXZNb2RhbC5pbm5lckhUTUwgPSBtb2RhbDtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2TW9kYWwpO1xyXG4gICAgc2hvd0xvZ0luTW9kYWwoKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5cIikub25jbGljayA9IHNob3dMb2dJbk1vZGFsO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduT3V0QnV0dG9uXCIpLm9uY2xpY2sgPSBzaG93TG9nT3V0TW9kYWw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dTaWduVXBNb2RhbCgpe1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteU1vZGFsQm9keVwiKS5pbm5lckhUTUwgPSByZWdpc3RyYXppb25lO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteU1vZGFsRm9vdGVyXCIpLmlubmVySFRNTCA9IHJlZ0Zvb3RlcjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnblVwTG9naW5cIikub25jbGljayA9IHNob3dMb2dJbk1vZGFsOyBcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0xvZ0luTW9kYWwoKXtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbEJvZHlcIikuaW5uZXJIVE1MID0gbG9naW47XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxGb290ZXJcIikuaW5uZXJIVE1MID0gbG9naW5Gb290ZXI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luU2lnblVwXCIpLm9uY2xpY2sgPSBzaG93U2lnblVwTW9kYWw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dMb2dPdXRNb2RhbCgpe1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteU1vZGFsQm9keVwiKS5pbm5lckhUTUwgPSBsb2dvdXQ7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxGb290ZXJcIikuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIC8vVE9ETzogY2hhbmdlTmF2QmFyXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRyeVRvU2lnblVwKCkge1xyXG4gICAgaWYgKCF2YWxpZGF0ZVBhc3N3b3JkMigpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coXCJlIGZhY2NpYW1vbGEgc3RhIGZlY2NpXCIpO1xyXG4gICAgY29uc3QgdXNlciA9IHtcclxuICAgICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgIHN1cm5hbWU6IFwiXCIsXHJcbiAgICAgICAgZW1haWw6IFwiXCJcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaChcIi9hY2NvdW50XCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0cnlUb0xvZ0luKCkge1xyXG4gICAgLy9UT0RPXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRyeVRvTG9nT3V0KCkge1xyXG4gICAgLy9UT0RPXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlUGFzc3dvcmQoKSB7XHJcbiAgICBsZXQgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBsZXQgY29uZmlybV9wYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uZmlybV9wYXNzd29yZFNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgaWYgKHBhc3N3b3JkLnZhbHVlICE9IGNvbmZpcm1fcGFzc3dvcmQudmFsdWUpIHtcclxuICAgICAgICBjb25maXJtX3Bhc3N3b3JkLnNldEN1c3RvbVZhbGlkaXR5KFwiUGFzc3dvcmRzIERvbid0IE1hdGNoXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25maXJtX3Bhc3N3b3JkLnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVQYXNzd29yZDIoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNpYW8gZGEgdmFsaWRhdGUyXCIpO1xyXG4gICAgbGV0IHBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzd29yZFNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgbGV0IGNvbmZpcm1fcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbmZpcm1fcGFzc3dvcmRTaWduVXBcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbmZpcm1fcGFzc3dvcmQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJcIik7XHJcbiAgICBpZiAocGFzc3dvcmQudmFsdWUgIT0gY29uZmlybV9wYXNzd29yZC52YWx1ZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2lhbyBkYWxsJ2lmXCIpO1xyXG4gICAgICAgIGNvbmZpcm1fcGFzc3dvcmQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJib3JkZXItY29sb3I6IHJlZDtcIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNb2RhbDsiLCJpbXBvcnQgbmF2IGZyb20gXCIuL25hdmJhci5odG1sXCI7XHJcbmltcG9ydCBjcmVhdGVNb2RhbCBmcm9tIFwiLi4vbW9kYWwvbW9kYWxcIjtcclxuaW1wb3J0IGFubnVuY2kgZnJvbSBcIi4uL2FubnVuY2kvYW5udW5jaS5odG1sXCI7XHJcbmltcG9ydCBob21lIGZyb20gXCIuLi9ob21lL2hvbWUuaHRtbFwiO1xyXG5pbXBvcnQgcHJvZmlsZSBmcm9tIFwiLi4vcHJvZmlsb1V0ZW50ZS9wcm9maWxlLmh0bWxcIjtcclxuaW1wb3J0IGdlc3Rpb25lVXRlbnRpIGZyb20gXCIuLi9nZXN0aW9uZVV0ZW50aS9nZXN0aW9uZVV0ZW50aS5odG1sXCI7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpLmlubmVySFRNTCA9IG5hdjtcclxuICAgIGNyZWF0ZU1vZGFsKCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ29cIikub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MID0gaG9tZTtcclxuICAgIH07XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc2VydGlvbnNcIikub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MID0gYW5udW5jaTtcclxuICAgIH07XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hbmFnZW1lbnRcIikub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MID0gZ2VzdGlvbmVVdGVudGk7XHJcbiAgICB9O1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYW5hZ2VtZW50XCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IHByb2ZpbGU7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0TmF2KCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIikuaW5uZXJIVE1MID0gbmF2O1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU5hdjtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3JlYXRlSG9tZSBmcm9tIFwiLi9ob21lL2hvbWVcIjtcclxuaW1wb3J0IGNyZWF0ZU5hdiBmcm9tIFwiLi9uYXZiYXIvbmF2YmFyXCJcclxuaW1wb3J0IGNyZWF0ZUZvdCBmcm9tIFwiLi9mb290ZXIvZm9vdGVyXCJcclxuaW1wb3J0IHNob3dBbGxVc2VycyBmcm9tIFwiLi9nZXN0aW9uZVV0ZW50aS9nZXN0aW9uZVV0ZW50aVwiXHJcbmltcG9ydCBzaG93SW5zZXJ0aW9ucyBmcm9tIFwiLi9hbm51bmNpL2FubnVuY2lcIlxyXG5cclxuY3JlYXRlTmF2KCk7XHJcbmNyZWF0ZUhvbWUoKTtcclxuY3JlYXRlRm90KCk7XHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
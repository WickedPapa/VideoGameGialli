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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<style>\r\n    .btn:hover {\r\n        outline-color: transparent;\r\n        outline-style: solid;\r\n        box-shadow: 0 0 0 4px #5a01a7;\r\n        transition: 0.7s;\r\n    }\r\n\r\n    #searchTitle:hover {\r\n        outline-color: transparent;\r\n        outline-style: solid;\r\n        box-shadow: 0 0 0 4px #5a01a7;\r\n        transition: 0.7s;\r\n    }\r\n\r\n    #searchTitle {\r\n        box-shadow: -3px 0 black, 0 3px black, 3px 0 black, 0 -3px black;\r\n        height: 20px;\r\n        width: 20%;\r\n        float: bottom;\r\n        align-self: right;\r\n    }\r\n</style>\r\n\r\n<div style=\"display: flex;\" class=\"my-5\">\r\n    <span style=\"margin-right: 40px\">\r\n        <img id=\"selectAll\" class=\"p-0 btn dropdown-toggle\" type=\"button\"\r\n            style=\"border:none;float:left;image-rendering: pixelated;width: 300%;height:auto;\"\r\n            src=\"./img/button/showallBtn.png\" alt=\"\">\r\n    </span>\r\n\r\n    <span class=\"mx-auto dropdown\">\r\n        <img class=\"p-0 btn dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\"\r\n            style=\"border:none;float:left;image-rendering: pixelated;width: 300%;height:auto;\"\r\n            src=\"./img/button/bygenreBtn.png\" alt=\"\">\r\n        <ul id=\"genres\" class=\"dropdown-menu\">\r\n        </ul>\r\n    </span>\r\n\r\n    <span class=\"mx-auto dropdown\">\r\n        <!--Questo è in realtà il filtro per le consolles bisogna cambiare il bottone-->\r\n        <img class=\"p-0 btn dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\"\r\n            style=\"border:none;float:left;image-rendering: pixelated;width: 300%;height:auto;\"\r\n            src=\"./img/button/bygenreBtn.png\" alt=\"\">\r\n        <ul id=\"consolles\" class=\"dropdown-menu\">\r\n        </ul>\r\n    </span>\r\n\r\n    <span class=\"mx-auto dropdown\">\r\n        <img class=\"p-0 btn dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\"\r\n            style=\"border:none;float:left;image-rendering: pixelated;width: 300%;height:auto;\"\r\n            src=\"./img/button/byyearBtn.png\" alt=\"\">\r\n        <ul id=\"years\" class=\"dropdown-menu\">\r\n        </ul>\r\n    </span>\r\n    <div class=\"col-5 my-1 mx-auto\">\r\n        <div class=\"input-group\">\r\n            <input class=\"mx-5 form-control border-end-1 rounded\" type=\"search\" placeholder=\"cerca\"\r\n                id=\"searchTitleInsertions\">\r\n            </span>\r\n        </div>\r\n    </div>\r\n\r\n    <span class=\"mx-auto\">\r\n        <img id=\"addInsertion2\" class=\"p-0 btn dropdown-toggle\" type=\"button\"\r\n            style=\"border:none;float:left;image-rendering: pixelated;width: 300%;height:auto;\"\r\n            src=\"./img/button/plusBtn.png\" hidden alt=\"\">\r\n    </span>\r\n\r\n\r\n</div>\r\n\r\n<div id=\"remains\">\r\n    <div id=\"insertionContent\" class=\"row\">\r\n\r\n    </div>\r\n    <ul class=\"list-group\">\r\n\r\n    </ul>\r\n</div>\r\n\r\n<div>\r\n    <ul id=\"pages\" class=\"pagination pagination-sm my-2\">\r\n\r\n    </ul>\r\n</div>");

/***/ }),

/***/ "./src/annunci/annuncio.html":
/*!***********************************!*\
  !*** ./src/annunci/annuncio.html ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("    <div id=\"back\">\r\n        <img id=\"backgames\" style=\"image-rendering: pixelated;\" class=\"mt-4 buttonhover mb-4\" width=120 src=\"./img/button/backBtn.png\">\r\n    </div>\r\n   <!--  -->\r\n\r\n<div class=\"row\" style=\"background-color: rgba(0,0,0,0.7);\">\r\n    <div class=\"col-md-6\">\r\n        <div>\r\n            <div id=\"imageSlider\" class=\"carousel slide\" data-bs-ride=\"true\">\r\n                <div id=\"indicator\" class=\"carousel-indicators\">\r\n                </div>\r\n                <div id=\"inner\" class=\"carousel-inner\">\r\n                </div>\r\n                <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#imageSlider\" data-bs-slide=\"prev\">\r\n                    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n                    <span class=\"visually-hidden\">Precedente</span>\r\n                </button>\r\n                <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#imageSlider\" data-bs-slide=\"next\">\r\n                    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n                    <span class=\"visually-hidden\">Successiva</span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div id=\"givedGame\">\r\n                    <div class=\"card mb-3\" style=\"max-width: 540px;\">\r\n                        <div class=\"row g-0\">\r\n                            <div id=\"card-image\" class=\"col-md-4\">\r\n\r\n                            </div>\r\n                            <div class=\"col-md-8\">\r\n                                <div id=\"card-body\" class=\"card-body\">\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div id=\"insertion-description\" class=\"font-size:20px color:white col-md-12\">\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div id=\"insertion-confirm\" class=\"my-4\">\r\n                \r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"my-5 text-center\">\r\n    <h3><span id=\"insertion-creator\"></span> vorrebbe uno di questi giochi in cambio:</h3>\r\n</div>\r\n\r\n<div class=\"accordion row\" id=\"accordionExample\">\r\n    <div class=\"accordion-item col-md-4\">\r\n        <h2 class=\"accordion-header\" id=\"headingOne\">\r\n            <button id=\"btn-item-1\" class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\"\r\n                data-bs-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n\r\n            </button>\r\n        </h2>\r\n        <div id=\"collapseOne\" class=\"accordion-collapse collapse\" aria-labelledby=\"headingOne\"\r\n            data-bs-parent=\"#accordionExample\">\r\n            <div class=\"accordion-body\">\r\n                <div id=\"img-item-1\" class=\"card mx-auto\" style=\"width: 18rem;\">\r\n                    \r\n                    <div id=\"body-item-1\" class=\"card-body text-center\">\r\n                        \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"accordion-item col-md-4\">\r\n        <h2 class=\"accordion-header\" id=\"headingTwo\">\r\n            <button id=\"btn-item-2\" class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\"\r\n                data-bs-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\r\n\r\n            </button>\r\n        </h2>\r\n        <div id=\"collapseTwo\" class=\"accordion-collapse collapse\" aria-labelledby=\"headingTwo\"\r\n            data-bs-parent=\"#accordionExample\">\r\n            <div class=\"accordion-body\">\r\n                <div id=\"img-item-2\" class=\"card mx-auto\" style=\"width: 18rem;\">\r\n                    \r\n                    <div id=\"body-item-2\" class=\"card-body text-center\">\r\n                        \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"accordion-item col-md-4\">\r\n        <h2 class=\"accordion-header\" id=\"headingThree\">\r\n            <button id=\"btn-item-3\" class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\"\r\n                data-bs-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\r\n\r\n            </button>\r\n        </h2>\r\n        <div id=\"collapseThree\" class=\"accordion-collapse collapse\" aria-labelledby=\"headingThree\"\r\n            data-bs-parent=\"#accordionExample\">\r\n            <div class=\"accordion-body\">\r\n                <div id=\"img-item-3\" class=\"card mx-auto\" style=\"width: 18rem;\">\r\n                    \r\n                    <div id=\"body-item-3\" class=\"card-body text-center\">\r\n                        \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/annunci/gestioneannunci.html":
/*!******************************************!*\
  !*** ./src/annunci/gestioneannunci.html ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<style>\r\n    .massimoboldi {\r\n        font-weight: bold;\r\n    }\r\n</style>\r\n<div class=\"my-5\" style=\"font-weight: bold;\">\r\n    <div style=\"display: flex;\">\r\n        <span>\r\n            <!-- Allerta Martellata: se tolgo il bottone tolgo pure la lista,\r\n                quindi l'ho messo hidden-->\r\n            <button hidden id=\"addInsertion\" style=\"color:white\" class=\"btn btn-danger\">\r\n                <img src=\"./img/plus.png\" alt=\"plus\" style=\"width:25px\">\r\n                Inserisci Annuncio\r\n            </button>\r\n        </span>\r\n    </div>\r\n\r\n    <br>\r\n    <div style=\"display: inline-flex;\">\r\n\r\n        <span style=\"margin-right: 40px\">\r\n            <h4 style=\"font-weight: bold;\"> Nome Categoria: </h4>\r\n        </span>\r\n\r\n        <span style=\"margin-right: 40px\"> <input type=\"text\" class=\"form-control border-end-1 border rounded-pill\"\r\n                style=\"font-weight: bold;\" value=\"\" placeholder=\"Categoria\" style=\"margin-right:20px\" id=\"categoryName\">\r\n        </span>\r\n\r\n        <span style=\"margin-right: 40px\"> <button class=\"btn btn-primary\" style=\"font-weight: bold;\"\r\n                id=\"createCategory\">Crea Categoria</button> </span>\r\n\r\n    </div>\r\n    <br>\r\n\r\n    <div id=\"remains\">\r\n        <br>\r\n        <ul id=\"insertionContent2\" class=\"list-group\" style=\"font-weight: bold;\">\r\n\r\n        </ul>\r\n\r\n    </div>\r\n    <div>\r\n        <ul id=\"pages2\" class=\"pagination pagination-sm my-2\" style=\"font-weight: bold;\">\r\n\r\n        </ul>\r\n\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/chat/chatBody.html":
/*!********************************!*\
  !*** ./src/chat/chatBody.html ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div id=\"chatBody\" class=\"card-body overflow-auto\" data-mdb-perfect-scrollbar=\"true\"\r\n    style=\"position: relative; height: 740px\">\r\n</div>");

/***/ }),

/***/ "./src/chat/chatFooter.html":
/*!**********************************!*\
  !*** ./src/chat/chatFooter.html ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div id=\"chatFooter\" class=\"card-footer text-muted d-flex justify-content-start align-items-center p-3\">\r\n\r\n    <div class=\"input-group mb-0\">\r\n        <input id=\"messageText\" type=\"text\" class=\"form-control\" placeholder=\"Scrivi il messaggio\"\r\n            aria-label=\"Recipient's username\" aria-describedby=\"button-addon2\" />\r\n        <button class=\"btn btn-warning\" type=\"button\" id=\"button-addon2\" style=\"padding-top: .55rem;\">\r\n            Invia\r\n        </button>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/chat/chatHeader.html":
/*!**********************************!*\
  !*** ./src/chat/chatHeader.html ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div id=\"chatHeader\" class=\"card-header d-flex justify-content-between align-items-center p-3\">\r\n    <h5 id=\"chatTitle\" class=\"mb-0\"></h5>\r\n    <div class=\"d-flex flex-row align-items-center\">\r\n        <span class=\"badge bg-warning me-3\">20</span>\r\n        <i id=\"backToList\" class=\"fas fa-times text-muted fa-xs\"></i>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/creaAnnuncio/creaAnnuncio.html":
/*!********************************************!*\
  !*** ./src/creaAnnuncio/creaAnnuncio.html ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<style>\r\n  #insertCont {\r\n    background-color: rgba(255, 255, 255, 0.3); border: 3px solid green;\r\n  }\r\n\r\n  .btn:hover {\r\n        outline-color: transparent ;\r\n        outline-style: solid;\r\n        box-shadow: 0 0 0 4px #5a01a7;\r\n        transition: 0.7s;\r\n    }\r\n\r\n  .form-control:hover{\r\n        outline-color: transparent ;\r\n        outline-style: solid;\r\n        box-shadow: 0 0 0 4px #5a01a7;\r\n        transition: 0.7s;\r\n    }\r\n</style>\r\n\r\n<div id=\"insertCont\" class=\"rounded my-2 container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 text-center\">\r\n      <h2 class=\"border-primary border-bottom border-2\"><b>Inserisci Annuncio</b></h2>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-4\">\r\n      <div class=\"mb-3\">\r\n        <label for=\"title\" class=\"form-label\">\r\n          <h3><b>Titolo Annuncio</b></h3>\r\n        </label>\r\n        <input type=\"text\" class=\"border border-2 border-info form-control\" id=\"titleInsertion\" placeholder=\"Titolo Annuncio\">\r\n      </div>\r\n      <div class=\"mb-3\">\r\n        <label for=\"description\" class=\"form-label\">\r\n          <h3><b>Descrizione Videogioco</b></h3>\r\n        </label>\r\n        <textarea class=\"border border-2 border-info form-control\" id=\"descriptionInsertion\" rows=\"3\" placeholder=\"Descrizione Annuncio\"></textarea>\r\n      </div>\r\n      <div>\r\n        <label for=\"tradeGame\" class=\"text-center\">\r\n          <h3><b>Trade-Game</b></h3>\r\n          <h5>Da quale tesorino ti vorresti separare?</h5>\r\n          <span class=\"dropdown text-center\">\r\n            <button id=\"selectedTradeGame\" class=\"mb-2 border border-2 border-dark btn btn-light dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" placeholder=\"Quanti bei giochini!\">\r\n            </button>\r\n            <ul id=\"tradeGame\" class=\"dropdown-menu\">\r\n            </ul>\r\n          </span>\r\n        </label>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"col-4\">\r\n      <div>\r\n        <label for=\"wishGames\" class=\"text-center\">\r\n          <h3><b>Wish-List</b></h3>\r\n          <h5>Che giochi vorresti ricevere in cambio del tuo tesorino?</h5>\r\n\r\n          <span class=\"dropdown text-center\">\r\n            <button class=\"border border-2 border-dark btn btn-light dropdown-toggle\" type=\"button\"\r\n              data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n              Solo 3 Eh! Non bariamo!\r\n            </button>\r\n            <ul id=\"wishGames\" class=\"p-0 dropdown-menu\">\r\n            </ul>\r\n          </span>\r\n        </label>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-4\">\r\n      <div class=\"mb-3\">\r\n        <label for=\"gallery\" class=\"form-label\">\r\n          <h3><b>Immagini</b></h3>\r\n        </label>\r\n        <textarea class=\"border border-2 border-info form-control\" id=\"galleryInsertion\" rows=\"7\"\r\n          placeholder=\"Inserisci le url delle imagini dell'annuncio da inserire, ognuna divisa dalla virgola Es: http://imgurl/img.png,http://imgurl/img2.png\"></textarea>\r\n      </div>\r\n      <div class=\"mb-3\">\r\n        <ul id=\"selectedGames\">\r\n          \r\n        </ul>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"mb-3 mt-3 text-center p-0\" style=\"border:none;float:left;image-rendering: pixelated;width: 100%;height:auto;\">\r\n      <img id=\"sendInsertion\" class=\"p-0 btn\" type=\"button\" src=\"./img/button/addBtn.png\" alt=\"\" style=\"border:none;width:9%;\">\r\n    </div>\r\n  </div>\r\n</div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<style>\r\n  .cardfooter {\r\n    margin-top: 10%;\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n\r\n  .footerlinks {\r\n    text-decoration-line: none;\r\n    -webkit-text-fill-color: black;\r\n    font-weight: bold;\r\n  }\r\n\r\n  a:hover, a:active {\r\n    -webkit-text-fill-color: grey;\r\n  }\r\n\r\n  li {\r\n    display: inline;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n  }\r\n\r\n\r\n  body {\r\n    min-height: 100vh;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n\r\n\r\n  footer {\r\n    min-height: 50px;\r\n  }\r\n\r\n  /* The article fills all the space between header & footer */\r\n  body {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  div.container {\r\n    flex: 1;\r\n  }\r\n\r\n</style>\r\n\r\n<div class=\"cardfooter\">\r\n  <div class=\"card-header\">\r\n    <img src=\"./img/videogameloverfooter.png\" style=\"width:27%; padding: 2%;  opacity: 0.8;\" alt=\"\">\r\n  </div>\r\n  <div class=\"card-body\" style=\"padding-bottom: 1%;\">\r\n    <ul>\r\n      <li> <a href=\"#\" class=\"footerlinks\">Home</a> </li>\r\n      <li> <a href=\"#\" class=\"footerlinks\">Paolo</a> </li>\r\n      <li> <a href=\"#\" class=\"footerlinks\">Piero</a> </li>\r\n      <li> <a href=\"#\" class=\"footerlinks\">About Us</a> </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"card-footer text-muted\" style=\"padding-bottom: 1%; -webkit-text-fill-color: rgb(22, 22, 22);\">\r\n    <p  class=\"footerlinks\"> ©2023 Paolo Enterprise Inc. | Tutti i diritti riservati (a Pierino) </p>\r\n  </div>\r\n</div>\r\n<!--\r\n<style>\r\nbody {\r\n  display: grid;\r\n  grid-template-rows: 1fr 10rem auto;\r\n  grid-template-areas: \"main\" \".\" \"footer\";\r\n  overflow-x: hidden;\r\n  background: #F5F7FA;\r\n  min-height: 100vh;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\nbody .footer {\r\n  z-index: 1;\r\n  --footer-background:#ED5565;\r\n  display: grid;\r\n  position: relative;\r\n  grid-area: footer;\r\n  min-height: 12rem;\r\n}\r\nbody .footer .bubbles {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 1rem;\r\n  background: var(--footer-background);\r\n  filter: url(\"#blob\");\r\n}\r\nbody .footer .bubbles .bubble {\r\n  position: absolute;\r\n  left: var(--position, 50%);\r\n  background: var(--footer-background);\r\n  border-radius: 100%;\r\n  -webkit-animation: bubble-size var(--time, 4s) ease-in infinite var(--delay, 0s), bubble-move var(--time, 4s) ease-in infinite var(--delay, 0s);\r\n          animation: bubble-size var(--time, 4s) ease-in infinite var(--delay, 0s), bubble-move var(--time, 4s) ease-in infinite var(--delay, 0s);\r\n  transform: translate(-50%, 100%);\r\n}\r\nbody .footer .content {\r\n  z-index: 2;\r\n  display: grid;\r\n  grid-template-columns: 1fr auto;\r\n  grid-gap: 4rem;\r\n  padding: 2rem;\r\n  background: var(--footer-background);\r\n}\r\nbody .footer .content a, body .footer .content p {\r\n  color: #F5F7FA;\r\n  text-decoration: none;\r\n}\r\nbody .footer .content b {\r\n  color: white;\r\n}\r\nbody .footer .content p {\r\n  margin: 0;\r\n  font-size: 0.75rem;\r\n}\r\nbody .footer .content > div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\nbody .footer .content > div > div {\r\n  margin: 0.25rem 0;\r\n}\r\nbody .footer .content > div > div > * {\r\n  margin-right: 0.5rem;\r\n}\r\nbody .footer .content > div .image {\r\n  align-self: center;\r\n  width: 4rem;\r\n  height: 4rem;\r\n  margin: 0.25rem 0;\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n\r\n@-webkit-keyframes bubble-size {\r\n  0%, 75% {\r\n    width: var(--size, 4rem);\r\n    height: var(--size, 4rem);\r\n  }\r\n  100% {\r\n    width: 0rem;\r\n    height: 0rem;\r\n  }\r\n}\r\n\r\n@keyframes bubble-size {\r\n  0%, 75% {\r\n    width: var(--size, 4rem);\r\n    height: var(--size, 4rem);\r\n  }\r\n  100% {\r\n    width: 0rem;\r\n    height: 0rem;\r\n  }\r\n}\r\n@-webkit-keyframes bubble-move {\r\n  0% {\r\n    bottom: -4rem;\r\n  }\r\n  100% {\r\n    bottom: var(--distance, 10rem);\r\n  }\r\n}\r\n@keyframes bubble-move {\r\n  0% {\r\n    bottom: -4rem;\r\n  }\r\n  100% {\r\n    bottom: var(--distance, 10rem);\r\n  }\r\n}\r\n</style>\r\n\r\n<div class=\"main\"></div>\r\n<div class=\"footer\">\r\n  <div class=\"bubbles\">\r\n    <div class=\"bubble\" style=\"--size:2.6645230162851963rem; --distance:7.3041160367426174rem; --position:83.56368053338483%; --time:3.4956403096272295s; --delay:-2.773938196237702s;\"></div>\r\n    <div class=\"bubble\" style=\"--size:5.894149849838016rem; --distance:7.627974484300427rem; --position:93.36878188393642%; --time:3.7601486272838756s; --delay:-3.397102288403029s;\"></div>\r\n    <div class=\"bubble\" style=\"--size:2.798647106665685rem; --distance:9.200496817222525rem; --position:0.20775732698414195%; --time:2.2010960220058657s; --delay:-2.698948216464545s;\"></div>\r\n    <div class=\"bubble\" style=\"--size:4.359621926782294rem; --distance:7.46357993007419rem; --position:47.867831746850925%; --time:2.120820561270724s; --delay:-2.5141778492182336s;\"></div>\r\n    <div class=\"bubble\" style=\"--size:5.028352050978196rem; --distance:7.242720036832249rem; --position:30.69984615927396%; --time:3.2535955281062883s; --delay:-3.3554545325439715s;\"></div>\r\n    <div class=\"bubble\" style=\"--size:2.755978221857193rem; --distance:7.469972496926509rem; --position:10.238227020701139%; --time:2.647200152008366s; --delay:-3.5721594622496218s;\"></div>\r\n    <div class=\"bubble\" style=\"--size:5.0848128172087375rem; --distance:9.558554142584626rem; --position:94.51982057832215%; --time:3.7155558762173055s; --delay:-3.081006696757859s;\"></div>\r\n    <div class=\"bubble\" style=\"--size:3.537807560775958rem; --distance:9.421423529841928rem; --position:5.396274211709013%; --time:3.1787894556018856s; --delay:-3.446169905186775s;\"></div>\r\n    <div class=\"bubble\" style=\"--size:5.627731218600348rem; --distance:7.746463416075165rem; --position:10.928802493469531%; --time:2.56792593225669s; --delay:-3.404873101451986s;\"></div>\r\n    <div class=\"bubble\" style=\"--size:3.6949599219472313rem; --distance:9.181549586750107rem; --position:-4.589055563798976%; --time:3.7095220652888345s; --delay:-3.1295861315916067s;\"></div>\r\n    <div class=\"bubble\" style=\"--size:2.759264221067178rem; --distance:8.42688809955137rem; --position:28.046728293124502%; --time:3.2840961105236s; --delay:-2.366519874309387s;\"></div>\r\n    <div class=\"bubble\" style=\"--size:2.5743082435105684rem; --distance:9.430653962573853rem; --position:30.83974647173961%; --time:3.6865700176230707s; --delay:-3.619039606033297s;\"></div>\r\n  </div>\r\n  <div class=\"content\">\r\n    <div>\r\n      <div><b>Eldew</b><a href=\"#\">Secuce</a><a href=\"#\">Drupand</a><a href=\"#\">Oceash</a><a href=\"#\">Ugefe</a><a href=\"#\">Babed</a></div>\r\n      <div><b>Spotha</b><a href=\"#\">Miskasa</a><a href=\"#\">Agithe</a><a href=\"#\">Scesha</a><a href=\"#\">Lulle</a></div>\r\n      <div><b>Chashakib</b><a href=\"#\">Chogauw</a><a href=\"#\">Phachuled</a><a href=\"#\">Tiebeft</a><a href=\"#\">Ocid</a><a href=\"#\">Izom</a><a href=\"#\">Ort</a></div>\r\n      <div><b>Athod</b><a href=\"#\">Pamuz</a><a href=\"#\">Vapert</a><a href=\"#\">Neesk</a><a href=\"#\">Omemanen</a></div>\r\n    </div>\r\n    <div><a class=\"image\" href=\"https://codepen.io/z-\" target=\"_blank\" style=\"background-image: url(&quot;https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/happy.svg&quot;)\"></a>\r\n      <p>©2019 Not Really</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n<svg style=\" top:100vh\">\r\n  <defs>\r\n    <filter id=\"blob\">\r\n      <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"10\" result=\"blur\"></feGaussianBlur>\r\n      <feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9\" result=\"blob\"></feColorMatrix>\r\n      feComposite(in=\"SourceGraphic\" in2=\"blob\" operator=\"atop\") //After reviewing this after years I can't remember why I added this but it isn't necessary for the blob effect\r\n</filter>\r\n</defs>\r\n</svg>\r\n-->");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<nav aria-label=\"...\">\r\n    <div>\r\n        <h1 class=\"text-center\">Gestisci Utenti Registrati</h1>\r\n    </div>\r\n    <ul id=\"userList\" class=\"list-group\">\r\n        \r\n    </ul>\r\n    <ul id=\"pagination\" class=\"pagination pagination-sm my-2\">\r\n        \r\n    </ul>\r\n</nav>\r\n");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div id=\"bgaround\" class=\"text-center my-5\">\r\n    <img src=\"./img/videogamelover.png\" alt=\"not found\" class=\"headerImg mx-auto\" style=\"width: 50%; \" id=\"headerImg\">\r\n</div>\r\n\r\n<style>\r\n\r\n  .widgetIntro {\r\n    display: inline-block;\r\n  }\r\n\r\n  .widgetIntro-div{\r\n    text-align: left;\r\n    float: left;\r\n  }\r\n  \r\n  #annCard {\r\n\r\n    width: 40%;\r\n    height: 500px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    align-self: center;\r\n  }\r\n\r\n  #imgCard {\r\n    height: 60%;\r\n    width:fit-content;\r\n    align-self: center;\r\n  }\r\n\r\n  .btn:hover {\r\n    outline-color: transparent ;\r\n    outline-style: solid;\r\n    box-shadow: 0 0 0 4px #5a01a7;\r\n    transition: 0.7s;\r\n  }\r\n\r\n  .imgS {\r\n    width: 54px;\r\n    height: 42px;\r\n  }\r\n\r\n  body {\r\n    text-align: center;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .widgetPic {\r\n    width: auto;\r\n    height: 100%;\r\n  }\r\n\r\n  .picRight {\r\n    margin-right: 0px;\r\n  }\r\n\r\n  .picleft {\r\n    margin-left: 0px;\r\n  }\r\n\r\n  .sec {\r\n    margin-top: 10%;\r\n    margin-bottom: 10%;\r\n    width: 100%;\r\n    background-color: rgba(255, 255, 255, 0.5);\r\n    padding: auto;\r\n  }\r\n\r\n  .p {\r\n    padding: 0px;\r\n  }\r\n \r\n</style>\r\n\r\n<section class=\"p sec border border-success mb-2 border-opacity-50 rounded row aling-item-start\">\r\n  <div class=\"p col-4\">\r\n    <picture>\r\n      <img class=\"widgetPic picLeft rounded-start\" src=\"./img/gamesearch.jpeg\" style=\"width:100%\" alt=\"\">\r\n    </picture>\r\n  </div>\r\n  <div class=\"border-start border-3 border-primary col-8 text-start widgetText\">\r\n    <h1>\r\n      <b>Il portale dei veri gamers.</b>\r\n    </h1>\r\n    <h2>\r\n      Sei alla ricerca di un gioco, vecchio o nuovo che sia, ma non riesci a trovarlo? Noi abbiamo la soluzione per te...\r\n      Cerca tra centinaia di annunci il titolo che non trovavi più, mettiti in contatto con l'utente che lo sta scambiando \r\n      e fai l'affare del secolo...\r\n    </h2>\r\n  </div>\r\n</section>\r\n\r\n<div class=\"container text-center\" style=\"margin-top: 10%; margin-bottom: 10%;\">\r\n  <div class=\"row\" style=\"margin-left:10%;margin-right:10%;\">\r\n    <div class=\"col\">\r\n      <div class=\"card text-bg-danger\" style=\"width: 18rem;height: 100%;\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Cerca</h5>\r\n          <p class=\"card-text\">Cerca il tuo gioco prefereito tra centinaia di annunci</p>\r\n          <hr>\r\n          <div class=\"input-group mb-3 form-control border rounded\" style=\"margin-top: 10px;\">\r\n            <input type=\"text\" class=\"form-control border-0\" id=\"searchTitle\" placeholder=\"Cerca\" aria-label=\"search\" aria-describedby=\"basic-addon2\">\r\n            <a id=\"searchButtonTitle\" href=\"#\"><img class=\"ms-1 btn imgS\" src=\"./img/search.png\" alt=\"\"></a>\r\n          </div> \r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\">\r\n      <div class=\"card text-bg-primary\" style=\"width: 18rem;height: 100%;\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Esplora</h5>\r\n          <p class=\"card-text\">Esplora miglialia di giochi tra gli annunci presenti</p>\r\n          <hr>\r\n          <a href=\"#\" id=\"insertionsCard\" class=\"btn btn-info\">Annunci</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\">\r\n      <div class=\"card text-bg-success\" style=\"width: 18rem;height: 100%;\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Scambia</h5>\r\n          <p class=\"card-text\">Hai un gioco di cui non te ne fai più nulla per le miliardi di volte che lo hai finito?\r\n            inserisci qui il tuo annuncio!\r\n          </p>\r\n          <hr>\r\n          <a href=\"#\" id=\"insertCard\" class=\"btn btn-light\">Inserisci Annuncio</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<section class=\"p sec border border-success mb-2 border-opacity-50 rounded row aling-item-start\">\r\n  <div class=\"border-end border-3 border-primary col-8 text-start widgetText\">\r\n    <h1>\r\n      <b>Il portale dei veri gamers.</b>\r\n    </h1>\r\n    <h2>\r\n      Sei alla ricerca di un gioco, vecchio o nuovo che sia, ma non riesci a trovarlo? Noi abbiamo la soluzione per te...\r\n      Cerca tra centinaia di annunci il titolo che non trovavi più, mettiti in contatto con l'utente che lo sta vendendo, \r\n      e fai l'affare del secolo...\r\n    </h2>\r\n  </div>\r\n  <div class=\"p col-4\">\r\n    <picture>\r\n      <img class=\"widgetPic picRight rounded-end\" src=\"./img/gametrade.png\" style=\"width:100%\" alt=\"\">\r\n    </picture>\r\n  </div>\r\n</section>\r\n\r\n<h1><b>Ultimi annunci:</b></h1>\r\n<h2>Controlla qui gli ultimi annunci</h2>\r\n<div id=\"carouselExampleControls\" class=\"carousel slide\" data-bs-ride=\"carousel\">\r\n    <div id=\"innerCarouselHome\" class=\"carousel-inner\">\r\n       \r\n    </div>\r\n    <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#carouselExampleControls\" data-bs-slide=\"prev\">\r\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"visually-hidden\">Previous</span>\r\n    </button>\r\n    <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#carouselExampleControls\" data-bs-slide=\"next\">\r\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"visually-hidden\">Next</span>\r\n    </button>\r\n  </div>\r\n\r\n<section class=\"p sec border border-success mb-2 border-opacity-50 rounded row aling-item-start\">\r\n  <div class=\"p col-4\">\r\n    <picture>\r\n      <img class=\"widgetPic picLeft rounded-start\" src=\"./img/Reunion.jpeg\" style=\"width:100%\" alt=\"\">\r\n    </picture>\r\n  </div>\r\n  <div class=\"border-start border-3 border-primary col-8 text-start widgetText\">\r\n    <h1>\r\n      <b>Chi Siamo</b>\r\n    </h1>\r\n    <h2>\r\n      Siamo un punto d'incontro per tutti quelli che si sono appassionati a quel mondo magico rinchiuso all'interno\r\n      di una cartuccia, disco o scheda, dandogli l'opportunità di poter ritrovare vecchi sogni, e scambiarli con alcuni nuovi.\r\n      L'opportunita di conoscere persone dello stesso parere, o opposto.\r\n    </h2>\r\n  </div>\r\n</section>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"mb-3\">\r\n    <label for=\"usernameSignIn\" class=\"form-label\">Nickname</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"usernameSignIn\">\r\n</div>\r\n<div class=\"mb-3\">\r\n    <label for=\"passwordSignIn\" class=\"form-label\">Password</label>\r\n    <input type=\"password\" class=\"form-control\" id=\"passwordSignIn\">\r\n</div>\r\n<div class=\"mb-3 form-check\">\r\n    <input type=\"checkbox\" class=\"form-check-input\" id=\"rememberMeSignIn\">\r\n    <label class=\"form-check-label\" for=\"rememberMeSignIn\">Ricordami</label>\r\n</div>\r\n<div id=\"loginResult\" class=\"my-3\">\r\n\r\n</div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<button id=\"tryToLog\" type=\"button\" class=\"btn btn-success\">Accedi</button>\r\n<p>Non sei ancora registrato?</p>\r\n<button id=\"loginSignUp\" type=\"button\" class=\"btn btn-warning\">Registrati</button>\r\n<button type=\"button\" class=\"btn btn-danger\" data-bs-dismiss=\"modal\">Chiudi</button>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" aria-labelledby=\"signInModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h1 class=\"modal-title fs-5\" id=\"signInModalLabel\">Account</h1>\r\n                <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\r\n            </div>\r\n            <div id=\"myModalBody\" class=\"modal-body\">\r\n                \r\n            </div>\r\n            <div id=\"myModalFooter\" class=\"modal-footer\">\r\n                \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--navbar controller icon-->\r\n<button id=\"logo\" class=\"logo-button\"> <img class=\"logo\" src=\"./img/logo.png\" alt=\"logo\"></button>\r\n<button id=\"games\" class=\"logo-button back-transparent\"> <img class=\"logo\" src=\"./img/joystick(1).png\"\r\n    alt=\"logo\"></button>\r\n<nav>\r\n  <ul>\r\n    <!--navbar buttons-->\r\n    <!--navbar controller icon-->\r\n\r\n    <!--y button-->\r\n    <button id=\"insertions\" class=\"button-one nav-button\">Annunci</button>\r\n    <!--a button-->\r\n    <button id=\"addInsertion\" class=\"button-three nav-button\">Crea Annuncio</button>\r\n    <!--x button-->\r\n    <button id=\"management\" class=\"button-two nav-button\">Gestione Utenti</button>\r\n    <!--a button-->\r\n    <button id=\"insManagement\" class=\"button-three nav-button\">Gestione Annunci</button>\r\n    <!--b button-->\r\n    <button id=\"login\" class=\"button-four nav-button\" data-bs-toggle=\"modal\" data-bs-target=\"#myModal\">Login</button>\r\n    <!--b button-->\r\n    <button id=\"signOutButton\" class=\"button-four nav-button\" data-bs-toggle=\"modal\"\r\n      data-bs-target=\"#myModal\">Logout</button>\r\n    <button id=\"profile\" class=\"profile-button\">\r\n      <span class=\"position-absolute top-2 start-90 translate-middle p-2 bg-danger border border-light rounded-circle\">\r\n        <span class=\"visually-hidden\">New alerts</span>\r\n      </span>\r\n      <img class=\"logo profile\" src=\"./img/profile.png\" alt=\"logo\">\r\n    </button>\r\n  </ul>\r\n\r\n\r\n</nav>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<style>\r\n    #main{\r\n        background-color: rgba(255,255,255,0.3);\r\n        border-left: 4px solid rgb(63, 63, 68);\r\n        border-right: 4px solid rgb(63, 63, 68);\r\n        border-bottom: 4px solid rgb(63, 63, 68);\r\n        border-radius: 5px;\r\n\r\n    }\r\n</style>\r\n<div class=\"row mt-4 mb-4\">\r\n    <div id=\"titleprofile\" class=\"col-12 text-center\">\r\n\r\n    </div>\r\n</div>\r\n<div class=\"row mt-2 mb-4\">\r\n    <div class=\"col-12 text-center\">\r\n        <h2>\r\n            <b>Ecco un riepilogo dei tuoi dati:</b>\r\n        </h2>\r\n    </div>\r\n</div>\r\n<div class=\"row mt-5 mb-2\">\r\n    <div class=\"col-2 text-end\">\r\n        <h2>\r\n            <br><br><br> <b>Username</b>: \r\n            <br><br> <b>Email</b>: \r\n            <br><br> <b>Nome</b>: \r\n            <br><br> <b>Cognome</b>: \r\n        </h2>\r\n    </div>\r\n    <div id=\"bodyprofile\" class=\"col-4 text-center\">\r\n\r\n\r\n    </div>\r\n    <div id=\"buttons-profile\" class=\"col-2 text-center\">\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n    </div>\r\n\r\n\r\n    <div id=\"input-profile\" class=\"col-4 \">\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <div  class=\"input-group mb-3\" >\r\n            <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\" id=\"basic-addon1\">Username</span>\r\n            </div>\r\n            <input id=\"username\" type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-label=\"Username\"\r\n                aria-describedby=\"basic-addon1\">\r\n        </div>\r\n        <div  class=\"input-group mb-3 my-4\" >\r\n            <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\" id=\"basic-addon1\">Email</span>\r\n            </div>\r\n            <input id=\"email\" type=\"text\" class=\"form-control\" placeholder=\"Email\" aria-label=\"Email\"\r\n                aria-describedby=\"basic-addon1\">\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row mt-2 mb-4\">\r\n    <div class=\"col-12 text-center\">\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <h3><b>Cambio Password</b></h3>\r\n        <br>\r\n        <br>\r\n    </div>\r\n    <div class=\"col-6 text-end\">\r\n        <div  class=\"input-group mb-3\" >\r\n            <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\" id=\"basic-addon1\">Vecchia password</span>\r\n            </div>\r\n            <input id=\"oldPassword\" type=\"password\" class=\"form-control\" placeholder=\"VecchiaPassword\" aria-label=\"VecchiaPassword\"\r\n                aria-describedby=\"basic-addon1\">\r\n        </div>\r\n    </div>\r\n    <div class=\"col-6 text-start\">\r\n        <div  class=\"input-group mb-3\" >\r\n            <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\" id=\"basic-addon1\">Nuova Password</span>\r\n            </div>\r\n            <input id=\"newPassword\" type=\"password\" class=\"form-control\" placeholder=\"NuovaPassword\" aria-label=\"NuovaPassword\"\r\n                aria-describedby=\"basic-addon1\">\r\n        </div>\r\n    </div>\r\n    <div  id=\"cp\" class=\"col-12 text-center my-5\">\r\n        \r\n        \r\n        \r\n    </div>\r\n</div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<form>\r\n    <div class=\"mb-3\">\r\n        <label for=\"nameSignUp\" class=\"form-label\">Nome</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"nameSignUp\" required>\r\n    </div>\r\n    <div class=\"mb-3\">\r\n        <label for=\"surnameSignUp\" class=\"form-label\">Cognome</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"surnameSignUp\" required>\r\n    </div>\r\n    <div class=\"mb-3\">\r\n        <label for=\"usernameSignUp\" class=\"form-label\">Nickname</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"usernameSignUp\" required>\r\n    </div>\r\n    <div class=\"mb-3\">\r\n        <label for=\"emailSignUp\" class=\"form-label\">Email</label>\r\n        <input type=\"email\" class=\"form-control\" id=\"emailSignUp\" required>\r\n    </div>\r\n    <div class=\"mb-3\">\r\n        <label for=\"passwordSignUp\" class=\"form-label\">Password</label>\r\n        <input type=\"password\" class=\"form-control\" id=\"passwordSignUp\" required>\r\n    </div>\r\n    <div class=\"mb-3\">\r\n        <label for=\"confirm_passwordSignUp\" class=\"form-label\">Conferma Password</label>\r\n        <input type=\"password\" class=\"form-control\" id=\"confirm_passwordSignUp\" required>\r\n    </div>\r\n    <div id=\"signUpResult\" class=\"mb-3\">\r\n\r\n    </div>\r\n</form>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<button id=\"signUpLogin\" type=\"button\" class=\"btn btn-primary\">Accedi</button>\r\n<button id=\"trytoSignUp\" type=\"button\" class=\"btn btn-success\" disabled>Registrati</button>\r\n<button type=\"button\" class=\"btn btn-danger\" data-bs-dismiss=\"modal\">Chiudi</button>");

/***/ }),

/***/ "./src/videogiochi/creaVideogioco.html":
/*!*********************************************!*\
  !*** ./src/videogiochi/creaVideogioco.html ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div id=\"createVGContainer\" class=\"container my-5 back-semi-transparent\" style=\"border-radius: 10px;\r\n    border-top: 5px solid rgb(171, 209, 57);\r\n    border-bottom: 5px solid rgb(171, 209, 57);\r\n    border-right: 5px solid rgb(171, 209, 57);\r\n    border-left: 5px solid rgb(171, 209, 57);\r\n    \">\r\n    <div class=\"row align-items-start\">\r\n        <div class=\"col-4\" style=\"\r\n        border-right: 3px solid rgb(171, 209, 57); \r\n        border-bottom: 3px solid rgb(171, 209, 57);\r\n        border-bottom-right-radius: 10px;\r\n        \">\r\n\r\n            <div class=\"mb-3\">\r\n                <div class=\"my-3\">\r\n                    <h2 class=\"text-center\"><b>Crea console e generi</b></h2>\r\n                </div>\r\n                <label for=\"newGenre\" class=\"form-label\"><b>Nuovo Genere</b></label>\r\n                <input type=\"text\" class=\"form-control\" id=\"newGenre\" placeholder=\"Inserisci nuovo genere\">\r\n            </div>\r\n            <button id=\"newGenreBtn\" class=\"btn mb-4 button-hover\"><b>Crea</b></button>\r\n            <div class=\"mb-3\">\r\n                <label for=\"newConsole\" class=\"form-label\"><b>Nuova Console</b></label>\r\n                <input type=\"text\" class=\"form-control\" id=\"newConsole\" placeholder=\"Inserisci nuova console\">\r\n            </div>\r\n            <button id=\"newConsoleBtn\" class=\"btn mb-4 button-hover\"><b>Crea</b></button>\r\n\r\n        </div>\r\n        <div class=\"col-8\">\r\n            <div class=\"my-3\">\r\n                <h2 class=\"text-center\"><b>Inserisci Dati Videogioco</b></h2>\r\n            </div>\r\n            <div class=\"mb-5\">\r\n                <label for=\"name\" class=\"form-label\"><b>Titolo</b></label>\r\n                <input type=\"text\" class=\"form-control\" id=\"VGname\" placeholder=\"Inserisci il titolo del gioco\">\r\n            </div>\r\n            <div class=\"mb-5\">\r\n                <label for=\"year\" class=\"form-label\"><b>Anno di Uscita</b></label>\r\n                <input type=\"number\" class=\"form-control\" id=\"VGyear\" min=\"1970\" maxlength=\"2023\" placeholder=\"Inserisci l'anno di uscita\">\r\n            </div>\r\n            <div class=\"mb-5\">\r\n                <label class=\"form-label\" for=\"cover\"><b>Link immagine</b></label>\r\n                <input type=\"text\" class=\"form-control\" id=\"VGcover\" placeholder=\"Inserisci il link della copertina\">\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"row align-items-start\">\r\n        \r\n        <div class=\"col-4\">\r\n            \r\n            <h4 class=\"text-end\"><b>Seleziona categorie:</b></h4>\r\n        </div>\r\n        \r\n        <div id=\"genreList\" class=\"col-8\">\r\n            \r\n            \r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row align-items-start\">\r\n        <div class=\"col-4\">\r\n            <br><br>\r\n            <h4 class=\"text-end\"><b>Seleziona console:</b></h4>\r\n        </div>\r\n        <div id=\"consoleList\" class=\"col-8\">\r\n            \r\n            \r\n        </div>\r\n        <button id=\"newVideoGameBtn\" class=\"btn mb-4 button-hover\"><b>Crea</b></button>\r\n    </div>\r\n\r\n</div>");

/***/ }),

/***/ "./src/videogiochi/videogiochi.html":
/*!******************************************!*\
  !*** ./src/videogiochi/videogiochi.html ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<style>\r\n    .btn:hover {\r\n        outline-color: transparent;\r\n        outline-style: solid;\r\n        box-shadow: 0 0 0 4px #5a01a7;\r\n        transition: 0.7s;\r\n    }\r\n\r\n    #searchTitle:hover {\r\n        outline-color: transparent;\r\n        outline-style: solid;\r\n        box-shadow: 0 0 0 4px #5a01a7;\r\n        transition: 0.7s;\r\n    }\r\n\r\n    #searchTitle {\r\n        box-shadow: -3px 0 black, 0 3px black, 3px 0 black, 0 -3px black;\r\n        height: 20px;\r\n        width: 20%;\r\n        float: bottom;\r\n        align-self: right;\r\n    }\r\n</style>\r\n\r\n<div style=\"display: flex;\" class=\"my-5\">\r\n\r\n    <span style=\"margin-right: 40px\">\r\n        <img src=\"./img/button/showallBtn.png\" class=\"btn p-0\" height=\"35\"\r\n            style=\"border:none;image-rendering: pixelated;\" type=\"button\" id=\"selectAllGames\">\r\n    </span>\r\n    <!--funzione che prende tutti gli annunci e li schiaffa nel contenuto annunci-->\r\n    <span style=\"margin-right: 40px\" class=\"dropdown\">\r\n        <img src=\"./img/button/bygenreBtn.png\" class=\"btn p-0 dropdown-toggle\" height=\"35\"\r\n            style=\"border:none;image-rendering: pixelated;\" type=\"button\" data-bs-toggle=\"dropdown\"\r\n            aria-expanded=\"false\">\r\n        <ul id=\"gameGenres\" class=\"dropdown-menu\">\r\n\r\n        </ul>\r\n    </span>\r\n\r\n    <span style=\"margin-right: 40px\" class=\"dropdown\">\r\n        <!--Questo è il filtro per le consolles va cambiata l'immagine del bottone-->\r\n        <img src=\"./img/button/bygenreBtn.png\" class=\"btn p-0 dropdown-toggle\" height=\"35\"\r\n            style=\"border:none;image-rendering: pixelated;\" type=\"button\" data-bs-toggle=\"dropdown\"\r\n            aria-expanded=\"false\">\r\n        <ul id=\"gameConsolles\" class=\"dropdown-menu\">\r\n\r\n        </ul>\r\n    </span>\r\n\r\n    <span style=\"margin-right: 40px\" class=\"dropdown\">\r\n        <img src=\"./img/button/byyearBtn.png\" class=\"btn p-0 dropdown-toggle\" height=\"35\"\r\n            style=\"border:none;image-rendering: pixelated;\" type=\"button\" data-bs-toggle=\"dropdown\"\r\n            aria-expanded=\"false\">\r\n        <ul id=\"gameYears\" class=\"dropdown-menu\">\r\n\r\n        </ul>\r\n    </span>\r\n    <div style=\"vertical-align: middle;\" class=\"col-md-3 mx-auto\">\r\n        <div class=\"input-group\">\r\n            <input class=\"form-control border-dark border-3 border rounded\" type=\"search\" placeholder=\"cerca\"\r\n                style=\"padding: 2px 4px 2px 4px;margin-right:20px\" id=\"searchTitleGame\">\r\n        </div>\r\n    </div>\r\n    <img src=\"./img/button/plusBtn.png\" class=\"btn p-0\" id=\"addVideogame\" alt=\"plus\" height=\"35\"\r\n        style=\"border:none;image-rendering: pixelated;\" type=\"button\" hidden>\r\n</div>\r\n\r\n<div>\r\n    <div id=\"VideogameContent\" class=\"row\">\r\n\r\n    </div>\r\n</div>\r\n\r\n<div>\r\n    <ul id=\"pagesV\" class=\"pagination pagination-sm my-2\">\r\n\r\n    </ul>\r\n</div>");

/***/ }),

/***/ "./src/videogiochi/visualizzaVideogioco.html":
/*!***************************************************!*\
  !*** ./src/videogiochi/visualizzaVideogioco.html ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("     <img  id=\"back-games\"  class=\"mt-4 buttonhover\" width=120 src=\"./img/back.png\">\r\n\r\n\r\n<div class=\"row\" >\r\n    <div id= \"gameTitle\" class=\"col-12 text-center\">\r\n\r\n    </div>\r\n</div>\r\n<div>\r\n    <div class=\"row\">\r\n        <div id=\"gameImage\" class=\"col-6 text-center\">\r\n    \r\n        </div>\r\n        <div id=\"gameInfo\" class=\"col-6 text-center\">\r\n    \r\n        </div>\r\n    </div>\r\n    \r\n        <div id=\"gameInfo\" class=\"col-6 text-center\">\r\n    \r\n        </div>\r\n    \r\n</div>\r\n\r\n    \r\n");

/***/ }),

/***/ "./src/annunci/annunci.ts":
/*!********************************!*\
  !*** ./src/annunci/annunci.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assignFilters": () => (/* binding */ assignFilters),
/* harmony export */   "createPage": () => (/* binding */ createPage),
/* harmony export */   "createPagination": () => (/* binding */ createPagination),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "searchByTitle": () => (/* binding */ searchByTitle)
/* harmony export */ });
/* harmony import */ var _creaAnnuncio_creaAnnuncio_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../creaAnnuncio/creaAnnuncio.html */ "./src/creaAnnuncio/creaAnnuncio.html");
/* harmony import */ var _annuncio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./annuncio */ "./src/annunci/annuncio.ts");
/* harmony import */ var _creaAnnuncio_creaAnnuncio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../creaAnnuncio/creaAnnuncio */ "./src/creaAnnuncio/creaAnnuncio.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



let list = [];
let filteredList = [];
let view = 6;
let type;
let genres;
let years;
let consolles;
function createPage() {
    return __awaiter(this, void 0, void 0, function* () {
        fetch("/whoIsLogged")
            .then((response) => response.json())
            .then((data) => {
            if (data == "ADMIN" || data == "USER") {
                document.getElementById("addInsertion2").removeAttribute("hidden");
                let btn = document.getElementById("addInsertion2");
                btn.onclick = () => {
                    document.getElementById("main").innerHTML = _creaAnnuncio_creaAnnuncio_html__WEBPACK_IMPORTED_MODULE_0__["default"];
                    (0,_creaAnnuncio_creaAnnuncio__WEBPACK_IMPORTED_MODULE_2__["default"])();
                };
            }
            else {
                document.getElementById("addInsertion2").setAttribute("hidden", "true");
                type = "GUEST";
            }
            list = [];
            fetch('/insertion')
                .then((response) => response.json())
                .then((data) => {
                for (let d of data) {
                    list.push(d);
                }
                createPagination();
                showResults(1);
                assignFilters();
            });
        });
    });
}
function getAllInsertions() {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch('/insertion')
            .then((response) => response.json())
            .then((data) => {
            list = [];
            for (let d of data) {
                list.push(d);
            }
        });
    });
}
function showResults(i) {
    return __awaiter(this, void 0, void 0, function* () {
        let content = document.getElementById("insertionContent");
        content.innerHTML = "";
        let start = (i - 1) * view;
        let stop = (i * view) - 1;
        for (start; start <= stop; start++) {
            if (start >= list.length) {
                return;
            }
            if (!list[start].approved || list[start].outcome != "WIP") {
                continue;
            }
            let col = document.createElement("div");
            col.setAttribute("class", "col-4 text-center");
            col.setAttribute("style", "background-color: rgba(0,0,0,0.2)");
            col.onmouseover = () => {
                col.setAttribute("style", "background-color: rgba(0,0,0,0.6)");
            };
            col.onmouseout = () => {
                col.setAttribute("style", "background-color: rgba(0,0,0,0.2)");
            };
            let insertionOne = list[start];
            col.onclick = () => {
                (0,_annuncio__WEBPACK_IMPORTED_MODULE_1__["default"])(insertionOne);
            };
            let title = document.createElement("h1");
            let image = document.createElement("img");
            let description = document.createElement("h5");
            let game = document.createElement("h5");
            let genre = document.createElement("h5");
            let year = document.createElement("h5");
            let console = document.createElement("h5");
            let trades = document.createElement("h5");
            let date = document.createElement("h5");
            image.src = list[start].tradeGame.cover.link;
            image.setAttribute('class', 'mb-2 border border-3 border-info');
            image.height = 200;
            title.innerHTML = list[start].title;
            title.setAttribute('class', 'mx-auto mt-2 rounded-top bg-light border-bottom border-3 border-primary');
            description.innerHTML = list[start].description;
            description.setAttribute('class', 'mb-0 border-top border-3 border-primary bg-light');
            game.innerHTML = list[start].tradeGame.name;
            game.setAttribute('class', 'mb-0 bg-light');
            for (let i = 0; i < list[start].tradeGame.genre.length; i++) {
                genre.innerHTML += list[start].tradeGame.genre[i].genre + " ";
                genre.setAttribute('class', 'mb-0 bg-light');
            }
            year.innerHTML = "" + list[start].tradeGame.year;
            year.setAttribute('class', 'mb-0 bg-light');
            console.innerHTML = list[start].tradeGame.console.console;
            console.setAttribute('class', 'mb-0 bg-light');
            trades.innerHTML = "Accetterei Scambio con: " + list[start].wishList[0].name;
            trades.setAttribute('class', 'mb-0 bg-light');
            date.innerHTML = list[start].publicationDate;
            date.setAttribute('class', 'rounded-bottom border-bottom border-3 border-primary bg-light');
            col.append(title, image, description, game, genre, year, console, trades, date);
            content.append(col);
        }
    });
}
function createPagination() {
    let size = list.length;
    let tabs = Math.ceil(size / view);
    let pages = document.getElementById("pages");
    pages.innerHTML = "";
    for (let i = 1; i <= tabs; i++) {
        let li = document.createElement("li");
        if (i == 1) {
            li.setAttribute("class", "page-item active");
            li.setAttribute("aria-current", "page");
        }
        else {
            li.setAttribute("class", "page-item");
        }
        let btn = document.createElement("button");
        btn.setAttribute("class", "page-link");
        btn.onclick = () => {
            let allLi = document.getElementById("pages").children;
            for (let oneLi of allLi) {
                oneLi.setAttribute("class", "page-item");
                oneLi.removeAttribute("aria-current");
            }
            li.setAttribute("class", "page-item active");
            li.setAttribute("aria-current", "page");
            showResults(i);
        };
        btn.innerHTML = "" + (i);
        li.appendChild(btn);
        document.getElementById("pages").appendChild(li);
    }
}
function setAllConsolles() {
    consolles = [];
    for (let i = 0; i < list.length; i++) {
        if (!(consolles.includes(list[i].tradeGame.console.console))) {
            consolles.push(list[i].tradeGame.console.console);
            let ul = document.getElementById("consolles");
            let li = document.createElement("li");
            li.id = list[i].tradeGame.console.console;
            let btn = document.createElement("button");
            btn.setAttribute("class", "dropdown-item");
            btn.innerHTML = list[i].tradeGame.console.console;
            btn.onclick = () => {
                searchByGameConsolle(li.id);
            };
            ul.append(li);
            li.append(btn);
        }
    }
}
function setAllGenres() {
    genres = [];
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list[i].tradeGame.genre.length; j++) {
            if (!(genres.includes(list[i].tradeGame.genre[j].genre))) {
                genres.push(list[i].tradeGame.genre[j].genre);
                let ul = document.getElementById("genres");
                let li = document.createElement("li");
                li.id = list[i].tradeGame.genre[j].genre;
                let btn = document.createElement("button");
                btn.setAttribute("class", "dropdown-item");
                btn.innerHTML = list[i].tradeGame.genre[j].genre;
                btn.onclick = () => {
                    searchByGenre(li.id);
                };
                ul.append(li);
                li.append(btn);
            }
        }
    }
}
function setAllYears() {
    years = [];
    for (let i = 0; i < list.length; i++) {
        if (!(years.includes(list[i].tradeGame.year))) {
            years.push(list[i].tradeGame.year);
            let ul = document.getElementById("years");
            let li = document.createElement("li");
            li.id = "" + list[i].tradeGame.year;
            let btn = document.createElement("button");
            btn.setAttribute("class", "dropdown-item");
            btn.innerHTML = "" + list[i].tradeGame.year;
            btn.onclick = () => {
                searchByYear(Number(li.id));
            };
            ul.append(li);
            li.append(btn);
        }
    }
}
function searchByAll() {
    return __awaiter(this, void 0, void 0, function* () {
        list = [];
        fetch('/insertion')
            .then((response) => response.json())
            .then((data) => {
            for (let d of data) {
                list.push(d);
            }
            setAllGenres();
            createPagination();
            showResults(1);
        });
    });
}
function searchByTitle(title) {
    filteredList = [];
    for (let element of list) {
        let gameName = element.tradeGame.name;
        let insertionTitle = element.title;
        if ((gameName.toUpperCase().includes(title.toUpperCase()))
            || (insertionTitle.toUpperCase().includes(title.toUpperCase()))) {
            filteredList.push(element);
        }
    }
    list = [];
    list = filteredList;
    createPagination();
    showResults(1).then(() => {
        getAllInsertions();
    });
}
function searchByGameConsolle(console) {
    filteredList = [];
    for (let element of list) {
        if (element.tradeGame.console.console == console) {
            filteredList.push(element);
        }
    }
    list = [];
    list = filteredList;
    createPagination();
    showResults(1);
    getAllInsertions();
}
function searchByGenre(genre) {
    filteredList = [];
    for (let element of list) {
        for (let i = 0; i < element.tradeGame.genre.length; i++) {
            if (element.tradeGame.genre[i].genre == genre) {
                filteredList.push(element);
                i = element.tradeGame.genre.length;
            }
        }
    }
    list = [];
    list = filteredList;
    createPagination();
    showResults(1);
    getAllInsertions();
}
function searchByYear(year) {
    filteredList = [];
    for (let element of list) {
        if (element.tradeGame.year == year) {
            filteredList.push(element);
        }
    }
    list = [];
    list = filteredList;
    createPagination();
    showResults(1);
    getAllInsertions();
}
function assignFilters() {
    let allGames = document.getElementById("selectAll");
    allGames.onclick = () => {
        searchByAll();
    };
    setAllConsolles();
    setAllGenres();
    setAllYears();
    let searchTitle = document.getElementById("searchTitleInsertions");
    searchTitle.onkeydown = (e) => {
        if (e.key == 'Enter') {
            searchByTitle(searchTitle.value);
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPage);


/***/ }),

/***/ "./src/annunci/annuncio.ts":
/*!*********************************!*\
  !*** ./src/annunci/annuncio.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "expandInsertion": () => (/* binding */ expandInsertion)
/* harmony export */ });
/* harmony import */ var _annuncio_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./annuncio.html */ "./src/annunci/annuncio.html");
/* harmony import */ var _annunci__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./annunci */ "./src/annunci/annunci.ts");
/* harmony import */ var _annunci_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./annunci.html */ "./src/annunci/annunci.html");
/* harmony import */ var _home_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/home */ "./src/home/home.ts");




function expandInsertion(insertion) {
    /*Imposto la pagina principale con il template del singolo annuncio */
    let main = document.getElementById("main");
    main.innerHTML = _annuncio_html__WEBPACK_IMPORTED_MODULE_0__["default"];
    document.getElementById("backgames").onclick = () => {
        document.getElementById("main").innerHTML = _annunci_html__WEBPACK_IMPORTED_MODULE_2__["default"];
        (0,_annunci__WEBPACK_IMPORTED_MODULE_1__["default"])();
    };
    let back = document.getElementById("back");
    //back.append(button);
    let title = document.createElement("h1");
    title.innerHTML = insertion.title;
    back.append(title);
    /*Imposto il carosello delle immagini utente */
    let indicator = document.getElementById("indicator");
    for (let i = 0; i < insertion.gallery.length; i++) {
        let btn = document.createElement("button");
        btn.setAttribute("data-bs-target", "#imageSlider");
        btn.setAttribute("data-bs-slide-to", "" + i);
        if (i == 0) {
            btn.setAttribute("class", "active");
            btn.setAttribute("aria-current", "true");
        }
        btn.setAttribute("aria-label", "Slide " + (i + 1));
        indicator.append(btn);
    }
    let inner = document.getElementById("inner");
    for (let i = 0; i < insertion.gallery.length; i++) {
        let div = document.createElement("div");
        if (i == 0) {
            div.setAttribute("class", "carousel-item active");
        }
        else {
            div.setAttribute("class", "carousel-item");
        }
        let img = document.createElement("img");
        img.src = insertion.gallery[i].link;
        img.width = 400;
        img.setAttribute("class", "d-block w-100");
        img.alt = "Gallery Image" + (i + 1);
        div.append(img);
        inner.append(div);
    }
    let img = document.createElement("img");
    img.src = insertion.tradeGame.cover.link;
    img.setAttribute("class", "img-fluid rounded-start");
    document.getElementById("card-image").append(img);
    let h4 = document.createElement("h4");
    h4.setAttribute("class", "card-title");
    h4.innerHTML = insertion.tradeGame.name;
    let p = document.createElement("p");
    p.setAttribute("class", "card-text");
    p.setAttribute("style", "font-size: 1.5em;");
    p.innerHTML = "Genere: ";
    for (let i = 0; i < insertion.tradeGame.genre.length; i++) {
        p.innerHTML += insertion.tradeGame.genre[i].genre + " ";
    }
    p.innerHTML += "<br>"
        + "Anno: " + insertion.tradeGame.year + "<br>"
        + "Console: " + insertion.tradeGame.console.console;
    document.getElementById("card-body").append(h4, p);
    let publisher = document.createElement("h3");
    fetch("/user/" + insertion.publisher.id)
        .then((response) => response.json())
        .then((data) => {
        publisher.innerHTML = "Utente: " + data.username + " Punteggio: " + insertion.publisher.rating;
        publisher.setAttribute("style", "color:white");
        let desc = document.createElement("h2");
        desc.setAttribute("style", "color:white");
        desc.innerHTML = "Descrizione:";
        let insDesc = document.createElement("h3");
        insDesc.setAttribute("style", "color:white");
        insDesc.innerHTML = insertion.description;
        document.getElementById("insertion-creator").innerHTML = "L'utente"; //insertion.publisher.username;
        document.getElementById("insertion-description").append(publisher, desc, insDesc);
        for (let i = 0; i < 3; i++) {
            document.getElementById("btn-item-" + (i + 1)).innerHTML = insertion.wishList[i].name;
            let img = document.createElement("img");
            img.src = insertion.wishList[i].cover.link;
            img.setAttribute("class", "card-img-top");
            img.onclick = () => { createProposal(insertion.id, insertion.wishList[i], insertion.tradeGame, insertion.publisher); };
            document.getElementById("img-item-" + (i + 1)).append(img);
            let p = document.createElement("p");
            p.setAttribute("class", "card-text");
            p.setAttribute("style", "font-size: 1.5em;");
            p.innerHTML = "Genere: ";
            for (let j = 0; j < insertion.wishList[i].genre.length; j++) {
                p.innerHTML += insertion.wishList[i].genre[j].genre + " ";
            }
            p.innerHTML += "<br>"
                + "Anno: " + insertion.wishList[i].year + "<br>"
                + "Console: " + insertion.wishList[i].console.console;
            document.getElementById("body-item-" + (i + 1)).append(p);
        }
    });
}
function createProposal(insertionId, wishGame, tradeGame, publisher) {
    let proposalDiv = document.getElementById("insertion-confirm");
    proposalDiv.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.innerHTML = "Sei sicuro di voler scambiare " + wishGame.name + " per " + tradeGame.name + "?";
    let btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.setAttribute("class", "btn btn-success");
    btn.innerHTML = "Conferma";
    h3.setAttribute("style", "font-size:20px; color:white");
    proposalDiv.append(h3, btn);
    const proposal = {
        insertionId: insertionId,
        tradeGame: tradeGame,
        wishGame: wishGame,
        publisher: publisher
    };
    btn.onclick = () => { confirmProposal(proposal); };
}
function confirmProposal(proposal) {
    const request = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(proposal)
    };
    fetch("/insertion/confirm", request)
        .then((response) => response.json())
        .then((data) => {
        if (!data.logged) {
            alert("non sei loggato");
        }
        else if (!data.thisIsYou) {
            alert("che fai clicchi sul tuo stesso annuncio?!?");
        }
        else if (!data.hasGame) {
            alert("non possiedi il gioco");
        }
        else if (data.alreadyHave) {
            alert("ma hai già questo gioco!");
        }
        else {
            alert("Scambio effettuato!");
            (0,_home_home__WEBPACK_IMPORTED_MODULE_3__["default"])();
        }
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (expandInsertion);


/***/ }),

/***/ "./src/annunci/gestioneannunci.ts":
/*!****************************************!*\
  !*** ./src/annunci/gestioneannunci.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addInsertionToList": () => (/* binding */ addInsertionToList),
/* harmony export */   "createCategory": () => (/* binding */ createCategory),
/* harmony export */   "createPage2": () => (/* binding */ createPage2),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _creaAnnuncio_creaAnnuncio_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../creaAnnuncio/creaAnnuncio.html */ "./src/creaAnnuncio/creaAnnuncio.html");
/* harmony import */ var _annuncio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./annuncio */ "./src/annunci/annuncio.ts");
/* harmony import */ var _creaAnnuncio_creaAnnuncio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../creaAnnuncio/creaAnnuncio */ "./src/creaAnnuncio/creaAnnuncio.ts");



let list = [];
let view = 6;
function createPage2() {
    list = [];
    fetch('/insertion')
        .then((response) => response.json())
        .then((data) => {
        for (let d of data) {
            list.push(d);
        }
        document.getElementById("createCategory").onclick = createCategory;
        let btn = document.getElementById("addInsertion");
        btn.onclick = () => {
            document.getElementById("main").innerHTML = _creaAnnuncio_creaAnnuncio_html__WEBPACK_IMPORTED_MODULE_0__["default"];
            (0,_creaAnnuncio_creaAnnuncio__WEBPACK_IMPORTED_MODULE_2__["default"])();
        };
        createPagination2();
        showResults2(1);
    });
}
function createPagination2() {
    let size = list.length;
    let tabs = Math.ceil(size / view);
    let pages = document.getElementById("pages2");
    pages.innerHTML = "";
    for (let i = 1; i <= tabs; i++) {
        let li = document.createElement("li");
        if (i == 1) {
            li.setAttribute("class", "page-item active");
            li.setAttribute("aria-current", "page");
        }
        else {
            li.setAttribute("class", "page-item");
        }
        let btn = document.createElement("button");
        btn.setAttribute("class", "page-link");
        btn.onclick = () => {
            let allLi = document.getElementById("pages2").children;
            for (let oneLi of allLi) {
                oneLi.setAttribute("class", "page-item");
                oneLi.removeAttribute("aria-current");
            }
            li.setAttribute("class", "page-item active");
            li.setAttribute("aria-current", "page");
            showResults2(i);
        };
        btn.innerHTML = "" + (i);
        li.appendChild(btn);
        document.getElementById("pages2").appendChild(li);
    }
}
function showResults2(i) {
    let content = document.getElementById("insertionContent2");
    content.innerHTML = "";
    let start = (i - 1) * view;
    let stop = (i * view) - 1;
    for (start; start <= stop; start++) {
        if (start >= list.length) {
            return;
        }
        let col = document.createElement("div");
        let juan = list[start].title; //"" + start;
        //Juan è l'id dei bottoni, sarà l'id delle inserzioni quando si implementeranno gli annunci dal db
        let isOnCheckedListResult = false;
        for (let element of checkedList) {
            if (juan == element) {
                isOnCheckedListResult = true;
            }
        }
        col.setAttribute("class", 'list-group-item');
        if (isOnCheckedListResult) {
            col.setAttribute("style", "background-color: rgba(0,0,0,0.6)");
        }
        else {
            col.setAttribute("style", "background-color: rgba(0,0,0,0.2)");
            col.setAttribute('onmouseover', 'setAttribute("style", "background-color: rgba(0,0,0,0.6)")');
            col.setAttribute('onmouseout', 'setAttribute("style", "background-color: rgba(0,0,0,0.2)")');
        }
        col.setAttribute("id", juan);
        col.onclick = () => {
            addInsertionToList(juan);
        };
        let title = document.createElement("h2");
        title.setAttribute('style', 'font-weight: bold;');
        let description = document.createElement("p");
        title.innerHTML = list[start].title + " | " + list[start].outcome;
        description.innerHTML = "" + list[start].tradeGame.name;
        for (let i = 0; i < list[start].tradeGame.genre.length; i++) {
            description.innerHTML += ", " + list[start].tradeGame.genre[i].genre + "";
        }
        description.innerHTML += ", " + list[start].tradeGame.year;
        description.innerHTML += ", " + list[start].tradeGame.console.console;
        let col2 = document.createElement("div");
        let btn_show = document.createElement("button");
        let btn_approve = document.createElement("button");
        let ins = list[start];
        let id = list[start].id;
        btn_approve.id = "btn_approve" + id;
        btn_show.setAttribute("class", "btn btn-primary btn-sm");
        btn_show.innerHTML = "Mostra annuncio";
        if (list[start].approved) {
            btn_approve.setAttribute("class", "btn btn-success btn-sm");
            btn_approve.innerHTML = "Annuncio approvato";
        }
        else {
            btn_approve.setAttribute("class", "btn btn-warning btn-sm");
            btn_approve.innerHTML = "Da approvare";
        }
        btn_approve.onclick = () => { changeInsertionStatus(id); };
        btn_show.onclick = () => { (0,_annuncio__WEBPACK_IMPORTED_MODULE_1__["default"])(ins); };
        col.append(title, description);
        col2.append(btn_show, btn_approve);
        content.append(col, col2);
    }
}
function changeInsertionStatus(id) {
    fetch("/insertion/" + id)
        .then((response) => response.json())
        .then((data) => {
        let btn_approve = document.getElementById("btn_approve" + id);
        if (data) {
            btn_approve.setAttribute("class", "btn btn-success btn-sm");
            btn_approve.innerHTML = "Annuncio approvato";
        }
        else {
            btn_approve.setAttribute("class", "btn btn-warning btn-sm");
            btn_approve.innerHTML = "Da approvare";
        }
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPage2);
let checkedList = [];
function addInsertionToList(ins) {
    let isOnCheckedList = false;
    for (let element of checkedList) {
        if (ins == element) {
            isOnCheckedList = true;
            checkedList.splice(checkedList.indexOf(element), 1);
        }
    }
    if (isOnCheckedList) {
        document.getElementById(ins).setAttribute("style", "background-color: rgba(0,0,0,0.2)");
        document.getElementById(ins).setAttribute('onmouseover', 'setAttribute("style", "background-color: rgba(0,0,0,0.6)")');
        document.getElementById(ins).setAttribute('onmouseout', 'setAttribute("style", "background-color: rgba(0,0,0,0.2)")');
    }
    else {
        checkedList.push(ins);
        document.getElementById(ins).removeAttribute('onmouseover');
        document.getElementById(ins).removeAttribute('onmouseout');
        document.getElementById(ins).setAttribute("style", "background-color: rgba(0,0,0,0.6)");
    }
}
function createCategory() {
    const obj = {
        description: document.getElementById("categoryName").value,
        insertionsTitle: checkedList,
    };
    const request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    };
    fetch("/category", request)
        .then((response) => response.json())
        .then((data) => {
        if (data > 0) {
            alert("Categoria Creata");
        }
        else {
            alert("E' FINIIIITAA!!");
        }
    });
    //Prende il valore della casella di testo e lo mette come nome della categoria
    //TODO: LA FEEEEEEEEEEEEETCH!!!
    //TODO: inserisci gli elementi di checkedList in una categoria nel DB
    //TODO: Metodo da fare per inserire gli elementi nel database haha
    //Svuota il valore della casella di testo e la lista
    checkedList = [];
    //Reimposta la pagina a come stava prima
    createPagination2();
    showResults2(1);
}


/***/ }),

/***/ "./src/chat/chat.ts":
/*!**************************!*\
  !*** ./src/chat/chat.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addClickChat": () => (/* binding */ addClickChat),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "searchNotification": () => (/* binding */ searchNotification),
/* harmony export */   "searchUserChats": () => (/* binding */ searchUserChats),
/* harmony export */   "stopSearchNotification": () => (/* binding */ stopSearchNotification)
/* harmony export */ });
/* harmony import */ var _chatHeader_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatHeader.html */ "./src/chat/chatHeader.html");
/* harmony import */ var _chatBody_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chatBody.html */ "./src/chat/chatBody.html");
/* harmony import */ var _chatFooter_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chatFooter.html */ "./src/chat/chatFooter.html");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



let chatVersions = new Map();
function addClickChat() {
    document.getElementById("showChatUsers").onclick = () => {
        showUsersChat(), document.getElementById("alert").setAttribute("hidden", "true");
    };
}
function showUsersChat() {
    fetch("/user")
        .then((response) => response.json())
        .then((data) => {
        fetch("/user/this")
            .then((thisUserSerialyzed) => thisUserSerialyzed.json())
            .catch((error) => {
            return;
        })
            .then((thisUser) => {
            let chatBox = document.getElementById("chatBox");
            chatBox.innerHTML = "";
            let div = document.createElement("div");
            div.setAttribute("class", "list-group");
            for (let user of data) {
                if (user.userId != thisUser.userId) {
                    let btn = document.createElement("button");
                    btn.setAttribute("type", "button");
                    btn.setAttribute("class", "list-group-item list-group-item-action");
                    btn.id = "" + user.userId;
                    btn.innerHTML = user.username + " " + user.rating + " <i class='fa-regular fa-star'></i>";
                    btn.onclick = () => { findChat(Number(btn.id)); };
                    div.append(btn);
                    chatBox.append(div);
                }
            }
        });
    });
}
function findChat(idReceiver) {
    fetch("/chat/" + idReceiver)
        .then((serializedIdChat) => serializedIdChat.json())
        .then((idChat) => {
        if (idChat != -1) {
            fetch("/user/" + idReceiver)
                .then((serializedUserInfo) => serializedUserInfo.json())
                .then((userInfo) => {
                let chatBox = document.getElementById("chatBox");
                chatBox.innerHTML = "";
                chatBox.innerHTML = _chatHeader_html__WEBPACK_IMPORTED_MODULE_0__["default"] + _chatBody_html__WEBPACK_IMPORTED_MODULE_1__["default"] + _chatFooter_html__WEBPACK_IMPORTED_MODULE_2__["default"];
                let chatTitle = document.getElementById("chatTitle");
                chatTitle.innerHTML = userInfo.username + " " + userInfo.rating + " <i class='fa-regular fa-star'></i>";
                //let idRefresh = setInterval(()=>{openChat(Number(idChat));}, 1000);
                openChat(Number(idChat));
            });
        }
    });
}
function openChat(chatId) {
    return __awaiter(this, void 0, void 0, function* () {
        document.getElementById("chatBody").innerHTML = "";
        document.getElementById("backToList").onclick = showUsersChat;
        yield fetch("/chat/conversation/" + chatId)
            .then((serializedConversation) => serializedConversation.json())
            .then((conversation) => {
            fetch("/user/this")
                .then((serializedThisUserInfo) => serializedThisUserInfo.json())
                .then((thisUserInfo) => {
                let textBox = document.getElementById("messageText");
                document.getElementById("button-addon2").onclick = () => {
                    createMessage(thisUserInfo.userId, chatId);
                    textBox.value = "";
                };
                textBox.onkeydown = (e) => {
                    if (e.key == 'Enter') {
                        createMessage(thisUserInfo.userId, chatId);
                        textBox.value = "";
                    }
                };
                for (let message of conversation) {
                    if (message.username == thisUserInfo.username) {
                        buildMessageSended(thisUserInfo.username, thisUserInfo.rating, message.timestamp, message.text);
                    }
                    else {
                        buildMessageRecived(message.username, message.rating, message.timestamp, message.text);
                    }
                }
            });
        });
        function buildMessageRecived(username, rating, timestamp, text) {
            let chatBody = document.getElementById("chatBody");
            let divInfo = document.createElement("div");
            divInfo.setAttribute("class", "d-flex justify-content-between");
            let pDate = document.createElement("p");
            pDate.setAttribute("class", "small mb-1 text-muted");
            pDate.innerHTML = normalPersonDateTransform(timestamp);
            let pUsername = document.createElement("p");
            pUsername.setAttribute("class", "small mb-1");
            pUsername.innerHTML = username + " " + rating + "<i class='fa-regular fa-star'></i>";
            let divText = document.createElement("div");
            divText.setAttribute("class", "d-flex flex-row justify-content-start");
            let divInner = document.createElement("div");
            let pText = document.createElement("p");
            pText.setAttribute("class", "small p-2 ms-3 mb-3 rounded-3");
            pText.innerHTML = text;
            let imgAvatar = document.createElement("img");
            imgAvatar.setAttribute("src", "./img/profile.png");
            imgAvatar.setAttribute("alt", "avatar");
            imgAvatar.setAttribute("style", "width: 45px; height: 100%;");
            divInfo.append(pUsername, pDate);
            divInner.append(pText);
            divText.append(imgAvatar, divInner);
            chatBody.append(divInfo, divText);
        }
        function buildMessageSended(username, rating, timestamp, text) {
            let chatBody = document.getElementById("chatBody");
            let divInfo = document.createElement("div");
            divInfo.setAttribute("class", "d-flex justify-content-between");
            let pDate = document.createElement("p");
            pDate.setAttribute("class", "small mb-1 text-muted");
            pDate.innerHTML = normalPersonDateTransform(timestamp);
            let pUsername = document.createElement("p");
            pUsername.setAttribute("class", "small mb-1");
            pUsername.innerHTML = username + " " + rating + "<i class='fa-regular fa-star'></i>";
            let divText = document.createElement("div");
            divText.setAttribute("class", "d-flex flex-row justify-content-end mb-4 pt-1");
            let divInner = document.createElement("div");
            let pText = document.createElement("p");
            pText.setAttribute("class", "small p-2 me-3 mb-3 text-white rounded-3 bg-warning");
            pText.innerHTML = text;
            let imgAvatar = document.createElement("img");
            imgAvatar.setAttribute("src", "./img/profile.png");
            imgAvatar.setAttribute("alt", "avatar");
            imgAvatar.setAttribute("style", "width: 45px; height: 100%;");
            divInfo.append(pDate, pUsername);
            divInner.append(pText);
            divText.append(divInner, imgAvatar);
            chatBody.append(divInfo, divText);
        }
        function createMessage(userID, chatID) {
            let text = document.getElementById("messageText");
            const newMessage = {
                chatId: chatID,
                userId: userID,
                text: text.value
            };
            const request = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newMessage)
            };
            fetch("/chat", request)
                .then((response) => response.json())
                .then((data) => {
                if (data) {
                    openChat(chatID);
                }
            });
        }
    });
}
function normalPersonDateTransform(timestamp) {
    let date = new Date(timestamp);
    return date.toLocaleString();
}
function searchNotification() {
    fetch("/isAnUserLogged")
        .then((response) => response.json())
        .then((data) => {
        if (data) {
            let intervalId = setInterval(searchUserChats, 5000);
            fetch("/createInterval/" + intervalId)
                .then((response) => response.json())
                .then((data) => {
                if (data) {
                }
            });
        }
    });
}
function stopSearchNotification() {
    fetch("/deleteInterval")
        .then((response) => response.json())
        .then((data) => {
        clearInterval(data);
    });
}
function searchUserChats() {
    console.log("Lois");
    fetch("/chat/allUserChat")
        .then((response) => response.json())
        .then((data) => {
        if (chatVersions.get(data.id) == undefined) {
            chatVersions.set(data.id, new Map());
        }
        for (let id of data.chatIds) {
            if (chatVersions.get(data.id).get(id) == undefined) {
                chatVersions.get(data.id).set(id, 0);
            }
            fetch("/chat/version/" + id)
                .then((serializedVersion) => serializedVersion.json())
                .then((version) => {
                if ((version > chatVersions.get(data.id).get(id))) {
                    fetch("/chat/one/" + id)
                        .then((serializedChat) => serializedChat.json())
                        .then((chat) => {
                        if (chat.user1.id != data.id) {
                            document.getElementById("alert").removeAttribute("hidden");
                            chatVersions.get(data.id).set(id, version);
                        }
                    });
                }
            });
        }
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addClickChat);


/***/ }),

/***/ "./src/creaAnnuncio/creaAnnuncio.ts":
/*!******************************************!*\
  !*** ./src/creaAnnuncio/creaAnnuncio.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createInsertionPage": () => (/* binding */ createInsertionPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let fullList = [];
let userList = [];
let wishList = [];
let listId = [];
let gameToTrade;
let giocoDaScambiare;
let index = 0;
/*Crea la lista dei giochi posseduti dall'utente */
function createInsertionPage() {
    getUserGames();
    getAllGames();
    buttonTemplate();
    document.getElementById("sendInsertion").onclick = () => {
        sendAll();
    };
}
function buttonTemplate() {
    let selected = document.getElementById("selectedTradeGame");
    let row = document.createElement("div");
    let liBtn = document.createElement("button");
    let col = document.createElement("div");
    let col2 = document.createElement("div");
    let title = document.createElement("div");
    let pic = document.createElement("img");
    title.innerHTML = "Seleziona il gioco da scambiare";
    row.setAttribute("class", "mx-auto row border-bottom border-2 border-primary");
    col.setAttribute("class", "col-2 mx-auto ms-0 my-auto ms-1");
    col2.setAttribute("class", "col-2 mx-auto me-1 my-auto");
    title.setAttribute("class", "my-auto");
    col2.setAttribute('style', 'width:300%');
    liBtn.setAttribute("type", "button");
    liBtn.setAttribute("class", "p-0 mx-auto my-auto dropdown-item");
    row.append(col, col2);
    col.append(title);
    col2.append(pic);
    liBtn.append(row);
    selected.append(liBtn);
}
function getAllGames() {
    fetch("/videogames")
        .then((response) => response.json())
        .then((videogames) => {
        fullList = [];
        for (let game of videogames) {
            fullList.push(game);
        }
        let wishGames = document.getElementById("wishGames");
        wishGames.innerHTML = "";
        for (let i = 0; i < fullList.length; i++) {
            let control = true;
            for (let j = 0; j < userList.length; j++) {
                if (fullList[i].id == userList[j].id) {
                    control = false;
                    continue;
                }
            }
            if (!control) {
                continue;
            }
            let li = document.createElement("li");
            let liBtn = document.createElement("button");
            let title = document.createElement("p");
            let row = document.createElement("div");
            let col = document.createElement("div");
            let colPic = document.createElement("div");
            let pic = document.createElement("img");
            row.setAttribute("class", "mx-auto pb-4 row border-bottom border-2 border-primary");
            col.setAttribute("class", "col-2 mx-auto ms-0 my-auto");
            colPic.setAttribute("class", "col-2 mx-auto me-1 my-auto");
            pic.setAttribute('src', fullList[i].cover.link);
            pic.setAttribute('alt', fullList[i].name);
            pic.setAttribute('class', 'border border-2 border-info rounded');
            pic.setAttribute('style', 'width:300%');
            liBtn.id = fullList[i].name;
            liBtn.setAttribute("type", "button");
            liBtn.setAttribute("class", "dropdown-item");
            title.innerHTML = fullList[i].name;
            title.setAttribute("class", "my-auto");
            liBtn.onclick = () => {
                let test = true;
                if (wishList.length == 3) {
                    wishList = [];
                    index = 0;
                }
                for (let element of wishList) {
                    if (element == li.innerHTML) {
                        test = false;
                    }
                }
                if (test) {
                    wishList[index] = li.innerHTML;
                    listId[index] = fullList[i].id;
                    index++;
                }
                console.log("Giochi desiderati: " + listId);
                showSelectedGames();
            };
            li.append(liBtn);
            liBtn.append(row);
            col.append(title);
            colPic.append(pic);
            row.append(col, colPic);
            wishGames.append(li);
        }
    });
}
function getUserGames() {
    fetch("/videogames/user")
        .then((response) => response.json())
        .then((videogames) => {
        userList = [];
        for (let game of videogames) {
            userList.push(game);
        }
        let tradeGame = document.getElementById("tradeGame");
        tradeGame.innerHTML = "";
        for (let game of userList) {
            let li = document.createElement("li");
            let title = document.createElement("p");
            let liBtn = document.createElement("button");
            let pic = document.createElement("img");
            let row = document.createElement("div");
            let col = document.createElement("div");
            let colPic = document.createElement("div");
            row.setAttribute("class", "mx-auto row border-bottom border-2 border-primary");
            col.setAttribute("class", "col-2 mx-auto ms-0 my-auto ms-1");
            colPic.setAttribute("class", "col-2 mx-auto me-1 my-auto");
            li.setAttribute("class", "dropdown-item");
            li.setAttribute("id", "itemSelected");
            title.innerHTML = game.name;
            title.setAttribute("class", "my-auto");
            pic.src = game.cover.link;
            pic.setAttribute('class', 'border border-2 border-info rounded');
            pic.setAttribute('style', 'width:128px;height:auto');
            console.log(game.name);
            liBtn.id = game.name;
            liBtn.setAttribute("type", "button");
            liBtn.setAttribute("class", "p-0 mx-auto my-auto dropdown-item");
            liBtn.onclick = () => {
                giocoDaScambiare = game.id;
                console.log("gioco da Scambiare: " + giocoDaScambiare);
                gameToTrade = game;
                showSelectedTradeGame();
                // let btn = document.getElementById("selectedTradeGame");
                //btn.append(li);
            };
            row.append(col, colPic);
            col.append(title);
            colPic.append(pic);
            liBtn.append(row);
            li.append(liBtn);
            tradeGame.append(li);
        }
    });
}
function showSelectedTradeGame() {
    gameToTrade;
    let selected = document.getElementById("selectedTradeGame");
    selected.innerHTML = "";
    let row = document.createElement("div");
    let liBtn = document.createElement("button");
    let col = document.createElement("div");
    let colPic = document.createElement("div");
    let title = document.createElement("div");
    let pic = document.createElement("img");
    title.innerHTML = gameToTrade.name;
    pic.src = gameToTrade.cover.link;
    row.setAttribute("class", "mx-auto row border-bottom border-2 border-primary");
    col.setAttribute("class", "col-2 mx-auto ms-0 my-auto ms-1");
    colPic.setAttribute("class", "col-2 mx-auto me-1 my-auto");
    title.setAttribute("class", "my-auto");
    pic.setAttribute('class', 'border border-2 border-info rounded');
    pic.setAttribute('style', 'width:300%');
    liBtn.setAttribute("type", "button");
    liBtn.setAttribute("class", "p-0 mx-auto my-auto dropdown-item");
    row.append(col, colPic);
    col.append(title);
    colPic.append(pic);
    liBtn.append(row);
    selected.append(liBtn);
}
/* Mostra i giochi scelti dall'utente per lo scambio*/
function showSelectedGames() {
    let selectedGames = document.getElementById("selectedGames");
    selectedGames.innerHTML = "";
    for (let i = 0; i < wishList.length; i++) {
        let li = document.createElement("li");
        let pic = document.createElement("img");
        pic.src = wishList[i];
        li.innerHTML = wishList[i];
        selectedGames.append(li);
    }
}
function sendAll() {
    let compositelink = document.getElementById("galleryInsertion").value;
    let links = compositelink.split(",");
    let obj = {
        title: document.getElementById("titleInsertion").value,
        description: document.getElementById("descriptionInsertion").value,
        gallery: links,
        tradeGameId: giocoDaScambiare,
        wishListIds: listId
    };
    let request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    };
    fetch("/insertion", request)
        .then((response) => response.json())
        .then((data) => {
        if (data) {
            alert("Annuncio inserito!");
        }
        else {
            alert("Ops, qualcosa è andato storto!");
        }
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createInsertionPage);


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
/* harmony import */ var _profiloUtente_profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../profiloUtente/profile */ "./src/profiloUtente/profile.ts");

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
        let btn_profile = document.createElement("button");
        btn_profile.setAttribute("class", "btn");
        btn_profile.onclick = _profiloUtente_profile__WEBPACK_IMPORTED_MODULE_0__["default"];
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
        btn_profile.innerHTML = users[i].username + " | " + users[i].name + " " + users[i].surname + " | " + users[i].email + " | " + users[i].rating + "<i class='fa-regular fa-star'></i>";
        li.append(btn_profile, span);
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
        body: JSON.stringify(id)
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
        body: JSON.stringify(id)
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
/* harmony import */ var _annunci_annunci_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../annunci/annunci.html */ "./src/annunci/annunci.html");
/* harmony import */ var _annunci_annunci__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../annunci/annunci */ "./src/annunci/annunci.ts");
/* harmony import */ var _creaAnnuncio_creaAnnuncio_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../creaAnnuncio/creaAnnuncio.html */ "./src/creaAnnuncio/creaAnnuncio.html");
/* harmony import */ var _creaAnnuncio_creaAnnuncio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../creaAnnuncio/creaAnnuncio */ "./src/creaAnnuncio/creaAnnuncio.ts");
/* harmony import */ var _annunci_annuncio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../annunci/annuncio */ "./src/annunci/annuncio.ts");
/* harmony import */ var _annunci_annuncio_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../annunci/annuncio.html */ "./src/annunci/annuncio.html");








let homeList = [];
function createHome() {
    let main = document.getElementById('main');
    main.innerHTML = _home_html__WEBPACK_IMPORTED_MODULE_0__["default"];
    document.getElementById("insertionsCard").onclick = () => {
        document.getElementById("main").innerHTML = _annunci_annunci_html__WEBPACK_IMPORTED_MODULE_1__["default"];
        (0,_annunci_annunci__WEBPACK_IMPORTED_MODULE_2__["default"])();
    };
    document.getElementById("insertCard").onclick = () => {
        document.getElementById("main").innerHTML = _creaAnnuncio_creaAnnuncio_html__WEBPACK_IMPORTED_MODULE_3__["default"];
        (0,_creaAnnuncio_creaAnnuncio__WEBPACK_IMPORTED_MODULE_4__["default"])();
    };
    document.getElementById("searchButtonTitle").onclick = () => {
        let keyword = document.getElementById("searchTitle").value;
        if (keyword != "") {
            document.getElementById("main").innerHTML = _annunci_annunci_html__WEBPACK_IMPORTED_MODULE_1__["default"];
            (0,_annunci_annunci__WEBPACK_IMPORTED_MODULE_2__.assignFilters)();
            (0,_annunci_annunci__WEBPACK_IMPORTED_MODULE_2__.searchByTitle)(keyword);
        }
    };
    document.getElementById("searchTitle").onkeydown = (e) => {
        let keyword = document.getElementById("searchTitle");
        if (e.key == "Enter" && keyword.value != "") {
            document.getElementById("main").innerHTML = _annunci_annunci_html__WEBPACK_IMPORTED_MODULE_1__["default"];
            (0,_annunci_annunci__WEBPACK_IMPORTED_MODULE_2__.assignFilters)();
            (0,_annunci_annunci__WEBPACK_IMPORTED_MODULE_2__.searchByTitle)(keyword.value);
        }
    };
    homeList = [];
    fetch('/insertion')
        .then((response) => response.json())
        .then((data) => {
        for (let d of data) {
            homeList.push(d);
        }
        createItemCarousel();
    });
}
function createItemCarousel() {
    for (let i = homeList.length - 1; i > homeList.length - 4 && i >= 0; i--) {
        let carInner = document.getElementById('innerCarouselHome');
        let clCarouselIt = document.createElement('div');
        if (i == 0) {
            clCarouselIt.setAttribute('class', 'carousel-item active');
        }
        else {
            clCarouselIt.setAttribute('class', 'carousel-item');
        }
        let img = document.createElement('img');
        img.setAttribute('src', homeList[i].tradeGame.cover.link);
        img.setAttribute('id', 'imgCard');
        img.setAttribute('class', 'mt-2');
        let clCard = document.createElement('div');
        clCard.setAttribute('class', 'card bg-secondary');
        clCard.setAttribute('id', 'annCard');
        let carBody = document.createElement('div');
        carBody.setAttribute('class', 'card-body');
        let title = document.createElement('h5');
        title.setAttribute('class', 'card-title border-top border-2 border-info');
        title.innerHTML = homeList[i].tradeGame.name;
        let desc = document.createElement('p');
        desc.setAttribute('class', 'card-text');
        for (let i = 0; i < homeList[i].tradeGame.genre.length; i++) {
            desc.innerHTML += homeList[i].tradeGame.genre[i].genre + " ";
        }
        desc.innerHTML += "<br>"
            + "Anno: " + homeList[i].tradeGame.year + " "
            + "Console: " + homeList[i].tradeGame.console.console + "<br>"
            + "Descrizione:";
        let goAnn = document.createElement('a');
        let imgGoAnn = document.createElement('img');
        goAnn.setAttribute('href', "#");
        imgGoAnn.setAttribute('class', 'p-0 btn dropdown-toggle" type="button');
        imgGoAnn.src = "./img/button/goBtn.png";
        goAnn.appendChild(imgGoAnn);
        imgGoAnn.setAttribute('style', 'border:none;float:center;image-rendering: pixelated;width: 10%;height:auto;');
        goAnn.append(imgGoAnn);
        goAnn.onclick = () => {
            document.getElementById('main').innerHTML = _annunci_annuncio_html__WEBPACK_IMPORTED_MODULE_6__["default"];
            (0,_annunci_annuncio__WEBPACK_IMPORTED_MODULE_5__["default"])(homeList[i]);
        };
        carInner.appendChild(clCarouselIt);
        clCarouselIt.appendChild(clCard);
        clCard.append(img);
        clCard.append(carBody);
        carBody.append(title);
        carBody.append(desc);
        carBody.append(goAnn);
    }
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
/* harmony import */ var _navbar_navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../navbar/navbar */ "./src/navbar/navbar.ts");
/* harmony import */ var _home_home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../home/home */ "./src/home/home.ts");
/* harmony import */ var _chat_chat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../chat/chat */ "./src/chat/chat.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};









function createModal() {
    let divModal = document.createElement("div");
    divModal.innerHTML = _modal_html__WEBPACK_IMPORTED_MODULE_0__["default"];
    document.getElementById("container").appendChild(divModal);
    showLogInModal();
    document.getElementById("login").onclick = showLogInModal;
    document.getElementById("signOutButton").onclick = showLogOutModal;
}
function showSignUpModal() {
    document.getElementById("myModalBody").innerHTML = _registrazione_registrazione_html__WEBPACK_IMPORTED_MODULE_3__["default"];
    document.getElementById("myModalFooter").innerHTML = _registrazione_registrazioneFooter_html__WEBPACK_IMPORTED_MODULE_4__["default"];
    document.getElementById("trytoSignUp").onclick = tryToSignUp;
    document.getElementById("signUpLogin").onclick = showLogInModal;
    document.getElementById("nameSignUp").onkeyup = validateForm;
    document.getElementById("surnameSignUp").onkeyup = validateForm;
    document.getElementById("usernameSignUp").onkeyup = validateForm;
    document.getElementById("emailSignUp").onkeyup = validateForm;
    document.getElementById("passwordSignUp").onkeyup = validateForm;
    document.getElementById("confirm_passwordSignUp").onkeyup = validateForm;
}
function showLogInModal() {
    document.getElementById("myModalBody").innerHTML = _login_login_html__WEBPACK_IMPORTED_MODULE_1__["default"];
    document.getElementById("myModalFooter").innerHTML = _login_loginFooter_html__WEBPACK_IMPORTED_MODULE_2__["default"];
    document.getElementById("loginSignUp").onclick = showSignUpModal;
    document.getElementById("tryToLog").onclick = tryToLogIn;
    document.getElementById("usernameSignIn").onkeydown = (e) => {
        if (e.key == 'Enter') {
            tryToLogIn();
        }
    };
    document.getElementById("passwordSignIn").onkeydown = (e) => {
        if (e.key == 'Enter') {
            tryToLogIn();
        }
    };
}
function showLogOutModal() {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield tryToLogOut();
        if (result) {
            document.getElementById("myModalBody").innerHTML = _logout_logout_html__WEBPACK_IMPORTED_MODULE_5__["default"];
            document.getElementById("myModalFooter").innerHTML = "";
            (0,_home_home__WEBPACK_IMPORTED_MODULE_7__["default"])();
        }
    });
}
function tryToSignUp() {
    const user = {
        username: document.getElementById("usernameSignUp").value,
        password: document.getElementById("passwordSignUp").value,
        name: document.getElementById("nameSignUp").value,
        surname: document.getElementById("surnameSignUp").value,
        email: document.getElementById("emailSignUp").value
    };
    const request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    };
    fetch("/user", request).then((response) => response.json()).then((data) => {
        if (data) {
            document.getElementById("signUpResult").innerHTML = "Registrato con successo!";
            document.getElementById("trytoSignUp").setAttribute("disabled", "true");
        }
        else {
            document.getElementById("signUpResult").innerHTML = "Ops, qualcosa è andato storto!";
            document.getElementById("trytoSignUp").removeAttribute("disabled");
        }
    });
}
function tryToLogIn() {
    const login = {
        username: document.getElementById("usernameSignIn").value,
        password: document.getElementById("passwordSignIn").value
    };
    const request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(login)
    };
    let result = fetch("/login", request)
        .then((response) => response.json())
        .then((data) => {
        if (data.logged) {
            document.getElementById("loginResult").innerHTML = "Loggato con successo!";
            _navbar_navbar__WEBPACK_IMPORTED_MODULE_6__.setNav(data.accountType);
            document.getElementById("tryToLog").setAttribute("disabled", "true");
            document.getElementById("loginSignUp").setAttribute("disabled", "true");
            (0,_home_home__WEBPACK_IMPORTED_MODULE_7__["default"])();
            (0,_chat_chat__WEBPACK_IMPORTED_MODULE_8__.searchNotification)();
        }
        else {
            document.getElementById("loginResult").innerHTML = "Ops, qualcosa è andato storto";
        }
    });
}
function tryToLogOut() {
    return __awaiter(this, void 0, void 0, function* () {
        (0,_chat_chat__WEBPACK_IMPORTED_MODULE_8__.stopSearchNotification)();
        let promiseResult = fetch("/logout")
            .then((response) => response.json())
            .then((data) => {
            if (data) {
                _navbar_navbar__WEBPACK_IMPORTED_MODULE_6__.setNav("GUEST");
                document.getElementById("tryToLog").removeAttribute("disabled");
                document.getElementById("loginSignUp").removeAttribute("disabled");
            }
            return data;
        });
        return promiseResult;
    });
}
function validateForm() {
    let username = document.getElementById("usernameSignUp").value;
    let password = document.getElementById("passwordSignUp").value;
    let name = document.getElementById("nameSignUp").value;
    let surname = document.getElementById("surnameSignUp").value;
    let email = document.getElementById("emailSignUp").value;
    let confirm_password = document.getElementById("confirm_passwordSignUp");
    confirm_password.setAttribute("style", "");
    if (username == "" || password == "" || name == "" || surname == "" || email == "") {
        document.getElementById("trytoSignUp").disabled = true;
        if (password != confirm_password.value) {
            confirm_password.setAttribute("style", "border-color: red;");
        }
        else {
            confirm_password.setAttribute("style", "border-color: green;");
        }
    }
    else {
        if (password != confirm_password.value) {
            confirm_password.setAttribute("style", "border-color: red;");
        }
        else {
            confirm_password.setAttribute("style", "border-color: green;");
            document.getElementById("trytoSignUp").removeAttribute("disabled");
        }
    }
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
/* harmony import */ var _annunci_gestioneannunci_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../annunci/gestioneannunci.html */ "./src/annunci/gestioneannunci.html");
/* harmony import */ var _annunci_annunci__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../annunci/annunci */ "./src/annunci/annunci.ts");
/* harmony import */ var _home_home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../home/home */ "./src/home/home.ts");
/* harmony import */ var _profiloUtente_profile_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../profiloUtente/profile.html */ "./src/profiloUtente/profile.html");
/* harmony import */ var _profiloUtente_profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../profiloUtente/profile */ "./src/profiloUtente/profile.ts");
/* harmony import */ var _gestioneUtenti_gestioneUtenti_html__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../gestioneUtenti/gestioneUtenti.html */ "./src/gestioneUtenti/gestioneUtenti.html");
/* harmony import */ var _gestioneUtenti_gestioneUtenti__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../gestioneUtenti/gestioneUtenti */ "./src/gestioneUtenti/gestioneUtenti.ts");
/* harmony import */ var _annunci_gestioneannunci__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../annunci/gestioneannunci */ "./src/annunci/gestioneannunci.ts");
/* harmony import */ var _creaAnnuncio_creaAnnuncio_html__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../creaAnnuncio/creaAnnuncio.html */ "./src/creaAnnuncio/creaAnnuncio.html");
/* harmony import */ var _videogiochi_videogiochi_html__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../videogiochi/videogiochi.html */ "./src/videogiochi/videogiochi.html");
/* harmony import */ var _creaAnnuncio_creaAnnuncio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../creaAnnuncio/creaAnnuncio */ "./src/creaAnnuncio/creaAnnuncio.ts");
/* harmony import */ var _videogiochi_videogiochi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../videogiochi/videogiochi */ "./src/videogiochi/videogiochi.ts");















function createNav() {
    document.getElementById("header").innerHTML = _navbar_html__WEBPACK_IMPORTED_MODULE_0__["default"];
    (0,_modal_modal__WEBPACK_IMPORTED_MODULE_1__["default"])();
    document.getElementById("logo").onclick = () => {
        document.getElementById("main").innerHTML = "";
        (0,_home_home__WEBPACK_IMPORTED_MODULE_5__["default"])();
    };
    document.getElementById("games").onclick = () => {
        document.getElementById("main").innerHTML = _videogiochi_videogiochi_html__WEBPACK_IMPORTED_MODULE_12__["default"];
        (0,_videogiochi_videogiochi__WEBPACK_IMPORTED_MODULE_14__["default"])();
    };
    document.getElementById("insertions").onclick = () => {
        document.getElementById("main").innerHTML = _annunci_annunci_html__WEBPACK_IMPORTED_MODULE_2__["default"];
        (0,_annunci_annunci__WEBPACK_IMPORTED_MODULE_4__["default"])();
    };
    document.getElementById("addInsertion").onclick = () => {
        document.getElementById("main").innerHTML = _creaAnnuncio_creaAnnuncio_html__WEBPACK_IMPORTED_MODULE_11__["default"];
        (0,_creaAnnuncio_creaAnnuncio__WEBPACK_IMPORTED_MODULE_13__["default"])();
    };
    document.getElementById("insManagement").onclick = () => {
        document.getElementById("main").innerHTML = _annunci_gestioneannunci_html__WEBPACK_IMPORTED_MODULE_3__["default"];
        (0,_annunci_gestioneannunci__WEBPACK_IMPORTED_MODULE_10__["default"])();
    };
    document.getElementById("management").onclick = () => {
        document.getElementById("main").innerHTML = _gestioneUtenti_gestioneUtenti_html__WEBPACK_IMPORTED_MODULE_8__["default"];
        (0,_gestioneUtenti_gestioneUtenti__WEBPACK_IMPORTED_MODULE_9__["default"])();
    };
    document.getElementById("profile").onclick = () => {
        document.getElementById("main").innerHTML = _profiloUtente_profile_html__WEBPACK_IMPORTED_MODULE_6__["default"];
        (0,_profiloUtente_profile__WEBPACK_IMPORTED_MODULE_7__["default"])();
    };
    fetch("/whoIsLogged")
        .then((response) => response.json())
        .then((data) => {
        setNav(data);
    });
}
function setNav(accountType) {
    const btn_gestUtenti = document.getElementById("management");
    const btn_insManagement = document.getElementById("insManagement");
    const btn_login = document.getElementById("login");
    const btn_signOutButton = document.getElementById("signOutButton");
    const btn_addInsertion = document.getElementById("addInsertion");
    const button_profile = document.getElementById("profile");
    if (accountType == "ADMIN") {
        btn_gestUtenti.removeAttribute("hidden");
        btn_addInsertion.setAttribute("hidden", "true");
        btn_insManagement.removeAttribute("hidden");
        btn_login.setAttribute("hidden", "true");
        btn_signOutButton.removeAttribute("hidden");
        button_profile.removeAttribute("hidden");
    }
    else if (accountType == "USER") {
        btn_gestUtenti.setAttribute("hidden", "true");
        btn_addInsertion.removeAttribute("hidden");
        btn_insManagement.setAttribute("hidden", "true");
        btn_login.setAttribute("hidden", "true");
        btn_signOutButton.removeAttribute("hidden");
        button_profile.removeAttribute("hidden");
    }
    else {
        btn_gestUtenti.setAttribute("hidden", "true");
        btn_addInsertion.setAttribute("hidden", "true");
        btn_insManagement.setAttribute("hidden", "true");
        btn_login.removeAttribute("hidden");
        btn_signOutButton.setAttribute("hidden", "true");
        button_profile.setAttribute("hidden", "true");
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNav);


/***/ }),

/***/ "./src/profiloUtente/profile.ts":
/*!**************************************!*\
  !*** ./src/profiloUtente/profile.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "showProfile": () => (/* binding */ showProfile)
/* harmony export */ });
/* harmony import */ var _profile_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.html */ "./src/profiloUtente/profile.html");

let type;
let userInfo;
let adminInfo;
function showProfile() {
    fetch("/whoIsLogged")
        .then((response) => response.json())
        .then((data) => {
        if (data == "ADMIN") {
            type = "ADMIN";
        }
        else if (data == "USER") {
            type = "USER";
        }
        else {
            type = "GUEST";
        }
        let main = document.getElementById("main");
        main.innerHTML = _profile_html__WEBPACK_IMPORTED_MODULE_0__["default"];
        createProfile(type);
        console.log("ciao da show");
    });
}
function createProfile(type) {
    if (type == "ADMIN") {
        showAdminProfile();
    }
    else if (type == "USER") {
        showUserProfile();
    }
    else {
    }
}
function showAdminProfile() {
    fetch("/adminInfo")
        .then((response) => response.json())
        .then((data) => {
        adminInfo = data;
        let h1 = document.createElement("h1");
        let title = document.getElementById("titleprofile");
        h1.innerHTML = "BENTORNATO AMMINISTRATORE " + adminInfo.username;
        title.append(h1);
        let body = document.getElementById("bodyprofile");
        let h2 = document.createElement("h2");
        h2.innerHTML =
            " <br><br><br> <b></b>" + adminInfo.username
                + " <br><br> <b></b>" + adminInfo.email
                + " <br><br> <b></b>" + adminInfo.name
                + " <br><br> <b></b>" + adminInfo.surname;
        body.append(h2);
        let buttons = document.getElementById("buttons-profile");
        let btn1 = document.createElement("button");
        btn1.setAttribute("class", "btn btn-primary my-1");
        btn1.onclick = () => {
            let obj = {
                'username': document.getElementById("username").value,
                'email': ""
            };
            let request = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(obj)
            };
            fetch("/admin/info", request)
                .then((response) => response.json())
                .then((data) => {
                console.log(data);
                document.getElementById("username").value = "";
                showProfile();
            });
        };
        btn1.innerHTML = "Cambia Username";
        buttons.append(btn1);
        let buttonEmail = document.getElementById("buttons-profile");
        let btn2 = document.createElement("button");
        btn2.setAttribute("class", "btn btn-primary   my-4");
        btn2.onclick = () => {
            let obj = {
                'username': "",
                'email': document.getElementById("email").value
            };
            let request = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(obj)
            };
            fetch("/admin/info", request)
                .then((response) => response.json())
                .then((data) => {
                console.log(data);
                document.getElementById("email").value = "";
                showProfile();
            });
        };
        btn2.innerHTML = "Cambia Email";
        buttons.append(btn2);
        let cp = document.getElementById("cp");
        let btn3 = document.createElement("button");
        btn3.setAttribute("class", "btn btn-primary");
        btn3.innerHTML = "Cambia Password";
        btn3.onclick = () => {
            let obj = {
                'oldPassword': document.getElementById("oldPassword").value,
                'newPassword': document.getElementById("newPassword").value
            };
            let request = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(obj)
            };
            fetch("/admin/psw", request)
                .then((response) => response.json())
                .then((data) => {
                console.log(data);
                document.getElementById("oldPassword").value = "";
                document.getElementById("newPassword").value = "";
            });
        };
        cp.append(btn3);
    });
}
function showUserProfile() {
    fetch("/userInfo")
        .then((response) => response.json())
        .then((data) => {
        userInfo = data;
        let h1 = document.createElement("h1");
        let title = document.getElementById("titleprofile");
        h1.innerHTML = "BENTORNATO UTENTE " + userInfo.username + " " + userInfo.rating + " <i class='fa-regular fa-star'></i>";
        title.append(h1);
        let body = document.getElementById("bodyprofile");
        let h2 = document.createElement("h2");
        h2.innerHTML =
            " <br><br><br> <b></b>" + userInfo.username
                + " <br><br> <b></b>" + userInfo.email
                + " <br><br><b></b>" + userInfo.name
                + " <br><br> <b></b>" + userInfo.surname;
        body.append(h2);
        let buttons = document.getElementById("buttons-profile");
        let btn1 = document.createElement("button");
        btn1.setAttribute("class", "btn btn-primary my-1");
        btn1.onclick = () => {
            let obj = {
                'username': document.getElementById("username").value,
                'email': ""
            };
            let request = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(obj)
            };
            fetch("/user/info", request)
                .then((response) => response.json())
                .then((data) => {
                console.log(data);
                document.getElementById("username").value = "";
                showProfile();
            });
        };
        btn1.innerHTML = "Cambia Username";
        buttons.append(btn1);
        let buttonEmail = document.getElementById("buttons-profile");
        let btn2 = document.createElement("button");
        btn2.setAttribute("class", "btn btn-primary   my-4");
        btn2.onclick = () => {
            let obj = {
                'username': "",
                'email': document.getElementById("email").value
            };
            let request = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(obj)
            };
            fetch("/user/info", request)
                .then((response) => response.json())
                .then((data) => {
                console.log(data);
                document.getElementById("email").value = "";
                showProfile();
            });
        };
        btn2.innerHTML = "Cambia Email";
        buttons.append(btn2);
    });
    let cp = document.getElementById("cp");
    let btn3 = document.createElement("button");
    btn3.setAttribute("class", "btn btn-primary");
    btn3.innerHTML = "Cambia Password";
    btn3.onclick = () => {
        let obj = {
            'oldPassword': document.getElementById("oldPassword").value,
            'newPassword': document.getElementById("newPassword").value
        };
        let request = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)
        };
        fetch("/user/psw", request)
            .then((response) => response.json())
            .then((data) => {
            console.log(data);
            document.getElementById("oldPassword").value = "";
            document.getElementById("newPassword").value = "";
        });
    };
    cp.append(btn3);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showProfile);


/***/ }),

/***/ "./src/videogiochi/creaVideogiochi.ts":
/*!********************************************!*\
  !*** ./src/videogiochi/creaVideogiochi.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createVideoGamePage": () => (/* binding */ createVideoGamePage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _creaVideogioco_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creaVideogioco.html */ "./src/videogiochi/creaVideogioco.html");

let radio;
function createVideoGamePage() {
    document.getElementById("main").innerHTML = _creaVideogioco_html__WEBPACK_IMPORTED_MODULE_0__["default"];
    generateGenreList();
    generateConsoleList();
    document.getElementById("newGenreBtn").onclick = createGenre;
    document.getElementById("newConsoleBtn").onclick = createConsole;
    document.getElementById("newVideoGameBtn").onclick = createVideoGame;
}
function generateGenreList() {
    let genreList = document.getElementById("genreList");
    genreList.innerHTML = "";
    fetch("/genre")
        .then((response) => response.json())
        .then((data) => {
        for (let i = 0; i < data.length; i++) {
            /*
            let div = document.createElement("div");
            let input = document.createElement("input");
            let label = document.createElement("label");
            let bold = document.createElement("b");
            div.setAttribute("class", "form-check form-check-inline");
            input.setAttribute("id", "genre"+i);
            input.setAttribute("class", "form-check-input");
            input.setAttribute("type", "checkbox");
            input.setAttribute("value", data[i].genre);
            label.setAttribute("class", "form-check-label");
            label.setAttribute("for", "genre"+i);
            bold.innerHTML=""+data[i].genre;
            label.append(bold);
            div.append(input, label);
            */
            let snippet = `
            <div class="form-check form-check-inline">
                <input class="form-check-input genrescheck" type="checkbox" id="genre${i}" value="${data[i].genre}">
                <label class="form-check-label" for="genre${i}"><b>${data[i].genre}</b></label>
            </div>`;
            genreList.innerHTML += snippet;
        }
    });
}
function generateConsoleList() {
    let consoleList = document.getElementById("consoleList");
    consoleList.innerHTML = "<br><br>";
    fetch("/console")
        .then((response) => response.json())
        .then((data) => {
        for (let i = 0; i < data.length; i++) {
            if (i == 0) {
                let div = document.createElement("div");
                let input = document.createElement("input");
                let label = document.createElement("label");
                let bold = document.createElement("b");
                div.setAttribute("class", "form-check form-check-inline");
                input.setAttribute("id", "console" + i);
                input.setAttribute("name", "console");
                input.setAttribute("class", "form-check-input");
                input.setAttribute("type", "radio");
                input.setAttribute("value", data[i].console);
                input.onclick = () => { setRadio(data[i].console); };
                label.setAttribute("class", "form-check-label");
                label.setAttribute("for", "console" + i);
                bold.innerHTML = "" + data[i].console;
                label.append(bold);
                div.append(input, label);
                consoleList.append(div);
                /*
                let firstSnippet=`
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="console${i}" name="console" value="${data[i].console}" onclick="()=>{ setRadio(${data[i].console})}" checked>
                    <label class="form-check-label" for="console${i}"><b>${data[i].console}</b></label>
                </div>`
                consoleList.innerHTML += firstSnippet;
                */
            }
            else {
                let div = document.createElement("div");
                let input = document.createElement("input");
                let label = document.createElement("label");
                let bold = document.createElement("b");
                div.setAttribute("class", "form-check form-check-inline");
                input.setAttribute("id", "console" + i);
                input.setAttribute("name", "console");
                input.setAttribute("class", "form-check-input");
                input.setAttribute("type", "radio");
                input.setAttribute("value", data[i].console);
                input.onclick = () => { setRadio(data[i].console); };
                label.setAttribute("class", "form-check-label");
                label.setAttribute("for", "console" + i);
                bold.innerHTML = "" + data[i].console;
                label.append(bold);
                div.append(input, label);
                consoleList.append(div);
                /*
                 let snippet = `
                 <div class="form-check form-check-inline">
                     <input class="form-check-input" type="radio" id="console${i}" name="console" value="${data[i].console}" onclick="()=>{ setRadio(${data[i].console})}">
                     <label class="form-check-label" for="console${i}"><b>${data[i].console}</b></label>
                 </div>`
                 consoleList.innerHTML += snippet;
                 */
            }
        }
    });
}
function createGenre() {
    let newGenre = document.getElementById("newGenre").value;
    let request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newGenre)
    };
    fetch("/genre", request)
        .then((response) => response.json())
        .then((data) => {
        if (data) {
            document.getElementById("newGenre").value = "";
            generateGenreList();
        }
    });
}
function createConsole() {
    let newConsole = document.getElementById("newConsole").value;
    let request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newConsole)
    };
    fetch("/console", request)
        .then((response) => response.json())
        .then((data) => {
        if (data) {
            document.getElementById("newConsole").value = "";
            generateConsoleList();
        }
    });
}
function createVideoGame() {
    let genres = document.getElementsByClassName("genrescheck");
    let checkedGenres = [];
    for (let genre of genres) {
        if (genre.checked) {
            checkedGenres.push(genre.value);
        }
    }
    let newVideogame = {
        name: document.getElementById("VGname").value,
        genre: checkedGenres,
        year: document.getElementById("VGyear").value,
        console: radio,
        cover: document.getElementById("VGcover").value
    };
    let request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newVideogame)
    };
    fetch("/videogames", request)
        .then((response) => response.json())
        .then((data) => {
        if (data) {
            alert("videogioco inserito");
        }
    });
}
function setRadio(value) {
    radio = value;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createVideoGamePage);


/***/ }),

/***/ "./src/videogiochi/videogiochi.ts":
/*!****************************************!*\
  !*** ./src/videogiochi/videogiochi.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGamePage": () => (/* binding */ createGamePage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _creaVideogiochi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creaVideogiochi */ "./src/videogiochi/creaVideogiochi.ts");
/* harmony import */ var _visualizzaVideogioco__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visualizzaVideogioco */ "./src/videogiochi/visualizzaVideogioco.ts");


let gameList = [];
let gameFilteredList = [];
let genres = [];
let years = [];
let gameView = 6;
let type;
let consolles;
function createGamePage() {
    fetch("/whoIsLogged")
        .then((response) => response.json())
        .then((data) => {
        if (data == "ADMIN") {
            document.getElementById("addVideogame").removeAttribute("hidden");
            document.getElementById("addVideogame").onclick = _creaVideogiochi__WEBPACK_IMPORTED_MODULE_0__["default"];
            type = "ADMIN";
        }
        else if (data == "USER") {
            document.getElementById("addVideogame").setAttribute("hidden", "true");
            type = "USER";
        }
        else {
            document.getElementById("addVideogame").setAttribute("hidden", "true");
            type = "GUEST";
        }
        fetch("/videogames")
            .then((response) => (response.json()))
            .then((data) => {
            gameList = [];
            for (let game of data) {
                gameList.push(game);
            }
            createGamePagination();
            showGames(1);
            assignGameFilters();
        });
    });
}
function getAllGames() {
    fetch("/videogames")
        .then((response) => (response.json()))
        .then((data) => {
        gameList = [];
        for (let game of data) {
            gameList.push(game);
        }
    });
}
function showGames(i) {
    let content = document.getElementById("VideogameContent");
    content.innerHTML = "";
    let start = (i - 1) * gameView;
    let stop = (i * gameView) - 1;
    for (start; start <= stop; start++) {
        if (start >= gameList.length) {
            return;
        }
        let col = document.createElement("div");
        col.setAttribute("class", "col-4 text-center");
        col.setAttribute("style", "background-color: rgba(0,0,0,0.2)");
        col.onmouseover = () => {
            col.setAttribute("style", "background-color: rgba(0,0,0,0.6)");
        };
        col.onmouseout = () => {
            col.setAttribute("style", "background-color: rgba(0,0,0,0.2)");
        };
        let gameTitle = document.createElement("h3");
        gameTitle.setAttribute("class", "bg-light border-top border-rounded border-2 border-primary my-4");
        let image = document.createElement("img");
        image.src = gameList[start].cover.link;
        image.width = 200;
        image.height = 200;
        let game = gameList[start];
        image.onclick = () => {
            (0,_visualizzaVideogioco__WEBPACK_IMPORTED_MODULE_1__["default"])(game);
        };
        gameTitle.innerHTML = "<b>" + gameList[start].name + "</b>";
        col.append(gameTitle, image);
        let divButton = document.createElement("div");
        let addButton = document.createElement("a");
        let imgButton = document.createElement("img");
        let id = gameList[start].id;
        if (type == "USER") {
            imgButton.setAttribute("src", "./img/button/addBtn.png");
            imgButton.height = 35;
            imgButton.setAttribute("style", "image-rendering: pixelated;");
            imgButton.setAttribute('class', 'p-0 my-3 mx-auto');
            addButton.setAttribute("class", "p-0 my-3");
            divButton.setAttribute('class', 'p-0 mx-auto');
            addButton.onclick = () => {
                fetch("/user/game/" + id)
                    .then((response) => (response.json()))
                    .then((data) => {
                    if (data) {
                        alert("Videogioco aggiunto!");
                    }
                    else {
                        alert("Possiedi già questo giuoco!");
                    }
                });
            };
            addButton.appendChild(imgButton);
            divButton.append(addButton);
            col.append(divButton);
        }
        content.append(col);
    }
}
function createGamePagination() {
    let size = gameList.length;
    let tabs = Math.ceil(size / gameView);
    let pages = document.getElementById("pagesV");
    pages.innerHTML = "";
    for (let i = 1; i <= tabs; i++) {
        let li = document.createElement("li");
        if (i == 1) {
            li.setAttribute("class", "page-item active");
            li.setAttribute("aria-current", "page");
        }
        else {
            li.setAttribute("class", "page-item");
        }
        let btn = document.createElement("button");
        btn.setAttribute("class", "page-link");
        btn.onclick = () => {
            let allLi = document.getElementById("pagesV").children;
            for (let oneLi of allLi) {
                oneLi.setAttribute("class", "page-item");
                oneLi.removeAttribute("aria-current");
            }
            li.setAttribute("class", "page-item active");
            li.setAttribute("aria-current", "page");
            showGames(i);
        };
        btn.innerHTML = "" + (i);
        li.appendChild(btn);
        pages.appendChild(li);
    }
}
function setAllConsolles() {
    consolles = [];
    for (let i = 0; i < gameList.length; i++) {
        if (!(consolles.includes(gameList[i].console.console))) {
            consolles.push(gameList[i].console.console);
            let ul = document.getElementById("gameConsolles");
            let li = document.createElement("li");
            li.id = gameList[i].console.console;
            let btn = document.createElement("button");
            btn.setAttribute("class", "dropdown-item");
            btn.innerHTML = gameList[i].console.console;
            btn.onclick = () => {
                searchByGameConsolle(li.id);
            };
            ul.append(li);
            li.append(btn);
        }
    }
}
function setAllGenres() {
    genres = [];
    for (let i = 0; i < gameList.length; i++) {
        for (let j = 0; j < gameList[i].genre.length; j++) {
            if (!(genres.includes(gameList[i].genre[j].genre))) {
                genres.push(gameList[i].genre[j].genre);
                let ul = document.getElementById("gameGenres");
                let li = document.createElement("li");
                li.id = gameList[i].genre[j].genre;
                let btn = document.createElement("button");
                btn.setAttribute("class", "dropdown-item");
                btn.innerHTML = gameList[i].genre[j].genre;
                btn.onclick = () => {
                    searchByGameGenre(li.id);
                };
                ul.append(li);
                li.append(btn);
            }
        }
    }
}
function setAllYears() {
    years = [];
    for (let i = 0; i < gameList.length; i++) {
        if (!(years.includes(gameList[i].year))) {
            years.push(gameList[i].year);
            let ul = document.getElementById("gameYears");
            let li = document.createElement("li");
            li.id = "" + gameList[i].year;
            let btn = document.createElement("button");
            btn.setAttribute("class", "dropdown-item");
            btn.innerHTML = "" + gameList[i].year;
            btn.onclick = () => {
                searchByGameYear(Number(li.id));
            };
            ul.append(li);
            li.append(btn);
        }
    }
}
function searchByAllGames() {
    getAllGames();
    createGamePagination();
    showGames(1);
}
function searchByGameTitle(title) {
    gameFilteredList = [];
    for (let element of gameList) {
        let gameName = element.name;
        if ((gameName.toUpperCase().includes(title.toUpperCase()))) {
            gameFilteredList.push(element);
        }
    }
    gameList = [];
    gameList = gameFilteredList;
    createGamePagination();
    showGames(1);
    getAllGames();
}
function searchByGameConsolle(console) {
    gameFilteredList = [];
    for (let element of gameList) {
        if (element.console.console == console) {
            gameFilteredList.push(element);
        }
    }
    gameList = [];
    gameList = gameFilteredList;
    createGamePagination();
    showGames(1);
    getAllGames();
}
function searchByGameGenre(genre) {
    gameFilteredList = [];
    for (let element of gameList) {
        for (let i = 0; i < element.genre.length; i++) {
            if (element.genre[i].genre == genre) {
                gameFilteredList.push(element);
                i = element.genre.length;
            }
        }
    }
    gameList = [];
    gameList = gameFilteredList;
    createGamePagination();
    showGames(1);
    getAllGames();
}
function searchByGameYear(year) {
    gameFilteredList = [];
    for (let element of gameList) {
        if (element.year == year) {
            gameFilteredList.push(element);
        }
    }
    gameList = [];
    gameList = gameFilteredList;
    createGamePagination();
    showGames(1);
    getAllGames();
}
function assignGameFilters() {
    let allGames = document.getElementById("selectAllGames");
    allGames.onclick = () => {
        searchByAllGames();
    };
    setAllConsolles();
    setAllGenres();
    setAllYears();
    let searchTitle = document.getElementById("searchTitleGame");
    searchTitle.onkeydown = (e) => {
        if (e.key == 'Enter') {
            searchByGameTitle(searchTitle.value);
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createGamePage);


/***/ }),

/***/ "./src/videogiochi/visualizzaVideogioco.ts":
/*!*************************************************!*\
  !*** ./src/videogiochi/visualizzaVideogioco.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGameVisualization": () => (/* binding */ createGameVisualization),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _visualizzaVideogioco_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visualizzaVideogioco.html */ "./src/videogiochi/visualizzaVideogioco.html");
/* harmony import */ var _videogiochi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videogiochi */ "./src/videogiochi/videogiochi.ts");
/* harmony import */ var _videogiochi_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./videogiochi.html */ "./src/videogiochi/videogiochi.html");



function createGameVisualization(game) {
    console.log(game);
    document.getElementById("main").innerHTML = _visualizzaVideogioco_html__WEBPACK_IMPORTED_MODULE_0__["default"];
    setback();
    setPage(game);
}
function setback() {
    let back = document.getElementById("back-games");
    back.onclick = () => {
        document.getElementById("main").innerHTML = _videogiochi_html__WEBPACK_IMPORTED_MODULE_2__["default"];
        (0,_videogiochi__WEBPACK_IMPORTED_MODULE_1__["default"])();
    };
}
function setPage(game) {
    let head = document.getElementById("gameTitle");
    let title = document.createElement("h1");
    title.innerHTML = "<b>" + game.name + "</b>";
    head.append(title);
    head.setAttribute("class", "text-center mb-5");
    let view = document.getElementById("gameImage");
    let img = document.createElement("img");
    img.src = game.cover.link;
    img.width = 400;
    view.append(img);
    let info = document.getElementById("gameInfo");
    let genere = document.createElement("h2");
    genere.innerHTML = "<b>GENERE/I: </b>";
    for (let i = 0; i < game.genre.length; i++) {
        genere.innerHTML += game.genre[i].genre + " ";
    }
    let console = document.createElement("h2");
    console.innerHTML = "<b>CONSOLE: </b>" + game.console.console;
    let year = document.createElement("h2");
    year.innerHTML = "<b>ANNO: </b>" + game.year;
    info.append(genere, console, year);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createGameVisualization);


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
/* harmony import */ var _chat_chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat/chat */ "./src/chat/chat.ts");





(0,_navbar_navbar__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_home_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_footer_footer__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_chat_chat__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_chat_chat__WEBPACK_IMPORTED_MODULE_3__.searchNotification)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO0FBQ1osc0RBQVUsRUFBRSxDQUFDO0FBQ2IsMERBQVMsRUFBRSxDQUFDO0FBQ1osc0RBQVksRUFBRSxDQUFDO0FBQ2YsOERBQWtCLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2FubnVuY2kvYW5udW5jaS5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2FubnVuY2kvYW5udW5jaW8uaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9hbm51bmNpL2dlc3Rpb25lYW5udW5jaS5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2NoYXQvY2hhdEJvZHkuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9jaGF0L2NoYXRGb290ZXIuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9jaGF0L2NoYXRIZWFkZXIuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9jcmVhQW5udW5jaW8vY3JlYUFubnVuY2lvLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvZm9vdGVyL2Zvb3Rlci5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2dlc3Rpb25lVXRlbnRpL2dlc3Rpb25lVXRlbnRpLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvaG9tZS9ob21lLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvbG9naW4vbG9naW4uaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9sb2dpbi9sb2dpbkZvb3Rlci5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2xvZ291dC9sb2dvdXQuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9tb2RhbC9tb2RhbC5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL25hdmJhci9uYXZiYXIuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9wcm9maWxvVXRlbnRlL3Byb2ZpbGUuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9yZWdpc3RyYXppb25lL3JlZ2lzdHJhemlvbmUuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9yZWdpc3RyYXppb25lL3JlZ2lzdHJhemlvbmVGb290ZXIuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy92aWRlb2dpb2NoaS9jcmVhVmlkZW9naW9jby5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL3ZpZGVvZ2lvY2hpL3ZpZGVvZ2lvY2hpLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvdmlkZW9naW9jaGkvdmlzdWFsaXp6YVZpZGVvZ2lvY28uaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9hbm51bmNpL2FubnVuY2kudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvYW5udW5jaS9hbm51bmNpby50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9hbm51bmNpL2dlc3Rpb25lYW5udW5jaS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9jaGF0L2NoYXQudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvY3JlYUFubnVuY2lvL2NyZWFBbm51bmNpby50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9mb290ZXIvZm9vdGVyLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2dlc3Rpb25lVXRlbnRpL2dlc3Rpb25lVXRlbnRpLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2hvbWUvaG9tZS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9tb2RhbC9tb2RhbC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9uYXZiYXIvbmF2YmFyLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL3Byb2ZpbG9VdGVudGUvcHJvZmlsZS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy92aWRlb2dpb2NoaS9jcmVhVmlkZW9naW9jaGkudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvdmlkZW9naW9jaGkvdmlkZW9naW9jaGkudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvdmlkZW9naW9jaGkvdmlzdWFsaXp6YVZpZGVvZ2lvY28udHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjxzdHlsZT5cXHJcXG4gICAgLmJ0bjpob3ZlciB7XFxyXFxuICAgICAgICBvdXRsaW5lLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICAgIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgNHB4ICM1YTAxYTc7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjdzO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNzZWFyY2hUaXRsZTpob3ZlciB7XFxyXFxuICAgICAgICBvdXRsaW5lLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICAgIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgNHB4ICM1YTAxYTc7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjdzO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNzZWFyY2hUaXRsZSB7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAtM3B4IDAgYmxhY2ssIDAgM3B4IGJsYWNrLCAzcHggMCBibGFjaywgMCAtM3B4IGJsYWNrO1xcclxcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDIwJTtcXHJcXG4gICAgICAgIGZsb2F0OiBib3R0b207XFxyXFxuICAgICAgICBhbGlnbi1zZWxmOiByaWdodDtcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XFxyXFxuXFxyXFxuPGRpdiBzdHlsZT1cXFwiZGlzcGxheTogZmxleDtcXFwiIGNsYXNzPVxcXCJteS01XFxcIj5cXHJcXG4gICAgPHNwYW4gc3R5bGU9XFxcIm1hcmdpbi1yaWdodDogNDBweFxcXCI+XFxyXFxuICAgICAgICA8aW1nIGlkPVxcXCJzZWxlY3RBbGxcXFwiIGNsYXNzPVxcXCJwLTAgYnRuIGRyb3Bkb3duLXRvZ2dsZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIlxcclxcbiAgICAgICAgICAgIHN0eWxlPVxcXCJib3JkZXI6bm9uZTtmbG9hdDpsZWZ0O2ltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO3dpZHRoOiAzMDAlO2hlaWdodDphdXRvO1xcXCJcXHJcXG4gICAgICAgICAgICBzcmM9XFxcIi4vaW1nL2J1dHRvbi9zaG93YWxsQnRuLnBuZ1xcXCIgYWx0PVxcXCJcXFwiPlxcclxcbiAgICA8L3NwYW4+XFxyXFxuXFxyXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJteC1hdXRvIGRyb3Bkb3duXFxcIj5cXHJcXG4gICAgICAgIDxpbWcgY2xhc3M9XFxcInAtMCBidG4gZHJvcGRvd24tdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiXFxyXFxuICAgICAgICAgICAgc3R5bGU9XFxcImJvcmRlcjpub25lO2Zsb2F0OmxlZnQ7aW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7d2lkdGg6IDMwMCU7aGVpZ2h0OmF1dG87XFxcIlxcclxcbiAgICAgICAgICAgIHNyYz1cXFwiLi9pbWcvYnV0dG9uL2J5Z2VucmVCdG4ucG5nXFxcIiBhbHQ9XFxcIlxcXCI+XFxyXFxuICAgICAgICA8dWwgaWQ9XFxcImdlbnJlc1xcXCIgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgPC9zcGFuPlxcclxcblxcclxcbiAgICA8c3BhbiBjbGFzcz1cXFwibXgtYXV0byBkcm9wZG93blxcXCI+XFxyXFxuICAgICAgICA8IS0tUXVlc3RvIMOoIGluIHJlYWx0w6AgaWwgZmlsdHJvIHBlciBsZSBjb25zb2xsZXMgYmlzb2duYSBjYW1iaWFyZSBpbCBib3R0b25lLS0+XFxyXFxuICAgICAgICA8aW1nIGNsYXNzPVxcXCJwLTAgYnRuIGRyb3Bkb3duLXRvZ2dsZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIlxcclxcbiAgICAgICAgICAgIHN0eWxlPVxcXCJib3JkZXI6bm9uZTtmbG9hdDpsZWZ0O2ltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO3dpZHRoOiAzMDAlO2hlaWdodDphdXRvO1xcXCJcXHJcXG4gICAgICAgICAgICBzcmM9XFxcIi4vaW1nL2J1dHRvbi9ieWdlbnJlQnRuLnBuZ1xcXCIgYWx0PVxcXCJcXFwiPlxcclxcbiAgICAgICAgPHVsIGlkPVxcXCJjb25zb2xsZXNcXFwiIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXHJcXG4gICAgICAgIDwvdWw+XFxyXFxuICAgIDwvc3Bhbj5cXHJcXG5cXHJcXG4gICAgPHNwYW4gY2xhc3M9XFxcIm14LWF1dG8gZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgPGltZyBjbGFzcz1cXFwicC0wIGJ0biBkcm9wZG93bi10b2dnbGVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCJcXHJcXG4gICAgICAgICAgICBzdHlsZT1cXFwiYm9yZGVyOm5vbmU7ZmxvYXQ6bGVmdDtpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZDt3aWR0aDogMzAwJTtoZWlnaHQ6YXV0bztcXFwiXFxyXFxuICAgICAgICAgICAgc3JjPVxcXCIuL2ltZy9idXR0b24vYnl5ZWFyQnRuLnBuZ1xcXCIgYWx0PVxcXCJcXFwiPlxcclxcbiAgICAgICAgPHVsIGlkPVxcXCJ5ZWFyc1xcXCIgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgPC9zcGFuPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNSBteS0xIG14LWF1dG9cXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwibXgtNSBmb3JtLWNvbnRyb2wgYm9yZGVyLWVuZC0xIHJvdW5kZWRcXFwiIHR5cGU9XFxcInNlYXJjaFxcXCIgcGxhY2Vob2xkZXI9XFxcImNlcmNhXFxcIlxcclxcbiAgICAgICAgICAgICAgICBpZD1cXFwic2VhcmNoVGl0bGVJbnNlcnRpb25zXFxcIj5cXHJcXG4gICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJteC1hdXRvXFxcIj5cXHJcXG4gICAgICAgIDxpbWcgaWQ9XFxcImFkZEluc2VydGlvbjJcXFwiIGNsYXNzPVxcXCJwLTAgYnRuIGRyb3Bkb3duLXRvZ2dsZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIlxcclxcbiAgICAgICAgICAgIHN0eWxlPVxcXCJib3JkZXI6bm9uZTtmbG9hdDpsZWZ0O2ltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO3dpZHRoOiAzMDAlO2hlaWdodDphdXRvO1xcXCJcXHJcXG4gICAgICAgICAgICBzcmM9XFxcIi4vaW1nL2J1dHRvbi9wbHVzQnRuLnBuZ1xcXCIgaGlkZGVuIGFsdD1cXFwiXFxcIj5cXHJcXG4gICAgPC9zcGFuPlxcclxcblxcclxcblxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgaWQ9XFxcInJlbWFpbnNcXFwiPlxcclxcbiAgICA8ZGl2IGlkPVxcXCJpbnNlcnRpb25Db250ZW50XFxcIiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDx1bCBjbGFzcz1cXFwibGlzdC1ncm91cFxcXCI+XFxyXFxuXFxyXFxuICAgIDwvdWw+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdj5cXHJcXG4gICAgPHVsIGlkPVxcXCJwYWdlc1xcXCIgY2xhc3M9XFxcInBhZ2luYXRpb24gcGFnaW5hdGlvbi1zbSBteS0yXFxcIj5cXHJcXG5cXHJcXG4gICAgPC91bD5cXHJcXG48L2Rpdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIiAgICA8ZGl2IGlkPVxcXCJiYWNrXFxcIj5cXHJcXG4gICAgICAgIDxpbWcgaWQ9XFxcImJhY2tnYW1lc1xcXCIgc3R5bGU9XFxcImltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO1xcXCIgY2xhc3M9XFxcIm10LTQgYnV0dG9uaG92ZXIgbWItNFxcXCIgd2lkdGg9MTIwIHNyYz1cXFwiLi9pbWcvYnV0dG9uL2JhY2tCdG4ucG5nXFxcIj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgPCEtLSAgLS0+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwicm93XFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcpO1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXHJcXG4gICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwiaW1hZ2VTbGlkZXJcXFwiIGNsYXNzPVxcXCJjYXJvdXNlbCBzbGlkZVxcXCIgZGF0YS1icy1yaWRlPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiaW5kaWNhdG9yXFxcIiBjbGFzcz1cXFwiY2Fyb3VzZWwtaW5kaWNhdG9yc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJpbm5lclxcXCIgY2xhc3M9XFxcImNhcm91c2VsLWlubmVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhcm91c2VsLWNvbnRyb2wtcHJldlxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRhcmdldD1cXFwiI2ltYWdlU2xpZGVyXFxcIiBkYXRhLWJzLXNsaWRlPVxcXCJwcmV2XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvblxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPlByZWNlZGVudGU8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYXJvdXNlbC1jb250cm9sLW5leHRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10YXJnZXQ9XFxcIiNpbWFnZVNsaWRlclxcXCIgZGF0YS1icy1zbGlkZT1cXFwibmV4dFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb25cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidmlzdWFsbHktaGlkZGVuXFxcIj5TdWNjZXNzaXZhPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTZcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJnaXZlZEdhbWVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZCBtYi0zXFxcIiBzdHlsZT1cXFwibWF4LXdpZHRoOiA1NDBweDtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBnLTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJjYXJkLWltYWdlXFxcIiBjbGFzcz1cXFwiY29sLW1kLTRcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLThcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiY2FyZC1ib2R5XFxcIiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGlkPVxcXCJpbnNlcnRpb24tZGVzY3JpcHRpb25cXFwiIGNsYXNzPVxcXCJmb250LXNpemU6MjBweCBjb2xvcjp3aGl0ZSBjb2wtbWQtMTJcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgaWQ9XFxcImluc2VydGlvbi1jb25maXJtXFxcIiBjbGFzcz1cXFwibXktNFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIFxcclxcblxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcIm15LTUgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICA8aDM+PHNwYW4gaWQ9XFxcImluc2VydGlvbi1jcmVhdG9yXFxcIj48L3NwYW4+IHZvcnJlYmJlIHVubyBkaSBxdWVzdGkgZ2lvY2hpIGluIGNhbWJpbzo8L2gzPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImFjY29yZGlvbiByb3dcXFwiIGlkPVxcXCJhY2NvcmRpb25FeGFtcGxlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYWNjb3JkaW9uLWl0ZW0gY29sLW1kLTRcXFwiPlxcclxcbiAgICAgICAgPGgyIGNsYXNzPVxcXCJhY2NvcmRpb24taGVhZGVyXFxcIiBpZD1cXFwiaGVhZGluZ09uZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cXFwiYnRuLWl0ZW0tMVxcXCIgY2xhc3M9XFxcImFjY29yZGlvbi1idXR0b24gY29sbGFwc2VkXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJjb2xsYXBzZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgZGF0YS1icy10YXJnZXQ9XFxcIiNjb2xsYXBzZU9uZVxcXCIgYXJpYS1leHBhbmRlZD1cXFwidHJ1ZVxcXCIgYXJpYS1jb250cm9scz1cXFwiY29sbGFwc2VPbmVcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9oMj5cXHJcXG4gICAgICAgIDxkaXYgaWQ9XFxcImNvbGxhcHNlT25lXFxcIiBjbGFzcz1cXFwiYWNjb3JkaW9uLWNvbGxhcHNlIGNvbGxhcHNlXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcImhlYWRpbmdPbmVcXFwiXFxyXFxuICAgICAgICAgICAgZGF0YS1icy1wYXJlbnQ9XFxcIiNhY2NvcmRpb25FeGFtcGxlXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhY2NvcmRpb24tYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImltZy1pdGVtLTFcXFwiIGNsYXNzPVxcXCJjYXJkIG14LWF1dG9cXFwiIHN0eWxlPVxcXCJ3aWR0aDogMThyZW07XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiYm9keS1pdGVtLTFcXFwiIGNsYXNzPVxcXCJjYXJkLWJvZHkgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhY2NvcmRpb24taXRlbSBjb2wtbWQtNFxcXCI+XFxyXFxuICAgICAgICA8aDIgY2xhc3M9XFxcImFjY29yZGlvbi1oZWFkZXJcXFwiIGlkPVxcXCJoZWFkaW5nVHdvXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJidG4taXRlbS0yXFxcIiBjbGFzcz1cXFwiYWNjb3JkaW9uLWJ1dHRvbiBjb2xsYXBzZWRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10b2dnbGU9XFxcImNvbGxhcHNlXFxcIlxcclxcbiAgICAgICAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cXFwiI2NvbGxhcHNlVHdvXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCIgYXJpYS1jb250cm9scz1cXFwiY29sbGFwc2VUd29cXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9oMj5cXHJcXG4gICAgICAgIDxkaXYgaWQ9XFxcImNvbGxhcHNlVHdvXFxcIiBjbGFzcz1cXFwiYWNjb3JkaW9uLWNvbGxhcHNlIGNvbGxhcHNlXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcImhlYWRpbmdUd29cXFwiXFxyXFxuICAgICAgICAgICAgZGF0YS1icy1wYXJlbnQ9XFxcIiNhY2NvcmRpb25FeGFtcGxlXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhY2NvcmRpb24tYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImltZy1pdGVtLTJcXFwiIGNsYXNzPVxcXCJjYXJkIG14LWF1dG9cXFwiIHN0eWxlPVxcXCJ3aWR0aDogMThyZW07XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiYm9keS1pdGVtLTJcXFwiIGNsYXNzPVxcXCJjYXJkLWJvZHkgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhY2NvcmRpb24taXRlbSBjb2wtbWQtNFxcXCI+XFxyXFxuICAgICAgICA8aDIgY2xhc3M9XFxcImFjY29yZGlvbi1oZWFkZXJcXFwiIGlkPVxcXCJoZWFkaW5nVGhyZWVcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcImJ0bi1pdGVtLTNcXFwiIGNsYXNzPVxcXCJhY2NvcmRpb24tYnV0dG9uIGNvbGxhcHNlZFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiXFxyXFxuICAgICAgICAgICAgICAgIGRhdGEtYnMtdGFyZ2V0PVxcXCIjY29sbGFwc2VUaHJlZVxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiIGFyaWEtY29udHJvbHM9XFxcImNvbGxhcHNlVGhyZWVcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9oMj5cXHJcXG4gICAgICAgIDxkaXYgaWQ9XFxcImNvbGxhcHNlVGhyZWVcXFwiIGNsYXNzPVxcXCJhY2NvcmRpb24tY29sbGFwc2UgY29sbGFwc2VcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwiaGVhZGluZ1RocmVlXFxcIlxcclxcbiAgICAgICAgICAgIGRhdGEtYnMtcGFyZW50PVxcXCIjYWNjb3JkaW9uRXhhbXBsZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWNjb3JkaW9uLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJpbWctaXRlbS0zXFxcIiBjbGFzcz1cXFwiY2FyZCBteC1hdXRvXFxcIiBzdHlsZT1cXFwid2lkdGg6IDE4cmVtO1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImJvZHktaXRlbS0zXFxcIiBjbGFzcz1cXFwiY2FyZC1ib2R5IHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxzdHlsZT5cXHJcXG4gICAgLm1hc3NpbW9ib2xkaSB7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XFxyXFxuPGRpdiBjbGFzcz1cXFwibXktNVxcXCIgc3R5bGU9XFxcImZvbnQtd2VpZ2h0OiBib2xkO1xcXCI+XFxyXFxuICAgIDxkaXYgc3R5bGU9XFxcImRpc3BsYXk6IGZsZXg7XFxcIj5cXHJcXG4gICAgICAgIDxzcGFuPlxcclxcbiAgICAgICAgICAgIDwhLS0gQWxsZXJ0YSBNYXJ0ZWxsYXRhOiBzZSB0b2xnbyBpbCBib3R0b25lIHRvbGdvIHB1cmUgbGEgbGlzdGEsXFxyXFxuICAgICAgICAgICAgICAgIHF1aW5kaSBsJ2hvIG1lc3NvIGhpZGRlbi0tPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gaGlkZGVuIGlkPVxcXCJhZGRJbnNlcnRpb25cXFwiIHN0eWxlPVxcXCJjb2xvcjp3aGl0ZVxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4vaW1nL3BsdXMucG5nXFxcIiBhbHQ9XFxcInBsdXNcXFwiIHN0eWxlPVxcXCJ3aWR0aDoyNXB4XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgSW5zZXJpc2NpIEFubnVuY2lvXFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICA8L3NwYW4+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8YnI+XFxyXFxuICAgIDxkaXYgc3R5bGU9XFxcImRpc3BsYXk6IGlubGluZS1mbGV4O1xcXCI+XFxyXFxuXFxyXFxuICAgICAgICA8c3BhbiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiA0MHB4XFxcIj5cXHJcXG4gICAgICAgICAgICA8aDQgc3R5bGU9XFxcImZvbnQtd2VpZ2h0OiBib2xkO1xcXCI+IE5vbWUgQ2F0ZWdvcmlhOiA8L2g0PlxcclxcbiAgICAgICAgPC9zcGFuPlxcclxcblxcclxcbiAgICAgICAgPHNwYW4gc3R5bGU9XFxcIm1hcmdpbi1yaWdodDogNDBweFxcXCI+IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGJvcmRlci1lbmQtMSBib3JkZXIgcm91bmRlZC1waWxsXFxcIlxcclxcbiAgICAgICAgICAgICAgICBzdHlsZT1cXFwiZm9udC13ZWlnaHQ6IGJvbGQ7XFxcIiB2YWx1ZT1cXFwiXFxcIiBwbGFjZWhvbGRlcj1cXFwiQ2F0ZWdvcmlhXFxcIiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OjIwcHhcXFwiIGlkPVxcXCJjYXRlZ29yeU5hbWVcXFwiPlxcclxcbiAgICAgICAgPC9zcGFuPlxcclxcblxcclxcbiAgICAgICAgPHNwYW4gc3R5bGU9XFxcIm1hcmdpbi1yaWdodDogNDBweFxcXCI+IDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgc3R5bGU9XFxcImZvbnQtd2VpZ2h0OiBib2xkO1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgaWQ9XFxcImNyZWF0ZUNhdGVnb3J5XFxcIj5DcmVhIENhdGVnb3JpYTwvYnV0dG9uPiA8L3NwYW4+XFxyXFxuXFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8YnI+XFxyXFxuXFxyXFxuICAgIDxkaXYgaWQ9XFxcInJlbWFpbnNcXFwiPlxcclxcbiAgICAgICAgPGJyPlxcclxcbiAgICAgICAgPHVsIGlkPVxcXCJpbnNlcnRpb25Db250ZW50MlxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXBcXFwiIHN0eWxlPVxcXCJmb250LXdlaWdodDogYm9sZDtcXFwiPlxcclxcblxcclxcbiAgICAgICAgPC91bD5cXHJcXG5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXY+XFxyXFxuICAgICAgICA8dWwgaWQ9XFxcInBhZ2VzMlxcXCIgY2xhc3M9XFxcInBhZ2luYXRpb24gcGFnaW5hdGlvbi1zbSBteS0yXFxcIiBzdHlsZT1cXFwiZm9udC13ZWlnaHQ6IGJvbGQ7XFxcIj5cXHJcXG5cXHJcXG4gICAgICAgIDwvdWw+XFxyXFxuXFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBpZD1cXFwiY2hhdEJvZHlcXFwiIGNsYXNzPVxcXCJjYXJkLWJvZHkgb3ZlcmZsb3ctYXV0b1xcXCIgZGF0YS1tZGItcGVyZmVjdC1zY3JvbGxiYXI9XFxcInRydWVcXFwiXFxyXFxuICAgIHN0eWxlPVxcXCJwb3NpdGlvbjogcmVsYXRpdmU7IGhlaWdodDogNzQwcHhcXFwiPlxcclxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBpZD1cXFwiY2hhdEZvb3RlclxcXCIgY2xhc3M9XFxcImNhcmQtZm9vdGVyIHRleHQtbXV0ZWQgZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydCBhbGlnbi1pdGVtcy1jZW50ZXIgcC0zXFxcIj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgbWItMFxcXCI+XFxyXFxuICAgICAgICA8aW5wdXQgaWQ9XFxcIm1lc3NhZ2VUZXh0XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiU2NyaXZpIGlsIG1lc3NhZ2dpb1xcXCJcXHJcXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJSZWNpcGllbnQncyB1c2VybmFtZVxcXCIgYXJpYS1kZXNjcmliZWRieT1cXFwiYnV0dG9uLWFkZG9uMlxcXCIgLz5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBpZD1cXFwiYnV0dG9uLWFkZG9uMlxcXCIgc3R5bGU9XFxcInBhZGRpbmctdG9wOiAuNTVyZW07XFxcIj5cXHJcXG4gICAgICAgICAgICBJbnZpYVxcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBpZD1cXFwiY2hhdEhlYWRlclxcXCIgY2xhc3M9XFxcImNhcmQtaGVhZGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgcC0zXFxcIj5cXHJcXG4gICAgPGg1IGlkPVxcXCJjaGF0VGl0bGVcXFwiIGNsYXNzPVxcXCJtYi0wXFxcIj48L2g1PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJkLWZsZXggZmxleC1yb3cgYWxpZ24taXRlbXMtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJiYWRnZSBiZy13YXJuaW5nIG1lLTNcXFwiPjIwPC9zcGFuPlxcclxcbiAgICAgICAgPGkgaWQ9XFxcImJhY2tUb0xpc3RcXFwiIGNsYXNzPVxcXCJmYXMgZmEtdGltZXMgdGV4dC1tdXRlZCBmYS14c1xcXCI+PC9pPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxzdHlsZT5cXHJcXG4gICNpbnNlcnRDb250IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpOyBib3JkZXI6IDNweCBzb2xpZCBncmVlbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5idG46aG92ZXIge1xcclxcbiAgICAgICAgb3V0bGluZS1jb2xvcjogdHJhbnNwYXJlbnQgO1xcclxcbiAgICAgICAgb3V0bGluZS1zdHlsZTogc29saWQ7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggIzVhMDFhNztcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IDAuN3M7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gIC5mb3JtLWNvbnRyb2w6aG92ZXJ7XFxyXFxuICAgICAgICBvdXRsaW5lLWNvbG9yOiB0cmFuc3BhcmVudCA7XFxyXFxuICAgICAgICBvdXRsaW5lLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCAjNWEwMWE3O1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogMC43cztcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XFxyXFxuXFxyXFxuPGRpdiBpZD1cXFwiaW5zZXJ0Q29udFxcXCIgY2xhc3M9XFxcInJvdW5kZWQgbXktMiBjb250YWluZXJcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLTEyIHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICA8aDIgY2xhc3M9XFxcImJvcmRlci1wcmltYXJ5IGJvcmRlci1ib3R0b20gYm9yZGVyLTJcXFwiPjxiPkluc2VyaXNjaSBBbm51bmNpbzwvYj48L2gyPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcblxcclxcbiAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLTRcXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwidGl0bGVcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5cXHJcXG4gICAgICAgICAgPGgzPjxiPlRpdG9sbyBBbm51bmNpbzwvYj48L2gzPlxcclxcbiAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiYm9yZGVyIGJvcmRlci0yIGJvcmRlci1pbmZvIGZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInRpdGxlSW5zZXJ0aW9uXFxcIiBwbGFjZWhvbGRlcj1cXFwiVGl0b2xvIEFubnVuY2lvXFxcIj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImRlc2NyaXB0aW9uXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+XFxyXFxuICAgICAgICAgIDxoMz48Yj5EZXNjcml6aW9uZSBWaWRlb2dpb2NvPC9iPjwvaDM+XFxyXFxuICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgPHRleHRhcmVhIGNsYXNzPVxcXCJib3JkZXIgYm9yZGVyLTIgYm9yZGVyLWluZm8gZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiZGVzY3JpcHRpb25JbnNlcnRpb25cXFwiIHJvd3M9XFxcIjNcXFwiIHBsYWNlaG9sZGVyPVxcXCJEZXNjcml6aW9uZSBBbm51bmNpb1xcXCI+PC90ZXh0YXJlYT5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgICA8ZGl2PlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwidHJhZGVHYW1lXFxcIiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICA8aDM+PGI+VHJhZGUtR2FtZTwvYj48L2gzPlxcclxcbiAgICAgICAgICA8aDU+RGEgcXVhbGUgdGVzb3Jpbm8gdGkgdm9ycmVzdGkgc2VwYXJhcmU/PC9oNT5cXHJcXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRyb3Bkb3duIHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJzZWxlY3RlZFRyYWRlR2FtZVxcXCIgY2xhc3M9XFxcIm1iLTIgYm9yZGVyIGJvcmRlci0yIGJvcmRlci1kYXJrIGJ0biBidG4tbGlnaHQgZHJvcGRvd24tdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiIHBsYWNlaG9sZGVyPVxcXCJRdWFudGkgYmVpIGdpb2NoaW5pIVxcXCI+XFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPHVsIGlkPVxcXCJ0cmFkZUdhbWVcXFwiIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXHJcXG4gICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLTRcXFwiPlxcclxcbiAgICAgIDxkaXY+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJ3aXNoR2FtZXNcXFwiIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgIDxoMz48Yj5XaXNoLUxpc3Q8L2I+PC9oMz5cXHJcXG4gICAgICAgICAgPGg1PkNoZSBnaW9jaGkgdm9ycmVzdGkgcmljZXZlcmUgaW4gY2FtYmlvIGRlbCB0dW8gdGVzb3Jpbm8/PC9oNT5cXHJcXG5cXHJcXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRyb3Bkb3duIHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJib3JkZXIgYm9yZGVyLTIgYm9yZGVyLWRhcmsgYnRuIGJ0bi1saWdodCBkcm9wZG93bi10b2dnbGVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCJcXHJcXG4gICAgICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgU29sbyAzIEVoISBOb24gYmFyaWFtbyFcXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8dWwgaWQ9XFxcIndpc2hHYW1lc1xcXCIgY2xhc3M9XFxcInAtMCBkcm9wZG93bi1tZW51XFxcIj5cXHJcXG4gICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLTRcXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiZ2FsbGVyeVxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPlxcclxcbiAgICAgICAgICA8aDM+PGI+SW1tYWdpbmk8L2I+PC9oMz5cXHJcXG4gICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XFxcImJvcmRlciBib3JkZXItMiBib3JkZXItaW5mbyBmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJnYWxsZXJ5SW5zZXJ0aW9uXFxcIiByb3dzPVxcXCI3XFxcIlxcclxcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiSW5zZXJpc2NpIGxlIHVybCBkZWxsZSBpbWFnaW5pIGRlbGwnYW5udW5jaW8gZGEgaW5zZXJpcmUsIG9nbnVuYSBkaXZpc2EgZGFsbGEgdmlyZ29sYSBFczogaHR0cDovL2ltZ3VybC9pbWcucG5nLGh0dHA6Ly9pbWd1cmwvaW1nMi5wbmdcXFwiPjwvdGV4dGFyZWE+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICA8dWwgaWQ9XFxcInNlbGVjdGVkR2FtZXNcXFwiPlxcclxcbiAgICAgICAgICBcXHJcXG4gICAgICAgIDwvdWw+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImNvbC0xMlxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1iLTMgbXQtMyB0ZXh0LWNlbnRlciBwLTBcXFwiIHN0eWxlPVxcXCJib3JkZXI6bm9uZTtmbG9hdDpsZWZ0O2ltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO3dpZHRoOiAxMDAlO2hlaWdodDphdXRvO1xcXCI+XFxyXFxuICAgICAgPGltZyBpZD1cXFwic2VuZEluc2VydGlvblxcXCIgY2xhc3M9XFxcInAtMCBidG5cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgc3JjPVxcXCIuL2ltZy9idXR0b24vYWRkQnRuLnBuZ1xcXCIgYWx0PVxcXCJcXFwiIHN0eWxlPVxcXCJib3JkZXI6bm9uZTt3aWR0aDo5JTtcXFwiPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPHN0eWxlPlxcclxcbiAgLmNhcmRmb290ZXIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb290ZXJsaW5rcyB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lO1xcclxcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgfVxcclxcblxcclxcbiAgYTpob3ZlciwgYTphY3RpdmUge1xcclxcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogZ3JleTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGxpIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuICBib2R5IHtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gIGZvb3RlciB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvKiBUaGUgYXJ0aWNsZSBmaWxscyBhbGwgdGhlIHNwYWNlIGJldHdlZW4gaGVhZGVyICYgZm9vdGVyICovXFxyXFxuICBib2R5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGRpdi5jb250YWluZXIge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgfVxcclxcblxcclxcbjwvc3R5bGU+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiY2FyZGZvb3RlclxcXCI+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCI+XFxyXFxuICAgIDxpbWcgc3JjPVxcXCIuL2ltZy92aWRlb2dhbWVsb3ZlcmZvb3Rlci5wbmdcXFwiIHN0eWxlPVxcXCJ3aWR0aDoyNyU7IHBhZGRpbmc6IDIlOyAgb3BhY2l0eTogMC44O1xcXCIgYWx0PVxcXCJcXFwiPlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiIHN0eWxlPVxcXCJwYWRkaW5nLWJvdHRvbTogMSU7XFxcIj5cXHJcXG4gICAgPHVsPlxcclxcbiAgICAgIDxsaT4gPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImZvb3RlcmxpbmtzXFxcIj5Ib21lPC9hPiA8L2xpPlxcclxcbiAgICAgIDxsaT4gPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImZvb3RlcmxpbmtzXFxcIj5QYW9sbzwvYT4gPC9saT5cXHJcXG4gICAgICA8bGk+IDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJmb290ZXJsaW5rc1xcXCI+UGllcm88L2E+IDwvbGk+XFxyXFxuICAgICAgPGxpPiA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiZm9vdGVybGlua3NcXFwiPkFib3V0IFVzPC9hPiA8L2xpPlxcclxcbiAgICA8L3VsPlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWZvb3RlciB0ZXh0LW11dGVkXFxcIiBzdHlsZT1cXFwicGFkZGluZy1ib3R0b206IDElOyAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogcmdiKDIyLCAyMiwgMjIpO1xcXCI+XFxyXFxuICAgIDxwICBjbGFzcz1cXFwiZm9vdGVybGlua3NcXFwiPiDCqTIwMjMgUGFvbG8gRW50ZXJwcmlzZSBJbmMuIHwgVHV0dGkgaSBkaXJpdHRpIHJpc2VydmF0aSAoYSBQaWVyaW5vKSA8L3A+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48IS0tXFxyXFxuPHN0eWxlPlxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwcmVtIGF1dG87XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwibWFpblxcXCIgXFxcIi5cXFwiIFxcXCJmb290ZXJcXFwiO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZDogI0Y1RjdGQTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIge1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIC0tZm9vdGVyLWJhY2tncm91bmQ6I0VENTU2NTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBncmlkLWFyZWE6IGZvb3RlcjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEycmVtO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIgLmJ1YmJsZXMge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgaGVpZ2h0OiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tZm9vdGVyLWJhY2tncm91bmQpO1xcclxcbiAgZmlsdGVyOiB1cmwoXFxcIiNibG9iXFxcIik7XFxyXFxufVxcclxcbmJvZHkgLmZvb3RlciAuYnViYmxlcyAuYnViYmxlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IHZhcigtLXBvc2l0aW9uLCA1MCUpO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tZm9vdGVyLWJhY2tncm91bmQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBidWJibGUtc2l6ZSB2YXIoLS10aW1lLCA0cykgZWFzZS1pbiBpbmZpbml0ZSB2YXIoLS1kZWxheSwgMHMpLCBidWJibGUtbW92ZSB2YXIoLS10aW1lLCA0cykgZWFzZS1pbiBpbmZpbml0ZSB2YXIoLS1kZWxheSwgMHMpO1xcclxcbiAgICAgICAgICBhbmltYXRpb246IGJ1YmJsZS1zaXplIHZhcigtLXRpbWUsIDRzKSBlYXNlLWluIGluZmluaXRlIHZhcigtLWRlbGF5LCAwcyksIGJ1YmJsZS1tb3ZlIHZhcigtLXRpbWUsIDRzKSBlYXNlLWluIGluZmluaXRlIHZhcigtLWRlbGF5LCAwcyk7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAxMDAlKTtcXHJcXG59XFxyXFxuYm9keSAuZm9vdGVyIC5jb250ZW50IHtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXHJcXG4gIGdyaWQtZ2FwOiA0cmVtO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWZvb3Rlci1iYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuYm9keSAuZm9vdGVyIC5jb250ZW50IGEsIGJvZHkgLmZvb3RlciAuY29udGVudCBwIHtcXHJcXG4gIGNvbG9yOiAjRjVGN0ZBO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIgLmNvbnRlbnQgYiB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbmJvZHkgLmZvb3RlciAuY29udGVudCBwIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXHJcXG59XFxyXFxuYm9keSAuZm9vdGVyIC5jb250ZW50ID4gZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbmJvZHkgLmZvb3RlciAuY29udGVudCA+IGRpdiA+IGRpdiB7XFxyXFxuICBtYXJnaW46IDAuMjVyZW0gMDtcXHJcXG59XFxyXFxuYm9keSAuZm9vdGVyIC5jb250ZW50ID4gZGl2ID4gZGl2ID4gKiB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXHJcXG59XFxyXFxuYm9keSAuZm9vdGVyIC5jb250ZW50ID4gZGl2IC5pbWFnZSB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogNHJlbTtcXHJcXG4gIGhlaWdodDogNHJlbTtcXHJcXG4gIG1hcmdpbjogMC4yNXJlbSAwO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIGJ1YmJsZS1zaXplIHtcXHJcXG4gIDAlLCA3NSUge1xcclxcbiAgICB3aWR0aDogdmFyKC0tc2l6ZSwgNHJlbSk7XFxyXFxuICAgIGhlaWdodDogdmFyKC0tc2l6ZSwgNHJlbSk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgd2lkdGg6IDByZW07XFxyXFxuICAgIGhlaWdodDogMHJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBidWJibGUtc2l6ZSB7XFxyXFxuICAwJSwgNzUlIHtcXHJcXG4gICAgd2lkdGg6IHZhcigtLXNpemUsIDRyZW0pO1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLXNpemUsIDRyZW0pO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHdpZHRoOiAwcmVtO1xcclxcbiAgICBoZWlnaHQ6IDByZW07XFxyXFxuICB9XFxyXFxufVxcclxcbkAtd2Via2l0LWtleWZyYW1lcyBidWJibGUtbW92ZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGJvdHRvbTogLTRyZW07XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgYm90dG9tOiB2YXIoLS1kaXN0YW5jZSwgMTByZW0pO1xcclxcbiAgfVxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGJ1YmJsZS1tb3ZlIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgYm90dG9tOiAtNHJlbTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICBib3R0b206IHZhcigtLWRpc3RhbmNlLCAxMHJlbSk7XFxyXFxuICB9XFxyXFxufVxcclxcbjwvc3R5bGU+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwibWFpblxcXCI+PC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwiZm9vdGVyXFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImJ1YmJsZXNcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6Mi42NjQ1MjMwMTYyODUxOTYzcmVtOyAtLWRpc3RhbmNlOjcuMzA0MTE2MDM2NzQyNjE3NHJlbTsgLS1wb3NpdGlvbjo4My41NjM2ODA1MzMzODQ4MyU7IC0tdGltZTozLjQ5NTY0MDMwOTYyNzIyOTVzOyAtLWRlbGF5Oi0yLjc3MzkzODE5NjIzNzcwMnM7XFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnViYmxlXFxcIiBzdHlsZT1cXFwiLS1zaXplOjUuODk0MTQ5ODQ5ODM4MDE2cmVtOyAtLWRpc3RhbmNlOjcuNjI3OTc0NDg0MzAwNDI3cmVtOyAtLXBvc2l0aW9uOjkzLjM2ODc4MTg4MzkzNjQyJTsgLS10aW1lOjMuNzYwMTQ4NjI3MjgzODc1NnM7IC0tZGVsYXk6LTMuMzk3MTAyMjg4NDAzMDI5cztcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6Mi43OTg2NDcxMDY2NjU2ODVyZW07IC0tZGlzdGFuY2U6OS4yMDA0OTY4MTcyMjI1MjVyZW07IC0tcG9zaXRpb246MC4yMDc3NTczMjY5ODQxNDE5NSU7IC0tdGltZToyLjIwMTA5NjAyMjAwNTg2NTdzOyAtLWRlbGF5Oi0yLjY5ODk0ODIxNjQ2NDU0NXM7XFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnViYmxlXFxcIiBzdHlsZT1cXFwiLS1zaXplOjQuMzU5NjIxOTI2NzgyMjk0cmVtOyAtLWRpc3RhbmNlOjcuNDYzNTc5OTMwMDc0MTlyZW07IC0tcG9zaXRpb246NDcuODY3ODMxNzQ2ODUwOTI1JTsgLS10aW1lOjIuMTIwODIwNTYxMjcwNzI0czsgLS1kZWxheTotMi41MTQxNzc4NDkyMTgyMzM2cztcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6NS4wMjgzNTIwNTA5NzgxOTZyZW07IC0tZGlzdGFuY2U6Ny4yNDI3MjAwMzY4MzIyNDlyZW07IC0tcG9zaXRpb246MzAuNjk5ODQ2MTU5MjczOTYlOyAtLXRpbWU6My4yNTM1OTU1MjgxMDYyODgzczsgLS1kZWxheTotMy4zNTU0NTQ1MzI1NDM5NzE1cztcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6Mi43NTU5NzgyMjE4NTcxOTNyZW07IC0tZGlzdGFuY2U6Ny40Njk5NzI0OTY5MjY1MDlyZW07IC0tcG9zaXRpb246MTAuMjM4MjI3MDIwNzAxMTM5JTsgLS10aW1lOjIuNjQ3MjAwMTUyMDA4MzY2czsgLS1kZWxheTotMy41NzIxNTk0NjIyNDk2MjE4cztcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6NS4wODQ4MTI4MTcyMDg3Mzc1cmVtOyAtLWRpc3RhbmNlOjkuNTU4NTU0MTQyNTg0NjI2cmVtOyAtLXBvc2l0aW9uOjk0LjUxOTgyMDU3ODMyMjE1JTsgLS10aW1lOjMuNzE1NTU1ODc2MjE3MzA1NXM7IC0tZGVsYXk6LTMuMDgxMDA2Njk2NzU3ODU5cztcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6My41Mzc4MDc1NjA3NzU5NThyZW07IC0tZGlzdGFuY2U6OS40MjE0MjM1Mjk4NDE5MjhyZW07IC0tcG9zaXRpb246NS4zOTYyNzQyMTE3MDkwMTMlOyAtLXRpbWU6My4xNzg3ODk0NTU2MDE4ODU2czsgLS1kZWxheTotMy40NDYxNjk5MDUxODY3NzVzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZTo1LjYyNzczMTIxODYwMDM0OHJlbTsgLS1kaXN0YW5jZTo3Ljc0NjQ2MzQxNjA3NTE2NXJlbTsgLS1wb3NpdGlvbjoxMC45Mjg4MDI0OTM0Njk1MzElOyAtLXRpbWU6Mi41Njc5MjU5MzIyNTY2OXM7IC0tZGVsYXk6LTMuNDA0ODczMTAxNDUxOTg2cztcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6My42OTQ5NTk5MjE5NDcyMzEzcmVtOyAtLWRpc3RhbmNlOjkuMTgxNTQ5NTg2NzUwMTA3cmVtOyAtLXBvc2l0aW9uOi00LjU4OTA1NTU2Mzc5ODk3NiU7IC0tdGltZTozLjcwOTUyMjA2NTI4ODgzNDVzOyAtLWRlbGF5Oi0zLjEyOTU4NjEzMTU5MTYwNjdzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZToyLjc1OTI2NDIyMTA2NzE3OHJlbTsgLS1kaXN0YW5jZTo4LjQyNjg4ODA5OTU1MTM3cmVtOyAtLXBvc2l0aW9uOjI4LjA0NjcyODI5MzEyNDUwMiU7IC0tdGltZTozLjI4NDA5NjExMDUyMzZzOyAtLWRlbGF5Oi0yLjM2NjUxOTg3NDMwOTM4N3M7XFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnViYmxlXFxcIiBzdHlsZT1cXFwiLS1zaXplOjIuNTc0MzA4MjQzNTEwNTY4NHJlbTsgLS1kaXN0YW5jZTo5LjQzMDY1Mzk2MjU3Mzg1M3JlbTsgLS1wb3NpdGlvbjozMC44Mzk3NDY0NzE3Mzk2MSU7IC0tdGltZTozLjY4NjU3MDAxNzYyMzA3MDdzOyAtLWRlbGF5Oi0zLjYxOTAzOTYwNjAzMzI5N3M7XFxcIj48L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxyXFxuICAgIDxkaXY+XFxyXFxuICAgICAgPGRpdj48Yj5FbGRldzwvYj48YSBocmVmPVxcXCIjXFxcIj5TZWN1Y2U8L2E+PGEgaHJlZj1cXFwiI1xcXCI+RHJ1cGFuZDwvYT48YSBocmVmPVxcXCIjXFxcIj5PY2Vhc2g8L2E+PGEgaHJlZj1cXFwiI1xcXCI+VWdlZmU8L2E+PGEgaHJlZj1cXFwiI1xcXCI+QmFiZWQ8L2E+PC9kaXY+XFxyXFxuICAgICAgPGRpdj48Yj5TcG90aGE8L2I+PGEgaHJlZj1cXFwiI1xcXCI+TWlza2FzYTwvYT48YSBocmVmPVxcXCIjXFxcIj5BZ2l0aGU8L2E+PGEgaHJlZj1cXFwiI1xcXCI+U2Nlc2hhPC9hPjxhIGhyZWY9XFxcIiNcXFwiPkx1bGxlPC9hPjwvZGl2PlxcclxcbiAgICAgIDxkaXY+PGI+Q2hhc2hha2liPC9iPjxhIGhyZWY9XFxcIiNcXFwiPkNob2dhdXc8L2E+PGEgaHJlZj1cXFwiI1xcXCI+UGhhY2h1bGVkPC9hPjxhIGhyZWY9XFxcIiNcXFwiPlRpZWJlZnQ8L2E+PGEgaHJlZj1cXFwiI1xcXCI+T2NpZDwvYT48YSBocmVmPVxcXCIjXFxcIj5Jem9tPC9hPjxhIGhyZWY9XFxcIiNcXFwiPk9ydDwvYT48L2Rpdj5cXHJcXG4gICAgICA8ZGl2PjxiPkF0aG9kPC9iPjxhIGhyZWY9XFxcIiNcXFwiPlBhbXV6PC9hPjxhIGhyZWY9XFxcIiNcXFwiPlZhcGVydDwvYT48YSBocmVmPVxcXCIjXFxcIj5OZWVzazwvYT48YSBocmVmPVxcXCIjXFxcIj5PbWVtYW5lbjwvYT48L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXY+PGEgY2xhc3M9XFxcImltYWdlXFxcIiBocmVmPVxcXCJodHRwczovL2NvZGVwZW4uaW8vei1cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCZxdW90O2h0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE5OTAxMS9oYXBweS5zdmcmcXVvdDspXFxcIj48L2E+XFxyXFxuICAgICAgPHA+wqkyMDE5IE5vdCBSZWFsbHk8L3A+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPHN2ZyBzdHlsZT1cXFwiIHRvcDoxMDB2aFxcXCI+XFxyXFxuICA8ZGVmcz5cXHJcXG4gICAgPGZpbHRlciBpZD1cXFwiYmxvYlxcXCI+XFxyXFxuICAgICAgPGZlR2F1c3NpYW5CbHVyIGluPVxcXCJTb3VyY2VHcmFwaGljXFxcIiBzdGREZXZpYXRpb249XFxcIjEwXFxcIiByZXN1bHQ9XFxcImJsdXJcXFwiPjwvZmVHYXVzc2lhbkJsdXI+XFxyXFxuICAgICAgPGZlQ29sb3JNYXRyaXggaW49XFxcImJsdXJcXFwiIG1vZGU9XFxcIm1hdHJpeFxcXCIgdmFsdWVzPVxcXCIxIDAgMCAwIDAgIDAgMSAwIDAgMCAgMCAwIDEgMCAwICAwIDAgMCAxOSAtOVxcXCIgcmVzdWx0PVxcXCJibG9iXFxcIj48L2ZlQ29sb3JNYXRyaXg+XFxyXFxuICAgICAgZmVDb21wb3NpdGUoaW49XFxcIlNvdXJjZUdyYXBoaWNcXFwiIGluMj1cXFwiYmxvYlxcXCIgb3BlcmF0b3I9XFxcImF0b3BcXFwiKSAvL0FmdGVyIHJldmlld2luZyB0aGlzIGFmdGVyIHllYXJzIEkgY2FuJ3QgcmVtZW1iZXIgd2h5IEkgYWRkZWQgdGhpcyBidXQgaXQgaXNuJ3QgbmVjZXNzYXJ5IGZvciB0aGUgYmxvYiBlZmZlY3RcXHJcXG48L2ZpbHRlcj5cXHJcXG48L2RlZnM+XFxyXFxuPC9zdmc+XFxyXFxuLS0+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8bmF2IGFyaWEtbGFiZWw9XFxcIi4uLlxcXCI+XFxyXFxuICAgIDxkaXY+XFxyXFxuICAgICAgICA8aDEgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5HZXN0aXNjaSBVdGVudGkgUmVnaXN0cmF0aTwvaDE+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8dWwgaWQ9XFxcInVzZXJMaXN0XFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cFxcXCI+XFxyXFxuICAgICAgICBcXHJcXG4gICAgPC91bD5cXHJcXG4gICAgPHVsIGlkPVxcXCJwYWdpbmF0aW9uXFxcIiBjbGFzcz1cXFwicGFnaW5hdGlvbiBwYWdpbmF0aW9uLXNtIG15LTJcXFwiPlxcclxcbiAgICAgICAgXFxyXFxuICAgIDwvdWw+XFxyXFxuPC9uYXY+XFxyXFxuXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGlkPVxcXCJiZ2Fyb3VuZFxcXCIgY2xhc3M9XFxcInRleHQtY2VudGVyIG15LTVcXFwiPlxcclxcbiAgICA8aW1nIHNyYz1cXFwiLi9pbWcvdmlkZW9nYW1lbG92ZXIucG5nXFxcIiBhbHQ9XFxcIm5vdCBmb3VuZFxcXCIgY2xhc3M9XFxcImhlYWRlckltZyBteC1hdXRvXFxcIiBzdHlsZT1cXFwid2lkdGg6IDUwJTsgXFxcIiBpZD1cXFwiaGVhZGVySW1nXFxcIj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48c3R5bGU+XFxyXFxuXFxyXFxuICAud2lkZ2V0SW50cm8ge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAud2lkZ2V0SW50cm8tZGl2e1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgI2FubkNhcmQge1xcclxcblxcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjaW1nQ2FyZCB7XFxyXFxuICAgIGhlaWdodDogNjAlO1xcclxcbiAgICB3aWR0aDpmaXQtY29udGVudDtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJ0bjpob3ZlciB7XFxyXFxuICAgIG91dGxpbmUtY29sb3I6IHRyYW5zcGFyZW50IDtcXHJcXG4gICAgb3V0bGluZS1zdHlsZTogc29saWQ7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCAjNWEwMWE3O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjdzO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmltZ1Mge1xcclxcbiAgICB3aWR0aDogNTRweDtcXHJcXG4gICAgaGVpZ2h0OiA0MnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgYm9keSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAud2lkZ2V0UGljIHtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5waWNSaWdodCB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBpY2xlZnQge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlYyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwJTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcclxcbiAgICBwYWRkaW5nOiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnAge1xcclxcbiAgICBwYWRkaW5nOiAwcHg7XFxyXFxuICB9XFxyXFxuIFxcclxcbjwvc3R5bGU+XFxyXFxuXFxyXFxuPHNlY3Rpb24gY2xhc3M9XFxcInAgc2VjIGJvcmRlciBib3JkZXItc3VjY2VzcyBtYi0yIGJvcmRlci1vcGFjaXR5LTUwIHJvdW5kZWQgcm93IGFsaW5nLWl0ZW0tc3RhcnRcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwicCBjb2wtNFxcXCI+XFxyXFxuICAgIDxwaWN0dXJlPlxcclxcbiAgICAgIDxpbWcgY2xhc3M9XFxcIndpZGdldFBpYyBwaWNMZWZ0IHJvdW5kZWQtc3RhcnRcXFwiIHNyYz1cXFwiLi9pbWcvZ2FtZXNlYXJjaC5qcGVnXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwJVxcXCIgYWx0PVxcXCJcXFwiPlxcclxcbiAgICA8L3BpY3R1cmU+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImJvcmRlci1zdGFydCBib3JkZXItMyBib3JkZXItcHJpbWFyeSBjb2wtOCB0ZXh0LXN0YXJ0IHdpZGdldFRleHRcXFwiPlxcclxcbiAgICA8aDE+XFxyXFxuICAgICAgPGI+SWwgcG9ydGFsZSBkZWkgdmVyaSBnYW1lcnMuPC9iPlxcclxcbiAgICA8L2gxPlxcclxcbiAgICA8aDI+XFxyXFxuICAgICAgU2VpIGFsbGEgcmljZXJjYSBkaSB1biBnaW9jbywgdmVjY2hpbyBvIG51b3ZvIGNoZSBzaWEsIG1hIG5vbiByaWVzY2kgYSB0cm92YXJsbz8gTm9pIGFiYmlhbW8gbGEgc29sdXppb25lIHBlciB0ZS4uLlxcclxcbiAgICAgIENlcmNhIHRyYSBjZW50aW5haWEgZGkgYW5udW5jaSBpbCB0aXRvbG8gY2hlIG5vbiB0cm92YXZpIHBpw7ksIG1ldHRpdGkgaW4gY29udGF0dG8gY29uIGwndXRlbnRlIGNoZSBsbyBzdGEgc2NhbWJpYW5kbyBcXHJcXG4gICAgICBlIGZhaSBsJ2FmZmFyZSBkZWwgc2Vjb2xvLi4uXFxyXFxuICAgIDwvaDI+XFxyXFxuICA8L2Rpdj5cXHJcXG48L3NlY3Rpb24+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIHRleHQtY2VudGVyXFxcIiBzdHlsZT1cXFwibWFyZ2luLXRvcDogMTAlOyBtYXJnaW4tYm90dG9tOiAxMCU7XFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OjEwJTttYXJnaW4tcmlnaHQ6MTAlO1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbFxcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZCB0ZXh0LWJnLWRhbmdlclxcXCIgc3R5bGU9XFxcIndpZHRoOiAxOHJlbTtoZWlnaHQ6IDEwMCU7XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuICAgICAgICAgIDxoNSBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+Q2VyY2E8L2g1PlxcclxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj5DZXJjYSBpbCB0dW8gZ2lvY28gcHJlZmVyZWl0byB0cmEgY2VudGluYWlhIGRpIGFubnVuY2k8L3A+XFxyXFxuICAgICAgICAgIDxocj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgbWItMyBmb3JtLWNvbnRyb2wgYm9yZGVyIHJvdW5kZWRcXFwiIHN0eWxlPVxcXCJtYXJnaW4tdG9wOiAxMHB4O1xcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgYm9yZGVyLTBcXFwiIGlkPVxcXCJzZWFyY2hUaXRsZVxcXCIgcGxhY2Vob2xkZXI9XFxcIkNlcmNhXFxcIiBhcmlhLWxhYmVsPVxcXCJzZWFyY2hcXFwiIGFyaWEtZGVzY3JpYmVkYnk9XFxcImJhc2ljLWFkZG9uMlxcXCI+XFxyXFxuICAgICAgICAgICAgPGEgaWQ9XFxcInNlYXJjaEJ1dHRvblRpdGxlXFxcIiBocmVmPVxcXCIjXFxcIj48aW1nIGNsYXNzPVxcXCJtcy0xIGJ0biBpbWdTXFxcIiBzcmM9XFxcIi4vaW1nL3NlYXJjaC5wbmdcXFwiIGFsdD1cXFwiXFxcIj48L2E+XFxyXFxuICAgICAgICAgIDwvZGl2PiBcXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sXFxcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIHRleHQtYmctcHJpbWFyeVxcXCIgc3R5bGU9XFxcIndpZHRoOiAxOHJlbTtoZWlnaHQ6IDEwMCU7XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuICAgICAgICAgIDxoNSBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+RXNwbG9yYTwvaDU+XFxyXFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPkVzcGxvcmEgbWlnbGlhbGlhIGRpIGdpb2NoaSB0cmEgZ2xpIGFubnVuY2kgcHJlc2VudGk8L3A+XFxyXFxuICAgICAgICAgIDxocj5cXHJcXG4gICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgaWQ9XFxcImluc2VydGlvbnNDYXJkXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvXFxcIj5Bbm51bmNpPC9hPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgdGV4dC1iZy1zdWNjZXNzXFxcIiBzdHlsZT1cXFwid2lkdGg6IDE4cmVtO2hlaWdodDogMTAwJTtcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgPGg1IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5TY2FtYmlhPC9oNT5cXHJcXG4gICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+SGFpIHVuIGdpb2NvIGRpIGN1aSBub24gdGUgbmUgZmFpIHBpw7kgbnVsbGEgcGVyIGxlIG1pbGlhcmRpIGRpIHZvbHRlIGNoZSBsbyBoYWkgZmluaXRvP1xcclxcbiAgICAgICAgICAgIGluc2VyaXNjaSBxdWkgaWwgdHVvIGFubnVuY2lvIVxcclxcbiAgICAgICAgICA8L3A+XFxyXFxuICAgICAgICAgIDxocj5cXHJcXG4gICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgaWQ9XFxcImluc2VydENhcmRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxpZ2h0XFxcIj5JbnNlcmlzY2kgQW5udW5jaW88L2E+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48c2VjdGlvbiBjbGFzcz1cXFwicCBzZWMgYm9yZGVyIGJvcmRlci1zdWNjZXNzIG1iLTIgYm9yZGVyLW9wYWNpdHktNTAgcm91bmRlZCByb3cgYWxpbmctaXRlbS1zdGFydFxcXCI+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJib3JkZXItZW5kIGJvcmRlci0zIGJvcmRlci1wcmltYXJ5IGNvbC04IHRleHQtc3RhcnQgd2lkZ2V0VGV4dFxcXCI+XFxyXFxuICAgIDxoMT5cXHJcXG4gICAgICA8Yj5JbCBwb3J0YWxlIGRlaSB2ZXJpIGdhbWVycy48L2I+XFxyXFxuICAgIDwvaDE+XFxyXFxuICAgIDxoMj5cXHJcXG4gICAgICBTZWkgYWxsYSByaWNlcmNhIGRpIHVuIGdpb2NvLCB2ZWNjaGlvIG8gbnVvdm8gY2hlIHNpYSwgbWEgbm9uIHJpZXNjaSBhIHRyb3ZhcmxvPyBOb2kgYWJiaWFtbyBsYSBzb2x1emlvbmUgcGVyIHRlLi4uXFxyXFxuICAgICAgQ2VyY2EgdHJhIGNlbnRpbmFpYSBkaSBhbm51bmNpIGlsIHRpdG9sbyBjaGUgbm9uIHRyb3ZhdmkgcGnDuSwgbWV0dGl0aSBpbiBjb250YXR0byBjb24gbCd1dGVudGUgY2hlIGxvIHN0YSB2ZW5kZW5kbywgXFxyXFxuICAgICAgZSBmYWkgbCdhZmZhcmUgZGVsIHNlY29sby4uLlxcclxcbiAgICA8L2gyPlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJwIGNvbC00XFxcIj5cXHJcXG4gICAgPHBpY3R1cmU+XFxyXFxuICAgICAgPGltZyBjbGFzcz1cXFwid2lkZ2V0UGljIHBpY1JpZ2h0IHJvdW5kZWQtZW5kXFxcIiBzcmM9XFxcIi4vaW1nL2dhbWV0cmFkZS5wbmdcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDAlXFxcIiBhbHQ9XFxcIlxcXCI+XFxyXFxuICAgIDwvcGljdHVyZT5cXHJcXG4gIDwvZGl2Plxcclxcbjwvc2VjdGlvbj5cXHJcXG5cXHJcXG48aDE+PGI+VWx0aW1pIGFubnVuY2k6PC9iPjwvaDE+XFxyXFxuPGgyPkNvbnRyb2xsYSBxdWkgZ2xpIHVsdGltaSBhbm51bmNpPC9oMj5cXHJcXG48ZGl2IGlkPVxcXCJjYXJvdXNlbEV4YW1wbGVDb250cm9sc1xcXCIgY2xhc3M9XFxcImNhcm91c2VsIHNsaWRlXFxcIiBkYXRhLWJzLXJpZGU9XFxcImNhcm91c2VsXFxcIj5cXHJcXG4gICAgPGRpdiBpZD1cXFwiaW5uZXJDYXJvdXNlbEhvbWVcXFwiIGNsYXNzPVxcXCJjYXJvdXNlbC1pbm5lclxcXCI+XFxyXFxuICAgICAgIFxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2Fyb3VzZWwtY29udHJvbC1wcmV2XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdGFyZ2V0PVxcXCIjY2Fyb3VzZWxFeGFtcGxlQ29udHJvbHNcXFwiIGRhdGEtYnMtc2xpZGU9XFxcInByZXZcXFwiPlxcclxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvblxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICA8c3BhbiBjbGFzcz1cXFwidmlzdWFsbHktaGlkZGVuXFxcIj5QcmV2aW91czwvc3Bhbj5cXHJcXG4gICAgPC9idXR0b24+XFxyXFxuICAgIDxidXR0b24gY2xhc3M9XFxcImNhcm91c2VsLWNvbnRyb2wtbmV4dFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRhcmdldD1cXFwiI2Nhcm91c2VsRXhhbXBsZUNvbnRyb2xzXFxcIiBkYXRhLWJzLXNsaWRlPVxcXCJuZXh0XFxcIj5cXHJcXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb25cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+TmV4dDwvc3Bhbj5cXHJcXG4gICAgPC9idXR0b24+XFxyXFxuICA8L2Rpdj5cXHJcXG5cXHJcXG48c2VjdGlvbiBjbGFzcz1cXFwicCBzZWMgYm9yZGVyIGJvcmRlci1zdWNjZXNzIG1iLTIgYm9yZGVyLW9wYWNpdHktNTAgcm91bmRlZCByb3cgYWxpbmctaXRlbS1zdGFydFxcXCI+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJwIGNvbC00XFxcIj5cXHJcXG4gICAgPHBpY3R1cmU+XFxyXFxuICAgICAgPGltZyBjbGFzcz1cXFwid2lkZ2V0UGljIHBpY0xlZnQgcm91bmRlZC1zdGFydFxcXCIgc3JjPVxcXCIuL2ltZy9SZXVuaW9uLmpwZWdcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDAlXFxcIiBhbHQ9XFxcIlxcXCI+XFxyXFxuICAgIDwvcGljdHVyZT5cXHJcXG4gIDwvZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiYm9yZGVyLXN0YXJ0IGJvcmRlci0zIGJvcmRlci1wcmltYXJ5IGNvbC04IHRleHQtc3RhcnQgd2lkZ2V0VGV4dFxcXCI+XFxyXFxuICAgIDxoMT5cXHJcXG4gICAgICA8Yj5DaGkgU2lhbW88L2I+XFxyXFxuICAgIDwvaDE+XFxyXFxuICAgIDxoMj5cXHJcXG4gICAgICBTaWFtbyB1biBwdW50byBkJ2luY29udHJvIHBlciB0dXR0aSBxdWVsbGkgY2hlIHNpIHNvbm8gYXBwYXNzaW9uYXRpIGEgcXVlbCBtb25kbyBtYWdpY28gcmluY2hpdXNvIGFsbCdpbnRlcm5vXFxyXFxuICAgICAgZGkgdW5hIGNhcnR1Y2NpYSwgZGlzY28gbyBzY2hlZGEsIGRhbmRvZ2xpIGwnb3Bwb3J0dW5pdMOgIGRpIHBvdGVyIHJpdHJvdmFyZSB2ZWNjaGkgc29nbmksIGUgc2NhbWJpYXJsaSBjb24gYWxjdW5pIG51b3ZpLlxcclxcbiAgICAgIEwnb3Bwb3J0dW5pdGEgZGkgY29ub3NjZXJlIHBlcnNvbmUgZGVsbG8gc3Rlc3NvIHBhcmVyZSwgbyBvcHBvc3RvLlxcclxcbiAgICA8L2gyPlxcclxcbiAgPC9kaXY+XFxyXFxuPC9zZWN0aW9uPlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgIDxsYWJlbCBmb3I9XFxcInVzZXJuYW1lU2lnbkluXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+Tmlja25hbWU8L2xhYmVsPlxcclxcbiAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInVzZXJuYW1lU2lnbkluXFxcIj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgPGxhYmVsIGZvcj1cXFwicGFzc3dvcmRTaWduSW5cXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5QYXNzd29yZDwvbGFiZWw+XFxyXFxuICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInBhc3N3b3JkU2lnbkluXFxcIj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJtYi0zIGZvcm0tY2hlY2tcXFwiPlxcclxcbiAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWlucHV0XFxcIiBpZD1cXFwicmVtZW1iZXJNZVNpZ25JblxcXCI+XFxyXFxuICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJyZW1lbWJlck1lU2lnbkluXFxcIj5SaWNvcmRhbWk8L2xhYmVsPlxcclxcbjwvZGl2PlxcclxcbjxkaXYgaWQ9XFxcImxvZ2luUmVzdWx0XFxcIiBjbGFzcz1cXFwibXktM1xcXCI+XFxyXFxuXFxyXFxuPC9kaXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8YnV0dG9uIGlkPVxcXCJ0cnlUb0xvZ1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIj5BY2NlZGk8L2J1dHRvbj5cXHJcXG48cD5Ob24gc2VpIGFuY29yYSByZWdpc3RyYXRvPzwvcD5cXHJcXG48YnV0dG9uIGlkPVxcXCJsb2dpblNpZ25VcFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIj5SZWdpc3RyYXRpPC9idXR0b24+XFxyXFxuPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgZGF0YS1icy1kaXNtaXNzPVxcXCJtb2RhbFxcXCI+Q2hpdWRpPC9idXR0b24+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGNsYXNzPVxcXCJ0ZXh0LWNlbnRlciBtYi0zXFxcIj5cXHJcXG4gICAgPGgzPk9oLCBjaSBkaXNwaWFjZSBjaGUgdmFpIHZpYSE8YnI+VG9ybmEgYSB0cm92YXJjaSE8L2gzPlxcclxcbiAgICA8aW1nIHNyYz1cXFwiLi9pbWcvZmFkRmFjZS5wbmdcXFwiIHdpZHRoPVxcXCIxMDBcXFwiIGFsdD1cXFwiaW1tYWdpbmUgdHJpc3RlXFxcIj5cXHJcXG48L2Rpdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIGlkPVxcXCJteU1vZGFsXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwic2lnbkluTW9kYWxMYWJlbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLWNlbnRlcmVkXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cXFwibW9kYWwtdGl0bGUgZnMtNVxcXCIgaWQ9XFxcInNpZ25Jbk1vZGFsTGFiZWxcXFwiPkFjY291bnQ8L2gxPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0bi1jbG9zZVxcXCIgZGF0YS1icy1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgYXJpYS1sYWJlbD1cXFwiQ2xvc2VcXFwiPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgaWQ9XFxcIm15TW9kYWxCb2R5XFxcIiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgaWQ9XFxcIm15TW9kYWxGb290ZXJcXFwiIGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjwhLS1uYXZiYXIgY29udHJvbGxlciBpY29uLS0+XFxyXFxuPGJ1dHRvbiBpZD1cXFwibG9nb1xcXCIgY2xhc3M9XFxcImxvZ28tYnV0dG9uXFxcIj4gPGltZyBjbGFzcz1cXFwibG9nb1xcXCIgc3JjPVxcXCIuL2ltZy9sb2dvLnBuZ1xcXCIgYWx0PVxcXCJsb2dvXFxcIj48L2J1dHRvbj5cXHJcXG48YnV0dG9uIGlkPVxcXCJnYW1lc1xcXCIgY2xhc3M9XFxcImxvZ28tYnV0dG9uIGJhY2stdHJhbnNwYXJlbnRcXFwiPiA8aW1nIGNsYXNzPVxcXCJsb2dvXFxcIiBzcmM9XFxcIi4vaW1nL2pveXN0aWNrKDEpLnBuZ1xcXCJcXHJcXG4gICAgYWx0PVxcXCJsb2dvXFxcIj48L2J1dHRvbj5cXHJcXG48bmF2PlxcclxcbiAgPHVsPlxcclxcbiAgICA8IS0tbmF2YmFyIGJ1dHRvbnMtLT5cXHJcXG4gICAgPCEtLW5hdmJhciBjb250cm9sbGVyIGljb24tLT5cXHJcXG5cXHJcXG4gICAgPCEtLXkgYnV0dG9uLS0+XFxyXFxuICAgIDxidXR0b24gaWQ9XFxcImluc2VydGlvbnNcXFwiIGNsYXNzPVxcXCJidXR0b24tb25lIG5hdi1idXR0b25cXFwiPkFubnVuY2k8L2J1dHRvbj5cXHJcXG4gICAgPCEtLWEgYnV0dG9uLS0+XFxyXFxuICAgIDxidXR0b24gaWQ9XFxcImFkZEluc2VydGlvblxcXCIgY2xhc3M9XFxcImJ1dHRvbi10aHJlZSBuYXYtYnV0dG9uXFxcIj5DcmVhIEFubnVuY2lvPC9idXR0b24+XFxyXFxuICAgIDwhLS14IGJ1dHRvbi0tPlxcclxcbiAgICA8YnV0dG9uIGlkPVxcXCJtYW5hZ2VtZW50XFxcIiBjbGFzcz1cXFwiYnV0dG9uLXR3byBuYXYtYnV0dG9uXFxcIj5HZXN0aW9uZSBVdGVudGk8L2J1dHRvbj5cXHJcXG4gICAgPCEtLWEgYnV0dG9uLS0+XFxyXFxuICAgIDxidXR0b24gaWQ9XFxcImluc01hbmFnZW1lbnRcXFwiIGNsYXNzPVxcXCJidXR0b24tdGhyZWUgbmF2LWJ1dHRvblxcXCI+R2VzdGlvbmUgQW5udW5jaTwvYnV0dG9uPlxcclxcbiAgICA8IS0tYiBidXR0b24tLT5cXHJcXG4gICAgPGJ1dHRvbiBpZD1cXFwibG9naW5cXFwiIGNsYXNzPVxcXCJidXR0b24tZm91ciBuYXYtYnV0dG9uXFxcIiBkYXRhLWJzLXRvZ2dsZT1cXFwibW9kYWxcXFwiIGRhdGEtYnMtdGFyZ2V0PVxcXCIjbXlNb2RhbFxcXCI+TG9naW48L2J1dHRvbj5cXHJcXG4gICAgPCEtLWIgYnV0dG9uLS0+XFxyXFxuICAgIDxidXR0b24gaWQ9XFxcInNpZ25PdXRCdXR0b25cXFwiIGNsYXNzPVxcXCJidXR0b24tZm91ciBuYXYtYnV0dG9uXFxcIiBkYXRhLWJzLXRvZ2dsZT1cXFwibW9kYWxcXFwiXFxyXFxuICAgICAgZGF0YS1icy10YXJnZXQ9XFxcIiNteU1vZGFsXFxcIj5Mb2dvdXQ8L2J1dHRvbj5cXHJcXG4gICAgPGJ1dHRvbiBpZD1cXFwicHJvZmlsZVxcXCIgY2xhc3M9XFxcInByb2ZpbGUtYnV0dG9uXFxcIj5cXHJcXG4gICAgICA8c3BhbiBjbGFzcz1cXFwicG9zaXRpb24tYWJzb2x1dGUgdG9wLTIgc3RhcnQtOTAgdHJhbnNsYXRlLW1pZGRsZSBwLTIgYmctZGFuZ2VyIGJvcmRlciBib3JkZXItbGlnaHQgcm91bmRlZC1jaXJjbGVcXFwiPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+TmV3IGFsZXJ0czwvc3Bhbj5cXHJcXG4gICAgICA8L3NwYW4+XFxyXFxuICAgICAgPGltZyBjbGFzcz1cXFwibG9nbyBwcm9maWxlXFxcIiBzcmM9XFxcIi4vaW1nL3Byb2ZpbGUucG5nXFxcIiBhbHQ9XFxcImxvZ29cXFwiPlxcclxcbiAgICA8L2J1dHRvbj5cXHJcXG4gIDwvdWw+XFxyXFxuXFxyXFxuXFxyXFxuPC9uYXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8c3R5bGU+XFxyXFxuICAgICNtYWlue1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xcclxcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCByZ2IoNjMsIDYzLCA2OCk7XFxyXFxuICAgICAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCByZ2IoNjMsIDYzLCA2OCk7XFxyXFxuICAgICAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgcmdiKDYzLCA2MywgNjgpO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcclxcbiAgICB9XFxyXFxuPC9zdHlsZT5cXHJcXG48ZGl2IGNsYXNzPVxcXCJyb3cgbXQtNCBtYi00XFxcIj5cXHJcXG4gICAgPGRpdiBpZD1cXFwidGl0bGVwcm9maWxlXFxcIiBjbGFzcz1cXFwiY29sLTEyIHRleHQtY2VudGVyXFxcIj5cXHJcXG5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwicm93IG10LTIgbWItNFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC0xMiB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICA8aDI+XFxyXFxuICAgICAgICAgICAgPGI+RWNjbyB1biByaWVwaWxvZ28gZGVpIHR1b2kgZGF0aTo8L2I+XFxyXFxuICAgICAgICA8L2gyPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJyb3cgbXQtNSBtYi0yXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLTIgdGV4dC1lbmRcXFwiPlxcclxcbiAgICAgICAgPGgyPlxcclxcbiAgICAgICAgICAgIDxicj48YnI+PGJyPiA8Yj5Vc2VybmFtZTwvYj46IFxcclxcbiAgICAgICAgICAgIDxicj48YnI+IDxiPkVtYWlsPC9iPjogXFxyXFxuICAgICAgICAgICAgPGJyPjxicj4gPGI+Tm9tZTwvYj46IFxcclxcbiAgICAgICAgICAgIDxicj48YnI+IDxiPkNvZ25vbWU8L2I+OiBcXHJcXG4gICAgICAgIDwvaDI+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGlkPVxcXCJib2R5cHJvZmlsZVxcXCIgY2xhc3M9XFxcImNvbC00IHRleHQtY2VudGVyXFxcIj5cXHJcXG5cXHJcXG5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgaWQ9XFxcImJ1dHRvbnMtcHJvZmlsZVxcXCIgY2xhc3M9XFxcImNvbC0yIHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgIDxicj5cXHJcXG4gICAgICAgIDxicj5cXHJcXG4gICAgICAgIDxicj5cXHJcXG4gICAgICAgIDxicj5cXHJcXG4gICAgICAgIDxicj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuXFxyXFxuICAgIDxkaXYgaWQ9XFxcImlucHV0LXByb2ZpbGVcXFwiIGNsYXNzPVxcXCJjb2wtNCBcXFwiPlxcclxcbiAgICAgICAgPGJyPlxcclxcbiAgICAgICAgPGJyPlxcclxcbiAgICAgICAgPGJyPlxcclxcbiAgICAgICAgPGJyPlxcclxcbiAgICAgICAgPGJyPlxcclxcbiAgICAgICAgPGRpdiAgY2xhc3M9XFxcImlucHV0LWdyb3VwIG1iLTNcXFwiID5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cC1wcmVwZW5kXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLXRleHRcXFwiIGlkPVxcXCJiYXNpYy1hZGRvbjFcXFwiPlVzZXJuYW1lPC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwidXNlcm5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJVc2VybmFtZVxcXCIgYXJpYS1sYWJlbD1cXFwiVXNlcm5hbWVcXFwiXFxyXFxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XFxcImJhc2ljLWFkZG9uMVxcXCI+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgIGNsYXNzPVxcXCJpbnB1dC1ncm91cCBtYi0zIG15LTRcXFwiID5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cC1wcmVwZW5kXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLXRleHRcXFwiIGlkPVxcXCJiYXNpYy1hZGRvbjFcXFwiPkVtYWlsPC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwiZW1haWxcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbWFpbFxcXCIgYXJpYS1sYWJlbD1cXFwiRW1haWxcXFwiXFxyXFxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XFxcImJhc2ljLWFkZG9uMVxcXCI+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwicm93IG10LTIgbWItNFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC0xMiB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICA8YnI+XFxyXFxuICAgICAgICA8YnI+XFxyXFxuICAgICAgICA8YnI+XFxyXFxuICAgICAgICA8aDM+PGI+Q2FtYmlvIFBhc3N3b3JkPC9iPjwvaDM+XFxyXFxuICAgICAgICA8YnI+XFxyXFxuICAgICAgICA8YnI+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNiB0ZXh0LWVuZFxcXCI+XFxyXFxuICAgICAgICA8ZGl2ICBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgbWItM1xcXCIgPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwLXByZXBlbmRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtdGV4dFxcXCIgaWQ9XFxcImJhc2ljLWFkZG9uMVxcXCI+VmVjY2hpYSBwYXNzd29yZDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XFxcIm9sZFBhc3N3b3JkXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIlZlY2NoaWFQYXNzd29yZFxcXCIgYXJpYS1sYWJlbD1cXFwiVmVjY2hpYVBhc3N3b3JkXFxcIlxcclxcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVxcXCJiYXNpYy1hZGRvbjFcXFwiPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNiB0ZXh0LXN0YXJ0XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgIGNsYXNzPVxcXCJpbnB1dC1ncm91cCBtYi0zXFxcIiA+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtcHJlcGVuZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC10ZXh0XFxcIiBpZD1cXFwiYmFzaWMtYWRkb24xXFxcIj5OdW92YSBQYXNzd29yZDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XFxcIm5ld1Bhc3N3b3JkXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIk51b3ZhUGFzc3dvcmRcXFwiIGFyaWEtbGFiZWw9XFxcIk51b3ZhUGFzc3dvcmRcXFwiXFxyXFxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XFxcImJhc2ljLWFkZG9uMVxcXCI+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgIGlkPVxcXCJjcFxcXCIgY2xhc3M9XFxcImNvbC0xMiB0ZXh0LWNlbnRlciBteS01XFxcIj5cXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgXFxyXFxuICAgICAgICBcXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8Zm9ybT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJuYW1lU2lnblVwXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+Tm9tZTwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcIm5hbWVTaWduVXBcXFwiIHJlcXVpcmVkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJzdXJuYW1lU2lnblVwXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+Q29nbm9tZTwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInN1cm5hbWVTaWduVXBcXFwiIHJlcXVpcmVkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJ1c2VybmFtZVNpZ25VcFxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPk5pY2tuYW1lPC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwidXNlcm5hbWVTaWduVXBcXFwiIHJlcXVpcmVkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJlbWFpbFNpZ25VcFxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPkVtYWlsPC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImVtYWlsU2lnblVwXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwicGFzc3dvcmRTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5QYXNzd29yZDwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJwYXNzd29yZFNpZ25VcFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImNvbmZpcm1fcGFzc3dvcmRTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5Db25mZXJtYSBQYXNzd29yZDwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJjb25maXJtX3Bhc3N3b3JkU2lnblVwXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgaWQ9XFxcInNpZ25VcFJlc3VsdFxcXCIgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcblxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Zvcm0+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8YnV0dG9uIGlkPVxcXCJzaWduVXBMb2dpblxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5BY2NlZGk8L2J1dHRvbj5cXHJcXG48YnV0dG9uIGlkPVxcXCJ0cnl0b1NpZ25VcFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiBkaXNhYmxlZD5SZWdpc3RyYXRpPC9idXR0b24+XFxyXFxuPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgZGF0YS1icy1kaXNtaXNzPVxcXCJtb2RhbFxcXCI+Q2hpdWRpPC9idXR0b24+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGlkPVxcXCJjcmVhdGVWR0NvbnRhaW5lclxcXCIgY2xhc3M9XFxcImNvbnRhaW5lciBteS01IGJhY2stc2VtaS10cmFuc3BhcmVudFxcXCIgc3R5bGU9XFxcImJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCByZ2IoMTcxLCAyMDksIDU3KTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHJnYigxNzEsIDIwOSwgNTcpO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCByZ2IoMTcxLCAyMDksIDU3KTtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZ2IoMTcxLCAyMDksIDU3KTtcXHJcXG4gICAgXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93IGFsaWduLWl0ZW1zLXN0YXJ0XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC00XFxcIiBzdHlsZT1cXFwiXFxyXFxuICAgICAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCByZ2IoMTcxLCAyMDksIDU3KTsgXFxyXFxuICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiKDE3MSwgMjA5LCA1Nyk7XFxyXFxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgIFxcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm15LTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+PGI+Q3JlYSBjb25zb2xlIGUgZ2VuZXJpPC9iPjwvaDI+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJuZXdHZW5yZVxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPjxiPk51b3ZvIEdlbmVyZTwvYj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcIm5ld0dlbnJlXFxcIiBwbGFjZWhvbGRlcj1cXFwiSW5zZXJpc2NpIG51b3ZvIGdlbmVyZVxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cXFwibmV3R2VucmVCdG5cXFwiIGNsYXNzPVxcXCJidG4gbWItNCBidXR0b24taG92ZXJcXFwiPjxiPkNyZWE8L2I+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5ld0NvbnNvbGVcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj48Yj5OdW92YSBDb25zb2xlPC9iPjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwibmV3Q29uc29sZVxcXCIgcGxhY2Vob2xkZXI9XFxcIkluc2VyaXNjaSBudW92YSBjb25zb2xlXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJuZXdDb25zb2xlQnRuXFxcIiBjbGFzcz1cXFwiYnRuIG1iLTQgYnV0dG9uLWhvdmVyXFxcIj48Yj5DcmVhPC9iPjwvYnV0dG9uPlxcclxcblxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtOFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibXktM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPjxiPkluc2VyaXNjaSBEYXRpIFZpZGVvZ2lvY288L2I+PC9oMj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtYi01XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibmFtZVxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPjxiPlRpdG9sbzwvYj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcIlZHbmFtZVxcXCIgcGxhY2Vob2xkZXI9XFxcIkluc2VyaXNjaSBpbCB0aXRvbG8gZGVsIGdpb2NvXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtYi01XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwieWVhclxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPjxiPkFubm8gZGkgVXNjaXRhPC9iPjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJWR3llYXJcXFwiIG1pbj1cXFwiMTk3MFxcXCIgbWF4bGVuZ3RoPVxcXCIyMDIzXFxcIiBwbGFjZWhvbGRlcj1cXFwiSW5zZXJpc2NpIGwnYW5ubyBkaSB1c2NpdGFcXFwiPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1iLTVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiIGZvcj1cXFwiY292ZXJcXFwiPjxiPkxpbmsgaW1tYWdpbmU8L2I+PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJWR2NvdmVyXFxcIiBwbGFjZWhvbGRlcj1cXFwiSW5zZXJpc2NpIGlsIGxpbmsgZGVsbGEgY29wZXJ0aW5hXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93IGFsaWduLWl0ZW1zLXN0YXJ0XFxcIj5cXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTRcXFwiPlxcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwidGV4dC1lbmRcXFwiPjxiPlNlbGV6aW9uYSBjYXRlZ29yaWU6PC9iPjwvaDQ+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgPGRpdiBpZD1cXFwiZ2VucmVMaXN0XFxcIiBjbGFzcz1cXFwiY29sLThcXFwiPlxcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIFxcclxcblxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgYWxpZ24taXRlbXMtc3RhcnRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTRcXFwiPlxcclxcbiAgICAgICAgICAgIDxicj48YnI+XFxyXFxuICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJ0ZXh0LWVuZFxcXCI+PGI+U2VsZXppb25hIGNvbnNvbGU6PC9iPjwvaDQ+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgaWQ9XFxcImNvbnNvbGVMaXN0XFxcIiBjbGFzcz1cXFwiY29sLThcXFwiPlxcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8YnV0dG9uIGlkPVxcXCJuZXdWaWRlb0dhbWVCdG5cXFwiIGNsYXNzPVxcXCJidG4gbWItNCBidXR0b24taG92ZXJcXFwiPjxiPkNyZWE8L2I+PC9idXR0b24+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPHN0eWxlPlxcclxcbiAgICAuYnRuOmhvdmVyIHtcXHJcXG4gICAgICAgIG91dGxpbmUtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgICAgb3V0bGluZS1zdHlsZTogc29saWQ7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggIzVhMDFhNztcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IDAuN3M7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3NlYXJjaFRpdGxlOmhvdmVyIHtcXHJcXG4gICAgICAgIG91dGxpbmUtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgICAgb3V0bGluZS1zdHlsZTogc29saWQ7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggIzVhMDFhNztcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IDAuN3M7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3NlYXJjaFRpdGxlIHtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IC0zcHggMCBibGFjaywgMCAzcHggYmxhY2ssIDNweCAwIGJsYWNrLCAwIC0zcHggYmxhY2s7XFxyXFxuICAgICAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgICAgICB3aWR0aDogMjAlO1xcclxcbiAgICAgICAgZmxvYXQ6IGJvdHRvbTtcXHJcXG4gICAgICAgIGFsaWduLXNlbGY6IHJpZ2h0O1xcclxcbiAgICB9XFxyXFxuPC9zdHlsZT5cXHJcXG5cXHJcXG48ZGl2IHN0eWxlPVxcXCJkaXNwbGF5OiBmbGV4O1xcXCIgY2xhc3M9XFxcIm15LTVcXFwiPlxcclxcblxcclxcbiAgICA8c3BhbiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiA0MHB4XFxcIj5cXHJcXG4gICAgICAgIDxpbWcgc3JjPVxcXCIuL2ltZy9idXR0b24vc2hvd2FsbEJ0bi5wbmdcXFwiIGNsYXNzPVxcXCJidG4gcC0wXFxcIiBoZWlnaHQ9XFxcIjM1XFxcIlxcclxcbiAgICAgICAgICAgIHN0eWxlPVxcXCJib3JkZXI6bm9uZTtpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZDtcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgaWQ9XFxcInNlbGVjdEFsbEdhbWVzXFxcIj5cXHJcXG4gICAgPC9zcGFuPlxcclxcbiAgICA8IS0tZnVuemlvbmUgY2hlIHByZW5kZSB0dXR0aSBnbGkgYW5udW5jaSBlIGxpIHNjaGlhZmZhIG5lbCBjb250ZW51dG8gYW5udW5jaS0tPlxcclxcbiAgICA8c3BhbiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiA0MHB4XFxcIiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgPGltZyBzcmM9XFxcIi4vaW1nL2J1dHRvbi9ieWdlbnJlQnRuLnBuZ1xcXCIgY2xhc3M9XFxcImJ0biBwLTAgZHJvcGRvd24tdG9nZ2xlXFxcIiBoZWlnaHQ9XFxcIjM1XFxcIlxcclxcbiAgICAgICAgICAgIHN0eWxlPVxcXCJib3JkZXI6bm9uZTtpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZDtcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10b2dnbGU9XFxcImRyb3Bkb3duXFxcIlxcclxcbiAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIj5cXHJcXG4gICAgICAgIDx1bCBpZD1cXFwiZ2FtZUdlbnJlc1xcXCIgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcblxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgPC9zcGFuPlxcclxcblxcclxcbiAgICA8c3BhbiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiA0MHB4XFxcIiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgPCEtLVF1ZXN0byDDqCBpbCBmaWx0cm8gcGVyIGxlIGNvbnNvbGxlcyB2YSBjYW1iaWF0YSBsJ2ltbWFnaW5lIGRlbCBib3R0b25lLS0+XFxyXFxuICAgICAgICA8aW1nIHNyYz1cXFwiLi9pbWcvYnV0dG9uL2J5Z2VucmVCdG4ucG5nXFxcIiBjbGFzcz1cXFwiYnRuIHAtMCBkcm9wZG93bi10b2dnbGVcXFwiIGhlaWdodD1cXFwiMzVcXFwiXFxyXFxuICAgICAgICAgICAgc3R5bGU9XFxcImJvcmRlcjpub25lO2ltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiXFxyXFxuICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiPlxcclxcbiAgICAgICAgPHVsIGlkPVxcXCJnYW1lQ29uc29sbGVzXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuXFxyXFxuICAgICAgICA8L3VsPlxcclxcbiAgICA8L3NwYW4+XFxyXFxuXFxyXFxuICAgIDxzcGFuIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IDQwcHhcXFwiIGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxyXFxuICAgICAgICA8aW1nIHNyYz1cXFwiLi9pbWcvYnV0dG9uL2J5eWVhckJ0bi5wbmdcXFwiIGNsYXNzPVxcXCJidG4gcC0wIGRyb3Bkb3duLXRvZ2dsZVxcXCIgaGVpZ2h0PVxcXCIzNVxcXCJcXHJcXG4gICAgICAgICAgICBzdHlsZT1cXFwiYm9yZGVyOm5vbmU7aW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCJcXHJcXG4gICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCI+XFxyXFxuICAgICAgICA8dWwgaWQ9XFxcImdhbWVZZWFyc1xcXCIgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcblxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgPC9zcGFuPlxcclxcbiAgICA8ZGl2IHN0eWxlPVxcXCJ2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcXCIgY2xhc3M9XFxcImNvbC1tZC0zIG14LWF1dG9cXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGJvcmRlci1kYXJrIGJvcmRlci0zIGJvcmRlciByb3VuZGVkXFxcIiB0eXBlPVxcXCJzZWFyY2hcXFwiIHBsYWNlaG9sZGVyPVxcXCJjZXJjYVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgc3R5bGU9XFxcInBhZGRpbmc6IDJweCA0cHggMnB4IDRweDttYXJnaW4tcmlnaHQ6MjBweFxcXCIgaWQ9XFxcInNlYXJjaFRpdGxlR2FtZVxcXCI+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxpbWcgc3JjPVxcXCIuL2ltZy9idXR0b24vcGx1c0J0bi5wbmdcXFwiIGNsYXNzPVxcXCJidG4gcC0wXFxcIiBpZD1cXFwiYWRkVmlkZW9nYW1lXFxcIiBhbHQ9XFxcInBsdXNcXFwiIGhlaWdodD1cXFwiMzVcXFwiXFxyXFxuICAgICAgICBzdHlsZT1cXFwiYm9yZGVyOm5vbmU7aW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGhpZGRlbj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2PlxcclxcbiAgICA8ZGl2IGlkPVxcXCJWaWRlb2dhbWVDb250ZW50XFxcIiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdj5cXHJcXG4gICAgPHVsIGlkPVxcXCJwYWdlc1ZcXFwiIGNsYXNzPVxcXCJwYWdpbmF0aW9uIHBhZ2luYXRpb24tc20gbXktMlxcXCI+XFxyXFxuXFxyXFxuICAgIDwvdWw+XFxyXFxuPC9kaXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIgICAgIDxpbWcgIGlkPVxcXCJiYWNrLWdhbWVzXFxcIiAgY2xhc3M9XFxcIm10LTQgYnV0dG9uaG92ZXJcXFwiIHdpZHRoPTEyMCBzcmM9XFxcIi4vaW1nL2JhY2sucG5nXFxcIj5cXHJcXG5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiID5cXHJcXG4gICAgPGRpdiBpZD0gXFxcImdhbWVUaXRsZVxcXCIgY2xhc3M9XFxcImNvbC0xMiB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuXFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxkaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJnYW1lSW1hZ2VcXFwiIGNsYXNzPVxcXCJjb2wtNiB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgIFxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJnYW1lSW5mb1xcXCIgY2xhc3M9XFxcImNvbC02IHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIFxcclxcbiAgICAgICAgPGRpdiBpZD1cXFwiZ2FtZUluZm9cXFwiIGNsYXNzPVxcXCJjb2wtNiB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgIFxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIFxcclxcbjwvZGl2PlxcclxcblxcclxcbiAgICBcXHJcXG5cIjsiLCJpbXBvcnQgYW5udW5jaSBmcm9tICcuL2FubnVuY2kuaHRtbCdcclxuXHJcbmltcG9ydCBjcmVhQW5udW5jaW8gZnJvbSAnLi4vY3JlYUFubnVuY2lvL2NyZWFBbm51bmNpby5odG1sJ1xyXG5pbXBvcnQgaW5zZXJ0aW9uIGZyb20gJy4uL2ludGVyZmFjZXMvaW5zZXJ0aW9uJztcclxuaW1wb3J0IGV4cGFuZEluc2VydGlvbiBmcm9tICcuL2FubnVuY2lvJ1xyXG5pbXBvcnQgY3JlYXRlSW5zZXJ0aW9uUGFnZSBmcm9tICcuLi9jcmVhQW5udW5jaW8vY3JlYUFubnVuY2lvJ1xyXG5pbXBvcnQgc2hvd1Byb2ZpbGUgZnJvbSAnLi4vcHJvZmlsb1V0ZW50ZS9wcm9maWxlJztcclxuXHJcbmxldCBsaXN0OiBpbnNlcnRpb25bXSA9IFtdO1xyXG5sZXQgZmlsdGVyZWRMaXN0OiBpbnNlcnRpb25bXT1bXVxyXG5sZXQgdmlldzogbnVtYmVyID0gNlxyXG5sZXQgdHlwZTogc3RyaW5nO1xyXG5sZXQgZ2VucmVzOiBzdHJpbmdbXTtcclxubGV0IHllYXJzOiBudW1iZXJbXTtcclxubGV0IGNvbnNvbGxlczogc3RyaW5nW107XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQYWdlKCkgeyAgICAgICAvKkluaXppYWxpenphIHR1dHRvIGNpw7IgY2hlIHNlcnZlIGFsbGEgcGFnaW5hIHBlciBmdW56aW9uYXJlICovXHJcblxyXG4gICAgZmV0Y2goXCIvd2hvSXNMb2dnZWRcIilcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBpZiAoZGF0YSA9PSBcIkFETUlOXCIgfHwgZGF0YSA9PSBcIlVTRVJcIikge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEluc2VydGlvbjJcIikucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRJbnNlcnRpb24yXCIpO1xyXG4gICAgICAgICAgICBidG4ub25jbGljaz0oKT0+e1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTD1jcmVhQW5udW5jaW87XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVJbnNlcnRpb25QYWdlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEluc2VydGlvbjJcIikuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICAgICAgdHlwZSA9IFwiR1VFU1RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICBsaXN0PVtdO1xyXG4gICAgZmV0Y2goJy9pbnNlcnRpb24nKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIGZvcihsZXQgZCBvZiBkYXRhKXtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjcmVhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICAgICAgc2hvd1Jlc3VsdHMoMSk7XHJcbiAgICAgICAgYXNzaWduRmlsdGVycygpOyAgICAgICAgIFxyXG4gICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0QWxsSW5zZXJ0aW9ucygpe1xyXG4gICAgXHJcbiAgYXdhaXQgIGZldGNoKCcvaW5zZXJ0aW9uJylcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBsaXN0PVtdO1xyXG4gICAgICAgIGZvcihsZXQgZCBvZiBkYXRhKXtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKGQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICB9IFxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gc2hvd1Jlc3VsdHMoaTogbnVtYmVyKSB7XHJcblxyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc2VydGlvbkNvbnRlbnRcIik7XHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBsZXQgc3RhcnQgPSAoaSAtIDEpICogdmlldztcclxuICAgIGxldCBzdG9wID0gKGkgKiB2aWV3KSAtIDE7XHJcbiAgICBmb3IgKHN0YXJ0OyBzdGFydCA8PSBzdG9wOyBzdGFydCsrKSB7XHJcbiAgICAgICAgaWYgKHN0YXJ0ID49IGxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbGlzdFtzdGFydF0uYXBwcm92ZWQgfHwgbGlzdFtzdGFydF0ub3V0Y29tZSE9XCJXSVBcIikge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBsZXQgY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIGNvbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbC00IHRleHQtY2VudGVyXCIpO1xyXG4gICAgICAgIGNvbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKVwiKTtcclxuICAgICAgICBjb2wub25tb3VzZW92ZXI9KCk9PntcclxuICAgICAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb2wub25tb3VzZW91dD0oKT0+e1xyXG4gICAgICAgICAgICBjb2wuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMilcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBpbnNlcnRpb25PbmU9bGlzdFtzdGFydF07XHJcbiAgICAgICAgY29sLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGV4cGFuZEluc2VydGlvbihpbnNlcnRpb25PbmUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgICAgIGxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xyXG4gICAgICAgIGxldCBnYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xyXG4gICAgICAgIGxldCBnZW5yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcclxuICAgICAgICBsZXQgeWVhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcclxuICAgICAgICBsZXQgY29uc29sZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcclxuICAgICAgICBsZXQgdHJhZGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xyXG4gICAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xyXG4gICAgICAgIGltYWdlLnNyYyA9IGxpc3Rbc3RhcnRdLnRyYWRlR2FtZS5jb3Zlci5saW5rO1xyXG4gICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWItMiBib3JkZXIgYm9yZGVyLTMgYm9yZGVyLWluZm8nKVxyXG4gICAgICAgIGltYWdlLmhlaWdodCA9IDIwMDtcclxuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSBsaXN0W3N0YXJ0XS50aXRsZVxyXG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbXgtYXV0byBtdC0yIHJvdW5kZWQtdG9wIGJnLWxpZ2h0IGJvcmRlci1ib3R0b20gYm9yZGVyLTMgYm9yZGVyLXByaW1hcnknKTtcclxuXHJcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gbGlzdFtzdGFydF0uZGVzY3JpcHRpb247XHJcbiAgICAgICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtYi0wIGJvcmRlci10b3AgYm9yZGVyLTMgYm9yZGVyLXByaW1hcnkgYmctbGlnaHQnKTtcclxuXHJcbiAgICAgICAgZ2FtZS5pbm5lckhUTUwgPSBsaXN0W3N0YXJ0XS50cmFkZUdhbWUubmFtZTtcclxuICAgICAgICBnYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWItMCBiZy1saWdodCcpO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBmb3IobGV0IGk9IDA7IGk8bGlzdFtzdGFydF0udHJhZGVHYW1lLmdlbnJlLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgZ2VucmUuaW5uZXJIVE1MICs9IGxpc3Rbc3RhcnRdLnRyYWRlR2FtZS5nZW5yZVtpXS5nZW5yZSArIFwiIFwiO1xyXG4gICAgICAgICAgICBnZW5yZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21iLTAgYmctbGlnaHQnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHllYXIuaW5uZXJIVE1MID0gXCJcIiArIGxpc3Rbc3RhcnRdLnRyYWRlR2FtZS55ZWFyO1xyXG4gICAgICAgIHllYXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtYi0wIGJnLWxpZ2h0Jyk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGNvbnNvbGUuaW5uZXJIVE1MID0gbGlzdFtzdGFydF0udHJhZGVHYW1lLmNvbnNvbGUuY29uc29sZTtcclxuICAgICAgICBjb25zb2xlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWItMCBiZy1saWdodCcpO1xyXG5cclxuXHJcbiAgICAgICAgdHJhZGVzLmlubmVySFRNTCA9IFwiQWNjZXR0ZXJlaSBTY2FtYmlvIGNvbjogXCIgKyBsaXN0W3N0YXJ0XS53aXNoTGlzdFswXS5uYW1lO1xyXG4gICAgICAgIHRyYWRlcy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21iLTAgYmctbGlnaHQnKTtcclxuXHJcbiAgICAgICAgZGF0ZS5pbm5lckhUTUw9IGxpc3Rbc3RhcnRdLnB1YmxpY2F0aW9uRGF0ZTtcclxuICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncm91bmRlZC1ib3R0b20gYm9yZGVyLWJvdHRvbSBib3JkZXItMyBib3JkZXItcHJpbWFyeSBiZy1saWdodCcpO1xyXG5cclxuICAgICAgICBjb2wuYXBwZW5kKHRpdGxlLGltYWdlLGRlc2NyaXB0aW9uLGdhbWUsZ2VucmUseWVhcixjb25zb2xlLHRyYWRlcyxkYXRlKVxyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKGNvbCk7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGFnaW5hdGlvbigpIHtcclxuICAgIGxldCBzaXplOiBudW1iZXIgPSBsaXN0Lmxlbmd0aFxyXG4gICAgbGV0IHRhYnM6IG51bWJlciA9IE1hdGguY2VpbChzaXplIC8gdmlldyk7XHJcbiAgICBsZXQgcGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VzXCIpO1xyXG4gICAgcGFnZXMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRhYnM7IGkrKykge1xyXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBpZiAoaSA9PSAxKSB7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtIGFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIsIFwicGFnZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1saW5rXCIpO1xyXG4gICAgICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYWxsTGkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VzXCIpLmNoaWxkcmVuO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBvbmVMaSBvZiBhbGxMaSkge1xyXG4gICAgICAgICAgICAgICAgb25lTGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWl0ZW1cIik7XHJcbiAgICAgICAgICAgICAgICBvbmVMaS5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWl0ZW0gYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIiwgXCJwYWdlXCIpO1xyXG4gICAgICAgICAgICBzaG93UmVzdWx0cyhpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGJ0bi5pbm5lckhUTUwgPSBcIlwiICsgKGkpO1xyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlc1wiKS5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNldEFsbENvbnNvbGxlcygpIHtcclxuICAgIGNvbnNvbGxlcyA9IFtdXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoIShjb25zb2xsZXMuaW5jbHVkZXMobGlzdFtpXS50cmFkZUdhbWUuY29uc29sZS5jb25zb2xlKSkpIHtcclxuICAgICAgICAgICAgY29uc29sbGVzLnB1c2gobGlzdFtpXS50cmFkZUdhbWUuY29uc29sZS5jb25zb2xlKVxyXG4gICAgICAgICAgICBsZXQgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnNvbGxlc1wiKTtcclxuICAgICAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgICAgICBsaS5pZCA9IGxpc3RbaV0udHJhZGVHYW1lLmNvbnNvbGUuY29uc29sZTtcclxuICAgICAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRyb3Bkb3duLWl0ZW1cIik7XHJcbiAgICAgICAgICAgIGJ0bi5pbm5lckhUTUwgPSBsaXN0W2ldLnRyYWRlR2FtZS5jb25zb2xlLmNvbnNvbGU7XHJcbiAgICAgICAgICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoQnlHYW1lQ29uc29sbGUobGkuaWQpOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1bC5hcHBlbmQobGkpO1xyXG4gICAgICAgICAgICBsaS5hcHBlbmQoYnRuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZXRBbGxHZW5yZXMoKSB7XHJcbiAgICBnZW5yZXMgPSBbXVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsaXN0W2ldLnRyYWRlR2FtZS5nZW5yZS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBpZiAoIShnZW5yZXMuaW5jbHVkZXMobGlzdFtpXS50cmFkZUdhbWUuZ2VucmVbal0uZ2VucmUpKSkge1xyXG4gICAgICAgICAgICAgICAgZ2VucmVzLnB1c2gobGlzdFtpXS50cmFkZUdhbWUuZ2VucmVbal0uZ2VucmUpXHJcbiAgICAgICAgICAgICAgICBsZXQgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdlbnJlc1wiKTtcclxuICAgICAgICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICAgICAgICAgIGxpLmlkID0gbGlzdFtpXS50cmFkZUdhbWUuZ2VucmVbal0uZ2VucmU7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRyb3Bkb3duLWl0ZW1cIik7XHJcbiAgICAgICAgICAgICAgICBidG4uaW5uZXJIVE1MID0gbGlzdFtpXS50cmFkZUdhbWUuZ2VucmVbal0uZ2VucmU7XHJcbiAgICAgICAgICAgICAgICBidG4ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hCeUdlbnJlKGxpLmlkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHVsLmFwcGVuZChsaSk7XHJcbiAgICAgICAgICAgICAgICBsaS5hcHBlbmQoYnRuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNldEFsbFllYXJzKCkge1xyXG4gICAgeWVhcnMgPSBbXVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKCEoeWVhcnMuaW5jbHVkZXMobGlzdFtpXS50cmFkZUdhbWUueWVhcikpKSB7XHJcbiAgICAgICAgICAgIHllYXJzLnB1c2gobGlzdFtpXS50cmFkZUdhbWUueWVhcilcclxuICAgICAgICAgICAgbGV0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ5ZWFyc1wiKTtcclxuICAgICAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgICAgICBsaS5pZCA9IFwiXCIgKyBsaXN0W2ldLnRyYWRlR2FtZS55ZWFyO1xyXG4gICAgICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZHJvcGRvd24taXRlbVwiKTtcclxuICAgICAgICAgICAgYnRuLmlubmVySFRNTCA9IFwiXCIgKyBsaXN0W2ldLnRyYWRlR2FtZS55ZWFyO1xyXG4gICAgICAgICAgICBidG4ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaEJ5WWVhcihOdW1iZXIobGkuaWQpKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1bC5hcHBlbmQobGkpO1xyXG4gICAgICAgICAgICBsaS5hcHBlbmQoYnRuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZWFyY2hCeUFsbCgpIHsgICAgICAgICAgICAgLypMYSBmdW56aW9uYSBkZWwgYm90dG9uZSBjaGUgY2VyY2EgdHV0dGkgZ2xpIGFubnVuY2kgc2VuemEgZmlsdHJpKi9cclxubGlzdD1bXTtcclxuIGZldGNoKCcvaW5zZXJ0aW9uJylcclxuLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbi50aGVuKChkYXRhKSA9PiB7XHJcbiAgICBmb3IobGV0IGQgb2YgZGF0YSl7XHJcbiAgICAgICAgbGlzdC5wdXNoKGQpO1xyXG4gICAgfVxyXG4gICAgc2V0QWxsR2VucmVzKCk7XHJcbiAgICBjcmVhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICBzaG93UmVzdWx0cygxKTtcclxufSk7XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0ICBmdW5jdGlvbiBzZWFyY2hCeVRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcclxuICAgIGZpbHRlcmVkTGlzdCA9IFtdXHJcbiAgICBmb3IgKGxldCBlbGVtZW50IG9mIGxpc3QpIHtcclxuICAgICAgICBsZXQgZ2FtZU5hbWUgPSBlbGVtZW50LnRyYWRlR2FtZS5uYW1lXHJcbiAgICAgICAgbGV0IGluc2VydGlvblRpdGxlID0gZWxlbWVudC50aXRsZVxyXG4gICAgICAgIGlmICggKGdhbWVOYW1lLnRvVXBwZXJDYXNlKCkuaW5jbHVkZXModGl0bGUudG9VcHBlckNhc2UoKSkpIFxyXG4gICAgICAgIHx8KGluc2VydGlvblRpdGxlLnRvVXBwZXJDYXNlKCkuaW5jbHVkZXModGl0bGUudG9VcHBlckNhc2UoKSkpKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkTGlzdC5wdXNoKGVsZW1lbnQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGlzdCA9IFtdO1xyXG4gICAgbGlzdCA9IGZpbHRlcmVkTGlzdFxyXG4gICAgY3JlYXRlUGFnaW5hdGlvbigpO1xyXG4gICAgc2hvd1Jlc3VsdHMoMSkudGhlbigoKT0+e1xyXG4gICAgICAgIGdldEFsbEluc2VydGlvbnMoKTtcclxuICAgIH0pXHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2VhcmNoQnlHYW1lQ29uc29sbGUoY29uc29sZTogc3RyaW5nKSB7XHJcbiAgICBmaWx0ZXJlZExpc3QgPSBbXVxyXG4gICAgZm9yIChsZXQgZWxlbWVudCBvZiBsaXN0KSB7XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50LnRyYWRlR2FtZS5jb25zb2xlLmNvbnNvbGUgPT0gY29uc29sZSkge1xyXG4gICAgICAgICAgICBmaWx0ZXJlZExpc3QucHVzaChlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIH1cclxuICAgIGxpc3QgPSBbXTtcclxuICAgIGxpc3QgPSBmaWx0ZXJlZExpc3RcclxuICAgIGNyZWF0ZVBhZ2luYXRpb24oKTtcclxuICAgIHNob3dSZXN1bHRzKDEpO1xyXG4gICAgZ2V0QWxsSW5zZXJ0aW9ucygpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2VhcmNoQnlHZW5yZShnZW5yZTogU3RyaW5nKSB7XHJcbiAgICBmaWx0ZXJlZExpc3QgPSBbXVxyXG4gICAgZm9yIChsZXQgZWxlbWVudCBvZiBsaXN0KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LnRyYWRlR2FtZS5nZW5yZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC50cmFkZUdhbWUuZ2VucmVbaV0uZ2VucmUgPT0gZ2VucmUpIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcmVkTGlzdC5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgaSA9IGVsZW1lbnQudHJhZGVHYW1lLmdlbnJlLmxlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxpc3QgPSBbXTtcclxuICAgIGxpc3QgPSBmaWx0ZXJlZExpc3RcclxuICAgIGNyZWF0ZVBhZ2luYXRpb24oKTtcclxuICAgIHNob3dSZXN1bHRzKDEpO1xyXG4gICAgZ2V0QWxsSW5zZXJ0aW9ucygpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2VhcmNoQnlZZWFyKHllYXI6IG51bWJlcikge1xyXG4gICAgZmlsdGVyZWRMaXN0ID0gW11cclxuICAgIGZvciAobGV0IGVsZW1lbnQgb2YgbGlzdCkge1xyXG4gICAgICAgIGlmIChlbGVtZW50LnRyYWRlR2FtZS55ZWFyID09IHllYXIpIHtcclxuICAgICAgICAgICAgZmlsdGVyZWRMaXN0LnB1c2goZWxlbWVudClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsaXN0ID0gW107XHJcbiAgICBsaXN0ID0gZmlsdGVyZWRMaXN0XHJcbiAgICBjcmVhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICBzaG93UmVzdWx0cygxKTtcclxuICAgIGdldEFsbEluc2VydGlvbnMoKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbkZpbHRlcnMoKSB7ICAgICAgICAgICAgIFxyXG4gICAgXHJcbmxldCBhbGxHYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0QWxsXCIpXHJcbiAgICBhbGxHYW1lcy5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNlYXJjaEJ5QWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWxsQ29uc29sbGVzKCk7XHJcblxyXG4gICAgc2V0QWxsR2VucmVzKCk7XHJcblxyXG4gICAgc2V0QWxsWWVhcnMoKTtcclxuXHJcbiAgICBsZXQgc2VhcmNoVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFRpdGxlSW5zZXJ0aW9uc1wiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgc2VhcmNoVGl0bGUub25rZXlkb3duID0gKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXkgPT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICBzZWFyY2hCeVRpdGxlKHNlYXJjaFRpdGxlLnZhbHVlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGFnZVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IGluc2VydGlvbiBmcm9tICcuLi9pbnRlcmZhY2VzL2luc2VydGlvbic7XHJcbmltcG9ydCBhbm51bmNpbyBmcm9tICcuL2FubnVuY2lvLmh0bWwnXHJcbmltcG9ydCBjcmVhdGVQYWdlIGZyb20gJy4vYW5udW5jaSc7XHJcbmltcG9ydCBhbm51bmNpIGZyb20gJy4vYW5udW5jaS5odG1sJ1xyXG5pbXBvcnQgdmlkZW9nYW1lIGZyb20gJy4uL2ludGVyZmFjZXMvdmlkZW9nYW1lJztcclxuaW1wb3J0IHVzZXJJbmZvIGZyb20gJy4uL2ludGVyZmFjZXMvdXNlckluZm8nO1xyXG5pbXBvcnQgdXNlciBmcm9tICcuLi9pbnRlcmZhY2VzL3VzZXInO1xyXG5pbXBvcnQgY3JlYXRlSG9tZSBmcm9tICcuLi9ob21lL2hvbWUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV4cGFuZEluc2VydGlvbihpbnNlcnRpb246YW55KSB7XHJcbiAgICBcclxuXHJcbiAgICAvKkltcG9zdG8gbGEgcGFnaW5hIHByaW5jaXBhbGUgY29uIGlsIHRlbXBsYXRlIGRlbCBzaW5nb2xvIGFubnVuY2lvICovXHJcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcclxuICAgIG1haW4uaW5uZXJIVE1MID0gYW5udW5jaW87XHJcblxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dhbWVzXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGFubnVuY2k7XHJcbiAgICAgICAgY3JlYXRlUGFnZSgpO1xyXG4gICAgfVxyXG4gICAgbGV0IGJhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tcIilcclxuICAgIC8vYmFjay5hcHBlbmQoYnV0dG9uKTtcclxuXHJcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBpbnNlcnRpb24udGl0bGU7XHJcbiAgICBiYWNrLmFwcGVuZCh0aXRsZSk7XHJcblxyXG5cclxuXHJcbiAgICAvKkltcG9zdG8gaWwgY2Fyb3NlbGxvIGRlbGxlIGltbWFnaW5pIHV0ZW50ZSAqL1xyXG4gICAgbGV0IGluZGljYXRvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5kaWNhdG9yXCIpXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluc2VydGlvbi5nYWxsZXJ5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImRhdGEtYnMtdGFyZ2V0XCIsIFwiI2ltYWdlU2xpZGVyXCIpO1xyXG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLXNsaWRlLXRvXCIsIFwiXCIgKyBpKTtcclxuICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIFwiU2xpZGUgXCIgKyAoaSArIDEpKTtcclxuICAgICAgICBpbmRpY2F0b3IuYXBwZW5kKGJ0bik7XHJcbiAgICB9XHJcbiAgICBsZXQgaW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlubmVyXCIpXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnNlcnRpb24uZ2FsbGVyeS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2Fyb3VzZWwtaXRlbSBhY3RpdmVcIilcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJvdXNlbC1pdGVtXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGltZy5zcmMgPSBpbnNlcnRpb24uZ2FsbGVyeVtpXS5saW5rO1xyXG4gICAgICAgIGltZy53aWR0aCA9IDQwMDtcclxuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkLWJsb2NrIHctMTAwXCIpO1xyXG4gICAgICAgIGltZy5hbHQgPSBcIkdhbGxlcnkgSW1hZ2VcIiArIChpICsgMSlcclxuICAgICAgICBkaXYuYXBwZW5kKGltZyk7XHJcbiAgICAgICAgaW5uZXIuYXBwZW5kKGRpdilcclxuICAgIH1cclxuICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgaW1nLnNyYyA9IGluc2VydGlvbi50cmFkZUdhbWUuY292ZXIubGluaztcclxuICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImltZy1mbHVpZCByb3VuZGVkLXN0YXJ0XCIpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmQtaW1hZ2VcIikuYXBwZW5kKGltZyk7XHJcbiAgICBsZXQgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICBoNC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcmQtdGl0bGVcIik7XHJcbiAgICBoNC5pbm5lckhUTUwgPSBpbnNlcnRpb24udHJhZGVHYW1lLm5hbWU7XHJcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcmQtdGV4dFwiKTtcclxuICAgIHAuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJmb250LXNpemU6IDEuNWVtO1wiKVxyXG4gICAgcC5pbm5lckhUTUwgPSBcIkdlbmVyZTogXCI7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluc2VydGlvbi50cmFkZUdhbWUuZ2VucmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBwLmlubmVySFRNTCArPSBpbnNlcnRpb24udHJhZGVHYW1lLmdlbnJlW2ldLmdlbnJlICsgXCIgXCJcclxuICAgIH1cclxuICAgIHAuaW5uZXJIVE1MICs9IFwiPGJyPlwiXHJcbiAgICAgICAgKyBcIkFubm86IFwiICsgaW5zZXJ0aW9uLnRyYWRlR2FtZS55ZWFyICsgXCI8YnI+XCJcclxuICAgICAgICArIFwiQ29uc29sZTogXCIgKyBpbnNlcnRpb24udHJhZGVHYW1lLmNvbnNvbGUuY29uc29sZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZC1ib2R5XCIpLmFwcGVuZChoNCwgcCk7XHJcbiAgICBsZXQgcHVibGlzaGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG5cclxuICAgIGZldGNoKFwiL3VzZXIvXCIgKyBpbnNlcnRpb24ucHVibGlzaGVyLmlkKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHB1Ymxpc2hlci5pbm5lckhUTUwgPSBcIlV0ZW50ZTogXCIgKyBkYXRhLnVzZXJuYW1lICsgXCIgUHVudGVnZ2lvOiBcIiArIGluc2VydGlvbi5wdWJsaXNoZXIucmF0aW5nO1xyXG4gICAgICAgICAgICBwdWJsaXNoZXIuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJjb2xvcjp3aGl0ZVwiKVxyXG4gICAgICAgICAgICBsZXQgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICAgICAgZGVzYy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImNvbG9yOndoaXRlXCIpXHJcbiAgICAgICAgICAgIGRlc2MuaW5uZXJIVE1MID0gXCJEZXNjcml6aW9uZTpcIlxyXG4gICAgICAgICAgICBsZXQgaW5zRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgICAgICAgICAgaW5zRGVzYy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImNvbG9yOndoaXRlXCIpXHJcbiAgICAgICAgICAgIGluc0Rlc2MuaW5uZXJIVE1MID0gaW5zZXJ0aW9uLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc2VydGlvbi1jcmVhdG9yXCIpLmlubmVySFRNTCA9IFwiTCd1dGVudGVcIi8vaW5zZXJ0aW9uLnB1Ymxpc2hlci51c2VybmFtZTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnRpb24tZGVzY3JpcHRpb25cIikuYXBwZW5kKHB1Ymxpc2hlciwgZGVzYywgaW5zRGVzYyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1pdGVtLVwiICsgKGkgKyAxKSkuaW5uZXJIVE1MID0gaW5zZXJ0aW9uLndpc2hMaXN0W2ldLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBpbnNlcnRpb24ud2lzaExpc3RbaV0uY292ZXIubGluaztcclxuICAgICAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcmQtaW1nLXRvcFwiKVxyXG4gICAgICAgICAgICAgICAgaW1nLm9uY2xpY2sgPSAoKSA9PiB7IGNyZWF0ZVByb3Bvc2FsKGluc2VydGlvbi5pZCAsaW5zZXJ0aW9uLndpc2hMaXN0W2ldLCBpbnNlcnRpb24udHJhZGVHYW1lLCBpbnNlcnRpb24ucHVibGlzaGVyKSB9XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltZy1pdGVtLVwiICsgKGkgKyAxKSkuYXBwZW5kKGltZyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICAgICAgcC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcmQtdGV4dFwiKTtcclxuICAgICAgICAgICAgICAgIHAuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJmb250LXNpemU6IDEuNWVtO1wiKTtcclxuICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gXCJHZW5lcmU6IFwiO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBpbnNlcnRpb24ud2lzaExpc3RbaV0uZ2VucmUubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBwLmlubmVySFRNTCArPSBpbnNlcnRpb24ud2lzaExpc3RbaV0uZ2VucmVbal0uZ2VucmUgKyBcIiBcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgKz0gXCI8YnI+XCJcclxuICAgICAgICAgICAgICAgICAgICArIFwiQW5ubzogXCIgKyBpbnNlcnRpb24ud2lzaExpc3RbaV0ueWVhciArIFwiPGJyPlwiXHJcbiAgICAgICAgICAgICAgICAgICAgKyBcIkNvbnNvbGU6IFwiICsgaW5zZXJ0aW9uLndpc2hMaXN0W2ldLmNvbnNvbGUuY29uc29sZTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keS1pdGVtLVwiICsgKGkgKyAxKSkuYXBwZW5kKHApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb3Bvc2FsKGluc2VydGlvbklkOm51bWJlciwgd2lzaEdhbWU6IHZpZGVvZ2FtZSwgdHJhZGVHYW1lOiB2aWRlb2dhbWUsIHB1Ymxpc2hlcjogdXNlcikge1xyXG4gICAgbGV0IHByb3Bvc2FsRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnRpb24tY29uZmlybVwiKTtcclxuICAgIHByb3Bvc2FsRGl2LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBsZXQgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICBoMy5pbm5lckhUTUwgPSBcIlNlaSBzaWN1cm8gZGkgdm9sZXIgc2NhbWJpYXJlIFwiICsgd2lzaEdhbWUubmFtZSArIFwiIHBlciBcIiArIHRyYWRlR2FtZS5uYW1lICsgXCI/XCI7XHJcbiAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnRuIGJ0bi1zdWNjZXNzXCIpO1xyXG4gICAgYnRuLmlubmVySFRNTCA9IFwiQ29uZmVybWFcIjtcclxuICAgIGgzLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZm9udC1zaXplOjIwcHg7IGNvbG9yOndoaXRlXCIpXHJcbiAgICBwcm9wb3NhbERpdi5hcHBlbmQoaDMsIGJ0bilcclxuICAgIGNvbnN0IHByb3Bvc2FsID0ge1xyXG4gICAgICAgIGluc2VydGlvbklkOiBpbnNlcnRpb25JZCxcclxuICAgICAgICB0cmFkZUdhbWU6IHRyYWRlR2FtZSxcclxuICAgICAgICB3aXNoR2FtZTogd2lzaEdhbWUsXHJcbiAgICAgICAgcHVibGlzaGVyOiBwdWJsaXNoZXJcclxuICAgIH1cclxuICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4geyBjb25maXJtUHJvcG9zYWwocHJvcG9zYWwpIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbmZpcm1Qcm9wb3NhbChwcm9wb3NhbDogYW55KSB7XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwcm9wb3NhbClcclxuICAgIH1cclxuXHJcblxyXG4gICAgZmV0Y2goXCIvaW5zZXJ0aW9uL2NvbmZpcm1cIiwgcmVxdWVzdClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWRhdGEubG9nZ2VkKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIm5vbiBzZWkgbG9nZ2F0b1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKCFkYXRhLnRoaXNJc1lvdSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJjaGUgZmFpIGNsaWNjaGkgc3VsIHR1byBzdGVzc28gYW5udW5jaW8/IT9cIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICghZGF0YS5oYXNHYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIm5vbiBwb3NzaWVkaSBpbCBnaW9jb1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGRhdGEuYWxyZWFkeUhhdmUpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwibWEgaGFpIGdpw6AgcXVlc3RvIGdpb2NvIVwiKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIlNjYW1iaW8gZWZmZXR0dWF0byFcIilcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUhvbWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGV4cGFuZEluc2VydGlvbiIsImltcG9ydCBjcmVhQW5udW5jaW8gZnJvbSAnLi4vY3JlYUFubnVuY2lvL2NyZWFBbm51bmNpby5odG1sJ1xyXG5pbXBvcnQgaW5zZXJ0aW9uIGZyb20gJy4uL2ludGVyZmFjZXMvaW5zZXJ0aW9uJztcclxuaW1wb3J0IGV4cGFuZEluc2VydGlvbiBmcm9tICcuL2FubnVuY2lvJ1xyXG5pbXBvcnQgY3JlYXRlSW5zZXJ0aW9uUGFnZSBmcm9tICcuLi9jcmVhQW5udW5jaW8vY3JlYUFubnVuY2lvJ1xyXG5cclxubGV0IGxpc3Q6IGluc2VydGlvbltdID0gW107XHJcbmxldCB2aWV3OiBudW1iZXIgPSA2XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGFnZTIoKSB7XHJcbiAgICBsaXN0ID0gW107XHJcbiAgICBmZXRjaCgnL2luc2VydGlvbicpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgZm9yKGxldCBkIG9mIGRhdGEpe1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlQ2F0ZWdvcnlcIikub25jbGljayA9IGNyZWF0ZUNhdGVnb3J5O1xyXG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEluc2VydGlvblwiKTtcclxuICAgICAgICBidG4ub25jbGljaz0oKT0+e1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MPWNyZWFBbm51bmNpbztcclxuICAgICAgICAgICAgY3JlYXRlSW5zZXJ0aW9uUGFnZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjcmVhdGVQYWdpbmF0aW9uMigpO1xyXG4gICAgICAgIHNob3dSZXN1bHRzMigxKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQYWdpbmF0aW9uMigpIHtcclxuICAgIGxldCBzaXplOiBudW1iZXIgPSBsaXN0Lmxlbmd0aFxyXG4gICAgbGV0IHRhYnM6IG51bWJlciA9IE1hdGguY2VpbChzaXplIC8gdmlldyk7XHJcbiAgICBsZXQgcGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VzMlwiKTtcclxuICAgIHBhZ2VzLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0YWJzOyBpKyspIHtcclxuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgaWYgKGkgPT0gMSkge1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbSBhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiLCBcInBhZ2VcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWl0ZW1cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtbGlua1wiKTtcclxuICAgICAgICBidG4ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGFsbExpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlczJcIikuY2hpbGRyZW47XHJcbiAgICAgICAgICAgIGZvciAobGV0IG9uZUxpIG9mIGFsbExpKSB7XHJcbiAgICAgICAgICAgICAgICBvbmVMaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbVwiKTtcclxuICAgICAgICAgICAgICAgIG9uZUxpLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbSBhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiLCBcInBhZ2VcIik7XHJcbiAgICAgICAgICAgIHNob3dSZXN1bHRzMihpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGJ0bi5pbm5lckhUTUwgPSBcIlwiICsgKGkpO1xyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlczJcIikuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93UmVzdWx0czIoaTogbnVtYmVyKSB7XHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zZXJ0aW9uQ29udGVudDJcIik7XHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBsZXQgc3RhcnQgPSAoaSAtIDEpICogdmlldztcclxuICAgIGxldCBzdG9wID0gKGkgKiB2aWV3KSAtIDE7XHJcbiAgICBmb3IgKHN0YXJ0OyBzdGFydCA8PSBzdG9wOyBzdGFydCsrKSB7XHJcbiAgICAgICAgaWYgKHN0YXJ0ID49IGxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgbGV0IGp1YW4gPSBsaXN0W3N0YXJ0XS50aXRsZSAgLy9cIlwiICsgc3RhcnQ7XHJcbiAgICAgICAgLy9KdWFuIMOoIGwnaWQgZGVpIGJvdHRvbmksIHNhcsOgIGwnaWQgZGVsbGUgaW5zZXJ6aW9uaSBxdWFuZG8gc2kgaW1wbGVtZW50ZXJhbm5vIGdsaSBhbm51bmNpIGRhbCBkYlxyXG4gICAgICAgIGxldCBpc09uQ2hlY2tlZExpc3RSZXN1bHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBlbGVtZW50IG9mIGNoZWNrZWRMaXN0KXtcclxuICAgICAgICAgICAgaWYoanVhbj09ZWxlbWVudCl7XHJcbiAgICAgICAgICAgICAgICBpc09uQ2hlY2tlZExpc3RSZXN1bHQ9dHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsICdsaXN0LWdyb3VwLWl0ZW0nKTtcclxuICAgICAgICBpZihpc09uQ2hlY2tlZExpc3RSZXN1bHQpe1xyXG4gICAgICAgICAgICBjb2wuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNilcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpXCIpO1xyXG4gICAgICAgICAgICBjb2wuc2V0QXR0cmlidXRlKCdvbm1vdXNlb3ZlcicsICdzZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KVwiKScpO1xyXG4gICAgICAgICAgICBjb2wuc2V0QXR0cmlidXRlKCdvbm1vdXNlb3V0JywgJ3NldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpXCIpJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBqdWFuKTtcclxuXHJcbiAgICAgICAgY29sLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGFkZEluc2VydGlvblRvTGlzdChqdWFuKVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZm9udC13ZWlnaHQ6IGJvbGQ7Jyk7XHJcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gbGlzdFtzdGFydF0udGl0bGUgKyBcIiB8IFwiICsgbGlzdFtzdGFydF0ub3V0Y29tZTtcclxuICAgICAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBcIlwiICsgbGlzdFtzdGFydF0udHJhZGVHYW1lLm5hbWU7XHJcbiAgICAgICAgZm9yKGxldCBpPSAwOyBpPGxpc3Rbc3RhcnRdLnRyYWRlR2FtZS5nZW5yZS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTCArPSBcIiwgXCIgKyBsaXN0W3N0YXJ0XS50cmFkZUdhbWUuZ2VucmVbaV0uZ2VucmUgKyBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgKz0gXCIsIFwiICsgbGlzdFtzdGFydF0udHJhZGVHYW1lLnllYXI7XHJcblxyXG4gICAgICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTCArPSBcIiwgXCIgKyBsaXN0W3N0YXJ0XS50cmFkZUdhbWUuY29uc29sZS5jb25zb2xlO1xyXG5cclxuICAgICAgICBsZXQgY29sMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbGV0IGJ0bl9zaG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBsZXQgYnRuX2FwcHJvdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGxldCBpbnMgPSBsaXN0W3N0YXJ0XTtcclxuICAgICAgICBsZXQgaWQgPSBsaXN0W3N0YXJ0XS5pZDtcclxuICAgICAgICBidG5fYXBwcm92ZS5pZCA9IFwiYnRuX2FwcHJvdmVcIitpZDtcclxuICAgICAgICBidG5fc2hvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ0biBidG4tcHJpbWFyeSBidG4tc21cIik7XHJcbiAgICAgICAgYnRuX3Nob3cuaW5uZXJIVE1MID0gXCJNb3N0cmEgYW5udW5jaW9cIjtcclxuICAgICAgICBpZihsaXN0W3N0YXJ0XS5hcHByb3ZlZCl7XHJcbiAgICAgICAgICAgIGJ0bl9hcHByb3ZlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbVwiKTtcclxuICAgICAgICAgICAgYnRuX2FwcHJvdmUuaW5uZXJIVE1MID0gXCJBbm51bmNpbyBhcHByb3ZhdG9cIjtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgYnRuX2FwcHJvdmUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG4gYnRuLXdhcm5pbmcgYnRuLXNtXCIpO1xyXG4gICAgICAgICAgICBidG5fYXBwcm92ZS5pbm5lckhUTUwgPSBcIkRhIGFwcHJvdmFyZVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBidG5fYXBwcm92ZS5vbmNsaWNrID0gKCk9PntjaGFuZ2VJbnNlcnRpb25TdGF0dXMoaWQpO31cclxuICAgICAgICBidG5fc2hvdy5vbmNsaWNrID0gKCk9PntleHBhbmRJbnNlcnRpb24oaW5zKTt9IFxyXG4gICAgICAgIGNvbC5hcHBlbmQodGl0bGUsZGVzY3JpcHRpb24pXHJcbiAgICAgICAgY29sMi5hcHBlbmQoYnRuX3Nob3csIGJ0bl9hcHByb3ZlKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZChjb2wsIGNvbDIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY2hhbmdlSW5zZXJ0aW9uU3RhdHVzKGlkOm51bWJlcil7XHJcbiAgICBmZXRjaChcIi9pbnNlcnRpb24vXCIraWQpXHJcbiAgICAudGhlbigocmVzcG9uc2UpPT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigoZGF0YSk9PntcclxuICAgICAgICBsZXQgYnRuX2FwcHJvdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bl9hcHByb3ZlXCIraWQpO1xyXG4gICAgICAgIGlmKGRhdGEpe1xyXG4gICAgICAgICAgICBidG5fYXBwcm92ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ0biBidG4tc3VjY2VzcyBidG4tc21cIik7XHJcbiAgICAgICAgICAgIGJ0bl9hcHByb3ZlLmlubmVySFRNTCA9IFwiQW5udW5jaW8gYXBwcm92YXRvXCI7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGJ0bl9hcHByb3ZlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnRuIGJ0bi13YXJuaW5nIGJ0bi1zbVwiKTtcclxuICAgICAgICAgICAgYnRuX2FwcHJvdmUuaW5uZXJIVE1MID0gXCJEYSBhcHByb3ZhcmVcIjtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQYWdlMlxyXG5cclxuXHJcblxyXG5cclxubGV0IGNoZWNrZWRMaXN0OiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZEluc2VydGlvblRvTGlzdChpbnM6IHN0cmluZyl7XHJcblxyXG4gICAgbGV0IGlzT25DaGVja2VkTGlzdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGZvcihsZXQgZWxlbWVudCBvZiBjaGVja2VkTGlzdCl7XHJcbiAgICAgICAgaWYoaW5zPT1lbGVtZW50KXtcclxuICAgICAgICAgICAgaXNPbkNoZWNrZWRMaXN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2hlY2tlZExpc3Quc3BsaWNlKGNoZWNrZWRMaXN0LmluZGV4T2YoZWxlbWVudCksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZihpc09uQ2hlY2tlZExpc3Qpe1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucykuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMilcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5zKS5zZXRBdHRyaWJ1dGUoJ29ubW91c2VvdmVyJywgJ3NldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpXCIpJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5zKS5zZXRBdHRyaWJ1dGUoJ29ubW91c2VvdXQnLCAnc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMilcIiknKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2hlY2tlZExpc3QucHVzaChpbnMpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucykucmVtb3ZlQXR0cmlidXRlKCdvbm1vdXNlb3ZlcicpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucykucmVtb3ZlQXR0cmlidXRlKCdvbm1vdXNlb3V0Jyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5zKS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KVwiKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYXRlZ29yeSgpe1xyXG4gICAgXHJcbiAgICBjb25zdCBvYmo9e1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXRlZ29yeU5hbWVcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcbiAgICAgICAgaW5zZXJ0aW9uc1RpdGxlOiBjaGVja2VkTGlzdCxcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGNvbnN0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KG9iailcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaChcIi9jYXRlZ29yeVwiLCByZXF1ZXN0KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKT0+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgaWYoZGF0YT4wKXtcclxuICAgICAgICAgICAgYWxlcnQoXCJDYXRlZ29yaWEgQ3JlYXRhXCIpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiRScgRklOSUlJSVRBQSEhXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAvL1ByZW5kZSBpbCB2YWxvcmUgZGVsbGEgY2FzZWxsYSBkaSB0ZXN0byBlIGxvIG1ldHRlIGNvbWUgbm9tZSBkZWxsYSBjYXRlZ29yaWFcclxuICAgXHJcbiAgICBcclxuICAgIC8vVE9ETzogTEEgRkVFRUVFRUVFRUVFRUVUQ0ghISFcclxuICAgIC8vVE9ETzogaW5zZXJpc2NpIGdsaSBlbGVtZW50aSBkaSBjaGVja2VkTGlzdCBpbiB1bmEgY2F0ZWdvcmlhIG5lbCBEQlxyXG4gICAgLy9UT0RPOiBNZXRvZG8gZGEgZmFyZSBwZXIgaW5zZXJpcmUgZ2xpIGVsZW1lbnRpIG5lbCBkYXRhYmFzZSBoYWhhXHJcblxyXG4gICAgLy9TdnVvdGEgaWwgdmFsb3JlIGRlbGxhIGNhc2VsbGEgZGkgdGVzdG8gZSBsYSBsaXN0YVxyXG5cclxuICAgIGNoZWNrZWRMaXN0ID0gW107XHJcblxyXG4gICAgLy9SZWltcG9zdGEgbGEgcGFnaW5hIGEgY29tZSBzdGF2YSBwcmltYVxyXG4gICAgY3JlYXRlUGFnaW5hdGlvbjIoKTtcclxuICAgIHNob3dSZXN1bHRzMigxKTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgdXNlciBmcm9tIFwiLi4vaW50ZXJmYWNlcy91c2VyXCI7XHJcbmltcG9ydCBjaGF0SGVhZGVyVGVtcGxhdGUgZnJvbSBcIi4vY2hhdEhlYWRlci5odG1sXCJcclxuaW1wb3J0IGNoYXRCb2R5VGVtcGxhdGUgZnJvbSBcIi4vY2hhdEJvZHkuaHRtbFwiXHJcbmltcG9ydCBjaGF0Rm9vdGVyVGVtcGxhdGUgZnJvbSBcIi4vY2hhdEZvb3Rlci5odG1sXCJcclxuaW1wb3J0IG1lc3NhZ2UgZnJvbSBcIi4uL2ludGVyZmFjZXMvbWVzc2FnZVwiO1xyXG5pbXBvcnQgdXNlckluZm8gZnJvbSBcIi4uL2ludGVyZmFjZXMvdXNlckluZm9cIjtcclxuXHJcblxyXG5sZXQgY2hhdFZlcnNpb25zOiBNYXA8bnVtYmVyLCBNYXA8bnVtYmVyLCBudW1iZXI+PiA9IG5ldyBNYXAoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGlja0NoYXQoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3dDaGF0VXNlcnNcIikub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBzaG93VXNlcnNDaGF0KCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxlcnRcIikuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgIH07XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzaG93VXNlcnNDaGF0KCkge1xyXG4gICAgZmV0Y2goXCIvdXNlclwiKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhOiB1c2VyW10pID0+IHtcclxuICAgICAgICAgICAgZmV0Y2goXCIvdXNlci90aGlzXCIpXHJcbiAgICAgICAgICAgICAgICAudGhlbigodGhpc1VzZXJTZXJpYWx5emVkKSA9PiB0aGlzVXNlclNlcmlhbHl6ZWQuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigodGhpc1VzZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2hhdEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhdEJveFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjaGF0Qm94LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGlzdC1ncm91cFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB1c2VyIG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXIudXNlcklkICE9IHRoaXNVc2VyLnVzZXJJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmlkID0gXCJcIiArIHVzZXIudXNlcklkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmlubmVySFRNTCA9IHVzZXIudXNlcm5hbWUgKyBcIiBcIiArIHVzZXIucmF0aW5nICsgXCIgPGkgY2xhc3M9J2ZhLXJlZ3VsYXIgZmEtc3Rhcic+PC9pPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7IGZpbmRDaGF0KE51bWJlcihidG4uaWQpKSB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmFwcGVuZChidG4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhdEJveC5hcHBlbmQoZGl2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmRDaGF0KGlkUmVjZWl2ZXI6IG51bWJlcikge1xyXG4gICAgZmV0Y2goXCIvY2hhdC9cIiArIGlkUmVjZWl2ZXIpXHJcbiAgICAgICAgLnRoZW4oKHNlcmlhbGl6ZWRJZENoYXQpID0+IHNlcmlhbGl6ZWRJZENoYXQuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChpZENoYXQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGlkQ2hhdCAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgZmV0Y2goXCIvdXNlci9cIiArIGlkUmVjZWl2ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHNlcmlhbGl6ZWRVc2VySW5mbykgPT4gc2VyaWFsaXplZFVzZXJJbmZvLmpzb24oKSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigodXNlckluZm8pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoYXRCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXRCb3hcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXRCb3guaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhdEJveC5pbm5lckhUTUwgPSBjaGF0SGVhZGVyVGVtcGxhdGUgKyBjaGF0Qm9keVRlbXBsYXRlICsgY2hhdEZvb3RlclRlbXBsYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hhdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGF0VGl0bGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXRUaXRsZS5pbm5lckhUTUwgPSB1c2VySW5mby51c2VybmFtZSArIFwiIFwiICsgdXNlckluZm8ucmF0aW5nICsgXCIgPGkgY2xhc3M9J2ZhLXJlZ3VsYXIgZmEtc3Rhcic+PC9pPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2xldCBpZFJlZnJlc2ggPSBzZXRJbnRlcnZhbCgoKT0+e29wZW5DaGF0KE51bWJlcihpZENoYXQpKTt9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlbkNoYXQoTnVtYmVyKGlkQ2hhdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gb3BlbkNoYXQoY2hhdElkOiBudW1iZXIpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhdEJvZHlcIikuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja1RvTGlzdFwiKS5vbmNsaWNrID0gc2hvd1VzZXJzQ2hhdDtcclxuICAgIGF3YWl0IGZldGNoKFwiL2NoYXQvY29udmVyc2F0aW9uL1wiICsgY2hhdElkKVxyXG4gICAgICAgIC50aGVuKChzZXJpYWxpemVkQ29udmVyc2F0aW9uKSA9PiBzZXJpYWxpemVkQ29udmVyc2F0aW9uLmpzb24oKSlcclxuICAgICAgICAudGhlbigoY29udmVyc2F0aW9uOiBtZXNzYWdlW10pID0+IHtcclxuXHJcbiAgICAgICAgICAgIGZldGNoKFwiL3VzZXIvdGhpc1wiKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHNlcmlhbGl6ZWRUaGlzVXNlckluZm8pID0+IHNlcmlhbGl6ZWRUaGlzVXNlckluZm8uanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHRoaXNVc2VySW5mbzogdXNlckluZm8pID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRleHRCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc3NhZ2VUZXh0XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tYWRkb24yXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU1lc3NhZ2UodGhpc1VzZXJJbmZvLnVzZXJJZCwgY2hhdElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEJveC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0Qm94Lm9ua2V5ZG93biA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVNZXNzYWdlKHRoaXNVc2VySW5mby51c2VySWQsIGNoYXRJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Qm94LnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBtZXNzYWdlIG9mIGNvbnZlcnNhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS51c2VybmFtZSA9PSB0aGlzVXNlckluZm8udXNlcm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1aWxkTWVzc2FnZVNlbmRlZCh0aGlzVXNlckluZm8udXNlcm5hbWUsIHRoaXNVc2VySW5mby5yYXRpbmcsIG1lc3NhZ2UudGltZXN0YW1wLCBtZXNzYWdlLnRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVpbGRNZXNzYWdlUmVjaXZlZChtZXNzYWdlLnVzZXJuYW1lLCBtZXNzYWdlLnJhdGluZywgbWVzc2FnZS50aW1lc3RhbXAsIG1lc3NhZ2UudGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgZnVuY3Rpb24gYnVpbGRNZXNzYWdlUmVjaXZlZCh1c2VybmFtZTogc3RyaW5nLCByYXRpbmc6IG51bWJlciwgdGltZXN0YW1wOiBzdHJpbmcsIHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBjaGF0Qm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhdEJvZHlcIik7XHJcbiAgICAgICAgbGV0IGRpdkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGRpdkluZm8uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIik7XHJcbiAgICAgICAgbGV0IHBEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgcERhdGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzbWFsbCBtYi0xIHRleHQtbXV0ZWRcIik7XHJcbiAgICAgICAgcERhdGUuaW5uZXJIVE1MID0gbm9ybWFsUGVyc29uRGF0ZVRyYW5zZm9ybSh0aW1lc3RhbXApO1xyXG4gICAgICAgIGxldCBwVXNlcm5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBwVXNlcm5hbWUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzbWFsbCBtYi0xXCIpO1xyXG4gICAgICAgIHBVc2VybmFtZS5pbm5lckhUTUwgPSB1c2VybmFtZSArIFwiIFwiICsgcmF0aW5nICsgXCI8aSBjbGFzcz0nZmEtcmVndWxhciBmYS1zdGFyJz48L2k+XCI7XHJcblxyXG4gICAgICAgIGxldCBkaXZUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkaXZUZXh0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1zdGFydFwiKTtcclxuICAgICAgICBsZXQgZGl2SW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGxldCBwVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHBUZXh0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic21hbGwgcC0yIG1zLTMgbWItMyByb3VuZGVkLTNcIik7XHJcbiAgICAgICAgcFRleHQuaW5uZXJIVE1MID0gdGV4dDtcclxuXHJcbiAgICAgICAgbGV0IGltZ0F2YXRhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgaW1nQXZhdGFyLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4vaW1nL3Byb2ZpbGUucG5nXCIpO1xyXG4gICAgICAgIGltZ0F2YXRhci5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJhdmF0YXJcIik7XHJcbiAgICAgICAgaW1nQXZhdGFyLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwid2lkdGg6IDQ1cHg7IGhlaWdodDogMTAwJTtcIik7XHJcblxyXG4gICAgICAgIGRpdkluZm8uYXBwZW5kKHBVc2VybmFtZSwgcERhdGUpO1xyXG4gICAgICAgIGRpdklubmVyLmFwcGVuZChwVGV4dCk7XHJcbiAgICAgICAgZGl2VGV4dC5hcHBlbmQoaW1nQXZhdGFyLCBkaXZJbm5lcik7XHJcbiAgICAgICAgY2hhdEJvZHkuYXBwZW5kKGRpdkluZm8sIGRpdlRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGJ1aWxkTWVzc2FnZVNlbmRlZCh1c2VybmFtZTogc3RyaW5nLCByYXRpbmc6IG51bWJlciwgdGltZXN0YW1wOiBzdHJpbmcsIHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBjaGF0Qm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhdEJvZHlcIik7XHJcblxyXG4gICAgICAgIGxldCBkaXZJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkaXZJbmZvLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIpO1xyXG4gICAgICAgIGxldCBwRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHBEYXRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic21hbGwgbWItMSB0ZXh0LW11dGVkXCIpO1xyXG4gICAgICAgIHBEYXRlLmlubmVySFRNTCA9IG5vcm1hbFBlcnNvbkRhdGVUcmFuc2Zvcm0odGltZXN0YW1wKTtcclxuICAgICAgICBsZXQgcFVzZXJuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgcFVzZXJuYW1lLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic21hbGwgbWItMVwiKTtcclxuICAgICAgICBwVXNlcm5hbWUuaW5uZXJIVE1MID0gdXNlcm5hbWUgKyBcIiBcIiArIHJhdGluZyArIFwiPGkgY2xhc3M9J2ZhLXJlZ3VsYXIgZmEtc3Rhcic+PC9pPlwiO1xyXG5cclxuICAgICAgICBsZXQgZGl2VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZGl2VGV4dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtZW5kIG1iLTQgcHQtMVwiKTtcclxuICAgICAgICBsZXQgZGl2SW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGxldCBwVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHBUZXh0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic21hbGwgcC0yIG1lLTMgbWItMyB0ZXh0LXdoaXRlIHJvdW5kZWQtMyBiZy13YXJuaW5nXCIpO1xyXG4gICAgICAgIHBUZXh0LmlubmVySFRNTCA9IHRleHQ7XHJcblxyXG4gICAgICAgIGxldCBpbWdBdmF0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGltZ0F2YXRhci5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL2ltZy9wcm9maWxlLnBuZ1wiKTtcclxuICAgICAgICBpbWdBdmF0YXIuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiYXZhdGFyXCIpO1xyXG4gICAgICAgIGltZ0F2YXRhci5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndpZHRoOiA0NXB4OyBoZWlnaHQ6IDEwMCU7XCIpO1xyXG5cclxuICAgICAgICBkaXZJbmZvLmFwcGVuZChwRGF0ZSwgcFVzZXJuYW1lKTtcclxuICAgICAgICBkaXZJbm5lci5hcHBlbmQocFRleHQpO1xyXG4gICAgICAgIGRpdlRleHQuYXBwZW5kKGRpdklubmVyLCBpbWdBdmF0YXIpO1xyXG4gICAgICAgIGNoYXRCb2R5LmFwcGVuZChkaXZJbmZvLCBkaXZUZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVNZXNzYWdlKHVzZXJJRDogbnVtYmVyLCBjaGF0SUQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlVGV4dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgICAgICBjb25zdCBuZXdNZXNzYWdlID0ge1xyXG4gICAgICAgICAgICBjaGF0SWQ6IGNoYXRJRCxcclxuICAgICAgICAgICAgdXNlcklkOiB1c2VySUQsXHJcbiAgICAgICAgICAgIHRleHQ6IHRleHQudmFsdWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld01lc3NhZ2UpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmZXRjaChcIi9jaGF0XCIsIHJlcXVlc3QpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGVuQ2hhdChjaGF0SUQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBub3JtYWxQZXJzb25EYXRlVHJhbnNmb3JtKHRpbWVzdGFtcDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGxldCBkYXRlID0gbmV3IERhdGUodGltZXN0YW1wKTtcclxuICAgIHJldHVybiBkYXRlLnRvTG9jYWxlU3RyaW5nKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hOb3RpZmljYXRpb24oKSB7XHJcbiAgICBmZXRjaChcIi9pc0FuVXNlckxvZ2dlZFwiKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKHNlYXJjaFVzZXJDaGF0cywgNTAwMCk7XHJcbiAgICAgICAgICAgICAgICBmZXRjaChcIi9jcmVhdGVJbnRlcnZhbC9cIiArIGludGVydmFsSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0b3BTZWFyY2hOb3RpZmljYXRpb24oKSB7XHJcbiAgICBmZXRjaChcIi9kZWxldGVJbnRlcnZhbFwiKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZGF0YSk7XHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFVzZXJDaGF0cygpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiTG9pc1wiKTtcclxuICAgIGZldGNoKFwiL2NoYXQvYWxsVXNlckNoYXRcIilcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2hhdFZlcnNpb25zLmdldChkYXRhLmlkKSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNoYXRWZXJzaW9ucy5zZXQoZGF0YS5pZCwgbmV3IE1hcDxudW1iZXIsIG51bWJlcj4oKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaWQgb2YgZGF0YS5jaGF0SWRzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhdFZlcnNpb25zLmdldChkYXRhLmlkKS5nZXQoaWQpID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYXRWZXJzaW9ucy5nZXQoZGF0YS5pZCkuc2V0KGlkLCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZldGNoKFwiL2NoYXQvdmVyc2lvbi9cIiArIGlkKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChzZXJpYWxpemVkVmVyc2lvbikgPT4gc2VyaWFsaXplZFZlcnNpb24uanNvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh2ZXJzaW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgodmVyc2lvbiA+IGNoYXRWZXJzaW9ucy5nZXQoZGF0YS5pZCkuZ2V0KGlkKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKFwiL2NoYXQvb25lL1wiK2lkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChzZXJpYWxpemVkQ2hhdCkgPT4gc2VyaWFsaXplZENoYXQuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChjaGF0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGF0LnVzZXIxLmlkICE9IGRhdGEuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxlcnRcIikucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhdFZlcnNpb25zLmdldChkYXRhLmlkKS5zZXQoaWQsIHZlcnNpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZENsaWNrQ2hhdDtcclxuIiwiaW1wb3J0IGNyZWFBbm51bmNpbyBmcm9tICcuL2NyZWFBbm51bmNpby5odG1sJ1xyXG5pbXBvcnQgYW5udW5jaSBmcm9tICcuL2FubnVuY2kuaHRtbCdcclxuaW1wb3J0IHZpZGVvZ2FtZSBmcm9tICcuLi9pbnRlcmZhY2VzL3ZpZGVvZ2FtZSc7XHJcblxyXG5sZXQgZnVsbExpc3Q6IHZpZGVvZ2FtZVtdID0gW11cclxubGV0IHVzZXJMaXN0OiB2aWRlb2dhbWVbXSA9IFtdXHJcbmxldCB3aXNoTGlzdDogc3RyaW5nW10gPSBbXVxyXG5sZXQgbGlzdElkOm51bWJlcltdPVtdXHJcbmxldCBnYW1lVG9UcmFkZTp2aWRlb2dhbWU7XHJcbmxldCBnaW9jb0RhU2NhbWJpYXJlOiBudW1iZXI7XHJcbmxldCBpbmRleCA9IDA7XHJcblxyXG5cclxuLypDcmVhIGxhIGxpc3RhIGRlaSBnaW9jaGkgcG9zc2VkdXRpIGRhbGwndXRlbnRlICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnNlcnRpb25QYWdlKCkge1xyXG4gICAgZ2V0VXNlckdhbWVzKCk7XHJcbiAgICBnZXRBbGxHYW1lcygpO1xyXG4gICAgYnV0dG9uVGVtcGxhdGUoKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VuZEluc2VydGlvblwiKS5vbmNsaWNrPSgpPT57XHJcbiAgICAgICAgc2VuZEFsbCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBidXR0b25UZW1wbGF0ZSgpe1xyXG4gICAgbGV0IHNlbGVjdGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3RlZFRyYWRlR2FtZVwiKTtcclxuICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IGxpQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGxldCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IGNvbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCBwaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgXHJcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBcIlNlbGV6aW9uYSBpbCBnaW9jbyBkYSBzY2FtYmlhcmVcIjtcclxuXHJcbiAgICByb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJteC1hdXRvIHJvdyBib3JkZXItYm90dG9tIGJvcmRlci0yIGJvcmRlci1wcmltYXJ5XCIpO1xyXG4gICAgY29sLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29sLTIgbXgtYXV0byBtcy0wIG15LWF1dG8gbXMtMVwiKTtcclxuICAgIGNvbDIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb2wtMiBteC1hdXRvIG1lLTEgbXktYXV0b1wiKTtcclxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibXktYXV0b1wiKTtcclxuICAgIGNvbDIuc2V0QXR0cmlidXRlKCdzdHlsZScsICd3aWR0aDozMDAlJyk7ICBcclxuICAgIGxpQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgICBsaUJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInAtMCBteC1hdXRvIG15LWF1dG8gZHJvcGRvd24taXRlbVwiKTtcclxuXHJcblxyXG4gICAgcm93LmFwcGVuZChjb2wsIGNvbDIpO1xyXG4gICAgY29sLmFwcGVuZCh0aXRsZSk7XHJcbiAgICBjb2wyLmFwcGVuZChwaWMpO1xyXG4gICAgbGlCdG4uYXBwZW5kKHJvdyk7XHJcblxyXG4gICAgc2VsZWN0ZWQuYXBwZW5kKGxpQnRuKTtcclxuXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRBbGxHYW1lcygpIHtcclxuICAgIGZldGNoKFwiL3ZpZGVvZ2FtZXNcIilcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigodmlkZW9nYW1lcykgPT4ge1xyXG4gICAgICAgICAgICBmdWxsTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBnYW1lIG9mIHZpZGVvZ2FtZXMpIHtcclxuICAgICAgICAgICAgICAgIGZ1bGxMaXN0LnB1c2goZ2FtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHdpc2hHYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2lzaEdhbWVzXCIpO1xyXG4gICAgICAgICAgICB3aXNoR2FtZXMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yIChsZXQgaT0wO2k8ZnVsbExpc3QubGVuZ3RoO2krKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbnRyb2wgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqPTA7IGo8dXNlckxpc3QubGVuZ3RoO2orKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZnVsbExpc3RbaV0uaWQgPT0gdXNlckxpc3Rbal0uaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZighY29udHJvbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb2xQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgICAgICAgICByb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJteC1hdXRvIHBiLTQgcm93IGJvcmRlci1ib3R0b20gYm9yZGVyLTIgYm9yZGVyLXByaW1hcnlcIik7XHJcbiAgICAgICAgICAgICAgICBjb2wuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb2wtMiBteC1hdXRvIG1zLTAgbXktYXV0b1wiKTtcclxuICAgICAgICAgICAgICAgIGNvbFBpYy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbC0yIG14LWF1dG8gbWUtMSBteS1hdXRvXCIpO1xyXG4gICAgICAgICAgICAgICAgcGljLnNldEF0dHJpYnV0ZSgnc3JjJywgZnVsbExpc3RbaV0uY292ZXIubGluayk7XHJcbiAgICAgICAgICAgICAgICBwaWMuc2V0QXR0cmlidXRlKCdhbHQnLCBmdWxsTGlzdFtpXS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIHBpYy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2JvcmRlciBib3JkZXItMiBib3JkZXItaW5mbyByb3VuZGVkJylcclxuICAgICAgICAgICAgICAgIHBpYy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3dpZHRoOjMwMCUnKTsgICAgXHJcbiAgICAgICAgICAgICAgICBsaUJ0bi5pZCA9IGZ1bGxMaXN0W2ldLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBsaUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICAgICAgbGlCdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkcm9wZG93bi1pdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gZnVsbExpc3RbaV0ubmFtZTtcclxuICAgICAgICAgICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibXktYXV0b1wiKTtcclxuICAgICAgICAgICAgICAgIGxpQnRuLm9uY2xpY2sgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXN0OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpc2hMaXN0Lmxlbmd0aCA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpc2hMaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgZWxlbWVudCBvZiB3aXNoTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCA9PSBsaS5pbm5lckhUTUwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGVzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aXNoTGlzdFtpbmRleF0gPSBsaS5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RJZFtpbmRleF0gPSBmdWxsTGlzdFtpXS5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdpb2NoaSBkZXNpZGVyYXRpOiBcIitsaXN0SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dTZWxlY3RlZEdhbWVzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGkuYXBwZW5kKGxpQnRuKTtcclxuICAgICAgICAgICAgICAgIGxpQnRuLmFwcGVuZChyb3cpO1xyXG4gICAgICAgICAgICAgICAgY29sLmFwcGVuZCh0aXRsZSk7XHJcbiAgICAgICAgICAgICAgICBjb2xQaWMuYXBwZW5kKHBpYylcclxuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmQoY29sLCBjb2xQaWMpO1xyXG4gICAgICAgICAgICAgICAgd2lzaEdhbWVzLmFwcGVuZChsaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRVc2VyR2FtZXMoKSB7XHJcbiAgICBmZXRjaChcIi92aWRlb2dhbWVzL3VzZXJcIilcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigodmlkZW9nYW1lcykgPT4ge1xyXG4gICAgICAgICAgICB1c2VyTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBnYW1lIG9mIHZpZGVvZ2FtZXMpIHtcclxuICAgICAgICAgICAgICAgIHVzZXJMaXN0LnB1c2goZ2FtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHRyYWRlR2FtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhZGVHYW1lXCIpO1xyXG4gICAgICAgICAgICB0cmFkZUdhbWUuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yIChsZXQgZ2FtZSBvZiB1c2VyTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbFBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICByb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJteC1hdXRvIHJvdyBib3JkZXItYm90dG9tIGJvcmRlci0yIGJvcmRlci1wcmltYXJ5XCIpO1xyXG4gICAgICAgICAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29sLTIgbXgtYXV0byBtcy0wIG15LWF1dG8gbXMtMVwiKTtcclxuICAgICAgICAgICAgICAgIGNvbFBpYy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbC0yIG14LWF1dG8gbWUtMSBteS1hdXRvXCIpO1xyXG4gICAgICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkcm9wZG93bi1pdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpdGVtU2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSBnYW1lLm5hbWU7XHJcbiAgICAgICAgICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm15LWF1dG9cIik7XHJcbiAgICAgICAgICAgICAgICBwaWMuc3JjID0gZ2FtZS5jb3Zlci5saW5rO1xyXG4gICAgICAgICAgICAgICAgcGljLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdib3JkZXIgYm9yZGVyLTIgYm9yZGVyLWluZm8gcm91bmRlZCcpO1xyXG4gICAgICAgICAgICAgICAgcGljLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnd2lkdGg6MTI4cHg7aGVpZ2h0OmF1dG8nKTsgIFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZ2FtZS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIGxpQnRuLmlkID0gZ2FtZS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgbGlCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgICAgIGxpQnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicC0wIG14LWF1dG8gbXktYXV0byBkcm9wZG93bi1pdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgbGlCdG4ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBnaW9jb0RhU2NhbWJpYXJlID0gZ2FtZS5pZDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdpb2NvIGRhIFNjYW1iaWFyZTogXCIrIGdpb2NvRGFTY2FtYmlhcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVUb1RyYWRlPWdhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd1NlbGVjdGVkVHJhZGVHYW1lKClcclxuICAgICAgICAgICAgICAgICAgIC8vIGxldCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdGVkVHJhZGVHYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vYnRuLmFwcGVuZChsaSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmQoY29sLCBjb2xQaWMpO1xyXG4gICAgICAgICAgICAgICAgY29sLmFwcGVuZCh0aXRsZSk7XHJcbiAgICAgICAgICAgICAgICBjb2xQaWMuYXBwZW5kKHBpYyk7XHJcbiAgICAgICAgICAgICAgICBsaUJ0bi5hcHBlbmQocm93KTtcclxuICAgICAgICAgICAgICAgIGxpLmFwcGVuZChsaUJ0bik7XHJcbiAgICAgICAgICAgICAgICB0cmFkZUdhbWUuYXBwZW5kKGxpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzaG93U2VsZWN0ZWRUcmFkZUdhbWUoKXtcclxuICAgIGdhbWVUb1RyYWRlO1xyXG4gICAgbGV0IHNlbGVjdGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWRcclxuICAgIChcInNlbGVjdGVkVHJhZGVHYW1lXCIpO1xyXG4gICAgc2VsZWN0ZWQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IGxpQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGxldCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IGNvbFBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IHBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBcclxuICAgIHRpdGxlLmlubmVySFRNTCA9IGdhbWVUb1RyYWRlLm5hbWU7XHJcbiAgICBwaWMuc3JjID0gZ2FtZVRvVHJhZGUuY292ZXIubGluaztcclxuXHJcbiAgICByb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJteC1hdXRvIHJvdyBib3JkZXItYm90dG9tIGJvcmRlci0yIGJvcmRlci1wcmltYXJ5XCIpO1xyXG4gICAgY29sLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29sLTIgbXgtYXV0byBtcy0wIG15LWF1dG8gbXMtMVwiKTtcclxuICAgIGNvbFBpYy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbC0yIG14LWF1dG8gbWUtMSBteS1hdXRvXCIpO1xyXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJteS1hdXRvXCIpO1xyXG4gICAgcGljLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdib3JkZXIgYm9yZGVyLTIgYm9yZGVyLWluZm8gcm91bmRlZCcpO1xyXG4gICAgcGljLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnd2lkdGg6MzAwJScpOyAgXHJcbiAgICBsaUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgbGlCdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwLTAgbXgtYXV0byBteS1hdXRvIGRyb3Bkb3duLWl0ZW1cIik7XHJcblxyXG5cclxuICAgIHJvdy5hcHBlbmQoY29sLCBjb2xQaWMpO1xyXG4gICAgY29sLmFwcGVuZCh0aXRsZSk7XHJcbiAgICBjb2xQaWMuYXBwZW5kKHBpYyk7XHJcbiAgICBsaUJ0bi5hcHBlbmQocm93KTtcclxuXHJcbiAgICBzZWxlY3RlZC5hcHBlbmQobGlCdG4pO1xyXG59XHJcblxyXG5cclxuLyogTW9zdHJhIGkgZ2lvY2hpIHNjZWx0aSBkYWxsJ3V0ZW50ZSBwZXIgbG8gc2NhbWJpbyovXHJcbmZ1bmN0aW9uIHNob3dTZWxlY3RlZEdhbWVzKCkge1xyXG4gICAgbGV0IHNlbGVjdGVkR2FtZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdGVkR2FtZXNcIik7XHJcbiAgICBzZWxlY3RlZEdhbWVzLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdpc2hMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGxldCBwaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIHBpYy5zcmMgPSB3aXNoTGlzdFtpXTtcclxuXHJcbiAgICAgICAgbGkuaW5uZXJIVE1MID0gd2lzaExpc3RbaV07XHJcbiAgICAgICAgc2VsZWN0ZWRHYW1lcy5hcHBlbmQobGkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgSW5zZXJ0aW9uRFRPe1xyXG4gICAgdGl0bGU6c3RyaW5nLFxyXG4gICAgZGVzY3JpcHRpb246c3RyaW5nLFxyXG4gICAgZ2FsbGVyeTpzdHJpbmdbXSxcclxuICAgIHRyYWRlR2FtZUlkOm51bWJlcixcclxuICAgIHdpc2hMaXN0SWRzOm51bWJlcltdXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZW5kQWxsICgpe1xyXG4gICAgbGV0IGNvbXBvc2l0ZWxpbms9KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FsbGVyeUluc2VydGlvblwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZVxyXG4gICAgbGV0IGxpbmtzPWNvbXBvc2l0ZWxpbmsuc3BsaXQoXCIsXCIpO1xyXG4gICAgXHJcbiAgICBsZXQgb2JqOkluc2VydGlvbkRUTz17XHJcbiAgICB0aXRsZTogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVJbnNlcnRpb25cIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcblx0ZGVzY3JpcHRpb246IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uSW5zZXJ0aW9uXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLFxyXG5cdGdhbGxlcnk6IGxpbmtzLFxyXG5cdHRyYWRlR2FtZUlkOiBnaW9jb0RhU2NhbWJpYXJlLFxyXG5cdHdpc2hMaXN0SWRzOiBsaXN0SWRcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcmVxdWVzdCA9e1xyXG4gICAgICAgIG1ldGhvZDonUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvYmopXHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2goXCIvaW5zZXJ0aW9uXCIsIHJlcXVlc3QpXHJcbiAgICAudGhlbigocmVzcG9uc2UpPT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigoZGF0YSk9PntcclxuICAgICAgICBpZihkYXRhKXtcclxuICAgICAgICAgICAgYWxlcnQoXCJBbm51bmNpbyBpbnNlcml0byFcIik7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiT3BzLCBxdWFsY29zYSDDqCBhbmRhdG8gc3RvcnRvIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVJbnNlcnRpb25QYWdlOyIsImltcG9ydCBkaXYgZnJvbSAnLi9mb290ZXIuaHRtbCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRm90KCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb290ZXJcIikuaW5uZXJIVE1MID0gZGl2O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGb3Q7IiwiaW1wb3J0IGdlc3Rpb25lVXRlbnRpIGZyb20gJy4vZ2VzdGlvbmVVdGVudGkuaHRtbCdcclxuaW1wb3J0IHVzZXJJbnQgZnJvbSAnLi4vaW50ZXJmYWNlcy91c2VyJztcclxuaW1wb3J0IHNob3dQcm9maWxlIGZyb20gJy4uL3Byb2ZpbG9VdGVudGUvcHJvZmlsZSc7XHJcblxyXG5sZXQgdXNlcnM6IHVzZXJJbnRbXSA9IFtdO1xyXG5sZXQgdmlldyA9IDU7XHJcblxyXG5mdW5jdGlvbiBzaG93VXNlcnMobnVtOiBudW1iZXIpIHtcclxuICAgIGxldCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyTGlzdFwiKTtcclxuICAgIGxpc3QuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gKG51bSAtIDEpICogdmlldzsgaSA8IG51bSAqIHZpZXc7IGkrKykge1xyXG4gICAgICAgIGlmIChpID49IHVzZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBsZXQgYnRuX3Byb2ZpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ0bl9wcm9maWxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnRuXCIpO1xyXG4gICAgICAgIGJ0bl9wcm9maWxlLm9uY2xpY2sgPSBzaG93UHJvZmlsZTtcclxuICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpc3QtZ3JvdXAtaXRlbScpO1xyXG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZSgnb25tb3VzZW92ZXInLCBcInNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGlzdC1ncm91cC1pdGVtIGFjdGl2ZScpXCIpO1xyXG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZSgnb25tb3VzZW91dCcsIFwic2V0QXR0cmlidXRlKCdjbGFzcycsICdsaXN0LWdyb3VwLWl0ZW0nKVwiKTtcclxuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmbG9hdC1lbmRcIik7XHJcbiAgICAgICAgbGV0IGJ0bl9iYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGxldCBidG5fYWRtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBidG5fYmFuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXCIpO1xyXG4gICAgICAgIGJ0bl9hZG0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtXCIpO1xyXG4gICAgICAgIGJ0bl9iYW4uaW5uZXJIVE1MID0gXCJCYW5uYVwiO1xyXG4gICAgICAgIGJ0bl9hZG0uaW5uZXJIVE1MID0gXCJSZW5kaSBBZG1pblwiO1xyXG4gICAgICAgIGJ0bl9iYW4ub25jbGljayA9ICgpID0+IHsga2lja0hpc0Fzc091dE9mVGhpc1NpdGUodXNlcnNbaV0udXNlcklkKX07XHJcbiAgICAgICAgYnRuX2FkbS5vbmNsaWNrID0gKCkgPT4geyBtYWtlSGltQWRtaW4odXNlcnNbaV0udXNlcklkKSB9O1xyXG4gICAgICAgIHNwYW4uYXBwZW5kKGJ0bl9hZG0sIGJ0bl9iYW4pO1xyXG4gICAgICAgIGJ0bl9wcm9maWxlLmlubmVySFRNTCA9IHVzZXJzW2ldLnVzZXJuYW1lICsgXCIgfCBcIiArIHVzZXJzW2ldLm5hbWUgKyBcIiBcIiArIHVzZXJzW2ldLnN1cm5hbWUgKyBcIiB8IFwiICsgdXNlcnNbaV0uZW1haWwgKyBcIiB8IFwiICsgdXNlcnNbaV0ucmF0aW5nICsgXCI8aSBjbGFzcz0nZmEtcmVndWxhciBmYS1zdGFyJz48L2k+XCI7XHJcbiAgICAgICAgbGkuYXBwZW5kKGJ0bl9wcm9maWxlLCBzcGFuKTtcclxuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxVc2VycygpOiB2b2lkIHtcclxuICAgIGZldGNoKFwiL3VzZXJcIilcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB1c2VycyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBlbGVtZW50IG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHVzZXJzLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3JlYXRlUGFnaW5hdGlvbigpO1xyXG4gICAgICAgICAgICBzaG93VXNlcnMoMSk7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbi8qXHJcbjxsaSBjbGFzcz1cInBhZ2UtaXRlbSBhY3RpdmVcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicGFnZS1saW5rXCI+MTwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cInBhZ2UtaXRlbVwiPjxhIGNsYXNzPVwicGFnZS1saW5rXCIgaHJlZj1cIiNcIj4yPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwicGFnZS1pdGVtXCI+PGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBocmVmPVwiI1wiPjM8L2E+PC9saT5cclxuKi9cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVBhZ2luYXRpb24oKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2luYXRpb25cIikuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGxldCBudW1iZXJPZlBhZ2VzID0gTWF0aC5jZWlsKHVzZXJzLmxlbmd0aCAvIHZpZXcpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJPZlBhZ2VzOyBpKyspIHtcclxuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbSBhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiLCBcInBhZ2VcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWl0ZW1cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtbGlua1wiKTtcclxuICAgICAgICBidG4ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGFsbExpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdpbmF0aW9uXCIpLmNoaWxkcmVuO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBvbmVMaSBvZiBhbGxMaSkge1xyXG4gICAgICAgICAgICAgICAgb25lTGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWl0ZW1cIik7XHJcbiAgICAgICAgICAgICAgICBvbmVMaS5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWl0ZW0gYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIiwgXCJwYWdlXCIpO1xyXG4gICAgICAgICAgICBzaG93VXNlcnMoaSArIDEpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgYnRuLmlubmVySFRNTCA9IFwiXCIgKyAoaSArIDEpO1xyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdpbmF0aW9uXCIpLmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlSGltQWRtaW4oaWQ6IG51bWJlcikge1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpZClcclxuICAgIH1cclxuICAgIGZldGNoKFwiL2FkbWluXCIsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpZClcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHsgY29uc29sZS5sb2coXCJhZG1pbiBjcmVhdG8/IFwiICsgZGF0YSk7IGdldEFsbFVzZXJzKCk7IH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBraWNrSGlzQXNzT3V0T2ZUaGlzU2l0ZShpZDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaWQpXHJcbiAgICB9XHJcbiAgICBmZXRjaChcIi91c2VyXCIsIHJlcXVlc3QpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHsgY29uc29sZS5sb2coXCJ1c2VyIGNhbmNlbGxhdG8/IFwiICsgZGF0YSk7IGdldEFsbFVzZXJzKCk7IH0pO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0QWxsVXNlcnM7IiwiaW1wb3J0IGhvbWUgZnJvbSAnLi9ob21lLmh0bWwnXHJcbmltcG9ydCB7aW5zZXJ0aW9ufSBmcm9tICcuLi9pbnRlcmZhY2VzL2luc2VydGlvbic7XHJcbmltcG9ydCBhbm51bmNpIGZyb20gJy4uL2FubnVuY2kvYW5udW5jaS5odG1sJztcclxuaW1wb3J0IGNyZWF0ZVBhZ2UsIHsgc2VhcmNoQnlUaXRsZSB9IGZyb20gXCIuLi9hbm51bmNpL2FubnVuY2lcIjtcclxuaW1wb3J0IHsgY3JlYXRlUGFnaW5hdGlvbiB9IGZyb20gJy4uL2FubnVuY2kvYW5udW5jaSc7XHJcbmltcG9ydCBjcmVhQW5udW5jaW8gZnJvbSAnLi4vY3JlYUFubnVuY2lvL2NyZWFBbm51bmNpby5odG1sJ1xyXG5pbXBvcnQgY3JlYXRlSW5zZXJ0aW9uUGFnZSBmcm9tIFwiLi4vY3JlYUFubnVuY2lvL2NyZWFBbm51bmNpb1wiO1xyXG5pbXBvcnQgZXhwYW5kSW5zZXJ0aW9uIGZyb20gJy4uL2FubnVuY2kvYW5udW5jaW8nO1xyXG5pbXBvcnQgYW5udW5jaW8gZnJvbSAnLi4vYW5udW5jaS9hbm51bmNpby5odG1sJztcclxuaW1wb3J0IHsgYXNzaWduRmlsdGVycyB9IGZyb20gJy4uL2FubnVuY2kvYW5udW5jaSdcclxuXHJcbmxldCBob21lTGlzdDogaW5zZXJ0aW9uW10gPSBbXTtcclxuXHJcblxyXG5leHBvcnQgIGZ1bmN0aW9uIGNyZWF0ZUhvbWUoKXtcclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuICAgIG1haW4uaW5uZXJIVE1MID0gaG9tZTtcclxuICAgXHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnRpb25zQ2FyZFwiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBhbm51bmNpO1xyXG4gICAgICAgIGNyZWF0ZVBhZ2UoKTtcclxuICAgIH07XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnRDYXJkXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGNyZWFBbm51bmNpbztcclxuICAgICAgICBjcmVhdGVJbnNlcnRpb25QYWdlKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQnV0dG9uVGl0bGVcIikub25jbGljayA9ICAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGtleXdvcmQgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hUaXRsZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgICAgICBpZihrZXl3b3JkICE9IFwiXCIpe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MID0gYW5udW5jaTtcclxuICAgICAgICAgICAgYXNzaWduRmlsdGVycygpXHJcbiAgICAgICAgICAgIHNlYXJjaEJ5VGl0bGUoa2V5d29yZCkgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFRpdGxlXCIpLm9ua2V5ZG93biA9IChlKSA9PiB7XHJcbiAgICAgICAgbGV0IGtleXdvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFRpdGxlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgaWYoZS5rZXkgPT0gXCJFbnRlclwiICYmIGtleXdvcmQudmFsdWUhPSBcIlwiKXtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGFubnVuY2k7XHJcbiAgICAgICAgICAgIGFzc2lnbkZpbHRlcnMoKVxyXG4gICAgICAgICAgICBzZWFyY2hCeVRpdGxlKGtleXdvcmQudmFsdWUpXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaG9tZUxpc3Q9W107XHJcbiAgICBmZXRjaCgnL2luc2VydGlvbicpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgZm9yKGxldCBkIG9mIGRhdGEpe1xyXG4gICAgICAgICAgICBob21lTGlzdC5wdXNoKGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjcmVhdGVJdGVtQ2Fyb3VzZWwoKTsgIFxyXG4gICAgfSlcclxuICAgIH1cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVJdGVtQ2Fyb3VzZWwoKXtcclxuXHJcbmZvcihsZXQgaSA9IGhvbWVMaXN0Lmxlbmd0aC0xOyBpID4gaG9tZUxpc3QubGVuZ3RoLTQgJiYgaSA+PSAwOyBpLS0pe1xyXG4gICAgbGV0IGNhcklubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lubmVyQ2Fyb3VzZWxIb21lJyk7XHJcbiAgICBsZXQgY2xDYXJvdXNlbEl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgaWYoaSA9PSAwKXtcclxuICAgICAgICBjbENhcm91c2VsSXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJvdXNlbC1pdGVtIGFjdGl2ZScpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgY2xDYXJvdXNlbEl0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2Fyb3VzZWwtaXRlbScpO1xyXG4gICAgICAgIH1cclxuICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGhvbWVMaXN0W2ldLnRyYWRlR2FtZS5jb3Zlci5saW5rKTtcclxuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ltZ0NhcmQnKTtcclxuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ210LTInKTtcclxuICAgIGxldCBjbENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNsQ2FyZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQgYmctc2Vjb25kYXJ5Jyk7XHJcbiAgICBjbENhcmQuc2V0QXR0cmlidXRlKCdpZCcsICdhbm5DYXJkJyk7XHJcbiAgICBsZXQgY2FyQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyQm9keS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQtYm9keScpO1xyXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcclxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZC10aXRsZSBib3JkZXItdG9wIGJvcmRlci0yIGJvcmRlci1pbmZvJyk7XHJcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBob21lTGlzdFtpXS50cmFkZUdhbWUubmFtZTtcclxuICAgIGxldCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgZGVzYy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQtdGV4dCcpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBob21lTGlzdFtpXS50cmFkZUdhbWUuZ2VucmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBkZXNjLmlubmVySFRNTCArPSBob21lTGlzdFtpXS50cmFkZUdhbWUuZ2VucmVbaV0uZ2VucmUgKyBcIiBcIlxyXG4gICAgfVxyXG4gICAgZGVzYy5pbm5lckhUTUwgKz0gXCI8YnI+XCJcclxuICAgICsgXCJBbm5vOiBcIiArIGhvbWVMaXN0W2ldLnRyYWRlR2FtZS55ZWFyICsgXCIgXCJcclxuICAgICsgXCJDb25zb2xlOiBcIiArIGhvbWVMaXN0W2ldLnRyYWRlR2FtZS5jb25zb2xlLmNvbnNvbGUgKyBcIjxicj5cIlxyXG4gICAgK1wiRGVzY3JpemlvbmU6XCI7XHJcbiAgICBsZXQgZ29Bbm4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBsZXQgaW1nR29Bbm4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGdvQW5uLnNldEF0dHJpYnV0ZSgnaHJlZicsIFwiI1wiKTtcclxuICAgIGltZ0dvQW5uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncC0wIGJ0biBkcm9wZG93bi10b2dnbGVcIiB0eXBlPVwiYnV0dG9uJyk7XHJcbiAgICBpbWdHb0Fubi5zcmMgPSBcIi4vaW1nL2J1dHRvbi9nb0J0bi5wbmdcIjtcclxuICAgIGdvQW5uLmFwcGVuZENoaWxkKGltZ0dvQW5uKTtcclxuICAgIGltZ0dvQW5uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYm9yZGVyOm5vbmU7ZmxvYXQ6Y2VudGVyO2ltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO3dpZHRoOiAxMCU7aGVpZ2h0OmF1dG87Jyk7XHJcbiAgICBnb0Fubi5hcHBlbmQoaW1nR29Bbm4pO1xyXG4gICAgZ29Bbm4ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpLmlubmVySFRNTCA9IGFubnVuY2lvO1xyXG4gICAgICAgIGV4cGFuZEluc2VydGlvbihob21lTGlzdFtpXSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FySW5uZXIuYXBwZW5kQ2hpbGQoY2xDYXJvdXNlbEl0KTtcclxuICAgICAgICAgICAgY2xDYXJvdXNlbEl0LmFwcGVuZENoaWxkKGNsQ2FyZCk7XHJcbiAgICAgICAgICAgICAgICBjbENhcmQuYXBwZW5kKGltZyk7XHJcbiAgICAgICAgICAgICAgICBjbENhcmQuYXBwZW5kKGNhckJvZHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhckJvZHkuYXBwZW5kKHRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXJCb2R5LmFwcGVuZChkZXNjKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXJCb2R5LmFwcGVuZChnb0Fubik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZTtcclxuXHJcbi8qXHJcbmFzeW5jIGZ1bmN0aW9uIGdldHRpdGxlKHRpdGxlOiBzdHJpbmcpOntcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goKVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG5cclxufVxyXG4qLyIsImltcG9ydCBtb2RhbCBmcm9tICcuL21vZGFsLmh0bWwnXHJcbmltcG9ydCBsb2dpbiBmcm9tICcuLi9sb2dpbi9sb2dpbi5odG1sJ1xyXG5pbXBvcnQgbG9naW5Gb290ZXIgZnJvbSAnLi4vbG9naW4vbG9naW5Gb290ZXIuaHRtbCdcclxuaW1wb3J0IHJlZ2lzdHJhemlvbmUgZnJvbSAnLi4vcmVnaXN0cmF6aW9uZS9yZWdpc3RyYXppb25lLmh0bWwnXHJcbmltcG9ydCByZWdGb290ZXIgZnJvbSAnLi4vcmVnaXN0cmF6aW9uZS9yZWdpc3RyYXppb25lRm9vdGVyLmh0bWwnXHJcbmltcG9ydCBsb2dvdXQgZnJvbSAnLi4vbG9nb3V0L2xvZ291dC5odG1sJ1xyXG5pbXBvcnQgcHJvZmlsZSBmcm9tICcuLi9wcm9maWxvVXRlbnRlL3Byb2ZpbGUuaHRtbCdcclxuaW1wb3J0ICogYXMgbmF2IGZyb20gXCIuLi9uYXZiYXIvbmF2YmFyXCJcclxuaW1wb3J0IGxvZ2dlZCBmcm9tICcuLi9pbnRlcmZhY2VzL2xvZ2dlZCdcclxuaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSAnLi4vaG9tZS9ob21lJ1xyXG5pbXBvcnQgeyBzZWFyY2hOb3RpZmljYXRpb24sIHN0b3BTZWFyY2hOb3RpZmljYXRpb24gfSBmcm9tICcuLi9jaGF0L2NoYXQnXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNb2RhbCgpIHtcclxuICAgIGxldCBkaXZNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXZNb2RhbC5pbm5lckhUTUwgPSBtb2RhbDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpLmFwcGVuZENoaWxkKGRpdk1vZGFsKTtcclxuICAgIHNob3dMb2dJbk1vZGFsKCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luXCIpLm9uY2xpY2sgPSBzaG93TG9nSW5Nb2RhbDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbk91dEJ1dHRvblwiKS5vbmNsaWNrID0gc2hvd0xvZ091dE1vZGFsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93U2lnblVwTW9kYWwoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxCb2R5XCIpLmlubmVySFRNTCA9IHJlZ2lzdHJhemlvbmU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxGb290ZXJcIikuaW5uZXJIVE1MID0gcmVnRm9vdGVyO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cnl0b1NpZ25VcFwiKS5vbmNsaWNrID0gdHJ5VG9TaWduVXA7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25VcExvZ2luXCIpLm9uY2xpY2sgPSBzaG93TG9nSW5Nb2RhbDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVNpZ25VcFwiKS5vbmtleXVwID0gdmFsaWRhdGVGb3JtO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdXJuYW1lU2lnblVwXCIpLm9ua2V5dXAgPSB2YWxpZGF0ZUZvcm07XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJuYW1lU2lnblVwXCIpLm9ua2V5dXAgPSB2YWxpZGF0ZUZvcm07XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsU2lnblVwXCIpLm9ua2V5dXAgPSB2YWxpZGF0ZUZvcm07XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkU2lnblVwXCIpLm9ua2V5dXAgPSB2YWxpZGF0ZUZvcm07XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbmZpcm1fcGFzc3dvcmRTaWduVXBcIikub25rZXl1cCA9IHZhbGlkYXRlRm9ybTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0xvZ0luTW9kYWwoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxCb2R5XCIpLmlubmVySFRNTCA9IGxvZ2luO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteU1vZGFsRm9vdGVyXCIpLmlubmVySFRNTCA9IGxvZ2luRm9vdGVyO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpblNpZ25VcFwiKS5vbmNsaWNrID0gc2hvd1NpZ25VcE1vZGFsO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cnlUb0xvZ1wiKS5vbmNsaWNrID0gdHJ5VG9Mb2dJbjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcm5hbWVTaWduSW5cIikub25rZXlkb3duID0gKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXkgPT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICB0cnlUb0xvZ0luKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzd29yZFNpZ25JblwiKS5vbmtleWRvd24gPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIHRyeVRvTG9nSW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNob3dMb2dPdXRNb2RhbCgpIHtcclxuICAgIGxldCByZXN1bHQ6IGJvb2xlYW4gPSBhd2FpdCB0cnlUb0xvZ091dCgpO1xyXG4gICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbEJvZHlcIikuaW5uZXJIVE1MID0gbG9nb3V0O1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbEZvb3RlclwiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGNyZWF0ZUhvbWUoKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdHJ5VG9TaWduVXAoKSB7XHJcbiAgICBjb25zdCB1c2VyID0ge1xyXG4gICAgICAgIHVzZXJuYW1lOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VybmFtZVNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSxcclxuICAgICAgICBwYXNzd29yZDogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmRTaWduVXBcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcbiAgICAgICAgbmFtZTogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSxcclxuICAgICAgICBzdXJuYW1lOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdXJuYW1lU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLFxyXG4gICAgICAgIGVtYWlsOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXF1ZXN0ID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlcilcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaChcIi91c2VyXCIsIHJlcXVlc3QpLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25VcFJlc3VsdFwiKS5pbm5lckhUTUwgPSBcIlJlZ2lzdHJhdG8gY29uIHN1Y2Nlc3NvIVwiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyeXRvU2lnblVwXCIpLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25VcFJlc3VsdFwiKS5pbm5lckhUTUwgPSBcIk9wcywgcXVhbGNvc2Egw6ggYW5kYXRvIHN0b3J0byFcIjtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cnl0b1NpZ25VcFwiKS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRyeVRvTG9nSW4oKSB7XHJcbiAgICBjb25zdCBsb2dpbiA9IHtcclxuICAgICAgICB1c2VybmFtZTogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcm5hbWVTaWduSW5cIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkU2lnbkluXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGxvZ2luKVxyXG4gICAgfTtcclxuICAgIGxldCByZXN1bHQ6IGFueSA9IGZldGNoKFwiL2xvZ2luXCIsIHJlcXVlc3QpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEubG9nZ2VkKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luUmVzdWx0XCIpLmlubmVySFRNTCA9IFwiTG9nZ2F0byBjb24gc3VjY2Vzc28hXCI7XHJcbiAgICAgICAgICAgICAgICBuYXYuc2V0TmF2KGRhdGEuYWNjb3VudFR5cGUpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cnlUb0xvZ1wiKS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luU2lnblVwXCIpLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUhvbWUoKTtcclxuICAgICAgICAgICAgICAgIHNlYXJjaE5vdGlmaWNhdGlvbigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpblJlc3VsdFwiKS5pbm5lckhUTUwgPSBcIk9wcywgcXVhbGNvc2Egw6ggYW5kYXRvIHN0b3J0b1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHRyeVRvTG9nT3V0KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgc3RvcFNlYXJjaE5vdGlmaWNhdGlvbigpO1xyXG4gICAgbGV0IHByb21pc2VSZXN1bHQgPSBmZXRjaChcIi9sb2dvdXRcIilcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgbmF2LnNldE5hdihcIkdVRVNUXCIpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cnlUb0xvZ1wiKS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5TaWduVXBcIikucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGRhdGFcclxuICAgICAgICB9KTtcclxuICAgIHJldHVybiBwcm9taXNlUmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUZvcm0oKSB7XHJcbiAgICBsZXQgdXNlcm5hbWUgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VybmFtZVNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgIGxldCBwYXNzd29yZCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgbGV0IG5hbWUgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgbGV0IHN1cm5hbWUgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdXJuYW1lU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgbGV0IGVtYWlsID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxTaWduVXBcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICBsZXQgY29uZmlybV9wYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uZmlybV9wYXNzd29yZFNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uZmlybV9wYXNzd29yZC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIlwiKTtcclxuXHJcbiAgICBpZiAodXNlcm5hbWUgPT0gXCJcIiB8fCBwYXNzd29yZCA9PSBcIlwiIHx8IG5hbWUgPT0gXCJcIiB8fCBzdXJuYW1lID09IFwiXCIgfHwgZW1haWwgPT0gXCJcIikge1xyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyeXRvU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBpZiAocGFzc3dvcmQgIT0gY29uZmlybV9wYXNzd29yZC52YWx1ZSkge1xyXG4gICAgICAgICAgICBjb25maXJtX3Bhc3N3b3JkLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYm9yZGVyLWNvbG9yOiByZWQ7XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbmZpcm1fcGFzc3dvcmQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJib3JkZXItY29sb3I6IGdyZWVuO1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChwYXNzd29yZCAhPSBjb25maXJtX3Bhc3N3b3JkLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbmZpcm1fcGFzc3dvcmQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJib3JkZXItY29sb3I6IHJlZDtcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uZmlybV9wYXNzd29yZC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJvcmRlci1jb2xvcjogZ3JlZW47XCIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyeXRvU2lnblVwXCIpLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTW9kYWw7IiwiaW1wb3J0IG5hdiBmcm9tIFwiLi9uYXZiYXIuaHRtbFwiO1xyXG5pbXBvcnQgY3JlYXRlTW9kYWwgZnJvbSBcIi4uL21vZGFsL21vZGFsXCI7XHJcbmltcG9ydCBhbm51bmNpIGZyb20gXCIuLi9hbm51bmNpL2FubnVuY2kuaHRtbFwiO1xyXG5pbXBvcnQgZ2VzdGlvbmVhbm51bmNpIGZyb20gXCIuLi9hbm51bmNpL2dlc3Rpb25lYW5udW5jaS5odG1sXCI7XHJcbmltcG9ydCBjcmVhdGVQYWdlIGZyb20gXCIuLi9hbm51bmNpL2FubnVuY2lcIjtcclxuaW1wb3J0IGhvbWUgZnJvbSBcIi4uL2hvbWUvaG9tZS5odG1sXCI7XHJcbmltcG9ydCBjcmVhdGVJdGVtQ2Fyb3VzZWwgZnJvbSBcIi4uL2hvbWUvaG9tZVwiXHJcbmltcG9ydCBjcmVhdGVIb21lIGZyb20gXCIuLi9ob21lL2hvbWVcIjtcclxuaW1wb3J0IHByb2ZpbGUgZnJvbSBcIi4uL3Byb2ZpbG9VdGVudGUvcHJvZmlsZS5odG1sXCI7XHJcbmltcG9ydCBzaG93UHJvZmlsZSBmcm9tIFwiLi4vcHJvZmlsb1V0ZW50ZS9wcm9maWxlXCI7XHJcbmltcG9ydCBnZXN0aW9uZVV0ZW50aSBmcm9tIFwiLi4vZ2VzdGlvbmVVdGVudGkvZ2VzdGlvbmVVdGVudGkuaHRtbFwiO1xyXG5pbXBvcnQgZ2V0QWxsVXNlcnMgZnJvbSBcIi4uL2dlc3Rpb25lVXRlbnRpL2dlc3Rpb25lVXRlbnRpXCI7XHJcbmltcG9ydCBjcmVhdGVQYWdlMiBmcm9tIFwiLi4vYW5udW5jaS9nZXN0aW9uZWFubnVuY2lcIjtcclxuaW1wb3J0IGNyZWFBbm51bmNpbyBmcm9tIFwiLi4vY3JlYUFubnVuY2lvL2NyZWFBbm51bmNpby5odG1sXCJcclxuaW1wb3J0IHZpZGVvZ2lvY2hpIGZyb20gXCIuLi92aWRlb2dpb2NoaS92aWRlb2dpb2NoaS5odG1sXCJcclxuaW1wb3J0IGNyZWF0ZUluc2VydGlvblBhZ2UgZnJvbSBcIi4uL2NyZWFBbm51bmNpby9jcmVhQW5udW5jaW9cIlxyXG5pbXBvcnQgY3JlYXRlR2FtZVBhZ2UgZnJvbSBcIi4uL3ZpZGVvZ2lvY2hpL3ZpZGVvZ2lvY2hpXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xyXG4gICAgXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKS5pbm5lckhUTUwgPSBuYXY7XHJcbiAgICBjcmVhdGVNb2RhbCgpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dvXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgY3JlYXRlSG9tZSgpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lc1wiKS5vbmNsaWNrPSgpPT57XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUw9dmlkZW9naW9jaGk7IFxyXG4gICAgICBjcmVhdGVHYW1lUGFnZSgpOyBcclxuICAgIH07XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnRpb25zXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGFubnVuY2k7XHJcbiAgICAgICAgY3JlYXRlUGFnZSgpO1xyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkSW5zZXJ0aW9uXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGNyZWFBbm51bmNpbztcclxuICAgICAgICBjcmVhdGVJbnNlcnRpb25QYWdlKCk7XHJcbiAgICB9O1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNNYW5hZ2VtZW50XCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGdlc3Rpb25lYW5udW5jaTtcclxuICAgICAgICBjcmVhdGVQYWdlMigpO1xyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFuYWdlbWVudFwiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBnZXN0aW9uZVV0ZW50aTtcclxuICAgICAgICBnZXRBbGxVc2VycygpO1xyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZmlsZVwiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBwcm9maWxlO1xyXG4gICAgICAgIHNob3dQcm9maWxlKCk7XHJcbiAgICB9O1xyXG4gICAgZmV0Y2goXCIvd2hvSXNMb2dnZWRcIilcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgc2V0TmF2KGRhdGEpO1xyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldE5hdihhY2NvdW50VHlwZSA6IHN0cmluZykge1xyXG4gICAgY29uc3QgYnRuX2dlc3RVdGVudGkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hbmFnZW1lbnRcIik7XHJcbiAgICBjb25zdCBidG5faW5zTWFuYWdlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zTWFuYWdlbWVudFwiKTtcclxuICAgIGNvbnN0IGJ0bl9sb2dpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5cIik7XHJcbiAgICBjb25zdCBidG5fc2lnbk91dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbk91dEJ1dHRvblwiKTtcclxuICAgIGNvbnN0IGJ0bl9hZGRJbnNlcnRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEluc2VydGlvblwiKTtcclxuICAgIGNvbnN0IGJ1dHRvbl9wcm9maWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9maWxlXCIpO1xyXG4gICAgaWYoYWNjb3VudFR5cGU9PVwiQURNSU5cIil7XHJcbiAgICAgICAgYnRuX2dlc3RVdGVudGkucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGJ0bl9hZGRJbnNlcnRpb24uc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICBidG5faW5zTWFuYWdlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgYnRuX2xvZ2luLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgYnRuX3NpZ25PdXRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGJ1dHRvbl9wcm9maWxlLnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKVxyXG4gICAgfWVsc2UgaWYoYWNjb3VudFR5cGU9PVwiVVNFUlwiKXtcclxuICAgICAgICBidG5fZ2VzdFV0ZW50aS5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIGJ0bl9hZGRJbnNlcnRpb24ucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGJ0bl9pbnNNYW5hZ2VtZW50LnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgYnRuX2xvZ2luLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgYnRuX3NpZ25PdXRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGJ1dHRvbl9wcm9maWxlLnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgYnRuX2dlc3RVdGVudGkuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICBidG5fYWRkSW5zZXJ0aW9uLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgYnRuX2luc01hbmFnZW1lbnQuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICBidG5fbG9naW4ucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGJ0bl9zaWduT3V0QnV0dG9uLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgYnV0dG9uX3Byb2ZpbGUuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVOYXY7XHJcbiIsImltcG9ydCBwcm9maWxlIGZyb20gJy4vcHJvZmlsZS5odG1sJ1xyXG5cclxuXHJcbmxldCB0eXBlO1xyXG5sZXQgdXNlckluZm87XHJcbmxldCBhZG1pbkluZm87XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1Byb2ZpbGUoKXsgICBcclxuICAgIGZldGNoKFwiL3dob0lzTG9nZ2VkXCIpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEgPT0gXCJBRE1JTlwiKSB7XHJcbiAgICAgICAgICAgIHR5cGUgPSBcIkFETUlOXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhID09IFwiVVNFUlwiKSB7XHJcbiAgICAgICAgICAgIHR5cGUgPSBcIlVTRVJcIlxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHR5cGUgPSBcIkdVRVNUXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xyXG4gICAgICAgIG1haW4uaW5uZXJIVE1MID0gcHJvZmlsZTtcclxuICAgICAgICBjcmVhdGVQcm9maWxlKHR5cGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2lhbyBkYSBzaG93XCIpXHJcbiAgICB9KVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvZmlsZSh0eXBlOnN0cmluZyl7XHJcblxyXG4gICAgaWYgKHR5cGUgPT0gXCJBRE1JTlwiKSB7XHJcbiAgICAgICAgc2hvd0FkbWluUHJvZmlsZSgpO1xyXG5cclxuICAgIH0gZWxzZSBpZih0eXBlID09IFwiVVNFUlwiKSB7XHJcbiAgICAgICAgc2hvd1VzZXJQcm9maWxlKCk7XHJcbiAgICB9ZWxzZXtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93QWRtaW5Qcm9maWxlKCl7XHJcblxyXG4gICAgZmV0Y2goXCIvYWRtaW5JbmZvXCIpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgYWRtaW5JbmZvPWRhdGE7XHJcbiAgICAgICAgbGV0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVwcm9maWxlXCIpO1xyXG4gICAgICAgIGgxLmlubmVySFRNTD1cIkJFTlRPUk5BVE8gQU1NSU5JU1RSQVRPUkUgXCIrYWRtaW5JbmZvLnVzZXJuYW1lO1xyXG4gICAgICAgIHRpdGxlLmFwcGVuZChoMSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHlwcm9maWxlXCIpO1xyXG4gICAgICAgIGxldCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICBoMi5pbm5lckhUTUw9XHJcbiAgICAgICAgIFwiIDxicj48YnI+PGJyPiA8Yj48L2I+XCIrYWRtaW5JbmZvLnVzZXJuYW1lIFxyXG4gICAgICAgICsgXCIgPGJyPjxicj4gPGI+PC9iPlwiK2FkbWluSW5mby5lbWFpbCBcclxuICAgICAgICArIFwiIDxicj48YnI+IDxiPjwvYj5cIithZG1pbkluZm8ubmFtZVxyXG4gICAgICAgICsgXCIgPGJyPjxicj4gPGI+PC9iPlwiK2FkbWluSW5mby5zdXJuYW1lXHJcbiAgICAgICAgYm9keS5hcHBlbmQoaDIpXHJcblxyXG4gICAgICAgIGxldCBidXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b25zLXByb2ZpbGVcIik7XHJcbiAgICAgICAgbGV0IGJ0bjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ0bjEuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcImJ0biBidG4tcHJpbWFyeSBteS0xXCIpO1xyXG4gICAgICAgIGJ0bjEub25jbGljaz0oKT0+e1xyXG4gICAgICAgICAgICBsZXQgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgJ3VzZXJuYW1lJyA6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJuYW1lXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgJ2VtYWlsJyA6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmZXRjaChcIi9hZG1pbi9pbmZvXCIsIHJlcXVlc3QpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSk9PnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpPT4gXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcm5hbWVcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU9XCJcIjtcclxuICAgICAgICAgICAgICAgIHNob3dQcm9maWxlKClcclxuICAgICAgICAgICAgfSkgICAgICAgICAgIFxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgYnRuMS5pbm5lckhUTUw9XCJDYW1iaWEgVXNlcm5hbWVcIlxyXG4gICAgICAgIGJ1dHRvbnMuYXBwZW5kKGJ0bjEpXHJcblxyXG4gICAgICAgIGxldCBidXR0b25FbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9ucy1wcm9maWxlXCIpO1xyXG4gICAgICAgIGxldCBidG4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBidG4yLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJidG4gYnRuLXByaW1hcnkgICBteS00XCIpO1xyXG4gICAgICAgIGJ0bjIub25jbGljaz0oKT0+e1xyXG4gICAgICAgICAgICBsZXQgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgJ3VzZXJuYW1lJyA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAnZW1haWwnIDogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmZXRjaChcIi9hZG1pbi9pbmZvXCIsIHJlcXVlc3QpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSk9PnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpPT4gXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU9XCJcIjtcclxuICAgICAgICAgICAgICAgIHNob3dQcm9maWxlKClcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBidG4yLmlubmVySFRNTD1cIkNhbWJpYSBFbWFpbFwiXHJcbiAgICAgICAgYnV0dG9ucy5hcHBlbmQoYnRuMik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGNwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcFwiKTtcclxuICAgICAgICBsZXQgYnRuMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnRuMy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ0biBidG4tcHJpbWFyeVwiKVxyXG4gICAgICAgIGJ0bjMuaW5uZXJIVE1MPVwiQ2FtYmlhIFBhc3N3b3JkXCJcclxuICAgICAgICBidG4zLm9uY2xpY2s9ICgpPT57XHJcbiAgICAgICAgICAgIGxldCBvYmogPSB7XHJcbiAgICAgICAgICAgICAgICAnb2xkUGFzc3dvcmQnIDogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2xkUGFzc3dvcmRcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAnbmV3UGFzc3dvcmQnIDogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UGFzc3dvcmRcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmZXRjaChcIi9hZG1pbi9wc3dcIiwgcmVxdWVzdClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKT0+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSk9PiBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvbGRQYXNzd29yZFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZT1cIlwiOyAgICAgIFxyXG4gICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UGFzc3dvcmRcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU9XCJcIjsgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjcC5hcHBlbmQoYnRuMyk7XHJcblxyXG4gICAgfSlcclxuICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dVc2VyUHJvZmlsZSgpe1xyXG4gICAgZmV0Y2goXCIvdXNlckluZm9cIilcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICB1c2VySW5mbz1kYXRhO1xyXG4gICAgICAgIGxldCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlcHJvZmlsZVwiKTtcclxuICAgICAgICBoMS5pbm5lckhUTUw9XCJCRU5UT1JOQVRPIFVURU5URSBcIisgdXNlckluZm8udXNlcm5hbWUgKyBcIiBcIisgdXNlckluZm8ucmF0aW5nICtcIiA8aSBjbGFzcz0nZmEtcmVndWxhciBmYS1zdGFyJz48L2k+XCI7XHJcbiAgICAgICAgdGl0bGUuYXBwZW5kKGgxKTtcclxuICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keXByb2ZpbGVcIik7XHJcbiAgICAgICAgbGV0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICAgIGgyLmlubmVySFRNTD1cclxuICAgICAgICBcIiA8YnI+PGJyPjxicj4gPGI+PC9iPlwiK3VzZXJJbmZvLnVzZXJuYW1lIFxyXG4gICAgICAgICsgXCIgPGJyPjxicj4gPGI+PC9iPlwiK3VzZXJJbmZvLmVtYWlsIFxyXG4gICAgICAgICsgXCIgPGJyPjxicj48Yj48L2I+XCIrdXNlckluZm8ubmFtZVxyXG4gICAgICAgICsgXCIgPGJyPjxicj4gPGI+PC9iPlwiK3VzZXJJbmZvLnN1cm5hbWVcclxuICAgICAgICBib2R5LmFwcGVuZChoMilcclxuXHJcbiAgICAgICAgbGV0IGJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbnMtcHJvZmlsZVwiKTtcclxuICAgICAgICBsZXQgYnRuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnRuMS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwiYnRuIGJ0bi1wcmltYXJ5IG15LTFcIik7XHJcbiAgICAgICAgYnRuMS5vbmNsaWNrPSgpPT57XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgJ3VzZXJuYW1lJyA6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJuYW1lXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgJ2VtYWlsJyA6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmZXRjaChcIi91c2VyL2luZm9cIiwgcmVxdWVzdClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKT0+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSk9PiBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VybmFtZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZT1cIlwiO1xyXG4gICAgICAgICAgICAgICAgc2hvd1Byb2ZpbGUoKVxyXG4gICAgICAgICAgICB9KSAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidG4xLmlubmVySFRNTD1cIkNhbWJpYSBVc2VybmFtZVwiXHJcbiAgICAgICAgYnV0dG9ucy5hcHBlbmQoYnRuMSlcclxuXHJcbiAgICAgICAgbGV0IGJ1dHRvbkVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b25zLXByb2ZpbGVcIik7XHJcbiAgICAgICAgbGV0IGJ0bjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ0bjIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcImJ0biBidG4tcHJpbWFyeSAgIG15LTRcIik7XHJcbiAgICAgICAgYnRuMi5vbmNsaWNrPSgpPT57XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgJ3VzZXJuYW1lJyA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAnZW1haWwnIDogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmZXRjaChcIi91c2VyL2luZm9cIiwgcmVxdWVzdClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKT0+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSk9PiBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZT1cIlwiO1xyXG4gICAgICAgICAgICAgICAgIHNob3dQcm9maWxlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ0bjIuaW5uZXJIVE1MPVwiQ2FtYmlhIEVtYWlsXCJcclxuICAgICAgICBidXR0b25zLmFwcGVuZChidG4yKTtcclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgIFxyXG4gICAgbGV0IGNwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcFwiKTtcclxuICAgIGxldCBidG4zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGJ0bjMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG4gYnRuLXByaW1hcnlcIilcclxuICAgIGJ0bjMuaW5uZXJIVE1MPVwiQ2FtYmlhIFBhc3N3b3JkXCJcclxuICAgIGJ0bjMub25jbGljaz0gKCk9PntcclxuICAgICAgICBsZXQgb2JqID0ge1xyXG4gICAgICAgICAgICAnb2xkUGFzc3dvcmQnIDogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2xkUGFzc3dvcmRcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcbiAgICAgICAgICAgICduZXdQYXNzd29yZCcgOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQYXNzd29yZFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBsZXQgcmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZmV0Y2goXCIvdXNlci9wc3dcIiwgcmVxdWVzdClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpPT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpPT4gXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2xkUGFzc3dvcmRcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU9XCJcIjsgICAgICBcclxuICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UGFzc3dvcmRcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU9XCJcIjsgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNwLmFwcGVuZChidG4zKTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hvd1Byb2ZpbGU7IiwiaW1wb3J0IGNyZWFWaWRlb2dpb2NvIGZyb20gXCIuL2NyZWFWaWRlb2dpb2NvLmh0bWxcIlxyXG5cclxubGV0IHJhZGlvOiBzdHJpbmc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVmlkZW9HYW1lUGFnZSgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBjcmVhVmlkZW9naW9jbztcclxuICAgIGdlbmVyYXRlR2VucmVMaXN0KCk7XHJcbiAgICBnZW5lcmF0ZUNvbnNvbGVMaXN0KCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0dlbnJlQnRuXCIpLm9uY2xpY2sgPSBjcmVhdGVHZW5yZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3Q29uc29sZUJ0blwiKS5vbmNsaWNrID0gY3JlYXRlQ29uc29sZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3VmlkZW9HYW1lQnRuXCIpLm9uY2xpY2sgPSBjcmVhdGVWaWRlb0dhbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlR2VucmVMaXN0KCkge1xyXG4gICAgbGV0IGdlbnJlTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2VucmVMaXN0XCIpO1xyXG4gICAgZ2VucmVMaXN0LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBmZXRjaChcIi9nZW5yZVwiKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJvbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYlwiKTtcclxuICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIik7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImdlbnJlXCIraSk7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm0tY2hlY2staW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBkYXRhW2ldLmdlbnJlKTtcclxuICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybS1jaGVjay1sYWJlbFwiKTtcclxuICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImdlbnJlXCIraSk7XHJcbiAgICAgICAgICAgICAgICBib2xkLmlubmVySFRNTD1cIlwiK2RhdGFbaV0uZ2VucmU7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5hcHBlbmQoYm9sZCk7XHJcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kKGlucHV0LCBsYWJlbCk7XHJcbiAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgbGV0IHNuaXBwZXQgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0IGdlbnJlc2NoZWNrXCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJnZW5yZSR7aX1cIiB2YWx1ZT1cIiR7ZGF0YVtpXS5nZW5yZX1cIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJnZW5yZSR7aX1cIj48Yj4ke2RhdGFbaV0uZ2VucmV9PC9iPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgICAgICAgIGdlbnJlTGlzdC5pbm5lckhUTUwgKz0gc25pcHBldDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQ29uc29sZUxpc3QoKSB7XHJcbiAgICBsZXQgY29uc29sZUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnNvbGVMaXN0XCIpO1xyXG4gICAgY29uc29sZUxpc3QuaW5uZXJIVE1MID0gXCI8YnI+PGJyPlwiO1xyXG4gICAgZmV0Y2goXCIvY29uc29sZVwiKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJvbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29uc29sZVwiICsgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImNvbnNvbGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb3JtLWNoZWNrLWlucHV0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBkYXRhW2ldLmNvbnNvbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0Lm9uY2xpY2sgPSAoKT0+eyBzZXRSYWRpbyhkYXRhW2ldLmNvbnNvbGUpfTtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm0tY2hlY2stbGFiZWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiY29uc29sZVwiICsgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9sZC5pbm5lckhUTUwgPSBcIlwiICsgZGF0YVtpXS5jb25zb2xlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLmFwcGVuZChib2xkKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXYuYXBwZW5kKGlucHV0LCBsYWJlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZUxpc3QuYXBwZW5kKGRpdik7XHJcbiAgICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmlyc3RTbmlwcGV0PWBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cInJhZGlvXCIgaWQ9XCJjb25zb2xlJHtpfVwiIG5hbWU9XCJjb25zb2xlXCIgdmFsdWU9XCIke2RhdGFbaV0uY29uc29sZX1cIiBvbmNsaWNrPVwiKCk9Pnsgc2V0UmFkaW8oJHtkYXRhW2ldLmNvbnNvbGV9KX1cIiBjaGVja2VkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiY29uc29sZSR7aX1cIj48Yj4ke2RhdGFbaV0uY29uc29sZX08L2I+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZUxpc3QuaW5uZXJIVE1MICs9IGZpcnN0U25pcHBldDtcclxuICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBib2xkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnNvbGVcIiArIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJjb25zb2xlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybS1jaGVjay1pbnB1dFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgZGF0YVtpXS5jb25zb2xlKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5vbmNsaWNrID0gKCk9Pnsgc2V0UmFkaW8oZGF0YVtpXS5jb25zb2xlKX07XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb3JtLWNoZWNrLWxhYmVsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImNvbnNvbGVcIiArIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvbGQuaW5uZXJIVE1MID0gXCJcIiArIGRhdGFbaV0uY29uc29sZTtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5hcHBlbmQoYm9sZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2LmFwcGVuZChpbnB1dCwgbGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGVMaXN0LmFwcGVuZChkaXYpO1xyXG4gICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc25pcHBldCA9IGBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cInJhZGlvXCIgaWQ9XCJjb25zb2xlJHtpfVwiIG5hbWU9XCJjb25zb2xlXCIgdmFsdWU9XCIke2RhdGFbaV0uY29uc29sZX1cIiBvbmNsaWNrPVwiKCk9Pnsgc2V0UmFkaW8oJHtkYXRhW2ldLmNvbnNvbGV9KX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImNvbnNvbGUke2l9XCI+PGI+JHtkYXRhW2ldLmNvbnNvbGV9PC9iPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGVMaXN0LmlubmVySFRNTCArPSBzbmlwcGV0O1xyXG4gICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVHZW5yZSgpIHtcclxuICAgIGxldCBuZXdHZW5yZSA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0dlbnJlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgbGV0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3R2VucmUpXHJcbiAgICB9XHJcbiAgICBmZXRjaChcIi9nZW5yZVwiLCByZXF1ZXN0KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdHZW5yZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZUdlbnJlTGlzdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbnNvbGUoKSB7XHJcbiAgICBsZXQgbmV3Q29uc29sZSA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0NvbnNvbGVcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICBsZXQgcmVxdWVzdCA9IHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdDb25zb2xlKVxyXG4gICAgfVxyXG4gICAgZmV0Y2goXCIvY29uc29sZVwiLCByZXF1ZXN0KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdDb25zb2xlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGdlbmVyYXRlQ29uc29sZUxpc3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVZpZGVvR2FtZSgpIHtcclxuXHJcbiAgICBsZXQgZ2VucmVzID0gKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJnZW5yZXNjaGVja1wiKSBhcyBIVE1MQ29sbGVjdGlvbk9mPEhUTUxJbnB1dEVsZW1lbnQ+KTtcclxuICAgIGxldCBjaGVja2VkR2VucmVzICA9IFtdO1xyXG4gICAgZm9yIChsZXQgZ2VucmUgb2YgZ2VucmVzKSB7XHJcbiAgICAgICAgaWYgKGdlbnJlLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgY2hlY2tlZEdlbnJlcy5wdXNoKGdlbnJlLnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG5ld1ZpZGVvZ2FtZSA9IHtcclxuICAgICAgICBuYW1lOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJWR25hbWVcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcbiAgICAgICAgZ2VucmU6IGNoZWNrZWRHZW5yZXMsXHJcbiAgICAgICAgeWVhcjogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiVkd5ZWFyXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLFxyXG4gICAgICAgIGNvbnNvbGU6IHJhZGlvLFxyXG4gICAgICAgIGNvdmVyOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJWR2NvdmVyXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCByZXF1ZXN0ID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld1ZpZGVvZ2FtZSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgZmV0Y2goXCIvdmlkZW9nYW1lc1wiLCByZXF1ZXN0KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKT0+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgaWYoZGF0YSl7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwidmlkZW9naW9jbyBpbnNlcml0b1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFJhZGlvKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHJhZGlvID0gdmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVZpZGVvR2FtZVBhZ2VcclxuXHJcblxyXG4iLCJpbXBvcnQgeyBkYXRhIH0gZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQgZ2VucmUgZnJvbSBcIi4uL2ludGVyZmFjZXMvZ2VucmVcIjtcclxuaW1wb3J0IHZpZGVvZ2FtZSBmcm9tIFwiLi4vaW50ZXJmYWNlcy92aWRlb2dhbWVcIjtcclxuaW1wb3J0IGNyZWF0ZVZpZGVvR2FtZVBhZ2UgZnJvbSBcIi4vY3JlYVZpZGVvZ2lvY2hpXCI7XHJcbmltcG9ydCBjcmVhdGVHYW1lVmlzdWFsaXphdGlvbiBmcm9tIFwiLi92aXN1YWxpenphVmlkZW9naW9jb1wiXHJcblxyXG5sZXQgZ2FtZUxpc3Q6IHZpZGVvZ2FtZVtdID0gW107XHJcbmxldCBnYW1lRmlsdGVyZWRMaXN0OiB2aWRlb2dhbWVbXSA9IFtdXHJcbmxldCBnZW5yZXM6IHN0cmluZ1tdID0gW11cclxubGV0IHllYXJzOiBudW1iZXJbXSA9IFtdXHJcbmxldCBnYW1lVmlldzogbnVtYmVyID0gNjtcclxubGV0IHR5cGU6IHN0cmluZztcclxubGV0IGNvbnNvbGxlczogc3RyaW5nW107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR2FtZVBhZ2UoKSB7XHJcbiAgICBmZXRjaChcIi93aG9Jc0xvZ2dlZFwiKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhID09IFwiQURNSU5cIikge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRWaWRlb2dhbWVcIikucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRWaWRlb2dhbWVcIikub25jbGljayA9IGNyZWF0ZVZpZGVvR2FtZVBhZ2U7XHJcbiAgICAgICAgICAgICAgICB0eXBlID0gXCJBRE1JTlwiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEgPT0gXCJVU0VSXCIpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVmlkZW9nYW1lXCIpLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgICAgICB0eXBlID0gXCJVU0VSXCJcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVmlkZW9nYW1lXCIpLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgICAgICB0eXBlID0gXCJHVUVTVFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmV0Y2goXCIvdmlkZW9nYW1lc1wiKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiAocmVzcG9uc2UuanNvbigpKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUxpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBnYW1lIG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZUxpc3QucHVzaChnYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlR2FtZVBhZ2luYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBzaG93R2FtZXMoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzaWduR2FtZUZpbHRlcnMoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRBbGxHYW1lcygpIHtcclxuXHJcbiAgICBmZXRjaChcIi92aWRlb2dhbWVzXCIpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiAocmVzcG9uc2UuanNvbigpKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBnYW1lTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBnYW1lIG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGdhbWVMaXN0LnB1c2goZ2FtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNob3dHYW1lcyhpOiBudW1iZXIpIHtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJWaWRlb2dhbWVDb250ZW50XCIpO1xyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbGV0IHN0YXJ0ID0gKGkgLSAxKSAqIGdhbWVWaWV3O1xyXG4gICAgbGV0IHN0b3AgPSAoaSAqIGdhbWVWaWV3KSAtIDE7XHJcbiAgICBmb3IgKHN0YXJ0OyBzdGFydCA8PSBzdG9wOyBzdGFydCsrKSB7XHJcbiAgICAgICAgaWYgKHN0YXJ0ID49IGdhbWVMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29sLTQgdGV4dC1jZW50ZXJcIik7XHJcbiAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpXCIpO1xyXG4gICAgICAgIGNvbC5vbm1vdXNlb3ZlciA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb2wub25tb3VzZW91dCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpXCIpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICBsZXQgZ2FtZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgICAgIGdhbWVUaXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJnLWxpZ2h0IGJvcmRlci10b3AgYm9yZGVyLXJvdW5kZWQgYm9yZGVyLTIgYm9yZGVyLXByaW1hcnkgbXktNFwiKVxyXG4gICAgICAgIGxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gZ2FtZUxpc3Rbc3RhcnRdLmNvdmVyLmxpbms7XHJcbiAgICAgICAgaW1hZ2Uud2lkdGggPSAyMDA7XHJcbiAgICAgICAgaW1hZ2UuaGVpZ2h0ID0gMjAwO1xyXG4gICAgICAgIGxldCBnYW1lID0gZ2FtZUxpc3Rbc3RhcnRdXHJcbiAgICAgICAgaW1hZ2Uub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgY3JlYXRlR2FtZVZpc3VhbGl6YXRpb24oZ2FtZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2FtZVRpdGxlLmlubmVySFRNTCA9IFwiPGI+XCIgKyBnYW1lTGlzdFtzdGFydF0ubmFtZSArIFwiPC9iPlwiO1xyXG5cclxuICAgICAgICBjb2wuYXBwZW5kKGdhbWVUaXRsZSwgaW1hZ2UpO1xyXG4gICAgICAgIGxldCBkaXZCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgICAgICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgbGV0IGltZ0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcblxyXG4gICAgICAgIGxldCBpZCA9IGdhbWVMaXN0W3N0YXJ0XS5pZFxyXG4gICAgICAgIGlmICh0eXBlID09IFwiVVNFUlwiKSB7XHJcbiAgICAgICAgICAgIGltZ0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL2ltZy9idXR0b24vYWRkQnRuLnBuZ1wiKTtcclxuICAgICAgICAgICAgaW1nQnV0dG9uLmhlaWdodCA9IDM1O1xyXG4gICAgICAgICAgICBpbWdCdXR0b24uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZDtcIik7XHJcbiAgICAgICAgICAgIGltZ0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3AtMCBteS0zIG14LWF1dG8nKVxyXG4gICAgICAgICAgICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwLTAgbXktM1wiKVxyXG4gICAgICAgICAgICBkaXZCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdwLTAgbXgtYXV0bycpXHJcblxyXG4gICAgICAgICAgICBhZGRCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBmZXRjaChcIi91c2VyL2dhbWUvXCIgKyBpZClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IChyZXNwb25zZS5qc29uKCkpKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIlZpZGVvZ2lvY28gYWdnaXVudG8hXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJQb3NzaWVkaSBnacOgIHF1ZXN0byBnaXVvY28hXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYWRkQnV0dG9uLmFwcGVuZENoaWxkKGltZ0J1dHRvbik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXZCdXR0b24uYXBwZW5kKGFkZEJ1dHRvbik7XHJcbiAgICAgICAgICAgIGNvbC5hcHBlbmQoZGl2QnV0dG9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29udGVudC5hcHBlbmQoY29sKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUdhbWVQYWdpbmF0aW9uKCkge1xyXG4gICAgbGV0IHNpemU6IG51bWJlciA9IGdhbWVMaXN0Lmxlbmd0aFxyXG4gICAgbGV0IHRhYnM6IG51bWJlciA9IE1hdGguY2VpbChzaXplIC8gZ2FtZVZpZXcpO1xyXG4gICAgbGV0IHBhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlc1ZcIik7XHJcbiAgICBwYWdlcy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGFiczsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGlmIChpID09IDEpIHtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWl0ZW0gYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIiwgXCJwYWdlXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWxpbmtcIik7XHJcbiAgICAgICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBhbGxMaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZXNWXCIpLmNoaWxkcmVuO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBvbmVMaSBvZiBhbGxMaSkge1xyXG4gICAgICAgICAgICAgICAgb25lTGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWl0ZW1cIik7XHJcbiAgICAgICAgICAgICAgICBvbmVMaS5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWl0ZW0gYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIiwgXCJwYWdlXCIpO1xyXG4gICAgICAgICAgICBzaG93R2FtZXMoaSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBidG4uaW5uZXJIVE1MID0gXCJcIiArIChpKTtcclxuICAgICAgICBsaS5hcHBlbmRDaGlsZChidG4pO1xyXG4gICAgICAgIHBhZ2VzLmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzZXRBbGxDb25zb2xsZXMoKSB7XHJcbiAgICBjb25zb2xsZXMgPSBbXVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICghKGNvbnNvbGxlcy5pbmNsdWRlcyhnYW1lTGlzdFtpXS5jb25zb2xlLmNvbnNvbGUpKSkge1xyXG4gICAgICAgICAgICBjb25zb2xsZXMucHVzaChnYW1lTGlzdFtpXS5jb25zb2xlLmNvbnNvbGUpXHJcbiAgICAgICAgICAgIGxldCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZUNvbnNvbGxlc1wiKTtcclxuICAgICAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgICAgICBsaS5pZCA9IGdhbWVMaXN0W2ldLmNvbnNvbGUuY29uc29sZTtcclxuICAgICAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRyb3Bkb3duLWl0ZW1cIik7XHJcbiAgICAgICAgICAgIGJ0bi5pbm5lckhUTUwgPSBnYW1lTGlzdFtpXS5jb25zb2xlLmNvbnNvbGU7XHJcbiAgICAgICAgICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoQnlHYW1lQ29uc29sbGUobGkuaWQpOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1bC5hcHBlbmQobGkpO1xyXG4gICAgICAgICAgICBsaS5hcHBlbmQoYnRuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2V0QWxsR2VucmVzKCkge1xyXG5cclxuICAgIGdlbnJlcyA9IFtdXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBnYW1lTGlzdFtpXS5nZW5yZS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBpZiAoIShnZW5yZXMuaW5jbHVkZXMoZ2FtZUxpc3RbaV0uZ2VucmVbal0uZ2VucmUpKSkge1xyXG4gICAgICAgICAgICAgICAgZ2VucmVzLnB1c2goZ2FtZUxpc3RbaV0uZ2VucmVbal0uZ2VucmUpXHJcbiAgICAgICAgICAgICAgICBsZXQgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVHZW5yZXNcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgICAgICAgICBsaS5pZCA9IGdhbWVMaXN0W2ldLmdlbnJlW2pdLmdlbnJlO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkcm9wZG93bi1pdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgYnRuLmlubmVySFRNTCA9IGdhbWVMaXN0W2ldLmdlbnJlW2pdLmdlbnJlO1xyXG4gICAgICAgICAgICAgICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoQnlHYW1lR2VucmUobGkuaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdWwuYXBwZW5kKGxpKTtcclxuICAgICAgICAgICAgICAgIGxpLmFwcGVuZChidG4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0QWxsWWVhcnMoKSB7XHJcbiAgICB5ZWFycyA9IFtdXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKCEoeWVhcnMuaW5jbHVkZXMoZ2FtZUxpc3RbaV0ueWVhcikpKSB7XHJcbiAgICAgICAgICAgIHllYXJzLnB1c2goZ2FtZUxpc3RbaV0ueWVhcilcclxuICAgICAgICAgICAgbGV0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lWWVhcnNcIik7XHJcbiAgICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICAgICAgbGkuaWQgPSBcIlwiICsgZ2FtZUxpc3RbaV0ueWVhcjtcclxuICAgICAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRyb3Bkb3duLWl0ZW1cIik7XHJcbiAgICAgICAgICAgIGJ0bi5pbm5lckhUTUwgPSBcIlwiICsgZ2FtZUxpc3RbaV0ueWVhcjtcclxuICAgICAgICAgICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hCeUdhbWVZZWFyKE51bWJlcihsaS5pZCkpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHVsLmFwcGVuZChsaSk7XHJcbiAgICAgICAgICAgIGxpLmFwcGVuZChidG4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNlYXJjaEJ5QWxsR2FtZXMoKSB7ICAgICAgICAgICAgIC8qTGEgZnVuemlvbmEgZGVsIGJvdHRvbmUgY2hlIGNlcmNhIHR1dHRpIGdsaSBhbm51bmNpIHNlbnphIGZpbHRyaSovXHJcbiAgICBnZXRBbGxHYW1lcygpO1xyXG4gICAgY3JlYXRlR2FtZVBhZ2luYXRpb24oKTtcclxuICAgIHNob3dHYW1lcygxKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNlYXJjaEJ5R2FtZVRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcclxuICAgIGdhbWVGaWx0ZXJlZExpc3QgPSBbXVxyXG4gICAgZm9yIChsZXQgZWxlbWVudCBvZiBnYW1lTGlzdCkge1xyXG4gICAgICAgIGxldCBnYW1lTmFtZSA9IGVsZW1lbnQubmFtZVxyXG4gICAgICAgIGlmICgoZ2FtZU5hbWUudG9VcHBlckNhc2UoKS5pbmNsdWRlcyh0aXRsZS50b1VwcGVyQ2FzZSgpKSkpIHtcclxuICAgICAgICAgICAgZ2FtZUZpbHRlcmVkTGlzdC5wdXNoKGVsZW1lbnQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2FtZUxpc3QgPSBbXTtcclxuICAgIGdhbWVMaXN0ID0gZ2FtZUZpbHRlcmVkTGlzdFxyXG4gICAgY3JlYXRlR2FtZVBhZ2luYXRpb24oKTtcclxuICAgIHNob3dHYW1lcygxKTtcclxuICAgIGdldEFsbEdhbWVzKCk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2VhcmNoQnlHYW1lQ29uc29sbGUoY29uc29sZTogc3RyaW5nKSB7XHJcbiAgICBnYW1lRmlsdGVyZWRMaXN0ID0gW11cclxuICAgIGZvciAobGV0IGVsZW1lbnQgb2YgZ2FtZUxpc3QpIHtcclxuXHJcbiAgICAgICAgaWYgKGVsZW1lbnQuY29uc29sZS5jb25zb2xlID09IGNvbnNvbGUpIHtcclxuICAgICAgICAgICAgZ2FtZUZpbHRlcmVkTGlzdC5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG4gICAgZ2FtZUxpc3QgPSBbXTtcclxuICAgIGdhbWVMaXN0ID0gZ2FtZUZpbHRlcmVkTGlzdFxyXG4gICAgY3JlYXRlR2FtZVBhZ2luYXRpb24oKTtcclxuICAgIHNob3dHYW1lcygxKTtcclxuICAgIGdldEFsbEdhbWVzKCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZWFyY2hCeUdhbWVHZW5yZShnZW5yZTogc3RyaW5nKSB7XHJcbiAgICBnYW1lRmlsdGVyZWRMaXN0ID0gW11cclxuICAgIGZvciAobGV0IGVsZW1lbnQgb2YgZ2FtZUxpc3QpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuZ2VucmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuZ2VucmVbaV0uZ2VucmUgPT0gZ2VucmUpIHtcclxuICAgICAgICAgICAgICAgIGdhbWVGaWx0ZXJlZExpc3QucHVzaChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGkgPSBlbGVtZW50LmdlbnJlLmxlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdhbWVMaXN0ID0gW107XHJcbiAgICBnYW1lTGlzdCA9IGdhbWVGaWx0ZXJlZExpc3RcclxuICAgIGNyZWF0ZUdhbWVQYWdpbmF0aW9uKCk7XHJcbiAgICBzaG93R2FtZXMoMSk7XHJcbiAgICBnZXRBbGxHYW1lcygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZWFyY2hCeUdhbWVZZWFyKHllYXI6IG51bWJlcikge1xyXG4gICAgZ2FtZUZpbHRlcmVkTGlzdCA9IFtdXHJcbiAgICBmb3IgKGxldCBlbGVtZW50IG9mIGdhbWVMaXN0KSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQueWVhciA9PSB5ZWFyKSB7XHJcbiAgICAgICAgICAgIGdhbWVGaWx0ZXJlZExpc3QucHVzaChlbGVtZW50KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdhbWVMaXN0ID0gW107XHJcbiAgICBnYW1lTGlzdCA9IGdhbWVGaWx0ZXJlZExpc3RcclxuICAgIGNyZWF0ZUdhbWVQYWdpbmF0aW9uKCk7XHJcbiAgICBzaG93R2FtZXMoMSk7XHJcbiAgICBnZXRBbGxHYW1lcygpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBhc3NpZ25HYW1lRmlsdGVycygpIHsgICAgICAgICAgICAgLypBc3NlZ25hIGxlIGZ1bnppb25pIGFpIHB1bHNhbnRpIG5lbGxlIGRyb3BEb3duTGlzdCBkYSBwcm92YXJlKi9cclxuICAgIGxldCBhbGxHYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0QWxsR2FtZXNcIilcclxuICAgIGFsbEdhbWVzLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc2VhcmNoQnlBbGxHYW1lcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFsbENvbnNvbGxlcygpO1xyXG5cclxuICAgIHNldEFsbEdlbnJlcygpO1xyXG5cclxuICAgIHNldEFsbFllYXJzKCk7XHJcblxyXG4gICAgbGV0IHNlYXJjaFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hUaXRsZUdhbWVcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIHNlYXJjaFRpdGxlLm9ua2V5ZG93biA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgc2VhcmNoQnlHYW1lVGl0bGUoc2VhcmNoVGl0bGUudmFsdWUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdhbWVQYWdlOyIsImltcG9ydCB2aWRlb2dhbWUgZnJvbSBcIi4uL2ludGVyZmFjZXMvdmlkZW9nYW1lXCI7XHJcbmltcG9ydCB2aXN1YWxpenphVmlkZW9naW9jbyBmcm9tIFwiLi92aXN1YWxpenphVmlkZW9naW9jby5odG1sXCI7XHJcbmltcG9ydCBjcmVhdGVHYW1lUGFnZSBmcm9tIFwiLi92aWRlb2dpb2NoaVwiO1xyXG5pbXBvcnQgdmlkZW9naW9jaGkgZnJvbSBcIi4vdmlkZW9naW9jaGkuaHRtbFwiXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdhbWVWaXN1YWxpemF0aW9uKGdhbWU6dmlkZW9nYW1lKXtcclxuICAgIGNvbnNvbGUubG9nKGdhbWUpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTD12aXN1YWxpenphVmlkZW9naW9jbztcclxuICAgIHNldGJhY2soKTtcclxuICAgIHNldFBhZ2UoZ2FtZSlcclxuICAgIFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0YmFjaygpe1xyXG4gICAgbGV0IGJhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2stZ2FtZXNcIilcclxuICAgIGJhY2sub25jbGljaz0oKT0+e1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUw9dmlkZW9naW9jaGlcclxuICAgICAgICBjcmVhdGVHYW1lUGFnZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRQYWdlKGdhbWU6dmlkZW9nYW1lKXtcclxuICAgIGxldCBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lVGl0bGVcIik7XHJcbiAgICBsZXQgdGl0bGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgdGl0bGUuaW5uZXJIVE1MPVwiPGI+XCIrZ2FtZS5uYW1lK1wiPC9iPlwiO1xyXG4gICAgaGVhZC5hcHBlbmQodGl0bGUpO1xyXG4gICAgaGVhZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwidGV4dC1jZW50ZXIgbWItNVwiKVxyXG4gICAgbGV0IHZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVJbWFnZVwiKTtcclxuICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgaW1nLnNyYz1nYW1lLmNvdmVyLmxpbms7XHJcbiAgICBpbWcud2lkdGg9NDAwO1xyXG4gICAgdmlldy5hcHBlbmQoaW1nKTtcclxuICAgIGxldCBpbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lSW5mb1wiKTtcclxuICAgIGxldCBnZW5lcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIilcclxuICAgIGdlbmVyZS5pbm5lckhUTUw9IFwiPGI+R0VORVJFL0k6IDwvYj5cIjtcclxuICAgIGZvcihsZXQgaT0wOyBpPGdhbWUuZ2VucmUubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGdlbmVyZS5pbm5lckhUTUwgKz0gZ2FtZS5nZW5yZVtpXS5nZW5yZSArXCIgXCI7XHJcbiAgICB9IFxyXG4gICAgbGV0IGNvbnNvbGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgY29uc29sZS5pbm5lckhUTUw9IFwiPGI+Q09OU09MRTogPC9iPlwiK2dhbWUuY29uc29sZS5jb25zb2xlO1xyXG4gICAgbGV0IHllYXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgeWVhci5pbm5lckhUTUw9XCI8Yj5BTk5POiA8L2I+XCIrZ2FtZS55ZWFyXHJcbiAgICBpbmZvLmFwcGVuZChnZW5lcmUsY29uc29sZSx5ZWFyKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlR2FtZVZpc3VhbGl6YXRpb24iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVIb21lIGZyb20gXCIuL2hvbWUvaG9tZVwiO1xyXG5pbXBvcnQgY3JlYXRlTmF2IGZyb20gXCIuL25hdmJhci9uYXZiYXJcIjtcclxuaW1wb3J0IGNyZWF0ZUZvdCBmcm9tIFwiLi9mb290ZXIvZm9vdGVyXCI7XHJcbmltcG9ydCBhZGRDbGlja0NoYXQgZnJvbSBcIi4vY2hhdC9jaGF0XCI7XHJcbmltcG9ydCB7IHNlYXJjaE5vdGlmaWNhdGlvbiB9IGZyb20gXCIuL2NoYXQvY2hhdFwiO1xyXG5cclxuY3JlYXRlTmF2KCk7XHJcbmNyZWF0ZUhvbWUoKTtcclxuY3JlYXRlRm90KCk7XHJcbmFkZENsaWNrQ2hhdCgpO1xyXG5zZWFyY2hOb3RpZmljYXRpb24oKTtcclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
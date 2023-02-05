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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<style>\r\n    .btn:hover {\r\n        outline-color: transparent;\r\n        outline-style: solid;\r\n        box-shadow: 0 0 0 4px #5a01a7;\r\n        transition: 0.7s;\r\n    }\r\n\r\n    #searchTitle:hover {\r\n        outline-color: transparent;\r\n        outline-style: solid;\r\n        box-shadow: 0 0 0 4px #5a01a7;\r\n        transition: 0.7s;\r\n    }\r\n\r\n    #searchTitle {\r\n        box-shadow: -3px 0 black, 0 3px black, 3px 0 black, 0 -3px black;\r\n        height: 20px;\r\n        width: 20%;\r\n        float: bottom;\r\n        align-self: right;\r\n    }\r\n</style>\r\n\r\n<div style=\"display: flex;\" class=\"my-5\">\r\n    <span style=\"margin-right: 40px\">\r\n        <img id=\"selectAll\" class=\"btn p-0 dropdown-toggle\" height=\"35\"\r\n        style=\"border:none;image-rendering: pixelated;\" type=\"button\"\r\n            src=\"./img/button/showallBtn.png\" alt=\"\">\r\n    </span>\r\n\r\n    <span class=\"mx-auto dropdown\">\r\n        <img cclass=\"btn p-0 dropdown-toggle\" height=\"35\"\r\n        style=\"border:none;image-rendering: pixelated;\" type=\"button\"\r\n            src=\"./img/button/bygenreBtn.png\" alt=\"\">\r\n        <ul id=\"genres\" class=\"dropdown-menu\">\r\n        </ul>\r\n    </span>\r\n\r\n    <span class=\"mx-auto dropdown\">\r\n        <!--Questo è in realtà il filtro per le consolles bisogna cambiare il bottone-->\r\n        <img class=\"btn p-0 dropdown-toggle\" height=\"35\"\r\n        style=\"border:none;image-rendering: pixelated;\" type=\"button\"\r\n            src=\"./img/button/byconsoleBtn.png\" alt=\"\">\r\n        <ul id=\"consolles\" class=\"dropdown-menu\">\r\n        </ul>\r\n    </span>\r\n\r\n    <span class=\"mx-auto dropdown\">\r\n        <img class=\"btn p-0 dropdown-toggle\" height=\"35\"\r\n        style=\"border:none;image-rendering: pixelated;\" type=\"button\"\r\n            src=\"./img/button/byyearBtn.png\" alt=\"\">\r\n        <ul id=\"years\" class=\"dropdown-menu\">\r\n        </ul>\r\n    </span>\r\n    <div class=\"col-5 my-1 mx-auto\">\r\n        <div class=\"input-group\">\r\n            <input  class=\"form-control border-dark border-3 border rounded\" type=\"search\" placeholder=\"cerca\"\r\n            style=\"padding: 2px 4px 2px 4px;margin-right:20px\" \r\n                id=\"searchTitleInsertions\">\r\n            </span>\r\n        </div>\r\n    </div>\r\n\r\n    <span class=\"mx-auto\">\r\n        <img id=\"addInsertion2\" class=\"p-0 btn dropdown-toggle\" type=\"button\"\r\n            style=\"border:none;float:left;image-rendering: pixelated;width: 300%;height:auto;\"\r\n            src=\"./img/button/plusBtn.png\" hidden alt=\"\">\r\n    </span>\r\n\r\n\r\n</div>\r\n\r\n<div id=\"remains\">\r\n    <div id=\"insertionContent\" class=\"row\">\r\n\r\n    </div>\r\n    <ul class=\"list-group\">\r\n\r\n    </ul>\r\n</div>\r\n\r\n<div>\r\n    <ul id=\"pages\" class=\"pagination pagination-sm my-2\">\r\n\r\n    </ul>\r\n</div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<style>\r\n     .btn:hover {\r\n        outline-color: transparent;\r\n        outline-style: solid;\r\n        box-shadow: 0 0 0 4px #5a01a7;\r\n        transition: 0.7s;\r\n    }\r\n</style>\r\n    \r\n    <div id=\"back\">\r\n        <img id=\"backgames\" class=\"btn p-0 my-4\" alt=\"plus\" height=\"35\"\r\n        style=\"border:none;image-rendering: pixelated;\" type=\"button\"src=\"./img/button/backBtn.png\">\r\n    </div>\r\n   <!--  -->\r\n\r\n<div class=\"row\" style=\"background-color: rgba(0,0,0,0.7);\">\r\n    <div class=\"col-md-6\">\r\n        <div>\r\n            <div id=\"imageSlider\" class=\"carousel slide\" data-bs-ride=\"true\">\r\n                <div id=\"indicator\" class=\"carousel-indicators\">\r\n                </div>\r\n                <div id=\"inner\" class=\"carousel-inner\">\r\n                </div>\r\n                <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#imageSlider\" data-bs-slide=\"prev\">\r\n                    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n                    <span class=\"visually-hidden\">Precedente</span>\r\n                </button>\r\n                <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#imageSlider\" data-bs-slide=\"next\">\r\n                    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n                    <span class=\"visually-hidden\">Successiva</span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div id=\"givedGame\">\r\n                    <div class=\"card mb-3\" style=\"max-width: 540px;\">\r\n                        <div class=\"row g-0\">\r\n                            <div id=\"card-image\" class=\"col-md-4\">\r\n\r\n                            </div>\r\n                            <div class=\"col-md-8\">\r\n                                <div id=\"card-body\" class=\"card-body\">\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div id=\"insertion-description\" class=\"font-size:20px color:white col-md-12\">\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div id=\"insertion-confirm\" class=\"my-4\">\r\n                \r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"my-5 text-center text-light\">\r\n        <h3><span id=\"insertion-creator\"></span> vorrebbe uno di questi giochi in cambio:</h3>\r\n    </div>\r\n    \r\n    <div class=\"accordion row\" id=\"accordionExample\">\r\n        <div class=\"accordion-item col-md-4\">\r\n            <h2 class=\"accordion-header\" id=\"headingOne\">\r\n                <button id=\"btn-item-1\" class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\"\r\n                    data-bs-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n    \r\n                </button>\r\n            </h2>\r\n            <div id=\"collapseOne\" class=\"accordion-collapse collapse\" aria-labelledby=\"headingOne\"\r\n                data-bs-parent=\"#accordionExample\">\r\n                <div class=\"accordion-body\">\r\n                    <div id=\"img-item-1\" class=\"card mx-auto\" style=\"width: 18rem;\">\r\n                        \r\n                        <div id=\"body-item-1\" class=\"card-body text-center\">\r\n                            \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"accordion-item col-md-4\">\r\n            <h2 class=\"accordion-header\" id=\"headingTwo\">\r\n                <button id=\"btn-item-2\" class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\"\r\n                    data-bs-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\r\n    \r\n                </button>\r\n            </h2>\r\n            <div id=\"collapseTwo\" class=\"accordion-collapse collapse\" aria-labelledby=\"headingTwo\"\r\n                data-bs-parent=\"#accordionExample\">\r\n                <div class=\"accordion-body\">\r\n                    <div id=\"img-item-2\" class=\"card mx-auto\" style=\"width: 18rem;\">\r\n                        \r\n                        <div id=\"body-item-2\" class=\"card-body text-center\">\r\n                            \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"accordion-item col-md-4\">\r\n            <h2 class=\"accordion-header\" id=\"headingThree\">\r\n                <button id=\"btn-item-3\" class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\"\r\n                    data-bs-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\r\n    \r\n                </button>\r\n            </h2>\r\n            <div id=\"collapseThree\" class=\"accordion-collapse collapse\" aria-labelledby=\"headingThree\"\r\n                data-bs-parent=\"#accordionExample\">\r\n                <div class=\"accordion-body\">\r\n                    <div id=\"img-item-3\" class=\"card mx-auto\" style=\"width: 18rem;\">\r\n                        \r\n                        <div id=\"body-item-3\" class=\"card-body text-center\">\r\n                            \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<style>\r\n  #insertCont {\r\n    background-color: rgba(255, 255, 255, 0.3); border: 3px solid green;\r\n  }\r\n\r\n  .btn:hover {\r\n        outline-color: transparent ;\r\n        outline-style: solid;\r\n        box-shadow: 0 0 0 4px #5a01a7;\r\n        transition: 0.7s;\r\n    }\r\n\r\n  .form-control:hover{\r\n        outline-color: transparent ;\r\n        outline-style: solid;\r\n        box-shadow: 0 0 0 4px #5a01a7;\r\n        transition: 0.7s;\r\n    }\r\n</style>\r\n\r\n<div id=\"insertCont\" class=\"rounded my-2 container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 text-center\">\r\n      <h2 class=\"border-primary border-bottom border-2\"><b>Inserisci Annuncio</b></h2>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-4\">\r\n      <div class=\"mb-3\">\r\n        <label for=\"title\" class=\"form-label\">\r\n          <h3><b>Titolo Annuncio</b></h3>\r\n        </label>\r\n        <input type=\"text\" class=\"border border-2 border-info form-control\" id=\"titleInsertion\" placeholder=\"Titolo Annuncio\">\r\n      </div>\r\n      <div class=\"mb-3\">\r\n        <label for=\"description\" class=\"form-label\">\r\n          <h3><b>Descrizione Videogioco</b></h3>\r\n        </label>\r\n        <textarea class=\"border border-2 border-info form-control\" id=\"descriptionInsertion\" rows=\"3\" placeholder=\"Descrizione Annuncio\"></textarea>\r\n      </div>\r\n      <div>\r\n        <label for=\"tradeGame\" class=\"text-center\">\r\n          <h3><b>Trade-Game</b></h3>\r\n          <h5>Da quale tesorino ti vorresti separare?</h5>\r\n          <span class=\"dropdown text-center\">\r\n            <button id=\"selectedTradeGame\" class=\"mb-2 border border-2 border-dark btn btn-light dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" placeholder=\"Quanti bei giochini!\">\r\n            </button>\r\n            <ul id=\"tradeGame\" class=\"dropdown-menu\" style=\"overflow-y: scroll; overflow-x: hidden; height: 200px; width: 100%;\">\r\n            </ul>\r\n          </span>\r\n        </label>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"col-4\">\r\n      <div>\r\n        <label for=\"wishGames\" class=\"text-center\">\r\n          <h3><b>Wish-List</b></h3>\r\n          <h5>Che giochi vorresti ricevere in cambio del tuo tesorino?</h5>\r\n\r\n          <span class=\"dropdown text-center\">\r\n            <button class=\"border border-2 border-dark btn btn-light dropdown-toggle\" type=\"button\"\r\n              data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n              Solo 3 Eh! Non bariamo!\r\n            </button>\r\n            <ul id=\"wishGames\" class=\"p-0 dropdown-menu\">\r\n            </ul>\r\n          </span>\r\n        </label>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-4\">\r\n      <div class=\"mb-3\">\r\n        <label for=\"gallery\" class=\"form-label\">\r\n          <h3><b>Immagini</b></h3>\r\n        </label>\r\n        <textarea class=\"border border-2 border-info form-control\" id=\"galleryInsertion\" rows=\"7\"\r\n          placeholder=\"Inserisci le url delle imagini dell'annuncio da inserire, ognuna divisa dalla virgola Es: http://imgurl/img.png,http://imgurl/img2.png\"></textarea>\r\n      </div>\r\n      <div class=\"mb-3\">\r\n        <ul id=\"selectedGames\">\r\n          \r\n        </ul>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"mb-3 mt-3 text-center p-0\" style=\"border:none;float:left;image-rendering: pixelated;width: 100%;height:auto;\">\r\n      <img id=\"sendInsertion\" class=\"p-0 btn\" type=\"button\" src=\"./img/button/addBtn.png\" alt=\"\" style=\"border:none;width:9%;\">\r\n    </div>\r\n  </div>\r\n</div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<style>\r\n    #main{\r\n        background-color: rgba(255,255,255,0.3);\r\n        border-left: 4px solid rgb(63, 63, 68);\r\n        border-right: 4px solid rgb(63, 63, 68);\r\n        border-bottom: 4px solid rgb(63, 63, 68);\r\n        border-radius: 5px;\r\n\r\n    }\r\n</style>\r\n<div class=\"row mt-4 mb-4\">\r\n    <div id=\"titleprofile\" class=\"col-12 text-center\">\r\n\r\n    </div>\r\n</div>\r\n<div class=\"row mt-2 mb-4\">\r\n    <div class=\"col-12 text-center\">\r\n        <h2>\r\n            <b>Ecco un riepilogo dei tuoi dati:</b>\r\n        </h2>\r\n    </div>\r\n</div>\r\n<div class=\"row mt-5 mb-2\">\r\n    <div class=\"col-2 text-end\">\r\n        <h2>\r\n            <br><br><br> <b>Username</b>: \r\n            <br><br> <b>Email</b>: \r\n            <br><br> <b>Nome</b>: \r\n            <br><br> <b>Cognome</b>: \r\n        </h2>\r\n    </div>\r\n    <div id=\"bodyprofile\" class=\"col-4 text-center\">\r\n\r\n\r\n    </div>\r\n    <div id=\"buttons-profile\" class=\"col-2 text-center\">\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n    </div>\r\n\r\n\r\n    <div id=\"input-profile\" class=\"col-4 \">\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <div  class=\"input-group mb-3\" >\r\n            <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\" id=\"basic-addon1\">Username</span>\r\n            </div>\r\n            <input id=\"username\" type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-label=\"Username\"\r\n                aria-describedby=\"basic-addon1\">\r\n        </div>\r\n        <div  class=\"input-group mb-3 my-4\" >\r\n            <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\" id=\"basic-addon1\">Email</span>\r\n            </div>\r\n            <input id=\"email\" type=\"text\" class=\"form-control\" placeholder=\"Email\" aria-label=\"Email\"\r\n                aria-describedby=\"basic-addon1\">\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row mt-2 mb-4\">\r\n    <div class=\"col-12 text-center\">\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <h3><b>Cambio Password</b></h3>\r\n        <br>\r\n        <br>\r\n    </div>\r\n    <div class=\"col-6 text-end\">\r\n        <div  class=\"input-group mb-3\" >\r\n            <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\" id=\"basic-addon1\">Vecchia password</span>\r\n            </div>\r\n            <input id=\"oldPassword\" type=\"password\" class=\"form-control\" placeholder=\"VecchiaPassword\" aria-label=\"VecchiaPassword\"\r\n                aria-describedby=\"basic-addon1\">\r\n        </div>\r\n    </div>\r\n    <div class=\"col-6 text-start\">\r\n        <div  class=\"input-group mb-3\" >\r\n            <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\" id=\"basic-addon1\">Nuova Password</span>\r\n            </div>\r\n            <input id=\"newPassword\" type=\"password\" class=\"form-control\" placeholder=\"NuovaPassword\" aria-label=\"NuovaPassword\"\r\n                aria-describedby=\"basic-addon1\">\r\n        </div>\r\n    </div>\r\n    <div  id=\"cp\" class=\"col-12 text-center my-5\">\r\n        \r\n        \r\n        \r\n    </div>\r\n</div>\r\n<div class=\"row mt-2 mb-4\">\r\n    <div id=\"gamesList\" class=\"col-12 text-center\">\r\n        \r\n    </div>\r\n</div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<style>\r\n    .btn:hover {\r\n        outline-color: transparent;\r\n        outline-style: solid;\r\n        box-shadow: 0 0 0 4px #5a01a7;\r\n        transition: 0.7s;\r\n    }\r\n\r\n    #searchTitle:hover {\r\n        outline-color: transparent;\r\n        outline-style: solid;\r\n        box-shadow: 0 0 0 4px #5a01a7;\r\n        transition: 0.7s;\r\n    }\r\n\r\n    #searchTitle {\r\n        box-shadow: -3px 0 black, 0 3px black, 3px 0 black, 0 -3px black;\r\n        height: 20px;\r\n        width: 20%;\r\n        float: bottom;\r\n        align-self: right;\r\n    }\r\n</style>\r\n\r\n<div style=\"display: flex;\" class=\"my-5\">\r\n\r\n    <span style=\"margin-right: 40px\">\r\n        <img src=\"./img/button/showallBtn.png\" class=\"btn p-0\" height=\"35\"\r\n            style=\"border:none;image-rendering: pixelated;\" type=\"button\" id=\"selectAllGames\">\r\n    </span>\r\n    <!--funzione che prende tutti gli annunci e li schiaffa nel contenuto annunci-->\r\n    <span style=\"margin-right: 40px\" class=\"dropdown\">\r\n        <img src=\"./img/button/bygenreBtn.png\" class=\"btn p-0 dropdown-toggle\" height=\"35\"\r\n            style=\"border:none;image-rendering: pixelated;\" type=\"button\" data-bs-toggle=\"dropdown\"\r\n            aria-expanded=\"false\">\r\n        <ul id=\"gameGenres\" class=\"dropdown-menu\">\r\n\r\n        </ul>\r\n    </span>\r\n\r\n    <span style=\"margin-right: 40px\" class=\"dropdown\">\r\n        <!--Questo è il filtro per le consolles va cambiata l'immagine del bottone-->\r\n        <img src=\"./img/button/byconsoleBtn.png\" class=\"btn p-0 dropdown-toggle\" height=\"35\"\r\n            style=\"border:none;image-rendering: pixelated;\" type=\"button\" data-bs-toggle=\"dropdown\"\r\n            aria-expanded=\"false\">\r\n        <ul id=\"gameConsolles\" class=\"dropdown-menu\">\r\n\r\n        </ul>\r\n    </span>\r\n\r\n    <span style=\"margin-right: 40px\" class=\"dropdown\">\r\n        <img src=\"./img/button/byyearBtn.png\" class=\"btn p-0 dropdown-toggle\" height=\"35\"\r\n            style=\"border:none;image-rendering: pixelated;\" type=\"button\" data-bs-toggle=\"dropdown\"\r\n            aria-expanded=\"false\">\r\n        <ul id=\"gameYears\" class=\"dropdown-menu\">\r\n\r\n        </ul>\r\n    </span>\r\n    <div style=\"vertical-align: middle;\" class=\"col-md-3 mx-auto\">\r\n        <div class=\"input-group\">\r\n            <input class=\"form-control border-dark border-3 border rounded\" type=\"search\" placeholder=\"cerca\"\r\n                style=\"padding: 2px 4px 2px 4px;margin-right:20px\" id=\"searchTitleGame\">\r\n        </div>\r\n    </div>\r\n    <img src=\"./img/button/plusBtn.png\" class=\"btn p-0\" id=\"addVideogame\" alt=\"plus\" height=\"35\"\r\n        style=\"border:none;image-rendering: pixelated;\" type=\"button\" hidden>\r\n</div>\r\n\r\n<div>\r\n    <div id=\"VideogameContent\" class=\"row\">\r\n\r\n    </div>\r\n</div>\r\n\r\n<div>\r\n    <ul id=\"pagesV\" class=\"pagination pagination-sm my-2\">\r\n\r\n    </ul>\r\n</div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<style>\r\n    .btn:hover {\r\n        outline-color: transparent;\r\n        outline-style: solid;\r\n        box-shadow: 0 0 0 4px #5a01a7;\r\n        transition: 0.7s;\r\n    }\r\n\r\n</style>    \r\n     \r\n     <img  id=\"back-games\" src=\"./img/button/back.png\"  class=\"btn p-0\" height=\"35\"\r\n     style=\"border:none;image-rendering: pixelated;\" type=\"button\" >\r\n\r\n\r\n<div class=\"row\" >\r\n    <div id= \"gameTitle\" class=\"col-12 text-center\">\r\n\r\n    </div>\r\n</div>\r\n<div>\r\n    <div class=\"row\">\r\n        <div id=\"gameImage\" class=\"col-6 text-center\">\r\n    \r\n        </div>\r\n        <div id=\"gameInfo\" class=\"col-6 text-center\">\r\n    \r\n        </div>\r\n    </div>\r\n    \r\n        <div id=\"gameInfo\" class=\"col-6 text-center\">\r\n    \r\n        </div>\r\n    \r\n</div>\r\n\r\n    \r\n");

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
            image.setAttribute('style', 'height:200px;width:auto;');
            title.innerHTML = '<b>' + list[start].title + '</b>';
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
    title.innerHTML = '<b>' + insertion.title + '</b>';
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
        img.setAttribute('style', 'height:350px;width:auto;');
        img.setAttribute("class", "d-block w-100");
        img.alt = "Gallery Image" + (i + 1);
        div.append(img);
        inner.append(div);
    }
    let img = document.createElement("img");
    img.src = insertion.tradeGame.cover.link;
    img.setAttribute("class", "img-fluid rounded-start");
    img.setAttribute('style', 'height:200x;width:auto;');
    document.getElementById("card-image").append(img);
    let h4 = document.createElement("h4");
    h4.setAttribute("class", "card-title");
    h4.innerHTML = '<b>' + insertion.tradeGame.name + '</b>';
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
            li.setAttribute("style", "width: 300px");
            title.innerHTML = game.name;
            title.setAttribute("class", "my-auto");
            pic.src = game.cover.link;
            pic.setAttribute('class', 'border border-2 border-info rounded');
            pic.setAttribute('style', 'width:128px;height:auto');
            liBtn.id = game.name;
            liBtn.setAttribute("type", "button");
            liBtn.setAttribute("class", "p-0 mx-auto my-auto dropdown-item");
            liBtn.onclick = () => {
                giocoDaScambiare = game.id;
                console.log("gioco da Scambiare: " + giocoDaScambiare);
                gameToTrade = game;
                showSelectedTradeGame();
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
    for (let i = homeList.length - 1; i > homeList.length - 5 && i >= 0; i--) {
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
        img.setAttribute('style', 'height:400;width:auto');
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
        h1.innerHTML = "<b>BENTORNATO AMMINISTRATORE " + adminInfo.username + "</b>";
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
        h1.innerHTML = "<b>BENTORNATO UTENTE " + userInfo.username + " " + userInfo.rating + "</b> <i class='fa-regular fa-star'></i>";
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
        cp.append(btn3);
        let gamesList = document.getElementById("gamesList");
        let h3 = document.createElement("h3");
        h3.innerHTML = "<b>I tuoi giochi:</b>";
        let ul = document.createElement("ul");
        ul.setAttribute("class", "list-group");
        for (let game of userInfo.videogames) {
            let li = document.createElement("li");
            li.setAttribute("class", "list-group-item");
            li.innerHTML = game.name;
            ul.append(li);
        }
        gamesList.append(h3, ul);
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
        col.setAttribute("class", "pb-5 col-4 text-center");
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
        image.setAttribute('style', 'height:200px;width:auto;');
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
            imgButton.setAttribute("style", "border:none;image-rendering: pixelated;");
            imgButton.setAttribute('class', 'p-0 my-3 mx-auto');
            imgButton.height = 35;
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
    img.setAttribute('style', 'height:400px;width:auto;');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBa0IsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvYW5udW5jaS9hbm51bmNpLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvYW5udW5jaS9hbm51bmNpby5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2FubnVuY2kvZ2VzdGlvbmVhbm51bmNpLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvY2hhdC9jaGF0Qm9keS5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2NoYXQvY2hhdEZvb3Rlci5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2NoYXQvY2hhdEhlYWRlci5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2NyZWFBbm51bmNpby9jcmVhQW5udW5jaW8uaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9mb290ZXIvZm9vdGVyLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvZ2VzdGlvbmVVdGVudGkvZ2VzdGlvbmVVdGVudGkuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9ob21lL2hvbWUuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9sb2dpbi9sb2dpbi5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2xvZ2luL2xvZ2luRm9vdGVyLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvbG9nb3V0L2xvZ291dC5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL21vZGFsL21vZGFsLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvbmF2YmFyL25hdmJhci5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL3Byb2ZpbG9VdGVudGUvcHJvZmlsZS5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL3JlZ2lzdHJhemlvbmUvcmVnaXN0cmF6aW9uZS5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL3JlZ2lzdHJhemlvbmUvcmVnaXN0cmF6aW9uZUZvb3Rlci5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL3ZpZGVvZ2lvY2hpL2NyZWFWaWRlb2dpb2NvLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvdmlkZW9naW9jaGkvdmlkZW9naW9jaGkuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy92aWRlb2dpb2NoaS92aXN1YWxpenphVmlkZW9naW9jby5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2FubnVuY2kvYW5udW5jaS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9hbm51bmNpL2FubnVuY2lvLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2FubnVuY2kvZ2VzdGlvbmVhbm51bmNpLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2NoYXQvY2hhdC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9jcmVhQW5udW5jaW8vY3JlYUFubnVuY2lvLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2Zvb3Rlci9mb290ZXIudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvZ2VzdGlvbmVVdGVudGkvZ2VzdGlvbmVVdGVudGkudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvaG9tZS9ob21lLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL21vZGFsL21vZGFsLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL25hdmJhci9uYXZiYXIudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvcHJvZmlsb1V0ZW50ZS9wcm9maWxlLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL3ZpZGVvZ2lvY2hpL2NyZWFWaWRlb2dpb2NoaS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy92aWRlb2dpb2NoaS92aWRlb2dpb2NoaS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy92aWRlb2dpb2NoaS92aXN1YWxpenphVmlkZW9naW9jby50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiPHN0eWxlPlxcclxcbiAgICAuYnRuOmhvdmVyIHtcXHJcXG4gICAgICAgIG91dGxpbmUtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgICAgb3V0bGluZS1zdHlsZTogc29saWQ7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggIzVhMDFhNztcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IDAuN3M7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3NlYXJjaFRpdGxlOmhvdmVyIHtcXHJcXG4gICAgICAgIG91dGxpbmUtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgICAgb3V0bGluZS1zdHlsZTogc29saWQ7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggIzVhMDFhNztcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IDAuN3M7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3NlYXJjaFRpdGxlIHtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IC0zcHggMCBibGFjaywgMCAzcHggYmxhY2ssIDNweCAwIGJsYWNrLCAwIC0zcHggYmxhY2s7XFxyXFxuICAgICAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgICAgICB3aWR0aDogMjAlO1xcclxcbiAgICAgICAgZmxvYXQ6IGJvdHRvbTtcXHJcXG4gICAgICAgIGFsaWduLXNlbGY6IHJpZ2h0O1xcclxcbiAgICB9XFxyXFxuPC9zdHlsZT5cXHJcXG5cXHJcXG48ZGl2IHN0eWxlPVxcXCJkaXNwbGF5OiBmbGV4O1xcXCIgY2xhc3M9XFxcIm15LTVcXFwiPlxcclxcbiAgICA8c3BhbiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiA0MHB4XFxcIj5cXHJcXG4gICAgICAgIDxpbWcgaWQ9XFxcInNlbGVjdEFsbFxcXCIgY2xhc3M9XFxcImJ0biBwLTAgZHJvcGRvd24tdG9nZ2xlXFxcIiBoZWlnaHQ9XFxcIjM1XFxcIlxcclxcbiAgICAgICAgc3R5bGU9XFxcImJvcmRlcjpub25lO2ltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIlxcclxcbiAgICAgICAgICAgIHNyYz1cXFwiLi9pbWcvYnV0dG9uL3Nob3dhbGxCdG4ucG5nXFxcIiBhbHQ9XFxcIlxcXCI+XFxyXFxuICAgIDwvc3Bhbj5cXHJcXG5cXHJcXG4gICAgPHNwYW4gY2xhc3M9XFxcIm14LWF1dG8gZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgPGltZyBjY2xhc3M9XFxcImJ0biBwLTAgZHJvcGRvd24tdG9nZ2xlXFxcIiBoZWlnaHQ9XFxcIjM1XFxcIlxcclxcbiAgICAgICAgc3R5bGU9XFxcImJvcmRlcjpub25lO2ltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIlxcclxcbiAgICAgICAgICAgIHNyYz1cXFwiLi9pbWcvYnV0dG9uL2J5Z2VucmVCdG4ucG5nXFxcIiBhbHQ9XFxcIlxcXCI+XFxyXFxuICAgICAgICA8dWwgaWQ9XFxcImdlbnJlc1xcXCIgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgPC9zcGFuPlxcclxcblxcclxcbiAgICA8c3BhbiBjbGFzcz1cXFwibXgtYXV0byBkcm9wZG93blxcXCI+XFxyXFxuICAgICAgICA8IS0tUXVlc3RvIMOoIGluIHJlYWx0w6AgaWwgZmlsdHJvIHBlciBsZSBjb25zb2xsZXMgYmlzb2duYSBjYW1iaWFyZSBpbCBib3R0b25lLS0+XFxyXFxuICAgICAgICA8aW1nIGNsYXNzPVxcXCJidG4gcC0wIGRyb3Bkb3duLXRvZ2dsZVxcXCIgaGVpZ2h0PVxcXCIzNVxcXCJcXHJcXG4gICAgICAgIHN0eWxlPVxcXCJib3JkZXI6bm9uZTtpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZDtcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCJcXHJcXG4gICAgICAgICAgICBzcmM9XFxcIi4vaW1nL2J1dHRvbi9ieWNvbnNvbGVCdG4ucG5nXFxcIiBhbHQ9XFxcIlxcXCI+XFxyXFxuICAgICAgICA8dWwgaWQ9XFxcImNvbnNvbGxlc1xcXCIgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgPC9zcGFuPlxcclxcblxcclxcbiAgICA8c3BhbiBjbGFzcz1cXFwibXgtYXV0byBkcm9wZG93blxcXCI+XFxyXFxuICAgICAgICA8aW1nIGNsYXNzPVxcXCJidG4gcC0wIGRyb3Bkb3duLXRvZ2dsZVxcXCIgaGVpZ2h0PVxcXCIzNVxcXCJcXHJcXG4gICAgICAgIHN0eWxlPVxcXCJib3JkZXI6bm9uZTtpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZDtcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCJcXHJcXG4gICAgICAgICAgICBzcmM9XFxcIi4vaW1nL2J1dHRvbi9ieXllYXJCdG4ucG5nXFxcIiBhbHQ9XFxcIlxcXCI+XFxyXFxuICAgICAgICA8dWwgaWQ9XFxcInllYXJzXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuICAgICAgICA8L3VsPlxcclxcbiAgICA8L3NwYW4+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC01IG15LTEgbXgtYXV0b1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0ICBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGJvcmRlci1kYXJrIGJvcmRlci0zIGJvcmRlciByb3VuZGVkXFxcIiB0eXBlPVxcXCJzZWFyY2hcXFwiIHBsYWNlaG9sZGVyPVxcXCJjZXJjYVxcXCJcXHJcXG4gICAgICAgICAgICBzdHlsZT1cXFwicGFkZGluZzogMnB4IDRweCAycHggNHB4O21hcmdpbi1yaWdodDoyMHB4XFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgaWQ9XFxcInNlYXJjaFRpdGxlSW5zZXJ0aW9uc1xcXCI+XFxyXFxuICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8c3BhbiBjbGFzcz1cXFwibXgtYXV0b1xcXCI+XFxyXFxuICAgICAgICA8aW1nIGlkPVxcXCJhZGRJbnNlcnRpb24yXFxcIiBjbGFzcz1cXFwicC0wIGJ0biBkcm9wZG93bi10b2dnbGVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCJcXHJcXG4gICAgICAgICAgICBzdHlsZT1cXFwiYm9yZGVyOm5vbmU7ZmxvYXQ6bGVmdDtpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZDt3aWR0aDogMzAwJTtoZWlnaHQ6YXV0bztcXFwiXFxyXFxuICAgICAgICAgICAgc3JjPVxcXCIuL2ltZy9idXR0b24vcGx1c0J0bi5wbmdcXFwiIGhpZGRlbiBhbHQ9XFxcIlxcXCI+XFxyXFxuICAgIDwvc3Bhbj5cXHJcXG5cXHJcXG5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGlkPVxcXCJyZW1haW5zXFxcIj5cXHJcXG4gICAgPGRpdiBpZD1cXFwiaW5zZXJ0aW9uQ29udGVudFxcXCIgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuXFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8dWwgY2xhc3M9XFxcImxpc3QtZ3JvdXBcXFwiPlxcclxcblxcclxcbiAgICA8L3VsPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXY+XFxyXFxuICAgIDx1bCBpZD1cXFwicGFnZXNcXFwiIGNsYXNzPVxcXCJwYWdpbmF0aW9uIHBhZ2luYXRpb24tc20gbXktMlxcXCI+XFxyXFxuXFxyXFxuICAgIDwvdWw+XFxyXFxuPC9kaXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8c3R5bGU+XFxyXFxuICAgICAuYnRuOmhvdmVyIHtcXHJcXG4gICAgICAgIG91dGxpbmUtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgICAgb3V0bGluZS1zdHlsZTogc29saWQ7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggIzVhMDFhNztcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IDAuN3M7XFxyXFxuICAgIH1cXHJcXG48L3N0eWxlPlxcclxcbiAgICBcXHJcXG4gICAgPGRpdiBpZD1cXFwiYmFja1xcXCI+XFxyXFxuICAgICAgICA8aW1nIGlkPVxcXCJiYWNrZ2FtZXNcXFwiIGNsYXNzPVxcXCJidG4gcC0wIG15LTRcXFwiIGFsdD1cXFwicGx1c1xcXCIgaGVpZ2h0PVxcXCIzNVxcXCJcXHJcXG4gICAgICAgIHN0eWxlPVxcXCJib3JkZXI6bm9uZTtpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZDtcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCJzcmM9XFxcIi4vaW1nL2J1dHRvbi9iYWNrQnRuLnBuZ1xcXCI+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgIDwhLS0gIC0tPlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcInJvd1xcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43KTtcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+XFxyXFxuICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgaWQ9XFxcImltYWdlU2xpZGVyXFxcIiBjbGFzcz1cXFwiY2Fyb3VzZWwgc2xpZGVcXFwiIGRhdGEtYnMtcmlkZT1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImluZGljYXRvclxcXCIgY2xhc3M9XFxcImNhcm91c2VsLWluZGljYXRvcnNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiaW5uZXJcXFwiIGNsYXNzPVxcXCJjYXJvdXNlbC1pbm5lclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYXJvdXNlbC1jb250cm9sLXByZXZcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10YXJnZXQ9XFxcIiNpbWFnZVNsaWRlclxcXCIgZGF0YS1icy1zbGlkZT1cXFwicHJldlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidmlzdWFsbHktaGlkZGVuXFxcIj5QcmVjZWRlbnRlPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2Fyb3VzZWwtY29udHJvbC1uZXh0XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdGFyZ2V0PVxcXCIjaW1hZ2VTbGlkZXJcXFwiIGRhdGEtYnMtc2xpZGU9XFxcIm5leHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+U3VjY2Vzc2l2YTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiZ2l2ZWRHYW1lXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgbWItM1xcXCIgc3R5bGU9XFxcIm1heC13aWR0aDogNTQwcHg7XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgZy0wXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiY2FyZC1pbWFnZVxcXCIgY2xhc3M9XFxcImNvbC1tZC00XFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC04XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImNhcmQtYm9keVxcXCIgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwiaW5zZXJ0aW9uLWRlc2NyaXB0aW9uXFxcIiBjbGFzcz1cXFwiZm9udC1zaXplOjIwcHggY29sb3I6d2hpdGUgY29sLW1kLTEyXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGlkPVxcXCJpbnNlcnRpb24tY29uZmlybVxcXCIgY2xhc3M9XFxcIm15LTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBcXHJcXG5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibXktNSB0ZXh0LWNlbnRlciB0ZXh0LWxpZ2h0XFxcIj5cXHJcXG4gICAgICAgIDxoMz48c3BhbiBpZD1cXFwiaW5zZXJ0aW9uLWNyZWF0b3JcXFwiPjwvc3Bhbj4gdm9ycmViYmUgdW5vIGRpIHF1ZXN0aSBnaW9jaGkgaW4gY2FtYmlvOjwvaDM+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICBcXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYWNjb3JkaW9uIHJvd1xcXCIgaWQ9XFxcImFjY29yZGlvbkV4YW1wbGVcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWNjb3JkaW9uLWl0ZW0gY29sLW1kLTRcXFwiPlxcclxcbiAgICAgICAgICAgIDxoMiBjbGFzcz1cXFwiYWNjb3JkaW9uLWhlYWRlclxcXCIgaWQ9XFxcImhlYWRpbmdPbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJidG4taXRlbS0xXFxcIiBjbGFzcz1cXFwiYWNjb3JkaW9uLWJ1dHRvbiBjb2xsYXBzZWRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10b2dnbGU9XFxcImNvbGxhcHNlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1icy10YXJnZXQ9XFxcIiNjb2xsYXBzZU9uZVxcXCIgYXJpYS1leHBhbmRlZD1cXFwidHJ1ZVxcXCIgYXJpYS1jb250cm9scz1cXFwiY29sbGFwc2VPbmVcXFwiPlxcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9oMj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGlkPVxcXCJjb2xsYXBzZU9uZVxcXCIgY2xhc3M9XFxcImFjY29yZGlvbi1jb2xsYXBzZSBjb2xsYXBzZVxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJoZWFkaW5nT25lXFxcIlxcclxcbiAgICAgICAgICAgICAgICBkYXRhLWJzLXBhcmVudD1cXFwiI2FjY29yZGlvbkV4YW1wbGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhY2NvcmRpb24tYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJpbWctaXRlbS0xXFxcIiBjbGFzcz1cXFwiY2FyZCBteC1hdXRvXFxcIiBzdHlsZT1cXFwid2lkdGg6IDE4cmVtO1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiYm9keS1pdGVtLTFcXFwiIGNsYXNzPVxcXCJjYXJkLWJvZHkgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWNjb3JkaW9uLWl0ZW0gY29sLW1kLTRcXFwiPlxcclxcbiAgICAgICAgICAgIDxoMiBjbGFzcz1cXFwiYWNjb3JkaW9uLWhlYWRlclxcXCIgaWQ9XFxcImhlYWRpbmdUd29cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJidG4taXRlbS0yXFxcIiBjbGFzcz1cXFwiYWNjb3JkaW9uLWJ1dHRvbiBjb2xsYXBzZWRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10b2dnbGU9XFxcImNvbGxhcHNlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1icy10YXJnZXQ9XFxcIiNjb2xsYXBzZVR3b1xcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiIGFyaWEtY29udHJvbHM9XFxcImNvbGxhcHNlVHdvXFxcIj5cXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvaDI+XFxyXFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwiY29sbGFwc2VUd29cXFwiIGNsYXNzPVxcXCJhY2NvcmRpb24tY29sbGFwc2UgY29sbGFwc2VcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwiaGVhZGluZ1R3b1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgZGF0YS1icy1wYXJlbnQ9XFxcIiNhY2NvcmRpb25FeGFtcGxlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWNjb3JkaW9uLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiaW1nLWl0ZW0tMlxcXCIgY2xhc3M9XFxcImNhcmQgbXgtYXV0b1xcXCIgc3R5bGU9XFxcIndpZHRoOiAxOHJlbTtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImJvZHktaXRlbS0yXFxcIiBjbGFzcz1cXFwiY2FyZC1ib2R5IHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImFjY29yZGlvbi1pdGVtIGNvbC1tZC00XFxcIj5cXHJcXG4gICAgICAgICAgICA8aDIgY2xhc3M9XFxcImFjY29yZGlvbi1oZWFkZXJcXFwiIGlkPVxcXCJoZWFkaW5nVGhyZWVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJidG4taXRlbS0zXFxcIiBjbGFzcz1cXFwiYWNjb3JkaW9uLWJ1dHRvbiBjb2xsYXBzZWRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10b2dnbGU9XFxcImNvbGxhcHNlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1icy10YXJnZXQ9XFxcIiNjb2xsYXBzZVRocmVlXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCIgYXJpYS1jb250cm9scz1cXFwiY29sbGFwc2VUaHJlZVxcXCI+XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2gyPlxcclxcbiAgICAgICAgICAgIDxkaXYgaWQ9XFxcImNvbGxhcHNlVGhyZWVcXFwiIGNsYXNzPVxcXCJhY2NvcmRpb24tY29sbGFwc2UgY29sbGFwc2VcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwiaGVhZGluZ1RocmVlXFxcIlxcclxcbiAgICAgICAgICAgICAgICBkYXRhLWJzLXBhcmVudD1cXFwiI2FjY29yZGlvbkV4YW1wbGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhY2NvcmRpb24tYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJpbWctaXRlbS0zXFxcIiBjbGFzcz1cXFwiY2FyZCBteC1hdXRvXFxcIiBzdHlsZT1cXFwid2lkdGg6IDE4cmVtO1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiYm9keS1pdGVtLTNcXFwiIGNsYXNzPVxcXCJjYXJkLWJvZHkgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxzdHlsZT5cXHJcXG4gICAgLm1hc3NpbW9ib2xkaSB7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XFxyXFxuPGRpdiBjbGFzcz1cXFwibXktNVxcXCIgc3R5bGU9XFxcImZvbnQtd2VpZ2h0OiBib2xkO1xcXCI+XFxyXFxuICAgIDxkaXYgc3R5bGU9XFxcImRpc3BsYXk6IGZsZXg7XFxcIj5cXHJcXG4gICAgICAgIDxzcGFuPlxcclxcbiAgICAgICAgICAgIDwhLS0gQWxsZXJ0YSBNYXJ0ZWxsYXRhOiBzZSB0b2xnbyBpbCBib3R0b25lIHRvbGdvIHB1cmUgbGEgbGlzdGEsXFxyXFxuICAgICAgICAgICAgICAgIHF1aW5kaSBsJ2hvIG1lc3NvIGhpZGRlbi0tPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gaGlkZGVuIGlkPVxcXCJhZGRJbnNlcnRpb25cXFwiIHN0eWxlPVxcXCJjb2xvcjp3aGl0ZVxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4vaW1nL3BsdXMucG5nXFxcIiBhbHQ9XFxcInBsdXNcXFwiIHN0eWxlPVxcXCJ3aWR0aDoyNXB4XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgSW5zZXJpc2NpIEFubnVuY2lvXFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICA8L3NwYW4+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8YnI+XFxyXFxuICAgIDxkaXYgc3R5bGU9XFxcImRpc3BsYXk6IGlubGluZS1mbGV4O1xcXCI+XFxyXFxuXFxyXFxuICAgICAgICA8c3BhbiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiA0MHB4XFxcIj5cXHJcXG4gICAgICAgICAgICA8aDQgc3R5bGU9XFxcImZvbnQtd2VpZ2h0OiBib2xkO1xcXCI+IE5vbWUgQ2F0ZWdvcmlhOiA8L2g0PlxcclxcbiAgICAgICAgPC9zcGFuPlxcclxcblxcclxcbiAgICAgICAgPHNwYW4gc3R5bGU9XFxcIm1hcmdpbi1yaWdodDogNDBweFxcXCI+IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGJvcmRlci1lbmQtMSBib3JkZXIgcm91bmRlZC1waWxsXFxcIlxcclxcbiAgICAgICAgICAgICAgICBzdHlsZT1cXFwiZm9udC13ZWlnaHQ6IGJvbGQ7XFxcIiB2YWx1ZT1cXFwiXFxcIiBwbGFjZWhvbGRlcj1cXFwiQ2F0ZWdvcmlhXFxcIiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OjIwcHhcXFwiIGlkPVxcXCJjYXRlZ29yeU5hbWVcXFwiPlxcclxcbiAgICAgICAgPC9zcGFuPlxcclxcblxcclxcbiAgICAgICAgPHNwYW4gc3R5bGU9XFxcIm1hcmdpbi1yaWdodDogNDBweFxcXCI+IDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgc3R5bGU9XFxcImZvbnQtd2VpZ2h0OiBib2xkO1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgaWQ9XFxcImNyZWF0ZUNhdGVnb3J5XFxcIj5DcmVhIENhdGVnb3JpYTwvYnV0dG9uPiA8L3NwYW4+XFxyXFxuXFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8YnI+XFxyXFxuXFxyXFxuICAgIDxkaXYgaWQ9XFxcInJlbWFpbnNcXFwiPlxcclxcbiAgICAgICAgPGJyPlxcclxcbiAgICAgICAgPHVsIGlkPVxcXCJpbnNlcnRpb25Db250ZW50MlxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXBcXFwiIHN0eWxlPVxcXCJmb250LXdlaWdodDogYm9sZDtcXFwiPlxcclxcblxcclxcbiAgICAgICAgPC91bD5cXHJcXG5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXY+XFxyXFxuICAgICAgICA8dWwgaWQ9XFxcInBhZ2VzMlxcXCIgY2xhc3M9XFxcInBhZ2luYXRpb24gcGFnaW5hdGlvbi1zbSBteS0yXFxcIiBzdHlsZT1cXFwiZm9udC13ZWlnaHQ6IGJvbGQ7XFxcIj5cXHJcXG5cXHJcXG4gICAgICAgIDwvdWw+XFxyXFxuXFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBpZD1cXFwiY2hhdEJvZHlcXFwiIGNsYXNzPVxcXCJjYXJkLWJvZHkgb3ZlcmZsb3ctYXV0b1xcXCIgZGF0YS1tZGItcGVyZmVjdC1zY3JvbGxiYXI9XFxcInRydWVcXFwiXFxyXFxuICAgIHN0eWxlPVxcXCJwb3NpdGlvbjogcmVsYXRpdmU7IGhlaWdodDogNzQwcHhcXFwiPlxcclxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBpZD1cXFwiY2hhdEZvb3RlclxcXCIgY2xhc3M9XFxcImNhcmQtZm9vdGVyIHRleHQtbXV0ZWQgZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydCBhbGlnbi1pdGVtcy1jZW50ZXIgcC0zXFxcIj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgbWItMFxcXCI+XFxyXFxuICAgICAgICA8aW5wdXQgaWQ9XFxcIm1lc3NhZ2VUZXh0XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiU2NyaXZpIGlsIG1lc3NhZ2dpb1xcXCJcXHJcXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJSZWNpcGllbnQncyB1c2VybmFtZVxcXCIgYXJpYS1kZXNjcmliZWRieT1cXFwiYnV0dG9uLWFkZG9uMlxcXCIgLz5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBpZD1cXFwiYnV0dG9uLWFkZG9uMlxcXCIgc3R5bGU9XFxcInBhZGRpbmctdG9wOiAuNTVyZW07XFxcIj5cXHJcXG4gICAgICAgICAgICBJbnZpYVxcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBpZD1cXFwiY2hhdEhlYWRlclxcXCIgY2xhc3M9XFxcImNhcmQtaGVhZGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgcC0zXFxcIj5cXHJcXG4gICAgPGg1IGlkPVxcXCJjaGF0VGl0bGVcXFwiIGNsYXNzPVxcXCJtYi0wXFxcIj48L2g1PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJkLWZsZXggZmxleC1yb3cgYWxpZ24taXRlbXMtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJiYWRnZSBiZy13YXJuaW5nIG1lLTNcXFwiPjIwPC9zcGFuPlxcclxcbiAgICAgICAgPGkgaWQ9XFxcImJhY2tUb0xpc3RcXFwiIGNsYXNzPVxcXCJmYXMgZmEtdGltZXMgdGV4dC1tdXRlZCBmYS14c1xcXCI+PC9pPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxzdHlsZT5cXHJcXG4gICNpbnNlcnRDb250IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpOyBib3JkZXI6IDNweCBzb2xpZCBncmVlbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5idG46aG92ZXIge1xcclxcbiAgICAgICAgb3V0bGluZS1jb2xvcjogdHJhbnNwYXJlbnQgO1xcclxcbiAgICAgICAgb3V0bGluZS1zdHlsZTogc29saWQ7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggIzVhMDFhNztcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IDAuN3M7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gIC5mb3JtLWNvbnRyb2w6aG92ZXJ7XFxyXFxuICAgICAgICBvdXRsaW5lLWNvbG9yOiB0cmFuc3BhcmVudCA7XFxyXFxuICAgICAgICBvdXRsaW5lLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCAjNWEwMWE3O1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogMC43cztcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XFxyXFxuXFxyXFxuPGRpdiBpZD1cXFwiaW5zZXJ0Q29udFxcXCIgY2xhc3M9XFxcInJvdW5kZWQgbXktMiBjb250YWluZXJcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLTEyIHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICA8aDIgY2xhc3M9XFxcImJvcmRlci1wcmltYXJ5IGJvcmRlci1ib3R0b20gYm9yZGVyLTJcXFwiPjxiPkluc2VyaXNjaSBBbm51bmNpbzwvYj48L2gyPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcblxcclxcbiAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLTRcXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwidGl0bGVcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5cXHJcXG4gICAgICAgICAgPGgzPjxiPlRpdG9sbyBBbm51bmNpbzwvYj48L2gzPlxcclxcbiAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiYm9yZGVyIGJvcmRlci0yIGJvcmRlci1pbmZvIGZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInRpdGxlSW5zZXJ0aW9uXFxcIiBwbGFjZWhvbGRlcj1cXFwiVGl0b2xvIEFubnVuY2lvXFxcIj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImRlc2NyaXB0aW9uXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+XFxyXFxuICAgICAgICAgIDxoMz48Yj5EZXNjcml6aW9uZSBWaWRlb2dpb2NvPC9iPjwvaDM+XFxyXFxuICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgPHRleHRhcmVhIGNsYXNzPVxcXCJib3JkZXIgYm9yZGVyLTIgYm9yZGVyLWluZm8gZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiZGVzY3JpcHRpb25JbnNlcnRpb25cXFwiIHJvd3M9XFxcIjNcXFwiIHBsYWNlaG9sZGVyPVxcXCJEZXNjcml6aW9uZSBBbm51bmNpb1xcXCI+PC90ZXh0YXJlYT5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgICA8ZGl2PlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwidHJhZGVHYW1lXFxcIiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICA8aDM+PGI+VHJhZGUtR2FtZTwvYj48L2gzPlxcclxcbiAgICAgICAgICA8aDU+RGEgcXVhbGUgdGVzb3Jpbm8gdGkgdm9ycmVzdGkgc2VwYXJhcmU/PC9oNT5cXHJcXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRyb3Bkb3duIHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJzZWxlY3RlZFRyYWRlR2FtZVxcXCIgY2xhc3M9XFxcIm1iLTIgYm9yZGVyIGJvcmRlci0yIGJvcmRlci1kYXJrIGJ0biBidG4tbGlnaHQgZHJvcGRvd24tdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiIHBsYWNlaG9sZGVyPVxcXCJRdWFudGkgYmVpIGdpb2NoaW5pIVxcXCI+XFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPHVsIGlkPVxcXCJ0cmFkZUdhbWVcXFwiIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIiBzdHlsZT1cXFwib3ZlcmZsb3cteTogc2Nyb2xsOyBvdmVyZmxvdy14OiBoaWRkZW47IGhlaWdodDogMjAwcHg7IHdpZHRoOiAxMDAlO1xcXCI+XFxyXFxuICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC00XFxcIj5cXHJcXG4gICAgICA8ZGl2PlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwid2lzaEdhbWVzXFxcIiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICA8aDM+PGI+V2lzaC1MaXN0PC9iPjwvaDM+XFxyXFxuICAgICAgICAgIDxoNT5DaGUgZ2lvY2hpIHZvcnJlc3RpIHJpY2V2ZXJlIGluIGNhbWJpbyBkZWwgdHVvIHRlc29yaW5vPzwvaDU+XFxyXFxuXFxyXFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkcm9wZG93biB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYm9yZGVyIGJvcmRlci0yIGJvcmRlci1kYXJrIGJ0biBidG4tbGlnaHQgZHJvcGRvd24tdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiXFxyXFxuICAgICAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIj5cXHJcXG4gICAgICAgICAgICAgIFNvbG8gMyBFaCEgTm9uIGJhcmlhbW8hXFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPHVsIGlkPVxcXCJ3aXNoR2FtZXNcXFwiIGNsYXNzPVxcXCJwLTAgZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC00XFxcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImdhbGxlcnlcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5cXHJcXG4gICAgICAgICAgPGgzPjxiPkltbWFnaW5pPC9iPjwvaDM+XFxyXFxuICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgPHRleHRhcmVhIGNsYXNzPVxcXCJib3JkZXIgYm9yZGVyLTIgYm9yZGVyLWluZm8gZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiZ2FsbGVyeUluc2VydGlvblxcXCIgcm93cz1cXFwiN1xcXCJcXHJcXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIkluc2VyaXNjaSBsZSB1cmwgZGVsbGUgaW1hZ2luaSBkZWxsJ2FubnVuY2lvIGRhIGluc2VyaXJlLCBvZ251bmEgZGl2aXNhIGRhbGxhIHZpcmdvbGEgRXM6IGh0dHA6Ly9pbWd1cmwvaW1nLnBuZyxodHRwOi8vaW1ndXJsL2ltZzIucG5nXFxcIj48L3RleHRhcmVhPlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPHVsIGlkPVxcXCJzZWxlY3RlZEdhbWVzXFxcIj5cXHJcXG4gICAgICAgICAgXFxyXFxuICAgICAgICA8L3VsPlxcclxcbiAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcblxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJjb2wtMTJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zIG10LTMgdGV4dC1jZW50ZXIgcC0wXFxcIiBzdHlsZT1cXFwiYm9yZGVyOm5vbmU7ZmxvYXQ6bGVmdDtpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZDt3aWR0aDogMTAwJTtoZWlnaHQ6YXV0bztcXFwiPlxcclxcbiAgICAgIDxpbWcgaWQ9XFxcInNlbmRJbnNlcnRpb25cXFwiIGNsYXNzPVxcXCJwLTAgYnRuXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIHNyYz1cXFwiLi9pbWcvYnV0dG9uL2FkZEJ0bi5wbmdcXFwiIGFsdD1cXFwiXFxcIiBzdHlsZT1cXFwiYm9yZGVyOm5vbmU7d2lkdGg6OSU7XFxcIj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxzdHlsZT5cXHJcXG4gIC5jYXJkZm9vdGVyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZm9vdGVybGlua3Mge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcXHJcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IGJsYWNrO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGE6aG92ZXIsIGE6YWN0aXZlIHtcXHJcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IGdyZXk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBsaSB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgYm9keSB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuICBmb290ZXIge1xcclxcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLyogVGhlIGFydGljbGUgZmlsbHMgYWxsIHRoZSBzcGFjZSBiZXR3ZWVuIGhlYWRlciAmIGZvb3RlciAqL1xcclxcbiAgYm9keSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICBkaXYuY29udGFpbmVyIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG48L3N0eWxlPlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImNhcmRmb290ZXJcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiY2FyZC1oZWFkZXJcXFwiPlxcclxcbiAgICA8aW1nIHNyYz1cXFwiLi9pbWcvdmlkZW9nYW1lbG92ZXJmb290ZXIucG5nXFxcIiBzdHlsZT1cXFwid2lkdGg6MjclOyBwYWRkaW5nOiAyJTsgIG9wYWNpdHk6IDAuODtcXFwiIGFsdD1cXFwiXFxcIj5cXHJcXG4gIDwvZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIiBzdHlsZT1cXFwicGFkZGluZy1ib3R0b206IDElO1xcXCI+XFxyXFxuICAgIDx1bD5cXHJcXG4gICAgICA8bGk+IDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJmb290ZXJsaW5rc1xcXCI+SG9tZTwvYT4gPC9saT5cXHJcXG4gICAgICA8bGk+IDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJmb290ZXJsaW5rc1xcXCI+UGFvbG88L2E+IDwvbGk+XFxyXFxuICAgICAgPGxpPiA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiZm9vdGVybGlua3NcXFwiPlBpZXJvPC9hPiA8L2xpPlxcclxcbiAgICAgIDxsaT4gPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImZvb3RlcmxpbmtzXFxcIj5BYm91dCBVczwvYT4gPC9saT5cXHJcXG4gICAgPC91bD5cXHJcXG4gIDwvZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiY2FyZC1mb290ZXIgdGV4dC1tdXRlZFxcXCIgc3R5bGU9XFxcInBhZGRpbmctYm90dG9tOiAxJTsgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHJnYigyMiwgMjIsIDIyKTtcXFwiPlxcclxcbiAgICA8cCAgY2xhc3M9XFxcImZvb3RlcmxpbmtzXFxcIj4gwqkyMDIzIFBhb2xvIEVudGVycHJpc2UgSW5jLiB8IFR1dHRpIGkgZGlyaXR0aSByaXNlcnZhdGkgKGEgUGllcmlubykgPC9wPlxcclxcbiAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPCEtLVxcclxcbjxzdHlsZT5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMHJlbSBhdXRvO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIm1haW5cXFwiIFxcXCIuXFxcIiBcXFwiZm9vdGVyXFxcIjtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQ6ICNGNUY3RkE7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuYm9keSAuZm9vdGVyIHtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICAtLWZvb3Rlci1iYWNrZ3JvdW5kOiNFRDU1NjU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XFxyXFxuICBtaW4taGVpZ2h0OiAxMnJlbTtcXHJcXG59XFxyXFxuYm9keSAuZm9vdGVyIC5idWJibGVzIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGhlaWdodDogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWZvb3Rlci1iYWNrZ3JvdW5kKTtcXHJcXG4gIGZpbHRlcjogdXJsKFxcXCIjYmxvYlxcXCIpO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIgLmJ1YmJsZXMgLmJ1YmJsZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiB2YXIoLS1wb3NpdGlvbiwgNTAlKTtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWZvb3Rlci1iYWNrZ3JvdW5kKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogYnViYmxlLXNpemUgdmFyKC0tdGltZSwgNHMpIGVhc2UtaW4gaW5maW5pdGUgdmFyKC0tZGVsYXksIDBzKSwgYnViYmxlLW1vdmUgdmFyKC0tdGltZSwgNHMpIGVhc2UtaW4gaW5maW5pdGUgdmFyKC0tZGVsYXksIDBzKTtcXHJcXG4gICAgICAgICAgYW5pbWF0aW9uOiBidWJibGUtc2l6ZSB2YXIoLS10aW1lLCA0cykgZWFzZS1pbiBpbmZpbml0ZSB2YXIoLS1kZWxheSwgMHMpLCBidWJibGUtbW92ZSB2YXIoLS10aW1lLCA0cykgZWFzZS1pbiBpbmZpbml0ZSB2YXIoLS1kZWxheSwgMHMpO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMTAwJSk7XFxyXFxufVxcclxcbmJvZHkgLmZvb3RlciAuY29udGVudCB7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxyXFxuICBncmlkLWdhcDogNHJlbTtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1mb290ZXItYmFja2dyb3VuZCk7XFxyXFxufVxcclxcbmJvZHkgLmZvb3RlciAuY29udGVudCBhLCBib2R5IC5mb290ZXIgLmNvbnRlbnQgcCB7XFxyXFxuICBjb2xvcjogI0Y1RjdGQTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuYm9keSAuZm9vdGVyIC5jb250ZW50IGIge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIgLmNvbnRlbnQgcCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LXNpemU6IDAuNzVyZW07XFxyXFxufVxcclxcbmJvZHkgLmZvb3RlciAuY29udGVudCA+IGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIgLmNvbnRlbnQgPiBkaXYgPiBkaXYge1xcclxcbiAgbWFyZ2luOiAwLjI1cmVtIDA7XFxyXFxufVxcclxcbmJvZHkgLmZvb3RlciAuY29udGVudCA+IGRpdiA+IGRpdiA+ICoge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxyXFxufVxcclxcbmJvZHkgLmZvb3RlciAuY29udGVudCA+IGRpdiAuaW1hZ2Uge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDRyZW07XFxyXFxuICBoZWlnaHQ6IDRyZW07XFxyXFxuICBtYXJnaW46IDAuMjVyZW0gMDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbkAtd2Via2l0LWtleWZyYW1lcyBidWJibGUtc2l6ZSB7XFxyXFxuICAwJSwgNzUlIHtcXHJcXG4gICAgd2lkdGg6IHZhcigtLXNpemUsIDRyZW0pO1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLXNpemUsIDRyZW0pO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHdpZHRoOiAwcmVtO1xcclxcbiAgICBoZWlnaHQ6IDByZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYnViYmxlLXNpemUge1xcclxcbiAgMCUsIDc1JSB7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1zaXplLCA0cmVtKTtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1zaXplLCA0cmVtKTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICB3aWR0aDogMHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAwcmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgYnViYmxlLW1vdmUge1xcclxcbiAgMCUge1xcclxcbiAgICBib3R0b206IC00cmVtO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIGJvdHRvbTogdmFyKC0tZGlzdGFuY2UsIDEwcmVtKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQGtleWZyYW1lcyBidWJibGUtbW92ZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGJvdHRvbTogLTRyZW07XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgYm90dG9tOiB2YXIoLS1kaXN0YW5jZSwgMTByZW0pO1xcclxcbiAgfVxcclxcbn1cXHJcXG48L3N0eWxlPlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcIm1haW5cXFwiPjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcImZvb3RlclxcXCI+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJidWJibGVzXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnViYmxlXFxcIiBzdHlsZT1cXFwiLS1zaXplOjIuNjY0NTIzMDE2Mjg1MTk2M3JlbTsgLS1kaXN0YW5jZTo3LjMwNDExNjAzNjc0MjYxNzRyZW07IC0tcG9zaXRpb246ODMuNTYzNjgwNTMzMzg0ODMlOyAtLXRpbWU6My40OTU2NDAzMDk2MjcyMjk1czsgLS1kZWxheTotMi43NzM5MzgxOTYyMzc3MDJzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZTo1Ljg5NDE0OTg0OTgzODAxNnJlbTsgLS1kaXN0YW5jZTo3LjYyNzk3NDQ4NDMwMDQyN3JlbTsgLS1wb3NpdGlvbjo5My4zNjg3ODE4ODM5MzY0MiU7IC0tdGltZTozLjc2MDE0ODYyNzI4Mzg3NTZzOyAtLWRlbGF5Oi0zLjM5NzEwMjI4ODQwMzAyOXM7XFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnViYmxlXFxcIiBzdHlsZT1cXFwiLS1zaXplOjIuNzk4NjQ3MTA2NjY1Njg1cmVtOyAtLWRpc3RhbmNlOjkuMjAwNDk2ODE3MjIyNTI1cmVtOyAtLXBvc2l0aW9uOjAuMjA3NzU3MzI2OTg0MTQxOTUlOyAtLXRpbWU6Mi4yMDEwOTYwMjIwMDU4NjU3czsgLS1kZWxheTotMi42OTg5NDgyMTY0NjQ1NDVzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZTo0LjM1OTYyMTkyNjc4MjI5NHJlbTsgLS1kaXN0YW5jZTo3LjQ2MzU3OTkzMDA3NDE5cmVtOyAtLXBvc2l0aW9uOjQ3Ljg2NzgzMTc0Njg1MDkyNSU7IC0tdGltZToyLjEyMDgyMDU2MTI3MDcyNHM7IC0tZGVsYXk6LTIuNTE0MTc3ODQ5MjE4MjMzNnM7XFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnViYmxlXFxcIiBzdHlsZT1cXFwiLS1zaXplOjUuMDI4MzUyMDUwOTc4MTk2cmVtOyAtLWRpc3RhbmNlOjcuMjQyNzIwMDM2ODMyMjQ5cmVtOyAtLXBvc2l0aW9uOjMwLjY5OTg0NjE1OTI3Mzk2JTsgLS10aW1lOjMuMjUzNTk1NTI4MTA2Mjg4M3M7IC0tZGVsYXk6LTMuMzU1NDU0NTMyNTQzOTcxNXM7XFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnViYmxlXFxcIiBzdHlsZT1cXFwiLS1zaXplOjIuNzU1OTc4MjIxODU3MTkzcmVtOyAtLWRpc3RhbmNlOjcuNDY5OTcyNDk2OTI2NTA5cmVtOyAtLXBvc2l0aW9uOjEwLjIzODIyNzAyMDcwMTEzOSU7IC0tdGltZToyLjY0NzIwMDE1MjAwODM2NnM7IC0tZGVsYXk6LTMuNTcyMTU5NDYyMjQ5NjIxOHM7XFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnViYmxlXFxcIiBzdHlsZT1cXFwiLS1zaXplOjUuMDg0ODEyODE3MjA4NzM3NXJlbTsgLS1kaXN0YW5jZTo5LjU1ODU1NDE0MjU4NDYyNnJlbTsgLS1wb3NpdGlvbjo5NC41MTk4MjA1NzgzMjIxNSU7IC0tdGltZTozLjcxNTU1NTg3NjIxNzMwNTVzOyAtLWRlbGF5Oi0zLjA4MTAwNjY5Njc1Nzg1OXM7XFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnViYmxlXFxcIiBzdHlsZT1cXFwiLS1zaXplOjMuNTM3ODA3NTYwNzc1OTU4cmVtOyAtLWRpc3RhbmNlOjkuNDIxNDIzNTI5ODQxOTI4cmVtOyAtLXBvc2l0aW9uOjUuMzk2Mjc0MjExNzA5MDEzJTsgLS10aW1lOjMuMTc4Nzg5NDU1NjAxODg1NnM7IC0tZGVsYXk6LTMuNDQ2MTY5OTA1MTg2Nzc1cztcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6NS42Mjc3MzEyMTg2MDAzNDhyZW07IC0tZGlzdGFuY2U6Ny43NDY0NjM0MTYwNzUxNjVyZW07IC0tcG9zaXRpb246MTAuOTI4ODAyNDkzNDY5NTMxJTsgLS10aW1lOjIuNTY3OTI1OTMyMjU2NjlzOyAtLWRlbGF5Oi0zLjQwNDg3MzEwMTQ1MTk4NnM7XFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnViYmxlXFxcIiBzdHlsZT1cXFwiLS1zaXplOjMuNjk0OTU5OTIxOTQ3MjMxM3JlbTsgLS1kaXN0YW5jZTo5LjE4MTU0OTU4Njc1MDEwN3JlbTsgLS1wb3NpdGlvbjotNC41ODkwNTU1NjM3OTg5NzYlOyAtLXRpbWU6My43MDk1MjIwNjUyODg4MzQ1czsgLS1kZWxheTotMy4xMjk1ODYxMzE1OTE2MDY3cztcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6Mi43NTkyNjQyMjEwNjcxNzhyZW07IC0tZGlzdGFuY2U6OC40MjY4ODgwOTk1NTEzN3JlbTsgLS1wb3NpdGlvbjoyOC4wNDY3MjgyOTMxMjQ1MDIlOyAtLXRpbWU6My4yODQwOTYxMTA1MjM2czsgLS1kZWxheTotMi4zNjY1MTk4NzQzMDkzODdzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZToyLjU3NDMwODI0MzUxMDU2ODRyZW07IC0tZGlzdGFuY2U6OS40MzA2NTM5NjI1NzM4NTNyZW07IC0tcG9zaXRpb246MzAuODM5NzQ2NDcxNzM5NjElOyAtLXRpbWU6My42ODY1NzAwMTc2MjMwNzA3czsgLS1kZWxheTotMy42MTkwMzk2MDYwMzMyOTdzO1xcXCI+PC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcclxcbiAgICA8ZGl2PlxcclxcbiAgICAgIDxkaXY+PGI+RWxkZXc8L2I+PGEgaHJlZj1cXFwiI1xcXCI+U2VjdWNlPC9hPjxhIGhyZWY9XFxcIiNcXFwiPkRydXBhbmQ8L2E+PGEgaHJlZj1cXFwiI1xcXCI+T2NlYXNoPC9hPjxhIGhyZWY9XFxcIiNcXFwiPlVnZWZlPC9hPjxhIGhyZWY9XFxcIiNcXFwiPkJhYmVkPC9hPjwvZGl2PlxcclxcbiAgICAgIDxkaXY+PGI+U3BvdGhhPC9iPjxhIGhyZWY9XFxcIiNcXFwiPk1pc2thc2E8L2E+PGEgaHJlZj1cXFwiI1xcXCI+QWdpdGhlPC9hPjxhIGhyZWY9XFxcIiNcXFwiPlNjZXNoYTwvYT48YSBocmVmPVxcXCIjXFxcIj5MdWxsZTwvYT48L2Rpdj5cXHJcXG4gICAgICA8ZGl2PjxiPkNoYXNoYWtpYjwvYj48YSBocmVmPVxcXCIjXFxcIj5DaG9nYXV3PC9hPjxhIGhyZWY9XFxcIiNcXFwiPlBoYWNodWxlZDwvYT48YSBocmVmPVxcXCIjXFxcIj5UaWViZWZ0PC9hPjxhIGhyZWY9XFxcIiNcXFwiPk9jaWQ8L2E+PGEgaHJlZj1cXFwiI1xcXCI+SXpvbTwvYT48YSBocmVmPVxcXCIjXFxcIj5PcnQ8L2E+PC9kaXY+XFxyXFxuICAgICAgPGRpdj48Yj5BdGhvZDwvYj48YSBocmVmPVxcXCIjXFxcIj5QYW11ejwvYT48YSBocmVmPVxcXCIjXFxcIj5WYXBlcnQ8L2E+PGEgaHJlZj1cXFwiI1xcXCI+TmVlc2s8L2E+PGEgaHJlZj1cXFwiI1xcXCI+T21lbWFuZW48L2E+PC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2PjxhIGNsYXNzPVxcXCJpbWFnZVxcXCIgaHJlZj1cXFwiaHR0cHM6Ly9jb2RlcGVuLmlvL3otXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtaW1hZ2U6IHVybCgmcXVvdDtodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xOTkwMTEvaGFwcHkuc3ZnJnF1b3Q7KVxcXCI+PC9hPlxcclxcbiAgICAgIDxwPsKpMjAxOSBOb3QgUmVhbGx5PC9wPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbjwvZGl2Plxcclxcbjxzdmcgc3R5bGU9XFxcIiB0b3A6MTAwdmhcXFwiPlxcclxcbiAgPGRlZnM+XFxyXFxuICAgIDxmaWx0ZXIgaWQ9XFxcImJsb2JcXFwiPlxcclxcbiAgICAgIDxmZUdhdXNzaWFuQmx1ciBpbj1cXFwiU291cmNlR3JhcGhpY1xcXCIgc3RkRGV2aWF0aW9uPVxcXCIxMFxcXCIgcmVzdWx0PVxcXCJibHVyXFxcIj48L2ZlR2F1c3NpYW5CbHVyPlxcclxcbiAgICAgIDxmZUNvbG9yTWF0cml4IGluPVxcXCJibHVyXFxcIiBtb2RlPVxcXCJtYXRyaXhcXFwiIHZhbHVlcz1cXFwiMSAwIDAgMCAwICAwIDEgMCAwIDAgIDAgMCAxIDAgMCAgMCAwIDAgMTkgLTlcXFwiIHJlc3VsdD1cXFwiYmxvYlxcXCI+PC9mZUNvbG9yTWF0cml4PlxcclxcbiAgICAgIGZlQ29tcG9zaXRlKGluPVxcXCJTb3VyY2VHcmFwaGljXFxcIiBpbjI9XFxcImJsb2JcXFwiIG9wZXJhdG9yPVxcXCJhdG9wXFxcIikgLy9BZnRlciByZXZpZXdpbmcgdGhpcyBhZnRlciB5ZWFycyBJIGNhbid0IHJlbWVtYmVyIHdoeSBJIGFkZGVkIHRoaXMgYnV0IGl0IGlzbid0IG5lY2Vzc2FyeSBmb3IgdGhlIGJsb2IgZWZmZWN0XFxyXFxuPC9maWx0ZXI+XFxyXFxuPC9kZWZzPlxcclxcbjwvc3ZnPlxcclxcbi0tPlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPG5hdiBhcmlhLWxhYmVsPVxcXCIuLi5cXFwiPlxcclxcbiAgICA8ZGl2PlxcclxcbiAgICAgICAgPGgxIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+R2VzdGlzY2kgVXRlbnRpIFJlZ2lzdHJhdGk8L2gxPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPHVsIGlkPVxcXCJ1c2VyTGlzdFxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgXFxyXFxuICAgIDwvdWw+XFxyXFxuICAgIDx1bCBpZD1cXFwicGFnaW5hdGlvblxcXCIgY2xhc3M9XFxcInBhZ2luYXRpb24gcGFnaW5hdGlvbi1zbSBteS0yXFxcIj5cXHJcXG4gICAgICAgIFxcclxcbiAgICA8L3VsPlxcclxcbjwvbmF2PlxcclxcblwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBpZD1cXFwiYmdhcm91bmRcXFwiIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlciBteS01XFxcIj5cXHJcXG4gICAgPGltZyBzcmM9XFxcIi4vaW1nL3ZpZGVvZ2FtZWxvdmVyLnBuZ1xcXCIgYWx0PVxcXCJub3QgZm91bmRcXFwiIGNsYXNzPVxcXCJoZWFkZXJJbWcgbXgtYXV0b1xcXCIgc3R5bGU9XFxcIndpZHRoOiA1MCU7IFxcXCIgaWQ9XFxcImhlYWRlckltZ1xcXCI+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPHN0eWxlPlxcclxcblxcclxcbiAgLndpZGdldEludHJvIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLndpZGdldEludHJvLWRpdntcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICNhbm5DYXJkIHtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2ltZ0NhcmQge1xcclxcbiAgICBoZWlnaHQ6IDYwJTtcXHJcXG4gICAgd2lkdGg6Zml0LWNvbnRlbnQ7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5idG46aG92ZXIge1xcclxcbiAgICBvdXRsaW5lLWNvbG9yOiB0cmFuc3BhcmVudCA7XFxyXFxuICAgIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggIzVhMDFhNztcXHJcXG4gICAgdHJhbnNpdGlvbjogMC43cztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pbWdTIHtcXHJcXG4gICAgd2lkdGg6IDU0cHg7XFxyXFxuICAgIGhlaWdodDogNDJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGJvZHkge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgfVxcclxcblxcclxcbiAgLndpZGdldFBpYyB7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucGljUmlnaHQge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5waWNsZWZ0IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWMge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMCU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXHJcXG4gICAgcGFkZGluZzogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wIHtcXHJcXG4gICAgcGFkZGluZzogMHB4O1xcclxcbiAgfVxcclxcbiBcXHJcXG48L3N0eWxlPlxcclxcblxcclxcbjxzZWN0aW9uIGNsYXNzPVxcXCJwIHNlYyBib3JkZXIgYm9yZGVyLXN1Y2Nlc3MgbWItMiBib3JkZXItb3BhY2l0eS01MCByb3VuZGVkIHJvdyBhbGluZy1pdGVtLXN0YXJ0XFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcInAgY29sLTRcXFwiPlxcclxcbiAgICA8cGljdHVyZT5cXHJcXG4gICAgICA8aW1nIGNsYXNzPVxcXCJ3aWRnZXRQaWMgcGljTGVmdCByb3VuZGVkLXN0YXJ0XFxcIiBzcmM9XFxcIi4vaW1nL2dhbWVzZWFyY2guanBlZ1xcXCIgc3R5bGU9XFxcIndpZHRoOjEwMCVcXFwiIGFsdD1cXFwiXFxcIj5cXHJcXG4gICAgPC9waWN0dXJlPlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJib3JkZXItc3RhcnQgYm9yZGVyLTMgYm9yZGVyLXByaW1hcnkgY29sLTggdGV4dC1zdGFydCB3aWRnZXRUZXh0XFxcIj5cXHJcXG4gICAgPGgxPlxcclxcbiAgICAgIDxiPklsIHBvcnRhbGUgZGVpIHZlcmkgZ2FtZXJzLjwvYj5cXHJcXG4gICAgPC9oMT5cXHJcXG4gICAgPGgyPlxcclxcbiAgICAgIFNlaSBhbGxhIHJpY2VyY2EgZGkgdW4gZ2lvY28sIHZlY2NoaW8gbyBudW92byBjaGUgc2lhLCBtYSBub24gcmllc2NpIGEgdHJvdmFybG8/IE5vaSBhYmJpYW1vIGxhIHNvbHV6aW9uZSBwZXIgdGUuLi5cXHJcXG4gICAgICBDZXJjYSB0cmEgY2VudGluYWlhIGRpIGFubnVuY2kgaWwgdGl0b2xvIGNoZSBub24gdHJvdmF2aSBwacO5LCBtZXR0aXRpIGluIGNvbnRhdHRvIGNvbiBsJ3V0ZW50ZSBjaGUgbG8gc3RhIHNjYW1iaWFuZG8gXFxyXFxuICAgICAgZSBmYWkgbCdhZmZhcmUgZGVsIHNlY29sby4uLlxcclxcbiAgICA8L2gyPlxcclxcbiAgPC9kaXY+XFxyXFxuPC9zZWN0aW9uPlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciB0ZXh0LWNlbnRlclxcXCIgc3R5bGU9XFxcIm1hcmdpbi10b3A6IDEwJTsgbWFyZ2luLWJvdHRvbTogMTAlO1xcXCI+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIHN0eWxlPVxcXCJtYXJnaW4tbGVmdDoxMCU7bWFyZ2luLXJpZ2h0OjEwJTtcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgdGV4dC1iZy1kYW5nZXJcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMThyZW07aGVpZ2h0OiAxMDAlO1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICA8aDUgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPkNlcmNhPC9oNT5cXHJcXG4gICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+Q2VyY2EgaWwgdHVvIGdpb2NvIHByZWZlcmVpdG8gdHJhIGNlbnRpbmFpYSBkaSBhbm51bmNpPC9wPlxcclxcbiAgICAgICAgICA8aHI+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwIG1iLTMgZm9ybS1jb250cm9sIGJvcmRlciByb3VuZGVkXFxcIiBzdHlsZT1cXFwibWFyZ2luLXRvcDogMTBweDtcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGJvcmRlci0wXFxcIiBpZD1cXFwic2VhcmNoVGl0bGVcXFwiIHBsYWNlaG9sZGVyPVxcXCJDZXJjYVxcXCIgYXJpYS1sYWJlbD1cXFwic2VhcmNoXFxcIiBhcmlhLWRlc2NyaWJlZGJ5PVxcXCJiYXNpYy1hZGRvbjJcXFwiPlxcclxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJzZWFyY2hCdXR0b25UaXRsZVxcXCIgaHJlZj1cXFwiI1xcXCI+PGltZyBjbGFzcz1cXFwibXMtMSBidG4gaW1nU1xcXCIgc3JjPVxcXCIuL2ltZy9zZWFyY2gucG5nXFxcIiBhbHQ9XFxcIlxcXCI+PC9hPlxcclxcbiAgICAgICAgICA8L2Rpdj4gXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbFxcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZCB0ZXh0LWJnLXByaW1hcnlcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMThyZW07aGVpZ2h0OiAxMDAlO1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICA8aDUgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPkVzcGxvcmE8L2g1PlxcclxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj5Fc3Bsb3JhIG1pZ2xpYWxpYSBkaSBnaW9jaGkgdHJhIGdsaSBhbm51bmNpIHByZXNlbnRpPC9wPlxcclxcbiAgICAgICAgICA8aHI+XFxyXFxuICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGlkPVxcXCJpbnNlcnRpb25zQ2FyZFxcXCIgY2xhc3M9XFxcImJ0biBidG4taW5mb1xcXCI+QW5udW5jaTwvYT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sXFxcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIHRleHQtYmctc3VjY2Vzc1xcXCIgc3R5bGU9XFxcIndpZHRoOiAxOHJlbTtoZWlnaHQ6IDEwMCU7XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuICAgICAgICAgIDxoNSBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+U2NhbWJpYTwvaDU+XFxyXFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPkhhaSB1biBnaW9jbyBkaSBjdWkgbm9uIHRlIG5lIGZhaSBwacO5IG51bGxhIHBlciBsZSBtaWxpYXJkaSBkaSB2b2x0ZSBjaGUgbG8gaGFpIGZpbml0bz9cXHJcXG4gICAgICAgICAgICBpbnNlcmlzY2kgcXVpIGlsIHR1byBhbm51bmNpbyFcXHJcXG4gICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgICA8aHI+XFxyXFxuICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGlkPVxcXCJpbnNlcnRDYXJkXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1saWdodFxcXCI+SW5zZXJpc2NpIEFubnVuY2lvPC9hPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPHNlY3Rpb24gY2xhc3M9XFxcInAgc2VjIGJvcmRlciBib3JkZXItc3VjY2VzcyBtYi0yIGJvcmRlci1vcGFjaXR5LTUwIHJvdW5kZWQgcm93IGFsaW5nLWl0ZW0tc3RhcnRcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiYm9yZGVyLWVuZCBib3JkZXItMyBib3JkZXItcHJpbWFyeSBjb2wtOCB0ZXh0LXN0YXJ0IHdpZGdldFRleHRcXFwiPlxcclxcbiAgICA8aDE+XFxyXFxuICAgICAgPGI+SWwgcG9ydGFsZSBkZWkgdmVyaSBnYW1lcnMuPC9iPlxcclxcbiAgICA8L2gxPlxcclxcbiAgICA8aDI+XFxyXFxuICAgICAgU2VpIGFsbGEgcmljZXJjYSBkaSB1biBnaW9jbywgdmVjY2hpbyBvIG51b3ZvIGNoZSBzaWEsIG1hIG5vbiByaWVzY2kgYSB0cm92YXJsbz8gTm9pIGFiYmlhbW8gbGEgc29sdXppb25lIHBlciB0ZS4uLlxcclxcbiAgICAgIENlcmNhIHRyYSBjZW50aW5haWEgZGkgYW5udW5jaSBpbCB0aXRvbG8gY2hlIG5vbiB0cm92YXZpIHBpw7ksIG1ldHRpdGkgaW4gY29udGF0dG8gY29uIGwndXRlbnRlIGNoZSBsbyBzdGEgdmVuZGVuZG8sIFxcclxcbiAgICAgIGUgZmFpIGwnYWZmYXJlIGRlbCBzZWNvbG8uLi5cXHJcXG4gICAgPC9oMj5cXHJcXG4gIDwvZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwicCBjb2wtNFxcXCI+XFxyXFxuICAgIDxwaWN0dXJlPlxcclxcbiAgICAgIDxpbWcgY2xhc3M9XFxcIndpZGdldFBpYyBwaWNSaWdodCByb3VuZGVkLWVuZFxcXCIgc3JjPVxcXCIuL2ltZy9nYW1ldHJhZGUucG5nXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwJVxcXCIgYWx0PVxcXCJcXFwiPlxcclxcbiAgICA8L3BpY3R1cmU+XFxyXFxuICA8L2Rpdj5cXHJcXG48L3NlY3Rpb24+XFxyXFxuXFxyXFxuPGgxPjxiPlVsdGltaSBhbm51bmNpOjwvYj48L2gxPlxcclxcbjxoMj5Db250cm9sbGEgcXVpIGdsaSB1bHRpbWkgYW5udW5jaTwvaDI+XFxyXFxuPGRpdiBpZD1cXFwiY2Fyb3VzZWxFeGFtcGxlQ29udHJvbHNcXFwiIGNsYXNzPVxcXCJjYXJvdXNlbCBzbGlkZVxcXCIgZGF0YS1icy1yaWRlPVxcXCJjYXJvdXNlbFxcXCI+XFxyXFxuICAgIDxkaXYgaWQ9XFxcImlubmVyQ2Fyb3VzZWxIb21lXFxcIiBjbGFzcz1cXFwiY2Fyb3VzZWwtaW5uZXJcXFwiPlxcclxcbiAgICAgICBcXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxidXR0b24gY2xhc3M9XFxcImNhcm91c2VsLWNvbnRyb2wtcHJldlxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRhcmdldD1cXFwiI2Nhcm91c2VsRXhhbXBsZUNvbnRyb2xzXFxcIiBkYXRhLWJzLXNsaWRlPVxcXCJwcmV2XFxcIj5cXHJcXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+UHJldmlvdXM8L3NwYW4+XFxyXFxuICAgIDwvYnV0dG9uPlxcclxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYXJvdXNlbC1jb250cm9sLW5leHRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10YXJnZXQ9XFxcIiNjYXJvdXNlbEV4YW1wbGVDb250cm9sc1xcXCIgZGF0YS1icy1zbGlkZT1cXFwibmV4dFxcXCI+XFxyXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPk5leHQ8L3NwYW4+XFxyXFxuICAgIDwvYnV0dG9uPlxcclxcbiAgPC9kaXY+XFxyXFxuXFxyXFxuPHNlY3Rpb24gY2xhc3M9XFxcInAgc2VjIGJvcmRlciBib3JkZXItc3VjY2VzcyBtYi0yIGJvcmRlci1vcGFjaXR5LTUwIHJvdW5kZWQgcm93IGFsaW5nLWl0ZW0tc3RhcnRcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwicCBjb2wtNFxcXCI+XFxyXFxuICAgIDxwaWN0dXJlPlxcclxcbiAgICAgIDxpbWcgY2xhc3M9XFxcIndpZGdldFBpYyBwaWNMZWZ0IHJvdW5kZWQtc3RhcnRcXFwiIHNyYz1cXFwiLi9pbWcvUmV1bmlvbi5qcGVnXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwJVxcXCIgYWx0PVxcXCJcXFwiPlxcclxcbiAgICA8L3BpY3R1cmU+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImJvcmRlci1zdGFydCBib3JkZXItMyBib3JkZXItcHJpbWFyeSBjb2wtOCB0ZXh0LXN0YXJ0IHdpZGdldFRleHRcXFwiPlxcclxcbiAgICA8aDE+XFxyXFxuICAgICAgPGI+Q2hpIFNpYW1vPC9iPlxcclxcbiAgICA8L2gxPlxcclxcbiAgICA8aDI+XFxyXFxuICAgICAgU2lhbW8gdW4gcHVudG8gZCdpbmNvbnRybyBwZXIgdHV0dGkgcXVlbGxpIGNoZSBzaSBzb25vIGFwcGFzc2lvbmF0aSBhIHF1ZWwgbW9uZG8gbWFnaWNvIHJpbmNoaXVzbyBhbGwnaW50ZXJub1xcclxcbiAgICAgIGRpIHVuYSBjYXJ0dWNjaWEsIGRpc2NvIG8gc2NoZWRhLCBkYW5kb2dsaSBsJ29wcG9ydHVuaXTDoCBkaSBwb3RlciByaXRyb3ZhcmUgdmVjY2hpIHNvZ25pLCBlIHNjYW1iaWFybGkgY29uIGFsY3VuaSBudW92aS5cXHJcXG4gICAgICBMJ29wcG9ydHVuaXRhIGRpIGNvbm9zY2VyZSBwZXJzb25lIGRlbGxvIHN0ZXNzbyBwYXJlcmUsIG8gb3Bwb3N0by5cXHJcXG4gICAgPC9oMj5cXHJcXG4gIDwvZGl2Plxcclxcbjwvc2VjdGlvbj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICA8bGFiZWwgZm9yPVxcXCJ1c2VybmFtZVNpZ25JblxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPk5pY2tuYW1lPC9sYWJlbD5cXHJcXG4gICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJ1c2VybmFtZVNpZ25JblxcXCI+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgIDxsYWJlbCBmb3I9XFxcInBhc3N3b3JkU2lnbkluXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+UGFzc3dvcmQ8L2xhYmVsPlxcclxcbiAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJwYXNzd29yZFNpZ25JblxcXCI+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwibWItMyBmb3JtLWNoZWNrXFxcIj5cXHJcXG4gICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBjbGFzcz1cXFwiZm9ybS1jaGVjay1pbnB1dFxcXCIgaWQ9XFxcInJlbWVtYmVyTWVTaWduSW5cXFwiPlxcclxcbiAgICA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY2hlY2stbGFiZWxcXFwiIGZvcj1cXFwicmVtZW1iZXJNZVNpZ25JblxcXCI+Umljb3JkYW1pPC9sYWJlbD5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGlkPVxcXCJsb2dpblJlc3VsdFxcXCIgY2xhc3M9XFxcIm15LTNcXFwiPlxcclxcblxcclxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGJ1dHRvbiBpZD1cXFwidHJ5VG9Mb2dcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCI+QWNjZWRpPC9idXR0b24+XFxyXFxuPHA+Tm9uIHNlaSBhbmNvcmEgcmVnaXN0cmF0bz88L3A+XFxyXFxuPGJ1dHRvbiBpZD1cXFwibG9naW5TaWduVXBcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCI+UmVnaXN0cmF0aTwvYnV0dG9uPlxcclxcbjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIGRhdGEtYnMtZGlzbWlzcz1cXFwibW9kYWxcXFwiPkNoaXVkaTwvYnV0dG9uPlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBjbGFzcz1cXFwidGV4dC1jZW50ZXIgbWItM1xcXCI+XFxyXFxuICAgIDxoMz5PaCwgY2kgZGlzcGlhY2UgY2hlIHZhaSB2aWEhPGJyPlRvcm5hIGEgdHJvdmFyY2khPC9oMz5cXHJcXG4gICAgPGltZyBzcmM9XFxcIi4vaW1nL2ZhZEZhY2UucG5nXFxcIiB3aWR0aD1cXFwiMTAwXFxcIiBhbHQ9XFxcImltbWFnaW5lIHRyaXN0ZVxcXCI+XFxyXFxuPC9kaXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiBpZD1cXFwibXlNb2RhbFxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcInNpZ25Jbk1vZGFsTGFiZWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1jZW50ZXJlZFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XFxcIm1vZGFsLXRpdGxlIGZzLTVcXFwiIGlkPVxcXCJzaWduSW5Nb2RhbExhYmVsXFxcIj5BY2NvdW50PC9oMT5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4tY2xvc2VcXFwiIGRhdGEtYnMtZGlzbWlzcz1cXFwibW9kYWxcXFwiIGFyaWEtbGFiZWw9XFxcIkNsb3NlXFxcIj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGlkPVxcXCJteU1vZGFsQm9keVxcXCIgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGlkPVxcXCJteU1vZGFsRm9vdGVyXFxcIiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8IS0tbmF2YmFyIGNvbnRyb2xsZXIgaWNvbi0tPlxcclxcbjxidXR0b24gaWQ9XFxcImxvZ29cXFwiIGNsYXNzPVxcXCJsb2dvLWJ1dHRvblxcXCI+IDxpbWcgY2xhc3M9XFxcImxvZ29cXFwiIHNyYz1cXFwiLi9pbWcvbG9nby5wbmdcXFwiIGFsdD1cXFwibG9nb1xcXCI+PC9idXR0b24+XFxyXFxuPGJ1dHRvbiBpZD1cXFwiZ2FtZXNcXFwiIGNsYXNzPVxcXCJsb2dvLWJ1dHRvbiBiYWNrLXRyYW5zcGFyZW50XFxcIj4gPGltZyBjbGFzcz1cXFwibG9nb1xcXCIgc3JjPVxcXCIuL2ltZy9qb3lzdGljaygxKS5wbmdcXFwiXFxyXFxuICAgIGFsdD1cXFwibG9nb1xcXCI+PC9idXR0b24+XFxyXFxuPG5hdj5cXHJcXG4gIDx1bD5cXHJcXG4gICAgPCEtLW5hdmJhciBidXR0b25zLS0+XFxyXFxuICAgIDwhLS1uYXZiYXIgY29udHJvbGxlciBpY29uLS0+XFxyXFxuXFxyXFxuICAgIDwhLS15IGJ1dHRvbi0tPlxcclxcbiAgICA8YnV0dG9uIGlkPVxcXCJpbnNlcnRpb25zXFxcIiBjbGFzcz1cXFwiYnV0dG9uLW9uZSBuYXYtYnV0dG9uXFxcIj5Bbm51bmNpPC9idXR0b24+XFxyXFxuICAgIDwhLS1hIGJ1dHRvbi0tPlxcclxcbiAgICA8YnV0dG9uIGlkPVxcXCJhZGRJbnNlcnRpb25cXFwiIGNsYXNzPVxcXCJidXR0b24tdGhyZWUgbmF2LWJ1dHRvblxcXCI+Q3JlYSBBbm51bmNpbzwvYnV0dG9uPlxcclxcbiAgICA8IS0teCBidXR0b24tLT5cXHJcXG4gICAgPGJ1dHRvbiBpZD1cXFwibWFuYWdlbWVudFxcXCIgY2xhc3M9XFxcImJ1dHRvbi10d28gbmF2LWJ1dHRvblxcXCI+R2VzdGlvbmUgVXRlbnRpPC9idXR0b24+XFxyXFxuICAgIDwhLS1hIGJ1dHRvbi0tPlxcclxcbiAgICA8YnV0dG9uIGlkPVxcXCJpbnNNYW5hZ2VtZW50XFxcIiBjbGFzcz1cXFwiYnV0dG9uLXRocmVlIG5hdi1idXR0b25cXFwiPkdlc3Rpb25lIEFubnVuY2k8L2J1dHRvbj5cXHJcXG4gICAgPCEtLWIgYnV0dG9uLS0+XFxyXFxuICAgIDxidXR0b24gaWQ9XFxcImxvZ2luXFxcIiBjbGFzcz1cXFwiYnV0dG9uLWZvdXIgbmF2LWJ1dHRvblxcXCIgZGF0YS1icy10b2dnbGU9XFxcIm1vZGFsXFxcIiBkYXRhLWJzLXRhcmdldD1cXFwiI215TW9kYWxcXFwiPkxvZ2luPC9idXR0b24+XFxyXFxuICAgIDwhLS1iIGJ1dHRvbi0tPlxcclxcbiAgICA8YnV0dG9uIGlkPVxcXCJzaWduT3V0QnV0dG9uXFxcIiBjbGFzcz1cXFwiYnV0dG9uLWZvdXIgbmF2LWJ1dHRvblxcXCIgZGF0YS1icy10b2dnbGU9XFxcIm1vZGFsXFxcIlxcclxcbiAgICAgIGRhdGEtYnMtdGFyZ2V0PVxcXCIjbXlNb2RhbFxcXCI+TG9nb3V0PC9idXR0b24+XFxyXFxuICAgIDxidXR0b24gaWQ9XFxcInByb2ZpbGVcXFwiIGNsYXNzPVxcXCJwcm9maWxlLWJ1dHRvblxcXCI+XFxyXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcInBvc2l0aW9uLWFic29sdXRlIHRvcC0yIHN0YXJ0LTkwIHRyYW5zbGF0ZS1taWRkbGUgcC0yIGJnLWRhbmdlciBib3JkZXIgYm9yZGVyLWxpZ2h0IHJvdW5kZWQtY2lyY2xlXFxcIj5cXHJcXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPk5ldyBhbGVydHM8L3NwYW4+XFxyXFxuICAgICAgPC9zcGFuPlxcclxcbiAgICAgIDxpbWcgY2xhc3M9XFxcImxvZ28gcHJvZmlsZVxcXCIgc3JjPVxcXCIuL2ltZy9wcm9maWxlLnBuZ1xcXCIgYWx0PVxcXCJsb2dvXFxcIj5cXHJcXG4gICAgPC9idXR0b24+XFxyXFxuICA8L3VsPlxcclxcblxcclxcblxcclxcbjwvbmF2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPHN0eWxlPlxcclxcbiAgICAjbWFpbntcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcXHJcXG4gICAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgcmdiKDYzLCA2MywgNjgpO1xcclxcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgcmdiKDYzLCA2MywgNjgpO1xcclxcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHJnYig2MywgNjMsIDY4KTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XFxyXFxuPGRpdiBjbGFzcz1cXFwicm93IG10LTQgbWItNFxcXCI+XFxyXFxuICAgIDxkaXYgaWQ9XFxcInRpdGxlcHJvZmlsZVxcXCIgY2xhc3M9XFxcImNvbC0xMiB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuXFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcInJvdyBtdC0yIG1iLTRcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtMTIgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgPGgyPlxcclxcbiAgICAgICAgICAgIDxiPkVjY28gdW4gcmllcGlsb2dvIGRlaSB0dW9pIGRhdGk6PC9iPlxcclxcbiAgICAgICAgPC9oMj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwicm93IG10LTUgbWItMlxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC0yIHRleHQtZW5kXFxcIj5cXHJcXG4gICAgICAgIDxoMj5cXHJcXG4gICAgICAgICAgICA8YnI+PGJyPjxicj4gPGI+VXNlcm5hbWU8L2I+OiBcXHJcXG4gICAgICAgICAgICA8YnI+PGJyPiA8Yj5FbWFpbDwvYj46IFxcclxcbiAgICAgICAgICAgIDxicj48YnI+IDxiPk5vbWU8L2I+OiBcXHJcXG4gICAgICAgICAgICA8YnI+PGJyPiA8Yj5Db2dub21lPC9iPjogXFxyXFxuICAgICAgICA8L2gyPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBpZD1cXFwiYm9keXByb2ZpbGVcXFwiIGNsYXNzPVxcXCJjb2wtNCB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuXFxyXFxuXFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGlkPVxcXCJidXR0b25zLXByb2ZpbGVcXFwiIGNsYXNzPVxcXCJjb2wtMiB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICA8YnI+XFxyXFxuICAgICAgICA8YnI+XFxyXFxuICAgICAgICA8YnI+XFxyXFxuICAgICAgICA8YnI+XFxyXFxuICAgICAgICA8YnI+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcblxcclxcbiAgICA8ZGl2IGlkPVxcXCJpbnB1dC1wcm9maWxlXFxcIiBjbGFzcz1cXFwiY29sLTQgXFxcIj5cXHJcXG4gICAgICAgIDxicj5cXHJcXG4gICAgICAgIDxicj5cXHJcXG4gICAgICAgIDxicj5cXHJcXG4gICAgICAgIDxicj5cXHJcXG4gICAgICAgIDxicj5cXHJcXG4gICAgICAgIDxkaXYgIGNsYXNzPVxcXCJpbnB1dC1ncm91cCBtYi0zXFxcIiA+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtcHJlcGVuZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC10ZXh0XFxcIiBpZD1cXFwiYmFzaWMtYWRkb24xXFxcIj5Vc2VybmFtZTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XFxcInVzZXJuYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiVXNlcm5hbWVcXFwiIGFyaWEtbGFiZWw9XFxcIlVzZXJuYW1lXFxcIlxcclxcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVxcXCJiYXNpYy1hZGRvbjFcXFwiPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2ICBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgbWItMyBteS00XFxcIiA+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtcHJlcGVuZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC10ZXh0XFxcIiBpZD1cXFwiYmFzaWMtYWRkb24xXFxcIj5FbWFpbDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XFxcImVtYWlsXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW1haWxcXFwiIGFyaWEtbGFiZWw9XFxcIkVtYWlsXFxcIlxcclxcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVxcXCJiYXNpYy1hZGRvbjFcXFwiPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcInJvdyBtdC0yIG1iLTRcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtMTIgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgPGJyPlxcclxcbiAgICAgICAgPGJyPlxcclxcbiAgICAgICAgPGJyPlxcclxcbiAgICAgICAgPGgzPjxiPkNhbWJpbyBQYXNzd29yZDwvYj48L2gzPlxcclxcbiAgICAgICAgPGJyPlxcclxcbiAgICAgICAgPGJyPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLTYgdGV4dC1lbmRcXFwiPlxcclxcbiAgICAgICAgPGRpdiAgY2xhc3M9XFxcImlucHV0LWdyb3VwIG1iLTNcXFwiID5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cC1wcmVwZW5kXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLXRleHRcXFwiIGlkPVxcXCJiYXNpYy1hZGRvbjFcXFwiPlZlY2NoaWEgcGFzc3dvcmQ8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJvbGRQYXNzd29yZFxcXCIgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJWZWNjaGlhUGFzc3dvcmRcXFwiIGFyaWEtbGFiZWw9XFxcIlZlY2NoaWFQYXNzd29yZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cXFwiYmFzaWMtYWRkb24xXFxcIj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLTYgdGV4dC1zdGFydFxcXCI+XFxyXFxuICAgICAgICA8ZGl2ICBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgbWItM1xcXCIgPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwLXByZXBlbmRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtdGV4dFxcXCIgaWQ9XFxcImJhc2ljLWFkZG9uMVxcXCI+TnVvdmEgUGFzc3dvcmQ8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJuZXdQYXNzd29yZFxcXCIgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJOdW92YVBhc3N3b3JkXFxcIiBhcmlhLWxhYmVsPVxcXCJOdW92YVBhc3N3b3JkXFxcIlxcclxcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVxcXCJiYXNpYy1hZGRvbjFcXFwiPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2ICBpZD1cXFwiY3BcXFwiIGNsYXNzPVxcXCJjb2wtMTIgdGV4dC1jZW50ZXIgbXktNVxcXCI+XFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgXFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcInJvdyBtdC0yIG1iLTRcXFwiPlxcclxcbiAgICA8ZGl2IGlkPVxcXCJnYW1lc0xpc3RcXFwiIGNsYXNzPVxcXCJjb2wtMTIgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgXFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGZvcm0+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwibmFtZVNpZ25VcFxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPk5vbWU8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJuYW1lU2lnblVwXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwic3VybmFtZVNpZ25VcFxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPkNvZ25vbWU8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJzdXJuYW1lU2lnblVwXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwidXNlcm5hbWVTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5OaWNrbmFtZTwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInVzZXJuYW1lU2lnblVwXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiZW1haWxTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5FbWFpbDwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJlbWFpbFNpZ25VcFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcInBhc3N3b3JkU2lnblVwXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+UGFzc3dvcmQ8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwicGFzc3dvcmRTaWduVXBcXFwiIHJlcXVpcmVkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJjb25maXJtX3Bhc3N3b3JkU2lnblVwXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+Q29uZmVybWEgUGFzc3dvcmQ8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiY29uZmlybV9wYXNzd29yZFNpZ25VcFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGlkPVxcXCJzaWduVXBSZXN1bHRcXFwiIGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9mb3JtPlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGJ1dHRvbiBpZD1cXFwic2lnblVwTG9naW5cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+QWNjZWRpPC9idXR0b24+XFxyXFxuPGJ1dHRvbiBpZD1cXFwidHJ5dG9TaWduVXBcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgZGlzYWJsZWQ+UmVnaXN0cmF0aTwvYnV0dG9uPlxcclxcbjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIGRhdGEtYnMtZGlzbWlzcz1cXFwibW9kYWxcXFwiPkNoaXVkaTwvYnV0dG9uPlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBpZD1cXFwiY3JlYXRlVkdDb250YWluZXJcXFwiIGNsYXNzPVxcXCJjb250YWluZXIgbXktNSBiYWNrLXNlbWktdHJhbnNwYXJlbnRcXFwiIHN0eWxlPVxcXCJib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgcmdiKDE3MSwgMjA5LCA1Nyk7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCByZ2IoMTcxLCAyMDksIDU3KTtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgcmdiKDE3MSwgMjA5LCA1Nyk7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmdiKDE3MSwgMjA5LCA1Nyk7XFxyXFxuICAgIFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvdyBhbGlnbi1pdGVtcy1zdGFydFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNFxcXCIgc3R5bGU9XFxcIlxcclxcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgcmdiKDE3MSwgMjA5LCA1Nyk7IFxcclxcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYigxNzEsIDIwOSwgNTcpO1xcclxcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgICBcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJteS0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPjxiPkNyZWEgY29uc29sZSBlIGdlbmVyaTwvYj48L2gyPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibmV3R2VucmVcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj48Yj5OdW92byBHZW5lcmU8L2I+PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJuZXdHZW5yZVxcXCIgcGxhY2Vob2xkZXI9XFxcIkluc2VyaXNjaSBudW92byBnZW5lcmVcXFwiPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcIm5ld0dlbnJlQnRuXFxcIiBjbGFzcz1cXFwiYnRuIG1iLTQgYnV0dG9uLWhvdmVyXFxcIj48Yj5DcmVhPC9iPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJuZXdDb25zb2xlXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+PGI+TnVvdmEgQ29uc29sZTwvYj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcIm5ld0NvbnNvbGVcXFwiIHBsYWNlaG9sZGVyPVxcXCJJbnNlcmlzY2kgbnVvdmEgY29uc29sZVxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cXFwibmV3Q29uc29sZUJ0blxcXCIgY2xhc3M9XFxcImJ0biBtYi00IGJ1dHRvbi1ob3ZlclxcXCI+PGI+Q3JlYTwvYj48L2J1dHRvbj5cXHJcXG5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLThcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm15LTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj48Yj5JbnNlcmlzY2kgRGF0aSBWaWRlb2dpb2NvPC9iPjwvaDI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWItNVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5hbWVcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj48Yj5UaXRvbG88L2I+PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJWR25hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJJbnNlcmlzY2kgaWwgdGl0b2xvIGRlbCBnaW9jb1xcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWItNVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInllYXJcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj48Yj5Bbm5vIGRpIFVzY2l0YTwvYj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiVkd5ZWFyXFxcIiBtaW49XFxcIjE5NzBcXFwiIG1heGxlbmd0aD1cXFwiMjAyM1xcXCIgcGxhY2Vob2xkZXI9XFxcIkluc2VyaXNjaSBsJ2Fubm8gZGkgdXNjaXRhXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtYi01XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIiBmb3I9XFxcImNvdmVyXFxcIj48Yj5MaW5rIGltbWFnaW5lPC9iPjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiVkdjb3ZlclxcXCIgcGxhY2Vob2xkZXI9XFxcIkluc2VyaXNjaSBpbCBsaW5rIGRlbGxhIGNvcGVydGluYVxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvdyBhbGlnbi1pdGVtcy1zdGFydFxcXCI+XFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC00XFxcIj5cXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICA8aDQgY2xhc3M9XFxcInRleHQtZW5kXFxcIj48Yj5TZWxlemlvbmEgY2F0ZWdvcmllOjwvYj48L2g0PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgIDxkaXYgaWQ9XFxcImdlbnJlTGlzdFxcXCIgY2xhc3M9XFxcImNvbC04XFxcIj5cXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICBcXHJcXG5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93IGFsaWduLWl0ZW1zLXN0YXJ0XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC00XFxcIj5cXHJcXG4gICAgICAgICAgICA8YnI+PGJyPlxcclxcbiAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwidGV4dC1lbmRcXFwiPjxiPlNlbGV6aW9uYSBjb25zb2xlOjwvYj48L2g0PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJjb25zb2xlTGlzdFxcXCIgY2xhc3M9XFxcImNvbC04XFxcIj5cXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGJ1dHRvbiBpZD1cXFwibmV3VmlkZW9HYW1lQnRuXFxcIiBjbGFzcz1cXFwiYnRuIG1iLTQgYnV0dG9uLWhvdmVyXFxcIj48Yj5DcmVhPC9iPjwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG48L2Rpdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxzdHlsZT5cXHJcXG4gICAgLmJ0bjpob3ZlciB7XFxyXFxuICAgICAgICBvdXRsaW5lLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICAgIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgNHB4ICM1YTAxYTc7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjdzO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNzZWFyY2hUaXRsZTpob3ZlciB7XFxyXFxuICAgICAgICBvdXRsaW5lLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICAgIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgNHB4ICM1YTAxYTc7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjdzO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNzZWFyY2hUaXRsZSB7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAtM3B4IDAgYmxhY2ssIDAgM3B4IGJsYWNrLCAzcHggMCBibGFjaywgMCAtM3B4IGJsYWNrO1xcclxcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDIwJTtcXHJcXG4gICAgICAgIGZsb2F0OiBib3R0b207XFxyXFxuICAgICAgICBhbGlnbi1zZWxmOiByaWdodDtcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XFxyXFxuXFxyXFxuPGRpdiBzdHlsZT1cXFwiZGlzcGxheTogZmxleDtcXFwiIGNsYXNzPVxcXCJteS01XFxcIj5cXHJcXG5cXHJcXG4gICAgPHNwYW4gc3R5bGU9XFxcIm1hcmdpbi1yaWdodDogNDBweFxcXCI+XFxyXFxuICAgICAgICA8aW1nIHNyYz1cXFwiLi9pbWcvYnV0dG9uL3Nob3dhbGxCdG4ucG5nXFxcIiBjbGFzcz1cXFwiYnRuIHAtMFxcXCIgaGVpZ2h0PVxcXCIzNVxcXCJcXHJcXG4gICAgICAgICAgICBzdHlsZT1cXFwiYm9yZGVyOm5vbmU7aW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGlkPVxcXCJzZWxlY3RBbGxHYW1lc1xcXCI+XFxyXFxuICAgIDwvc3Bhbj5cXHJcXG4gICAgPCEtLWZ1bnppb25lIGNoZSBwcmVuZGUgdHV0dGkgZ2xpIGFubnVuY2kgZSBsaSBzY2hpYWZmYSBuZWwgY29udGVudXRvIGFubnVuY2ktLT5cXHJcXG4gICAgPHNwYW4gc3R5bGU9XFxcIm1hcmdpbi1yaWdodDogNDBweFxcXCIgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXHJcXG4gICAgICAgIDxpbWcgc3JjPVxcXCIuL2ltZy9idXR0b24vYnlnZW5yZUJ0bi5wbmdcXFwiIGNsYXNzPVxcXCJidG4gcC0wIGRyb3Bkb3duLXRvZ2dsZVxcXCIgaGVpZ2h0PVxcXCIzNVxcXCJcXHJcXG4gICAgICAgICAgICBzdHlsZT1cXFwiYm9yZGVyOm5vbmU7aW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCJcXHJcXG4gICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCI+XFxyXFxuICAgICAgICA8dWwgaWQ9XFxcImdhbWVHZW5yZXNcXFwiIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXHJcXG5cXHJcXG4gICAgICAgIDwvdWw+XFxyXFxuICAgIDwvc3Bhbj5cXHJcXG5cXHJcXG4gICAgPHNwYW4gc3R5bGU9XFxcIm1hcmdpbi1yaWdodDogNDBweFxcXCIgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXHJcXG4gICAgICAgIDwhLS1RdWVzdG8gw6ggaWwgZmlsdHJvIHBlciBsZSBjb25zb2xsZXMgdmEgY2FtYmlhdGEgbCdpbW1hZ2luZSBkZWwgYm90dG9uZS0tPlxcclxcbiAgICAgICAgPGltZyBzcmM9XFxcIi4vaW1nL2J1dHRvbi9ieWNvbnNvbGVCdG4ucG5nXFxcIiBjbGFzcz1cXFwiYnRuIHAtMCBkcm9wZG93bi10b2dnbGVcXFwiIGhlaWdodD1cXFwiMzVcXFwiXFxyXFxuICAgICAgICAgICAgc3R5bGU9XFxcImJvcmRlcjpub25lO2ltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiXFxyXFxuICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiPlxcclxcbiAgICAgICAgPHVsIGlkPVxcXCJnYW1lQ29uc29sbGVzXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuXFxyXFxuICAgICAgICA8L3VsPlxcclxcbiAgICA8L3NwYW4+XFxyXFxuXFxyXFxuICAgIDxzcGFuIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IDQwcHhcXFwiIGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxyXFxuICAgICAgICA8aW1nIHNyYz1cXFwiLi9pbWcvYnV0dG9uL2J5eWVhckJ0bi5wbmdcXFwiIGNsYXNzPVxcXCJidG4gcC0wIGRyb3Bkb3duLXRvZ2dsZVxcXCIgaGVpZ2h0PVxcXCIzNVxcXCJcXHJcXG4gICAgICAgICAgICBzdHlsZT1cXFwiYm9yZGVyOm5vbmU7aW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCJcXHJcXG4gICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCI+XFxyXFxuICAgICAgICA8dWwgaWQ9XFxcImdhbWVZZWFyc1xcXCIgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcblxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgPC9zcGFuPlxcclxcbiAgICA8ZGl2IHN0eWxlPVxcXCJ2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcXCIgY2xhc3M9XFxcImNvbC1tZC0zIG14LWF1dG9cXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGJvcmRlci1kYXJrIGJvcmRlci0zIGJvcmRlciByb3VuZGVkXFxcIiB0eXBlPVxcXCJzZWFyY2hcXFwiIHBsYWNlaG9sZGVyPVxcXCJjZXJjYVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgc3R5bGU9XFxcInBhZGRpbmc6IDJweCA0cHggMnB4IDRweDttYXJnaW4tcmlnaHQ6MjBweFxcXCIgaWQ9XFxcInNlYXJjaFRpdGxlR2FtZVxcXCI+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxpbWcgc3JjPVxcXCIuL2ltZy9idXR0b24vcGx1c0J0bi5wbmdcXFwiIGNsYXNzPVxcXCJidG4gcC0wXFxcIiBpZD1cXFwiYWRkVmlkZW9nYW1lXFxcIiBhbHQ9XFxcInBsdXNcXFwiIGhlaWdodD1cXFwiMzVcXFwiXFxyXFxuICAgICAgICBzdHlsZT1cXFwiYm9yZGVyOm5vbmU7aW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGhpZGRlbj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2PlxcclxcbiAgICA8ZGl2IGlkPVxcXCJWaWRlb2dhbWVDb250ZW50XFxcIiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdj5cXHJcXG4gICAgPHVsIGlkPVxcXCJwYWdlc1ZcXFwiIGNsYXNzPVxcXCJwYWdpbmF0aW9uIHBhZ2luYXRpb24tc20gbXktMlxcXCI+XFxyXFxuXFxyXFxuICAgIDwvdWw+XFxyXFxuPC9kaXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8c3R5bGU+XFxyXFxuICAgIC5idG46aG92ZXIge1xcclxcbiAgICAgICAgb3V0bGluZS1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICBvdXRsaW5lLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCAjNWEwMWE3O1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogMC43cztcXHJcXG4gICAgfVxcclxcblxcclxcbjwvc3R5bGU+ICAgIFxcclxcbiAgICAgXFxyXFxuICAgICA8aW1nICBpZD1cXFwiYmFjay1nYW1lc1xcXCIgc3JjPVxcXCIuL2ltZy9idXR0b24vYmFjay5wbmdcXFwiICBjbGFzcz1cXFwiYnRuIHAtMFxcXCIgaGVpZ2h0PVxcXCIzNVxcXCJcXHJcXG4gICAgIHN0eWxlPVxcXCJib3JkZXI6bm9uZTtpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZDtcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgPlxcclxcblxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcInJvd1xcXCIgPlxcclxcbiAgICA8ZGl2IGlkPSBcXFwiZ2FtZVRpdGxlXFxcIiBjbGFzcz1cXFwiY29sLTEyIHRleHQtY2VudGVyXFxcIj5cXHJcXG5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgaWQ9XFxcImdhbWVJbWFnZVxcXCIgY2xhc3M9XFxcImNvbC02IHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgaWQ9XFxcImdhbWVJbmZvXFxcIiBjbGFzcz1cXFwiY29sLTYgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICBcXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgXFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJnYW1lSW5mb1xcXCIgY2xhc3M9XFxcImNvbC02IHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgXFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuICAgIFxcclxcblwiOyIsImltcG9ydCBhbm51bmNpIGZyb20gJy4vYW5udW5jaS5odG1sJ1xyXG5cclxuaW1wb3J0IGNyZWFBbm51bmNpbyBmcm9tICcuLi9jcmVhQW5udW5jaW8vY3JlYUFubnVuY2lvLmh0bWwnXHJcbmltcG9ydCBpbnNlcnRpb24gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnNlcnRpb24nO1xyXG5pbXBvcnQgZXhwYW5kSW5zZXJ0aW9uIGZyb20gJy4vYW5udW5jaW8nXHJcbmltcG9ydCBjcmVhdGVJbnNlcnRpb25QYWdlIGZyb20gJy4uL2NyZWFBbm51bmNpby9jcmVhQW5udW5jaW8nXHJcbmltcG9ydCBzaG93UHJvZmlsZSBmcm9tICcuLi9wcm9maWxvVXRlbnRlL3Byb2ZpbGUnO1xyXG5cclxubGV0IGxpc3Q6IGluc2VydGlvbltdID0gW107XHJcbmxldCBmaWx0ZXJlZExpc3Q6IGluc2VydGlvbltdPVtdXHJcbmxldCB2aWV3OiBudW1iZXIgPSA2XHJcbmxldCB0eXBlOiBzdHJpbmc7XHJcbmxldCBnZW5yZXM6IHN0cmluZ1tdO1xyXG5sZXQgeWVhcnM6IG51bWJlcltdO1xyXG5sZXQgY29uc29sbGVzOiBzdHJpbmdbXTtcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBhZ2UoKSB7ICAgICAgIC8qSW5pemlhbGl6emEgdHV0dG8gY2nDsiBjaGUgc2VydmUgYWxsYSBwYWdpbmEgcGVyIGZ1bnppb25hcmUgKi9cclxuXHJcbiAgICBmZXRjaChcIi93aG9Jc0xvZ2dlZFwiKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhID09IFwiQURNSU5cIiB8fCBkYXRhID09IFwiVVNFUlwiKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkSW5zZXJ0aW9uMlwiKS5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEluc2VydGlvbjJcIik7XHJcbiAgICAgICAgICAgIGJ0bi5vbmNsaWNrPSgpPT57XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MPWNyZWFBbm51bmNpbztcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUluc2VydGlvblBhZ2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkSW5zZXJ0aW9uMlwiKS5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgICB0eXBlID0gXCJHVUVTVFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgIGxpc3Q9W107XHJcbiAgICBmZXRjaCgnL2luc2VydGlvbicpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgZm9yKGxldCBkIG9mIGRhdGEpe1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNyZWF0ZVBhZ2luYXRpb24oKTtcclxuICAgICAgICBzaG93UmVzdWx0cygxKTtcclxuICAgICAgICBhc3NpZ25GaWx0ZXJzKCk7ICAgICAgICAgXHJcbiAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRBbGxJbnNlcnRpb25zKCl7XHJcbiAgICBcclxuICBhd2FpdCAgZmV0Y2goJy9pbnNlcnRpb24nKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIGxpc3Q9W107XHJcbiAgICAgICAgZm9yKGxldCBkIG9mIGRhdGEpe1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgIH0gXHJcblxyXG5cclxuXHJcblxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzaG93UmVzdWx0cyhpOiBudW1iZXIpIHtcclxuXHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zZXJ0aW9uQ29udGVudFwiKTtcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGxldCBzdGFydCA9IChpIC0gMSkgKiB2aWV3O1xyXG4gICAgbGV0IHN0b3AgPSAoaSAqIHZpZXcpIC0gMTtcclxuICAgIGZvciAoc3RhcnQ7IHN0YXJ0IDw9IHN0b3A7IHN0YXJ0KyspIHtcclxuICAgICAgICBpZiAoc3RhcnQgPj0gbGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFsaXN0W3N0YXJ0XS5hcHByb3ZlZCB8fCBsaXN0W3N0YXJ0XS5vdXRjb21lIT1cIldJUFwiKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGxldCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29sLTQgdGV4dC1jZW50ZXJcIik7XHJcbiAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpXCIpO1xyXG4gICAgICAgIGNvbC5vbm1vdXNlb3Zlcj0oKT0+e1xyXG4gICAgICAgICAgICBjb2wuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNilcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbC5vbm1vdXNlb3V0PSgpPT57XHJcbiAgICAgICAgICAgIGNvbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGluc2VydGlvbk9uZT1saXN0W3N0YXJ0XTtcclxuICAgICAgICBjb2wub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgZXhwYW5kSW5zZXJ0aW9uKGluc2VydGlvbk9uZSlcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICAgICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XHJcbiAgICAgICAgbGV0IGdhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XHJcbiAgICAgICAgbGV0IGdlbnJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xyXG4gICAgICAgIGxldCB5ZWFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xyXG4gICAgICAgIGxldCBjb25zb2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xyXG4gICAgICAgIGxldCB0cmFkZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XHJcbiAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gbGlzdFtzdGFydF0udHJhZGVHYW1lLmNvdmVyLmxpbms7XHJcbiAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtYi0yIGJvcmRlciBib3JkZXItMyBib3JkZXItaW5mbycpXHJcbiAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzdHlsZScsICdoZWlnaHQ6MjAwcHg7d2lkdGg6YXV0bzsnKVxyXG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9ICc8Yj4nK2xpc3Rbc3RhcnRdLnRpdGxlKyc8L2I+JztcclxuXHJcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdteC1hdXRvIG10LTIgcm91bmRlZC10b3AgYmctbGlnaHQgYm9yZGVyLWJvdHRvbSBib3JkZXItMyBib3JkZXItcHJpbWFyeScpO1xyXG5cclxuICAgICAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBsaXN0W3N0YXJ0XS5kZXNjcmlwdGlvbjtcclxuICAgICAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21iLTAgYm9yZGVyLXRvcCBib3JkZXItMyBib3JkZXItcHJpbWFyeSBiZy1saWdodCcpO1xyXG5cclxuICAgICAgICBnYW1lLmlubmVySFRNTCA9IGxpc3Rbc3RhcnRdLnRyYWRlR2FtZS5uYW1lO1xyXG4gICAgICAgIGdhbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtYi0wIGJnLWxpZ2h0Jyk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGZvcihsZXQgaT0gMDsgaTxsaXN0W3N0YXJ0XS50cmFkZUdhbWUuZ2VucmUubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBnZW5yZS5pbm5lckhUTUwgKz0gbGlzdFtzdGFydF0udHJhZGVHYW1lLmdlbnJlW2ldLmdlbnJlICsgXCIgXCI7XHJcbiAgICAgICAgICAgIGdlbnJlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWItMCBiZy1saWdodCcpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgeWVhci5pbm5lckhUTUwgPSBcIlwiICsgbGlzdFtzdGFydF0udHJhZGVHYW1lLnllYXI7XHJcbiAgICAgICAgeWVhci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21iLTAgYmctbGlnaHQnKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgY29uc29sZS5pbm5lckhUTUwgPSBsaXN0W3N0YXJ0XS50cmFkZUdhbWUuY29uc29sZS5jb25zb2xlO1xyXG4gICAgICAgIGNvbnNvbGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtYi0wIGJnLWxpZ2h0Jyk7XHJcblxyXG5cclxuICAgICAgICB0cmFkZXMuaW5uZXJIVE1MID0gXCJBY2NldHRlcmVpIFNjYW1iaW8gY29uOiBcIiArIGxpc3Rbc3RhcnRdLndpc2hMaXN0WzBdLm5hbWU7XHJcbiAgICAgICAgdHJhZGVzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWItMCBiZy1saWdodCcpO1xyXG5cclxuICAgICAgICBkYXRlLmlubmVySFRNTD0gbGlzdFtzdGFydF0ucHVibGljYXRpb25EYXRlO1xyXG4gICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdyb3VuZGVkLWJvdHRvbSBib3JkZXItYm90dG9tIGJvcmRlci0zIGJvcmRlci1wcmltYXJ5IGJnLWxpZ2h0Jyk7XHJcblxyXG4gICAgICAgIGNvbC5hcHBlbmQodGl0bGUsaW1hZ2UsZGVzY3JpcHRpb24sZ2FtZSxnZW5yZSx5ZWFyLGNvbnNvbGUsdHJhZGVzLGRhdGUpXHJcbiAgICAgICAgY29udGVudC5hcHBlbmQoY29sKTtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQYWdpbmF0aW9uKCkge1xyXG4gICAgbGV0IHNpemU6IG51bWJlciA9IGxpc3QubGVuZ3RoXHJcbiAgICBsZXQgdGFiczogbnVtYmVyID0gTWF0aC5jZWlsKHNpemUgLyB2aWV3KTtcclxuICAgIGxldCBwYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZXNcIik7XHJcbiAgICBwYWdlcy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGFiczsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGlmIChpID09IDEpIHtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWl0ZW0gYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIiwgXCJwYWdlXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWxpbmtcIik7XHJcbiAgICAgICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBhbGxMaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZXNcIikuY2hpbGRyZW47XHJcbiAgICAgICAgICAgIGZvciAobGV0IG9uZUxpIG9mIGFsbExpKSB7XHJcbiAgICAgICAgICAgICAgICBvbmVMaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbVwiKTtcclxuICAgICAgICAgICAgICAgIG9uZUxpLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbSBhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiLCBcInBhZ2VcIik7XHJcbiAgICAgICAgICAgIHNob3dSZXN1bHRzKGkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgYnRuLmlubmVySFRNTCA9IFwiXCIgKyAoaSk7XHJcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYnRuKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VzXCIpLmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2V0QWxsQ29uc29sbGVzKCkge1xyXG4gICAgY29uc29sbGVzID0gW11cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICghKGNvbnNvbGxlcy5pbmNsdWRlcyhsaXN0W2ldLnRyYWRlR2FtZS5jb25zb2xlLmNvbnNvbGUpKSkge1xyXG4gICAgICAgICAgICBjb25zb2xsZXMucHVzaChsaXN0W2ldLnRyYWRlR2FtZS5jb25zb2xlLmNvbnNvbGUpXHJcbiAgICAgICAgICAgIGxldCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uc29sbGVzXCIpO1xyXG4gICAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgICAgIGxpLmlkID0gbGlzdFtpXS50cmFkZUdhbWUuY29uc29sZS5jb25zb2xlO1xyXG4gICAgICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZHJvcGRvd24taXRlbVwiKTtcclxuICAgICAgICAgICAgYnRuLmlubmVySFRNTCA9IGxpc3RbaV0udHJhZGVHYW1lLmNvbnNvbGUuY29uc29sZTtcclxuICAgICAgICAgICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hCeUdhbWVDb25zb2xsZShsaS5pZCk7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHVsLmFwcGVuZChsaSk7XHJcbiAgICAgICAgICAgIGxpLmFwcGVuZChidG4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNldEFsbEdlbnJlcygpIHtcclxuICAgIGdlbnJlcyA9IFtdXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxpc3RbaV0udHJhZGVHYW1lLmdlbnJlLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmICghKGdlbnJlcy5pbmNsdWRlcyhsaXN0W2ldLnRyYWRlR2FtZS5nZW5yZVtqXS5nZW5yZSkpKSB7XHJcbiAgICAgICAgICAgICAgICBnZW5yZXMucHVzaChsaXN0W2ldLnRyYWRlR2FtZS5nZW5yZVtqXS5nZW5yZSlcclxuICAgICAgICAgICAgICAgIGxldCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2VucmVzXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgICAgICAgICAgbGkuaWQgPSBsaXN0W2ldLnRyYWRlR2FtZS5nZW5yZVtqXS5nZW5yZTtcclxuICAgICAgICAgICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZHJvcGRvd24taXRlbVwiKTtcclxuICAgICAgICAgICAgICAgIGJ0bi5pbm5lckhUTUwgPSBsaXN0W2ldLnRyYWRlR2FtZS5nZW5yZVtqXS5nZW5yZTtcclxuICAgICAgICAgICAgICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaEJ5R2VucmUobGkuaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdWwuYXBwZW5kKGxpKTtcclxuICAgICAgICAgICAgICAgIGxpLmFwcGVuZChidG4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0QWxsWWVhcnMoKSB7XHJcbiAgICB5ZWFycyA9IFtdXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoISh5ZWFycy5pbmNsdWRlcyhsaXN0W2ldLnRyYWRlR2FtZS55ZWFyKSkpIHtcclxuICAgICAgICAgICAgeWVhcnMucHVzaChsaXN0W2ldLnRyYWRlR2FtZS55ZWFyKVxyXG4gICAgICAgICAgICBsZXQgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInllYXJzXCIpO1xyXG4gICAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgICAgIGxpLmlkID0gXCJcIiArIGxpc3RbaV0udHJhZGVHYW1lLnllYXI7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkcm9wZG93bi1pdGVtXCIpO1xyXG4gICAgICAgICAgICBidG4uaW5uZXJIVE1MID0gXCJcIiArIGxpc3RbaV0udHJhZGVHYW1lLnllYXI7XHJcbiAgICAgICAgICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoQnlZZWFyKE51bWJlcihsaS5pZCkpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHVsLmFwcGVuZChsaSk7XHJcbiAgICAgICAgICAgIGxpLmFwcGVuZChidG4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNlYXJjaEJ5QWxsKCkgeyAgICAgICAgICAgICAvKkxhIGZ1bnppb25hIGRlbCBib3R0b25lIGNoZSBjZXJjYSB0dXR0aSBnbGkgYW5udW5jaSBzZW56YSBmaWx0cmkqL1xyXG5saXN0PVtdO1xyXG4gZmV0Y2goJy9pbnNlcnRpb24nKVxyXG4udGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIGZvcihsZXQgZCBvZiBkYXRhKXtcclxuICAgICAgICBsaXN0LnB1c2goZCk7XHJcbiAgICB9XHJcbiAgICBzZXRBbGxHZW5yZXMoKTtcclxuICAgIGNyZWF0ZVBhZ2luYXRpb24oKTtcclxuICAgIHNob3dSZXN1bHRzKDEpO1xyXG59KTtcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgIGZ1bmN0aW9uIHNlYXJjaEJ5VGl0bGUodGl0bGU6IHN0cmluZykge1xyXG4gICAgZmlsdGVyZWRMaXN0ID0gW11cclxuICAgIGZvciAobGV0IGVsZW1lbnQgb2YgbGlzdCkge1xyXG4gICAgICAgIGxldCBnYW1lTmFtZSA9IGVsZW1lbnQudHJhZGVHYW1lLm5hbWVcclxuICAgICAgICBsZXQgaW5zZXJ0aW9uVGl0bGUgPSBlbGVtZW50LnRpdGxlXHJcbiAgICAgICAgaWYgKCAoZ2FtZU5hbWUudG9VcHBlckNhc2UoKS5pbmNsdWRlcyh0aXRsZS50b1VwcGVyQ2FzZSgpKSkgXHJcbiAgICAgICAgfHwoaW5zZXJ0aW9uVGl0bGUudG9VcHBlckNhc2UoKS5pbmNsdWRlcyh0aXRsZS50b1VwcGVyQ2FzZSgpKSkpIHtcclxuICAgICAgICAgICAgZmlsdGVyZWRMaXN0LnB1c2goZWxlbWVudClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsaXN0ID0gW107XHJcbiAgICBsaXN0ID0gZmlsdGVyZWRMaXN0XHJcbiAgICBjcmVhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICBzaG93UmVzdWx0cygxKS50aGVuKCgpPT57XHJcbiAgICAgICAgZ2V0QWxsSW5zZXJ0aW9ucygpO1xyXG4gICAgfSlcclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZWFyY2hCeUdhbWVDb25zb2xsZShjb25zb2xlOiBzdHJpbmcpIHtcclxuICAgIGZpbHRlcmVkTGlzdCA9IFtdXHJcbiAgICBmb3IgKGxldCBlbGVtZW50IG9mIGxpc3QpIHtcclxuXHJcbiAgICAgICAgaWYgKGVsZW1lbnQudHJhZGVHYW1lLmNvbnNvbGUuY29uc29sZSA9PSBjb25zb2xlKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkTGlzdC5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG4gICAgbGlzdCA9IFtdO1xyXG4gICAgbGlzdCA9IGZpbHRlcmVkTGlzdFxyXG4gICAgY3JlYXRlUGFnaW5hdGlvbigpO1xyXG4gICAgc2hvd1Jlc3VsdHMoMSk7XHJcbiAgICBnZXRBbGxJbnNlcnRpb25zKCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZWFyY2hCeUdlbnJlKGdlbnJlOiBTdHJpbmcpIHtcclxuICAgIGZpbHRlcmVkTGlzdCA9IFtdXHJcbiAgICBmb3IgKGxldCBlbGVtZW50IG9mIGxpc3QpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQudHJhZGVHYW1lLmdlbnJlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRyYWRlR2FtZS5nZW5yZVtpXS5nZW5yZSA9PSBnZW5yZSkge1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyZWRMaXN0LnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBpID0gZWxlbWVudC50cmFkZUdhbWUuZ2VucmUubGVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGlzdCA9IFtdO1xyXG4gICAgbGlzdCA9IGZpbHRlcmVkTGlzdFxyXG4gICAgY3JlYXRlUGFnaW5hdGlvbigpO1xyXG4gICAgc2hvd1Jlc3VsdHMoMSk7XHJcbiAgICBnZXRBbGxJbnNlcnRpb25zKCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZWFyY2hCeVllYXIoeWVhcjogbnVtYmVyKSB7XHJcbiAgICBmaWx0ZXJlZExpc3QgPSBbXVxyXG4gICAgZm9yIChsZXQgZWxlbWVudCBvZiBsaXN0KSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQudHJhZGVHYW1lLnllYXIgPT0geWVhcikge1xyXG4gICAgICAgICAgICBmaWx0ZXJlZExpc3QucHVzaChlbGVtZW50KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxpc3QgPSBbXTtcclxuICAgIGxpc3QgPSBmaWx0ZXJlZExpc3RcclxuICAgIGNyZWF0ZVBhZ2luYXRpb24oKTtcclxuICAgIHNob3dSZXN1bHRzKDEpO1xyXG4gICAgZ2V0QWxsSW5zZXJ0aW9ucygpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduRmlsdGVycygpIHsgICAgICAgICAgICAgXHJcbiAgICBcclxubGV0IGFsbEdhbWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3RBbGxcIilcclxuICAgIGFsbEdhbWVzLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc2VhcmNoQnlBbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBbGxDb25zb2xsZXMoKTtcclxuXHJcbiAgICBzZXRBbGxHZW5yZXMoKTtcclxuXHJcbiAgICBzZXRBbGxZZWFycygpO1xyXG5cclxuICAgIGxldCBzZWFyY2hUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoVGl0bGVJbnNlcnRpb25zXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBzZWFyY2hUaXRsZS5vbmtleWRvd24gPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIHNlYXJjaEJ5VGl0bGUoc2VhcmNoVGl0bGUudmFsdWUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQYWdlXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgaW5zZXJ0aW9uIGZyb20gJy4uL2ludGVyZmFjZXMvaW5zZXJ0aW9uJztcclxuaW1wb3J0IGFubnVuY2lvIGZyb20gJy4vYW5udW5jaW8uaHRtbCdcclxuaW1wb3J0IGNyZWF0ZVBhZ2UgZnJvbSAnLi9hbm51bmNpJztcclxuaW1wb3J0IGFubnVuY2kgZnJvbSAnLi9hbm51bmNpLmh0bWwnXHJcbmltcG9ydCB2aWRlb2dhbWUgZnJvbSAnLi4vaW50ZXJmYWNlcy92aWRlb2dhbWUnO1xyXG5pbXBvcnQgdXNlckluZm8gZnJvbSAnLi4vaW50ZXJmYWNlcy91c2VySW5mbyc7XHJcbmltcG9ydCB1c2VyIGZyb20gJy4uL2ludGVyZmFjZXMvdXNlcic7XHJcbmltcG9ydCBjcmVhdGVIb21lIGZyb20gJy4uL2hvbWUvaG9tZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXhwYW5kSW5zZXJ0aW9uKGluc2VydGlvbjphbnkpIHtcclxuICAgIFxyXG5cclxuICAgIC8qSW1wb3N0byBsYSBwYWdpbmEgcHJpbmNpcGFsZSBjb24gaWwgdGVtcGxhdGUgZGVsIHNpbmdvbG8gYW5udW5jaW8gKi9cclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xyXG4gICAgbWFpbi5pbm5lckhUTUwgPSBhbm51bmNpbztcclxuXHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ2FtZXNcIikub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MID0gYW5udW5jaTtcclxuICAgICAgICBjcmVhdGVQYWdlKCk7XHJcbiAgICB9XHJcbiAgICBsZXQgYmFjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja1wiKVxyXG4gICAgLy9iYWNrLmFwcGVuZChidXR0b24pO1xyXG5cclxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIHRpdGxlLmlubmVySFRNTCA9ICc8Yj4nK2luc2VydGlvbi50aXRsZSsnPC9iPic7XHJcblxyXG4gICAgYmFjay5hcHBlbmQodGl0bGUpO1xyXG5cclxuXHJcblxyXG4gICAgLypJbXBvc3RvIGlsIGNhcm9zZWxsbyBkZWxsZSBpbW1hZ2luaSB1dGVudGUgKi9cclxuICAgIGxldCBpbmRpY2F0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZGljYXRvclwiKVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnNlcnRpb24uZ2FsbGVyeS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLXRhcmdldFwiLCBcIiNpbWFnZVNsaWRlclwiKTtcclxuICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiZGF0YS1icy1zbGlkZS10b1wiLCBcIlwiICsgaSk7XHJcbiAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBcIlNsaWRlIFwiICsgKGkgKyAxKSk7XHJcbiAgICAgICAgaW5kaWNhdG9yLmFwcGVuZChidG4pO1xyXG4gICAgfVxyXG4gICAgbGV0IGlubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbm5lclwiKVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5zZXJ0aW9uLmdhbGxlcnkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcm91c2VsLWl0ZW0gYWN0aXZlXCIpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2Fyb3VzZWwtaXRlbVwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBpbWcuc3JjID0gaW5zZXJ0aW9uLmdhbGxlcnlbaV0ubGluaztcclxuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdzdHlsZScsICdoZWlnaHQ6MzUwcHg7d2lkdGg6YXV0bzsnKVxyXG4gICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImQtYmxvY2sgdy0xMDBcIik7XHJcbiAgICAgICAgaW1nLmFsdCA9IFwiR2FsbGVyeSBJbWFnZVwiICsgKGkgKyAxKVxyXG4gICAgICAgIGRpdi5hcHBlbmQoaW1nKTtcclxuICAgICAgICBpbm5lci5hcHBlbmQoZGl2KVxyXG4gICAgfVxyXG4gICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBpbWcuc3JjID0gaW5zZXJ0aW9uLnRyYWRlR2FtZS5jb3Zlci5saW5rO1xyXG4gICAgaW1nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW1nLWZsdWlkIHJvdW5kZWQtc3RhcnRcIilcclxuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2hlaWdodDoyMDB4O3dpZHRoOmF1dG87JylcclxuICAgIFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkLWltYWdlXCIpLmFwcGVuZChpbWcpO1xyXG4gICAgbGV0IGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gICAgaDQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJkLXRpdGxlXCIpO1xyXG4gICAgaDQuaW5uZXJIVE1MID0gJzxiPicraW5zZXJ0aW9uLnRyYWRlR2FtZS5uYW1lKyc8L2I+JztcclxuXHJcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcmQtdGV4dFwiKTtcclxuICAgIHAuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJmb250LXNpemU6IDEuNWVtO1wiKVxyXG4gICAgcC5pbm5lckhUTUwgPSBcIkdlbmVyZTogXCI7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluc2VydGlvbi50cmFkZUdhbWUuZ2VucmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBwLmlubmVySFRNTCArPSBpbnNlcnRpb24udHJhZGVHYW1lLmdlbnJlW2ldLmdlbnJlICsgXCIgXCJcclxuICAgIH1cclxuICAgIHAuaW5uZXJIVE1MICs9IFwiPGJyPlwiXHJcbiAgICAgICAgKyBcIkFubm86IFwiICsgaW5zZXJ0aW9uLnRyYWRlR2FtZS55ZWFyICsgXCI8YnI+XCJcclxuICAgICAgICArIFwiQ29uc29sZTogXCIgKyBpbnNlcnRpb24udHJhZGVHYW1lLmNvbnNvbGUuY29uc29sZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZC1ib2R5XCIpLmFwcGVuZChoNCwgcCk7XHJcbiAgICBsZXQgcHVibGlzaGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG5cclxuICAgIGZldGNoKFwiL3VzZXIvXCIgKyBpbnNlcnRpb24ucHVibGlzaGVyLmlkKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHB1Ymxpc2hlci5pbm5lckhUTUwgPSBcIlV0ZW50ZTogXCIgKyBkYXRhLnVzZXJuYW1lICsgXCIgUHVudGVnZ2lvOiBcIiArIGluc2VydGlvbi5wdWJsaXNoZXIucmF0aW5nO1xyXG4gICAgICAgICAgICBwdWJsaXNoZXIuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJjb2xvcjp3aGl0ZVwiKVxyXG4gICAgICAgICAgICBsZXQgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICAgICAgZGVzYy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImNvbG9yOndoaXRlXCIpXHJcbiAgICAgICAgICAgIGRlc2MuaW5uZXJIVE1MID0gXCJEZXNjcml6aW9uZTpcIlxyXG4gICAgICAgICAgICBsZXQgaW5zRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgICAgICAgICAgaW5zRGVzYy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImNvbG9yOndoaXRlXCIpXHJcbiAgICAgICAgICAgIGluc0Rlc2MuaW5uZXJIVE1MID0gaW5zZXJ0aW9uLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc2VydGlvbi1jcmVhdG9yXCIpLmlubmVySFRNTCA9IFwiTCd1dGVudGVcIi8vaW5zZXJ0aW9uLnB1Ymxpc2hlci51c2VybmFtZTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnRpb24tZGVzY3JpcHRpb25cIikuYXBwZW5kKHB1Ymxpc2hlciwgZGVzYywgaW5zRGVzYyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1pdGVtLVwiICsgKGkgKyAxKSkuaW5uZXJIVE1MID0gaW5zZXJ0aW9uLndpc2hMaXN0W2ldLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBpbnNlcnRpb24ud2lzaExpc3RbaV0uY292ZXIubGluaztcclxuICAgICAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcmQtaW1nLXRvcFwiKVxyXG4gICAgICAgICAgICAgICAgaW1nLm9uY2xpY2sgPSAoKSA9PiB7IGNyZWF0ZVByb3Bvc2FsKGluc2VydGlvbi5pZCAsaW5zZXJ0aW9uLndpc2hMaXN0W2ldLCBpbnNlcnRpb24udHJhZGVHYW1lLCBpbnNlcnRpb24ucHVibGlzaGVyKSB9XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltZy1pdGVtLVwiICsgKGkgKyAxKSkuYXBwZW5kKGltZyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICAgICAgcC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcmQtdGV4dFwiKTtcclxuICAgICAgICAgICAgICAgIHAuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJmb250LXNpemU6IDEuNWVtO1wiKTtcclxuICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gXCJHZW5lcmU6IFwiO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBpbnNlcnRpb24ud2lzaExpc3RbaV0uZ2VucmUubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBwLmlubmVySFRNTCArPSBpbnNlcnRpb24ud2lzaExpc3RbaV0uZ2VucmVbal0uZ2VucmUgKyBcIiBcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgKz0gXCI8YnI+XCJcclxuICAgICAgICAgICAgICAgICAgICArIFwiQW5ubzogXCIgKyBpbnNlcnRpb24ud2lzaExpc3RbaV0ueWVhciArIFwiPGJyPlwiXHJcbiAgICAgICAgICAgICAgICAgICAgKyBcIkNvbnNvbGU6IFwiICsgaW5zZXJ0aW9uLndpc2hMaXN0W2ldLmNvbnNvbGUuY29uc29sZTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keS1pdGVtLVwiICsgKGkgKyAxKSkuYXBwZW5kKHApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb3Bvc2FsKGluc2VydGlvbklkOm51bWJlciwgd2lzaEdhbWU6IHZpZGVvZ2FtZSwgdHJhZGVHYW1lOiB2aWRlb2dhbWUsIHB1Ymxpc2hlcjogdXNlcikge1xyXG4gICAgbGV0IHByb3Bvc2FsRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnRpb24tY29uZmlybVwiKTtcclxuICAgIHByb3Bvc2FsRGl2LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBsZXQgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICBoMy5pbm5lckhUTUwgPSBcIlNlaSBzaWN1cm8gZGkgdm9sZXIgc2NhbWJpYXJlIFwiICsgd2lzaEdhbWUubmFtZSArIFwiIHBlciBcIiArIHRyYWRlR2FtZS5uYW1lICsgXCI/XCI7XHJcbiAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnRuIGJ0bi1zdWNjZXNzXCIpO1xyXG4gICAgYnRuLmlubmVySFRNTCA9IFwiQ29uZmVybWFcIjtcclxuICAgIGgzLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZm9udC1zaXplOjIwcHg7IGNvbG9yOndoaXRlXCIpXHJcbiAgICBwcm9wb3NhbERpdi5hcHBlbmQoaDMsIGJ0bilcclxuICAgIGNvbnN0IHByb3Bvc2FsID0ge1xyXG4gICAgICAgIGluc2VydGlvbklkOiBpbnNlcnRpb25JZCxcclxuICAgICAgICB0cmFkZUdhbWU6IHRyYWRlR2FtZSxcclxuICAgICAgICB3aXNoR2FtZTogd2lzaEdhbWUsXHJcbiAgICAgICAgcHVibGlzaGVyOiBwdWJsaXNoZXJcclxuICAgIH1cclxuICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4geyBjb25maXJtUHJvcG9zYWwocHJvcG9zYWwpIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbmZpcm1Qcm9wb3NhbChwcm9wb3NhbDogYW55KSB7XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwcm9wb3NhbClcclxuICAgIH1cclxuXHJcblxyXG4gICAgZmV0Y2goXCIvaW5zZXJ0aW9uL2NvbmZpcm1cIiwgcmVxdWVzdClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWRhdGEubG9nZ2VkKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIm5vbiBzZWkgbG9nZ2F0b1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKCFkYXRhLnRoaXNJc1lvdSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJjaGUgZmFpIGNsaWNjaGkgc3VsIHR1byBzdGVzc28gYW5udW5jaW8/IT9cIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICghZGF0YS5oYXNHYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIm5vbiBwb3NzaWVkaSBpbCBnaW9jb1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGRhdGEuYWxyZWFkeUhhdmUpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwibWEgaGFpIGdpw6AgcXVlc3RvIGdpb2NvIVwiKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIlNjYW1iaW8gZWZmZXR0dWF0byFcIilcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUhvbWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGV4cGFuZEluc2VydGlvbiIsImltcG9ydCBjcmVhQW5udW5jaW8gZnJvbSAnLi4vY3JlYUFubnVuY2lvL2NyZWFBbm51bmNpby5odG1sJ1xyXG5pbXBvcnQgaW5zZXJ0aW9uIGZyb20gJy4uL2ludGVyZmFjZXMvaW5zZXJ0aW9uJztcclxuaW1wb3J0IGV4cGFuZEluc2VydGlvbiBmcm9tICcuL2FubnVuY2lvJ1xyXG5pbXBvcnQgY3JlYXRlSW5zZXJ0aW9uUGFnZSBmcm9tICcuLi9jcmVhQW5udW5jaW8vY3JlYUFubnVuY2lvJ1xyXG5cclxubGV0IGxpc3Q6IGluc2VydGlvbltdID0gW107XHJcbmxldCB2aWV3OiBudW1iZXIgPSA2XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGFnZTIoKSB7XHJcbiAgICBsaXN0ID0gW107XHJcbiAgICBmZXRjaCgnL2luc2VydGlvbicpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgZm9yKGxldCBkIG9mIGRhdGEpe1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlQ2F0ZWdvcnlcIikub25jbGljayA9IGNyZWF0ZUNhdGVnb3J5O1xyXG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEluc2VydGlvblwiKTtcclxuICAgICAgICBidG4ub25jbGljaz0oKT0+e1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MPWNyZWFBbm51bmNpbztcclxuICAgICAgICAgICAgY3JlYXRlSW5zZXJ0aW9uUGFnZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjcmVhdGVQYWdpbmF0aW9uMigpO1xyXG4gICAgICAgIHNob3dSZXN1bHRzMigxKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQYWdpbmF0aW9uMigpIHtcclxuICAgIGxldCBzaXplOiBudW1iZXIgPSBsaXN0Lmxlbmd0aFxyXG4gICAgbGV0IHRhYnM6IG51bWJlciA9IE1hdGguY2VpbChzaXplIC8gdmlldyk7XHJcbiAgICBsZXQgcGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VzMlwiKTtcclxuICAgIHBhZ2VzLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0YWJzOyBpKyspIHtcclxuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgaWYgKGkgPT0gMSkge1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbSBhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiLCBcInBhZ2VcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWl0ZW1cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtbGlua1wiKTtcclxuICAgICAgICBidG4ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGFsbExpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlczJcIikuY2hpbGRyZW47XHJcbiAgICAgICAgICAgIGZvciAobGV0IG9uZUxpIG9mIGFsbExpKSB7XHJcbiAgICAgICAgICAgICAgICBvbmVMaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbVwiKTtcclxuICAgICAgICAgICAgICAgIG9uZUxpLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbSBhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiLCBcInBhZ2VcIik7XHJcbiAgICAgICAgICAgIHNob3dSZXN1bHRzMihpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGJ0bi5pbm5lckhUTUwgPSBcIlwiICsgKGkpO1xyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlczJcIikuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93UmVzdWx0czIoaTogbnVtYmVyKSB7XHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zZXJ0aW9uQ29udGVudDJcIik7XHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBsZXQgc3RhcnQgPSAoaSAtIDEpICogdmlldztcclxuICAgIGxldCBzdG9wID0gKGkgKiB2aWV3KSAtIDE7XHJcbiAgICBmb3IgKHN0YXJ0OyBzdGFydCA8PSBzdG9wOyBzdGFydCsrKSB7XHJcbiAgICAgICAgaWYgKHN0YXJ0ID49IGxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgbGV0IGp1YW4gPSBsaXN0W3N0YXJ0XS50aXRsZSAgLy9cIlwiICsgc3RhcnQ7XHJcbiAgICAgICAgLy9KdWFuIMOoIGwnaWQgZGVpIGJvdHRvbmksIHNhcsOgIGwnaWQgZGVsbGUgaW5zZXJ6aW9uaSBxdWFuZG8gc2kgaW1wbGVtZW50ZXJhbm5vIGdsaSBhbm51bmNpIGRhbCBkYlxyXG4gICAgICAgIGxldCBpc09uQ2hlY2tlZExpc3RSZXN1bHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBlbGVtZW50IG9mIGNoZWNrZWRMaXN0KXtcclxuICAgICAgICAgICAgaWYoanVhbj09ZWxlbWVudCl7XHJcbiAgICAgICAgICAgICAgICBpc09uQ2hlY2tlZExpc3RSZXN1bHQ9dHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsICdsaXN0LWdyb3VwLWl0ZW0nKTtcclxuICAgICAgICBpZihpc09uQ2hlY2tlZExpc3RSZXN1bHQpe1xyXG4gICAgICAgICAgICBjb2wuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNilcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpXCIpO1xyXG4gICAgICAgICAgICBjb2wuc2V0QXR0cmlidXRlKCdvbm1vdXNlb3ZlcicsICdzZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KVwiKScpO1xyXG4gICAgICAgICAgICBjb2wuc2V0QXR0cmlidXRlKCdvbm1vdXNlb3V0JywgJ3NldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpXCIpJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBqdWFuKTtcclxuXHJcbiAgICAgICAgY29sLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGFkZEluc2VydGlvblRvTGlzdChqdWFuKVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZm9udC13ZWlnaHQ6IGJvbGQ7Jyk7XHJcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gbGlzdFtzdGFydF0udGl0bGUgKyBcIiB8IFwiICsgbGlzdFtzdGFydF0ub3V0Y29tZTtcclxuICAgICAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBcIlwiICsgbGlzdFtzdGFydF0udHJhZGVHYW1lLm5hbWU7XHJcbiAgICAgICAgZm9yKGxldCBpPSAwOyBpPGxpc3Rbc3RhcnRdLnRyYWRlR2FtZS5nZW5yZS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTCArPSBcIiwgXCIgKyBsaXN0W3N0YXJ0XS50cmFkZUdhbWUuZ2VucmVbaV0uZ2VucmUgKyBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgKz0gXCIsIFwiICsgbGlzdFtzdGFydF0udHJhZGVHYW1lLnllYXI7XHJcblxyXG4gICAgICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTCArPSBcIiwgXCIgKyBsaXN0W3N0YXJ0XS50cmFkZUdhbWUuY29uc29sZS5jb25zb2xlO1xyXG5cclxuICAgICAgICBsZXQgY29sMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbGV0IGJ0bl9zaG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBsZXQgYnRuX2FwcHJvdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGxldCBpbnMgPSBsaXN0W3N0YXJ0XTtcclxuICAgICAgICBsZXQgaWQgPSBsaXN0W3N0YXJ0XS5pZDtcclxuICAgICAgICBidG5fYXBwcm92ZS5pZCA9IFwiYnRuX2FwcHJvdmVcIitpZDtcclxuICAgICAgICBidG5fc2hvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ0biBidG4tcHJpbWFyeSBidG4tc21cIik7XHJcbiAgICAgICAgYnRuX3Nob3cuaW5uZXJIVE1MID0gXCJNb3N0cmEgYW5udW5jaW9cIjtcclxuICAgICAgICBpZihsaXN0W3N0YXJ0XS5hcHByb3ZlZCl7XHJcbiAgICAgICAgICAgIGJ0bl9hcHByb3ZlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbVwiKTtcclxuICAgICAgICAgICAgYnRuX2FwcHJvdmUuaW5uZXJIVE1MID0gXCJBbm51bmNpbyBhcHByb3ZhdG9cIjtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgYnRuX2FwcHJvdmUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG4gYnRuLXdhcm5pbmcgYnRuLXNtXCIpO1xyXG4gICAgICAgICAgICBidG5fYXBwcm92ZS5pbm5lckhUTUwgPSBcIkRhIGFwcHJvdmFyZVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBidG5fYXBwcm92ZS5vbmNsaWNrID0gKCk9PntjaGFuZ2VJbnNlcnRpb25TdGF0dXMoaWQpO31cclxuICAgICAgICBidG5fc2hvdy5vbmNsaWNrID0gKCk9PntleHBhbmRJbnNlcnRpb24oaW5zKTt9IFxyXG4gICAgICAgIGNvbC5hcHBlbmQodGl0bGUsZGVzY3JpcHRpb24pXHJcbiAgICAgICAgY29sMi5hcHBlbmQoYnRuX3Nob3csIGJ0bl9hcHByb3ZlKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZChjb2wsIGNvbDIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY2hhbmdlSW5zZXJ0aW9uU3RhdHVzKGlkOm51bWJlcil7XHJcbiAgICBmZXRjaChcIi9pbnNlcnRpb24vXCIraWQpXHJcbiAgICAudGhlbigocmVzcG9uc2UpPT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigoZGF0YSk9PntcclxuICAgICAgICBsZXQgYnRuX2FwcHJvdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bl9hcHByb3ZlXCIraWQpO1xyXG4gICAgICAgIGlmKGRhdGEpe1xyXG4gICAgICAgICAgICBidG5fYXBwcm92ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ0biBidG4tc3VjY2VzcyBidG4tc21cIik7XHJcbiAgICAgICAgICAgIGJ0bl9hcHByb3ZlLmlubmVySFRNTCA9IFwiQW5udW5jaW8gYXBwcm92YXRvXCI7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGJ0bl9hcHByb3ZlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnRuIGJ0bi13YXJuaW5nIGJ0bi1zbVwiKTtcclxuICAgICAgICAgICAgYnRuX2FwcHJvdmUuaW5uZXJIVE1MID0gXCJEYSBhcHByb3ZhcmVcIjtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQYWdlMlxyXG5cclxuXHJcblxyXG5cclxubGV0IGNoZWNrZWRMaXN0OiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZEluc2VydGlvblRvTGlzdChpbnM6IHN0cmluZyl7XHJcblxyXG4gICAgbGV0IGlzT25DaGVja2VkTGlzdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGZvcihsZXQgZWxlbWVudCBvZiBjaGVja2VkTGlzdCl7XHJcbiAgICAgICAgaWYoaW5zPT1lbGVtZW50KXtcclxuICAgICAgICAgICAgaXNPbkNoZWNrZWRMaXN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2hlY2tlZExpc3Quc3BsaWNlKGNoZWNrZWRMaXN0LmluZGV4T2YoZWxlbWVudCksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZihpc09uQ2hlY2tlZExpc3Qpe1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucykuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMilcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5zKS5zZXRBdHRyaWJ1dGUoJ29ubW91c2VvdmVyJywgJ3NldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpXCIpJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5zKS5zZXRBdHRyaWJ1dGUoJ29ubW91c2VvdXQnLCAnc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMilcIiknKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2hlY2tlZExpc3QucHVzaChpbnMpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucykucmVtb3ZlQXR0cmlidXRlKCdvbm1vdXNlb3ZlcicpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucykucmVtb3ZlQXR0cmlidXRlKCdvbm1vdXNlb3V0Jyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5zKS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KVwiKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYXRlZ29yeSgpe1xyXG4gICAgXHJcbiAgICBjb25zdCBvYmo9e1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXRlZ29yeU5hbWVcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcbiAgICAgICAgaW5zZXJ0aW9uc1RpdGxlOiBjaGVja2VkTGlzdCxcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGNvbnN0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KG9iailcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaChcIi9jYXRlZ29yeVwiLCByZXF1ZXN0KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKT0+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgaWYoZGF0YT4wKXtcclxuICAgICAgICAgICAgYWxlcnQoXCJDYXRlZ29yaWEgQ3JlYXRhXCIpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiRScgRklOSUlJSVRBQSEhXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAvL1ByZW5kZSBpbCB2YWxvcmUgZGVsbGEgY2FzZWxsYSBkaSB0ZXN0byBlIGxvIG1ldHRlIGNvbWUgbm9tZSBkZWxsYSBjYXRlZ29yaWFcclxuICAgXHJcbiAgICBcclxuICAgIC8vVE9ETzogTEEgRkVFRUVFRUVFRUVFRUVUQ0ghISFcclxuICAgIC8vVE9ETzogaW5zZXJpc2NpIGdsaSBlbGVtZW50aSBkaSBjaGVja2VkTGlzdCBpbiB1bmEgY2F0ZWdvcmlhIG5lbCBEQlxyXG4gICAgLy9UT0RPOiBNZXRvZG8gZGEgZmFyZSBwZXIgaW5zZXJpcmUgZ2xpIGVsZW1lbnRpIG5lbCBkYXRhYmFzZSBoYWhhXHJcblxyXG4gICAgLy9TdnVvdGEgaWwgdmFsb3JlIGRlbGxhIGNhc2VsbGEgZGkgdGVzdG8gZSBsYSBsaXN0YVxyXG5cclxuICAgIGNoZWNrZWRMaXN0ID0gW107XHJcblxyXG4gICAgLy9SZWltcG9zdGEgbGEgcGFnaW5hIGEgY29tZSBzdGF2YSBwcmltYVxyXG4gICAgY3JlYXRlUGFnaW5hdGlvbjIoKTtcclxuICAgIHNob3dSZXN1bHRzMigxKTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgdXNlciBmcm9tIFwiLi4vaW50ZXJmYWNlcy91c2VyXCI7XHJcbmltcG9ydCBjaGF0SGVhZGVyVGVtcGxhdGUgZnJvbSBcIi4vY2hhdEhlYWRlci5odG1sXCJcclxuaW1wb3J0IGNoYXRCb2R5VGVtcGxhdGUgZnJvbSBcIi4vY2hhdEJvZHkuaHRtbFwiXHJcbmltcG9ydCBjaGF0Rm9vdGVyVGVtcGxhdGUgZnJvbSBcIi4vY2hhdEZvb3Rlci5odG1sXCJcclxuaW1wb3J0IG1lc3NhZ2UgZnJvbSBcIi4uL2ludGVyZmFjZXMvbWVzc2FnZVwiO1xyXG5pbXBvcnQgdXNlckluZm8gZnJvbSBcIi4uL2ludGVyZmFjZXMvdXNlckluZm9cIjtcclxuXHJcblxyXG5sZXQgY2hhdFZlcnNpb25zOiBNYXA8bnVtYmVyLCBNYXA8bnVtYmVyLCBudW1iZXI+PiA9IG5ldyBNYXAoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGlja0NoYXQoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3dDaGF0VXNlcnNcIikub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBzaG93VXNlcnNDaGF0KCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxlcnRcIikuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgIH07XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzaG93VXNlcnNDaGF0KCkge1xyXG4gICAgZmV0Y2goXCIvdXNlclwiKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhOiB1c2VyW10pID0+IHtcclxuICAgICAgICAgICAgZmV0Y2goXCIvdXNlci90aGlzXCIpXHJcbiAgICAgICAgICAgICAgICAudGhlbigodGhpc1VzZXJTZXJpYWx5emVkKSA9PiB0aGlzVXNlclNlcmlhbHl6ZWQuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigodGhpc1VzZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2hhdEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhdEJveFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjaGF0Qm94LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGlzdC1ncm91cFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB1c2VyIG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXIudXNlcklkICE9IHRoaXNVc2VyLnVzZXJJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmlkID0gXCJcIiArIHVzZXIudXNlcklkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmlubmVySFRNTCA9IHVzZXIudXNlcm5hbWUgKyBcIiBcIiArIHVzZXIucmF0aW5nICsgXCIgPGkgY2xhc3M9J2ZhLXJlZ3VsYXIgZmEtc3Rhcic+PC9pPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7IGZpbmRDaGF0KE51bWJlcihidG4uaWQpKSB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmFwcGVuZChidG4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhdEJveC5hcHBlbmQoZGl2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmRDaGF0KGlkUmVjZWl2ZXI6IG51bWJlcikge1xyXG4gICAgZmV0Y2goXCIvY2hhdC9cIiArIGlkUmVjZWl2ZXIpXHJcbiAgICAgICAgLnRoZW4oKHNlcmlhbGl6ZWRJZENoYXQpID0+IHNlcmlhbGl6ZWRJZENoYXQuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChpZENoYXQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGlkQ2hhdCAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgZmV0Y2goXCIvdXNlci9cIiArIGlkUmVjZWl2ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHNlcmlhbGl6ZWRVc2VySW5mbykgPT4gc2VyaWFsaXplZFVzZXJJbmZvLmpzb24oKSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigodXNlckluZm8pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoYXRCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXRCb3hcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXRCb3guaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhdEJveC5pbm5lckhUTUwgPSBjaGF0SGVhZGVyVGVtcGxhdGUgKyBjaGF0Qm9keVRlbXBsYXRlICsgY2hhdEZvb3RlclRlbXBsYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hhdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGF0VGl0bGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXRUaXRsZS5pbm5lckhUTUwgPSB1c2VySW5mby51c2VybmFtZSArIFwiIFwiICsgdXNlckluZm8ucmF0aW5nICsgXCIgPGkgY2xhc3M9J2ZhLXJlZ3VsYXIgZmEtc3Rhcic+PC9pPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2xldCBpZFJlZnJlc2ggPSBzZXRJbnRlcnZhbCgoKT0+e29wZW5DaGF0KE51bWJlcihpZENoYXQpKTt9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlbkNoYXQoTnVtYmVyKGlkQ2hhdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gb3BlbkNoYXQoY2hhdElkOiBudW1iZXIpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhdEJvZHlcIikuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja1RvTGlzdFwiKS5vbmNsaWNrID0gc2hvd1VzZXJzQ2hhdDtcclxuICAgIGF3YWl0IGZldGNoKFwiL2NoYXQvY29udmVyc2F0aW9uL1wiICsgY2hhdElkKVxyXG4gICAgICAgIC50aGVuKChzZXJpYWxpemVkQ29udmVyc2F0aW9uKSA9PiBzZXJpYWxpemVkQ29udmVyc2F0aW9uLmpzb24oKSlcclxuICAgICAgICAudGhlbigoY29udmVyc2F0aW9uOiBtZXNzYWdlW10pID0+IHtcclxuXHJcbiAgICAgICAgICAgIGZldGNoKFwiL3VzZXIvdGhpc1wiKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHNlcmlhbGl6ZWRUaGlzVXNlckluZm8pID0+IHNlcmlhbGl6ZWRUaGlzVXNlckluZm8uanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHRoaXNVc2VySW5mbzogdXNlckluZm8pID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRleHRCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc3NhZ2VUZXh0XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tYWRkb24yXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU1lc3NhZ2UodGhpc1VzZXJJbmZvLnVzZXJJZCwgY2hhdElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEJveC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0Qm94Lm9ua2V5ZG93biA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVNZXNzYWdlKHRoaXNVc2VySW5mby51c2VySWQsIGNoYXRJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Qm94LnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBtZXNzYWdlIG9mIGNvbnZlcnNhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS51c2VybmFtZSA9PSB0aGlzVXNlckluZm8udXNlcm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1aWxkTWVzc2FnZVNlbmRlZCh0aGlzVXNlckluZm8udXNlcm5hbWUsIHRoaXNVc2VySW5mby5yYXRpbmcsIG1lc3NhZ2UudGltZXN0YW1wLCBtZXNzYWdlLnRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVpbGRNZXNzYWdlUmVjaXZlZChtZXNzYWdlLnVzZXJuYW1lLCBtZXNzYWdlLnJhdGluZywgbWVzc2FnZS50aW1lc3RhbXAsIG1lc3NhZ2UudGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgZnVuY3Rpb24gYnVpbGRNZXNzYWdlUmVjaXZlZCh1c2VybmFtZTogc3RyaW5nLCByYXRpbmc6IG51bWJlciwgdGltZXN0YW1wOiBzdHJpbmcsIHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBjaGF0Qm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhdEJvZHlcIik7XHJcbiAgICAgICAgbGV0IGRpdkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGRpdkluZm8uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIik7XHJcbiAgICAgICAgbGV0IHBEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgcERhdGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzbWFsbCBtYi0xIHRleHQtbXV0ZWRcIik7XHJcbiAgICAgICAgcERhdGUuaW5uZXJIVE1MID0gbm9ybWFsUGVyc29uRGF0ZVRyYW5zZm9ybSh0aW1lc3RhbXApO1xyXG4gICAgICAgIGxldCBwVXNlcm5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBwVXNlcm5hbWUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzbWFsbCBtYi0xXCIpO1xyXG4gICAgICAgIHBVc2VybmFtZS5pbm5lckhUTUwgPSB1c2VybmFtZSArIFwiIFwiICsgcmF0aW5nICsgXCI8aSBjbGFzcz0nZmEtcmVndWxhciBmYS1zdGFyJz48L2k+XCI7XHJcblxyXG4gICAgICAgIGxldCBkaXZUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkaXZUZXh0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1zdGFydFwiKTtcclxuICAgICAgICBsZXQgZGl2SW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGxldCBwVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHBUZXh0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic21hbGwgcC0yIG1zLTMgbWItMyByb3VuZGVkLTNcIik7XHJcbiAgICAgICAgcFRleHQuaW5uZXJIVE1MID0gdGV4dDtcclxuXHJcbiAgICAgICAgbGV0IGltZ0F2YXRhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgaW1nQXZhdGFyLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4vaW1nL3Byb2ZpbGUucG5nXCIpO1xyXG4gICAgICAgIGltZ0F2YXRhci5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJhdmF0YXJcIik7XHJcbiAgICAgICAgaW1nQXZhdGFyLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwid2lkdGg6IDQ1cHg7IGhlaWdodDogMTAwJTtcIik7XHJcblxyXG4gICAgICAgIGRpdkluZm8uYXBwZW5kKHBVc2VybmFtZSwgcERhdGUpO1xyXG4gICAgICAgIGRpdklubmVyLmFwcGVuZChwVGV4dCk7XHJcbiAgICAgICAgZGl2VGV4dC5hcHBlbmQoaW1nQXZhdGFyLCBkaXZJbm5lcik7XHJcbiAgICAgICAgY2hhdEJvZHkuYXBwZW5kKGRpdkluZm8sIGRpdlRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGJ1aWxkTWVzc2FnZVNlbmRlZCh1c2VybmFtZTogc3RyaW5nLCByYXRpbmc6IG51bWJlciwgdGltZXN0YW1wOiBzdHJpbmcsIHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBjaGF0Qm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhdEJvZHlcIik7XHJcblxyXG4gICAgICAgIGxldCBkaXZJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkaXZJbmZvLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIpO1xyXG4gICAgICAgIGxldCBwRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHBEYXRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic21hbGwgbWItMSB0ZXh0LW11dGVkXCIpO1xyXG4gICAgICAgIHBEYXRlLmlubmVySFRNTCA9IG5vcm1hbFBlcnNvbkRhdGVUcmFuc2Zvcm0odGltZXN0YW1wKTtcclxuICAgICAgICBsZXQgcFVzZXJuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgcFVzZXJuYW1lLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic21hbGwgbWItMVwiKTtcclxuICAgICAgICBwVXNlcm5hbWUuaW5uZXJIVE1MID0gdXNlcm5hbWUgKyBcIiBcIiArIHJhdGluZyArIFwiPGkgY2xhc3M9J2ZhLXJlZ3VsYXIgZmEtc3Rhcic+PC9pPlwiO1xyXG5cclxuICAgICAgICBsZXQgZGl2VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZGl2VGV4dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtZW5kIG1iLTQgcHQtMVwiKTtcclxuICAgICAgICBsZXQgZGl2SW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGxldCBwVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHBUZXh0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic21hbGwgcC0yIG1lLTMgbWItMyB0ZXh0LXdoaXRlIHJvdW5kZWQtMyBiZy13YXJuaW5nXCIpO1xyXG4gICAgICAgIHBUZXh0LmlubmVySFRNTCA9IHRleHQ7XHJcblxyXG4gICAgICAgIGxldCBpbWdBdmF0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGltZ0F2YXRhci5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL2ltZy9wcm9maWxlLnBuZ1wiKTtcclxuICAgICAgICBpbWdBdmF0YXIuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiYXZhdGFyXCIpO1xyXG4gICAgICAgIGltZ0F2YXRhci5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndpZHRoOiA0NXB4OyBoZWlnaHQ6IDEwMCU7XCIpO1xyXG5cclxuICAgICAgICBkaXZJbmZvLmFwcGVuZChwRGF0ZSwgcFVzZXJuYW1lKTtcclxuICAgICAgICBkaXZJbm5lci5hcHBlbmQocFRleHQpO1xyXG4gICAgICAgIGRpdlRleHQuYXBwZW5kKGRpdklubmVyLCBpbWdBdmF0YXIpO1xyXG4gICAgICAgIGNoYXRCb2R5LmFwcGVuZChkaXZJbmZvLCBkaXZUZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVNZXNzYWdlKHVzZXJJRDogbnVtYmVyLCBjaGF0SUQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlVGV4dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgICAgICBjb25zdCBuZXdNZXNzYWdlID0ge1xyXG4gICAgICAgICAgICBjaGF0SWQ6IGNoYXRJRCxcclxuICAgICAgICAgICAgdXNlcklkOiB1c2VySUQsXHJcbiAgICAgICAgICAgIHRleHQ6IHRleHQudmFsdWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld01lc3NhZ2UpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmZXRjaChcIi9jaGF0XCIsIHJlcXVlc3QpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGVuQ2hhdChjaGF0SUQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBub3JtYWxQZXJzb25EYXRlVHJhbnNmb3JtKHRpbWVzdGFtcDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGxldCBkYXRlID0gbmV3IERhdGUodGltZXN0YW1wKTtcclxuICAgIHJldHVybiBkYXRlLnRvTG9jYWxlU3RyaW5nKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hOb3RpZmljYXRpb24oKSB7XHJcbiAgICBmZXRjaChcIi9pc0FuVXNlckxvZ2dlZFwiKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKHNlYXJjaFVzZXJDaGF0cywgNTAwMCk7XHJcbiAgICAgICAgICAgICAgICBmZXRjaChcIi9jcmVhdGVJbnRlcnZhbC9cIiArIGludGVydmFsSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0b3BTZWFyY2hOb3RpZmljYXRpb24oKSB7XHJcbiAgICBmZXRjaChcIi9kZWxldGVJbnRlcnZhbFwiKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZGF0YSk7XHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFVzZXJDaGF0cygpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiTG9pc1wiKTtcclxuICAgIGZldGNoKFwiL2NoYXQvYWxsVXNlckNoYXRcIilcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2hhdFZlcnNpb25zLmdldChkYXRhLmlkKSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNoYXRWZXJzaW9ucy5zZXQoZGF0YS5pZCwgbmV3IE1hcDxudW1iZXIsIG51bWJlcj4oKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaWQgb2YgZGF0YS5jaGF0SWRzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhdFZlcnNpb25zLmdldChkYXRhLmlkKS5nZXQoaWQpID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYXRWZXJzaW9ucy5nZXQoZGF0YS5pZCkuc2V0KGlkLCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZldGNoKFwiL2NoYXQvdmVyc2lvbi9cIiArIGlkKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChzZXJpYWxpemVkVmVyc2lvbikgPT4gc2VyaWFsaXplZFZlcnNpb24uanNvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh2ZXJzaW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgodmVyc2lvbiA+IGNoYXRWZXJzaW9ucy5nZXQoZGF0YS5pZCkuZ2V0KGlkKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKFwiL2NoYXQvb25lL1wiK2lkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChzZXJpYWxpemVkQ2hhdCkgPT4gc2VyaWFsaXplZENoYXQuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChjaGF0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGF0LnVzZXIxLmlkICE9IGRhdGEuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxlcnRcIikucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhdFZlcnNpb25zLmdldChkYXRhLmlkKS5zZXQoaWQsIHZlcnNpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZENsaWNrQ2hhdDtcclxuIiwiaW1wb3J0IGNyZWFBbm51bmNpbyBmcm9tICcuL2NyZWFBbm51bmNpby5odG1sJ1xyXG5pbXBvcnQgYW5udW5jaSBmcm9tICcuL2FubnVuY2kuaHRtbCdcclxuaW1wb3J0IHZpZGVvZ2FtZSBmcm9tICcuLi9pbnRlcmZhY2VzL3ZpZGVvZ2FtZSc7XHJcblxyXG5sZXQgZnVsbExpc3Q6IHZpZGVvZ2FtZVtdID0gW11cclxubGV0IHVzZXJMaXN0OiB2aWRlb2dhbWVbXSA9IFtdXHJcbmxldCB3aXNoTGlzdDogc3RyaW5nW10gPSBbXVxyXG5sZXQgbGlzdElkOm51bWJlcltdPVtdXHJcbmxldCBnYW1lVG9UcmFkZTp2aWRlb2dhbWU7XHJcbmxldCBnaW9jb0RhU2NhbWJpYXJlOiBudW1iZXI7XHJcbmxldCBpbmRleCA9IDA7XHJcblxyXG5cclxuLypDcmVhIGxhIGxpc3RhIGRlaSBnaW9jaGkgcG9zc2VkdXRpIGRhbGwndXRlbnRlICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnNlcnRpb25QYWdlKCkge1xyXG4gICAgZ2V0VXNlckdhbWVzKCk7XHJcbiAgICBnZXRBbGxHYW1lcygpO1xyXG4gICAgYnV0dG9uVGVtcGxhdGUoKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VuZEluc2VydGlvblwiKS5vbmNsaWNrPSgpPT57XHJcbiAgICAgICAgc2VuZEFsbCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBidXR0b25UZW1wbGF0ZSgpe1xyXG4gICAgbGV0IHNlbGVjdGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3RlZFRyYWRlR2FtZVwiKTtcclxuICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IGxpQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGxldCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IGNvbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCBwaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgXHJcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBcIlNlbGV6aW9uYSBpbCBnaW9jbyBkYSBzY2FtYmlhcmVcIjtcclxuXHJcbiAgICByb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJteC1hdXRvIHJvdyBib3JkZXItYm90dG9tIGJvcmRlci0yIGJvcmRlci1wcmltYXJ5XCIpO1xyXG4gICAgY29sLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29sLTIgbXgtYXV0byBtcy0wIG15LWF1dG8gbXMtMVwiKTtcclxuICAgIGNvbDIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb2wtMiBteC1hdXRvIG1lLTEgbXktYXV0b1wiKTtcclxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibXktYXV0b1wiKTtcclxuICAgIGNvbDIuc2V0QXR0cmlidXRlKCdzdHlsZScsICd3aWR0aDozMDAlJyk7ICBcclxuICAgIGxpQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgICBsaUJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInAtMCBteC1hdXRvIG15LWF1dG8gZHJvcGRvd24taXRlbVwiKTtcclxuXHJcblxyXG4gICAgcm93LmFwcGVuZChjb2wsIGNvbDIpO1xyXG4gICAgY29sLmFwcGVuZCh0aXRsZSk7XHJcbiAgICBjb2wyLmFwcGVuZChwaWMpO1xyXG4gICAgbGlCdG4uYXBwZW5kKHJvdyk7XHJcblxyXG4gICAgc2VsZWN0ZWQuYXBwZW5kKGxpQnRuKTtcclxuXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRBbGxHYW1lcygpIHtcclxuICAgIGZldGNoKFwiL3ZpZGVvZ2FtZXNcIilcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigodmlkZW9nYW1lcykgPT4ge1xyXG4gICAgICAgICAgICBmdWxsTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBnYW1lIG9mIHZpZGVvZ2FtZXMpIHtcclxuICAgICAgICAgICAgICAgIGZ1bGxMaXN0LnB1c2goZ2FtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHdpc2hHYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2lzaEdhbWVzXCIpO1xyXG4gICAgICAgICAgICB3aXNoR2FtZXMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yIChsZXQgaT0wO2k8ZnVsbExpc3QubGVuZ3RoO2krKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbnRyb2wgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqPTA7IGo8dXNlckxpc3QubGVuZ3RoO2orKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZnVsbExpc3RbaV0uaWQgPT0gdXNlckxpc3Rbal0uaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZighY29udHJvbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb2xQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgICAgICAgICByb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJteC1hdXRvIHBiLTQgcm93IGJvcmRlci1ib3R0b20gYm9yZGVyLTIgYm9yZGVyLXByaW1hcnlcIik7XHJcbiAgICAgICAgICAgICAgICBjb2wuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb2wtMiBteC1hdXRvIG1zLTAgbXktYXV0b1wiKTtcclxuICAgICAgICAgICAgICAgIGNvbFBpYy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbC0yIG14LWF1dG8gbWUtMSBteS1hdXRvXCIpO1xyXG4gICAgICAgICAgICAgICAgcGljLnNldEF0dHJpYnV0ZSgnc3JjJywgZnVsbExpc3RbaV0uY292ZXIubGluayk7XHJcbiAgICAgICAgICAgICAgICBwaWMuc2V0QXR0cmlidXRlKCdhbHQnLCBmdWxsTGlzdFtpXS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIHBpYy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2JvcmRlciBib3JkZXItMiBib3JkZXItaW5mbyByb3VuZGVkJylcclxuICAgICAgICAgICAgICAgIHBpYy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3dpZHRoOjMwMCUnKTsgICAgXHJcbiAgICAgICAgICAgICAgICBsaUJ0bi5pZCA9IGZ1bGxMaXN0W2ldLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBsaUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICAgICAgbGlCdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkcm9wZG93bi1pdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gZnVsbExpc3RbaV0ubmFtZTtcclxuICAgICAgICAgICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibXktYXV0b1wiKTtcclxuICAgICAgICAgICAgICAgIGxpQnRuLm9uY2xpY2sgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXN0OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpc2hMaXN0Lmxlbmd0aCA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpc2hMaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgZWxlbWVudCBvZiB3aXNoTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCA9PSBsaS5pbm5lckhUTUwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGVzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aXNoTGlzdFtpbmRleF0gPSBsaS5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RJZFtpbmRleF0gPSBmdWxsTGlzdFtpXS5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdpb2NoaSBkZXNpZGVyYXRpOiBcIitsaXN0SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dTZWxlY3RlZEdhbWVzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGkuYXBwZW5kKGxpQnRuKTtcclxuICAgICAgICAgICAgICAgIGxpQnRuLmFwcGVuZChyb3cpO1xyXG4gICAgICAgICAgICAgICAgY29sLmFwcGVuZCh0aXRsZSk7XHJcbiAgICAgICAgICAgICAgICBjb2xQaWMuYXBwZW5kKHBpYylcclxuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmQoY29sLCBjb2xQaWMpO1xyXG4gICAgICAgICAgICAgICAgd2lzaEdhbWVzLmFwcGVuZChsaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRVc2VyR2FtZXMoKSB7XHJcbiAgICBmZXRjaChcIi92aWRlb2dhbWVzL3VzZXJcIilcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigodmlkZW9nYW1lcykgPT4ge1xyXG4gICAgICAgICAgICB1c2VyTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBnYW1lIG9mIHZpZGVvZ2FtZXMpIHtcclxuICAgICAgICAgICAgICAgIHVzZXJMaXN0LnB1c2goZ2FtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHRyYWRlR2FtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhZGVHYW1lXCIpO1xyXG4gICAgICAgICAgICB0cmFkZUdhbWUuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yIChsZXQgZ2FtZSBvZiB1c2VyTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbFBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICByb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJteC1hdXRvIHJvdyBib3JkZXItYm90dG9tIGJvcmRlci0yIGJvcmRlci1wcmltYXJ5XCIpO1xyXG4gICAgICAgICAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29sLTIgbXgtYXV0byBtcy0wIG15LWF1dG8gbXMtMVwiKTtcclxuICAgICAgICAgICAgICAgIGNvbFBpYy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbC0yIG14LWF1dG8gbWUtMSBteS1hdXRvXCIpO1xyXG4gICAgICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkcm9wZG93bi1pdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpdGVtU2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndpZHRoOiAzMDBweFwiKTtcclxuICAgICAgICAgICAgICAgIHRpdGxlLmlubmVySFRNTCA9IGdhbWUubmFtZTtcclxuICAgICAgICAgICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibXktYXV0b1wiKTtcclxuICAgICAgICAgICAgICAgIHBpYy5zcmMgPSBnYW1lLmNvdmVyLmxpbms7XHJcbiAgICAgICAgICAgICAgICBwaWMuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2JvcmRlciBib3JkZXItMiBib3JkZXItaW5mbyByb3VuZGVkJyk7XHJcbiAgICAgICAgICAgICAgICBwaWMuc2V0QXR0cmlidXRlKCdzdHlsZScsICd3aWR0aDoxMjhweDtoZWlnaHQ6YXV0bycpOyAgXHJcbiAgICAgICAgICAgICAgICBsaUJ0bi5pZCA9IGdhbWUubmFtZTtcclxuICAgICAgICAgICAgICAgIGxpQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgICAgICBsaUJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInAtMCBteC1hdXRvIG15LWF1dG8gZHJvcGRvd24taXRlbVwiKTtcclxuICAgICAgICAgICAgICAgIGxpQnRuLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2lvY29EYVNjYW1iaWFyZSA9IGdhbWUuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnaW9jbyBkYSBTY2FtYmlhcmU6IFwiKyBnaW9jb0RhU2NhbWJpYXJlKTtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lVG9UcmFkZT1nYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dTZWxlY3RlZFRyYWRlR2FtZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmQoY29sLCBjb2xQaWMpO1xyXG4gICAgICAgICAgICAgICAgY29sLmFwcGVuZCh0aXRsZSk7XHJcbiAgICAgICAgICAgICAgICBjb2xQaWMuYXBwZW5kKHBpYyk7XHJcbiAgICAgICAgICAgICAgICBsaUJ0bi5hcHBlbmQocm93KTtcclxuICAgICAgICAgICAgICAgIGxpLmFwcGVuZChsaUJ0bik7XHJcbiAgICAgICAgICAgICAgICB0cmFkZUdhbWUuYXBwZW5kKGxpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzaG93U2VsZWN0ZWRUcmFkZUdhbWUoKXtcclxuICAgIGdhbWVUb1RyYWRlO1xyXG4gICAgbGV0IHNlbGVjdGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWRcclxuICAgIChcInNlbGVjdGVkVHJhZGVHYW1lXCIpO1xyXG4gICAgc2VsZWN0ZWQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IGxpQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGxldCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IGNvbFBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IHBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBcclxuICAgIHRpdGxlLmlubmVySFRNTCA9IGdhbWVUb1RyYWRlLm5hbWU7XHJcbiAgICBwaWMuc3JjID0gZ2FtZVRvVHJhZGUuY292ZXIubGluaztcclxuXHJcbiAgICByb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJteC1hdXRvIHJvdyBib3JkZXItYm90dG9tIGJvcmRlci0yIGJvcmRlci1wcmltYXJ5XCIpO1xyXG4gICAgY29sLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29sLTIgbXgtYXV0byBtcy0wIG15LWF1dG8gbXMtMVwiKTtcclxuICAgIGNvbFBpYy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbC0yIG14LWF1dG8gbWUtMSBteS1hdXRvXCIpO1xyXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJteS1hdXRvXCIpO1xyXG4gICAgcGljLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdib3JkZXIgYm9yZGVyLTIgYm9yZGVyLWluZm8gcm91bmRlZCcpO1xyXG4gICAgcGljLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnd2lkdGg6MzAwJScpOyAgXHJcbiAgICBsaUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgbGlCdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwLTAgbXgtYXV0byBteS1hdXRvIGRyb3Bkb3duLWl0ZW1cIik7XHJcblxyXG5cclxuICAgIHJvdy5hcHBlbmQoY29sLCBjb2xQaWMpO1xyXG4gICAgY29sLmFwcGVuZCh0aXRsZSk7XHJcbiAgICBjb2xQaWMuYXBwZW5kKHBpYyk7XHJcbiAgICBsaUJ0bi5hcHBlbmQocm93KTtcclxuXHJcbiAgICBzZWxlY3RlZC5hcHBlbmQobGlCdG4pO1xyXG59XHJcblxyXG5cclxuLyogTW9zdHJhIGkgZ2lvY2hpIHNjZWx0aSBkYWxsJ3V0ZW50ZSBwZXIgbG8gc2NhbWJpbyovXHJcbmZ1bmN0aW9uIHNob3dTZWxlY3RlZEdhbWVzKCkge1xyXG4gICAgbGV0IHNlbGVjdGVkR2FtZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdGVkR2FtZXNcIik7XHJcbiAgICBzZWxlY3RlZEdhbWVzLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdpc2hMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGxldCBwaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIHBpYy5zcmMgPSB3aXNoTGlzdFtpXTtcclxuXHJcbiAgICAgICAgbGkuaW5uZXJIVE1MID0gd2lzaExpc3RbaV07XHJcbiAgICAgICAgc2VsZWN0ZWRHYW1lcy5hcHBlbmQobGkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgSW5zZXJ0aW9uRFRPe1xyXG4gICAgdGl0bGU6c3RyaW5nLFxyXG4gICAgZGVzY3JpcHRpb246c3RyaW5nLFxyXG4gICAgZ2FsbGVyeTpzdHJpbmdbXSxcclxuICAgIHRyYWRlR2FtZUlkOm51bWJlcixcclxuICAgIHdpc2hMaXN0SWRzOm51bWJlcltdXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZW5kQWxsICgpe1xyXG4gICAgbGV0IGNvbXBvc2l0ZWxpbms9KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FsbGVyeUluc2VydGlvblwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZVxyXG4gICAgbGV0IGxpbmtzPWNvbXBvc2l0ZWxpbmsuc3BsaXQoXCIsXCIpO1xyXG4gICAgXHJcbiAgICBsZXQgb2JqOkluc2VydGlvbkRUTz17XHJcbiAgICB0aXRsZTogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVJbnNlcnRpb25cIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcblx0ZGVzY3JpcHRpb246IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uSW5zZXJ0aW9uXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLFxyXG5cdGdhbGxlcnk6IGxpbmtzLFxyXG5cdHRyYWRlR2FtZUlkOiBnaW9jb0RhU2NhbWJpYXJlLFxyXG5cdHdpc2hMaXN0SWRzOiBsaXN0SWRcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcmVxdWVzdCA9e1xyXG4gICAgICAgIG1ldGhvZDonUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvYmopXHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2goXCIvaW5zZXJ0aW9uXCIsIHJlcXVlc3QpXHJcbiAgICAudGhlbigocmVzcG9uc2UpPT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigoZGF0YSk9PntcclxuICAgICAgICBpZihkYXRhKXtcclxuICAgICAgICAgICAgYWxlcnQoXCJBbm51bmNpbyBpbnNlcml0byFcIik7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiT3BzLCBxdWFsY29zYSDDqCBhbmRhdG8gc3RvcnRvIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVJbnNlcnRpb25QYWdlOyIsImltcG9ydCBkaXYgZnJvbSAnLi9mb290ZXIuaHRtbCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRm90KCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb290ZXJcIikuaW5uZXJIVE1MID0gZGl2O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGb3Q7IiwiaW1wb3J0IGdlc3Rpb25lVXRlbnRpIGZyb20gJy4vZ2VzdGlvbmVVdGVudGkuaHRtbCdcclxuaW1wb3J0IHVzZXJJbnQgZnJvbSAnLi4vaW50ZXJmYWNlcy91c2VyJztcclxuaW1wb3J0IHNob3dQcm9maWxlIGZyb20gJy4uL3Byb2ZpbG9VdGVudGUvcHJvZmlsZSc7XHJcblxyXG5sZXQgdXNlcnM6IHVzZXJJbnRbXSA9IFtdO1xyXG5sZXQgdmlldyA9IDU7XHJcblxyXG5mdW5jdGlvbiBzaG93VXNlcnMobnVtOiBudW1iZXIpIHtcclxuICAgIGxldCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyTGlzdFwiKTtcclxuICAgIGxpc3QuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gKG51bSAtIDEpICogdmlldzsgaSA8IG51bSAqIHZpZXc7IGkrKykge1xyXG4gICAgICAgIGlmIChpID49IHVzZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBsZXQgYnRuX3Byb2ZpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ0bl9wcm9maWxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnRuXCIpO1xyXG4gICAgICAgIGJ0bl9wcm9maWxlLm9uY2xpY2sgPSBzaG93UHJvZmlsZTtcclxuICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpc3QtZ3JvdXAtaXRlbScpO1xyXG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZSgnb25tb3VzZW92ZXInLCBcInNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGlzdC1ncm91cC1pdGVtIGFjdGl2ZScpXCIpO1xyXG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZSgnb25tb3VzZW91dCcsIFwic2V0QXR0cmlidXRlKCdjbGFzcycsICdsaXN0LWdyb3VwLWl0ZW0nKVwiKTtcclxuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmbG9hdC1lbmRcIik7XHJcbiAgICAgICAgbGV0IGJ0bl9iYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGxldCBidG5fYWRtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBidG5fYmFuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXCIpO1xyXG4gICAgICAgIGJ0bl9hZG0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtXCIpO1xyXG4gICAgICAgIGJ0bl9iYW4uaW5uZXJIVE1MID0gXCJCYW5uYVwiO1xyXG4gICAgICAgIGJ0bl9hZG0uaW5uZXJIVE1MID0gXCJSZW5kaSBBZG1pblwiO1xyXG4gICAgICAgIGJ0bl9iYW4ub25jbGljayA9ICgpID0+IHsga2lja0hpc0Fzc091dE9mVGhpc1NpdGUodXNlcnNbaV0udXNlcklkKX07XHJcbiAgICAgICAgYnRuX2FkbS5vbmNsaWNrID0gKCkgPT4geyBtYWtlSGltQWRtaW4odXNlcnNbaV0udXNlcklkKSB9O1xyXG4gICAgICAgIHNwYW4uYXBwZW5kKGJ0bl9hZG0sIGJ0bl9iYW4pO1xyXG4gICAgICAgIGJ0bl9wcm9maWxlLmlubmVySFRNTCA9IHVzZXJzW2ldLnVzZXJuYW1lICsgXCIgfCBcIiArIHVzZXJzW2ldLm5hbWUgKyBcIiBcIiArIHVzZXJzW2ldLnN1cm5hbWUgKyBcIiB8IFwiICsgdXNlcnNbaV0uZW1haWwgKyBcIiB8IFwiICsgdXNlcnNbaV0ucmF0aW5nICsgXCI8aSBjbGFzcz0nZmEtcmVndWxhciBmYS1zdGFyJz48L2k+XCI7XHJcbiAgICAgICAgbGkuYXBwZW5kKGJ0bl9wcm9maWxlLCBzcGFuKTtcclxuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxVc2VycygpOiB2b2lkIHtcclxuICAgIGZldGNoKFwiL3VzZXJcIilcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB1c2VycyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBlbGVtZW50IG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHVzZXJzLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3JlYXRlUGFnaW5hdGlvbigpO1xyXG4gICAgICAgICAgICBzaG93VXNlcnMoMSk7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbi8qXHJcbjxsaSBjbGFzcz1cInBhZ2UtaXRlbSBhY3RpdmVcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicGFnZS1saW5rXCI+MTwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cInBhZ2UtaXRlbVwiPjxhIGNsYXNzPVwicGFnZS1saW5rXCIgaHJlZj1cIiNcIj4yPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwicGFnZS1pdGVtXCI+PGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBocmVmPVwiI1wiPjM8L2E+PC9saT5cclxuKi9cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVBhZ2luYXRpb24oKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2luYXRpb25cIikuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGxldCBudW1iZXJPZlBhZ2VzID0gTWF0aC5jZWlsKHVzZXJzLmxlbmd0aCAvIHZpZXcpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJPZlBhZ2VzOyBpKyspIHtcclxuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbSBhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiLCBcInBhZ2VcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWl0ZW1cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtbGlua1wiKTtcclxuICAgICAgICBidG4ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGFsbExpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdpbmF0aW9uXCIpLmNoaWxkcmVuO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBvbmVMaSBvZiBhbGxMaSkge1xyXG4gICAgICAgICAgICAgICAgb25lTGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWl0ZW1cIik7XHJcbiAgICAgICAgICAgICAgICBvbmVMaS5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWl0ZW0gYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIiwgXCJwYWdlXCIpO1xyXG4gICAgICAgICAgICBzaG93VXNlcnMoaSArIDEpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgYnRuLmlubmVySFRNTCA9IFwiXCIgKyAoaSArIDEpO1xyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdpbmF0aW9uXCIpLmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlSGltQWRtaW4oaWQ6IG51bWJlcikge1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpZClcclxuICAgIH1cclxuICAgIGZldGNoKFwiL2FkbWluXCIsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpZClcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHsgY29uc29sZS5sb2coXCJhZG1pbiBjcmVhdG8/IFwiICsgZGF0YSk7IGdldEFsbFVzZXJzKCk7IH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBraWNrSGlzQXNzT3V0T2ZUaGlzU2l0ZShpZDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaWQpXHJcbiAgICB9XHJcbiAgICBmZXRjaChcIi91c2VyXCIsIHJlcXVlc3QpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHsgY29uc29sZS5sb2coXCJ1c2VyIGNhbmNlbGxhdG8/IFwiICsgZGF0YSk7IGdldEFsbFVzZXJzKCk7IH0pO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0QWxsVXNlcnM7IiwiaW1wb3J0IGhvbWUgZnJvbSAnLi9ob21lLmh0bWwnXHJcbmltcG9ydCB7aW5zZXJ0aW9ufSBmcm9tICcuLi9pbnRlcmZhY2VzL2luc2VydGlvbic7XHJcbmltcG9ydCBhbm51bmNpIGZyb20gJy4uL2FubnVuY2kvYW5udW5jaS5odG1sJztcclxuaW1wb3J0IGNyZWF0ZVBhZ2UsIHsgc2VhcmNoQnlUaXRsZSB9IGZyb20gXCIuLi9hbm51bmNpL2FubnVuY2lcIjtcclxuaW1wb3J0IHsgY3JlYXRlUGFnaW5hdGlvbiB9IGZyb20gJy4uL2FubnVuY2kvYW5udW5jaSc7XHJcbmltcG9ydCBjcmVhQW5udW5jaW8gZnJvbSAnLi4vY3JlYUFubnVuY2lvL2NyZWFBbm51bmNpby5odG1sJ1xyXG5pbXBvcnQgY3JlYXRlSW5zZXJ0aW9uUGFnZSBmcm9tIFwiLi4vY3JlYUFubnVuY2lvL2NyZWFBbm51bmNpb1wiO1xyXG5pbXBvcnQgZXhwYW5kSW5zZXJ0aW9uIGZyb20gJy4uL2FubnVuY2kvYW5udW5jaW8nO1xyXG5pbXBvcnQgYW5udW5jaW8gZnJvbSAnLi4vYW5udW5jaS9hbm51bmNpby5odG1sJztcclxuaW1wb3J0IHsgYXNzaWduRmlsdGVycyB9IGZyb20gJy4uL2FubnVuY2kvYW5udW5jaSdcclxuXHJcbmxldCBob21lTGlzdDogaW5zZXJ0aW9uW10gPSBbXTtcclxuXHJcblxyXG5leHBvcnQgIGZ1bmN0aW9uIGNyZWF0ZUhvbWUoKXtcclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuICAgIG1haW4uaW5uZXJIVE1MID0gaG9tZTtcclxuICAgXHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnRpb25zQ2FyZFwiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBhbm51bmNpO1xyXG4gICAgICAgIGNyZWF0ZVBhZ2UoKTtcclxuICAgIH07XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnRDYXJkXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGNyZWFBbm51bmNpbztcclxuICAgICAgICBjcmVhdGVJbnNlcnRpb25QYWdlKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQnV0dG9uVGl0bGVcIikub25jbGljayA9ICAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGtleXdvcmQgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hUaXRsZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgICAgICBpZihrZXl3b3JkICE9IFwiXCIpe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MID0gYW5udW5jaTtcclxuICAgICAgICAgICAgYXNzaWduRmlsdGVycygpXHJcbiAgICAgICAgICAgIHNlYXJjaEJ5VGl0bGUoa2V5d29yZCkgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFRpdGxlXCIpLm9ua2V5ZG93biA9IChlKSA9PiB7XHJcbiAgICAgICAgbGV0IGtleXdvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFRpdGxlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgaWYoZS5rZXkgPT0gXCJFbnRlclwiICYmIGtleXdvcmQudmFsdWUhPSBcIlwiKXtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGFubnVuY2k7XHJcbiAgICAgICAgICAgIGFzc2lnbkZpbHRlcnMoKVxyXG4gICAgICAgICAgICBzZWFyY2hCeVRpdGxlKGtleXdvcmQudmFsdWUpXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaG9tZUxpc3Q9W107XHJcbiAgICBmZXRjaCgnL2luc2VydGlvbicpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgZm9yKGxldCBkIG9mIGRhdGEpe1xyXG4gICAgICAgICAgICBob21lTGlzdC5wdXNoKGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjcmVhdGVJdGVtQ2Fyb3VzZWwoKTsgIFxyXG4gICAgfSlcclxuICAgIH1cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVJdGVtQ2Fyb3VzZWwoKXtcclxuXHJcbmZvcihsZXQgaSA9IGhvbWVMaXN0Lmxlbmd0aC0xOyBpID4gaG9tZUxpc3QubGVuZ3RoLTUgJiYgaSA+PSAwOyBpLS0pe1xyXG4gICAgbGV0IGNhcklubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lubmVyQ2Fyb3VzZWxIb21lJyk7XHJcbiAgICBsZXQgY2xDYXJvdXNlbEl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgaWYoaSA9PSAwKXtcclxuICAgICAgICBjbENhcm91c2VsSXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJvdXNlbC1pdGVtIGFjdGl2ZScpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgY2xDYXJvdXNlbEl0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2Fyb3VzZWwtaXRlbScpO1xyXG4gICAgICAgIH1cclxuICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGhvbWVMaXN0W2ldLnRyYWRlR2FtZS5jb3Zlci5saW5rKTtcclxuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ltZ0NhcmQnKTtcclxuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ210LTInKTtcclxuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2hlaWdodDo0MDA7d2lkdGg6YXV0bycpO1xyXG5cclxuICAgIGxldCBjbENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNsQ2FyZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQgYmctc2Vjb25kYXJ5Jyk7XHJcbiAgICBjbENhcmQuc2V0QXR0cmlidXRlKCdpZCcsICdhbm5DYXJkJyk7XHJcbiAgICBsZXQgY2FyQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyQm9keS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQtYm9keScpO1xyXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcclxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZC10aXRsZSBib3JkZXItdG9wIGJvcmRlci0yIGJvcmRlci1pbmZvJyk7XHJcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBob21lTGlzdFtpXS50cmFkZUdhbWUubmFtZTtcclxuICAgIGxldCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgZGVzYy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQtdGV4dCcpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBob21lTGlzdFtpXS50cmFkZUdhbWUuZ2VucmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBkZXNjLmlubmVySFRNTCArPSBob21lTGlzdFtpXS50cmFkZUdhbWUuZ2VucmVbaV0uZ2VucmUgKyBcIiBcIlxyXG4gICAgfVxyXG4gICAgZGVzYy5pbm5lckhUTUwgKz0gXCI8YnI+XCJcclxuICAgICsgXCJBbm5vOiBcIiArIGhvbWVMaXN0W2ldLnRyYWRlR2FtZS55ZWFyICsgXCIgXCJcclxuICAgICsgXCJDb25zb2xlOiBcIiArIGhvbWVMaXN0W2ldLnRyYWRlR2FtZS5jb25zb2xlLmNvbnNvbGUgKyBcIjxicj5cIlxyXG4gICAgK1wiRGVzY3JpemlvbmU6XCI7XHJcbiAgICBsZXQgZ29Bbm4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBsZXQgaW1nR29Bbm4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGdvQW5uLnNldEF0dHJpYnV0ZSgnaHJlZicsIFwiI1wiKTtcclxuICAgIGltZ0dvQW5uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncC0wIGJ0biBkcm9wZG93bi10b2dnbGVcIiB0eXBlPVwiYnV0dG9uJyk7XHJcbiAgICBpbWdHb0Fubi5zcmMgPSBcIi4vaW1nL2J1dHRvbi9nb0J0bi5wbmdcIjtcclxuICAgIGdvQW5uLmFwcGVuZENoaWxkKGltZ0dvQW5uKTtcclxuICAgIGltZ0dvQW5uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYm9yZGVyOm5vbmU7ZmxvYXQ6Y2VudGVyO2ltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO3dpZHRoOiAxMCU7aGVpZ2h0OmF1dG87Jyk7XHJcbiAgICBnb0Fubi5hcHBlbmQoaW1nR29Bbm4pO1xyXG4gICAgZ29Bbm4ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpLmlubmVySFRNTCA9IGFubnVuY2lvO1xyXG4gICAgICAgIGV4cGFuZEluc2VydGlvbihob21lTGlzdFtpXSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FySW5uZXIuYXBwZW5kQ2hpbGQoY2xDYXJvdXNlbEl0KTtcclxuICAgICAgICAgICAgY2xDYXJvdXNlbEl0LmFwcGVuZENoaWxkKGNsQ2FyZCk7XHJcbiAgICAgICAgICAgICAgICBjbENhcmQuYXBwZW5kKGltZyk7XHJcbiAgICAgICAgICAgICAgICBjbENhcmQuYXBwZW5kKGNhckJvZHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhckJvZHkuYXBwZW5kKHRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXJCb2R5LmFwcGVuZChkZXNjKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXJCb2R5LmFwcGVuZChnb0Fubik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZTtcclxuXHJcbi8qXHJcbmFzeW5jIGZ1bmN0aW9uIGdldHRpdGxlKHRpdGxlOiBzdHJpbmcpOntcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goKVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG5cclxufVxyXG4qLyIsImltcG9ydCBtb2RhbCBmcm9tICcuL21vZGFsLmh0bWwnXHJcbmltcG9ydCBsb2dpbiBmcm9tICcuLi9sb2dpbi9sb2dpbi5odG1sJ1xyXG5pbXBvcnQgbG9naW5Gb290ZXIgZnJvbSAnLi4vbG9naW4vbG9naW5Gb290ZXIuaHRtbCdcclxuaW1wb3J0IHJlZ2lzdHJhemlvbmUgZnJvbSAnLi4vcmVnaXN0cmF6aW9uZS9yZWdpc3RyYXppb25lLmh0bWwnXHJcbmltcG9ydCByZWdGb290ZXIgZnJvbSAnLi4vcmVnaXN0cmF6aW9uZS9yZWdpc3RyYXppb25lRm9vdGVyLmh0bWwnXHJcbmltcG9ydCBsb2dvdXQgZnJvbSAnLi4vbG9nb3V0L2xvZ291dC5odG1sJ1xyXG5pbXBvcnQgcHJvZmlsZSBmcm9tICcuLi9wcm9maWxvVXRlbnRlL3Byb2ZpbGUuaHRtbCdcclxuaW1wb3J0ICogYXMgbmF2IGZyb20gXCIuLi9uYXZiYXIvbmF2YmFyXCJcclxuaW1wb3J0IGxvZ2dlZCBmcm9tICcuLi9pbnRlcmZhY2VzL2xvZ2dlZCdcclxuaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSAnLi4vaG9tZS9ob21lJ1xyXG5pbXBvcnQgeyBzZWFyY2hOb3RpZmljYXRpb24sIHN0b3BTZWFyY2hOb3RpZmljYXRpb24gfSBmcm9tICcuLi9jaGF0L2NoYXQnXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNb2RhbCgpIHtcclxuICAgIGxldCBkaXZNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXZNb2RhbC5pbm5lckhUTUwgPSBtb2RhbDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpLmFwcGVuZENoaWxkKGRpdk1vZGFsKTtcclxuICAgIHNob3dMb2dJbk1vZGFsKCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luXCIpLm9uY2xpY2sgPSBzaG93TG9nSW5Nb2RhbDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbk91dEJ1dHRvblwiKS5vbmNsaWNrID0gc2hvd0xvZ091dE1vZGFsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93U2lnblVwTW9kYWwoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxCb2R5XCIpLmlubmVySFRNTCA9IHJlZ2lzdHJhemlvbmU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxGb290ZXJcIikuaW5uZXJIVE1MID0gcmVnRm9vdGVyO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cnl0b1NpZ25VcFwiKS5vbmNsaWNrID0gdHJ5VG9TaWduVXA7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25VcExvZ2luXCIpLm9uY2xpY2sgPSBzaG93TG9nSW5Nb2RhbDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVNpZ25VcFwiKS5vbmtleXVwID0gdmFsaWRhdGVGb3JtO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdXJuYW1lU2lnblVwXCIpLm9ua2V5dXAgPSB2YWxpZGF0ZUZvcm07XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJuYW1lU2lnblVwXCIpLm9ua2V5dXAgPSB2YWxpZGF0ZUZvcm07XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsU2lnblVwXCIpLm9ua2V5dXAgPSB2YWxpZGF0ZUZvcm07XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkU2lnblVwXCIpLm9ua2V5dXAgPSB2YWxpZGF0ZUZvcm07XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbmZpcm1fcGFzc3dvcmRTaWduVXBcIikub25rZXl1cCA9IHZhbGlkYXRlRm9ybTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0xvZ0luTW9kYWwoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxCb2R5XCIpLmlubmVySFRNTCA9IGxvZ2luO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteU1vZGFsRm9vdGVyXCIpLmlubmVySFRNTCA9IGxvZ2luRm9vdGVyO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpblNpZ25VcFwiKS5vbmNsaWNrID0gc2hvd1NpZ25VcE1vZGFsO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cnlUb0xvZ1wiKS5vbmNsaWNrID0gdHJ5VG9Mb2dJbjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcm5hbWVTaWduSW5cIikub25rZXlkb3duID0gKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXkgPT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICB0cnlUb0xvZ0luKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzd29yZFNpZ25JblwiKS5vbmtleWRvd24gPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIHRyeVRvTG9nSW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNob3dMb2dPdXRNb2RhbCgpIHtcclxuICAgIGxldCByZXN1bHQ6IGJvb2xlYW4gPSBhd2FpdCB0cnlUb0xvZ091dCgpO1xyXG4gICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbEJvZHlcIikuaW5uZXJIVE1MID0gbG9nb3V0O1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbEZvb3RlclwiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGNyZWF0ZUhvbWUoKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdHJ5VG9TaWduVXAoKSB7XHJcbiAgICBjb25zdCB1c2VyID0ge1xyXG4gICAgICAgIHVzZXJuYW1lOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VybmFtZVNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSxcclxuICAgICAgICBwYXNzd29yZDogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmRTaWduVXBcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcbiAgICAgICAgbmFtZTogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSxcclxuICAgICAgICBzdXJuYW1lOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdXJuYW1lU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLFxyXG4gICAgICAgIGVtYWlsOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXF1ZXN0ID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlcilcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaChcIi91c2VyXCIsIHJlcXVlc3QpLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25VcFJlc3VsdFwiKS5pbm5lckhUTUwgPSBcIlJlZ2lzdHJhdG8gY29uIHN1Y2Nlc3NvIVwiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyeXRvU2lnblVwXCIpLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25VcFJlc3VsdFwiKS5pbm5lckhUTUwgPSBcIk9wcywgcXVhbGNvc2Egw6ggYW5kYXRvIHN0b3J0byFcIjtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cnl0b1NpZ25VcFwiKS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRyeVRvTG9nSW4oKSB7XHJcbiAgICBjb25zdCBsb2dpbiA9IHtcclxuICAgICAgICB1c2VybmFtZTogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcm5hbWVTaWduSW5cIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkU2lnbkluXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGxvZ2luKVxyXG4gICAgfTtcclxuICAgIGxldCByZXN1bHQ6IGFueSA9IGZldGNoKFwiL2xvZ2luXCIsIHJlcXVlc3QpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEubG9nZ2VkKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luUmVzdWx0XCIpLmlubmVySFRNTCA9IFwiTG9nZ2F0byBjb24gc3VjY2Vzc28hXCI7XHJcbiAgICAgICAgICAgICAgICBuYXYuc2V0TmF2KGRhdGEuYWNjb3VudFR5cGUpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cnlUb0xvZ1wiKS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luU2lnblVwXCIpLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUhvbWUoKTtcclxuICAgICAgICAgICAgICAgIHNlYXJjaE5vdGlmaWNhdGlvbigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpblJlc3VsdFwiKS5pbm5lckhUTUwgPSBcIk9wcywgcXVhbGNvc2Egw6ggYW5kYXRvIHN0b3J0b1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHRyeVRvTG9nT3V0KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgc3RvcFNlYXJjaE5vdGlmaWNhdGlvbigpO1xyXG4gICAgbGV0IHByb21pc2VSZXN1bHQgPSBmZXRjaChcIi9sb2dvdXRcIilcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgbmF2LnNldE5hdihcIkdVRVNUXCIpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cnlUb0xvZ1wiKS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5TaWduVXBcIikucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGRhdGFcclxuICAgICAgICB9KTtcclxuICAgIHJldHVybiBwcm9taXNlUmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUZvcm0oKSB7XHJcbiAgICBsZXQgdXNlcm5hbWUgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VybmFtZVNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgIGxldCBwYXNzd29yZCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgbGV0IG5hbWUgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgbGV0IHN1cm5hbWUgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdXJuYW1lU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgbGV0IGVtYWlsID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxTaWduVXBcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICBsZXQgY29uZmlybV9wYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uZmlybV9wYXNzd29yZFNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uZmlybV9wYXNzd29yZC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIlwiKTtcclxuXHJcbiAgICBpZiAodXNlcm5hbWUgPT0gXCJcIiB8fCBwYXNzd29yZCA9PSBcIlwiIHx8IG5hbWUgPT0gXCJcIiB8fCBzdXJuYW1lID09IFwiXCIgfHwgZW1haWwgPT0gXCJcIikge1xyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyeXRvU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBpZiAocGFzc3dvcmQgIT0gY29uZmlybV9wYXNzd29yZC52YWx1ZSkge1xyXG4gICAgICAgICAgICBjb25maXJtX3Bhc3N3b3JkLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYm9yZGVyLWNvbG9yOiByZWQ7XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbmZpcm1fcGFzc3dvcmQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJib3JkZXItY29sb3I6IGdyZWVuO1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChwYXNzd29yZCAhPSBjb25maXJtX3Bhc3N3b3JkLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbmZpcm1fcGFzc3dvcmQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJib3JkZXItY29sb3I6IHJlZDtcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uZmlybV9wYXNzd29yZC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJvcmRlci1jb2xvcjogZ3JlZW47XCIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyeXRvU2lnblVwXCIpLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTW9kYWw7IiwiaW1wb3J0IG5hdiBmcm9tIFwiLi9uYXZiYXIuaHRtbFwiO1xyXG5pbXBvcnQgY3JlYXRlTW9kYWwgZnJvbSBcIi4uL21vZGFsL21vZGFsXCI7XHJcbmltcG9ydCBhbm51bmNpIGZyb20gXCIuLi9hbm51bmNpL2FubnVuY2kuaHRtbFwiO1xyXG5pbXBvcnQgZ2VzdGlvbmVhbm51bmNpIGZyb20gXCIuLi9hbm51bmNpL2dlc3Rpb25lYW5udW5jaS5odG1sXCI7XHJcbmltcG9ydCBjcmVhdGVQYWdlIGZyb20gXCIuLi9hbm51bmNpL2FubnVuY2lcIjtcclxuaW1wb3J0IGhvbWUgZnJvbSBcIi4uL2hvbWUvaG9tZS5odG1sXCI7XHJcbmltcG9ydCBjcmVhdGVJdGVtQ2Fyb3VzZWwgZnJvbSBcIi4uL2hvbWUvaG9tZVwiXHJcbmltcG9ydCBjcmVhdGVIb21lIGZyb20gXCIuLi9ob21lL2hvbWVcIjtcclxuaW1wb3J0IHByb2ZpbGUgZnJvbSBcIi4uL3Byb2ZpbG9VdGVudGUvcHJvZmlsZS5odG1sXCI7XHJcbmltcG9ydCBzaG93UHJvZmlsZSBmcm9tIFwiLi4vcHJvZmlsb1V0ZW50ZS9wcm9maWxlXCI7XHJcbmltcG9ydCBnZXN0aW9uZVV0ZW50aSBmcm9tIFwiLi4vZ2VzdGlvbmVVdGVudGkvZ2VzdGlvbmVVdGVudGkuaHRtbFwiO1xyXG5pbXBvcnQgZ2V0QWxsVXNlcnMgZnJvbSBcIi4uL2dlc3Rpb25lVXRlbnRpL2dlc3Rpb25lVXRlbnRpXCI7XHJcbmltcG9ydCBjcmVhdGVQYWdlMiBmcm9tIFwiLi4vYW5udW5jaS9nZXN0aW9uZWFubnVuY2lcIjtcclxuaW1wb3J0IGNyZWFBbm51bmNpbyBmcm9tIFwiLi4vY3JlYUFubnVuY2lvL2NyZWFBbm51bmNpby5odG1sXCJcclxuaW1wb3J0IHZpZGVvZ2lvY2hpIGZyb20gXCIuLi92aWRlb2dpb2NoaS92aWRlb2dpb2NoaS5odG1sXCJcclxuaW1wb3J0IGNyZWF0ZUluc2VydGlvblBhZ2UgZnJvbSBcIi4uL2NyZWFBbm51bmNpby9jcmVhQW5udW5jaW9cIlxyXG5pbXBvcnQgY3JlYXRlR2FtZVBhZ2UgZnJvbSBcIi4uL3ZpZGVvZ2lvY2hpL3ZpZGVvZ2lvY2hpXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xyXG4gICAgXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKS5pbm5lckhUTUwgPSBuYXY7XHJcbiAgICBjcmVhdGVNb2RhbCgpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dvXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgY3JlYXRlSG9tZSgpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lc1wiKS5vbmNsaWNrPSgpPT57XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUw9dmlkZW9naW9jaGk7IFxyXG4gICAgICBjcmVhdGVHYW1lUGFnZSgpOyBcclxuICAgIH07XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnRpb25zXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGFubnVuY2k7XHJcbiAgICAgICAgY3JlYXRlUGFnZSgpO1xyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkSW5zZXJ0aW9uXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGNyZWFBbm51bmNpbztcclxuICAgICAgICBjcmVhdGVJbnNlcnRpb25QYWdlKCk7XHJcbiAgICB9O1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNNYW5hZ2VtZW50XCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGdlc3Rpb25lYW5udW5jaTtcclxuICAgICAgICBjcmVhdGVQYWdlMigpO1xyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFuYWdlbWVudFwiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBnZXN0aW9uZVV0ZW50aTtcclxuICAgICAgICBnZXRBbGxVc2VycygpO1xyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZmlsZVwiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBwcm9maWxlO1xyXG4gICAgICAgIHNob3dQcm9maWxlKCk7XHJcbiAgICB9O1xyXG4gICAgZmV0Y2goXCIvd2hvSXNMb2dnZWRcIilcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgc2V0TmF2KGRhdGEpO1xyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldE5hdihhY2NvdW50VHlwZSA6IHN0cmluZykge1xyXG4gICAgY29uc3QgYnRuX2dlc3RVdGVudGkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hbmFnZW1lbnRcIik7XHJcbiAgICBjb25zdCBidG5faW5zTWFuYWdlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zTWFuYWdlbWVudFwiKTtcclxuICAgIGNvbnN0IGJ0bl9sb2dpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5cIik7XHJcbiAgICBjb25zdCBidG5fc2lnbk91dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbk91dEJ1dHRvblwiKTtcclxuICAgIGNvbnN0IGJ0bl9hZGRJbnNlcnRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEluc2VydGlvblwiKTtcclxuICAgIGNvbnN0IGJ1dHRvbl9wcm9maWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9maWxlXCIpO1xyXG4gICAgaWYoYWNjb3VudFR5cGU9PVwiQURNSU5cIil7XHJcbiAgICAgICAgYnRuX2dlc3RVdGVudGkucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGJ0bl9hZGRJbnNlcnRpb24uc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICBidG5faW5zTWFuYWdlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgYnRuX2xvZ2luLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgYnRuX3NpZ25PdXRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGJ1dHRvbl9wcm9maWxlLnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKVxyXG4gICAgfWVsc2UgaWYoYWNjb3VudFR5cGU9PVwiVVNFUlwiKXtcclxuICAgICAgICBidG5fZ2VzdFV0ZW50aS5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIGJ0bl9hZGRJbnNlcnRpb24ucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGJ0bl9pbnNNYW5hZ2VtZW50LnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgYnRuX2xvZ2luLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgYnRuX3NpZ25PdXRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGJ1dHRvbl9wcm9maWxlLnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgYnRuX2dlc3RVdGVudGkuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICBidG5fYWRkSW5zZXJ0aW9uLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgYnRuX2luc01hbmFnZW1lbnQuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICBidG5fbG9naW4ucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGJ0bl9zaWduT3V0QnV0dG9uLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgYnV0dG9uX3Byb2ZpbGUuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVOYXY7XHJcbiIsImltcG9ydCBwcm9maWxlIGZyb20gJy4vcHJvZmlsZS5odG1sJ1xyXG5cclxuXHJcbmxldCB0eXBlO1xyXG5sZXQgdXNlckluZm87XHJcbmxldCBhZG1pbkluZm87XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1Byb2ZpbGUoKSB7XHJcbiAgICBmZXRjaChcIi93aG9Jc0xvZ2dlZFwiKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhID09IFwiQURNSU5cIikge1xyXG4gICAgICAgICAgICAgICAgdHlwZSA9IFwiQURNSU5cIjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhID09IFwiVVNFUlwiKSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlID0gXCJVU0VSXCJcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHR5cGUgPSBcIkdVRVNUXCJcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XHJcbiAgICAgICAgICAgIG1haW4uaW5uZXJIVE1MID0gcHJvZmlsZTtcclxuICAgICAgICAgICAgY3JlYXRlUHJvZmlsZSh0eXBlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaWFvIGRhIHNob3dcIilcclxuICAgICAgICB9KVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvZmlsZSh0eXBlOiBzdHJpbmcpIHtcclxuXHJcbiAgICBpZiAodHlwZSA9PSBcIkFETUlOXCIpIHtcclxuICAgICAgICBzaG93QWRtaW5Qcm9maWxlKCk7XHJcblxyXG4gICAgfSBlbHNlIGlmICh0eXBlID09IFwiVVNFUlwiKSB7XHJcbiAgICAgICAgc2hvd1VzZXJQcm9maWxlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dBZG1pblByb2ZpbGUoKSB7XHJcblxyXG4gICAgZmV0Y2goXCIvYWRtaW5JbmZvXCIpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgYWRtaW5JbmZvID0gZGF0YTtcclxuICAgICAgICAgICAgbGV0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlcHJvZmlsZVwiKTtcclxuICAgICAgICAgICAgaDEuaW5uZXJIVE1MID0gXCI8Yj5CRU5UT1JOQVRPIEFNTUlOSVNUUkFUT1JFIFwiICsgYWRtaW5JbmZvLnVzZXJuYW1lICsgXCI8L2I+XCI7XHJcbiAgICAgICAgICAgIHRpdGxlLmFwcGVuZChoMSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keXByb2ZpbGVcIik7XHJcbiAgICAgICAgICAgIGxldCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICAgICAgaDIuaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgICAgIFwiIDxicj48YnI+PGJyPiA8Yj48L2I+XCIgKyBhZG1pbkluZm8udXNlcm5hbWVcclxuICAgICAgICAgICAgICAgICsgXCIgPGJyPjxicj4gPGI+PC9iPlwiICsgYWRtaW5JbmZvLmVtYWlsXHJcbiAgICAgICAgICAgICAgICArIFwiIDxicj48YnI+IDxiPjwvYj5cIiArIGFkbWluSW5mby5uYW1lXHJcbiAgICAgICAgICAgICAgICArIFwiIDxicj48YnI+IDxiPjwvYj5cIiArIGFkbWluSW5mby5zdXJuYW1lXHJcbiAgICAgICAgICAgIGJvZHkuYXBwZW5kKGgyKVxyXG5cclxuICAgICAgICAgICAgbGV0IGJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbnMtcHJvZmlsZVwiKTtcclxuICAgICAgICAgICAgbGV0IGJ0bjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBidG4xLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnRuIGJ0bi1wcmltYXJ5IG15LTFcIik7XHJcbiAgICAgICAgICAgIGJ0bjEub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBvYmogPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3VzZXJuYW1lJzogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcm5hbWVcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2VtYWlsJzogXCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCByZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZldGNoKFwiL2FkbWluL2luZm9cIiwgcmVxdWVzdClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcm5hbWVcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93UHJvZmlsZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnRuMS5pbm5lckhUTUwgPSBcIkNhbWJpYSBVc2VybmFtZVwiXHJcbiAgICAgICAgICAgIGJ1dHRvbnMuYXBwZW5kKGJ0bjEpXHJcblxyXG4gICAgICAgICAgICBsZXQgYnV0dG9uRW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbnMtcHJvZmlsZVwiKTtcclxuICAgICAgICAgICAgbGV0IGJ0bjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBidG4yLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnRuIGJ0bi1wcmltYXJ5ICAgbXktNFwiKTtcclxuICAgICAgICAgICAgYnRuMi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAndXNlcm5hbWUnOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdlbWFpbCc6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvYmopXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZmV0Y2goXCIvYWRtaW4vaW5mb1wiLCByZXF1ZXN0KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dQcm9maWxlKClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidG4yLmlubmVySFRNTCA9IFwiQ2FtYmlhIEVtYWlsXCJcclxuICAgICAgICAgICAgYnV0dG9ucy5hcHBlbmQoYnRuMik7XHJcblxyXG4gICAgICAgICAgICBsZXQgY3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNwXCIpO1xyXG4gICAgICAgICAgICBsZXQgYnRuMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGJ0bjMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG4gYnRuLXByaW1hcnlcIilcclxuICAgICAgICAgICAgYnRuMy5pbm5lckhUTUwgPSBcIkNhbWJpYSBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGJ0bjMub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBvYmogPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ29sZFBhc3N3b3JkJzogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2xkUGFzc3dvcmRcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgJ25ld1Bhc3N3b3JkJzogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UGFzc3dvcmRcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9iailcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmZXRjaChcIi9hZG1pbi9wc3dcIiwgcmVxdWVzdClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2xkUGFzc3dvcmRcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQYXNzd29yZFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3AuYXBwZW5kKGJ0bjMpO1xyXG5cclxuICAgICAgICB9KVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1VzZXJQcm9maWxlKCkge1xyXG4gICAgZmV0Y2goXCIvdXNlckluZm9cIilcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB1c2VySW5mbyA9IGRhdGE7XHJcbiAgICAgICAgICAgIGxldCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgICAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZXByb2ZpbGVcIik7XHJcbiAgICAgICAgICAgIGgxLmlubmVySFRNTCA9IFwiPGI+QkVOVE9STkFUTyBVVEVOVEUgXCIgKyB1c2VySW5mby51c2VybmFtZSArIFwiIFwiICsgdXNlckluZm8ucmF0aW5nICsgXCI8L2I+IDxpIGNsYXNzPSdmYS1yZWd1bGFyIGZhLXN0YXInPjwvaT5cIjtcclxuICAgICAgICAgICAgdGl0bGUuYXBwZW5kKGgxKTtcclxuICAgICAgICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHlwcm9maWxlXCIpO1xyXG4gICAgICAgICAgICBsZXQgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICAgICAgICAgIGgyLmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgICAgICBcIiA8YnI+PGJyPjxicj4gPGI+PC9iPlwiICsgdXNlckluZm8udXNlcm5hbWVcclxuICAgICAgICAgICAgICAgICsgXCIgPGJyPjxicj4gPGI+PC9iPlwiICsgdXNlckluZm8uZW1haWxcclxuICAgICAgICAgICAgICAgICsgXCIgPGJyPjxicj48Yj48L2I+XCIgKyB1c2VySW5mby5uYW1lXHJcbiAgICAgICAgICAgICAgICArIFwiIDxicj48YnI+IDxiPjwvYj5cIiArIHVzZXJJbmZvLnN1cm5hbWVcclxuICAgICAgICAgICAgYm9keS5hcHBlbmQoaDIpXHJcblxyXG4gICAgICAgICAgICBsZXQgYnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9ucy1wcm9maWxlXCIpO1xyXG4gICAgICAgICAgICBsZXQgYnRuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGJ0bjEuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG4gYnRuLXByaW1hcnkgbXktMVwiKTtcclxuICAgICAgICAgICAgYnRuMS5vbmNsaWNrID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBvYmogPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3VzZXJuYW1lJzogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcm5hbWVcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2VtYWlsJzogXCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCByZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZldGNoKFwiL3VzZXIvaW5mb1wiLCByZXF1ZXN0KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VybmFtZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dQcm9maWxlKClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBidG4xLmlubmVySFRNTCA9IFwiQ2FtYmlhIFVzZXJuYW1lXCJcclxuICAgICAgICAgICAgYnV0dG9ucy5hcHBlbmQoYnRuMSlcclxuXHJcbiAgICAgICAgICAgIGxldCBidXR0b25FbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9ucy1wcm9maWxlXCIpO1xyXG4gICAgICAgICAgICBsZXQgYnRuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGJ0bjIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG4gYnRuLXByaW1hcnkgICBteS00XCIpO1xyXG4gICAgICAgICAgICBidG4yLm9uY2xpY2sgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAndXNlcm5hbWUnOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdlbWFpbCc6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvYmopXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZmV0Y2goXCIvdXNlci9pbmZvXCIsIHJlcXVlc3QpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1Byb2ZpbGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ0bjIuaW5uZXJIVE1MID0gXCJDYW1iaWEgRW1haWxcIlxyXG4gICAgICAgICAgICBidXR0b25zLmFwcGVuZChidG4yKTtcclxuXHJcbiAgICAgICAgICAgIGNwLmFwcGVuZChidG4zKTtcclxuICAgICAgICAgICAgbGV0IGdhbWVzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZXNMaXN0XCIpO1xyXG4gICAgICAgICAgICBsZXQgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICAgICAgICAgIGgzLmlubmVySFRNTCA9IFwiPGI+SSB0dW9pIGdpb2NoaTo8L2I+XCI7XHJcbiAgICAgICAgICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgICAgICAgICAgdWwuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaXN0LWdyb3VwXCIpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBnYW1lIG9mIHVzZXJJbmZvLnZpZGVvZ2FtZXMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGlzdC1ncm91cC1pdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgbGkuaW5uZXJIVE1MID0gZ2FtZS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgdWwuYXBwZW5kKGxpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBnYW1lc0xpc3QuYXBwZW5kKGgzLCB1bCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICBsZXQgY3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNwXCIpO1xyXG4gICAgbGV0IGJ0bjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYnRuMy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ0biBidG4tcHJpbWFyeVwiKVxyXG4gICAgYnRuMy5pbm5lckhUTUwgPSBcIkNhbWJpYSBQYXNzd29yZFwiXHJcbiAgICBidG4zLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IG9iaiA9IHtcclxuICAgICAgICAgICAgJ29sZFBhc3N3b3JkJzogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2xkUGFzc3dvcmRcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcbiAgICAgICAgICAgICduZXdQYXNzd29yZCc6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Bhc3N3b3JkXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZmV0Y2goXCIvdXNlci9wc3dcIiwgcmVxdWVzdClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9sZFBhc3N3b3JkXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Bhc3N3b3JkXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hvd1Byb2ZpbGU7IiwiaW1wb3J0IGNyZWFWaWRlb2dpb2NvIGZyb20gXCIuL2NyZWFWaWRlb2dpb2NvLmh0bWxcIlxyXG5cclxubGV0IHJhZGlvOiBzdHJpbmc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVmlkZW9HYW1lUGFnZSgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBjcmVhVmlkZW9naW9jbztcclxuICAgIGdlbmVyYXRlR2VucmVMaXN0KCk7XHJcbiAgICBnZW5lcmF0ZUNvbnNvbGVMaXN0KCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0dlbnJlQnRuXCIpLm9uY2xpY2sgPSBjcmVhdGVHZW5yZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3Q29uc29sZUJ0blwiKS5vbmNsaWNrID0gY3JlYXRlQ29uc29sZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3VmlkZW9HYW1lQnRuXCIpLm9uY2xpY2sgPSBjcmVhdGVWaWRlb0dhbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlR2VucmVMaXN0KCkge1xyXG4gICAgbGV0IGdlbnJlTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2VucmVMaXN0XCIpO1xyXG4gICAgZ2VucmVMaXN0LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBmZXRjaChcIi9nZW5yZVwiKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJvbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYlwiKTtcclxuICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIik7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImdlbnJlXCIraSk7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm0tY2hlY2staW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBkYXRhW2ldLmdlbnJlKTtcclxuICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybS1jaGVjay1sYWJlbFwiKTtcclxuICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImdlbnJlXCIraSk7XHJcbiAgICAgICAgICAgICAgICBib2xkLmlubmVySFRNTD1cIlwiK2RhdGFbaV0uZ2VucmU7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5hcHBlbmQoYm9sZCk7XHJcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kKGlucHV0LCBsYWJlbCk7XHJcbiAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgbGV0IHNuaXBwZXQgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0IGdlbnJlc2NoZWNrXCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJnZW5yZSR7aX1cIiB2YWx1ZT1cIiR7ZGF0YVtpXS5nZW5yZX1cIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJnZW5yZSR7aX1cIj48Yj4ke2RhdGFbaV0uZ2VucmV9PC9iPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgICAgICAgIGdlbnJlTGlzdC5pbm5lckhUTUwgKz0gc25pcHBldDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQ29uc29sZUxpc3QoKSB7XHJcbiAgICBsZXQgY29uc29sZUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnNvbGVMaXN0XCIpO1xyXG4gICAgY29uc29sZUxpc3QuaW5uZXJIVE1MID0gXCI8YnI+PGJyPlwiO1xyXG4gICAgZmV0Y2goXCIvY29uc29sZVwiKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJvbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29uc29sZVwiICsgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImNvbnNvbGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb3JtLWNoZWNrLWlucHV0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBkYXRhW2ldLmNvbnNvbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0Lm9uY2xpY2sgPSAoKT0+eyBzZXRSYWRpbyhkYXRhW2ldLmNvbnNvbGUpfTtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm0tY2hlY2stbGFiZWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiY29uc29sZVwiICsgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9sZC5pbm5lckhUTUwgPSBcIlwiICsgZGF0YVtpXS5jb25zb2xlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLmFwcGVuZChib2xkKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXYuYXBwZW5kKGlucHV0LCBsYWJlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZUxpc3QuYXBwZW5kKGRpdik7XHJcbiAgICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmlyc3RTbmlwcGV0PWBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cInJhZGlvXCIgaWQ9XCJjb25zb2xlJHtpfVwiIG5hbWU9XCJjb25zb2xlXCIgdmFsdWU9XCIke2RhdGFbaV0uY29uc29sZX1cIiBvbmNsaWNrPVwiKCk9Pnsgc2V0UmFkaW8oJHtkYXRhW2ldLmNvbnNvbGV9KX1cIiBjaGVja2VkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiY29uc29sZSR7aX1cIj48Yj4ke2RhdGFbaV0uY29uc29sZX08L2I+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZUxpc3QuaW5uZXJIVE1MICs9IGZpcnN0U25pcHBldDtcclxuICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBib2xkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnNvbGVcIiArIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJjb25zb2xlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybS1jaGVjay1pbnB1dFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgZGF0YVtpXS5jb25zb2xlKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5vbmNsaWNrID0gKCk9Pnsgc2V0UmFkaW8oZGF0YVtpXS5jb25zb2xlKX07XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb3JtLWNoZWNrLWxhYmVsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImNvbnNvbGVcIiArIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvbGQuaW5uZXJIVE1MID0gXCJcIiArIGRhdGFbaV0uY29uc29sZTtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5hcHBlbmQoYm9sZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2LmFwcGVuZChpbnB1dCwgbGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGVMaXN0LmFwcGVuZChkaXYpO1xyXG4gICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc25pcHBldCA9IGBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cInJhZGlvXCIgaWQ9XCJjb25zb2xlJHtpfVwiIG5hbWU9XCJjb25zb2xlXCIgdmFsdWU9XCIke2RhdGFbaV0uY29uc29sZX1cIiBvbmNsaWNrPVwiKCk9Pnsgc2V0UmFkaW8oJHtkYXRhW2ldLmNvbnNvbGV9KX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImNvbnNvbGUke2l9XCI+PGI+JHtkYXRhW2ldLmNvbnNvbGV9PC9iPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGVMaXN0LmlubmVySFRNTCArPSBzbmlwcGV0O1xyXG4gICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVHZW5yZSgpIHtcclxuICAgIGxldCBuZXdHZW5yZSA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0dlbnJlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgbGV0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3R2VucmUpXHJcbiAgICB9XHJcbiAgICBmZXRjaChcIi9nZW5yZVwiLCByZXF1ZXN0KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdHZW5yZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZUdlbnJlTGlzdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbnNvbGUoKSB7XHJcbiAgICBsZXQgbmV3Q29uc29sZSA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0NvbnNvbGVcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICBsZXQgcmVxdWVzdCA9IHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdDb25zb2xlKVxyXG4gICAgfVxyXG4gICAgZmV0Y2goXCIvY29uc29sZVwiLCByZXF1ZXN0KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdDb25zb2xlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGdlbmVyYXRlQ29uc29sZUxpc3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVZpZGVvR2FtZSgpIHtcclxuXHJcbiAgICBsZXQgZ2VucmVzID0gKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJnZW5yZXNjaGVja1wiKSBhcyBIVE1MQ29sbGVjdGlvbk9mPEhUTUxJbnB1dEVsZW1lbnQ+KTtcclxuICAgIGxldCBjaGVja2VkR2VucmVzICA9IFtdO1xyXG4gICAgZm9yIChsZXQgZ2VucmUgb2YgZ2VucmVzKSB7XHJcbiAgICAgICAgaWYgKGdlbnJlLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgY2hlY2tlZEdlbnJlcy5wdXNoKGdlbnJlLnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG5ld1ZpZGVvZ2FtZSA9IHtcclxuICAgICAgICBuYW1lOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJWR25hbWVcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcbiAgICAgICAgZ2VucmU6IGNoZWNrZWRHZW5yZXMsXHJcbiAgICAgICAgeWVhcjogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiVkd5ZWFyXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLFxyXG4gICAgICAgIGNvbnNvbGU6IHJhZGlvLFxyXG4gICAgICAgIGNvdmVyOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJWR2NvdmVyXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCByZXF1ZXN0ID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld1ZpZGVvZ2FtZSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgZmV0Y2goXCIvdmlkZW9nYW1lc1wiLCByZXF1ZXN0KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKT0+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgaWYoZGF0YSl7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwidmlkZW9naW9jbyBpbnNlcml0b1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFJhZGlvKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHJhZGlvID0gdmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVZpZGVvR2FtZVBhZ2VcclxuXHJcblxyXG4iLCJpbXBvcnQgeyBkYXRhIH0gZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQgZ2VucmUgZnJvbSBcIi4uL2ludGVyZmFjZXMvZ2VucmVcIjtcclxuaW1wb3J0IHZpZGVvZ2FtZSBmcm9tIFwiLi4vaW50ZXJmYWNlcy92aWRlb2dhbWVcIjtcclxuaW1wb3J0IGNyZWF0ZVZpZGVvR2FtZVBhZ2UgZnJvbSBcIi4vY3JlYVZpZGVvZ2lvY2hpXCI7XHJcbmltcG9ydCBjcmVhdGVHYW1lVmlzdWFsaXphdGlvbiBmcm9tIFwiLi92aXN1YWxpenphVmlkZW9naW9jb1wiXHJcblxyXG5sZXQgZ2FtZUxpc3Q6IHZpZGVvZ2FtZVtdID0gW107XHJcbmxldCBnYW1lRmlsdGVyZWRMaXN0OiB2aWRlb2dhbWVbXSA9IFtdXHJcbmxldCBnZW5yZXM6IHN0cmluZ1tdID0gW11cclxubGV0IHllYXJzOiBudW1iZXJbXSA9IFtdXHJcbmxldCBnYW1lVmlldzogbnVtYmVyID0gNjtcclxubGV0IHR5cGU6IHN0cmluZztcclxubGV0IGNvbnNvbGxlczogc3RyaW5nW107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR2FtZVBhZ2UoKSB7XHJcbiAgICBmZXRjaChcIi93aG9Jc0xvZ2dlZFwiKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhID09IFwiQURNSU5cIikge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRWaWRlb2dhbWVcIikucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRWaWRlb2dhbWVcIikub25jbGljayA9IGNyZWF0ZVZpZGVvR2FtZVBhZ2U7XHJcbiAgICAgICAgICAgICAgICB0eXBlID0gXCJBRE1JTlwiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEgPT0gXCJVU0VSXCIpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVmlkZW9nYW1lXCIpLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgICAgICB0eXBlID0gXCJVU0VSXCJcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVmlkZW9nYW1lXCIpLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgICAgICB0eXBlID0gXCJHVUVTVFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmV0Y2goXCIvdmlkZW9nYW1lc1wiKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiAocmVzcG9uc2UuanNvbigpKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUxpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBnYW1lIG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZUxpc3QucHVzaChnYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlR2FtZVBhZ2luYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBzaG93R2FtZXMoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzaWduR2FtZUZpbHRlcnMoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRBbGxHYW1lcygpIHtcclxuXHJcbiAgICBmZXRjaChcIi92aWRlb2dhbWVzXCIpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiAocmVzcG9uc2UuanNvbigpKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBnYW1lTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBnYW1lIG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGdhbWVMaXN0LnB1c2goZ2FtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNob3dHYW1lcyhpOiBudW1iZXIpIHtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJWaWRlb2dhbWVDb250ZW50XCIpO1xyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbGV0IHN0YXJ0ID0gKGkgLSAxKSAqIGdhbWVWaWV3O1xyXG4gICAgbGV0IHN0b3AgPSAoaSAqIGdhbWVWaWV3KSAtIDE7XHJcbiAgICBmb3IgKHN0YXJ0OyBzdGFydCA8PSBzdG9wOyBzdGFydCsrKSB7XHJcbiAgICAgICAgaWYgKHN0YXJ0ID49IGdhbWVMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGItNSBjb2wtNCB0ZXh0LWNlbnRlclwiKTtcclxuICAgICAgICBjb2wuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMilcIik7XHJcbiAgICAgICAgY29sLm9ubW91c2VvdmVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb2wuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNilcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbC5vbm1vdXNlb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb2wuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMilcIik7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIGxldCBnYW1lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICAgICAgZ2FtZVRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYmctbGlnaHQgYm9yZGVyLXRvcCBib3JkZXItcm91bmRlZCBib3JkZXItMiBib3JkZXItcHJpbWFyeSBteS00XCIpXHJcbiAgICAgICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBpbWFnZS5zcmMgPSBnYW1lTGlzdFtzdGFydF0uY292ZXIubGluaztcclxuICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2hlaWdodDoyMDBweDt3aWR0aDphdXRvOycpO1xyXG5cclxuICAgICAgICBsZXQgZ2FtZSA9IGdhbWVMaXN0W3N0YXJ0XVxyXG4gICAgICAgIGltYWdlLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNyZWF0ZUdhbWVWaXN1YWxpemF0aW9uKGdhbWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdhbWVUaXRsZS5pbm5lckhUTUwgPSBcIjxiPlwiICsgZ2FtZUxpc3Rbc3RhcnRdLm5hbWUgKyBcIjwvYj5cIjtcclxuXHJcbiAgICAgICAgY29sLmFwcGVuZChnYW1lVGl0bGUsIGltYWdlKTtcclxuICAgICAgICBsZXQgZGl2QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICAgICAgbGV0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIGxldCBpbWdCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5cclxuICAgICAgICBsZXQgaWQgPSBnYW1lTGlzdFtzdGFydF0uaWRcclxuICAgICAgICBpZiAodHlwZSA9PSBcIlVTRVJcIikge1xyXG4gICAgICAgICAgICBpbWdCdXR0b24uc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9pbWcvYnV0dG9uL2FkZEJ0bi5wbmdcIik7XHJcbiAgICAgICAgICAgIGltZ0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJvcmRlcjpub25lO2ltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO1wiKTtcclxuICAgICAgICAgICAgaW1nQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncC0wIG15LTMgbXgtYXV0bycpXHJcbiAgICAgICAgICAgIGltZ0J1dHRvbi5oZWlnaHQgPSAzNTtcclxuICAgICAgICAgICAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicC0wIG15LTNcIilcclxuICAgICAgICAgICAgZGl2QnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncC0wIG14LWF1dG8nKVxyXG5cclxuICAgICAgICAgICAgYWRkQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgZmV0Y2goXCIvdXNlci9nYW1lL1wiICsgaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiAocmVzcG9uc2UuanNvbigpKSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJWaWRlb2dpb2NvIGFnZ2l1bnRvIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiUG9zc2llZGkgZ2nDoCBxdWVzdG8gZ2l1b2NvIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFkZEJ1dHRvbi5hcHBlbmRDaGlsZChpbWdCdXR0b24pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGl2QnV0dG9uLmFwcGVuZChhZGRCdXR0b24pO1xyXG4gICAgICAgICAgICBjb2wuYXBwZW5kKGRpdkJ1dHRvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKGNvbCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVHYW1lUGFnaW5hdGlvbigpIHtcclxuICAgIGxldCBzaXplOiBudW1iZXIgPSBnYW1lTGlzdC5sZW5ndGhcclxuICAgIGxldCB0YWJzOiBudW1iZXIgPSBNYXRoLmNlaWwoc2l6ZSAvIGdhbWVWaWV3KTtcclxuICAgIGxldCBwYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZXNWXCIpO1xyXG4gICAgcGFnZXMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRhYnM7IGkrKykge1xyXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBpZiAoaSA9PSAxKSB7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtIGFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIsIFwicGFnZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1saW5rXCIpO1xyXG4gICAgICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYWxsTGkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VzVlwiKS5jaGlsZHJlbjtcclxuICAgICAgICAgICAgZm9yIChsZXQgb25lTGkgb2YgYWxsTGkpIHtcclxuICAgICAgICAgICAgICAgIG9uZUxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgb25lTGkucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtIGFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIsIFwicGFnZVwiKTtcclxuICAgICAgICAgICAgc2hvd0dhbWVzKGkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgYnRuLmlubmVySFRNTCA9IFwiXCIgKyAoaSk7XHJcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYnRuKTtcclxuICAgICAgICBwYWdlcy5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2V0QWxsQ29uc29sbGVzKCkge1xyXG4gICAgY29uc29sbGVzID0gW11cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoIShjb25zb2xsZXMuaW5jbHVkZXMoZ2FtZUxpc3RbaV0uY29uc29sZS5jb25zb2xlKSkpIHtcclxuICAgICAgICAgICAgY29uc29sbGVzLnB1c2goZ2FtZUxpc3RbaV0uY29uc29sZS5jb25zb2xlKVxyXG4gICAgICAgICAgICBsZXQgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVDb25zb2xsZXNcIik7XHJcbiAgICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICAgICAgbGkuaWQgPSBnYW1lTGlzdFtpXS5jb25zb2xlLmNvbnNvbGU7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkcm9wZG93bi1pdGVtXCIpO1xyXG4gICAgICAgICAgICBidG4uaW5uZXJIVE1MID0gZ2FtZUxpc3RbaV0uY29uc29sZS5jb25zb2xlO1xyXG4gICAgICAgICAgICBidG4ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaEJ5R2FtZUNvbnNvbGxlKGxpLmlkKTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdWwuYXBwZW5kKGxpKTtcclxuICAgICAgICAgICAgbGkuYXBwZW5kKGJ0bik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNldEFsbEdlbnJlcygpIHtcclxuXHJcbiAgICBnZW5yZXMgPSBbXVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ2FtZUxpc3RbaV0uZ2VucmUubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKCEoZ2VucmVzLmluY2x1ZGVzKGdhbWVMaXN0W2ldLmdlbnJlW2pdLmdlbnJlKSkpIHtcclxuICAgICAgICAgICAgICAgIGdlbnJlcy5wdXNoKGdhbWVMaXN0W2ldLmdlbnJlW2pdLmdlbnJlKVxyXG4gICAgICAgICAgICAgICAgbGV0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lR2VucmVzXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgICAgICAgICAgbGkuaWQgPSBnYW1lTGlzdFtpXS5nZW5yZVtqXS5nZW5yZTtcclxuICAgICAgICAgICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZHJvcGRvd24taXRlbVwiKTtcclxuICAgICAgICAgICAgICAgIGJ0bi5pbm5lckhUTUwgPSBnYW1lTGlzdFtpXS5nZW5yZVtqXS5nZW5yZTtcclxuICAgICAgICAgICAgICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaEJ5R2FtZUdlbnJlKGxpLmlkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHVsLmFwcGVuZChsaSk7XHJcbiAgICAgICAgICAgICAgICBsaS5hcHBlbmQoYnRuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNldEFsbFllYXJzKCkge1xyXG4gICAgeWVhcnMgPSBbXVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICghKHllYXJzLmluY2x1ZGVzKGdhbWVMaXN0W2ldLnllYXIpKSkge1xyXG4gICAgICAgICAgICB5ZWFycy5wdXNoKGdhbWVMaXN0W2ldLnllYXIpXHJcbiAgICAgICAgICAgIGxldCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZVllYXJzXCIpO1xyXG4gICAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgICAgIGxpLmlkID0gXCJcIiArIGdhbWVMaXN0W2ldLnllYXI7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkcm9wZG93bi1pdGVtXCIpO1xyXG4gICAgICAgICAgICBidG4uaW5uZXJIVE1MID0gXCJcIiArIGdhbWVMaXN0W2ldLnllYXI7XHJcbiAgICAgICAgICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoQnlHYW1lWWVhcihOdW1iZXIobGkuaWQpKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1bC5hcHBlbmQobGkpO1xyXG4gICAgICAgICAgICBsaS5hcHBlbmQoYnRuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZWFyY2hCeUFsbEdhbWVzKCkgeyAgICAgICAgICAgICAvKkxhIGZ1bnppb25hIGRlbCBib3R0b25lIGNoZSBjZXJjYSB0dXR0aSBnbGkgYW5udW5jaSBzZW56YSBmaWx0cmkqL1xyXG4gICAgZ2V0QWxsR2FtZXMoKTtcclxuICAgIGNyZWF0ZUdhbWVQYWdpbmF0aW9uKCk7XHJcbiAgICBzaG93R2FtZXMoMSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZWFyY2hCeUdhbWVUaXRsZSh0aXRsZTogc3RyaW5nKSB7XHJcbiAgICBnYW1lRmlsdGVyZWRMaXN0ID0gW11cclxuICAgIGZvciAobGV0IGVsZW1lbnQgb2YgZ2FtZUxpc3QpIHtcclxuICAgICAgICBsZXQgZ2FtZU5hbWUgPSBlbGVtZW50Lm5hbWVcclxuICAgICAgICBpZiAoKGdhbWVOYW1lLnRvVXBwZXJDYXNlKCkuaW5jbHVkZXModGl0bGUudG9VcHBlckNhc2UoKSkpKSB7XHJcbiAgICAgICAgICAgIGdhbWVGaWx0ZXJlZExpc3QucHVzaChlbGVtZW50KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdhbWVMaXN0ID0gW107XHJcbiAgICBnYW1lTGlzdCA9IGdhbWVGaWx0ZXJlZExpc3RcclxuICAgIGNyZWF0ZUdhbWVQYWdpbmF0aW9uKCk7XHJcbiAgICBzaG93R2FtZXMoMSk7XHJcbiAgICBnZXRBbGxHYW1lcygpO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNlYXJjaEJ5R2FtZUNvbnNvbGxlKGNvbnNvbGU6IHN0cmluZykge1xyXG4gICAgZ2FtZUZpbHRlcmVkTGlzdCA9IFtdXHJcbiAgICBmb3IgKGxldCBlbGVtZW50IG9mIGdhbWVMaXN0KSB7XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50LmNvbnNvbGUuY29uc29sZSA9PSBjb25zb2xlKSB7XHJcbiAgICAgICAgICAgIGdhbWVGaWx0ZXJlZExpc3QucHVzaChlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIH1cclxuICAgIGdhbWVMaXN0ID0gW107XHJcbiAgICBnYW1lTGlzdCA9IGdhbWVGaWx0ZXJlZExpc3RcclxuICAgIGNyZWF0ZUdhbWVQYWdpbmF0aW9uKCk7XHJcbiAgICBzaG93R2FtZXMoMSk7XHJcbiAgICBnZXRBbGxHYW1lcygpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2VhcmNoQnlHYW1lR2VucmUoZ2VucmU6IHN0cmluZykge1xyXG4gICAgZ2FtZUZpbHRlcmVkTGlzdCA9IFtdXHJcbiAgICBmb3IgKGxldCBlbGVtZW50IG9mIGdhbWVMaXN0KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmdlbnJlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmdlbnJlW2ldLmdlbnJlID09IGdlbnJlKSB7XHJcbiAgICAgICAgICAgICAgICBnYW1lRmlsdGVyZWRMaXN0LnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBpID0gZWxlbWVudC5nZW5yZS5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnYW1lTGlzdCA9IFtdO1xyXG4gICAgZ2FtZUxpc3QgPSBnYW1lRmlsdGVyZWRMaXN0XHJcbiAgICBjcmVhdGVHYW1lUGFnaW5hdGlvbigpO1xyXG4gICAgc2hvd0dhbWVzKDEpO1xyXG4gICAgZ2V0QWxsR2FtZXMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VhcmNoQnlHYW1lWWVhcih5ZWFyOiBudW1iZXIpIHtcclxuICAgIGdhbWVGaWx0ZXJlZExpc3QgPSBbXVxyXG4gICAgZm9yIChsZXQgZWxlbWVudCBvZiBnYW1lTGlzdCkge1xyXG4gICAgICAgIGlmIChlbGVtZW50LnllYXIgPT0geWVhcikge1xyXG4gICAgICAgICAgICBnYW1lRmlsdGVyZWRMaXN0LnB1c2goZWxlbWVudClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnYW1lTGlzdCA9IFtdO1xyXG4gICAgZ2FtZUxpc3QgPSBnYW1lRmlsdGVyZWRMaXN0XHJcbiAgICBjcmVhdGVHYW1lUGFnaW5hdGlvbigpO1xyXG4gICAgc2hvd0dhbWVzKDEpO1xyXG4gICAgZ2V0QWxsR2FtZXMoKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gYXNzaWduR2FtZUZpbHRlcnMoKSB7ICAgICAgICAgICAgIC8qQXNzZWduYSBsZSBmdW56aW9uaSBhaSBwdWxzYW50aSBuZWxsZSBkcm9wRG93bkxpc3QgZGEgcHJvdmFyZSovXHJcbiAgICBsZXQgYWxsR2FtZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdEFsbEdhbWVzXCIpXHJcbiAgICBhbGxHYW1lcy5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNlYXJjaEJ5QWxsR2FtZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBbGxDb25zb2xsZXMoKTtcclxuXHJcbiAgICBzZXRBbGxHZW5yZXMoKTtcclxuXHJcbiAgICBzZXRBbGxZZWFycygpO1xyXG5cclxuICAgIGxldCBzZWFyY2hUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoVGl0bGVHYW1lXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBzZWFyY2hUaXRsZS5vbmtleWRvd24gPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIHNlYXJjaEJ5R2FtZVRpdGxlKHNlYXJjaFRpdGxlLnZhbHVlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHYW1lUGFnZTsiLCJpbXBvcnQgdmlkZW9nYW1lIGZyb20gXCIuLi9pbnRlcmZhY2VzL3ZpZGVvZ2FtZVwiO1xyXG5pbXBvcnQgdmlzdWFsaXp6YVZpZGVvZ2lvY28gZnJvbSBcIi4vdmlzdWFsaXp6YVZpZGVvZ2lvY28uaHRtbFwiO1xyXG5pbXBvcnQgY3JlYXRlR2FtZVBhZ2UgZnJvbSBcIi4vdmlkZW9naW9jaGlcIjtcclxuaW1wb3J0IHZpZGVvZ2lvY2hpIGZyb20gXCIuL3ZpZGVvZ2lvY2hpLmh0bWxcIlxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHYW1lVmlzdWFsaXphdGlvbihnYW1lOnZpZGVvZ2FtZSl7XHJcbiAgICBjb25zb2xlLmxvZyhnYW1lKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUw9dmlzdWFsaXp6YVZpZGVvZ2lvY287XHJcbiAgICBzZXRiYWNrKCk7XHJcbiAgICBzZXRQYWdlKGdhbWUpXHJcbiAgICBcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNldGJhY2soKXtcclxuICAgIGxldCBiYWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrLWdhbWVzXCIpXHJcbiAgICBiYWNrLm9uY2xpY2s9KCk9PntcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MPXZpZGVvZ2lvY2hpXHJcbiAgICAgICAgY3JlYXRlR2FtZVBhZ2UoKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0UGFnZShnYW1lOnZpZGVvZ2FtZSl7XHJcbiAgICBsZXQgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZVRpdGxlXCIpO1xyXG4gICAgbGV0IHRpdGxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIHRpdGxlLmlubmVySFRNTD1cIjxiPlwiK2dhbWUubmFtZStcIjwvYj5cIjtcclxuICAgIGhlYWQuYXBwZW5kKHRpdGxlKTtcclxuICAgIGhlYWQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInRleHQtY2VudGVyIG1iLTVcIilcclxuICAgIGxldCB2aWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lSW1hZ2VcIik7XHJcbiAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGltZy5zcmM9Z2FtZS5jb3Zlci5saW5rO1xyXG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnaGVpZ2h0OjQwMHB4O3dpZHRoOmF1dG87JylcclxuICAgIHZpZXcuYXBwZW5kKGltZyk7XHJcbiAgICBsZXQgaW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZUluZm9cIik7XHJcbiAgICBsZXQgZ2VuZXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpXHJcbiAgICBnZW5lcmUuaW5uZXJIVE1MPSBcIjxiPkdFTkVSRS9JOiA8L2I+XCI7XHJcbiAgICBmb3IobGV0IGk9MDsgaTxnYW1lLmdlbnJlLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBnZW5lcmUuaW5uZXJIVE1MICs9IGdhbWUuZ2VucmVbaV0uZ2VucmUgK1wiIFwiO1xyXG4gICAgfSBcclxuICAgIGxldCBjb25zb2xlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGNvbnNvbGUuaW5uZXJIVE1MPSBcIjxiPkNPTlNPTEU6IDwvYj5cIitnYW1lLmNvbnNvbGUuY29uc29sZTtcclxuICAgIGxldCB5ZWFyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIHllYXIuaW5uZXJIVE1MPVwiPGI+QU5OTzogPC9iPlwiK2dhbWUueWVhclxyXG4gICAgaW5mby5hcHBlbmQoZ2VuZXJlLGNvbnNvbGUseWVhcik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdhbWVWaXN1YWxpemF0aW9uIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3JlYXRlSG9tZSBmcm9tIFwiLi9ob21lL2hvbWVcIjtcclxuaW1wb3J0IGNyZWF0ZU5hdiBmcm9tIFwiLi9uYXZiYXIvbmF2YmFyXCI7XHJcbmltcG9ydCBjcmVhdGVGb3QgZnJvbSBcIi4vZm9vdGVyL2Zvb3RlclwiO1xyXG5pbXBvcnQgYWRkQ2xpY2tDaGF0IGZyb20gXCIuL2NoYXQvY2hhdFwiO1xyXG5pbXBvcnQgeyBzZWFyY2hOb3RpZmljYXRpb24gfSBmcm9tIFwiLi9jaGF0L2NoYXRcIjtcclxuXHJcbmNyZWF0ZU5hdigpO1xyXG5jcmVhdGVIb21lKCk7XHJcbmNyZWF0ZUZvdCgpO1xyXG5hZGRDbGlja0NoYXQoKTtcclxuc2VhcmNoTm90aWZpY2F0aW9uKCk7XHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
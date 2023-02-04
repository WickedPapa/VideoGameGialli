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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n<style>\r\n    .btn:hover {\r\n        outline-color: transparent ;\r\n        outline-style: solid;\r\n        box-shadow: 0 0 0 4px #5a01a7;\r\n        transition: 0.7s;\r\n    }\r\n\r\n    #searchTitle:hover {\r\n        outline-color: transparent ;\r\n        outline-style: solid;\r\n        box-shadow: 0 0 0 4px #5a01a7;\r\n        transition: 0.7s;\r\n    }\r\n\r\n    #searchTitle {\r\n        box-shadow: -3px 0 black, 0 3px black, 3px 0 black, 0 -3px black;\r\n        height:20px;\r\n        width:20%;\r\n        float: bottom;\r\n        align-self: right;\r\n    }\r\n</style>\r\n\r\n<div style=\"display: flex;\" class=\"my-5\">\r\n    <span style=\"margin-right: 40px\">\r\n        <img id=\"selectAll\" class=\"p-0 btn dropdown-toggle\" type=\"button\" style=\"border:none;float:left;image-rendering: pixelated;width: 300%;height:auto;\" src=\"./img/button/showallBtn.png\" alt=\"\">\r\n            </span> <!--funzione che prende tutti gli annunci e li schiaffa nel contenuto annunci-->\r\n                <span  class=\"mx-auto dropdown\">\r\n                    <img class=\"p-0 btn dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" style=\"border:none;float:left;image-rendering: pixelated;width: 300%;height:auto;\" src=\"./img/button/bygenreBtn.png\" alt=\"\">\r\n                    <ul id=\"genres\" class=\"dropdown-menu\">\r\n                    </ul>\r\n                </span>\r\n            <span class=\"mx-auto dropdown\">\r\n                <img class=\"p-0 btn dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" style=\"border:none;float:left;image-rendering: pixelated;width: 300%;height:auto;\" src=\"./img/button/byyearBtn.png\" alt=\"\">\r\n                <ul id=\"years\" class=\"dropdown-menu\">\r\n                </ul>\r\n            </span>\r\n    <div class=\"col-5 my-1 mx-auto\">\r\n        <div class=\"input-group\">\r\n            <input class=\"mx-5 form-control border-end-1 rounded\" type=\"search\" placeholder=\"cerca\" id=\"searchTitle\">\r\n            </span>\r\n        </div>\r\n    </div>\r\n\r\n      <span class=\"mx-auto\">\r\n        <img id=\"addInsertion2\" class=\"p-0 btn dropdown-toggle\" type=\"button\" style=\"border:none;float:left;image-rendering: pixelated;width: 300%;height:auto;\" src=\"./img/button/plusBtn.png\" hidden alt=\"\">\r\n      </span>      \r\n             \r\n\r\n</div>\r\n\r\n<div id=\"remains\">\r\n    <div  id=\"insertionContent\" class=\"row\">\r\n\r\n    </div>\r\n    <ul class=\"list-group\" >\r\n        \r\n    </ul>    \r\n</div>\r\n\r\n<div>\r\n    <ul id=\"pages\" class=\"pagination pagination-sm my-2\">\r\n        \r\n    </ul>\r\n</div>\r\n\r\n\r\n\r\n");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("    <div id=\"back\">\r\n        <img id=\"backgames\" style=\"image-rendering: pixelated;\" class=\"mt-4 buttonhover mb-4\" width=120 src=\"./img/button/backBtn.png\">\r\n    </div>\r\n   <!--  -->\r\n\r\n<div class=\"row\" style=\"background-color: rgba(0,0,0,0.7);\">\r\n    <div class=\"col-md-6\">\r\n        <div>\r\n            <div id=\"imageSlider\" class=\"carousel slide\" data-bs-ride=\"true\">\r\n                <div id=\"indicator\" class=\"carousel-indicators\">\r\n                </div>\r\n                <div id=\"inner\" class=\"carousel-inner\">\r\n                </div>\r\n                <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#imageSlider\" data-bs-slide=\"prev\">\r\n                    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n                    <span class=\"visually-hidden\">Precedente</span>\r\n                </button>\r\n                <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#imageSlider\" data-bs-slide=\"next\">\r\n                    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n                    <span class=\"visually-hidden\">Successiva</span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div id=\"givedGame\">\r\n                    <div class=\"card mb-3\" style=\"max-width: 540px;\">\r\n                        <div class=\"row g-0\">\r\n                            <div id=\"card-image\" class=\"col-md-4\">\r\n\r\n                            </div>\r\n                            <div class=\"col-md-8\">\r\n                                <div id=\"card-body\" class=\"card-body\">\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div id=\"insertion-description\" class=\"font-size:20px color:white col-md-12\">\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"my-5 text-center\">\r\n    <h3><span id=\"insertion-creator\"></span> vorrebbe uno di questi giochi in cambio:</h3>\r\n</div>\r\n\r\n<div class=\"accordion row\" id=\"accordionExample\">\r\n    <div class=\"accordion-item col-md-4\">\r\n        <h2 class=\"accordion-header\" id=\"headingOne\">\r\n            <button id=\"btn-item-1\" class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\"\r\n                data-bs-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n\r\n            </button>\r\n        </h2>\r\n        <div id=\"collapseOne\" class=\"accordion-collapse collapse\" aria-labelledby=\"headingOne\"\r\n            data-bs-parent=\"#accordionExample\">\r\n            <div class=\"accordion-body\">\r\n                <div id=\"img-item-1\" class=\"card mx-auto\" style=\"width: 18rem;\">\r\n                    \r\n                    <div id=\"body-item-1\" class=\"card-body text-center\">\r\n                        \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"accordion-item col-md-4\">\r\n        <h2 class=\"accordion-header\" id=\"headingTwo\">\r\n            <button id=\"btn-item-2\" class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\"\r\n                data-bs-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\r\n\r\n            </button>\r\n        </h2>\r\n        <div id=\"collapseTwo\" class=\"accordion-collapse collapse\" aria-labelledby=\"headingTwo\"\r\n            data-bs-parent=\"#accordionExample\">\r\n            <div class=\"accordion-body\">\r\n                <div id=\"img-item-2\" class=\"card mx-auto\" style=\"width: 18rem;\">\r\n                    \r\n                    <div id=\"body-item-2\" class=\"card-body text-center\">\r\n                        \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"accordion-item col-md-4\">\r\n        <h2 class=\"accordion-header\" id=\"headingThree\">\r\n            <button id=\"btn-item-3\" class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\"\r\n                data-bs-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\r\n\r\n            </button>\r\n        </h2>\r\n        <div id=\"collapseThree\" class=\"accordion-collapse collapse\" aria-labelledby=\"headingThree\"\r\n            data-bs-parent=\"#accordionExample\">\r\n            <div class=\"accordion-body\">\r\n                <div id=\"img-item-3\" class=\"card mx-auto\" style=\"width: 18rem;\">\r\n                    \r\n                    <div id=\"body-item-3\" class=\"card-body text-center\">\r\n                        \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<style>\r\n    .massimoboldi {\r\n        font-weight: bold;\r\n    }\r\n</style>\r\n<div class=\"my-5\" style=\"font-weight: bold;\">\r\n<div style=\"display: flex;\">\r\n\r\n        <span style=\"margin-right: 40px\">\r\n            <button class=\"btn btn-primary\" style=\"font-weight: bold;\" id=\"selectAll2\">Visualizza tutti</button>\r\n                </span> <!--funzione che prende tutti gli annunci e li schiaffa nel contenuto annunci-->\r\n                    <span style=\"margin-right: 40px\" class=\"dropdown\">\r\n                        <button class=\"btn btn-secondary dropdown-toggle\" style=\"font-weight: bold;\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                        Visualizza per Genere\r\n                        </button>\r\n                        <ul id=\"genres2\" class=\"dropdown-menu\">\r\n                            <li id=\"PLATFORM\"><button class=\"dropdown-item\" type=\"button\">PLATFORM</button></li>\r\n                        </ul>\r\n                    </span>\r\n                <span style=\"margin-right: 40px\" class=\"dropdown\">\r\n                    <button class=\"btn btn-secondary dropdown-toggle\" style=\"font-weight: bold;\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                    Visualizza per Anno\r\n                    </button>\r\n                    <ul id=\"years2\" class=\"dropdown-menu\">\r\n                    <li id=\"1985\"><button class=\"dropdown-item\" type=\"button\">1985</button></li>\r\n                    </ul>\r\n                </span>\r\n        <div style=\"vertical-align: middle;\" class=\"col-md-3 mx-auto\">\r\n            <div class=\"input-group\">\r\n                <input class=\"form-control border-end-1 border rounded-pill\" type=\"search\" placeholder=\"cerca\" style=\"margin-right:20px\" id=\"searchTitle2\">\r\n                <span class=\"input-group-append\">\r\n                <button id=\"searchButton2\" class=\"btn btn-outline-secondary bg-white border-bottom-1 border rounded-pill ms-n5\" style=\"font-weight: bold;\" type=\"button\">\r\n                        trova\r\n                <i class=\"fa fa-search\"></i>\r\n                </button>\r\n                </span>\r\n            </div>\r\n        </div>\r\n    \r\n          <span >\r\n            <!-- Allerta Martellata: se tolgo il bottone tolgo pure la lista,\r\n                quindi l'ho messo hidden-->\r\n            <button hidden id=\"addInsertion\" style=\"color:white\" class=\"btn btn-danger\">\r\n                <img src=\"./img/plus.png\" alt=\"plus\" style=\"width:25px\">\r\n                Inserisci Annuncio\r\n            </button>\r\n          </span>      \r\n                 \r\n    \r\n    </div>\r\n\r\n    <br>\r\n    <div style=\"display: inline-flex;\">\r\n\r\n        <span style=\"margin-right: 40px\"> <h4 style=\"font-weight: bold;\"> Nome Categoria: </h4> </span>\r\n        \r\n        <span style=\"margin-right: 40px\"> <input type=\"text\" class=\"form-control border-end-1 border rounded-pill\" style=\"font-weight: bold;\" value=\"\" placeholder=\"Categoria\" style=\"margin-right:20px\" id=\"categoryName\"> </span>\r\n\r\n        <span style=\"margin-right: 40px\"> <button class=\"btn btn-primary\" style=\"font-weight: bold;\" id=\"createCategory\">Crea Categoria</button> </span>\r\n\r\n    </div>\r\n    <br>\r\n    \r\n    <div id=\"remains\">\r\n        <br>\r\n        <ul id=\"insertionContent2\" class=\"list-group\" style=\"font-weight: bold;\">\r\n            \r\n        </ul>\r\n        \r\n    </div>\r\n    <div>\r\n        <ul id=\"pages2\" class=\"pagination pagination-sm my-2\" style=\"font-weight: bold;\">\r\n            \r\n        </ul>\r\n    \r\n    </div>    \r\n</div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<style>\r\n    .btn:hover {\r\n        outline-color: transparent ;\r\n        outline-style: solid;\r\n        box-shadow: 0 0 0 4px #5a01a7;\r\n        transition: 0.7s;\r\n    }\r\n\r\n    #searchTitle:hover {\r\n        outline-color: transparent ;\r\n        outline-style: solid;\r\n        box-shadow: 0 0 0 4px #5a01a7;\r\n        transition: 0.7s;\r\n    }\r\n\r\n    #searchTitle {\r\n        box-shadow: -3px 0 black, 0 3px black, 3px 0 black, 0 -3px black;\r\n        height:20px;\r\n        width:20%;\r\n        float: bottom;\r\n        align-self: right;\r\n    }\r\n</style>\r\n\r\n<div style=\"display: flex;\" class=\"my-5\">\r\n\r\n    <span style=\"margin-right: 40px\">\r\n        <img src=\"./img/button/showallBtn.png\" class=\"btn p-0\" height=\"35\" style=\"border:none;image-rendering: pixelated;\" type=\"button\" id=\"selectAllGames\">\r\n            </span> <!--funzione che prende tutti gli annunci e li schiaffa nel contenuto annunci-->\r\n                <span style=\"margin-right: 40px\" class=\"dropdown\">\r\n                    <img src=\"./img/button/bygenreBtn.png\" class=\"btn p-0 dropdown-toggle\" height=\"35\" style=\"border:none;image-rendering: pixelated;\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                    <ul id=\"gameGenres\" class=\"dropdown-menu\">\r\n                      \r\n                    </ul>\r\n                </span>\r\n            <span style=\"margin-right: 40px\" class=\"dropdown\">\r\n                <img src=\"./img/button/byyearBtn.png\" class=\"btn p-0 dropdown-toggle\" height=\"35\" style=\"border:none;image-rendering: pixelated;\"  type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                <ul id=\"gameYears\" class=\"dropdown-menu\">\r\n              \r\n                </ul>\r\n            </span>\r\n    <div style=\"vertical-align: middle;\" class=\"col-md-3 mx-auto\">\r\n        <div class=\"input-group\">\r\n            <input class=\"form-control border-dark border-3 border rounded\" type=\"search\" placeholder=\"cerca\" style=\"padding: 2px 4px 2px 4px;margin-right:20px\" id=\"searchTitleGame\">\r\n        </div>\r\n    </div>\r\n        <img src=\"./img/button/plusBtn.png\" class=\"btn p-0\"  id=\"addVideogame\" alt=\"plus\" height=\"35\" style=\"border:none;image-rendering: pixelated;\"  type=\"button\" hidden>\r\n    </div>\r\n\r\n<div>\r\n    <div  id=\"VideogameContent\" class=\"row\">\r\n\r\n    </div>\r\n</div>\r\n\r\n<div>\r\n    <ul id=\"pagesV\" class=\"pagination pagination-sm my-2\">\r\n        \r\n    </ul>\r\n</div>");

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
/* harmony export */   "createPage": () => (/* binding */ createPage),
/* harmony export */   "createPagination": () => (/* binding */ createPagination),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "searchByTitle": () => (/* binding */ searchByTitle)
/* harmony export */ });
/* harmony import */ var _creaAnnuncio_creaAnnuncio_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../creaAnnuncio/creaAnnuncio.html */ "./src/creaAnnuncio/creaAnnuncio.html");
/* harmony import */ var _annuncio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./annuncio */ "./src/annunci/annuncio.ts");
/* harmony import */ var _creaAnnuncio_creaAnnuncio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../creaAnnuncio/creaAnnuncio */ "./src/creaAnnuncio/creaAnnuncio.ts");



let list = [];
let filteredList = [];
let view = 6;
let type;
let genres;
let years;
function createPage() {
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
}
function getAllInsertions() {
    list = [];
    fetch('/insertion')
        .then((response) => response.json())
        .then((data) => {
        for (let d of data) {
            list.push(d);
        }
    });
}
function showResults(i) {
    let content = document.getElementById("insertionContent");
    content.innerHTML = "";
    let start = (i - 1) * view;
    let stop = (i * view) - 1;
    for (start; start <= stop; start++) {
        if (start >= list.length) {
            return;
        }
        if (!list[start].approved) {
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
}
function createPagination() {
    let size = list.length;
    let tabs = Math.ceil(size / view);
    console.log(size, tabs);
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
    list = [];
    fetch('/insertion')
        .then((response) => response.json())
        .then((data) => {
        for (let d of data) {
            list.push(d);
        }
        createPagination();
        showResults(1);
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
    setAllGenres();
    setAllYears();
    let searchTitle = document.getElementById("searchTitle");
    searchTitle.onkeydown = (e) => {
        if (e.key == 'Enter') {
            searchByTitle(searchTitle.value);
        }
    };
}
/*
function getAllInsertions() {
    list = [];

    const imageGioco1 = {
        link: "https://i.etsystatic.com/6277804/r/il/7df00e/697546340/il_1140xN.697546340_fivs.jpg"
    }

    const imageGioco2 = {
        link: "https://www.mobygames.com/images/covers/l/14445-the-legend-of-zelda-nes-front-cover.jpg"
    }

    const imageGioco3 = {
        link: "https://upload.wikimedia.org/wikipedia/it/b/b3/Pok%C3%A9mon_Giallo.png"
    }

    const imageGioco4 = {
        link: "https://metalgear.fandom.com/it/wiki/Metal_Gear?file=Metal_Gear.jpg"
    }

    const imageGallery1 = {
        link: "https://upload.wikimedia.org/wikipedia/it/thumb/7/77/Pikachu.png/1024px-Pikachu.png"
    }

    const imageGallery2 = {
        link: "https://www.pngmart.com/files/11/Frog-Meme-PNG-HD.png"
    }

    const imageGallery3 = {
        link: "https://media.licdn.com/dms/image/D5635AQHw3E5yYyXTLw/profile-framedphoto-shrink_800_800/0/1644518918606?e=1675620000&v=beta&t=x1RnXqWsDWAOVQUXGFujModXZhiGUQJu0a6FAsZN3Lo"
    }

    const gioco1 = {
        id: 1,
        name: "SuperMario",
        genre: [{genre: "PLATFORM"}],
        year: 1985,
        console: {console: "NES"},
        cover: imageGioco1
    }

    const gioco2 = {
        id: 2,
        name: "The Legend of Zelda",
        genre: [{genre: "AVVENTURA"}],
        year: 1986,
        console: {console: "NES"},
        cover: imageGioco2
    }

    const gioco3 = {
        id: 3,
        name: "Pokemon Giallo",
        genre: [{genre: "GDR"}],
        year: 1998,
        console: {console: "GAME_BOY_COLOR"},
        cover: imageGioco3
    }

    const gioco4 = {
        id: 4,
        name: "Metal Gear",
        genre: [{genre: "STEALTH"}],
        year: 1987,
        console: {console: "NES"},
        cover: imageGioco4
    }

    const publisherGioco1 = {
        userId: 1,
        username: "Pieroaffondo",
        name: "Pierino",
        surname: "Ciccino",
        email: "pierinocuoricino@amorino.com",
        rating: 666,
        videogames: [gioco1]
    }

    const insertion1: insertion = {
        approved: true,
        title: "Scambio SuperMario",
        description: "Scambio supermario xkè mi sono sekkato a giocarci",
        publisher: publisherGioco1,
        gallery: [imageGallery1, imageGallery2, imageGallery3],
        tradeGame: gioco1,
        wishList: [gioco2, gioco3, gioco4],
        outcome: "WIP",
        publicationDate: "29-01-2023"
    }


    for (let i = 0; i < 27; i++) {
        if (i != 17) {
            list.push(insertion1)
        } else {
            list.push(insertion1)
        }
    }
}
    /*QUESTO E' LA FUNZIONE GIUSTA NON FAMO CHE SBAGLIATE! */
/*Fetch a backend con tutti gli annunci, aggiorna la lista list*/
/*da qui in poi le funzioni servono a
creare la pagina una volta cliccato
sul bottone annunci e a ricaricarle*/
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
    let desc = document.createElement("h2");
    desc.setAttribute("style", "color:white");
    desc.innerHTML = "Descrizione:";
    let insDesc = document.createElement("h3");
    insDesc.setAttribute("style", "color:white");
    insDesc.innerHTML = insertion.description;
    document.getElementById("insertion-creator").innerHTML = "L'utente"; //insertion.publisher.username;
    document.getElementById("insertion-description").append(desc, insDesc);
    for (let i = 0; i < 3; i++) {
        document.getElementById("btn-item-" + (i + 1)).innerHTML = insertion.wishList[i].name;
        let img = document.createElement("img");
        img.src = insertion.wishList[i].cover.link;
        img.setAttribute("class", "card-img-top");
        document.getElementById("img-item-" + (i + 1)).append(img);
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
        document.getElementById("body-item-" + (i + 1)).append(p);
    }
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
/* harmony import */ var _creaAnnuncio_creaAnnuncio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../creaAnnuncio/creaAnnuncio */ "./src/creaAnnuncio/creaAnnuncio.ts");


let list = [];
let view = 6;
function createPage2() {
    fetch('/insertion')
        .then((response) => response.json())
        .then((data) => {
        for (let d of data) {
            list.push(d);
        }
        document.getElementById("selectAll2").onclick = searchByAll2;
        assignFilters2();
        document.getElementById("createCategory").onclick = createCategory;
        let btn = document.getElementById("addInsertion");
        btn.onclick = () => {
            document.getElementById("main").innerHTML = _creaAnnuncio_creaAnnuncio_html__WEBPACK_IMPORTED_MODULE_0__["default"];
            (0,_creaAnnuncio_creaAnnuncio__WEBPACK_IMPORTED_MODULE_1__["default"])();
        };
        //createInsertion();
        //getAllInsertions2();
        createPagination2();
        showResults2(1);
    });
}
function searchByAll2() {
    createPagination2();
    showResults2(1);
}
function assignFilters2() {
    let generi = document.getElementById("genres2").children;
    for (let g of generi) {
        g.onclick = () => {
            searchByGenre2(g.id);
        };
    }
    let anni = document.getElementById("years2").children;
    for (let a of anni) {
        a.onclick = () => {
            searchByYear2(Number(a.id));
        };
    }
    let searchTitle = document.getElementById("searchTitle2");
    searchTitle.onkeydown = (e) => {
        if (e.key == 'Enter') {
            searchByTitle2(searchTitle.value);
        }
    };
    let searchButton = document.getElementById("searchButton2");
    searchButton.onclick = () => {
        searchByTitle2(searchTitle.value);
    };
    /*let searchTitle = document.getElementById("searchTitle2") as HTMLInputElement;
    searchTitle.onkeydown = (e) => {
        if (e.key == 'Enter') {
            searchByTitle2(searchTitle.value)
        }
    }
    let searchButton = document.getElementById("searchButton2");
    searchButton.onclick = () => {
        searchByTitle2(searchTitle.value)
    }*/
}
function searchByTitle2(title) {
    getAllInsertions2();
    let filteredList = [];
    for (let element of list) {
        let titolo = element.title;
        let gameName = element.tradeGame.name;
        if ((titolo.toUpperCase().includes(title.toUpperCase()))
            || (gameName.toUpperCase().includes(title.toUpperCase()))) {
            filteredList.push(element);
        }
    }
    list = [];
    list = filteredList;
    createPagination2();
    showResults2(1);
}
function searchByGenre2(genre) {
    console.log(genre);
    let filteredList = [];
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
    createPagination2();
    showResults2(1);
}
function searchByYear2(year) {
    console.log(year);
    let filteredList = [];
    for (let element of list) {
        if (element.tradeGame.year == year) {
            filteredList.push(element);
        }
    }
    list = [];
    list = filteredList;
    createPagination2();
    showResults2(1);
}
function getAllInsertions2() {
    list = [];
    fetch('/insertion')
        .then((response) => response.json())
        .then((data) => {
        for (let d of data) {
            list.push(d);
        }
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
        if (!list[start].approved) {
            continue;
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
        title.innerHTML = list[start].title;
        description.innerHTML = "" + list[start].tradeGame.name;
        for (let i = 0; i < list[start].tradeGame.genre.length; i++) {
            description.innerHTML += ", " + list[start].tradeGame.genre[i].genre + "";
        }
        description.innerHTML += ", " + list[start].tradeGame.year;
        description.innerHTML += ", " + list[start].tradeGame.console.console;
        col.append(title, description);
        content.append(col);
    }
    console.log(checkedList);
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
    console.log(checkedList);
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
    console.log("Categoria creata più o meno");
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
        for (let game of fullList) {
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
            pic.setAttribute('src', game.cover.link);
            pic.setAttribute('alt', game.name);
            pic.setAttribute('class', 'border border-2 border-info rounded');
            pic.setAttribute('style', 'width:300%');
            liBtn.id = game.name;
            liBtn.setAttribute("type", "button");
            liBtn.setAttribute("class", "dropdown-item");
            title.innerHTML = game.name;
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
                    listId[index] = game.id;
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
        .then((data) => console.log(data));
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







let list = [];
//import createInsertion from '../creaAnnuncio/creaAnnuncio';
/*let list: insertion[] = [];

function getAllInsertions() { Questa è solo una prova, scommentare la fetch più giù
    list = [];

    const imageGioco1 = {
        link: "https://i.etsystatic.com/6277804/r/il/7df00e/697546340/il_1140xN.697546340_fivs.jpg"
    }

    const imageGioco2 = {
        link: "https://www.mobygames.com/images/covers/l/14445-the-legend-of-zelda-nes-front-cover.jpg"
    }

    const imageGioco3 = {
        link: "https://upload.wikimedia.org/wikipedia/it/b/b3/Pok%C3%A9mon_Giallo.png"
    }

    const imageGioco4 = {
        link: "https://static.wikia.nocookie.net/metalgear/images/e/e1/Metal_Gear.jpg"
    }

    const imageGallery1 = {
        link: "https://upload.wikimedia.org/wikipedia/it/thumb/7/77/Pikachu.png/1024px-Pikachu.png"
    }

    const imageGallery2 = {
        link: "https://www.pngmart.com/files/11/Frog-Meme-PNG-HD.png"
    }

    const imageGallery3 = {
        link: "https://media.licdn.com/dms/image/D5635AQHw3E5yYyXTLw/profile-framedphoto-shrink_800_800/0/1644518918606?e=1675620000&v=beta&t=x1RnXqWsDWAOVQUXGFujModXZhiGUQJu0a6FAsZN3Lo"
    }

    const gioco1 = {
        id: 1,
        name: "SuperMario",
        genre: [{genre: "PLATFORM"}],
        year: 1985,
        console: {console: "NES"},
        cover: imageGioco1
    }

    const gioco2 = {
        id: 2,
        name: "The Legend of Zelda",
        genre: [{genre: "AVVENTURA"}],
        year: 1986,
        console: {console: "NES"},
        cover: imageGioco2
    }

    const gioco3 = {
        id: 3,
        name: "Pokemon Giallo",
        genre: [{genre: "GDR"}],
        year: 1998,
        console: {console: "GAME_BOY_COLOR"},
        cover: imageGioco3
    }

    const gioco4 = {
        id: 4,
        name: "Metal Gear",
        genre: [{genre: "STEALTH"}],
        year: 1987,
        console: {console: "NES"},
        cover: imageGioco4
    }

    const publisherGioco1 = {
        userId: 1,
        username: "Pieroaffondo",
        name: "Pierino",
        surname: "Ciccino",
        email: "pierinocuoricino@amorino.com",
        rating: 666,
        videogames: [gioco1]
    }

    const insertion1: insertion = {
        approved: true,
        title: "Scambio SuperMario",
        description: "Scambio supermario xkè mi sono sekkato a giocarci",
        publisher: publisherGioco1,
        gallery: [gioco1.cover, imageGallery1, imageGallery2, imageGallery3],
        tradeGame: gioco1,
        wishList: [gioco2, gioco3, gioco4],
        outcome: "WIP",
        publicationDate: "29-01-2023"
    }

    const insertion2: insertion = {
        approved: true,
        title: "Scambio pacman",
        description: "Scambio supermario xkè mi sono sekkato a giocarci",
        publisher: publisherGioco1,
        gallery: [gioco2.cover, imageGallery2, imageGallery2, imageGallery3],
        tradeGame: gioco2,
        wishList: [gioco2, gioco3, gioco4],
        outcome: "WIP",
        publicationDate: "29-01-2023"
    }

    const insertion3: insertion = {
        approved: true,
        title: "scambio codesto",
        description: "Scambio supermario xkè mi sono sekkato a giocarci",
        publisher: publisherGioco1,
        gallery: [gioco3.cover, imageGallery3, imageGallery2, imageGallery3],
        tradeGame: gioco3,
        wishList: [gioco2, gioco3, gioco4],
        outcome: "WIP",
        publicationDate: "29-01-2023"
    }

    const insertion4: insertion = {
        approved: true,
        title: "Scambio pipolo",
        description: "Scambio supermario xkè mi sono sekkato a giocarci",
        publisher: publisherGioco1,
        gallery: [gioco4.cover, imageGallery1, imageGallery2, imageGallery3],
        tradeGame: gioco4,
        wishList: [gioco2, gioco3, gioco4],
        outcome: "WIP",
        publicationDate: "29-01-2023"
    }


    list.push(insertion1);
    list.push(insertion2);
    list.push(insertion3);
    list.push(insertion4);

    
    /*QUESTO E' LA FUNZIONE GIUSTA NON FAMO CHE SBAGLIATE!

    /*Fetch a backend con tutti gli annunci, aggiorna la lista list
    // list=[];
    // fetch('/TipoAnnunciCheneso')
    // .then((response) => response.json())
    // .then((data) => {
    //     for(let d of data){
    //         list.push(d);
    //     }
    // });
}*/
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
        let keyword = document.getElementById("searchTitle");
        if (keyword.value != "") {
            document.getElementById("main").innerHTML = _annunci_annunci_html__WEBPACK_IMPORTED_MODULE_1__["default"];
            (0,_annunci_annunci__WEBPACK_IMPORTED_MODULE_2__["default"])();
            (0,_annunci_annunci__WEBPACK_IMPORTED_MODULE_2__.searchByTitle)(keyword.value);
        }
    };
    document.getElementById("searchTitle").onkeydown = (e) => {
        let keyword = document.getElementById("searchTitle");
        if (e.key == "Enter" && keyword.value != "") {
            document.getElementById("main").innerHTML = _annunci_annunci_html__WEBPACK_IMPORTED_MODULE_1__["default"];
            (0,_annunci_annunci__WEBPACK_IMPORTED_MODULE_2__["default"])();
            (0,_annunci_annunci__WEBPACK_IMPORTED_MODULE_2__.searchByTitle)(keyword.value);
        }
    };
    list = [];
    fetch('/insertion')
        .then((response) => response.json())
        .then((data) => {
        for (let d of data) {
            list.push(d);
        }
        createItemCarousel();
    });
}
function createItemCarousel() {
    for (let i = list.length - 1; i > list.length - 4 && i >= 0; i--) {
        let carInner = document.getElementById('innerCarouselHome');
        let clCarouselIt = document.createElement('div');
        if (i == 0) {
            clCarouselIt.setAttribute('class', 'carousel-item active');
        }
        else {
            clCarouselIt.setAttribute('class', 'carousel-item');
        }
        let img = document.createElement('img');
        img.setAttribute('src', list[i].tradeGame.cover.link);
        img.setAttribute('id', 'imgCard');
        img.setAttribute('class', 'mt-2');
        let clCard = document.createElement('div');
        clCard.setAttribute('class', 'card bg-secondary');
        clCard.setAttribute('id', 'annCard');
        let carBody = document.createElement('div');
        carBody.setAttribute('class', 'card-body');
        let title = document.createElement('h5');
        title.setAttribute('class', 'card-title border-top border-2 border-info');
        title.innerHTML = list[i].tradeGame.name;
        let desc = document.createElement('p');
        desc.setAttribute('class', 'card-text');
        for (let i = 0; i < list[i].tradeGame.genre.length; i++) {
            desc.innerHTML += list[i].tradeGame.genre[i].genre + " ";
        }
        desc.innerHTML += "<br>"
            + "Anno: " + list[i].tradeGame.year + " "
            + "Console: " + list[i].tradeGame.console.console + "<br>"
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
            (0,_annunci_annuncio__WEBPACK_IMPORTED_MODULE_5__["default"])(list[i]);
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
        gameTitle.setAttribute("class", "my-4");
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
        let addButton = document.createElement("button");
        let id = gameList[start].id;
        if (type == "USER") {
            addButton.innerHTML = "Aggiungi alla tua Lista!";
            addButton.setAttribute("class", "my-3");
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
            col.append(addButton);
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
function setAllGenres() {
    ;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWUsZ0NBQWdDLHdDQUF3QyxpQ0FBaUMsMENBQTBDLDZCQUE2QixTQUFTLGdDQUFnQyx3Q0FBd0MsaUNBQWlDLDBDQUEwQyw2QkFBNkIsU0FBUywwQkFBMEIsNkVBQTZFLHdCQUF3QixzQkFBc0IsMEJBQTBCLDhCQUE4QixTQUFTLCtDQUErQyxxS0FBcUssV0FBVywyQkFBMkIsWUFBWSxZQUFZLHFXQUFxVyxXQUFXLDJCQUEyQixZQUFZLFlBQVksOFdBQThXLFdBQVcsMkJBQTJCLFlBQVksWUFBWSx1akJBQXVqQixXQUFXLDJCQUEyQixZQUFZLFlBQVksdVpBQXVaOzs7Ozs7Ozs7Ozs7OztBQ0Fwc0YsaUVBQWUsMkZBQTJGLGlMQUFpTCx3dUNBQXd1Qyx3akRBQXdqRCxxNUJBQXE1QiwrNUJBQSs1QixnUUFBZ1E7Ozs7Ozs7Ozs7Ozs7O0FDQS9tSyxpRUFBZSwrQkFBK0IsOEJBQThCLFNBQVMsOERBQThELGtDQUFrQyxrSUFBa0ksa1ZBQWtWLDhrQkFBOGtCLHVhQUF1YSwyY0FBMmMsc3RCQUFzdEIscUZBQXFGLG9NQUFvTSxnTkFBZ04sa09BQWtPLDJLQUEySyx5RUFBeUU7Ozs7Ozs7Ozs7Ozs7O0FDQTl0SCxpRUFBZSwrSEFBK0gsMkJBQTJCOzs7Ozs7Ozs7Ozs7OztBQ0F6SyxpRUFBZSwrY0FBK2Msc0VBQXNFOzs7Ozs7Ozs7Ozs7OztBQ0FwaUIsaUVBQWUsZ1hBQWdYOzs7Ozs7Ozs7Ozs7OztBQ0EvWCxpRUFBZSwyQkFBMkIsb0RBQW9ELHdCQUF3QixPQUFPLHNCQUFzQix3Q0FBd0MsaUNBQWlDLDBDQUEwQyw2QkFBNkIsU0FBUyw4QkFBOEIsd0NBQXdDLGlDQUFpQywwQ0FBMEMsNkJBQTZCLFNBQVMsODlGQUE4OUYsV0FBVywyQkFBMkIsWUFBWSxZQUFZLHNJQUFzSSxTQUFTLHdDQUF3Qzs7Ozs7Ozs7Ozs7Ozs7QUNBdHJILGlFQUFlLDJCQUEyQix3QkFBd0IsNkNBQTZDLG9CQUFvQiwyQkFBMkIsT0FBTyx3QkFBd0IsbUNBQW1DLHVDQUF1QywwQkFBMEIsT0FBTyw2QkFBNkIsc0NBQXNDLE9BQU8sY0FBYyx3QkFBd0IsNEJBQTRCLDJCQUEyQixPQUFPLG9CQUFvQiwwQkFBMEIsa0JBQWtCLG1CQUFtQixPQUFPLHNCQUFzQix5QkFBeUIsT0FBTyxtRkFBbUYsc0JBQXNCLCtCQUErQixPQUFPLHlCQUF5QixnQkFBZ0IsT0FBTywwSkFBMEosY0FBYyxhQUFhLGtGQUFrRiwwWEFBMFgseUNBQXlDLGlLQUFpSyxvQkFBb0IseUNBQXlDLHFEQUFxRCx5QkFBeUIsMEJBQTBCLHdCQUF3Qiw2Q0FBNkMsS0FBSyxrQkFBa0IsaUJBQWlCLGtDQUFrQyxvQkFBb0IseUJBQXlCLHdCQUF3Qix3QkFBd0IsS0FBSywyQkFBMkIseUJBQXlCLGFBQWEsY0FBYyxlQUFlLG1CQUFtQiwyQ0FBMkMsNkJBQTZCLEtBQUssbUNBQW1DLHlCQUF5QixpQ0FBaUMsMkNBQTJDLDBCQUEwQixzSkFBc0osc0pBQXNKLHVDQUF1QyxLQUFLLDJCQUEyQixpQkFBaUIsb0JBQW9CLHNDQUFzQyxxQkFBcUIsb0JBQW9CLDJDQUEyQyxLQUFLLHNEQUFzRCxxQkFBcUIsNEJBQTRCLEtBQUssNkJBQTZCLG1CQUFtQixLQUFLLDZCQUE2QixnQkFBZ0IseUJBQXlCLEtBQUssaUNBQWlDLG9CQUFvQiw2QkFBNkIsOEJBQThCLEtBQUssdUNBQXVDLHdCQUF3QixLQUFLLDJDQUEyQywyQkFBMkIsS0FBSyx3Q0FBd0MseUJBQXlCLGtCQUFrQixtQkFBbUIsd0JBQXdCLDZCQUE2QixrQ0FBa0MsS0FBSyx3Q0FBd0MsZUFBZSxpQ0FBaUMsa0NBQWtDLE9BQU8sWUFBWSxvQkFBb0IscUJBQXFCLE9BQU8sS0FBSyxnQ0FBZ0MsZUFBZSxpQ0FBaUMsa0NBQWtDLE9BQU8sWUFBWSxvQkFBb0IscUJBQXFCLE9BQU8sS0FBSyxvQ0FBb0MsVUFBVSxzQkFBc0IsT0FBTyxZQUFZLHVDQUF1QyxPQUFPLEtBQUssNEJBQTRCLFVBQVUsc0JBQXNCLE9BQU8sWUFBWSx1Q0FBdUMsT0FBTyxLQUFLLHlLQUF5SyxrQ0FBa0MsK0JBQStCLDRCQUE0Qiw0QkFBNEIsNEVBQTRFLGlDQUFpQywrQkFBK0IsNEJBQTRCLDRCQUE0Qiw0RUFBNEUsaUNBQWlDLGlDQUFpQyw0QkFBNEIsNEJBQTRCLDRFQUE0RSxnQ0FBZ0MsZ0NBQWdDLDJCQUEyQiw2QkFBNkIsNEVBQTRFLGlDQUFpQywrQkFBK0IsNEJBQTRCLDZCQUE2Qiw0RUFBNEUsaUNBQWlDLGdDQUFnQywyQkFBMkIsNkJBQTZCLDZFQUE2RSxpQ0FBaUMsK0JBQStCLDRCQUE0Qiw0QkFBNEIsNEVBQTRFLGlDQUFpQywrQkFBK0IsNEJBQTRCLDRCQUE0Qiw0RUFBNEUsaUNBQWlDLGdDQUFnQywwQkFBMEIsNEJBQTRCLDZFQUE2RSxpQ0FBaUMsZ0NBQWdDLDRCQUE0Qiw2QkFBNkIsNEVBQTRFLGdDQUFnQyxnQ0FBZ0MseUJBQXlCLDRCQUE0Qiw2RUFBNkUsaUNBQWlDLCtCQUErQiw0QkFBNEIsNEJBQTRCLGd4QkFBZ3hCLG1FQUFtRSx3bUJBQXdtQjs7Ozs7Ozs7Ozs7Ozs7QUNBcmdRLGlFQUFlLGlUQUFpVDs7Ozs7Ozs7Ozs7Ozs7QUNBaFUsaUVBQWUsaUtBQWlLLHFFQUFxRSw4QkFBOEIsT0FBTywyQkFBMkIseUJBQXlCLG9CQUFvQixPQUFPLHNCQUFzQix1QkFBdUIsc0JBQXNCLDBCQUEwQiwyQkFBMkIsMkJBQTJCLE9BQU8sb0JBQW9CLG9CQUFvQiwwQkFBMEIsMkJBQTJCLE9BQU8sc0JBQXNCLG9DQUFvQyw2QkFBNkIsc0NBQXNDLHlCQUF5QixPQUFPLGlCQUFpQixvQkFBb0IscUJBQXFCLE9BQU8sZ0JBQWdCLDJCQUEyQiwwQkFBMEIsT0FBTyxzQkFBc0Isb0JBQW9CLHFCQUFxQixPQUFPLHFCQUFxQiwwQkFBMEIsT0FBTyxvQkFBb0IseUJBQXlCLE9BQU8sZ0JBQWdCLHdCQUF3QiwyQkFBMkIsb0JBQW9CLG1EQUFtRCxzQkFBc0IsT0FBTyxjQUFjLHFCQUFxQixPQUFPLG0zQkFBbTNCLG1CQUFtQixvREFBb0QsaUJBQWlCLGdHQUFnRyxhQUFhLDZTQUE2UyxzY0FBc2MsYUFBYSw0YUFBNGEsYUFBYSx1MUZBQXUxRjs7Ozs7Ozs7Ozs7Ozs7QUNBMTFNLGlFQUFlLDhuQkFBOG5COzs7Ozs7Ozs7Ozs7OztBQ0E3b0IsaUVBQWUsa1RBQWtUOzs7Ozs7Ozs7Ozs7OztBQ0FqVSxpRUFBZSwyTEFBMkw7Ozs7Ozs7Ozs7Ozs7O0FDQTFNLGlFQUFlLHl2QkFBeXZCOzs7Ozs7Ozs7Ozs7OztBQ0F4d0IsaUVBQWUsNC9DQUE0L0M7Ozs7Ozs7Ozs7Ozs7O0FDQTNnRCxpRUFBZSxzQkFBc0Isb0RBQW9ELG1EQUFtRCxvREFBb0QscURBQXFELCtCQUErQixhQUFhLGlpR0FBaWlHOzs7Ozs7Ozs7Ozs7OztBQ0FsMEcsaUVBQWUsK3pDQUErekM7Ozs7Ozs7Ozs7Ozs7O0FDQTkwQyxpRUFBZSx5UkFBeVI7Ozs7Ozs7Ozs7Ozs7O0FDQXhTLGlFQUFlLDBHQUEwRyxnREFBZ0QsbURBQW1ELGtEQUFrRCxpREFBaUQsd0pBQXdKLHVEQUF1RCw2Q0FBNkMsb3FGQUFvcUY7Ozs7Ozs7Ozs7Ozs7O0FDQS90RyxpRUFBZSw0QkFBNEIsd0NBQXdDLGlDQUFpQywwQ0FBMEMsNkJBQTZCLFNBQVMsZ0NBQWdDLHdDQUF3QyxpQ0FBaUMsMENBQTBDLDZCQUE2QixTQUFTLDBCQUEwQiw2RUFBNkUsd0JBQXdCLHNCQUFzQiwwQkFBMEIsOEJBQThCLFNBQVMsK0NBQStDLDBLQUEwSywyQkFBMkIsZ1dBQWdXLDJCQUEyQixxYUFBcWEsMkJBQTJCLHVQQUF1UCw4TkFBOE4sbU5BQW1OLDJCQUEyQix5UEFBeVA7Ozs7Ozs7Ozs7Ozs7O0FDQTlqRixpRUFBZSxzakJBQXNqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNFemdCO0FBRXBCO0FBQ3NCO0FBRTlELElBQUksSUFBSSxHQUFnQixFQUFFLENBQUM7QUFDM0IsSUFBSSxZQUFZLEdBQWMsRUFBRTtBQUNoQyxJQUFJLElBQUksR0FBVyxDQUFDO0FBQ3BCLElBQUksSUFBWSxDQUFDO0FBQ2pCLElBQUksTUFBZ0IsQ0FBQztBQUNyQixJQUFJLEtBQWUsQ0FBQztBQUViLFNBQVMsVUFBVTtJQUV0QixLQUFLLENBQUMsY0FBYyxDQUFDO1NBQ3BCLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ25DLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ1gsSUFBSSxJQUFJLElBQUksT0FBTyxJQUFJLElBQUksSUFBSSxNQUFNLEVBQUU7WUFDbkMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkUsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNuRCxHQUFHLENBQUMsT0FBTyxHQUFDLEdBQUUsRUFBRTtnQkFDWixRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsR0FBQyx1RUFBWSxDQUFDO2dCQUN2RCxzRUFBbUIsRUFBRSxDQUFDO1lBQzFCLENBQUM7U0FFSjthQUFNO1lBQ0gsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3hFLElBQUksR0FBRyxPQUFPO1NBQ2pCO1FBRUwsSUFBSSxHQUFDLEVBQUUsQ0FBQztRQUNSLEtBQUssQ0FBQyxZQUFZLENBQUM7YUFDbEIsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDbkMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDWCxLQUFJLElBQUksQ0FBQyxJQUFJLElBQUksRUFBQztnQkFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2hCO1lBQ0QsZ0JBQWdCLEVBQUUsQ0FBQztZQUNuQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixhQUFhLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQUM7SUFDRixDQUFDLENBQUM7QUFDTixDQUFDO0FBSUQsU0FBUyxnQkFBZ0I7SUFDckIsSUFBSSxHQUFDLEVBQUUsQ0FBQztJQUNSLEtBQUssQ0FBQyxZQUFZLENBQUM7U0FDbEIsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDbkMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDWCxLQUFJLElBQUksQ0FBQyxJQUFJLElBQUksRUFBQztZQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEI7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNKLENBQUM7QUFNRCxTQUFTLFdBQVcsQ0FBQyxDQUFTO0lBRTdCLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUMxRCxPQUFPLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN2QixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDM0IsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLEtBQUssS0FBSyxFQUFFLEtBQUssSUFBSSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDaEMsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN0QixPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUN2QixTQUFTO1NBQ1o7UUFHRCxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUN2QyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQy9DLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLG1DQUFtQyxDQUFDLENBQUM7UUFDL0QsR0FBRyxDQUFDLFdBQVcsR0FBQyxHQUFFLEVBQUU7WUFDaEIsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztRQUNuRSxDQUFDO1FBQ0QsR0FBRyxDQUFDLFVBQVUsR0FBQyxHQUFFLEVBQUU7WUFDZixHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO1FBQ25FLENBQUM7UUFDRCxJQUFJLFlBQVksR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7WUFDZixxREFBZSxDQUFDLFlBQVksQ0FBQztRQUNqQyxDQUFDO1FBRUQsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDN0MsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsa0NBQWtDLENBQUM7UUFDL0QsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDbkIsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSztRQUNuQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSx5RUFBeUUsQ0FBQyxDQUFDO1FBRXZHLFdBQVcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUNoRCxXQUFXLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxrREFBa0QsQ0FBQyxDQUFDO1FBRXRGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFHNUMsS0FBSSxJQUFJLENBQUMsR0FBRSxDQUFDLEVBQUUsQ0FBQyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQztZQUNwRCxLQUFLLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDOUQsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7U0FFaEQ7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztRQUNqRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztRQUc1QyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUMxRCxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztRQUcvQyxNQUFNLENBQUMsU0FBUyxHQUFHLDBCQUEwQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzdFLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBRTlDLElBQUksQ0FBQyxTQUFTLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLGVBQWUsQ0FBQztRQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSwrREFBK0QsQ0FBQyxDQUFDO1FBRTVGLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxXQUFXLEVBQUMsSUFBSSxFQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxJQUFJLENBQUM7UUFDdkUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUV2QjtBQUNMLENBQUM7QUFFTSxTQUFTLGdCQUFnQjtJQUM1QixJQUFJLElBQUksR0FBVyxJQUFJLENBQUMsTUFBTTtJQUM5QixJQUFJLElBQUksR0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztJQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7SUFDdkIsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QyxLQUFLLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUNyQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzVCLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1IsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUM3QyxFQUFFLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ0gsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDekM7UUFDRCxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFO1lBQ2YsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDdEQsS0FBSyxJQUFJLEtBQUssSUFBSSxLQUFLLEVBQUU7Z0JBQ3JCLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO2dCQUN6QyxLQUFLLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQ3pDO1lBQ0QsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUM3QyxFQUFFLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN4QyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDO1FBQ0YsR0FBRyxDQUFDLFNBQVMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ3BEO0FBQ0wsQ0FBQztBQVFELFNBQVMsWUFBWTtJQUVqQixNQUFNLEdBQUcsRUFBRTtJQUNYLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2xDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckQsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUN0RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDN0MsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDM0MsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEMsRUFBRSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQ3pDLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO2dCQUMzQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDakQsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7b0JBQ2YsYUFBYSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkFDRCxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNkLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbEI7U0FDSjtLQUNKO0FBQ0wsQ0FBQztBQUdELFNBQVMsV0FBVztJQUNoQixLQUFLLEdBQUcsRUFBRTtJQUNWLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2xDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQzNDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDbEMsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMxQyxJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1lBQ3BDLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFDM0MsR0FBRyxDQUFDLFNBQVMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDNUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7Z0JBQ2YsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFL0IsQ0FBQztZQUNELEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZCxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2xCO0tBQ0o7QUFDTCxDQUFDO0FBR0QsU0FBUyxXQUFXO0lBQ3BCLElBQUksR0FBQyxFQUFFLENBQUM7SUFDUixLQUFLLENBQUMsWUFBWSxDQUFDO1NBQ2xCLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ25DLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ1gsS0FBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUM7WUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hCO1FBRUQsZ0JBQWdCLEVBQUUsQ0FBQztRQUNuQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkIsQ0FBQyxDQUFDLENBQUM7QUFFSCxDQUFDO0FBR00sU0FBUyxhQUFhLENBQUMsS0FBYTtJQUN2QyxZQUFZLEdBQUcsRUFBRTtJQUNqQixLQUFLLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtRQUN0QixJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUk7UUFDckMsSUFBSSxjQUFjLEdBQUcsT0FBTyxDQUFDLEtBQUs7UUFDbEMsSUFBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7ZUFDekQsQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDNUQsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDN0I7S0FDSjtJQUNELElBQUksR0FBRyxFQUFFLENBQUM7SUFDVixJQUFJLEdBQUcsWUFBWTtJQUNuQixnQkFBZ0IsRUFBRSxDQUFDO0lBQ25CLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNmLGdCQUFnQixFQUFFLENBQUM7QUFDdkIsQ0FBQztBQUdELFNBQVMsYUFBYSxDQUFDLEtBQWE7SUFDaEMsWUFBWSxHQUFHLEVBQUU7SUFDakIsS0FBSyxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7UUFDdEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNyRCxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLEVBQUU7Z0JBQzNDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzNCLENBQUMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7YUFDdEM7U0FDSjtLQUNKO0lBQ0QsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUNWLElBQUksR0FBRyxZQUFZO0lBQ25CLGdCQUFnQixFQUFFLENBQUM7SUFDbkIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2YsZ0JBQWdCLEVBQUUsQ0FBQztBQUN2QixDQUFDO0FBR0QsU0FBUyxZQUFZLENBQUMsSUFBWTtJQUM5QixZQUFZLEdBQUcsRUFBRTtJQUNqQixLQUFLLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtRQUN0QixJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTtZQUNoQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUM3QjtLQUNKO0lBQ0QsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUNWLElBQUksR0FBRyxZQUFZO0lBQ25CLGdCQUFnQixFQUFFLENBQUM7SUFDbkIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2YsZ0JBQWdCLEVBQUUsQ0FBQztBQUN2QixDQUFDO0FBS0QsU0FBUyxhQUFhO0lBRXRCLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDO0lBQy9DLFFBQVEsQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFO1FBQ3BCLFdBQVcsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxZQUFZLEVBQUUsQ0FBQztJQUVmLFdBQVcsRUFBRSxDQUFDO0lBRWQsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQXFCLENBQUM7SUFDN0UsV0FBVyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQzFCLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxPQUFPLEVBQUU7WUFDbEIsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7U0FDbkM7SUFDTCxDQUFDO0FBQ0wsQ0FBQztBQWVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkRBbUc2RDtBQUV6RCxpRUFBaUU7QUFNckU7O3FDQUVxQztBQUlyQyxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcmJhO0FBQ0g7QUFDQztBQUU3QixTQUFTLGVBQWUsQ0FBQyxTQUFvQjtJQUVoRCxzRUFBc0U7SUFDdEUsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLHNEQUFRLENBQUM7SUFHMUIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFO1FBQ2hELFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxHQUFHLHFEQUFPLENBQUM7UUFDcEQsb0RBQVUsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFDRCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztJQUMxQyxzQkFBc0I7SUFFdEIsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7SUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUluQiwrQ0FBK0M7SUFDL0MsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUM7SUFDcEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQy9DLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNuRCxHQUFHLENBQUMsWUFBWSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDUixHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNwQyxHQUFHLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUM1QztRQUNELEdBQUcsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25ELFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDekI7SUFDRCxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztJQUU1QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDL0MsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDUixHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxzQkFBc0IsQ0FBQztTQUNwRDthQUFNO1lBQ0gsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxHQUFHLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3BDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQzNDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsZUFBZSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO0tBQ3BCO0lBQ0QsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxHQUFHLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztJQUN6QyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSx5QkFBeUIsQ0FBQztJQUNwRCxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsRCxJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3ZDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDeEMsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwQyxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQztJQUM1QyxDQUFDLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztJQUN6QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3ZELENBQUMsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUc7S0FDMUQ7SUFDRCxDQUFDLENBQUMsU0FBUyxJQUFJLE1BQU07VUFDZixRQUFRLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsTUFBTTtVQUM1QyxXQUFXLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQ3hELFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNuRCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFDLGFBQWEsQ0FBQztJQUN4QyxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWM7SUFDL0IsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBQyxhQUFhLENBQUM7SUFDM0MsT0FBTyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDO0lBQzFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxTQUFTLEdBQUcsVUFBVSxpQ0FBK0I7SUFDbEcsUUFBUSxDQUFDLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN4QixRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN0RixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQzNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQztRQUN6QyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7UUFDekIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN2RCxDQUFDLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHO1NBQzFEO1FBQ0QsQ0FBQyxDQUFDLFNBQVMsSUFBSSxNQUFNO2NBQ2YsUUFBUSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLE1BQU07Y0FDNUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUN4RCxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM3RDtBQUNMLENBQUM7QUFFRCxpRUFBZSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JHOEI7QUFHRTtBQUU5RCxJQUFJLElBQUksR0FBZ0IsRUFBRSxDQUFDO0FBQzNCLElBQUksSUFBSSxHQUFXLENBQUM7QUFFYixTQUFTLFdBQVc7SUFFdkIsS0FBSyxDQUFDLFlBQVksQ0FBQztTQUNsQixJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNuQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUNYLEtBQUksSUFBSSxDQUFDLElBQUksSUFBSSxFQUFDO1lBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoQjtRQUVELFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQztRQUM3RCxjQUFjLEVBQUUsQ0FBQztRQUNqQixRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQztRQUNuRSxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2xELEdBQUcsQ0FBQyxPQUFPLEdBQUMsR0FBRSxFQUFFO1lBQ1osUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEdBQUMsdUVBQVksQ0FBQztZQUN2RCxzRUFBbUIsRUFBRSxDQUFDO1FBQzFCLENBQUM7UUFDRCxvQkFBb0I7UUFDcEIsc0JBQXNCO1FBQ3RCLGlCQUFpQixFQUFFLENBQUM7UUFDcEIsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBR3BCLENBQUMsQ0FBQyxDQUFDO0FBSVAsQ0FBQztBQUdELFNBQVMsWUFBWTtJQUNqQixpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwQixDQUFDO0FBR0QsU0FBUyxjQUFjO0lBQ25CLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUTtJQUN4RCxLQUFLLElBQUksQ0FBQyxJQUFJLE1BQU0sRUFBRTtRQUNqQixDQUF1QixDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7WUFDcEMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6QixDQUFDO0tBQ0o7SUFDRCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVE7SUFDckQsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7UUFDZixDQUF1QixDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7WUFDcEMsYUFBYSxDQUFDLE1BQU0sQ0FBRSxDQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkQsQ0FBQztLQUNKO0lBRUQsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQXFCLENBQUM7SUFDOUUsV0FBVyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQzFCLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxPQUFPLEVBQUU7WUFDbEIsY0FBYyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7U0FDcEM7SUFDTCxDQUFDO0lBRUQsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM1RCxZQUFZLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtRQUN4QixjQUFjLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztJQUNyQyxDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHO0FBQ1AsQ0FBQztBQUdELFNBQVMsY0FBYyxDQUFDLEtBQWE7SUFDakMsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQixJQUFJLFlBQVksR0FBRyxFQUFFO0lBQ3JCLEtBQUssSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO1FBQ3RCLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDM0IsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO2VBQ2pELENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQzNELFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQzdCO0tBQ0o7SUFDRCxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ1YsSUFBSSxHQUFHLFlBQVk7SUFDbkIsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQixZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEIsQ0FBQztBQUdELFNBQVMsY0FBYyxDQUFDLEtBQWE7SUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQixJQUFJLFlBQVksR0FBRyxFQUFFO0lBQ3JCLEtBQUssSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO1FBQ3RCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckQsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksS0FBSyxFQUFFO2dCQUMzQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMzQixDQUFDLEdBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO2FBQ3BDO1NBQ0o7S0FDSjtJQUNELElBQUksR0FBRyxFQUFFLENBQUM7SUFDVixJQUFJLEdBQUcsWUFBWTtJQUNuQixpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwQixDQUFDO0FBRUQsU0FBUyxhQUFhLENBQUMsSUFBWTtJQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xCLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztJQUN0QixLQUFLLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtRQUN0QixJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTtZQUNoQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUM3QjtLQUNKO0lBQ0QsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUNWLElBQUksR0FBRyxZQUFZO0lBQ25CLGlCQUFpQixFQUFFLENBQUM7SUFDcEIsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BCLENBQUM7QUFHRCxTQUFTLGlCQUFpQjtJQUN0QixJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ1YsS0FBSyxDQUFDLFlBQVksQ0FBQztTQUNsQixJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNuQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUNYLEtBQUksSUFBSSxDQUFDLElBQUksSUFBSSxFQUFDO1lBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoQjtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUlELFNBQVMsaUJBQWlCO0lBQ3RCLElBQUksSUFBSSxHQUFXLElBQUksQ0FBQyxNQUFNO0lBQzlCLElBQUksSUFBSSxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQzFDLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDckIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUM1QixJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNSLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLENBQUM7WUFDN0MsRUFBRSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDM0M7YUFBTTtZQUNILEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztRQUN2QyxHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtZQUNmLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ3ZELEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxFQUFFO2dCQUNyQixLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztnQkFDekMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUN6QztZQUNELEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLENBQUM7WUFDN0MsRUFBRSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDeEMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQztRQUNGLEdBQUcsQ0FBQyxTQUFTLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQixRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNyRDtBQUNMLENBQUM7QUFFRCxTQUFTLFlBQVksQ0FBQyxDQUFTO0lBQzNCLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUMzRCxPQUFPLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN2QixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDM0IsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLEtBQUssS0FBSyxFQUFFLEtBQUssSUFBSSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDaEMsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN0QixPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUN2QixTQUFTO1NBQ1o7UUFHRCxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUN2QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLGFBQWE7UUFDM0Msa0dBQWtHO1FBQ2xHLElBQUkscUJBQXFCLEdBQVksS0FBSyxDQUFDO1FBRTNDLEtBQUksSUFBSSxPQUFPLElBQUksV0FBVyxFQUFDO1lBQzNCLElBQUcsSUFBSSxJQUFFLE9BQU8sRUFBQztnQkFDYixxQkFBcUIsR0FBQyxJQUFJLENBQUM7YUFDOUI7U0FDSjtRQUdELEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDN0MsSUFBRyxxQkFBcUIsRUFBQztZQUNyQixHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO1NBQ2xFO2FBQU07WUFDSCxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO1lBQy9ELEdBQUcsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLDREQUE0RCxDQUFDLENBQUM7WUFDOUYsR0FBRyxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsNERBQTRELENBQUMsQ0FBQztTQUNoRztRQUVELEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTdCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFO1lBQ2Ysa0JBQWtCLENBQUMsSUFBSSxDQUFDO1FBQzVCLENBQUM7UUFFRCxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDakQsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QyxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDcEMsV0FBVyxDQUFDLFNBQVMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDeEQsS0FBSSxJQUFJLENBQUMsR0FBRSxDQUFDLEVBQUUsQ0FBQyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQztZQUNwRCxXQUFXLENBQUMsU0FBUyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQzdFO1FBQ0QsV0FBVyxDQUFDLFNBQVMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFFM0QsV0FBVyxDQUFDLFNBQVMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBRXRFLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLFdBQVcsQ0FBQztRQUM3QixPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBRXZCO0lBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUU3QixDQUFDO0FBRUQsaUVBQWUsV0FBVztBQUsxQixJQUFJLFdBQVcsR0FBYSxFQUFFLENBQUM7QUFFeEIsU0FBUyxrQkFBa0IsQ0FBQyxHQUFXO0lBRTFDLElBQUksZUFBZSxHQUFZLEtBQUssQ0FBQztJQUVyQyxLQUFJLElBQUksT0FBTyxJQUFJLFdBQVcsRUFBQztRQUMzQixJQUFHLEdBQUcsSUFBRSxPQUFPLEVBQUM7WUFDWixlQUFlLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLFdBQVcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN2RDtLQUNKO0lBRUQsSUFBRyxlQUFlLEVBQUM7UUFDZixRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztRQUN4RixRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsNERBQTRELENBQUMsQ0FBQztRQUN2SCxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsNERBQTRELENBQUMsQ0FBQztLQUN6SDtTQUFNO1FBQ0gsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QixRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1RCxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMzRCxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztLQUMzRjtBQUVMLENBQUM7QUFFTSxTQUFTLGNBQWM7SUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7SUFFeEIsTUFBTSxHQUFHLEdBQUM7UUFDTixXQUFXLEVBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQXNCLENBQUMsS0FBSztRQUNoRixlQUFlLEVBQUUsV0FBVztLQUMvQjtJQUdELE1BQU0sT0FBTyxHQUFHO1FBQ1osTUFBTSxFQUFDLE1BQU07UUFDYixPQUFPLEVBQUM7WUFDSixjQUFjLEVBQUMsa0JBQWtCO1NBQ3BDO1FBQ0QsSUFBSSxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO0tBQzNCO0lBRUQsS0FBSyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUM7U0FDMUIsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFDLEVBQUUsU0FBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2pDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBQyxFQUFFO1FBQ1YsSUFBRyxJQUFJLEdBQUMsQ0FBQyxFQUFDO1lBQ04sS0FBSyxDQUFDLGtCQUFrQixDQUFDO1NBQzVCO2FBQUk7WUFDRCxLQUFLLENBQUMsaUJBQWlCLENBQUM7U0FDM0I7SUFDTCxDQUFDLENBQUM7SUFFRiw4RUFBOEU7SUFHOUUsK0JBQStCO0lBQy9CLHFFQUFxRTtJQUNyRSxrRUFBa0U7SUFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0lBRTNDLG9EQUFvRDtJQUVwRCxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBRWpCLHdDQUF3QztJQUN4QyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUVwQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDelRpRDtBQUNKO0FBQ0k7QUFLbEQsSUFBSSxZQUFZLEdBQXFDLElBQUksR0FBRyxFQUFFLENBQUM7QUFFeEQsU0FBUyxZQUFZO0lBQ3hCLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtRQUNwRCxhQUFhLEVBQUUsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDckYsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUdELFNBQVMsYUFBYTtJQUNsQixLQUFLLENBQUMsT0FBTyxDQUFDO1NBQ1QsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDbkMsSUFBSSxDQUFDLENBQUMsSUFBWSxFQUFFLEVBQUU7UUFDbkIsS0FBSyxDQUFDLFlBQVksQ0FBQzthQUNkLElBQUksQ0FBQyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN2RCxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNiLE9BQU87UUFDWCxDQUFDLENBQUM7YUFDRCxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNmLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDakQsT0FBTyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDdkIsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztZQUN4QyxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtnQkFDbkIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUU7b0JBQ2hDLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO29CQUNuQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSx3Q0FBd0MsQ0FBQyxDQUFDO29CQUNwRSxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUMxQixHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcscUNBQXFDLENBQUM7b0JBQzFGLEdBQUcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7b0JBQ2pELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2hCLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3ZCO2FBQ0o7UUFDTCxDQUFDLENBQUM7SUFFVixDQUFDLENBQUM7QUFDVixDQUFDO0FBRUQsU0FBUyxRQUFRLENBQUMsVUFBa0I7SUFDaEMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7U0FDdkIsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO1NBQ25ELElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ2IsSUFBSSxNQUFNLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDZCxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztpQkFDdkIsSUFBSSxDQUFDLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO2lCQUN2RCxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDZixJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNqRCxPQUFPLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztnQkFDdkIsT0FBTyxDQUFDLFNBQVMsR0FBRyx3REFBa0IsR0FBRyxzREFBZ0IsR0FBRyx3REFBa0IsQ0FBQztnQkFDL0UsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDckQsU0FBUyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLHFDQUFxQyxDQUFDO2dCQUN4RyxxRUFBcUU7Z0JBQ3JFLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM3QixDQUFDLENBQUM7U0FDVDtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1gsQ0FBQztBQUVELFNBQWUsUUFBUSxDQUFDLE1BQWM7O1FBQ2xDLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNuRCxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7UUFDOUQsTUFBTSxLQUFLLENBQUMscUJBQXFCLEdBQUcsTUFBTSxDQUFDO2FBQ3RDLElBQUksQ0FBQyxDQUFDLHNCQUFzQixFQUFFLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUMvRCxJQUFJLENBQUMsQ0FBQyxZQUF1QixFQUFFLEVBQUU7WUFFOUIsS0FBSyxDQUFDLFlBQVksQ0FBQztpQkFDZCxJQUFJLENBQUMsQ0FBQyxzQkFBc0IsRUFBRSxFQUFFLENBQUMsc0JBQXNCLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQy9ELElBQUksQ0FBQyxDQUFDLFlBQXNCLEVBQUUsRUFBRTtnQkFFN0IsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQXFCLENBQUM7Z0JBQ3pFLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtvQkFDcEQsYUFBYSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQzNDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUN2QixDQUFDLENBQUM7Z0JBQ0YsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFO29CQUN0QixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksT0FBTyxFQUFFO3dCQUNsQixhQUFhLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQzt3QkFDM0MsT0FBTyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7cUJBQ3RCO2dCQUNMLENBQUM7Z0JBQ0QsS0FBSyxJQUFJLE9BQU8sSUFBSSxZQUFZLEVBQUU7b0JBQzlCLElBQUksT0FBTyxDQUFDLFFBQVEsSUFBSSxZQUFZLENBQUMsUUFBUSxFQUFFO3dCQUMzQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ25HO3lCQUFNO3dCQUNILG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDMUY7aUJBQ0o7WUFDTCxDQUFDLENBQUM7UUFDVixDQUFDLENBQUM7UUFFTixTQUFTLG1CQUFtQixDQUFDLFFBQWdCLEVBQUUsTUFBYyxFQUFFLFNBQWlCLEVBQUUsSUFBWTtZQUMxRixJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ25ELElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsZ0NBQWdDLENBQUMsQ0FBQztZQUNoRSxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLHVCQUF1QixDQUFDLENBQUM7WUFDckQsS0FBSyxDQUFDLFNBQVMsR0FBRyx5QkFBeUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2RCxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVDLFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQzlDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsUUFBUSxHQUFHLEdBQUcsR0FBRyxNQUFNLEdBQUcsb0NBQW9DLENBQUM7WUFFckYsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QyxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSx1Q0FBdUMsQ0FBQyxDQUFDO1lBQ3ZFLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0MsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSwrQkFBK0IsQ0FBQyxDQUFDO1lBQzdELEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBRXZCLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztZQUNuRCxTQUFTLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN4QyxTQUFTLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO1lBRTlELE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2pDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDcEMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUVELFNBQVMsa0JBQWtCLENBQUMsUUFBZ0IsRUFBRSxNQUFjLEVBQUUsU0FBaUIsRUFBRSxJQUFZO1lBQ3pGLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFbkQsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QyxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxnQ0FBZ0MsQ0FBQyxDQUFDO1lBQ2hFLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztZQUNyRCxLQUFLLENBQUMsU0FBUyxHQUFHLHlCQUF5QixDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZELElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDOUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxRQUFRLEdBQUcsR0FBRyxHQUFHLE1BQU0sR0FBRyxvQ0FBb0MsQ0FBQztZQUVyRixJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLCtDQUErQyxDQUFDLENBQUM7WUFDL0UsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLHFEQUFxRCxDQUFDLENBQUM7WUFDbkYsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFFdkIsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QyxTQUFTLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1lBQ25ELFNBQVMsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3hDLFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLDRCQUE0QixDQUFDLENBQUM7WUFFOUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDakMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QixPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUNwQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBRUQsU0FBUyxhQUFhLENBQUMsTUFBYyxFQUFFLE1BQWM7WUFDakQsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQXFCLENBQUM7WUFFdEUsTUFBTSxVQUFVLEdBQUc7Z0JBQ2YsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLO2FBQ25CO1lBRUQsTUFBTSxPQUFPLEdBQUc7Z0JBQ1osTUFBTSxFQUFFLE1BQU07Z0JBQ2QsT0FBTyxFQUFFO29CQUNMLGNBQWMsRUFBRSxrQkFBa0I7aUJBQ3JDO2dCQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQzthQUNuQztZQUVELEtBQUssQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO2lCQUNsQixJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDbkMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ1gsSUFBSSxJQUFJLEVBQUU7b0JBQ04sUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUNwQjtZQUNMLENBQUMsQ0FBQztRQUNWLENBQUM7SUFDTCxDQUFDO0NBQUE7QUFFRCxTQUFTLHlCQUF5QixDQUFDLFNBQWlCO0lBQ2hELElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9CLE9BQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ2pDLENBQUM7QUFFTSxTQUFTLGtCQUFrQjtJQUM5QixLQUFLLENBQUMsaUJBQWlCLENBQUM7U0FDbkIsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDbkMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDWCxJQUFJLElBQUksRUFBRTtZQUNOLElBQUksVUFBVSxHQUFHLFdBQVcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDcEQsS0FBSyxDQUFDLGtCQUFrQixHQUFHLFVBQVUsQ0FBQztpQkFDakMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ25DLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNYLElBQUksSUFBSSxFQUFFO2lCQUVUO1lBQ0wsQ0FBQyxDQUFDO1NBQ1Q7SUFDTCxDQUFDLENBQUM7QUFDVixDQUFDO0FBRU0sU0FBUyxzQkFBc0I7SUFDbEMsS0FBSyxDQUFDLGlCQUFpQixDQUFDO1NBQ25CLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ25DLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ1gsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUMsQ0FBQztBQUNWLENBQUM7QUFFTSxTQUFTLGVBQWU7SUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQixLQUFLLENBQUMsbUJBQW1CLENBQUM7U0FDckIsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDbkMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDWCxJQUFJLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFNBQVMsRUFBRTtZQUN4QyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxHQUFHLEVBQWtCLENBQUMsQ0FBQztTQUN4RDtRQUNELEtBQUssSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUN6QixJQUFJLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxTQUFTLEVBQUU7Z0JBQ2hELFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDeEM7WUFDRCxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO2lCQUN2QixJQUFJLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ3JELElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUNkLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7b0JBQy9DLEtBQUssQ0FBQyxZQUFZLEdBQUMsRUFBRSxDQUFDO3lCQUNqQixJQUFJLENBQUMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt5QkFDL0MsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7d0JBQ1gsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFOzRCQUMxQixRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs0QkFDM0QsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQzt5QkFFOUM7b0JBQ0wsQ0FBQyxDQUFDO2lCQUNUO1lBQ0wsQ0FBQyxDQUFDO1NBQ1Q7SUFDTCxDQUFDLENBQUM7QUFDVixDQUFDO0FBRUQsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDblA1QixJQUFJLFFBQVEsR0FBZ0IsRUFBRTtBQUM5QixJQUFJLFFBQVEsR0FBZ0IsRUFBRTtBQUM5QixJQUFJLFFBQVEsR0FBYSxFQUFFO0FBQzNCLElBQUksTUFBTSxHQUFVLEVBQUU7QUFDdEIsSUFBSSxXQUFxQixDQUFDO0FBQzFCLElBQUksZ0JBQXdCLENBQUM7QUFDN0IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBR2QsbURBQW1EO0FBQzVDLFNBQVMsbUJBQW1CO0lBQy9CLFlBQVksRUFBRSxDQUFDO0lBQ2YsV0FBVyxFQUFFLENBQUM7SUFDZCxjQUFjLEVBQUUsQ0FBQztJQUNqQixRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sR0FBQyxHQUFFLEVBQUU7UUFDakQsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDO0FBQ0wsQ0FBQztBQUVELFNBQVMsY0FBYztJQUNuQixJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDNUQsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFeEMsS0FBSyxDQUFDLFNBQVMsR0FBRyxpQ0FBaUMsQ0FBQztJQUVwRCxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxtREFBbUQsQ0FBQyxDQUFDO0lBQy9FLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGlDQUFpQyxDQUFDLENBQUM7SUFDN0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztJQUN6RCxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztJQUN6QyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNyQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO0lBR2pFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RCLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQixLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRWxCLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFM0IsQ0FBQztBQUdELFNBQVMsV0FBVztJQUNoQixLQUFLLENBQUMsYUFBYSxDQUFDO1NBQ2YsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDbkMsSUFBSSxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUU7UUFDakIsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLEtBQUssSUFBSSxJQUFJLElBQUksVUFBVSxFQUFFO1lBQ3pCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkI7UUFDRCxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JELFNBQVMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLEtBQUssSUFBSSxJQUFJLElBQUksUUFBUSxFQUFFO1lBQ3ZCLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEMsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM3QyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXhDLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEMsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QyxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNDLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsd0RBQXdELENBQUMsQ0FBQztZQUNwRixHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO1lBQ3hELE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLDRCQUE0QixDQUFDLENBQUM7WUFDM0QsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUscUNBQXFDLENBQUM7WUFDaEUsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDeEMsS0FBSyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3JCLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3JDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1lBQzdDLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM1QixLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztZQUN2QyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtnQkFFakIsSUFBSSxJQUFJLEdBQVksSUFBSSxDQUFDO2dCQUV6QixJQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO29CQUN0QixRQUFRLEdBQUcsRUFBRSxDQUFDO29CQUNkLEtBQUssR0FBRyxDQUFDLENBQUM7aUJBQ2I7Z0JBQ0QsS0FBSyxJQUFJLE9BQU8sSUFBSSxRQUFRLEVBQUU7b0JBQzFCLElBQUksT0FBTyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUU7d0JBQ3pCLElBQUksR0FBRyxLQUFLLENBQUM7cUJBQ2hCO2lCQUNKO2dCQUNELElBQUksSUFBSSxFQUFFO29CQUNOLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDO29CQUMvQixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUU7b0JBQ3ZCLEtBQUssRUFBRSxDQUFDO2lCQUNYO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzFDLGlCQUFpQixFQUFFLENBQUM7WUFDeEIsQ0FBQztZQUVELEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQixHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xCLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3hCLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDeEI7SUFDTCxDQUFDLENBQUM7QUFDVixDQUFDO0FBRUQsU0FBUyxZQUFZO0lBQ2pCLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztTQUNwQixJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNuQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRTtRQUNqQixRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsS0FBSyxJQUFJLElBQUksSUFBSSxVQUFVLEVBQUU7WUFDekIsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QjtRQUNELElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckQsU0FBUyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDekIsS0FBSyxJQUFJLElBQUksSUFBSSxRQUFRLEVBQUU7WUFDdkIsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hDLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0MsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QyxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hDLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEMsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxtREFBbUQsQ0FBQyxDQUFDO1lBQy9FLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGlDQUFpQyxDQUFDLENBQUM7WUFDN0QsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztZQUMzRCxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztZQUMxQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQztZQUN0QyxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDNUIsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDdkMsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUMxQixHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBQyxxQ0FBcUMsQ0FBQyxDQUFDO1lBQ2hFLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLHlCQUF5QixDQUFDLENBQUM7WUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsS0FBSyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3JCLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3JDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLG1DQUFtQyxDQUFDLENBQUM7WUFDakUsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7Z0JBQ2pCLGdCQUFnQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEdBQUUsZ0JBQWdCLENBQUMsQ0FBQztnQkFDdEQsV0FBVyxHQUFDLElBQUksQ0FBQztnQkFDakIscUJBQXFCLEVBQUU7Z0JBQ3hCLDBEQUEwRDtnQkFDekQsaUJBQWlCO1lBQ3JCLENBQUM7WUFFRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN4QixHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xCLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQixFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pCLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDeEI7SUFDTCxDQUFDLENBQUM7QUFDVixDQUFDO0FBR0QsU0FBUyxxQkFBcUI7SUFDMUIsV0FBVyxDQUFDO0lBQ1osSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FDckMsbUJBQW1CLENBQUMsQ0FBQztJQUN0QixRQUFRLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN4QixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0MsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUV4QyxLQUFLLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDbkMsR0FBRyxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztJQUVqQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxtREFBbUQsQ0FBQyxDQUFDO0lBQy9FLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGlDQUFpQyxDQUFDLENBQUM7SUFDN0QsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztJQUMzRCxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN2QyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBQyxxQ0FBcUMsQ0FBQyxDQUFDO0lBQ2hFLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3hDLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLG1DQUFtQyxDQUFDLENBQUM7SUFHakUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDeEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQixNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFbEIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMzQixDQUFDO0FBR0Qsc0RBQXNEO0FBQ3RELFNBQVMsaUJBQWlCO0lBQ3RCLElBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDN0QsYUFBYSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDdEMsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXRCLEVBQUUsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDNUI7QUFDTCxDQUFDO0FBV0QsU0FBUyxPQUFPO0lBQ1osSUFBSSxhQUFhLEdBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBc0IsQ0FBQyxLQUFLO0lBQ3pGLElBQUksS0FBSyxHQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFbkMsSUFBSSxHQUFHLEdBQWM7UUFDckIsS0FBSyxFQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQXNCLENBQUMsS0FBSztRQUMvRSxXQUFXLEVBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBc0IsQ0FBQyxLQUFLO1FBQ3hGLE9BQU8sRUFBRSxLQUFLO1FBQ2QsV0FBVyxFQUFFLGdCQUFnQjtRQUM3QixXQUFXLEVBQUUsTUFBTTtLQUNmO0lBRUQsSUFBSSxPQUFPLEdBQUU7UUFDVCxNQUFNLEVBQUMsTUFBTTtRQUNiLE9BQU8sRUFBRTtZQUNMLGNBQWMsRUFBRSxrQkFBa0I7U0FDckM7UUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7S0FDNUI7SUFFRCxLQUFLLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQztTQUMzQixJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUMsRUFBRSxTQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDakMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFDLEVBQUUsUUFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3JDLENBQUM7QUFJRCxpRUFBZSxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1UEg7QUFFekIsU0FBUyxTQUFTO0lBQ3JCLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxHQUFHLG9EQUFHLENBQUM7QUFDdEQsQ0FBQztBQUVELGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKMEI7QUFFbkQsSUFBSSxLQUFLLEdBQWMsRUFBRSxDQUFDO0FBQzFCLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztBQUViLFNBQVMsU0FBUyxDQUFDLEdBQVc7SUFDMUIsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUVwQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNoRCxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ25CLE9BQU87U0FDVjtRQUNELElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRCxXQUFXLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN6QyxXQUFXLENBQUMsT0FBTyxHQUFHLDhEQUFXLENBQUM7UUFDbEMsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUM1QyxFQUFFLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxpREFBaUQsQ0FBQyxDQUFDO1FBQ2xGLEVBQUUsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLDBDQUEwQyxDQUFDLENBQUM7UUFDMUUsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztRQUN4QyxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9DLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0MsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztRQUN2RCxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3hELE9BQU8sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFLEdBQUcsdUJBQXVCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFDLENBQUM7UUFDcEUsT0FBTyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUUsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM5QixXQUFXLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsb0NBQW9DLENBQUM7UUFDckwsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUN4QjtBQUVMLENBQUM7QUFFTSxTQUFTLFdBQVc7SUFDdkIsS0FBSyxDQUFDLE9BQU8sQ0FBQztTQUNULElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ25DLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ1gsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLEtBQUssSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO1lBQ3RCLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdkI7UUFDRCxnQkFBZ0IsRUFBRSxDQUFDO1FBQ25CLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixDQUFDLENBQUMsQ0FBQztBQUNYLENBQUM7QUFFRDs7Ozs7O0VBTUU7QUFFRixTQUFTLGdCQUFnQjtJQUNyQixRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDckQsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ25ELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDcEMsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDUixFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1lBQzdDLEVBQUUsQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDSCxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztTQUN6QztRQUNELElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDdkMsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7WUFDZixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUMzRCxLQUFLLElBQUksS0FBSyxJQUFJLEtBQUssRUFBRTtnQkFDckIsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBQ3pDLEtBQUssQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDekM7WUFDRCxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1lBQzdDLEVBQUUsQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3hDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDO1FBQ0YsR0FBRyxDQUFDLFNBQVMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQixRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUN6RDtBQUdMLENBQUM7QUFFRCxTQUFTLFlBQVksQ0FBQyxFQUFVO0lBQzVCLE1BQU0sT0FBTyxHQUFHO1FBQ1osTUFBTSxFQUFFLE1BQU07UUFDZCxPQUFPLEVBQUU7WUFDTCxjQUFjLEVBQUUsa0JBQWtCO1NBQ3JDO1FBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO0tBQzNCO0lBQ0QsS0FBSyxDQUFDLFFBQVEsRUFBRTtRQUNaLE1BQU0sRUFBRSxNQUFNO1FBQ2QsT0FBTyxFQUFFO1lBQ0wsY0FBYyxFQUFFLGtCQUFrQjtTQUNyQztRQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztLQUMzQixDQUFDO1NBQ0csSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDbkMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsRixDQUFDO0FBRUQsU0FBUyx1QkFBdUIsQ0FBQyxFQUFVO0lBQ3ZDLE1BQU0sT0FBTyxHQUFHO1FBQ1osTUFBTSxFQUFFLFFBQVE7UUFDaEIsT0FBTyxFQUFFO1lBQ0wsY0FBYyxFQUFFLGtCQUFrQjtTQUNyQztRQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztLQUMzQjtJQUNELEtBQUssQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO1NBQ2xCLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ25DLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFckYsQ0FBQztBQUVELGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SEc7QUFFZ0I7QUFDaUI7QUFFSDtBQUNHO0FBQ2I7QUFDRjtBQUVoRCxJQUFJLElBQUksR0FBZ0IsRUFBRSxDQUFDO0FBSTNCLDZEQUE2RDtBQUU3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWlKRztBQUdJLFNBQVMsVUFBVTtJQUN0QixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsa0RBQUksQ0FBQztJQUd0QixRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtRQUNyRCxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsR0FBRyw2REFBTyxDQUFDO1FBQ3BELDREQUFVLEVBQUUsQ0FBQztJQUNqQixDQUFDLENBQUM7SUFFRixRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7UUFDakQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEdBQUcsdUVBQVksQ0FBQztRQUN6RCxzRUFBbUIsRUFBRSxDQUFDO0lBQzFCLENBQUMsQ0FBQztJQUVGLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFO1FBQ3hELElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFxQixDQUFDO1FBQ3pFLElBQUcsT0FBTyxDQUFDLEtBQUssSUFBSSxFQUFFLEVBQUM7WUFDbkIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEdBQUcsNkRBQU8sQ0FBQztZQUNwRCw0REFBVSxFQUFFLENBQUM7WUFDYiwrREFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQztJQUNMLENBQUM7SUFFRCxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQ3JELElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFxQixDQUFDO1FBQ3pFLElBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLEtBQUssSUFBRyxFQUFFLEVBQUM7WUFDdEMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEdBQUcsNkRBQU8sQ0FBQztZQUNwRCw0REFBVSxFQUFFLENBQUM7WUFDYiwrREFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQztJQUVMLENBQUM7SUFFRCxJQUFJLEdBQUMsRUFBRSxDQUFDO0lBQ1IsS0FBSyxDQUFDLFlBQVksQ0FBQztTQUNsQixJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNuQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUNYLEtBQUksSUFBSSxDQUFDLElBQUksSUFBSSxFQUFDO1lBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoQjtRQUNELGtCQUFrQixFQUFFLENBQUM7SUFDekIsQ0FBQyxDQUFDO0FBQ0YsQ0FBQztBQUdMLFNBQVMsa0JBQWtCO0lBRTNCLEtBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUM7UUFDeEQsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzVELElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFakQsSUFBRyxDQUFDLElBQUksQ0FBQyxFQUFDO1lBQ04sWUFBWSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztTQUM5RDthQUFJO1lBQ0QsWUFBWSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7U0FDbkQ7UUFDTCxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RELEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUNsRCxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNyQyxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzNDLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsNENBQTRDLENBQUMsQ0FBQztRQUMxRSxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQ3pDLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDeEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNyRCxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHO1NBQzNEO1FBQ0QsSUFBSSxDQUFDLFNBQVMsSUFBSSxNQUFNO2NBQ3RCLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxHQUFHO2NBQ3ZDLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsTUFBTTtjQUN6RCxjQUFjLENBQUM7UUFDaEIsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QyxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLFFBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLHVDQUF1QyxDQUFDLENBQUM7UUFDeEUsUUFBUSxDQUFDLEdBQUcsR0FBRyx3QkFBd0IsQ0FBQztRQUN4QyxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVCLFFBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLDZFQUE2RSxDQUFDLENBQUM7UUFDOUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2QixLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtZQUNqQixRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsR0FBRyw4REFBUSxDQUFDO1lBQ3JELDZEQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsQ0FBQztRQUVELFFBQVEsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDM0IsWUFBWSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QixNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QixPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JCLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDckM7QUFDTCxDQUFDO0FBQ0QsaUVBQWUsVUFBVSxFQUFDO0FBRTFCOzs7Ozs7O0VBT0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqUjhCO0FBQ087QUFDWTtBQUNZO0FBQ0U7QUFDdkI7QUFFSDtBQUVGO0FBQ29DO0FBSWxFLFNBQVMsV0FBVztJQUN2QixJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsbURBQUssQ0FBQztJQUMzQixRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzRCxjQUFjLEVBQUUsQ0FBQztJQUNqQixRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7SUFDMUQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDO0FBQ3ZFLENBQUM7QUFFRCxTQUFTLGVBQWU7SUFDcEIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLEdBQUcseUVBQWEsQ0FBQztJQUNqRSxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFNBQVMsR0FBRywrRUFBUyxDQUFDO0lBQy9ELFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztJQUM3RCxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7SUFDaEUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDO0lBQzdELFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQztJQUNoRSxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQztJQUNqRSxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7SUFDOUQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7SUFDakUsUUFBUSxDQUFDLGNBQWMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7QUFDN0UsQ0FBQztBQUVELFNBQVMsY0FBYztJQUNuQixRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsR0FBRyx5REFBSyxDQUFDO0lBQ3pELFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUyxHQUFHLCtEQUFXLENBQUM7SUFDakUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDO0lBQ2pFLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztJQUN6RCxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDeEQsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLE9BQU8sRUFBRTtZQUNsQixVQUFVLEVBQUUsQ0FBQztTQUNoQjtJQUNMLENBQUM7SUFDRCxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDeEQsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLE9BQU8sRUFBRTtZQUNsQixVQUFVLEVBQUUsQ0FBQztTQUNoQjtJQUNMLENBQUM7QUFDTCxDQUFDO0FBRUQsU0FBZSxlQUFlOztRQUMxQixJQUFJLE1BQU0sR0FBWSxNQUFNLFdBQVcsRUFBRSxDQUFDO1FBQzFDLElBQUksTUFBTSxFQUFFO1lBQ1IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLEdBQUcsMkRBQU0sQ0FBQztZQUMxRCxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDeEQsc0RBQVUsRUFBRSxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQztDQUFBO0FBRUQsU0FBUyxXQUFXO0lBQ2hCLE1BQU0sSUFBSSxHQUFHO1FBQ1QsUUFBUSxFQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQXNCLENBQUMsS0FBSztRQUMvRSxRQUFRLEVBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBc0IsQ0FBQyxLQUFLO1FBQy9FLElBQUksRUFBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBc0IsQ0FBQyxLQUFLO1FBQ3ZFLE9BQU8sRUFBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBc0IsQ0FBQyxLQUFLO1FBQzdFLEtBQUssRUFBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBc0IsQ0FBQyxLQUFLO0tBQzVFLENBQUM7SUFFRixNQUFNLE9BQU8sR0FBRztRQUNaLE1BQU0sRUFBRSxNQUFNO1FBQ2QsT0FBTyxFQUFFO1lBQ0wsY0FBYyxFQUFFLGtCQUFrQjtTQUNyQztRQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztLQUM3QjtJQUVELEtBQUssQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUN0RSxJQUFJLElBQUksRUFBRTtZQUNOLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsU0FBUyxHQUFHLDBCQUEwQixDQUFDO1lBQy9FLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUMzRTthQUFNO1lBQ0gsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxTQUFTLEdBQUcsZ0NBQWdDLENBQUM7WUFDckYsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDdEU7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUM7QUFFRCxTQUFTLFVBQVU7SUFDZixNQUFNLEtBQUssR0FBRztRQUNWLFFBQVEsRUFBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFzQixDQUFDLEtBQUs7UUFDL0UsUUFBUSxFQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQXNCLENBQUMsS0FBSztLQUNsRjtJQUVELE1BQU0sT0FBTyxHQUFHO1FBQ1osTUFBTSxFQUFFLE1BQU07UUFDZCxPQUFPLEVBQUU7WUFDTCxjQUFjLEVBQUUsa0JBQWtCO1NBQ3JDO1FBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO0tBQzlCLENBQUM7SUFDRixJQUFJLE1BQU0sR0FBUSxLQUFLLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQztTQUNyQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNuQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUNYLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxHQUFHLHVCQUF1QixDQUFDO1lBQzNFLGtEQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzdCLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNyRSxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDeEUsc0RBQVUsRUFBRSxDQUFDO1lBQ2IsOERBQWtCLEVBQUUsQ0FBQztTQUN4QjthQUFNO1lBQ0gsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLEdBQUcsK0JBQStCLENBQUM7U0FDdEY7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNYLENBQUM7QUFFRCxTQUFlLFdBQVc7O1FBQ3RCLGtFQUFzQixFQUFFLENBQUM7UUFDekIsSUFBSSxhQUFhLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQzthQUMvQixJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNuQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNYLElBQUksSUFBSSxFQUFFO2dCQUNOLGtEQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3BCLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNoRSxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUN0RTtZQUNELE9BQU8sSUFBSTtRQUNmLENBQUMsQ0FBQyxDQUFDO1FBQ1AsT0FBTyxhQUFhLENBQUM7SUFDekIsQ0FBQztDQUFBO0FBRUQsU0FBUyxZQUFZO0lBQ2pCLElBQUksUUFBUSxHQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQXNCLENBQUMsS0FBSyxDQUFDO0lBQ3JGLElBQUksUUFBUSxHQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQXNCLENBQUMsS0FBSyxDQUFDO0lBQ3JGLElBQUksSUFBSSxHQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFzQixDQUFDLEtBQUssQ0FBQztJQUM3RSxJQUFJLE9BQU8sR0FBSSxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBc0IsQ0FBQyxLQUFLLENBQUM7SUFDbkYsSUFBSSxLQUFLLEdBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQXNCLENBQUMsS0FBSyxDQUFDO0lBQy9FLElBQUksZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyx3QkFBd0IsQ0FBcUIsQ0FBQztJQUM3RixnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRTNDLElBQUksUUFBUSxJQUFJLEVBQUUsSUFBSSxRQUFRLElBQUksRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFLElBQUksT0FBTyxJQUFJLEVBQUUsSUFBSSxLQUFLLElBQUksRUFBRSxFQUFFO1FBQy9FLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFzQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDN0UsSUFBSSxRQUFRLElBQUksZ0JBQWdCLENBQUMsS0FBSyxFQUFFO1lBQ3BDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztTQUNoRTthQUFNO1lBQ0gsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1NBQ2xFO0tBQ0o7U0FBTTtRQUNILElBQUksUUFBUSxJQUFJLGdCQUFnQixDQUFDLEtBQUssRUFBRTtZQUNwQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUM7U0FDaEU7YUFBTTtZQUNILGdCQUFnQixDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztZQUMvRCxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN0RTtLQUNKO0FBRUwsQ0FBQztBQUlELGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwS0s7QUFDUztBQUNLO0FBQ2dCO0FBQ2xCO0FBR047QUFDYztBQUNEO0FBQ2dCO0FBQ1I7QUFDTjtBQUNPO0FBQ0g7QUFDSztBQUNOO0FBRWpELFNBQVMsU0FBUztJQUVyQixRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsR0FBRyxvREFBRyxDQUFDO0lBQ2xELHdEQUFXLEVBQUUsQ0FBQztJQUNkLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtRQUMzQyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDL0Msc0RBQVUsRUFBRSxDQUFDO0lBRWpCLENBQUMsQ0FBQztJQUVGLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxHQUFDLEdBQUUsRUFBRTtRQUMzQyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsR0FBQyxzRUFBVyxDQUFDO1FBQ3RELHFFQUFjLEVBQUUsQ0FBQztJQUNuQixDQUFDLENBQUM7SUFFRixRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7UUFDakQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEdBQUcsNkRBQU8sQ0FBQztRQUNwRCw0REFBVSxFQUFFLENBQUM7SUFDakIsQ0FBQyxDQUFDO0lBQ0YsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFO1FBQ25ELFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxHQUFHLHdFQUFZLENBQUM7UUFDekQsdUVBQW1CLEVBQUUsQ0FBQztJQUMxQixDQUFDLENBQUM7SUFDRixRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7UUFDcEQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEdBQUcscUVBQWUsQ0FBQztRQUM1RCxxRUFBVyxFQUFFLENBQUM7SUFDbEIsQ0FBQyxDQUFDO0lBQ0YsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFO1FBQ2pELFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxHQUFHLDJFQUFjLENBQUM7UUFDM0QsMEVBQVcsRUFBRSxDQUFDO0lBQ2xCLENBQUMsQ0FBQztJQUNGLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtRQUM5QyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsR0FBRyxtRUFBTyxDQUFDO1FBQ3BELGtFQUFXLEVBQUUsQ0FBQztJQUNsQixDQUFDLENBQUM7SUFDRixLQUFLLENBQUMsY0FBYyxDQUFDO1NBQ3BCLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ25DLElBQUksQ0FBQyxDQUFDLElBQUksRUFBQyxFQUFFO1FBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pCLENBQUMsQ0FBQztBQUNOLENBQUM7QUFFTSxTQUFTLE1BQU0sQ0FBQyxXQUFvQjtJQUN2QyxNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdELE1BQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNuRSxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25ELE1BQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNuRSxNQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakUsTUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxRCxJQUFHLFdBQVcsSUFBRSxPQUFPLEVBQUM7UUFDcEIsY0FBYyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2hELGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QyxTQUFTLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN6QyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7S0FDM0M7U0FBSyxJQUFHLFdBQVcsSUFBRSxNQUFNLEVBQUM7UUFDekIsY0FBYyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDOUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDakQsU0FBUyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDekMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVDLGNBQWMsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDO0tBQzNDO1NBQUk7UUFDRCxjQUFjLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM5QyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2hELGlCQUFpQixDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDakQsU0FBUyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2pELGNBQWMsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQ2pEO0FBQ0wsQ0FBQztBQUlELGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Rlc7QUFHcEMsSUFBSSxJQUFJLENBQUM7QUFDVCxJQUFJLFFBQVEsQ0FBQztBQUNiLElBQUksU0FBUyxDQUFDO0FBRVAsU0FBUyxXQUFXO0lBQ3ZCLEtBQUssQ0FBQyxjQUFjLENBQUM7U0FDcEIsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDbkMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDWCxJQUFJLElBQUksSUFBSSxPQUFPLEVBQUU7WUFDakIsSUFBSSxHQUFHLE9BQU8sQ0FBQztTQUNsQjthQUFNLElBQUksSUFBSSxJQUFJLE1BQU0sRUFBRTtZQUN2QixJQUFJLEdBQUcsTUFBTTtTQUNoQjthQUFNO1lBQ0gsSUFBSSxHQUFHLE9BQU87U0FDakI7UUFFRCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcscURBQU8sQ0FBQztRQUN6QixhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDL0IsQ0FBQyxDQUFDO0FBRU4sQ0FBQztBQUVELFNBQVMsYUFBYSxDQUFDLElBQVc7SUFFOUIsSUFBSSxJQUFJLElBQUksT0FBTyxFQUFFO1FBQ2pCLGdCQUFnQixFQUFFLENBQUM7S0FFdEI7U0FBTSxJQUFHLElBQUksSUFBSSxNQUFNLEVBQUU7UUFDdEIsZUFBZSxFQUFFLENBQUM7S0FDckI7U0FBSTtLQUVKO0FBRUwsQ0FBQztBQUVELFNBQVMsZ0JBQWdCO0lBRXJCLEtBQUssQ0FBQyxZQUFZLENBQUM7U0FDbEIsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDbkMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDWCxTQUFTLEdBQUMsSUFBSSxDQUFDO1FBQ2YsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3BELEVBQUUsQ0FBQyxTQUFTLEdBQUMsNEJBQTRCLEdBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztRQUM3RCxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbEQsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxFQUFFLENBQUMsU0FBUztZQUNYLHVCQUF1QixHQUFDLFNBQVMsQ0FBQyxRQUFRO2tCQUN6QyxtQkFBbUIsR0FBQyxTQUFTLENBQUMsS0FBSztrQkFDbkMsbUJBQW1CLEdBQUMsU0FBUyxDQUFDLElBQUk7a0JBQ2xDLG1CQUFtQixHQUFDLFNBQVMsQ0FBQyxPQUFPO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBRWYsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3pELElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsT0FBTyxHQUFDLEdBQUUsRUFBRTtZQUNiLElBQUksR0FBRyxHQUFHO2dCQUNOLFVBQVUsRUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBc0IsQ0FBQyxLQUFLO2dCQUM1RSxPQUFPLEVBQUcsRUFBRTthQUNmO1lBRUQsSUFBSSxPQUFPLEdBQUc7Z0JBQ1YsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsT0FBTyxFQUFFO29CQUNMLGNBQWMsRUFBRSxrQkFBa0I7aUJBQ3JDO2dCQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQzthQUM1QjtZQUVELEtBQUssQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDO2lCQUM1QixJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUMsRUFBRSxTQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ2pDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBQyxFQUFFO2dCQUVWLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pCLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFzQixDQUFDLEtBQUssR0FBQyxFQUFFLENBQUM7Z0JBQ25FLFdBQVcsRUFBRTtZQUNqQixDQUFDLENBQUM7UUFFTixDQUFDO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBQyxpQkFBaUI7UUFDaEMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFFcEIsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzdELElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsT0FBTyxHQUFDLEdBQUUsRUFBRTtZQUNiLElBQUksR0FBRyxHQUFHO2dCQUNOLFVBQVUsRUFBRyxFQUFFO2dCQUNmLE9BQU8sRUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBc0IsQ0FBQyxLQUFLO2FBQ3pFO1lBRUQsSUFBSSxPQUFPLEdBQUc7Z0JBQ1YsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsT0FBTyxFQUFFO29CQUNMLGNBQWMsRUFBRSxrQkFBa0I7aUJBQ3JDO2dCQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQzthQUM1QjtZQUVELEtBQUssQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDO2lCQUM1QixJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUMsRUFBRSxTQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ2pDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBQyxFQUFFO2dCQUVWLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pCLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFzQixDQUFDLEtBQUssR0FBQyxFQUFFLENBQUM7Z0JBQ2hFLFdBQVcsRUFBRTtZQUVqQixDQUFDLENBQUM7UUFDTixDQUFDO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBQyxjQUFjO1FBQzdCLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFckIsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDO1FBQzdDLElBQUksQ0FBQyxTQUFTLEdBQUMsaUJBQWlCO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUUsR0FBRSxFQUFFO1lBQ2QsSUFBSSxHQUFHLEdBQUc7Z0JBQ04sYUFBYSxFQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFzQixDQUFDLEtBQUs7Z0JBQ2xGLGFBQWEsRUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBc0IsQ0FBQyxLQUFLO2FBQ3JGO1lBRUQsSUFBSSxPQUFPLEdBQUc7Z0JBQ1YsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsT0FBTyxFQUFFO29CQUNMLGNBQWMsRUFBRSxrQkFBa0I7aUJBQ3JDO2dCQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQzthQUM1QjtZQUVELEtBQUssQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDO2lCQUMzQixJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUMsRUFBRSxTQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ2pDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBQyxFQUFFO2dCQUVWLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pCLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFzQixDQUFDLEtBQUssR0FBQyxFQUFFLENBQUM7Z0JBQ3JFLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFzQixDQUFDLEtBQUssR0FBQyxFQUFFLENBQUM7WUFFMUUsQ0FBQyxDQUFDO1FBQ04sQ0FBQztRQUNELEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFcEIsQ0FBQyxDQUFDO0FBRU4sQ0FBQztBQUVELFNBQVMsZUFBZTtJQUNwQixLQUFLLENBQUMsV0FBVyxDQUFDO1NBQ2pCLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ25DLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ1gsUUFBUSxHQUFDLElBQUksQ0FBQztRQUNkLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNwRCxFQUFFLENBQUMsU0FBUyxHQUFDLG9CQUFvQixHQUFFLFFBQVEsQ0FBQyxRQUFRLEdBQUcsR0FBRyxHQUFFLFFBQVEsQ0FBQyxNQUFNLEdBQUUscUNBQXFDLENBQUM7UUFDbkgsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2xELElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsRUFBRSxDQUFDLFNBQVM7WUFDWix1QkFBdUIsR0FBQyxRQUFRLENBQUMsUUFBUTtrQkFDdkMsbUJBQW1CLEdBQUMsUUFBUSxDQUFDLEtBQUs7a0JBQ2xDLGtCQUFrQixHQUFDLFFBQVEsQ0FBQyxJQUFJO2tCQUNoQyxtQkFBbUIsR0FBQyxRQUFRLENBQUMsT0FBTztRQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUVmLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN6RCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE9BQU8sR0FBQyxHQUFFLEVBQUU7WUFFYixJQUFJLEdBQUcsR0FBRztnQkFDTixVQUFVLEVBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQXNCLENBQUMsS0FBSztnQkFDNUUsT0FBTyxFQUFHLEVBQUU7YUFDZjtZQUVELElBQUksT0FBTyxHQUFHO2dCQUNWLE1BQU0sRUFBRSxLQUFLO2dCQUNiLE9BQU8sRUFBRTtvQkFDTCxjQUFjLEVBQUUsa0JBQWtCO2lCQUNyQztnQkFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7YUFDNUI7WUFFRCxLQUFLLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQztpQkFDM0IsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFDLEVBQUUsU0FBUSxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNqQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUMsRUFBRTtnQkFFVixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqQixRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBc0IsQ0FBQyxLQUFLLEdBQUMsRUFBRSxDQUFDO2dCQUNuRSxXQUFXLEVBQUU7WUFDakIsQ0FBQyxDQUFDO1FBQ04sQ0FBQztRQUVELElBQUksQ0FBQyxTQUFTLEdBQUMsaUJBQWlCO1FBQ2hDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBRXBCLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM3RCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLE9BQU8sR0FBQyxHQUFFLEVBQUU7WUFFYixJQUFJLEdBQUcsR0FBRztnQkFDTixVQUFVLEVBQUcsRUFBRTtnQkFDZixPQUFPLEVBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQXNCLENBQUMsS0FBSzthQUN6RTtZQUVELElBQUksT0FBTyxHQUFHO2dCQUNWLE1BQU0sRUFBRSxLQUFLO2dCQUNiLE9BQU8sRUFBRTtvQkFDTCxjQUFjLEVBQUUsa0JBQWtCO2lCQUNyQztnQkFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7YUFDNUI7WUFFRCxLQUFLLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQztpQkFDM0IsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFDLEVBQUUsU0FBUSxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNqQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUMsRUFBRTtnQkFFVixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqQixRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBc0IsQ0FBQyxLQUFLLEdBQUMsRUFBRSxDQUFDO2dCQUMvRCxXQUFXLEVBQUUsQ0FBQztZQUNuQixDQUFDLENBQUM7UUFDTixDQUFDO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBQyxjQUFjO1FBQzdCLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFekIsQ0FBQyxDQUFDO0lBRUYsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDO0lBQzdDLElBQUksQ0FBQyxTQUFTLEdBQUMsaUJBQWlCO0lBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUUsR0FBRSxFQUFFO1FBQ2QsSUFBSSxHQUFHLEdBQUc7WUFDTixhQUFhLEVBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQXNCLENBQUMsS0FBSztZQUNsRixhQUFhLEVBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQXNCLENBQUMsS0FBSztTQUNyRjtRQUVELElBQUksT0FBTyxHQUFHO1lBQ1YsTUFBTSxFQUFFLEtBQUs7WUFDYixPQUFPLEVBQUU7Z0JBQ0wsY0FBYyxFQUFFLGtCQUFrQjthQUNyQztZQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztTQUM1QjtRQUVELEtBQUssQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDO2FBQzFCLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBQyxFQUFFLFNBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNqQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUMsRUFBRTtZQUVWLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQXNCLENBQUMsS0FBSyxHQUFDLEVBQUUsQ0FBQztZQUNyRSxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBc0IsQ0FBQyxLQUFLLEdBQUMsRUFBRSxDQUFDO1FBRTFFLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDRCxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXBCLENBQUM7QUFJRCxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN1F1QjtBQUVsRCxJQUFJLEtBQWEsQ0FBQztBQUVYLFNBQVMsbUJBQW1CO0lBQy9CLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxHQUFHLDREQUFjLENBQUM7SUFDM0QsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQixtQkFBbUIsRUFBRSxDQUFDO0lBQ3RCLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztJQUM3RCxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7SUFDakUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUM7QUFDekUsQ0FBQztBQUVELFNBQVMsaUJBQWlCO0lBQ3RCLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDckQsU0FBUyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDekIsS0FBSyxDQUFDLFFBQVEsQ0FBQztTQUNWLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ25DLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ1gsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEM7Ozs7Ozs7Ozs7Ozs7OztjQWVFO1lBQ0YsSUFBSSxPQUFPLEdBQUc7O3VGQUV5RCxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUs7NERBQ3JELENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSzttQkFDL0Q7WUFDSCxTQUFTLENBQUMsU0FBUyxJQUFJLE9BQU8sQ0FBQztTQUNsQztJQUNMLENBQUMsQ0FBQztBQUNWLENBQUM7QUFFRCxTQUFTLG1CQUFtQjtJQUN4QixJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3pELFdBQVcsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO0lBQ25DLEtBQUssQ0FBQyxVQUFVLENBQUM7U0FDWixJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNuQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUNYLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDUixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO2dCQUMxRCxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUN0QyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO2dCQUNoRCxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDcEMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM3QyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUUsRUFBRSxHQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUMsQ0FBQztnQkFDakQsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztnQkFDaEQsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO2dCQUN0QyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuQixHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDekIsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDeEI7Ozs7Ozs7a0JBT0U7YUFDTDtpQkFBTTtnQkFDSCxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO2dCQUMxRCxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUN0QyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO2dCQUNoRCxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDcEMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM3QyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUUsRUFBRSxHQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUMsQ0FBQztnQkFDakQsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztnQkFDaEQsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO2dCQUN0QyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuQixHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDekIsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDekI7Ozs7Ozs7bUJBT0c7YUFDTDtTQUNKO0lBQ0wsQ0FBQyxDQUFDO0FBQ1YsQ0FBQztBQUVELFNBQVMsV0FBVztJQUNoQixJQUFJLFFBQVEsR0FBSSxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBc0IsQ0FBQyxLQUFLLENBQUM7SUFDL0UsSUFBSSxPQUFPLEdBQUc7UUFDVixNQUFNLEVBQUUsTUFBTTtRQUNkLE9BQU8sRUFBRTtZQUNMLGNBQWMsRUFBRSxrQkFBa0I7U0FDckM7UUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7S0FDakM7SUFDRCxLQUFLLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQztTQUNuQixJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNuQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUNYLElBQUksSUFBSSxFQUFFO1lBQ0wsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQXNCLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNyRSxpQkFBaUIsRUFBRSxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQyxDQUFDO0FBQ1YsQ0FBQztBQUdELFNBQVMsYUFBYTtJQUNsQixJQUFJLFVBQVUsR0FBSSxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBc0IsQ0FBQyxLQUFLLENBQUM7SUFDbkYsSUFBSSxPQUFPLEdBQUc7UUFDVixNQUFNLEVBQUUsTUFBTTtRQUNkLE9BQU8sRUFBRTtZQUNMLGNBQWMsRUFBRSxrQkFBa0I7U0FDckM7UUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7S0FDbkM7SUFDRCxLQUFLLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQztTQUNyQixJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNuQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUNYLElBQUksSUFBSSxFQUFFO1lBQ0wsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQXNCLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUN2RSxtQkFBbUIsRUFBRSxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQyxDQUFDO0FBQ1YsQ0FBQztBQUVELFNBQVMsZUFBZTtJQUVwQixJQUFJLE1BQU0sR0FBSSxRQUFRLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUF3QyxDQUFDO0lBQ3BHLElBQUksYUFBYSxHQUFJLEVBQUUsQ0FBQztJQUN4QixLQUFLLElBQUksS0FBSyxJQUFJLE1BQU0sRUFBRTtRQUN0QixJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDZixhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQztLQUNKO0lBRUQsSUFBSSxZQUFZLEdBQUc7UUFDZixJQUFJLEVBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQXNCLENBQUMsS0FBSztRQUNuRSxLQUFLLEVBQUUsYUFBYTtRQUNwQixJQUFJLEVBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQXNCLENBQUMsS0FBSztRQUNuRSxPQUFPLEVBQUUsS0FBSztRQUNkLEtBQUssRUFBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBc0IsQ0FBQyxLQUFLO0tBQ3hFLENBQUM7SUFFRixJQUFJLE9BQU8sR0FBRztRQUNWLE1BQU0sRUFBRSxNQUFNO1FBQ2QsT0FBTyxFQUFFO1lBQ0wsY0FBYyxFQUFFLGtCQUFrQjtTQUNyQztRQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztLQUNyQztJQUVELEtBQUssQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDO1NBQzVCLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBQyxFQUFFLFNBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNqQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUMsRUFBRTtRQUNWLElBQUcsSUFBSSxFQUFDO1lBQ0osS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7U0FDaEM7SUFDTCxDQUFDLENBQUM7QUFFTixDQUFDO0FBRUQsU0FBUyxRQUFRLENBQUMsS0FBYTtJQUMzQixLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ2xCLENBQUM7QUFFRCxpRUFBZSxtQkFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFMa0I7QUFDUTtBQUU1RCxJQUFJLFFBQVEsR0FBZ0IsRUFBRSxDQUFDO0FBQy9CLElBQUksZ0JBQWdCLEdBQWdCLEVBQUU7QUFDdEMsSUFBSSxNQUFNLEdBQWEsRUFBRTtBQUN6QixJQUFJLEtBQUssR0FBYSxFQUFFO0FBQ3hCLElBQUksUUFBUSxHQUFXLENBQUMsQ0FBQztBQUN6QixJQUFJLElBQVksQ0FBQztBQUVWLFNBQVMsY0FBYztJQUMxQixLQUFLLENBQUMsY0FBYyxDQUFDO1NBQ2hCLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ25DLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ1gsSUFBSSxJQUFJLElBQUksT0FBTyxFQUFFO1lBQ2pCLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xFLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsT0FBTyxHQUFHLHdEQUFtQixDQUFDO1lBQ3RFLElBQUksR0FBRyxPQUFPLENBQUM7U0FDbEI7YUFBTSxJQUFJLElBQUksSUFBSSxNQUFNLEVBQUU7WUFDdkIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZFLElBQUksR0FBRyxNQUFNO1NBQ2hCO2FBQU07WUFDSCxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDdkUsSUFBSSxHQUFHLE9BQU87U0FDakI7UUFDRCxLQUFLLENBQUMsYUFBYSxDQUFDO2FBQ2YsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2FBQ3JDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ1gsUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNkLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO2dCQUNuQixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3ZCO1lBQ0Qsb0JBQW9CLEVBQUUsQ0FBQztZQUN2QixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDYixpQkFBaUIsRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQztJQUNWLENBQUMsQ0FBQztBQUNWLENBQUM7QUFJRCxTQUFTLFdBQVc7SUFFaEIsS0FBSyxDQUFDLGFBQWEsQ0FBQztTQUNmLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUNyQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUNYLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUNuQixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQyxDQUFDO0FBQ1YsQ0FBQztBQUlELFNBQVMsU0FBUyxDQUFDLENBQVM7SUFDeEIsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzFELE9BQU8sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQztJQUMvQixJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsS0FBSyxLQUFLLEVBQUUsS0FBSyxJQUFJLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUNoQyxJQUFJLEtBQUssSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQzFCLE9BQU87U0FDVjtRQUNELElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQ3ZDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFDL0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztRQUMvRCxHQUFHLENBQUMsV0FBVyxHQUFHLEdBQUcsRUFBRTtZQUNuQixHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO1FBQ25FLENBQUM7UUFDRCxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsRUFBRTtZQUNsQixHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO1FBQ25FLENBQUM7UUFJRCxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztRQUN2QyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDdkMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDbEIsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDbkIsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUMxQixLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtZQUNqQixpRUFBdUIsQ0FBQyxJQUFJLENBQUM7UUFDakMsQ0FBQztRQUNELFNBQVMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBRTVELEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdCLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakQsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7UUFDM0IsSUFBSSxJQUFJLElBQUksTUFBTSxFQUFFO1lBQ2hCLFNBQVMsQ0FBQyxTQUFTLEdBQUcsMEJBQTBCO1lBQ2hELFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztZQUN2QyxTQUFTLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtnQkFFckIsS0FBSyxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7cUJBQ3BCLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztxQkFDckMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7b0JBQ1gsSUFBSSxJQUFJLEVBQUU7d0JBQ04sS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7cUJBQ2pDO3lCQUFNO3dCQUNILEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO3FCQUN4QztnQkFDTCxDQUFDLENBQUMsQ0FBQztZQUNYLENBQUM7WUFDRCxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3pCO1FBQ0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUN2QjtBQUNMLENBQUM7QUFHRCxTQUFTLG9CQUFvQjtJQUN6QixJQUFJLElBQUksR0FBVyxRQUFRLENBQUMsTUFBTTtJQUNsQyxJQUFJLElBQUksR0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsQ0FBQztJQUM5QyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLEtBQUssQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDNUIsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDUixFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1lBQzdDLEVBQUUsQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDSCxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztTQUN6QztRQUNELElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDdkMsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7WUFDZixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUN2RCxLQUFLLElBQUksS0FBSyxJQUFJLEtBQUssRUFBRTtnQkFDckIsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBQ3pDLEtBQUssQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDekM7WUFDRCxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1lBQzdDLEVBQUUsQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3hDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUM7UUFDRixHQUFHLENBQUMsU0FBUyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUN6QjtBQUNMLENBQUM7QUFNRCxTQUFTLFlBQVk7SUFDakIsQ0FBQztJQUNELE1BQU0sR0FBRyxFQUFFO0lBQ1gsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDdEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQy9DLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUNoRCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUN2QyxJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUMvQyxJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QyxFQUFFLENBQUMsRUFBRSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNuQyxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMzQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztnQkFDM0MsR0FBRyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDM0MsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7b0JBQ2YsaUJBQWlCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUM3QixDQUFDO2dCQUNELEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ2QsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNsQjtTQUNKO0tBQ0o7QUFDTCxDQUFDO0FBR0QsU0FBUyxXQUFXO0lBQ2hCLEtBQUssR0FBRyxFQUFFO0lBQ1YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDdEMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUNyQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDNUIsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM5QyxJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDOUIsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztZQUMzQyxHQUFHLENBQUMsU0FBUyxHQUFHLEVBQUUsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3RDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFO2dCQUNmLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFbkMsQ0FBQztZQUNELEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZCxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2xCO0tBQ0o7QUFDTCxDQUFDO0FBR0QsU0FBUyxnQkFBZ0I7SUFDckIsV0FBVyxFQUFFLENBQUM7SUFDZCxvQkFBb0IsRUFBRSxDQUFDO0lBQ3ZCLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqQixDQUFDO0FBR0QsU0FBUyxpQkFBaUIsQ0FBQyxLQUFhO0lBQ3BDLGdCQUFnQixHQUFHLEVBQUU7SUFDckIsS0FBSyxJQUFJLE9BQU8sSUFBSSxRQUFRLEVBQUU7UUFDMUIsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLElBQUk7UUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUN4RCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ2pDO0tBQ0o7SUFDRCxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ2QsUUFBUSxHQUFHLGdCQUFnQjtJQUMzQixvQkFBb0IsRUFBRSxDQUFDO0lBQ3ZCLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNiLFdBQVcsRUFBRSxDQUFDO0FBQ2xCLENBQUM7QUFHRCxTQUFTLGlCQUFpQixDQUFDLEtBQWE7SUFDcEMsZ0JBQWdCLEdBQUcsRUFBRTtJQUNyQixLQUFLLElBQUksT0FBTyxJQUFJLFFBQVEsRUFBRTtRQUMxQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0MsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLEVBQUU7Z0JBQ2pDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDL0IsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO2FBQzVCO1NBQ0o7S0FDSjtJQUNELFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDZCxRQUFRLEdBQUcsZ0JBQWdCO0lBQzNCLG9CQUFvQixFQUFFLENBQUM7SUFDdkIsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2IsV0FBVyxFQUFFLENBQUM7QUFDbEIsQ0FBQztBQUVELFNBQVMsZ0JBQWdCLENBQUMsSUFBWTtJQUNsQyxnQkFBZ0IsR0FBRyxFQUFFO0lBQ3JCLEtBQUssSUFBSSxPQUFPLElBQUksUUFBUSxFQUFFO1FBQzFCLElBQUksT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDdEIsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNqQztLQUNKO0lBQ0QsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNkLFFBQVEsR0FBRyxnQkFBZ0I7SUFDM0Isb0JBQW9CLEVBQUUsQ0FBQztJQUN2QixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDYixXQUFXLEVBQUUsQ0FBQztBQUNsQixDQUFDO0FBS0QsU0FBUyxpQkFBaUI7SUFDdEIsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztJQUN4RCxRQUFRLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtRQUNwQixnQkFBZ0IsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxZQUFZLEVBQUUsQ0FBQztJQUVmLFdBQVcsRUFBRSxDQUFDO0lBRWQsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBcUIsQ0FBQztJQUNqRixXQUFXLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDMUIsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLE9BQU8sRUFBRTtZQUNsQixpQkFBaUIsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQztBQUNMLENBQUM7QUFPRCxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwUmlDO0FBQ3BCO0FBQ0M7QUFHckMsU0FBUyx1QkFBdUIsQ0FBQyxJQUFjO0lBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEdBQUMsa0VBQW9CLENBQUM7SUFDL0QsT0FBTyxFQUFFLENBQUM7SUFDVixPQUFPLENBQUMsSUFBSSxDQUFDO0FBRWpCLENBQUM7QUFHRCxTQUFTLE9BQU87SUFDWixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQztJQUNoRCxJQUFJLENBQUMsT0FBTyxHQUFDLEdBQUUsRUFBRTtRQUNiLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxHQUFDLHlEQUFXO1FBQ3JELHdEQUFjLEVBQUUsQ0FBQztJQUNyQixDQUFDO0FBQ0wsQ0FBQztBQUVELFNBQVMsT0FBTyxDQUFDLElBQWM7SUFDM0IsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNoRCxJQUFJLEtBQUssR0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLEtBQUssQ0FBQyxTQUFTLEdBQUMsS0FBSyxHQUFDLElBQUksQ0FBQyxJQUFJLEdBQUMsTUFBTSxDQUFDO0lBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUMsa0JBQWtCLENBQUM7SUFDN0MsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNoRCxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLEdBQUcsQ0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDeEIsR0FBRyxDQUFDLEtBQUssR0FBQyxHQUFHLENBQUM7SUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0MsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDekMsTUFBTSxDQUFDLFNBQVMsR0FBRSxtQkFBbUIsQ0FBQztJQUN0QyxLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUM7UUFDbEMsTUFBTSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRSxHQUFHLENBQUM7S0FDaEQ7SUFDRCxJQUFJLE9BQU8sR0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLE9BQU8sQ0FBQyxTQUFTLEdBQUUsa0JBQWtCLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDM0QsSUFBSSxJQUFJLEdBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFDLGVBQWUsR0FBQyxJQUFJLENBQUMsSUFBSTtJQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUVELGlFQUFlLHVCQUF1Qjs7Ozs7OztVQy9DdEM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05xQztBQUNHO0FBQ0E7QUFDRDtBQUNVO0FBRWpELDBEQUFTLEVBQUUsQ0FBQztBQUNaLHNEQUFVLEVBQUUsQ0FBQztBQUNiLDBEQUFTLEVBQUUsQ0FBQztBQUNaLHNEQUFZLEVBQUUsQ0FBQztBQUNmLDhEQUFrQixFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9hbm51bmNpL2FubnVuY2kuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9hbm51bmNpL2FubnVuY2lvLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvYW5udW5jaS9nZXN0aW9uZWFubnVuY2kuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9jaGF0L2NoYXRCb2R5Lmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvY2hhdC9jaGF0Rm9vdGVyLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvY2hhdC9jaGF0SGVhZGVyLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvY3JlYUFubnVuY2lvL2NyZWFBbm51bmNpby5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2Zvb3Rlci9mb290ZXIuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9nZXN0aW9uZVV0ZW50aS9nZXN0aW9uZVV0ZW50aS5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2hvbWUvaG9tZS5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2xvZ2luL2xvZ2luLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvbG9naW4vbG9naW5Gb290ZXIuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9sb2dvdXQvbG9nb3V0Lmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvbW9kYWwvbW9kYWwuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9uYXZiYXIvbmF2YmFyLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvcHJvZmlsb1V0ZW50ZS9wcm9maWxlLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvcmVnaXN0cmF6aW9uZS9yZWdpc3RyYXppb25lLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvcmVnaXN0cmF6aW9uZS9yZWdpc3RyYXppb25lRm9vdGVyLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvdmlkZW9naW9jaGkvY3JlYVZpZGVvZ2lvY28uaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy92aWRlb2dpb2NoaS92aWRlb2dpb2NoaS5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL3ZpZGVvZ2lvY2hpL3Zpc3VhbGl6emFWaWRlb2dpb2NvLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvYW5udW5jaS9hbm51bmNpLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2FubnVuY2kvYW5udW5jaW8udHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvYW5udW5jaS9nZXN0aW9uZWFubnVuY2kudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvY2hhdC9jaGF0LnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2NyZWFBbm51bmNpby9jcmVhQW5udW5jaW8udHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvZm9vdGVyL2Zvb3Rlci50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9nZXN0aW9uZVV0ZW50aS9nZXN0aW9uZVV0ZW50aS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9ob21lL2hvbWUudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvbW9kYWwvbW9kYWwudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvbmF2YmFyL25hdmJhci50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9wcm9maWxvVXRlbnRlL3Byb2ZpbGUudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvdmlkZW9naW9jaGkvY3JlYVZpZGVvZ2lvY2hpLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL3ZpZGVvZ2lvY2hpL3ZpZGVvZ2lvY2hpLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL3ZpZGVvZ2lvY2hpL3Zpc3VhbGl6emFWaWRlb2dpb2NvLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJcXHJcXG48c3R5bGU+XFxyXFxuICAgIC5idG46aG92ZXIge1xcclxcbiAgICAgICAgb3V0bGluZS1jb2xvcjogdHJhbnNwYXJlbnQgO1xcclxcbiAgICAgICAgb3V0bGluZS1zdHlsZTogc29saWQ7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggIzVhMDFhNztcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IDAuN3M7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3NlYXJjaFRpdGxlOmhvdmVyIHtcXHJcXG4gICAgICAgIG91dGxpbmUtY29sb3I6IHRyYW5zcGFyZW50IDtcXHJcXG4gICAgICAgIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgNHB4ICM1YTAxYTc7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjdzO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNzZWFyY2hUaXRsZSB7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAtM3B4IDAgYmxhY2ssIDAgM3B4IGJsYWNrLCAzcHggMCBibGFjaywgMCAtM3B4IGJsYWNrO1xcclxcbiAgICAgICAgaGVpZ2h0OjIwcHg7XFxyXFxuICAgICAgICB3aWR0aDoyMCU7XFxyXFxuICAgICAgICBmbG9hdDogYm90dG9tO1xcclxcbiAgICAgICAgYWxpZ24tc2VsZjogcmlnaHQ7XFxyXFxuICAgIH1cXHJcXG48L3N0eWxlPlxcclxcblxcclxcbjxkaXYgc3R5bGU9XFxcImRpc3BsYXk6IGZsZXg7XFxcIiBjbGFzcz1cXFwibXktNVxcXCI+XFxyXFxuICAgIDxzcGFuIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IDQwcHhcXFwiPlxcclxcbiAgICAgICAgPGltZyBpZD1cXFwic2VsZWN0QWxsXFxcIiBjbGFzcz1cXFwicC0wIGJ0biBkcm9wZG93bi10b2dnbGVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgc3R5bGU9XFxcImJvcmRlcjpub25lO2Zsb2F0OmxlZnQ7aW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7d2lkdGg6IDMwMCU7aGVpZ2h0OmF1dG87XFxcIiBzcmM9XFxcIi4vaW1nL2J1dHRvbi9zaG93YWxsQnRuLnBuZ1xcXCIgYWx0PVxcXCJcXFwiPlxcclxcbiAgICAgICAgICAgIDwvc3Bhbj4gPCEtLWZ1bnppb25lIGNoZSBwcmVuZGUgdHV0dGkgZ2xpIGFubnVuY2kgZSBsaSBzY2hpYWZmYSBuZWwgY29udGVudXRvIGFubnVuY2ktLT5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gIGNsYXNzPVxcXCJteC1hdXRvIGRyb3Bkb3duXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcInAtMCBidG4gZHJvcGRvd24tdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiIHN0eWxlPVxcXCJib3JkZXI6bm9uZTtmbG9hdDpsZWZ0O2ltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO3dpZHRoOiAzMDAlO2hlaWdodDphdXRvO1xcXCIgc3JjPVxcXCIuL2ltZy9idXR0b24vYnlnZW5yZUJ0bi5wbmdcXFwiIGFsdD1cXFwiXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx1bCBpZD1cXFwiZ2VucmVzXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm14LWF1dG8gZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJwLTAgYnRuIGRyb3Bkb3duLXRvZ2dsZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIiBzdHlsZT1cXFwiYm9yZGVyOm5vbmU7ZmxvYXQ6bGVmdDtpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZDt3aWR0aDogMzAwJTtoZWlnaHQ6YXV0bztcXFwiIHNyYz1cXFwiLi9pbWcvYnV0dG9uL2J5eWVhckJ0bi5wbmdcXFwiIGFsdD1cXFwiXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHVsIGlkPVxcXCJ5ZWFyc1xcXCIgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLTUgbXktMSBteC1hdXRvXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcIm14LTUgZm9ybS1jb250cm9sIGJvcmRlci1lbmQtMSByb3VuZGVkXFxcIiB0eXBlPVxcXCJzZWFyY2hcXFwiIHBsYWNlaG9sZGVyPVxcXCJjZXJjYVxcXCIgaWQ9XFxcInNlYXJjaFRpdGxlXFxcIj5cXHJcXG4gICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcIm14LWF1dG9cXFwiPlxcclxcbiAgICAgICAgPGltZyBpZD1cXFwiYWRkSW5zZXJ0aW9uMlxcXCIgY2xhc3M9XFxcInAtMCBidG4gZHJvcGRvd24tdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIHN0eWxlPVxcXCJib3JkZXI6bm9uZTtmbG9hdDpsZWZ0O2ltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO3dpZHRoOiAzMDAlO2hlaWdodDphdXRvO1xcXCIgc3JjPVxcXCIuL2ltZy9idXR0b24vcGx1c0J0bi5wbmdcXFwiIGhpZGRlbiBhbHQ9XFxcIlxcXCI+XFxyXFxuICAgICAgPC9zcGFuPiAgICAgIFxcclxcbiAgICAgICAgICAgICBcXHJcXG5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGlkPVxcXCJyZW1haW5zXFxcIj5cXHJcXG4gICAgPGRpdiAgaWQ9XFxcImluc2VydGlvbkNvbnRlbnRcXFwiIGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcblxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPHVsIGNsYXNzPVxcXCJsaXN0LWdyb3VwXFxcIiA+XFxyXFxuICAgICAgICBcXHJcXG4gICAgPC91bD4gICAgXFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdj5cXHJcXG4gICAgPHVsIGlkPVxcXCJwYWdlc1xcXCIgY2xhc3M9XFxcInBhZ2luYXRpb24gcGFnaW5hdGlvbi1zbSBteS0yXFxcIj5cXHJcXG4gICAgICAgIFxcclxcbiAgICA8L3VsPlxcclxcbjwvZGl2PlxcclxcblxcclxcblxcclxcblxcclxcblwiOyIsImV4cG9ydCBkZWZhdWx0IFwiICAgIDxkaXYgaWQ9XFxcImJhY2tcXFwiPlxcclxcbiAgICAgICAgPGltZyBpZD1cXFwiYmFja2dhbWVzXFxcIiBzdHlsZT1cXFwiaW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7XFxcIiBjbGFzcz1cXFwibXQtNCBidXR0b25ob3ZlciBtYi00XFxcIiB3aWR0aD0xMjAgc3JjPVxcXCIuL2ltZy9idXR0b24vYmFja0J0bi5wbmdcXFwiPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICA8IS0tICAtLT5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTZcXFwiPlxcclxcbiAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGlkPVxcXCJpbWFnZVNsaWRlclxcXCIgY2xhc3M9XFxcImNhcm91c2VsIHNsaWRlXFxcIiBkYXRhLWJzLXJpZGU9XFxcInRydWVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJpbmRpY2F0b3JcXFwiIGNsYXNzPVxcXCJjYXJvdXNlbC1pbmRpY2F0b3JzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImlubmVyXFxcIiBjbGFzcz1cXFwiY2Fyb3VzZWwtaW5uZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2Fyb3VzZWwtY29udHJvbC1wcmV2XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdGFyZ2V0PVxcXCIjaW1hZ2VTbGlkZXJcXFwiIGRhdGEtYnMtc2xpZGU9XFxcInByZXZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+UHJlY2VkZW50ZTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhcm91c2VsLWNvbnRyb2wtbmV4dFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRhcmdldD1cXFwiI2ltYWdlU2xpZGVyXFxcIiBkYXRhLWJzLXNsaWRlPVxcXCJuZXh0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvblxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPlN1Y2Nlc3NpdmE8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImdpdmVkR2FtZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIG1iLTNcXFwiIHN0eWxlPVxcXCJtYXgtd2lkdGg6IDU0MHB4O1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93IGctMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImNhcmQtaW1hZ2VcXFwiIGNsYXNzPVxcXCJjb2wtbWQtNFxcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJjYXJkLWJvZHlcXFwiIGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgaWQ9XFxcImluc2VydGlvbi1kZXNjcmlwdGlvblxcXCIgY2xhc3M9XFxcImZvbnQtc2l6ZToyMHB4IGNvbG9yOndoaXRlIGNvbC1tZC0xMlxcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwibXktNSB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgIDxoMz48c3BhbiBpZD1cXFwiaW5zZXJ0aW9uLWNyZWF0b3JcXFwiPjwvc3Bhbj4gdm9ycmViYmUgdW5vIGRpIHF1ZXN0aSBnaW9jaGkgaW4gY2FtYmlvOjwvaDM+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiYWNjb3JkaW9uIHJvd1xcXCIgaWQ9XFxcImFjY29yZGlvbkV4YW1wbGVcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhY2NvcmRpb24taXRlbSBjb2wtbWQtNFxcXCI+XFxyXFxuICAgICAgICA8aDIgY2xhc3M9XFxcImFjY29yZGlvbi1oZWFkZXJcXFwiIGlkPVxcXCJoZWFkaW5nT25lXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJidG4taXRlbS0xXFxcIiBjbGFzcz1cXFwiYWNjb3JkaW9uLWJ1dHRvbiBjb2xsYXBzZWRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10b2dnbGU9XFxcImNvbGxhcHNlXFxcIlxcclxcbiAgICAgICAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cXFwiI2NvbGxhcHNlT25lXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJ0cnVlXFxcIiBhcmlhLWNvbnRyb2xzPVxcXCJjb2xsYXBzZU9uZVxcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICA8L2gyPlxcclxcbiAgICAgICAgPGRpdiBpZD1cXFwiY29sbGFwc2VPbmVcXFwiIGNsYXNzPVxcXCJhY2NvcmRpb24tY29sbGFwc2UgY29sbGFwc2VcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwiaGVhZGluZ09uZVxcXCJcXHJcXG4gICAgICAgICAgICBkYXRhLWJzLXBhcmVudD1cXFwiI2FjY29yZGlvbkV4YW1wbGVcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFjY29yZGlvbi1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiaW1nLWl0ZW0tMVxcXCIgY2xhc3M9XFxcImNhcmQgbXgtYXV0b1xcXCIgc3R5bGU9XFxcIndpZHRoOiAxOHJlbTtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJib2R5LWl0ZW0tMVxcXCIgY2xhc3M9XFxcImNhcmQtYm9keSB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImFjY29yZGlvbi1pdGVtIGNvbC1tZC00XFxcIj5cXHJcXG4gICAgICAgIDxoMiBjbGFzcz1cXFwiYWNjb3JkaW9uLWhlYWRlclxcXCIgaWQ9XFxcImhlYWRpbmdUd29cXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcImJ0bi1pdGVtLTJcXFwiIGNsYXNzPVxcXCJhY2NvcmRpb24tYnV0dG9uIGNvbGxhcHNlZFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiXFxyXFxuICAgICAgICAgICAgICAgIGRhdGEtYnMtdGFyZ2V0PVxcXCIjY29sbGFwc2VUd29cXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIiBhcmlhLWNvbnRyb2xzPVxcXCJjb2xsYXBzZVR3b1xcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICA8L2gyPlxcclxcbiAgICAgICAgPGRpdiBpZD1cXFwiY29sbGFwc2VUd29cXFwiIGNsYXNzPVxcXCJhY2NvcmRpb24tY29sbGFwc2UgY29sbGFwc2VcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwiaGVhZGluZ1R3b1xcXCJcXHJcXG4gICAgICAgICAgICBkYXRhLWJzLXBhcmVudD1cXFwiI2FjY29yZGlvbkV4YW1wbGVcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFjY29yZGlvbi1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiaW1nLWl0ZW0tMlxcXCIgY2xhc3M9XFxcImNhcmQgbXgtYXV0b1xcXCIgc3R5bGU9XFxcIndpZHRoOiAxOHJlbTtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJib2R5LWl0ZW0tMlxcXCIgY2xhc3M9XFxcImNhcmQtYm9keSB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImFjY29yZGlvbi1pdGVtIGNvbC1tZC00XFxcIj5cXHJcXG4gICAgICAgIDxoMiBjbGFzcz1cXFwiYWNjb3JkaW9uLWhlYWRlclxcXCIgaWQ9XFxcImhlYWRpbmdUaHJlZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cXFwiYnRuLWl0ZW0tM1xcXCIgY2xhc3M9XFxcImFjY29yZGlvbi1idXR0b24gY29sbGFwc2VkXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJjb2xsYXBzZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgZGF0YS1icy10YXJnZXQ9XFxcIiNjb2xsYXBzZVRocmVlXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCIgYXJpYS1jb250cm9scz1cXFwiY29sbGFwc2VUaHJlZVxcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICA8L2gyPlxcclxcbiAgICAgICAgPGRpdiBpZD1cXFwiY29sbGFwc2VUaHJlZVxcXCIgY2xhc3M9XFxcImFjY29yZGlvbi1jb2xsYXBzZSBjb2xsYXBzZVxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJoZWFkaW5nVGhyZWVcXFwiXFxyXFxuICAgICAgICAgICAgZGF0YS1icy1wYXJlbnQ9XFxcIiNhY2NvcmRpb25FeGFtcGxlXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhY2NvcmRpb24tYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImltZy1pdGVtLTNcXFwiIGNsYXNzPVxcXCJjYXJkIG14LWF1dG9cXFwiIHN0eWxlPVxcXCJ3aWR0aDogMThyZW07XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiYm9keS1pdGVtLTNcXFwiIGNsYXNzPVxcXCJjYXJkLWJvZHkgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPHN0eWxlPlxcclxcbiAgICAubWFzc2ltb2JvbGRpIHtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICB9XFxyXFxuPC9zdHlsZT5cXHJcXG48ZGl2IGNsYXNzPVxcXCJteS01XFxcIiBzdHlsZT1cXFwiZm9udC13ZWlnaHQ6IGJvbGQ7XFxcIj5cXHJcXG48ZGl2IHN0eWxlPVxcXCJkaXNwbGF5OiBmbGV4O1xcXCI+XFxyXFxuXFxyXFxuICAgICAgICA8c3BhbiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiA0MHB4XFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHN0eWxlPVxcXCJmb250LXdlaWdodDogYm9sZDtcXFwiIGlkPVxcXCJzZWxlY3RBbGwyXFxcIj5WaXN1YWxpenphIHR1dHRpPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDwvc3Bhbj4gPCEtLWZ1bnppb25lIGNoZSBwcmVuZGUgdHV0dGkgZ2xpIGFubnVuY2kgZSBsaSBzY2hpYWZmYSBuZWwgY29udGVudXRvIGFubnVuY2ktLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IDQwcHhcXFwiIGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnkgZHJvcGRvd24tdG9nZ2xlXFxcIiBzdHlsZT1cXFwiZm9udC13ZWlnaHQ6IGJvbGQ7XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFZpc3VhbGl6emEgcGVyIEdlbmVyZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBpZD1cXFwiZ2VucmVzMlxcXCIgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XFxcIlBMQVRGT1JNXFxcIj48YnV0dG9uIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPlBMQVRGT1JNPC9idXR0b24+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiA0MHB4XFxcIiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnkgZHJvcGRvd24tdG9nZ2xlXFxcIiBzdHlsZT1cXFwiZm9udC13ZWlnaHQ6IGJvbGQ7XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgVmlzdWFsaXp6YSBwZXIgQW5ub1xcclxcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XFxcInllYXJzMlxcXCIgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVxcXCIxOTg1XFxcIj48YnV0dG9uIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPjE5ODU8L2J1dHRvbj48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgPGRpdiBzdHlsZT1cXFwidmVydGljYWwtYWxpZ246IG1pZGRsZTtcXFwiIGNsYXNzPVxcXCJjb2wtbWQtMyBteC1hdXRvXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGJvcmRlci1lbmQtMSBib3JkZXIgcm91bmRlZC1waWxsXFxcIiB0eXBlPVxcXCJzZWFyY2hcXFwiIHBsYWNlaG9sZGVyPVxcXCJjZXJjYVxcXCIgc3R5bGU9XFxcIm1hcmdpbi1yaWdodDoyMHB4XFxcIiBpZD1cXFwic2VhcmNoVGl0bGUyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWFwcGVuZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcInNlYXJjaEJ1dHRvbjJcXFwiIGNsYXNzPVxcXCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJnLXdoaXRlIGJvcmRlci1ib3R0b20tMSBib3JkZXIgcm91bmRlZC1waWxsIG1zLW41XFxcIiBzdHlsZT1cXFwiZm9udC13ZWlnaHQ6IGJvbGQ7XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyb3ZhXFxyXFxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1zZWFyY2hcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICBcXHJcXG4gICAgICAgICAgPHNwYW4gPlxcclxcbiAgICAgICAgICAgIDwhLS0gQWxsZXJ0YSBNYXJ0ZWxsYXRhOiBzZSB0b2xnbyBpbCBib3R0b25lIHRvbGdvIHB1cmUgbGEgbGlzdGEsXFxyXFxuICAgICAgICAgICAgICAgIHF1aW5kaSBsJ2hvIG1lc3NvIGhpZGRlbi0tPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gaGlkZGVuIGlkPVxcXCJhZGRJbnNlcnRpb25cXFwiIHN0eWxlPVxcXCJjb2xvcjp3aGl0ZVxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4vaW1nL3BsdXMucG5nXFxcIiBhbHQ9XFxcInBsdXNcXFwiIHN0eWxlPVxcXCJ3aWR0aDoyNXB4XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgSW5zZXJpc2NpIEFubnVuY2lvXFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgIDwvc3Bhbj4gICAgICBcXHJcXG4gICAgICAgICAgICAgICAgIFxcclxcbiAgICBcXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxicj5cXHJcXG4gICAgPGRpdiBzdHlsZT1cXFwiZGlzcGxheTogaW5saW5lLWZsZXg7XFxcIj5cXHJcXG5cXHJcXG4gICAgICAgIDxzcGFuIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IDQwcHhcXFwiPiA8aDQgc3R5bGU9XFxcImZvbnQtd2VpZ2h0OiBib2xkO1xcXCI+IE5vbWUgQ2F0ZWdvcmlhOiA8L2g0PiA8L3NwYW4+XFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgIDxzcGFuIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IDQwcHhcXFwiPiA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCBib3JkZXItZW5kLTEgYm9yZGVyIHJvdW5kZWQtcGlsbFxcXCIgc3R5bGU9XFxcImZvbnQtd2VpZ2h0OiBib2xkO1xcXCIgdmFsdWU9XFxcIlxcXCIgcGxhY2Vob2xkZXI9XFxcIkNhdGVnb3JpYVxcXCIgc3R5bGU9XFxcIm1hcmdpbi1yaWdodDoyMHB4XFxcIiBpZD1cXFwiY2F0ZWdvcnlOYW1lXFxcIj4gPC9zcGFuPlxcclxcblxcclxcbiAgICAgICAgPHNwYW4gc3R5bGU9XFxcIm1hcmdpbi1yaWdodDogNDBweFxcXCI+IDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgc3R5bGU9XFxcImZvbnQtd2VpZ2h0OiBib2xkO1xcXCIgaWQ9XFxcImNyZWF0ZUNhdGVnb3J5XFxcIj5DcmVhIENhdGVnb3JpYTwvYnV0dG9uPiA8L3NwYW4+XFxyXFxuXFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8YnI+XFxyXFxuICAgIFxcclxcbiAgICA8ZGl2IGlkPVxcXCJyZW1haW5zXFxcIj5cXHJcXG4gICAgICAgIDxicj5cXHJcXG4gICAgICAgIDx1bCBpZD1cXFwiaW5zZXJ0aW9uQ29udGVudDJcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwXFxcIiBzdHlsZT1cXFwiZm9udC13ZWlnaHQ6IGJvbGQ7XFxcIj5cXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgIDwvdWw+XFxyXFxuICAgICAgICBcXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXY+XFxyXFxuICAgICAgICA8dWwgaWQ9XFxcInBhZ2VzMlxcXCIgY2xhc3M9XFxcInBhZ2luYXRpb24gcGFnaW5hdGlvbi1zbSBteS0yXFxcIiBzdHlsZT1cXFwiZm9udC13ZWlnaHQ6IGJvbGQ7XFxcIj5cXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgIDwvdWw+XFxyXFxuICAgIFxcclxcbiAgICA8L2Rpdj4gICAgXFxyXFxuPC9kaXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGlkPVxcXCJjaGF0Qm9keVxcXCIgY2xhc3M9XFxcImNhcmQtYm9keSBvdmVyZmxvdy1hdXRvXFxcIiBkYXRhLW1kYi1wZXJmZWN0LXNjcm9sbGJhcj1cXFwidHJ1ZVxcXCJcXHJcXG4gICAgc3R5bGU9XFxcInBvc2l0aW9uOiByZWxhdGl2ZTsgaGVpZ2h0OiA3NDBweFxcXCI+XFxyXFxuPC9kaXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGlkPVxcXCJjaGF0Rm9vdGVyXFxcIiBjbGFzcz1cXFwiY2FyZC1mb290ZXIgdGV4dC1tdXRlZCBkLWZsZXgganVzdGlmeS1jb250ZW50LXN0YXJ0IGFsaWduLWl0ZW1zLWNlbnRlciBwLTNcXFwiPlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cCBtYi0wXFxcIj5cXHJcXG4gICAgICAgIDxpbnB1dCBpZD1cXFwibWVzc2FnZVRleHRcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJTY3JpdmkgaWwgbWVzc2FnZ2lvXFxcIlxcclxcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIlJlY2lwaWVudCdzIHVzZXJuYW1lXFxcIiBhcmlhLWRlc2NyaWJlZGJ5PVxcXCJidXR0b24tYWRkb24yXFxcIiAvPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGlkPVxcXCJidXR0b24tYWRkb24yXFxcIiBzdHlsZT1cXFwicGFkZGluZy10b3A6IC41NXJlbTtcXFwiPlxcclxcbiAgICAgICAgICAgIEludmlhXFxyXFxuICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGlkPVxcXCJjaGF0SGVhZGVyXFxcIiBjbGFzcz1cXFwiY2FyZC1oZWFkZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciBwLTNcXFwiPlxcclxcbiAgICA8aDUgaWQ9XFxcImNoYXRUaXRsZVxcXCIgY2xhc3M9XFxcIm1iLTBcXFwiPjwvaDU+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImQtZmxleCBmbGV4LXJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJhZGdlIGJnLXdhcm5pbmcgbWUtM1xcXCI+MjA8L3NwYW4+XFxyXFxuICAgICAgICA8aSBpZD1cXFwiYmFja1RvTGlzdFxcXCIgY2xhc3M9XFxcImZhcyBmYS10aW1lcyB0ZXh0LW11dGVkIGZhLXhzXFxcIj48L2k+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPHN0eWxlPlxcclxcbiAgI2luc2VydENvbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7IGJvcmRlcjogM3B4IHNvbGlkIGdyZWVuO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJ0bjpob3ZlciB7XFxyXFxuICAgICAgICBvdXRsaW5lLWNvbG9yOiB0cmFuc3BhcmVudCA7XFxyXFxuICAgICAgICBvdXRsaW5lLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCAjNWEwMWE3O1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogMC43cztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgLmZvcm0tY29udHJvbDpob3ZlcntcXHJcXG4gICAgICAgIG91dGxpbmUtY29sb3I6IHRyYW5zcGFyZW50IDtcXHJcXG4gICAgICAgIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgNHB4ICM1YTAxYTc7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjdzO1xcclxcbiAgICB9XFxyXFxuPC9zdHlsZT5cXHJcXG5cXHJcXG48ZGl2IGlkPVxcXCJpbnNlcnRDb250XFxcIiBjbGFzcz1cXFwicm91bmRlZCBteS0yIGNvbnRhaW5lclxcXCI+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtMTIgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgIDxoMiBjbGFzcz1cXFwiYm9yZGVyLXByaW1hcnkgYm9yZGVyLWJvdHRvbSBib3JkZXItMlxcXCI+PGI+SW5zZXJpc2NpIEFubnVuY2lvPC9iPjwvaDI+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuXFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNFxcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJ0aXRsZVxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPlxcclxcbiAgICAgICAgICA8aDM+PGI+VGl0b2xvIEFubnVuY2lvPC9iPjwvaDM+XFxyXFxuICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJib3JkZXIgYm9yZGVyLTIgYm9yZGVyLWluZm8gZm9ybS1jb250cm9sXFxcIiBpZD1cXFwidGl0bGVJbnNlcnRpb25cXFwiIHBsYWNlaG9sZGVyPVxcXCJUaXRvbG8gQW5udW5jaW9cXFwiPlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiZGVzY3JpcHRpb25cXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5cXHJcXG4gICAgICAgICAgPGgzPjxiPkRlc2NyaXppb25lIFZpZGVvZ2lvY288L2I+PC9oMz5cXHJcXG4gICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XFxcImJvcmRlciBib3JkZXItMiBib3JkZXItaW5mbyBmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJkZXNjcmlwdGlvbkluc2VydGlvblxcXCIgcm93cz1cXFwiM1xcXCIgcGxhY2Vob2xkZXI9XFxcIkRlc2NyaXppb25lIEFubnVuY2lvXFxcIj48L3RleHRhcmVhPlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgIDxkaXY+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJ0cmFkZUdhbWVcXFwiIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgIDxoMz48Yj5UcmFkZS1HYW1lPC9iPjwvaDM+XFxyXFxuICAgICAgICAgIDxoNT5EYSBxdWFsZSB0ZXNvcmlubyB0aSB2b3JyZXN0aSBzZXBhcmFyZT88L2g1PlxcclxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZHJvcGRvd24gdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcInNlbGVjdGVkVHJhZGVHYW1lXFxcIiBjbGFzcz1cXFwibWItMiBib3JkZXIgYm9yZGVyLTIgYm9yZGVyLWRhcmsgYnRuIGJ0bi1saWdodCBkcm9wZG93bi10b2dnbGVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCIgcGxhY2Vob2xkZXI9XFxcIlF1YW50aSBiZWkgZ2lvY2hpbmkhXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8dWwgaWQ9XFxcInRyYWRlR2FtZVxcXCIgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNFxcXCI+XFxyXFxuICAgICAgPGRpdj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcIndpc2hHYW1lc1xcXCIgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgPGgzPjxiPldpc2gtTGlzdDwvYj48L2gzPlxcclxcbiAgICAgICAgICA8aDU+Q2hlIGdpb2NoaSB2b3JyZXN0aSByaWNldmVyZSBpbiBjYW1iaW8gZGVsIHR1byB0ZXNvcmlubz88L2g1PlxcclxcblxcclxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZHJvcGRvd24gdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJvcmRlciBib3JkZXItMiBib3JkZXItZGFyayBidG4gYnRuLWxpZ2h0IGRyb3Bkb3duLXRvZ2dsZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIlxcclxcbiAgICAgICAgICAgICAgZGF0YS1icy10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCI+XFxyXFxuICAgICAgICAgICAgICBTb2xvIDMgRWghIE5vbiBiYXJpYW1vIVxcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDx1bCBpZD1cXFwid2lzaEdhbWVzXFxcIiBjbGFzcz1cXFwicC0wIGRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNFxcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJnYWxsZXJ5XFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+XFxyXFxuICAgICAgICAgIDxoMz48Yj5JbW1hZ2luaTwvYj48L2gzPlxcclxcbiAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cXFwiYm9yZGVyIGJvcmRlci0yIGJvcmRlci1pbmZvIGZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImdhbGxlcnlJbnNlcnRpb25cXFwiIHJvd3M9XFxcIjdcXFwiXFxyXFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJJbnNlcmlzY2kgbGUgdXJsIGRlbGxlIGltYWdpbmkgZGVsbCdhbm51bmNpbyBkYSBpbnNlcmlyZSwgb2dudW5hIGRpdmlzYSBkYWxsYSB2aXJnb2xhIEVzOiBodHRwOi8vaW1ndXJsL2ltZy5wbmcsaHR0cDovL2ltZ3VybC9pbWcyLnBuZ1xcXCI+PC90ZXh0YXJlYT5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDx1bCBpZD1cXFwic2VsZWN0ZWRHYW1lc1xcXCI+XFxyXFxuICAgICAgICAgIFxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiY29sLTEyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibWItMyBtdC0zIHRleHQtY2VudGVyIHAtMFxcXCIgc3R5bGU9XFxcImJvcmRlcjpub25lO2Zsb2F0OmxlZnQ7aW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7d2lkdGg6IDEwMCU7aGVpZ2h0OmF1dG87XFxcIj5cXHJcXG4gICAgICA8aW1nIGlkPVxcXCJzZW5kSW5zZXJ0aW9uXFxcIiBjbGFzcz1cXFwicC0wIGJ0blxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBzcmM9XFxcIi4vaW1nL2J1dHRvbi9hZGRCdG4ucG5nXFxcIiBhbHQ9XFxcIlxcXCIgc3R5bGU9XFxcImJvcmRlcjpub25lO3dpZHRoOjklO1xcXCI+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8c3R5bGU+XFxyXFxuICAuY2FyZGZvb3RlciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZvb3RlcmxpbmtzIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XFxyXFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiBibGFjaztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBhOmhvdmVyLCBhOmFjdGl2ZSB7XFxyXFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiBncmV5O1xcclxcbiAgfVxcclxcblxcclxcbiAgbGkge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gIGJvZHkge1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgZm9vdGVyIHtcXHJcXG4gICAgbWluLWhlaWdodDogNTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8qIFRoZSBhcnRpY2xlIGZpbGxzIGFsbCB0aGUgc3BhY2UgYmV0d2VlbiBoZWFkZXIgJiBmb290ZXIgKi9cXHJcXG4gIGJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgZGl2LmNvbnRhaW5lciB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICB9XFxyXFxuXFxyXFxuPC9zdHlsZT5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjYXJkZm9vdGVyXFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5cXHJcXG4gICAgPGltZyBzcmM9XFxcIi4vaW1nL3ZpZGVvZ2FtZWxvdmVyZm9vdGVyLnBuZ1xcXCIgc3R5bGU9XFxcIndpZHRoOjI3JTsgcGFkZGluZzogMiU7ICBvcGFjaXR5OiAwLjg7XFxcIiBhbHQ9XFxcIlxcXCI+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCIgc3R5bGU9XFxcInBhZGRpbmctYm90dG9tOiAxJTtcXFwiPlxcclxcbiAgICA8dWw+XFxyXFxuICAgICAgPGxpPiA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiZm9vdGVybGlua3NcXFwiPkhvbWU8L2E+IDwvbGk+XFxyXFxuICAgICAgPGxpPiA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiZm9vdGVybGlua3NcXFwiPlBhb2xvPC9hPiA8L2xpPlxcclxcbiAgICAgIDxsaT4gPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImZvb3RlcmxpbmtzXFxcIj5QaWVybzwvYT4gPC9saT5cXHJcXG4gICAgICA8bGk+IDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJmb290ZXJsaW5rc1xcXCI+QWJvdXQgVXM8L2E+IDwvbGk+XFxyXFxuICAgIDwvdWw+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImNhcmQtZm9vdGVyIHRleHQtbXV0ZWRcXFwiIHN0eWxlPVxcXCJwYWRkaW5nLWJvdHRvbTogMSU7IC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiByZ2IoMjIsIDIyLCAyMik7XFxcIj5cXHJcXG4gICAgPHAgIGNsYXNzPVxcXCJmb290ZXJsaW5rc1xcXCI+IMKpMjAyMyBQYW9sbyBFbnRlcnByaXNlIEluYy4gfCBUdXR0aSBpIGRpcml0dGkgcmlzZXJ2YXRpIChhIFBpZXJpbm8pIDwvcD5cXHJcXG4gIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjwhLS1cXHJcXG48c3R5bGU+XFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTByZW0gYXV0bztcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJtYWluXFxcIiBcXFwiLlxcXCIgXFxcImZvb3RlclxcXCI7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kOiAjRjVGN0ZBO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbmJvZHkgLmZvb3RlciB7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgLS1mb290ZXItYmFja2dyb3VuZDojRUQ1NTY1O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xcclxcbiAgbWluLWhlaWdodDogMTJyZW07XFxyXFxufVxcclxcbmJvZHkgLmZvb3RlciAuYnViYmxlcyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBoZWlnaHQ6IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1mb290ZXItYmFja2dyb3VuZCk7XFxyXFxuICBmaWx0ZXI6IHVybChcXFwiI2Jsb2JcXFwiKTtcXHJcXG59XFxyXFxuYm9keSAuZm9vdGVyIC5idWJibGVzIC5idWJibGUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogdmFyKC0tcG9zaXRpb24sIDUwJSk7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1mb290ZXItYmFja2dyb3VuZCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IGJ1YmJsZS1zaXplIHZhcigtLXRpbWUsIDRzKSBlYXNlLWluIGluZmluaXRlIHZhcigtLWRlbGF5LCAwcyksIGJ1YmJsZS1tb3ZlIHZhcigtLXRpbWUsIDRzKSBlYXNlLWluIGluZmluaXRlIHZhcigtLWRlbGF5LCAwcyk7XFxyXFxuICAgICAgICAgIGFuaW1hdGlvbjogYnViYmxlLXNpemUgdmFyKC0tdGltZSwgNHMpIGVhc2UtaW4gaW5maW5pdGUgdmFyKC0tZGVsYXksIDBzKSwgYnViYmxlLW1vdmUgdmFyKC0tdGltZSwgNHMpIGVhc2UtaW4gaW5maW5pdGUgdmFyKC0tZGVsYXksIDBzKTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEwMCUpO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIgLmNvbnRlbnQge1xcclxcbiAgei1pbmRleDogMjtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcclxcbiAgZ3JpZC1nYXA6IDRyZW07XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tZm9vdGVyLWJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIgLmNvbnRlbnQgYSwgYm9keSAuZm9vdGVyIC5jb250ZW50IHAge1xcclxcbiAgY29sb3I6ICNGNUY3RkE7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbmJvZHkgLmZvb3RlciAuY29udGVudCBiIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuYm9keSAuZm9vdGVyIC5jb250ZW50IHAge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIgLmNvbnRlbnQgPiBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuYm9keSAuZm9vdGVyIC5jb250ZW50ID4gZGl2ID4gZGl2IHtcXHJcXG4gIG1hcmdpbjogMC4yNXJlbSAwO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIgLmNvbnRlbnQgPiBkaXYgPiBkaXYgPiAqIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIgLmNvbnRlbnQgPiBkaXYgLmltYWdlIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA0cmVtO1xcclxcbiAgaGVpZ2h0OiA0cmVtO1xcclxcbiAgbWFyZ2luOiAwLjI1cmVtIDA7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgYnViYmxlLXNpemUge1xcclxcbiAgMCUsIDc1JSB7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1zaXplLCA0cmVtKTtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1zaXplLCA0cmVtKTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICB3aWR0aDogMHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAwcmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGJ1YmJsZS1zaXplIHtcXHJcXG4gIDAlLCA3NSUge1xcclxcbiAgICB3aWR0aDogdmFyKC0tc2l6ZSwgNHJlbSk7XFxyXFxuICAgIGhlaWdodDogdmFyKC0tc2l6ZSwgNHJlbSk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgd2lkdGg6IDByZW07XFxyXFxuICAgIGhlaWdodDogMHJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIGJ1YmJsZS1tb3ZlIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgYm90dG9tOiAtNHJlbTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICBib3R0b206IHZhcigtLWRpc3RhbmNlLCAxMHJlbSk7XFxyXFxuICB9XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgYnViYmxlLW1vdmUge1xcclxcbiAgMCUge1xcclxcbiAgICBib3R0b206IC00cmVtO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIGJvdHRvbTogdmFyKC0tZGlzdGFuY2UsIDEwcmVtKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuPC9zdHlsZT5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJtYWluXFxcIj48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJmb290ZXJcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiYnViYmxlc1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZToyLjY2NDUyMzAxNjI4NTE5NjNyZW07IC0tZGlzdGFuY2U6Ny4zMDQxMTYwMzY3NDI2MTc0cmVtOyAtLXBvc2l0aW9uOjgzLjU2MzY4MDUzMzM4NDgzJTsgLS10aW1lOjMuNDk1NjQwMzA5NjI3MjI5NXM7IC0tZGVsYXk6LTIuNzczOTM4MTk2MjM3NzAycztcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6NS44OTQxNDk4NDk4MzgwMTZyZW07IC0tZGlzdGFuY2U6Ny42Mjc5NzQ0ODQzMDA0MjdyZW07IC0tcG9zaXRpb246OTMuMzY4NzgxODgzOTM2NDIlOyAtLXRpbWU6My43NjAxNDg2MjcyODM4NzU2czsgLS1kZWxheTotMy4zOTcxMDIyODg0MDMwMjlzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZToyLjc5ODY0NzEwNjY2NTY4NXJlbTsgLS1kaXN0YW5jZTo5LjIwMDQ5NjgxNzIyMjUyNXJlbTsgLS1wb3NpdGlvbjowLjIwNzc1NzMyNjk4NDE0MTk1JTsgLS10aW1lOjIuMjAxMDk2MDIyMDA1ODY1N3M7IC0tZGVsYXk6LTIuNjk4OTQ4MjE2NDY0NTQ1cztcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6NC4zNTk2MjE5MjY3ODIyOTRyZW07IC0tZGlzdGFuY2U6Ny40NjM1Nzk5MzAwNzQxOXJlbTsgLS1wb3NpdGlvbjo0Ny44Njc4MzE3NDY4NTA5MjUlOyAtLXRpbWU6Mi4xMjA4MjA1NjEyNzA3MjRzOyAtLWRlbGF5Oi0yLjUxNDE3Nzg0OTIxODIzMzZzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZTo1LjAyODM1MjA1MDk3ODE5NnJlbTsgLS1kaXN0YW5jZTo3LjI0MjcyMDAzNjgzMjI0OXJlbTsgLS1wb3NpdGlvbjozMC42OTk4NDYxNTkyNzM5NiU7IC0tdGltZTozLjI1MzU5NTUyODEwNjI4ODNzOyAtLWRlbGF5Oi0zLjM1NTQ1NDUzMjU0Mzk3MTVzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZToyLjc1NTk3ODIyMTg1NzE5M3JlbTsgLS1kaXN0YW5jZTo3LjQ2OTk3MjQ5NjkyNjUwOXJlbTsgLS1wb3NpdGlvbjoxMC4yMzgyMjcwMjA3MDExMzklOyAtLXRpbWU6Mi42NDcyMDAxNTIwMDgzNjZzOyAtLWRlbGF5Oi0zLjU3MjE1OTQ2MjI0OTYyMThzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZTo1LjA4NDgxMjgxNzIwODczNzVyZW07IC0tZGlzdGFuY2U6OS41NTg1NTQxNDI1ODQ2MjZyZW07IC0tcG9zaXRpb246OTQuNTE5ODIwNTc4MzIyMTUlOyAtLXRpbWU6My43MTU1NTU4NzYyMTczMDU1czsgLS1kZWxheTotMy4wODEwMDY2OTY3NTc4NTlzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZTozLjUzNzgwNzU2MDc3NTk1OHJlbTsgLS1kaXN0YW5jZTo5LjQyMTQyMzUyOTg0MTkyOHJlbTsgLS1wb3NpdGlvbjo1LjM5NjI3NDIxMTcwOTAxMyU7IC0tdGltZTozLjE3ODc4OTQ1NTYwMTg4NTZzOyAtLWRlbGF5Oi0zLjQ0NjE2OTkwNTE4Njc3NXM7XFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnViYmxlXFxcIiBzdHlsZT1cXFwiLS1zaXplOjUuNjI3NzMxMjE4NjAwMzQ4cmVtOyAtLWRpc3RhbmNlOjcuNzQ2NDYzNDE2MDc1MTY1cmVtOyAtLXBvc2l0aW9uOjEwLjkyODgwMjQ5MzQ2OTUzMSU7IC0tdGltZToyLjU2NzkyNTkzMjI1NjY5czsgLS1kZWxheTotMy40MDQ4NzMxMDE0NTE5ODZzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZTozLjY5NDk1OTkyMTk0NzIzMTNyZW07IC0tZGlzdGFuY2U6OS4xODE1NDk1ODY3NTAxMDdyZW07IC0tcG9zaXRpb246LTQuNTg5MDU1NTYzNzk4OTc2JTsgLS10aW1lOjMuNzA5NTIyMDY1Mjg4ODM0NXM7IC0tZGVsYXk6LTMuMTI5NTg2MTMxNTkxNjA2N3M7XFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnViYmxlXFxcIiBzdHlsZT1cXFwiLS1zaXplOjIuNzU5MjY0MjIxMDY3MTc4cmVtOyAtLWRpc3RhbmNlOjguNDI2ODg4MDk5NTUxMzdyZW07IC0tcG9zaXRpb246MjguMDQ2NzI4MjkzMTI0NTAyJTsgLS10aW1lOjMuMjg0MDk2MTEwNTIzNnM7IC0tZGVsYXk6LTIuMzY2NTE5ODc0MzA5Mzg3cztcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6Mi41NzQzMDgyNDM1MTA1Njg0cmVtOyAtLWRpc3RhbmNlOjkuNDMwNjUzOTYyNTczODUzcmVtOyAtLXBvc2l0aW9uOjMwLjgzOTc0NjQ3MTczOTYxJTsgLS10aW1lOjMuNjg2NTcwMDE3NjIzMDcwN3M7IC0tZGVsYXk6LTMuNjE5MDM5NjA2MDMzMjk3cztcXFwiPjwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXHJcXG4gICAgPGRpdj5cXHJcXG4gICAgICA8ZGl2PjxiPkVsZGV3PC9iPjxhIGhyZWY9XFxcIiNcXFwiPlNlY3VjZTwvYT48YSBocmVmPVxcXCIjXFxcIj5EcnVwYW5kPC9hPjxhIGhyZWY9XFxcIiNcXFwiPk9jZWFzaDwvYT48YSBocmVmPVxcXCIjXFxcIj5VZ2VmZTwvYT48YSBocmVmPVxcXCIjXFxcIj5CYWJlZDwvYT48L2Rpdj5cXHJcXG4gICAgICA8ZGl2PjxiPlNwb3RoYTwvYj48YSBocmVmPVxcXCIjXFxcIj5NaXNrYXNhPC9hPjxhIGhyZWY9XFxcIiNcXFwiPkFnaXRoZTwvYT48YSBocmVmPVxcXCIjXFxcIj5TY2VzaGE8L2E+PGEgaHJlZj1cXFwiI1xcXCI+THVsbGU8L2E+PC9kaXY+XFxyXFxuICAgICAgPGRpdj48Yj5DaGFzaGFraWI8L2I+PGEgaHJlZj1cXFwiI1xcXCI+Q2hvZ2F1dzwvYT48YSBocmVmPVxcXCIjXFxcIj5QaGFjaHVsZWQ8L2E+PGEgaHJlZj1cXFwiI1xcXCI+VGllYmVmdDwvYT48YSBocmVmPVxcXCIjXFxcIj5PY2lkPC9hPjxhIGhyZWY9XFxcIiNcXFwiPkl6b208L2E+PGEgaHJlZj1cXFwiI1xcXCI+T3J0PC9hPjwvZGl2PlxcclxcbiAgICAgIDxkaXY+PGI+QXRob2Q8L2I+PGEgaHJlZj1cXFwiI1xcXCI+UGFtdXo8L2E+PGEgaHJlZj1cXFwiI1xcXCI+VmFwZXJ0PC9hPjxhIGhyZWY9XFxcIiNcXFwiPk5lZXNrPC9hPjxhIGhyZWY9XFxcIiNcXFwiPk9tZW1hbmVuPC9hPjwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdj48YSBjbGFzcz1cXFwiaW1hZ2VcXFwiIGhyZWY9XFxcImh0dHBzOi8vY29kZXBlbi5pby96LVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJnF1b3Q7aHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTk5MDExL2hhcHB5LnN2ZyZxdW90OylcXFwiPjwvYT5cXHJcXG4gICAgICA8cD7CqTIwMTkgTm90IFJlYWxseTwvcD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48c3ZnIHN0eWxlPVxcXCIgdG9wOjEwMHZoXFxcIj5cXHJcXG4gIDxkZWZzPlxcclxcbiAgICA8ZmlsdGVyIGlkPVxcXCJibG9iXFxcIj5cXHJcXG4gICAgICA8ZmVHYXVzc2lhbkJsdXIgaW49XFxcIlNvdXJjZUdyYXBoaWNcXFwiIHN0ZERldmlhdGlvbj1cXFwiMTBcXFwiIHJlc3VsdD1cXFwiYmx1clxcXCI+PC9mZUdhdXNzaWFuQmx1cj5cXHJcXG4gICAgICA8ZmVDb2xvck1hdHJpeCBpbj1cXFwiYmx1clxcXCIgbW9kZT1cXFwibWF0cml4XFxcIiB2YWx1ZXM9XFxcIjEgMCAwIDAgMCAgMCAxIDAgMCAwICAwIDAgMSAwIDAgIDAgMCAwIDE5IC05XFxcIiByZXN1bHQ9XFxcImJsb2JcXFwiPjwvZmVDb2xvck1hdHJpeD5cXHJcXG4gICAgICBmZUNvbXBvc2l0ZShpbj1cXFwiU291cmNlR3JhcGhpY1xcXCIgaW4yPVxcXCJibG9iXFxcIiBvcGVyYXRvcj1cXFwiYXRvcFxcXCIpIC8vQWZ0ZXIgcmV2aWV3aW5nIHRoaXMgYWZ0ZXIgeWVhcnMgSSBjYW4ndCByZW1lbWJlciB3aHkgSSBhZGRlZCB0aGlzIGJ1dCBpdCBpc24ndCBuZWNlc3NhcnkgZm9yIHRoZSBibG9iIGVmZmVjdFxcclxcbjwvZmlsdGVyPlxcclxcbjwvZGVmcz5cXHJcXG48L3N2Zz5cXHJcXG4tLT5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxuYXYgYXJpYS1sYWJlbD1cXFwiLi4uXFxcIj5cXHJcXG4gICAgPGRpdj5cXHJcXG4gICAgICAgIDxoMSBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPkdlc3Rpc2NpIFV0ZW50aSBSZWdpc3RyYXRpPC9oMT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDx1bCBpZD1cXFwidXNlckxpc3RcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIFxcclxcbiAgICA8L3VsPlxcclxcbiAgICA8dWwgaWQ9XFxcInBhZ2luYXRpb25cXFwiIGNsYXNzPVxcXCJwYWdpbmF0aW9uIHBhZ2luYXRpb24tc20gbXktMlxcXCI+XFxyXFxuICAgICAgICBcXHJcXG4gICAgPC91bD5cXHJcXG48L25hdj5cXHJcXG5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgaWQ9XFxcImJnYXJvdW5kXFxcIiBjbGFzcz1cXFwidGV4dC1jZW50ZXIgbXktNVxcXCI+XFxyXFxuICAgIDxpbWcgc3JjPVxcXCIuL2ltZy92aWRlb2dhbWVsb3Zlci5wbmdcXFwiIGFsdD1cXFwibm90IGZvdW5kXFxcIiBjbGFzcz1cXFwiaGVhZGVySW1nIG14LWF1dG9cXFwiIHN0eWxlPVxcXCJ3aWR0aDogNTAlOyBcXFwiIGlkPVxcXCJoZWFkZXJJbWdcXFwiPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxzdHlsZT5cXHJcXG5cXHJcXG4gIC53aWRnZXRJbnRybyB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC53aWRnZXRJbnRyby1kaXZ7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAjYW5uQ2FyZCB7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNpbWdDYXJkIHtcXHJcXG4gICAgaGVpZ2h0OiA2MCU7XFxyXFxuICAgIHdpZHRoOmZpdC1jb250ZW50O1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYnRuOmhvdmVyIHtcXHJcXG4gICAgb3V0bGluZS1jb2xvcjogdHJhbnNwYXJlbnQgO1xcclxcbiAgICBvdXRsaW5lLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgNHB4ICM1YTAxYTc7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuN3M7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaW1nUyB7XFxyXFxuICAgIHdpZHRoOiA1NHB4O1xcclxcbiAgICBoZWlnaHQ6IDQycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBib2R5IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC53aWRnZXRQaWMge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBpY1JpZ2h0IHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucGljbGVmdCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VjIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTAlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxyXFxuICAgIHBhZGRpbmc6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucCB7XFxyXFxuICAgIHBhZGRpbmc6IDBweDtcXHJcXG4gIH1cXHJcXG4gXFxyXFxuPC9zdHlsZT5cXHJcXG5cXHJcXG48c2VjdGlvbiBjbGFzcz1cXFwicCBzZWMgYm9yZGVyIGJvcmRlci1zdWNjZXNzIG1iLTIgYm9yZGVyLW9wYWNpdHktNTAgcm91bmRlZCByb3cgYWxpbmctaXRlbS1zdGFydFxcXCI+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJwIGNvbC00XFxcIj5cXHJcXG4gICAgPHBpY3R1cmU+XFxyXFxuICAgICAgPGltZyBjbGFzcz1cXFwid2lkZ2V0UGljIHBpY0xlZnQgcm91bmRlZC1zdGFydFxcXCIgc3JjPVxcXCIuL2ltZy9nYW1lc2VhcmNoLmpwZWdcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDAlXFxcIiBhbHQ9XFxcIlxcXCI+XFxyXFxuICAgIDwvcGljdHVyZT5cXHJcXG4gIDwvZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiYm9yZGVyLXN0YXJ0IGJvcmRlci0zIGJvcmRlci1wcmltYXJ5IGNvbC04IHRleHQtc3RhcnQgd2lkZ2V0VGV4dFxcXCI+XFxyXFxuICAgIDxoMT5cXHJcXG4gICAgICA8Yj5JbCBwb3J0YWxlIGRlaSB2ZXJpIGdhbWVycy48L2I+XFxyXFxuICAgIDwvaDE+XFxyXFxuICAgIDxoMj5cXHJcXG4gICAgICBTZWkgYWxsYSByaWNlcmNhIGRpIHVuIGdpb2NvLCB2ZWNjaGlvIG8gbnVvdm8gY2hlIHNpYSwgbWEgbm9uIHJpZXNjaSBhIHRyb3ZhcmxvPyBOb2kgYWJiaWFtbyBsYSBzb2x1emlvbmUgcGVyIHRlLi4uXFxyXFxuICAgICAgQ2VyY2EgdHJhIGNlbnRpbmFpYSBkaSBhbm51bmNpIGlsIHRpdG9sbyBjaGUgbm9uIHRyb3ZhdmkgcGnDuSwgbWV0dGl0aSBpbiBjb250YXR0byBjb24gbCd1dGVudGUgY2hlIGxvIHN0YSBzY2FtYmlhbmRvIFxcclxcbiAgICAgIGUgZmFpIGwnYWZmYXJlIGRlbCBzZWNvbG8uLi5cXHJcXG4gICAgPC9oMj5cXHJcXG4gIDwvZGl2Plxcclxcbjwvc2VjdGlvbj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgdGV4dC1jZW50ZXJcXFwiIHN0eWxlPVxcXCJtYXJnaW4tdG9wOiAxMCU7IG1hcmdpbi1ib3R0b206IDEwJTtcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6MTAlO21hcmdpbi1yaWdodDoxMCU7XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sXFxcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIHRleHQtYmctZGFuZ2VyXFxcIiBzdHlsZT1cXFwid2lkdGg6IDE4cmVtO2hlaWdodDogMTAwJTtcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgPGg1IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5DZXJjYTwvaDU+XFxyXFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPkNlcmNhIGlsIHR1byBnaW9jbyBwcmVmZXJlaXRvIHRyYSBjZW50aW5haWEgZGkgYW5udW5jaTwvcD5cXHJcXG4gICAgICAgICAgPGhyPlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cCBtYi0zIGZvcm0tY29udHJvbCBib3JkZXIgcm91bmRlZFxcXCIgc3R5bGU9XFxcIm1hcmdpbi10b3A6IDEwcHg7XFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCBib3JkZXItMFxcXCIgaWQ9XFxcInNlYXJjaFRpdGxlXFxcIiBwbGFjZWhvbGRlcj1cXFwiQ2VyY2FcXFwiIGFyaWEtbGFiZWw9XFxcInNlYXJjaFxcXCIgYXJpYS1kZXNjcmliZWRieT1cXFwiYmFzaWMtYWRkb24yXFxcIj5cXHJcXG4gICAgICAgICAgICA8YSBpZD1cXFwic2VhcmNoQnV0dG9uVGl0bGVcXFwiIGhyZWY9XFxcIiNcXFwiPjxpbWcgY2xhc3M9XFxcIm1zLTEgYnRuIGltZ1NcXFwiIHNyYz1cXFwiLi9pbWcvc2VhcmNoLnBuZ1xcXCIgYWx0PVxcXCJcXFwiPjwvYT5cXHJcXG4gICAgICAgICAgPC9kaXY+IFxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgdGV4dC1iZy1wcmltYXJ5XFxcIiBzdHlsZT1cXFwid2lkdGg6IDE4cmVtO2hlaWdodDogMTAwJTtcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgPGg1IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5Fc3Bsb3JhPC9oNT5cXHJcXG4gICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+RXNwbG9yYSBtaWdsaWFsaWEgZGkgZ2lvY2hpIHRyYSBnbGkgYW5udW5jaSBwcmVzZW50aTwvcD5cXHJcXG4gICAgICAgICAgPGhyPlxcclxcbiAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBpZD1cXFwiaW5zZXJ0aW9uc0NhcmRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWluZm9cXFwiPkFubnVuY2k8L2E+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbFxcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZCB0ZXh0LWJnLXN1Y2Nlc3NcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMThyZW07aGVpZ2h0OiAxMDAlO1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICA8aDUgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPlNjYW1iaWE8L2g1PlxcclxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj5IYWkgdW4gZ2lvY28gZGkgY3VpIG5vbiB0ZSBuZSBmYWkgcGnDuSBudWxsYSBwZXIgbGUgbWlsaWFyZGkgZGkgdm9sdGUgY2hlIGxvIGhhaSBmaW5pdG8/XFxyXFxuICAgICAgICAgICAgaW5zZXJpc2NpIHF1aSBpbCB0dW8gYW5udW5jaW8hXFxyXFxuICAgICAgICAgIDwvcD5cXHJcXG4gICAgICAgICAgPGhyPlxcclxcbiAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBpZD1cXFwiaW5zZXJ0Q2FyZFxcXCIgY2xhc3M9XFxcImJ0biBidG4tbGlnaHRcXFwiPkluc2VyaXNjaSBBbm51bmNpbzwvYT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxzZWN0aW9uIGNsYXNzPVxcXCJwIHNlYyBib3JkZXIgYm9yZGVyLXN1Y2Nlc3MgbWItMiBib3JkZXItb3BhY2l0eS01MCByb3VuZGVkIHJvdyBhbGluZy1pdGVtLXN0YXJ0XFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImJvcmRlci1lbmQgYm9yZGVyLTMgYm9yZGVyLXByaW1hcnkgY29sLTggdGV4dC1zdGFydCB3aWRnZXRUZXh0XFxcIj5cXHJcXG4gICAgPGgxPlxcclxcbiAgICAgIDxiPklsIHBvcnRhbGUgZGVpIHZlcmkgZ2FtZXJzLjwvYj5cXHJcXG4gICAgPC9oMT5cXHJcXG4gICAgPGgyPlxcclxcbiAgICAgIFNlaSBhbGxhIHJpY2VyY2EgZGkgdW4gZ2lvY28sIHZlY2NoaW8gbyBudW92byBjaGUgc2lhLCBtYSBub24gcmllc2NpIGEgdHJvdmFybG8/IE5vaSBhYmJpYW1vIGxhIHNvbHV6aW9uZSBwZXIgdGUuLi5cXHJcXG4gICAgICBDZXJjYSB0cmEgY2VudGluYWlhIGRpIGFubnVuY2kgaWwgdGl0b2xvIGNoZSBub24gdHJvdmF2aSBwacO5LCBtZXR0aXRpIGluIGNvbnRhdHRvIGNvbiBsJ3V0ZW50ZSBjaGUgbG8gc3RhIHZlbmRlbmRvLCBcXHJcXG4gICAgICBlIGZhaSBsJ2FmZmFyZSBkZWwgc2Vjb2xvLi4uXFxyXFxuICAgIDwvaDI+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcInAgY29sLTRcXFwiPlxcclxcbiAgICA8cGljdHVyZT5cXHJcXG4gICAgICA8aW1nIGNsYXNzPVxcXCJ3aWRnZXRQaWMgcGljUmlnaHQgcm91bmRlZC1lbmRcXFwiIHNyYz1cXFwiLi9pbWcvZ2FtZXRyYWRlLnBuZ1xcXCIgc3R5bGU9XFxcIndpZHRoOjEwMCVcXFwiIGFsdD1cXFwiXFxcIj5cXHJcXG4gICAgPC9waWN0dXJlPlxcclxcbiAgPC9kaXY+XFxyXFxuPC9zZWN0aW9uPlxcclxcblxcclxcbjxoMT48Yj5VbHRpbWkgYW5udW5jaTo8L2I+PC9oMT5cXHJcXG48aDI+Q29udHJvbGxhIHF1aSBnbGkgdWx0aW1pIGFubnVuY2k8L2gyPlxcclxcbjxkaXYgaWQ9XFxcImNhcm91c2VsRXhhbXBsZUNvbnRyb2xzXFxcIiBjbGFzcz1cXFwiY2Fyb3VzZWwgc2xpZGVcXFwiIGRhdGEtYnMtcmlkZT1cXFwiY2Fyb3VzZWxcXFwiPlxcclxcbiAgICA8ZGl2IGlkPVxcXCJpbm5lckNhcm91c2VsSG9tZVxcXCIgY2xhc3M9XFxcImNhcm91c2VsLWlubmVyXFxcIj5cXHJcXG4gICAgICAgXFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYXJvdXNlbC1jb250cm9sLXByZXZcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10YXJnZXQ9XFxcIiNjYXJvdXNlbEV4YW1wbGVDb250cm9sc1xcXCIgZGF0YS1icy1zbGlkZT1cXFwicHJldlxcXCI+XFxyXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPlByZXZpb3VzPC9zcGFuPlxcclxcbiAgICA8L2J1dHRvbj5cXHJcXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2Fyb3VzZWwtY29udHJvbC1uZXh0XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdGFyZ2V0PVxcXCIjY2Fyb3VzZWxFeGFtcGxlQ29udHJvbHNcXFwiIGRhdGEtYnMtc2xpZGU9XFxcIm5leHRcXFwiPlxcclxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvblxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICA8c3BhbiBjbGFzcz1cXFwidmlzdWFsbHktaGlkZGVuXFxcIj5OZXh0PC9zcGFuPlxcclxcbiAgICA8L2J1dHRvbj5cXHJcXG4gIDwvZGl2PlxcclxcblxcclxcbjxzZWN0aW9uIGNsYXNzPVxcXCJwIHNlYyBib3JkZXIgYm9yZGVyLXN1Y2Nlc3MgbWItMiBib3JkZXItb3BhY2l0eS01MCByb3VuZGVkIHJvdyBhbGluZy1pdGVtLXN0YXJ0XFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcInAgY29sLTRcXFwiPlxcclxcbiAgICA8cGljdHVyZT5cXHJcXG4gICAgICA8aW1nIGNsYXNzPVxcXCJ3aWRnZXRQaWMgcGljTGVmdCByb3VuZGVkLXN0YXJ0XFxcIiBzcmM9XFxcIi4vaW1nL1JldW5pb24uanBlZ1xcXCIgc3R5bGU9XFxcIndpZHRoOjEwMCVcXFwiIGFsdD1cXFwiXFxcIj5cXHJcXG4gICAgPC9waWN0dXJlPlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJib3JkZXItc3RhcnQgYm9yZGVyLTMgYm9yZGVyLXByaW1hcnkgY29sLTggdGV4dC1zdGFydCB3aWRnZXRUZXh0XFxcIj5cXHJcXG4gICAgPGgxPlxcclxcbiAgICAgIDxiPkNoaSBTaWFtbzwvYj5cXHJcXG4gICAgPC9oMT5cXHJcXG4gICAgPGgyPlxcclxcbiAgICAgIFNpYW1vIHVuIHB1bnRvIGQnaW5jb250cm8gcGVyIHR1dHRpIHF1ZWxsaSBjaGUgc2kgc29ubyBhcHBhc3Npb25hdGkgYSBxdWVsIG1vbmRvIG1hZ2ljbyByaW5jaGl1c28gYWxsJ2ludGVybm9cXHJcXG4gICAgICBkaSB1bmEgY2FydHVjY2lhLCBkaXNjbyBvIHNjaGVkYSwgZGFuZG9nbGkgbCdvcHBvcnR1bml0w6AgZGkgcG90ZXIgcml0cm92YXJlIHZlY2NoaSBzb2duaSwgZSBzY2FtYmlhcmxpIGNvbiBhbGN1bmkgbnVvdmkuXFxyXFxuICAgICAgTCdvcHBvcnR1bml0YSBkaSBjb25vc2NlcmUgcGVyc29uZSBkZWxsbyBzdGVzc28gcGFyZXJlLCBvIG9wcG9zdG8uXFxyXFxuICAgIDwvaDI+XFxyXFxuICA8L2Rpdj5cXHJcXG48L3NlY3Rpb24+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgPGxhYmVsIGZvcj1cXFwidXNlcm5hbWVTaWduSW5cXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5OaWNrbmFtZTwvbGFiZWw+XFxyXFxuICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwidXNlcm5hbWVTaWduSW5cXFwiPlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICA8bGFiZWwgZm9yPVxcXCJwYXNzd29yZFNpZ25JblxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPlBhc3N3b3JkPC9sYWJlbD5cXHJcXG4gICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwicGFzc3dvcmRTaWduSW5cXFwiPlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcIm1iLTMgZm9ybS1jaGVja1xcXCI+XFxyXFxuICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIGlkPVxcXCJyZW1lbWJlck1lU2lnbkluXFxcIj5cXHJcXG4gICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWxhYmVsXFxcIiBmb3I9XFxcInJlbWVtYmVyTWVTaWduSW5cXFwiPlJpY29yZGFtaTwvbGFiZWw+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBpZD1cXFwibG9naW5SZXN1bHRcXFwiIGNsYXNzPVxcXCJteS0zXFxcIj5cXHJcXG5cXHJcXG48L2Rpdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxidXR0b24gaWQ9XFxcInRyeVRvTG9nXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiPkFjY2VkaTwvYnV0dG9uPlxcclxcbjxwPk5vbiBzZWkgYW5jb3JhIHJlZ2lzdHJhdG8/PC9wPlxcclxcbjxidXR0b24gaWQ9XFxcImxvZ2luU2lnblVwXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiPlJlZ2lzdHJhdGk8L2J1dHRvbj5cXHJcXG48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiBkYXRhLWJzLWRpc21pc3M9XFxcIm1vZGFsXFxcIj5DaGl1ZGk8L2J1dHRvbj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgY2xhc3M9XFxcInRleHQtY2VudGVyIG1iLTNcXFwiPlxcclxcbiAgICA8aDM+T2gsIGNpIGRpc3BpYWNlIGNoZSB2YWkgdmlhITxicj5Ub3JuYSBhIHRyb3ZhcmNpITwvaDM+XFxyXFxuICAgIDxpbWcgc3JjPVxcXCIuL2ltZy9mYWRGYWNlLnBuZ1xcXCIgd2lkdGg9XFxcIjEwMFxcXCIgYWx0PVxcXCJpbW1hZ2luZSB0cmlzdGVcXFwiPlxcclxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgaWQ9XFxcIm15TW9kYWxcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJzaWduSW5Nb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctY2VudGVyZWRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVxcXCJtb2RhbC10aXRsZSBmcy01XFxcIiBpZD1cXFwic2lnbkluTW9kYWxMYWJlbFxcXCI+TWluY2hpYSBKb2hubnkgQ2FycmFiYmFnZ2lvPC9oMT5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4tY2xvc2VcXFwiIGRhdGEtYnMtZGlzbWlzcz1cXFwibW9kYWxcXFwiIGFyaWEtbGFiZWw9XFxcIkNsb3NlXFxcIj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGlkPVxcXCJteU1vZGFsQm9keVxcXCIgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGlkPVxcXCJteU1vZGFsRm9vdGVyXFxcIiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8IS0tbmF2YmFyIGNvbnRyb2xsZXIgaWNvbi0tPlxcclxcbjxidXR0b24gaWQ9XFxcImxvZ29cXFwiIGNsYXNzPVxcXCJsb2dvLWJ1dHRvblxcXCI+IDxpbWcgY2xhc3M9XFxcImxvZ29cXFwiIHNyYz1cXFwiLi9pbWcvbG9nby5wbmdcXFwiIGFsdD1cXFwibG9nb1xcXCI+PC9idXR0b24+XFxyXFxuPGJ1dHRvbiBpZD1cXFwiZ2FtZXNcXFwiIGNsYXNzPVxcXCJsb2dvLWJ1dHRvbiBiYWNrLXRyYW5zcGFyZW50XFxcIj4gPGltZyBjbGFzcz1cXFwibG9nb1xcXCIgc3JjPVxcXCIuL2ltZy9qb3lzdGljaygxKS5wbmdcXFwiXFxyXFxuICAgIGFsdD1cXFwibG9nb1xcXCI+PC9idXR0b24+XFxyXFxuPG5hdj5cXHJcXG4gIDx1bD5cXHJcXG4gICAgPCEtLW5hdmJhciBidXR0b25zLS0+XFxyXFxuICAgIDwhLS1uYXZiYXIgY29udHJvbGxlciBpY29uLS0+XFxyXFxuXFxyXFxuICAgIDwhLS15IGJ1dHRvbi0tPlxcclxcbiAgICA8YnV0dG9uIGlkPVxcXCJpbnNlcnRpb25zXFxcIiBjbGFzcz1cXFwiYnV0dG9uLW9uZSBuYXYtYnV0dG9uXFxcIj5Bbm51bmNpPC9idXR0b24+XFxyXFxuICAgIDwhLS1hIGJ1dHRvbi0tPlxcclxcbiAgICA8YnV0dG9uIGlkPVxcXCJhZGRJbnNlcnRpb25cXFwiIGNsYXNzPVxcXCJidXR0b24tdGhyZWUgbmF2LWJ1dHRvblxcXCI+Q3JlYSBBbm51bmNpbzwvYnV0dG9uPlxcclxcbiAgICA8IS0teCBidXR0b24tLT5cXHJcXG4gICAgPGJ1dHRvbiBpZD1cXFwibWFuYWdlbWVudFxcXCIgY2xhc3M9XFxcImJ1dHRvbi10d28gbmF2LWJ1dHRvblxcXCI+R2VzdGlvbmUgVXRlbnRpPC9idXR0b24+XFxyXFxuICAgIDwhLS1hIGJ1dHRvbi0tPlxcclxcbiAgICA8YnV0dG9uIGlkPVxcXCJpbnNNYW5hZ2VtZW50XFxcIiBjbGFzcz1cXFwiYnV0dG9uLXRocmVlIG5hdi1idXR0b25cXFwiPkdlc3Rpb25lIEFubnVuY2k8L2J1dHRvbj5cXHJcXG4gICAgPCEtLWIgYnV0dG9uLS0+XFxyXFxuICAgIDxidXR0b24gaWQ9XFxcImxvZ2luXFxcIiBjbGFzcz1cXFwiYnV0dG9uLWZvdXIgbmF2LWJ1dHRvblxcXCIgZGF0YS1icy10b2dnbGU9XFxcIm1vZGFsXFxcIiBkYXRhLWJzLXRhcmdldD1cXFwiI215TW9kYWxcXFwiPkxvZ2luPC9idXR0b24+XFxyXFxuICAgIDwhLS1iIGJ1dHRvbi0tPlxcclxcbiAgICA8YnV0dG9uIGlkPVxcXCJzaWduT3V0QnV0dG9uXFxcIiBjbGFzcz1cXFwiYnV0dG9uLWZvdXIgbmF2LWJ1dHRvblxcXCIgZGF0YS1icy10b2dnbGU9XFxcIm1vZGFsXFxcIlxcclxcbiAgICAgIGRhdGEtYnMtdGFyZ2V0PVxcXCIjbXlNb2RhbFxcXCI+TG9nb3V0PC9idXR0b24+XFxyXFxuICAgIDxidXR0b24gaWQ9XFxcInByb2ZpbGVcXFwiIGNsYXNzPVxcXCJwcm9maWxlLWJ1dHRvblxcXCI+XFxyXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcInBvc2l0aW9uLWFic29sdXRlIHRvcC0yIHN0YXJ0LTkwIHRyYW5zbGF0ZS1taWRkbGUgcC0yIGJnLWRhbmdlciBib3JkZXIgYm9yZGVyLWxpZ2h0IHJvdW5kZWQtY2lyY2xlXFxcIj5cXHJcXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPk5ldyBhbGVydHM8L3NwYW4+XFxyXFxuICAgICAgPC9zcGFuPlxcclxcbiAgICAgIDxpbWcgY2xhc3M9XFxcImxvZ28gcHJvZmlsZVxcXCIgc3JjPVxcXCIuL2ltZy9wcm9maWxlLnBuZ1xcXCIgYWx0PVxcXCJsb2dvXFxcIj5cXHJcXG4gICAgPC9idXR0b24+XFxyXFxuICA8L3VsPlxcclxcblxcclxcblxcclxcbjwvbmF2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPHN0eWxlPlxcclxcbiAgICAjbWFpbntcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcXHJcXG4gICAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgcmdiKDYzLCA2MywgNjgpO1xcclxcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgcmdiKDYzLCA2MywgNjgpO1xcclxcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHJnYig2MywgNjMsIDY4KTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XFxyXFxuPGRpdiBjbGFzcz1cXFwicm93IG10LTQgbWItNFxcXCI+XFxyXFxuICAgIDxkaXYgaWQ9XFxcInRpdGxlcHJvZmlsZVxcXCIgY2xhc3M9XFxcImNvbC0xMiB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuXFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcInJvdyBtdC0yIG1iLTRcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtMTIgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgPGgyPlxcclxcbiAgICAgICAgICAgIDxiPkVjY28gdW4gcmllcGlsb2dvIGRlaSB0dW9pIGRhdGk6PC9iPlxcclxcbiAgICAgICAgPC9oMj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwicm93IG10LTUgbWItMlxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC0yIHRleHQtZW5kXFxcIj5cXHJcXG4gICAgICAgIDxoMj5cXHJcXG4gICAgICAgICAgICA8YnI+PGJyPjxicj4gPGI+VXNlcm5hbWU8L2I+OiBcXHJcXG4gICAgICAgICAgICA8YnI+PGJyPiA8Yj5FbWFpbDwvYj46IFxcclxcbiAgICAgICAgICAgIDxicj48YnI+IDxiPk5vbWU8L2I+OiBcXHJcXG4gICAgICAgICAgICA8YnI+PGJyPiA8Yj5Db2dub21lPC9iPjogXFxyXFxuICAgICAgICA8L2gyPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBpZD1cXFwiYm9keXByb2ZpbGVcXFwiIGNsYXNzPVxcXCJjb2wtNCB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuXFxyXFxuXFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGlkPVxcXCJidXR0b25zLXByb2ZpbGVcXFwiIGNsYXNzPVxcXCJjb2wtMiB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICA8YnI+XFxyXFxuICAgICAgICA8YnI+XFxyXFxuICAgICAgICA8YnI+XFxyXFxuICAgICAgICA8YnI+XFxyXFxuICAgICAgICA8YnI+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcblxcclxcbiAgICA8ZGl2IGlkPVxcXCJpbnB1dC1wcm9maWxlXFxcIiBjbGFzcz1cXFwiY29sLTQgXFxcIj5cXHJcXG4gICAgICAgIDxicj5cXHJcXG4gICAgICAgIDxicj5cXHJcXG4gICAgICAgIDxicj5cXHJcXG4gICAgICAgIDxicj5cXHJcXG4gICAgICAgIDxicj5cXHJcXG4gICAgICAgIDxkaXYgIGNsYXNzPVxcXCJpbnB1dC1ncm91cCBtYi0zXFxcIiA+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtcHJlcGVuZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC10ZXh0XFxcIiBpZD1cXFwiYmFzaWMtYWRkb24xXFxcIj5Vc2VybmFtZTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XFxcInVzZXJuYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiVXNlcm5hbWVcXFwiIGFyaWEtbGFiZWw9XFxcIlVzZXJuYW1lXFxcIlxcclxcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVxcXCJiYXNpYy1hZGRvbjFcXFwiPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2ICBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgbWItMyBteS00XFxcIiA+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtcHJlcGVuZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC10ZXh0XFxcIiBpZD1cXFwiYmFzaWMtYWRkb24xXFxcIj5FbWFpbDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XFxcImVtYWlsXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW1haWxcXFwiIGFyaWEtbGFiZWw9XFxcIkVtYWlsXFxcIlxcclxcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVxcXCJiYXNpYy1hZGRvbjFcXFwiPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcInJvdyBtdC0yIG1iLTRcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtMTIgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgPGJyPlxcclxcbiAgICAgICAgPGJyPlxcclxcbiAgICAgICAgPGJyPlxcclxcbiAgICAgICAgPGgzPjxiPkNhbWJpbyBQYXNzd29yZDwvYj48L2gzPlxcclxcbiAgICAgICAgPGJyPlxcclxcbiAgICAgICAgPGJyPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLTYgdGV4dC1lbmRcXFwiPlxcclxcbiAgICAgICAgPGRpdiAgY2xhc3M9XFxcImlucHV0LWdyb3VwIG1iLTNcXFwiID5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cC1wcmVwZW5kXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLXRleHRcXFwiIGlkPVxcXCJiYXNpYy1hZGRvbjFcXFwiPlZlY2NoaWEgcGFzc3dvcmQ8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJvbGRQYXNzd29yZFxcXCIgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJWZWNjaGlhUGFzc3dvcmRcXFwiIGFyaWEtbGFiZWw9XFxcIlZlY2NoaWFQYXNzd29yZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cXFwiYmFzaWMtYWRkb24xXFxcIj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLTYgdGV4dC1zdGFydFxcXCI+XFxyXFxuICAgICAgICA8ZGl2ICBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgbWItM1xcXCIgPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwLXByZXBlbmRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtdGV4dFxcXCIgaWQ9XFxcImJhc2ljLWFkZG9uMVxcXCI+TnVvdmEgUGFzc3dvcmQ8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJuZXdQYXNzd29yZFxcXCIgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJOdW92YVBhc3N3b3JkXFxcIiBhcmlhLWxhYmVsPVxcXCJOdW92YVBhc3N3b3JkXFxcIlxcclxcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVxcXCJiYXNpYy1hZGRvbjFcXFwiPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2ICBpZD1cXFwiY3BcXFwiIGNsYXNzPVxcXCJjb2wtMTIgdGV4dC1jZW50ZXIgbXktNVxcXCI+XFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgXFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGZvcm0+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwibmFtZVNpZ25VcFxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPk5vbWU8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJuYW1lU2lnblVwXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwic3VybmFtZVNpZ25VcFxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPkNvZ25vbWU8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJzdXJuYW1lU2lnblVwXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwidXNlcm5hbWVTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5OaWNrbmFtZTwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInVzZXJuYW1lU2lnblVwXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiZW1haWxTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5FbWFpbDwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJlbWFpbFNpZ25VcFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcInBhc3N3b3JkU2lnblVwXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+UGFzc3dvcmQ8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwicGFzc3dvcmRTaWduVXBcXFwiIHJlcXVpcmVkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJjb25maXJtX3Bhc3N3b3JkU2lnblVwXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+Q29uZmVybWEgUGFzc3dvcmQ8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiY29uZmlybV9wYXNzd29yZFNpZ25VcFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGlkPVxcXCJzaWduVXBSZXN1bHRcXFwiIGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9mb3JtPlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGJ1dHRvbiBpZD1cXFwic2lnblVwTG9naW5cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+QWNjZWRpPC9idXR0b24+XFxyXFxuPGJ1dHRvbiBpZD1cXFwidHJ5dG9TaWduVXBcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgZGlzYWJsZWQ+UmVnaXN0cmF0aTwvYnV0dG9uPlxcclxcbjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIGRhdGEtYnMtZGlzbWlzcz1cXFwibW9kYWxcXFwiPkNoaXVkaTwvYnV0dG9uPlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBpZD1cXFwiY3JlYXRlVkdDb250YWluZXJcXFwiIGNsYXNzPVxcXCJjb250YWluZXIgbXktNSBiYWNrLXNlbWktdHJhbnNwYXJlbnRcXFwiIHN0eWxlPVxcXCJib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgcmdiKDE3MSwgMjA5LCA1Nyk7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCByZ2IoMTcxLCAyMDksIDU3KTtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgcmdiKDE3MSwgMjA5LCA1Nyk7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmdiKDE3MSwgMjA5LCA1Nyk7XFxyXFxuICAgIFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvdyBhbGlnbi1pdGVtcy1zdGFydFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNFxcXCIgc3R5bGU9XFxcIlxcclxcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgcmdiKDE3MSwgMjA5LCA1Nyk7IFxcclxcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYigxNzEsIDIwOSwgNTcpO1xcclxcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgICBcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJteS0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPjxiPkNyZWEgY29uc29sZSBlIGdlbmVyaTwvYj48L2gyPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibmV3R2VucmVcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj48Yj5OdW92byBHZW5lcmU8L2I+PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJuZXdHZW5yZVxcXCIgcGxhY2Vob2xkZXI9XFxcIkluc2VyaXNjaSBudW92byBnZW5lcmVcXFwiPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcIm5ld0dlbnJlQnRuXFxcIiBjbGFzcz1cXFwiYnRuIG1iLTQgYnV0dG9uLWhvdmVyXFxcIj48Yj5DcmVhPC9iPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJuZXdDb25zb2xlXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+PGI+TnVvdmEgQ29uc29sZTwvYj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcIm5ld0NvbnNvbGVcXFwiIHBsYWNlaG9sZGVyPVxcXCJJbnNlcmlzY2kgbnVvdmEgY29uc29sZVxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cXFwibmV3Q29uc29sZUJ0blxcXCIgY2xhc3M9XFxcImJ0biBtYi00IGJ1dHRvbi1ob3ZlclxcXCI+PGI+Q3JlYTwvYj48L2J1dHRvbj5cXHJcXG5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLThcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm15LTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj48Yj5JbnNlcmlzY2kgRGF0aSBWaWRlb2dpb2NvPC9iPjwvaDI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWItNVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5hbWVcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj48Yj5UaXRvbG88L2I+PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJWR25hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJJbnNlcmlzY2kgaWwgdGl0b2xvIGRlbCBnaW9jb1xcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWItNVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInllYXJcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj48Yj5Bbm5vIGRpIFVzY2l0YTwvYj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiVkd5ZWFyXFxcIiBtaW49XFxcIjE5NzBcXFwiIG1heGxlbmd0aD1cXFwiMjAyM1xcXCIgcGxhY2Vob2xkZXI9XFxcIkluc2VyaXNjaSBsJ2Fubm8gZGkgdXNjaXRhXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtYi01XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIiBmb3I9XFxcImNvdmVyXFxcIj48Yj5MaW5rIGltbWFnaW5lPC9iPjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiVkdjb3ZlclxcXCIgcGxhY2Vob2xkZXI9XFxcIkluc2VyaXNjaSBpbCBsaW5rIGRlbGxhIGNvcGVydGluYVxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvdyBhbGlnbi1pdGVtcy1zdGFydFxcXCI+XFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC00XFxcIj5cXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICA8aDQgY2xhc3M9XFxcInRleHQtZW5kXFxcIj48Yj5TZWxlemlvbmEgY2F0ZWdvcmllOjwvYj48L2g0PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgIDxkaXYgaWQ9XFxcImdlbnJlTGlzdFxcXCIgY2xhc3M9XFxcImNvbC04XFxcIj5cXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICBcXHJcXG5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93IGFsaWduLWl0ZW1zLXN0YXJ0XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC00XFxcIj5cXHJcXG4gICAgICAgICAgICA8YnI+PGJyPlxcclxcbiAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwidGV4dC1lbmRcXFwiPjxiPlNlbGV6aW9uYSBjb25zb2xlOjwvYj48L2g0PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJjb25zb2xlTGlzdFxcXCIgY2xhc3M9XFxcImNvbC04XFxcIj5cXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGJ1dHRvbiBpZD1cXFwibmV3VmlkZW9HYW1lQnRuXFxcIiBjbGFzcz1cXFwiYnRuIG1iLTQgYnV0dG9uLWhvdmVyXFxcIj48Yj5DcmVhPC9iPjwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG48L2Rpdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxzdHlsZT5cXHJcXG4gICAgLmJ0bjpob3ZlciB7XFxyXFxuICAgICAgICBvdXRsaW5lLWNvbG9yOiB0cmFuc3BhcmVudCA7XFxyXFxuICAgICAgICBvdXRsaW5lLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCAjNWEwMWE3O1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogMC43cztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjc2VhcmNoVGl0bGU6aG92ZXIge1xcclxcbiAgICAgICAgb3V0bGluZS1jb2xvcjogdHJhbnNwYXJlbnQgO1xcclxcbiAgICAgICAgb3V0bGluZS1zdHlsZTogc29saWQ7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggIzVhMDFhNztcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IDAuN3M7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3NlYXJjaFRpdGxlIHtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IC0zcHggMCBibGFjaywgMCAzcHggYmxhY2ssIDNweCAwIGJsYWNrLCAwIC0zcHggYmxhY2s7XFxyXFxuICAgICAgICBoZWlnaHQ6MjBweDtcXHJcXG4gICAgICAgIHdpZHRoOjIwJTtcXHJcXG4gICAgICAgIGZsb2F0OiBib3R0b207XFxyXFxuICAgICAgICBhbGlnbi1zZWxmOiByaWdodDtcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XFxyXFxuXFxyXFxuPGRpdiBzdHlsZT1cXFwiZGlzcGxheTogZmxleDtcXFwiIGNsYXNzPVxcXCJteS01XFxcIj5cXHJcXG5cXHJcXG4gICAgPHNwYW4gc3R5bGU9XFxcIm1hcmdpbi1yaWdodDogNDBweFxcXCI+XFxyXFxuICAgICAgICA8aW1nIHNyYz1cXFwiLi9pbWcvYnV0dG9uL3Nob3dhbGxCdG4ucG5nXFxcIiBjbGFzcz1cXFwiYnRuIHAtMFxcXCIgaGVpZ2h0PVxcXCIzNVxcXCIgc3R5bGU9XFxcImJvcmRlcjpub25lO2ltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBpZD1cXFwic2VsZWN0QWxsR2FtZXNcXFwiPlxcclxcbiAgICAgICAgICAgIDwvc3Bhbj4gPCEtLWZ1bnppb25lIGNoZSBwcmVuZGUgdHV0dGkgZ2xpIGFubnVuY2kgZSBsaSBzY2hpYWZmYSBuZWwgY29udGVudXRvIGFubnVuY2ktLT5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XFxcIm1hcmdpbi1yaWdodDogNDBweFxcXCIgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIuL2ltZy9idXR0b24vYnlnZW5yZUJ0bi5wbmdcXFwiIGNsYXNzPVxcXCJidG4gcC0wIGRyb3Bkb3duLXRvZ2dsZVxcXCIgaGVpZ2h0PVxcXCIzNVxcXCIgc3R5bGU9XFxcImJvcmRlcjpub25lO2ltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx1bCBpZD1cXFwiZ2FtZUdlbnJlc1xcXCIgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiA0MHB4XFxcIiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi9pbWcvYnV0dG9uL2J5eWVhckJ0bi5wbmdcXFwiIGNsYXNzPVxcXCJidG4gcC0wIGRyb3Bkb3duLXRvZ2dsZVxcXCIgaGVpZ2h0PVxcXCIzNVxcXCIgc3R5bGU9XFxcImJvcmRlcjpub25lO2ltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO1xcXCIgIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx1bCBpZD1cXFwiZ2FtZVllYXJzXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgIDxkaXYgc3R5bGU9XFxcInZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxcIiBjbGFzcz1cXFwiY29sLW1kLTMgbXgtYXV0b1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgYm9yZGVyLWRhcmsgYm9yZGVyLTMgYm9yZGVyIHJvdW5kZWRcXFwiIHR5cGU9XFxcInNlYXJjaFxcXCIgcGxhY2Vob2xkZXI9XFxcImNlcmNhXFxcIiBzdHlsZT1cXFwicGFkZGluZzogMnB4IDRweCAycHggNHB4O21hcmdpbi1yaWdodDoyMHB4XFxcIiBpZD1cXFwic2VhcmNoVGl0bGVHYW1lXFxcIj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxpbWcgc3JjPVxcXCIuL2ltZy9idXR0b24vcGx1c0J0bi5wbmdcXFwiIGNsYXNzPVxcXCJidG4gcC0wXFxcIiAgaWQ9XFxcImFkZFZpZGVvZ2FtZVxcXCIgYWx0PVxcXCJwbHVzXFxcIiBoZWlnaHQ9XFxcIjM1XFxcIiBzdHlsZT1cXFwiYm9yZGVyOm5vbmU7aW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7XFxcIiAgdHlwZT1cXFwiYnV0dG9uXFxcIiBoaWRkZW4+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbjxkaXY+XFxyXFxuICAgIDxkaXYgIGlkPVxcXCJWaWRlb2dhbWVDb250ZW50XFxcIiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdj5cXHJcXG4gICAgPHVsIGlkPVxcXCJwYWdlc1ZcXFwiIGNsYXNzPVxcXCJwYWdpbmF0aW9uIHBhZ2luYXRpb24tc20gbXktMlxcXCI+XFxyXFxuICAgICAgICBcXHJcXG4gICAgPC91bD5cXHJcXG48L2Rpdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIiAgICAgPGltZyAgaWQ9XFxcImJhY2stZ2FtZXNcXFwiICBjbGFzcz1cXFwibXQtNCBidXR0b25ob3ZlclxcXCIgd2lkdGg9MTIwIHNyYz1cXFwiLi9pbWcvYmFjay5wbmdcXFwiPlxcclxcblxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcInJvd1xcXCIgPlxcclxcbiAgICA8ZGl2IGlkPSBcXFwiZ2FtZVRpdGxlXFxcIiBjbGFzcz1cXFwiY29sLTEyIHRleHQtY2VudGVyXFxcIj5cXHJcXG5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgaWQ9XFxcImdhbWVJbWFnZVxcXCIgY2xhc3M9XFxcImNvbC02IHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgaWQ9XFxcImdhbWVJbmZvXFxcIiBjbGFzcz1cXFwiY29sLTYgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICBcXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgXFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJnYW1lSW5mb1xcXCIgY2xhc3M9XFxcImNvbC02IHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgXFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuICAgIFxcclxcblwiOyIsImltcG9ydCBhbm51bmNpIGZyb20gJy4vYW5udW5jaS5odG1sJ1xyXG5cclxuaW1wb3J0IGNyZWFBbm51bmNpbyBmcm9tICcuLi9jcmVhQW5udW5jaW8vY3JlYUFubnVuY2lvLmh0bWwnXHJcbmltcG9ydCBpbnNlcnRpb24gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnNlcnRpb24nO1xyXG5pbXBvcnQgZXhwYW5kSW5zZXJ0aW9uIGZyb20gJy4vYW5udW5jaW8nXHJcbmltcG9ydCBjcmVhdGVJbnNlcnRpb25QYWdlIGZyb20gJy4uL2NyZWFBbm51bmNpby9jcmVhQW5udW5jaW8nXHJcblxyXG5sZXQgbGlzdDogaW5zZXJ0aW9uW10gPSBbXTtcclxubGV0IGZpbHRlcmVkTGlzdDogaW5zZXJ0aW9uW109W11cclxubGV0IHZpZXc6IG51bWJlciA9IDZcclxubGV0IHR5cGU6IHN0cmluZztcclxubGV0IGdlbnJlczogc3RyaW5nW107XHJcbmxldCB5ZWFyczogbnVtYmVyW107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGFnZSgpIHsgICAgICAgLypJbml6aWFsaXp6YSB0dXR0byBjacOyIGNoZSBzZXJ2ZSBhbGxhIHBhZ2luYSBwZXIgZnVuemlvbmFyZSAqL1xyXG5cclxuICAgIGZldGNoKFwiL3dob0lzTG9nZ2VkXCIpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEgPT0gXCJBRE1JTlwiIHx8IGRhdGEgPT0gXCJVU0VSXCIpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRJbnNlcnRpb24yXCIpLnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkSW5zZXJ0aW9uMlwiKTtcclxuICAgICAgICAgICAgYnRuLm9uY2xpY2s9KCk9PntcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUw9Y3JlYUFubnVuY2lvO1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlSW5zZXJ0aW9uUGFnZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRJbnNlcnRpb24yXCIpLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgIHR5cGUgPSBcIkdVRVNUXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgbGlzdD1bXTtcclxuICAgIGZldGNoKCcvaW5zZXJ0aW9uJylcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBmb3IobGV0IGQgb2YgZGF0YSl7XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3JlYXRlUGFnaW5hdGlvbigpO1xyXG4gICAgICAgIHNob3dSZXN1bHRzKDEpO1xyXG4gICAgICAgIGFzc2lnbkZpbHRlcnMoKTsgICAgICAgICBcclxuICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEFsbEluc2VydGlvbnMoKXtcclxuICAgIGxpc3Q9W107XHJcbiAgICBmZXRjaCgnL2luc2VydGlvbicpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgZm9yKGxldCBkIG9mIGRhdGEpe1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgIH0gXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgZnVuY3Rpb24gc2hvd1Jlc3VsdHMoaTogbnVtYmVyKSB7XHJcblxyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc2VydGlvbkNvbnRlbnRcIik7XHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBsZXQgc3RhcnQgPSAoaSAtIDEpICogdmlldztcclxuICAgIGxldCBzdG9wID0gKGkgKiB2aWV3KSAtIDE7XHJcbiAgICBmb3IgKHN0YXJ0OyBzdGFydCA8PSBzdG9wOyBzdGFydCsrKSB7XHJcbiAgICAgICAgaWYgKHN0YXJ0ID49IGxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbGlzdFtzdGFydF0uYXBwcm92ZWQpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgbGV0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICBjb2wuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb2wtNCB0ZXh0LWNlbnRlclwiKTtcclxuICAgICAgICBjb2wuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMilcIik7XHJcbiAgICAgICAgY29sLm9ubW91c2VvdmVyPSgpPT57XHJcbiAgICAgICAgICAgIGNvbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29sLm9ubW91c2VvdXQ9KCk9PntcclxuICAgICAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaW5zZXJ0aW9uT25lPWxpc3Rbc3RhcnRdO1xyXG4gICAgICAgIGNvbC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBleHBhbmRJbnNlcnRpb24oaW5zZXJ0aW9uT25lKVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgICAgICBsZXQgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcclxuICAgICAgICBsZXQgZ2FtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcclxuICAgICAgICBsZXQgZ2VucmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XHJcbiAgICAgICAgbGV0IHllYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XHJcbiAgICAgICAgbGV0IGNvbnNvbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XHJcbiAgICAgICAgbGV0IHRyYWRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcclxuICAgICAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcclxuICAgICAgICBpbWFnZS5zcmMgPSBsaXN0W3N0YXJ0XS50cmFkZUdhbWUuY292ZXIubGluaztcclxuICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21iLTIgYm9yZGVyIGJvcmRlci0zIGJvcmRlci1pbmZvJylcclxuICAgICAgICBpbWFnZS5oZWlnaHQgPSAyMDA7XHJcbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gbGlzdFtzdGFydF0udGl0bGVcclxuICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ214LWF1dG8gbXQtMiByb3VuZGVkLXRvcCBiZy1saWdodCBib3JkZXItYm90dG9tIGJvcmRlci0zIGJvcmRlci1wcmltYXJ5Jyk7XHJcblxyXG4gICAgICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IGxpc3Rbc3RhcnRdLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWItMCBib3JkZXItdG9wIGJvcmRlci0zIGJvcmRlci1wcmltYXJ5IGJnLWxpZ2h0Jyk7XHJcblxyXG4gICAgICAgIGdhbWUuaW5uZXJIVE1MID0gbGlzdFtzdGFydF0udHJhZGVHYW1lLm5hbWU7XHJcbiAgICAgICAgZ2FtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21iLTAgYmctbGlnaHQnKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yKGxldCBpPSAwOyBpPGxpc3Rbc3RhcnRdLnRyYWRlR2FtZS5nZW5yZS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGdlbnJlLmlubmVySFRNTCArPSBsaXN0W3N0YXJ0XS50cmFkZUdhbWUuZ2VucmVbaV0uZ2VucmUgKyBcIiBcIjtcclxuICAgICAgICAgICAgZ2VucmUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtYi0wIGJnLWxpZ2h0Jyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICB5ZWFyLmlubmVySFRNTCA9IFwiXCIgKyBsaXN0W3N0YXJ0XS50cmFkZUdhbWUueWVhcjtcclxuICAgICAgICB5ZWFyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWItMCBiZy1saWdodCcpO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBjb25zb2xlLmlubmVySFRNTCA9IGxpc3Rbc3RhcnRdLnRyYWRlR2FtZS5jb25zb2xlLmNvbnNvbGU7XHJcbiAgICAgICAgY29uc29sZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21iLTAgYmctbGlnaHQnKTtcclxuXHJcblxyXG4gICAgICAgIHRyYWRlcy5pbm5lckhUTUwgPSBcIkFjY2V0dGVyZWkgU2NhbWJpbyBjb246IFwiICsgbGlzdFtzdGFydF0ud2lzaExpc3RbMF0ubmFtZTtcclxuICAgICAgICB0cmFkZXMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtYi0wIGJnLWxpZ2h0Jyk7XHJcblxyXG4gICAgICAgIGRhdGUuaW5uZXJIVE1MPSBsaXN0W3N0YXJ0XS5wdWJsaWNhdGlvbkRhdGU7XHJcbiAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3JvdW5kZWQtYm90dG9tIGJvcmRlci1ib3R0b20gYm9yZGVyLTMgYm9yZGVyLXByaW1hcnkgYmctbGlnaHQnKTtcclxuXHJcbiAgICAgICAgY29sLmFwcGVuZCh0aXRsZSxpbWFnZSxkZXNjcmlwdGlvbixnYW1lLGdlbnJlLHllYXIsY29uc29sZSx0cmFkZXMsZGF0ZSlcclxuICAgICAgICBjb250ZW50LmFwcGVuZChjb2wpO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhZ2luYXRpb24oKSB7XHJcbiAgICBsZXQgc2l6ZTogbnVtYmVyID0gbGlzdC5sZW5ndGhcclxuICAgIGxldCB0YWJzOiBudW1iZXIgPSBNYXRoLmNlaWwoc2l6ZSAvIHZpZXcpO1xyXG4gICAgY29uc29sZS5sb2coc2l6ZSwgdGFicylcclxuICAgIGxldCBwYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZXNcIik7XHJcbiAgICBwYWdlcy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGFiczsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGlmIChpID09IDEpIHtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWl0ZW0gYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIiwgXCJwYWdlXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWxpbmtcIik7XHJcbiAgICAgICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBhbGxMaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZXNcIikuY2hpbGRyZW47XHJcbiAgICAgICAgICAgIGZvciAobGV0IG9uZUxpIG9mIGFsbExpKSB7XHJcbiAgICAgICAgICAgICAgICBvbmVMaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbVwiKTtcclxuICAgICAgICAgICAgICAgIG9uZUxpLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbSBhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiLCBcInBhZ2VcIik7XHJcbiAgICAgICAgICAgIHNob3dSZXN1bHRzKGkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgYnRuLmlubmVySFRNTCA9IFwiXCIgKyAoaSk7XHJcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYnRuKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VzXCIpLmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2V0QWxsR2VucmVzKCkge1xyXG5cclxuICAgIGdlbnJlcyA9IFtdXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxpc3RbaV0udHJhZGVHYW1lLmdlbnJlLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmICghKGdlbnJlcy5pbmNsdWRlcyhsaXN0W2ldLnRyYWRlR2FtZS5nZW5yZVtqXS5nZW5yZSkpKSB7XHJcbiAgICAgICAgICAgICAgICBnZW5yZXMucHVzaChsaXN0W2ldLnRyYWRlR2FtZS5nZW5yZVtqXS5nZW5yZSlcclxuICAgICAgICAgICAgICAgIGxldCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2VucmVzXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgICAgICAgICAgbGkuaWQgPSBsaXN0W2ldLnRyYWRlR2FtZS5nZW5yZVtqXS5nZW5yZTtcclxuICAgICAgICAgICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZHJvcGRvd24taXRlbVwiKTtcclxuICAgICAgICAgICAgICAgIGJ0bi5pbm5lckhUTUwgPSBsaXN0W2ldLnRyYWRlR2FtZS5nZW5yZVtqXS5nZW5yZTtcclxuICAgICAgICAgICAgICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaEJ5R2VucmUobGkuaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdWwuYXBwZW5kKGxpKTtcclxuICAgICAgICAgICAgICAgIGxpLmFwcGVuZChidG4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0QWxsWWVhcnMoKSB7XHJcbiAgICB5ZWFycyA9IFtdXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoISh5ZWFycy5pbmNsdWRlcyhsaXN0W2ldLnRyYWRlR2FtZS55ZWFyKSkpIHtcclxuICAgICAgICAgICAgeWVhcnMucHVzaChsaXN0W2ldLnRyYWRlR2FtZS55ZWFyKVxyXG4gICAgICAgICAgICBsZXQgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInllYXJzXCIpO1xyXG4gICAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgICAgIGxpLmlkID0gXCJcIiArIGxpc3RbaV0udHJhZGVHYW1lLnllYXI7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkcm9wZG93bi1pdGVtXCIpO1xyXG4gICAgICAgICAgICBidG4uaW5uZXJIVE1MID0gXCJcIiArIGxpc3RbaV0udHJhZGVHYW1lLnllYXI7XHJcbiAgICAgICAgICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoQnlZZWFyKE51bWJlcihsaS5pZCkpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHVsLmFwcGVuZChsaSk7XHJcbiAgICAgICAgICAgIGxpLmFwcGVuZChidG4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNlYXJjaEJ5QWxsKCkgeyAgICAgICAgICAgICAvKkxhIGZ1bnppb25hIGRlbCBib3R0b25lIGNoZSBjZXJjYSB0dXR0aSBnbGkgYW5udW5jaSBzZW56YSBmaWx0cmkqL1xyXG5saXN0PVtdO1xyXG5mZXRjaCgnL2luc2VydGlvbicpXHJcbi50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4udGhlbigoZGF0YSkgPT4ge1xyXG4gICAgZm9yKGxldCBkIG9mIGRhdGEpe1xyXG4gICAgICAgIGxpc3QucHVzaChkKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICBzaG93UmVzdWx0cygxKTtcclxufSk7XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaEJ5VGl0bGUodGl0bGU6IHN0cmluZykge1xyXG4gICAgZmlsdGVyZWRMaXN0ID0gW11cclxuICAgIGZvciAobGV0IGVsZW1lbnQgb2YgbGlzdCkge1xyXG4gICAgICAgIGxldCBnYW1lTmFtZSA9IGVsZW1lbnQudHJhZGVHYW1lLm5hbWVcclxuICAgICAgICBsZXQgaW5zZXJ0aW9uVGl0bGUgPSBlbGVtZW50LnRpdGxlXHJcbiAgICAgICAgaWYgKCAoZ2FtZU5hbWUudG9VcHBlckNhc2UoKS5pbmNsdWRlcyh0aXRsZS50b1VwcGVyQ2FzZSgpKSkgXHJcbiAgICAgICAgfHwoaW5zZXJ0aW9uVGl0bGUudG9VcHBlckNhc2UoKS5pbmNsdWRlcyh0aXRsZS50b1VwcGVyQ2FzZSgpKSkpIHtcclxuICAgICAgICAgICAgZmlsdGVyZWRMaXN0LnB1c2goZWxlbWVudClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsaXN0ID0gW107XHJcbiAgICBsaXN0ID0gZmlsdGVyZWRMaXN0XHJcbiAgICBjcmVhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICBzaG93UmVzdWx0cygxKTtcclxuICAgIGdldEFsbEluc2VydGlvbnMoKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNlYXJjaEJ5R2VucmUoZ2VucmU6IFN0cmluZykge1xyXG4gICAgZmlsdGVyZWRMaXN0ID0gW11cclxuICAgIGZvciAobGV0IGVsZW1lbnQgb2YgbGlzdCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC50cmFkZUdhbWUuZ2VucmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudHJhZGVHYW1lLmdlbnJlW2ldLmdlbnJlID09IGdlbnJlKSB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZExpc3QucHVzaChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGkgPSBlbGVtZW50LnRyYWRlR2FtZS5nZW5yZS5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsaXN0ID0gW107XHJcbiAgICBsaXN0ID0gZmlsdGVyZWRMaXN0XHJcbiAgICBjcmVhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICBzaG93UmVzdWx0cygxKTtcclxuICAgIGdldEFsbEluc2VydGlvbnMoKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNlYXJjaEJ5WWVhcih5ZWFyOiBudW1iZXIpIHtcclxuICAgIGZpbHRlcmVkTGlzdCA9IFtdXHJcbiAgICBmb3IgKGxldCBlbGVtZW50IG9mIGxpc3QpIHtcclxuICAgICAgICBpZiAoZWxlbWVudC50cmFkZUdhbWUueWVhciA9PSB5ZWFyKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkTGlzdC5wdXNoKGVsZW1lbnQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGlzdCA9IFtdO1xyXG4gICAgbGlzdCA9IGZpbHRlcmVkTGlzdFxyXG4gICAgY3JlYXRlUGFnaW5hdGlvbigpO1xyXG4gICAgc2hvd1Jlc3VsdHMoMSk7XHJcbiAgICBnZXRBbGxJbnNlcnRpb25zKCk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGFzc2lnbkZpbHRlcnMoKSB7ICAgICAgICAgICAgIC8qQXNzZWduYSBsZSBmdW56aW9uaSBhaSBwdWxzYW50aSBuZWxsZSBkcm9wRG93bkxpc3QgZGEgcHJvdmFyZSovXHJcbiAgICBcclxubGV0IGFsbEdhbWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3RBbGxcIilcclxuICAgIGFsbEdhbWVzLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc2VhcmNoQnlBbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBbGxHZW5yZXMoKTtcclxuXHJcbiAgICBzZXRBbGxZZWFycygpO1xyXG5cclxuICAgIGxldCBzZWFyY2hUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoVGl0bGVcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIHNlYXJjaFRpdGxlLm9ua2V5ZG93biA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgc2VhcmNoQnlUaXRsZShzZWFyY2hUaXRsZS52YWx1ZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKlxyXG5mdW5jdGlvbiBnZXRBbGxJbnNlcnRpb25zKCkgeyAgXHJcbiAgICBsaXN0ID0gW107XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHaW9jbzEgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL2kuZXRzeXN0YXRpYy5jb20vNjI3NzgwNC9yL2lsLzdkZjAwZS82OTc1NDYzNDAvaWxfMTE0MHhOLjY5NzU0NjM0MF9maXZzLmpwZ1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHaW9jbzIgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL3d3dy5tb2J5Z2FtZXMuY29tL2ltYWdlcy9jb3ZlcnMvbC8xNDQ0NS10aGUtbGVnZW5kLW9mLXplbGRhLW5lcy1mcm9udC1jb3Zlci5qcGdcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlR2lvY28zID0ge1xyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvaXQvYi9iMy9Qb2slQzMlQTltb25fR2lhbGxvLnBuZ1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHaW9jbzQgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL21ldGFsZ2Vhci5mYW5kb20uY29tL2l0L3dpa2kvTWV0YWxfR2Vhcj9maWxlPU1ldGFsX0dlYXIuanBnXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdhbGxlcnkxID0ge1xyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvaXQvdGh1bWIvNy83Ny9QaWthY2h1LnBuZy8xMDI0cHgtUGlrYWNodS5wbmdcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlR2FsbGVyeTIgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL3d3dy5wbmdtYXJ0LmNvbS9maWxlcy8xMS9Gcm9nLU1lbWUtUE5HLUhELnBuZ1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHYWxsZXJ5MyA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vbWVkaWEubGljZG4uY29tL2Rtcy9pbWFnZS9ENTYzNUFRSHczRTV5WXlYVEx3L3Byb2ZpbGUtZnJhbWVkcGhvdG8tc2hyaW5rXzgwMF84MDAvMC8xNjQ0NTE4OTE4NjA2P2U9MTY3NTYyMDAwMCZ2PWJldGEmdD14MVJuWHFXc0RXQU9WUVVYR0Z1ak1vZFhaaGlHVVFKdTBhNkZBc1pOM0xvXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnaW9jbzEgPSB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmFtZTogXCJTdXBlck1hcmlvXCIsXHJcbiAgICAgICAgZ2VucmU6IFt7Z2VucmU6IFwiUExBVEZPUk1cIn1dLFxyXG4gICAgICAgIHllYXI6IDE5ODUsXHJcbiAgICAgICAgY29uc29sZToge2NvbnNvbGU6IFwiTkVTXCJ9LFxyXG4gICAgICAgIGNvdmVyOiBpbWFnZUdpb2NvMVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdpb2NvMiA9IHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBuYW1lOiBcIlRoZSBMZWdlbmQgb2YgWmVsZGFcIixcclxuICAgICAgICBnZW5yZTogW3tnZW5yZTogXCJBVlZFTlRVUkFcIn1dLFxyXG4gICAgICAgIHllYXI6IDE5ODYsXHJcbiAgICAgICAgY29uc29sZToge2NvbnNvbGU6IFwiTkVTXCJ9LFxyXG4gICAgICAgIGNvdmVyOiBpbWFnZUdpb2NvMlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdpb2NvMyA9IHtcclxuICAgICAgICBpZDogMyxcclxuICAgICAgICBuYW1lOiBcIlBva2Vtb24gR2lhbGxvXCIsXHJcbiAgICAgICAgZ2VucmU6IFt7Z2VucmU6IFwiR0RSXCJ9XSxcclxuICAgICAgICB5ZWFyOiAxOTk4LFxyXG4gICAgICAgIGNvbnNvbGU6IHtjb25zb2xlOiBcIkdBTUVfQk9ZX0NPTE9SXCJ9LFxyXG4gICAgICAgIGNvdmVyOiBpbWFnZUdpb2NvM1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdpb2NvNCA9IHtcclxuICAgICAgICBpZDogNCxcclxuICAgICAgICBuYW1lOiBcIk1ldGFsIEdlYXJcIixcclxuICAgICAgICBnZW5yZTogW3tnZW5yZTogXCJTVEVBTFRIXCJ9XSxcclxuICAgICAgICB5ZWFyOiAxOTg3LFxyXG4gICAgICAgIGNvbnNvbGU6IHtjb25zb2xlOiBcIk5FU1wifSxcclxuICAgICAgICBjb3ZlcjogaW1hZ2VHaW9jbzRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwdWJsaXNoZXJHaW9jbzEgPSB7XHJcbiAgICAgICAgdXNlcklkOiAxLFxyXG4gICAgICAgIHVzZXJuYW1lOiBcIlBpZXJvYWZmb25kb1wiLFxyXG4gICAgICAgIG5hbWU6IFwiUGllcmlub1wiLFxyXG4gICAgICAgIHN1cm5hbWU6IFwiQ2ljY2lub1wiLFxyXG4gICAgICAgIGVtYWlsOiBcInBpZXJpbm9jdW9yaWNpbm9AYW1vcmluby5jb21cIixcclxuICAgICAgICByYXRpbmc6IDY2NixcclxuICAgICAgICB2aWRlb2dhbWVzOiBbZ2lvY28xXVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGluc2VydGlvbjE6IGluc2VydGlvbiA9IHtcclxuICAgICAgICBhcHByb3ZlZDogdHJ1ZSxcclxuICAgICAgICB0aXRsZTogXCJTY2FtYmlvIFN1cGVyTWFyaW9cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTY2FtYmlvIHN1cGVybWFyaW8geGvDqCBtaSBzb25vIHNla2thdG8gYSBnaW9jYXJjaVwiLFxyXG4gICAgICAgIHB1Ymxpc2hlcjogcHVibGlzaGVyR2lvY28xLFxyXG4gICAgICAgIGdhbGxlcnk6IFtpbWFnZUdhbGxlcnkxLCBpbWFnZUdhbGxlcnkyLCBpbWFnZUdhbGxlcnkzXSxcclxuICAgICAgICB0cmFkZUdhbWU6IGdpb2NvMSxcclxuICAgICAgICB3aXNoTGlzdDogW2dpb2NvMiwgZ2lvY28zLCBnaW9jbzRdLFxyXG4gICAgICAgIG91dGNvbWU6IFwiV0lQXCIsXHJcbiAgICAgICAgcHVibGljYXRpb25EYXRlOiBcIjI5LTAxLTIwMjNcIlxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI3OyBpKyspIHtcclxuICAgICAgICBpZiAoaSAhPSAxNykge1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goaW5zZXJ0aW9uMSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goaW5zZXJ0aW9uMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuICAgIC8qUVVFU1RPIEUnIExBIEZVTlpJT05FIEdJVVNUQSBOT04gRkFNTyBDSEUgU0JBR0xJQVRFISAqL1xyXG5cclxuICAgIC8qRmV0Y2ggYSBiYWNrZW5kIGNvbiB0dXR0aSBnbGkgYW5udW5jaSwgYWdnaW9ybmEgbGEgbGlzdGEgbGlzdCovXHJcblxyXG4gICBcclxuICAgIFxyXG5cclxuXHJcbi8qZGEgcXVpIGluIHBvaSBsZSBmdW56aW9uaSBzZXJ2b25vIGEgXHJcbmNyZWFyZSBsYSBwYWdpbmEgdW5hIHZvbHRhIGNsaWNjYXRvICBcclxuc3VsIGJvdHRvbmUgYW5udW5jaSBlIGEgcmljYXJpY2FybGUqL1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQYWdlXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgaW5zZXJ0aW9uIGZyb20gJy4uL2ludGVyZmFjZXMvaW5zZXJ0aW9uJztcclxuaW1wb3J0IGFubnVuY2lvIGZyb20gJy4vYW5udW5jaW8uaHRtbCdcclxuaW1wb3J0IGNyZWF0ZVBhZ2UgZnJvbSAnLi9hbm51bmNpJztcclxuaW1wb3J0IGFubnVuY2kgZnJvbSAnLi9hbm51bmNpLmh0bWwnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXhwYW5kSW5zZXJ0aW9uKGluc2VydGlvbjogaW5zZXJ0aW9uKSB7XHJcblxyXG4gICAgLypJbXBvc3RvIGxhIHBhZ2luYSBwcmluY2lwYWxlIGNvbiBpbCB0ZW1wbGF0ZSBkZWwgc2luZ29sbyBhbm51bmNpbyAqL1xyXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XHJcbiAgICBtYWluLmlubmVySFRNTCA9IGFubnVuY2lvO1xyXG5cclxuICAgIFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ2FtZXNcIikub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MID0gYW5udW5jaTtcclxuICAgICAgICBjcmVhdGVQYWdlKCk7XHJcbiAgICB9XHJcbiAgICBsZXQgYmFjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja1wiKVxyXG4gICAgLy9iYWNrLmFwcGVuZChidXR0b24pO1xyXG5cclxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIHRpdGxlLmlubmVySFRNTCA9IGluc2VydGlvbi50aXRsZTtcclxuICAgIGJhY2suYXBwZW5kKHRpdGxlKTtcclxuXHJcblxyXG5cclxuICAgIC8qSW1wb3N0byBpbCBjYXJvc2VsbG8gZGVsbGUgaW1tYWdpbmkgdXRlbnRlICovXHJcbiAgICBsZXQgaW5kaWNhdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmRpY2F0b3JcIilcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5zZXJ0aW9uLmdhbGxlcnkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiZGF0YS1icy10YXJnZXRcIiwgXCIjaW1hZ2VTbGlkZXJcIik7XHJcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImRhdGEtYnMtc2xpZGUtdG9cIiwgXCJcIiArIGkpO1xyXG4gICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgXCJTbGlkZSBcIiArIChpICsgMSkpO1xyXG4gICAgICAgIGluZGljYXRvci5hcHBlbmQoYnRuKTtcclxuICAgIH1cclxuICAgIGxldCBpbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5uZXJcIilcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluc2VydGlvbi5nYWxsZXJ5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJvdXNlbC1pdGVtIGFjdGl2ZVwiKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcm91c2VsLWl0ZW1cIilcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgaW1nLnNyYyA9IGluc2VydGlvbi5nYWxsZXJ5W2ldLmxpbms7XHJcbiAgICAgICAgaW1nLndpZHRoID0gNDAwO1xyXG4gICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImQtYmxvY2sgdy0xMDBcIik7XHJcbiAgICAgICAgaW1nLmFsdCA9IFwiR2FsbGVyeSBJbWFnZVwiICsgKGkgKyAxKVxyXG4gICAgICAgIGRpdi5hcHBlbmQoaW1nKTtcclxuICAgICAgICBpbm5lci5hcHBlbmQoZGl2KVxyXG4gICAgfVxyXG4gICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBpbWcuc3JjID0gaW5zZXJ0aW9uLnRyYWRlR2FtZS5jb3Zlci5saW5rO1xyXG4gICAgaW1nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW1nLWZsdWlkIHJvdW5kZWQtc3RhcnRcIilcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZC1pbWFnZVwiKS5hcHBlbmQoaW1nKTtcclxuICAgIGxldCBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICAgIGg0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2FyZC10aXRsZVwiKTtcclxuICAgIGg0LmlubmVySFRNTCA9IGluc2VydGlvbi50cmFkZUdhbWUubmFtZTtcclxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2FyZC10ZXh0XCIpO1xyXG4gICAgcC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImZvbnQtc2l6ZTogMS41ZW07XCIpXHJcbiAgICBwLmlubmVySFRNTCA9IFwiR2VuZXJlOiBcIjtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5zZXJ0aW9uLnRyYWRlR2FtZS5nZW5yZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHAuaW5uZXJIVE1MICs9IGluc2VydGlvbi50cmFkZUdhbWUuZ2VucmVbaV0uZ2VucmUgKyBcIiBcIlxyXG4gICAgfVxyXG4gICAgcC5pbm5lckhUTUwgKz0gXCI8YnI+XCJcclxuICAgICAgICArIFwiQW5ubzogXCIgKyBpbnNlcnRpb24udHJhZGVHYW1lLnllYXIgKyBcIjxicj5cIlxyXG4gICAgICAgICsgXCJDb25zb2xlOiBcIiArIGluc2VydGlvbi50cmFkZUdhbWUuY29uc29sZS5jb25zb2xlO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkLWJvZHlcIikuYXBwZW5kKGg0LCBwKTtcclxuICAgIGxldCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgZGVzYy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLFwiY29sb3I6d2hpdGVcIilcclxuICAgIGRlc2MuaW5uZXJIVE1MID0gXCJEZXNjcml6aW9uZTpcIlxyXG4gICAgbGV0IGluc0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICBpbnNEZXNjLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsXCJjb2xvcjp3aGl0ZVwiKVxyXG4gICAgaW5zRGVzYy5pbm5lckhUTUwgPSBpbnNlcnRpb24uZGVzY3JpcHRpb247XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc2VydGlvbi1jcmVhdG9yXCIpLmlubmVySFRNTCA9IFwiTCd1dGVudGVcIi8vaW5zZXJ0aW9uLnB1Ymxpc2hlci51c2VybmFtZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zZXJ0aW9uLWRlc2NyaXB0aW9uXCIpLmFwcGVuZChkZXNjLCBpbnNEZXNjKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4taXRlbS1cIiArIChpICsgMSkpLmlubmVySFRNTCA9IGluc2VydGlvbi53aXNoTGlzdFtpXS5uYW1lO1xyXG4gICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGltZy5zcmMgPSBpbnNlcnRpb24ud2lzaExpc3RbaV0uY292ZXIubGluaztcclxuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJkLWltZy10b3BcIilcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltZy1pdGVtLVwiICsgKGkgKyAxKSkuYXBwZW5kKGltZyk7XHJcbiAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBwLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2FyZC10ZXh0XCIpO1xyXG4gICAgICAgIHAuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJmb250LXNpemU6IDEuNWVtO1wiKTtcclxuICAgICAgICBwLmlubmVySFRNTCA9IFwiR2VuZXJlOiBcIjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluc2VydGlvbi50cmFkZUdhbWUuZ2VucmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgcC5pbm5lckhUTUwgKz0gaW5zZXJ0aW9uLnRyYWRlR2FtZS5nZW5yZVtpXS5nZW5yZSArIFwiIFwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAuaW5uZXJIVE1MICs9IFwiPGJyPlwiXHJcbiAgICAgICAgICAgICsgXCJBbm5vOiBcIiArIGluc2VydGlvbi50cmFkZUdhbWUueWVhciArIFwiPGJyPlwiXHJcbiAgICAgICAgICAgICsgXCJDb25zb2xlOiBcIiArIGluc2VydGlvbi50cmFkZUdhbWUuY29uc29sZS5jb25zb2xlO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keS1pdGVtLVwiICsgKGkgKyAxKSkuYXBwZW5kKHApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBleHBhbmRJbnNlcnRpb24iLCJpbXBvcnQgY3JlYUFubnVuY2lvIGZyb20gJy4uL2NyZWFBbm51bmNpby9jcmVhQW5udW5jaW8uaHRtbCdcclxuaW1wb3J0IGluc2VydGlvbiBmcm9tICcuLi9pbnRlcmZhY2VzL2luc2VydGlvbic7XHJcbmltcG9ydCBleHBhbmRJbnNlcnRpb24gZnJvbSAnLi9hbm51bmNpbydcclxuaW1wb3J0IGNyZWF0ZUluc2VydGlvblBhZ2UgZnJvbSAnLi4vY3JlYUFubnVuY2lvL2NyZWFBbm51bmNpbydcclxuXHJcbmxldCBsaXN0OiBpbnNlcnRpb25bXSA9IFtdO1xyXG5sZXQgdmlldzogbnVtYmVyID0gNlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhZ2UyKCkgeyAgICAgICAvKkluaXppYWxpenphIHR1dHRvIGNpw7IgY2hlIHNlcnZlIGFsbGEgcGFnaW5hIHBlciBmdW56aW9uYXJlICovXHJcblxyXG4gICAgZmV0Y2goJy9pbnNlcnRpb24nKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIGZvcihsZXQgZCBvZiBkYXRhKXtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKGQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3RBbGwyXCIpLm9uY2xpY2sgPSBzZWFyY2hCeUFsbDI7XHJcbiAgICAgICAgYXNzaWduRmlsdGVyczIoKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZUNhdGVnb3J5XCIpLm9uY2xpY2sgPSBjcmVhdGVDYXRlZ29yeTtcclxuICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRJbnNlcnRpb25cIik7XHJcbiAgICAgICAgYnRuLm9uY2xpY2s9KCk9PntcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTD1jcmVhQW5udW5jaW87XHJcbiAgICAgICAgICAgIGNyZWF0ZUluc2VydGlvblBhZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jcmVhdGVJbnNlcnRpb24oKTtcclxuICAgICAgICAvL2dldEFsbEluc2VydGlvbnMyKCk7XHJcbiAgICAgICAgY3JlYXRlUGFnaW5hdGlvbjIoKTtcclxuICAgICAgICBzaG93UmVzdWx0czIoMSk7XHJcblxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgXHJcblxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2VhcmNoQnlBbGwyKCkgeyAgICAgICAgICAgICAvKkxhIGZ1bnppb25hIGRlbCBib3R0b25lIGNoZSBjZXJjYSB0dXR0aSBnbGkgYW5udW5jaSBzZW56YSBmaWx0cmkqL1xyXG4gICAgY3JlYXRlUGFnaW5hdGlvbjIoKTtcclxuICAgIHNob3dSZXN1bHRzMigxKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGFzc2lnbkZpbHRlcnMyKCkgeyAgICAgICAgICAgICAvKkFzc2VnbmEgbGUgZnVuemlvbmkgYWkgcHVsc2FudGkgbmVsbGUgZHJvcERvd25MaXN0IGRhIHByb3ZhcmUqL1xyXG4gICAgbGV0IGdlbmVyaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2VucmVzMlwiKS5jaGlsZHJlblxyXG4gICAgZm9yIChsZXQgZyBvZiBnZW5lcmkpIHtcclxuICAgICAgICAoZyBhcyBIVE1MQnV0dG9uRWxlbWVudCkub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2VhcmNoQnlHZW5yZTIoZy5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IGFubmkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInllYXJzMlwiKS5jaGlsZHJlblxyXG4gICAgZm9yIChsZXQgYSBvZiBhbm5pKSB7XHJcbiAgICAgICAgKGEgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNlYXJjaEJ5WWVhcjIoTnVtYmVyKChhIGFzIEhUTUxCdXR0b25FbGVtZW50KS5pZCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IHNlYXJjaFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hUaXRsZTJcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIHNlYXJjaFRpdGxlLm9ua2V5ZG93biA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgc2VhcmNoQnlUaXRsZTIoc2VhcmNoVGl0bGUudmFsdWUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEJ1dHRvbjJcIik7XHJcbiAgICBzZWFyY2hCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBzZWFyY2hCeVRpdGxlMihzZWFyY2hUaXRsZS52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICAvKmxldCBzZWFyY2hUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoVGl0bGUyXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBzZWFyY2hUaXRsZS5vbmtleWRvd24gPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIHNlYXJjaEJ5VGl0bGUyKHNlYXJjaFRpdGxlLnZhbHVlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEJ1dHRvbjJcIik7XHJcbiAgICBzZWFyY2hCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBzZWFyY2hCeVRpdGxlMihzZWFyY2hUaXRsZS52YWx1ZSlcclxuICAgIH0qL1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2VhcmNoQnlUaXRsZTIodGl0bGU6IHN0cmluZykge1xyXG4gICAgZ2V0QWxsSW5zZXJ0aW9uczIoKTtcclxuICAgIGxldCBmaWx0ZXJlZExpc3QgPSBbXVxyXG4gICAgZm9yIChsZXQgZWxlbWVudCBvZiBsaXN0KSB7XHJcbiAgICAgICAgbGV0IHRpdG9sbyA9IGVsZW1lbnQudGl0bGU7XHJcbiAgICAgICAgbGV0IGdhbWVOYW1lID0gZWxlbWVudC50cmFkZUdhbWUubmFtZVxyXG4gICAgICAgIGlmICgodGl0b2xvLnRvVXBwZXJDYXNlKCkuaW5jbHVkZXModGl0bGUudG9VcHBlckNhc2UoKSkpXHJcbiAgICAgICAgICAgIHx8IChnYW1lTmFtZS50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKHRpdGxlLnRvVXBwZXJDYXNlKCkpKSkge1xyXG4gICAgICAgICAgICBmaWx0ZXJlZExpc3QucHVzaChlbGVtZW50KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxpc3QgPSBbXTtcclxuICAgIGxpc3QgPSBmaWx0ZXJlZExpc3RcclxuICAgIGNyZWF0ZVBhZ2luYXRpb24yKCk7XHJcbiAgICBzaG93UmVzdWx0czIoMSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZWFyY2hCeUdlbnJlMihnZW5yZTogU3RyaW5nKSB7XHJcbiAgICBjb25zb2xlLmxvZyhnZW5yZSk7XHJcbiAgICBsZXQgZmlsdGVyZWRMaXN0ID0gW11cclxuICAgIGZvciAobGV0IGVsZW1lbnQgb2YgbGlzdCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC50cmFkZUdhbWUuZ2VucmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudHJhZGVHYW1lLmdlbnJlW2ldLmdlbnJlID09IGdlbnJlKSB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZExpc3QucHVzaChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGk9ZWxlbWVudC50cmFkZUdhbWUuZ2VucmUubGVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGlzdCA9IFtdO1xyXG4gICAgbGlzdCA9IGZpbHRlcmVkTGlzdFxyXG4gICAgY3JlYXRlUGFnaW5hdGlvbjIoKTtcclxuICAgIHNob3dSZXN1bHRzMigxKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VhcmNoQnlZZWFyMih5ZWFyOiBudW1iZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKHllYXIpO1xyXG4gICAgbGV0IGZpbHRlcmVkTGlzdCA9IFtdO1xyXG4gICAgZm9yIChsZXQgZWxlbWVudCBvZiBsaXN0KSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQudHJhZGVHYW1lLnllYXIgPT0geWVhcikge1xyXG4gICAgICAgICAgICBmaWx0ZXJlZExpc3QucHVzaChlbGVtZW50KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxpc3QgPSBbXTtcclxuICAgIGxpc3QgPSBmaWx0ZXJlZExpc3RcclxuICAgIGNyZWF0ZVBhZ2luYXRpb24yKCk7XHJcbiAgICBzaG93UmVzdWx0czIoMSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRBbGxJbnNlcnRpb25zMigpe1xyXG4gICAgbGlzdCA9IFtdO1xyXG4gICAgZmV0Y2goJy9pbnNlcnRpb24nKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIGZvcihsZXQgZCBvZiBkYXRhKXtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKGQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVBhZ2luYXRpb24yKCkge1xyXG4gICAgbGV0IHNpemU6IG51bWJlciA9IGxpc3QubGVuZ3RoXHJcbiAgICBsZXQgdGFiczogbnVtYmVyID0gTWF0aC5jZWlsKHNpemUgLyB2aWV3KTtcclxuICAgIGxldCBwYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZXMyXCIpO1xyXG4gICAgcGFnZXMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRhYnM7IGkrKykge1xyXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBpZiAoaSA9PSAxKSB7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtIGFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIsIFwicGFnZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1saW5rXCIpO1xyXG4gICAgICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYWxsTGkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VzMlwiKS5jaGlsZHJlbjtcclxuICAgICAgICAgICAgZm9yIChsZXQgb25lTGkgb2YgYWxsTGkpIHtcclxuICAgICAgICAgICAgICAgIG9uZUxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgb25lTGkucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtIGFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIsIFwicGFnZVwiKTtcclxuICAgICAgICAgICAgc2hvd1Jlc3VsdHMyKGkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgYnRuLmlubmVySFRNTCA9IFwiXCIgKyAoaSk7XHJcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYnRuKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VzMlwiKS5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dSZXN1bHRzMihpOiBudW1iZXIpIHtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnRpb25Db250ZW50MlwiKTtcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGxldCBzdGFydCA9IChpIC0gMSkgKiB2aWV3O1xyXG4gICAgbGV0IHN0b3AgPSAoaSAqIHZpZXcpIC0gMTtcclxuICAgIGZvciAoc3RhcnQ7IHN0YXJ0IDw9IHN0b3A7IHN0YXJ0KyspIHtcclxuICAgICAgICBpZiAoc3RhcnQgPj0gbGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFsaXN0W3N0YXJ0XS5hcHByb3ZlZCkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBsZXQgY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIGxldCBqdWFuID0gbGlzdFtzdGFydF0udGl0bGUgIC8vXCJcIiArIHN0YXJ0O1xyXG4gICAgICAgIC8vSnVhbiDDqCBsJ2lkIGRlaSBib3R0b25pLCBzYXLDoCBsJ2lkIGRlbGxlIGluc2VyemlvbmkgcXVhbmRvIHNpIGltcGxlbWVudGVyYW5ubyBnbGkgYW5udW5jaSBkYWwgZGJcclxuICAgICAgICBsZXQgaXNPbkNoZWNrZWRMaXN0UmVzdWx0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGZvcihsZXQgZWxlbWVudCBvZiBjaGVja2VkTGlzdCl7XHJcbiAgICAgICAgICAgIGlmKGp1YW49PWVsZW1lbnQpe1xyXG4gICAgICAgICAgICAgICAgaXNPbkNoZWNrZWRMaXN0UmVzdWx0PXRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCAnbGlzdC1ncm91cC1pdGVtJyk7XHJcbiAgICAgICAgaWYoaXNPbkNoZWNrZWRMaXN0UmVzdWx0KXtcclxuICAgICAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKVwiKTtcclxuICAgICAgICAgICAgY29sLnNldEF0dHJpYnV0ZSgnb25tb3VzZW92ZXInLCAnc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNilcIiknKTtcclxuICAgICAgICAgICAgY29sLnNldEF0dHJpYnV0ZSgnb25tb3VzZW91dCcsICdzZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKVwiKScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb2wuc2V0QXR0cmlidXRlKFwiaWRcIiwganVhbik7XHJcblxyXG4gICAgICAgIGNvbC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBhZGRJbnNlcnRpb25Ub0xpc3QoanVhbilcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2ZvbnQtd2VpZ2h0OiBib2xkOycpO1xyXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9IGxpc3Rbc3RhcnRdLnRpdGxlO1xyXG4gICAgICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IFwiXCIgKyBsaXN0W3N0YXJ0XS50cmFkZUdhbWUubmFtZTtcclxuICAgICAgICBmb3IobGV0IGk9IDA7IGk8bGlzdFtzdGFydF0udHJhZGVHYW1lLmdlbnJlLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MICs9IFwiLCBcIiArIGxpc3Rbc3RhcnRdLnRyYWRlR2FtZS5nZW5yZVtpXS5nZW5yZSArIFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTCArPSBcIiwgXCIgKyBsaXN0W3N0YXJ0XS50cmFkZUdhbWUueWVhcjtcclxuXHJcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MICs9IFwiLCBcIiArIGxpc3Rbc3RhcnRdLnRyYWRlR2FtZS5jb25zb2xlLmNvbnNvbGU7XHJcblxyXG4gICAgICAgIGNvbC5hcHBlbmQodGl0bGUsZGVzY3JpcHRpb24pXHJcbiAgICAgICAgY29udGVudC5hcHBlbmQoY29sKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coY2hlY2tlZExpc3QpO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGFnZTJcclxuXHJcblxyXG5cclxuXHJcbmxldCBjaGVja2VkTGlzdDogc3RyaW5nW10gPSBbXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRJbnNlcnRpb25Ub0xpc3QoaW5zOiBzdHJpbmcpe1xyXG5cclxuICAgIGxldCBpc09uQ2hlY2tlZExpc3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBmb3IobGV0IGVsZW1lbnQgb2YgY2hlY2tlZExpc3Qpe1xyXG4gICAgICAgIGlmKGlucz09ZWxlbWVudCl7XHJcbiAgICAgICAgICAgIGlzT25DaGVja2VkTGlzdCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNoZWNrZWRMaXN0LnNwbGljZShjaGVja2VkTGlzdC5pbmRleE9mKGVsZW1lbnQpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYoaXNPbkNoZWNrZWRMaXN0KXtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnMpLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucykuc2V0QXR0cmlidXRlKCdvbm1vdXNlb3ZlcicsICdzZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KVwiKScpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucykuc2V0QXR0cmlidXRlKCdvbm1vdXNlb3V0JywgJ3NldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpXCIpJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNoZWNrZWRMaXN0LnB1c2goaW5zKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnMpLnJlbW92ZUF0dHJpYnV0ZSgnb25tb3VzZW92ZXInKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnMpLnJlbW92ZUF0dHJpYnV0ZSgnb25tb3VzZW91dCcpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucykuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNilcIik7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2F0ZWdvcnkoKXtcclxuICAgIGNvbnNvbGUubG9nKGNoZWNrZWRMaXN0KVxyXG4gICAgXHJcbiAgICBjb25zdCBvYmo9e1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXRlZ29yeU5hbWVcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcbiAgICAgICAgaW5zZXJ0aW9uc1RpdGxlOiBjaGVja2VkTGlzdCxcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGNvbnN0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KG9iailcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaChcIi9jYXRlZ29yeVwiLCByZXF1ZXN0KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKT0+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgaWYoZGF0YT4wKXtcclxuICAgICAgICAgICAgYWxlcnQoXCJDYXRlZ29yaWEgQ3JlYXRhXCIpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiRScgRklOSUlJSVRBQSEhXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAvL1ByZW5kZSBpbCB2YWxvcmUgZGVsbGEgY2FzZWxsYSBkaSB0ZXN0byBlIGxvIG1ldHRlIGNvbWUgbm9tZSBkZWxsYSBjYXRlZ29yaWFcclxuICAgXHJcbiAgICBcclxuICAgIC8vVE9ETzogTEEgRkVFRUVFRUVFRUVFRUVUQ0ghISFcclxuICAgIC8vVE9ETzogaW5zZXJpc2NpIGdsaSBlbGVtZW50aSBkaSBjaGVja2VkTGlzdCBpbiB1bmEgY2F0ZWdvcmlhIG5lbCBEQlxyXG4gICAgLy9UT0RPOiBNZXRvZG8gZGEgZmFyZSBwZXIgaW5zZXJpcmUgZ2xpIGVsZW1lbnRpIG5lbCBkYXRhYmFzZSBoYWhhXHJcbiAgICBjb25zb2xlLmxvZyhcIkNhdGVnb3JpYSBjcmVhdGEgcGnDuSBvIG1lbm9cIik7XHJcblxyXG4gICAgLy9TdnVvdGEgaWwgdmFsb3JlIGRlbGxhIGNhc2VsbGEgZGkgdGVzdG8gZSBsYSBsaXN0YVxyXG5cclxuICAgIGNoZWNrZWRMaXN0ID0gW107XHJcblxyXG4gICAgLy9SZWltcG9zdGEgbGEgcGFnaW5hIGEgY29tZSBzdGF2YSBwcmltYVxyXG4gICAgY3JlYXRlUGFnaW5hdGlvbjIoKTtcclxuICAgIHNob3dSZXN1bHRzMigxKTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgdXNlciBmcm9tIFwiLi4vaW50ZXJmYWNlcy91c2VyXCI7XHJcbmltcG9ydCBjaGF0SGVhZGVyVGVtcGxhdGUgZnJvbSBcIi4vY2hhdEhlYWRlci5odG1sXCJcclxuaW1wb3J0IGNoYXRCb2R5VGVtcGxhdGUgZnJvbSBcIi4vY2hhdEJvZHkuaHRtbFwiXHJcbmltcG9ydCBjaGF0Rm9vdGVyVGVtcGxhdGUgZnJvbSBcIi4vY2hhdEZvb3Rlci5odG1sXCJcclxuaW1wb3J0IG1lc3NhZ2UgZnJvbSBcIi4uL2ludGVyZmFjZXMvbWVzc2FnZVwiO1xyXG5pbXBvcnQgdXNlckluZm8gZnJvbSBcIi4uL2ludGVyZmFjZXMvdXNlckluZm9cIjtcclxuXHJcblxyXG5sZXQgY2hhdFZlcnNpb25zOiBNYXA8bnVtYmVyLCBNYXA8bnVtYmVyLCBudW1iZXI+PiA9IG5ldyBNYXAoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGlja0NoYXQoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3dDaGF0VXNlcnNcIikub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBzaG93VXNlcnNDaGF0KCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxlcnRcIikuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgIH07XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzaG93VXNlcnNDaGF0KCkge1xyXG4gICAgZmV0Y2goXCIvdXNlclwiKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhOiB1c2VyW10pID0+IHtcclxuICAgICAgICAgICAgZmV0Y2goXCIvdXNlci90aGlzXCIpXHJcbiAgICAgICAgICAgICAgICAudGhlbigodGhpc1VzZXJTZXJpYWx5emVkKSA9PiB0aGlzVXNlclNlcmlhbHl6ZWQuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigodGhpc1VzZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2hhdEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhdEJveFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjaGF0Qm94LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGlzdC1ncm91cFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB1c2VyIG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXIudXNlcklkICE9IHRoaXNVc2VyLnVzZXJJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmlkID0gXCJcIiArIHVzZXIudXNlcklkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmlubmVySFRNTCA9IHVzZXIudXNlcm5hbWUgKyBcIiBcIiArIHVzZXIucmF0aW5nICsgXCIgPGkgY2xhc3M9J2ZhLXJlZ3VsYXIgZmEtc3Rhcic+PC9pPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7IGZpbmRDaGF0KE51bWJlcihidG4uaWQpKSB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmFwcGVuZChidG4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhdEJveC5hcHBlbmQoZGl2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmRDaGF0KGlkUmVjZWl2ZXI6IG51bWJlcikge1xyXG4gICAgZmV0Y2goXCIvY2hhdC9cIiArIGlkUmVjZWl2ZXIpXHJcbiAgICAgICAgLnRoZW4oKHNlcmlhbGl6ZWRJZENoYXQpID0+IHNlcmlhbGl6ZWRJZENoYXQuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChpZENoYXQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGlkQ2hhdCAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgZmV0Y2goXCIvdXNlci9cIiArIGlkUmVjZWl2ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHNlcmlhbGl6ZWRVc2VySW5mbykgPT4gc2VyaWFsaXplZFVzZXJJbmZvLmpzb24oKSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigodXNlckluZm8pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoYXRCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXRCb3hcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXRCb3guaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhdEJveC5pbm5lckhUTUwgPSBjaGF0SGVhZGVyVGVtcGxhdGUgKyBjaGF0Qm9keVRlbXBsYXRlICsgY2hhdEZvb3RlclRlbXBsYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hhdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGF0VGl0bGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXRUaXRsZS5pbm5lckhUTUwgPSB1c2VySW5mby51c2VybmFtZSArIFwiIFwiICsgdXNlckluZm8ucmF0aW5nICsgXCIgPGkgY2xhc3M9J2ZhLXJlZ3VsYXIgZmEtc3Rhcic+PC9pPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2xldCBpZFJlZnJlc2ggPSBzZXRJbnRlcnZhbCgoKT0+e29wZW5DaGF0KE51bWJlcihpZENoYXQpKTt9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlbkNoYXQoTnVtYmVyKGlkQ2hhdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gb3BlbkNoYXQoY2hhdElkOiBudW1iZXIpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhdEJvZHlcIikuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja1RvTGlzdFwiKS5vbmNsaWNrID0gc2hvd1VzZXJzQ2hhdDtcclxuICAgIGF3YWl0IGZldGNoKFwiL2NoYXQvY29udmVyc2F0aW9uL1wiICsgY2hhdElkKVxyXG4gICAgICAgIC50aGVuKChzZXJpYWxpemVkQ29udmVyc2F0aW9uKSA9PiBzZXJpYWxpemVkQ29udmVyc2F0aW9uLmpzb24oKSlcclxuICAgICAgICAudGhlbigoY29udmVyc2F0aW9uOiBtZXNzYWdlW10pID0+IHtcclxuXHJcbiAgICAgICAgICAgIGZldGNoKFwiL3VzZXIvdGhpc1wiKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHNlcmlhbGl6ZWRUaGlzVXNlckluZm8pID0+IHNlcmlhbGl6ZWRUaGlzVXNlckluZm8uanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHRoaXNVc2VySW5mbzogdXNlckluZm8pID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRleHRCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc3NhZ2VUZXh0XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tYWRkb24yXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU1lc3NhZ2UodGhpc1VzZXJJbmZvLnVzZXJJZCwgY2hhdElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEJveC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0Qm94Lm9ua2V5ZG93biA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVNZXNzYWdlKHRoaXNVc2VySW5mby51c2VySWQsIGNoYXRJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Qm94LnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBtZXNzYWdlIG9mIGNvbnZlcnNhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS51c2VybmFtZSA9PSB0aGlzVXNlckluZm8udXNlcm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1aWxkTWVzc2FnZVNlbmRlZCh0aGlzVXNlckluZm8udXNlcm5hbWUsIHRoaXNVc2VySW5mby5yYXRpbmcsIG1lc3NhZ2UudGltZXN0YW1wLCBtZXNzYWdlLnRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVpbGRNZXNzYWdlUmVjaXZlZChtZXNzYWdlLnVzZXJuYW1lLCBtZXNzYWdlLnJhdGluZywgbWVzc2FnZS50aW1lc3RhbXAsIG1lc3NhZ2UudGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgZnVuY3Rpb24gYnVpbGRNZXNzYWdlUmVjaXZlZCh1c2VybmFtZTogc3RyaW5nLCByYXRpbmc6IG51bWJlciwgdGltZXN0YW1wOiBzdHJpbmcsIHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBjaGF0Qm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhdEJvZHlcIik7XHJcbiAgICAgICAgbGV0IGRpdkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGRpdkluZm8uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIik7XHJcbiAgICAgICAgbGV0IHBEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgcERhdGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzbWFsbCBtYi0xIHRleHQtbXV0ZWRcIik7XHJcbiAgICAgICAgcERhdGUuaW5uZXJIVE1MID0gbm9ybWFsUGVyc29uRGF0ZVRyYW5zZm9ybSh0aW1lc3RhbXApO1xyXG4gICAgICAgIGxldCBwVXNlcm5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBwVXNlcm5hbWUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzbWFsbCBtYi0xXCIpO1xyXG4gICAgICAgIHBVc2VybmFtZS5pbm5lckhUTUwgPSB1c2VybmFtZSArIFwiIFwiICsgcmF0aW5nICsgXCI8aSBjbGFzcz0nZmEtcmVndWxhciBmYS1zdGFyJz48L2k+XCI7XHJcblxyXG4gICAgICAgIGxldCBkaXZUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkaXZUZXh0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1zdGFydFwiKTtcclxuICAgICAgICBsZXQgZGl2SW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGxldCBwVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHBUZXh0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic21hbGwgcC0yIG1zLTMgbWItMyByb3VuZGVkLTNcIik7XHJcbiAgICAgICAgcFRleHQuaW5uZXJIVE1MID0gdGV4dDtcclxuXHJcbiAgICAgICAgbGV0IGltZ0F2YXRhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgaW1nQXZhdGFyLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4vaW1nL3Byb2ZpbGUucG5nXCIpO1xyXG4gICAgICAgIGltZ0F2YXRhci5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJhdmF0YXJcIik7XHJcbiAgICAgICAgaW1nQXZhdGFyLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwid2lkdGg6IDQ1cHg7IGhlaWdodDogMTAwJTtcIik7XHJcblxyXG4gICAgICAgIGRpdkluZm8uYXBwZW5kKHBVc2VybmFtZSwgcERhdGUpO1xyXG4gICAgICAgIGRpdklubmVyLmFwcGVuZChwVGV4dCk7XHJcbiAgICAgICAgZGl2VGV4dC5hcHBlbmQoaW1nQXZhdGFyLCBkaXZJbm5lcik7XHJcbiAgICAgICAgY2hhdEJvZHkuYXBwZW5kKGRpdkluZm8sIGRpdlRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGJ1aWxkTWVzc2FnZVNlbmRlZCh1c2VybmFtZTogc3RyaW5nLCByYXRpbmc6IG51bWJlciwgdGltZXN0YW1wOiBzdHJpbmcsIHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBjaGF0Qm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhdEJvZHlcIik7XHJcblxyXG4gICAgICAgIGxldCBkaXZJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkaXZJbmZvLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIpO1xyXG4gICAgICAgIGxldCBwRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHBEYXRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic21hbGwgbWItMSB0ZXh0LW11dGVkXCIpO1xyXG4gICAgICAgIHBEYXRlLmlubmVySFRNTCA9IG5vcm1hbFBlcnNvbkRhdGVUcmFuc2Zvcm0odGltZXN0YW1wKTtcclxuICAgICAgICBsZXQgcFVzZXJuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgcFVzZXJuYW1lLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic21hbGwgbWItMVwiKTtcclxuICAgICAgICBwVXNlcm5hbWUuaW5uZXJIVE1MID0gdXNlcm5hbWUgKyBcIiBcIiArIHJhdGluZyArIFwiPGkgY2xhc3M9J2ZhLXJlZ3VsYXIgZmEtc3Rhcic+PC9pPlwiO1xyXG5cclxuICAgICAgICBsZXQgZGl2VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZGl2VGV4dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtZW5kIG1iLTQgcHQtMVwiKTtcclxuICAgICAgICBsZXQgZGl2SW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGxldCBwVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHBUZXh0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic21hbGwgcC0yIG1lLTMgbWItMyB0ZXh0LXdoaXRlIHJvdW5kZWQtMyBiZy13YXJuaW5nXCIpO1xyXG4gICAgICAgIHBUZXh0LmlubmVySFRNTCA9IHRleHQ7XHJcblxyXG4gICAgICAgIGxldCBpbWdBdmF0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGltZ0F2YXRhci5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL2ltZy9wcm9maWxlLnBuZ1wiKTtcclxuICAgICAgICBpbWdBdmF0YXIuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiYXZhdGFyXCIpO1xyXG4gICAgICAgIGltZ0F2YXRhci5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndpZHRoOiA0NXB4OyBoZWlnaHQ6IDEwMCU7XCIpO1xyXG5cclxuICAgICAgICBkaXZJbmZvLmFwcGVuZChwRGF0ZSwgcFVzZXJuYW1lKTtcclxuICAgICAgICBkaXZJbm5lci5hcHBlbmQocFRleHQpO1xyXG4gICAgICAgIGRpdlRleHQuYXBwZW5kKGRpdklubmVyLCBpbWdBdmF0YXIpO1xyXG4gICAgICAgIGNoYXRCb2R5LmFwcGVuZChkaXZJbmZvLCBkaXZUZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVNZXNzYWdlKHVzZXJJRDogbnVtYmVyLCBjaGF0SUQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlVGV4dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgICAgICBjb25zdCBuZXdNZXNzYWdlID0ge1xyXG4gICAgICAgICAgICBjaGF0SWQ6IGNoYXRJRCxcclxuICAgICAgICAgICAgdXNlcklkOiB1c2VySUQsXHJcbiAgICAgICAgICAgIHRleHQ6IHRleHQudmFsdWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld01lc3NhZ2UpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmZXRjaChcIi9jaGF0XCIsIHJlcXVlc3QpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGVuQ2hhdChjaGF0SUQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBub3JtYWxQZXJzb25EYXRlVHJhbnNmb3JtKHRpbWVzdGFtcDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGxldCBkYXRlID0gbmV3IERhdGUodGltZXN0YW1wKTtcclxuICAgIHJldHVybiBkYXRlLnRvTG9jYWxlU3RyaW5nKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hOb3RpZmljYXRpb24oKSB7XHJcbiAgICBmZXRjaChcIi9pc0FuVXNlckxvZ2dlZFwiKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKHNlYXJjaFVzZXJDaGF0cywgNTAwMCk7XHJcbiAgICAgICAgICAgICAgICBmZXRjaChcIi9jcmVhdGVJbnRlcnZhbC9cIiArIGludGVydmFsSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0b3BTZWFyY2hOb3RpZmljYXRpb24oKSB7XHJcbiAgICBmZXRjaChcIi9kZWxldGVJbnRlcnZhbFwiKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZGF0YSk7XHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFVzZXJDaGF0cygpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiTG9pc1wiKTtcclxuICAgIGZldGNoKFwiL2NoYXQvYWxsVXNlckNoYXRcIilcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2hhdFZlcnNpb25zLmdldChkYXRhLmlkKSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNoYXRWZXJzaW9ucy5zZXQoZGF0YS5pZCwgbmV3IE1hcDxudW1iZXIsIG51bWJlcj4oKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaWQgb2YgZGF0YS5jaGF0SWRzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhdFZlcnNpb25zLmdldChkYXRhLmlkKS5nZXQoaWQpID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYXRWZXJzaW9ucy5nZXQoZGF0YS5pZCkuc2V0KGlkLCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZldGNoKFwiL2NoYXQvdmVyc2lvbi9cIiArIGlkKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChzZXJpYWxpemVkVmVyc2lvbikgPT4gc2VyaWFsaXplZFZlcnNpb24uanNvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh2ZXJzaW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgodmVyc2lvbiA+IGNoYXRWZXJzaW9ucy5nZXQoZGF0YS5pZCkuZ2V0KGlkKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKFwiL2NoYXQvb25lL1wiK2lkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChzZXJpYWxpemVkQ2hhdCkgPT4gc2VyaWFsaXplZENoYXQuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChjaGF0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGF0LnVzZXIxLmlkICE9IGRhdGEuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxlcnRcIikucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhdFZlcnNpb25zLmdldChkYXRhLmlkKS5zZXQoaWQsIHZlcnNpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZENsaWNrQ2hhdDtcclxuIiwiaW1wb3J0IGNyZWFBbm51bmNpbyBmcm9tICcuL2NyZWFBbm51bmNpby5odG1sJ1xyXG5pbXBvcnQgYW5udW5jaSBmcm9tICcuL2FubnVuY2kuaHRtbCdcclxuaW1wb3J0IHZpZGVvZ2FtZSBmcm9tICcuLi9pbnRlcmZhY2VzL3ZpZGVvZ2FtZSc7XHJcblxyXG5sZXQgZnVsbExpc3Q6IHZpZGVvZ2FtZVtdID0gW11cclxubGV0IHVzZXJMaXN0OiB2aWRlb2dhbWVbXSA9IFtdXHJcbmxldCB3aXNoTGlzdDogc3RyaW5nW10gPSBbXVxyXG5sZXQgbGlzdElkOm51bWJlcltdPVtdXHJcbmxldCBnYW1lVG9UcmFkZTp2aWRlb2dhbWU7XHJcbmxldCBnaW9jb0RhU2NhbWJpYXJlOiBudW1iZXI7XHJcbmxldCBpbmRleCA9IDA7XHJcblxyXG5cclxuLypDcmVhIGxhIGxpc3RhIGRlaSBnaW9jaGkgcG9zc2VkdXRpIGRhbGwndXRlbnRlICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnNlcnRpb25QYWdlKCkge1xyXG4gICAgZ2V0VXNlckdhbWVzKCk7XHJcbiAgICBnZXRBbGxHYW1lcygpO1xyXG4gICAgYnV0dG9uVGVtcGxhdGUoKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VuZEluc2VydGlvblwiKS5vbmNsaWNrPSgpPT57XHJcbiAgICAgICAgc2VuZEFsbCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBidXR0b25UZW1wbGF0ZSgpe1xyXG4gICAgbGV0IHNlbGVjdGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3RlZFRyYWRlR2FtZVwiKTtcclxuICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IGxpQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGxldCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IGNvbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCBwaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgXHJcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBcIlNlbGV6aW9uYSBpbCBnaW9jbyBkYSBzY2FtYmlhcmVcIjtcclxuXHJcbiAgICByb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJteC1hdXRvIHJvdyBib3JkZXItYm90dG9tIGJvcmRlci0yIGJvcmRlci1wcmltYXJ5XCIpO1xyXG4gICAgY29sLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29sLTIgbXgtYXV0byBtcy0wIG15LWF1dG8gbXMtMVwiKTtcclxuICAgIGNvbDIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb2wtMiBteC1hdXRvIG1lLTEgbXktYXV0b1wiKTtcclxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibXktYXV0b1wiKTtcclxuICAgIGNvbDIuc2V0QXR0cmlidXRlKCdzdHlsZScsICd3aWR0aDozMDAlJyk7ICBcclxuICAgIGxpQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgICBsaUJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInAtMCBteC1hdXRvIG15LWF1dG8gZHJvcGRvd24taXRlbVwiKTtcclxuXHJcblxyXG4gICAgcm93LmFwcGVuZChjb2wsIGNvbDIpO1xyXG4gICAgY29sLmFwcGVuZCh0aXRsZSk7XHJcbiAgICBjb2wyLmFwcGVuZChwaWMpO1xyXG4gICAgbGlCdG4uYXBwZW5kKHJvdyk7XHJcblxyXG4gICAgc2VsZWN0ZWQuYXBwZW5kKGxpQnRuKTtcclxuXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRBbGxHYW1lcygpIHtcclxuICAgIGZldGNoKFwiL3ZpZGVvZ2FtZXNcIilcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigodmlkZW9nYW1lcykgPT4ge1xyXG4gICAgICAgICAgICBmdWxsTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBnYW1lIG9mIHZpZGVvZ2FtZXMpIHtcclxuICAgICAgICAgICAgICAgIGZ1bGxMaXN0LnB1c2goZ2FtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHdpc2hHYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2lzaEdhbWVzXCIpO1xyXG4gICAgICAgICAgICB3aXNoR2FtZXMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yIChsZXQgZ2FtZSBvZiBmdWxsTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29sUGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBwaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgICAgICAgICAgcm93LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibXgtYXV0byBwYi00IHJvdyBib3JkZXItYm90dG9tIGJvcmRlci0yIGJvcmRlci1wcmltYXJ5XCIpO1xyXG4gICAgICAgICAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29sLTIgbXgtYXV0byBtcy0wIG15LWF1dG9cIik7XHJcbiAgICAgICAgICAgICAgICBjb2xQaWMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb2wtMiBteC1hdXRvIG1lLTEgbXktYXV0b1wiKTtcclxuICAgICAgICAgICAgICAgIHBpYy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGdhbWUuY292ZXIubGluayk7XHJcbiAgICAgICAgICAgICAgICBwaWMuc2V0QXR0cmlidXRlKCdhbHQnLCBnYW1lLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgcGljLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYm9yZGVyIGJvcmRlci0yIGJvcmRlci1pbmZvIHJvdW5kZWQnKVxyXG4gICAgICAgICAgICAgICAgcGljLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnd2lkdGg6MzAwJScpOyAgICBcclxuICAgICAgICAgICAgICAgIGxpQnRuLmlkID0gZ2FtZS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgbGlCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgICAgIGxpQnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZHJvcGRvd24taXRlbVwiKTtcclxuICAgICAgICAgICAgICAgIHRpdGxlLmlubmVySFRNTCA9IGdhbWUubmFtZTtcclxuICAgICAgICAgICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibXktYXV0b1wiKTtcclxuICAgICAgICAgICAgICAgIGxpQnRuLm9uY2xpY2sgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXN0OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpc2hMaXN0Lmxlbmd0aCA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpc2hMaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgZWxlbWVudCBvZiB3aXNoTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCA9PSBsaS5pbm5lckhUTUwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGVzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aXNoTGlzdFtpbmRleF0gPSBsaS5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RJZFtpbmRleF0gPSBnYW1lLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2lvY2hpIGRlc2lkZXJhdGk6IFwiK2xpc3RJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd1NlbGVjdGVkR2FtZXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsaS5hcHBlbmQobGlCdG4pO1xyXG4gICAgICAgICAgICAgICAgbGlCdG4uYXBwZW5kKHJvdyk7XHJcbiAgICAgICAgICAgICAgICBjb2wuYXBwZW5kKHRpdGxlKTtcclxuICAgICAgICAgICAgICAgIGNvbFBpYy5hcHBlbmQocGljKVxyXG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZChjb2wsIGNvbFBpYyk7XHJcbiAgICAgICAgICAgICAgICB3aXNoR2FtZXMuYXBwZW5kKGxpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFVzZXJHYW1lcygpIHtcclxuICAgIGZldGNoKFwiL3ZpZGVvZ2FtZXMvdXNlclwiKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKCh2aWRlb2dhbWVzKSA9PiB7XHJcbiAgICAgICAgICAgIHVzZXJMaXN0ID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGdhbWUgb2YgdmlkZW9nYW1lcykge1xyXG4gICAgICAgICAgICAgICAgdXNlckxpc3QucHVzaChnYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgdHJhZGVHYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFkZUdhbWVcIik7XHJcbiAgICAgICAgICAgIHRyYWRlR2FtZS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBnYW1lIG9mIHVzZXJMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBsaUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICAgICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29sUGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIHJvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm14LWF1dG8gcm93IGJvcmRlci1ib3R0b20gYm9yZGVyLTIgYm9yZGVyLXByaW1hcnlcIik7XHJcbiAgICAgICAgICAgICAgICBjb2wuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb2wtMiBteC1hdXRvIG1zLTAgbXktYXV0byBtcy0xXCIpO1xyXG4gICAgICAgICAgICAgICAgY29sUGljLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29sLTIgbXgtYXV0byBtZS0xIG15LWF1dG9cIik7XHJcbiAgICAgICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRyb3Bkb3duLWl0ZW1cIik7XHJcbiAgICAgICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIml0ZW1TZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgICAgIHRpdGxlLmlubmVySFRNTCA9IGdhbWUubmFtZTtcclxuICAgICAgICAgICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibXktYXV0b1wiKTtcclxuICAgICAgICAgICAgICAgIHBpYy5zcmMgPSBnYW1lLmNvdmVyLmxpbms7XHJcbiAgICAgICAgICAgICAgICBwaWMuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2JvcmRlciBib3JkZXItMiBib3JkZXItaW5mbyByb3VuZGVkJyk7XHJcbiAgICAgICAgICAgICAgICBwaWMuc2V0QXR0cmlidXRlKCdzdHlsZScsICd3aWR0aDoxMjhweDtoZWlnaHQ6YXV0bycpOyAgXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhnYW1lLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgbGlCdG4uaWQgPSBnYW1lLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBsaUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICAgICAgbGlCdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwLTAgbXgtYXV0byBteS1hdXRvIGRyb3Bkb3duLWl0ZW1cIik7XHJcbiAgICAgICAgICAgICAgICBsaUJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGdpb2NvRGFTY2FtYmlhcmUgPSBnYW1lLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2lvY28gZGEgU2NhbWJpYXJlOiBcIisgZ2lvY29EYVNjYW1iaWFyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZVRvVHJhZGU9Z2FtZTtcclxuICAgICAgICAgICAgICAgICAgICBzaG93U2VsZWN0ZWRUcmFkZUdhbWUoKVxyXG4gICAgICAgICAgICAgICAgICAgLy8gbGV0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0ZWRUcmFkZUdhbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9idG4uYXBwZW5kKGxpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZChjb2wsIGNvbFBpYyk7XHJcbiAgICAgICAgICAgICAgICBjb2wuYXBwZW5kKHRpdGxlKTtcclxuICAgICAgICAgICAgICAgIGNvbFBpYy5hcHBlbmQocGljKTtcclxuICAgICAgICAgICAgICAgIGxpQnRuLmFwcGVuZChyb3cpO1xyXG4gICAgICAgICAgICAgICAgbGkuYXBwZW5kKGxpQnRuKTtcclxuICAgICAgICAgICAgICAgIHRyYWRlR2FtZS5hcHBlbmQobGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNob3dTZWxlY3RlZFRyYWRlR2FtZSgpe1xyXG4gICAgZ2FtZVRvVHJhZGU7XHJcbiAgICBsZXQgc2VsZWN0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZFxyXG4gICAgKFwic2VsZWN0ZWRUcmFkZUdhbWVcIik7XHJcbiAgICBzZWxlY3RlZC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgbGlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgbGV0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgY29sUGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgcGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIFxyXG4gICAgdGl0bGUuaW5uZXJIVE1MID0gZ2FtZVRvVHJhZGUubmFtZTtcclxuICAgIHBpYy5zcmMgPSBnYW1lVG9UcmFkZS5jb3Zlci5saW5rO1xyXG5cclxuICAgIHJvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm14LWF1dG8gcm93IGJvcmRlci1ib3R0b20gYm9yZGVyLTIgYm9yZGVyLXByaW1hcnlcIik7XHJcbiAgICBjb2wuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb2wtMiBteC1hdXRvIG1zLTAgbXktYXV0byBtcy0xXCIpO1xyXG4gICAgY29sUGljLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29sLTIgbXgtYXV0byBtZS0xIG15LWF1dG9cIik7XHJcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm15LWF1dG9cIik7XHJcbiAgICBwaWMuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2JvcmRlciBib3JkZXItMiBib3JkZXItaW5mbyByb3VuZGVkJyk7XHJcbiAgICBwaWMuc2V0QXR0cmlidXRlKCdzdHlsZScsICd3aWR0aDozMDAlJyk7ICBcclxuICAgIGxpQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgICBsaUJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInAtMCBteC1hdXRvIG15LWF1dG8gZHJvcGRvd24taXRlbVwiKTtcclxuXHJcblxyXG4gICAgcm93LmFwcGVuZChjb2wsIGNvbFBpYyk7XHJcbiAgICBjb2wuYXBwZW5kKHRpdGxlKTtcclxuICAgIGNvbFBpYy5hcHBlbmQocGljKTtcclxuICAgIGxpQnRuLmFwcGVuZChyb3cpO1xyXG5cclxuICAgIHNlbGVjdGVkLmFwcGVuZChsaUJ0bik7XHJcbn1cclxuXHJcblxyXG4vKiBNb3N0cmEgaSBnaW9jaGkgc2NlbHRpIGRhbGwndXRlbnRlIHBlciBsbyBzY2FtYmlvKi9cclxuZnVuY3Rpb24gc2hvd1NlbGVjdGVkR2FtZXMoKSB7XHJcbiAgICBsZXQgc2VsZWN0ZWRHYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0ZWRHYW1lc1wiKTtcclxuICAgIHNlbGVjdGVkR2FtZXMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2lzaExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgbGV0IHBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgcGljLnNyYyA9IHdpc2hMaXN0W2ldO1xyXG5cclxuICAgICAgICBsaS5pbm5lckhUTUwgPSB3aXNoTGlzdFtpXTtcclxuICAgICAgICBzZWxlY3RlZEdhbWVzLmFwcGVuZChsaSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBJbnNlcnRpb25EVE97XHJcbiAgICB0aXRsZTpzdHJpbmcsXHJcbiAgICBkZXNjcmlwdGlvbjpzdHJpbmcsXHJcbiAgICBnYWxsZXJ5OnN0cmluZ1tdLFxyXG4gICAgdHJhZGVHYW1lSWQ6bnVtYmVyLFxyXG4gICAgd2lzaExpc3RJZHM6bnVtYmVyW11cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNlbmRBbGwgKCl7XHJcbiAgICBsZXQgY29tcG9zaXRlbGluaz0oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYWxsZXJ5SW5zZXJ0aW9uXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlXHJcbiAgICBsZXQgbGlua3M9Y29tcG9zaXRlbGluay5zcGxpdChcIixcIik7XHJcbiAgICBcclxuICAgIGxldCBvYmo6SW5zZXJ0aW9uRFRPPXtcclxuICAgIHRpdGxlOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZUluc2VydGlvblwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSxcclxuXHRkZXNjcmlwdGlvbjogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25JbnNlcnRpb25cIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcblx0Z2FsbGVyeTogbGlua3MsXHJcblx0dHJhZGVHYW1lSWQ6IGdpb2NvRGFTY2FtYmlhcmUsXHJcblx0d2lzaExpc3RJZHM6IGxpc3RJZFxyXG4gICAgfVxyXG5cclxuICAgIGxldCByZXF1ZXN0ID17XHJcbiAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9iailcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaChcIi9pbnNlcnRpb25cIiwgcmVxdWVzdClcclxuICAgIC50aGVuKChyZXNwb25zZSk9PnJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKT0+Y29uc29sZS5sb2coZGF0YSkpO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUluc2VydGlvblBhZ2U7IiwiaW1wb3J0IGRpdiBmcm9tICcuL2Zvb3Rlci5odG1sJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb3QoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvb3RlclwiKS5pbm5lckhUTUwgPSBkaXY7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvdDsiLCJpbXBvcnQgZ2VzdGlvbmVVdGVudGkgZnJvbSAnLi9nZXN0aW9uZVV0ZW50aS5odG1sJ1xyXG5pbXBvcnQgdXNlckludCBmcm9tICcuLi9pbnRlcmZhY2VzL3VzZXInO1xyXG5pbXBvcnQgc2hvd1Byb2ZpbGUgZnJvbSAnLi4vcHJvZmlsb1V0ZW50ZS9wcm9maWxlJztcclxuXHJcbmxldCB1c2VyczogdXNlckludFtdID0gW107XHJcbmxldCB2aWV3ID0gNTtcclxuXHJcbmZ1bmN0aW9uIHNob3dVc2VycyhudW06IG51bWJlcikge1xyXG4gICAgbGV0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJMaXN0XCIpO1xyXG4gICAgbGlzdC5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAobnVtIC0gMSkgKiB2aWV3OyBpIDwgbnVtICogdmlldzsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGkgPj0gdXNlcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGxldCBidG5fcHJvZmlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnRuX3Byb2ZpbGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG5cIik7XHJcbiAgICAgICAgYnRuX3Byb2ZpbGUub25jbGljayA9IHNob3dQcm9maWxlO1xyXG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGlzdC1ncm91cC1pdGVtJyk7XHJcbiAgICAgICAgbGkuc2V0QXR0cmlidXRlKCdvbm1vdXNlb3ZlcicsIFwic2V0QXR0cmlidXRlKCdjbGFzcycsICdsaXN0LWdyb3VwLWl0ZW0gYWN0aXZlJylcIik7XHJcbiAgICAgICAgbGkuc2V0QXR0cmlidXRlKCdvbm1vdXNlb3V0JywgXCJzZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpc3QtZ3JvdXAtaXRlbScpXCIpO1xyXG4gICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZsb2F0LWVuZFwiKTtcclxuICAgICAgICBsZXQgYnRuX2JhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgbGV0IGJ0bl9hZG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ0bl9iYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG4gYnRuLWRhbmdlciBidG4tc21cIik7XHJcbiAgICAgICAgYnRuX2FkbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ0biBidG4tc3VjY2VzcyBidG4tc21cIik7XHJcbiAgICAgICAgYnRuX2Jhbi5pbm5lckhUTUwgPSBcIkJhbm5hXCI7XHJcbiAgICAgICAgYnRuX2FkbS5pbm5lckhUTUwgPSBcIlJlbmRpIEFkbWluXCI7XHJcbiAgICAgICAgYnRuX2Jhbi5vbmNsaWNrID0gKCkgPT4geyBraWNrSGlzQXNzT3V0T2ZUaGlzU2l0ZSh1c2Vyc1tpXS51c2VySWQpfTtcclxuICAgICAgICBidG5fYWRtLm9uY2xpY2sgPSAoKSA9PiB7IG1ha2VIaW1BZG1pbih1c2Vyc1tpXS51c2VySWQpIH07XHJcbiAgICAgICAgc3Bhbi5hcHBlbmQoYnRuX2FkbSwgYnRuX2Jhbik7XHJcbiAgICAgICAgYnRuX3Byb2ZpbGUuaW5uZXJIVE1MID0gdXNlcnNbaV0udXNlcm5hbWUgKyBcIiB8IFwiICsgdXNlcnNbaV0ubmFtZSArIFwiIFwiICsgdXNlcnNbaV0uc3VybmFtZSArIFwiIHwgXCIgKyB1c2Vyc1tpXS5lbWFpbCArIFwiIHwgXCIgKyB1c2Vyc1tpXS5yYXRpbmcgKyBcIjxpIGNsYXNzPSdmYS1yZWd1bGFyIGZhLXN0YXInPjwvaT5cIjtcclxuICAgICAgICBsaS5hcHBlbmQoYnRuX3Byb2ZpbGUsIHNwYW4pO1xyXG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFVzZXJzKCk6IHZvaWQge1xyXG4gICAgZmV0Y2goXCIvdXNlclwiKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHVzZXJzID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGVsZW1lbnQgb2YgZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdXNlcnMucHVzaChlbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjcmVhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICAgICAgICAgIHNob3dVc2VycygxKTtcclxuICAgICAgICB9KTtcclxufVxyXG5cclxuLypcclxuPGxpIGNsYXNzPVwicGFnZS1pdGVtIGFjdGl2ZVwiIGFyaWEtY3VycmVudD1cInBhZ2VcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwYWdlLWxpbmtcIj4xPC9zcGFuPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwicGFnZS1pdGVtXCI+PGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBocmVmPVwiI1wiPjI8L2E+PC9saT5cclxuICAgICAgICA8bGkgY2xhc3M9XCJwYWdlLWl0ZW1cIj48YSBjbGFzcz1cInBhZ2UtbGlua1wiIGhyZWY9XCIjXCI+MzwvYT48L2xpPlxyXG4qL1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUGFnaW5hdGlvbigpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnaW5hdGlvblwiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbGV0IG51bWJlck9mUGFnZXMgPSBNYXRoLmNlaWwodXNlcnMubGVuZ3RoIC8gdmlldyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mUGFnZXM7IGkrKykge1xyXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtIGFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIsIFwicGFnZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1saW5rXCIpO1xyXG4gICAgICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYWxsTGkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2luYXRpb25cIikuY2hpbGRyZW47XHJcbiAgICAgICAgICAgIGZvciAobGV0IG9uZUxpIG9mIGFsbExpKSB7XHJcbiAgICAgICAgICAgICAgICBvbmVMaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbVwiKTtcclxuICAgICAgICAgICAgICAgIG9uZUxpLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbSBhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiLCBcInBhZ2VcIik7XHJcbiAgICAgICAgICAgIHNob3dVc2VycyhpICsgMSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBidG4uaW5uZXJIVE1MID0gXCJcIiArIChpICsgMSk7XHJcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYnRuKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2luYXRpb25cIikuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1ha2VIaW1BZG1pbihpZDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGlkKVxyXG4gICAgfVxyXG4gICAgZmV0Y2goXCIvYWRtaW5cIiwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGlkKVxyXG4gICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4geyBjb25zb2xlLmxvZyhcImFkbWluIGNyZWF0bz8gXCIgKyBkYXRhKTsgZ2V0QWxsVXNlcnMoKTsgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGtpY2tIaXNBc3NPdXRPZlRoaXNTaXRlKGlkOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpZClcclxuICAgIH1cclxuICAgIGZldGNoKFwiL3VzZXJcIiwgcmVxdWVzdClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4geyBjb25zb2xlLmxvZyhcInVzZXIgY2FuY2VsbGF0bz8gXCIgKyBkYXRhKTsgZ2V0QWxsVXNlcnMoKTsgfSk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRBbGxVc2VyczsiLCJpbXBvcnQgaG9tZSBmcm9tICcuL2hvbWUuaHRtbCdcclxuaW1wb3J0IHtpbnNlcnRpb259IGZyb20gJy4uL2ludGVyZmFjZXMvaW5zZXJ0aW9uJztcclxuaW1wb3J0IGFubnVuY2kgZnJvbSAnLi4vYW5udW5jaS9hbm51bmNpLmh0bWwnO1xyXG5pbXBvcnQgY3JlYXRlUGFnZSwgeyBzZWFyY2hCeVRpdGxlIH0gZnJvbSBcIi4uL2FubnVuY2kvYW5udW5jaVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVQYWdpbmF0aW9uIH0gZnJvbSAnLi4vYW5udW5jaS9hbm51bmNpJztcclxuaW1wb3J0IGNyZWFBbm51bmNpbyBmcm9tICcuLi9jcmVhQW5udW5jaW8vY3JlYUFubnVuY2lvLmh0bWwnXHJcbmltcG9ydCBjcmVhdGVJbnNlcnRpb25QYWdlIGZyb20gXCIuLi9jcmVhQW5udW5jaW8vY3JlYUFubnVuY2lvXCI7XHJcbmltcG9ydCBleHBhbmRJbnNlcnRpb24gZnJvbSAnLi4vYW5udW5jaS9hbm51bmNpbyc7XHJcbmltcG9ydCBhbm51bmNpbyBmcm9tICcuLi9hbm51bmNpL2FubnVuY2lvLmh0bWwnO1xyXG5cclxubGV0IGxpc3Q6IGluc2VydGlvbltdID0gW107XHJcblxyXG5cclxuXHJcbi8vaW1wb3J0IGNyZWF0ZUluc2VydGlvbiBmcm9tICcuLi9jcmVhQW5udW5jaW8vY3JlYUFubnVuY2lvJztcclxuXHJcbi8qbGV0IGxpc3Q6IGluc2VydGlvbltdID0gW107XHJcblxyXG5mdW5jdGlvbiBnZXRBbGxJbnNlcnRpb25zKCkgeyBRdWVzdGEgw6ggc29sbyB1bmEgcHJvdmEsIHNjb21tZW50YXJlIGxhIGZldGNoIHBpw7kgZ2nDuSBcclxuICAgIGxpc3QgPSBbXTtcclxuXHJcbiAgICBjb25zdCBpbWFnZUdpb2NvMSA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vaS5ldHN5c3RhdGljLmNvbS82Mjc3ODA0L3IvaWwvN2RmMDBlLzY5NzU0NjM0MC9pbF8xMTQweE4uNjk3NTQ2MzQwX2ZpdnMuanBnXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdpb2NvMiA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vd3d3Lm1vYnlnYW1lcy5jb20vaW1hZ2VzL2NvdmVycy9sLzE0NDQ1LXRoZS1sZWdlbmQtb2YtemVsZGEtbmVzLWZyb250LWNvdmVyLmpwZ1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHaW9jbzMgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9pdC9iL2IzL1BvayVDMyVBOW1vbl9HaWFsbG8ucG5nXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdpb2NvNCA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vc3RhdGljLndpa2lhLm5vY29va2llLm5ldC9tZXRhbGdlYXIvaW1hZ2VzL2UvZTEvTWV0YWxfR2Vhci5qcGdcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlR2FsbGVyeTEgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9pdC90aHVtYi83Lzc3L1Bpa2FjaHUucG5nLzEwMjRweC1QaWthY2h1LnBuZ1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHYWxsZXJ5MiA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vd3d3LnBuZ21hcnQuY29tL2ZpbGVzLzExL0Zyb2ctTWVtZS1QTkctSEQucG5nXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdhbGxlcnkzID0ge1xyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9tZWRpYS5saWNkbi5jb20vZG1zL2ltYWdlL0Q1NjM1QVFIdzNFNXlZeVhUTHcvcHJvZmlsZS1mcmFtZWRwaG90by1zaHJpbmtfODAwXzgwMC8wLzE2NDQ1MTg5MTg2MDY/ZT0xNjc1NjIwMDAwJnY9YmV0YSZ0PXgxUm5YcVdzRFdBT1ZRVVhHRnVqTW9kWFpoaUdVUUp1MGE2RkFzWk4zTG9cIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdpb2NvMSA9IHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuYW1lOiBcIlN1cGVyTWFyaW9cIixcclxuICAgICAgICBnZW5yZTogW3tnZW5yZTogXCJQTEFURk9STVwifV0sXHJcbiAgICAgICAgeWVhcjogMTk4NSxcclxuICAgICAgICBjb25zb2xlOiB7Y29uc29sZTogXCJORVNcIn0sXHJcbiAgICAgICAgY292ZXI6IGltYWdlR2lvY28xXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2lvY28yID0ge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIG5hbWU6IFwiVGhlIExlZ2VuZCBvZiBaZWxkYVwiLFxyXG4gICAgICAgIGdlbnJlOiBbe2dlbnJlOiBcIkFWVkVOVFVSQVwifV0sXHJcbiAgICAgICAgeWVhcjogMTk4NixcclxuICAgICAgICBjb25zb2xlOiB7Y29uc29sZTogXCJORVNcIn0sXHJcbiAgICAgICAgY292ZXI6IGltYWdlR2lvY28yXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2lvY28zID0ge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIG5hbWU6IFwiUG9rZW1vbiBHaWFsbG9cIixcclxuICAgICAgICBnZW5yZTogW3tnZW5yZTogXCJHRFJcIn1dLFxyXG4gICAgICAgIHllYXI6IDE5OTgsXHJcbiAgICAgICAgY29uc29sZToge2NvbnNvbGU6IFwiR0FNRV9CT1lfQ09MT1JcIn0sXHJcbiAgICAgICAgY292ZXI6IGltYWdlR2lvY28zXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2lvY280ID0ge1xyXG4gICAgICAgIGlkOiA0LFxyXG4gICAgICAgIG5hbWU6IFwiTWV0YWwgR2VhclwiLFxyXG4gICAgICAgIGdlbnJlOiBbe2dlbnJlOiBcIlNURUFMVEhcIn1dLFxyXG4gICAgICAgIHllYXI6IDE5ODcsXHJcbiAgICAgICAgY29uc29sZToge2NvbnNvbGU6IFwiTkVTXCJ9LFxyXG4gICAgICAgIGNvdmVyOiBpbWFnZUdpb2NvNFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHB1Ymxpc2hlckdpb2NvMSA9IHtcclxuICAgICAgICB1c2VySWQ6IDEsXHJcbiAgICAgICAgdXNlcm5hbWU6IFwiUGllcm9hZmZvbmRvXCIsXHJcbiAgICAgICAgbmFtZTogXCJQaWVyaW5vXCIsXHJcbiAgICAgICAgc3VybmFtZTogXCJDaWNjaW5vXCIsXHJcbiAgICAgICAgZW1haWw6IFwicGllcmlub2N1b3JpY2lub0BhbW9yaW5vLmNvbVwiLFxyXG4gICAgICAgIHJhdGluZzogNjY2LFxyXG4gICAgICAgIHZpZGVvZ2FtZXM6IFtnaW9jbzFdXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5zZXJ0aW9uMTogaW5zZXJ0aW9uID0ge1xyXG4gICAgICAgIGFwcHJvdmVkOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiBcIlNjYW1iaW8gU3VwZXJNYXJpb1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlNjYW1iaW8gc3VwZXJtYXJpbyB4a8OoIG1pIHNvbm8gc2Vra2F0byBhIGdpb2NhcmNpXCIsXHJcbiAgICAgICAgcHVibGlzaGVyOiBwdWJsaXNoZXJHaW9jbzEsXHJcbiAgICAgICAgZ2FsbGVyeTogW2dpb2NvMS5jb3ZlciwgaW1hZ2VHYWxsZXJ5MSwgaW1hZ2VHYWxsZXJ5MiwgaW1hZ2VHYWxsZXJ5M10sXHJcbiAgICAgICAgdHJhZGVHYW1lOiBnaW9jbzEsXHJcbiAgICAgICAgd2lzaExpc3Q6IFtnaW9jbzIsIGdpb2NvMywgZ2lvY280XSxcclxuICAgICAgICBvdXRjb21lOiBcIldJUFwiLFxyXG4gICAgICAgIHB1YmxpY2F0aW9uRGF0ZTogXCIyOS0wMS0yMDIzXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbnNlcnRpb24yOiBpbnNlcnRpb24gPSB7XHJcbiAgICAgICAgYXBwcm92ZWQ6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IFwiU2NhbWJpbyBwYWNtYW5cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTY2FtYmlvIHN1cGVybWFyaW8geGvDqCBtaSBzb25vIHNla2thdG8gYSBnaW9jYXJjaVwiLFxyXG4gICAgICAgIHB1Ymxpc2hlcjogcHVibGlzaGVyR2lvY28xLFxyXG4gICAgICAgIGdhbGxlcnk6IFtnaW9jbzIuY292ZXIsIGltYWdlR2FsbGVyeTIsIGltYWdlR2FsbGVyeTIsIGltYWdlR2FsbGVyeTNdLFxyXG4gICAgICAgIHRyYWRlR2FtZTogZ2lvY28yLFxyXG4gICAgICAgIHdpc2hMaXN0OiBbZ2lvY28yLCBnaW9jbzMsIGdpb2NvNF0sXHJcbiAgICAgICAgb3V0Y29tZTogXCJXSVBcIixcclxuICAgICAgICBwdWJsaWNhdGlvbkRhdGU6IFwiMjktMDEtMjAyM1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5zZXJ0aW9uMzogaW5zZXJ0aW9uID0ge1xyXG4gICAgICAgIGFwcHJvdmVkOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiBcInNjYW1iaW8gY29kZXN0b1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlNjYW1iaW8gc3VwZXJtYXJpbyB4a8OoIG1pIHNvbm8gc2Vra2F0byBhIGdpb2NhcmNpXCIsXHJcbiAgICAgICAgcHVibGlzaGVyOiBwdWJsaXNoZXJHaW9jbzEsXHJcbiAgICAgICAgZ2FsbGVyeTogW2dpb2NvMy5jb3ZlciwgaW1hZ2VHYWxsZXJ5MywgaW1hZ2VHYWxsZXJ5MiwgaW1hZ2VHYWxsZXJ5M10sXHJcbiAgICAgICAgdHJhZGVHYW1lOiBnaW9jbzMsXHJcbiAgICAgICAgd2lzaExpc3Q6IFtnaW9jbzIsIGdpb2NvMywgZ2lvY280XSxcclxuICAgICAgICBvdXRjb21lOiBcIldJUFwiLFxyXG4gICAgICAgIHB1YmxpY2F0aW9uRGF0ZTogXCIyOS0wMS0yMDIzXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbnNlcnRpb240OiBpbnNlcnRpb24gPSB7XHJcbiAgICAgICAgYXBwcm92ZWQ6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IFwiU2NhbWJpbyBwaXBvbG9cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTY2FtYmlvIHN1cGVybWFyaW8geGvDqCBtaSBzb25vIHNla2thdG8gYSBnaW9jYXJjaVwiLFxyXG4gICAgICAgIHB1Ymxpc2hlcjogcHVibGlzaGVyR2lvY28xLFxyXG4gICAgICAgIGdhbGxlcnk6IFtnaW9jbzQuY292ZXIsIGltYWdlR2FsbGVyeTEsIGltYWdlR2FsbGVyeTIsIGltYWdlR2FsbGVyeTNdLFxyXG4gICAgICAgIHRyYWRlR2FtZTogZ2lvY280LFxyXG4gICAgICAgIHdpc2hMaXN0OiBbZ2lvY28yLCBnaW9jbzMsIGdpb2NvNF0sXHJcbiAgICAgICAgb3V0Y29tZTogXCJXSVBcIixcclxuICAgICAgICBwdWJsaWNhdGlvbkRhdGU6IFwiMjktMDEtMjAyM1wiXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGxpc3QucHVzaChpbnNlcnRpb24xKTtcclxuICAgIGxpc3QucHVzaChpbnNlcnRpb24yKTtcclxuICAgIGxpc3QucHVzaChpbnNlcnRpb24zKTtcclxuICAgIGxpc3QucHVzaChpbnNlcnRpb240KTtcclxuXHJcbiAgICBcclxuICAgIC8qUVVFU1RPIEUnIExBIEZVTlpJT05FIEdJVVNUQSBOT04gRkFNTyBDSEUgU0JBR0xJQVRFISBcclxuXHJcbiAgICAvKkZldGNoIGEgYmFja2VuZCBjb24gdHV0dGkgZ2xpIGFubnVuY2ksIGFnZ2lvcm5hIGxhIGxpc3RhIGxpc3RcclxuICAgIC8vIGxpc3Q9W107XHJcbiAgICAvLyBmZXRjaCgnL1RpcG9Bbm51bmNpQ2hlbmVzbycpXHJcbiAgICAvLyAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC8vIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAvLyAgICAgZm9yKGxldCBkIG9mIGRhdGEpe1xyXG4gICAgLy8gICAgICAgICBsaXN0LnB1c2goZCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSk7XHJcbn0qL1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIb21lKCl7XHJcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XHJcbiAgICBtYWluLmlubmVySFRNTCA9IGhvbWU7XHJcbiAgIFxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zZXJ0aW9uc0NhcmRcIikub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MID0gYW5udW5jaTtcclxuICAgICAgICBjcmVhdGVQYWdlKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zZXJ0Q2FyZFwiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBjcmVhQW5udW5jaW87XHJcbiAgICAgICAgY3JlYXRlSW5zZXJ0aW9uUGFnZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEJ1dHRvblRpdGxlXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGtleXdvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFRpdGxlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgaWYoa2V5d29yZC52YWx1ZSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGFubnVuY2k7XHJcbiAgICAgICAgICAgIGNyZWF0ZVBhZ2UoKTtcclxuICAgICAgICAgICAgc2VhcmNoQnlUaXRsZShrZXl3b3JkLnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hUaXRsZVwiKS5vbmtleWRvd24gPSAoZSkgPT4ge1xyXG4gICAgICAgIGxldCBrZXl3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hUaXRsZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIGlmKGUua2V5ID09IFwiRW50ZXJcIiAmJiBrZXl3b3JkLnZhbHVlIT0gXCJcIil7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBhbm51bmNpO1xyXG4gICAgICAgICAgICBjcmVhdGVQYWdlKCk7XHJcbiAgICAgICAgICAgIHNlYXJjaEJ5VGl0bGUoa2V5d29yZC52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBsaXN0PVtdO1xyXG4gICAgZmV0Y2goJy9pbnNlcnRpb24nKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIGZvcihsZXQgZCBvZiBkYXRhKXtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjcmVhdGVJdGVtQ2Fyb3VzZWwoKTsgIFxyXG4gICAgfSlcclxuICAgIH1cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVJdGVtQ2Fyb3VzZWwoKXtcclxuXHJcbmZvcihsZXQgaSA9IGxpc3QubGVuZ3RoLTE7IGkgPiBsaXN0Lmxlbmd0aC00ICYmIGkgPj0gMDsgaS0tKXtcclxuICAgIGxldCBjYXJJbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbm5lckNhcm91c2VsSG9tZScpO1xyXG4gICAgbGV0IGNsQ2Fyb3VzZWxJdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGlmKGkgPT0gMCl7XHJcbiAgICAgICAgY2xDYXJvdXNlbEl0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2Fyb3VzZWwtaXRlbSBhY3RpdmUnKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGNsQ2Fyb3VzZWxJdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Nhcm91c2VsLWl0ZW0nKTtcclxuICAgICAgICB9XHJcbiAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBsaXN0W2ldLnRyYWRlR2FtZS5jb3Zlci5saW5rKTtcclxuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ltZ0NhcmQnKTtcclxuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ210LTInKTtcclxuICAgIGxldCBjbENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNsQ2FyZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQgYmctc2Vjb25kYXJ5Jyk7XHJcbiAgICBjbENhcmQuc2V0QXR0cmlidXRlKCdpZCcsICdhbm5DYXJkJyk7XHJcbiAgICBsZXQgY2FyQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyQm9keS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQtYm9keScpO1xyXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcclxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZC10aXRsZSBib3JkZXItdG9wIGJvcmRlci0yIGJvcmRlci1pbmZvJyk7XHJcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBsaXN0W2ldLnRyYWRlR2FtZS5uYW1lO1xyXG4gICAgbGV0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBkZXNjLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZC10ZXh0Jyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RbaV0udHJhZGVHYW1lLmdlbnJlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZGVzYy5pbm5lckhUTUwgKz0gbGlzdFtpXS50cmFkZUdhbWUuZ2VucmVbaV0uZ2VucmUgKyBcIiBcIlxyXG4gICAgfVxyXG4gICAgZGVzYy5pbm5lckhUTUwgKz0gXCI8YnI+XCJcclxuICAgICsgXCJBbm5vOiBcIiArIGxpc3RbaV0udHJhZGVHYW1lLnllYXIgKyBcIiBcIlxyXG4gICAgKyBcIkNvbnNvbGU6IFwiICsgbGlzdFtpXS50cmFkZUdhbWUuY29uc29sZS5jb25zb2xlICsgXCI8YnI+XCJcclxuICAgICtcIkRlc2NyaXppb25lOlwiO1xyXG4gICAgbGV0IGdvQW5uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgbGV0IGltZ0dvQW5uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBnb0Fubi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBcIiNcIik7XHJcbiAgICBpbWdHb0Fubi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3AtMCBidG4gZHJvcGRvd24tdG9nZ2xlXCIgdHlwZT1cImJ1dHRvbicpO1xyXG4gICAgaW1nR29Bbm4uc3JjID0gXCIuL2ltZy9idXR0b24vZ29CdG4ucG5nXCI7XHJcbiAgICBnb0Fubi5hcHBlbmRDaGlsZChpbWdHb0Fubik7XHJcbiAgICBpbWdHb0Fubi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JvcmRlcjpub25lO2Zsb2F0OmNlbnRlcjtpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZDt3aWR0aDogMTAlO2hlaWdodDphdXRvOycpO1xyXG4gICAgZ29Bbm4uYXBwZW5kKGltZ0dvQW5uKTtcclxuICAgIGdvQW5uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKS5pbm5lckhUTUwgPSBhbm51bmNpbztcclxuICAgICAgICBleHBhbmRJbnNlcnRpb24obGlzdFtpXSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FySW5uZXIuYXBwZW5kQ2hpbGQoY2xDYXJvdXNlbEl0KTtcclxuICAgICAgICAgICAgY2xDYXJvdXNlbEl0LmFwcGVuZENoaWxkKGNsQ2FyZCk7XHJcbiAgICAgICAgICAgICAgICBjbENhcmQuYXBwZW5kKGltZyk7XHJcbiAgICAgICAgICAgICAgICBjbENhcmQuYXBwZW5kKGNhckJvZHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhckJvZHkuYXBwZW5kKHRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXJCb2R5LmFwcGVuZChkZXNjKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXJCb2R5LmFwcGVuZChnb0Fubik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZTtcclxuXHJcbi8qXHJcbmFzeW5jIGZ1bmN0aW9uIGdldHRpdGxlKHRpdGxlOiBzdHJpbmcpOntcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goKVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG5cclxufVxyXG4qLyIsImltcG9ydCBtb2RhbCBmcm9tICcuL21vZGFsLmh0bWwnXHJcbmltcG9ydCBsb2dpbiBmcm9tICcuLi9sb2dpbi9sb2dpbi5odG1sJ1xyXG5pbXBvcnQgbG9naW5Gb290ZXIgZnJvbSAnLi4vbG9naW4vbG9naW5Gb290ZXIuaHRtbCdcclxuaW1wb3J0IHJlZ2lzdHJhemlvbmUgZnJvbSAnLi4vcmVnaXN0cmF6aW9uZS9yZWdpc3RyYXppb25lLmh0bWwnXHJcbmltcG9ydCByZWdGb290ZXIgZnJvbSAnLi4vcmVnaXN0cmF6aW9uZS9yZWdpc3RyYXppb25lRm9vdGVyLmh0bWwnXHJcbmltcG9ydCBsb2dvdXQgZnJvbSAnLi4vbG9nb3V0L2xvZ291dC5odG1sJ1xyXG5pbXBvcnQgcHJvZmlsZSBmcm9tICcuLi9wcm9maWxvVXRlbnRlL3Byb2ZpbGUuaHRtbCdcclxuaW1wb3J0ICogYXMgbmF2IGZyb20gXCIuLi9uYXZiYXIvbmF2YmFyXCJcclxuaW1wb3J0IGxvZ2dlZCBmcm9tICcuLi9pbnRlcmZhY2VzL2xvZ2dlZCdcclxuaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSAnLi4vaG9tZS9ob21lJ1xyXG5pbXBvcnQgeyBzZWFyY2hOb3RpZmljYXRpb24sIHN0b3BTZWFyY2hOb3RpZmljYXRpb24gfSBmcm9tICcuLi9jaGF0L2NoYXQnXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNb2RhbCgpIHtcclxuICAgIGxldCBkaXZNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXZNb2RhbC5pbm5lckhUTUwgPSBtb2RhbDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpLmFwcGVuZENoaWxkKGRpdk1vZGFsKTtcclxuICAgIHNob3dMb2dJbk1vZGFsKCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luXCIpLm9uY2xpY2sgPSBzaG93TG9nSW5Nb2RhbDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbk91dEJ1dHRvblwiKS5vbmNsaWNrID0gc2hvd0xvZ091dE1vZGFsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93U2lnblVwTW9kYWwoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxCb2R5XCIpLmlubmVySFRNTCA9IHJlZ2lzdHJhemlvbmU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxGb290ZXJcIikuaW5uZXJIVE1MID0gcmVnRm9vdGVyO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cnl0b1NpZ25VcFwiKS5vbmNsaWNrID0gdHJ5VG9TaWduVXA7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25VcExvZ2luXCIpLm9uY2xpY2sgPSBzaG93TG9nSW5Nb2RhbDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVNpZ25VcFwiKS5vbmtleXVwID0gdmFsaWRhdGVGb3JtO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdXJuYW1lU2lnblVwXCIpLm9ua2V5dXAgPSB2YWxpZGF0ZUZvcm07XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJuYW1lU2lnblVwXCIpLm9ua2V5dXAgPSB2YWxpZGF0ZUZvcm07XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsU2lnblVwXCIpLm9ua2V5dXAgPSB2YWxpZGF0ZUZvcm07XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkU2lnblVwXCIpLm9ua2V5dXAgPSB2YWxpZGF0ZUZvcm07XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbmZpcm1fcGFzc3dvcmRTaWduVXBcIikub25rZXl1cCA9IHZhbGlkYXRlRm9ybTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0xvZ0luTW9kYWwoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxCb2R5XCIpLmlubmVySFRNTCA9IGxvZ2luO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteU1vZGFsRm9vdGVyXCIpLmlubmVySFRNTCA9IGxvZ2luRm9vdGVyO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpblNpZ25VcFwiKS5vbmNsaWNrID0gc2hvd1NpZ25VcE1vZGFsO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cnlUb0xvZ1wiKS5vbmNsaWNrID0gdHJ5VG9Mb2dJbjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcm5hbWVTaWduSW5cIikub25rZXlkb3duID0gKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXkgPT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICB0cnlUb0xvZ0luKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzd29yZFNpZ25JblwiKS5vbmtleWRvd24gPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIHRyeVRvTG9nSW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNob3dMb2dPdXRNb2RhbCgpIHtcclxuICAgIGxldCByZXN1bHQ6IGJvb2xlYW4gPSBhd2FpdCB0cnlUb0xvZ091dCgpO1xyXG4gICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbEJvZHlcIikuaW5uZXJIVE1MID0gbG9nb3V0O1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbEZvb3RlclwiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGNyZWF0ZUhvbWUoKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdHJ5VG9TaWduVXAoKSB7XHJcbiAgICBjb25zdCB1c2VyID0ge1xyXG4gICAgICAgIHVzZXJuYW1lOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VybmFtZVNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSxcclxuICAgICAgICBwYXNzd29yZDogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmRTaWduVXBcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcbiAgICAgICAgbmFtZTogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSxcclxuICAgICAgICBzdXJuYW1lOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdXJuYW1lU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLFxyXG4gICAgICAgIGVtYWlsOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXF1ZXN0ID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlcilcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaChcIi91c2VyXCIsIHJlcXVlc3QpLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25VcFJlc3VsdFwiKS5pbm5lckhUTUwgPSBcIlJlZ2lzdHJhdG8gY29uIHN1Y2Nlc3NvIVwiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyeXRvU2lnblVwXCIpLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25VcFJlc3VsdFwiKS5pbm5lckhUTUwgPSBcIk9wcywgcXVhbGNvc2Egw6ggYW5kYXRvIHN0b3J0byFcIjtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cnl0b1NpZ25VcFwiKS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRyeVRvTG9nSW4oKSB7XHJcbiAgICBjb25zdCBsb2dpbiA9IHtcclxuICAgICAgICB1c2VybmFtZTogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcm5hbWVTaWduSW5cIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkU2lnbkluXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGxvZ2luKVxyXG4gICAgfTtcclxuICAgIGxldCByZXN1bHQ6IGFueSA9IGZldGNoKFwiL2xvZ2luXCIsIHJlcXVlc3QpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEubG9nZ2VkKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luUmVzdWx0XCIpLmlubmVySFRNTCA9IFwiTG9nZ2F0byBjb24gc3VjY2Vzc28hXCI7XHJcbiAgICAgICAgICAgICAgICBuYXYuc2V0TmF2KGRhdGEuYWNjb3VudFR5cGUpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cnlUb0xvZ1wiKS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luU2lnblVwXCIpLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUhvbWUoKTtcclxuICAgICAgICAgICAgICAgIHNlYXJjaE5vdGlmaWNhdGlvbigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpblJlc3VsdFwiKS5pbm5lckhUTUwgPSBcIk9wcywgcXVhbGNvc2Egw6ggYW5kYXRvIHN0b3J0b1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHRyeVRvTG9nT3V0KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgc3RvcFNlYXJjaE5vdGlmaWNhdGlvbigpO1xyXG4gICAgbGV0IHByb21pc2VSZXN1bHQgPSBmZXRjaChcIi9sb2dvdXRcIilcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgbmF2LnNldE5hdihcIkdVRVNUXCIpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cnlUb0xvZ1wiKS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5TaWduVXBcIikucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGRhdGFcclxuICAgICAgICB9KTtcclxuICAgIHJldHVybiBwcm9taXNlUmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUZvcm0oKSB7XHJcbiAgICBsZXQgdXNlcm5hbWUgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VybmFtZVNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgIGxldCBwYXNzd29yZCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgbGV0IG5hbWUgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgbGV0IHN1cm5hbWUgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdXJuYW1lU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgbGV0IGVtYWlsID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxTaWduVXBcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICBsZXQgY29uZmlybV9wYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uZmlybV9wYXNzd29yZFNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uZmlybV9wYXNzd29yZC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIlwiKTtcclxuXHJcbiAgICBpZiAodXNlcm5hbWUgPT0gXCJcIiB8fCBwYXNzd29yZCA9PSBcIlwiIHx8IG5hbWUgPT0gXCJcIiB8fCBzdXJuYW1lID09IFwiXCIgfHwgZW1haWwgPT0gXCJcIikge1xyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyeXRvU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBpZiAocGFzc3dvcmQgIT0gY29uZmlybV9wYXNzd29yZC52YWx1ZSkge1xyXG4gICAgICAgICAgICBjb25maXJtX3Bhc3N3b3JkLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYm9yZGVyLWNvbG9yOiByZWQ7XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbmZpcm1fcGFzc3dvcmQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJib3JkZXItY29sb3I6IGdyZWVuO1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChwYXNzd29yZCAhPSBjb25maXJtX3Bhc3N3b3JkLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbmZpcm1fcGFzc3dvcmQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJib3JkZXItY29sb3I6IHJlZDtcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uZmlybV9wYXNzd29yZC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJvcmRlci1jb2xvcjogZ3JlZW47XCIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyeXRvU2lnblVwXCIpLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTW9kYWw7IiwiaW1wb3J0IG5hdiBmcm9tIFwiLi9uYXZiYXIuaHRtbFwiO1xyXG5pbXBvcnQgY3JlYXRlTW9kYWwgZnJvbSBcIi4uL21vZGFsL21vZGFsXCI7XHJcbmltcG9ydCBhbm51bmNpIGZyb20gXCIuLi9hbm51bmNpL2FubnVuY2kuaHRtbFwiO1xyXG5pbXBvcnQgZ2VzdGlvbmVhbm51bmNpIGZyb20gXCIuLi9hbm51bmNpL2dlc3Rpb25lYW5udW5jaS5odG1sXCI7XHJcbmltcG9ydCBjcmVhdGVQYWdlIGZyb20gXCIuLi9hbm51bmNpL2FubnVuY2lcIjtcclxuaW1wb3J0IGhvbWUgZnJvbSBcIi4uL2hvbWUvaG9tZS5odG1sXCI7XHJcbmltcG9ydCBjcmVhdGVJdGVtQ2Fyb3VzZWwgZnJvbSBcIi4uL2hvbWUvaG9tZVwiXHJcbmltcG9ydCBjcmVhdGVIb21lIGZyb20gXCIuLi9ob21lL2hvbWVcIjtcclxuaW1wb3J0IHByb2ZpbGUgZnJvbSBcIi4uL3Byb2ZpbG9VdGVudGUvcHJvZmlsZS5odG1sXCI7XHJcbmltcG9ydCBzaG93UHJvZmlsZSBmcm9tIFwiLi4vcHJvZmlsb1V0ZW50ZS9wcm9maWxlXCI7XHJcbmltcG9ydCBnZXN0aW9uZVV0ZW50aSBmcm9tIFwiLi4vZ2VzdGlvbmVVdGVudGkvZ2VzdGlvbmVVdGVudGkuaHRtbFwiO1xyXG5pbXBvcnQgZ2V0QWxsVXNlcnMgZnJvbSBcIi4uL2dlc3Rpb25lVXRlbnRpL2dlc3Rpb25lVXRlbnRpXCI7XHJcbmltcG9ydCBjcmVhdGVQYWdlMiBmcm9tIFwiLi4vYW5udW5jaS9nZXN0aW9uZWFubnVuY2lcIjtcclxuaW1wb3J0IGNyZWFBbm51bmNpbyBmcm9tIFwiLi4vY3JlYUFubnVuY2lvL2NyZWFBbm51bmNpby5odG1sXCJcclxuaW1wb3J0IHZpZGVvZ2lvY2hpIGZyb20gXCIuLi92aWRlb2dpb2NoaS92aWRlb2dpb2NoaS5odG1sXCJcclxuaW1wb3J0IGNyZWF0ZUluc2VydGlvblBhZ2UgZnJvbSBcIi4uL2NyZWFBbm51bmNpby9jcmVhQW5udW5jaW9cIlxyXG5pbXBvcnQgY3JlYXRlR2FtZVBhZ2UgZnJvbSBcIi4uL3ZpZGVvZ2lvY2hpL3ZpZGVvZ2lvY2hpXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xyXG4gICAgXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKS5pbm5lckhUTUwgPSBuYXY7XHJcbiAgICBjcmVhdGVNb2RhbCgpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dvXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgY3JlYXRlSG9tZSgpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lc1wiKS5vbmNsaWNrPSgpPT57XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUw9dmlkZW9naW9jaGk7IFxyXG4gICAgICBjcmVhdGVHYW1lUGFnZSgpOyBcclxuICAgIH07XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnRpb25zXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGFubnVuY2k7XHJcbiAgICAgICAgY3JlYXRlUGFnZSgpO1xyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkSW5zZXJ0aW9uXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGNyZWFBbm51bmNpbztcclxuICAgICAgICBjcmVhdGVJbnNlcnRpb25QYWdlKCk7XHJcbiAgICB9O1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNNYW5hZ2VtZW50XCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGdlc3Rpb25lYW5udW5jaTtcclxuICAgICAgICBjcmVhdGVQYWdlMigpO1xyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFuYWdlbWVudFwiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBnZXN0aW9uZVV0ZW50aTtcclxuICAgICAgICBnZXRBbGxVc2VycygpO1xyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZmlsZVwiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBwcm9maWxlO1xyXG4gICAgICAgIHNob3dQcm9maWxlKCk7XHJcbiAgICB9O1xyXG4gICAgZmV0Y2goXCIvd2hvSXNMb2dnZWRcIilcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgc2V0TmF2KGRhdGEpO1xyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldE5hdihhY2NvdW50VHlwZSA6IHN0cmluZykge1xyXG4gICAgY29uc3QgYnRuX2dlc3RVdGVudGkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hbmFnZW1lbnRcIik7XHJcbiAgICBjb25zdCBidG5faW5zTWFuYWdlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zTWFuYWdlbWVudFwiKTtcclxuICAgIGNvbnN0IGJ0bl9sb2dpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5cIik7XHJcbiAgICBjb25zdCBidG5fc2lnbk91dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbk91dEJ1dHRvblwiKTtcclxuICAgIGNvbnN0IGJ0bl9hZGRJbnNlcnRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEluc2VydGlvblwiKTtcclxuICAgIGNvbnN0IGJ1dHRvbl9wcm9maWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9maWxlXCIpO1xyXG4gICAgaWYoYWNjb3VudFR5cGU9PVwiQURNSU5cIil7XHJcbiAgICAgICAgYnRuX2dlc3RVdGVudGkucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGJ0bl9hZGRJbnNlcnRpb24uc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICBidG5faW5zTWFuYWdlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgYnRuX2xvZ2luLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgYnRuX3NpZ25PdXRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGJ1dHRvbl9wcm9maWxlLnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKVxyXG4gICAgfWVsc2UgaWYoYWNjb3VudFR5cGU9PVwiVVNFUlwiKXtcclxuICAgICAgICBidG5fZ2VzdFV0ZW50aS5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIGJ0bl9hZGRJbnNlcnRpb24ucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGJ0bl9pbnNNYW5hZ2VtZW50LnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgYnRuX2xvZ2luLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgYnRuX3NpZ25PdXRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGJ1dHRvbl9wcm9maWxlLnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgYnRuX2dlc3RVdGVudGkuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICBidG5fYWRkSW5zZXJ0aW9uLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgYnRuX2luc01hbmFnZW1lbnQuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICBidG5fbG9naW4ucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGJ0bl9zaWduT3V0QnV0dG9uLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgYnV0dG9uX3Byb2ZpbGUuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVOYXY7XHJcbiIsImltcG9ydCBwcm9maWxlIGZyb20gJy4vcHJvZmlsZS5odG1sJ1xyXG5cclxuXHJcbmxldCB0eXBlO1xyXG5sZXQgdXNlckluZm87XHJcbmxldCBhZG1pbkluZm87XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1Byb2ZpbGUoKXsgICBcclxuICAgIGZldGNoKFwiL3dob0lzTG9nZ2VkXCIpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEgPT0gXCJBRE1JTlwiKSB7XHJcbiAgICAgICAgICAgIHR5cGUgPSBcIkFETUlOXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhID09IFwiVVNFUlwiKSB7XHJcbiAgICAgICAgICAgIHR5cGUgPSBcIlVTRVJcIlxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHR5cGUgPSBcIkdVRVNUXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xyXG4gICAgICAgIG1haW4uaW5uZXJIVE1MID0gcHJvZmlsZTtcclxuICAgICAgICBjcmVhdGVQcm9maWxlKHR5cGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2lhbyBkYSBzaG93XCIpXHJcbiAgICB9KVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvZmlsZSh0eXBlOnN0cmluZyl7XHJcblxyXG4gICAgaWYgKHR5cGUgPT0gXCJBRE1JTlwiKSB7XHJcbiAgICAgICAgc2hvd0FkbWluUHJvZmlsZSgpO1xyXG5cclxuICAgIH0gZWxzZSBpZih0eXBlID09IFwiVVNFUlwiKSB7XHJcbiAgICAgICAgc2hvd1VzZXJQcm9maWxlKCk7XHJcbiAgICB9ZWxzZXtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93QWRtaW5Qcm9maWxlKCl7XHJcblxyXG4gICAgZmV0Y2goXCIvYWRtaW5JbmZvXCIpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgYWRtaW5JbmZvPWRhdGE7XHJcbiAgICAgICAgbGV0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVwcm9maWxlXCIpO1xyXG4gICAgICAgIGgxLmlubmVySFRNTD1cIkJFTlRPUk5BVE8gQU1NSU5JU1RSQVRPUkUgXCIrYWRtaW5JbmZvLnVzZXJuYW1lO1xyXG4gICAgICAgIHRpdGxlLmFwcGVuZChoMSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHlwcm9maWxlXCIpO1xyXG4gICAgICAgIGxldCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICBoMi5pbm5lckhUTUw9XHJcbiAgICAgICAgIFwiIDxicj48YnI+PGJyPiA8Yj48L2I+XCIrYWRtaW5JbmZvLnVzZXJuYW1lIFxyXG4gICAgICAgICsgXCIgPGJyPjxicj4gPGI+PC9iPlwiK2FkbWluSW5mby5lbWFpbCBcclxuICAgICAgICArIFwiIDxicj48YnI+IDxiPjwvYj5cIithZG1pbkluZm8ubmFtZVxyXG4gICAgICAgICsgXCIgPGJyPjxicj4gPGI+PC9iPlwiK2FkbWluSW5mby5zdXJuYW1lXHJcbiAgICAgICAgYm9keS5hcHBlbmQoaDIpXHJcblxyXG4gICAgICAgIGxldCBidXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b25zLXByb2ZpbGVcIik7XHJcbiAgICAgICAgbGV0IGJ0bjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ0bjEuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcImJ0biBidG4tcHJpbWFyeSBteS0xXCIpO1xyXG4gICAgICAgIGJ0bjEub25jbGljaz0oKT0+e1xyXG4gICAgICAgICAgICBsZXQgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgJ3VzZXJuYW1lJyA6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJuYW1lXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgJ2VtYWlsJyA6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmZXRjaChcIi9hZG1pbi9pbmZvXCIsIHJlcXVlc3QpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSk9PnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpPT4gXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcm5hbWVcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU9XCJcIjtcclxuICAgICAgICAgICAgICAgIHNob3dQcm9maWxlKClcclxuICAgICAgICAgICAgfSkgICAgICAgICAgIFxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgYnRuMS5pbm5lckhUTUw9XCJDYW1iaWEgVXNlcm5hbWVcIlxyXG4gICAgICAgIGJ1dHRvbnMuYXBwZW5kKGJ0bjEpXHJcblxyXG4gICAgICAgIGxldCBidXR0b25FbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9ucy1wcm9maWxlXCIpO1xyXG4gICAgICAgIGxldCBidG4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBidG4yLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJidG4gYnRuLXByaW1hcnkgICBteS00XCIpO1xyXG4gICAgICAgIGJ0bjIub25jbGljaz0oKT0+e1xyXG4gICAgICAgICAgICBsZXQgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgJ3VzZXJuYW1lJyA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAnZW1haWwnIDogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmZXRjaChcIi9hZG1pbi9pbmZvXCIsIHJlcXVlc3QpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSk9PnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpPT4gXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU9XCJcIjtcclxuICAgICAgICAgICAgICAgIHNob3dQcm9maWxlKClcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBidG4yLmlubmVySFRNTD1cIkNhbWJpYSBFbWFpbFwiXHJcbiAgICAgICAgYnV0dG9ucy5hcHBlbmQoYnRuMik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGNwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcFwiKTtcclxuICAgICAgICBsZXQgYnRuMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnRuMy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ0biBidG4tcHJpbWFyeVwiKVxyXG4gICAgICAgIGJ0bjMuaW5uZXJIVE1MPVwiQ2FtYmlhIFBhc3N3b3JkXCJcclxuICAgICAgICBidG4zLm9uY2xpY2s9ICgpPT57XHJcbiAgICAgICAgICAgIGxldCBvYmogPSB7XHJcbiAgICAgICAgICAgICAgICAnb2xkUGFzc3dvcmQnIDogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2xkUGFzc3dvcmRcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAnbmV3UGFzc3dvcmQnIDogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UGFzc3dvcmRcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmZXRjaChcIi9hZG1pbi9wc3dcIiwgcmVxdWVzdClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKT0+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSk9PiBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvbGRQYXNzd29yZFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZT1cIlwiOyAgICAgIFxyXG4gICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UGFzc3dvcmRcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU9XCJcIjsgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjcC5hcHBlbmQoYnRuMyk7XHJcblxyXG4gICAgfSlcclxuICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dVc2VyUHJvZmlsZSgpe1xyXG4gICAgZmV0Y2goXCIvdXNlckluZm9cIilcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICB1c2VySW5mbz1kYXRhO1xyXG4gICAgICAgIGxldCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlcHJvZmlsZVwiKTtcclxuICAgICAgICBoMS5pbm5lckhUTUw9XCJCRU5UT1JOQVRPIFVURU5URSBcIisgdXNlckluZm8udXNlcm5hbWUgKyBcIiBcIisgdXNlckluZm8ucmF0aW5nICtcIiA8aSBjbGFzcz0nZmEtcmVndWxhciBmYS1zdGFyJz48L2k+XCI7XHJcbiAgICAgICAgdGl0bGUuYXBwZW5kKGgxKTtcclxuICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keXByb2ZpbGVcIik7XHJcbiAgICAgICAgbGV0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICAgIGgyLmlubmVySFRNTD1cclxuICAgICAgICBcIiA8YnI+PGJyPjxicj4gPGI+PC9iPlwiK3VzZXJJbmZvLnVzZXJuYW1lIFxyXG4gICAgICAgICsgXCIgPGJyPjxicj4gPGI+PC9iPlwiK3VzZXJJbmZvLmVtYWlsIFxyXG4gICAgICAgICsgXCIgPGJyPjxicj48Yj48L2I+XCIrdXNlckluZm8ubmFtZVxyXG4gICAgICAgICsgXCIgPGJyPjxicj4gPGI+PC9iPlwiK3VzZXJJbmZvLnN1cm5hbWVcclxuICAgICAgICBib2R5LmFwcGVuZChoMilcclxuXHJcbiAgICAgICAgbGV0IGJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbnMtcHJvZmlsZVwiKTtcclxuICAgICAgICBsZXQgYnRuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnRuMS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwiYnRuIGJ0bi1wcmltYXJ5IG15LTFcIik7XHJcbiAgICAgICAgYnRuMS5vbmNsaWNrPSgpPT57XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgJ3VzZXJuYW1lJyA6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJuYW1lXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgJ2VtYWlsJyA6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmZXRjaChcIi91c2VyL2luZm9cIiwgcmVxdWVzdClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKT0+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSk9PiBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VybmFtZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZT1cIlwiO1xyXG4gICAgICAgICAgICAgICAgc2hvd1Byb2ZpbGUoKVxyXG4gICAgICAgICAgICB9KSAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidG4xLmlubmVySFRNTD1cIkNhbWJpYSBVc2VybmFtZVwiXHJcbiAgICAgICAgYnV0dG9ucy5hcHBlbmQoYnRuMSlcclxuXHJcbiAgICAgICAgbGV0IGJ1dHRvbkVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b25zLXByb2ZpbGVcIik7XHJcbiAgICAgICAgbGV0IGJ0bjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ0bjIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcImJ0biBidG4tcHJpbWFyeSAgIG15LTRcIik7XHJcbiAgICAgICAgYnRuMi5vbmNsaWNrPSgpPT57XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgJ3VzZXJuYW1lJyA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAnZW1haWwnIDogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmZXRjaChcIi91c2VyL2luZm9cIiwgcmVxdWVzdClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKT0+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSk9PiBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZT1cIlwiO1xyXG4gICAgICAgICAgICAgICAgIHNob3dQcm9maWxlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ0bjIuaW5uZXJIVE1MPVwiQ2FtYmlhIEVtYWlsXCJcclxuICAgICAgICBidXR0b25zLmFwcGVuZChidG4yKTtcclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgIFxyXG4gICAgbGV0IGNwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcFwiKTtcclxuICAgIGxldCBidG4zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGJ0bjMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG4gYnRuLXByaW1hcnlcIilcclxuICAgIGJ0bjMuaW5uZXJIVE1MPVwiQ2FtYmlhIFBhc3N3b3JkXCJcclxuICAgIGJ0bjMub25jbGljaz0gKCk9PntcclxuICAgICAgICBsZXQgb2JqID0ge1xyXG4gICAgICAgICAgICAnb2xkUGFzc3dvcmQnIDogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2xkUGFzc3dvcmRcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcbiAgICAgICAgICAgICduZXdQYXNzd29yZCcgOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQYXNzd29yZFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBsZXQgcmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZmV0Y2goXCIvdXNlci9wc3dcIiwgcmVxdWVzdClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpPT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpPT4gXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2xkUGFzc3dvcmRcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU9XCJcIjsgICAgICBcclxuICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UGFzc3dvcmRcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU9XCJcIjsgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNwLmFwcGVuZChidG4zKTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hvd1Byb2ZpbGU7IiwiaW1wb3J0IGNyZWFWaWRlb2dpb2NvIGZyb20gXCIuL2NyZWFWaWRlb2dpb2NvLmh0bWxcIlxyXG5cclxubGV0IHJhZGlvOiBzdHJpbmc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVmlkZW9HYW1lUGFnZSgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBjcmVhVmlkZW9naW9jbztcclxuICAgIGdlbmVyYXRlR2VucmVMaXN0KCk7XHJcbiAgICBnZW5lcmF0ZUNvbnNvbGVMaXN0KCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0dlbnJlQnRuXCIpLm9uY2xpY2sgPSBjcmVhdGVHZW5yZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3Q29uc29sZUJ0blwiKS5vbmNsaWNrID0gY3JlYXRlQ29uc29sZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3VmlkZW9HYW1lQnRuXCIpLm9uY2xpY2sgPSBjcmVhdGVWaWRlb0dhbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlR2VucmVMaXN0KCkge1xyXG4gICAgbGV0IGdlbnJlTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2VucmVMaXN0XCIpO1xyXG4gICAgZ2VucmVMaXN0LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBmZXRjaChcIi9nZW5yZVwiKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJvbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYlwiKTtcclxuICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIik7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImdlbnJlXCIraSk7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm0tY2hlY2staW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBkYXRhW2ldLmdlbnJlKTtcclxuICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybS1jaGVjay1sYWJlbFwiKTtcclxuICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImdlbnJlXCIraSk7XHJcbiAgICAgICAgICAgICAgICBib2xkLmlubmVySFRNTD1cIlwiK2RhdGFbaV0uZ2VucmU7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5hcHBlbmQoYm9sZCk7XHJcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kKGlucHV0LCBsYWJlbCk7XHJcbiAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgbGV0IHNuaXBwZXQgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0IGdlbnJlc2NoZWNrXCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJnZW5yZSR7aX1cIiB2YWx1ZT1cIiR7ZGF0YVtpXS5nZW5yZX1cIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJnZW5yZSR7aX1cIj48Yj4ke2RhdGFbaV0uZ2VucmV9PC9iPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgICAgICAgIGdlbnJlTGlzdC5pbm5lckhUTUwgKz0gc25pcHBldDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQ29uc29sZUxpc3QoKSB7XHJcbiAgICBsZXQgY29uc29sZUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnNvbGVMaXN0XCIpO1xyXG4gICAgY29uc29sZUxpc3QuaW5uZXJIVE1MID0gXCI8YnI+PGJyPlwiO1xyXG4gICAgZmV0Y2goXCIvY29uc29sZVwiKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJvbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29uc29sZVwiICsgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImNvbnNvbGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb3JtLWNoZWNrLWlucHV0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBkYXRhW2ldLmNvbnNvbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0Lm9uY2xpY2sgPSAoKT0+eyBzZXRSYWRpbyhkYXRhW2ldLmNvbnNvbGUpfTtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm0tY2hlY2stbGFiZWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiY29uc29sZVwiICsgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9sZC5pbm5lckhUTUwgPSBcIlwiICsgZGF0YVtpXS5jb25zb2xlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLmFwcGVuZChib2xkKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXYuYXBwZW5kKGlucHV0LCBsYWJlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZUxpc3QuYXBwZW5kKGRpdik7XHJcbiAgICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmlyc3RTbmlwcGV0PWBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cInJhZGlvXCIgaWQ9XCJjb25zb2xlJHtpfVwiIG5hbWU9XCJjb25zb2xlXCIgdmFsdWU9XCIke2RhdGFbaV0uY29uc29sZX1cIiBvbmNsaWNrPVwiKCk9Pnsgc2V0UmFkaW8oJHtkYXRhW2ldLmNvbnNvbGV9KX1cIiBjaGVja2VkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiY29uc29sZSR7aX1cIj48Yj4ke2RhdGFbaV0uY29uc29sZX08L2I+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZUxpc3QuaW5uZXJIVE1MICs9IGZpcnN0U25pcHBldDtcclxuICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBib2xkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnNvbGVcIiArIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJjb25zb2xlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybS1jaGVjay1pbnB1dFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgZGF0YVtpXS5jb25zb2xlKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5vbmNsaWNrID0gKCk9Pnsgc2V0UmFkaW8oZGF0YVtpXS5jb25zb2xlKX07XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb3JtLWNoZWNrLWxhYmVsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImNvbnNvbGVcIiArIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvbGQuaW5uZXJIVE1MID0gXCJcIiArIGRhdGFbaV0uY29uc29sZTtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5hcHBlbmQoYm9sZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2LmFwcGVuZChpbnB1dCwgbGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGVMaXN0LmFwcGVuZChkaXYpO1xyXG4gICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc25pcHBldCA9IGBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cInJhZGlvXCIgaWQ9XCJjb25zb2xlJHtpfVwiIG5hbWU9XCJjb25zb2xlXCIgdmFsdWU9XCIke2RhdGFbaV0uY29uc29sZX1cIiBvbmNsaWNrPVwiKCk9Pnsgc2V0UmFkaW8oJHtkYXRhW2ldLmNvbnNvbGV9KX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImNvbnNvbGUke2l9XCI+PGI+JHtkYXRhW2ldLmNvbnNvbGV9PC9iPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGVMaXN0LmlubmVySFRNTCArPSBzbmlwcGV0O1xyXG4gICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVHZW5yZSgpIHtcclxuICAgIGxldCBuZXdHZW5yZSA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0dlbnJlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgbGV0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3R2VucmUpXHJcbiAgICB9XHJcbiAgICBmZXRjaChcIi9nZW5yZVwiLCByZXF1ZXN0KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdHZW5yZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZUdlbnJlTGlzdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbnNvbGUoKSB7XHJcbiAgICBsZXQgbmV3Q29uc29sZSA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0NvbnNvbGVcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICBsZXQgcmVxdWVzdCA9IHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdDb25zb2xlKVxyXG4gICAgfVxyXG4gICAgZmV0Y2goXCIvY29uc29sZVwiLCByZXF1ZXN0KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdDb25zb2xlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGdlbmVyYXRlQ29uc29sZUxpc3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVZpZGVvR2FtZSgpIHtcclxuXHJcbiAgICBsZXQgZ2VucmVzID0gKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJnZW5yZXNjaGVja1wiKSBhcyBIVE1MQ29sbGVjdGlvbk9mPEhUTUxJbnB1dEVsZW1lbnQ+KTtcclxuICAgIGxldCBjaGVja2VkR2VucmVzICA9IFtdO1xyXG4gICAgZm9yIChsZXQgZ2VucmUgb2YgZ2VucmVzKSB7XHJcbiAgICAgICAgaWYgKGdlbnJlLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgY2hlY2tlZEdlbnJlcy5wdXNoKGdlbnJlLnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG5ld1ZpZGVvZ2FtZSA9IHtcclxuICAgICAgICBuYW1lOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJWR25hbWVcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcbiAgICAgICAgZ2VucmU6IGNoZWNrZWRHZW5yZXMsXHJcbiAgICAgICAgeWVhcjogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiVkd5ZWFyXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLFxyXG4gICAgICAgIGNvbnNvbGU6IHJhZGlvLFxyXG4gICAgICAgIGNvdmVyOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJWR2NvdmVyXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCByZXF1ZXN0ID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld1ZpZGVvZ2FtZSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgZmV0Y2goXCIvdmlkZW9nYW1lc1wiLCByZXF1ZXN0KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKT0+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgaWYoZGF0YSl7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwidmlkZW9naW9jbyBpbnNlcml0b1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFJhZGlvKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHJhZGlvID0gdmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVZpZGVvR2FtZVBhZ2VcclxuXHJcblxyXG4iLCJpbXBvcnQgeyBkYXRhIH0gZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQgZ2VucmUgZnJvbSBcIi4uL2ludGVyZmFjZXMvZ2VucmVcIjtcclxuaW1wb3J0IHZpZGVvZ2FtZSBmcm9tIFwiLi4vaW50ZXJmYWNlcy92aWRlb2dhbWVcIjtcclxuaW1wb3J0IGNyZWF0ZVZpZGVvR2FtZVBhZ2UgZnJvbSBcIi4vY3JlYVZpZGVvZ2lvY2hpXCI7XHJcbmltcG9ydCBjcmVhdGVHYW1lVmlzdWFsaXphdGlvbiBmcm9tIFwiLi92aXN1YWxpenphVmlkZW9naW9jb1wiXHJcblxyXG5sZXQgZ2FtZUxpc3Q6IHZpZGVvZ2FtZVtdID0gW107XHJcbmxldCBnYW1lRmlsdGVyZWRMaXN0OiB2aWRlb2dhbWVbXSA9IFtdXHJcbmxldCBnZW5yZXM6IHN0cmluZ1tdID0gW11cclxubGV0IHllYXJzOiBudW1iZXJbXSA9IFtdXHJcbmxldCBnYW1lVmlldzogbnVtYmVyID0gNjtcclxubGV0IHR5cGU6IHN0cmluZztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHYW1lUGFnZSgpIHtcclxuICAgIGZldGNoKFwiL3dob0lzTG9nZ2VkXCIpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEgPT0gXCJBRE1JTlwiKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFZpZGVvZ2FtZVwiKS5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFZpZGVvZ2FtZVwiKS5vbmNsaWNrID0gY3JlYXRlVmlkZW9HYW1lUGFnZTtcclxuICAgICAgICAgICAgICAgIHR5cGUgPSBcIkFETUlOXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YSA9PSBcIlVTRVJcIikge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRWaWRlb2dhbWVcIikuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICAgICAgICAgIHR5cGUgPSBcIlVTRVJcIlxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRWaWRlb2dhbWVcIikuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICAgICAgICAgIHR5cGUgPSBcIkdVRVNUXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmZXRjaChcIi92aWRlb2dhbWVzXCIpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IChyZXNwb25zZS5qc29uKCkpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGdhbWUgb2YgZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lTGlzdC5wdXNoKGdhbWUpOyAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlR2FtZVBhZ2luYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBzaG93R2FtZXMoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzaWduR2FtZUZpbHRlcnMoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRBbGxHYW1lcygpIHtcclxuXHJcbiAgICBmZXRjaChcIi92aWRlb2dhbWVzXCIpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiAocmVzcG9uc2UuanNvbigpKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBnYW1lTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBnYW1lIG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGdhbWVMaXN0LnB1c2goZ2FtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNob3dHYW1lcyhpOiBudW1iZXIpIHtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJWaWRlb2dhbWVDb250ZW50XCIpO1xyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbGV0IHN0YXJ0ID0gKGkgLSAxKSAqIGdhbWVWaWV3O1xyXG4gICAgbGV0IHN0b3AgPSAoaSAqIGdhbWVWaWV3KSAtIDE7XHJcbiAgICBmb3IgKHN0YXJ0OyBzdGFydCA8PSBzdG9wOyBzdGFydCsrKSB7XHJcbiAgICAgICAgaWYgKHN0YXJ0ID49IGdhbWVMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29sLTQgdGV4dC1jZW50ZXJcIik7XHJcbiAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpXCIpO1xyXG4gICAgICAgIGNvbC5vbm1vdXNlb3ZlciA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb2wub25tb3VzZW91dCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpXCIpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICBsZXQgZ2FtZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgICAgIGdhbWVUaXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm15LTRcIilcclxuICAgICAgICBsZXQgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGltYWdlLnNyYyA9IGdhbWVMaXN0W3N0YXJ0XS5jb3Zlci5saW5rO1xyXG4gICAgICAgIGltYWdlLndpZHRoID0gMjAwO1xyXG4gICAgICAgIGltYWdlLmhlaWdodCA9IDIwMDtcclxuICAgICAgICBsZXQgZ2FtZSA9IGdhbWVMaXN0W3N0YXJ0XVxyXG4gICAgICAgIGltYWdlLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNyZWF0ZUdhbWVWaXN1YWxpemF0aW9uKGdhbWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdhbWVUaXRsZS5pbm5lckhUTUwgPSBcIjxiPlwiICsgZ2FtZUxpc3Rbc3RhcnRdLm5hbWUgKyBcIjwvYj5cIjtcclxuXHJcbiAgICAgICAgY29sLmFwcGVuZChnYW1lVGl0bGUsIGltYWdlKTtcclxuICAgICAgICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBsZXQgaWQgPSBnYW1lTGlzdFtzdGFydF0uaWRcclxuICAgICAgICBpZiAodHlwZSA9PSBcIlVTRVJcIikge1xyXG4gICAgICAgICAgICBhZGRCdXR0b24uaW5uZXJIVE1MID0gXCJBZ2dpdW5naSBhbGxhIHR1YSBMaXN0YSFcIlxyXG4gICAgICAgICAgICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJteS0zXCIpXHJcbiAgICAgICAgICAgIGFkZEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGZldGNoKFwiL3VzZXIvZ2FtZS9cIiArIGlkKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gKHJlc3BvbnNlLmpzb24oKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiVmlkZW9naW9jbyBhZ2dpdW50byFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIlBvc3NpZWRpIGdpw6AgcXVlc3RvIGdpdW9jbyFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb2wuYXBwZW5kKGFkZEJ1dHRvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKGNvbCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVHYW1lUGFnaW5hdGlvbigpIHtcclxuICAgIGxldCBzaXplOiBudW1iZXIgPSBnYW1lTGlzdC5sZW5ndGhcclxuICAgIGxldCB0YWJzOiBudW1iZXIgPSBNYXRoLmNlaWwoc2l6ZSAvIGdhbWVWaWV3KTtcclxuICAgIGxldCBwYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZXNWXCIpO1xyXG4gICAgcGFnZXMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRhYnM7IGkrKykge1xyXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBpZiAoaSA9PSAxKSB7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtIGFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIsIFwicGFnZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1saW5rXCIpO1xyXG4gICAgICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYWxsTGkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VzVlwiKS5jaGlsZHJlbjtcclxuICAgICAgICAgICAgZm9yIChsZXQgb25lTGkgb2YgYWxsTGkpIHtcclxuICAgICAgICAgICAgICAgIG9uZUxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgb25lTGkucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtIGFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIsIFwicGFnZVwiKTtcclxuICAgICAgICAgICAgc2hvd0dhbWVzKGkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgYnRuLmlubmVySFRNTCA9IFwiXCIgKyAoaSk7XHJcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYnRuKTtcclxuICAgICAgICBwYWdlcy5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzZXRBbGxHZW5yZXMoKSB7XHJcbiAgICA7XHJcbiAgICBnZW5yZXMgPSBbXVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ2FtZUxpc3RbaV0uZ2VucmUubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKCEoZ2VucmVzLmluY2x1ZGVzKGdhbWVMaXN0W2ldLmdlbnJlW2pdLmdlbnJlKSkpIHtcclxuICAgICAgICAgICAgICAgIGdlbnJlcy5wdXNoKGdhbWVMaXN0W2ldLmdlbnJlW2pdLmdlbnJlKVxyXG4gICAgICAgICAgICAgICAgbGV0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lR2VucmVzXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgICAgICAgICAgbGkuaWQgPSBnYW1lTGlzdFtpXS5nZW5yZVtqXS5nZW5yZTtcclxuICAgICAgICAgICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZHJvcGRvd24taXRlbVwiKTtcclxuICAgICAgICAgICAgICAgIGJ0bi5pbm5lckhUTUwgPSBnYW1lTGlzdFtpXS5nZW5yZVtqXS5nZW5yZTtcclxuICAgICAgICAgICAgICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaEJ5R2FtZUdlbnJlKGxpLmlkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHVsLmFwcGVuZChsaSk7XHJcbiAgICAgICAgICAgICAgICBsaS5hcHBlbmQoYnRuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNldEFsbFllYXJzKCkge1xyXG4gICAgeWVhcnMgPSBbXVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICghKHllYXJzLmluY2x1ZGVzKGdhbWVMaXN0W2ldLnllYXIpKSkge1xyXG4gICAgICAgICAgICB5ZWFycy5wdXNoKGdhbWVMaXN0W2ldLnllYXIpXHJcbiAgICAgICAgICAgIGxldCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZVllYXJzXCIpO1xyXG4gICAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgICAgIGxpLmlkID0gXCJcIiArIGdhbWVMaXN0W2ldLnllYXI7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkcm9wZG93bi1pdGVtXCIpO1xyXG4gICAgICAgICAgICBidG4uaW5uZXJIVE1MID0gXCJcIiArIGdhbWVMaXN0W2ldLnllYXI7XHJcbiAgICAgICAgICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoQnlHYW1lWWVhcihOdW1iZXIobGkuaWQpKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1bC5hcHBlbmQobGkpO1xyXG4gICAgICAgICAgICBsaS5hcHBlbmQoYnRuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZWFyY2hCeUFsbEdhbWVzKCkgeyAgICAgICAgICAgICAvKkxhIGZ1bnppb25hIGRlbCBib3R0b25lIGNoZSBjZXJjYSB0dXR0aSBnbGkgYW5udW5jaSBzZW56YSBmaWx0cmkqL1xyXG4gICAgZ2V0QWxsR2FtZXMoKTtcclxuICAgIGNyZWF0ZUdhbWVQYWdpbmF0aW9uKCk7XHJcbiAgICBzaG93R2FtZXMoMSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZWFyY2hCeUdhbWVUaXRsZSh0aXRsZTogc3RyaW5nKSB7XHJcbiAgICBnYW1lRmlsdGVyZWRMaXN0ID0gW11cclxuICAgIGZvciAobGV0IGVsZW1lbnQgb2YgZ2FtZUxpc3QpIHtcclxuICAgICAgICBsZXQgZ2FtZU5hbWUgPSBlbGVtZW50Lm5hbWVcclxuICAgICAgICBpZiAoKGdhbWVOYW1lLnRvVXBwZXJDYXNlKCkuaW5jbHVkZXModGl0bGUudG9VcHBlckNhc2UoKSkpKSB7XHJcbiAgICAgICAgICAgIGdhbWVGaWx0ZXJlZExpc3QucHVzaChlbGVtZW50KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdhbWVMaXN0ID0gW107XHJcbiAgICBnYW1lTGlzdCA9IGdhbWVGaWx0ZXJlZExpc3RcclxuICAgIGNyZWF0ZUdhbWVQYWdpbmF0aW9uKCk7XHJcbiAgICBzaG93R2FtZXMoMSk7XHJcbiAgICBnZXRBbGxHYW1lcygpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2VhcmNoQnlHYW1lR2VucmUoZ2VucmU6IFN0cmluZykge1xyXG4gICAgZ2FtZUZpbHRlcmVkTGlzdCA9IFtdXHJcbiAgICBmb3IgKGxldCBlbGVtZW50IG9mIGdhbWVMaXN0KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmdlbnJlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmdlbnJlW2ldLmdlbnJlID09IGdlbnJlKSB7XHJcbiAgICAgICAgICAgICAgICBnYW1lRmlsdGVyZWRMaXN0LnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBpID0gZWxlbWVudC5nZW5yZS5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnYW1lTGlzdCA9IFtdO1xyXG4gICAgZ2FtZUxpc3QgPSBnYW1lRmlsdGVyZWRMaXN0XHJcbiAgICBjcmVhdGVHYW1lUGFnaW5hdGlvbigpO1xyXG4gICAgc2hvd0dhbWVzKDEpO1xyXG4gICAgZ2V0QWxsR2FtZXMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VhcmNoQnlHYW1lWWVhcih5ZWFyOiBudW1iZXIpIHtcclxuICAgIGdhbWVGaWx0ZXJlZExpc3QgPSBbXVxyXG4gICAgZm9yIChsZXQgZWxlbWVudCBvZiBnYW1lTGlzdCkge1xyXG4gICAgICAgIGlmIChlbGVtZW50LnllYXIgPT0geWVhcikge1xyXG4gICAgICAgICAgICBnYW1lRmlsdGVyZWRMaXN0LnB1c2goZWxlbWVudClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnYW1lTGlzdCA9IFtdO1xyXG4gICAgZ2FtZUxpc3QgPSBnYW1lRmlsdGVyZWRMaXN0XHJcbiAgICBjcmVhdGVHYW1lUGFnaW5hdGlvbigpO1xyXG4gICAgc2hvd0dhbWVzKDEpO1xyXG4gICAgZ2V0QWxsR2FtZXMoKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gYXNzaWduR2FtZUZpbHRlcnMoKSB7ICAgICAgICAgICAgIC8qQXNzZWduYSBsZSBmdW56aW9uaSBhaSBwdWxzYW50aSBuZWxsZSBkcm9wRG93bkxpc3QgZGEgcHJvdmFyZSovXHJcbiAgICBsZXQgYWxsR2FtZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdEFsbEdhbWVzXCIpXHJcbiAgICBhbGxHYW1lcy5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNlYXJjaEJ5QWxsR2FtZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBbGxHZW5yZXMoKTtcclxuXHJcbiAgICBzZXRBbGxZZWFycygpO1xyXG5cclxuICAgIGxldCBzZWFyY2hUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoVGl0bGVHYW1lXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBzZWFyY2hUaXRsZS5vbmtleWRvd24gPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIHNlYXJjaEJ5R2FtZVRpdGxlKHNlYXJjaFRpdGxlLnZhbHVlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHYW1lUGFnZTsiLCJpbXBvcnQgdmlkZW9nYW1lIGZyb20gXCIuLi9pbnRlcmZhY2VzL3ZpZGVvZ2FtZVwiO1xyXG5pbXBvcnQgdmlzdWFsaXp6YVZpZGVvZ2lvY28gZnJvbSBcIi4vdmlzdWFsaXp6YVZpZGVvZ2lvY28uaHRtbFwiO1xyXG5pbXBvcnQgY3JlYXRlR2FtZVBhZ2UgZnJvbSBcIi4vdmlkZW9naW9jaGlcIjtcclxuaW1wb3J0IHZpZGVvZ2lvY2hpIGZyb20gXCIuL3ZpZGVvZ2lvY2hpLmh0bWxcIlxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHYW1lVmlzdWFsaXphdGlvbihnYW1lOnZpZGVvZ2FtZSl7XHJcbiAgICBjb25zb2xlLmxvZyhnYW1lKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUw9dmlzdWFsaXp6YVZpZGVvZ2lvY287XHJcbiAgICBzZXRiYWNrKCk7XHJcbiAgICBzZXRQYWdlKGdhbWUpXHJcbiAgICBcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNldGJhY2soKXtcclxuICAgIGxldCBiYWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrLWdhbWVzXCIpXHJcbiAgICBiYWNrLm9uY2xpY2s9KCk9PntcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MPXZpZGVvZ2lvY2hpXHJcbiAgICAgICAgY3JlYXRlR2FtZVBhZ2UoKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0UGFnZShnYW1lOnZpZGVvZ2FtZSl7XHJcbiAgICBsZXQgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZVRpdGxlXCIpO1xyXG4gICAgbGV0IHRpdGxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIHRpdGxlLmlubmVySFRNTD1cIjxiPlwiK2dhbWUubmFtZStcIjwvYj5cIjtcclxuICAgIGhlYWQuYXBwZW5kKHRpdGxlKTtcclxuICAgIGhlYWQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInRleHQtY2VudGVyIG1iLTVcIilcclxuICAgIGxldCB2aWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lSW1hZ2VcIik7XHJcbiAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGltZy5zcmM9Z2FtZS5jb3Zlci5saW5rO1xyXG4gICAgaW1nLndpZHRoPTQwMDtcclxuICAgIHZpZXcuYXBwZW5kKGltZyk7XHJcbiAgICBsZXQgaW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZUluZm9cIik7XHJcbiAgICBsZXQgZ2VuZXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpXHJcbiAgICBnZW5lcmUuaW5uZXJIVE1MPSBcIjxiPkdFTkVSRS9JOiA8L2I+XCI7XHJcbiAgICBmb3IobGV0IGk9MDsgaTxnYW1lLmdlbnJlLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBnZW5lcmUuaW5uZXJIVE1MICs9IGdhbWUuZ2VucmVbaV0uZ2VucmUgK1wiIFwiO1xyXG4gICAgfSBcclxuICAgIGxldCBjb25zb2xlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGNvbnNvbGUuaW5uZXJIVE1MPSBcIjxiPkNPTlNPTEU6IDwvYj5cIitnYW1lLmNvbnNvbGUuY29uc29sZTtcclxuICAgIGxldCB5ZWFyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIHllYXIuaW5uZXJIVE1MPVwiPGI+QU5OTzogPC9iPlwiK2dhbWUueWVhclxyXG4gICAgaW5mby5hcHBlbmQoZ2VuZXJlLGNvbnNvbGUseWVhcik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdhbWVWaXN1YWxpemF0aW9uIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3JlYXRlSG9tZSBmcm9tIFwiLi9ob21lL2hvbWVcIjtcclxuaW1wb3J0IGNyZWF0ZU5hdiBmcm9tIFwiLi9uYXZiYXIvbmF2YmFyXCI7XHJcbmltcG9ydCBjcmVhdGVGb3QgZnJvbSBcIi4vZm9vdGVyL2Zvb3RlclwiO1xyXG5pbXBvcnQgYWRkQ2xpY2tDaGF0IGZyb20gXCIuL2NoYXQvY2hhdFwiO1xyXG5pbXBvcnQgeyBzZWFyY2hOb3RpZmljYXRpb24gfSBmcm9tIFwiLi9jaGF0L2NoYXRcIjtcclxuXHJcbmNyZWF0ZU5hdigpO1xyXG5jcmVhdGVIb21lKCk7XHJcbmNyZWF0ZUZvdCgpO1xyXG5hZGRDbGlja0NoYXQoKTtcclxuc2VhcmNoTm90aWZpY2F0aW9uKCk7XHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("    <div id=\"back\">\r\n        <img id=\"backgames\" class=\"mt-4 buttonhover mb-4\" width=120 src=\"./img/back.png\">\r\n    </div>\r\n   <!--  -->\r\n\r\n<div class=\"row\" style=\"background-color: rgba(0,0,0,0.7);\">\r\n    <div class=\"col-md-6\">\r\n        <div>\r\n            <div id=\"imageSlider\" class=\"carousel slide\" data-bs-ride=\"true\">\r\n                <div id=\"indicator\" class=\"carousel-indicators\">\r\n                </div>\r\n                <div id=\"inner\" class=\"carousel-inner\">\r\n                </div>\r\n                <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#imageSlider\" data-bs-slide=\"prev\">\r\n                    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n                    <span class=\"visually-hidden\">Precedente</span>\r\n                </button>\r\n                <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#imageSlider\" data-bs-slide=\"next\">\r\n                    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n                    <span class=\"visually-hidden\">Successiva</span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div id=\"givedGame\">\r\n                    <div class=\"card mb-3\" style=\"max-width: 540px;\">\r\n                        <div class=\"row g-0\">\r\n                            <div id=\"card-image\" class=\"col-md-4\">\r\n\r\n                            </div>\r\n                            <div class=\"col-md-8\">\r\n                                <div id=\"card-body\" class=\"card-body\">\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div id=\"insertion-description\" class=\"font-size:20px color:white col-md-12\">\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"my-5 text-center\">\r\n    <h3><span id=\"insertion-creator\"></span> vorrebbe uno di questi giochi in cambio:</h3>\r\n</div>\r\n\r\n<div class=\"accordion row\" id=\"accordionExample\">\r\n    <div class=\"accordion-item col-md-4\">\r\n        <h2 class=\"accordion-header\" id=\"headingOne\">\r\n            <button id=\"btn-item-1\" class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\"\r\n                data-bs-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n\r\n            </button>\r\n        </h2>\r\n        <div id=\"collapseOne\" class=\"accordion-collapse collapse\" aria-labelledby=\"headingOne\"\r\n            data-bs-parent=\"#accordionExample\">\r\n            <div class=\"accordion-body\">\r\n                <div id=\"img-item-1\" class=\"card mx-auto\" style=\"width: 18rem;\">\r\n                    \r\n                    <div id=\"body-item-1\" class=\"card-body text-center\">\r\n                        \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"accordion-item col-md-4\">\r\n        <h2 class=\"accordion-header\" id=\"headingTwo\">\r\n            <button id=\"btn-item-2\" class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\"\r\n                data-bs-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\r\n\r\n            </button>\r\n        </h2>\r\n        <div id=\"collapseTwo\" class=\"accordion-collapse collapse\" aria-labelledby=\"headingTwo\"\r\n            data-bs-parent=\"#accordionExample\">\r\n            <div class=\"accordion-body\">\r\n                <div id=\"img-item-2\" class=\"card mx-auto\" style=\"width: 18rem;\">\r\n                    \r\n                    <div id=\"body-item-2\" class=\"card-body text-center\">\r\n                        \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"accordion-item col-md-4\">\r\n        <h2 class=\"accordion-header\" id=\"headingThree\">\r\n            <button id=\"btn-item-3\" class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\"\r\n                data-bs-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\r\n\r\n            </button>\r\n        </h2>\r\n        <div id=\"collapseThree\" class=\"accordion-collapse collapse\" aria-labelledby=\"headingThree\"\r\n            data-bs-parent=\"#accordionExample\">\r\n            <div class=\"accordion-body\">\r\n                <div id=\"img-item-3\" class=\"card mx-auto\" style=\"width: 18rem;\">\r\n                    \r\n                    <div id=\"body-item-3\" class=\"card-body text-center\">\r\n                        \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div id=\"chatHeader\" class=\"card-header d-flex justify-content-between align-items-center p-3\">\r\n    <h5 id=\"chatTitle\" class=\"mb-0\"></h5>\r\n    <div class=\"d-flex flex-row align-items-center\">\r\n        <span class=\"badge bg-warning me-3\">20</span>\r\n        <i class=\"fas fa-times text-muted fa-xs\"></i>\r\n    </div>\r\n</div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div id=\"bgaround\" class=\"text-center my-5\">\r\n    <img src=\"./img/videogamelover.png\" alt=\"not found\" class=\"headerImg mx-auto\" style=\"width: 50%; \" id=\"headerImg\">\r\n</div>\r\n\r\n<style>\r\n\r\n  .widgetIntro {\r\n    display: inline-block;\r\n  }\r\n\r\n  .widgetIntro-div{\r\n    text-align: left;\r\n    float: left;\r\n  }\r\n  \r\n  #annCard {\r\n\r\n    width: 40%;\r\n    height: 500px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    align-self: center;\r\n  }\r\n\r\n  #imgCard {\r\n    height: 60%;\r\n    width:fit-content;\r\n    align-self: center;\r\n  }\r\n\r\n\r\n  .imgS {\r\n    width: 54px;\r\n    height: 42px;\r\n  }\r\n\r\n  body {\r\n    text-align: center;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .widgetPic {\r\n    width: auto;\r\n    height: 100%;\r\n  }\r\n\r\n  .picRight {\r\n    margin-right: 0px;\r\n  }\r\n\r\n  .picleft {\r\n    margin-left: 0px;\r\n  }\r\n\r\n  .sec {\r\n    margin-top: 10%;\r\n    margin-bottom: 10%;\r\n    width: 100%;\r\n    background-color: rgba(255, 255, 255, 0.5);\r\n    padding: auto;\r\n  }\r\n\r\n  .p {\r\n    padding: 0px;\r\n  }\r\n \r\n</style>\r\n\r\n<section class=\"p sec border border-success mb-2 border-opacity-50 rounded row aling-item-start\">\r\n  <div class=\"p col-4\">\r\n    <picture>\r\n      <img class=\"widgetPic picLeft rounded-start\" src=\"./img/gamesearch.jpeg\" style=\"width:100%\" alt=\"\">\r\n    </picture>\r\n  </div>\r\n  <div class=\"border-start border-3 border-primary col-8 text-start widgetText\">\r\n    <h1>\r\n      Il portale dei veri gamers.\r\n    </h1>\r\n    <h2>\r\n      Sei alla ricerca di un gioco, vecchio o nuovo che sia, ma non riesci a trovarlo? Noi abbiamo la soluzione per te...\r\n      Cerca tra centinaia di annunci il titolo che non trovavi più, mettiti in contatto con l'utente che lo sta vendendo, \r\n      e fai l'affare del secolo...\r\n    </h2>\r\n  </div>\r\n</section>\r\n\r\n<div class=\"container text-center\" style=\"margin-top: 10%; margin-bottom: 10%;\">\r\n  <div class=\"row\" style=\"margin-left:10%;margin-right:10%;\">\r\n    <div class=\"col\">\r\n      <div class=\"card text-bg-danger\" style=\"width: 18rem;height: 100%;\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Cerca</h5>\r\n          <p class=\"card-text\">Cerca il tuo gioco prefereito tra centinaia di annunci</p>\r\n          <hr>\r\n          <div class=\"input-group mb-3 form-control border rounded\" style=\"margin-top: 10px;\">\r\n            <input type=\"text\" class=\"form-control border-0\" id=\"searchTitle\" placeholder=\"Cerca\" aria-label=\"search\" aria-describedby=\"basic-addon2\">\r\n            <a id=\"searchButtonTitle\" href=\"#\"><img class=\"ms-1 btn imgS\" src=\"./img/search.png\" alt=\"\"></a>\r\n          </div> \r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\">\r\n      <div class=\"card text-bg-primary\" style=\"width: 18rem;height: 100%;\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Esplora</h5>\r\n          <p class=\"card-text\">Esplora miglialia di giochi tra gli annunci presenti</p>\r\n          <hr>\r\n          <a href=\"#\" id=\"insertionsCard\" class=\"btn btn-info\">Annunci</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\">\r\n      <div class=\"card text-bg-success\" style=\"width: 18rem;height: 100%;\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Scambia</h5>\r\n          <p class=\"card-text\">Hai un gioco di cui non te ne fai più nulla per le miliardi di volte che lo hai finito?\r\n            inserisci qui il tuo annuncio!\r\n          </p>\r\n          <hr>\r\n          <a href=\"#\" id=\"insertCard\" class=\"btn btn-light\">Inserisci Annuncio</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<section class=\"p sec border border-success mb-2 border-opacity-50 rounded row aling-item-start\">\r\n  <div class=\"border-end border-3 border-primary col-8 text-start widgetText\">\r\n    <h1>\r\n      Il portale dei veri gamers.\r\n    </h1>\r\n    <h2>\r\n      Sei alla ricerca di un gioco, vecchio o nuovo che sia, ma non riesci a trovarlo? Noi abbiamo la soluzione per te...\r\n      Cerca tra centinaia di annunci il titolo che non trovavi più, mettiti in contatto con l'utente che lo sta vendendo, \r\n      e fai l'affare del secolo...\r\n    </h2>\r\n  </div>\r\n  <div class=\"p col-4\">\r\n    <picture>\r\n      <img class=\"widgetPic picRight rounded-end\" src=\"./img/gametrade.png\" style=\"width:100%\" alt=\"\">\r\n    </picture>\r\n  </div>\r\n</section>\r\n\r\n<h1>Ultimi annunci:</h1>\r\n<h2>Controlla qui gli ultimi annunci</h2>\r\n<div id=\"carouselExampleControls\" class=\"carousel slide\" data-bs-ride=\"carousel\">\r\n    <div id=\"innerCarouselHome\" class=\"carousel-inner\">\r\n       \r\n    </div>\r\n    <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#carouselExampleControls\" data-bs-slide=\"prev\">\r\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"visually-hidden\">Previous</span>\r\n    </button>\r\n    <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#carouselExampleControls\" data-bs-slide=\"next\">\r\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"visually-hidden\">Next</span>\r\n    </button>\r\n  </div>\r\n\r\n<section class=\"p sec border border-success mb-2 border-opacity-50 rounded row aling-item-start\">\r\n  <div class=\"p col-4\">\r\n    <picture>\r\n      <img class=\"widgetPic picLeft rounded-start\" src=\"./img/Reunion.jpeg\" style=\"width:100%\" alt=\"\">\r\n    </picture>\r\n  </div>\r\n  <div class=\"border-start border-3 border-primary col-8 text-start widgetText\">\r\n    <h1>\r\n      Chi Siamo\r\n    </h1>\r\n    <h2>\r\n      Siamo un punto d'incontro per tutti quelli che si sono appassionati a quel mondo magico rinchiuso all'interno\r\n      di una cartuccia, disco o scheda, dandogli l'opportunità di poter ritrovare vecchi sogni, e scambiarli con alcuni nuovi.\r\n      L'opportunita di conoscere persone dello stesso parere, o opposto.\r\n    </h2>\r\n  </div>\r\n</section>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--navbar controller icon-->\r\n<button id=\"logo\" class=\"logo-button\"> <img class=\"logo\" src=\"./img/logo.png\" alt=\"logo\"></button>\r\n<button id=\"games\" class=\"logo-button back-transparent\"> <img class=\"logo\" src=\"./img/joystick(1).png\" alt=\"logo\"></button>\r\n<nav>\r\n  <ul>\r\n    <!--navbar buttons-->\r\n    <!--navbar controller icon-->\r\n    \r\n    <!--y button-->\r\n    <button id=\"insertions\" class=\"button-one nav-button\">Annunci</button>\r\n    <!--a button-->\r\n    <button id=\"addInsertion\" class=\"button-three nav-button\">Crea Annuncio</button>\r\n    <!--x button-->\r\n    <button id=\"management\" class=\"button-two nav-button\">Gestione Utenti</button>\r\n    <!--a button-->\r\n    <button id=\"insManagement\" class=\"button-three nav-button\">Gestione Annunci</button>\r\n    <!--b button-->\r\n    <button id=\"login\" class=\"button-four nav-button\" data-bs-toggle=\"modal\"\r\n      data-bs-target=\"#myModal\">Login</button>\r\n    <!--b button-->\r\n    <button id=\"signOutButton\" class=\"button-four nav-button\" data-bs-toggle=\"modal\"\r\n    data-bs-target=\"#myModal\">Logout</button>\r\n    <button id=\"profile\" class=\"profile-button\">\r\n      <span class=\"position-absolute top-2 start-90 translate-middle p-2 bg-danger border border-light rounded-circle\">\r\n        <span class=\"visually-hidden\">New alerts</span>\r\n      </span>\r\n      <img class=\"logo profile\" src=\"./img/profile.png\" alt=\"logo\">\r\n    </button>\r\n  </ul>\r\n\r\n  \r\n</nav>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div style=\"display: flex;\" class=\"my-5\">\r\n\r\n    <span style=\"margin-right: 40px\">\r\n        <button class=\"btn btn-primary\" id=\"selectAllGames\">Visualizza tutti i Videogame</button>\r\n            </span> <!--funzione che prende tutti gli annunci e li schiaffa nel contenuto annunci-->\r\n                <span style=\"margin-right: 40px\" class=\"dropdown\">\r\n                    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                    Visualizza per Genere\r\n                    </button>\r\n                    <ul id=\"gameGenres\" class=\"dropdown-menu\">\r\n                      \r\n                    </ul>\r\n                </span>\r\n            <span style=\"margin-right: 40px\" class=\"dropdown\">\r\n                <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                Visualizza per Anno\r\n                </button>\r\n                <ul id=\"gameYears\" class=\"dropdown-menu\">\r\n              \r\n                </ul>\r\n            </span>\r\n    <div style=\"vertical-align: middle;\" class=\"col-md-3 mx-auto\">\r\n        <div class=\"input-group\">\r\n            <input class=\"form-control border-end-1 border rounded-pill\" type=\"search\" placeholder=\"cerca\" style=\"margin-right:20px\" id=\"searchTitleGame\">\r\n        </div>\r\n    </div>\r\n        <button  id=\"addVideogame\" style=\"color:white\" class=\"btn btn-warning\" hidden>\r\n            <img src=\"./img/plus.png\" alt=\"plus\" style=\"width:25px\">\r\n            Inserisci Videogame\r\n        </button>\r\n      </span>      \r\n             \r\n\r\n</div>\r\n\r\n<div>\r\n    <div  id=\"VideogameContent\" class=\"row\">\r\n\r\n    </div>\r\n</div>\r\n\r\n<div>\r\n    <ul id=\"pagesV\" class=\"pagination pagination-sm my-2\">\r\n        \r\n    </ul>\r\n</div>");

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
        image.width = 200;
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
    document.getElementById("selectAll2").onclick = searchByAll2;
    assignFilters2();
    document.getElementById("createCategory").onclick = createCategory;
    let btn = document.getElementById("addInsertion");
    btn.onclick = () => {
        document.getElementById("main").innerHTML = _creaAnnuncio_creaAnnuncio_html__WEBPACK_IMPORTED_MODULE_0__["default"];
        (0,_creaAnnuncio_creaAnnuncio__WEBPACK_IMPORTED_MODULE_1__["default"])();
    };
    //createInsertion();
    getAllInsertions2();
    createPagination2();
    showResults2(1);
}
function searchByAll2() {
    getAllInsertions2();
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
    const imageGioco1 = {
        link: "https://i.etsystatic.com/6277804/r/il/7df00e/697546340/il_1140xN.697546340_fivs.jpg"
    };
    const imageGioco2 = {
        link: "https://www.mobygames.com/images/covers/l/14445-the-legend-of-zelda-nes-front-cover.jpg"
    };
    const imageGioco3 = {
        link: "https://upload.wikimedia.org/wikipedia/it/b/b3/Pok%C3%A9mon_Giallo.png"
    };
    const imageGioco4 = {
        link: "https://metalgear.fandom.com/it/wiki/Metal_Gear?file=Metal_Gear.jpg"
    };
    const imageGallery1 = {
        link: "https://upload.wikimedia.org/wikipedia/it/thumb/7/77/Pikachu.png/1024px-Pikachu.png"
    };
    const imageGallery2 = {
        link: "https://www.pngmart.com/files/11/Frog-Meme-PNG-HD.png"
    };
    const imageGallery3 = {
        link: "https://media.licdn.com/dms/image/D5635AQHw3E5yYyXTLw/profile-framedphoto-shrink_800_800/0/1644518918606?e=1675620000&v=beta&t=x1RnXqWsDWAOVQUXGFujModXZhiGUQJu0a6FAsZN3Lo"
    };
    const gioco1 = {
        id: 1,
        name: "SuperMario",
        genre: [{ genre: "PLATFORM" }],
        year: 1985,
        console: { console: "NES" },
        cover: imageGioco1
    };
    const gioco2 = {
        id: 2,
        name: "The Legend of Zelda",
        genre: [{ genre: "AVVENTURA" }],
        year: 1986,
        console: { console: "NES" },
        cover: imageGioco2
    };
    const gioco3 = {
        id: 3,
        name: "Pokemon Giallo",
        genre: [{ genre: "GDR" }],
        year: 1998,
        console: { console: "GAME_BOY_COLOR" },
        cover: imageGioco3
    };
    const gioco4 = {
        id: 4,
        name: "Metal Gear",
        genre: [{ genre: "STEALTH" }],
        year: 1987,
        console: { console: "NES" },
        cover: imageGioco4
    };
    const publisherGioco1 = {
        userId: 1,
        username: "Pieroaffondo",
        name: "Pierino",
        surname: "Ciccino",
        email: "pierinocuoricino@amorino.com",
        rating: 666,
        videogames: [gioco1]
    };
    const insertion1 = {
        approved: true,
        title: "Scambio SuperMario",
        description: "Scambio supermario xkè mi sono sekkato a giocarci",
        publisher: publisherGioco1,
        gallery: [imageGallery1, imageGallery2, imageGallery3],
        tradeGame: gioco1,
        wishList: [gioco2, gioco3, gioco4],
        outcome: "WIP",
        publicationDate: "29-01-2023"
    };
    const insertion2 = {
        approved: true,
        title: "Scambio SuperLuigi",
        description: "Scambio superluigi pecché sono pro",
        publisher: publisherGioco1,
        gallery: [imageGallery1, imageGallery2, imageGallery3],
        tradeGame: gioco2,
        wishList: [gioco1, gioco3, gioco4],
        outcome: "WIP",
        publicationDate: "29-01-2023"
    };
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
    //Prende la lista dal db
    fetch('/insertion')
        .then((response) => response.json())
        .then((data) => {
        for (let d of data) {
            list.push(d);
        }
    });
    //Da modificare a i<3
    for (let i = 0; i < 9; i++) {
        if (i != 2) {
            list.push(insertion1);
        }
        else {
            list.push(insertion2);
        }
    }
}
/*da qui in poi le funzioni servono a
creare la pagina una volta cliccato
sul bottone annunci e a ricaricarle*/
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
        let juan = "" + start;
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
    //Prende il valore della casella di testo e lo mette come nome della categoria
    let CatName = document.getElementById("categoryName");
    console.log(CatName.value);
    //TODO: LA FEEEEEEEEEEEEETCH!!!
    //TODO: inserisci gli elementi di checkedList in una categoria nel DB
    //TODO: Metodo da fare per inserire gli elementi nel database haha
    console.log("Categoria creata più o meno");
    //Svuota il valore della casella di testo e la lista
    CatName.value = "";
    checkedList = [];
    //Reimposta la pagina a come stava prima
    getAllInsertions2();
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chatHeader_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatHeader.html */ "./src/chat/chatHeader.html");
/* harmony import */ var _chatBody_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chatBody.html */ "./src/chat/chatBody.html");
/* harmony import */ var _chatFooter_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chatFooter.html */ "./src/chat/chatFooter.html");



let chatID;
let userID;
function addClickChat() {
    document.getElementById("showChatUsers").onclick = showUsersChat;
}
function showUsersChat() {
    let users = [];
    fetch("/user")
        .then((response) => response.json())
        .then((data) => {
        for (let user of data) {
            users.push(user);
        }
        let chatBox = document.getElementById("chatBox");
        chatBox.innerHTML = "";
        for (let user of users) {
            let div = document.createElement("div");
            div.setAttribute("class", "list-group");
            let btn = document.createElement("button");
            btn.setAttribute("type", "button");
            btn.setAttribute("class", "list-group-item list-group-item-action");
            btn.id = "" + user.userId;
            btn.innerHTML = user.username;
            btn.onclick = () => { findChat(Number(btn.id)); };
        }
    });
}
function findChat(idReceiver) {
    fetch("/findChat/" + idReceiver)
        .then((response) => response.json())
        .then((data) => {
        if (data != -1) {
            openChat(Number(data));
            chatID = data;
        }
    });
}
function openChat(chatId) {
    let chatBox = document.getElementById("chatBox");
    chatBox.innerHTML = "";
    chatBox.append(_chatHeader_html__WEBPACK_IMPORTED_MODULE_0__["default"], _chatBody_html__WEBPACK_IMPORTED_MODULE_1__["default"], _chatFooter_html__WEBPACK_IMPORTED_MODULE_2__["default"]);
    let chatTitle = document.getElementById("chatTitle");
    let chatConversation = document.getElementById("chatBody");
    document.getElementById("button-addon2").onclick = createMessage;
    fetch("/chat/conversation/" + chatId)
        .then((serializedConversation) => serializedConversation.json())
        .then((conversation) => {
        fetch("/user")
            .then((serializedThisUserInfo) => serializedThisUserInfo.json())
            .then((thisUserInfo) => {
            userID = thisUserInfo.userId;
            for (let message of conversation) {
                fetch("/user/" + message.userId)
                    .then((serializedUserInfo) => serializedUserInfo.json())
                    .then((userInfo) => {
                    if (userInfo.username == thisUserInfo.username) {
                        buildMessageSended();
                    }
                    else {
                        buildMessageRecived();
                    }
                });
            }
        });
    });
    function buildMessageRecived() {
        let chatBody = document.getElementById("chatBody");
        let divInfo = document.createElement("div");
        divInfo.setAttribute("class", "d-flex justify-content-between");
        let pDate = document.createElement("p");
        pDate.setAttribute("class", "small mb-1 text-muted");
        pDate.innerHTML = "data prova received 03/02/2023 12:43";
        let pUsername = document.createElement("p");
        pUsername.setAttribute("class", "small mb-1");
        pUsername.innerHTML = "username prova received";
        let divText = document.createElement("div");
        divText.setAttribute("class", "d-flex flex-row justify-content-start");
        let divInner = document.createElement("div");
        let pText = document.createElement("p");
        pText.setAttribute("class", "small p-2 ms-3 mb-3 rounded-3");
        pText.innerHTML = "messaggio di provaaaaaa ricevutoooo";
        let imgAvatar = document.createElement("img");
        imgAvatar.setAttribute("src", "./img/profile.png");
        imgAvatar.setAttribute("alt", "avatar");
        imgAvatar.setAttribute("style", "style = 'width: 45px; height: 100%;'");
        divInfo.append(pUsername, pDate);
        divInner.append(pText);
        divText.append(imgAvatar, divInner);
        chatBody.append(divInfo, divText);
    }
    function buildMessageSended() {
        let chatBody = document.getElementById("chatBody");
        let divInfo = document.createElement("div");
        divInfo.setAttribute("class", "d-flex justify-content-between");
        let pDate = document.createElement("p");
        pDate.setAttribute("class", "small mb-1 text-muted");
        pDate.innerHTML = "data prova sender 03/02/2023 12:43";
        let pUsername = document.createElement("p");
        pUsername.setAttribute("class", "small mb-1");
        pUsername.innerHTML = "username prova sender";
        let divText = document.createElement("div");
        divText.setAttribute("class", "d-flex flex-row justify-content-end mb-4 pt-1");
        let divInner = document.createElement("div");
        let pText = document.createElement("p");
        pText.setAttribute("class", "small p-2 me-3 mb-3 text-white rounded-3 bg-warning");
        pText.innerHTML = "messaggio di provaaaaaa inviatooooo weeewewewee scrivo cose a caso per vedere che succede se va a capooooooooooooooooooooooooooooooooooooooooooooooooooooooooo";
        let imgAvatar = document.createElement("img");
        imgAvatar.setAttribute("src", "./img/profile.png");
        imgAvatar.setAttribute("alt", "avatar");
        imgAvatar.setAttribute("style", "style = 'width: 45px; height: 100%;'");
        divInfo.append(pDate, pUsername);
        divInner.append(pText);
        divText.append(divInner, imgAvatar);
        chatBody.append(divInfo, divText);
    }
    function createMessage() {
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
        fetch("/chat/", request)
            .then((response) => response.json())
            .then((data) => {
            if (data) {
                openChat(chatID);
            }
        });
    }
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
    document.getElementById("sendInsertion").onclick = () => {
        sendAll();
    };
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
            pic.setAttribute('style', 'width:700%');
            console.log(game.name);
            liBtn.id = game.name;
            liBtn.setAttribute("type", "button");
            liBtn.setAttribute("class", "p-0 mx-auto my-auto dropdown-item");
            liBtn.onclick = () => {
                giocoDaScambiare = game.id;
                console.log("gioco da Scambiare: " + giocoDaScambiare);
                gameToTrade = game;
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







//import createInsertion from '../creaAnnuncio/creaAnnuncio';
let list = [];
function getAllInsertions() {
    list = [];
    const imageGioco1 = {
        link: "https://i.etsystatic.com/6277804/r/il/7df00e/697546340/il_1140xN.697546340_fivs.jpg"
    };
    const imageGioco2 = {
        link: "https://www.mobygames.com/images/covers/l/14445-the-legend-of-zelda-nes-front-cover.jpg"
    };
    const imageGioco3 = {
        link: "https://upload.wikimedia.org/wikipedia/it/b/b3/Pok%C3%A9mon_Giallo.png"
    };
    const imageGioco4 = {
        link: "https://static.wikia.nocookie.net/metalgear/images/e/e1/Metal_Gear.jpg"
    };
    const imageGallery1 = {
        link: "https://upload.wikimedia.org/wikipedia/it/thumb/7/77/Pikachu.png/1024px-Pikachu.png"
    };
    const imageGallery2 = {
        link: "https://www.pngmart.com/files/11/Frog-Meme-PNG-HD.png"
    };
    const imageGallery3 = {
        link: "https://media.licdn.com/dms/image/D5635AQHw3E5yYyXTLw/profile-framedphoto-shrink_800_800/0/1644518918606?e=1675620000&v=beta&t=x1RnXqWsDWAOVQUXGFujModXZhiGUQJu0a6FAsZN3Lo"
    };
    const gioco1 = {
        id: 1,
        name: "SuperMario",
        genre: [{ genre: "PLATFORM" }],
        year: 1985,
        console: { console: "NES" },
        cover: imageGioco1
    };
    const gioco2 = {
        id: 2,
        name: "The Legend of Zelda",
        genre: [{ genre: "AVVENTURA" }],
        year: 1986,
        console: { console: "NES" },
        cover: imageGioco2
    };
    const gioco3 = {
        id: 3,
        name: "Pokemon Giallo",
        genre: [{ genre: "GDR" }],
        year: 1998,
        console: { console: "GAME_BOY_COLOR" },
        cover: imageGioco3
    };
    const gioco4 = {
        id: 4,
        name: "Metal Gear",
        genre: [{ genre: "STEALTH" }],
        year: 1987,
        console: { console: "NES" },
        cover: imageGioco4
    };
    const publisherGioco1 = {
        userId: 1,
        username: "Pieroaffondo",
        name: "Pierino",
        surname: "Ciccino",
        email: "pierinocuoricino@amorino.com",
        rating: 666,
        videogames: [gioco1]
    };
    const insertion1 = {
        approved: true,
        title: "Scambio SuperMario",
        description: "Scambio supermario xkè mi sono sekkato a giocarci",
        publisher: publisherGioco1,
        gallery: [gioco1.cover, imageGallery1, imageGallery2, imageGallery3],
        tradeGame: gioco1,
        wishList: [gioco2, gioco3, gioco4],
        outcome: "WIP",
        publicationDate: "29-01-2023"
    };
    const insertion2 = {
        approved: true,
        title: "Scambio pacman",
        description: "Scambio supermario xkè mi sono sekkato a giocarci",
        publisher: publisherGioco1,
        gallery: [gioco2.cover, imageGallery2, imageGallery2, imageGallery3],
        tradeGame: gioco2,
        wishList: [gioco2, gioco3, gioco4],
        outcome: "WIP",
        publicationDate: "29-01-2023"
    };
    const insertion3 = {
        approved: true,
        title: "scambio codesto",
        description: "Scambio supermario xkè mi sono sekkato a giocarci",
        publisher: publisherGioco1,
        gallery: [gioco3.cover, imageGallery3, imageGallery2, imageGallery3],
        tradeGame: gioco3,
        wishList: [gioco2, gioco3, gioco4],
        outcome: "WIP",
        publicationDate: "29-01-2023"
    };
    const insertion4 = {
        approved: true,
        title: "Scambio pipolo",
        description: "Scambio supermario xkè mi sono sekkato a giocarci",
        publisher: publisherGioco1,
        gallery: [gioco4.cover, imageGallery1, imageGallery2, imageGallery3],
        tradeGame: gioco4,
        wishList: [gioco2, gioco3, gioco4],
        outcome: "WIP",
        publicationDate: "29-01-2023"
    };
    list.push(insertion1);
    list.push(insertion2);
    list.push(insertion3);
    list.push(insertion4);
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
    getAllInsertions();
    createItemCarousel();
}
function createItemCarousel() {
    let carInner = document.getElementById('innerCarouselHome');
    for (let i = 0; i < 4 && i < list.length; i++) {
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
        let clCard = document.createElement('div');
        clCard.setAttribute('class', 'card text-bg-secondary');
        clCard.setAttribute('id', 'annCard');
        let carBody = document.createElement('div');
        carBody.setAttribute('class', 'card-body');
        let title = document.createElement('h5');
        title.setAttribute('class', 'card-title');
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
        goAnn.setAttribute('href', "#");
        goAnn.setAttribute('class', 'btn btn-primary');
        goAnn.onclick = () => {
            document.getElementById('main').innerHTML = _annunci_annuncio_html__WEBPACK_IMPORTED_MODULE_6__["default"];
            (0,_annunci_annuncio__WEBPACK_IMPORTED_MODULE_5__["default"])(list[i]);
        };
        goAnn.innerHTML = 'Vai all annuncio';
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
        }
        else {
            document.getElementById("loginResult").innerHTML = "Ops, qualcosa è andato storto";
        }
    });
}
function tryToLogOut() {
    return __awaiter(this, void 0, void 0, function* () {
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
        h1.innerHTML = "BENTORNATO UTENTE " + userInfo.username;
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ekMsT0FBTyxDQUFDLFNBQVMsR0FBRSxrQkFBa0IsR0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUMzRCxJQUFJLElBQUksR0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUMsZUFBZSxHQUFDLElBQUksQ0FBQyxJQUFJO0lBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBRUQsaUVBQWUsdUJBQXVCOzs7Ozs7O1VDL0N0QztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTnFDO0FBQ0c7QUFDQTtBQUNEO0FBRXZDLDBEQUFTLEVBQUUsQ0FBQztBQUNaLHNEQUFVLEVBQUUsQ0FBQztBQUNiLDBEQUFTLEVBQUUsQ0FBQztBQUNaLHNEQUFZLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2FubnVuY2kvYW5udW5jaS5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2FubnVuY2kvYW5udW5jaW8uaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9hbm51bmNpL2dlc3Rpb25lYW5udW5jaS5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2NoYXQvY2hhdEJvZHkuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9jaGF0L2NoYXRGb290ZXIuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9jaGF0L2NoYXRIZWFkZXIuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9jcmVhQW5udW5jaW8vY3JlYUFubnVuY2lvLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvZm9vdGVyL2Zvb3Rlci5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2dlc3Rpb25lVXRlbnRpL2dlc3Rpb25lVXRlbnRpLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvaG9tZS9ob21lLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvbG9naW4vbG9naW4uaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9sb2dpbi9sb2dpbkZvb3Rlci5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2xvZ291dC9sb2dvdXQuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9tb2RhbC9tb2RhbC5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL25hdmJhci9uYXZiYXIuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9wcm9maWxvVXRlbnRlL3Byb2ZpbGUuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9yZWdpc3RyYXppb25lL3JlZ2lzdHJhemlvbmUuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9yZWdpc3RyYXppb25lL3JlZ2lzdHJhemlvbmVGb290ZXIuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy92aWRlb2dpb2NoaS9jcmVhVmlkZW9naW9jby5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL3ZpZGVvZ2lvY2hpL3ZpZGVvZ2lvY2hpLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvdmlkZW9naW9jaGkvdmlzdWFsaXp6YVZpZGVvZ2lvY28uaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9hbm51bmNpL2FubnVuY2kudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvYW5udW5jaS9hbm51bmNpby50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9hbm51bmNpL2dlc3Rpb25lYW5udW5jaS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9jaGF0L2NoYXQudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvY3JlYUFubnVuY2lvL2NyZWFBbm51bmNpby50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9mb290ZXIvZm9vdGVyLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2dlc3Rpb25lVXRlbnRpL2dlc3Rpb25lVXRlbnRpLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2hvbWUvaG9tZS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9tb2RhbC9tb2RhbC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9uYXZiYXIvbmF2YmFyLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL3Byb2ZpbG9VdGVudGUvcHJvZmlsZS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy92aWRlb2dpb2NoaS9jcmVhVmlkZW9naW9jaGkudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvdmlkZW9naW9jaGkvdmlkZW9naW9jaGkudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvdmlkZW9naW9jaGkvdmlzdWFsaXp6YVZpZGVvZ2lvY28udHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIlxcclxcbjxzdHlsZT5cXHJcXG4gICAgLmJ0bjpob3ZlciB7XFxyXFxuICAgICAgICBvdXRsaW5lLWNvbG9yOiB0cmFuc3BhcmVudCA7XFxyXFxuICAgICAgICBvdXRsaW5lLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCAjNWEwMWE3O1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogMC43cztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjc2VhcmNoVGl0bGU6aG92ZXIge1xcclxcbiAgICAgICAgb3V0bGluZS1jb2xvcjogdHJhbnNwYXJlbnQgO1xcclxcbiAgICAgICAgb3V0bGluZS1zdHlsZTogc29saWQ7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggIzVhMDFhNztcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IDAuN3M7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3NlYXJjaFRpdGxlIHtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IC0zcHggMCBibGFjaywgMCAzcHggYmxhY2ssIDNweCAwIGJsYWNrLCAwIC0zcHggYmxhY2s7XFxyXFxuICAgICAgICBoZWlnaHQ6MjBweDtcXHJcXG4gICAgICAgIHdpZHRoOjIwJTtcXHJcXG4gICAgICAgIGZsb2F0OiBib3R0b207XFxyXFxuICAgICAgICBhbGlnbi1zZWxmOiByaWdodDtcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XFxyXFxuXFxyXFxuPGRpdiBzdHlsZT1cXFwiZGlzcGxheTogZmxleDtcXFwiIGNsYXNzPVxcXCJteS01XFxcIj5cXHJcXG4gICAgPHNwYW4gc3R5bGU9XFxcIm1hcmdpbi1yaWdodDogNDBweFxcXCI+XFxyXFxuICAgICAgICA8aW1nIGlkPVxcXCJzZWxlY3RBbGxcXFwiIGNsYXNzPVxcXCJwLTAgYnRuIGRyb3Bkb3duLXRvZ2dsZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBzdHlsZT1cXFwiYm9yZGVyOm5vbmU7ZmxvYXQ6bGVmdDtpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZDt3aWR0aDogMzAwJTtoZWlnaHQ6YXV0bztcXFwiIHNyYz1cXFwiLi9pbWcvYnV0dG9uL3Nob3dhbGxCdG4ucG5nXFxcIiBhbHQ9XFxcIlxcXCI+XFxyXFxuICAgICAgICAgICAgPC9zcGFuPiA8IS0tZnVuemlvbmUgY2hlIHByZW5kZSB0dXR0aSBnbGkgYW5udW5jaSBlIGxpIHNjaGlhZmZhIG5lbCBjb250ZW51dG8gYW5udW5jaS0tPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiAgY2xhc3M9XFxcIm14LWF1dG8gZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwicC0wIGJ0biBkcm9wZG93bi10b2dnbGVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCIgc3R5bGU9XFxcImJvcmRlcjpub25lO2Zsb2F0OmxlZnQ7aW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7d2lkdGg6IDMwMCU7aGVpZ2h0OmF1dG87XFxcIiBzcmM9XFxcIi4vaW1nL2J1dHRvbi9ieWdlbnJlQnRuLnBuZ1xcXCIgYWx0PVxcXCJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVxcXCJnZW5yZXNcXFwiIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwibXgtYXV0byBkcm9wZG93blxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcInAtMCBidG4gZHJvcGRvd24tdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiIHN0eWxlPVxcXCJib3JkZXI6bm9uZTtmbG9hdDpsZWZ0O2ltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO3dpZHRoOiAzMDAlO2hlaWdodDphdXRvO1xcXCIgc3JjPVxcXCIuL2ltZy9idXR0b24vYnl5ZWFyQnRuLnBuZ1xcXCIgYWx0PVxcXCJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dWwgaWQ9XFxcInllYXJzXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNSBteS0xIG14LWF1dG9cXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwibXgtNSBmb3JtLWNvbnRyb2wgYm9yZGVyLWVuZC0xIHJvdW5kZWRcXFwiIHR5cGU9XFxcInNlYXJjaFxcXCIgcGxhY2Vob2xkZXI9XFxcImNlcmNhXFxcIiBpZD1cXFwic2VhcmNoVGl0bGVcXFwiPlxcclxcbiAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICA8c3BhbiBjbGFzcz1cXFwibXgtYXV0b1xcXCI+XFxyXFxuICAgICAgICA8aW1nIGlkPVxcXCJhZGRJbnNlcnRpb24yXFxcIiBjbGFzcz1cXFwicC0wIGJ0biBkcm9wZG93bi10b2dnbGVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgc3R5bGU9XFxcImJvcmRlcjpub25lO2Zsb2F0OmxlZnQ7aW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7d2lkdGg6IDMwMCU7aGVpZ2h0OmF1dG87XFxcIiBzcmM9XFxcIi4vaW1nL2J1dHRvbi9wbHVzQnRuLnBuZ1xcXCIgaGlkZGVuIGFsdD1cXFwiXFxcIj5cXHJcXG4gICAgICA8L3NwYW4+ICAgICAgXFxyXFxuICAgICAgICAgICAgIFxcclxcblxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgaWQ9XFxcInJlbWFpbnNcXFwiPlxcclxcbiAgICA8ZGl2ICBpZD1cXFwiaW5zZXJ0aW9uQ29udGVudFxcXCIgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuXFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8dWwgY2xhc3M9XFxcImxpc3QtZ3JvdXBcXFwiID5cXHJcXG4gICAgICAgIFxcclxcbiAgICA8L3VsPiAgICBcXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2PlxcclxcbiAgICA8dWwgaWQ9XFxcInBhZ2VzXFxcIiBjbGFzcz1cXFwicGFnaW5hdGlvbiBwYWdpbmF0aW9uLXNtIG15LTJcXFwiPlxcclxcbiAgICAgICAgXFxyXFxuICAgIDwvdWw+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIgICAgPGRpdiBpZD1cXFwiYmFja1xcXCI+XFxyXFxuICAgICAgICA8aW1nIGlkPVxcXCJiYWNrZ2FtZXNcXFwiIGNsYXNzPVxcXCJtdC00IGJ1dHRvbmhvdmVyIG1iLTRcXFwiIHdpZHRoPTEyMCBzcmM9XFxcIi4vaW1nL2JhY2sucG5nXFxcIj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgPCEtLSAgLS0+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwicm93XFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcpO1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXHJcXG4gICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwiaW1hZ2VTbGlkZXJcXFwiIGNsYXNzPVxcXCJjYXJvdXNlbCBzbGlkZVxcXCIgZGF0YS1icy1yaWRlPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiaW5kaWNhdG9yXFxcIiBjbGFzcz1cXFwiY2Fyb3VzZWwtaW5kaWNhdG9yc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJpbm5lclxcXCIgY2xhc3M9XFxcImNhcm91c2VsLWlubmVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhcm91c2VsLWNvbnRyb2wtcHJldlxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRhcmdldD1cXFwiI2ltYWdlU2xpZGVyXFxcIiBkYXRhLWJzLXNsaWRlPVxcXCJwcmV2XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvblxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPlByZWNlZGVudGU8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYXJvdXNlbC1jb250cm9sLW5leHRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10YXJnZXQ9XFxcIiNpbWFnZVNsaWRlclxcXCIgZGF0YS1icy1zbGlkZT1cXFwibmV4dFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb25cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidmlzdWFsbHktaGlkZGVuXFxcIj5TdWNjZXNzaXZhPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTZcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJnaXZlZEdhbWVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZCBtYi0zXFxcIiBzdHlsZT1cXFwibWF4LXdpZHRoOiA1NDBweDtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBnLTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJjYXJkLWltYWdlXFxcIiBjbGFzcz1cXFwiY29sLW1kLTRcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLThcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiY2FyZC1ib2R5XFxcIiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGlkPVxcXCJpbnNlcnRpb24tZGVzY3JpcHRpb25cXFwiIGNsYXNzPVxcXCJmb250LXNpemU6MjBweCBjb2xvcjp3aGl0ZSBjb2wtbWQtMTJcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcIm15LTUgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICA8aDM+PHNwYW4gaWQ9XFxcImluc2VydGlvbi1jcmVhdG9yXFxcIj48L3NwYW4+IHZvcnJlYmJlIHVubyBkaSBxdWVzdGkgZ2lvY2hpIGluIGNhbWJpbzo8L2gzPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImFjY29yZGlvbiByb3dcXFwiIGlkPVxcXCJhY2NvcmRpb25FeGFtcGxlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYWNjb3JkaW9uLWl0ZW0gY29sLW1kLTRcXFwiPlxcclxcbiAgICAgICAgPGgyIGNsYXNzPVxcXCJhY2NvcmRpb24taGVhZGVyXFxcIiBpZD1cXFwiaGVhZGluZ09uZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cXFwiYnRuLWl0ZW0tMVxcXCIgY2xhc3M9XFxcImFjY29yZGlvbi1idXR0b24gY29sbGFwc2VkXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJjb2xsYXBzZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgZGF0YS1icy10YXJnZXQ9XFxcIiNjb2xsYXBzZU9uZVxcXCIgYXJpYS1leHBhbmRlZD1cXFwidHJ1ZVxcXCIgYXJpYS1jb250cm9scz1cXFwiY29sbGFwc2VPbmVcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9oMj5cXHJcXG4gICAgICAgIDxkaXYgaWQ9XFxcImNvbGxhcHNlT25lXFxcIiBjbGFzcz1cXFwiYWNjb3JkaW9uLWNvbGxhcHNlIGNvbGxhcHNlXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcImhlYWRpbmdPbmVcXFwiXFxyXFxuICAgICAgICAgICAgZGF0YS1icy1wYXJlbnQ9XFxcIiNhY2NvcmRpb25FeGFtcGxlXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhY2NvcmRpb24tYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImltZy1pdGVtLTFcXFwiIGNsYXNzPVxcXCJjYXJkIG14LWF1dG9cXFwiIHN0eWxlPVxcXCJ3aWR0aDogMThyZW07XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiYm9keS1pdGVtLTFcXFwiIGNsYXNzPVxcXCJjYXJkLWJvZHkgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhY2NvcmRpb24taXRlbSBjb2wtbWQtNFxcXCI+XFxyXFxuICAgICAgICA8aDIgY2xhc3M9XFxcImFjY29yZGlvbi1oZWFkZXJcXFwiIGlkPVxcXCJoZWFkaW5nVHdvXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJidG4taXRlbS0yXFxcIiBjbGFzcz1cXFwiYWNjb3JkaW9uLWJ1dHRvbiBjb2xsYXBzZWRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10b2dnbGU9XFxcImNvbGxhcHNlXFxcIlxcclxcbiAgICAgICAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cXFwiI2NvbGxhcHNlVHdvXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCIgYXJpYS1jb250cm9scz1cXFwiY29sbGFwc2VUd29cXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9oMj5cXHJcXG4gICAgICAgIDxkaXYgaWQ9XFxcImNvbGxhcHNlVHdvXFxcIiBjbGFzcz1cXFwiYWNjb3JkaW9uLWNvbGxhcHNlIGNvbGxhcHNlXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcImhlYWRpbmdUd29cXFwiXFxyXFxuICAgICAgICAgICAgZGF0YS1icy1wYXJlbnQ9XFxcIiNhY2NvcmRpb25FeGFtcGxlXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhY2NvcmRpb24tYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImltZy1pdGVtLTJcXFwiIGNsYXNzPVxcXCJjYXJkIG14LWF1dG9cXFwiIHN0eWxlPVxcXCJ3aWR0aDogMThyZW07XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiYm9keS1pdGVtLTJcXFwiIGNsYXNzPVxcXCJjYXJkLWJvZHkgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhY2NvcmRpb24taXRlbSBjb2wtbWQtNFxcXCI+XFxyXFxuICAgICAgICA8aDIgY2xhc3M9XFxcImFjY29yZGlvbi1oZWFkZXJcXFwiIGlkPVxcXCJoZWFkaW5nVGhyZWVcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcImJ0bi1pdGVtLTNcXFwiIGNsYXNzPVxcXCJhY2NvcmRpb24tYnV0dG9uIGNvbGxhcHNlZFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiXFxyXFxuICAgICAgICAgICAgICAgIGRhdGEtYnMtdGFyZ2V0PVxcXCIjY29sbGFwc2VUaHJlZVxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiIGFyaWEtY29udHJvbHM9XFxcImNvbGxhcHNlVGhyZWVcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9oMj5cXHJcXG4gICAgICAgIDxkaXYgaWQ9XFxcImNvbGxhcHNlVGhyZWVcXFwiIGNsYXNzPVxcXCJhY2NvcmRpb24tY29sbGFwc2UgY29sbGFwc2VcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwiaGVhZGluZ1RocmVlXFxcIlxcclxcbiAgICAgICAgICAgIGRhdGEtYnMtcGFyZW50PVxcXCIjYWNjb3JkaW9uRXhhbXBsZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWNjb3JkaW9uLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJpbWctaXRlbS0zXFxcIiBjbGFzcz1cXFwiY2FyZCBteC1hdXRvXFxcIiBzdHlsZT1cXFwid2lkdGg6IDE4cmVtO1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImJvZHktaXRlbS0zXFxcIiBjbGFzcz1cXFwiY2FyZC1ib2R5IHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxzdHlsZT5cXHJcXG4gICAgLm1hc3NpbW9ib2xkaSB7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XFxyXFxuPGRpdiBjbGFzcz1cXFwibXktNVxcXCIgc3R5bGU9XFxcImZvbnQtd2VpZ2h0OiBib2xkO1xcXCI+XFxyXFxuPGRpdiBzdHlsZT1cXFwiZGlzcGxheTogZmxleDtcXFwiPlxcclxcblxcclxcbiAgICAgICAgPHNwYW4gc3R5bGU9XFxcIm1hcmdpbi1yaWdodDogNDBweFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBzdHlsZT1cXFwiZm9udC13ZWlnaHQ6IGJvbGQ7XFxcIiBpZD1cXFwic2VsZWN0QWxsMlxcXCI+VmlzdWFsaXp6YSB0dXR0aTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L3NwYW4+IDwhLS1mdW56aW9uZSBjaGUgcHJlbmRlIHR1dHRpIGdsaSBhbm51bmNpIGUgbGkgc2NoaWFmZmEgbmVsIGNvbnRlbnV0byBhbm51bmNpLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiA0MHB4XFxcIiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5IGRyb3Bkb3duLXRvZ2dsZVxcXCIgc3R5bGU9XFxcImZvbnQtd2VpZ2h0OiBib2xkO1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBWaXN1YWxpenphIHBlciBHZW5lcmVcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XFxcImdlbnJlczJcXFwiIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVxcXCJQTEFURk9STVxcXCI+PGJ1dHRvbiBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj5QTEFURk9STTwvYnV0dG9uPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XFxcIm1hcmdpbi1yaWdodDogNDBweFxcXCIgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5IGRyb3Bkb3duLXRvZ2dsZVxcXCIgc3R5bGU9XFxcImZvbnQtd2VpZ2h0OiBib2xkO1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIFZpc3VhbGl6emEgcGVyIEFubm9cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVxcXCJ5ZWFyczJcXFwiIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cXFwiMTk4NVxcXCI+PGJ1dHRvbiBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj4xOTg1PC9idXR0b24+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgIDxkaXYgc3R5bGU9XFxcInZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxcIiBjbGFzcz1cXFwiY29sLW1kLTMgbXgtYXV0b1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbCBib3JkZXItZW5kLTEgYm9yZGVyIHJvdW5kZWQtcGlsbFxcXCIgdHlwZT1cXFwic2VhcmNoXFxcIiBwbGFjZWhvbGRlcj1cXFwiY2VyY2FcXFwiIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6MjBweFxcXCIgaWQ9XFxcInNlYXJjaFRpdGxlMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hcHBlbmRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJzZWFyY2hCdXR0b24yXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBiZy13aGl0ZSBib3JkZXItYm90dG9tLTEgYm9yZGVyIHJvdW5kZWQtcGlsbCBtcy1uNVxcXCIgc3R5bGU9XFxcImZvbnQtd2VpZ2h0OiBib2xkO1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0cm92YVxcclxcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtc2VhcmNoXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgXFxyXFxuICAgICAgICAgIDxzcGFuID5cXHJcXG4gICAgICAgICAgICA8IS0tIEFsbGVydGEgTWFydGVsbGF0YTogc2UgdG9sZ28gaWwgYm90dG9uZSB0b2xnbyBwdXJlIGxhIGxpc3RhLFxcclxcbiAgICAgICAgICAgICAgICBxdWluZGkgbCdobyBtZXNzbyBoaWRkZW4tLT5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGhpZGRlbiBpZD1cXFwiYWRkSW5zZXJ0aW9uXFxcIiBzdHlsZT1cXFwiY29sb3I6d2hpdGVcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIuL2ltZy9wbHVzLnBuZ1xcXCIgYWx0PVxcXCJwbHVzXFxcIiBzdHlsZT1cXFwid2lkdGg6MjVweFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIEluc2VyaXNjaSBBbm51bmNpb1xcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICA8L3NwYW4+ICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICBcXHJcXG4gICAgXFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8YnI+XFxyXFxuICAgIDxkaXYgc3R5bGU9XFxcImRpc3BsYXk6IGlubGluZS1mbGV4O1xcXCI+XFxyXFxuXFxyXFxuICAgICAgICA8c3BhbiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiA0MHB4XFxcIj4gPGg0IHN0eWxlPVxcXCJmb250LXdlaWdodDogYm9sZDtcXFwiPiBOb21lIENhdGVnb3JpYTogPC9oND4gPC9zcGFuPlxcclxcbiAgICAgICAgXFxyXFxuICAgICAgICA8c3BhbiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiA0MHB4XFxcIj4gPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgYm9yZGVyLWVuZC0xIGJvcmRlciByb3VuZGVkLXBpbGxcXFwiIHN0eWxlPVxcXCJmb250LXdlaWdodDogYm9sZDtcXFwiIHZhbHVlPVxcXCJcXFwiIHBsYWNlaG9sZGVyPVxcXCJDYXRlZ29yaWFcXFwiIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6MjBweFxcXCIgaWQ9XFxcImNhdGVnb3J5TmFtZVxcXCI+IDwvc3Bhbj5cXHJcXG5cXHJcXG4gICAgICAgIDxzcGFuIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IDQwcHhcXFwiPiA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHN0eWxlPVxcXCJmb250LXdlaWdodDogYm9sZDtcXFwiIGlkPVxcXCJjcmVhdGVDYXRlZ29yeVxcXCI+Q3JlYSBDYXRlZ29yaWE8L2J1dHRvbj4gPC9zcGFuPlxcclxcblxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGJyPlxcclxcbiAgICBcXHJcXG4gICAgPGRpdiBpZD1cXFwicmVtYWluc1xcXCI+XFxyXFxuICAgICAgICA8YnI+XFxyXFxuICAgICAgICA8dWwgaWQ9XFxcImluc2VydGlvbkNvbnRlbnQyXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cFxcXCIgc3R5bGU9XFxcImZvbnQtd2VpZ2h0OiBib2xkO1xcXCI+XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgXFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2PlxcclxcbiAgICAgICAgPHVsIGlkPVxcXCJwYWdlczJcXFwiIGNsYXNzPVxcXCJwYWdpbmF0aW9uIHBhZ2luYXRpb24tc20gbXktMlxcXCIgc3R5bGU9XFxcImZvbnQtd2VpZ2h0OiBib2xkO1xcXCI+XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICA8L3VsPlxcclxcbiAgICBcXHJcXG4gICAgPC9kaXY+ICAgIFxcclxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBpZD1cXFwiY2hhdEJvZHlcXFwiIGNsYXNzPVxcXCJjYXJkLWJvZHkgb3ZlcmZsb3ctYXV0b1xcXCIgZGF0YS1tZGItcGVyZmVjdC1zY3JvbGxiYXI9XFxcInRydWVcXFwiXFxyXFxuICAgIHN0eWxlPVxcXCJwb3NpdGlvbjogcmVsYXRpdmU7IGhlaWdodDogNzQwcHhcXFwiPlxcclxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBpZD1cXFwiY2hhdEZvb3RlclxcXCIgY2xhc3M9XFxcImNhcmQtZm9vdGVyIHRleHQtbXV0ZWQgZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydCBhbGlnbi1pdGVtcy1jZW50ZXIgcC0zXFxcIj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgbWItMFxcXCI+XFxyXFxuICAgICAgICA8aW5wdXQgaWQ9XFxcIm1lc3NhZ2VUZXh0XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiU2NyaXZpIGlsIG1lc3NhZ2dpb1xcXCJcXHJcXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJSZWNpcGllbnQncyB1c2VybmFtZVxcXCIgYXJpYS1kZXNjcmliZWRieT1cXFwiYnV0dG9uLWFkZG9uMlxcXCIgLz5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBpZD1cXFwiYnV0dG9uLWFkZG9uMlxcXCIgc3R5bGU9XFxcInBhZGRpbmctdG9wOiAuNTVyZW07XFxcIj5cXHJcXG4gICAgICAgICAgICBJbnZpYVxcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBpZD1cXFwiY2hhdEhlYWRlclxcXCIgY2xhc3M9XFxcImNhcmQtaGVhZGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgcC0zXFxcIj5cXHJcXG4gICAgPGg1IGlkPVxcXCJjaGF0VGl0bGVcXFwiIGNsYXNzPVxcXCJtYi0wXFxcIj48L2g1PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJkLWZsZXggZmxleC1yb3cgYWxpZ24taXRlbXMtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJiYWRnZSBiZy13YXJuaW5nIG1lLTNcXFwiPjIwPC9zcGFuPlxcclxcbiAgICAgICAgPGkgY2xhc3M9XFxcImZhcyBmYS10aW1lcyB0ZXh0LW11dGVkIGZhLXhzXFxcIj48L2k+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPHN0eWxlPlxcclxcbiAgI2luc2VydENvbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7IGJvcmRlcjogM3B4IHNvbGlkIGdyZWVuO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJ0bjpob3ZlciB7XFxyXFxuICAgICAgICBvdXRsaW5lLWNvbG9yOiB0cmFuc3BhcmVudCA7XFxyXFxuICAgICAgICBvdXRsaW5lLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCAjNWEwMWE3O1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogMC43cztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgLmZvcm0tY29udHJvbDpob3ZlcntcXHJcXG4gICAgICAgIG91dGxpbmUtY29sb3I6IHRyYW5zcGFyZW50IDtcXHJcXG4gICAgICAgIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgNHB4ICM1YTAxYTc7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjdzO1xcclxcbiAgICB9XFxyXFxuPC9zdHlsZT5cXHJcXG5cXHJcXG48ZGl2IGlkPVxcXCJpbnNlcnRDb250XFxcIiBjbGFzcz1cXFwicm91bmRlZCBteS0yIGNvbnRhaW5lclxcXCI+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtMTIgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgIDxoMiBjbGFzcz1cXFwiYm9yZGVyLXByaW1hcnkgYm9yZGVyLWJvdHRvbSBib3JkZXItMlxcXCI+PGI+SW5zZXJpc2NpIEFubnVuY2lvPC9iPjwvaDI+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuXFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNFxcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJ0aXRsZVxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPlxcclxcbiAgICAgICAgICA8aDM+PGI+VGl0b2xvIEFubnVuY2lvPC9iPjwvaDM+XFxyXFxuICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJib3JkZXIgYm9yZGVyLTIgYm9yZGVyLWluZm8gZm9ybS1jb250cm9sXFxcIiBpZD1cXFwidGl0bGVJbnNlcnRpb25cXFwiIHBsYWNlaG9sZGVyPVxcXCJUaXRvbG8gQW5udW5jaW9cXFwiPlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiZGVzY3JpcHRpb25cXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5cXHJcXG4gICAgICAgICAgPGgzPjxiPkRlc2NyaXppb25lIFZpZGVvZ2lvY288L2I+PC9oMz5cXHJcXG4gICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XFxcImJvcmRlciBib3JkZXItMiBib3JkZXItaW5mbyBmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJkZXNjcmlwdGlvbkluc2VydGlvblxcXCIgcm93cz1cXFwiM1xcXCIgcGxhY2Vob2xkZXI9XFxcIkRlc2NyaXppb25lIEFubnVuY2lvXFxcIj48L3RleHRhcmVhPlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgIDxkaXY+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJ0cmFkZUdhbWVcXFwiIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgIDxoMz48Yj5UcmFkZS1HYW1lPC9iPjwvaDM+XFxyXFxuICAgICAgICAgIDxoNT5EYSBxdWFsZSB0ZXNvcmlubyB0aSB2b3JyZXN0aSBzZXBhcmFyZT88L2g1PlxcclxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZHJvcGRvd24gdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcInNlbGVjdGVkVHJhZGVHYW1lXFxcIiBjbGFzcz1cXFwibWItMiBib3JkZXIgYm9yZGVyLTIgYm9yZGVyLWRhcmsgYnRuIGJ0bi1saWdodCBkcm9wZG93bi10b2dnbGVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCIgcGxhY2Vob2xkZXI9XFxcIlF1YW50aSBiZWkgZ2lvY2hpbmkhXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8dWwgaWQ9XFxcInRyYWRlR2FtZVxcXCIgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNFxcXCI+XFxyXFxuICAgICAgPGRpdj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcIndpc2hHYW1lc1xcXCIgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgPGgzPjxiPldpc2gtTGlzdDwvYj48L2gzPlxcclxcbiAgICAgICAgICA8aDU+Q2hlIGdpb2NoaSB2b3JyZXN0aSByaWNldmVyZSBpbiBjYW1iaW8gZGVsIHR1byB0ZXNvcmlubz88L2g1PlxcclxcblxcclxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZHJvcGRvd24gdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJvcmRlciBib3JkZXItMiBib3JkZXItZGFyayBidG4gYnRuLWxpZ2h0IGRyb3Bkb3duLXRvZ2dsZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIlxcclxcbiAgICAgICAgICAgICAgZGF0YS1icy10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCI+XFxyXFxuICAgICAgICAgICAgICBTb2xvIDMgRWghIE5vbiBiYXJpYW1vIVxcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDx1bCBpZD1cXFwid2lzaEdhbWVzXFxcIiBjbGFzcz1cXFwicC0wIGRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNFxcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJnYWxsZXJ5XFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+XFxyXFxuICAgICAgICAgIDxoMz48Yj5JbW1hZ2luaTwvYj48L2gzPlxcclxcbiAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cXFwiYm9yZGVyIGJvcmRlci0yIGJvcmRlci1pbmZvIGZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImdhbGxlcnlJbnNlcnRpb25cXFwiIHJvd3M9XFxcIjdcXFwiXFxyXFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJJbnNlcmlzY2kgbGUgdXJsIGRlbGxlIGltYWdpbmkgZGVsbCdhbm51bmNpbyBkYSBpbnNlcmlyZSwgb2dudW5hIGRpdmlzYSBkYWxsYSB2aXJnb2xhIEVzOiBodHRwOi8vaW1ndXJsL2ltZy5wbmcsaHR0cDovL2ltZ3VybC9pbWcyLnBuZ1xcXCI+PC90ZXh0YXJlYT5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDx1bCBpZD1cXFwic2VsZWN0ZWRHYW1lc1xcXCI+XFxyXFxuICAgICAgICAgIFxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiY29sLTEyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibWItMyBtdC0zIHRleHQtY2VudGVyIHAtMFxcXCIgc3R5bGU9XFxcImJvcmRlcjpub25lO2Zsb2F0OmxlZnQ7aW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7d2lkdGg6IDEwMCU7aGVpZ2h0OmF1dG87XFxcIj5cXHJcXG4gICAgICA8aW1nIGlkPVxcXCJzZW5kSW5zZXJ0aW9uXFxcIiBjbGFzcz1cXFwicC0wIGJ0blxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBzcmM9XFxcIi4vaW1nL2J1dHRvbi9hZGRCdG4ucG5nXFxcIiBhbHQ9XFxcIlxcXCIgc3R5bGU9XFxcImJvcmRlcjpub25lO3dpZHRoOjklO1xcXCI+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8c3R5bGU+XFxyXFxuICAuY2FyZGZvb3RlciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZvb3RlcmxpbmtzIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XFxyXFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiBibGFjaztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBhOmhvdmVyLCBhOmFjdGl2ZSB7XFxyXFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiBncmV5O1xcclxcbiAgfVxcclxcblxcclxcbiAgbGkge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gIGJvZHkge1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgZm9vdGVyIHtcXHJcXG4gICAgbWluLWhlaWdodDogNTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8qIFRoZSBhcnRpY2xlIGZpbGxzIGFsbCB0aGUgc3BhY2UgYmV0d2VlbiBoZWFkZXIgJiBmb290ZXIgKi9cXHJcXG4gIGJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgZGl2LmNvbnRhaW5lciB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICB9XFxyXFxuXFxyXFxuPC9zdHlsZT5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjYXJkZm9vdGVyXFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5cXHJcXG4gICAgPGltZyBzcmM9XFxcIi4vaW1nL3ZpZGVvZ2FtZWxvdmVyZm9vdGVyLnBuZ1xcXCIgc3R5bGU9XFxcIndpZHRoOjI3JTsgcGFkZGluZzogMiU7ICBvcGFjaXR5OiAwLjg7XFxcIiBhbHQ9XFxcIlxcXCI+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCIgc3R5bGU9XFxcInBhZGRpbmctYm90dG9tOiAxJTtcXFwiPlxcclxcbiAgICA8dWw+XFxyXFxuICAgICAgPGxpPiA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiZm9vdGVybGlua3NcXFwiPkhvbWU8L2E+IDwvbGk+XFxyXFxuICAgICAgPGxpPiA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiZm9vdGVybGlua3NcXFwiPlBhb2xvPC9hPiA8L2xpPlxcclxcbiAgICAgIDxsaT4gPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImZvb3RlcmxpbmtzXFxcIj5QaWVybzwvYT4gPC9saT5cXHJcXG4gICAgICA8bGk+IDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJmb290ZXJsaW5rc1xcXCI+QWJvdXQgVXM8L2E+IDwvbGk+XFxyXFxuICAgIDwvdWw+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImNhcmQtZm9vdGVyIHRleHQtbXV0ZWRcXFwiIHN0eWxlPVxcXCJwYWRkaW5nLWJvdHRvbTogMSU7IC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiByZ2IoMjIsIDIyLCAyMik7XFxcIj5cXHJcXG4gICAgPHAgIGNsYXNzPVxcXCJmb290ZXJsaW5rc1xcXCI+IMKpMjAyMyBQYW9sbyBFbnRlcnByaXNlIEluYy4gfCBUdXR0aSBpIGRpcml0dGkgcmlzZXJ2YXRpIChhIFBpZXJpbm8pIDwvcD5cXHJcXG4gIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjwhLS1cXHJcXG48c3R5bGU+XFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTByZW0gYXV0bztcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJtYWluXFxcIiBcXFwiLlxcXCIgXFxcImZvb3RlclxcXCI7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kOiAjRjVGN0ZBO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbmJvZHkgLmZvb3RlciB7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgLS1mb290ZXItYmFja2dyb3VuZDojRUQ1NTY1O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xcclxcbiAgbWluLWhlaWdodDogMTJyZW07XFxyXFxufVxcclxcbmJvZHkgLmZvb3RlciAuYnViYmxlcyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBoZWlnaHQ6IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1mb290ZXItYmFja2dyb3VuZCk7XFxyXFxuICBmaWx0ZXI6IHVybChcXFwiI2Jsb2JcXFwiKTtcXHJcXG59XFxyXFxuYm9keSAuZm9vdGVyIC5idWJibGVzIC5idWJibGUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogdmFyKC0tcG9zaXRpb24sIDUwJSk7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1mb290ZXItYmFja2dyb3VuZCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IGJ1YmJsZS1zaXplIHZhcigtLXRpbWUsIDRzKSBlYXNlLWluIGluZmluaXRlIHZhcigtLWRlbGF5LCAwcyksIGJ1YmJsZS1tb3ZlIHZhcigtLXRpbWUsIDRzKSBlYXNlLWluIGluZmluaXRlIHZhcigtLWRlbGF5LCAwcyk7XFxyXFxuICAgICAgICAgIGFuaW1hdGlvbjogYnViYmxlLXNpemUgdmFyKC0tdGltZSwgNHMpIGVhc2UtaW4gaW5maW5pdGUgdmFyKC0tZGVsYXksIDBzKSwgYnViYmxlLW1vdmUgdmFyKC0tdGltZSwgNHMpIGVhc2UtaW4gaW5maW5pdGUgdmFyKC0tZGVsYXksIDBzKTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEwMCUpO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIgLmNvbnRlbnQge1xcclxcbiAgei1pbmRleDogMjtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcclxcbiAgZ3JpZC1nYXA6IDRyZW07XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tZm9vdGVyLWJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIgLmNvbnRlbnQgYSwgYm9keSAuZm9vdGVyIC5jb250ZW50IHAge1xcclxcbiAgY29sb3I6ICNGNUY3RkE7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbmJvZHkgLmZvb3RlciAuY29udGVudCBiIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuYm9keSAuZm9vdGVyIC5jb250ZW50IHAge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIgLmNvbnRlbnQgPiBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuYm9keSAuZm9vdGVyIC5jb250ZW50ID4gZGl2ID4gZGl2IHtcXHJcXG4gIG1hcmdpbjogMC4yNXJlbSAwO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIgLmNvbnRlbnQgPiBkaXYgPiBkaXYgPiAqIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIgLmNvbnRlbnQgPiBkaXYgLmltYWdlIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA0cmVtO1xcclxcbiAgaGVpZ2h0OiA0cmVtO1xcclxcbiAgbWFyZ2luOiAwLjI1cmVtIDA7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgYnViYmxlLXNpemUge1xcclxcbiAgMCUsIDc1JSB7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1zaXplLCA0cmVtKTtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1zaXplLCA0cmVtKTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICB3aWR0aDogMHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAwcmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGJ1YmJsZS1zaXplIHtcXHJcXG4gIDAlLCA3NSUge1xcclxcbiAgICB3aWR0aDogdmFyKC0tc2l6ZSwgNHJlbSk7XFxyXFxuICAgIGhlaWdodDogdmFyKC0tc2l6ZSwgNHJlbSk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgd2lkdGg6IDByZW07XFxyXFxuICAgIGhlaWdodDogMHJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIGJ1YmJsZS1tb3ZlIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgYm90dG9tOiAtNHJlbTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICBib3R0b206IHZhcigtLWRpc3RhbmNlLCAxMHJlbSk7XFxyXFxuICB9XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgYnViYmxlLW1vdmUge1xcclxcbiAgMCUge1xcclxcbiAgICBib3R0b206IC00cmVtO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIGJvdHRvbTogdmFyKC0tZGlzdGFuY2UsIDEwcmVtKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuPC9zdHlsZT5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJtYWluXFxcIj48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJmb290ZXJcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiYnViYmxlc1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZToyLjY2NDUyMzAxNjI4NTE5NjNyZW07IC0tZGlzdGFuY2U6Ny4zMDQxMTYwMzY3NDI2MTc0cmVtOyAtLXBvc2l0aW9uOjgzLjU2MzY4MDUzMzM4NDgzJTsgLS10aW1lOjMuNDk1NjQwMzA5NjI3MjI5NXM7IC0tZGVsYXk6LTIuNzczOTM4MTk2MjM3NzAycztcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6NS44OTQxNDk4NDk4MzgwMTZyZW07IC0tZGlzdGFuY2U6Ny42Mjc5NzQ0ODQzMDA0MjdyZW07IC0tcG9zaXRpb246OTMuMzY4NzgxODgzOTM2NDIlOyAtLXRpbWU6My43NjAxNDg2MjcyODM4NzU2czsgLS1kZWxheTotMy4zOTcxMDIyODg0MDMwMjlzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZToyLjc5ODY0NzEwNjY2NTY4NXJlbTsgLS1kaXN0YW5jZTo5LjIwMDQ5NjgxNzIyMjUyNXJlbTsgLS1wb3NpdGlvbjowLjIwNzc1NzMyNjk4NDE0MTk1JTsgLS10aW1lOjIuMjAxMDk2MDIyMDA1ODY1N3M7IC0tZGVsYXk6LTIuNjk4OTQ4MjE2NDY0NTQ1cztcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6NC4zNTk2MjE5MjY3ODIyOTRyZW07IC0tZGlzdGFuY2U6Ny40NjM1Nzk5MzAwNzQxOXJlbTsgLS1wb3NpdGlvbjo0Ny44Njc4MzE3NDY4NTA5MjUlOyAtLXRpbWU6Mi4xMjA4MjA1NjEyNzA3MjRzOyAtLWRlbGF5Oi0yLjUxNDE3Nzg0OTIxODIzMzZzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZTo1LjAyODM1MjA1MDk3ODE5NnJlbTsgLS1kaXN0YW5jZTo3LjI0MjcyMDAzNjgzMjI0OXJlbTsgLS1wb3NpdGlvbjozMC42OTk4NDYxNTkyNzM5NiU7IC0tdGltZTozLjI1MzU5NTUyODEwNjI4ODNzOyAtLWRlbGF5Oi0zLjM1NTQ1NDUzMjU0Mzk3MTVzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZToyLjc1NTk3ODIyMTg1NzE5M3JlbTsgLS1kaXN0YW5jZTo3LjQ2OTk3MjQ5NjkyNjUwOXJlbTsgLS1wb3NpdGlvbjoxMC4yMzgyMjcwMjA3MDExMzklOyAtLXRpbWU6Mi42NDcyMDAxNTIwMDgzNjZzOyAtLWRlbGF5Oi0zLjU3MjE1OTQ2MjI0OTYyMThzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZTo1LjA4NDgxMjgxNzIwODczNzVyZW07IC0tZGlzdGFuY2U6OS41NTg1NTQxNDI1ODQ2MjZyZW07IC0tcG9zaXRpb246OTQuNTE5ODIwNTc4MzIyMTUlOyAtLXRpbWU6My43MTU1NTU4NzYyMTczMDU1czsgLS1kZWxheTotMy4wODEwMDY2OTY3NTc4NTlzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZTozLjUzNzgwNzU2MDc3NTk1OHJlbTsgLS1kaXN0YW5jZTo5LjQyMTQyMzUyOTg0MTkyOHJlbTsgLS1wb3NpdGlvbjo1LjM5NjI3NDIxMTcwOTAxMyU7IC0tdGltZTozLjE3ODc4OTQ1NTYwMTg4NTZzOyAtLWRlbGF5Oi0zLjQ0NjE2OTkwNTE4Njc3NXM7XFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnViYmxlXFxcIiBzdHlsZT1cXFwiLS1zaXplOjUuNjI3NzMxMjE4NjAwMzQ4cmVtOyAtLWRpc3RhbmNlOjcuNzQ2NDYzNDE2MDc1MTY1cmVtOyAtLXBvc2l0aW9uOjEwLjkyODgwMjQ5MzQ2OTUzMSU7IC0tdGltZToyLjU2NzkyNTkzMjI1NjY5czsgLS1kZWxheTotMy40MDQ4NzMxMDE0NTE5ODZzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZTozLjY5NDk1OTkyMTk0NzIzMTNyZW07IC0tZGlzdGFuY2U6OS4xODE1NDk1ODY3NTAxMDdyZW07IC0tcG9zaXRpb246LTQuNTg5MDU1NTYzNzk4OTc2JTsgLS10aW1lOjMuNzA5NTIyMDY1Mjg4ODM0NXM7IC0tZGVsYXk6LTMuMTI5NTg2MTMxNTkxNjA2N3M7XFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnViYmxlXFxcIiBzdHlsZT1cXFwiLS1zaXplOjIuNzU5MjY0MjIxMDY3MTc4cmVtOyAtLWRpc3RhbmNlOjguNDI2ODg4MDk5NTUxMzdyZW07IC0tcG9zaXRpb246MjguMDQ2NzI4MjkzMTI0NTAyJTsgLS10aW1lOjMuMjg0MDk2MTEwNTIzNnM7IC0tZGVsYXk6LTIuMzY2NTE5ODc0MzA5Mzg3cztcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6Mi41NzQzMDgyNDM1MTA1Njg0cmVtOyAtLWRpc3RhbmNlOjkuNDMwNjUzOTYyNTczODUzcmVtOyAtLXBvc2l0aW9uOjMwLjgzOTc0NjQ3MTczOTYxJTsgLS10aW1lOjMuNjg2NTcwMDE3NjIzMDcwN3M7IC0tZGVsYXk6LTMuNjE5MDM5NjA2MDMzMjk3cztcXFwiPjwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXHJcXG4gICAgPGRpdj5cXHJcXG4gICAgICA8ZGl2PjxiPkVsZGV3PC9iPjxhIGhyZWY9XFxcIiNcXFwiPlNlY3VjZTwvYT48YSBocmVmPVxcXCIjXFxcIj5EcnVwYW5kPC9hPjxhIGhyZWY9XFxcIiNcXFwiPk9jZWFzaDwvYT48YSBocmVmPVxcXCIjXFxcIj5VZ2VmZTwvYT48YSBocmVmPVxcXCIjXFxcIj5CYWJlZDwvYT48L2Rpdj5cXHJcXG4gICAgICA8ZGl2PjxiPlNwb3RoYTwvYj48YSBocmVmPVxcXCIjXFxcIj5NaXNrYXNhPC9hPjxhIGhyZWY9XFxcIiNcXFwiPkFnaXRoZTwvYT48YSBocmVmPVxcXCIjXFxcIj5TY2VzaGE8L2E+PGEgaHJlZj1cXFwiI1xcXCI+THVsbGU8L2E+PC9kaXY+XFxyXFxuICAgICAgPGRpdj48Yj5DaGFzaGFraWI8L2I+PGEgaHJlZj1cXFwiI1xcXCI+Q2hvZ2F1dzwvYT48YSBocmVmPVxcXCIjXFxcIj5QaGFjaHVsZWQ8L2E+PGEgaHJlZj1cXFwiI1xcXCI+VGllYmVmdDwvYT48YSBocmVmPVxcXCIjXFxcIj5PY2lkPC9hPjxhIGhyZWY9XFxcIiNcXFwiPkl6b208L2E+PGEgaHJlZj1cXFwiI1xcXCI+T3J0PC9hPjwvZGl2PlxcclxcbiAgICAgIDxkaXY+PGI+QXRob2Q8L2I+PGEgaHJlZj1cXFwiI1xcXCI+UGFtdXo8L2E+PGEgaHJlZj1cXFwiI1xcXCI+VmFwZXJ0PC9hPjxhIGhyZWY9XFxcIiNcXFwiPk5lZXNrPC9hPjxhIGhyZWY9XFxcIiNcXFwiPk9tZW1hbmVuPC9hPjwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdj48YSBjbGFzcz1cXFwiaW1hZ2VcXFwiIGhyZWY9XFxcImh0dHBzOi8vY29kZXBlbi5pby96LVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJnF1b3Q7aHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTk5MDExL2hhcHB5LnN2ZyZxdW90OylcXFwiPjwvYT5cXHJcXG4gICAgICA8cD7CqTIwMTkgTm90IFJlYWxseTwvcD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48c3ZnIHN0eWxlPVxcXCIgdG9wOjEwMHZoXFxcIj5cXHJcXG4gIDxkZWZzPlxcclxcbiAgICA8ZmlsdGVyIGlkPVxcXCJibG9iXFxcIj5cXHJcXG4gICAgICA8ZmVHYXVzc2lhbkJsdXIgaW49XFxcIlNvdXJjZUdyYXBoaWNcXFwiIHN0ZERldmlhdGlvbj1cXFwiMTBcXFwiIHJlc3VsdD1cXFwiYmx1clxcXCI+PC9mZUdhdXNzaWFuQmx1cj5cXHJcXG4gICAgICA8ZmVDb2xvck1hdHJpeCBpbj1cXFwiYmx1clxcXCIgbW9kZT1cXFwibWF0cml4XFxcIiB2YWx1ZXM9XFxcIjEgMCAwIDAgMCAgMCAxIDAgMCAwICAwIDAgMSAwIDAgIDAgMCAwIDE5IC05XFxcIiByZXN1bHQ9XFxcImJsb2JcXFwiPjwvZmVDb2xvck1hdHJpeD5cXHJcXG4gICAgICBmZUNvbXBvc2l0ZShpbj1cXFwiU291cmNlR3JhcGhpY1xcXCIgaW4yPVxcXCJibG9iXFxcIiBvcGVyYXRvcj1cXFwiYXRvcFxcXCIpIC8vQWZ0ZXIgcmV2aWV3aW5nIHRoaXMgYWZ0ZXIgeWVhcnMgSSBjYW4ndCByZW1lbWJlciB3aHkgSSBhZGRlZCB0aGlzIGJ1dCBpdCBpc24ndCBuZWNlc3NhcnkgZm9yIHRoZSBibG9iIGVmZmVjdFxcclxcbjwvZmlsdGVyPlxcclxcbjwvZGVmcz5cXHJcXG48L3N2Zz5cXHJcXG4tLT5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxuYXYgYXJpYS1sYWJlbD1cXFwiLi4uXFxcIj5cXHJcXG4gICAgPGRpdj5cXHJcXG4gICAgICAgIDxoMSBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPkdlc3Rpc2NpIFV0ZW50aSBSZWdpc3RyYXRpPC9oMT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDx1bCBpZD1cXFwidXNlckxpc3RcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIFxcclxcbiAgICA8L3VsPlxcclxcbiAgICA8dWwgaWQ9XFxcInBhZ2luYXRpb25cXFwiIGNsYXNzPVxcXCJwYWdpbmF0aW9uIHBhZ2luYXRpb24tc20gbXktMlxcXCI+XFxyXFxuICAgICAgICBcXHJcXG4gICAgPC91bD5cXHJcXG48L25hdj5cXHJcXG5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgaWQ9XFxcImJnYXJvdW5kXFxcIiBjbGFzcz1cXFwidGV4dC1jZW50ZXIgbXktNVxcXCI+XFxyXFxuICAgIDxpbWcgc3JjPVxcXCIuL2ltZy92aWRlb2dhbWVsb3Zlci5wbmdcXFwiIGFsdD1cXFwibm90IGZvdW5kXFxcIiBjbGFzcz1cXFwiaGVhZGVySW1nIG14LWF1dG9cXFwiIHN0eWxlPVxcXCJ3aWR0aDogNTAlOyBcXFwiIGlkPVxcXCJoZWFkZXJJbWdcXFwiPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxzdHlsZT5cXHJcXG5cXHJcXG4gIC53aWRnZXRJbnRybyB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC53aWRnZXRJbnRyby1kaXZ7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAjYW5uQ2FyZCB7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNpbWdDYXJkIHtcXHJcXG4gICAgaGVpZ2h0OiA2MCU7XFxyXFxuICAgIHdpZHRoOmZpdC1jb250ZW50O1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuICAuaW1nUyB7XFxyXFxuICAgIHdpZHRoOiA1NHB4O1xcclxcbiAgICBoZWlnaHQ6IDQycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBib2R5IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC53aWRnZXRQaWMge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBpY1JpZ2h0IHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucGljbGVmdCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VjIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTAlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxyXFxuICAgIHBhZGRpbmc6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucCB7XFxyXFxuICAgIHBhZGRpbmc6IDBweDtcXHJcXG4gIH1cXHJcXG4gXFxyXFxuPC9zdHlsZT5cXHJcXG5cXHJcXG48c2VjdGlvbiBjbGFzcz1cXFwicCBzZWMgYm9yZGVyIGJvcmRlci1zdWNjZXNzIG1iLTIgYm9yZGVyLW9wYWNpdHktNTAgcm91bmRlZCByb3cgYWxpbmctaXRlbS1zdGFydFxcXCI+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJwIGNvbC00XFxcIj5cXHJcXG4gICAgPHBpY3R1cmU+XFxyXFxuICAgICAgPGltZyBjbGFzcz1cXFwid2lkZ2V0UGljIHBpY0xlZnQgcm91bmRlZC1zdGFydFxcXCIgc3JjPVxcXCIuL2ltZy9nYW1lc2VhcmNoLmpwZWdcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDAlXFxcIiBhbHQ9XFxcIlxcXCI+XFxyXFxuICAgIDwvcGljdHVyZT5cXHJcXG4gIDwvZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiYm9yZGVyLXN0YXJ0IGJvcmRlci0zIGJvcmRlci1wcmltYXJ5IGNvbC04IHRleHQtc3RhcnQgd2lkZ2V0VGV4dFxcXCI+XFxyXFxuICAgIDxoMT5cXHJcXG4gICAgICBJbCBwb3J0YWxlIGRlaSB2ZXJpIGdhbWVycy5cXHJcXG4gICAgPC9oMT5cXHJcXG4gICAgPGgyPlxcclxcbiAgICAgIFNlaSBhbGxhIHJpY2VyY2EgZGkgdW4gZ2lvY28sIHZlY2NoaW8gbyBudW92byBjaGUgc2lhLCBtYSBub24gcmllc2NpIGEgdHJvdmFybG8/IE5vaSBhYmJpYW1vIGxhIHNvbHV6aW9uZSBwZXIgdGUuLi5cXHJcXG4gICAgICBDZXJjYSB0cmEgY2VudGluYWlhIGRpIGFubnVuY2kgaWwgdGl0b2xvIGNoZSBub24gdHJvdmF2aSBwacO5LCBtZXR0aXRpIGluIGNvbnRhdHRvIGNvbiBsJ3V0ZW50ZSBjaGUgbG8gc3RhIHZlbmRlbmRvLCBcXHJcXG4gICAgICBlIGZhaSBsJ2FmZmFyZSBkZWwgc2Vjb2xvLi4uXFxyXFxuICAgIDwvaDI+XFxyXFxuICA8L2Rpdj5cXHJcXG48L3NlY3Rpb24+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIHRleHQtY2VudGVyXFxcIiBzdHlsZT1cXFwibWFyZ2luLXRvcDogMTAlOyBtYXJnaW4tYm90dG9tOiAxMCU7XFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OjEwJTttYXJnaW4tcmlnaHQ6MTAlO1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbFxcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZCB0ZXh0LWJnLWRhbmdlclxcXCIgc3R5bGU9XFxcIndpZHRoOiAxOHJlbTtoZWlnaHQ6IDEwMCU7XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuICAgICAgICAgIDxoNSBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+Q2VyY2E8L2g1PlxcclxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj5DZXJjYSBpbCB0dW8gZ2lvY28gcHJlZmVyZWl0byB0cmEgY2VudGluYWlhIGRpIGFubnVuY2k8L3A+XFxyXFxuICAgICAgICAgIDxocj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgbWItMyBmb3JtLWNvbnRyb2wgYm9yZGVyIHJvdW5kZWRcXFwiIHN0eWxlPVxcXCJtYXJnaW4tdG9wOiAxMHB4O1xcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgYm9yZGVyLTBcXFwiIGlkPVxcXCJzZWFyY2hUaXRsZVxcXCIgcGxhY2Vob2xkZXI9XFxcIkNlcmNhXFxcIiBhcmlhLWxhYmVsPVxcXCJzZWFyY2hcXFwiIGFyaWEtZGVzY3JpYmVkYnk9XFxcImJhc2ljLWFkZG9uMlxcXCI+XFxyXFxuICAgICAgICAgICAgPGEgaWQ9XFxcInNlYXJjaEJ1dHRvblRpdGxlXFxcIiBocmVmPVxcXCIjXFxcIj48aW1nIGNsYXNzPVxcXCJtcy0xIGJ0biBpbWdTXFxcIiBzcmM9XFxcIi4vaW1nL3NlYXJjaC5wbmdcXFwiIGFsdD1cXFwiXFxcIj48L2E+XFxyXFxuICAgICAgICAgIDwvZGl2PiBcXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sXFxcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIHRleHQtYmctcHJpbWFyeVxcXCIgc3R5bGU9XFxcIndpZHRoOiAxOHJlbTtoZWlnaHQ6IDEwMCU7XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuICAgICAgICAgIDxoNSBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+RXNwbG9yYTwvaDU+XFxyXFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPkVzcGxvcmEgbWlnbGlhbGlhIGRpIGdpb2NoaSB0cmEgZ2xpIGFubnVuY2kgcHJlc2VudGk8L3A+XFxyXFxuICAgICAgICAgIDxocj5cXHJcXG4gICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgaWQ9XFxcImluc2VydGlvbnNDYXJkXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvXFxcIj5Bbm51bmNpPC9hPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgdGV4dC1iZy1zdWNjZXNzXFxcIiBzdHlsZT1cXFwid2lkdGg6IDE4cmVtO2hlaWdodDogMTAwJTtcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgPGg1IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5TY2FtYmlhPC9oNT5cXHJcXG4gICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+SGFpIHVuIGdpb2NvIGRpIGN1aSBub24gdGUgbmUgZmFpIHBpw7kgbnVsbGEgcGVyIGxlIG1pbGlhcmRpIGRpIHZvbHRlIGNoZSBsbyBoYWkgZmluaXRvP1xcclxcbiAgICAgICAgICAgIGluc2VyaXNjaSBxdWkgaWwgdHVvIGFubnVuY2lvIVxcclxcbiAgICAgICAgICA8L3A+XFxyXFxuICAgICAgICAgIDxocj5cXHJcXG4gICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgaWQ9XFxcImluc2VydENhcmRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxpZ2h0XFxcIj5JbnNlcmlzY2kgQW5udW5jaW88L2E+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48c2VjdGlvbiBjbGFzcz1cXFwicCBzZWMgYm9yZGVyIGJvcmRlci1zdWNjZXNzIG1iLTIgYm9yZGVyLW9wYWNpdHktNTAgcm91bmRlZCByb3cgYWxpbmctaXRlbS1zdGFydFxcXCI+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJib3JkZXItZW5kIGJvcmRlci0zIGJvcmRlci1wcmltYXJ5IGNvbC04IHRleHQtc3RhcnQgd2lkZ2V0VGV4dFxcXCI+XFxyXFxuICAgIDxoMT5cXHJcXG4gICAgICBJbCBwb3J0YWxlIGRlaSB2ZXJpIGdhbWVycy5cXHJcXG4gICAgPC9oMT5cXHJcXG4gICAgPGgyPlxcclxcbiAgICAgIFNlaSBhbGxhIHJpY2VyY2EgZGkgdW4gZ2lvY28sIHZlY2NoaW8gbyBudW92byBjaGUgc2lhLCBtYSBub24gcmllc2NpIGEgdHJvdmFybG8/IE5vaSBhYmJpYW1vIGxhIHNvbHV6aW9uZSBwZXIgdGUuLi5cXHJcXG4gICAgICBDZXJjYSB0cmEgY2VudGluYWlhIGRpIGFubnVuY2kgaWwgdGl0b2xvIGNoZSBub24gdHJvdmF2aSBwacO5LCBtZXR0aXRpIGluIGNvbnRhdHRvIGNvbiBsJ3V0ZW50ZSBjaGUgbG8gc3RhIHZlbmRlbmRvLCBcXHJcXG4gICAgICBlIGZhaSBsJ2FmZmFyZSBkZWwgc2Vjb2xvLi4uXFxyXFxuICAgIDwvaDI+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcInAgY29sLTRcXFwiPlxcclxcbiAgICA8cGljdHVyZT5cXHJcXG4gICAgICA8aW1nIGNsYXNzPVxcXCJ3aWRnZXRQaWMgcGljUmlnaHQgcm91bmRlZC1lbmRcXFwiIHNyYz1cXFwiLi9pbWcvZ2FtZXRyYWRlLnBuZ1xcXCIgc3R5bGU9XFxcIndpZHRoOjEwMCVcXFwiIGFsdD1cXFwiXFxcIj5cXHJcXG4gICAgPC9waWN0dXJlPlxcclxcbiAgPC9kaXY+XFxyXFxuPC9zZWN0aW9uPlxcclxcblxcclxcbjxoMT5VbHRpbWkgYW5udW5jaTo8L2gxPlxcclxcbjxoMj5Db250cm9sbGEgcXVpIGdsaSB1bHRpbWkgYW5udW5jaTwvaDI+XFxyXFxuPGRpdiBpZD1cXFwiY2Fyb3VzZWxFeGFtcGxlQ29udHJvbHNcXFwiIGNsYXNzPVxcXCJjYXJvdXNlbCBzbGlkZVxcXCIgZGF0YS1icy1yaWRlPVxcXCJjYXJvdXNlbFxcXCI+XFxyXFxuICAgIDxkaXYgaWQ9XFxcImlubmVyQ2Fyb3VzZWxIb21lXFxcIiBjbGFzcz1cXFwiY2Fyb3VzZWwtaW5uZXJcXFwiPlxcclxcbiAgICAgICBcXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxidXR0b24gY2xhc3M9XFxcImNhcm91c2VsLWNvbnRyb2wtcHJldlxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRhcmdldD1cXFwiI2Nhcm91c2VsRXhhbXBsZUNvbnRyb2xzXFxcIiBkYXRhLWJzLXNsaWRlPVxcXCJwcmV2XFxcIj5cXHJcXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+UHJldmlvdXM8L3NwYW4+XFxyXFxuICAgIDwvYnV0dG9uPlxcclxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYXJvdXNlbC1jb250cm9sLW5leHRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10YXJnZXQ9XFxcIiNjYXJvdXNlbEV4YW1wbGVDb250cm9sc1xcXCIgZGF0YS1icy1zbGlkZT1cXFwibmV4dFxcXCI+XFxyXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPk5leHQ8L3NwYW4+XFxyXFxuICAgIDwvYnV0dG9uPlxcclxcbiAgPC9kaXY+XFxyXFxuXFxyXFxuPHNlY3Rpb24gY2xhc3M9XFxcInAgc2VjIGJvcmRlciBib3JkZXItc3VjY2VzcyBtYi0yIGJvcmRlci1vcGFjaXR5LTUwIHJvdW5kZWQgcm93IGFsaW5nLWl0ZW0tc3RhcnRcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwicCBjb2wtNFxcXCI+XFxyXFxuICAgIDxwaWN0dXJlPlxcclxcbiAgICAgIDxpbWcgY2xhc3M9XFxcIndpZGdldFBpYyBwaWNMZWZ0IHJvdW5kZWQtc3RhcnRcXFwiIHNyYz1cXFwiLi9pbWcvUmV1bmlvbi5qcGVnXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwJVxcXCIgYWx0PVxcXCJcXFwiPlxcclxcbiAgICA8L3BpY3R1cmU+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImJvcmRlci1zdGFydCBib3JkZXItMyBib3JkZXItcHJpbWFyeSBjb2wtOCB0ZXh0LXN0YXJ0IHdpZGdldFRleHRcXFwiPlxcclxcbiAgICA8aDE+XFxyXFxuICAgICAgQ2hpIFNpYW1vXFxyXFxuICAgIDwvaDE+XFxyXFxuICAgIDxoMj5cXHJcXG4gICAgICBTaWFtbyB1biBwdW50byBkJ2luY29udHJvIHBlciB0dXR0aSBxdWVsbGkgY2hlIHNpIHNvbm8gYXBwYXNzaW9uYXRpIGEgcXVlbCBtb25kbyBtYWdpY28gcmluY2hpdXNvIGFsbCdpbnRlcm5vXFxyXFxuICAgICAgZGkgdW5hIGNhcnR1Y2NpYSwgZGlzY28gbyBzY2hlZGEsIGRhbmRvZ2xpIGwnb3Bwb3J0dW5pdMOgIGRpIHBvdGVyIHJpdHJvdmFyZSB2ZWNjaGkgc29nbmksIGUgc2NhbWJpYXJsaSBjb24gYWxjdW5pIG51b3ZpLlxcclxcbiAgICAgIEwnb3Bwb3J0dW5pdGEgZGkgY29ub3NjZXJlIHBlcnNvbmUgZGVsbG8gc3Rlc3NvIHBhcmVyZSwgbyBvcHBvc3RvLlxcclxcbiAgICA8L2gyPlxcclxcbiAgPC9kaXY+XFxyXFxuPC9zZWN0aW9uPlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgIDxsYWJlbCBmb3I9XFxcInVzZXJuYW1lU2lnbkluXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+Tmlja25hbWU8L2xhYmVsPlxcclxcbiAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInVzZXJuYW1lU2lnbkluXFxcIj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgPGxhYmVsIGZvcj1cXFwicGFzc3dvcmRTaWduSW5cXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5QYXNzd29yZDwvbGFiZWw+XFxyXFxuICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInBhc3N3b3JkU2lnbkluXFxcIj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJtYi0zIGZvcm0tY2hlY2tcXFwiPlxcclxcbiAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWlucHV0XFxcIiBpZD1cXFwicmVtZW1iZXJNZVNpZ25JblxcXCI+XFxyXFxuICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJyZW1lbWJlck1lU2lnbkluXFxcIj5SaWNvcmRhbWk8L2xhYmVsPlxcclxcbjwvZGl2PlxcclxcbjxkaXYgaWQ9XFxcImxvZ2luUmVzdWx0XFxcIiBjbGFzcz1cXFwibXktM1xcXCI+XFxyXFxuXFxyXFxuPC9kaXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8YnV0dG9uIGlkPVxcXCJ0cnlUb0xvZ1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIj5BY2NlZGk8L2J1dHRvbj5cXHJcXG48cD5Ob24gc2VpIGFuY29yYSByZWdpc3RyYXRvPzwvcD5cXHJcXG48YnV0dG9uIGlkPVxcXCJsb2dpblNpZ25VcFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIj5SZWdpc3RyYXRpPC9idXR0b24+XFxyXFxuPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgZGF0YS1icy1kaXNtaXNzPVxcXCJtb2RhbFxcXCI+Q2hpdWRpPC9idXR0b24+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGNsYXNzPVxcXCJ0ZXh0LWNlbnRlciBtYi0zXFxcIj5cXHJcXG4gICAgPGgzPk9oLCBjaSBkaXNwaWFjZSBjaGUgdmFpIHZpYSE8YnI+VG9ybmEgYSB0cm92YXJjaSE8L2gzPlxcclxcbiAgICA8aW1nIHNyYz1cXFwiLi9pbWcvZmFkRmFjZS5wbmdcXFwiIHdpZHRoPVxcXCIxMDBcXFwiIGFsdD1cXFwiaW1tYWdpbmUgdHJpc3RlXFxcIj5cXHJcXG48L2Rpdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIGlkPVxcXCJteU1vZGFsXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwic2lnbkluTW9kYWxMYWJlbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLWNlbnRlcmVkXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cXFwibW9kYWwtdGl0bGUgZnMtNVxcXCIgaWQ9XFxcInNpZ25Jbk1vZGFsTGFiZWxcXFwiPk1pbmNoaWEgSm9obm55IENhcnJhYmJhZ2dpbzwvaDE+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuLWNsb3NlXFxcIiBkYXRhLWJzLWRpc21pc3M9XFxcIm1vZGFsXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCI+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwibXlNb2RhbEJvZHlcXFwiIGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwibXlNb2RhbEZvb3RlclxcXCIgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPCEtLW5hdmJhciBjb250cm9sbGVyIGljb24tLT5cXHJcXG48YnV0dG9uIGlkPVxcXCJsb2dvXFxcIiBjbGFzcz1cXFwibG9nby1idXR0b25cXFwiPiA8aW1nIGNsYXNzPVxcXCJsb2dvXFxcIiBzcmM9XFxcIi4vaW1nL2xvZ28ucG5nXFxcIiBhbHQ9XFxcImxvZ29cXFwiPjwvYnV0dG9uPlxcclxcbjxidXR0b24gaWQ9XFxcImdhbWVzXFxcIiBjbGFzcz1cXFwibG9nby1idXR0b24gYmFjay10cmFuc3BhcmVudFxcXCI+IDxpbWcgY2xhc3M9XFxcImxvZ29cXFwiIHNyYz1cXFwiLi9pbWcvam95c3RpY2soMSkucG5nXFxcIiBhbHQ9XFxcImxvZ29cXFwiPjwvYnV0dG9uPlxcclxcbjxuYXY+XFxyXFxuICA8dWw+XFxyXFxuICAgIDwhLS1uYXZiYXIgYnV0dG9ucy0tPlxcclxcbiAgICA8IS0tbmF2YmFyIGNvbnRyb2xsZXIgaWNvbi0tPlxcclxcbiAgICBcXHJcXG4gICAgPCEtLXkgYnV0dG9uLS0+XFxyXFxuICAgIDxidXR0b24gaWQ9XFxcImluc2VydGlvbnNcXFwiIGNsYXNzPVxcXCJidXR0b24tb25lIG5hdi1idXR0b25cXFwiPkFubnVuY2k8L2J1dHRvbj5cXHJcXG4gICAgPCEtLWEgYnV0dG9uLS0+XFxyXFxuICAgIDxidXR0b24gaWQ9XFxcImFkZEluc2VydGlvblxcXCIgY2xhc3M9XFxcImJ1dHRvbi10aHJlZSBuYXYtYnV0dG9uXFxcIj5DcmVhIEFubnVuY2lvPC9idXR0b24+XFxyXFxuICAgIDwhLS14IGJ1dHRvbi0tPlxcclxcbiAgICA8YnV0dG9uIGlkPVxcXCJtYW5hZ2VtZW50XFxcIiBjbGFzcz1cXFwiYnV0dG9uLXR3byBuYXYtYnV0dG9uXFxcIj5HZXN0aW9uZSBVdGVudGk8L2J1dHRvbj5cXHJcXG4gICAgPCEtLWEgYnV0dG9uLS0+XFxyXFxuICAgIDxidXR0b24gaWQ9XFxcImluc01hbmFnZW1lbnRcXFwiIGNsYXNzPVxcXCJidXR0b24tdGhyZWUgbmF2LWJ1dHRvblxcXCI+R2VzdGlvbmUgQW5udW5jaTwvYnV0dG9uPlxcclxcbiAgICA8IS0tYiBidXR0b24tLT5cXHJcXG4gICAgPGJ1dHRvbiBpZD1cXFwibG9naW5cXFwiIGNsYXNzPVxcXCJidXR0b24tZm91ciBuYXYtYnV0dG9uXFxcIiBkYXRhLWJzLXRvZ2dsZT1cXFwibW9kYWxcXFwiXFxyXFxuICAgICAgZGF0YS1icy10YXJnZXQ9XFxcIiNteU1vZGFsXFxcIj5Mb2dpbjwvYnV0dG9uPlxcclxcbiAgICA8IS0tYiBidXR0b24tLT5cXHJcXG4gICAgPGJ1dHRvbiBpZD1cXFwic2lnbk91dEJ1dHRvblxcXCIgY2xhc3M9XFxcImJ1dHRvbi1mb3VyIG5hdi1idXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJtb2RhbFxcXCJcXHJcXG4gICAgZGF0YS1icy10YXJnZXQ9XFxcIiNteU1vZGFsXFxcIj5Mb2dvdXQ8L2J1dHRvbj5cXHJcXG4gICAgPGJ1dHRvbiBpZD1cXFwicHJvZmlsZVxcXCIgY2xhc3M9XFxcInByb2ZpbGUtYnV0dG9uXFxcIj5cXHJcXG4gICAgICA8c3BhbiBjbGFzcz1cXFwicG9zaXRpb24tYWJzb2x1dGUgdG9wLTIgc3RhcnQtOTAgdHJhbnNsYXRlLW1pZGRsZSBwLTIgYmctZGFuZ2VyIGJvcmRlciBib3JkZXItbGlnaHQgcm91bmRlZC1jaXJjbGVcXFwiPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+TmV3IGFsZXJ0czwvc3Bhbj5cXHJcXG4gICAgICA8L3NwYW4+XFxyXFxuICAgICAgPGltZyBjbGFzcz1cXFwibG9nbyBwcm9maWxlXFxcIiBzcmM9XFxcIi4vaW1nL3Byb2ZpbGUucG5nXFxcIiBhbHQ9XFxcImxvZ29cXFwiPlxcclxcbiAgICA8L2J1dHRvbj5cXHJcXG4gIDwvdWw+XFxyXFxuXFxyXFxuICBcXHJcXG48L25hdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxzdHlsZT5cXHJcXG4gICAgI21haW57XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XFxyXFxuICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHJnYig2MywgNjMsIDY4KTtcXHJcXG4gICAgICAgIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHJnYig2MywgNjMsIDY4KTtcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCByZ2IoNjMsIDYzLCA2OCk7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG48L3N0eWxlPlxcclxcbjxkaXYgY2xhc3M9XFxcInJvdyBtdC00IG1iLTRcXFwiPlxcclxcbiAgICA8ZGl2IGlkPVxcXCJ0aXRsZXByb2ZpbGVcXFwiIGNsYXNzPVxcXCJjb2wtMTIgdGV4dC1jZW50ZXJcXFwiPlxcclxcblxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJyb3cgbXQtMiBtYi00XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLTEyIHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgIDxoMj5cXHJcXG4gICAgICAgICAgICA8Yj5FY2NvIHVuIHJpZXBpbG9nbyBkZWkgdHVvaSBkYXRpOjwvYj5cXHJcXG4gICAgICAgIDwvaDI+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcInJvdyBtdC01IG1iLTJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtMiB0ZXh0LWVuZFxcXCI+XFxyXFxuICAgICAgICA8aDI+XFxyXFxuICAgICAgICAgICAgPGJyPjxicj48YnI+IDxiPlVzZXJuYW1lPC9iPjogXFxyXFxuICAgICAgICAgICAgPGJyPjxicj4gPGI+RW1haWw8L2I+OiBcXHJcXG4gICAgICAgICAgICA8YnI+PGJyPiA8Yj5Ob21lPC9iPjogXFxyXFxuICAgICAgICAgICAgPGJyPjxicj4gPGI+Q29nbm9tZTwvYj46IFxcclxcbiAgICAgICAgPC9oMj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgaWQ9XFxcImJvZHlwcm9maWxlXFxcIiBjbGFzcz1cXFwiY29sLTQgdGV4dC1jZW50ZXJcXFwiPlxcclxcblxcclxcblxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBpZD1cXFwiYnV0dG9ucy1wcm9maWxlXFxcIiBjbGFzcz1cXFwiY29sLTIgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgPGJyPlxcclxcbiAgICAgICAgPGJyPlxcclxcbiAgICAgICAgPGJyPlxcclxcbiAgICAgICAgPGJyPlxcclxcbiAgICAgICAgPGJyPlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG4gICAgPGRpdiBpZD1cXFwiaW5wdXQtcHJvZmlsZVxcXCIgY2xhc3M9XFxcImNvbC00IFxcXCI+XFxyXFxuICAgICAgICA8YnI+XFxyXFxuICAgICAgICA8YnI+XFxyXFxuICAgICAgICA8YnI+XFxyXFxuICAgICAgICA8YnI+XFxyXFxuICAgICAgICA8YnI+XFxyXFxuICAgICAgICA8ZGl2ICBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgbWItM1xcXCIgPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwLXByZXBlbmRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtdGV4dFxcXCIgaWQ9XFxcImJhc2ljLWFkZG9uMVxcXCI+VXNlcm5hbWU8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJ1c2VybmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIlVzZXJuYW1lXFxcIiBhcmlhLWxhYmVsPVxcXCJVc2VybmFtZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cXFwiYmFzaWMtYWRkb24xXFxcIj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiAgY2xhc3M9XFxcImlucHV0LWdyb3VwIG1iLTMgbXktNFxcXCIgPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwLXByZXBlbmRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtdGV4dFxcXCIgaWQ9XFxcImJhc2ljLWFkZG9uMVxcXCI+RW1haWw8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJlbWFpbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVtYWlsXFxcIiBhcmlhLWxhYmVsPVxcXCJFbWFpbFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cXFwiYmFzaWMtYWRkb24xXFxcIj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJyb3cgbXQtMiBtYi00XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLTEyIHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgIDxicj5cXHJcXG4gICAgICAgIDxicj5cXHJcXG4gICAgICAgIDxicj5cXHJcXG4gICAgICAgIDxoMz48Yj5DYW1iaW8gUGFzc3dvcmQ8L2I+PC9oMz5cXHJcXG4gICAgICAgIDxicj5cXHJcXG4gICAgICAgIDxicj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC02IHRleHQtZW5kXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgIGNsYXNzPVxcXCJpbnB1dC1ncm91cCBtYi0zXFxcIiA+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtcHJlcGVuZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC10ZXh0XFxcIiBpZD1cXFwiYmFzaWMtYWRkb24xXFxcIj5WZWNjaGlhIHBhc3N3b3JkPC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwib2xkUGFzc3dvcmRcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiVmVjY2hpYVBhc3N3b3JkXFxcIiBhcmlhLWxhYmVsPVxcXCJWZWNjaGlhUGFzc3dvcmRcXFwiXFxyXFxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XFxcImJhc2ljLWFkZG9uMVxcXCI+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC02IHRleHQtc3RhcnRcXFwiPlxcclxcbiAgICAgICAgPGRpdiAgY2xhc3M9XFxcImlucHV0LWdyb3VwIG1iLTNcXFwiID5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cC1wcmVwZW5kXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLXRleHRcXFwiIGlkPVxcXCJiYXNpYy1hZGRvbjFcXFwiPk51b3ZhIFBhc3N3b3JkPC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwibmV3UGFzc3dvcmRcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiTnVvdmFQYXNzd29yZFxcXCIgYXJpYS1sYWJlbD1cXFwiTnVvdmFQYXNzd29yZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cXFwiYmFzaWMtYWRkb24xXFxcIj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiAgaWQ9XFxcImNwXFxcIiBjbGFzcz1cXFwiY29sLTEyIHRleHQtY2VudGVyIG15LTVcXFwiPlxcclxcbiAgICAgICAgXFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgIFxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxmb3JtPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcIm5hbWVTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5Ob21lPC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwibmFtZVNpZ25VcFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcInN1cm5hbWVTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5Db2dub21lPC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwic3VybmFtZVNpZ25VcFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcInVzZXJuYW1lU2lnblVwXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+Tmlja25hbWU8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJ1c2VybmFtZVNpZ25VcFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImVtYWlsU2lnblVwXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+RW1haWw8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiZW1haWxTaWduVXBcXFwiIHJlcXVpcmVkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJwYXNzd29yZFNpZ25VcFxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPlBhc3N3b3JkPC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInBhc3N3b3JkU2lnblVwXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiY29uZmlybV9wYXNzd29yZFNpZ25VcFxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPkNvbmZlcm1hIFBhc3N3b3JkPC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImNvbmZpcm1fcGFzc3dvcmRTaWduVXBcXFwiIHJlcXVpcmVkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBpZD1cXFwic2lnblVwUmVzdWx0XFxcIiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuXFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZm9ybT5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxidXR0b24gaWQ9XFxcInNpZ25VcExvZ2luXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPkFjY2VkaTwvYnV0dG9uPlxcclxcbjxidXR0b24gaWQ9XFxcInRyeXRvU2lnblVwXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIGRpc2FibGVkPlJlZ2lzdHJhdGk8L2J1dHRvbj5cXHJcXG48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiBkYXRhLWJzLWRpc21pc3M9XFxcIm1vZGFsXFxcIj5DaGl1ZGk8L2J1dHRvbj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgaWQ9XFxcImNyZWF0ZVZHQ29udGFpbmVyXFxcIiBjbGFzcz1cXFwiY29udGFpbmVyIG15LTUgYmFjay1zZW1pLXRyYW5zcGFyZW50XFxcIiBzdHlsZT1cXFwiYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHJnYigxNzEsIDIwOSwgNTcpO1xcclxcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgcmdiKDE3MSwgMjA5LCA1Nyk7XFxyXFxuICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHJnYigxNzEsIDIwOSwgNTcpO1xcclxcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJnYigxNzEsIDIwOSwgNTcpO1xcclxcbiAgICBcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgYWxpZ24taXRlbXMtc3RhcnRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTRcXFwiIHN0eWxlPVxcXCJcXHJcXG4gICAgICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHJnYigxNzEsIDIwOSwgNTcpOyBcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2IoMTcxLCAyMDksIDU3KTtcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibXktM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj48Yj5DcmVhIGNvbnNvbGUgZSBnZW5lcmk8L2I+PC9oMj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5ld0dlbnJlXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+PGI+TnVvdm8gR2VuZXJlPC9iPjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwibmV3R2VucmVcXFwiIHBsYWNlaG9sZGVyPVxcXCJJbnNlcmlzY2kgbnVvdm8gZ2VuZXJlXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJuZXdHZW5yZUJ0blxcXCIgY2xhc3M9XFxcImJ0biBtYi00IGJ1dHRvbi1ob3ZlclxcXCI+PGI+Q3JlYTwvYj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibmV3Q29uc29sZVxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPjxiPk51b3ZhIENvbnNvbGU8L2I+PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJuZXdDb25zb2xlXFxcIiBwbGFjZWhvbGRlcj1cXFwiSW5zZXJpc2NpIG51b3ZhIGNvbnNvbGVcXFwiPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcIm5ld0NvbnNvbGVCdG5cXFwiIGNsYXNzPVxcXCJidG4gbWItNCBidXR0b24taG92ZXJcXFwiPjxiPkNyZWE8L2I+PC9idXR0b24+XFxyXFxuXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC04XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJteS0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+PGI+SW5zZXJpc2NpIERhdGkgVmlkZW9naW9jbzwvYj48L2gyPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1iLTVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJuYW1lXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+PGI+VGl0b2xvPC9iPjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiVkduYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwiSW5zZXJpc2NpIGlsIHRpdG9sbyBkZWwgZ2lvY29cXFwiPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1iLTVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJ5ZWFyXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+PGI+QW5ubyBkaSBVc2NpdGE8L2I+PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcIlZHeWVhclxcXCIgbWluPVxcXCIxOTcwXFxcIiBtYXhsZW5ndGg9XFxcIjIwMjNcXFwiIHBsYWNlaG9sZGVyPVxcXCJJbnNlcmlzY2kgbCdhbm5vIGRpIHVzY2l0YVxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWItNVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCIgZm9yPVxcXCJjb3ZlclxcXCI+PGI+TGluayBpbW1hZ2luZTwvYj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcIlZHY292ZXJcXFwiIHBsYWNlaG9sZGVyPVxcXCJJbnNlcmlzY2kgaWwgbGluayBkZWxsYSBjb3BlcnRpbmFcXFwiPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgYWxpZ24taXRlbXMtc3RhcnRcXFwiPlxcclxcbiAgICAgICAgXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNFxcXCI+XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJ0ZXh0LWVuZFxcXCI+PGI+U2VsZXppb25hIGNhdGVnb3JpZTo8L2I+PC9oND5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgXFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJnZW5yZUxpc3RcXFwiIGNsYXNzPVxcXCJjb2wtOFxcXCI+XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgXFxyXFxuXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvdyBhbGlnbi1pdGVtcy1zdGFydFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJyPjxicj5cXHJcXG4gICAgICAgICAgICA8aDQgY2xhc3M9XFxcInRleHQtZW5kXFxcIj48Yj5TZWxlemlvbmEgY29uc29sZTo8L2I+PC9oND5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBpZD1cXFwiY29uc29sZUxpc3RcXFwiIGNsYXNzPVxcXCJjb2wtOFxcXCI+XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxidXR0b24gaWQ9XFxcIm5ld1ZpZGVvR2FtZUJ0blxcXCIgY2xhc3M9XFxcImJ0biBtYi00IGJ1dHRvbi1ob3ZlclxcXCI+PGI+Q3JlYTwvYj48L2J1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuPC9kaXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IHN0eWxlPVxcXCJkaXNwbGF5OiBmbGV4O1xcXCIgY2xhc3M9XFxcIm15LTVcXFwiPlxcclxcblxcclxcbiAgICA8c3BhbiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiA0MHB4XFxcIj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgaWQ9XFxcInNlbGVjdEFsbEdhbWVzXFxcIj5WaXN1YWxpenphIHR1dHRpIGkgVmlkZW9nYW1lPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9zcGFuPiA8IS0tZnVuemlvbmUgY2hlIHByZW5kZSB0dXR0aSBnbGkgYW5udW5jaSBlIGxpIHNjaGlhZmZhIG5lbCBjb250ZW51dG8gYW5udW5jaS0tPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiA0MHB4XFxcIiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnkgZHJvcGRvd24tdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgVmlzdWFsaXp6YSBwZXIgR2VuZXJlXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx1bCBpZD1cXFwiZ2FtZUdlbnJlc1xcXCIgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiA0MHB4XFxcIiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeSBkcm9wZG93bi10b2dnbGVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIFZpc3VhbGl6emEgcGVyIEFubm9cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDx1bCBpZD1cXFwiZ2FtZVllYXJzXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgIDxkaXYgc3R5bGU9XFxcInZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxcIiBjbGFzcz1cXFwiY29sLW1kLTMgbXgtYXV0b1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgYm9yZGVyLWVuZC0xIGJvcmRlciByb3VuZGVkLXBpbGxcXFwiIHR5cGU9XFxcInNlYXJjaFxcXCIgcGxhY2Vob2xkZXI9XFxcImNlcmNhXFxcIiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OjIwcHhcXFwiIGlkPVxcXCJzZWFyY2hUaXRsZUdhbWVcXFwiPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGJ1dHRvbiAgaWQ9XFxcImFkZFZpZGVvZ2FtZVxcXCIgc3R5bGU9XFxcImNvbG9yOndoaXRlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiBoaWRkZW4+XFxyXFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4vaW1nL3BsdXMucG5nXFxcIiBhbHQ9XFxcInBsdXNcXFwiIHN0eWxlPVxcXCJ3aWR0aDoyNXB4XFxcIj5cXHJcXG4gICAgICAgICAgICBJbnNlcmlzY2kgVmlkZW9nYW1lXFxyXFxuICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICA8L3NwYW4+ICAgICAgXFxyXFxuICAgICAgICAgICAgIFxcclxcblxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXY+XFxyXFxuICAgIDxkaXYgIGlkPVxcXCJWaWRlb2dhbWVDb250ZW50XFxcIiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdj5cXHJcXG4gICAgPHVsIGlkPVxcXCJwYWdlc1ZcXFwiIGNsYXNzPVxcXCJwYWdpbmF0aW9uIHBhZ2luYXRpb24tc20gbXktMlxcXCI+XFxyXFxuICAgICAgICBcXHJcXG4gICAgPC91bD5cXHJcXG48L2Rpdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIiAgICAgPGltZyAgaWQ9XFxcImJhY2stZ2FtZXNcXFwiICBjbGFzcz1cXFwibXQtNCBidXR0b25ob3ZlclxcXCIgd2lkdGg9MTIwIHNyYz1cXFwiLi9pbWcvYmFjay5wbmdcXFwiPlxcclxcblxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcInJvd1xcXCIgPlxcclxcbiAgICA8ZGl2IGlkPSBcXFwiZ2FtZVRpdGxlXFxcIiBjbGFzcz1cXFwiY29sLTEyIHRleHQtY2VudGVyXFxcIj5cXHJcXG5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgaWQ9XFxcImdhbWVJbWFnZVxcXCIgY2xhc3M9XFxcImNvbC02IHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgaWQ9XFxcImdhbWVJbmZvXFxcIiBjbGFzcz1cXFwiY29sLTYgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICBcXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgXFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJnYW1lSW5mb1xcXCIgY2xhc3M9XFxcImNvbC02IHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgXFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuICAgIFxcclxcblwiOyIsImltcG9ydCBhbm51bmNpIGZyb20gJy4vYW5udW5jaS5odG1sJ1xyXG5cclxuaW1wb3J0IGNyZWFBbm51bmNpbyBmcm9tICcuLi9jcmVhQW5udW5jaW8vY3JlYUFubnVuY2lvLmh0bWwnXHJcbmltcG9ydCBpbnNlcnRpb24gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnNlcnRpb24nO1xyXG5pbXBvcnQgZXhwYW5kSW5zZXJ0aW9uIGZyb20gJy4vYW5udW5jaW8nXHJcbmltcG9ydCBjcmVhdGVJbnNlcnRpb25QYWdlIGZyb20gJy4uL2NyZWFBbm51bmNpby9jcmVhQW5udW5jaW8nXHJcblxyXG5sZXQgbGlzdDogaW5zZXJ0aW9uW10gPSBbXTtcclxubGV0IGZpbHRlcmVkTGlzdDogaW5zZXJ0aW9uW109W11cclxubGV0IHZpZXc6IG51bWJlciA9IDZcclxubGV0IHR5cGU6IHN0cmluZztcclxubGV0IGdlbnJlczogc3RyaW5nW107XHJcbmxldCB5ZWFyczogbnVtYmVyW107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGFnZSgpIHsgICAgICAgLypJbml6aWFsaXp6YSB0dXR0byBjacOyIGNoZSBzZXJ2ZSBhbGxhIHBhZ2luYSBwZXIgZnVuemlvbmFyZSAqL1xyXG5cclxuICAgIGZldGNoKFwiL3dob0lzTG9nZ2VkXCIpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEgPT0gXCJBRE1JTlwiIHx8IGRhdGEgPT0gXCJVU0VSXCIpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRJbnNlcnRpb24yXCIpLnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkSW5zZXJ0aW9uMlwiKTtcclxuICAgICAgICAgICAgYnRuLm9uY2xpY2s9KCk9PntcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUw9Y3JlYUFubnVuY2lvO1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlSW5zZXJ0aW9uUGFnZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRJbnNlcnRpb24yXCIpLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgIHR5cGUgPSBcIkdVRVNUXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgbGlzdD1bXTtcclxuICAgIGZldGNoKCcvaW5zZXJ0aW9uJylcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBmb3IobGV0IGQgb2YgZGF0YSl7XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3JlYXRlUGFnaW5hdGlvbigpO1xyXG4gICAgICAgIHNob3dSZXN1bHRzKDEpO1xyXG4gICAgICAgIGFzc2lnbkZpbHRlcnMoKTsgICAgICAgICBcclxuICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEFsbEluc2VydGlvbnMoKXtcclxuICAgIGxpc3Q9W107XHJcbiAgICBmZXRjaCgnL2luc2VydGlvbicpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgZm9yKGxldCBkIG9mIGRhdGEpe1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgIH0gXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgZnVuY3Rpb24gc2hvd1Jlc3VsdHMoaTogbnVtYmVyKSB7XHJcblxyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc2VydGlvbkNvbnRlbnRcIik7XHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBsZXQgc3RhcnQgPSAoaSAtIDEpICogdmlldztcclxuICAgIGxldCBzdG9wID0gKGkgKiB2aWV3KSAtIDE7XHJcbiAgICBmb3IgKHN0YXJ0OyBzdGFydCA8PSBzdG9wOyBzdGFydCsrKSB7XHJcbiAgICAgICAgaWYgKHN0YXJ0ID49IGxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbGlzdFtzdGFydF0uYXBwcm92ZWQpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgbGV0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICBjb2wuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb2wtNCB0ZXh0LWNlbnRlclwiKTtcclxuICAgICAgICBjb2wuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMilcIik7XHJcbiAgICAgICAgY29sLm9ubW91c2VvdmVyPSgpPT57XHJcbiAgICAgICAgICAgIGNvbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29sLm9ubW91c2VvdXQ9KCk9PntcclxuICAgICAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaW5zZXJ0aW9uT25lPWxpc3Rbc3RhcnRdO1xyXG4gICAgICAgIGNvbC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBleHBhbmRJbnNlcnRpb24oaW5zZXJ0aW9uT25lKVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgICAgICBsZXQgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcclxuICAgICAgICBsZXQgZ2FtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcclxuICAgICAgICBsZXQgZ2VucmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XHJcbiAgICAgICAgbGV0IHllYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XHJcbiAgICAgICAgbGV0IGNvbnNvbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XHJcbiAgICAgICAgbGV0IHRyYWRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcclxuICAgICAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcclxuICAgICAgICBpbWFnZS5zcmMgPSBsaXN0W3N0YXJ0XS50cmFkZUdhbWUuY292ZXIubGluaztcclxuICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21iLTIgYm9yZGVyIGJvcmRlci0zIGJvcmRlci1pbmZvJylcclxuICAgICAgICBpbWFnZS53aWR0aCA9IDIwMDtcclxuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSBsaXN0W3N0YXJ0XS50aXRsZVxyXG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbXgtYXV0byBtdC0yIHJvdW5kZWQtdG9wIGJnLWxpZ2h0IGJvcmRlci1ib3R0b20gYm9yZGVyLTMgYm9yZGVyLXByaW1hcnknKTtcclxuXHJcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gbGlzdFtzdGFydF0uZGVzY3JpcHRpb247XHJcbiAgICAgICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtYi0wIGJvcmRlci10b3AgYm9yZGVyLTMgYm9yZGVyLXByaW1hcnkgYmctbGlnaHQnKTtcclxuXHJcbiAgICAgICAgZ2FtZS5pbm5lckhUTUwgPSBsaXN0W3N0YXJ0XS50cmFkZUdhbWUubmFtZTtcclxuICAgICAgICBnYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWItMCBiZy1saWdodCcpO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBmb3IobGV0IGk9IDA7IGk8bGlzdFtzdGFydF0udHJhZGVHYW1lLmdlbnJlLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgZ2VucmUuaW5uZXJIVE1MICs9IGxpc3Rbc3RhcnRdLnRyYWRlR2FtZS5nZW5yZVtpXS5nZW5yZSArIFwiIFwiO1xyXG4gICAgICAgICAgICBnZW5yZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21iLTAgYmctbGlnaHQnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHllYXIuaW5uZXJIVE1MID0gXCJcIiArIGxpc3Rbc3RhcnRdLnRyYWRlR2FtZS55ZWFyO1xyXG4gICAgICAgIHllYXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtYi0wIGJnLWxpZ2h0Jyk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGNvbnNvbGUuaW5uZXJIVE1MID0gbGlzdFtzdGFydF0udHJhZGVHYW1lLmNvbnNvbGUuY29uc29sZTtcclxuICAgICAgICBjb25zb2xlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWItMCBiZy1saWdodCcpO1xyXG5cclxuXHJcbiAgICAgICAgdHJhZGVzLmlubmVySFRNTCA9IFwiQWNjZXR0ZXJlaSBTY2FtYmlvIGNvbjogXCIgKyBsaXN0W3N0YXJ0XS53aXNoTGlzdFswXS5uYW1lO1xyXG4gICAgICAgIHRyYWRlcy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21iLTAgYmctbGlnaHQnKTtcclxuXHJcbiAgICAgICAgZGF0ZS5pbm5lckhUTUw9IGxpc3Rbc3RhcnRdLnB1YmxpY2F0aW9uRGF0ZTtcclxuICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncm91bmRlZC1ib3R0b20gYm9yZGVyLWJvdHRvbSBib3JkZXItMyBib3JkZXItcHJpbWFyeSBiZy1saWdodCcpO1xyXG5cclxuICAgICAgICBjb2wuYXBwZW5kKHRpdGxlLGltYWdlLGRlc2NyaXB0aW9uLGdhbWUsZ2VucmUseWVhcixjb25zb2xlLHRyYWRlcyxkYXRlKVxyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKGNvbCk7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGFnaW5hdGlvbigpIHtcclxuICAgIGxldCBzaXplOiBudW1iZXIgPSBsaXN0Lmxlbmd0aFxyXG4gICAgbGV0IHRhYnM6IG51bWJlciA9IE1hdGguY2VpbChzaXplIC8gdmlldyk7XHJcbiAgICBjb25zb2xlLmxvZyhzaXplLCB0YWJzKVxyXG4gICAgbGV0IHBhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlc1wiKTtcclxuICAgIHBhZ2VzLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0YWJzOyBpKyspIHtcclxuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgaWYgKGkgPT0gMSkge1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbSBhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiLCBcInBhZ2VcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWl0ZW1cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtbGlua1wiKTtcclxuICAgICAgICBidG4ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGFsbExpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlc1wiKS5jaGlsZHJlbjtcclxuICAgICAgICAgICAgZm9yIChsZXQgb25lTGkgb2YgYWxsTGkpIHtcclxuICAgICAgICAgICAgICAgIG9uZUxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgb25lTGkucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtIGFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIsIFwicGFnZVwiKTtcclxuICAgICAgICAgICAgc2hvd1Jlc3VsdHMoaSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBidG4uaW5uZXJIVE1MID0gXCJcIiArIChpKTtcclxuICAgICAgICBsaS5hcHBlbmRDaGlsZChidG4pO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZXNcIikuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzZXRBbGxHZW5yZXMoKSB7XHJcblxyXG4gICAgZ2VucmVzID0gW11cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGlzdFtpXS50cmFkZUdhbWUuZ2VucmUubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKCEoZ2VucmVzLmluY2x1ZGVzKGxpc3RbaV0udHJhZGVHYW1lLmdlbnJlW2pdLmdlbnJlKSkpIHtcclxuICAgICAgICAgICAgICAgIGdlbnJlcy5wdXNoKGxpc3RbaV0udHJhZGVHYW1lLmdlbnJlW2pdLmdlbnJlKVxyXG4gICAgICAgICAgICAgICAgbGV0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZW5yZXNcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgICAgICAgICBsaS5pZCA9IGxpc3RbaV0udHJhZGVHYW1lLmdlbnJlW2pdLmdlbnJlO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkcm9wZG93bi1pdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgYnRuLmlubmVySFRNTCA9IGxpc3RbaV0udHJhZGVHYW1lLmdlbnJlW2pdLmdlbnJlO1xyXG4gICAgICAgICAgICAgICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoQnlHZW5yZShsaS5pZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB1bC5hcHBlbmQobGkpO1xyXG4gICAgICAgICAgICAgICAgbGkuYXBwZW5kKGJ0bik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZXRBbGxZZWFycygpIHtcclxuICAgIHllYXJzID0gW11cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICghKHllYXJzLmluY2x1ZGVzKGxpc3RbaV0udHJhZGVHYW1lLnllYXIpKSkge1xyXG4gICAgICAgICAgICB5ZWFycy5wdXNoKGxpc3RbaV0udHJhZGVHYW1lLnllYXIpXHJcbiAgICAgICAgICAgIGxldCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieWVhcnNcIik7XHJcbiAgICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICAgICAgbGkuaWQgPSBcIlwiICsgbGlzdFtpXS50cmFkZUdhbWUueWVhcjtcclxuICAgICAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRyb3Bkb3duLWl0ZW1cIik7XHJcbiAgICAgICAgICAgIGJ0bi5pbm5lckhUTUwgPSBcIlwiICsgbGlzdFtpXS50cmFkZUdhbWUueWVhcjtcclxuICAgICAgICAgICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hCeVllYXIoTnVtYmVyKGxpLmlkKSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdWwuYXBwZW5kKGxpKTtcclxuICAgICAgICAgICAgbGkuYXBwZW5kKGJ0bik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2VhcmNoQnlBbGwoKSB7ICAgICAgICAgICAgIC8qTGEgZnVuemlvbmEgZGVsIGJvdHRvbmUgY2hlIGNlcmNhIHR1dHRpIGdsaSBhbm51bmNpIHNlbnphIGZpbHRyaSovXHJcbmxpc3Q9W107XHJcbmZldGNoKCcvaW5zZXJ0aW9uJylcclxuLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbi50aGVuKChkYXRhKSA9PiB7XHJcbiAgICBmb3IobGV0IGQgb2YgZGF0YSl7XHJcbiAgICAgICAgbGlzdC5wdXNoKGQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVBhZ2luYXRpb24oKTtcclxuICAgIHNob3dSZXN1bHRzKDEpO1xyXG59KTtcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoQnlUaXRsZSh0aXRsZTogc3RyaW5nKSB7XHJcbiAgICBmaWx0ZXJlZExpc3QgPSBbXVxyXG4gICAgZm9yIChsZXQgZWxlbWVudCBvZiBsaXN0KSB7XHJcbiAgICAgICAgbGV0IGdhbWVOYW1lID0gZWxlbWVudC50cmFkZUdhbWUubmFtZVxyXG4gICAgICAgIGxldCBpbnNlcnRpb25UaXRsZSA9IGVsZW1lbnQudGl0bGVcclxuICAgICAgICBpZiAoIChnYW1lTmFtZS50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKHRpdGxlLnRvVXBwZXJDYXNlKCkpKSBcclxuICAgICAgICB8fChpbnNlcnRpb25UaXRsZS50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKHRpdGxlLnRvVXBwZXJDYXNlKCkpKSkge1xyXG4gICAgICAgICAgICBmaWx0ZXJlZExpc3QucHVzaChlbGVtZW50KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxpc3QgPSBbXTtcclxuICAgIGxpc3QgPSBmaWx0ZXJlZExpc3RcclxuICAgIGNyZWF0ZVBhZ2luYXRpb24oKTtcclxuICAgIHNob3dSZXN1bHRzKDEpO1xyXG4gICAgZ2V0QWxsSW5zZXJ0aW9ucygpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2VhcmNoQnlHZW5yZShnZW5yZTogU3RyaW5nKSB7XHJcbiAgICBmaWx0ZXJlZExpc3QgPSBbXVxyXG4gICAgZm9yIChsZXQgZWxlbWVudCBvZiBsaXN0KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LnRyYWRlR2FtZS5nZW5yZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC50cmFkZUdhbWUuZ2VucmVbaV0uZ2VucmUgPT0gZ2VucmUpIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcmVkTGlzdC5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgaSA9IGVsZW1lbnQudHJhZGVHYW1lLmdlbnJlLmxlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxpc3QgPSBbXTtcclxuICAgIGxpc3QgPSBmaWx0ZXJlZExpc3RcclxuICAgIGNyZWF0ZVBhZ2luYXRpb24oKTtcclxuICAgIHNob3dSZXN1bHRzKDEpO1xyXG4gICAgZ2V0QWxsSW5zZXJ0aW9ucygpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2VhcmNoQnlZZWFyKHllYXI6IG51bWJlcikge1xyXG4gICAgZmlsdGVyZWRMaXN0ID0gW11cclxuICAgIGZvciAobGV0IGVsZW1lbnQgb2YgbGlzdCkge1xyXG4gICAgICAgIGlmIChlbGVtZW50LnRyYWRlR2FtZS55ZWFyID09IHllYXIpIHtcclxuICAgICAgICAgICAgZmlsdGVyZWRMaXN0LnB1c2goZWxlbWVudClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsaXN0ID0gW107XHJcbiAgICBsaXN0ID0gZmlsdGVyZWRMaXN0XHJcbiAgICBjcmVhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICBzaG93UmVzdWx0cygxKTtcclxuICAgIGdldEFsbEluc2VydGlvbnMoKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gYXNzaWduRmlsdGVycygpIHsgICAgICAgICAgICAgLypBc3NlZ25hIGxlIGZ1bnppb25pIGFpIHB1bHNhbnRpIG5lbGxlIGRyb3BEb3duTGlzdCBkYSBwcm92YXJlKi9cclxuICAgIFxyXG5sZXQgYWxsR2FtZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdEFsbFwiKVxyXG4gICAgYWxsR2FtZXMub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBzZWFyY2hCeUFsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFsbEdlbnJlcygpO1xyXG5cclxuICAgIHNldEFsbFllYXJzKCk7XHJcblxyXG4gICAgbGV0IHNlYXJjaFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hUaXRsZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgc2VhcmNoVGl0bGUub25rZXlkb3duID0gKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXkgPT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICBzZWFyY2hCeVRpdGxlKHNlYXJjaFRpdGxlLnZhbHVlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qXHJcbmZ1bmN0aW9uIGdldEFsbEluc2VydGlvbnMoKSB7ICBcclxuICAgIGxpc3QgPSBbXTtcclxuXHJcbiAgICBjb25zdCBpbWFnZUdpb2NvMSA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vaS5ldHN5c3RhdGljLmNvbS82Mjc3ODA0L3IvaWwvN2RmMDBlLzY5NzU0NjM0MC9pbF8xMTQweE4uNjk3NTQ2MzQwX2ZpdnMuanBnXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdpb2NvMiA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vd3d3Lm1vYnlnYW1lcy5jb20vaW1hZ2VzL2NvdmVycy9sLzE0NDQ1LXRoZS1sZWdlbmQtb2YtemVsZGEtbmVzLWZyb250LWNvdmVyLmpwZ1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHaW9jbzMgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9pdC9iL2IzL1BvayVDMyVBOW1vbl9HaWFsbG8ucG5nXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdpb2NvNCA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vbWV0YWxnZWFyLmZhbmRvbS5jb20vaXQvd2lraS9NZXRhbF9HZWFyP2ZpbGU9TWV0YWxfR2Vhci5qcGdcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlR2FsbGVyeTEgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9pdC90aHVtYi83Lzc3L1Bpa2FjaHUucG5nLzEwMjRweC1QaWthY2h1LnBuZ1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHYWxsZXJ5MiA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vd3d3LnBuZ21hcnQuY29tL2ZpbGVzLzExL0Zyb2ctTWVtZS1QTkctSEQucG5nXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdhbGxlcnkzID0ge1xyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9tZWRpYS5saWNkbi5jb20vZG1zL2ltYWdlL0Q1NjM1QVFIdzNFNXlZeVhUTHcvcHJvZmlsZS1mcmFtZWRwaG90by1zaHJpbmtfODAwXzgwMC8wLzE2NDQ1MTg5MTg2MDY/ZT0xNjc1NjIwMDAwJnY9YmV0YSZ0PXgxUm5YcVdzRFdBT1ZRVVhHRnVqTW9kWFpoaUdVUUp1MGE2RkFzWk4zTG9cIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdpb2NvMSA9IHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuYW1lOiBcIlN1cGVyTWFyaW9cIixcclxuICAgICAgICBnZW5yZTogW3tnZW5yZTogXCJQTEFURk9STVwifV0sXHJcbiAgICAgICAgeWVhcjogMTk4NSxcclxuICAgICAgICBjb25zb2xlOiB7Y29uc29sZTogXCJORVNcIn0sXHJcbiAgICAgICAgY292ZXI6IGltYWdlR2lvY28xXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2lvY28yID0ge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIG5hbWU6IFwiVGhlIExlZ2VuZCBvZiBaZWxkYVwiLFxyXG4gICAgICAgIGdlbnJlOiBbe2dlbnJlOiBcIkFWVkVOVFVSQVwifV0sXHJcbiAgICAgICAgeWVhcjogMTk4NixcclxuICAgICAgICBjb25zb2xlOiB7Y29uc29sZTogXCJORVNcIn0sXHJcbiAgICAgICAgY292ZXI6IGltYWdlR2lvY28yXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2lvY28zID0ge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIG5hbWU6IFwiUG9rZW1vbiBHaWFsbG9cIixcclxuICAgICAgICBnZW5yZTogW3tnZW5yZTogXCJHRFJcIn1dLFxyXG4gICAgICAgIHllYXI6IDE5OTgsXHJcbiAgICAgICAgY29uc29sZToge2NvbnNvbGU6IFwiR0FNRV9CT1lfQ09MT1JcIn0sXHJcbiAgICAgICAgY292ZXI6IGltYWdlR2lvY28zXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2lvY280ID0ge1xyXG4gICAgICAgIGlkOiA0LFxyXG4gICAgICAgIG5hbWU6IFwiTWV0YWwgR2VhclwiLFxyXG4gICAgICAgIGdlbnJlOiBbe2dlbnJlOiBcIlNURUFMVEhcIn1dLFxyXG4gICAgICAgIHllYXI6IDE5ODcsXHJcbiAgICAgICAgY29uc29sZToge2NvbnNvbGU6IFwiTkVTXCJ9LFxyXG4gICAgICAgIGNvdmVyOiBpbWFnZUdpb2NvNFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHB1Ymxpc2hlckdpb2NvMSA9IHtcclxuICAgICAgICB1c2VySWQ6IDEsXHJcbiAgICAgICAgdXNlcm5hbWU6IFwiUGllcm9hZmZvbmRvXCIsXHJcbiAgICAgICAgbmFtZTogXCJQaWVyaW5vXCIsXHJcbiAgICAgICAgc3VybmFtZTogXCJDaWNjaW5vXCIsXHJcbiAgICAgICAgZW1haWw6IFwicGllcmlub2N1b3JpY2lub0BhbW9yaW5vLmNvbVwiLFxyXG4gICAgICAgIHJhdGluZzogNjY2LFxyXG4gICAgICAgIHZpZGVvZ2FtZXM6IFtnaW9jbzFdXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5zZXJ0aW9uMTogaW5zZXJ0aW9uID0ge1xyXG4gICAgICAgIGFwcHJvdmVkOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiBcIlNjYW1iaW8gU3VwZXJNYXJpb1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlNjYW1iaW8gc3VwZXJtYXJpbyB4a8OoIG1pIHNvbm8gc2Vra2F0byBhIGdpb2NhcmNpXCIsXHJcbiAgICAgICAgcHVibGlzaGVyOiBwdWJsaXNoZXJHaW9jbzEsXHJcbiAgICAgICAgZ2FsbGVyeTogW2ltYWdlR2FsbGVyeTEsIGltYWdlR2FsbGVyeTIsIGltYWdlR2FsbGVyeTNdLFxyXG4gICAgICAgIHRyYWRlR2FtZTogZ2lvY28xLFxyXG4gICAgICAgIHdpc2hMaXN0OiBbZ2lvY28yLCBnaW9jbzMsIGdpb2NvNF0sXHJcbiAgICAgICAgb3V0Y29tZTogXCJXSVBcIixcclxuICAgICAgICBwdWJsaWNhdGlvbkRhdGU6IFwiMjktMDEtMjAyM1wiXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjc7IGkrKykge1xyXG4gICAgICAgIGlmIChpICE9IDE3KSB7XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChpbnNlcnRpb24xKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChpbnNlcnRpb24xKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4gICAgLypRVUVTVE8gRScgTEEgRlVOWklPTkUgR0lVU1RBIE5PTiBGQU1PIENIRSBTQkFHTElBVEUhICovXHJcblxyXG4gICAgLypGZXRjaCBhIGJhY2tlbmQgY29uIHR1dHRpIGdsaSBhbm51bmNpLCBhZ2dpb3JuYSBsYSBsaXN0YSBsaXN0Ki9cclxuXHJcbiAgIFxyXG4gICAgXHJcblxyXG5cclxuLypkYSBxdWkgaW4gcG9pIGxlIGZ1bnppb25pIHNlcnZvbm8gYSBcclxuY3JlYXJlIGxhIHBhZ2luYSB1bmEgdm9sdGEgY2xpY2NhdG8gIFxyXG5zdWwgYm90dG9uZSBhbm51bmNpIGUgYSByaWNhcmljYXJsZSovXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBhZ2VcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBpbnNlcnRpb24gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnNlcnRpb24nO1xyXG5pbXBvcnQgYW5udW5jaW8gZnJvbSAnLi9hbm51bmNpby5odG1sJ1xyXG5pbXBvcnQgY3JlYXRlUGFnZSBmcm9tICcuL2FubnVuY2knO1xyXG5pbXBvcnQgYW5udW5jaSBmcm9tICcuL2FubnVuY2kuaHRtbCdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHBhbmRJbnNlcnRpb24oaW5zZXJ0aW9uOiBpbnNlcnRpb24pIHtcclxuXHJcbiAgICAvKkltcG9zdG8gbGEgcGFnaW5hIHByaW5jaXBhbGUgY29uIGlsIHRlbXBsYXRlIGRlbCBzaW5nb2xvIGFubnVuY2lvICovXHJcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcclxuICAgIG1haW4uaW5uZXJIVE1MID0gYW5udW5jaW87XHJcblxyXG4gICAgXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tnYW1lc1wiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBhbm51bmNpO1xyXG4gICAgICAgIGNyZWF0ZVBhZ2UoKTtcclxuICAgIH1cclxuICAgIGxldCBiYWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrXCIpXHJcbiAgICAvL2JhY2suYXBwZW5kKGJ1dHRvbik7XHJcblxyXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgdGl0bGUuaW5uZXJIVE1MID0gaW5zZXJ0aW9uLnRpdGxlO1xyXG4gICAgYmFjay5hcHBlbmQodGl0bGUpO1xyXG5cclxuXHJcblxyXG4gICAgLypJbXBvc3RvIGlsIGNhcm9zZWxsbyBkZWxsZSBpbW1hZ2luaSB1dGVudGUgKi9cclxuICAgIGxldCBpbmRpY2F0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZGljYXRvclwiKVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnNlcnRpb24uZ2FsbGVyeS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLXRhcmdldFwiLCBcIiNpbWFnZVNsaWRlclwiKTtcclxuICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiZGF0YS1icy1zbGlkZS10b1wiLCBcIlwiICsgaSk7XHJcbiAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBcIlNsaWRlIFwiICsgKGkgKyAxKSk7XHJcbiAgICAgICAgaW5kaWNhdG9yLmFwcGVuZChidG4pO1xyXG4gICAgfVxyXG4gICAgbGV0IGlubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbm5lclwiKVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5zZXJ0aW9uLmdhbGxlcnkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcm91c2VsLWl0ZW0gYWN0aXZlXCIpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2Fyb3VzZWwtaXRlbVwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBpbWcuc3JjID0gaW5zZXJ0aW9uLmdhbGxlcnlbaV0ubGluaztcclxuICAgICAgICBpbWcud2lkdGggPSA0MDA7XHJcbiAgICAgICAgaW1nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZC1ibG9jayB3LTEwMFwiKTtcclxuICAgICAgICBpbWcuYWx0ID0gXCJHYWxsZXJ5IEltYWdlXCIgKyAoaSArIDEpXHJcbiAgICAgICAgZGl2LmFwcGVuZChpbWcpO1xyXG4gICAgICAgIGlubmVyLmFwcGVuZChkaXYpXHJcbiAgICB9XHJcbiAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGltZy5zcmMgPSBpbnNlcnRpb24udHJhZGVHYW1lLmNvdmVyLmxpbms7XHJcbiAgICBpbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbWctZmx1aWQgcm91bmRlZC1zdGFydFwiKVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkLWltYWdlXCIpLmFwcGVuZChpbWcpO1xyXG4gICAgbGV0IGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gICAgaDQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJkLXRpdGxlXCIpO1xyXG4gICAgaDQuaW5uZXJIVE1MID0gaW5zZXJ0aW9uLnRyYWRlR2FtZS5uYW1lO1xyXG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHAuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJkLXRleHRcIik7XHJcbiAgICBwLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZm9udC1zaXplOiAxLjVlbTtcIilcclxuICAgIHAuaW5uZXJIVE1MID0gXCJHZW5lcmU6IFwiO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnNlcnRpb24udHJhZGVHYW1lLmdlbnJlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgcC5pbm5lckhUTUwgKz0gaW5zZXJ0aW9uLnRyYWRlR2FtZS5nZW5yZVtpXS5nZW5yZSArIFwiIFwiXHJcbiAgICB9XHJcbiAgICBwLmlubmVySFRNTCArPSBcIjxicj5cIlxyXG4gICAgICAgICsgXCJBbm5vOiBcIiArIGluc2VydGlvbi50cmFkZUdhbWUueWVhciArIFwiPGJyPlwiXHJcbiAgICAgICAgKyBcIkNvbnNvbGU6IFwiICsgaW5zZXJ0aW9uLnRyYWRlR2FtZS5jb25zb2xlLmNvbnNvbGU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmQtYm9keVwiKS5hcHBlbmQoaDQsIHApO1xyXG4gICAgbGV0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBkZXNjLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsXCJjb2xvcjp3aGl0ZVwiKVxyXG4gICAgZGVzYy5pbm5lckhUTUwgPSBcIkRlc2NyaXppb25lOlwiXHJcbiAgICBsZXQgaW5zRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgIGluc0Rlc2Muc2V0QXR0cmlidXRlKFwic3R5bGVcIixcImNvbG9yOndoaXRlXCIpXHJcbiAgICBpbnNEZXNjLmlubmVySFRNTCA9IGluc2VydGlvbi5kZXNjcmlwdGlvbjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zZXJ0aW9uLWNyZWF0b3JcIikuaW5uZXJIVE1MID0gXCJMJ3V0ZW50ZVwiLy9pbnNlcnRpb24ucHVibGlzaGVyLnVzZXJuYW1lO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnRpb24tZGVzY3JpcHRpb25cIikuYXBwZW5kKGRlc2MsIGluc0Rlc2MpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1pdGVtLVwiICsgKGkgKyAxKSkuaW5uZXJIVE1MID0gaW5zZXJ0aW9uLndpc2hMaXN0W2ldLm5hbWU7XHJcbiAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgaW1nLnNyYyA9IGluc2VydGlvbi53aXNoTGlzdFtpXS5jb3Zlci5saW5rO1xyXG4gICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcmQtaW1nLXRvcFwiKVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nLWl0ZW0tXCIgKyAoaSArIDEpKS5hcHBlbmQoaW1nKTtcclxuICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHAuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJkLXRleHRcIik7XHJcbiAgICAgICAgcC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImZvbnQtc2l6ZTogMS41ZW07XCIpO1xyXG4gICAgICAgIHAuaW5uZXJIVE1MID0gXCJHZW5lcmU6IFwiO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5zZXJ0aW9uLnRyYWRlR2FtZS5nZW5yZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBwLmlubmVySFRNTCArPSBpbnNlcnRpb24udHJhZGVHYW1lLmdlbnJlW2ldLmdlbnJlICsgXCIgXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgcC5pbm5lckhUTUwgKz0gXCI8YnI+XCJcclxuICAgICAgICAgICAgKyBcIkFubm86IFwiICsgaW5zZXJ0aW9uLnRyYWRlR2FtZS55ZWFyICsgXCI8YnI+XCJcclxuICAgICAgICAgICAgKyBcIkNvbnNvbGU6IFwiICsgaW5zZXJ0aW9uLnRyYWRlR2FtZS5jb25zb2xlLmNvbnNvbGU7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2R5LWl0ZW0tXCIgKyAoaSArIDEpKS5hcHBlbmQocCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGV4cGFuZEluc2VydGlvbiIsImltcG9ydCBjcmVhQW5udW5jaW8gZnJvbSAnLi4vY3JlYUFubnVuY2lvL2NyZWFBbm51bmNpby5odG1sJ1xyXG5pbXBvcnQgaW5zZXJ0aW9uIGZyb20gJy4uL2ludGVyZmFjZXMvaW5zZXJ0aW9uJztcclxuaW1wb3J0IGV4cGFuZEluc2VydGlvbiBmcm9tICcuL2FubnVuY2lvJ1xyXG5pbXBvcnQgY3JlYXRlSW5zZXJ0aW9uUGFnZSBmcm9tICcuLi9jcmVhQW5udW5jaW8vY3JlYUFubnVuY2lvJ1xyXG5cclxubGV0IGxpc3Q6IGluc2VydGlvbltdID0gW107XHJcbmxldCB2aWV3OiBudW1iZXIgPSA2XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGFnZTIoKSB7ICAgICAgIC8qSW5pemlhbGl6emEgdHV0dG8gY2nDsiBjaGUgc2VydmUgYWxsYSBwYWdpbmEgcGVyIGZ1bnppb25hcmUgKi9cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0QWxsMlwiKS5vbmNsaWNrID0gc2VhcmNoQnlBbGwyO1xyXG4gICAgYXNzaWduRmlsdGVyczIoKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlQ2F0ZWdvcnlcIikub25jbGljayA9IGNyZWF0ZUNhdGVnb3J5O1xyXG4gICAgbGV0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkSW5zZXJ0aW9uXCIpO1xyXG4gICAgYnRuLm9uY2xpY2s9KCk9PntcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MPWNyZWFBbm51bmNpbztcclxuICAgICAgICBjcmVhdGVJbnNlcnRpb25QYWdlKCk7XHJcbiAgICB9XHJcbiAgICAvL2NyZWF0ZUluc2VydGlvbigpO1xyXG4gICAgZ2V0QWxsSW5zZXJ0aW9uczIoKTtcclxuICAgIGNyZWF0ZVBhZ2luYXRpb24yKCk7XHJcbiAgICBzaG93UmVzdWx0czIoMSk7XHJcblxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2VhcmNoQnlBbGwyKCkgeyAgICAgICAgICAgICAvKkxhIGZ1bnppb25hIGRlbCBib3R0b25lIGNoZSBjZXJjYSB0dXR0aSBnbGkgYW5udW5jaSBzZW56YSBmaWx0cmkqL1xyXG4gICAgZ2V0QWxsSW5zZXJ0aW9uczIoKTtcclxuICAgIGNyZWF0ZVBhZ2luYXRpb24yKCk7XHJcbiAgICBzaG93UmVzdWx0czIoMSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBhc3NpZ25GaWx0ZXJzMigpIHsgICAgICAgICAgICAgLypBc3NlZ25hIGxlIGZ1bnppb25pIGFpIHB1bHNhbnRpIG5lbGxlIGRyb3BEb3duTGlzdCBkYSBwcm92YXJlKi9cclxuICAgIGxldCBnZW5lcmkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdlbnJlczJcIikuY2hpbGRyZW5cclxuICAgIGZvciAobGV0IGcgb2YgZ2VuZXJpKSB7XHJcbiAgICAgICAgKGcgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNlYXJjaEJ5R2VucmUyKGcuaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBhbm5pID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ5ZWFyczJcIikuY2hpbGRyZW5cclxuICAgIGZvciAobGV0IGEgb2YgYW5uaSkge1xyXG4gICAgICAgIChhIGFzIEhUTUxCdXR0b25FbGVtZW50KS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzZWFyY2hCeVllYXIyKE51bWJlcigoYSBhcyBIVE1MQnV0dG9uRWxlbWVudCkuaWQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCBzZWFyY2hUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoVGl0bGUyXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBzZWFyY2hUaXRsZS5vbmtleWRvd24gPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIHNlYXJjaEJ5VGl0bGUyKHNlYXJjaFRpdGxlLnZhbHVlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hCdXR0b24yXCIpO1xyXG4gICAgc2VhcmNoQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc2VhcmNoQnlUaXRsZTIoc2VhcmNoVGl0bGUudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgLypsZXQgc2VhcmNoVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFRpdGxlMlwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgc2VhcmNoVGl0bGUub25rZXlkb3duID0gKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXkgPT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICBzZWFyY2hCeVRpdGxlMihzZWFyY2hUaXRsZS52YWx1ZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hCdXR0b24yXCIpO1xyXG4gICAgc2VhcmNoQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc2VhcmNoQnlUaXRsZTIoc2VhcmNoVGl0bGUudmFsdWUpXHJcbiAgICB9Ki9cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNlYXJjaEJ5VGl0bGUyKHRpdGxlOiBzdHJpbmcpIHtcclxuICAgIGdldEFsbEluc2VydGlvbnMyKCk7XHJcbiAgICBsZXQgZmlsdGVyZWRMaXN0ID0gW11cclxuICAgIGZvciAobGV0IGVsZW1lbnQgb2YgbGlzdCkge1xyXG4gICAgICAgIGxldCB0aXRvbG8gPSBlbGVtZW50LnRpdGxlO1xyXG4gICAgICAgIGxldCBnYW1lTmFtZSA9IGVsZW1lbnQudHJhZGVHYW1lLm5hbWVcclxuICAgICAgICBpZiAoKHRpdG9sby50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKHRpdGxlLnRvVXBwZXJDYXNlKCkpKVxyXG4gICAgICAgICAgICB8fCAoZ2FtZU5hbWUudG9VcHBlckNhc2UoKS5pbmNsdWRlcyh0aXRsZS50b1VwcGVyQ2FzZSgpKSkpIHtcclxuICAgICAgICAgICAgZmlsdGVyZWRMaXN0LnB1c2goZWxlbWVudClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsaXN0ID0gW107XHJcbiAgICBsaXN0ID0gZmlsdGVyZWRMaXN0XHJcbiAgICBjcmVhdGVQYWdpbmF0aW9uMigpO1xyXG4gICAgc2hvd1Jlc3VsdHMyKDEpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2VhcmNoQnlHZW5yZTIoZ2VucmU6IFN0cmluZykge1xyXG4gICAgY29uc29sZS5sb2coZ2VucmUpO1xyXG4gICAgbGV0IGZpbHRlcmVkTGlzdCA9IFtdXHJcbiAgICBmb3IgKGxldCBlbGVtZW50IG9mIGxpc3QpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQudHJhZGVHYW1lLmdlbnJlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRyYWRlR2FtZS5nZW5yZVtpXS5nZW5yZSA9PSBnZW5yZSkge1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyZWRMaXN0LnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBpPWVsZW1lbnQudHJhZGVHYW1lLmdlbnJlLmxlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxpc3QgPSBbXTtcclxuICAgIGxpc3QgPSBmaWx0ZXJlZExpc3RcclxuICAgIGNyZWF0ZVBhZ2luYXRpb24yKCk7XHJcbiAgICBzaG93UmVzdWx0czIoMSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlYXJjaEJ5WWVhcjIoeWVhcjogbnVtYmVyKSB7XHJcbiAgICBjb25zb2xlLmxvZyh5ZWFyKTtcclxuICAgIGxldCBmaWx0ZXJlZExpc3QgPSBbXTtcclxuICAgIGZvciAobGV0IGVsZW1lbnQgb2YgbGlzdCkge1xyXG4gICAgICAgIGlmIChlbGVtZW50LnRyYWRlR2FtZS55ZWFyID09IHllYXIpIHtcclxuICAgICAgICAgICAgZmlsdGVyZWRMaXN0LnB1c2goZWxlbWVudClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsaXN0ID0gW107XHJcbiAgICBsaXN0ID0gZmlsdGVyZWRMaXN0XHJcbiAgICBjcmVhdGVQYWdpbmF0aW9uMigpO1xyXG4gICAgc2hvd1Jlc3VsdHMyKDEpO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEFsbEluc2VydGlvbnMyKCkgeyAvKiBRdWVzdGEgw6ggc29sbyB1bmEgcHJvdmEsIHNjb21tZW50YXJlIGxhIGZldGNoIHBpw7kgZ2nDuSAqL1xyXG4gICAgbGlzdCA9IFtdO1xyXG5cclxuICAgIGNvbnN0IGltYWdlR2lvY28xID0ge1xyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9pLmV0c3lzdGF0aWMuY29tLzYyNzc4MDQvci9pbC83ZGYwMGUvNjk3NTQ2MzQwL2lsXzExNDB4Ti42OTc1NDYzNDBfZml2cy5qcGdcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlR2lvY28yID0ge1xyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cubW9ieWdhbWVzLmNvbS9pbWFnZXMvY292ZXJzL2wvMTQ0NDUtdGhlLWxlZ2VuZC1vZi16ZWxkYS1uZXMtZnJvbnQtY292ZXIuanBnXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdpb2NvMyA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2l0L2IvYjMvUG9rJUMzJUE5bW9uX0dpYWxsby5wbmdcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlR2lvY280ID0ge1xyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9tZXRhbGdlYXIuZmFuZG9tLmNvbS9pdC93aWtpL01ldGFsX0dlYXI/ZmlsZT1NZXRhbF9HZWFyLmpwZ1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHYWxsZXJ5MSA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2l0L3RodW1iLzcvNzcvUGlrYWNodS5wbmcvMTAyNHB4LVBpa2FjaHUucG5nXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdhbGxlcnkyID0ge1xyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cucG5nbWFydC5jb20vZmlsZXMvMTEvRnJvZy1NZW1lLVBORy1IRC5wbmdcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlR2FsbGVyeTMgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL21lZGlhLmxpY2RuLmNvbS9kbXMvaW1hZ2UvRDU2MzVBUUh3M0U1eVl5WFRMdy9wcm9maWxlLWZyYW1lZHBob3RvLXNocmlua184MDBfODAwLzAvMTY0NDUxODkxODYwNj9lPTE2NzU2MjAwMDAmdj1iZXRhJnQ9eDFSblhxV3NEV0FPVlFVWEdGdWpNb2RYWmhpR1VRSnUwYTZGQXNaTjNMb1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2lvY28xID0ge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5hbWU6IFwiU3VwZXJNYXJpb1wiLFxyXG4gICAgICAgIGdlbnJlOiBbe2dlbnJlOiBcIlBMQVRGT1JNXCJ9XSxcclxuICAgICAgICB5ZWFyOiAxOTg1LFxyXG4gICAgICAgIGNvbnNvbGU6IHtjb25zb2xlOiBcIk5FU1wifSxcclxuICAgICAgICBjb3ZlcjogaW1hZ2VHaW9jbzFcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnaW9jbzIgPSB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogXCJUaGUgTGVnZW5kIG9mIFplbGRhXCIsXHJcbiAgICAgICAgZ2VucmU6IFt7Z2VucmU6IFwiQVZWRU5UVVJBXCJ9XSxcclxuICAgICAgICB5ZWFyOiAxOTg2LFxyXG4gICAgICAgIGNvbnNvbGU6IHtjb25zb2xlOiBcIk5FU1wifSxcclxuICAgICAgICBjb3ZlcjogaW1hZ2VHaW9jbzJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnaW9jbzMgPSB7XHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgbmFtZTogXCJQb2tlbW9uIEdpYWxsb1wiLFxyXG4gICAgICAgIGdlbnJlOiBbe2dlbnJlOiBcIkdEUlwifV0sXHJcbiAgICAgICAgeWVhcjogMTk5OCxcclxuICAgICAgICBjb25zb2xlOiB7Y29uc29sZTogXCJHQU1FX0JPWV9DT0xPUlwifSxcclxuICAgICAgICBjb3ZlcjogaW1hZ2VHaW9jbzNcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnaW9jbzQgPSB7XHJcbiAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgbmFtZTogXCJNZXRhbCBHZWFyXCIsXHJcbiAgICAgICAgZ2VucmU6IFt7Z2VucmU6IFwiU1RFQUxUSFwifV0sXHJcbiAgICAgICAgeWVhcjogMTk4NyxcclxuICAgICAgICBjb25zb2xlOiB7Y29uc29sZTogXCJORVNcIn0sXHJcbiAgICAgICAgY292ZXI6IGltYWdlR2lvY280XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHVibGlzaGVyR2lvY28xID0ge1xyXG4gICAgICAgIHVzZXJJZDogMSxcclxuICAgICAgICB1c2VybmFtZTogXCJQaWVyb2FmZm9uZG9cIixcclxuICAgICAgICBuYW1lOiBcIlBpZXJpbm9cIixcclxuICAgICAgICBzdXJuYW1lOiBcIkNpY2Npbm9cIixcclxuICAgICAgICBlbWFpbDogXCJwaWVyaW5vY3VvcmljaW5vQGFtb3Jpbm8uY29tXCIsXHJcbiAgICAgICAgcmF0aW5nOiA2NjYsXHJcbiAgICAgICAgdmlkZW9nYW1lczogW2dpb2NvMV1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbnNlcnRpb24xOiBpbnNlcnRpb24gPSB7XHJcbiAgICAgICAgYXBwcm92ZWQ6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IFwiU2NhbWJpbyBTdXBlck1hcmlvXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiU2NhbWJpbyBzdXBlcm1hcmlvIHhrw6ggbWkgc29ubyBzZWtrYXRvIGEgZ2lvY2FyY2lcIixcclxuICAgICAgICBwdWJsaXNoZXI6IHB1Ymxpc2hlckdpb2NvMSxcclxuICAgICAgICBnYWxsZXJ5OiBbaW1hZ2VHYWxsZXJ5MSwgaW1hZ2VHYWxsZXJ5MiwgaW1hZ2VHYWxsZXJ5M10sXHJcbiAgICAgICAgdHJhZGVHYW1lOiBnaW9jbzEsXHJcbiAgICAgICAgd2lzaExpc3Q6IFtnaW9jbzIsIGdpb2NvMywgZ2lvY280XSxcclxuICAgICAgICBvdXRjb21lOiBcIldJUFwiLFxyXG4gICAgICAgIHB1YmxpY2F0aW9uRGF0ZTogXCIyOS0wMS0yMDIzXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbnNlcnRpb24yOiBpbnNlcnRpb24gPSB7XHJcbiAgICAgICAgYXBwcm92ZWQ6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IFwiU2NhbWJpbyBTdXBlckx1aWdpXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiU2NhbWJpbyBzdXBlcmx1aWdpIHBlY2Now6kgc29ubyBwcm9cIixcclxuICAgICAgICBwdWJsaXNoZXI6IHB1Ymxpc2hlckdpb2NvMSxcclxuICAgICAgICBnYWxsZXJ5OiBbaW1hZ2VHYWxsZXJ5MSwgaW1hZ2VHYWxsZXJ5MiwgaW1hZ2VHYWxsZXJ5M10sXHJcbiAgICAgICAgdHJhZGVHYW1lOiBnaW9jbzIsXHJcbiAgICAgICAgd2lzaExpc3Q6IFtnaW9jbzEsIGdpb2NvMywgZ2lvY280XSxcclxuICAgICAgICBvdXRjb21lOiBcIldJUFwiLFxyXG4gICAgICAgIHB1YmxpY2F0aW9uRGF0ZTogXCIyOS0wMS0yMDIzXCJcclxuICAgIH1cclxuXHJcbiAgICAvKlFVRVNUTyBFJyBMQSBGVU5aSU9ORSBHSVVTVEEgTk9OIEZBTU8gQ0hFIFNCQUdMSUFURSEgKi9cclxuXHJcbiAgICAvKkZldGNoIGEgYmFja2VuZCBjb24gdHV0dGkgZ2xpIGFubnVuY2ksIGFnZ2lvcm5hIGxhIGxpc3RhIGxpc3QqL1xyXG4gICAgLy8gbGlzdD1bXTtcclxuICAgIC8vIGZldGNoKCcvVGlwb0FubnVuY2lDaGVuZXNvJylcclxuICAgIC8vIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLy8gLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIC8vICAgICBmb3IobGV0IGQgb2YgZGF0YSl7XHJcbiAgICAvLyAgICAgICAgIGxpc3QucHVzaChkKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvL1ByZW5kZSBsYSBsaXN0YSBkYWwgZGJcclxuICAgIGZldGNoKCcvaW5zZXJ0aW9uJylcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBmb3IobGV0IGQgb2YgZGF0YSl7XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChkKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL0RhIG1vZGlmaWNhcmUgYSBpPDNcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGkgIT0gMikge1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goaW5zZXJ0aW9uMSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goaW5zZXJ0aW9uMilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qZGEgcXVpIGluIHBvaSBsZSBmdW56aW9uaSBzZXJ2b25vIGEgXHJcbmNyZWFyZSBsYSBwYWdpbmEgdW5hIHZvbHRhIGNsaWNjYXRvICBcclxuc3VsIGJvdHRvbmUgYW5udW5jaSBlIGEgcmljYXJpY2FybGUqL1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUGFnaW5hdGlvbjIoKSB7XHJcbiAgICBsZXQgc2l6ZTogbnVtYmVyID0gbGlzdC5sZW5ndGhcclxuICAgIGxldCB0YWJzOiBudW1iZXIgPSBNYXRoLmNlaWwoc2l6ZSAvIHZpZXcpO1xyXG4gICAgbGV0IHBhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlczJcIik7XHJcbiAgICBwYWdlcy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGFiczsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGlmIChpID09IDEpIHtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWl0ZW0gYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIiwgXCJwYWdlXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWxpbmtcIik7XHJcbiAgICAgICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBhbGxMaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZXMyXCIpLmNoaWxkcmVuO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBvbmVMaSBvZiBhbGxMaSkge1xyXG4gICAgICAgICAgICAgICAgb25lTGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWl0ZW1cIik7XHJcbiAgICAgICAgICAgICAgICBvbmVMaS5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWl0ZW0gYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIiwgXCJwYWdlXCIpO1xyXG4gICAgICAgICAgICBzaG93UmVzdWx0czIoaSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBidG4uaW5uZXJIVE1MID0gXCJcIiArIChpKTtcclxuICAgICAgICBsaS5hcHBlbmRDaGlsZChidG4pO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZXMyXCIpLmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1Jlc3VsdHMyKGk6IG51bWJlcikge1xyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc2VydGlvbkNvbnRlbnQyXCIpO1xyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbGV0IHN0YXJ0ID0gKGkgLSAxKSAqIHZpZXc7XHJcbiAgICBsZXQgc3RvcCA9IChpICogdmlldykgLSAxO1xyXG4gICAgZm9yIChzdGFydDsgc3RhcnQgPD0gc3RvcDsgc3RhcnQrKykge1xyXG4gICAgICAgIGlmIChzdGFydCA+PSBsaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWxpc3Rbc3RhcnRdLmFwcHJvdmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGxldCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgbGV0IGp1YW4gPSBcIlwiICsgc3RhcnQ7XHJcbiAgICAgICAgLy9KdWFuIMOoIGwnaWQgZGVpIGJvdHRvbmksIHNhcsOgIGwnaWQgZGVsbGUgaW5zZXJ6aW9uaSBxdWFuZG8gc2kgaW1wbGVtZW50ZXJhbm5vIGdsaSBhbm51bmNpIGRhbCBkYlxyXG4gICAgICAgIGxldCBpc09uQ2hlY2tlZExpc3RSZXN1bHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBlbGVtZW50IG9mIGNoZWNrZWRMaXN0KXtcclxuICAgICAgICAgICAgaWYoanVhbj09ZWxlbWVudCl7XHJcbiAgICAgICAgICAgICAgICBpc09uQ2hlY2tlZExpc3RSZXN1bHQ9dHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsICdsaXN0LWdyb3VwLWl0ZW0nKTtcclxuICAgICAgICBpZihpc09uQ2hlY2tlZExpc3RSZXN1bHQpe1xyXG4gICAgICAgICAgICBjb2wuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNilcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpXCIpO1xyXG4gICAgICAgICAgICBjb2wuc2V0QXR0cmlidXRlKCdvbm1vdXNlb3ZlcicsICdzZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KVwiKScpO1xyXG4gICAgICAgICAgICBjb2wuc2V0QXR0cmlidXRlKCdvbm1vdXNlb3V0JywgJ3NldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpXCIpJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBqdWFuKTtcclxuXHJcbiAgICAgICAgY29sLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGFkZEluc2VydGlvblRvTGlzdChqdWFuKVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZm9udC13ZWlnaHQ6IGJvbGQ7Jyk7XHJcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gbGlzdFtzdGFydF0udGl0bGU7XHJcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gXCJcIiArIGxpc3Rbc3RhcnRdLnRyYWRlR2FtZS5uYW1lO1xyXG4gICAgICAgIGZvcihsZXQgaT0gMDsgaTxsaXN0W3N0YXJ0XS50cmFkZUdhbWUuZ2VucmUubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgKz0gXCIsIFwiICsgbGlzdFtzdGFydF0udHJhZGVHYW1lLmdlbnJlW2ldLmdlbnJlICsgXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MICs9IFwiLCBcIiArIGxpc3Rbc3RhcnRdLnRyYWRlR2FtZS55ZWFyO1xyXG5cclxuICAgICAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgKz0gXCIsIFwiICsgbGlzdFtzdGFydF0udHJhZGVHYW1lLmNvbnNvbGUuY29uc29sZTtcclxuXHJcbiAgICAgICAgY29sLmFwcGVuZCh0aXRsZSxkZXNjcmlwdGlvbilcclxuICAgICAgICBjb250ZW50LmFwcGVuZChjb2wpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhjaGVja2VkTGlzdCk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQYWdlMlxyXG5cclxuXHJcbmxldCBjaGVja2VkTGlzdDogc3RyaW5nW10gPSBbXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRJbnNlcnRpb25Ub0xpc3QoaW5zOiBzdHJpbmcpe1xyXG5cclxuICAgIGxldCBpc09uQ2hlY2tlZExpc3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBmb3IobGV0IGVsZW1lbnQgb2YgY2hlY2tlZExpc3Qpe1xyXG4gICAgICAgIGlmKGlucz09ZWxlbWVudCl7XHJcbiAgICAgICAgICAgIGlzT25DaGVja2VkTGlzdCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNoZWNrZWRMaXN0LnNwbGljZShjaGVja2VkTGlzdC5pbmRleE9mKGVsZW1lbnQpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYoaXNPbkNoZWNrZWRMaXN0KXtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnMpLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucykuc2V0QXR0cmlidXRlKCdvbm1vdXNlb3ZlcicsICdzZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KVwiKScpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucykuc2V0QXR0cmlidXRlKCdvbm1vdXNlb3V0JywgJ3NldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpXCIpJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNoZWNrZWRMaXN0LnB1c2goaW5zKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnMpLnJlbW92ZUF0dHJpYnV0ZSgnb25tb3VzZW92ZXInKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnMpLnJlbW92ZUF0dHJpYnV0ZSgnb25tb3VzZW91dCcpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucykuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNilcIik7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2F0ZWdvcnkoKXtcclxuXHJcbiAgICAvL1ByZW5kZSBpbCB2YWxvcmUgZGVsbGEgY2FzZWxsYSBkaSB0ZXN0byBlIGxvIG1ldHRlIGNvbWUgbm9tZSBkZWxsYSBjYXRlZ29yaWFcclxuICAgIGxldCBDYXROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXRlZ29yeU5hbWVcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnNvbGUubG9nKENhdE5hbWUudmFsdWUpO1xyXG4gICAgXHJcbiAgICAvL1RPRE86IExBIEZFRUVFRUVFRUVFRUVFVENIISEhXHJcbiAgICAvL1RPRE86IGluc2VyaXNjaSBnbGkgZWxlbWVudGkgZGkgY2hlY2tlZExpc3QgaW4gdW5hIGNhdGVnb3JpYSBuZWwgREJcclxuICAgIC8vVE9ETzogTWV0b2RvIGRhIGZhcmUgcGVyIGluc2VyaXJlIGdsaSBlbGVtZW50aSBuZWwgZGF0YWJhc2UgaGFoYVxyXG4gICAgY29uc29sZS5sb2coXCJDYXRlZ29yaWEgY3JlYXRhIHBpw7kgbyBtZW5vXCIpO1xyXG5cclxuICAgIC8vU3Z1b3RhIGlsIHZhbG9yZSBkZWxsYSBjYXNlbGxhIGRpIHRlc3RvIGUgbGEgbGlzdGFcclxuICAgIENhdE5hbWUudmFsdWUgPSBcIlwiO1xyXG4gICAgY2hlY2tlZExpc3QgPSBbXTtcclxuXHJcbiAgICAvL1JlaW1wb3N0YSBsYSBwYWdpbmEgYSBjb21lIHN0YXZhIHByaW1hXHJcbiAgICBnZXRBbGxJbnNlcnRpb25zMigpO1xyXG4gICAgY3JlYXRlUGFnaW5hdGlvbjIoKTtcclxuICAgIHNob3dSZXN1bHRzMigxKTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgdXNlciBmcm9tIFwiLi4vaW50ZXJmYWNlcy91c2VyXCI7XHJcbmltcG9ydCBjaGF0SGVhZGVyVGVtcGxhdGUgZnJvbSBcIi4vY2hhdEhlYWRlci5odG1sXCJcclxuaW1wb3J0IGNoYXRCb2R5VGVtcGxhdGUgZnJvbSBcIi4vY2hhdEJvZHkuaHRtbFwiXHJcbmltcG9ydCBjaGF0Rm9vdGVyVGVtcGxhdGUgZnJvbSBcIi4vY2hhdEZvb3Rlci5odG1sXCJcclxuaW1wb3J0IG1lc3NhZ2UgZnJvbSBcIi4uL2ludGVyZmFjZXMvbWVzc2FnZVwiO1xyXG5pbXBvcnQgdXNlckluZm8gZnJvbSBcIi4uL2ludGVyZmFjZXMvdXNlckluZm9cIjtcclxuXHJcbmxldCBjaGF0SUQgOiBudW1iZXI7XHJcbmxldCB1c2VySUQgOiBudW1iZXI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xpY2tDaGF0KCl7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3dDaGF0VXNlcnNcIikub25jbGljayA9IHNob3dVc2Vyc0NoYXQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dVc2Vyc0NoYXQoKSB7XHJcbiAgICBsZXQgdXNlcnM6IHVzZXJbXSA9IFtdO1xyXG4gICAgZmV0Y2goXCIvdXNlclwiKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHVzZXIgb2YgZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdXNlcnMucHVzaCh1c2VyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgY2hhdEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhdEJveFwiKTtcclxuICAgICAgICAgICAgY2hhdEJveC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3IgKGxldCB1c2VyIG9mIHVzZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxpc3QtZ3JvdXBcIilcclxuICAgICAgICAgICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvblwiKTtcclxuICAgICAgICAgICAgICAgIGJ0bi5pZCA9IFwiXCIgKyB1c2VyLnVzZXJJZDtcclxuICAgICAgICAgICAgICAgIGJ0bi5pbm5lckhUTUwgPSB1c2VyLnVzZXJuYW1lO1xyXG4gICAgICAgICAgICAgICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7IGZpbmRDaGF0KE51bWJlcihidG4uaWQpKSB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZmluZENoYXQoaWRSZWNlaXZlcjogbnVtYmVyKSB7XHJcbiAgICBmZXRjaChcIi9maW5kQ2hhdC9cIiArIGlkUmVjZWl2ZXIpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIG9wZW5DaGF0KE51bWJlcihkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICBjaGF0SUQgPSBkYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wZW5DaGF0KGNoYXRJZDogbnVtYmVyKSB7XHJcbiAgICBsZXQgY2hhdEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhdEJveFwiKTtcclxuICAgIGNoYXRCb3guaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGNoYXRCb3guYXBwZW5kKGNoYXRIZWFkZXJUZW1wbGF0ZSwgY2hhdEJvZHlUZW1wbGF0ZSwgY2hhdEZvb3RlclRlbXBsYXRlKTtcclxuICAgIGxldCBjaGF0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXRUaXRsZVwiKTtcclxuICAgIGxldCBjaGF0Q29udmVyc2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGF0Qm9keVwiKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLWFkZG9uMlwiKS5vbmNsaWNrID0gY3JlYXRlTWVzc2FnZTtcclxuXHJcbiAgICBmZXRjaChcIi9jaGF0L2NvbnZlcnNhdGlvbi9cIiArIGNoYXRJZClcclxuICAgICAgICAudGhlbigoc2VyaWFsaXplZENvbnZlcnNhdGlvbikgPT4gc2VyaWFsaXplZENvbnZlcnNhdGlvbi5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGNvbnZlcnNhdGlvbjptZXNzYWdlW10pID0+IHtcclxuXHJcbiAgICAgICAgICAgIGZldGNoKFwiL3VzZXJcIilcclxuICAgICAgICAgICAgLnRoZW4oKHNlcmlhbGl6ZWRUaGlzVXNlckluZm8pPT5zZXJpYWxpemVkVGhpc1VzZXJJbmZvLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKHRoaXNVc2VySW5mbzp1c2VySW5mbyk9PntcclxuICAgICAgICAgICAgICAgIHVzZXJJRCA9IHRoaXNVc2VySW5mby51c2VySWQ7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBtZXNzYWdlIG9mIGNvbnZlcnNhdGlvbikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmZXRjaChcIi91c2VyL1wiK21lc3NhZ2UudXNlcklkKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChzZXJpYWxpemVkVXNlckluZm8pPT5zZXJpYWxpemVkVXNlckluZm8uanNvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh1c2VySW5mbzp1c2VySW5mbyk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodXNlckluZm8udXNlcm5hbWU9PXRoaXNVc2VySW5mby51c2VybmFtZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWlsZE1lc3NhZ2VTZW5kZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWlsZE1lc3NhZ2VSZWNpdmVkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgZnVuY3Rpb24gYnVpbGRNZXNzYWdlUmVjaXZlZCgpIHtcclxuICAgICAgICBsZXQgY2hhdEJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXRCb2R5XCIpO1xyXG4gICAgICAgIGxldCBkaXZJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkaXZJbmZvLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIpO1xyXG4gICAgICAgIGxldCBwRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHBEYXRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic21hbGwgbWItMSB0ZXh0LW11dGVkXCIpOyAgICAgICAgXHJcbiAgICAgICAgcERhdGUuaW5uZXJIVE1MPVwiZGF0YSBwcm92YSByZWNlaXZlZCAwMy8wMi8yMDIzIDEyOjQzXCI7XHJcbiAgICAgICAgbGV0IHBVc2VybmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHBVc2VybmFtZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNtYWxsIG1iLTFcIik7XHJcbiAgICAgICAgcFVzZXJuYW1lLmlubmVySFRNTD1cInVzZXJuYW1lIHByb3ZhIHJlY2VpdmVkXCI7XHJcblxyXG4gICAgICAgIGxldCBkaXZUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkaXZUZXh0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1zdGFydFwiKTtcclxuICAgICAgICBsZXQgZGl2SW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGxldCBwVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHBUZXh0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic21hbGwgcC0yIG1zLTMgbWItMyByb3VuZGVkLTNcIik7XHJcbiAgICAgICAgcFRleHQuaW5uZXJIVE1MID0gXCJtZXNzYWdnaW8gZGkgcHJvdmFhYWFhYSByaWNldnV0b29vb1wiO1xyXG5cclxuICAgICAgICBsZXQgaW1nQXZhdGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBpbWdBdmF0YXIuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9pbWcvcHJvZmlsZS5wbmdcIik7XHJcbiAgICAgICAgaW1nQXZhdGFyLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcImF2YXRhclwiKTtcclxuICAgICAgICBpbWdBdmF0YXIuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJzdHlsZSA9ICd3aWR0aDogNDVweDsgaGVpZ2h0OiAxMDAlOydcIik7XHJcblxyXG4gICAgICAgIGRpdkluZm8uYXBwZW5kKHBVc2VybmFtZSwgcERhdGUpO1xyXG4gICAgICAgIGRpdklubmVyLmFwcGVuZChwVGV4dCk7XHJcbiAgICAgICAgZGl2VGV4dC5hcHBlbmQoaW1nQXZhdGFyLCBkaXZJbm5lcik7XHJcbiAgICAgICAgY2hhdEJvZHkuYXBwZW5kKGRpdkluZm8sIGRpdlRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGJ1aWxkTWVzc2FnZVNlbmRlZCgpIHtcclxuICAgICAgICBsZXQgY2hhdEJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXRCb2R5XCIpO1xyXG5cclxuICAgICAgICBsZXQgZGl2SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZGl2SW5mby5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiKTtcclxuICAgICAgICBsZXQgcERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBwRGF0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNtYWxsIG1iLTEgdGV4dC1tdXRlZFwiKTtcclxuICAgICAgICBwRGF0ZS5pbm5lckhUTUw9XCJkYXRhIHByb3ZhIHNlbmRlciAwMy8wMi8yMDIzIDEyOjQzXCI7XHJcbiAgICAgICAgbGV0IHBVc2VybmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHBVc2VybmFtZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNtYWxsIG1iLTFcIik7XHJcbiAgICAgICAgcFVzZXJuYW1lLmlubmVySFRNTD1cInVzZXJuYW1lIHByb3ZhIHNlbmRlclwiO1xyXG5cclxuICAgICAgICBsZXQgZGl2VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZGl2VGV4dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtZW5kIG1iLTQgcHQtMVwiKTtcclxuICAgICAgICBsZXQgZGl2SW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGxldCBwVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHBUZXh0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic21hbGwgcC0yIG1lLTMgbWItMyB0ZXh0LXdoaXRlIHJvdW5kZWQtMyBiZy13YXJuaW5nXCIpO1xyXG4gICAgICAgIHBUZXh0LmlubmVySFRNTCA9IFwibWVzc2FnZ2lvIGRpIHByb3ZhYWFhYWEgaW52aWF0b29vb28gd2VlZXdld2V3ZWUgc2NyaXZvIGNvc2UgYSBjYXNvIHBlciB2ZWRlcmUgY2hlIHN1Y2NlZGUgc2UgdmEgYSBjYXBvb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29cIjtcclxuICAgICAgIFxyXG4gICAgICAgIGxldCBpbWdBdmF0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGltZ0F2YXRhci5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL2ltZy9wcm9maWxlLnBuZ1wiKTtcclxuICAgICAgICBpbWdBdmF0YXIuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiYXZhdGFyXCIpO1xyXG4gICAgICAgIGltZ0F2YXRhci5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInN0eWxlID0gJ3dpZHRoOiA0NXB4OyBoZWlnaHQ6IDEwMCU7J1wiKTtcclxuXHJcbiAgICAgICAgZGl2SW5mby5hcHBlbmQocERhdGUsIHBVc2VybmFtZSk7XHJcbiAgICAgICAgZGl2SW5uZXIuYXBwZW5kKHBUZXh0KTtcclxuICAgICAgICBkaXZUZXh0LmFwcGVuZChkaXZJbm5lciwgaW1nQXZhdGFyKTtcclxuICAgICAgICBjaGF0Qm9keS5hcHBlbmQoZGl2SW5mbywgZGl2VGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlTWVzc2FnZSgpe1xyXG4gICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlVGV4dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgICAgICBjb25zdCBuZXdNZXNzYWdlID0ge1xyXG4gICAgICAgICAgICBjaGF0SWQ6IGNoYXRJRCxcclxuICAgICAgICAgICAgdXNlcklkOiB1c2VySUQsXHJcbiAgICAgICAgICAgIHRleHQ6IHRleHQudmFsdWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzIDoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdNZXNzYWdlKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZmV0Y2goXCIvY2hhdC9cIiwgcmVxdWVzdClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpPT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgICAgIGlmKGRhdGEpe1xyXG4gICAgICAgICAgICAgICAgb3BlbkNoYXQoY2hhdElEKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZENsaWNrQ2hhdDsiLCJpbXBvcnQgY3JlYUFubnVuY2lvIGZyb20gJy4vY3JlYUFubnVuY2lvLmh0bWwnXHJcbmltcG9ydCBhbm51bmNpIGZyb20gJy4vYW5udW5jaS5odG1sJ1xyXG5pbXBvcnQgdmlkZW9nYW1lIGZyb20gJy4uL2ludGVyZmFjZXMvdmlkZW9nYW1lJztcclxuXHJcbmxldCBmdWxsTGlzdDogdmlkZW9nYW1lW10gPSBbXVxyXG5sZXQgdXNlckxpc3Q6IHZpZGVvZ2FtZVtdID0gW11cclxubGV0IHdpc2hMaXN0OiBzdHJpbmdbXSA9IFtdXHJcbmxldCBsaXN0SWQ6bnVtYmVyW109W11cclxubGV0IGdhbWVUb1RyYWRlOnZpZGVvZ2FtZTtcclxubGV0IGdpb2NvRGFTY2FtYmlhcmU6IG51bWJlcjtcclxubGV0IGluZGV4ID0gMDtcclxuXHJcblxyXG4vKkNyZWEgbGEgbGlzdGEgZGVpIGdpb2NoaSBwb3NzZWR1dGkgZGFsbCd1dGVudGUgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUluc2VydGlvblBhZ2UoKSB7XHJcbiAgICBnZXRVc2VyR2FtZXMoKTtcclxuICAgIGdldEFsbEdhbWVzKCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbmRJbnNlcnRpb25cIikub25jbGljaz0oKT0+e1xyXG4gICAgICAgIHNlbmRBbGwoKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEFsbEdhbWVzKCkge1xyXG4gICAgZmV0Y2goXCIvdmlkZW9nYW1lc1wiKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKCh2aWRlb2dhbWVzKSA9PiB7XHJcbiAgICAgICAgICAgIGZ1bGxMaXN0ID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGdhbWUgb2YgdmlkZW9nYW1lcykge1xyXG4gICAgICAgICAgICAgICAgZnVsbExpc3QucHVzaChnYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgd2lzaEdhbWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aXNoR2FtZXNcIik7XHJcbiAgICAgICAgICAgIHdpc2hHYW1lcy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBnYW1lIG9mIGZ1bGxMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb2xQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgICAgICAgICByb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJteC1hdXRvIHBiLTQgcm93IGJvcmRlci1ib3R0b20gYm9yZGVyLTIgYm9yZGVyLXByaW1hcnlcIik7XHJcbiAgICAgICAgICAgICAgICBjb2wuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb2wtMiBteC1hdXRvIG1zLTAgbXktYXV0b1wiKTtcclxuICAgICAgICAgICAgICAgIGNvbFBpYy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbC0yIG14LWF1dG8gbWUtMSBteS1hdXRvXCIpO1xyXG4gICAgICAgICAgICAgICAgcGljLnNldEF0dHJpYnV0ZSgnc3JjJywgZ2FtZS5jb3Zlci5saW5rKTtcclxuICAgICAgICAgICAgICAgIHBpYy5zZXRBdHRyaWJ1dGUoJ2FsdCcsIGdhbWUubmFtZSk7XHJcbiAgICAgICAgICAgICAgICBwaWMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdib3JkZXIgYm9yZGVyLTIgYm9yZGVyLWluZm8gcm91bmRlZCcpXHJcbiAgICAgICAgICAgICAgICBwaWMuc2V0QXR0cmlidXRlKCdzdHlsZScsICd3aWR0aDozMDAlJyk7ICAgIFxyXG4gICAgICAgICAgICAgICAgbGlCdG4uaWQgPSBnYW1lLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBsaUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICAgICAgbGlCdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkcm9wZG93bi1pdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gZ2FtZS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJteS1hdXRvXCIpO1xyXG4gICAgICAgICAgICAgICAgbGlCdG4ub25jbGljayA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRlc3Q6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAod2lzaExpc3QubGVuZ3RoID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lzaExpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBlbGVtZW50IG9mIHdpc2hMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50ID09IGxpLmlubmVySFRNTCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpc2hMaXN0W2luZGV4XSA9IGxpLmlubmVySFRNTDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdElkW2luZGV4XSA9IGdhbWUuaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHaW9jaGkgZGVzaWRlcmF0aTogXCIrbGlzdElkKTtcclxuICAgICAgICAgICAgICAgICAgICBzaG93U2VsZWN0ZWRHYW1lcygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxpLmFwcGVuZChsaUJ0bik7XHJcbiAgICAgICAgICAgICAgICBsaUJ0bi5hcHBlbmQocm93KTtcclxuICAgICAgICAgICAgICAgIGNvbC5hcHBlbmQodGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgY29sUGljLmFwcGVuZChwaWMpXHJcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kKGNvbCwgY29sUGljKTtcclxuICAgICAgICAgICAgICAgIHdpc2hHYW1lcy5hcHBlbmQobGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VXNlckdhbWVzKCkge1xyXG4gICAgZmV0Y2goXCIvdmlkZW9nYW1lcy91c2VyXCIpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKHZpZGVvZ2FtZXMpID0+IHtcclxuICAgICAgICAgICAgdXNlckxpc3QgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgZ2FtZSBvZiB2aWRlb2dhbWVzKSB7XHJcbiAgICAgICAgICAgICAgICB1c2VyTGlzdC5wdXNoKGdhbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCB0cmFkZUdhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYWRlR2FtZVwiKTtcclxuICAgICAgICAgICAgdHJhZGVHYW1lLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGdhbWUgb2YgdXNlckxpc3QpIHtcclxuICAgICAgICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICAgICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBwaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb2xQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgcm93LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibXgtYXV0byByb3cgYm9yZGVyLWJvdHRvbSBib3JkZXItMiBib3JkZXItcHJpbWFyeVwiKTtcclxuICAgICAgICAgICAgICAgIGNvbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbC0yIG14LWF1dG8gbXMtMCBteS1hdXRvIG1zLTFcIik7XHJcbiAgICAgICAgICAgICAgICBjb2xQaWMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb2wtMiBteC1hdXRvIG1lLTEgbXktYXV0b1wiKTtcclxuICAgICAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZHJvcGRvd24taXRlbVwiKTtcclxuICAgICAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaXRlbVNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gZ2FtZS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJteS1hdXRvXCIpO1xyXG4gICAgICAgICAgICAgICAgcGljLnNyYyA9IGdhbWUuY292ZXIubGluaztcclxuICAgICAgICAgICAgICAgIHBpYy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnYm9yZGVyIGJvcmRlci0yIGJvcmRlci1pbmZvIHJvdW5kZWQnKTtcclxuICAgICAgICAgICAgICAgIHBpYy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3dpZHRoOjcwMCUnKTsgIFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZ2FtZS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIGxpQnRuLmlkID0gZ2FtZS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgbGlCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgICAgIGxpQnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicC0wIG14LWF1dG8gbXktYXV0byBkcm9wZG93bi1pdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgbGlCdG4ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBnaW9jb0RhU2NhbWJpYXJlID0gZ2FtZS5pZDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdpb2NvIGRhIFNjYW1iaWFyZTogXCIrIGdpb2NvRGFTY2FtYmlhcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVUb1RyYWRlPWdhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAvLyBsZXQgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3RlZFRyYWRlR2FtZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2J0bi5hcHBlbmQobGkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kKGNvbCwgY29sUGljKTtcclxuICAgICAgICAgICAgICAgIGNvbC5hcHBlbmQodGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgY29sUGljLmFwcGVuZChwaWMpO1xyXG4gICAgICAgICAgICAgICAgbGlCdG4uYXBwZW5kKHJvdyk7XHJcbiAgICAgICAgICAgICAgICBsaS5hcHBlbmQobGlCdG4pO1xyXG4gICAgICAgICAgICAgICAgdHJhZGVHYW1lLmFwcGVuZChsaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2hvd1NlbGVjdGVkVHJhZGVHYW1lKCl7XHJcbiAgICBnYW1lVG9UcmFkZTtcclxufVxyXG5cclxuXHJcbi8qIE1vc3RyYSBpIGdpb2NoaSBzY2VsdGkgZGFsbCd1dGVudGUgcGVyIGxvIHNjYW1iaW8qL1xyXG5mdW5jdGlvbiBzaG93U2VsZWN0ZWRHYW1lcygpIHtcclxuICAgIGxldCBzZWxlY3RlZEdhbWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3RlZEdhbWVzXCIpO1xyXG4gICAgc2VsZWN0ZWRHYW1lcy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aXNoTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBsZXQgcGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBwaWMuc3JjID0gd2lzaExpc3RbaV07XHJcblxyXG4gICAgICAgIGxpLmlubmVySFRNTCA9IHdpc2hMaXN0W2ldO1xyXG4gICAgICAgIHNlbGVjdGVkR2FtZXMuYXBwZW5kKGxpKTtcclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIEluc2VydGlvbkRUT3tcclxuICAgIHRpdGxlOnN0cmluZyxcclxuICAgIGRlc2NyaXB0aW9uOnN0cmluZyxcclxuICAgIGdhbGxlcnk6c3RyaW5nW10sXHJcbiAgICB0cmFkZUdhbWVJZDpudW1iZXIsXHJcbiAgICB3aXNoTGlzdElkczpudW1iZXJbXVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2VuZEFsbCAoKXtcclxuICAgIGxldCBjb21wb3NpdGVsaW5rPShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbGxlcnlJbnNlcnRpb25cIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVcclxuICAgIGxldCBsaW5rcz1jb21wb3NpdGVsaW5rLnNwbGl0KFwiLFwiKTtcclxuICAgIFxyXG4gICAgbGV0IG9iajpJbnNlcnRpb25EVE89e1xyXG4gICAgdGl0bGU6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlSW5zZXJ0aW9uXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLFxyXG5cdGRlc2NyaXB0aW9uOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvbkluc2VydGlvblwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSxcclxuXHRnYWxsZXJ5OiBsaW5rcyxcclxuXHR0cmFkZUdhbWVJZDogZ2lvY29EYVNjYW1iaWFyZSxcclxuXHR3aXNoTGlzdElkczogbGlzdElkXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHJlcXVlc3QgPXtcclxuICAgICAgICBtZXRob2Q6J1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqKVxyXG4gICAgfVxyXG5cclxuICAgIGZldGNoKFwiL2luc2VydGlvblwiLCByZXF1ZXN0KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKT0+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpPT5jb25zb2xlLmxvZyhkYXRhKSk7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSW5zZXJ0aW9uUGFnZTsiLCJpbXBvcnQgZGl2IGZyb20gJy4vZm9vdGVyLmh0bWwnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvdCgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9vdGVyXCIpLmlubmVySFRNTCA9IGRpdjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm90OyIsImltcG9ydCBnZXN0aW9uZVV0ZW50aSBmcm9tICcuL2dlc3Rpb25lVXRlbnRpLmh0bWwnXHJcbmltcG9ydCB1c2VySW50IGZyb20gJy4uL2ludGVyZmFjZXMvdXNlcic7XHJcbmltcG9ydCBzaG93UHJvZmlsZSBmcm9tICcuLi9wcm9maWxvVXRlbnRlL3Byb2ZpbGUnO1xyXG5cclxubGV0IHVzZXJzOiB1c2VySW50W10gPSBbXTtcclxubGV0IHZpZXcgPSA1O1xyXG5cclxuZnVuY3Rpb24gc2hvd1VzZXJzKG51bTogbnVtYmVyKSB7XHJcbiAgICBsZXQgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlckxpc3RcIik7XHJcbiAgICBsaXN0LmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IChudW0gLSAxKSAqIHZpZXc7IGkgPCBudW0gKiB2aWV3OyBpKyspIHtcclxuICAgICAgICBpZiAoaSA+PSB1c2Vycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgbGV0IGJ0bl9wcm9maWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBidG5fcHJvZmlsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ0blwiKTtcclxuICAgICAgICBidG5fcHJvZmlsZS5vbmNsaWNrID0gc2hvd1Byb2ZpbGU7XHJcbiAgICAgICAgbGkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsaXN0LWdyb3VwLWl0ZW0nKTtcclxuICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoJ29ubW91c2VvdmVyJywgXCJzZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpc3QtZ3JvdXAtaXRlbSBhY3RpdmUnKVwiKTtcclxuICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoJ29ubW91c2VvdXQnLCBcInNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGlzdC1ncm91cC1pdGVtJylcIik7XHJcbiAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZmxvYXQtZW5kXCIpO1xyXG4gICAgICAgIGxldCBidG5fYmFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBsZXQgYnRuX2FkbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnRuX2Jhbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVwiKTtcclxuICAgICAgICBidG5fYWRtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbVwiKTtcclxuICAgICAgICBidG5fYmFuLmlubmVySFRNTCA9IFwiQmFubmFcIjtcclxuICAgICAgICBidG5fYWRtLmlubmVySFRNTCA9IFwiUmVuZGkgQWRtaW5cIjtcclxuICAgICAgICBidG5fYmFuLm9uY2xpY2sgPSAoKSA9PiB7IGtpY2tIaXNBc3NPdXRPZlRoaXNTaXRlKHVzZXJzW2ldLnVzZXJJZCl9O1xyXG4gICAgICAgIGJ0bl9hZG0ub25jbGljayA9ICgpID0+IHsgbWFrZUhpbUFkbWluKHVzZXJzW2ldLnVzZXJJZCkgfTtcclxuICAgICAgICBzcGFuLmFwcGVuZChidG5fYWRtLCBidG5fYmFuKTtcclxuICAgICAgICBidG5fcHJvZmlsZS5pbm5lckhUTUwgPSB1c2Vyc1tpXS51c2VybmFtZSArIFwiIHwgXCIgKyB1c2Vyc1tpXS5uYW1lICsgXCIgXCIgKyB1c2Vyc1tpXS5zdXJuYW1lICsgXCIgfCBcIiArIHVzZXJzW2ldLmVtYWlsICsgXCIgfCBcIiArIHVzZXJzW2ldLnJhdGluZyArIFwiPGkgY2xhc3M9J2ZhLXJlZ3VsYXIgZmEtc3Rhcic+PC9pPlwiO1xyXG4gICAgICAgIGxpLmFwcGVuZChidG5fcHJvZmlsZSwgc3Bhbik7XHJcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsVXNlcnMoKTogdm9pZCB7XHJcbiAgICBmZXRjaChcIi91c2VyXCIpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdXNlcnMgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgZWxlbWVudCBvZiBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB1c2Vycy5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNyZWF0ZVBhZ2luYXRpb24oKTtcclxuICAgICAgICAgICAgc2hvd1VzZXJzKDEpO1xyXG4gICAgICAgIH0pO1xyXG59XHJcblxyXG4vKlxyXG48bGkgY2xhc3M9XCJwYWdlLWl0ZW0gYWN0aXZlXCIgYXJpYS1jdXJyZW50PVwicGFnZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBhZ2UtbGlua1wiPjE8L3NwYW4+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3M9XCJwYWdlLWl0ZW1cIj48YSBjbGFzcz1cInBhZ2UtbGlua1wiIGhyZWY9XCIjXCI+MjwvYT48L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cInBhZ2UtaXRlbVwiPjxhIGNsYXNzPVwicGFnZS1saW5rXCIgaHJlZj1cIiNcIj4zPC9hPjwvbGk+XHJcbiovXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQYWdpbmF0aW9uKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdpbmF0aW9uXCIpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBsZXQgbnVtYmVyT2ZQYWdlcyA9IE1hdGguY2VpbCh1c2Vycy5sZW5ndGggLyB2aWV3KTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZQYWdlczsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWl0ZW0gYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIiwgXCJwYWdlXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWxpbmtcIik7XHJcbiAgICAgICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBhbGxMaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnaW5hdGlvblwiKS5jaGlsZHJlbjtcclxuICAgICAgICAgICAgZm9yIChsZXQgb25lTGkgb2YgYWxsTGkpIHtcclxuICAgICAgICAgICAgICAgIG9uZUxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgb25lTGkucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtIGFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIsIFwicGFnZVwiKTtcclxuICAgICAgICAgICAgc2hvd1VzZXJzKGkgKyAxKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGJ0bi5pbm5lckhUTUwgPSBcIlwiICsgKGkgKyAxKTtcclxuICAgICAgICBsaS5hcHBlbmRDaGlsZChidG4pO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnaW5hdGlvblwiKS5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gbWFrZUhpbUFkbWluKGlkOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaWQpXHJcbiAgICB9XHJcbiAgICBmZXRjaChcIi9hZG1pblwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaWQpXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7IGNvbnNvbGUubG9nKFwiYWRtaW4gY3JlYXRvPyBcIiArIGRhdGEpOyBnZXRBbGxVc2VycygpOyB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24ga2lja0hpc0Fzc091dE9mVGhpc1NpdGUoaWQ6IG51bWJlcikge1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGlkKVxyXG4gICAgfVxyXG4gICAgZmV0Y2goXCIvdXNlclwiLCByZXF1ZXN0KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7IGNvbnNvbGUubG9nKFwidXNlciBjYW5jZWxsYXRvPyBcIiArIGRhdGEpOyBnZXRBbGxVc2VycygpOyB9KTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldEFsbFVzZXJzOyIsImltcG9ydCBob21lIGZyb20gJy4vaG9tZS5odG1sJ1xyXG5pbXBvcnQge2luc2VydGlvbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnNlcnRpb24nO1xyXG5pbXBvcnQgYW5udW5jaSBmcm9tICcuLi9hbm51bmNpL2FubnVuY2kuaHRtbCc7XHJcbmltcG9ydCBjcmVhdGVQYWdlLCB7IHNlYXJjaEJ5VGl0bGUgfSBmcm9tIFwiLi4vYW5udW5jaS9hbm51bmNpXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVBhZ2luYXRpb24gfSBmcm9tICcuLi9hbm51bmNpL2FubnVuY2knO1xyXG5pbXBvcnQgY3JlYUFubnVuY2lvIGZyb20gJy4uL2NyZWFBbm51bmNpby9jcmVhQW5udW5jaW8uaHRtbCdcclxuaW1wb3J0IGNyZWF0ZUluc2VydGlvblBhZ2UgZnJvbSBcIi4uL2NyZWFBbm51bmNpby9jcmVhQW5udW5jaW9cIjtcclxuaW1wb3J0IGV4cGFuZEluc2VydGlvbiBmcm9tICcuLi9hbm51bmNpL2FubnVuY2lvJztcclxuaW1wb3J0IGFubnVuY2lvIGZyb20gJy4uL2FubnVuY2kvYW5udW5jaW8uaHRtbCc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy9pbXBvcnQgY3JlYXRlSW5zZXJ0aW9uIGZyb20gJy4uL2NyZWFBbm51bmNpby9jcmVhQW5udW5jaW8nO1xyXG5cclxubGV0IGxpc3Q6IGluc2VydGlvbltdID0gW107XHJcblxyXG5mdW5jdGlvbiBnZXRBbGxJbnNlcnRpb25zKCkgeyAvKiBRdWVzdGEgw6ggc29sbyB1bmEgcHJvdmEsIHNjb21tZW50YXJlIGxhIGZldGNoIHBpw7kgZ2nDuSAqL1xyXG4gICAgbGlzdCA9IFtdO1xyXG5cclxuICAgIGNvbnN0IGltYWdlR2lvY28xID0ge1xyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9pLmV0c3lzdGF0aWMuY29tLzYyNzc4MDQvci9pbC83ZGYwMGUvNjk3NTQ2MzQwL2lsXzExNDB4Ti42OTc1NDYzNDBfZml2cy5qcGdcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlR2lvY28yID0ge1xyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cubW9ieWdhbWVzLmNvbS9pbWFnZXMvY292ZXJzL2wvMTQ0NDUtdGhlLWxlZ2VuZC1vZi16ZWxkYS1uZXMtZnJvbnQtY292ZXIuanBnXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdpb2NvMyA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2l0L2IvYjMvUG9rJUMzJUE5bW9uX0dpYWxsby5wbmdcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlR2lvY280ID0ge1xyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L21ldGFsZ2Vhci9pbWFnZXMvZS9lMS9NZXRhbF9HZWFyLmpwZ1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHYWxsZXJ5MSA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2l0L3RodW1iLzcvNzcvUGlrYWNodS5wbmcvMTAyNHB4LVBpa2FjaHUucG5nXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdhbGxlcnkyID0ge1xyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cucG5nbWFydC5jb20vZmlsZXMvMTEvRnJvZy1NZW1lLVBORy1IRC5wbmdcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlR2FsbGVyeTMgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL21lZGlhLmxpY2RuLmNvbS9kbXMvaW1hZ2UvRDU2MzVBUUh3M0U1eVl5WFRMdy9wcm9maWxlLWZyYW1lZHBob3RvLXNocmlua184MDBfODAwLzAvMTY0NDUxODkxODYwNj9lPTE2NzU2MjAwMDAmdj1iZXRhJnQ9eDFSblhxV3NEV0FPVlFVWEdGdWpNb2RYWmhpR1VRSnUwYTZGQXNaTjNMb1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2lvY28xID0ge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5hbWU6IFwiU3VwZXJNYXJpb1wiLFxyXG4gICAgICAgIGdlbnJlOiBbe2dlbnJlOiBcIlBMQVRGT1JNXCJ9XSxcclxuICAgICAgICB5ZWFyOiAxOTg1LFxyXG4gICAgICAgIGNvbnNvbGU6IHtjb25zb2xlOiBcIk5FU1wifSxcclxuICAgICAgICBjb3ZlcjogaW1hZ2VHaW9jbzFcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnaW9jbzIgPSB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogXCJUaGUgTGVnZW5kIG9mIFplbGRhXCIsXHJcbiAgICAgICAgZ2VucmU6IFt7Z2VucmU6IFwiQVZWRU5UVVJBXCJ9XSxcclxuICAgICAgICB5ZWFyOiAxOTg2LFxyXG4gICAgICAgIGNvbnNvbGU6IHtjb25zb2xlOiBcIk5FU1wifSxcclxuICAgICAgICBjb3ZlcjogaW1hZ2VHaW9jbzJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnaW9jbzMgPSB7XHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgbmFtZTogXCJQb2tlbW9uIEdpYWxsb1wiLFxyXG4gICAgICAgIGdlbnJlOiBbe2dlbnJlOiBcIkdEUlwifV0sXHJcbiAgICAgICAgeWVhcjogMTk5OCxcclxuICAgICAgICBjb25zb2xlOiB7Y29uc29sZTogXCJHQU1FX0JPWV9DT0xPUlwifSxcclxuICAgICAgICBjb3ZlcjogaW1hZ2VHaW9jbzNcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnaW9jbzQgPSB7XHJcbiAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgbmFtZTogXCJNZXRhbCBHZWFyXCIsXHJcbiAgICAgICAgZ2VucmU6IFt7Z2VucmU6IFwiU1RFQUxUSFwifV0sXHJcbiAgICAgICAgeWVhcjogMTk4NyxcclxuICAgICAgICBjb25zb2xlOiB7Y29uc29sZTogXCJORVNcIn0sXHJcbiAgICAgICAgY292ZXI6IGltYWdlR2lvY280XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHVibGlzaGVyR2lvY28xID0ge1xyXG4gICAgICAgIHVzZXJJZDogMSxcclxuICAgICAgICB1c2VybmFtZTogXCJQaWVyb2FmZm9uZG9cIixcclxuICAgICAgICBuYW1lOiBcIlBpZXJpbm9cIixcclxuICAgICAgICBzdXJuYW1lOiBcIkNpY2Npbm9cIixcclxuICAgICAgICBlbWFpbDogXCJwaWVyaW5vY3VvcmljaW5vQGFtb3Jpbm8uY29tXCIsXHJcbiAgICAgICAgcmF0aW5nOiA2NjYsXHJcbiAgICAgICAgdmlkZW9nYW1lczogW2dpb2NvMV1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbnNlcnRpb24xOiBpbnNlcnRpb24gPSB7XHJcbiAgICAgICAgYXBwcm92ZWQ6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IFwiU2NhbWJpbyBTdXBlck1hcmlvXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiU2NhbWJpbyBzdXBlcm1hcmlvIHhrw6ggbWkgc29ubyBzZWtrYXRvIGEgZ2lvY2FyY2lcIixcclxuICAgICAgICBwdWJsaXNoZXI6IHB1Ymxpc2hlckdpb2NvMSxcclxuICAgICAgICBnYWxsZXJ5OiBbZ2lvY28xLmNvdmVyLCBpbWFnZUdhbGxlcnkxLCBpbWFnZUdhbGxlcnkyLCBpbWFnZUdhbGxlcnkzXSxcclxuICAgICAgICB0cmFkZUdhbWU6IGdpb2NvMSxcclxuICAgICAgICB3aXNoTGlzdDogW2dpb2NvMiwgZ2lvY28zLCBnaW9jbzRdLFxyXG4gICAgICAgIG91dGNvbWU6IFwiV0lQXCIsXHJcbiAgICAgICAgcHVibGljYXRpb25EYXRlOiBcIjI5LTAxLTIwMjNcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGluc2VydGlvbjI6IGluc2VydGlvbiA9IHtcclxuICAgICAgICBhcHByb3ZlZDogdHJ1ZSxcclxuICAgICAgICB0aXRsZTogXCJTY2FtYmlvIHBhY21hblwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlNjYW1iaW8gc3VwZXJtYXJpbyB4a8OoIG1pIHNvbm8gc2Vra2F0byBhIGdpb2NhcmNpXCIsXHJcbiAgICAgICAgcHVibGlzaGVyOiBwdWJsaXNoZXJHaW9jbzEsXHJcbiAgICAgICAgZ2FsbGVyeTogW2dpb2NvMi5jb3ZlciwgaW1hZ2VHYWxsZXJ5MiwgaW1hZ2VHYWxsZXJ5MiwgaW1hZ2VHYWxsZXJ5M10sXHJcbiAgICAgICAgdHJhZGVHYW1lOiBnaW9jbzIsXHJcbiAgICAgICAgd2lzaExpc3Q6IFtnaW9jbzIsIGdpb2NvMywgZ2lvY280XSxcclxuICAgICAgICBvdXRjb21lOiBcIldJUFwiLFxyXG4gICAgICAgIHB1YmxpY2F0aW9uRGF0ZTogXCIyOS0wMS0yMDIzXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbnNlcnRpb24zOiBpbnNlcnRpb24gPSB7XHJcbiAgICAgICAgYXBwcm92ZWQ6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IFwic2NhbWJpbyBjb2Rlc3RvXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiU2NhbWJpbyBzdXBlcm1hcmlvIHhrw6ggbWkgc29ubyBzZWtrYXRvIGEgZ2lvY2FyY2lcIixcclxuICAgICAgICBwdWJsaXNoZXI6IHB1Ymxpc2hlckdpb2NvMSxcclxuICAgICAgICBnYWxsZXJ5OiBbZ2lvY28zLmNvdmVyLCBpbWFnZUdhbGxlcnkzLCBpbWFnZUdhbGxlcnkyLCBpbWFnZUdhbGxlcnkzXSxcclxuICAgICAgICB0cmFkZUdhbWU6IGdpb2NvMyxcclxuICAgICAgICB3aXNoTGlzdDogW2dpb2NvMiwgZ2lvY28zLCBnaW9jbzRdLFxyXG4gICAgICAgIG91dGNvbWU6IFwiV0lQXCIsXHJcbiAgICAgICAgcHVibGljYXRpb25EYXRlOiBcIjI5LTAxLTIwMjNcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGluc2VydGlvbjQ6IGluc2VydGlvbiA9IHtcclxuICAgICAgICBhcHByb3ZlZDogdHJ1ZSxcclxuICAgICAgICB0aXRsZTogXCJTY2FtYmlvIHBpcG9sb1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlNjYW1iaW8gc3VwZXJtYXJpbyB4a8OoIG1pIHNvbm8gc2Vra2F0byBhIGdpb2NhcmNpXCIsXHJcbiAgICAgICAgcHVibGlzaGVyOiBwdWJsaXNoZXJHaW9jbzEsXHJcbiAgICAgICAgZ2FsbGVyeTogW2dpb2NvNC5jb3ZlciwgaW1hZ2VHYWxsZXJ5MSwgaW1hZ2VHYWxsZXJ5MiwgaW1hZ2VHYWxsZXJ5M10sXHJcbiAgICAgICAgdHJhZGVHYW1lOiBnaW9jbzQsXHJcbiAgICAgICAgd2lzaExpc3Q6IFtnaW9jbzIsIGdpb2NvMywgZ2lvY280XSxcclxuICAgICAgICBvdXRjb21lOiBcIldJUFwiLFxyXG4gICAgICAgIHB1YmxpY2F0aW9uRGF0ZTogXCIyOS0wMS0yMDIzXCJcclxuICAgIH1cclxuXHJcblxyXG4gICAgbGlzdC5wdXNoKGluc2VydGlvbjEpO1xyXG4gICAgbGlzdC5wdXNoKGluc2VydGlvbjIpO1xyXG4gICAgbGlzdC5wdXNoKGluc2VydGlvbjMpO1xyXG4gICAgbGlzdC5wdXNoKGluc2VydGlvbjQpO1xyXG5cclxuICAgIFxyXG4gICAgLypRVUVTVE8gRScgTEEgRlVOWklPTkUgR0lVU1RBIE5PTiBGQU1PIENIRSBTQkFHTElBVEUhICovXHJcblxyXG4gICAgLypGZXRjaCBhIGJhY2tlbmQgY29uIHR1dHRpIGdsaSBhbm51bmNpLCBhZ2dpb3JuYSBsYSBsaXN0YSBsaXN0Ki9cclxuICAgIC8vIGxpc3Q9W107XHJcbiAgICAvLyBmZXRjaCgnL1RpcG9Bbm51bmNpQ2hlbmVzbycpXHJcbiAgICAvLyAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC8vIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAvLyAgICAgZm9yKGxldCBkIG9mIGRhdGEpe1xyXG4gICAgLy8gICAgICAgICBsaXN0LnB1c2goZCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSG9tZSgpe1xyXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xyXG4gICAgbWFpbi5pbm5lckhUTUwgPSBob21lO1xyXG4gICBcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc2VydGlvbnNDYXJkXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGFubnVuY2k7XHJcbiAgICAgICAgY3JlYXRlUGFnZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc2VydENhcmRcIikub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MID0gY3JlYUFubnVuY2lvO1xyXG4gICAgICAgIGNyZWF0ZUluc2VydGlvblBhZ2UoKTtcclxuICAgIH07XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hCdXR0b25UaXRsZVwiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBrZXl3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hUaXRsZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIGlmKGtleXdvcmQudmFsdWUgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBhbm51bmNpO1xyXG4gICAgICAgICAgICBjcmVhdGVQYWdlKCk7XHJcbiAgICAgICAgICAgIHNlYXJjaEJ5VGl0bGUoa2V5d29yZC52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoVGl0bGVcIikub25rZXlkb3duID0gKGUpID0+IHtcclxuICAgICAgICBsZXQga2V5d29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoVGl0bGVcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICBpZihlLmtleSA9PSBcIkVudGVyXCIgJiYga2V5d29yZC52YWx1ZSE9IFwiXCIpe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MID0gYW5udW5jaTtcclxuICAgICAgICAgICAgY3JlYXRlUGFnZSgpO1xyXG4gICAgICAgICAgICBzZWFyY2hCeVRpdGxlKGtleXdvcmQudmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsSW5zZXJ0aW9ucygpO1xyXG4gICAgY3JlYXRlSXRlbUNhcm91c2VsKCk7XHJcblxyXG4gICAgXHJcblxyXG59IFxyXG4gICAgXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUl0ZW1DYXJvdXNlbCgpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBjYXJJbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbm5lckNhcm91c2VsSG9tZScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCA0ICYmIGkgPCBsaXN0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IGNsQ2Fyb3VzZWxJdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBpZihpID09IDApe1xyXG4gICAgICAgICAgICAgICAgY2xDYXJvdXNlbEl0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2Fyb3VzZWwtaXRlbSBhY3RpdmUnKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBjbENhcm91c2VsSXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJvdXNlbC1pdGVtJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBsaXN0W2ldLnRyYWRlR2FtZS5jb3Zlci5saW5rKTtcclxuICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW1nQ2FyZCcpO1xyXG4gICAgICAgICAgICBsZXQgY2xDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNsQ2FyZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQgdGV4dC1iZy1zZWNvbmRhcnknKTtcclxuICAgICAgICAgICAgY2xDYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCAnYW5uQ2FyZCcpO1xyXG4gICAgICAgICAgICBsZXQgY2FyQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjYXJCb2R5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZC1ib2R5Jyk7XHJcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcbiAgICAgICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZC10aXRsZScpO1xyXG4gICAgICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSBsaXN0W2ldLnRyYWRlR2FtZS5uYW1lO1xyXG4gICAgICAgICAgICBsZXQgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgZGVzYy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQtdGV4dCcpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RbaV0udHJhZGVHYW1lLmdlbnJlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBkZXNjLmlubmVySFRNTCArPSBsaXN0W2ldLnRyYWRlR2FtZS5nZW5yZVtpXS5nZW5yZSArIFwiIFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVzYy5pbm5lckhUTUwgKz0gXCI8YnI+XCJcclxuICAgICAgICAgICAgKyBcIkFubm86IFwiICsgbGlzdFtpXS50cmFkZUdhbWUueWVhciArIFwiIFwiXHJcbiAgICAgICAgICAgICsgXCJDb25zb2xlOiBcIiArIGxpc3RbaV0udHJhZGVHYW1lLmNvbnNvbGUuY29uc29sZSArIFwiPGJyPlwiXHJcbiAgICAgICAgICAgICtcIkRlc2NyaXppb25lOlwiO1xyXG4gICAgICAgICAgICBsZXQgZ29Bbm4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgIGdvQW5uLnNldEF0dHJpYnV0ZSgnaHJlZicsIFwiI1wiKTtcclxuICAgICAgICAgICAgZ29Bbm4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdidG4gYnRuLXByaW1hcnknKTtcclxuICAgICAgICAgICAgZ29Bbm4ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykuaW5uZXJIVE1MID0gYW5udW5jaW87XHJcbiAgICAgICAgICAgICAgICBleHBhbmRJbnNlcnRpb24obGlzdFtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZ29Bbm4uaW5uZXJIVE1MID0gJ1ZhaSBhbGwgYW5udW5jaW8nO1xyXG4gICAgXHJcbiAgICBcclxuICAgICAgICAgICAgY2FySW5uZXIuYXBwZW5kQ2hpbGQoY2xDYXJvdXNlbEl0KTtcclxuICAgICAgICAgICAgICAgICAgICBjbENhcm91c2VsSXQuYXBwZW5kQ2hpbGQoY2xDYXJkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xDYXJkLmFwcGVuZChpbWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbENhcmQuYXBwZW5kKGNhckJvZHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyQm9keS5hcHBlbmQodGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyQm9keS5hcHBlbmQoZGVzYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJCb2R5LmFwcGVuZChnb0Fubik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWU7XHJcblxyXG4vKlxyXG5hc3luYyBmdW5jdGlvbiBnZXR0aXRsZSh0aXRsZTogc3RyaW5nKTp7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKClcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuXHJcbn1cclxuKi8iLCJpbXBvcnQgbW9kYWwgZnJvbSAnLi9tb2RhbC5odG1sJ1xyXG5pbXBvcnQgbG9naW4gZnJvbSAnLi4vbG9naW4vbG9naW4uaHRtbCdcclxuaW1wb3J0IGxvZ2luRm9vdGVyIGZyb20gJy4uL2xvZ2luL2xvZ2luRm9vdGVyLmh0bWwnXHJcbmltcG9ydCByZWdpc3RyYXppb25lIGZyb20gJy4uL3JlZ2lzdHJhemlvbmUvcmVnaXN0cmF6aW9uZS5odG1sJ1xyXG5pbXBvcnQgcmVnRm9vdGVyIGZyb20gJy4uL3JlZ2lzdHJhemlvbmUvcmVnaXN0cmF6aW9uZUZvb3Rlci5odG1sJ1xyXG5pbXBvcnQgbG9nb3V0IGZyb20gJy4uL2xvZ291dC9sb2dvdXQuaHRtbCdcclxuaW1wb3J0IHByb2ZpbGUgZnJvbSAnLi4vcHJvZmlsb1V0ZW50ZS9wcm9maWxlLmh0bWwnXHJcbmltcG9ydCAqIGFzIG5hdiBmcm9tIFwiLi4vbmF2YmFyL25hdmJhclwiO1xyXG5pbXBvcnQgbG9nZ2VkIGZyb20gJy4uL2ludGVyZmFjZXMvbG9nZ2VkJ1xyXG5pbXBvcnQgY3JlYXRlSG9tZSBmcm9tICcuLi9ob21lL2hvbWUnXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNb2RhbCgpe1xyXG4gICAgbGV0IGRpdk1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRpdk1vZGFsLmlubmVySFRNTCA9IG1vZGFsO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIikuYXBwZW5kQ2hpbGQoZGl2TW9kYWwpO1xyXG4gICAgc2hvd0xvZ0luTW9kYWwoKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5cIikub25jbGljayA9IHNob3dMb2dJbk1vZGFsO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduT3V0QnV0dG9uXCIpLm9uY2xpY2sgPSBzaG93TG9nT3V0TW9kYWw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dTaWduVXBNb2RhbCgpe1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteU1vZGFsQm9keVwiKS5pbm5lckhUTUwgPSByZWdpc3RyYXppb25lO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteU1vZGFsRm9vdGVyXCIpLmlubmVySFRNTCA9IHJlZ0Zvb3RlcjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJ5dG9TaWduVXBcIikub25jbGljayA9IHRyeVRvU2lnblVwO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduVXBMb2dpblwiKS5vbmNsaWNrID0gc2hvd0xvZ0luTW9kYWw7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVTaWduVXBcIikub25rZXl1cCA9IHZhbGlkYXRlRm9ybTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VybmFtZVNpZ25VcFwiKS5vbmtleXVwID0gdmFsaWRhdGVGb3JtO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VybmFtZVNpZ25VcFwiKS5vbmtleXVwID0gdmFsaWRhdGVGb3JtO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFNpZ25VcFwiKS5vbmtleXVwID0gdmFsaWRhdGVGb3JtO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzd29yZFNpZ25VcFwiKS5vbmtleXVwID0gdmFsaWRhdGVGb3JtO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb25maXJtX3Bhc3N3b3JkU2lnblVwXCIpLm9ua2V5dXAgPSB2YWxpZGF0ZUZvcm07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dMb2dJbk1vZGFsKCl7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxCb2R5XCIpLmlubmVySFRNTCA9IGxvZ2luO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteU1vZGFsRm9vdGVyXCIpLmlubmVySFRNTCA9IGxvZ2luRm9vdGVyO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpblNpZ25VcFwiKS5vbmNsaWNrID0gc2hvd1NpZ25VcE1vZGFsO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cnlUb0xvZ1wiKS5vbmNsaWNrID0gdHJ5VG9Mb2dJbjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcm5hbWVTaWduSW5cIikub25rZXlkb3duID0gKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXkgPT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICB0cnlUb0xvZ0luKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzd29yZFNpZ25JblwiKS5vbmtleWRvd24gPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIHRyeVRvTG9nSW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNob3dMb2dPdXRNb2RhbCgpe1xyXG4gICAgbGV0IHJlc3VsdCA6IGJvb2xlYW49IGF3YWl0IHRyeVRvTG9nT3V0KCk7XHJcbiAgICBpZihyZXN1bHQpe1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbEJvZHlcIikuaW5uZXJIVE1MID0gbG9nb3V0O1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbEZvb3RlclwiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGNyZWF0ZUhvbWUoKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdHJ5VG9TaWduVXAoKSB7XHJcbiAgICBjb25zdCB1c2VyID0ge1xyXG4gICAgICAgIHVzZXJuYW1lOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VybmFtZVNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSAsXHJcbiAgICAgICAgcGFzc3dvcmQ6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLFxyXG4gICAgICAgIG5hbWU6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVTaWduVXBcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcbiAgICAgICAgc3VybmFtZTogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VybmFtZVNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSxcclxuICAgICAgICBlbWFpbDogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxTaWduVXBcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpXHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2goXCIvdXNlclwiLCByZXF1ZXN0KS50aGVuKChyZXNwb25zZSk9PnJlc3BvbnNlLmpzb24oKSkudGhlbigoZGF0YSk9PntcclxuICAgICAgICBpZihkYXRhKXtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduVXBSZXN1bHRcIikuaW5uZXJIVE1MPVwiUmVnaXN0cmF0byBjb24gc3VjY2Vzc28hXCI7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJ5dG9TaWduVXBcIikuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25VcFJlc3VsdFwiKS5pbm5lckhUTUw9XCJPcHMsIHF1YWxjb3NhIMOoIGFuZGF0byBzdG9ydG8hXCI7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJ5dG9TaWduVXBcIikucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxufVxyXG5cclxuZnVuY3Rpb24gdHJ5VG9Mb2dJbigpIHtcclxuICAgIGNvbnN0IGxvZ2luID0ge1xyXG4gICAgICAgIHVzZXJuYW1lOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VybmFtZVNpZ25JblwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSxcclxuICAgICAgICBwYXNzd29yZDogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmRTaWduSW5cIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXF1ZXN0ID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZScgOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGxvZ2luKVxyXG4gICAgfTtcclxuICAgIGxldCByZXN1bHQgOiBhbnkgPSBmZXRjaChcIi9sb2dpblwiLCByZXF1ZXN0KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKT0+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgaWYoZGF0YS5sb2dnZWQpe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luUmVzdWx0XCIpLmlubmVySFRNTD1cIkxvZ2dhdG8gY29uIHN1Y2Nlc3NvIVwiO1xyXG4gICAgICAgICAgICBuYXYuc2V0TmF2KGRhdGEuYWNjb3VudFR5cGUpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyeVRvTG9nXCIpLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpblNpZ25VcFwiKS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgIGNyZWF0ZUhvbWUoKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpblJlc3VsdFwiKS5pbm5lckhUTUw9XCJPcHMsIHF1YWxjb3NhIMOoIGFuZGF0byBzdG9ydG9cIjtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gdHJ5VG9Mb2dPdXQoKSA6UHJvbWlzZTxib29sZWFuPntcclxuICAgIGxldCBwcm9taXNlUmVzdWx0ID0gZmV0Y2goXCIvbG9nb3V0XCIpXHJcbiAgICAudGhlbigocmVzcG9uc2UpPT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigoZGF0YSk9PntcclxuICAgICAgICBpZihkYXRhKXtcclxuICAgICAgICAgICAgbmF2LnNldE5hdihcIkdVRVNUXCIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyeVRvTG9nXCIpLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luU2lnblVwXCIpLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YX0pO1xyXG4gICAgcmV0dXJuIHByb21pc2VSZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlRm9ybSgpe1xyXG4gICAgbGV0IHVzZXJuYW1lID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcm5hbWVTaWduVXBcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgO1xyXG4gICAgbGV0IHBhc3N3b3JkID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmRTaWduVXBcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICBsZXQgbmFtZSA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVTaWduVXBcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICBsZXQgc3VybmFtZSA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1cm5hbWVTaWduVXBcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICBsZXQgZW1haWwgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgIGxldCBjb25maXJtX3Bhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb25maXJtX3Bhc3N3b3JkU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBjb25maXJtX3Bhc3N3b3JkLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiXCIpO1xyXG4gICAgXHJcbiAgICBpZih1c2VybmFtZT09XCJcIiB8fCBwYXNzd29yZD09XCJcIiB8fG5hbWU9PVwiXCIgfHwgc3VybmFtZT09XCJcIiB8fCBlbWFpbD09XCJcIil7XHJcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJ5dG9TaWduVXBcIikgYXMgSFRNTElucHV0RWxlbWVudCApLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBpZiAocGFzc3dvcmQgIT0gY29uZmlybV9wYXNzd29yZC52YWx1ZSkge1xyXG4gICAgICAgICAgICBjb25maXJtX3Bhc3N3b3JkLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYm9yZGVyLWNvbG9yOiByZWQ7XCIpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjb25maXJtX3Bhc3N3b3JkLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYm9yZGVyLWNvbG9yOiBncmVlbjtcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgaWYgKHBhc3N3b3JkICE9IGNvbmZpcm1fcGFzc3dvcmQudmFsdWUpIHtcclxuICAgICAgICAgICAgY29uZmlybV9wYXNzd29yZC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJvcmRlci1jb2xvcjogcmVkO1wiKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uZmlybV9wYXNzd29yZC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJvcmRlci1jb2xvcjogZ3JlZW47XCIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyeXRvU2lnblVwXCIpLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1vZGFsOyIsImltcG9ydCBuYXYgZnJvbSBcIi4vbmF2YmFyLmh0bWxcIjtcclxuaW1wb3J0IGNyZWF0ZU1vZGFsIGZyb20gXCIuLi9tb2RhbC9tb2RhbFwiO1xyXG5pbXBvcnQgYW5udW5jaSBmcm9tIFwiLi4vYW5udW5jaS9hbm51bmNpLmh0bWxcIjtcclxuaW1wb3J0IGdlc3Rpb25lYW5udW5jaSBmcm9tIFwiLi4vYW5udW5jaS9nZXN0aW9uZWFubnVuY2kuaHRtbFwiO1xyXG5pbXBvcnQgY3JlYXRlUGFnZSBmcm9tIFwiLi4vYW5udW5jaS9hbm51bmNpXCI7XHJcbmltcG9ydCBob21lIGZyb20gXCIuLi9ob21lL2hvbWUuaHRtbFwiO1xyXG5pbXBvcnQgY3JlYXRlSXRlbUNhcm91c2VsIGZyb20gXCIuLi9ob21lL2hvbWVcIlxyXG5pbXBvcnQgY3JlYXRlSG9tZSBmcm9tIFwiLi4vaG9tZS9ob21lXCI7XHJcbmltcG9ydCBwcm9maWxlIGZyb20gXCIuLi9wcm9maWxvVXRlbnRlL3Byb2ZpbGUuaHRtbFwiO1xyXG5pbXBvcnQgc2hvd1Byb2ZpbGUgZnJvbSBcIi4uL3Byb2ZpbG9VdGVudGUvcHJvZmlsZVwiO1xyXG5pbXBvcnQgZ2VzdGlvbmVVdGVudGkgZnJvbSBcIi4uL2dlc3Rpb25lVXRlbnRpL2dlc3Rpb25lVXRlbnRpLmh0bWxcIjtcclxuaW1wb3J0IGdldEFsbFVzZXJzIGZyb20gXCIuLi9nZXN0aW9uZVV0ZW50aS9nZXN0aW9uZVV0ZW50aVwiO1xyXG5pbXBvcnQgY3JlYXRlUGFnZTIgZnJvbSBcIi4uL2FubnVuY2kvZ2VzdGlvbmVhbm51bmNpXCI7XHJcbmltcG9ydCBjcmVhQW5udW5jaW8gZnJvbSBcIi4uL2NyZWFBbm51bmNpby9jcmVhQW5udW5jaW8uaHRtbFwiXHJcbmltcG9ydCB2aWRlb2dpb2NoaSBmcm9tIFwiLi4vdmlkZW9naW9jaGkvdmlkZW9naW9jaGkuaHRtbFwiXHJcbmltcG9ydCBjcmVhdGVJbnNlcnRpb25QYWdlIGZyb20gXCIuLi9jcmVhQW5udW5jaW8vY3JlYUFubnVuY2lvXCJcclxuaW1wb3J0IGNyZWF0ZUdhbWVQYWdlIGZyb20gXCIuLi92aWRlb2dpb2NoaS92aWRlb2dpb2NoaVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcclxuICAgIFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIikuaW5uZXJIVE1MID0gbmF2O1xyXG4gICAgY3JlYXRlTW9kYWwoKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nb1wiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGNyZWF0ZUhvbWUoKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZXNcIikub25jbGljaz0oKT0+e1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MPXZpZGVvZ2lvY2hpOyBcclxuICAgICAgY3JlYXRlR2FtZVBhZ2UoKTsgXHJcbiAgICB9O1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zZXJ0aW9uc1wiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBhbm51bmNpO1xyXG4gICAgICAgIGNyZWF0ZVBhZ2UoKTtcclxuICAgIH07XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEluc2VydGlvblwiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBjcmVhQW5udW5jaW87XHJcbiAgICAgICAgY3JlYXRlSW5zZXJ0aW9uUGFnZSgpO1xyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zTWFuYWdlbWVudFwiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBnZXN0aW9uZWFubnVuY2k7XHJcbiAgICAgICAgY3JlYXRlUGFnZTIoKTtcclxuICAgIH07XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hbmFnZW1lbnRcIikub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MID0gZ2VzdGlvbmVVdGVudGk7XHJcbiAgICAgICAgZ2V0QWxsVXNlcnMoKTtcclxuICAgIH07XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2ZpbGVcIikub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MID0gcHJvZmlsZTtcclxuICAgICAgICBzaG93UHJvZmlsZSgpO1xyXG4gICAgfTtcclxuICAgIGZldGNoKFwiL3dob0lzTG9nZ2VkXCIpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKT0+e1xyXG4gICAgICAgIHNldE5hdihkYXRhKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXROYXYoYWNjb3VudFR5cGUgOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGJ0bl9nZXN0VXRlbnRpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYW5hZ2VtZW50XCIpO1xyXG4gICAgY29uc3QgYnRuX2luc01hbmFnZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc01hbmFnZW1lbnRcIik7XHJcbiAgICBjb25zdCBidG5fbG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luXCIpO1xyXG4gICAgY29uc3QgYnRuX3NpZ25PdXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25PdXRCdXR0b25cIik7XHJcbiAgICBjb25zdCBidG5fYWRkSW5zZXJ0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRJbnNlcnRpb25cIik7XHJcbiAgICBjb25zdCBidXR0b25fcHJvZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZmlsZVwiKTtcclxuICAgIGlmKGFjY291bnRUeXBlPT1cIkFETUlOXCIpe1xyXG4gICAgICAgIGJ0bl9nZXN0VXRlbnRpLnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKTtcclxuICAgICAgICBidG5fYWRkSW5zZXJ0aW9uLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgYnRuX2luc01hbmFnZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGJ0bl9sb2dpbi5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIGJ0bl9zaWduT3V0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKTtcclxuICAgICAgICBidXR0b25fcHJvZmlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIilcclxuICAgIH1lbHNlIGlmKGFjY291bnRUeXBlPT1cIlVTRVJcIil7XHJcbiAgICAgICAgYnRuX2dlc3RVdGVudGkuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICBidG5fYWRkSW5zZXJ0aW9uLnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKTtcclxuICAgICAgICBidG5faW5zTWFuYWdlbWVudC5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIGJ0bl9sb2dpbi5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIGJ0bl9zaWduT3V0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKTtcclxuICAgICAgICBidXR0b25fcHJvZmlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIilcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGJ0bl9nZXN0VXRlbnRpLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgYnRuX2FkZEluc2VydGlvbi5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIGJ0bl9pbnNNYW5hZ2VtZW50LnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgYnRuX2xvZ2luLnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKTtcclxuICAgICAgICBidG5fc2lnbk91dEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIGJ1dHRvbl9wcm9maWxlLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTmF2O1xyXG4iLCJpbXBvcnQgcHJvZmlsZSBmcm9tICcuL3Byb2ZpbGUuaHRtbCdcclxuXHJcblxyXG5sZXQgdHlwZTtcclxubGV0IHVzZXJJbmZvO1xyXG5sZXQgYWRtaW5JbmZvO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dQcm9maWxlKCl7ICAgXHJcbiAgICBmZXRjaChcIi93aG9Jc0xvZ2dlZFwiKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhID09IFwiQURNSU5cIikge1xyXG4gICAgICAgICAgICB0eXBlID0gXCJBRE1JTlwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YSA9PSBcIlVTRVJcIikge1xyXG4gICAgICAgICAgICB0eXBlID0gXCJVU0VSXCJcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0eXBlID0gXCJHVUVTVFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcclxuICAgICAgICBtYWluLmlubmVySFRNTCA9IHByb2ZpbGU7XHJcbiAgICAgICAgY3JlYXRlUHJvZmlsZSh0eXBlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNpYW8gZGEgc2hvd1wiKVxyXG4gICAgfSlcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2ZpbGUodHlwZTpzdHJpbmcpe1xyXG5cclxuICAgIGlmICh0eXBlID09IFwiQURNSU5cIikge1xyXG4gICAgICAgIHNob3dBZG1pblByb2ZpbGUoKTtcclxuXHJcbiAgICB9IGVsc2UgaWYodHlwZSA9PSBcIlVTRVJcIikge1xyXG4gICAgICAgIHNob3dVc2VyUHJvZmlsZSgpO1xyXG4gICAgfWVsc2V7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0FkbWluUHJvZmlsZSgpe1xyXG5cclxuICAgIGZldGNoKFwiL2FkbWluSW5mb1wiKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIGFkbWluSW5mbz1kYXRhO1xyXG4gICAgICAgIGxldCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlcHJvZmlsZVwiKTtcclxuICAgICAgICBoMS5pbm5lckhUTUw9XCJCRU5UT1JOQVRPIEFNTUlOSVNUUkFUT1JFIFwiK2FkbWluSW5mby51c2VybmFtZTtcclxuICAgICAgICB0aXRsZS5hcHBlbmQoaDEpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2R5cHJvZmlsZVwiKTtcclxuICAgICAgICBsZXQgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICAgICAgaDIuaW5uZXJIVE1MPVxyXG4gICAgICAgICBcIiA8YnI+PGJyPjxicj4gPGI+PC9iPlwiK2FkbWluSW5mby51c2VybmFtZSBcclxuICAgICAgICArIFwiIDxicj48YnI+IDxiPjwvYj5cIithZG1pbkluZm8uZW1haWwgXHJcbiAgICAgICAgKyBcIiA8YnI+PGJyPiA8Yj48L2I+XCIrYWRtaW5JbmZvLm5hbWVcclxuICAgICAgICArIFwiIDxicj48YnI+IDxiPjwvYj5cIithZG1pbkluZm8uc3VybmFtZVxyXG4gICAgICAgIGJvZHkuYXBwZW5kKGgyKVxyXG5cclxuICAgICAgICBsZXQgYnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9ucy1wcm9maWxlXCIpO1xyXG4gICAgICAgIGxldCBidG4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBidG4xLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJidG4gYnRuLXByaW1hcnkgbXktMVwiKTtcclxuICAgICAgICBidG4xLm9uY2xpY2s9KCk9PntcclxuICAgICAgICAgICAgbGV0IG9iaiA9IHtcclxuICAgICAgICAgICAgICAgICd1c2VybmFtZScgOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VybmFtZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICdlbWFpbCcgOiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCByZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9iailcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZmV0Y2goXCIvYWRtaW4vaW5mb1wiLCByZXF1ZXN0KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpPT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKT0+IFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJuYW1lXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlPVwiXCI7XHJcbiAgICAgICAgICAgICAgICBzaG93UHJvZmlsZSgpXHJcbiAgICAgICAgICAgIH0pICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ0bjEuaW5uZXJIVE1MPVwiQ2FtYmlhIFVzZXJuYW1lXCJcclxuICAgICAgICBidXR0b25zLmFwcGVuZChidG4xKVxyXG5cclxuICAgICAgICBsZXQgYnV0dG9uRW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbnMtcHJvZmlsZVwiKTtcclxuICAgICAgICBsZXQgYnRuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnRuMi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwiYnRuIGJ0bi1wcmltYXJ5ICAgbXktNFwiKTtcclxuICAgICAgICBidG4yLm9uY2xpY2s9KCk9PntcclxuICAgICAgICAgICAgbGV0IG9iaiA9IHtcclxuICAgICAgICAgICAgICAgICd1c2VybmFtZScgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgJ2VtYWlsJyA6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCByZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9iailcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZmV0Y2goXCIvYWRtaW4vaW5mb1wiLCByZXF1ZXN0KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpPT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKT0+IFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlPVwiXCI7XHJcbiAgICAgICAgICAgICAgICBzaG93UHJvZmlsZSgpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgYnRuMi5pbm5lckhUTUw9XCJDYW1iaWEgRW1haWxcIlxyXG4gICAgICAgIGJ1dHRvbnMuYXBwZW5kKGJ0bjIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBjcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3BcIik7XHJcbiAgICAgICAgbGV0IGJ0bjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ0bjMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG4gYnRuLXByaW1hcnlcIilcclxuICAgICAgICBidG4zLmlubmVySFRNTD1cIkNhbWJpYSBQYXNzd29yZFwiXHJcbiAgICAgICAgYnRuMy5vbmNsaWNrPSAoKT0+e1xyXG4gICAgICAgICAgICBsZXQgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgJ29sZFBhc3N3b3JkJyA6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9sZFBhc3N3b3JkXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgJ25ld1Bhc3N3b3JkJyA6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Bhc3N3b3JkXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCByZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9iailcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZmV0Y2goXCIvYWRtaW4vcHN3XCIsIHJlcXVlc3QpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSk9PnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpPT4gXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2xkUGFzc3dvcmRcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU9XCJcIjsgICAgICBcclxuICAgICAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Bhc3N3b3JkXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlPVwiXCI7ICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY3AuYXBwZW5kKGJ0bjMpO1xyXG5cclxuICAgIH0pXHJcbiAgIFxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93VXNlclByb2ZpbGUoKXtcclxuICAgIGZldGNoKFwiL3VzZXJJbmZvXCIpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgdXNlckluZm89ZGF0YTtcclxuICAgICAgICBsZXQgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZXByb2ZpbGVcIik7XHJcbiAgICAgICAgaDEuaW5uZXJIVE1MPVwiQkVOVE9STkFUTyBVVEVOVEUgXCIrIHVzZXJJbmZvLnVzZXJuYW1lO1xyXG4gICAgICAgIHRpdGxlLmFwcGVuZChoMSk7XHJcbiAgICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHlwcm9maWxlXCIpO1xyXG4gICAgICAgIGxldCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICBoMi5pbm5lckhUTUw9XHJcbiAgICAgICAgXCIgPGJyPjxicj48YnI+IDxiPjwvYj5cIit1c2VySW5mby51c2VybmFtZSBcclxuICAgICAgICArIFwiIDxicj48YnI+IDxiPjwvYj5cIit1c2VySW5mby5lbWFpbCBcclxuICAgICAgICArIFwiIDxicj48YnI+PGI+PC9iPlwiK3VzZXJJbmZvLm5hbWVcclxuICAgICAgICArIFwiIDxicj48YnI+IDxiPjwvYj5cIit1c2VySW5mby5zdXJuYW1lXHJcbiAgICAgICAgYm9keS5hcHBlbmQoaDIpXHJcblxyXG4gICAgICAgIGxldCBidXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b25zLXByb2ZpbGVcIik7XHJcbiAgICAgICAgbGV0IGJ0bjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ0bjEuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcImJ0biBidG4tcHJpbWFyeSBteS0xXCIpO1xyXG4gICAgICAgIGJ0bjEub25jbGljaz0oKT0+e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IG9iaiA9IHtcclxuICAgICAgICAgICAgICAgICd1c2VybmFtZScgOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VybmFtZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICdlbWFpbCcgOiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCByZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9iailcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZmV0Y2goXCIvdXNlci9pbmZvXCIsIHJlcXVlc3QpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSk9PnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpPT4gXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcm5hbWVcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU9XCJcIjtcclxuICAgICAgICAgICAgICAgIHNob3dQcm9maWxlKClcclxuICAgICAgICAgICAgfSkgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnRuMS5pbm5lckhUTUw9XCJDYW1iaWEgVXNlcm5hbWVcIlxyXG4gICAgICAgIGJ1dHRvbnMuYXBwZW5kKGJ0bjEpXHJcblxyXG4gICAgICAgIGxldCBidXR0b25FbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9ucy1wcm9maWxlXCIpO1xyXG4gICAgICAgIGxldCBidG4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBidG4yLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJidG4gYnRuLXByaW1hcnkgICBteS00XCIpO1xyXG4gICAgICAgIGJ0bjIub25jbGljaz0oKT0+e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IG9iaiA9IHtcclxuICAgICAgICAgICAgICAgICd1c2VybmFtZScgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgJ2VtYWlsJyA6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCByZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9iailcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZmV0Y2goXCIvdXNlci9pbmZvXCIsIHJlcXVlc3QpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSk9PnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpPT4gXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU9XCJcIjtcclxuICAgICAgICAgICAgICAgICBzaG93UHJvZmlsZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBidG4yLmlubmVySFRNTD1cIkNhbWJpYSBFbWFpbFwiXHJcbiAgICAgICAgYnV0dG9ucy5hcHBlbmQoYnRuMik7XHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG4gICBcclxuICAgIGxldCBjcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3BcIik7XHJcbiAgICBsZXQgYnRuMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBidG4zLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnRuIGJ0bi1wcmltYXJ5XCIpXHJcbiAgICBidG4zLmlubmVySFRNTD1cIkNhbWJpYSBQYXNzd29yZFwiXHJcbiAgICBidG4zLm9uY2xpY2s9ICgpPT57XHJcbiAgICAgICAgbGV0IG9iaiA9IHtcclxuICAgICAgICAgICAgJ29sZFBhc3N3b3JkJyA6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9sZFBhc3N3b3JkXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLFxyXG4gICAgICAgICAgICAnbmV3UGFzc3dvcmQnIDogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UGFzc3dvcmRcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9iailcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZldGNoKFwiL3VzZXIvcHN3XCIsIHJlcXVlc3QpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKT0+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKT0+IFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9sZFBhc3N3b3JkXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlPVwiXCI7ICAgICAgXHJcbiAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Bhc3N3b3JkXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlPVwiXCI7ICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjcC5hcHBlbmQoYnRuMyk7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNob3dQcm9maWxlOyIsImltcG9ydCBjcmVhVmlkZW9naW9jbyBmcm9tIFwiLi9jcmVhVmlkZW9naW9jby5odG1sXCJcclxuXHJcbmxldCByYWRpbzogc3RyaW5nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZpZGVvR2FtZVBhZ2UoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MID0gY3JlYVZpZGVvZ2lvY287XHJcbiAgICBnZW5lcmF0ZUdlbnJlTGlzdCgpO1xyXG4gICAgZ2VuZXJhdGVDb25zb2xlTGlzdCgpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdHZW5yZUJ0blwiKS5vbmNsaWNrID0gY3JlYXRlR2VucmU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0NvbnNvbGVCdG5cIikub25jbGljayA9IGNyZWF0ZUNvbnNvbGU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1ZpZGVvR2FtZUJ0blwiKS5vbmNsaWNrID0gY3JlYXRlVmlkZW9HYW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUdlbnJlTGlzdCgpIHtcclxuICAgIGxldCBnZW5yZUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdlbnJlTGlzdFwiKTtcclxuICAgIGdlbnJlTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgZmV0Y2goXCIvZ2VucmVcIilcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBib2xkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJcIik7XHJcbiAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCIpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJnZW5yZVwiK2kpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb3JtLWNoZWNrLWlucHV0XCIpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgZGF0YVtpXS5nZW5yZSk7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm0tY2hlY2stbGFiZWxcIik7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJnZW5yZVwiK2kpO1xyXG4gICAgICAgICAgICAgICAgYm9sZC5pbm5lckhUTUw9XCJcIitkYXRhW2ldLmdlbnJlO1xyXG4gICAgICAgICAgICAgICAgbGFiZWwuYXBwZW5kKGJvbGQpO1xyXG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZChpbnB1dCwgbGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGxldCBzbmlwcGV0ID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dCBnZW5yZXNjaGVja1wiIHR5cGU9XCJjaGVja2JveFwiIGlkPVwiZ2VucmUke2l9XCIgdmFsdWU9XCIke2RhdGFbaV0uZ2VucmV9XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiZ2VucmUke2l9XCI+PGI+JHtkYXRhW2ldLmdlbnJlfTwvYj48L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgICAgICAgICBnZW5yZUxpc3QuaW5uZXJIVE1MICs9IHNuaXBwZXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbnNvbGVMaXN0KCkge1xyXG4gICAgbGV0IGNvbnNvbGVMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb25zb2xlTGlzdFwiKTtcclxuICAgIGNvbnNvbGVMaXN0LmlubmVySFRNTCA9IFwiPGJyPjxicj5cIjtcclxuICAgIGZldGNoKFwiL2NvbnNvbGVcIilcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBib2xkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnNvbGVcIiArIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJjb25zb2xlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybS1jaGVjay1pbnB1dFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgZGF0YVtpXS5jb25zb2xlKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5vbmNsaWNrID0gKCk9Pnsgc2V0UmFkaW8oZGF0YVtpXS5jb25zb2xlKX07XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb3JtLWNoZWNrLWxhYmVsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImNvbnNvbGVcIiArIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvbGQuaW5uZXJIVE1MID0gXCJcIiArIGRhdGFbaV0uY29uc29sZTtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5hcHBlbmQoYm9sZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2LmFwcGVuZChpbnB1dCwgbGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGVMaXN0LmFwcGVuZChkaXYpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpcnN0U25pcHBldD1gXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJyYWRpb1wiIGlkPVwiY29uc29sZSR7aX1cIiBuYW1lPVwiY29uc29sZVwiIHZhbHVlPVwiJHtkYXRhW2ldLmNvbnNvbGV9XCIgb25jbGljaz1cIigpPT57IHNldFJhZGlvKCR7ZGF0YVtpXS5jb25zb2xlfSl9XCIgY2hlY2tlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImNvbnNvbGUke2l9XCI+PGI+JHtkYXRhW2ldLmNvbnNvbGV9PC9iPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGVMaXN0LmlubmVySFRNTCArPSBmaXJzdFNuaXBwZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYm9sZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb25zb2xlXCIgKyBpKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiY29uc29sZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm0tY2hlY2staW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGRhdGFbaV0uY29uc29sZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQub25jbGljayA9ICgpPT57IHNldFJhZGlvKGRhdGFbaV0uY29uc29sZSl9O1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybS1jaGVjay1sYWJlbFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJjb25zb2xlXCIgKyBpKTtcclxuICAgICAgICAgICAgICAgICAgICBib2xkLmlubmVySFRNTCA9IFwiXCIgKyBkYXRhW2ldLmNvbnNvbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuYXBwZW5kKGJvbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdi5hcHBlbmQoaW5wdXQsIGxhYmVsKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlTGlzdC5hcHBlbmQoZGl2KTtcclxuICAgICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNuaXBwZXQgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJyYWRpb1wiIGlkPVwiY29uc29sZSR7aX1cIiBuYW1lPVwiY29uc29sZVwiIHZhbHVlPVwiJHtkYXRhW2ldLmNvbnNvbGV9XCIgb25jbGljaz1cIigpPT57IHNldFJhZGlvKCR7ZGF0YVtpXS5jb25zb2xlfSl9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJjb25zb2xlJHtpfVwiPjxiPiR7ZGF0YVtpXS5jb25zb2xlfTwvYj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlTGlzdC5pbm5lckhUTUwgKz0gc25pcHBldDtcclxuICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlR2VucmUoKSB7XHJcbiAgICBsZXQgbmV3R2VucmUgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdHZW5yZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgIGxldCByZXF1ZXN0ID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld0dlbnJlKVxyXG4gICAgfVxyXG4gICAgZmV0Y2goXCIvZ2VucmVcIiwgcmVxdWVzdClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3R2VucmVcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVHZW5yZUxpc3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb25zb2xlKCkge1xyXG4gICAgbGV0IG5ld0NvbnNvbGUgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdDb25zb2xlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgbGV0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3Q29uc29sZSlcclxuICAgIH1cclxuICAgIGZldGNoKFwiL2NvbnNvbGVcIiwgcmVxdWVzdClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3Q29uc29sZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZUNvbnNvbGVMaXN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVWaWRlb0dhbWUoKSB7XHJcblxyXG4gICAgbGV0IGdlbnJlcyA9IChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZ2VucmVzY2hlY2tcIikgYXMgSFRNTENvbGxlY3Rpb25PZjxIVE1MSW5wdXRFbGVtZW50Pik7XHJcbiAgICBsZXQgY2hlY2tlZEdlbnJlcyAgPSBbXTtcclxuICAgIGZvciAobGV0IGdlbnJlIG9mIGdlbnJlcykge1xyXG4gICAgICAgIGlmIChnZW5yZS5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIGNoZWNrZWRHZW5yZXMucHVzaChnZW5yZS52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBuZXdWaWRlb2dhbWUgPSB7XHJcbiAgICAgICAgbmFtZTogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiVkduYW1lXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLFxyXG4gICAgICAgIGdlbnJlOiBjaGVja2VkR2VucmVzLFxyXG4gICAgICAgIHllYXI6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlZHeWVhclwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSxcclxuICAgICAgICBjb25zb2xlOiByYWRpbyxcclxuICAgICAgICBjb3ZlcjogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiVkdjb3ZlclwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgcmVxdWVzdCA9IHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdWaWRlb2dhbWUpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZldGNoKFwiL3ZpZGVvZ2FtZXNcIiwgcmVxdWVzdClcclxuICAgIC50aGVuKChyZXNwb25zZSk9PnJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKT0+e1xyXG4gICAgICAgIGlmKGRhdGEpe1xyXG4gICAgICAgICAgICBhbGVydChcInZpZGVvZ2lvY28gaW5zZXJpdG9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIFxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRSYWRpbyh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICByYWRpbyA9IHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVWaWRlb0dhbWVQYWdlXHJcblxyXG5cclxuIiwiaW1wb3J0IHsgZGF0YSB9IGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IGdlbnJlIGZyb20gXCIuLi9pbnRlcmZhY2VzL2dlbnJlXCI7XHJcbmltcG9ydCB2aWRlb2dhbWUgZnJvbSBcIi4uL2ludGVyZmFjZXMvdmlkZW9nYW1lXCI7XHJcbmltcG9ydCBjcmVhdGVWaWRlb0dhbWVQYWdlIGZyb20gXCIuL2NyZWFWaWRlb2dpb2NoaVwiO1xyXG5pbXBvcnQgY3JlYXRlR2FtZVZpc3VhbGl6YXRpb24gZnJvbSBcIi4vdmlzdWFsaXp6YVZpZGVvZ2lvY29cIlxyXG5cclxubGV0IGdhbWVMaXN0OiB2aWRlb2dhbWVbXSA9IFtdO1xyXG5sZXQgZ2FtZUZpbHRlcmVkTGlzdDogdmlkZW9nYW1lW10gPSBbXVxyXG5sZXQgZ2VucmVzOiBzdHJpbmdbXSA9IFtdXHJcbmxldCB5ZWFyczogbnVtYmVyW10gPSBbXVxyXG5sZXQgZ2FtZVZpZXc6IG51bWJlciA9IDY7XHJcbmxldCB0eXBlOiBzdHJpbmc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR2FtZVBhZ2UoKSB7XHJcbiAgICBmZXRjaChcIi93aG9Jc0xvZ2dlZFwiKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhID09IFwiQURNSU5cIikge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRWaWRlb2dhbWVcIikucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRWaWRlb2dhbWVcIikub25jbGljayA9IGNyZWF0ZVZpZGVvR2FtZVBhZ2U7XHJcbiAgICAgICAgICAgICAgICB0eXBlID0gXCJBRE1JTlwiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEgPT0gXCJVU0VSXCIpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVmlkZW9nYW1lXCIpLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgICAgICB0eXBlID0gXCJVU0VSXCJcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVmlkZW9nYW1lXCIpLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgICAgICB0eXBlID0gXCJHVUVTVFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmV0Y2goXCIvdmlkZW9nYW1lc1wiKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiAocmVzcG9uc2UuanNvbigpKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUxpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBnYW1lIG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZUxpc3QucHVzaChnYW1lKTsgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUdhbWVQYWdpbmF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0dhbWVzKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFzc2lnbkdhbWVGaWx0ZXJzKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0QWxsR2FtZXMoKSB7XHJcblxyXG4gICAgZmV0Y2goXCIvdmlkZW9nYW1lc1wiKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gKHJlc3BvbnNlLmpzb24oKSkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgZ2FtZUxpc3QgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgZ2FtZSBvZiBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBnYW1lTGlzdC5wdXNoKGdhbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzaG93R2FtZXMoaTogbnVtYmVyKSB7XHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiVmlkZW9nYW1lQ29udGVudFwiKTtcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGxldCBzdGFydCA9IChpIC0gMSkgKiBnYW1lVmlldztcclxuICAgIGxldCBzdG9wID0gKGkgKiBnYW1lVmlldykgLSAxO1xyXG4gICAgZm9yIChzdGFydDsgc3RhcnQgPD0gc3RvcDsgc3RhcnQrKykge1xyXG4gICAgICAgIGlmIChzdGFydCA+PSBnYW1lTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIGNvbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbC00IHRleHQtY2VudGVyXCIpO1xyXG4gICAgICAgIGNvbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKVwiKTtcclxuICAgICAgICBjb2wub25tb3VzZW92ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29sLm9ubW91c2VvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKVwiKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgbGV0IGdhbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgICAgICBnYW1lVGl0bGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJteS00XCIpXHJcbiAgICAgICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBpbWFnZS5zcmMgPSBnYW1lTGlzdFtzdGFydF0uY292ZXIubGluaztcclxuICAgICAgICBpbWFnZS53aWR0aCA9IDIwMDtcclxuICAgICAgICBpbWFnZS5oZWlnaHQgPSAyMDA7XHJcbiAgICAgICAgbGV0IGdhbWUgPSBnYW1lTGlzdFtzdGFydF1cclxuICAgICAgICBpbWFnZS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjcmVhdGVHYW1lVmlzdWFsaXphdGlvbihnYW1lKVxyXG4gICAgICAgIH1cclxuICAgICAgICBnYW1lVGl0bGUuaW5uZXJIVE1MID0gXCI8Yj5cIiArIGdhbWVMaXN0W3N0YXJ0XS5uYW1lICsgXCI8L2I+XCI7XHJcblxyXG4gICAgICAgIGNvbC5hcHBlbmQoZ2FtZVRpdGxlLCBpbWFnZSk7XHJcbiAgICAgICAgbGV0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgbGV0IGlkID0gZ2FtZUxpc3Rbc3RhcnRdLmlkXHJcbiAgICAgICAgaWYgKHR5cGUgPT0gXCJVU0VSXCIpIHtcclxuICAgICAgICAgICAgYWRkQnV0dG9uLmlubmVySFRNTCA9IFwiQWdnaXVuZ2kgYWxsYSB0dWEgTGlzdGEhXCJcclxuICAgICAgICAgICAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibXktM1wiKVxyXG4gICAgICAgICAgICBhZGRCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBmZXRjaChcIi91c2VyL2dhbWUvXCIgKyBpZClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IChyZXNwb25zZS5qc29uKCkpKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIlZpZGVvZ2lvY28gYWdnaXVudG8hXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJQb3NzaWVkaSBnacOgIHF1ZXN0byBnaXVvY28hXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29sLmFwcGVuZChhZGRCdXR0b24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb250ZW50LmFwcGVuZChjb2wpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlR2FtZVBhZ2luYXRpb24oKSB7XHJcbiAgICBsZXQgc2l6ZTogbnVtYmVyID0gZ2FtZUxpc3QubGVuZ3RoXHJcbiAgICBsZXQgdGFiczogbnVtYmVyID0gTWF0aC5jZWlsKHNpemUgLyBnYW1lVmlldyk7XHJcbiAgICBsZXQgcGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VzVlwiKTtcclxuICAgIHBhZ2VzLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0YWJzOyBpKyspIHtcclxuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgaWYgKGkgPT0gMSkge1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbSBhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiLCBcInBhZ2VcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWl0ZW1cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtbGlua1wiKTtcclxuICAgICAgICBidG4ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGFsbExpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlc1ZcIikuY2hpbGRyZW47XHJcbiAgICAgICAgICAgIGZvciAobGV0IG9uZUxpIG9mIGFsbExpKSB7XHJcbiAgICAgICAgICAgICAgICBvbmVMaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbVwiKTtcclxuICAgICAgICAgICAgICAgIG9uZUxpLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbSBhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiLCBcInBhZ2VcIik7XHJcbiAgICAgICAgICAgIHNob3dHYW1lcyhpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGJ0bi5pbm5lckhUTUwgPSBcIlwiICsgKGkpO1xyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgICAgICAgcGFnZXMuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2V0QWxsR2VucmVzKCkge1xyXG4gICAgO1xyXG4gICAgZ2VucmVzID0gW11cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdhbWVMaXN0W2ldLmdlbnJlLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmICghKGdlbnJlcy5pbmNsdWRlcyhnYW1lTGlzdFtpXS5nZW5yZVtqXS5nZW5yZSkpKSB7XHJcbiAgICAgICAgICAgICAgICBnZW5yZXMucHVzaChnYW1lTGlzdFtpXS5nZW5yZVtqXS5nZW5yZSlcclxuICAgICAgICAgICAgICAgIGxldCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZUdlbnJlc1wiKTtcclxuICAgICAgICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICAgICAgICAgIGxpLmlkID0gZ2FtZUxpc3RbaV0uZ2VucmVbal0uZ2VucmU7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRyb3Bkb3duLWl0ZW1cIik7XHJcbiAgICAgICAgICAgICAgICBidG4uaW5uZXJIVE1MID0gZ2FtZUxpc3RbaV0uZ2VucmVbal0uZ2VucmU7XHJcbiAgICAgICAgICAgICAgICBidG4ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hCeUdhbWVHZW5yZShsaS5pZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB1bC5hcHBlbmQobGkpO1xyXG4gICAgICAgICAgICAgICAgbGkuYXBwZW5kKGJ0bik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZXRBbGxZZWFycygpIHtcclxuICAgIHllYXJzID0gW11cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoISh5ZWFycy5pbmNsdWRlcyhnYW1lTGlzdFtpXS55ZWFyKSkpIHtcclxuICAgICAgICAgICAgeWVhcnMucHVzaChnYW1lTGlzdFtpXS55ZWFyKVxyXG4gICAgICAgICAgICBsZXQgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVZZWFyc1wiKTtcclxuICAgICAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgICAgICBsaS5pZCA9IFwiXCIgKyBnYW1lTGlzdFtpXS55ZWFyO1xyXG4gICAgICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZHJvcGRvd24taXRlbVwiKTtcclxuICAgICAgICAgICAgYnRuLmlubmVySFRNTCA9IFwiXCIgKyBnYW1lTGlzdFtpXS55ZWFyO1xyXG4gICAgICAgICAgICBidG4ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaEJ5R2FtZVllYXIoTnVtYmVyKGxpLmlkKSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdWwuYXBwZW5kKGxpKTtcclxuICAgICAgICAgICAgbGkuYXBwZW5kKGJ0bik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2VhcmNoQnlBbGxHYW1lcygpIHsgICAgICAgICAgICAgLypMYSBmdW56aW9uYSBkZWwgYm90dG9uZSBjaGUgY2VyY2EgdHV0dGkgZ2xpIGFubnVuY2kgc2VuemEgZmlsdHJpKi9cclxuICAgIGdldEFsbEdhbWVzKCk7XHJcbiAgICBjcmVhdGVHYW1lUGFnaW5hdGlvbigpO1xyXG4gICAgc2hvd0dhbWVzKDEpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2VhcmNoQnlHYW1lVGl0bGUodGl0bGU6IHN0cmluZykge1xyXG4gICAgZ2FtZUZpbHRlcmVkTGlzdCA9IFtdXHJcbiAgICBmb3IgKGxldCBlbGVtZW50IG9mIGdhbWVMaXN0KSB7XHJcbiAgICAgICAgbGV0IGdhbWVOYW1lID0gZWxlbWVudC5uYW1lXHJcbiAgICAgICAgaWYgKChnYW1lTmFtZS50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKHRpdGxlLnRvVXBwZXJDYXNlKCkpKSkge1xyXG4gICAgICAgICAgICBnYW1lRmlsdGVyZWRMaXN0LnB1c2goZWxlbWVudClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnYW1lTGlzdCA9IFtdO1xyXG4gICAgZ2FtZUxpc3QgPSBnYW1lRmlsdGVyZWRMaXN0XHJcbiAgICBjcmVhdGVHYW1lUGFnaW5hdGlvbigpO1xyXG4gICAgc2hvd0dhbWVzKDEpO1xyXG4gICAgZ2V0QWxsR2FtZXMoKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNlYXJjaEJ5R2FtZUdlbnJlKGdlbnJlOiBTdHJpbmcpIHtcclxuICAgIGdhbWVGaWx0ZXJlZExpc3QgPSBbXVxyXG4gICAgZm9yIChsZXQgZWxlbWVudCBvZiBnYW1lTGlzdCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5nZW5yZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5nZW5yZVtpXS5nZW5yZSA9PSBnZW5yZSkge1xyXG4gICAgICAgICAgICAgICAgZ2FtZUZpbHRlcmVkTGlzdC5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgaSA9IGVsZW1lbnQuZ2VucmUubGVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2FtZUxpc3QgPSBbXTtcclxuICAgIGdhbWVMaXN0ID0gZ2FtZUZpbHRlcmVkTGlzdFxyXG4gICAgY3JlYXRlR2FtZVBhZ2luYXRpb24oKTtcclxuICAgIHNob3dHYW1lcygxKTtcclxuICAgIGdldEFsbEdhbWVzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlYXJjaEJ5R2FtZVllYXIoeWVhcjogbnVtYmVyKSB7XHJcbiAgICBnYW1lRmlsdGVyZWRMaXN0ID0gW11cclxuICAgIGZvciAobGV0IGVsZW1lbnQgb2YgZ2FtZUxpc3QpIHtcclxuICAgICAgICBpZiAoZWxlbWVudC55ZWFyID09IHllYXIpIHtcclxuICAgICAgICAgICAgZ2FtZUZpbHRlcmVkTGlzdC5wdXNoKGVsZW1lbnQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2FtZUxpc3QgPSBbXTtcclxuICAgIGdhbWVMaXN0ID0gZ2FtZUZpbHRlcmVkTGlzdFxyXG4gICAgY3JlYXRlR2FtZVBhZ2luYXRpb24oKTtcclxuICAgIHNob3dHYW1lcygxKTtcclxuICAgIGdldEFsbEdhbWVzKCk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGFzc2lnbkdhbWVGaWx0ZXJzKCkgeyAgICAgICAgICAgICAvKkFzc2VnbmEgbGUgZnVuemlvbmkgYWkgcHVsc2FudGkgbmVsbGUgZHJvcERvd25MaXN0IGRhIHByb3ZhcmUqL1xyXG4gICAgbGV0IGFsbEdhbWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3RBbGxHYW1lc1wiKVxyXG4gICAgYWxsR2FtZXMub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBzZWFyY2hCeUFsbEdhbWVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWxsR2VucmVzKCk7XHJcblxyXG4gICAgc2V0QWxsWWVhcnMoKTtcclxuXHJcbiAgICBsZXQgc2VhcmNoVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFRpdGxlR2FtZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgc2VhcmNoVGl0bGUub25rZXlkb3duID0gKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXkgPT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICBzZWFyY2hCeUdhbWVUaXRsZShzZWFyY2hUaXRsZS52YWx1ZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlR2FtZVBhZ2U7IiwiaW1wb3J0IHZpZGVvZ2FtZSBmcm9tIFwiLi4vaW50ZXJmYWNlcy92aWRlb2dhbWVcIjtcclxuaW1wb3J0IHZpc3VhbGl6emFWaWRlb2dpb2NvIGZyb20gXCIuL3Zpc3VhbGl6emFWaWRlb2dpb2NvLmh0bWxcIjtcclxuaW1wb3J0IGNyZWF0ZUdhbWVQYWdlIGZyb20gXCIuL3ZpZGVvZ2lvY2hpXCI7XHJcbmltcG9ydCB2aWRlb2dpb2NoaSBmcm9tIFwiLi92aWRlb2dpb2NoaS5odG1sXCJcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR2FtZVZpc3VhbGl6YXRpb24oZ2FtZTp2aWRlb2dhbWUpe1xyXG4gICAgY29uc29sZS5sb2coZ2FtZSk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MPXZpc3VhbGl6emFWaWRlb2dpb2NvO1xyXG4gICAgc2V0YmFjaygpO1xyXG4gICAgc2V0UGFnZShnYW1lKVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZXRiYWNrKCl7XHJcbiAgICBsZXQgYmFjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFjay1nYW1lc1wiKVxyXG4gICAgYmFjay5vbmNsaWNrPSgpPT57XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTD12aWRlb2dpb2NoaVxyXG4gICAgICAgIGNyZWF0ZUdhbWVQYWdlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFBhZ2UoZ2FtZTp2aWRlb2dhbWUpe1xyXG4gICAgbGV0IGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVUaXRsZVwiKTtcclxuICAgIGxldCB0aXRsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICB0aXRsZS5pbm5lckhUTUw9XCI8Yj5cIitnYW1lLm5hbWUrXCI8L2I+XCI7XHJcbiAgICBoZWFkLmFwcGVuZCh0aXRsZSk7XHJcbiAgICBoZWFkLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJ0ZXh0LWNlbnRlciBtYi01XCIpXHJcbiAgICBsZXQgdmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZUltYWdlXCIpO1xyXG4gICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBpbWcuc3JjPWdhbWUuY292ZXIubGluaztcclxuICAgIGltZy53aWR0aD00MDA7XHJcbiAgICB2aWV3LmFwcGVuZChpbWcpO1xyXG4gICAgbGV0IGluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVJbmZvXCIpO1xyXG4gICAgbGV0IGdlbmVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKVxyXG4gICAgZ2VuZXJlLmlubmVySFRNTD0gXCI8Yj5HRU5FUkUvSTogPC9iPlwiO1xyXG4gICAgZm9yKGxldCBpPTA7IGk8Z2FtZS5nZW5yZS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgZ2VuZXJlLmlubmVySFRNTCArPSBnYW1lLmdlbnJlW2ldLmdlbnJlICtcIiBcIjtcclxuICAgIH0gXHJcbiAgICBsZXQgY29uc29sZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBjb25zb2xlLmlubmVySFRNTD0gXCI8Yj5DT05TT0xFOiA8L2I+XCIrZ2FtZS5jb25zb2xlLmNvbnNvbGU7XHJcbiAgICBsZXQgeWVhcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICB5ZWFyLmlubmVySFRNTD1cIjxiPkFOTk86IDwvYj5cIitnYW1lLnllYXJcclxuICAgIGluZm8uYXBwZW5kKGdlbmVyZSxjb25zb2xlLHllYXIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHYW1lVmlzdWFsaXphdGlvbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSBcIi4vaG9tZS9ob21lXCI7XHJcbmltcG9ydCBjcmVhdGVOYXYgZnJvbSBcIi4vbmF2YmFyL25hdmJhclwiO1xyXG5pbXBvcnQgY3JlYXRlRm90IGZyb20gXCIuL2Zvb3Rlci9mb290ZXJcIjtcclxuaW1wb3J0IGFkZENsaWNrQ2hhdCBmcm9tIFwiLi9jaGF0L2NoYXRcIjtcclxuXHJcbmNyZWF0ZU5hdigpO1xyXG5jcmVhdGVIb21lKCk7XHJcbmNyZWF0ZUZvdCgpO1xyXG5hZGRDbGlja0NoYXQoKTtcclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
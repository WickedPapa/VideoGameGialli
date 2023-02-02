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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n<div style=\"display: flex;\" class=\"my-5\">\r\n\r\n    <span style=\"margin-right: 40px\">\r\n        <button class=\"btn btn-primary\" id=\"selectAll\">Visualizza tutti</button>\r\n            </span> <!--funzione che prende tutti gli annunci e li schiaffa nel contenuto annunci-->\r\n                <span style=\"margin-right: 40px\" class=\"dropdown\">\r\n                    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                    Visualizza per Genere\r\n                    </button>\r\n                    <ul id=\"genres\" class=\"dropdown-menu\">\r\n                        <li id=\"PLATFORM\"><button class=\"dropdown-item\" type=\"button\">PLATFORM</button></li>\r\n                    </ul>\r\n                </span>\r\n            <span style=\"margin-right: 40px\" class=\"dropdown\">\r\n                <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                Visualizza per Anno\r\n                </button>\r\n                <ul id=\"years\" class=\"dropdown-menu\">\r\n                <li id=\"1985\"><button class=\"dropdown-item\" type=\"button\">1985</button></li>\r\n                </ul>\r\n            </span>\r\n    <div style=\"vertical-align: middle;\" class=\"col-md-3 mx-auto\">\r\n        <div class=\"input-group\">\r\n            <input class=\"form-control border-end-1 border rounded-pill\" type=\"search\" placeholder=\"cerca\" style=\"margin-right:20px\" id=\"searchTitle\">\r\n            <span class=\"input-group-append\">\r\n            <button id=\"searchButton\" class=\"btn btn-outline-secondary bg-white border-bottom-1 border rounded-pill ms-n5\" type=\"button\">\r\n                    trova\r\n            <i class=\"fa fa-search\"></i>\r\n            </button>\r\n            </span>\r\n        </div>\r\n    </div>\r\n\r\n      <span >\r\n        <button id=\"addInsertion2\" style=\"color:white\" class=\"btn btn-danger\">\r\n            <img src=\"./img/plus.png\" alt=\"plus\" style=\"width:25px\">\r\n            Inserisci Annuncio\r\n        </button>\r\n      </span>      \r\n             \r\n\r\n</div>\r\n\r\n<div id=\"remains\">\r\n    <div  id=\"insertionContent\" class=\"row\">\r\n\r\n    </div>\r\n    <ul class=\"list-group\" >\r\n        \r\n    </ul>    \r\n</div>\r\n\r\n<div>\r\n    <ul id=\"pages\" class=\"pagination pagination-sm my-2\">\r\n        \r\n    </ul>\r\n</div>\r\n\r\n\r\n\r\n");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div style=\"display: flex;\">\r\n\r\n        <span style=\"margin-right: 40px\">\r\n            <button class=\"btn btn-primary\" id=\"selectAll2\">Visualizza tutti</button>\r\n                </span> <!--funzione che prende tutti gli annunci e li schiaffa nel contenuto annunci-->\r\n                    <span style=\"margin-right: 40px\" class=\"dropdown\">\r\n                        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                        Visualizza per Genere\r\n                        </button>\r\n                        <ul id=\"genres2\" class=\"dropdown-menu\">\r\n                            <li id=\"PLATFORM\"><button class=\"dropdown-item\" type=\"button\">PLATFORM</button></li>\r\n                        </ul>\r\n                    </span>\r\n                <span style=\"margin-right: 40px\" class=\"dropdown\">\r\n                    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                    Visualizza per Anno\r\n                    </button>\r\n                    <ul id=\"years2\" class=\"dropdown-menu\">\r\n                    <li id=\"1985\"><button class=\"dropdown-item\" type=\"button\">1985</button></li>\r\n                    </ul>\r\n                </span>\r\n        <div style=\"vertical-align: middle;\" class=\"col-md-3 mx-auto\">\r\n            <div class=\"input-group\">\r\n                <input class=\"form-control border-end-1 border rounded-pill\" type=\"search\" placeholder=\"cerca\" style=\"margin-right:20px\" id=\"searchTitle\">\r\n                <span class=\"input-group-append\">\r\n                <button id=\"searchButton2\" class=\"btn btn-outline-secondary bg-white border-bottom-1 border rounded-pill ms-n5\" type=\"button\">\r\n                        trova\r\n                <i class=\"fa fa-search\"></i>\r\n                </button>\r\n                </span>\r\n            </div>\r\n        </div>\r\n    \r\n          <span >\r\n            <!-- Allerta Martellata: se tolgo il bottone tolgo pure la lista,\r\n                quindi l'ho messo hidden-->\r\n            <button hidden id=\"addInsertion\" style=\"color:white\" class=\"btn btn-danger\">\r\n                <img src=\"./img/plus.png\" alt=\"plus\" style=\"width:25px\">\r\n                Inserisci Annuncio\r\n            </button>\r\n          </span>      \r\n                 \r\n    \r\n    </div>\r\n\r\n    <br>\r\n    <div style=\"display: inline-flex;\">\r\n\r\n        <span style=\"margin-right: 40px\"> <h4> Nome Categoria: </h4> </span>\r\n        \r\n        <span style=\"margin-right: 40px\"> <input class=\"form-control border-end-1 border rounded-pill\" type=\"text\" placeholder=\"Categoria\" style=\"margin-right:20px\" id=\"categoryName\"> </span>\r\n\r\n        <span style=\"margin-right: 40px\"> <button class=\"btn btn-primary\" id=\"createCategory\">Crea Categoria</button> </span>\r\n\r\n        <span style=\"margin-right: 40px\"> <button class=\"btn btn-danger\" id=\"deleteElements\">Elimina Annunci</button> </span>\r\n\r\n    </div>\r\n    <br>\r\n    \r\n    <div id=\"remains\">\r\n        <ul id=\"insertionContent2\" class=\"list-group\" >\r\n            \r\n        </ul>\r\n        \r\n    </div>\r\n    <div>\r\n        <ul id=\"pages2\" class=\"pagination pagination-sm my-2\">\r\n            \r\n        </ul>\r\n    \r\n    </div>    \r\n");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 text-center\">\r\n      <h2><b>Inserisci Annuncio</b></h2>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-4\">\r\n      <div class=\"mb-3\">\r\n        <label for=\"title\" class=\"form-label\">\r\n          <h3><b>Titolo Annuncio</b></h3>\r\n        </label>\r\n        <input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"Titolo Annuncio\">\r\n      </div>\r\n      <div class=\"mb-3\">\r\n        <label for=\"description\" class=\"form-label\">\r\n          <h3><b>Descrizione Videogioco</b></h3>\r\n        </label>\r\n        <textarea class=\"form-control\" id=\"description\" rows=\"3\" placeholder=\"Descrizione Annuncio\"></textarea>\r\n      </div>\r\n      <div>\r\n        <label for=\"tradeGame\" class=\"text-center\">\r\n          <h3><b>Trade-Game</b></h3>\r\n          <h5>Da quale tesorino ti vorresti separare?</h5>\r\n          <span class=\"dropdown text-center\">\r\n            <button class=\"btn btn-light dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n              Quanti bei giochini!\r\n            </button>\r\n            <ul id=\"tradeGame\" class=\"dropdown-menu\">\r\n            </ul>\r\n          </span>\r\n        </label>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"col-4\">\r\n      <div>\r\n        <label for=\"wishGames\" class=\"text-center\">\r\n          <h3><b>Wish-List</b></h3>\r\n          <h5>Che giochi vorresti ricevere in cambio del tuo tesorino?</h5>\r\n\r\n          <span class=\"dropdown text-center\">\r\n            <button class=\"btn btn-light dropdown-toggle\" type=\"button\"\r\n              data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n              Solo 3 Eh! Non bariamo!\r\n            </button>\r\n            <ul id=\"wishGames\" class=\"dropdown-menu\">\r\n            </ul>\r\n          </span>\r\n        </label>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-4\">\r\n      <div class=\"mb-3\">\r\n        <label for=\"gallery\" class=\"form-label\">\r\n          <h3><b>Immagini</b></h3>\r\n        </label>\r\n        <textarea class=\"form-control\" id=\"gallery\" rows=\"7\"\r\n          placeholder=\"Inserisci le url delle imagini dell'annuncio da inserire, ognuna divisa dalla virgola Es: http://imgurl/img.png,http://imgurl/img2.png\"></textarea>\r\n      </div>\r\n      <div class=\"mb-3\">\r\n        <ul id=\"selectedGames\">\r\n          \r\n        </ul>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"mb-3 mt-3 text-center\">\r\n      <button id=\"registerInsertion\" class=\"btn btn-primary\">Aggiungi</button>\r\n    </div>\r\n  </div>\r\n</div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"row mt-2 mb-4\">\r\n    <div id=\"titleprofile\" class=\"col-12 text-center\">\r\n\r\n    </div>\r\n</div>\r\n<div class=\"row mt-5 mb-2\">\r\n    <div id=\"bodyprofile\" class=\"col-6 text-end\">\r\n\r\n\r\n    </div>\r\n    <div id=\"buttons-profile\" class=\"col-2 text-center\">\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n    </div>\r\n\r\n\r\n    <div id=\"input-profile\" class=\"col-4 \">\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <div  class=\"input-group mb-3\" >\r\n            <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\" id=\"basic-addon1\">Username</span>\r\n            </div>\r\n            <input id=\"username\" type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-label=\"Username\"\r\n                aria-describedby=\"basic-addon1\">\r\n        </div>\r\n        <div  class=\"input-group mb-3 my-4\" >\r\n            <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\" id=\"basic-addon1\">Email</span>\r\n            </div>\r\n            <input id=\"email\" type=\"text\" class=\"form-control\" placeholder=\"Email\" aria-label=\"Email\"\r\n                aria-describedby=\"basic-addon1\">\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row mt-2 mb-4\">\r\n    <div class=\"col-12 text-center\">\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <h3>Cambio Password</h3>\r\n        <br>\r\n        <br>\r\n    </div>\r\n    <div class=\"col-6 text-end\">\r\n        <div  class=\"input-group mb-3\" >\r\n            <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\" id=\"basic-addon1\">Vecchia password</span>\r\n            </div>\r\n            <input id=\"oldPassword\" type=\"password\" class=\"form-control\" placeholder=\"VecchiaPassword\" aria-label=\"VecchiaPassword\"\r\n                aria-describedby=\"basic-addon1\">\r\n        </div>\r\n    </div>\r\n    <div class=\"col-6 text-start\">\r\n        <div  class=\"input-group mb-3\" >\r\n            <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\" id=\"basic-addon1\">Nuova Password</span>\r\n            </div>\r\n            <input id=\"newPassword\" type=\"password\" class=\"form-control\" placeholder=\"NuovaPassword\" aria-label=\"NuovaPassword\"\r\n                aria-describedby=\"basic-addon1\">\r\n        </div>\r\n    </div>\r\n    <div  id=\"cp\" class=\"col-12 text-center my-5\">\r\n        \r\n        \r\n        \r\n    </div>\r\n</div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div id=\"createVGContainer\" class=\"container my-5 back-semi-transparent\" style=\"border-radius: 10px;\r\n    border-top: 5px solid rgb(171, 209, 57);\r\n    border-bottom: 5px solid rgb(171, 209, 57);\r\n    border-right: 5px solid rgb(171, 209, 57);\r\n    border-left: 5px solid rgb(171, 209, 57);\r\n    \">\r\n    <div class=\"row align-items-start\">\r\n        <div class=\"col-4\" style=\"\r\n        border-right: 3px solid rgb(171, 209, 57); \r\n        border-bottom: 3px solid rgb(171, 209, 57);\r\n        border-bottom-right-radius: 10px;\r\n        \">\r\n\r\n            <div class=\"mb-3\">\r\n                <div class=\"my-3\">\r\n                    <h2 class=\"text-center\">Crea console e generi</h2>\r\n                </div>\r\n                <label for=\"newGenre\" class=\"form-label\"><b>Nuovo Genere</b></label>\r\n                <input type=\"text\" class=\"form-control\" id=\"newGenre\" placeholder=\"Inserisci nuovo genere\">\r\n            </div>\r\n            <button id=\"newGenreBtn\" class=\"btn mb-4 button-hover\"><b>Crea</b></button>\r\n            <div class=\"mb-3\">\r\n                <label for=\"newConsole\" class=\"form-label\"><b>Nuova Console</b></label>\r\n                <input type=\"text\" class=\"form-control\" id=\"newConsole\" placeholder=\"Inserisci nuova console\">\r\n            </div>\r\n            <button id=\"newConsoleBtn\" class=\"btn mb-4 button-hover\"><b>Crea</b></button>\r\n\r\n        </div>\r\n        <div class=\"col-8\">\r\n            <div class=\"my-3\">\r\n                <h2 class=\"text-center\">Inserisci Dati Videogioco</h2>\r\n            </div>\r\n            <div class=\"mb-5\">\r\n                <label for=\"name\" class=\"form-label\"><b>Titolo</b></label>\r\n                <input type=\"text\" class=\"form-control\" id=\"VGname\" placeholder=\"Inserisci il titolo del gioco\">\r\n            </div>\r\n            <div class=\"mb-5\">\r\n                <label for=\"year\" class=\"form-label\"><b>Anno di Uscita</b></label>\r\n                <input type=\"number\" class=\"form-control\" id=\"VGyear\" min=\"1970\" maxlength=\"2023\" placeholder=\"Inserisci l'anno di uscita\">\r\n            </div>\r\n            <div class=\"mb-5\">\r\n                <label class=\"form-label\" for=\"cover\"><b>Link immagine</b></label>\r\n                <input type=\"text\" class=\"form-control\" id=\"VGcover\" placeholder=\"Inserisci il link della copertina\">\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"row align-items-start\">\r\n        \r\n        <div class=\"col-4\">\r\n            \r\n            <h4 class=\"text-end\"><b>Seleziona categorie:</b></h4>\r\n        </div>\r\n        \r\n        <div id=\"genreList\" class=\"col-8\">\r\n            \r\n            \r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row align-items-start\">\r\n        <div class=\"col-4\">\r\n            <br><br>\r\n            <h4 class=\"text-end\"><b>Seleziona console:</b></h4>\r\n        </div>\r\n        <div id=\"consoleList\" class=\"col-8\">\r\n            \r\n            \r\n        </div>\r\n        <button id=\"newVideoGameBtn\" class=\"btn mb-4 button-hover\"><b>Crea</b></button>\r\n    </div>\r\n\r\n</div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div style=\"display: flex;\" class=\"my-5\">\r\n\r\n    <span style=\"margin-right: 40px\">\r\n        <button class=\"btn btn-primary\" id=\"selectAll\">Visualizza tutti i Videogame</button>\r\n            </span> <!--funzione che prende tutti gli annunci e li schiaffa nel contenuto annunci-->\r\n                <span style=\"margin-right: 40px\" class=\"dropdown\">\r\n                    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                    Visualizza per Genere\r\n                    </button>\r\n                    <ul id=\"genres\" class=\"dropdown-menu\">\r\n                        <li id=\"PLATFORM\"><button class=\"dropdown-item\" type=\"button\">PLATFORM</button></li>\r\n                    </ul>\r\n                </span>\r\n            <span style=\"margin-right: 40px\" class=\"dropdown\">\r\n                <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                Visualizza per Anno\r\n                </button>\r\n                <ul id=\"years\" class=\"dropdown-menu\">\r\n                <li id=\"1985\"><button class=\"dropdown-item\" type=\"button\">1985</button></li>\r\n                </ul>\r\n            </span>\r\n    <div style=\"vertical-align: middle;\" class=\"col-md-3 mx-auto\">\r\n        <div class=\"input-group\">\r\n            <input class=\"form-control border-end-1 border rounded-pill\" type=\"search\" placeholder=\"cerca\" style=\"margin-right:20px\" id=\"searchTitle\">\r\n            <span class=\"input-group-append\">\r\n            <button id=\"searchButton\" class=\"btn btn-outline-secondary bg-white border-bottom-1 border rounded-pill ms-n5\" type=\"button\">\r\n                    trova\r\n            <i class=\"fa fa-search\"></i>\r\n            </button>\r\n            </span>\r\n        </div>\r\n    </div>\r\n\r\n      <span >\r\n        <button  id=\"addVideogame\" style=\"color:white\" class=\"btn btn-warning\" hidden>\r\n            <img src=\"./img/plus.png\" alt=\"plus\" style=\"width:25px\">\r\n            Inserisci Videogame\r\n        </button>\r\n      </span>      \r\n             \r\n\r\n</div>\r\n\r\n<div>\r\n    <div  id=\"VideogameContent\" class=\"row\">\r\n\r\n    </div>\r\n</div>\r\n\r\n<div>\r\n    <ul id=\"pagesV\" class=\"pagination pagination-sm my-2\">\r\n        \r\n    </ul>\r\n</div>");

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
let view = 6;
function createPage() {
    document.getElementById("selectAll").onclick = searchByAll;
    assignFilters();
    let btn = document.getElementById("addInsertion2");
    btn.onclick = () => {
        document.getElementById("main").innerHTML = _creaAnnuncio_creaAnnuncio_html__WEBPACK_IMPORTED_MODULE_0__["default"];
        (0,_creaAnnuncio_creaAnnuncio__WEBPACK_IMPORTED_MODULE_2__["default"])();
    };
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
    searchTitle.onkeydown = (e) => {
        if (e.key == 'Enter') {
            searchByTitle(searchTitle.value);
        }
    };
    let searchButton = document.getElementById("searchButton");
    searchButton.onclick = () => {
        searchByTitle(searchTitle.value);
    };
}
function searchByTitle(title) {
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
    createPagination();
    showResults(1);
}
function searchByGenre(genre) {
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
    createPagination();
    showResults(1);
}
function searchByYear(year) {
    console.log(year);
    let filteredList = [];
    for (let element of list) {
        if (element.tradeGame.year == year) {
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
    for (let i = 0; i < 27; i++) {
        if (i != 17) {
            list.push(insertion1);
        }
        else {
            list.push(insertion1);
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
        col.onclick = () => {
            (0,_annuncio__WEBPACK_IMPORTED_MODULE_1__["default"])(list[start]);
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
        image.width = 200;
        title.innerHTML = list[start].title;
        description.innerHTML = list[start].description;
        game.innerHTML = list[start].tradeGame.name;
        for (let i = 0; i < list[start].tradeGame.genre.length; i++) {
            genre.innerHTML += list[start].tradeGame.genre[i].genre + " ";
        }
        year.innerHTML = "" + list[start].tradeGame.year;
        console.innerHTML = list[start].tradeGame.console.console;
        trades.innerHTML = "Accetterei Scambio con: " + list[start].wishList[0].name;
        date.innerHTML = list[start].publicationDate;
        col.append(title, image, description, game, genre, year, console, trades, date);
        content.append(col);
    }
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
    document.getElementById("insertion-creator").innerHTML = insertion.publisher.username;
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "deleteElements": () => (/* binding */ deleteElements)
/* harmony export */ });
/* harmony import */ var _creaAnnuncio_creaAnnuncio_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../creaAnnuncio/creaAnnuncio.html */ "./src/creaAnnuncio/creaAnnuncio.html");
/* harmony import */ var _creaAnnuncio_creaAnnuncio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../creaAnnuncio/creaAnnuncio */ "./src/creaAnnuncio/creaAnnuncio.ts");


let list = [];
let view = 6;
function createPage2() {
    document.getElementById("selectAll2").onclick = searchByAll2;
    assignFilters2();
    document.getElementById("createCategory").onclick = createCategory;
    document.getElementById("deleteElements").onclick = deleteElements;
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
    for (let i = 0; i < 27; i++) {
        if (i != 2) {
            list.push(insertion1);
        }
        else {
            list.push(insertion2);
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
    //TODO: inserisci gli elementi di checkedList in una categoria nel DB
    //TODO: Metodo da fare per inserire gli elementi nel database haha
    console.log("Categoria creata più o meno");
    checkedList = [];
    //Reimposta la pagina a come stava prima
    getAllInsertions2();
    createPagination2();
    showResults2(1);
}
function deleteElements() {
    //TODO: cancella gli elementi di checkedList dal DB
    //TODO: Metodo da fare per cancellare gli elementi dal database
    console.log("Elementi cancellati più o meno");
    checkedList = [];
    //Reimposta la pagina a come stava prima
    getAllInsertions2();
    createPagination2();
    showResults2(1);
}


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
let giocoDaScambiare;
let index = 0;
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
            liBtn.id = game.name;
            liBtn.setAttribute("type", "button");
            liBtn.setAttribute("class", "dropdown-item");
            liBtn.innerHTML = game.name;
            console.log(game);
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
                    index++;
                }
                showSelectedGames();
            };
            li.append(liBtn);
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
            li.setAttribute("class", "dropdown-item");
            li.innerHTML = game.name;
            console.log(game.name);
            li.onclick = () => {
                giocoDaScambiare = li.innerHTML;
            };
            tradeGame.append(li);
        }
    });
}
/* Mostra i giochi scelti dall'utente per lo scambio*/
function showSelectedGames() {
    let selectedGames = document.getElementById("selectedGames");
    selectedGames.innerHTML = "";
    for (let i = 0; i < wishList.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = wishList[i];
        selectedGames.append(li);
    }
}
/*Crea la lista dei giochi posseduti dall'utente */
function createInsertionPage() {
    getUserGames();
    getAllGames();
    document.getElementById("registerInsertion").onclick = registerInsertion;
}
function registerInsertion() {
    /*
        const newIns : insertion = {
            title : "a",
    
        }
    */
    const request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify("a")
    };
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
            console.log(data);
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
        h2.innerHTML = "Ecco un riepilogo dei tuoi dati: "
            + " <br><br><br> <b>Username</b>: " + adminInfo.username
            + " <br><br> <b>Email</b>: " + adminInfo.email
            + " <br><br> <b>Nome</b>: " + adminInfo.name
            + " <br><br> <b>Cognome</b>: " + adminInfo.surname;
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
        h2.innerHTML = "Ecco un riepilogo dei tuoi dati: "
            + " <br><br><br> <b>Username</b>: " + userInfo.username
            + " <br><br> <b>Email</b>: " + userInfo.email
            + " <br><br><b>Nome</b>: " + userInfo.name
            + " <br><br> <b>Cognome</b>: " + userInfo.surname;
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
        getAllGames();
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
        createGamePagination();
        showGames(1);
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
    title.innerHTML = game.name;
    head.append(title);
    head.setAttribute("class", "text-center mb-5");
    let view = document.getElementById("gameImage");
    let img = document.createElement("img");
    img.src = game.cover.link;
    img.width = 400;
    view.append(img);
    let info = document.getElementById("gameInfo");
    let genere = document.createElement("h2");
    genere.innerHTML = " GENERE/I: ";
    for (let i = 0; i < game.genre.length; i++) {
        genere.innerHTML += game.genre[i].genre + " ";
    }
    let console = document.createElement("h2");
    console.innerHTML = " CONSOLE: " + game.console.console;
    let year = document.createElement("h2");
    year.innerHTML = " ANNO: " + game.year;
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



(0,_navbar_navbar__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_home_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_footer_footer__WEBPACK_IMPORTED_MODULE_2__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWUsZ0NBQWdDLDh5Q0FBOHlDLCtwQ0FBK3BDOzs7Ozs7Ozs7Ozs7OztBQ0E1L0UsaUVBQWUsNE5BQTROLHd1Q0FBd3VDLHdqREFBd2pELHE1QkFBcTVCLCs1QkFBKzVCLGdRQUFnUTs7Ozs7Ozs7Ozs7Ozs7QUNBL2pLLGlFQUFlLDRCQUE0QixrM0NBQWszQyxtb0NBQW1vQyx5NUJBQXk1Qjs7Ozs7Ozs7Ozs7Ozs7QUNBejdHLGlFQUFlLHV4RkFBdXhGOzs7Ozs7Ozs7Ozs7OztBQ0F0eUYsaUVBQWUsMkJBQTJCLHdCQUF3Qiw2Q0FBNkMsb0JBQW9CLDJCQUEyQixPQUFPLHdCQUF3QixtQ0FBbUMsdUNBQXVDLDBCQUEwQixPQUFPLDZCQUE2QixzQ0FBc0MsT0FBTyxjQUFjLHdCQUF3Qiw0QkFBNEIsMkJBQTJCLE9BQU8sb0JBQW9CLDBCQUEwQixrQkFBa0IsbUJBQW1CLE9BQU8sc0JBQXNCLHlCQUF5QixPQUFPLG1GQUFtRixzQkFBc0IsK0JBQStCLE9BQU8seUJBQXlCLGdCQUFnQixPQUFPLDBKQUEwSixjQUFjLGFBQWEsa0ZBQWtGLDBYQUEwWCx5Q0FBeUMsaUtBQWlLLG9CQUFvQix5Q0FBeUMscURBQXFELHlCQUF5QiwwQkFBMEIsd0JBQXdCLDZDQUE2QyxLQUFLLGtCQUFrQixpQkFBaUIsa0NBQWtDLG9CQUFvQix5QkFBeUIsd0JBQXdCLHdCQUF3QixLQUFLLDJCQUEyQix5QkFBeUIsYUFBYSxjQUFjLGVBQWUsbUJBQW1CLDJDQUEyQyw2QkFBNkIsS0FBSyxtQ0FBbUMseUJBQXlCLGlDQUFpQywyQ0FBMkMsMEJBQTBCLHNKQUFzSixzSkFBc0osdUNBQXVDLEtBQUssMkJBQTJCLGlCQUFpQixvQkFBb0Isc0NBQXNDLHFCQUFxQixvQkFBb0IsMkNBQTJDLEtBQUssc0RBQXNELHFCQUFxQiw0QkFBNEIsS0FBSyw2QkFBNkIsbUJBQW1CLEtBQUssNkJBQTZCLGdCQUFnQix5QkFBeUIsS0FBSyxpQ0FBaUMsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsS0FBSyx1Q0FBdUMsd0JBQXdCLEtBQUssMkNBQTJDLDJCQUEyQixLQUFLLHdDQUF3Qyx5QkFBeUIsa0JBQWtCLG1CQUFtQix3QkFBd0IsNkJBQTZCLGtDQUFrQyxLQUFLLHdDQUF3QyxlQUFlLGlDQUFpQyxrQ0FBa0MsT0FBTyxZQUFZLG9CQUFvQixxQkFBcUIsT0FBTyxLQUFLLGdDQUFnQyxlQUFlLGlDQUFpQyxrQ0FBa0MsT0FBTyxZQUFZLG9CQUFvQixxQkFBcUIsT0FBTyxLQUFLLG9DQUFvQyxVQUFVLHNCQUFzQixPQUFPLFlBQVksdUNBQXVDLE9BQU8sS0FBSyw0QkFBNEIsVUFBVSxzQkFBc0IsT0FBTyxZQUFZLHVDQUF1QyxPQUFPLEtBQUsseUtBQXlLLGtDQUFrQywrQkFBK0IsNEJBQTRCLDRCQUE0Qiw0RUFBNEUsaUNBQWlDLCtCQUErQiw0QkFBNEIsNEJBQTRCLDRFQUE0RSxpQ0FBaUMsaUNBQWlDLDRCQUE0Qiw0QkFBNEIsNEVBQTRFLGdDQUFnQyxnQ0FBZ0MsMkJBQTJCLDZCQUE2Qiw0RUFBNEUsaUNBQWlDLCtCQUErQiw0QkFBNEIsNkJBQTZCLDRFQUE0RSxpQ0FBaUMsZ0NBQWdDLDJCQUEyQiw2QkFBNkIsNkVBQTZFLGlDQUFpQywrQkFBK0IsNEJBQTRCLDRCQUE0Qiw0RUFBNEUsaUNBQWlDLCtCQUErQiw0QkFBNEIsNEJBQTRCLDRFQUE0RSxpQ0FBaUMsZ0NBQWdDLDBCQUEwQiw0QkFBNEIsNkVBQTZFLGlDQUFpQyxnQ0FBZ0MsNEJBQTRCLDZCQUE2Qiw0RUFBNEUsZ0NBQWdDLGdDQUFnQyx5QkFBeUIsNEJBQTRCLDZFQUE2RSxpQ0FBaUMsK0JBQStCLDRCQUE0Qiw0QkFBNEIsZ3hCQUFneEIsbUVBQW1FLHdtQkFBd21COzs7Ozs7Ozs7Ozs7OztBQ0FyZ1EsaUVBQWUsaVRBQWlUOzs7Ozs7Ozs7Ozs7OztBQ0FoVSxpRUFBZSxpS0FBaUsscUVBQXFFLDhCQUE4QixPQUFPLDJCQUEyQix5QkFBeUIsb0JBQW9CLE9BQU8sc0JBQXNCLHVCQUF1QixzQkFBc0IsMEJBQTBCLDJCQUEyQiwyQkFBMkIsT0FBTyxvQkFBb0Isb0JBQW9CLDBCQUEwQiwyQkFBMkIsT0FBTyxxQkFBcUIsb0JBQW9CLHFCQUFxQixPQUFPLGdCQUFnQiwyQkFBMkIsMEJBQTBCLE9BQU8sc0JBQXNCLG9CQUFvQixxQkFBcUIsT0FBTyxxQkFBcUIsMEJBQTBCLE9BQU8sb0JBQW9CLHlCQUF5QixPQUFPLGdCQUFnQix3QkFBd0IsMkJBQTJCLG9CQUFvQixtREFBbUQsc0JBQXNCLE9BQU8sY0FBYyxxQkFBcUIsT0FBTywyMkJBQTIyQixtQkFBbUIsb0RBQW9ELGlCQUFpQixnR0FBZ0csYUFBYSw2U0FBNlMsc2NBQXNjLGFBQWEsNGFBQTRhLGFBQWEsazBGQUFrMEY7Ozs7Ozs7Ozs7Ozs7O0FDQXBxTSxpRUFBZSw4bkJBQThuQjs7Ozs7Ozs7Ozs7Ozs7QUNBN29CLGlFQUFlLGtUQUFrVDs7Ozs7Ozs7Ozs7Ozs7QUNBalUsaUVBQWUsMkxBQTJMOzs7Ozs7Ozs7Ozs7OztBQ0ExTSxpRUFBZSx5dkJBQXl2Qjs7Ozs7Ozs7Ozs7Ozs7QUNBeHdCLGlFQUFlLGtnREFBa2dEOzs7Ozs7Ozs7Ozs7OztBQ0FqaEQsaUVBQWUsb2xGQUFvbEY7Ozs7Ozs7Ozs7Ozs7O0FDQW5tRixpRUFBZSwrekNBQSt6Qzs7Ozs7Ozs7Ozs7Ozs7QUNBOTBDLGlFQUFlLHlSQUF5Ujs7Ozs7Ozs7Ozs7Ozs7QUNBeFMsaUVBQWUsMEdBQTBHLGdEQUFnRCxtREFBbUQsa0RBQWtELGlEQUFpRCx3SkFBd0osdURBQXVELDZDQUE2QyxzcEZBQXNwRjs7Ozs7Ozs7Ozs7Ozs7QUNBanRHLGlFQUFlLDRCQUE0QiwwekNBQTB6Qywya0NBQTJrQzs7Ozs7Ozs7Ozs7Ozs7QUNBaDdFLGlFQUFlLHNqQkFBc2pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0V6Z0I7QUFFcEI7QUFDc0I7QUFFOUQsSUFBSSxJQUFJLEdBQWdCLEVBQUUsQ0FBQztBQUMzQixJQUFJLElBQUksR0FBVyxDQUFDO0FBRWIsU0FBUyxVQUFVO0lBQ3RCLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztJQUMzRCxhQUFhLEVBQUUsQ0FBQztJQUNoQixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ25ELEdBQUcsQ0FBQyxPQUFPLEdBQUMsR0FBRSxFQUFFO1FBQ1osUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEdBQUMsdUVBQVksQ0FBQztRQUN2RCxzRUFBbUIsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRCxnQkFBZ0IsRUFBRSxDQUFDO0lBQ25CLGdCQUFnQixFQUFFLENBQUM7SUFDbkIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRW5CLENBQUM7QUFHRCxTQUFTLFdBQVc7SUFDaEIsZ0JBQWdCLEVBQUUsQ0FBQztJQUNuQixnQkFBZ0IsRUFBRSxDQUFDO0lBQ25CLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuQixDQUFDO0FBR0QsU0FBUyxhQUFhO0lBQ2xCLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUTtJQUN2RCxLQUFLLElBQUksQ0FBQyxJQUFJLE1BQU0sRUFBRTtRQUNqQixDQUF1QixDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7WUFDcEMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixDQUFDO0tBQ0o7SUFDRCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVE7SUFDcEQsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7UUFDZixDQUF1QixDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7WUFDcEMsWUFBWSxDQUFDLE1BQU0sQ0FBRSxDQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEQsQ0FBQztLQUNKO0lBRUQsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQXFCLENBQUM7SUFDN0UsV0FBVyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQzFCLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxPQUFPLEVBQUU7WUFDbEIsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7U0FDbkM7SUFDTCxDQUFDO0lBQ0QsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMzRCxZQUFZLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtRQUN4QixhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztJQUNwQyxDQUFDO0FBQ0wsQ0FBQztBQUdNLFNBQVMsYUFBYSxDQUFDLEtBQWE7SUFDdkMsSUFBSSxZQUFZLEdBQUcsRUFBRTtJQUNyQixLQUFLLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtRQUN0QixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzNCLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtRQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztlQUNqRCxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUMzRCxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUM3QjtLQUNKO0lBQ0QsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUNWLElBQUksR0FBRyxZQUFZO0lBQ25CLGdCQUFnQixFQUFFLENBQUM7SUFDbkIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25CLENBQUM7QUFHRCxTQUFTLGFBQWEsQ0FBQyxLQUFhO0lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkIsSUFBSSxZQUFZLEdBQUcsRUFBRTtJQUNyQixLQUFLLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtRQUN0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3JELElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssRUFBRTtnQkFDM0MsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDM0IsQ0FBQyxHQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQzthQUNwQztTQUNKO0tBQ0o7SUFDRCxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ1YsSUFBSSxHQUFHLFlBQVk7SUFDbkIsZ0JBQWdCLEVBQUUsQ0FBQztJQUNuQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkIsQ0FBQztBQUVELFNBQVMsWUFBWSxDQUFDLElBQVk7SUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQixJQUFJLFlBQVksR0FBRyxFQUFFLENBQUM7SUFDdEIsS0FBSyxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7UUFDdEIsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDaEMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDN0I7S0FDSjtJQUNELElBQUksR0FBRyxFQUFFLENBQUM7SUFDVixJQUFJLEdBQUcsWUFBWTtJQUNuQixnQkFBZ0IsRUFBRSxDQUFDO0lBQ25CLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuQixDQUFDO0FBSUQsU0FBUyxnQkFBZ0I7SUFDckIsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUVWLE1BQU0sV0FBVyxHQUFHO1FBQ2hCLElBQUksRUFBRSxxRkFBcUY7S0FDOUY7SUFFRCxNQUFNLFdBQVcsR0FBRztRQUNoQixJQUFJLEVBQUUseUZBQXlGO0tBQ2xHO0lBRUQsTUFBTSxXQUFXLEdBQUc7UUFDaEIsSUFBSSxFQUFFLHdFQUF3RTtLQUNqRjtJQUVELE1BQU0sV0FBVyxHQUFHO1FBQ2hCLElBQUksRUFBRSxxRUFBcUU7S0FDOUU7SUFFRCxNQUFNLGFBQWEsR0FBRztRQUNsQixJQUFJLEVBQUUscUZBQXFGO0tBQzlGO0lBRUQsTUFBTSxhQUFhLEdBQUc7UUFDbEIsSUFBSSxFQUFFLHVEQUF1RDtLQUNoRTtJQUVELE1BQU0sYUFBYSxHQUFHO1FBQ2xCLElBQUksRUFBRSw0S0FBNEs7S0FDckw7SUFFRCxNQUFNLE1BQU0sR0FBRztRQUNYLEVBQUUsRUFBRSxDQUFDO1FBQ0wsSUFBSSxFQUFFLFlBQVk7UUFDbEIsS0FBSyxFQUFFLENBQUMsRUFBQyxLQUFLLEVBQUUsVUFBVSxFQUFDLENBQUM7UUFDNUIsSUFBSSxFQUFFLElBQUk7UUFDVixPQUFPLEVBQUUsRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFDO1FBQ3pCLEtBQUssRUFBRSxXQUFXO0tBQ3JCO0lBRUQsTUFBTSxNQUFNLEdBQUc7UUFDWCxFQUFFLEVBQUUsQ0FBQztRQUNMLElBQUksRUFBRSxxQkFBcUI7UUFDM0IsS0FBSyxFQUFFLENBQUMsRUFBQyxLQUFLLEVBQUUsV0FBVyxFQUFDLENBQUM7UUFDN0IsSUFBSSxFQUFFLElBQUk7UUFDVixPQUFPLEVBQUUsRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFDO1FBQ3pCLEtBQUssRUFBRSxXQUFXO0tBQ3JCO0lBRUQsTUFBTSxNQUFNLEdBQUc7UUFDWCxFQUFFLEVBQUUsQ0FBQztRQUNMLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsS0FBSyxFQUFFLENBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUM7UUFDdkIsSUFBSSxFQUFFLElBQUk7UUFDVixPQUFPLEVBQUUsRUFBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUM7UUFDcEMsS0FBSyxFQUFFLFdBQVc7S0FDckI7SUFFRCxNQUFNLE1BQU0sR0FBRztRQUNYLEVBQUUsRUFBRSxDQUFDO1FBQ0wsSUFBSSxFQUFFLFlBQVk7UUFDbEIsS0FBSyxFQUFFLENBQUMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFDLENBQUM7UUFDM0IsSUFBSSxFQUFFLElBQUk7UUFDVixPQUFPLEVBQUUsRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFDO1FBQ3pCLEtBQUssRUFBRSxXQUFXO0tBQ3JCO0lBRUQsTUFBTSxlQUFlLEdBQUc7UUFDcEIsTUFBTSxFQUFFLENBQUM7UUFDVCxRQUFRLEVBQUUsY0FBYztRQUN4QixJQUFJLEVBQUUsU0FBUztRQUNmLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLEtBQUssRUFBRSw4QkFBOEI7UUFDckMsTUFBTSxFQUFFLEdBQUc7UUFDWCxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUM7S0FDdkI7SUFFRCxNQUFNLFVBQVUsR0FBYztRQUMxQixRQUFRLEVBQUUsSUFBSTtRQUNkLEtBQUssRUFBRSxvQkFBb0I7UUFDM0IsV0FBVyxFQUFFLG1EQUFtRDtRQUNoRSxTQUFTLEVBQUUsZUFBZTtRQUMxQixPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQztRQUN0RCxTQUFTLEVBQUUsTUFBTTtRQUNqQixRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUNsQyxPQUFPLEVBQUUsS0FBSztRQUNkLGVBQWUsRUFBRSxZQUFZO0tBQ2hDO0lBR0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN6QixJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUN4QjthQUFNO1lBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDeEI7S0FDSjtJQUVELHlEQUF5RDtJQUV6RCxpRUFBaUU7SUFDakUsV0FBVztJQUNYLCtCQUErQjtJQUMvQix1Q0FBdUM7SUFDdkMsb0JBQW9CO0lBQ3BCLDBCQUEwQjtJQUMxQix3QkFBd0I7SUFDeEIsUUFBUTtJQUNSLE1BQU07QUFDVixDQUFDO0FBRUQ7O3FDQUVxQztBQUU5QixTQUFTLGdCQUFnQjtJQUM1QixJQUFJLElBQUksR0FBVyxJQUFJLENBQUMsTUFBTTtJQUM5QixJQUFJLElBQUksR0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztJQUMxQyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLEtBQUssQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDNUIsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDUixFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1lBQzdDLEVBQUUsQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDSCxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztTQUN6QztRQUNELElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDdkMsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7WUFDZixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUN0RCxLQUFLLElBQUksS0FBSyxJQUFJLEtBQUssRUFBRTtnQkFDckIsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBQ3pDLEtBQUssQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDekM7WUFDRCxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1lBQzdDLEVBQUUsQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3hDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUM7UUFDRixHQUFHLENBQUMsU0FBUyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDcEQ7QUFDTCxDQUFDO0FBRUQsU0FBUyxXQUFXLENBQUMsQ0FBUztJQUMxQixJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDMUQsT0FBTyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdkIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQzNCLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQixLQUFLLEtBQUssRUFBRSxLQUFLLElBQUksSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO1FBQ2hDLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDdEIsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDdkIsU0FBUztTQUNaO1FBR0QsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDdkMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUMvQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO1FBQy9ELEdBQUcsQ0FBQyxXQUFXLEdBQUMsR0FBRSxFQUFFO1lBQ2hCLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLG1DQUFtQyxDQUFDLENBQUM7UUFDbkUsQ0FBQztRQUNELEdBQUcsQ0FBQyxVQUFVLEdBQUMsR0FBRSxFQUFFO1lBQ2YsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztRQUNuRSxDQUFDO1FBRUQsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7WUFDZixxREFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBRUQsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDN0MsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDbEIsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3BDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUNoRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBRTVDLEtBQUksSUFBSSxDQUFDLEdBQUUsQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUM7WUFDcEQsS0FBSyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1NBQ2pFO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFFakQsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFFMUQsTUFBTSxDQUFDLFNBQVMsR0FBRywwQkFBMEIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUM3RSxJQUFJLENBQUMsU0FBUyxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxlQUFlLENBQUM7UUFDNUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLFdBQVcsRUFBQyxJQUFJLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLElBQUksQ0FBQztRQUN2RSxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBRXZCO0FBQ0wsQ0FBQztBQUVELGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6VGE7QUFDSDtBQUNDO0FBRTdCLFNBQVMsZUFBZSxDQUFDLFNBQW9CO0lBRWhELHNFQUFzRTtJQUN0RSxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsc0RBQVEsQ0FBQztJQUcxQixRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7UUFDaEQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEdBQUcscURBQU8sQ0FBQztRQUNwRCxvREFBVSxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUNELElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO0lBQzFDLHNCQUFzQjtJQUV0QixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLEtBQUssQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQztJQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBSW5CLCtDQUErQztJQUMvQyxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQztJQUNwRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDL0MsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQyxHQUFHLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ25ELEdBQUcsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNSLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3BDLEdBQUcsQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsR0FBRyxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsUUFBUSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUN6QjtJQUNELElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO0lBRTVDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMvQyxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNSLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLHNCQUFzQixDQUFDO1NBQ3BEO2FBQU07WUFDSCxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUM7U0FDN0M7UUFDRCxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDcEMsR0FBRyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDaEIsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDM0MsR0FBRyxDQUFDLEdBQUcsR0FBRyxlQUFlLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7S0FDcEI7SUFDRCxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQ3pDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLHlCQUF5QixDQUFDO0lBQ3BELFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xELElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDdkMsRUFBRSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztJQUN4QyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLG1CQUFtQixDQUFDO0lBQzVDLENBQUMsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO0lBQ3pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDdkQsQ0FBQyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRztLQUMxRDtJQUNELENBQUMsQ0FBQyxTQUFTLElBQUksTUFBTTtVQUNmLFFBQVEsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxNQUFNO1VBQzVDLFdBQVcsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDeEQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25ELElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUMsYUFBYSxDQUFDO0lBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYztJQUMvQixJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFDLGFBQWEsQ0FBQztJQUMzQyxPQUFPLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUM7SUFDMUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztJQUN0RixRQUFRLENBQUMsY0FBYyxDQUFDLHVCQUF1QixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN2RSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3hCLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3RGLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsR0FBRyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDM0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDO1FBQ3pDLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztRQUN6QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3ZELENBQUMsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUc7U0FDMUQ7UUFDRCxDQUFDLENBQUMsU0FBUyxJQUFJLE1BQU07Y0FDZixRQUFRLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsTUFBTTtjQUM1QyxXQUFXLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ3hELFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzdEO0FBQ0wsQ0FBQztBQUVELGlFQUFlLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JHOEI7QUFHRTtBQUU5RCxJQUFJLElBQUksR0FBZ0IsRUFBRSxDQUFDO0FBQzNCLElBQUksSUFBSSxHQUFXLENBQUM7QUFFYixTQUFTLFdBQVc7SUFDdkIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDO0lBQzdELGNBQWMsRUFBRSxDQUFDO0lBQ2pCLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO0lBQ25FLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO0lBQ25FLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDbEQsR0FBRyxDQUFDLE9BQU8sR0FBQyxHQUFFLEVBQUU7UUFDWixRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsR0FBQyx1RUFBWSxDQUFDO1FBQ3ZELHNFQUFtQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUNELG9CQUFvQjtJQUNwQixpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLGlCQUFpQixFQUFFLENBQUM7SUFDcEIsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRXBCLENBQUM7QUFHRCxTQUFTLFlBQVk7SUFDakIsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQixpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwQixDQUFDO0FBR0QsU0FBUyxjQUFjO0lBQ25CLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUTtJQUN4RCxLQUFLLElBQUksQ0FBQyxJQUFJLE1BQU0sRUFBRTtRQUNqQixDQUF1QixDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7WUFDcEMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6QixDQUFDO0tBQ0o7SUFDRCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVE7SUFDckQsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7UUFDZixDQUF1QixDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7WUFDcEMsYUFBYSxDQUFDLE1BQU0sQ0FBRSxDQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkQsQ0FBQztLQUNKO0lBRUQ7Ozs7Ozs7OztPQVNHO0FBQ1AsQ0FBQztBQUdELFNBQVMsY0FBYyxDQUFDLEtBQWE7SUFDakMsSUFBSSxZQUFZLEdBQUcsRUFBRTtJQUNyQixLQUFLLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtRQUN0QixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzNCLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtRQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztlQUNqRCxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUMzRCxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUM3QjtLQUNKO0lBQ0QsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUNWLElBQUksR0FBRyxZQUFZO0lBQ25CLGlCQUFpQixFQUFFLENBQUM7SUFDcEIsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BCLENBQUM7QUFHRCxTQUFTLGNBQWMsQ0FBQyxLQUFhO0lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkIsSUFBSSxZQUFZLEdBQUcsRUFBRTtJQUNyQixLQUFLLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtRQUN0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3JELElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssRUFBRTtnQkFDM0MsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDM0IsQ0FBQyxHQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQzthQUNwQztTQUNKO0tBQ0o7SUFDRCxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ1YsSUFBSSxHQUFHLFlBQVk7SUFDbkIsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQixZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEIsQ0FBQztBQUVELFNBQVMsYUFBYSxDQUFDLElBQVk7SUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQixJQUFJLFlBQVksR0FBRyxFQUFFLENBQUM7SUFDdEIsS0FBSyxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7UUFDdEIsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDaEMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDN0I7S0FDSjtJQUNELElBQUksR0FBRyxFQUFFLENBQUM7SUFDVixJQUFJLEdBQUcsWUFBWTtJQUNuQixpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwQixDQUFDO0FBSUQsU0FBUyxpQkFBaUI7SUFDdEIsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUVWLE1BQU0sV0FBVyxHQUFHO1FBQ2hCLElBQUksRUFBRSxxRkFBcUY7S0FDOUY7SUFFRCxNQUFNLFdBQVcsR0FBRztRQUNoQixJQUFJLEVBQUUseUZBQXlGO0tBQ2xHO0lBRUQsTUFBTSxXQUFXLEdBQUc7UUFDaEIsSUFBSSxFQUFFLHdFQUF3RTtLQUNqRjtJQUVELE1BQU0sV0FBVyxHQUFHO1FBQ2hCLElBQUksRUFBRSxxRUFBcUU7S0FDOUU7SUFFRCxNQUFNLGFBQWEsR0FBRztRQUNsQixJQUFJLEVBQUUscUZBQXFGO0tBQzlGO0lBRUQsTUFBTSxhQUFhLEdBQUc7UUFDbEIsSUFBSSxFQUFFLHVEQUF1RDtLQUNoRTtJQUVELE1BQU0sYUFBYSxHQUFHO1FBQ2xCLElBQUksRUFBRSw0S0FBNEs7S0FDckw7SUFFRCxNQUFNLE1BQU0sR0FBRztRQUNYLEVBQUUsRUFBRSxDQUFDO1FBQ0wsSUFBSSxFQUFFLFlBQVk7UUFDbEIsS0FBSyxFQUFFLENBQUMsRUFBQyxLQUFLLEVBQUUsVUFBVSxFQUFDLENBQUM7UUFDNUIsSUFBSSxFQUFFLElBQUk7UUFDVixPQUFPLEVBQUUsRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFDO1FBQ3pCLEtBQUssRUFBRSxXQUFXO0tBQ3JCO0lBRUQsTUFBTSxNQUFNLEdBQUc7UUFDWCxFQUFFLEVBQUUsQ0FBQztRQUNMLElBQUksRUFBRSxxQkFBcUI7UUFDM0IsS0FBSyxFQUFFLENBQUMsRUFBQyxLQUFLLEVBQUUsV0FBVyxFQUFDLENBQUM7UUFDN0IsSUFBSSxFQUFFLElBQUk7UUFDVixPQUFPLEVBQUUsRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFDO1FBQ3pCLEtBQUssRUFBRSxXQUFXO0tBQ3JCO0lBRUQsTUFBTSxNQUFNLEdBQUc7UUFDWCxFQUFFLEVBQUUsQ0FBQztRQUNMLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsS0FBSyxFQUFFLENBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUM7UUFDdkIsSUFBSSxFQUFFLElBQUk7UUFDVixPQUFPLEVBQUUsRUFBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUM7UUFDcEMsS0FBSyxFQUFFLFdBQVc7S0FDckI7SUFFRCxNQUFNLE1BQU0sR0FBRztRQUNYLEVBQUUsRUFBRSxDQUFDO1FBQ0wsSUFBSSxFQUFFLFlBQVk7UUFDbEIsS0FBSyxFQUFFLENBQUMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFDLENBQUM7UUFDM0IsSUFBSSxFQUFFLElBQUk7UUFDVixPQUFPLEVBQUUsRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFDO1FBQ3pCLEtBQUssRUFBRSxXQUFXO0tBQ3JCO0lBRUQsTUFBTSxlQUFlLEdBQUc7UUFDcEIsTUFBTSxFQUFFLENBQUM7UUFDVCxRQUFRLEVBQUUsY0FBYztRQUN4QixJQUFJLEVBQUUsU0FBUztRQUNmLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLEtBQUssRUFBRSw4QkFBOEI7UUFDckMsTUFBTSxFQUFFLEdBQUc7UUFDWCxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUM7S0FDdkI7SUFFRCxNQUFNLFVBQVUsR0FBYztRQUMxQixRQUFRLEVBQUUsSUFBSTtRQUNkLEtBQUssRUFBRSxvQkFBb0I7UUFDM0IsV0FBVyxFQUFFLG1EQUFtRDtRQUNoRSxTQUFTLEVBQUUsZUFBZTtRQUMxQixPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQztRQUN0RCxTQUFTLEVBQUUsTUFBTTtRQUNqQixRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUNsQyxPQUFPLEVBQUUsS0FBSztRQUNkLGVBQWUsRUFBRSxZQUFZO0tBQ2hDO0lBRUQsTUFBTSxVQUFVLEdBQWM7UUFDMUIsUUFBUSxFQUFFLElBQUk7UUFDZCxLQUFLLEVBQUUsb0JBQW9CO1FBQzNCLFdBQVcsRUFBRSxvQ0FBb0M7UUFDakQsU0FBUyxFQUFFLGVBQWU7UUFDMUIsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxhQUFhLENBQUM7UUFDdEQsU0FBUyxFQUFFLE1BQU07UUFDakIsUUFBUSxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDbEMsT0FBTyxFQUFFLEtBQUs7UUFDZCxlQUFlLEVBQUUsWUFBWTtLQUNoQztJQUdELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDeEI7YUFBTTtZQUNILElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3hCO0tBQ0o7SUFFRCx5REFBeUQ7SUFFekQsaUVBQWlFO0lBQ2pFLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsdUNBQXVDO0lBQ3ZDLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLFFBQVE7SUFDUixNQUFNO0FBQ1YsQ0FBQztBQUVEOztxQ0FFcUM7QUFFckMsU0FBUyxpQkFBaUI7SUFDdEIsSUFBSSxJQUFJLEdBQVcsSUFBSSxDQUFDLE1BQU07SUFDOUIsSUFBSSxJQUFJLEdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDMUMsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxLQUFLLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUNyQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzVCLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1IsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUM3QyxFQUFFLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ0gsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDekM7UUFDRCxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFO1lBQ2YsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDdkQsS0FBSyxJQUFJLEtBQUssSUFBSSxLQUFLLEVBQUU7Z0JBQ3JCLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO2dCQUN6QyxLQUFLLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQ3pDO1lBQ0QsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUM3QyxFQUFFLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN4QyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDO1FBQ0YsR0FBRyxDQUFDLFNBQVMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ3JEO0FBQ0wsQ0FBQztBQUVELFNBQVMsWUFBWSxDQUFDLENBQVM7SUFDM0IsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQzNELE9BQU8sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUMzQixJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUIsS0FBSyxLQUFLLEVBQUUsS0FBSyxJQUFJLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUNoQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3RCLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQ3ZCLFNBQVM7U0FDWjtRQUdELElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQ3ZDLElBQUksSUFBSSxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDdEIsa0dBQWtHO1FBQ2xHLElBQUkscUJBQXFCLEdBQVksS0FBSyxDQUFDO1FBRTNDLEtBQUksSUFBSSxPQUFPLElBQUksV0FBVyxFQUFDO1lBQzNCLElBQUcsSUFBSSxJQUFFLE9BQU8sRUFBQztnQkFDYixxQkFBcUIsR0FBQyxJQUFJLENBQUM7YUFDOUI7U0FDSjtRQUdELEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDN0MsSUFBRyxxQkFBcUIsRUFBQztZQUNyQixHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO1NBQ2xFO2FBQU07WUFDSCxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO1lBQy9ELEdBQUcsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLDREQUE0RCxDQUFDLENBQUM7WUFDOUYsR0FBRyxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsNERBQTRELENBQUMsQ0FBQztTQUNoRztRQUVELEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTdCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFO1lBQ2Ysa0JBQWtCLENBQUMsSUFBSSxDQUFDO1FBQzVCLENBQUM7UUFFRCxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3BDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQ3hELEtBQUksSUFBSSxDQUFDLEdBQUUsQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUM7WUFDcEQsV0FBVyxDQUFDLFNBQVMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUM3RTtRQUNELFdBQVcsQ0FBQyxTQUFTLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBRTNELFdBQVcsQ0FBQyxTQUFTLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUV0RSxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyxXQUFXLENBQUM7UUFDN0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUV2QjtJQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFN0IsQ0FBQztBQUVELGlFQUFlLFdBQVc7QUFHMUIsSUFBSSxXQUFXLEdBQWEsRUFBRSxDQUFDO0FBRXhCLFNBQVMsa0JBQWtCLENBQUMsR0FBVztJQUUxQyxJQUFJLGVBQWUsR0FBWSxLQUFLLENBQUM7SUFFckMsS0FBSSxJQUFJLE9BQU8sSUFBSSxXQUFXLEVBQUM7UUFDM0IsSUFBRyxHQUFHLElBQUUsT0FBTyxFQUFDO1lBQ1osZUFBZSxHQUFHLElBQUksQ0FBQztZQUN2QixXQUFXLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDdkQ7S0FDSjtJQUVELElBQUcsZUFBZSxFQUFDO1FBQ2YsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLG1DQUFtQyxDQUFDLENBQUM7UUFDeEYsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLDREQUE0RCxDQUFDLENBQUM7UUFDdkgsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLDREQUE0RCxDQUFDLENBQUM7S0FDekg7U0FBTTtRQUNILFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDM0QsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLG1DQUFtQyxDQUFDLENBQUM7S0FDM0Y7QUFFTCxDQUFDO0FBRU0sU0FBUyxjQUFjO0lBRTFCLHFFQUFxRTtJQUVyRSxrRUFBa0U7SUFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0lBRTNDLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFFakIsd0NBQXdDO0lBQ3hDLGlCQUFpQixFQUFFLENBQUM7SUFDcEIsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQixZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFcEIsQ0FBQztBQUVNLFNBQVMsY0FBYztJQUUxQixtREFBbUQ7SUFFbkQsK0RBQStEO0lBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUU5QyxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBRWpCLHdDQUF3QztJQUN4QyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLGlCQUFpQixFQUFFLENBQUM7SUFDcEIsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRXBCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoWUQsSUFBSSxRQUFRLEdBQWdCLEVBQUU7QUFDOUIsSUFBSSxRQUFRLEdBQWdCLEVBQUU7QUFDOUIsSUFBSSxRQUFRLEdBQWEsRUFBRTtBQUMzQixJQUFJLGdCQUF3QixDQUFDO0FBQzdCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztBQUdkLFNBQVMsV0FBVztJQUNoQixLQUFLLENBQUMsYUFBYSxDQUFDO1NBQ2YsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDbkMsSUFBSSxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUU7UUFDakIsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLEtBQUssSUFBSSxJQUFJLElBQUksVUFBVSxFQUFFO1lBQ3pCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkI7UUFDRCxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JELFNBQVMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLEtBQUssSUFBSSxJQUFJLElBQUksUUFBUSxFQUFFO1lBQ3ZCLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEMsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM3QyxLQUFLLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDckIsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDckMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFDN0MsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7Z0JBRWpCLElBQUksSUFBSSxHQUFZLElBQUksQ0FBQztnQkFFekIsSUFBSSxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtvQkFDdEIsUUFBUSxHQUFHLEVBQUUsQ0FBQztvQkFDZCxLQUFLLEdBQUcsQ0FBQyxDQUFDO2lCQUNiO2dCQUNELEtBQUssSUFBSSxPQUFPLElBQUksUUFBUSxFQUFFO29CQUMxQixJQUFJLE9BQU8sSUFBSSxFQUFFLENBQUMsU0FBUyxFQUFFO3dCQUN6QixJQUFJLEdBQUcsS0FBSyxDQUFDO3FCQUNoQjtpQkFDSjtnQkFDRCxJQUFJLElBQUksRUFBRTtvQkFDTixRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDL0IsS0FBSyxFQUFFLENBQUM7aUJBQ1g7Z0JBQ0QsaUJBQWlCLEVBQUUsQ0FBQztZQUN4QixDQUFDO1lBQ0QsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQixTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQyxDQUFDO0FBQ1YsQ0FBQztBQUVELFNBQVMsWUFBWTtJQUNqQixLQUFLLENBQUMsa0JBQWtCLENBQUM7U0FDcEIsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDbkMsSUFBSSxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUU7UUFDakIsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLEtBQUssSUFBSSxJQUFJLElBQUksVUFBVSxFQUFFO1lBQ3pCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkI7UUFDRCxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JELFNBQVMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLEtBQUssSUFBSSxJQUFJLElBQUksUUFBUSxFQUFFO1lBQ3ZCLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEMsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFDMUMsRUFBRSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFO2dCQUNkLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDcEMsQ0FBQztZQUNELFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDeEI7SUFDTCxDQUFDLENBQUM7QUFDVixDQUFDO0FBR0Qsc0RBQXNEO0FBQ3RELFNBQVMsaUJBQWlCO0lBQ3RCLElBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDN0QsYUFBYSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDdEMsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxFQUFFLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQzVCO0FBQ0wsQ0FBQztBQUlELG1EQUFtRDtBQUM1QyxTQUFTLG1CQUFtQjtJQUMvQixZQUFZLEVBQUUsQ0FBQztJQUNmLFdBQVcsRUFBRSxDQUFDO0lBQ2QsUUFBUSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQztBQUM3RSxDQUFDO0FBRUQsU0FBUyxpQkFBaUI7SUFDMUI7Ozs7O01BS0U7SUFDRSxNQUFNLE9BQU8sR0FBRztRQUNaLE1BQU0sRUFBRSxNQUFNO1FBQ2QsT0FBTyxFQUFFO1lBQ0wsY0FBYyxFQUFHLGtCQUFrQjtTQUN0QztRQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztLQUM1QixDQUFDO0FBQ04sQ0FBQztBQUVELGlFQUFlLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25ISDtBQUV6QixTQUFTLFNBQVM7SUFDckIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEdBQUcsb0RBQUcsQ0FBQztBQUN0RCxDQUFDO0FBRUQsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0owQjtBQUVuRCxJQUFJLEtBQUssR0FBYyxFQUFFLENBQUM7QUFDMUIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBRWIsU0FBUyxTQUFTLENBQUMsR0FBVztJQUMxQixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBRXBCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2hELElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDbkIsT0FBTztTQUNWO1FBQ0QsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25ELFdBQVcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsOERBQVcsQ0FBQztRQUNsQyxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQzVDLEVBQUUsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLGlEQUFpRCxDQUFDLENBQUM7UUFDbEYsRUFBRSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsMENBQTBDLENBQUMsQ0FBQztRQUMxRSxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3hDLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0MsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQyxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLHdCQUF3QixDQUFDLENBQUM7UUFDeEQsT0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDNUIsT0FBTyxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7UUFDbEMsT0FBTyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUUsR0FBRyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUMsQ0FBQztRQUNwRSxPQUFPLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLFdBQVcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxvQ0FBb0MsQ0FBQztRQUNyTCxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ3hCO0FBRUwsQ0FBQztBQUVNLFNBQVMsV0FBVztJQUN2QixLQUFLLENBQUMsT0FBTyxDQUFDO1NBQ1QsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDbkMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDWCxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsS0FBSyxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7WUFDdEIsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN2QjtRQUNELGdCQUFnQixFQUFFLENBQUM7UUFDbkIsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLENBQUMsQ0FBQyxDQUFDO0FBQ1gsQ0FBQztBQUVEOzs7Ozs7RUFNRTtBQUVGLFNBQVMsZ0JBQWdCO0lBQ3JCLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUNyRCxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDbkQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNwQyxJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNSLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLENBQUM7WUFDN0MsRUFBRSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDM0M7YUFBTTtZQUNILEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztRQUN2QyxHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtZQUNmLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQzNELEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxFQUFFO2dCQUNyQixLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztnQkFDekMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUN6QztZQUNELEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLENBQUM7WUFDN0MsRUFBRSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDeEMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUM7UUFDRixHQUFHLENBQUMsU0FBUyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ3pEO0FBR0wsQ0FBQztBQUVELFNBQVMsWUFBWSxDQUFDLEVBQVU7SUFDNUIsTUFBTSxPQUFPLEdBQUc7UUFDWixNQUFNLEVBQUUsTUFBTTtRQUNkLE9BQU8sRUFBRTtZQUNMLGNBQWMsRUFBRSxrQkFBa0I7U0FDckM7UUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7S0FDM0I7SUFDRCxLQUFLLENBQUMsUUFBUSxFQUFFO1FBQ1osTUFBTSxFQUFFLE1BQU07UUFDZCxPQUFPLEVBQUU7WUFDTCxjQUFjLEVBQUUsa0JBQWtCO1NBQ3JDO1FBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO0tBQzNCLENBQUM7U0FDRyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNuQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xGLENBQUM7QUFFRCxTQUFTLHVCQUF1QixDQUFDLEVBQVU7SUFDdkMsTUFBTSxPQUFPLEdBQUc7UUFDWixNQUFNLEVBQUUsUUFBUTtRQUNoQixPQUFPLEVBQUU7WUFDTCxjQUFjLEVBQUUsa0JBQWtCO1NBQ3JDO1FBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO0tBQzNCO0lBQ0QsS0FBSyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7U0FDbEIsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDbkMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUVyRixDQUFDO0FBRUQsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdIRztBQUVnQjtBQUNpQjtBQUVIO0FBQ0c7QUFDYjtBQUNGO0FBTWhELDZEQUE2RDtBQUU3RCxJQUFJLElBQUksR0FBZ0IsRUFBRSxDQUFDO0FBRTNCLFNBQVMsZ0JBQWdCO0lBQ3JCLElBQUksR0FBRyxFQUFFLENBQUM7SUFFVixNQUFNLFdBQVcsR0FBRztRQUNoQixJQUFJLEVBQUUscUZBQXFGO0tBQzlGO0lBRUQsTUFBTSxXQUFXLEdBQUc7UUFDaEIsSUFBSSxFQUFFLHlGQUF5RjtLQUNsRztJQUVELE1BQU0sV0FBVyxHQUFHO1FBQ2hCLElBQUksRUFBRSx3RUFBd0U7S0FDakY7SUFFRCxNQUFNLFdBQVcsR0FBRztRQUNoQixJQUFJLEVBQUUsd0VBQXdFO0tBQ2pGO0lBRUQsTUFBTSxhQUFhLEdBQUc7UUFDbEIsSUFBSSxFQUFFLHFGQUFxRjtLQUM5RjtJQUVELE1BQU0sYUFBYSxHQUFHO1FBQ2xCLElBQUksRUFBRSx1REFBdUQ7S0FDaEU7SUFFRCxNQUFNLGFBQWEsR0FBRztRQUNsQixJQUFJLEVBQUUsNEtBQTRLO0tBQ3JMO0lBRUQsTUFBTSxNQUFNLEdBQUc7UUFDWCxFQUFFLEVBQUUsQ0FBQztRQUNMLElBQUksRUFBRSxZQUFZO1FBQ2xCLEtBQUssRUFBRSxDQUFDLEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBQyxDQUFDO1FBQzVCLElBQUksRUFBRSxJQUFJO1FBQ1YsT0FBTyxFQUFFLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBQztRQUN6QixLQUFLLEVBQUUsV0FBVztLQUNyQjtJQUVELE1BQU0sTUFBTSxHQUFHO1FBQ1gsRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUscUJBQXFCO1FBQzNCLEtBQUssRUFBRSxDQUFDLEVBQUMsS0FBSyxFQUFFLFdBQVcsRUFBQyxDQUFDO1FBQzdCLElBQUksRUFBRSxJQUFJO1FBQ1YsT0FBTyxFQUFFLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBQztRQUN6QixLQUFLLEVBQUUsV0FBVztLQUNyQjtJQUVELE1BQU0sTUFBTSxHQUFHO1FBQ1gsRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCLEtBQUssRUFBRSxDQUFDLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDO1FBQ3ZCLElBQUksRUFBRSxJQUFJO1FBQ1YsT0FBTyxFQUFFLEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFDO1FBQ3BDLEtBQUssRUFBRSxXQUFXO0tBQ3JCO0lBRUQsTUFBTSxNQUFNLEdBQUc7UUFDWCxFQUFFLEVBQUUsQ0FBQztRQUNMLElBQUksRUFBRSxZQUFZO1FBQ2xCLEtBQUssRUFBRSxDQUFDLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBQyxDQUFDO1FBQzNCLElBQUksRUFBRSxJQUFJO1FBQ1YsT0FBTyxFQUFFLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBQztRQUN6QixLQUFLLEVBQUUsV0FBVztLQUNyQjtJQUVELE1BQU0sZUFBZSxHQUFHO1FBQ3BCLE1BQU0sRUFBRSxDQUFDO1FBQ1QsUUFBUSxFQUFFLGNBQWM7UUFDeEIsSUFBSSxFQUFFLFNBQVM7UUFDZixPQUFPLEVBQUUsU0FBUztRQUNsQixLQUFLLEVBQUUsOEJBQThCO1FBQ3JDLE1BQU0sRUFBRSxHQUFHO1FBQ1gsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDO0tBQ3ZCO0lBRUQsTUFBTSxVQUFVLEdBQWM7UUFDMUIsUUFBUSxFQUFFLElBQUk7UUFDZCxLQUFLLEVBQUUsb0JBQW9CO1FBQzNCLFdBQVcsRUFBRSxtREFBbUQ7UUFDaEUsU0FBUyxFQUFFLGVBQWU7UUFDMUIsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQztRQUNwRSxTQUFTLEVBQUUsTUFBTTtRQUNqQixRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUNsQyxPQUFPLEVBQUUsS0FBSztRQUNkLGVBQWUsRUFBRSxZQUFZO0tBQ2hDO0lBRUQsTUFBTSxVQUFVLEdBQWM7UUFDMUIsUUFBUSxFQUFFLElBQUk7UUFDZCxLQUFLLEVBQUUsZ0JBQWdCO1FBQ3ZCLFdBQVcsRUFBRSxtREFBbUQ7UUFDaEUsU0FBUyxFQUFFLGVBQWU7UUFDMUIsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQztRQUNwRSxTQUFTLEVBQUUsTUFBTTtRQUNqQixRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUNsQyxPQUFPLEVBQUUsS0FBSztRQUNkLGVBQWUsRUFBRSxZQUFZO0tBQ2hDO0lBRUQsTUFBTSxVQUFVLEdBQWM7UUFDMUIsUUFBUSxFQUFFLElBQUk7UUFDZCxLQUFLLEVBQUUsaUJBQWlCO1FBQ3hCLFdBQVcsRUFBRSxtREFBbUQ7UUFDaEUsU0FBUyxFQUFFLGVBQWU7UUFDMUIsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQztRQUNwRSxTQUFTLEVBQUUsTUFBTTtRQUNqQixRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUNsQyxPQUFPLEVBQUUsS0FBSztRQUNkLGVBQWUsRUFBRSxZQUFZO0tBQ2hDO0lBRUQsTUFBTSxVQUFVLEdBQWM7UUFDMUIsUUFBUSxFQUFFLElBQUk7UUFDZCxLQUFLLEVBQUUsZ0JBQWdCO1FBQ3ZCLFdBQVcsRUFBRSxtREFBbUQ7UUFDaEUsU0FBUyxFQUFFLGVBQWU7UUFDMUIsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQztRQUNwRSxTQUFTLEVBQUUsTUFBTTtRQUNqQixRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUNsQyxPQUFPLEVBQUUsS0FBSztRQUNkLGVBQWUsRUFBRSxZQUFZO0tBQ2hDO0lBR0QsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUd0Qix5REFBeUQ7SUFFekQsaUVBQWlFO0lBQ2pFLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsdUNBQXVDO0lBQ3ZDLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLFFBQVE7SUFDUixNQUFNO0FBQ1YsQ0FBQztBQUdNLFNBQVMsVUFBVTtJQUN0QixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsa0RBQUksQ0FBQztJQUd0QixRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtRQUNyRCxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsR0FBRyw2REFBTyxDQUFDO1FBQ3BELDREQUFVLEVBQUUsQ0FBQztJQUNqQixDQUFDLENBQUM7SUFFRixRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7UUFDakQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEdBQUcsdUVBQVksQ0FBQztRQUN6RCxzRUFBbUIsRUFBRSxDQUFDO0lBQzFCLENBQUMsQ0FBQztJQUVGLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFO1FBQ3hELElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFxQixDQUFDO1FBQ3pFLElBQUcsT0FBTyxDQUFDLEtBQUssSUFBSSxFQUFFLEVBQUM7WUFDbkIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEdBQUcsNkRBQU8sQ0FBQztZQUNwRCw0REFBVSxFQUFFLENBQUM7WUFDYiwrREFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQztJQUNMLENBQUM7SUFFRCxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQ3JELElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFxQixDQUFDO1FBQ3pFLElBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLEtBQUssSUFBRyxFQUFFLEVBQUM7WUFDdEMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEdBQUcsNkRBQU8sQ0FBQztZQUNwRCw0REFBVSxFQUFFLENBQUM7WUFDYiwrREFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQztJQUVMLENBQUM7SUFFRCxnQkFBZ0IsRUFBRSxDQUFDO0lBQ25CLGtCQUFrQixFQUFFLENBQUM7QUFJekIsQ0FBQztBQUlHLFNBQVMsa0JBQWtCO0lBRXZCLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUU1RCxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDO1FBQ3pDLElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakQsSUFBRyxDQUFDLElBQUksQ0FBQyxFQUFDO1lBQ04sWUFBWSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztTQUM5RDthQUFJO1lBQ0QsWUFBWSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7U0FDbkQ7UUFFTCxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RELEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNyQyxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzNDLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDMUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztRQUN6QyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckQsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRztTQUMzRDtRQUNELElBQUksQ0FBQyxTQUFTLElBQUksTUFBTTtjQUN0QixRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsR0FBRztjQUN2QyxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLE1BQU07Y0FDekQsY0FBYyxDQUFDO1FBQ2hCLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEMsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDaEMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUMvQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtZQUNqQixRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsR0FBRyw4REFBUSxDQUFDO1lBQ3JELDZEQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsQ0FBQztRQUNELEtBQUssQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLENBQUM7UUFHckMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMzQixZQUFZLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQixPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNyQztBQUNMLENBQUM7QUFDVCxpRUFBZSxVQUFVLEVBQUM7QUFFMUI7Ozs7Ozs7RUFPRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM1E4QjtBQUNPO0FBQ1k7QUFDWTtBQUNFO0FBQ3ZCO0FBRUY7QUFFSDtBQUk5QixTQUFTLFdBQVc7SUFDdkIsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QyxRQUFRLENBQUMsU0FBUyxHQUFHLG1EQUFLLENBQUM7SUFDM0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0QsY0FBYyxFQUFFLENBQUM7SUFDakIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO0lBQzFELFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQztBQUN2RSxDQUFDO0FBRUQsU0FBUyxlQUFlO0lBQ3BCLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxHQUFHLHlFQUFhLENBQUM7SUFDakUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxTQUFTLEdBQUcsK0VBQVMsQ0FBQztJQUMvRCxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7SUFDN0QsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO0lBQ2hFLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQztJQUM3RCxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7SUFDaEUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7SUFDakUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDO0lBQzlELFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDO0lBQ2pFLFFBQVEsQ0FBQyxjQUFjLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDO0FBQzdFLENBQUM7QUFFRCxTQUFTLGNBQWM7SUFDbkIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLEdBQUcseURBQUssQ0FBQztJQUN6RCxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFNBQVMsR0FBRywrREFBVyxDQUFDO0lBQ2pFLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQztJQUNqRSxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7SUFDekQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQ3hELElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxPQUFPLEVBQUU7WUFDbEIsVUFBVSxFQUFFLENBQUM7U0FDaEI7SUFDTCxDQUFDO0lBQ0QsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQ3hELElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxPQUFPLEVBQUU7WUFDbEIsVUFBVSxFQUFFLENBQUM7U0FDaEI7SUFDTCxDQUFDO0FBQ0wsQ0FBQztBQUVELFNBQWUsZUFBZTs7UUFDMUIsSUFBSSxNQUFNLEdBQVksTUFBTSxXQUFXLEVBQUUsQ0FBQztRQUMxQyxJQUFHLE1BQU0sRUFBQztZQUNOLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxHQUFHLDJEQUFNLENBQUM7WUFDMUQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ3hELHNEQUFVLEVBQUUsQ0FBQztTQUNoQjtJQUNMLENBQUM7Q0FBQTtBQUVELFNBQVMsV0FBVztJQUNoQixNQUFNLElBQUksR0FBRztRQUNULFFBQVEsRUFBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFzQixDQUFDLEtBQUs7UUFDL0UsUUFBUSxFQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQXNCLENBQUMsS0FBSztRQUMvRSxJQUFJLEVBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQXNCLENBQUMsS0FBSztRQUN2RSxPQUFPLEVBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQXNCLENBQUMsS0FBSztRQUM3RSxLQUFLLEVBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQXNCLENBQUMsS0FBSztLQUM1RSxDQUFDO0lBRUYsTUFBTSxPQUFPLEdBQUc7UUFDWixNQUFNLEVBQUUsTUFBTTtRQUNkLE9BQU8sRUFBRTtZQUNMLGNBQWMsRUFBRSxrQkFBa0I7U0FDckM7UUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7S0FDN0I7SUFFRCxLQUFLLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBQyxFQUFFLFNBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBQyxFQUFFO1FBQ25FLElBQUcsSUFBSSxFQUFDO1lBQ0osUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxTQUFTLEdBQUMsMEJBQTBCLENBQUM7WUFDN0UsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzNFO2FBQUk7WUFDRCxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFNBQVMsR0FBQyxnQ0FBZ0MsQ0FBQztZQUNuRixRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN0RTtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQztBQUVELFNBQVMsVUFBVTtJQUNmLE1BQU0sS0FBSyxHQUFHO1FBQ1YsUUFBUSxFQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQXNCLENBQUMsS0FBSztRQUMvRSxRQUFRLEVBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBc0IsQ0FBQyxLQUFLO0tBQ2xGO0lBRUQsTUFBTSxPQUFPLEdBQUc7UUFDWixNQUFNLEVBQUUsTUFBTTtRQUNkLE9BQU8sRUFBRTtZQUNMLGNBQWMsRUFBRyxrQkFBa0I7U0FDdEM7UUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7S0FDOUIsQ0FBQztJQUNGLElBQUksTUFBTSxHQUFTLEtBQUssQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDO1NBQzFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBQyxFQUFFLFNBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNqQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUMsRUFBRTtRQUNWLElBQUcsSUFBSSxDQUFDLE1BQU0sRUFBQztZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLEdBQUMsdUJBQXVCLENBQUM7WUFDekUsa0RBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDN0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3JFLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN4RSxzREFBVSxFQUFFLENBQUM7U0FDaEI7YUFBSTtZQUNELFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxHQUFDLCtCQUErQixDQUFDO1NBQ3BGO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBRUQsU0FBZSxXQUFXOztRQUN0QixJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO2FBQ25DLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBQyxFQUFFLFNBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNqQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUMsRUFBRTtZQUNWLElBQUcsSUFBSSxFQUFDO2dCQUNKLGtEQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3BCLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNoRSxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUN0RTtZQUNELE9BQU8sSUFBSTtRQUFBLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLE9BQU8sYUFBYSxDQUFDO0lBQ3pCLENBQUM7Q0FBQTtBQUVELFNBQVMsWUFBWTtJQUNqQixJQUFJLFFBQVEsR0FBSSxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFzQixDQUFDLEtBQUssQ0FBRTtJQUN0RixJQUFJLFFBQVEsR0FBSSxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFzQixDQUFDLEtBQUssQ0FBQztJQUNyRixJQUFJLElBQUksR0FBSSxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBc0IsQ0FBQyxLQUFLLENBQUM7SUFDN0UsSUFBSSxPQUFPLEdBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQXNCLENBQUMsS0FBSyxDQUFDO0lBQ25GLElBQUksS0FBSyxHQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFzQixDQUFDLEtBQUssQ0FBQztJQUMvRSxJQUFJLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsd0JBQXdCLENBQXFCLENBQUM7SUFDN0YsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUUzQyxJQUFHLFFBQVEsSUFBRSxFQUFFLElBQUksUUFBUSxJQUFFLEVBQUUsSUFBRyxJQUFJLElBQUUsRUFBRSxJQUFJLE9BQU8sSUFBRSxFQUFFLElBQUksS0FBSyxJQUFFLEVBQUUsRUFBQztRQUNsRSxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBdUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQzlFLElBQUksUUFBUSxJQUFJLGdCQUFnQixDQUFDLEtBQUssRUFBRTtZQUNwQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUM7U0FDaEU7YUFBSTtZQUNELGdCQUFnQixDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztTQUNsRTtLQUNKO1NBQUk7UUFDRCxJQUFJLFFBQVEsSUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUU7WUFDcEMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1NBQ2hFO2FBQUk7WUFDRCxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLHNCQUFzQixDQUFDLENBQUM7WUFDL0QsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDdEU7S0FDSjtBQUVMLENBQUM7QUFJRCxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaktLO0FBQ1M7QUFDSztBQUNnQjtBQUNsQjtBQUdOO0FBQ2M7QUFDRDtBQUNnQjtBQUNSO0FBQ047QUFDTztBQUNIO0FBQ0s7QUFDTjtBQUVqRCxTQUFTLFNBQVM7SUFFckIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEdBQUcsb0RBQUcsQ0FBQztJQUNsRCx3REFBVyxFQUFFLENBQUM7SUFDZCxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7UUFDM0MsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQy9DLHNEQUFVLEVBQUUsQ0FBQztJQUVqQixDQUFDLENBQUM7SUFFRixRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sR0FBQyxHQUFFLEVBQUU7UUFDM0MsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEdBQUMsc0VBQVcsQ0FBQztRQUN0RCxxRUFBYyxFQUFFLENBQUM7SUFDbkIsQ0FBQyxDQUFDO0lBRUYsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFO1FBQ2pELFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxHQUFHLDZEQUFPLENBQUM7UUFDcEQsNERBQVUsRUFBRSxDQUFDO0lBQ2pCLENBQUMsQ0FBQztJQUNGLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtRQUNuRCxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsR0FBRyx3RUFBWSxDQUFDO1FBQ3pELHVFQUFtQixFQUFFLENBQUM7SUFDMUIsQ0FBQyxDQUFDO0lBQ0YsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFO1FBQ3BELFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxHQUFHLHFFQUFlLENBQUM7UUFDNUQscUVBQVcsRUFBRSxDQUFDO0lBQ2xCLENBQUMsQ0FBQztJQUNGLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtRQUNqRCxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsR0FBRywyRUFBYyxDQUFDO1FBQzNELDBFQUFXLEVBQUUsQ0FBQztJQUNsQixDQUFDLENBQUM7SUFDRixRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7UUFDOUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEdBQUcsbUVBQU8sQ0FBQztRQUNwRCxrRUFBVyxFQUFFLENBQUM7SUFDbEIsQ0FBQyxDQUFDO0lBQ0YsS0FBSyxDQUFDLGNBQWMsQ0FBQztTQUNwQixJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNuQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUMsRUFBRTtRQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQixDQUFDLENBQUM7QUFDTixDQUFDO0FBRU0sU0FBUyxNQUFNLENBQUMsV0FBb0I7SUFDdkMsTUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM3RCxNQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbkUsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuRCxNQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbkUsTUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2pFLE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUQsSUFBRyxXQUFXLElBQUUsT0FBTyxFQUFDO1FBQ3BCLGNBQWMsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoRCxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDekMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVDLGNBQWMsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDO0tBQzNDO1NBQUssSUFBRyxXQUFXLElBQUUsTUFBTSxFQUFDO1FBQ3pCLGNBQWMsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2pELFNBQVMsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QyxjQUFjLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQztLQUMzQztTQUFJO1FBQ0QsY0FBYyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDOUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoRCxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2pELFNBQVMsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNqRCxjQUFjLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUNqRDtBQUNMLENBQUM7QUFJRCxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0ZXO0FBR3BDLElBQUksSUFBSSxDQUFDO0FBQ1QsSUFBSSxRQUFRLENBQUM7QUFDYixJQUFJLFNBQVMsQ0FBQztBQUVQLFNBQVMsV0FBVztJQUN2QixLQUFLLENBQUMsY0FBYyxDQUFDO1NBQ3BCLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ25DLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ1gsSUFBSSxJQUFJLElBQUksT0FBTyxFQUFFO1lBQ2pCLElBQUksR0FBRyxPQUFPLENBQUM7U0FDbEI7YUFBTSxJQUFJLElBQUksSUFBSSxNQUFNLEVBQUU7WUFDdkIsSUFBSSxHQUFHLE1BQU07U0FDaEI7YUFBTTtZQUNILElBQUksR0FBRyxPQUFPO1NBQ2pCO1FBRUQsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLHFEQUFPLENBQUM7UUFDekIsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQy9CLENBQUMsQ0FBQztBQUVOLENBQUM7QUFFRCxTQUFTLGFBQWEsQ0FBQyxJQUFXO0lBRTlCLElBQUksSUFBSSxJQUFJLE9BQU8sRUFBRTtRQUNqQixnQkFBZ0IsRUFBRSxDQUFDO0tBRXRCO1NBQU0sSUFBRyxJQUFJLElBQUksTUFBTSxFQUFFO1FBQ3RCLGVBQWUsRUFBRSxDQUFDO0tBQ3JCO1NBQUk7S0FFSjtBQUVMLENBQUM7QUFFRCxTQUFTLGdCQUFnQjtJQUVyQixLQUFLLENBQUMsWUFBWSxDQUFDO1NBQ2xCLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ25DLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ1gsU0FBUyxHQUFDLElBQUksQ0FBQztRQUNmLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNwRCxFQUFFLENBQUMsU0FBUyxHQUFDLDRCQUE0QixHQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7UUFDN0QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVqQixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2xELElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsRUFBRSxDQUFDLFNBQVMsR0FBQyxtQ0FBbUM7Y0FDOUMsaUNBQWlDLEdBQUMsU0FBUyxDQUFDLFFBQVE7Y0FDcEQsMEJBQTBCLEdBQUMsU0FBUyxDQUFDLEtBQUs7Y0FDMUMseUJBQXlCLEdBQUMsU0FBUyxDQUFDLElBQUk7Y0FDeEMsNEJBQTRCLEdBQUMsU0FBUyxDQUFDLE9BQU87UUFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFFZixJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDekQsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFPLEdBQUMsR0FBRSxFQUFFO1lBQ2IsSUFBSSxHQUFHLEdBQUc7Z0JBQ04sVUFBVSxFQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFzQixDQUFDLEtBQUs7Z0JBQzVFLE9BQU8sRUFBRyxFQUFFO2FBQ2Y7WUFFRCxJQUFJLE9BQU8sR0FBRztnQkFDVixNQUFNLEVBQUUsS0FBSztnQkFDYixPQUFPLEVBQUU7b0JBQ0wsY0FBYyxFQUFFLGtCQUFrQjtpQkFDckM7Z0JBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO2FBQzVCO1lBRUQsS0FBSyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUM7aUJBQzVCLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBQyxFQUFFLFNBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDakMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFDLEVBQUU7Z0JBRVYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDakIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQXNCLENBQUMsS0FBSyxHQUFDLEVBQUUsQ0FBQztnQkFDbkUsV0FBVyxFQUFFO1lBQ2pCLENBQUMsQ0FBQztRQUVOLENBQUM7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFDLGlCQUFpQjtRQUNoQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUVwQixJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDN0QsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxPQUFPLEdBQUMsR0FBRSxFQUFFO1lBQ2IsSUFBSSxHQUFHLEdBQUc7Z0JBQ04sVUFBVSxFQUFHLEVBQUU7Z0JBQ2YsT0FBTyxFQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFzQixDQUFDLEtBQUs7YUFDekU7WUFFRCxJQUFJLE9BQU8sR0FBRztnQkFDVixNQUFNLEVBQUUsS0FBSztnQkFDYixPQUFPLEVBQUU7b0JBQ0wsY0FBYyxFQUFFLGtCQUFrQjtpQkFDckM7Z0JBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO2FBQzVCO1lBRUQsS0FBSyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUM7aUJBQzVCLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBQyxFQUFFLFNBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDakMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFDLEVBQUU7Z0JBRVYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDakIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQXNCLENBQUMsS0FBSyxHQUFDLEVBQUUsQ0FBQztnQkFDaEUsV0FBVyxFQUFFO1lBRWpCLENBQUMsQ0FBQztRQUNOLENBQUM7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFDLGNBQWM7UUFDN0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVyQixJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUM7UUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBQyxpQkFBaUI7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRSxHQUFFLEVBQUU7WUFDZCxJQUFJLEdBQUcsR0FBRztnQkFDTixhQUFhLEVBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQXNCLENBQUMsS0FBSztnQkFDbEYsYUFBYSxFQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFzQixDQUFDLEtBQUs7YUFDckY7WUFFRCxJQUFJLE9BQU8sR0FBRztnQkFDVixNQUFNLEVBQUUsS0FBSztnQkFDYixPQUFPLEVBQUU7b0JBQ0wsY0FBYyxFQUFFLGtCQUFrQjtpQkFDckM7Z0JBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO2FBQzVCO1lBRUQsS0FBSyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUM7aUJBQzNCLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBQyxFQUFFLFNBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDakMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFDLEVBQUU7Z0JBRVYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDakIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQXNCLENBQUMsS0FBSyxHQUFDLEVBQUUsQ0FBQztnQkFDckUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQXNCLENBQUMsS0FBSyxHQUFDLEVBQUUsQ0FBQztZQUUxRSxDQUFDLENBQUM7UUFDTixDQUFDO1FBQ0QsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVwQixDQUFDLENBQUM7QUFFTixDQUFDO0FBRUQsU0FBUyxlQUFlO0lBQ3BCLEtBQUssQ0FBQyxXQUFXLENBQUM7U0FDakIsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDbkMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDWCxRQUFRLEdBQUMsSUFBSSxDQUFDO1FBQ2QsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3BELEVBQUUsQ0FBQyxTQUFTLEdBQUMsb0JBQW9CLEdBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUNyRCxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbEQsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxFQUFFLENBQUMsU0FBUyxHQUFDLG1DQUFtQztjQUM5QyxpQ0FBaUMsR0FBQyxRQUFRLENBQUMsUUFBUTtjQUNuRCwwQkFBMEIsR0FBQyxRQUFRLENBQUMsS0FBSztjQUN6Qyx3QkFBd0IsR0FBQyxRQUFRLENBQUMsSUFBSTtjQUN0Qyw0QkFBNEIsR0FBQyxRQUFRLENBQUMsT0FBTztRQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUVmLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN6RCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE9BQU8sR0FBQyxHQUFFLEVBQUU7WUFFYixJQUFJLEdBQUcsR0FBRztnQkFDTixVQUFVLEVBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQXNCLENBQUMsS0FBSztnQkFDNUUsT0FBTyxFQUFHLEVBQUU7YUFDZjtZQUVELElBQUksT0FBTyxHQUFHO2dCQUNWLE1BQU0sRUFBRSxLQUFLO2dCQUNiLE9BQU8sRUFBRTtvQkFDTCxjQUFjLEVBQUUsa0JBQWtCO2lCQUNyQztnQkFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7YUFDNUI7WUFFRCxLQUFLLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQztpQkFDM0IsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFDLEVBQUUsU0FBUSxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNqQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUMsRUFBRTtnQkFFVixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqQixRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBc0IsQ0FBQyxLQUFLLEdBQUMsRUFBRSxDQUFDO2dCQUNuRSxXQUFXLEVBQUU7WUFDakIsQ0FBQyxDQUFDO1FBQ04sQ0FBQztRQUVELElBQUksQ0FBQyxTQUFTLEdBQUMsaUJBQWlCO1FBQ2hDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBRXBCLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM3RCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLE9BQU8sR0FBQyxHQUFFLEVBQUU7WUFFYixJQUFJLEdBQUcsR0FBRztnQkFDTixVQUFVLEVBQUcsRUFBRTtnQkFDZixPQUFPLEVBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQXNCLENBQUMsS0FBSzthQUN6RTtZQUVELElBQUksT0FBTyxHQUFHO2dCQUNWLE1BQU0sRUFBRSxLQUFLO2dCQUNiLE9BQU8sRUFBRTtvQkFDTCxjQUFjLEVBQUUsa0JBQWtCO2lCQUNyQztnQkFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7YUFDNUI7WUFFRCxLQUFLLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQztpQkFDM0IsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFDLEVBQUUsU0FBUSxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNqQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUMsRUFBRTtnQkFFVixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqQixRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBc0IsQ0FBQyxLQUFLLEdBQUMsRUFBRSxDQUFDO2dCQUMvRCxXQUFXLEVBQUUsQ0FBQztZQUNuQixDQUFDLENBQUM7UUFDTixDQUFDO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBQyxjQUFjO1FBQzdCLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFekIsQ0FBQyxDQUFDO0lBRUYsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDO0lBQzdDLElBQUksQ0FBQyxTQUFTLEdBQUMsaUJBQWlCO0lBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUUsR0FBRSxFQUFFO1FBQ2QsSUFBSSxHQUFHLEdBQUc7WUFDTixhQUFhLEVBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQXNCLENBQUMsS0FBSztZQUNsRixhQUFhLEVBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQXNCLENBQUMsS0FBSztTQUNyRjtRQUVELElBQUksT0FBTyxHQUFHO1lBQ1YsTUFBTSxFQUFFLEtBQUs7WUFDYixPQUFPLEVBQUU7Z0JBQ0wsY0FBYyxFQUFFLGtCQUFrQjthQUNyQztZQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztTQUM1QjtRQUVELEtBQUssQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDO2FBQzFCLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBQyxFQUFFLFNBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNqQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUMsRUFBRTtZQUVWLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQXNCLENBQUMsS0FBSyxHQUFDLEVBQUUsQ0FBQztZQUNyRSxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBc0IsQ0FBQyxLQUFLLEdBQUMsRUFBRSxDQUFDO1FBRTFFLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDRCxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXBCLENBQUM7QUFJRCxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN1F1QjtBQUVsRCxJQUFJLEtBQWEsQ0FBQztBQUVYLFNBQVMsbUJBQW1CO0lBQy9CLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxHQUFHLDREQUFjLENBQUM7SUFDM0QsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQixtQkFBbUIsRUFBRSxDQUFDO0lBQ3RCLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztJQUM3RCxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7SUFDakUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUM7QUFDekUsQ0FBQztBQUVELFNBQVMsaUJBQWlCO0lBQ3RCLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDckQsU0FBUyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDekIsS0FBSyxDQUFDLFFBQVEsQ0FBQztTQUNWLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ25DLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ1gsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEM7Ozs7Ozs7Ozs7Ozs7OztjQWVFO1lBQ0YsSUFBSSxPQUFPLEdBQUc7O3VGQUV5RCxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUs7NERBQ3JELENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSzttQkFDL0Q7WUFDSCxTQUFTLENBQUMsU0FBUyxJQUFJLE9BQU8sQ0FBQztTQUNsQztJQUNMLENBQUMsQ0FBQztBQUNWLENBQUM7QUFFRCxTQUFTLG1CQUFtQjtJQUN4QixJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3pELFdBQVcsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO0lBQ25DLEtBQUssQ0FBQyxVQUFVLENBQUM7U0FDWixJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNuQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUNYLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDUixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO2dCQUMxRCxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUN0QyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO2dCQUNoRCxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDcEMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM3QyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUUsRUFBRSxHQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUMsQ0FBQztnQkFDakQsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztnQkFDaEQsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO2dCQUN0QyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuQixHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDekIsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDeEI7Ozs7Ozs7a0JBT0U7YUFDTDtpQkFBTTtnQkFDSCxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO2dCQUMxRCxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUN0QyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO2dCQUNoRCxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDcEMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM3QyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUUsRUFBRSxHQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUMsQ0FBQztnQkFDakQsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztnQkFDaEQsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO2dCQUN0QyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuQixHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDekIsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDekI7Ozs7Ozs7bUJBT0c7YUFDTDtTQUNKO0lBQ0wsQ0FBQyxDQUFDO0FBQ1YsQ0FBQztBQUVELFNBQVMsV0FBVztJQUNoQixJQUFJLFFBQVEsR0FBSSxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBc0IsQ0FBQyxLQUFLLENBQUM7SUFDL0UsSUFBSSxPQUFPLEdBQUc7UUFDVixNQUFNLEVBQUUsTUFBTTtRQUNkLE9BQU8sRUFBRTtZQUNMLGNBQWMsRUFBRSxrQkFBa0I7U0FDckM7UUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7S0FDakM7SUFDRCxLQUFLLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQztTQUNuQixJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNuQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUNYLElBQUksSUFBSSxFQUFFO1lBQ0wsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQXNCLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNyRSxpQkFBaUIsRUFBRSxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQyxDQUFDO0FBQ1YsQ0FBQztBQUdELFNBQVMsYUFBYTtJQUNsQixJQUFJLFVBQVUsR0FBSSxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBc0IsQ0FBQyxLQUFLLENBQUM7SUFDbkYsSUFBSSxPQUFPLEdBQUc7UUFDVixNQUFNLEVBQUUsTUFBTTtRQUNkLE9BQU8sRUFBRTtZQUNMLGNBQWMsRUFBRSxrQkFBa0I7U0FDckM7UUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7S0FDbkM7SUFDRCxLQUFLLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQztTQUNyQixJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNuQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUNYLElBQUksSUFBSSxFQUFFO1lBQ0wsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQXNCLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUN2RSxtQkFBbUIsRUFBRSxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQyxDQUFDO0FBQ1YsQ0FBQztBQUVELFNBQVMsZUFBZTtJQUVwQixJQUFJLE1BQU0sR0FBSSxRQUFRLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUF3QyxDQUFDO0lBQ3BHLElBQUksYUFBYSxHQUFJLEVBQUUsQ0FBQztJQUN4QixLQUFLLElBQUksS0FBSyxJQUFJLE1BQU0sRUFBRTtRQUN0QixJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDZixhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQztLQUNKO0lBRUQsSUFBSSxZQUFZLEdBQUc7UUFDZixJQUFJLEVBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQXNCLENBQUMsS0FBSztRQUNuRSxLQUFLLEVBQUUsYUFBYTtRQUNwQixJQUFJLEVBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQXNCLENBQUMsS0FBSztRQUNuRSxPQUFPLEVBQUUsS0FBSztRQUNkLEtBQUssRUFBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBc0IsQ0FBQyxLQUFLO0tBQ3hFLENBQUM7SUFFRixJQUFJLE9BQU8sR0FBRztRQUNWLE1BQU0sRUFBRSxNQUFNO1FBQ2QsT0FBTyxFQUFFO1lBQ0wsY0FBYyxFQUFFLGtCQUFrQjtTQUNyQztRQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztLQUNyQztJQUVELEtBQUssQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDO1NBQzVCLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBQyxFQUFFLFNBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNqQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUMsRUFBRTtRQUNWLElBQUcsSUFBSSxFQUFDO1lBQ0osS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7U0FDaEM7SUFDTCxDQUFDLENBQUM7QUFFTixDQUFDO0FBRUQsU0FBUyxRQUFRLENBQUMsS0FBYTtJQUMzQixLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ2xCLENBQUM7QUFFRCxpRUFBZSxtQkFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNMa0I7QUFDUTtBQUU1RCxJQUFJLFFBQVEsR0FBZ0IsRUFBRSxDQUFDO0FBQy9CLElBQUksUUFBUSxHQUFXLENBQUMsQ0FBQztBQUN6QixJQUFJLElBQVksQ0FBQztBQUVWLFNBQVMsY0FBYztJQUMxQixLQUFLLENBQUMsY0FBYyxDQUFDO1NBQ2hCLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ25DLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ1gsSUFBSSxJQUFJLElBQUksT0FBTyxFQUFFO1lBQ2pCLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xFLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsT0FBTyxHQUFHLHdEQUFtQixDQUFDO1lBQ3RFLElBQUksR0FBRyxPQUFPLENBQUM7U0FDbEI7YUFBTSxJQUFJLElBQUksSUFBSSxNQUFNLEVBQUU7WUFDdkIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZFLElBQUksR0FBRyxNQUFNO1NBQ2hCO2FBQU07WUFDSCxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDdkUsSUFBSSxHQUFHLE9BQU87U0FDakI7UUFDRCxXQUFXLEVBQUUsQ0FBQztJQUVsQixDQUFDLENBQUM7QUFDVixDQUFDO0FBSUQsU0FBUyxXQUFXO0lBRWhCLEtBQUssQ0FBQyxhQUFhLENBQUM7U0FDZixJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7U0FDckMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDWCxRQUFRLEdBQUMsRUFBRSxDQUFDO1FBQ1osS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDbkIsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QjtRQUNBLG9CQUFvQixFQUFFLENBQUM7UUFDdkIsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xCLENBQUMsQ0FBQztBQUdWLENBQUM7QUFFRCxTQUFTLFNBQVMsQ0FBQyxDQUFTO0lBQ3hCLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUMxRCxPQUFPLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN2QixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUM7SUFDL0IsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLEtBQUssS0FBSyxFQUFFLEtBQUssSUFBSSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDaEMsSUFBSSxLQUFLLElBQUksUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUMxQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUN2QyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQy9DLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLG1DQUFtQyxDQUFDLENBQUM7UUFDL0QsR0FBRyxDQUFDLFdBQVcsR0FBRyxHQUFHLEVBQUU7WUFDbkIsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztRQUNuRSxDQUFDO1FBQ0QsR0FBRyxDQUFDLFVBQVUsR0FBRyxHQUFHLEVBQUU7WUFDbEIsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztRQUNuRSxDQUFDO1FBSUQsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxTQUFTLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBQyxNQUFNLENBQUM7UUFDdEMsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQyxLQUFLLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3ZDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ25CLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDMUIsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7WUFDakIsaUVBQXVCLENBQUMsSUFBSSxDQUFDO1FBQ2pDLENBQUM7UUFDRCxTQUFTLENBQUMsU0FBUyxHQUFHLEtBQUssR0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFDLE1BQU0sQ0FBQztRQUV4RCxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3QixJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pELElBQUksRUFBRSxHQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQzFCLElBQUksSUFBSSxJQUFJLE1BQU0sRUFBRTtZQUNoQixTQUFTLENBQUMsU0FBUyxHQUFHLDBCQUEwQjtZQUNoRCxTQUFTLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBQyxNQUFNLENBQUM7WUFDdEMsU0FBUyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7Z0JBRXJCLEtBQUssQ0FBQyxhQUFhLEdBQUMsRUFBRSxDQUFDO3FCQUN0QixJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO3FCQUNuQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUMsRUFBRTtvQkFDVixJQUFHLElBQUksRUFBQzt3QkFDSixLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztxQkFDakM7eUJBQUk7d0JBQ0QsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7cUJBQ3hDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztZQUNELEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDekI7UUFDRCxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3ZCO0FBQ0wsQ0FBQztBQUdELFNBQVMsb0JBQW9CO0lBQ3pCLElBQUksSUFBSSxHQUFXLFFBQVEsQ0FBQyxNQUFNO0lBQ2xDLElBQUksSUFBSSxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDckIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUM1QixJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNSLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLENBQUM7WUFDN0MsRUFBRSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDM0M7YUFBTTtZQUNILEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztRQUN2QyxHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtZQUNmLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ3ZELEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxFQUFFO2dCQUNyQixLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztnQkFDekMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUN6QztZQUNELEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLENBQUM7WUFDN0MsRUFBRSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDeEMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLENBQUMsQ0FBQztRQUNGLEdBQUcsQ0FBQyxTQUFTLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQixLQUFLLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ3pCO0FBQ0wsQ0FBQztBQUlELGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pJaUM7QUFDcEI7QUFDQztBQUdyQyxTQUFTLHVCQUF1QixDQUFDLElBQWM7SUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQixRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsR0FBQyxrRUFBb0IsQ0FBQztJQUMvRCxPQUFPLEVBQUUsQ0FBQztJQUNWLE9BQU8sQ0FBQyxJQUFJLENBQUM7QUFFakIsQ0FBQztBQUdELFNBQVMsT0FBTztJQUNaLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDO0lBQ2hELElBQUksQ0FBQyxPQUFPLEdBQUMsR0FBRSxFQUFFO1FBQ2IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEdBQUMseURBQVc7UUFDckQsd0RBQWMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7QUFDTCxDQUFDO0FBRUQsU0FBUyxPQUFPLENBQUMsSUFBYztJQUMzQixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2hELElBQUksS0FBSyxHQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsS0FBSyxDQUFDLFNBQVMsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUMsa0JBQWtCLENBQUM7SUFDN0MsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNoRCxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLEdBQUcsQ0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDeEIsR0FBRyxDQUFDLEtBQUssR0FBQyxHQUFHLENBQUM7SUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0MsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDekMsTUFBTSxDQUFDLFNBQVMsR0FBRSxhQUFhLENBQUM7SUFDaEMsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDO1FBQ2xDLE1BQU0sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUUsR0FBRyxDQUFDO0tBQ2hEO0lBQ0QsSUFBSSxPQUFPLEdBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxPQUFPLENBQUMsU0FBUyxHQUFFLFlBQVksR0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUNyRCxJQUFJLElBQUksR0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUMsU0FBUyxHQUFDLElBQUksQ0FBQyxJQUFJO0lBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsQ0FBQztBQUVyQyxDQUFDO0FBRUQsaUVBQWUsdUJBQXVCOzs7Ozs7O1VDaER0QztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOcUM7QUFDRztBQUNBO0FBR3hDLDBEQUFTLEVBQUUsQ0FBQztBQUNaLHNEQUFVLEVBQUUsQ0FBQztBQUNiLDBEQUFTLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2FubnVuY2kvYW5udW5jaS5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2FubnVuY2kvYW5udW5jaW8uaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9hbm51bmNpL2dlc3Rpb25lYW5udW5jaS5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2NyZWFBbm51bmNpby9jcmVhQW5udW5jaW8uaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9mb290ZXIvZm9vdGVyLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvZ2VzdGlvbmVVdGVudGkvZ2VzdGlvbmVVdGVudGkuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9ob21lL2hvbWUuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9sb2dpbi9sb2dpbi5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2xvZ2luL2xvZ2luRm9vdGVyLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvbG9nb3V0L2xvZ291dC5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL21vZGFsL21vZGFsLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvbmF2YmFyL25hdmJhci5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL3Byb2ZpbG9VdGVudGUvcHJvZmlsZS5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL3JlZ2lzdHJhemlvbmUvcmVnaXN0cmF6aW9uZS5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL3JlZ2lzdHJhemlvbmUvcmVnaXN0cmF6aW9uZUZvb3Rlci5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL3ZpZGVvZ2lvY2hpL2NyZWFWaWRlb2dpb2NvLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvdmlkZW9naW9jaGkvdmlkZW9naW9jaGkuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy92aWRlb2dpb2NoaS92aXN1YWxpenphVmlkZW9naW9jby5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2FubnVuY2kvYW5udW5jaS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9hbm51bmNpL2FubnVuY2lvLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2FubnVuY2kvZ2VzdGlvbmVhbm51bmNpLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2NyZWFBbm51bmNpby9jcmVhQW5udW5jaW8udHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvZm9vdGVyL2Zvb3Rlci50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9nZXN0aW9uZVV0ZW50aS9nZXN0aW9uZVV0ZW50aS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9ob21lL2hvbWUudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvbW9kYWwvbW9kYWwudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvbmF2YmFyL25hdmJhci50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9wcm9maWxvVXRlbnRlL3Byb2ZpbGUudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvdmlkZW9naW9jaGkvY3JlYVZpZGVvZ2lvY2hpLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL3ZpZGVvZ2lvY2hpL3ZpZGVvZ2lvY2hpLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL3ZpZGVvZ2lvY2hpL3Zpc3VhbGl6emFWaWRlb2dpb2NvLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJcXHJcXG48ZGl2IHN0eWxlPVxcXCJkaXNwbGF5OiBmbGV4O1xcXCIgY2xhc3M9XFxcIm15LTVcXFwiPlxcclxcblxcclxcbiAgICA8c3BhbiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiA0MHB4XFxcIj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgaWQ9XFxcInNlbGVjdEFsbFxcXCI+VmlzdWFsaXp6YSB0dXR0aTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvc3Bhbj4gPCEtLWZ1bnppb25lIGNoZSBwcmVuZGUgdHV0dGkgZ2xpIGFubnVuY2kgZSBsaSBzY2hpYWZmYSBuZWwgY29udGVudXRvIGFubnVuY2ktLT5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XFxcIm1hcmdpbi1yaWdodDogNDBweFxcXCIgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5IGRyb3Bkb3duLXRvZ2dsZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIFZpc3VhbGl6emEgcGVyIEdlbmVyZVxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XFxcImdlbnJlc1xcXCIgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cXFwiUExBVEZPUk1cXFwiPjxidXR0b24gY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+UExBVEZPUk08L2J1dHRvbj48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IDQwcHhcXFwiIGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5IGRyb3Bkb3duLXRvZ2dsZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgVmlzdWFsaXp6YSBwZXIgQW5ub1xcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPHVsIGlkPVxcXCJ5ZWFyc1xcXCIgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgaWQ9XFxcIjE5ODVcXFwiPjxidXR0b24gY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+MTk4NTwvYnV0dG9uPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICA8ZGl2IHN0eWxlPVxcXCJ2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcXCIgY2xhc3M9XFxcImNvbC1tZC0zIG14LWF1dG9cXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGJvcmRlci1lbmQtMSBib3JkZXIgcm91bmRlZC1waWxsXFxcIiB0eXBlPVxcXCJzZWFyY2hcXFwiIHBsYWNlaG9sZGVyPVxcXCJjZXJjYVxcXCIgc3R5bGU9XFxcIm1hcmdpbi1yaWdodDoyMHB4XFxcIiBpZD1cXFwic2VhcmNoVGl0bGVcXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hcHBlbmRcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcInNlYXJjaEJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgYmctd2hpdGUgYm9yZGVyLWJvdHRvbS0xIGJvcmRlciByb3VuZGVkLXBpbGwgbXMtbjVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICB0cm92YVxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1zZWFyY2hcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgPHNwYW4gPlxcclxcbiAgICAgICAgPGJ1dHRvbiBpZD1cXFwiYWRkSW5zZXJ0aW9uMlxcXCIgc3R5bGU9XFxcImNvbG9yOndoaXRlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIuL2ltZy9wbHVzLnBuZ1xcXCIgYWx0PVxcXCJwbHVzXFxcIiBzdHlsZT1cXFwid2lkdGg6MjVweFxcXCI+XFxyXFxuICAgICAgICAgICAgSW5zZXJpc2NpIEFubnVuY2lvXFxyXFxuICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICA8L3NwYW4+ICAgICAgXFxyXFxuICAgICAgICAgICAgIFxcclxcblxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgaWQ9XFxcInJlbWFpbnNcXFwiPlxcclxcbiAgICA8ZGl2ICBpZD1cXFwiaW5zZXJ0aW9uQ29udGVudFxcXCIgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuXFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8dWwgY2xhc3M9XFxcImxpc3QtZ3JvdXBcXFwiID5cXHJcXG4gICAgICAgIFxcclxcbiAgICA8L3VsPiAgICBcXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2PlxcclxcbiAgICA8dWwgaWQ9XFxcInBhZ2VzXFxcIiBjbGFzcz1cXFwicGFnaW5hdGlvbiBwYWdpbmF0aW9uLXNtIG15LTJcXFwiPlxcclxcbiAgICAgICAgXFxyXFxuICAgIDwvdWw+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIgICAgPGRpdiBpZD1cXFwiYmFja1xcXCI+XFxyXFxuICAgICAgICA8aW1nIGlkPVxcXCJiYWNrZ2FtZXNcXFwiIGNsYXNzPVxcXCJtdC00IGJ1dHRvbmhvdmVyIG1iLTRcXFwiIHdpZHRoPTEyMCBzcmM9XFxcIi4vaW1nL2JhY2sucG5nXFxcIj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgPCEtLSAgLS0+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwicm93XFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcpO1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXHJcXG4gICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwiaW1hZ2VTbGlkZXJcXFwiIGNsYXNzPVxcXCJjYXJvdXNlbCBzbGlkZVxcXCIgZGF0YS1icy1yaWRlPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiaW5kaWNhdG9yXFxcIiBjbGFzcz1cXFwiY2Fyb3VzZWwtaW5kaWNhdG9yc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJpbm5lclxcXCIgY2xhc3M9XFxcImNhcm91c2VsLWlubmVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhcm91c2VsLWNvbnRyb2wtcHJldlxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRhcmdldD1cXFwiI2ltYWdlU2xpZGVyXFxcIiBkYXRhLWJzLXNsaWRlPVxcXCJwcmV2XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvblxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPlByZWNlZGVudGU8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYXJvdXNlbC1jb250cm9sLW5leHRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10YXJnZXQ9XFxcIiNpbWFnZVNsaWRlclxcXCIgZGF0YS1icy1zbGlkZT1cXFwibmV4dFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb25cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidmlzdWFsbHktaGlkZGVuXFxcIj5TdWNjZXNzaXZhPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTZcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJnaXZlZEdhbWVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZCBtYi0zXFxcIiBzdHlsZT1cXFwibWF4LXdpZHRoOiA1NDBweDtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBnLTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJjYXJkLWltYWdlXFxcIiBjbGFzcz1cXFwiY29sLW1kLTRcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLThcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiY2FyZC1ib2R5XFxcIiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGlkPVxcXCJpbnNlcnRpb24tZGVzY3JpcHRpb25cXFwiIGNsYXNzPVxcXCJmb250LXNpemU6MjBweCBjb2xvcjp3aGl0ZSBjb2wtbWQtMTJcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcIm15LTUgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICA8aDM+PHNwYW4gaWQ9XFxcImluc2VydGlvbi1jcmVhdG9yXFxcIj48L3NwYW4+IHZvcnJlYmJlIHVubyBkaSBxdWVzdGkgZ2lvY2hpIGluIGNhbWJpbzo8L2gzPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImFjY29yZGlvbiByb3dcXFwiIGlkPVxcXCJhY2NvcmRpb25FeGFtcGxlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYWNjb3JkaW9uLWl0ZW0gY29sLW1kLTRcXFwiPlxcclxcbiAgICAgICAgPGgyIGNsYXNzPVxcXCJhY2NvcmRpb24taGVhZGVyXFxcIiBpZD1cXFwiaGVhZGluZ09uZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cXFwiYnRuLWl0ZW0tMVxcXCIgY2xhc3M9XFxcImFjY29yZGlvbi1idXR0b24gY29sbGFwc2VkXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJjb2xsYXBzZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgZGF0YS1icy10YXJnZXQ9XFxcIiNjb2xsYXBzZU9uZVxcXCIgYXJpYS1leHBhbmRlZD1cXFwidHJ1ZVxcXCIgYXJpYS1jb250cm9scz1cXFwiY29sbGFwc2VPbmVcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9oMj5cXHJcXG4gICAgICAgIDxkaXYgaWQ9XFxcImNvbGxhcHNlT25lXFxcIiBjbGFzcz1cXFwiYWNjb3JkaW9uLWNvbGxhcHNlIGNvbGxhcHNlXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcImhlYWRpbmdPbmVcXFwiXFxyXFxuICAgICAgICAgICAgZGF0YS1icy1wYXJlbnQ9XFxcIiNhY2NvcmRpb25FeGFtcGxlXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhY2NvcmRpb24tYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImltZy1pdGVtLTFcXFwiIGNsYXNzPVxcXCJjYXJkIG14LWF1dG9cXFwiIHN0eWxlPVxcXCJ3aWR0aDogMThyZW07XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiYm9keS1pdGVtLTFcXFwiIGNsYXNzPVxcXCJjYXJkLWJvZHkgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhY2NvcmRpb24taXRlbSBjb2wtbWQtNFxcXCI+XFxyXFxuICAgICAgICA8aDIgY2xhc3M9XFxcImFjY29yZGlvbi1oZWFkZXJcXFwiIGlkPVxcXCJoZWFkaW5nVHdvXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJidG4taXRlbS0yXFxcIiBjbGFzcz1cXFwiYWNjb3JkaW9uLWJ1dHRvbiBjb2xsYXBzZWRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10b2dnbGU9XFxcImNvbGxhcHNlXFxcIlxcclxcbiAgICAgICAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cXFwiI2NvbGxhcHNlVHdvXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCIgYXJpYS1jb250cm9scz1cXFwiY29sbGFwc2VUd29cXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9oMj5cXHJcXG4gICAgICAgIDxkaXYgaWQ9XFxcImNvbGxhcHNlVHdvXFxcIiBjbGFzcz1cXFwiYWNjb3JkaW9uLWNvbGxhcHNlIGNvbGxhcHNlXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcImhlYWRpbmdUd29cXFwiXFxyXFxuICAgICAgICAgICAgZGF0YS1icy1wYXJlbnQ9XFxcIiNhY2NvcmRpb25FeGFtcGxlXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhY2NvcmRpb24tYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImltZy1pdGVtLTJcXFwiIGNsYXNzPVxcXCJjYXJkIG14LWF1dG9cXFwiIHN0eWxlPVxcXCJ3aWR0aDogMThyZW07XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiYm9keS1pdGVtLTJcXFwiIGNsYXNzPVxcXCJjYXJkLWJvZHkgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhY2NvcmRpb24taXRlbSBjb2wtbWQtNFxcXCI+XFxyXFxuICAgICAgICA8aDIgY2xhc3M9XFxcImFjY29yZGlvbi1oZWFkZXJcXFwiIGlkPVxcXCJoZWFkaW5nVGhyZWVcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcImJ0bi1pdGVtLTNcXFwiIGNsYXNzPVxcXCJhY2NvcmRpb24tYnV0dG9uIGNvbGxhcHNlZFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiXFxyXFxuICAgICAgICAgICAgICAgIGRhdGEtYnMtdGFyZ2V0PVxcXCIjY29sbGFwc2VUaHJlZVxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiIGFyaWEtY29udHJvbHM9XFxcImNvbGxhcHNlVGhyZWVcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9oMj5cXHJcXG4gICAgICAgIDxkaXYgaWQ9XFxcImNvbGxhcHNlVGhyZWVcXFwiIGNsYXNzPVxcXCJhY2NvcmRpb24tY29sbGFwc2UgY29sbGFwc2VcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwiaGVhZGluZ1RocmVlXFxcIlxcclxcbiAgICAgICAgICAgIGRhdGEtYnMtcGFyZW50PVxcXCIjYWNjb3JkaW9uRXhhbXBsZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWNjb3JkaW9uLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJpbWctaXRlbS0zXFxcIiBjbGFzcz1cXFwiY2FyZCBteC1hdXRvXFxcIiBzdHlsZT1cXFwid2lkdGg6IDE4cmVtO1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImJvZHktaXRlbS0zXFxcIiBjbGFzcz1cXFwiY2FyZC1ib2R5IHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgc3R5bGU9XFxcImRpc3BsYXk6IGZsZXg7XFxcIj5cXHJcXG5cXHJcXG4gICAgICAgIDxzcGFuIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IDQwcHhcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgaWQ9XFxcInNlbGVjdEFsbDJcXFwiPlZpc3VhbGl6emEgdHV0dGk8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9zcGFuPiA8IS0tZnVuemlvbmUgY2hlIHByZW5kZSB0dXR0aSBnbGkgYW5udW5jaSBlIGxpIHNjaGlhZmZhIG5lbCBjb250ZW51dG8gYW5udW5jaS0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XFxcIm1hcmdpbi1yaWdodDogNDBweFxcXCIgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeSBkcm9wZG93bi10b2dnbGVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgVmlzdWFsaXp6YSBwZXIgR2VuZXJlXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVxcXCJnZW5yZXMyXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cXFwiUExBVEZPUk1cXFwiPjxidXR0b24gY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+UExBVEZPUk08L2J1dHRvbj48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IDQwcHhcXFwiIGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeSBkcm9wZG93bi10b2dnbGVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICBWaXN1YWxpenphIHBlciBBbm5vXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx1bCBpZD1cXFwieWVhcnMyXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XFxcIjE5ODVcXFwiPjxidXR0b24gY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+MTk4NTwvYnV0dG9uPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICA8ZGl2IHN0eWxlPVxcXCJ2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcXCIgY2xhc3M9XFxcImNvbC1tZC0zIG14LWF1dG9cXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgYm9yZGVyLWVuZC0xIGJvcmRlciByb3VuZGVkLXBpbGxcXFwiIHR5cGU9XFxcInNlYXJjaFxcXCIgcGxhY2Vob2xkZXI9XFxcImNlcmNhXFxcIiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OjIwcHhcXFwiIGlkPVxcXCJzZWFyY2hUaXRsZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hcHBlbmRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJzZWFyY2hCdXR0b24yXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBiZy13aGl0ZSBib3JkZXItYm90dG9tLTEgYm9yZGVyIHJvdW5kZWQtcGlsbCBtcy1uNVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0cm92YVxcclxcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtc2VhcmNoXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgXFxyXFxuICAgICAgICAgIDxzcGFuID5cXHJcXG4gICAgICAgICAgICA8IS0tIEFsbGVydGEgTWFydGVsbGF0YTogc2UgdG9sZ28gaWwgYm90dG9uZSB0b2xnbyBwdXJlIGxhIGxpc3RhLFxcclxcbiAgICAgICAgICAgICAgICBxdWluZGkgbCdobyBtZXNzbyBoaWRkZW4tLT5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGhpZGRlbiBpZD1cXFwiYWRkSW5zZXJ0aW9uXFxcIiBzdHlsZT1cXFwiY29sb3I6d2hpdGVcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIuL2ltZy9wbHVzLnBuZ1xcXCIgYWx0PVxcXCJwbHVzXFxcIiBzdHlsZT1cXFwid2lkdGg6MjVweFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIEluc2VyaXNjaSBBbm51bmNpb1xcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICA8L3NwYW4+ICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICBcXHJcXG4gICAgXFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8YnI+XFxyXFxuICAgIDxkaXYgc3R5bGU9XFxcImRpc3BsYXk6IGlubGluZS1mbGV4O1xcXCI+XFxyXFxuXFxyXFxuICAgICAgICA8c3BhbiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiA0MHB4XFxcIj4gPGg0PiBOb21lIENhdGVnb3JpYTogPC9oND4gPC9zcGFuPlxcclxcbiAgICAgICAgXFxyXFxuICAgICAgICA8c3BhbiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiA0MHB4XFxcIj4gPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgYm9yZGVyLWVuZC0xIGJvcmRlciByb3VuZGVkLXBpbGxcXFwiIHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJDYXRlZ29yaWFcXFwiIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6MjBweFxcXCIgaWQ9XFxcImNhdGVnb3J5TmFtZVxcXCI+IDwvc3Bhbj5cXHJcXG5cXHJcXG4gICAgICAgIDxzcGFuIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IDQwcHhcXFwiPiA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIGlkPVxcXCJjcmVhdGVDYXRlZ29yeVxcXCI+Q3JlYSBDYXRlZ29yaWE8L2J1dHRvbj4gPC9zcGFuPlxcclxcblxcclxcbiAgICAgICAgPHNwYW4gc3R5bGU9XFxcIm1hcmdpbi1yaWdodDogNDBweFxcXCI+IDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiBpZD1cXFwiZGVsZXRlRWxlbWVudHNcXFwiPkVsaW1pbmEgQW5udW5jaTwvYnV0dG9uPiA8L3NwYW4+XFxyXFxuXFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8YnI+XFxyXFxuICAgIFxcclxcbiAgICA8ZGl2IGlkPVxcXCJyZW1haW5zXFxcIj5cXHJcXG4gICAgICAgIDx1bCBpZD1cXFwiaW5zZXJ0aW9uQ29udGVudDJcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwXFxcIiA+XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgXFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2PlxcclxcbiAgICAgICAgPHVsIGlkPVxcXCJwYWdlczJcXFwiIGNsYXNzPVxcXCJwYWdpbmF0aW9uIHBhZ2luYXRpb24tc20gbXktMlxcXCI+XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICA8L3VsPlxcclxcbiAgICBcXHJcXG4gICAgPC9kaXY+ICAgIFxcclxcblwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC0xMiB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgPGgyPjxiPkluc2VyaXNjaSBBbm51bmNpbzwvYj48L2gyPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcblxcclxcbiAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLTRcXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwidGl0bGVcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5cXHJcXG4gICAgICAgICAgPGgzPjxiPlRpdG9sbyBBbm51bmNpbzwvYj48L2gzPlxcclxcbiAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwidGl0bGVcXFwiIHBsYWNlaG9sZGVyPVxcXCJUaXRvbG8gQW5udW5jaW9cXFwiPlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiZGVzY3JpcHRpb25cXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5cXHJcXG4gICAgICAgICAgPGgzPjxiPkRlc2NyaXppb25lIFZpZGVvZ2lvY288L2I+PC9oMz5cXHJcXG4gICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImRlc2NyaXB0aW9uXFxcIiByb3dzPVxcXCIzXFxcIiBwbGFjZWhvbGRlcj1cXFwiRGVzY3JpemlvbmUgQW5udW5jaW9cXFwiPjwvdGV4dGFyZWE+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPGRpdj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcInRyYWRlR2FtZVxcXCIgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgPGgzPjxiPlRyYWRlLUdhbWU8L2I+PC9oMz5cXHJcXG4gICAgICAgICAgPGg1PkRhIHF1YWxlIHRlc29yaW5vIHRpIHZvcnJlc3RpIHNlcGFyYXJlPzwvaDU+XFxyXFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkcm9wZG93biB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1saWdodCBkcm9wZG93bi10b2dnbGVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCI+XFxyXFxuICAgICAgICAgICAgICBRdWFudGkgYmVpIGdpb2NoaW5pIVxcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDx1bCBpZD1cXFwidHJhZGVHYW1lXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC00XFxcIj5cXHJcXG4gICAgICA8ZGl2PlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwid2lzaEdhbWVzXFxcIiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICA8aDM+PGI+V2lzaC1MaXN0PC9iPjwvaDM+XFxyXFxuICAgICAgICAgIDxoNT5DaGUgZ2lvY2hpIHZvcnJlc3RpIHJpY2V2ZXJlIGluIGNhbWJpbyBkZWwgdHVvIHRlc29yaW5vPzwvaDU+XFxyXFxuXFxyXFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkcm9wZG93biB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1saWdodCBkcm9wZG93bi10b2dnbGVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCJcXHJcXG4gICAgICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgU29sbyAzIEVoISBOb24gYmFyaWFtbyFcXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8dWwgaWQ9XFxcIndpc2hHYW1lc1xcXCIgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNFxcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJnYWxsZXJ5XFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+XFxyXFxuICAgICAgICAgIDxoMz48Yj5JbW1hZ2luaTwvYj48L2gzPlxcclxcbiAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiZ2FsbGVyeVxcXCIgcm93cz1cXFwiN1xcXCJcXHJcXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIkluc2VyaXNjaSBsZSB1cmwgZGVsbGUgaW1hZ2luaSBkZWxsJ2FubnVuY2lvIGRhIGluc2VyaXJlLCBvZ251bmEgZGl2aXNhIGRhbGxhIHZpcmdvbGEgRXM6IGh0dHA6Ly9pbWd1cmwvaW1nLnBuZyxodHRwOi8vaW1ndXJsL2ltZzIucG5nXFxcIj48L3RleHRhcmVhPlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPHVsIGlkPVxcXCJzZWxlY3RlZEdhbWVzXFxcIj5cXHJcXG4gICAgICAgICAgXFxyXFxuICAgICAgICA8L3VsPlxcclxcbiAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcblxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJjb2wtMTJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zIG10LTMgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgIDxidXR0b24gaWQ9XFxcInJlZ2lzdGVySW5zZXJ0aW9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5BZ2dpdW5naTwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPHN0eWxlPlxcclxcbiAgLmNhcmRmb290ZXIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb290ZXJsaW5rcyB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lO1xcclxcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgfVxcclxcblxcclxcbiAgYTpob3ZlciwgYTphY3RpdmUge1xcclxcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogZ3JleTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGxpIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuICBib2R5IHtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gIGZvb3RlciB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvKiBUaGUgYXJ0aWNsZSBmaWxscyBhbGwgdGhlIHNwYWNlIGJldHdlZW4gaGVhZGVyICYgZm9vdGVyICovXFxyXFxuICBib2R5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGRpdi5jb250YWluZXIge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgfVxcclxcblxcclxcbjwvc3R5bGU+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiY2FyZGZvb3RlclxcXCI+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCI+XFxyXFxuICAgIDxpbWcgc3JjPVxcXCIuL2ltZy92aWRlb2dhbWVsb3ZlcmZvb3Rlci5wbmdcXFwiIHN0eWxlPVxcXCJ3aWR0aDoyNyU7IHBhZGRpbmc6IDIlOyAgb3BhY2l0eTogMC44O1xcXCIgYWx0PVxcXCJcXFwiPlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiIHN0eWxlPVxcXCJwYWRkaW5nLWJvdHRvbTogMSU7XFxcIj5cXHJcXG4gICAgPHVsPlxcclxcbiAgICAgIDxsaT4gPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImZvb3RlcmxpbmtzXFxcIj5Ib21lPC9hPiA8L2xpPlxcclxcbiAgICAgIDxsaT4gPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImZvb3RlcmxpbmtzXFxcIj5QYW9sbzwvYT4gPC9saT5cXHJcXG4gICAgICA8bGk+IDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJmb290ZXJsaW5rc1xcXCI+UGllcm88L2E+IDwvbGk+XFxyXFxuICAgICAgPGxpPiA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiZm9vdGVybGlua3NcXFwiPkFib3V0IFVzPC9hPiA8L2xpPlxcclxcbiAgICA8L3VsPlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWZvb3RlciB0ZXh0LW11dGVkXFxcIiBzdHlsZT1cXFwicGFkZGluZy1ib3R0b206IDElOyAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogcmdiKDIyLCAyMiwgMjIpO1xcXCI+XFxyXFxuICAgIDxwICBjbGFzcz1cXFwiZm9vdGVybGlua3NcXFwiPiDCqTIwMjMgUGFvbG8gRW50ZXJwcmlzZSBJbmMuIHwgVHV0dGkgaSBkaXJpdHRpIHJpc2VydmF0aSAoYSBQaWVyaW5vKSA8L3A+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48IS0tXFxyXFxuPHN0eWxlPlxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwcmVtIGF1dG87XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwibWFpblxcXCIgXFxcIi5cXFwiIFxcXCJmb290ZXJcXFwiO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZDogI0Y1RjdGQTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIge1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIC0tZm9vdGVyLWJhY2tncm91bmQ6I0VENTU2NTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBncmlkLWFyZWE6IGZvb3RlcjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEycmVtO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIgLmJ1YmJsZXMge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgaGVpZ2h0OiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tZm9vdGVyLWJhY2tncm91bmQpO1xcclxcbiAgZmlsdGVyOiB1cmwoXFxcIiNibG9iXFxcIik7XFxyXFxufVxcclxcbmJvZHkgLmZvb3RlciAuYnViYmxlcyAuYnViYmxlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IHZhcigtLXBvc2l0aW9uLCA1MCUpO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tZm9vdGVyLWJhY2tncm91bmQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBidWJibGUtc2l6ZSB2YXIoLS10aW1lLCA0cykgZWFzZS1pbiBpbmZpbml0ZSB2YXIoLS1kZWxheSwgMHMpLCBidWJibGUtbW92ZSB2YXIoLS10aW1lLCA0cykgZWFzZS1pbiBpbmZpbml0ZSB2YXIoLS1kZWxheSwgMHMpO1xcclxcbiAgICAgICAgICBhbmltYXRpb246IGJ1YmJsZS1zaXplIHZhcigtLXRpbWUsIDRzKSBlYXNlLWluIGluZmluaXRlIHZhcigtLWRlbGF5LCAwcyksIGJ1YmJsZS1tb3ZlIHZhcigtLXRpbWUsIDRzKSBlYXNlLWluIGluZmluaXRlIHZhcigtLWRlbGF5LCAwcyk7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAxMDAlKTtcXHJcXG59XFxyXFxuYm9keSAuZm9vdGVyIC5jb250ZW50IHtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXHJcXG4gIGdyaWQtZ2FwOiA0cmVtO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWZvb3Rlci1iYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuYm9keSAuZm9vdGVyIC5jb250ZW50IGEsIGJvZHkgLmZvb3RlciAuY29udGVudCBwIHtcXHJcXG4gIGNvbG9yOiAjRjVGN0ZBO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIgLmNvbnRlbnQgYiB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbmJvZHkgLmZvb3RlciAuY29udGVudCBwIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXHJcXG59XFxyXFxuYm9keSAuZm9vdGVyIC5jb250ZW50ID4gZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbmJvZHkgLmZvb3RlciAuY29udGVudCA+IGRpdiA+IGRpdiB7XFxyXFxuICBtYXJnaW46IDAuMjVyZW0gMDtcXHJcXG59XFxyXFxuYm9keSAuZm9vdGVyIC5jb250ZW50ID4gZGl2ID4gZGl2ID4gKiB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXHJcXG59XFxyXFxuYm9keSAuZm9vdGVyIC5jb250ZW50ID4gZGl2IC5pbWFnZSB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogNHJlbTtcXHJcXG4gIGhlaWdodDogNHJlbTtcXHJcXG4gIG1hcmdpbjogMC4yNXJlbSAwO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIGJ1YmJsZS1zaXplIHtcXHJcXG4gIDAlLCA3NSUge1xcclxcbiAgICB3aWR0aDogdmFyKC0tc2l6ZSwgNHJlbSk7XFxyXFxuICAgIGhlaWdodDogdmFyKC0tc2l6ZSwgNHJlbSk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgd2lkdGg6IDByZW07XFxyXFxuICAgIGhlaWdodDogMHJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBidWJibGUtc2l6ZSB7XFxyXFxuICAwJSwgNzUlIHtcXHJcXG4gICAgd2lkdGg6IHZhcigtLXNpemUsIDRyZW0pO1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLXNpemUsIDRyZW0pO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHdpZHRoOiAwcmVtO1xcclxcbiAgICBoZWlnaHQ6IDByZW07XFxyXFxuICB9XFxyXFxufVxcclxcbkAtd2Via2l0LWtleWZyYW1lcyBidWJibGUtbW92ZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGJvdHRvbTogLTRyZW07XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgYm90dG9tOiB2YXIoLS1kaXN0YW5jZSwgMTByZW0pO1xcclxcbiAgfVxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGJ1YmJsZS1tb3ZlIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgYm90dG9tOiAtNHJlbTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICBib3R0b206IHZhcigtLWRpc3RhbmNlLCAxMHJlbSk7XFxyXFxuICB9XFxyXFxufVxcclxcbjwvc3R5bGU+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwibWFpblxcXCI+PC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwiZm9vdGVyXFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImJ1YmJsZXNcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6Mi42NjQ1MjMwMTYyODUxOTYzcmVtOyAtLWRpc3RhbmNlOjcuMzA0MTE2MDM2NzQyNjE3NHJlbTsgLS1wb3NpdGlvbjo4My41NjM2ODA1MzMzODQ4MyU7IC0tdGltZTozLjQ5NTY0MDMwOTYyNzIyOTVzOyAtLWRlbGF5Oi0yLjc3MzkzODE5NjIzNzcwMnM7XFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnViYmxlXFxcIiBzdHlsZT1cXFwiLS1zaXplOjUuODk0MTQ5ODQ5ODM4MDE2cmVtOyAtLWRpc3RhbmNlOjcuNjI3OTc0NDg0MzAwNDI3cmVtOyAtLXBvc2l0aW9uOjkzLjM2ODc4MTg4MzkzNjQyJTsgLS10aW1lOjMuNzYwMTQ4NjI3MjgzODc1NnM7IC0tZGVsYXk6LTMuMzk3MTAyMjg4NDAzMDI5cztcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6Mi43OTg2NDcxMDY2NjU2ODVyZW07IC0tZGlzdGFuY2U6OS4yMDA0OTY4MTcyMjI1MjVyZW07IC0tcG9zaXRpb246MC4yMDc3NTczMjY5ODQxNDE5NSU7IC0tdGltZToyLjIwMTA5NjAyMjAwNTg2NTdzOyAtLWRlbGF5Oi0yLjY5ODk0ODIxNjQ2NDU0NXM7XFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnViYmxlXFxcIiBzdHlsZT1cXFwiLS1zaXplOjQuMzU5NjIxOTI2NzgyMjk0cmVtOyAtLWRpc3RhbmNlOjcuNDYzNTc5OTMwMDc0MTlyZW07IC0tcG9zaXRpb246NDcuODY3ODMxNzQ2ODUwOTI1JTsgLS10aW1lOjIuMTIwODIwNTYxMjcwNzI0czsgLS1kZWxheTotMi41MTQxNzc4NDkyMTgyMzM2cztcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6NS4wMjgzNTIwNTA5NzgxOTZyZW07IC0tZGlzdGFuY2U6Ny4yNDI3MjAwMzY4MzIyNDlyZW07IC0tcG9zaXRpb246MzAuNjk5ODQ2MTU5MjczOTYlOyAtLXRpbWU6My4yNTM1OTU1MjgxMDYyODgzczsgLS1kZWxheTotMy4zNTU0NTQ1MzI1NDM5NzE1cztcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6Mi43NTU5NzgyMjE4NTcxOTNyZW07IC0tZGlzdGFuY2U6Ny40Njk5NzI0OTY5MjY1MDlyZW07IC0tcG9zaXRpb246MTAuMjM4MjI3MDIwNzAxMTM5JTsgLS10aW1lOjIuNjQ3MjAwMTUyMDA4MzY2czsgLS1kZWxheTotMy41NzIxNTk0NjIyNDk2MjE4cztcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6NS4wODQ4MTI4MTcyMDg3Mzc1cmVtOyAtLWRpc3RhbmNlOjkuNTU4NTU0MTQyNTg0NjI2cmVtOyAtLXBvc2l0aW9uOjk0LjUxOTgyMDU3ODMyMjE1JTsgLS10aW1lOjMuNzE1NTU1ODc2MjE3MzA1NXM7IC0tZGVsYXk6LTMuMDgxMDA2Njk2NzU3ODU5cztcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6My41Mzc4MDc1NjA3NzU5NThyZW07IC0tZGlzdGFuY2U6OS40MjE0MjM1Mjk4NDE5MjhyZW07IC0tcG9zaXRpb246NS4zOTYyNzQyMTE3MDkwMTMlOyAtLXRpbWU6My4xNzg3ODk0NTU2MDE4ODU2czsgLS1kZWxheTotMy40NDYxNjk5MDUxODY3NzVzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZTo1LjYyNzczMTIxODYwMDM0OHJlbTsgLS1kaXN0YW5jZTo3Ljc0NjQ2MzQxNjA3NTE2NXJlbTsgLS1wb3NpdGlvbjoxMC45Mjg4MDI0OTM0Njk1MzElOyAtLXRpbWU6Mi41Njc5MjU5MzIyNTY2OXM7IC0tZGVsYXk6LTMuNDA0ODczMTAxNDUxOTg2cztcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6My42OTQ5NTk5MjE5NDcyMzEzcmVtOyAtLWRpc3RhbmNlOjkuMTgxNTQ5NTg2NzUwMTA3cmVtOyAtLXBvc2l0aW9uOi00LjU4OTA1NTU2Mzc5ODk3NiU7IC0tdGltZTozLjcwOTUyMjA2NTI4ODgzNDVzOyAtLWRlbGF5Oi0zLjEyOTU4NjEzMTU5MTYwNjdzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZToyLjc1OTI2NDIyMTA2NzE3OHJlbTsgLS1kaXN0YW5jZTo4LjQyNjg4ODA5OTU1MTM3cmVtOyAtLXBvc2l0aW9uOjI4LjA0NjcyODI5MzEyNDUwMiU7IC0tdGltZTozLjI4NDA5NjExMDUyMzZzOyAtLWRlbGF5Oi0yLjM2NjUxOTg3NDMwOTM4N3M7XFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnViYmxlXFxcIiBzdHlsZT1cXFwiLS1zaXplOjIuNTc0MzA4MjQzNTEwNTY4NHJlbTsgLS1kaXN0YW5jZTo5LjQzMDY1Mzk2MjU3Mzg1M3JlbTsgLS1wb3NpdGlvbjozMC44Mzk3NDY0NzE3Mzk2MSU7IC0tdGltZTozLjY4NjU3MDAxNzYyMzA3MDdzOyAtLWRlbGF5Oi0zLjYxOTAzOTYwNjAzMzI5N3M7XFxcIj48L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxyXFxuICAgIDxkaXY+XFxyXFxuICAgICAgPGRpdj48Yj5FbGRldzwvYj48YSBocmVmPVxcXCIjXFxcIj5TZWN1Y2U8L2E+PGEgaHJlZj1cXFwiI1xcXCI+RHJ1cGFuZDwvYT48YSBocmVmPVxcXCIjXFxcIj5PY2Vhc2g8L2E+PGEgaHJlZj1cXFwiI1xcXCI+VWdlZmU8L2E+PGEgaHJlZj1cXFwiI1xcXCI+QmFiZWQ8L2E+PC9kaXY+XFxyXFxuICAgICAgPGRpdj48Yj5TcG90aGE8L2I+PGEgaHJlZj1cXFwiI1xcXCI+TWlza2FzYTwvYT48YSBocmVmPVxcXCIjXFxcIj5BZ2l0aGU8L2E+PGEgaHJlZj1cXFwiI1xcXCI+U2Nlc2hhPC9hPjxhIGhyZWY9XFxcIiNcXFwiPkx1bGxlPC9hPjwvZGl2PlxcclxcbiAgICAgIDxkaXY+PGI+Q2hhc2hha2liPC9iPjxhIGhyZWY9XFxcIiNcXFwiPkNob2dhdXc8L2E+PGEgaHJlZj1cXFwiI1xcXCI+UGhhY2h1bGVkPC9hPjxhIGhyZWY9XFxcIiNcXFwiPlRpZWJlZnQ8L2E+PGEgaHJlZj1cXFwiI1xcXCI+T2NpZDwvYT48YSBocmVmPVxcXCIjXFxcIj5Jem9tPC9hPjxhIGhyZWY9XFxcIiNcXFwiPk9ydDwvYT48L2Rpdj5cXHJcXG4gICAgICA8ZGl2PjxiPkF0aG9kPC9iPjxhIGhyZWY9XFxcIiNcXFwiPlBhbXV6PC9hPjxhIGhyZWY9XFxcIiNcXFwiPlZhcGVydDwvYT48YSBocmVmPVxcXCIjXFxcIj5OZWVzazwvYT48YSBocmVmPVxcXCIjXFxcIj5PbWVtYW5lbjwvYT48L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXY+PGEgY2xhc3M9XFxcImltYWdlXFxcIiBocmVmPVxcXCJodHRwczovL2NvZGVwZW4uaW8vei1cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCZxdW90O2h0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE5OTAxMS9oYXBweS5zdmcmcXVvdDspXFxcIj48L2E+XFxyXFxuICAgICAgPHA+wqkyMDE5IE5vdCBSZWFsbHk8L3A+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPHN2ZyBzdHlsZT1cXFwiIHRvcDoxMDB2aFxcXCI+XFxyXFxuICA8ZGVmcz5cXHJcXG4gICAgPGZpbHRlciBpZD1cXFwiYmxvYlxcXCI+XFxyXFxuICAgICAgPGZlR2F1c3NpYW5CbHVyIGluPVxcXCJTb3VyY2VHcmFwaGljXFxcIiBzdGREZXZpYXRpb249XFxcIjEwXFxcIiByZXN1bHQ9XFxcImJsdXJcXFwiPjwvZmVHYXVzc2lhbkJsdXI+XFxyXFxuICAgICAgPGZlQ29sb3JNYXRyaXggaW49XFxcImJsdXJcXFwiIG1vZGU9XFxcIm1hdHJpeFxcXCIgdmFsdWVzPVxcXCIxIDAgMCAwIDAgIDAgMSAwIDAgMCAgMCAwIDEgMCAwICAwIDAgMCAxOSAtOVxcXCIgcmVzdWx0PVxcXCJibG9iXFxcIj48L2ZlQ29sb3JNYXRyaXg+XFxyXFxuICAgICAgZmVDb21wb3NpdGUoaW49XFxcIlNvdXJjZUdyYXBoaWNcXFwiIGluMj1cXFwiYmxvYlxcXCIgb3BlcmF0b3I9XFxcImF0b3BcXFwiKSAvL0FmdGVyIHJldmlld2luZyB0aGlzIGFmdGVyIHllYXJzIEkgY2FuJ3QgcmVtZW1iZXIgd2h5IEkgYWRkZWQgdGhpcyBidXQgaXQgaXNuJ3QgbmVjZXNzYXJ5IGZvciB0aGUgYmxvYiBlZmZlY3RcXHJcXG48L2ZpbHRlcj5cXHJcXG48L2RlZnM+XFxyXFxuPC9zdmc+XFxyXFxuLS0+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8bmF2IGFyaWEtbGFiZWw9XFxcIi4uLlxcXCI+XFxyXFxuICAgIDxkaXY+XFxyXFxuICAgICAgICA8aDEgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5HZXN0aXNjaSBVdGVudGkgUmVnaXN0cmF0aTwvaDE+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8dWwgaWQ9XFxcInVzZXJMaXN0XFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cFxcXCI+XFxyXFxuICAgICAgICBcXHJcXG4gICAgPC91bD5cXHJcXG4gICAgPHVsIGlkPVxcXCJwYWdpbmF0aW9uXFxcIiBjbGFzcz1cXFwicGFnaW5hdGlvbiBwYWdpbmF0aW9uLXNtIG15LTJcXFwiPlxcclxcbiAgICAgICAgXFxyXFxuICAgIDwvdWw+XFxyXFxuPC9uYXY+XFxyXFxuXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGlkPVxcXCJiZ2Fyb3VuZFxcXCIgY2xhc3M9XFxcInRleHQtY2VudGVyIG15LTVcXFwiPlxcclxcbiAgICA8aW1nIHNyYz1cXFwiLi9pbWcvdmlkZW9nYW1lbG92ZXIucG5nXFxcIiBhbHQ9XFxcIm5vdCBmb3VuZFxcXCIgY2xhc3M9XFxcImhlYWRlckltZyBteC1hdXRvXFxcIiBzdHlsZT1cXFwid2lkdGg6IDUwJTsgXFxcIiBpZD1cXFwiaGVhZGVySW1nXFxcIj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48c3R5bGU+XFxyXFxuXFxyXFxuICAud2lkZ2V0SW50cm8ge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAud2lkZ2V0SW50cm8tZGl2e1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgI2FubkNhcmQge1xcclxcblxcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjaW1nQ2FyZCB7XFxyXFxuICAgIGhlaWdodDogNjAlO1xcclxcbiAgICB3aWR0aDpmaXQtY29udGVudDtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgLmltZ1Mge1xcclxcbiAgICB3aWR0aDogNTRweDtcXHJcXG4gICAgaGVpZ2h0OiA0MnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgYm9keSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAud2lkZ2V0UGljIHtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5waWNSaWdodCB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBpY2xlZnQge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlYyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwJTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcclxcbiAgICBwYWRkaW5nOiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnAge1xcclxcbiAgICBwYWRkaW5nOiAwcHg7XFxyXFxuICB9XFxyXFxuIFxcclxcbjwvc3R5bGU+XFxyXFxuXFxyXFxuPHNlY3Rpb24gY2xhc3M9XFxcInAgc2VjIGJvcmRlciBib3JkZXItc3VjY2VzcyBtYi0yIGJvcmRlci1vcGFjaXR5LTUwIHJvdW5kZWQgcm93IGFsaW5nLWl0ZW0tc3RhcnRcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwicCBjb2wtNFxcXCI+XFxyXFxuICAgIDxwaWN0dXJlPlxcclxcbiAgICAgIDxpbWcgY2xhc3M9XFxcIndpZGdldFBpYyBwaWNMZWZ0IHJvdW5kZWQtc3RhcnRcXFwiIHNyYz1cXFwiLi9pbWcvZ2FtZXNlYXJjaC5qcGVnXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwJVxcXCIgYWx0PVxcXCJcXFwiPlxcclxcbiAgICA8L3BpY3R1cmU+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImJvcmRlci1zdGFydCBib3JkZXItMyBib3JkZXItcHJpbWFyeSBjb2wtOCB0ZXh0LXN0YXJ0IHdpZGdldFRleHRcXFwiPlxcclxcbiAgICA8aDE+XFxyXFxuICAgICAgSWwgcG9ydGFsZSBkZWkgdmVyaSBnYW1lcnMuXFxyXFxuICAgIDwvaDE+XFxyXFxuICAgIDxoMj5cXHJcXG4gICAgICBTZWkgYWxsYSByaWNlcmNhIGRpIHVuIGdpb2NvLCB2ZWNjaGlvIG8gbnVvdm8gY2hlIHNpYSwgbWEgbm9uIHJpZXNjaSBhIHRyb3ZhcmxvPyBOb2kgYWJiaWFtbyBsYSBzb2x1emlvbmUgcGVyIHRlLi4uXFxyXFxuICAgICAgQ2VyY2EgdHJhIGNlbnRpbmFpYSBkaSBhbm51bmNpIGlsIHRpdG9sbyBjaGUgbm9uIHRyb3ZhdmkgcGnDuSwgbWV0dGl0aSBpbiBjb250YXR0byBjb24gbCd1dGVudGUgY2hlIGxvIHN0YSB2ZW5kZW5kbywgXFxyXFxuICAgICAgZSBmYWkgbCdhZmZhcmUgZGVsIHNlY29sby4uLlxcclxcbiAgICA8L2gyPlxcclxcbiAgPC9kaXY+XFxyXFxuPC9zZWN0aW9uPlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciB0ZXh0LWNlbnRlclxcXCIgc3R5bGU9XFxcIm1hcmdpbi10b3A6IDEwJTsgbWFyZ2luLWJvdHRvbTogMTAlO1xcXCI+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIHN0eWxlPVxcXCJtYXJnaW4tbGVmdDoxMCU7bWFyZ2luLXJpZ2h0OjEwJTtcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgdGV4dC1iZy1kYW5nZXJcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMThyZW07aGVpZ2h0OiAxMDAlO1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICA8aDUgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPkNlcmNhPC9oNT5cXHJcXG4gICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+Q2VyY2EgaWwgdHVvIGdpb2NvIHByZWZlcmVpdG8gdHJhIGNlbnRpbmFpYSBkaSBhbm51bmNpPC9wPlxcclxcbiAgICAgICAgICA8aHI+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwIG1iLTMgZm9ybS1jb250cm9sIGJvcmRlciByb3VuZGVkXFxcIiBzdHlsZT1cXFwibWFyZ2luLXRvcDogMTBweDtcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGJvcmRlci0wXFxcIiBpZD1cXFwic2VhcmNoVGl0bGVcXFwiIHBsYWNlaG9sZGVyPVxcXCJDZXJjYVxcXCIgYXJpYS1sYWJlbD1cXFwic2VhcmNoXFxcIiBhcmlhLWRlc2NyaWJlZGJ5PVxcXCJiYXNpYy1hZGRvbjJcXFwiPlxcclxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJzZWFyY2hCdXR0b25UaXRsZVxcXCIgaHJlZj1cXFwiI1xcXCI+PGltZyBjbGFzcz1cXFwibXMtMSBidG4gaW1nU1xcXCIgc3JjPVxcXCIuL2ltZy9zZWFyY2gucG5nXFxcIiBhbHQ9XFxcIlxcXCI+PC9hPlxcclxcbiAgICAgICAgICA8L2Rpdj4gXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbFxcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZCB0ZXh0LWJnLXByaW1hcnlcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMThyZW07aGVpZ2h0OiAxMDAlO1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICA8aDUgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPkVzcGxvcmE8L2g1PlxcclxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj5Fc3Bsb3JhIG1pZ2xpYWxpYSBkaSBnaW9jaGkgdHJhIGdsaSBhbm51bmNpIHByZXNlbnRpPC9wPlxcclxcbiAgICAgICAgICA8aHI+XFxyXFxuICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGlkPVxcXCJpbnNlcnRpb25zQ2FyZFxcXCIgY2xhc3M9XFxcImJ0biBidG4taW5mb1xcXCI+QW5udW5jaTwvYT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sXFxcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIHRleHQtYmctc3VjY2Vzc1xcXCIgc3R5bGU9XFxcIndpZHRoOiAxOHJlbTtoZWlnaHQ6IDEwMCU7XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuICAgICAgICAgIDxoNSBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+U2NhbWJpYTwvaDU+XFxyXFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPkhhaSB1biBnaW9jbyBkaSBjdWkgbm9uIHRlIG5lIGZhaSBwacO5IG51bGxhIHBlciBsZSBtaWxpYXJkaSBkaSB2b2x0ZSBjaGUgbG8gaGFpIGZpbml0bz9cXHJcXG4gICAgICAgICAgICBpbnNlcmlzY2kgcXVpIGlsIHR1byBhbm51bmNpbyFcXHJcXG4gICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgICA8aHI+XFxyXFxuICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGlkPVxcXCJpbnNlcnRDYXJkXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1saWdodFxcXCI+SW5zZXJpc2NpIEFubnVuY2lvPC9hPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPHNlY3Rpb24gY2xhc3M9XFxcInAgc2VjIGJvcmRlciBib3JkZXItc3VjY2VzcyBtYi0yIGJvcmRlci1vcGFjaXR5LTUwIHJvdW5kZWQgcm93IGFsaW5nLWl0ZW0tc3RhcnRcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiYm9yZGVyLWVuZCBib3JkZXItMyBib3JkZXItcHJpbWFyeSBjb2wtOCB0ZXh0LXN0YXJ0IHdpZGdldFRleHRcXFwiPlxcclxcbiAgICA8aDE+XFxyXFxuICAgICAgSWwgcG9ydGFsZSBkZWkgdmVyaSBnYW1lcnMuXFxyXFxuICAgIDwvaDE+XFxyXFxuICAgIDxoMj5cXHJcXG4gICAgICBTZWkgYWxsYSByaWNlcmNhIGRpIHVuIGdpb2NvLCB2ZWNjaGlvIG8gbnVvdm8gY2hlIHNpYSwgbWEgbm9uIHJpZXNjaSBhIHRyb3ZhcmxvPyBOb2kgYWJiaWFtbyBsYSBzb2x1emlvbmUgcGVyIHRlLi4uXFxyXFxuICAgICAgQ2VyY2EgdHJhIGNlbnRpbmFpYSBkaSBhbm51bmNpIGlsIHRpdG9sbyBjaGUgbm9uIHRyb3ZhdmkgcGnDuSwgbWV0dGl0aSBpbiBjb250YXR0byBjb24gbCd1dGVudGUgY2hlIGxvIHN0YSB2ZW5kZW5kbywgXFxyXFxuICAgICAgZSBmYWkgbCdhZmZhcmUgZGVsIHNlY29sby4uLlxcclxcbiAgICA8L2gyPlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJwIGNvbC00XFxcIj5cXHJcXG4gICAgPHBpY3R1cmU+XFxyXFxuICAgICAgPGltZyBjbGFzcz1cXFwid2lkZ2V0UGljIHBpY1JpZ2h0IHJvdW5kZWQtZW5kXFxcIiBzcmM9XFxcIi4vaW1nL2dhbWV0cmFkZS5wbmdcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDAlXFxcIiBhbHQ9XFxcIlxcXCI+XFxyXFxuICAgIDwvcGljdHVyZT5cXHJcXG4gIDwvZGl2Plxcclxcbjwvc2VjdGlvbj5cXHJcXG5cXHJcXG48aDE+VWx0aW1pIGFubnVuY2k6PC9oMT5cXHJcXG48aDI+Q29udHJvbGxhIHF1aSBnbGkgdWx0aW1pIGFubnVuY2k8L2gyPlxcclxcbjxkaXYgaWQ9XFxcImNhcm91c2VsRXhhbXBsZUNvbnRyb2xzXFxcIiBjbGFzcz1cXFwiY2Fyb3VzZWwgc2xpZGVcXFwiIGRhdGEtYnMtcmlkZT1cXFwiY2Fyb3VzZWxcXFwiPlxcclxcbiAgICA8ZGl2IGlkPVxcXCJpbm5lckNhcm91c2VsSG9tZVxcXCIgY2xhc3M9XFxcImNhcm91c2VsLWlubmVyXFxcIj5cXHJcXG4gICAgICAgXFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYXJvdXNlbC1jb250cm9sLXByZXZcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10YXJnZXQ9XFxcIiNjYXJvdXNlbEV4YW1wbGVDb250cm9sc1xcXCIgZGF0YS1icy1zbGlkZT1cXFwicHJldlxcXCI+XFxyXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPlByZXZpb3VzPC9zcGFuPlxcclxcbiAgICA8L2J1dHRvbj5cXHJcXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2Fyb3VzZWwtY29udHJvbC1uZXh0XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdGFyZ2V0PVxcXCIjY2Fyb3VzZWxFeGFtcGxlQ29udHJvbHNcXFwiIGRhdGEtYnMtc2xpZGU9XFxcIm5leHRcXFwiPlxcclxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvblxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICA8c3BhbiBjbGFzcz1cXFwidmlzdWFsbHktaGlkZGVuXFxcIj5OZXh0PC9zcGFuPlxcclxcbiAgICA8L2J1dHRvbj5cXHJcXG4gIDwvZGl2PlxcclxcblxcclxcbjxzZWN0aW9uIGNsYXNzPVxcXCJwIHNlYyBib3JkZXIgYm9yZGVyLXN1Y2Nlc3MgbWItMiBib3JkZXItb3BhY2l0eS01MCByb3VuZGVkIHJvdyBhbGluZy1pdGVtLXN0YXJ0XFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcInAgY29sLTRcXFwiPlxcclxcbiAgICA8cGljdHVyZT5cXHJcXG4gICAgICA8aW1nIGNsYXNzPVxcXCJ3aWRnZXRQaWMgcGljTGVmdCByb3VuZGVkLXN0YXJ0XFxcIiBzcmM9XFxcIi4vaW1nL1JldW5pb24uanBlZ1xcXCIgc3R5bGU9XFxcIndpZHRoOjEwMCVcXFwiIGFsdD1cXFwiXFxcIj5cXHJcXG4gICAgPC9waWN0dXJlPlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJib3JkZXItc3RhcnQgYm9yZGVyLTMgYm9yZGVyLXByaW1hcnkgY29sLTggdGV4dC1zdGFydCB3aWRnZXRUZXh0XFxcIj5cXHJcXG4gICAgPGgxPlxcclxcbiAgICAgIENoaSBTaWFtb1xcclxcbiAgICA8L2gxPlxcclxcbiAgICA8aDI+XFxyXFxuICAgICAgU2lhbW8gdW4gcHVudG8gZCdpbmNvbnRybyBwZXIgdHV0dGkgcXVlbGxpIGNoZSBzaSBzb25vIGFwcGFzc2lvbmF0aSBhIHF1ZWwgbW9uZG8gbWFnaWNvIHJpbmNoaXVzbyBhbGwnaW50ZXJub1xcclxcbiAgICAgIGRpIHVuYSBjYXJ0dWNjaWEsIGRpc2NvIG8gc2NoZWRhLCBkYW5kb2dsaSBsJ29wcG9ydHVuaXTDoCBkaSBwb3RlciByaXRyb3ZhcmUgdmVjY2hpIHNvZ25pLCBlIHNjYW1iaWFybGkgY29uIGFsY3VuaSBudW92aS5cXHJcXG4gICAgICBMJ29wcG9ydHVuaXRhIGRpIGNvbm9zY2VyZSBwZXJzb25lIGRlbGxvIHN0ZXNzbyBwYXJlcmUsIG8gb3Bwb3N0by5cXHJcXG4gICAgPC9oMj5cXHJcXG4gIDwvZGl2Plxcclxcbjwvc2VjdGlvbj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICA8bGFiZWwgZm9yPVxcXCJ1c2VybmFtZVNpZ25JblxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPk5pY2tuYW1lPC9sYWJlbD5cXHJcXG4gICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJ1c2VybmFtZVNpZ25JblxcXCI+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgIDxsYWJlbCBmb3I9XFxcInBhc3N3b3JkU2lnbkluXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+UGFzc3dvcmQ8L2xhYmVsPlxcclxcbiAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJwYXNzd29yZFNpZ25JblxcXCI+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwibWItMyBmb3JtLWNoZWNrXFxcIj5cXHJcXG4gICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBjbGFzcz1cXFwiZm9ybS1jaGVjay1pbnB1dFxcXCIgaWQ9XFxcInJlbWVtYmVyTWVTaWduSW5cXFwiPlxcclxcbiAgICA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY2hlY2stbGFiZWxcXFwiIGZvcj1cXFwicmVtZW1iZXJNZVNpZ25JblxcXCI+Umljb3JkYW1pPC9sYWJlbD5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGlkPVxcXCJsb2dpblJlc3VsdFxcXCIgY2xhc3M9XFxcIm15LTNcXFwiPlxcclxcblxcclxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGJ1dHRvbiBpZD1cXFwidHJ5VG9Mb2dcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCI+QWNjZWRpPC9idXR0b24+XFxyXFxuPHA+Tm9uIHNlaSBhbmNvcmEgcmVnaXN0cmF0bz88L3A+XFxyXFxuPGJ1dHRvbiBpZD1cXFwibG9naW5TaWduVXBcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCI+UmVnaXN0cmF0aTwvYnV0dG9uPlxcclxcbjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIGRhdGEtYnMtZGlzbWlzcz1cXFwibW9kYWxcXFwiPkNoaXVkaTwvYnV0dG9uPlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBjbGFzcz1cXFwidGV4dC1jZW50ZXIgbWItM1xcXCI+XFxyXFxuICAgIDxoMz5PaCwgY2kgZGlzcGlhY2UgY2hlIHZhaSB2aWEhPGJyPlRvcm5hIGEgdHJvdmFyY2khPC9oMz5cXHJcXG4gICAgPGltZyBzcmM9XFxcIi4vaW1nL2ZhZEZhY2UucG5nXFxcIiB3aWR0aD1cXFwiMTAwXFxcIiBhbHQ9XFxcImltbWFnaW5lIHRyaXN0ZVxcXCI+XFxyXFxuPC9kaXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiBpZD1cXFwibXlNb2RhbFxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcInNpZ25Jbk1vZGFsTGFiZWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1jZW50ZXJlZFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XFxcIm1vZGFsLXRpdGxlIGZzLTVcXFwiIGlkPVxcXCJzaWduSW5Nb2RhbExhYmVsXFxcIj5NaW5jaGlhIEpvaG5ueSBDYXJyYWJiYWdnaW88L2gxPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0bi1jbG9zZVxcXCIgZGF0YS1icy1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgYXJpYS1sYWJlbD1cXFwiQ2xvc2VcXFwiPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgaWQ9XFxcIm15TW9kYWxCb2R5XFxcIiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgaWQ9XFxcIm15TW9kYWxGb290ZXJcXFwiIGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjwhLS1uYXZiYXIgY29udHJvbGxlciBpY29uLS0+XFxyXFxuPGJ1dHRvbiBpZD1cXFwibG9nb1xcXCIgY2xhc3M9XFxcImxvZ28tYnV0dG9uXFxcIj4gPGltZyBjbGFzcz1cXFwibG9nb1xcXCIgc3JjPVxcXCIuL2ltZy9sb2dvLnBuZ1xcXCIgYWx0PVxcXCJsb2dvXFxcIj48L2J1dHRvbj5cXHJcXG48YnV0dG9uIGlkPVxcXCJnYW1lc1xcXCIgY2xhc3M9XFxcImxvZ28tYnV0dG9uIGJhY2stdHJhbnNwYXJlbnRcXFwiPiA8aW1nIGNsYXNzPVxcXCJsb2dvXFxcIiBzcmM9XFxcIi4vaW1nL2pveXN0aWNrKDEpLnBuZ1xcXCIgYWx0PVxcXCJsb2dvXFxcIj48L2J1dHRvbj5cXHJcXG48bmF2PlxcclxcbiAgPHVsPlxcclxcbiAgICA8IS0tbmF2YmFyIGJ1dHRvbnMtLT5cXHJcXG4gICAgPCEtLW5hdmJhciBjb250cm9sbGVyIGljb24tLT5cXHJcXG4gICAgXFxyXFxuICAgIDwhLS15IGJ1dHRvbi0tPlxcclxcbiAgICA8YnV0dG9uIGlkPVxcXCJpbnNlcnRpb25zXFxcIiBjbGFzcz1cXFwiYnV0dG9uLW9uZSBuYXYtYnV0dG9uXFxcIj5Bbm51bmNpPC9idXR0b24+XFxyXFxuICAgIDwhLS1hIGJ1dHRvbi0tPlxcclxcbiAgICA8YnV0dG9uIGlkPVxcXCJhZGRJbnNlcnRpb25cXFwiIGNsYXNzPVxcXCJidXR0b24tdGhyZWUgbmF2LWJ1dHRvblxcXCI+Q3JlYSBBbm51bmNpbzwvYnV0dG9uPlxcclxcbiAgICA8IS0teCBidXR0b24tLT5cXHJcXG4gICAgPGJ1dHRvbiBpZD1cXFwibWFuYWdlbWVudFxcXCIgY2xhc3M9XFxcImJ1dHRvbi10d28gbmF2LWJ1dHRvblxcXCI+R2VzdGlvbmUgVXRlbnRpPC9idXR0b24+XFxyXFxuICAgIDwhLS1hIGJ1dHRvbi0tPlxcclxcbiAgICA8YnV0dG9uIGlkPVxcXCJpbnNNYW5hZ2VtZW50XFxcIiBjbGFzcz1cXFwiYnV0dG9uLXRocmVlIG5hdi1idXR0b25cXFwiPkdlc3Rpb25lIEFubnVuY2k8L2J1dHRvbj5cXHJcXG4gICAgPCEtLWIgYnV0dG9uLS0+XFxyXFxuICAgIDxidXR0b24gaWQ9XFxcImxvZ2luXFxcIiBjbGFzcz1cXFwiYnV0dG9uLWZvdXIgbmF2LWJ1dHRvblxcXCIgZGF0YS1icy10b2dnbGU9XFxcIm1vZGFsXFxcIlxcclxcbiAgICAgIGRhdGEtYnMtdGFyZ2V0PVxcXCIjbXlNb2RhbFxcXCI+TG9naW48L2J1dHRvbj5cXHJcXG4gICAgPCEtLWIgYnV0dG9uLS0+XFxyXFxuICAgIDxidXR0b24gaWQ9XFxcInNpZ25PdXRCdXR0b25cXFwiIGNsYXNzPVxcXCJidXR0b24tZm91ciBuYXYtYnV0dG9uXFxcIiBkYXRhLWJzLXRvZ2dsZT1cXFwibW9kYWxcXFwiXFxyXFxuICAgIGRhdGEtYnMtdGFyZ2V0PVxcXCIjbXlNb2RhbFxcXCI+TG9nb3V0PC9idXR0b24+XFxyXFxuICAgIDxidXR0b24gaWQ9XFxcInByb2ZpbGVcXFwiIGNsYXNzPVxcXCJwcm9maWxlLWJ1dHRvblxcXCI+XFxyXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcInBvc2l0aW9uLWFic29sdXRlIHRvcC0yIHN0YXJ0LTkwIHRyYW5zbGF0ZS1taWRkbGUgcC0yIGJnLWRhbmdlciBib3JkZXIgYm9yZGVyLWxpZ2h0IHJvdW5kZWQtY2lyY2xlXFxcIj5cXHJcXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPk5ldyBhbGVydHM8L3NwYW4+XFxyXFxuICAgICAgPC9zcGFuPlxcclxcbiAgICAgIDxpbWcgY2xhc3M9XFxcImxvZ28gcHJvZmlsZVxcXCIgc3JjPVxcXCIuL2ltZy9wcm9maWxlLnBuZ1xcXCIgYWx0PVxcXCJsb2dvXFxcIj5cXHJcXG4gICAgPC9idXR0b24+XFxyXFxuICA8L3VsPlxcclxcblxcclxcbiAgXFxyXFxuPC9uYXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGNsYXNzPVxcXCJyb3cgbXQtMiBtYi00XFxcIj5cXHJcXG4gICAgPGRpdiBpZD1cXFwidGl0bGVwcm9maWxlXFxcIiBjbGFzcz1cXFwiY29sLTEyIHRleHQtY2VudGVyXFxcIj5cXHJcXG5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwicm93IG10LTUgbWItMlxcXCI+XFxyXFxuICAgIDxkaXYgaWQ9XFxcImJvZHlwcm9maWxlXFxcIiBjbGFzcz1cXFwiY29sLTYgdGV4dC1lbmRcXFwiPlxcclxcblxcclxcblxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBpZD1cXFwiYnV0dG9ucy1wcm9maWxlXFxcIiBjbGFzcz1cXFwiY29sLTIgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgPGJyPlxcclxcbiAgICAgICAgPGJyPlxcclxcbiAgICAgICAgPGJyPlxcclxcbiAgICAgICAgPGJyPlxcclxcbiAgICAgICAgPGJyPlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG4gICAgPGRpdiBpZD1cXFwiaW5wdXQtcHJvZmlsZVxcXCIgY2xhc3M9XFxcImNvbC00IFxcXCI+XFxyXFxuICAgICAgICA8YnI+XFxyXFxuICAgICAgICA8YnI+XFxyXFxuICAgICAgICA8YnI+XFxyXFxuICAgICAgICA8YnI+XFxyXFxuICAgICAgICA8YnI+XFxyXFxuICAgICAgICA8ZGl2ICBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgbWItM1xcXCIgPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwLXByZXBlbmRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtdGV4dFxcXCIgaWQ9XFxcImJhc2ljLWFkZG9uMVxcXCI+VXNlcm5hbWU8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJ1c2VybmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIlVzZXJuYW1lXFxcIiBhcmlhLWxhYmVsPVxcXCJVc2VybmFtZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cXFwiYmFzaWMtYWRkb24xXFxcIj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiAgY2xhc3M9XFxcImlucHV0LWdyb3VwIG1iLTMgbXktNFxcXCIgPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwLXByZXBlbmRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtdGV4dFxcXCIgaWQ9XFxcImJhc2ljLWFkZG9uMVxcXCI+RW1haWw8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJlbWFpbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVtYWlsXFxcIiBhcmlhLWxhYmVsPVxcXCJFbWFpbFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cXFwiYmFzaWMtYWRkb24xXFxcIj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJyb3cgbXQtMiBtYi00XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLTEyIHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgIDxicj5cXHJcXG4gICAgICAgIDxicj5cXHJcXG4gICAgICAgIDxicj5cXHJcXG4gICAgICAgIDxoMz5DYW1iaW8gUGFzc3dvcmQ8L2gzPlxcclxcbiAgICAgICAgPGJyPlxcclxcbiAgICAgICAgPGJyPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLTYgdGV4dC1lbmRcXFwiPlxcclxcbiAgICAgICAgPGRpdiAgY2xhc3M9XFxcImlucHV0LWdyb3VwIG1iLTNcXFwiID5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cC1wcmVwZW5kXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLXRleHRcXFwiIGlkPVxcXCJiYXNpYy1hZGRvbjFcXFwiPlZlY2NoaWEgcGFzc3dvcmQ8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJvbGRQYXNzd29yZFxcXCIgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJWZWNjaGlhUGFzc3dvcmRcXFwiIGFyaWEtbGFiZWw9XFxcIlZlY2NoaWFQYXNzd29yZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cXFwiYmFzaWMtYWRkb24xXFxcIj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLTYgdGV4dC1zdGFydFxcXCI+XFxyXFxuICAgICAgICA8ZGl2ICBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgbWItM1xcXCIgPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwLXByZXBlbmRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtdGV4dFxcXCIgaWQ9XFxcImJhc2ljLWFkZG9uMVxcXCI+TnVvdmEgUGFzc3dvcmQ8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJuZXdQYXNzd29yZFxcXCIgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJOdW92YVBhc3N3b3JkXFxcIiBhcmlhLWxhYmVsPVxcXCJOdW92YVBhc3N3b3JkXFxcIlxcclxcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVxcXCJiYXNpYy1hZGRvbjFcXFwiPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2ICBpZD1cXFwiY3BcXFwiIGNsYXNzPVxcXCJjb2wtMTIgdGV4dC1jZW50ZXIgbXktNVxcXCI+XFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgXFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGZvcm0+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwibmFtZVNpZ25VcFxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPk5vbWU8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJuYW1lU2lnblVwXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwic3VybmFtZVNpZ25VcFxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPkNvZ25vbWU8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJzdXJuYW1lU2lnblVwXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwidXNlcm5hbWVTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5OaWNrbmFtZTwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInVzZXJuYW1lU2lnblVwXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiZW1haWxTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5FbWFpbDwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJlbWFpbFNpZ25VcFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcInBhc3N3b3JkU2lnblVwXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+UGFzc3dvcmQ8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwicGFzc3dvcmRTaWduVXBcXFwiIHJlcXVpcmVkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJjb25maXJtX3Bhc3N3b3JkU2lnblVwXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+Q29uZmVybWEgUGFzc3dvcmQ8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiY29uZmlybV9wYXNzd29yZFNpZ25VcFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGlkPVxcXCJzaWduVXBSZXN1bHRcXFwiIGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9mb3JtPlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGJ1dHRvbiBpZD1cXFwic2lnblVwTG9naW5cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+QWNjZWRpPC9idXR0b24+XFxyXFxuPGJ1dHRvbiBpZD1cXFwidHJ5dG9TaWduVXBcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgZGlzYWJsZWQ+UmVnaXN0cmF0aTwvYnV0dG9uPlxcclxcbjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIGRhdGEtYnMtZGlzbWlzcz1cXFwibW9kYWxcXFwiPkNoaXVkaTwvYnV0dG9uPlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBpZD1cXFwiY3JlYXRlVkdDb250YWluZXJcXFwiIGNsYXNzPVxcXCJjb250YWluZXIgbXktNSBiYWNrLXNlbWktdHJhbnNwYXJlbnRcXFwiIHN0eWxlPVxcXCJib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgcmdiKDE3MSwgMjA5LCA1Nyk7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCByZ2IoMTcxLCAyMDksIDU3KTtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgcmdiKDE3MSwgMjA5LCA1Nyk7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmdiKDE3MSwgMjA5LCA1Nyk7XFxyXFxuICAgIFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvdyBhbGlnbi1pdGVtcy1zdGFydFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNFxcXCIgc3R5bGU9XFxcIlxcclxcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgcmdiKDE3MSwgMjA5LCA1Nyk7IFxcclxcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYigxNzEsIDIwOSwgNTcpO1xcclxcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgICBcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJteS0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPkNyZWEgY29uc29sZSBlIGdlbmVyaTwvaDI+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJuZXdHZW5yZVxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPjxiPk51b3ZvIEdlbmVyZTwvYj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcIm5ld0dlbnJlXFxcIiBwbGFjZWhvbGRlcj1cXFwiSW5zZXJpc2NpIG51b3ZvIGdlbmVyZVxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cXFwibmV3R2VucmVCdG5cXFwiIGNsYXNzPVxcXCJidG4gbWItNCBidXR0b24taG92ZXJcXFwiPjxiPkNyZWE8L2I+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5ld0NvbnNvbGVcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj48Yj5OdW92YSBDb25zb2xlPC9iPjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwibmV3Q29uc29sZVxcXCIgcGxhY2Vob2xkZXI9XFxcIkluc2VyaXNjaSBudW92YSBjb25zb2xlXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJuZXdDb25zb2xlQnRuXFxcIiBjbGFzcz1cXFwiYnRuIG1iLTQgYnV0dG9uLWhvdmVyXFxcIj48Yj5DcmVhPC9iPjwvYnV0dG9uPlxcclxcblxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtOFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibXktM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPkluc2VyaXNjaSBEYXRpIFZpZGVvZ2lvY288L2gyPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1iLTVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJuYW1lXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+PGI+VGl0b2xvPC9iPjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiVkduYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwiSW5zZXJpc2NpIGlsIHRpdG9sbyBkZWwgZ2lvY29cXFwiPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1iLTVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJ5ZWFyXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+PGI+QW5ubyBkaSBVc2NpdGE8L2I+PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcIlZHeWVhclxcXCIgbWluPVxcXCIxOTcwXFxcIiBtYXhsZW5ndGg9XFxcIjIwMjNcXFwiIHBsYWNlaG9sZGVyPVxcXCJJbnNlcmlzY2kgbCdhbm5vIGRpIHVzY2l0YVxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWItNVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCIgZm9yPVxcXCJjb3ZlclxcXCI+PGI+TGluayBpbW1hZ2luZTwvYj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcIlZHY292ZXJcXFwiIHBsYWNlaG9sZGVyPVxcXCJJbnNlcmlzY2kgaWwgbGluayBkZWxsYSBjb3BlcnRpbmFcXFwiPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgYWxpZ24taXRlbXMtc3RhcnRcXFwiPlxcclxcbiAgICAgICAgXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNFxcXCI+XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJ0ZXh0LWVuZFxcXCI+PGI+U2VsZXppb25hIGNhdGVnb3JpZTo8L2I+PC9oND5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgXFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJnZW5yZUxpc3RcXFwiIGNsYXNzPVxcXCJjb2wtOFxcXCI+XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgXFxyXFxuXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvdyBhbGlnbi1pdGVtcy1zdGFydFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJyPjxicj5cXHJcXG4gICAgICAgICAgICA8aDQgY2xhc3M9XFxcInRleHQtZW5kXFxcIj48Yj5TZWxlemlvbmEgY29uc29sZTo8L2I+PC9oND5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBpZD1cXFwiY29uc29sZUxpc3RcXFwiIGNsYXNzPVxcXCJjb2wtOFxcXCI+XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxidXR0b24gaWQ9XFxcIm5ld1ZpZGVvR2FtZUJ0blxcXCIgY2xhc3M9XFxcImJ0biBtYi00IGJ1dHRvbi1ob3ZlclxcXCI+PGI+Q3JlYTwvYj48L2J1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuPC9kaXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IHN0eWxlPVxcXCJkaXNwbGF5OiBmbGV4O1xcXCIgY2xhc3M9XFxcIm15LTVcXFwiPlxcclxcblxcclxcbiAgICA8c3BhbiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiA0MHB4XFxcIj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgaWQ9XFxcInNlbGVjdEFsbFxcXCI+VmlzdWFsaXp6YSB0dXR0aSBpIFZpZGVvZ2FtZTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvc3Bhbj4gPCEtLWZ1bnppb25lIGNoZSBwcmVuZGUgdHV0dGkgZ2xpIGFubnVuY2kgZSBsaSBzY2hpYWZmYSBuZWwgY29udGVudXRvIGFubnVuY2ktLT5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XFxcIm1hcmdpbi1yaWdodDogNDBweFxcXCIgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5IGRyb3Bkb3duLXRvZ2dsZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIFZpc3VhbGl6emEgcGVyIEdlbmVyZVxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XFxcImdlbnJlc1xcXCIgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cXFwiUExBVEZPUk1cXFwiPjxidXR0b24gY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+UExBVEZPUk08L2J1dHRvbj48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IDQwcHhcXFwiIGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5IGRyb3Bkb3duLXRvZ2dsZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgVmlzdWFsaXp6YSBwZXIgQW5ub1xcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPHVsIGlkPVxcXCJ5ZWFyc1xcXCIgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgaWQ9XFxcIjE5ODVcXFwiPjxidXR0b24gY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+MTk4NTwvYnV0dG9uPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICA8ZGl2IHN0eWxlPVxcXCJ2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcXCIgY2xhc3M9XFxcImNvbC1tZC0zIG14LWF1dG9cXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGJvcmRlci1lbmQtMSBib3JkZXIgcm91bmRlZC1waWxsXFxcIiB0eXBlPVxcXCJzZWFyY2hcXFwiIHBsYWNlaG9sZGVyPVxcXCJjZXJjYVxcXCIgc3R5bGU9XFxcIm1hcmdpbi1yaWdodDoyMHB4XFxcIiBpZD1cXFwic2VhcmNoVGl0bGVcXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hcHBlbmRcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcInNlYXJjaEJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgYmctd2hpdGUgYm9yZGVyLWJvdHRvbS0xIGJvcmRlciByb3VuZGVkLXBpbGwgbXMtbjVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICB0cm92YVxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1zZWFyY2hcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgPHNwYW4gPlxcclxcbiAgICAgICAgPGJ1dHRvbiAgaWQ9XFxcImFkZFZpZGVvZ2FtZVxcXCIgc3R5bGU9XFxcImNvbG9yOndoaXRlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiBoaWRkZW4+XFxyXFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4vaW1nL3BsdXMucG5nXFxcIiBhbHQ9XFxcInBsdXNcXFwiIHN0eWxlPVxcXCJ3aWR0aDoyNXB4XFxcIj5cXHJcXG4gICAgICAgICAgICBJbnNlcmlzY2kgVmlkZW9nYW1lXFxyXFxuICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICA8L3NwYW4+ICAgICAgXFxyXFxuICAgICAgICAgICAgIFxcclxcblxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXY+XFxyXFxuICAgIDxkaXYgIGlkPVxcXCJWaWRlb2dhbWVDb250ZW50XFxcIiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdj5cXHJcXG4gICAgPHVsIGlkPVxcXCJwYWdlc1ZcXFwiIGNsYXNzPVxcXCJwYWdpbmF0aW9uIHBhZ2luYXRpb24tc20gbXktMlxcXCI+XFxyXFxuICAgICAgICBcXHJcXG4gICAgPC91bD5cXHJcXG48L2Rpdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIiAgICAgPGltZyAgaWQ9XFxcImJhY2stZ2FtZXNcXFwiICBjbGFzcz1cXFwibXQtNCBidXR0b25ob3ZlclxcXCIgd2lkdGg9MTIwIHNyYz1cXFwiLi9pbWcvYmFjay5wbmdcXFwiPlxcclxcblxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcInJvd1xcXCIgPlxcclxcbiAgICA8ZGl2IGlkPSBcXFwiZ2FtZVRpdGxlXFxcIiBjbGFzcz1cXFwiY29sLTEyIHRleHQtY2VudGVyXFxcIj5cXHJcXG5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgaWQ9XFxcImdhbWVJbWFnZVxcXCIgY2xhc3M9XFxcImNvbC02IHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgaWQ9XFxcImdhbWVJbmZvXFxcIiBjbGFzcz1cXFwiY29sLTYgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICBcXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgXFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJnYW1lSW5mb1xcXCIgY2xhc3M9XFxcImNvbC02IHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgXFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuICAgIFxcclxcblwiOyIsImltcG9ydCBhbm51bmNpIGZyb20gJy4vYW5udW5jaS5odG1sJ1xyXG5cclxuaW1wb3J0IGNyZWFBbm51bmNpbyBmcm9tICcuLi9jcmVhQW5udW5jaW8vY3JlYUFubnVuY2lvLmh0bWwnXHJcbmltcG9ydCBpbnNlcnRpb24gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnNlcnRpb24nO1xyXG5pbXBvcnQgZXhwYW5kSW5zZXJ0aW9uIGZyb20gJy4vYW5udW5jaW8nXHJcbmltcG9ydCBjcmVhdGVJbnNlcnRpb25QYWdlIGZyb20gJy4uL2NyZWFBbm51bmNpby9jcmVhQW5udW5jaW8nXHJcblxyXG5sZXQgbGlzdDogaW5zZXJ0aW9uW10gPSBbXTtcclxubGV0IHZpZXc6IG51bWJlciA9IDZcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQYWdlKCkgeyAgICAgICAvKkluaXppYWxpenphIHR1dHRvIGNpw7IgY2hlIHNlcnZlIGFsbGEgcGFnaW5hIHBlciBmdW56aW9uYXJlICovXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdEFsbFwiKS5vbmNsaWNrID0gc2VhcmNoQnlBbGw7XHJcbiAgICBhc3NpZ25GaWx0ZXJzKCk7XHJcbiAgICBsZXQgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRJbnNlcnRpb24yXCIpO1xyXG4gICAgYnRuLm9uY2xpY2s9KCk9PntcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MPWNyZWFBbm51bmNpbztcclxuICAgICAgICBjcmVhdGVJbnNlcnRpb25QYWdlKCk7XHJcbiAgICB9XHJcbiAgICBnZXRBbGxJbnNlcnRpb25zKCk7XHJcbiAgICBjcmVhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICBzaG93UmVzdWx0cygxKTtcclxuXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZWFyY2hCeUFsbCgpIHsgICAgICAgICAgICAgLypMYSBmdW56aW9uYSBkZWwgYm90dG9uZSBjaGUgY2VyY2EgdHV0dGkgZ2xpIGFubnVuY2kgc2VuemEgZmlsdHJpKi9cclxuICAgIGdldEFsbEluc2VydGlvbnMoKTtcclxuICAgIGNyZWF0ZVBhZ2luYXRpb24oKTtcclxuICAgIHNob3dSZXN1bHRzKDEpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gYXNzaWduRmlsdGVycygpIHsgICAgICAgICAgICAgLypBc3NlZ25hIGxlIGZ1bnppb25pIGFpIHB1bHNhbnRpIG5lbGxlIGRyb3BEb3duTGlzdCBkYSBwcm92YXJlKi9cclxuICAgIGxldCBnZW5lcmkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdlbnJlc1wiKS5jaGlsZHJlblxyXG4gICAgZm9yIChsZXQgZyBvZiBnZW5lcmkpIHtcclxuICAgICAgICAoZyBhcyBIVE1MQnV0dG9uRWxlbWVudCkub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2VhcmNoQnlHZW5yZShnLmlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgYW5uaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieWVhcnNcIikuY2hpbGRyZW5cclxuICAgIGZvciAobGV0IGEgb2YgYW5uaSkge1xyXG4gICAgICAgIChhIGFzIEhUTUxCdXR0b25FbGVtZW50KS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzZWFyY2hCeVllYXIoTnVtYmVyKChhIGFzIEhUTUxCdXR0b25FbGVtZW50KS5pZCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgc2VhcmNoVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFRpdGxlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBzZWFyY2hUaXRsZS5vbmtleWRvd24gPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIHNlYXJjaEJ5VGl0bGUoc2VhcmNoVGl0bGUudmFsdWUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQnV0dG9uXCIpO1xyXG4gICAgc2VhcmNoQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc2VhcmNoQnlUaXRsZShzZWFyY2hUaXRsZS52YWx1ZSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hCeVRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcclxuICAgIGxldCBmaWx0ZXJlZExpc3QgPSBbXVxyXG4gICAgZm9yIChsZXQgZWxlbWVudCBvZiBsaXN0KSB7XHJcbiAgICAgICAgbGV0IHRpdG9sbyA9IGVsZW1lbnQudGl0bGU7XHJcbiAgICAgICAgbGV0IGdhbWVOYW1lID0gZWxlbWVudC50cmFkZUdhbWUubmFtZVxyXG4gICAgICAgIGlmICgodGl0b2xvLnRvVXBwZXJDYXNlKCkuaW5jbHVkZXModGl0bGUudG9VcHBlckNhc2UoKSkpXHJcbiAgICAgICAgICAgIHx8IChnYW1lTmFtZS50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKHRpdGxlLnRvVXBwZXJDYXNlKCkpKSkge1xyXG4gICAgICAgICAgICBmaWx0ZXJlZExpc3QucHVzaChlbGVtZW50KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxpc3QgPSBbXTtcclxuICAgIGxpc3QgPSBmaWx0ZXJlZExpc3RcclxuICAgIGNyZWF0ZVBhZ2luYXRpb24oKTtcclxuICAgIHNob3dSZXN1bHRzKDEpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2VhcmNoQnlHZW5yZShnZW5yZTogU3RyaW5nKSB7XHJcbiAgICBjb25zb2xlLmxvZyhnZW5yZSk7XHJcbiAgICBsZXQgZmlsdGVyZWRMaXN0ID0gW11cclxuICAgIGZvciAobGV0IGVsZW1lbnQgb2YgbGlzdCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC50cmFkZUdhbWUuZ2VucmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudHJhZGVHYW1lLmdlbnJlW2ldLmdlbnJlID09IGdlbnJlKSB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZExpc3QucHVzaChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGk9ZWxlbWVudC50cmFkZUdhbWUuZ2VucmUubGVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGlzdCA9IFtdO1xyXG4gICAgbGlzdCA9IGZpbHRlcmVkTGlzdFxyXG4gICAgY3JlYXRlUGFnaW5hdGlvbigpO1xyXG4gICAgc2hvd1Jlc3VsdHMoMSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlYXJjaEJ5WWVhcih5ZWFyOiBudW1iZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKHllYXIpO1xyXG4gICAgbGV0IGZpbHRlcmVkTGlzdCA9IFtdO1xyXG4gICAgZm9yIChsZXQgZWxlbWVudCBvZiBsaXN0KSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQudHJhZGVHYW1lLnllYXIgPT0geWVhcikge1xyXG4gICAgICAgICAgICBmaWx0ZXJlZExpc3QucHVzaChlbGVtZW50KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxpc3QgPSBbXTtcclxuICAgIGxpc3QgPSBmaWx0ZXJlZExpc3RcclxuICAgIGNyZWF0ZVBhZ2luYXRpb24oKTtcclxuICAgIHNob3dSZXN1bHRzKDEpO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEFsbEluc2VydGlvbnMoKSB7IC8qIFF1ZXN0YSDDqCBzb2xvIHVuYSBwcm92YSwgc2NvbW1lbnRhcmUgbGEgZmV0Y2ggcGnDuSBnacO5ICovXHJcbiAgICBsaXN0ID0gW107XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHaW9jbzEgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL2kuZXRzeXN0YXRpYy5jb20vNjI3NzgwNC9yL2lsLzdkZjAwZS82OTc1NDYzNDAvaWxfMTE0MHhOLjY5NzU0NjM0MF9maXZzLmpwZ1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHaW9jbzIgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL3d3dy5tb2J5Z2FtZXMuY29tL2ltYWdlcy9jb3ZlcnMvbC8xNDQ0NS10aGUtbGVnZW5kLW9mLXplbGRhLW5lcy1mcm9udC1jb3Zlci5qcGdcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlR2lvY28zID0ge1xyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvaXQvYi9iMy9Qb2slQzMlQTltb25fR2lhbGxvLnBuZ1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHaW9jbzQgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL21ldGFsZ2Vhci5mYW5kb20uY29tL2l0L3dpa2kvTWV0YWxfR2Vhcj9maWxlPU1ldGFsX0dlYXIuanBnXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdhbGxlcnkxID0ge1xyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvaXQvdGh1bWIvNy83Ny9QaWthY2h1LnBuZy8xMDI0cHgtUGlrYWNodS5wbmdcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlR2FsbGVyeTIgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL3d3dy5wbmdtYXJ0LmNvbS9maWxlcy8xMS9Gcm9nLU1lbWUtUE5HLUhELnBuZ1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHYWxsZXJ5MyA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vbWVkaWEubGljZG4uY29tL2Rtcy9pbWFnZS9ENTYzNUFRSHczRTV5WXlYVEx3L3Byb2ZpbGUtZnJhbWVkcGhvdG8tc2hyaW5rXzgwMF84MDAvMC8xNjQ0NTE4OTE4NjA2P2U9MTY3NTYyMDAwMCZ2PWJldGEmdD14MVJuWHFXc0RXQU9WUVVYR0Z1ak1vZFhaaGlHVVFKdTBhNkZBc1pOM0xvXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnaW9jbzEgPSB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmFtZTogXCJTdXBlck1hcmlvXCIsXHJcbiAgICAgICAgZ2VucmU6IFt7Z2VucmU6IFwiUExBVEZPUk1cIn1dLFxyXG4gICAgICAgIHllYXI6IDE5ODUsXHJcbiAgICAgICAgY29uc29sZToge2NvbnNvbGU6IFwiTkVTXCJ9LFxyXG4gICAgICAgIGNvdmVyOiBpbWFnZUdpb2NvMVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdpb2NvMiA9IHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBuYW1lOiBcIlRoZSBMZWdlbmQgb2YgWmVsZGFcIixcclxuICAgICAgICBnZW5yZTogW3tnZW5yZTogXCJBVlZFTlRVUkFcIn1dLFxyXG4gICAgICAgIHllYXI6IDE5ODYsXHJcbiAgICAgICAgY29uc29sZToge2NvbnNvbGU6IFwiTkVTXCJ9LFxyXG4gICAgICAgIGNvdmVyOiBpbWFnZUdpb2NvMlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdpb2NvMyA9IHtcclxuICAgICAgICBpZDogMyxcclxuICAgICAgICBuYW1lOiBcIlBva2Vtb24gR2lhbGxvXCIsXHJcbiAgICAgICAgZ2VucmU6IFt7Z2VucmU6IFwiR0RSXCJ9XSxcclxuICAgICAgICB5ZWFyOiAxOTk4LFxyXG4gICAgICAgIGNvbnNvbGU6IHtjb25zb2xlOiBcIkdBTUVfQk9ZX0NPTE9SXCJ9LFxyXG4gICAgICAgIGNvdmVyOiBpbWFnZUdpb2NvM1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdpb2NvNCA9IHtcclxuICAgICAgICBpZDogNCxcclxuICAgICAgICBuYW1lOiBcIk1ldGFsIEdlYXJcIixcclxuICAgICAgICBnZW5yZTogW3tnZW5yZTogXCJTVEVBTFRIXCJ9XSxcclxuICAgICAgICB5ZWFyOiAxOTg3LFxyXG4gICAgICAgIGNvbnNvbGU6IHtjb25zb2xlOiBcIk5FU1wifSxcclxuICAgICAgICBjb3ZlcjogaW1hZ2VHaW9jbzRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwdWJsaXNoZXJHaW9jbzEgPSB7XHJcbiAgICAgICAgdXNlcklkOiAxLFxyXG4gICAgICAgIHVzZXJuYW1lOiBcIlBpZXJvYWZmb25kb1wiLFxyXG4gICAgICAgIG5hbWU6IFwiUGllcmlub1wiLFxyXG4gICAgICAgIHN1cm5hbWU6IFwiQ2ljY2lub1wiLFxyXG4gICAgICAgIGVtYWlsOiBcInBpZXJpbm9jdW9yaWNpbm9AYW1vcmluby5jb21cIixcclxuICAgICAgICByYXRpbmc6IDY2NixcclxuICAgICAgICB2aWRlb2dhbWVzOiBbZ2lvY28xXVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGluc2VydGlvbjE6IGluc2VydGlvbiA9IHtcclxuICAgICAgICBhcHByb3ZlZDogdHJ1ZSxcclxuICAgICAgICB0aXRsZTogXCJTY2FtYmlvIFN1cGVyTWFyaW9cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTY2FtYmlvIHN1cGVybWFyaW8geGvDqCBtaSBzb25vIHNla2thdG8gYSBnaW9jYXJjaVwiLFxyXG4gICAgICAgIHB1Ymxpc2hlcjogcHVibGlzaGVyR2lvY28xLFxyXG4gICAgICAgIGdhbGxlcnk6IFtpbWFnZUdhbGxlcnkxLCBpbWFnZUdhbGxlcnkyLCBpbWFnZUdhbGxlcnkzXSxcclxuICAgICAgICB0cmFkZUdhbWU6IGdpb2NvMSxcclxuICAgICAgICB3aXNoTGlzdDogW2dpb2NvMiwgZ2lvY28zLCBnaW9jbzRdLFxyXG4gICAgICAgIG91dGNvbWU6IFwiV0lQXCIsXHJcbiAgICAgICAgcHVibGljYXRpb25EYXRlOiBcIjI5LTAxLTIwMjNcIlxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI3OyBpKyspIHtcclxuICAgICAgICBpZiAoaSAhPSAxNykge1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goaW5zZXJ0aW9uMSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goaW5zZXJ0aW9uMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLypRVUVTVE8gRScgTEEgRlVOWklPTkUgR0lVU1RBIE5PTiBGQU1PIENIRSBTQkFHTElBVEUhICovXHJcblxyXG4gICAgLypGZXRjaCBhIGJhY2tlbmQgY29uIHR1dHRpIGdsaSBhbm51bmNpLCBhZ2dpb3JuYSBsYSBsaXN0YSBsaXN0Ki9cclxuICAgIC8vIGxpc3Q9W107XHJcbiAgICAvLyBmZXRjaCgnL1RpcG9Bbm51bmNpQ2hlbmVzbycpXHJcbiAgICAvLyAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC8vIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAvLyAgICAgZm9yKGxldCBkIG9mIGRhdGEpe1xyXG4gICAgLy8gICAgICAgICBsaXN0LnB1c2goZCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSk7XHJcbn1cclxuXHJcbi8qZGEgcXVpIGluIHBvaSBsZSBmdW56aW9uaSBzZXJ2b25vIGEgXHJcbmNyZWFyZSBsYSBwYWdpbmEgdW5hIHZvbHRhIGNsaWNjYXRvICBcclxuc3VsIGJvdHRvbmUgYW5udW5jaSBlIGEgcmljYXJpY2FybGUqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhZ2luYXRpb24oKSB7XHJcbiAgICBsZXQgc2l6ZTogbnVtYmVyID0gbGlzdC5sZW5ndGhcclxuICAgIGxldCB0YWJzOiBudW1iZXIgPSBNYXRoLmNlaWwoc2l6ZSAvIHZpZXcpO1xyXG4gICAgbGV0IHBhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlc1wiKTtcclxuICAgIHBhZ2VzLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0YWJzOyBpKyspIHtcclxuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgaWYgKGkgPT0gMSkge1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbSBhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiLCBcInBhZ2VcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWl0ZW1cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtbGlua1wiKTtcclxuICAgICAgICBidG4ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGFsbExpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlc1wiKS5jaGlsZHJlbjtcclxuICAgICAgICAgICAgZm9yIChsZXQgb25lTGkgb2YgYWxsTGkpIHtcclxuICAgICAgICAgICAgICAgIG9uZUxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgb25lTGkucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtIGFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIsIFwicGFnZVwiKTtcclxuICAgICAgICAgICAgc2hvd1Jlc3VsdHMoaSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBidG4uaW5uZXJIVE1MID0gXCJcIiArIChpKTtcclxuICAgICAgICBsaS5hcHBlbmRDaGlsZChidG4pO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZXNcIikuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93UmVzdWx0cyhpOiBudW1iZXIpIHtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnRpb25Db250ZW50XCIpO1xyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbGV0IHN0YXJ0ID0gKGkgLSAxKSAqIHZpZXc7XHJcbiAgICBsZXQgc3RvcCA9IChpICogdmlldykgLSAxO1xyXG4gICAgZm9yIChzdGFydDsgc3RhcnQgPD0gc3RvcDsgc3RhcnQrKykge1xyXG4gICAgICAgIGlmIChzdGFydCA+PSBsaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWxpc3Rbc3RhcnRdLmFwcHJvdmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGxldCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29sLTQgdGV4dC1jZW50ZXJcIik7XHJcbiAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpXCIpO1xyXG4gICAgICAgIGNvbC5vbm1vdXNlb3Zlcj0oKT0+e1xyXG4gICAgICAgICAgICBjb2wuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNilcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbC5vbm1vdXNlb3V0PSgpPT57XHJcbiAgICAgICAgICAgIGNvbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBleHBhbmRJbnNlcnRpb24obGlzdFtzdGFydF0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgICAgIGxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xyXG4gICAgICAgIGxldCBnYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xyXG4gICAgICAgIGxldCBnZW5yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcclxuICAgICAgICBsZXQgeWVhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcclxuICAgICAgICBsZXQgY29uc29sZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcclxuICAgICAgICBsZXQgdHJhZGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xyXG4gICAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xyXG4gICAgICAgIGltYWdlLnNyYyA9IGxpc3Rbc3RhcnRdLnRyYWRlR2FtZS5jb3Zlci5saW5rO1xyXG4gICAgICAgIGltYWdlLndpZHRoID0gMjAwO1xyXG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9IGxpc3Rbc3RhcnRdLnRpdGxlO1xyXG4gICAgICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IGxpc3Rbc3RhcnRdLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgIGdhbWUuaW5uZXJIVE1MID0gbGlzdFtzdGFydF0udHJhZGVHYW1lLm5hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yKGxldCBpPSAwOyBpPGxpc3Rbc3RhcnRdLnRyYWRlR2FtZS5nZW5yZS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGdlbnJlLmlubmVySFRNTCArPSBsaXN0W3N0YXJ0XS50cmFkZUdhbWUuZ2VucmVbaV0uZ2VucmUgKyBcIiBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgeWVhci5pbm5lckhUTUwgPSBcIlwiICsgbGlzdFtzdGFydF0udHJhZGVHYW1lLnllYXI7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuaW5uZXJIVE1MID0gbGlzdFtzdGFydF0udHJhZGVHYW1lLmNvbnNvbGUuY29uc29sZTtcclxuXHJcbiAgICAgICAgdHJhZGVzLmlubmVySFRNTCA9IFwiQWNjZXR0ZXJlaSBTY2FtYmlvIGNvbjogXCIgKyBsaXN0W3N0YXJ0XS53aXNoTGlzdFswXS5uYW1lO1xyXG4gICAgICAgIGRhdGUuaW5uZXJIVE1MPSBsaXN0W3N0YXJ0XS5wdWJsaWNhdGlvbkRhdGU7XHJcbiAgICAgICAgY29sLmFwcGVuZCh0aXRsZSxpbWFnZSxkZXNjcmlwdGlvbixnYW1lLGdlbnJlLHllYXIsY29uc29sZSx0cmFkZXMsZGF0ZSlcclxuICAgICAgICBjb250ZW50LmFwcGVuZChjb2wpO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGFnZVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IGluc2VydGlvbiBmcm9tICcuLi9pbnRlcmZhY2VzL2luc2VydGlvbic7XHJcbmltcG9ydCBhbm51bmNpbyBmcm9tICcuL2FubnVuY2lvLmh0bWwnXHJcbmltcG9ydCBjcmVhdGVQYWdlIGZyb20gJy4vYW5udW5jaSc7XHJcbmltcG9ydCBhbm51bmNpIGZyb20gJy4vYW5udW5jaS5odG1sJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV4cGFuZEluc2VydGlvbihpbnNlcnRpb246IGluc2VydGlvbikge1xyXG5cclxuICAgIC8qSW1wb3N0byBsYSBwYWdpbmEgcHJpbmNpcGFsZSBjb24gaWwgdGVtcGxhdGUgZGVsIHNpbmdvbG8gYW5udW5jaW8gKi9cclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xyXG4gICAgbWFpbi5pbm5lckhUTUwgPSBhbm51bmNpbztcclxuXHJcbiAgICBcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dhbWVzXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGFubnVuY2k7XHJcbiAgICAgICAgY3JlYXRlUGFnZSgpO1xyXG4gICAgfVxyXG4gICAgbGV0IGJhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tcIilcclxuICAgIC8vYmFjay5hcHBlbmQoYnV0dG9uKTtcclxuXHJcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBpbnNlcnRpb24udGl0bGU7XHJcbiAgICBiYWNrLmFwcGVuZCh0aXRsZSk7XHJcblxyXG5cclxuXHJcbiAgICAvKkltcG9zdG8gaWwgY2Fyb3NlbGxvIGRlbGxlIGltbWFnaW5pIHV0ZW50ZSAqL1xyXG4gICAgbGV0IGluZGljYXRvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5kaWNhdG9yXCIpXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluc2VydGlvbi5nYWxsZXJ5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImRhdGEtYnMtdGFyZ2V0XCIsIFwiI2ltYWdlU2xpZGVyXCIpO1xyXG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLXNsaWRlLXRvXCIsIFwiXCIgKyBpKTtcclxuICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIFwiU2xpZGUgXCIgKyAoaSArIDEpKTtcclxuICAgICAgICBpbmRpY2F0b3IuYXBwZW5kKGJ0bik7XHJcbiAgICB9XHJcbiAgICBsZXQgaW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlubmVyXCIpXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnNlcnRpb24uZ2FsbGVyeS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2Fyb3VzZWwtaXRlbSBhY3RpdmVcIilcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJvdXNlbC1pdGVtXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGltZy5zcmMgPSBpbnNlcnRpb24uZ2FsbGVyeVtpXS5saW5rO1xyXG4gICAgICAgIGltZy53aWR0aCA9IDQwMDtcclxuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkLWJsb2NrIHctMTAwXCIpO1xyXG4gICAgICAgIGltZy5hbHQgPSBcIkdhbGxlcnkgSW1hZ2VcIiArIChpICsgMSlcclxuICAgICAgICBkaXYuYXBwZW5kKGltZyk7XHJcbiAgICAgICAgaW5uZXIuYXBwZW5kKGRpdilcclxuICAgIH1cclxuICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgaW1nLnNyYyA9IGluc2VydGlvbi50cmFkZUdhbWUuY292ZXIubGluaztcclxuICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImltZy1mbHVpZCByb3VuZGVkLXN0YXJ0XCIpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmQtaW1hZ2VcIikuYXBwZW5kKGltZyk7XHJcbiAgICBsZXQgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICBoNC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcmQtdGl0bGVcIik7XHJcbiAgICBoNC5pbm5lckhUTUwgPSBpbnNlcnRpb24udHJhZGVHYW1lLm5hbWU7XHJcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcmQtdGV4dFwiKTtcclxuICAgIHAuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJmb250LXNpemU6IDEuNWVtO1wiKVxyXG4gICAgcC5pbm5lckhUTUwgPSBcIkdlbmVyZTogXCI7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluc2VydGlvbi50cmFkZUdhbWUuZ2VucmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBwLmlubmVySFRNTCArPSBpbnNlcnRpb24udHJhZGVHYW1lLmdlbnJlW2ldLmdlbnJlICsgXCIgXCJcclxuICAgIH1cclxuICAgIHAuaW5uZXJIVE1MICs9IFwiPGJyPlwiXHJcbiAgICAgICAgKyBcIkFubm86IFwiICsgaW5zZXJ0aW9uLnRyYWRlR2FtZS55ZWFyICsgXCI8YnI+XCJcclxuICAgICAgICArIFwiQ29uc29sZTogXCIgKyBpbnNlcnRpb24udHJhZGVHYW1lLmNvbnNvbGUuY29uc29sZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZC1ib2R5XCIpLmFwcGVuZChoNCwgcCk7XHJcbiAgICBsZXQgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGRlc2Muc2V0QXR0cmlidXRlKFwic3R5bGVcIixcImNvbG9yOndoaXRlXCIpXHJcbiAgICBkZXNjLmlubmVySFRNTCA9IFwiRGVzY3JpemlvbmU6XCJcclxuICAgIGxldCBpbnNEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgaW5zRGVzYy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLFwiY29sb3I6d2hpdGVcIilcclxuICAgIGluc0Rlc2MuaW5uZXJIVE1MID0gaW5zZXJ0aW9uLmRlc2NyaXB0aW9uO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnRpb24tY3JlYXRvclwiKS5pbm5lckhUTUwgPSBpbnNlcnRpb24ucHVibGlzaGVyLnVzZXJuYW1lO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnRpb24tZGVzY3JpcHRpb25cIikuYXBwZW5kKGRlc2MsIGluc0Rlc2MpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1pdGVtLVwiICsgKGkgKyAxKSkuaW5uZXJIVE1MID0gaW5zZXJ0aW9uLndpc2hMaXN0W2ldLm5hbWU7XHJcbiAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgaW1nLnNyYyA9IGluc2VydGlvbi53aXNoTGlzdFtpXS5jb3Zlci5saW5rO1xyXG4gICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcmQtaW1nLXRvcFwiKVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nLWl0ZW0tXCIgKyAoaSArIDEpKS5hcHBlbmQoaW1nKTtcclxuICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHAuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJkLXRleHRcIik7XHJcbiAgICAgICAgcC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImZvbnQtc2l6ZTogMS41ZW07XCIpO1xyXG4gICAgICAgIHAuaW5uZXJIVE1MID0gXCJHZW5lcmU6IFwiO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5zZXJ0aW9uLnRyYWRlR2FtZS5nZW5yZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBwLmlubmVySFRNTCArPSBpbnNlcnRpb24udHJhZGVHYW1lLmdlbnJlW2ldLmdlbnJlICsgXCIgXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgcC5pbm5lckhUTUwgKz0gXCI8YnI+XCJcclxuICAgICAgICAgICAgKyBcIkFubm86IFwiICsgaW5zZXJ0aW9uLnRyYWRlR2FtZS55ZWFyICsgXCI8YnI+XCJcclxuICAgICAgICAgICAgKyBcIkNvbnNvbGU6IFwiICsgaW5zZXJ0aW9uLnRyYWRlR2FtZS5jb25zb2xlLmNvbnNvbGU7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2R5LWl0ZW0tXCIgKyAoaSArIDEpKS5hcHBlbmQocCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGV4cGFuZEluc2VydGlvbiIsImltcG9ydCBjcmVhQW5udW5jaW8gZnJvbSAnLi4vY3JlYUFubnVuY2lvL2NyZWFBbm51bmNpby5odG1sJ1xyXG5pbXBvcnQgaW5zZXJ0aW9uIGZyb20gJy4uL2ludGVyZmFjZXMvaW5zZXJ0aW9uJztcclxuaW1wb3J0IGV4cGFuZEluc2VydGlvbiBmcm9tICcuL2FubnVuY2lvJ1xyXG5pbXBvcnQgY3JlYXRlSW5zZXJ0aW9uUGFnZSBmcm9tICcuLi9jcmVhQW5udW5jaW8vY3JlYUFubnVuY2lvJ1xyXG5cclxubGV0IGxpc3Q6IGluc2VydGlvbltdID0gW107XHJcbmxldCB2aWV3OiBudW1iZXIgPSA2XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGFnZTIoKSB7ICAgICAgIC8qSW5pemlhbGl6emEgdHV0dG8gY2nDsiBjaGUgc2VydmUgYWxsYSBwYWdpbmEgcGVyIGZ1bnppb25hcmUgKi9cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0QWxsMlwiKS5vbmNsaWNrID0gc2VhcmNoQnlBbGwyO1xyXG4gICAgYXNzaWduRmlsdGVyczIoKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlQ2F0ZWdvcnlcIikub25jbGljayA9IGNyZWF0ZUNhdGVnb3J5O1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWxldGVFbGVtZW50c1wiKS5vbmNsaWNrID0gZGVsZXRlRWxlbWVudHM7XHJcbiAgICBsZXQgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRJbnNlcnRpb25cIik7XHJcbiAgICBidG4ub25jbGljaz0oKT0+e1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUw9Y3JlYUFubnVuY2lvO1xyXG4gICAgICAgIGNyZWF0ZUluc2VydGlvblBhZ2UoKTtcclxuICAgIH1cclxuICAgIC8vY3JlYXRlSW5zZXJ0aW9uKCk7XHJcbiAgICBnZXRBbGxJbnNlcnRpb25zMigpO1xyXG4gICAgY3JlYXRlUGFnaW5hdGlvbjIoKTtcclxuICAgIHNob3dSZXN1bHRzMigxKTtcclxuXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZWFyY2hCeUFsbDIoKSB7ICAgICAgICAgICAgIC8qTGEgZnVuemlvbmEgZGVsIGJvdHRvbmUgY2hlIGNlcmNhIHR1dHRpIGdsaSBhbm51bmNpIHNlbnphIGZpbHRyaSovXHJcbiAgICBnZXRBbGxJbnNlcnRpb25zMigpO1xyXG4gICAgY3JlYXRlUGFnaW5hdGlvbjIoKTtcclxuICAgIHNob3dSZXN1bHRzMigxKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGFzc2lnbkZpbHRlcnMyKCkgeyAgICAgICAgICAgICAvKkFzc2VnbmEgbGUgZnVuemlvbmkgYWkgcHVsc2FudGkgbmVsbGUgZHJvcERvd25MaXN0IGRhIHByb3ZhcmUqL1xyXG4gICAgbGV0IGdlbmVyaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2VucmVzMlwiKS5jaGlsZHJlblxyXG4gICAgZm9yIChsZXQgZyBvZiBnZW5lcmkpIHtcclxuICAgICAgICAoZyBhcyBIVE1MQnV0dG9uRWxlbWVudCkub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2VhcmNoQnlHZW5yZTIoZy5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IGFubmkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInllYXJzMlwiKS5jaGlsZHJlblxyXG4gICAgZm9yIChsZXQgYSBvZiBhbm5pKSB7XHJcbiAgICAgICAgKGEgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNlYXJjaEJ5WWVhcjIoTnVtYmVyKChhIGFzIEhUTUxCdXR0b25FbGVtZW50KS5pZCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKmxldCBzZWFyY2hUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoVGl0bGUyXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBzZWFyY2hUaXRsZS5vbmtleWRvd24gPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIHNlYXJjaEJ5VGl0bGUyKHNlYXJjaFRpdGxlLnZhbHVlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEJ1dHRvbjJcIik7XHJcbiAgICBzZWFyY2hCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBzZWFyY2hCeVRpdGxlMihzZWFyY2hUaXRsZS52YWx1ZSlcclxuICAgIH0qL1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2VhcmNoQnlUaXRsZTIodGl0bGU6IHN0cmluZykge1xyXG4gICAgbGV0IGZpbHRlcmVkTGlzdCA9IFtdXHJcbiAgICBmb3IgKGxldCBlbGVtZW50IG9mIGxpc3QpIHtcclxuICAgICAgICBsZXQgdGl0b2xvID0gZWxlbWVudC50aXRsZTtcclxuICAgICAgICBsZXQgZ2FtZU5hbWUgPSBlbGVtZW50LnRyYWRlR2FtZS5uYW1lXHJcbiAgICAgICAgaWYgKCh0aXRvbG8udG9VcHBlckNhc2UoKS5pbmNsdWRlcyh0aXRsZS50b1VwcGVyQ2FzZSgpKSlcclxuICAgICAgICAgICAgfHwgKGdhbWVOYW1lLnRvVXBwZXJDYXNlKCkuaW5jbHVkZXModGl0bGUudG9VcHBlckNhc2UoKSkpKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkTGlzdC5wdXNoKGVsZW1lbnQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGlzdCA9IFtdO1xyXG4gICAgbGlzdCA9IGZpbHRlcmVkTGlzdFxyXG4gICAgY3JlYXRlUGFnaW5hdGlvbjIoKTtcclxuICAgIHNob3dSZXN1bHRzMigxKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNlYXJjaEJ5R2VucmUyKGdlbnJlOiBTdHJpbmcpIHtcclxuICAgIGNvbnNvbGUubG9nKGdlbnJlKTtcclxuICAgIGxldCBmaWx0ZXJlZExpc3QgPSBbXVxyXG4gICAgZm9yIChsZXQgZWxlbWVudCBvZiBsaXN0KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LnRyYWRlR2FtZS5nZW5yZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC50cmFkZUdhbWUuZ2VucmVbaV0uZ2VucmUgPT0gZ2VucmUpIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcmVkTGlzdC5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgaT1lbGVtZW50LnRyYWRlR2FtZS5nZW5yZS5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsaXN0ID0gW107XHJcbiAgICBsaXN0ID0gZmlsdGVyZWRMaXN0XHJcbiAgICBjcmVhdGVQYWdpbmF0aW9uMigpO1xyXG4gICAgc2hvd1Jlc3VsdHMyKDEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZWFyY2hCeVllYXIyKHllYXI6IG51bWJlcikge1xyXG4gICAgY29uc29sZS5sb2coeWVhcik7XHJcbiAgICBsZXQgZmlsdGVyZWRMaXN0ID0gW107XHJcbiAgICBmb3IgKGxldCBlbGVtZW50IG9mIGxpc3QpIHtcclxuICAgICAgICBpZiAoZWxlbWVudC50cmFkZUdhbWUueWVhciA9PSB5ZWFyKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkTGlzdC5wdXNoKGVsZW1lbnQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGlzdCA9IFtdO1xyXG4gICAgbGlzdCA9IGZpbHRlcmVkTGlzdFxyXG4gICAgY3JlYXRlUGFnaW5hdGlvbjIoKTtcclxuICAgIHNob3dSZXN1bHRzMigxKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRBbGxJbnNlcnRpb25zMigpIHsgLyogUXVlc3RhIMOoIHNvbG8gdW5hIHByb3ZhLCBzY29tbWVudGFyZSBsYSBmZXRjaCBwacO5IGdpw7kgKi9cclxuICAgIGxpc3QgPSBbXTtcclxuXHJcbiAgICBjb25zdCBpbWFnZUdpb2NvMSA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vaS5ldHN5c3RhdGljLmNvbS82Mjc3ODA0L3IvaWwvN2RmMDBlLzY5NzU0NjM0MC9pbF8xMTQweE4uNjk3NTQ2MzQwX2ZpdnMuanBnXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdpb2NvMiA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vd3d3Lm1vYnlnYW1lcy5jb20vaW1hZ2VzL2NvdmVycy9sLzE0NDQ1LXRoZS1sZWdlbmQtb2YtemVsZGEtbmVzLWZyb250LWNvdmVyLmpwZ1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHaW9jbzMgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9pdC9iL2IzL1BvayVDMyVBOW1vbl9HaWFsbG8ucG5nXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdpb2NvNCA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vbWV0YWxnZWFyLmZhbmRvbS5jb20vaXQvd2lraS9NZXRhbF9HZWFyP2ZpbGU9TWV0YWxfR2Vhci5qcGdcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlR2FsbGVyeTEgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9pdC90aHVtYi83Lzc3L1Bpa2FjaHUucG5nLzEwMjRweC1QaWthY2h1LnBuZ1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHYWxsZXJ5MiA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vd3d3LnBuZ21hcnQuY29tL2ZpbGVzLzExL0Zyb2ctTWVtZS1QTkctSEQucG5nXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdhbGxlcnkzID0ge1xyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9tZWRpYS5saWNkbi5jb20vZG1zL2ltYWdlL0Q1NjM1QVFIdzNFNXlZeVhUTHcvcHJvZmlsZS1mcmFtZWRwaG90by1zaHJpbmtfODAwXzgwMC8wLzE2NDQ1MTg5MTg2MDY/ZT0xNjc1NjIwMDAwJnY9YmV0YSZ0PXgxUm5YcVdzRFdBT1ZRVVhHRnVqTW9kWFpoaUdVUUp1MGE2RkFzWk4zTG9cIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdpb2NvMSA9IHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuYW1lOiBcIlN1cGVyTWFyaW9cIixcclxuICAgICAgICBnZW5yZTogW3tnZW5yZTogXCJQTEFURk9STVwifV0sXHJcbiAgICAgICAgeWVhcjogMTk4NSxcclxuICAgICAgICBjb25zb2xlOiB7Y29uc29sZTogXCJORVNcIn0sXHJcbiAgICAgICAgY292ZXI6IGltYWdlR2lvY28xXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2lvY28yID0ge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIG5hbWU6IFwiVGhlIExlZ2VuZCBvZiBaZWxkYVwiLFxyXG4gICAgICAgIGdlbnJlOiBbe2dlbnJlOiBcIkFWVkVOVFVSQVwifV0sXHJcbiAgICAgICAgeWVhcjogMTk4NixcclxuICAgICAgICBjb25zb2xlOiB7Y29uc29sZTogXCJORVNcIn0sXHJcbiAgICAgICAgY292ZXI6IGltYWdlR2lvY28yXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2lvY28zID0ge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIG5hbWU6IFwiUG9rZW1vbiBHaWFsbG9cIixcclxuICAgICAgICBnZW5yZTogW3tnZW5yZTogXCJHRFJcIn1dLFxyXG4gICAgICAgIHllYXI6IDE5OTgsXHJcbiAgICAgICAgY29uc29sZToge2NvbnNvbGU6IFwiR0FNRV9CT1lfQ09MT1JcIn0sXHJcbiAgICAgICAgY292ZXI6IGltYWdlR2lvY28zXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2lvY280ID0ge1xyXG4gICAgICAgIGlkOiA0LFxyXG4gICAgICAgIG5hbWU6IFwiTWV0YWwgR2VhclwiLFxyXG4gICAgICAgIGdlbnJlOiBbe2dlbnJlOiBcIlNURUFMVEhcIn1dLFxyXG4gICAgICAgIHllYXI6IDE5ODcsXHJcbiAgICAgICAgY29uc29sZToge2NvbnNvbGU6IFwiTkVTXCJ9LFxyXG4gICAgICAgIGNvdmVyOiBpbWFnZUdpb2NvNFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHB1Ymxpc2hlckdpb2NvMSA9IHtcclxuICAgICAgICB1c2VySWQ6IDEsXHJcbiAgICAgICAgdXNlcm5hbWU6IFwiUGllcm9hZmZvbmRvXCIsXHJcbiAgICAgICAgbmFtZTogXCJQaWVyaW5vXCIsXHJcbiAgICAgICAgc3VybmFtZTogXCJDaWNjaW5vXCIsXHJcbiAgICAgICAgZW1haWw6IFwicGllcmlub2N1b3JpY2lub0BhbW9yaW5vLmNvbVwiLFxyXG4gICAgICAgIHJhdGluZzogNjY2LFxyXG4gICAgICAgIHZpZGVvZ2FtZXM6IFtnaW9jbzFdXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5zZXJ0aW9uMTogaW5zZXJ0aW9uID0ge1xyXG4gICAgICAgIGFwcHJvdmVkOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiBcIlNjYW1iaW8gU3VwZXJNYXJpb1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlNjYW1iaW8gc3VwZXJtYXJpbyB4a8OoIG1pIHNvbm8gc2Vra2F0byBhIGdpb2NhcmNpXCIsXHJcbiAgICAgICAgcHVibGlzaGVyOiBwdWJsaXNoZXJHaW9jbzEsXHJcbiAgICAgICAgZ2FsbGVyeTogW2ltYWdlR2FsbGVyeTEsIGltYWdlR2FsbGVyeTIsIGltYWdlR2FsbGVyeTNdLFxyXG4gICAgICAgIHRyYWRlR2FtZTogZ2lvY28xLFxyXG4gICAgICAgIHdpc2hMaXN0OiBbZ2lvY28yLCBnaW9jbzMsIGdpb2NvNF0sXHJcbiAgICAgICAgb3V0Y29tZTogXCJXSVBcIixcclxuICAgICAgICBwdWJsaWNhdGlvbkRhdGU6IFwiMjktMDEtMjAyM1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5zZXJ0aW9uMjogaW5zZXJ0aW9uID0ge1xyXG4gICAgICAgIGFwcHJvdmVkOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiBcIlNjYW1iaW8gU3VwZXJMdWlnaVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlNjYW1iaW8gc3VwZXJsdWlnaSBwZWNjaMOpIHNvbm8gcHJvXCIsXHJcbiAgICAgICAgcHVibGlzaGVyOiBwdWJsaXNoZXJHaW9jbzEsXHJcbiAgICAgICAgZ2FsbGVyeTogW2ltYWdlR2FsbGVyeTEsIGltYWdlR2FsbGVyeTIsIGltYWdlR2FsbGVyeTNdLFxyXG4gICAgICAgIHRyYWRlR2FtZTogZ2lvY28yLFxyXG4gICAgICAgIHdpc2hMaXN0OiBbZ2lvY28xLCBnaW9jbzMsIGdpb2NvNF0sXHJcbiAgICAgICAgb3V0Y29tZTogXCJXSVBcIixcclxuICAgICAgICBwdWJsaWNhdGlvbkRhdGU6IFwiMjktMDEtMjAyM1wiXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjc7IGkrKykge1xyXG4gICAgICAgIGlmIChpICE9IDIpIHtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKGluc2VydGlvbjEpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKGluc2VydGlvbjIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qUVVFU1RPIEUnIExBIEZVTlpJT05FIEdJVVNUQSBOT04gRkFNTyBDSEUgU0JBR0xJQVRFISAqL1xyXG5cclxuICAgIC8qRmV0Y2ggYSBiYWNrZW5kIGNvbiB0dXR0aSBnbGkgYW5udW5jaSwgYWdnaW9ybmEgbGEgbGlzdGEgbGlzdCovXHJcbiAgICAvLyBsaXN0PVtdO1xyXG4gICAgLy8gZmV0Y2goJy9UaXBvQW5udW5jaUNoZW5lc28nKVxyXG4gICAgLy8gLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAvLyAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgLy8gICAgIGZvcihsZXQgZCBvZiBkYXRhKXtcclxuICAgIC8vICAgICAgICAgbGlzdC5wdXNoKGQpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0pO1xyXG59XHJcblxyXG4vKmRhIHF1aSBpbiBwb2kgbGUgZnVuemlvbmkgc2Vydm9ubyBhIFxyXG5jcmVhcmUgbGEgcGFnaW5hIHVuYSB2b2x0YSBjbGljY2F0byAgXHJcbnN1bCBib3R0b25lIGFubnVuY2kgZSBhIHJpY2FyaWNhcmxlKi9cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVBhZ2luYXRpb24yKCkge1xyXG4gICAgbGV0IHNpemU6IG51bWJlciA9IGxpc3QubGVuZ3RoXHJcbiAgICBsZXQgdGFiczogbnVtYmVyID0gTWF0aC5jZWlsKHNpemUgLyB2aWV3KTtcclxuICAgIGxldCBwYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZXMyXCIpO1xyXG4gICAgcGFnZXMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRhYnM7IGkrKykge1xyXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBpZiAoaSA9PSAxKSB7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtIGFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIsIFwicGFnZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1saW5rXCIpO1xyXG4gICAgICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYWxsTGkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VzMlwiKS5jaGlsZHJlbjtcclxuICAgICAgICAgICAgZm9yIChsZXQgb25lTGkgb2YgYWxsTGkpIHtcclxuICAgICAgICAgICAgICAgIG9uZUxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgb25lTGkucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtIGFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIsIFwicGFnZVwiKTtcclxuICAgICAgICAgICAgc2hvd1Jlc3VsdHMyKGkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgYnRuLmlubmVySFRNTCA9IFwiXCIgKyAoaSk7XHJcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYnRuKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VzMlwiKS5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dSZXN1bHRzMihpOiBudW1iZXIpIHtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnRpb25Db250ZW50MlwiKTtcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGxldCBzdGFydCA9IChpIC0gMSkgKiB2aWV3O1xyXG4gICAgbGV0IHN0b3AgPSAoaSAqIHZpZXcpIC0gMTtcclxuICAgIGZvciAoc3RhcnQ7IHN0YXJ0IDw9IHN0b3A7IHN0YXJ0KyspIHtcclxuICAgICAgICBpZiAoc3RhcnQgPj0gbGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFsaXN0W3N0YXJ0XS5hcHByb3ZlZCkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBsZXQgY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIGxldCBqdWFuID0gXCJcIiArIHN0YXJ0O1xyXG4gICAgICAgIC8vSnVhbiDDqCBsJ2lkIGRlaSBib3R0b25pLCBzYXLDoCBsJ2lkIGRlbGxlIGluc2VyemlvbmkgcXVhbmRvIHNpIGltcGxlbWVudGVyYW5ubyBnbGkgYW5udW5jaSBkYWwgZGJcclxuICAgICAgICBsZXQgaXNPbkNoZWNrZWRMaXN0UmVzdWx0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGZvcihsZXQgZWxlbWVudCBvZiBjaGVja2VkTGlzdCl7XHJcbiAgICAgICAgICAgIGlmKGp1YW49PWVsZW1lbnQpe1xyXG4gICAgICAgICAgICAgICAgaXNPbkNoZWNrZWRMaXN0UmVzdWx0PXRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCAnbGlzdC1ncm91cC1pdGVtJyk7XHJcbiAgICAgICAgaWYoaXNPbkNoZWNrZWRMaXN0UmVzdWx0KXtcclxuICAgICAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKVwiKTtcclxuICAgICAgICAgICAgY29sLnNldEF0dHJpYnV0ZSgnb25tb3VzZW92ZXInLCAnc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNilcIiknKTtcclxuICAgICAgICAgICAgY29sLnNldEF0dHJpYnV0ZSgnb25tb3VzZW91dCcsICdzZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKVwiKScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb2wuc2V0QXR0cmlidXRlKFwiaWRcIiwganVhbik7XHJcblxyXG4gICAgICAgIGNvbC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBhZGRJbnNlcnRpb25Ub0xpc3QoanVhbilcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gbGlzdFtzdGFydF0udGl0bGU7XHJcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gXCJcIiArIGxpc3Rbc3RhcnRdLnRyYWRlR2FtZS5uYW1lO1xyXG4gICAgICAgIGZvcihsZXQgaT0gMDsgaTxsaXN0W3N0YXJ0XS50cmFkZUdhbWUuZ2VucmUubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgKz0gXCIsIFwiICsgbGlzdFtzdGFydF0udHJhZGVHYW1lLmdlbnJlW2ldLmdlbnJlICsgXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MICs9IFwiLCBcIiArIGxpc3Rbc3RhcnRdLnRyYWRlR2FtZS55ZWFyO1xyXG5cclxuICAgICAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgKz0gXCIsIFwiICsgbGlzdFtzdGFydF0udHJhZGVHYW1lLmNvbnNvbGUuY29uc29sZTtcclxuXHJcbiAgICAgICAgY29sLmFwcGVuZCh0aXRsZSxkZXNjcmlwdGlvbilcclxuICAgICAgICBjb250ZW50LmFwcGVuZChjb2wpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhjaGVja2VkTGlzdCk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQYWdlMlxyXG5cclxuXHJcbmxldCBjaGVja2VkTGlzdDogc3RyaW5nW10gPSBbXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRJbnNlcnRpb25Ub0xpc3QoaW5zOiBzdHJpbmcpe1xyXG5cclxuICAgIGxldCBpc09uQ2hlY2tlZExpc3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBmb3IobGV0IGVsZW1lbnQgb2YgY2hlY2tlZExpc3Qpe1xyXG4gICAgICAgIGlmKGlucz09ZWxlbWVudCl7XHJcbiAgICAgICAgICAgIGlzT25DaGVja2VkTGlzdCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNoZWNrZWRMaXN0LnNwbGljZShjaGVja2VkTGlzdC5pbmRleE9mKGVsZW1lbnQpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYoaXNPbkNoZWNrZWRMaXN0KXtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnMpLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucykuc2V0QXR0cmlidXRlKCdvbm1vdXNlb3ZlcicsICdzZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KVwiKScpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucykuc2V0QXR0cmlidXRlKCdvbm1vdXNlb3V0JywgJ3NldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpXCIpJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNoZWNrZWRMaXN0LnB1c2goaW5zKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnMpLnJlbW92ZUF0dHJpYnV0ZSgnb25tb3VzZW92ZXInKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnMpLnJlbW92ZUF0dHJpYnV0ZSgnb25tb3VzZW91dCcpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucykuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNilcIik7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2F0ZWdvcnkoKXtcclxuXHJcbiAgICAvL1RPRE86IGluc2VyaXNjaSBnbGkgZWxlbWVudGkgZGkgY2hlY2tlZExpc3QgaW4gdW5hIGNhdGVnb3JpYSBuZWwgREJcclxuXHJcbiAgICAvL1RPRE86IE1ldG9kbyBkYSBmYXJlIHBlciBpbnNlcmlyZSBnbGkgZWxlbWVudGkgbmVsIGRhdGFiYXNlIGhhaGFcclxuICAgIGNvbnNvbGUubG9nKFwiQ2F0ZWdvcmlhIGNyZWF0YSBwacO5IG8gbWVub1wiKTtcclxuXHJcbiAgICBjaGVja2VkTGlzdCA9IFtdO1xyXG5cclxuICAgIC8vUmVpbXBvc3RhIGxhIHBhZ2luYSBhIGNvbWUgc3RhdmEgcHJpbWFcclxuICAgIGdldEFsbEluc2VydGlvbnMyKCk7XHJcbiAgICBjcmVhdGVQYWdpbmF0aW9uMigpO1xyXG4gICAgc2hvd1Jlc3VsdHMyKDEpO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUVsZW1lbnRzKCl7XHJcblxyXG4gICAgLy9UT0RPOiBjYW5jZWxsYSBnbGkgZWxlbWVudGkgZGkgY2hlY2tlZExpc3QgZGFsIERCXHJcblxyXG4gICAgLy9UT0RPOiBNZXRvZG8gZGEgZmFyZSBwZXIgY2FuY2VsbGFyZSBnbGkgZWxlbWVudGkgZGFsIGRhdGFiYXNlXHJcbiAgICBjb25zb2xlLmxvZyhcIkVsZW1lbnRpIGNhbmNlbGxhdGkgcGnDuSBvIG1lbm9cIik7XHJcblxyXG4gICAgY2hlY2tlZExpc3QgPSBbXTtcclxuXHJcbiAgICAvL1JlaW1wb3N0YSBsYSBwYWdpbmEgYSBjb21lIHN0YXZhIHByaW1hXHJcbiAgICBnZXRBbGxJbnNlcnRpb25zMigpO1xyXG4gICAgY3JlYXRlUGFnaW5hdGlvbjIoKTtcclxuICAgIHNob3dSZXN1bHRzMigxKTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgY3JlYUFubnVuY2lvIGZyb20gJy4vY3JlYUFubnVuY2lvLmh0bWwnXHJcbmltcG9ydCBhbm51bmNpIGZyb20gJy4vYW5udW5jaS5odG1sJ1xyXG5pbXBvcnQgdmlkZW9nYW1lIGZyb20gJy4uL2ludGVyZmFjZXMvdmlkZW9nYW1lJztcclxuaW1wb3J0IGluc2VydGlvbiBmcm9tICcuLi9pbnRlcmZhY2VzL2luc2VydGlvbic7XHJcblxyXG5sZXQgZnVsbExpc3Q6IHZpZGVvZ2FtZVtdID0gW11cclxubGV0IHVzZXJMaXN0OiB2aWRlb2dhbWVbXSA9IFtdXHJcbmxldCB3aXNoTGlzdDogc3RyaW5nW10gPSBbXVxyXG5sZXQgZ2lvY29EYVNjYW1iaWFyZTogc3RyaW5nO1xyXG5sZXQgaW5kZXggPSAwO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEFsbEdhbWVzKCkge1xyXG4gICAgZmV0Y2goXCIvdmlkZW9nYW1lc1wiKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKCh2aWRlb2dhbWVzKSA9PiB7XHJcbiAgICAgICAgICAgIGZ1bGxMaXN0ID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGdhbWUgb2YgdmlkZW9nYW1lcykge1xyXG4gICAgICAgICAgICAgICAgZnVsbExpc3QucHVzaChnYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgd2lzaEdhbWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aXNoR2FtZXNcIik7XHJcbiAgICAgICAgICAgIHdpc2hHYW1lcy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBnYW1lIG9mIGZ1bGxMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICAgICAgbGlCdG4uaWQgPSBnYW1lLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBsaUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICAgICAgbGlCdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkcm9wZG93bi1pdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgbGlCdG4uaW5uZXJIVE1MID0gZ2FtZS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZ2FtZSk7XHJcbiAgICAgICAgICAgICAgICBsaUJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGVzdDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3aXNoTGlzdC5sZW5ndGggPT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aXNoTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGVsZW1lbnQgb2Ygd2lzaExpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT0gbGkuaW5uZXJIVE1MKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lzaExpc3RbaW5kZXhdID0gbGkuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzaG93U2VsZWN0ZWRHYW1lcygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGkuYXBwZW5kKGxpQnRuKTtcclxuICAgICAgICAgICAgICAgIHdpc2hHYW1lcy5hcHBlbmQobGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VXNlckdhbWVzKCkge1xyXG4gICAgZmV0Y2goXCIvdmlkZW9nYW1lcy91c2VyXCIpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKHZpZGVvZ2FtZXMpID0+IHtcclxuICAgICAgICAgICAgdXNlckxpc3QgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgZ2FtZSBvZiB2aWRlb2dhbWVzKSB7XHJcbiAgICAgICAgICAgICAgICB1c2VyTGlzdC5wdXNoKGdhbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCB0cmFkZUdhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYWRlR2FtZVwiKTtcclxuICAgICAgICAgICAgdHJhZGVHYW1lLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGdhbWUgb2YgdXNlckxpc3QpIHtcclxuICAgICAgICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZHJvcGRvd24taXRlbVwiKTtcclxuICAgICAgICAgICAgICAgIGxpLmlubmVySFRNTCA9IGdhbWUubmFtZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGdhbWUubmFtZSk7XHJcbiAgICAgICAgICAgICAgICBsaS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGdpb2NvRGFTY2FtYmlhcmUgPSBsaS5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0cmFkZUdhbWUuYXBwZW5kKGxpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcblxyXG4vKiBNb3N0cmEgaSBnaW9jaGkgc2NlbHRpIGRhbGwndXRlbnRlIHBlciBsbyBzY2FtYmlvKi9cclxuZnVuY3Rpb24gc2hvd1NlbGVjdGVkR2FtZXMoKSB7XHJcbiAgICBsZXQgc2VsZWN0ZWRHYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0ZWRHYW1lc1wiKTtcclxuICAgIHNlbGVjdGVkR2FtZXMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2lzaExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgbGkuaW5uZXJIVE1MID0gd2lzaExpc3RbaV07XHJcbiAgICAgICAgc2VsZWN0ZWRHYW1lcy5hcHBlbmQobGkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qQ3JlYSBsYSBsaXN0YSBkZWkgZ2lvY2hpIHBvc3NlZHV0aSBkYWxsJ3V0ZW50ZSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5zZXJ0aW9uUGFnZSgpIHtcclxuICAgIGdldFVzZXJHYW1lcygpO1xyXG4gICAgZ2V0QWxsR2FtZXMoKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVnaXN0ZXJJbnNlcnRpb25cIikub25jbGljayA9IHJlZ2lzdGVySW5zZXJ0aW9uO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWdpc3Rlckluc2VydGlvbigpe1xyXG4vKlxyXG4gICAgY29uc3QgbmV3SW5zIDogaW5zZXJ0aW9uID0ge1xyXG4gICAgICAgIHRpdGxlIDogXCJhXCIsXHJcblxyXG4gICAgfVxyXG4qL1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShcImFcIilcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUluc2VydGlvblBhZ2U7IiwiaW1wb3J0IGRpdiBmcm9tICcuL2Zvb3Rlci5odG1sJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb3QoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvb3RlclwiKS5pbm5lckhUTUwgPSBkaXY7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvdDsiLCJpbXBvcnQgZ2VzdGlvbmVVdGVudGkgZnJvbSAnLi9nZXN0aW9uZVV0ZW50aS5odG1sJ1xyXG5pbXBvcnQgdXNlckludCBmcm9tICcuLi9pbnRlcmZhY2VzL3VzZXInO1xyXG5pbXBvcnQgc2hvd1Byb2ZpbGUgZnJvbSAnLi4vcHJvZmlsb1V0ZW50ZS9wcm9maWxlJztcclxuXHJcbmxldCB1c2VyczogdXNlckludFtdID0gW107XHJcbmxldCB2aWV3ID0gNTtcclxuXHJcbmZ1bmN0aW9uIHNob3dVc2VycyhudW06IG51bWJlcikge1xyXG4gICAgbGV0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJMaXN0XCIpO1xyXG4gICAgbGlzdC5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAobnVtIC0gMSkgKiB2aWV3OyBpIDwgbnVtICogdmlldzsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGkgPj0gdXNlcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGxldCBidG5fcHJvZmlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnRuX3Byb2ZpbGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG5cIik7XHJcbiAgICAgICAgYnRuX3Byb2ZpbGUub25jbGljayA9IHNob3dQcm9maWxlO1xyXG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGlzdC1ncm91cC1pdGVtJyk7XHJcbiAgICAgICAgbGkuc2V0QXR0cmlidXRlKCdvbm1vdXNlb3ZlcicsIFwic2V0QXR0cmlidXRlKCdjbGFzcycsICdsaXN0LWdyb3VwLWl0ZW0gYWN0aXZlJylcIik7XHJcbiAgICAgICAgbGkuc2V0QXR0cmlidXRlKCdvbm1vdXNlb3V0JywgXCJzZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpc3QtZ3JvdXAtaXRlbScpXCIpO1xyXG4gICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZsb2F0LWVuZFwiKTtcclxuICAgICAgICBsZXQgYnRuX2JhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgbGV0IGJ0bl9hZG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ0bl9iYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG4gYnRuLWRhbmdlciBidG4tc21cIik7XHJcbiAgICAgICAgYnRuX2FkbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ0biBidG4tc3VjY2VzcyBidG4tc21cIik7XHJcbiAgICAgICAgYnRuX2Jhbi5pbm5lckhUTUwgPSBcIkJhbm5hXCI7XHJcbiAgICAgICAgYnRuX2FkbS5pbm5lckhUTUwgPSBcIlJlbmRpIEFkbWluXCI7XHJcbiAgICAgICAgYnRuX2Jhbi5vbmNsaWNrID0gKCkgPT4geyBraWNrSGlzQXNzT3V0T2ZUaGlzU2l0ZSh1c2Vyc1tpXS51c2VySWQpfTtcclxuICAgICAgICBidG5fYWRtLm9uY2xpY2sgPSAoKSA9PiB7IG1ha2VIaW1BZG1pbih1c2Vyc1tpXS51c2VySWQpIH07XHJcbiAgICAgICAgc3Bhbi5hcHBlbmQoYnRuX2FkbSwgYnRuX2Jhbik7XHJcbiAgICAgICAgYnRuX3Byb2ZpbGUuaW5uZXJIVE1MID0gdXNlcnNbaV0udXNlcm5hbWUgKyBcIiB8IFwiICsgdXNlcnNbaV0ubmFtZSArIFwiIFwiICsgdXNlcnNbaV0uc3VybmFtZSArIFwiIHwgXCIgKyB1c2Vyc1tpXS5lbWFpbCArIFwiIHwgXCIgKyB1c2Vyc1tpXS5yYXRpbmcgKyBcIjxpIGNsYXNzPSdmYS1yZWd1bGFyIGZhLXN0YXInPjwvaT5cIjtcclxuICAgICAgICBsaS5hcHBlbmQoYnRuX3Byb2ZpbGUsIHNwYW4pO1xyXG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFVzZXJzKCk6IHZvaWQge1xyXG4gICAgZmV0Y2goXCIvdXNlclwiKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHVzZXJzID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGVsZW1lbnQgb2YgZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdXNlcnMucHVzaChlbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjcmVhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICAgICAgICAgIHNob3dVc2VycygxKTtcclxuICAgICAgICB9KTtcclxufVxyXG5cclxuLypcclxuPGxpIGNsYXNzPVwicGFnZS1pdGVtIGFjdGl2ZVwiIGFyaWEtY3VycmVudD1cInBhZ2VcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwYWdlLWxpbmtcIj4xPC9zcGFuPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwicGFnZS1pdGVtXCI+PGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBocmVmPVwiI1wiPjI8L2E+PC9saT5cclxuICAgICAgICA8bGkgY2xhc3M9XCJwYWdlLWl0ZW1cIj48YSBjbGFzcz1cInBhZ2UtbGlua1wiIGhyZWY9XCIjXCI+MzwvYT48L2xpPlxyXG4qL1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUGFnaW5hdGlvbigpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnaW5hdGlvblwiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbGV0IG51bWJlck9mUGFnZXMgPSBNYXRoLmNlaWwodXNlcnMubGVuZ3RoIC8gdmlldyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mUGFnZXM7IGkrKykge1xyXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtIGFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIsIFwicGFnZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1saW5rXCIpO1xyXG4gICAgICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYWxsTGkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2luYXRpb25cIikuY2hpbGRyZW47XHJcbiAgICAgICAgICAgIGZvciAobGV0IG9uZUxpIG9mIGFsbExpKSB7XHJcbiAgICAgICAgICAgICAgICBvbmVMaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbVwiKTtcclxuICAgICAgICAgICAgICAgIG9uZUxpLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbSBhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiLCBcInBhZ2VcIik7XHJcbiAgICAgICAgICAgIHNob3dVc2VycyhpICsgMSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBidG4uaW5uZXJIVE1MID0gXCJcIiArIChpICsgMSk7XHJcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYnRuKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2luYXRpb25cIikuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1ha2VIaW1BZG1pbihpZDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGlkKVxyXG4gICAgfVxyXG4gICAgZmV0Y2goXCIvYWRtaW5cIiwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGlkKVxyXG4gICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4geyBjb25zb2xlLmxvZyhcImFkbWluIGNyZWF0bz8gXCIgKyBkYXRhKTsgZ2V0QWxsVXNlcnMoKTsgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGtpY2tIaXNBc3NPdXRPZlRoaXNTaXRlKGlkOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpZClcclxuICAgIH1cclxuICAgIGZldGNoKFwiL3VzZXJcIiwgcmVxdWVzdClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4geyBjb25zb2xlLmxvZyhcInVzZXIgY2FuY2VsbGF0bz8gXCIgKyBkYXRhKTsgZ2V0QWxsVXNlcnMoKTsgfSk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRBbGxVc2VyczsiLCJpbXBvcnQgaG9tZSBmcm9tICcuL2hvbWUuaHRtbCdcclxuaW1wb3J0IHtpbnNlcnRpb259IGZyb20gJy4uL2ludGVyZmFjZXMvaW5zZXJ0aW9uJztcclxuaW1wb3J0IGFubnVuY2kgZnJvbSAnLi4vYW5udW5jaS9hbm51bmNpLmh0bWwnO1xyXG5pbXBvcnQgY3JlYXRlUGFnZSwgeyBzZWFyY2hCeVRpdGxlIH0gZnJvbSBcIi4uL2FubnVuY2kvYW5udW5jaVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVQYWdpbmF0aW9uIH0gZnJvbSAnLi4vYW5udW5jaS9hbm51bmNpJztcclxuaW1wb3J0IGNyZWFBbm51bmNpbyBmcm9tICcuLi9jcmVhQW5udW5jaW8vY3JlYUFubnVuY2lvLmh0bWwnXHJcbmltcG9ydCBjcmVhdGVJbnNlcnRpb25QYWdlIGZyb20gXCIuLi9jcmVhQW5udW5jaW8vY3JlYUFubnVuY2lvXCI7XHJcbmltcG9ydCBleHBhbmRJbnNlcnRpb24gZnJvbSAnLi4vYW5udW5jaS9hbm51bmNpbyc7XHJcbmltcG9ydCBhbm51bmNpbyBmcm9tICcuLi9hbm51bmNpL2FubnVuY2lvLmh0bWwnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vaW1wb3J0IGNyZWF0ZUluc2VydGlvbiBmcm9tICcuLi9jcmVhQW5udW5jaW8vY3JlYUFubnVuY2lvJztcclxuXHJcbmxldCBsaXN0OiBpbnNlcnRpb25bXSA9IFtdO1xyXG5cclxuZnVuY3Rpb24gZ2V0QWxsSW5zZXJ0aW9ucygpIHsgLyogUXVlc3RhIMOoIHNvbG8gdW5hIHByb3ZhLCBzY29tbWVudGFyZSBsYSBmZXRjaCBwacO5IGdpw7kgKi9cclxuICAgIGxpc3QgPSBbXTtcclxuXHJcbiAgICBjb25zdCBpbWFnZUdpb2NvMSA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vaS5ldHN5c3RhdGljLmNvbS82Mjc3ODA0L3IvaWwvN2RmMDBlLzY5NzU0NjM0MC9pbF8xMTQweE4uNjk3NTQ2MzQwX2ZpdnMuanBnXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdpb2NvMiA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vd3d3Lm1vYnlnYW1lcy5jb20vaW1hZ2VzL2NvdmVycy9sLzE0NDQ1LXRoZS1sZWdlbmQtb2YtemVsZGEtbmVzLWZyb250LWNvdmVyLmpwZ1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHaW9jbzMgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9pdC9iL2IzL1BvayVDMyVBOW1vbl9HaWFsbG8ucG5nXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdpb2NvNCA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vc3RhdGljLndpa2lhLm5vY29va2llLm5ldC9tZXRhbGdlYXIvaW1hZ2VzL2UvZTEvTWV0YWxfR2Vhci5qcGdcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlR2FsbGVyeTEgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9pdC90aHVtYi83Lzc3L1Bpa2FjaHUucG5nLzEwMjRweC1QaWthY2h1LnBuZ1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHYWxsZXJ5MiA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vd3d3LnBuZ21hcnQuY29tL2ZpbGVzLzExL0Zyb2ctTWVtZS1QTkctSEQucG5nXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdhbGxlcnkzID0ge1xyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9tZWRpYS5saWNkbi5jb20vZG1zL2ltYWdlL0Q1NjM1QVFIdzNFNXlZeVhUTHcvcHJvZmlsZS1mcmFtZWRwaG90by1zaHJpbmtfODAwXzgwMC8wLzE2NDQ1MTg5MTg2MDY/ZT0xNjc1NjIwMDAwJnY9YmV0YSZ0PXgxUm5YcVdzRFdBT1ZRVVhHRnVqTW9kWFpoaUdVUUp1MGE2RkFzWk4zTG9cIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdpb2NvMSA9IHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuYW1lOiBcIlN1cGVyTWFyaW9cIixcclxuICAgICAgICBnZW5yZTogW3tnZW5yZTogXCJQTEFURk9STVwifV0sXHJcbiAgICAgICAgeWVhcjogMTk4NSxcclxuICAgICAgICBjb25zb2xlOiB7Y29uc29sZTogXCJORVNcIn0sXHJcbiAgICAgICAgY292ZXI6IGltYWdlR2lvY28xXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2lvY28yID0ge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIG5hbWU6IFwiVGhlIExlZ2VuZCBvZiBaZWxkYVwiLFxyXG4gICAgICAgIGdlbnJlOiBbe2dlbnJlOiBcIkFWVkVOVFVSQVwifV0sXHJcbiAgICAgICAgeWVhcjogMTk4NixcclxuICAgICAgICBjb25zb2xlOiB7Y29uc29sZTogXCJORVNcIn0sXHJcbiAgICAgICAgY292ZXI6IGltYWdlR2lvY28yXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2lvY28zID0ge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIG5hbWU6IFwiUG9rZW1vbiBHaWFsbG9cIixcclxuICAgICAgICBnZW5yZTogW3tnZW5yZTogXCJHRFJcIn1dLFxyXG4gICAgICAgIHllYXI6IDE5OTgsXHJcbiAgICAgICAgY29uc29sZToge2NvbnNvbGU6IFwiR0FNRV9CT1lfQ09MT1JcIn0sXHJcbiAgICAgICAgY292ZXI6IGltYWdlR2lvY28zXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2lvY280ID0ge1xyXG4gICAgICAgIGlkOiA0LFxyXG4gICAgICAgIG5hbWU6IFwiTWV0YWwgR2VhclwiLFxyXG4gICAgICAgIGdlbnJlOiBbe2dlbnJlOiBcIlNURUFMVEhcIn1dLFxyXG4gICAgICAgIHllYXI6IDE5ODcsXHJcbiAgICAgICAgY29uc29sZToge2NvbnNvbGU6IFwiTkVTXCJ9LFxyXG4gICAgICAgIGNvdmVyOiBpbWFnZUdpb2NvNFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHB1Ymxpc2hlckdpb2NvMSA9IHtcclxuICAgICAgICB1c2VySWQ6IDEsXHJcbiAgICAgICAgdXNlcm5hbWU6IFwiUGllcm9hZmZvbmRvXCIsXHJcbiAgICAgICAgbmFtZTogXCJQaWVyaW5vXCIsXHJcbiAgICAgICAgc3VybmFtZTogXCJDaWNjaW5vXCIsXHJcbiAgICAgICAgZW1haWw6IFwicGllcmlub2N1b3JpY2lub0BhbW9yaW5vLmNvbVwiLFxyXG4gICAgICAgIHJhdGluZzogNjY2LFxyXG4gICAgICAgIHZpZGVvZ2FtZXM6IFtnaW9jbzFdXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5zZXJ0aW9uMTogaW5zZXJ0aW9uID0ge1xyXG4gICAgICAgIGFwcHJvdmVkOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiBcIlNjYW1iaW8gU3VwZXJNYXJpb1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlNjYW1iaW8gc3VwZXJtYXJpbyB4a8OoIG1pIHNvbm8gc2Vra2F0byBhIGdpb2NhcmNpXCIsXHJcbiAgICAgICAgcHVibGlzaGVyOiBwdWJsaXNoZXJHaW9jbzEsXHJcbiAgICAgICAgZ2FsbGVyeTogW2dpb2NvMS5jb3ZlciwgaW1hZ2VHYWxsZXJ5MSwgaW1hZ2VHYWxsZXJ5MiwgaW1hZ2VHYWxsZXJ5M10sXHJcbiAgICAgICAgdHJhZGVHYW1lOiBnaW9jbzEsXHJcbiAgICAgICAgd2lzaExpc3Q6IFtnaW9jbzIsIGdpb2NvMywgZ2lvY280XSxcclxuICAgICAgICBvdXRjb21lOiBcIldJUFwiLFxyXG4gICAgICAgIHB1YmxpY2F0aW9uRGF0ZTogXCIyOS0wMS0yMDIzXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbnNlcnRpb24yOiBpbnNlcnRpb24gPSB7XHJcbiAgICAgICAgYXBwcm92ZWQ6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IFwiU2NhbWJpbyBwYWNtYW5cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTY2FtYmlvIHN1cGVybWFyaW8geGvDqCBtaSBzb25vIHNla2thdG8gYSBnaW9jYXJjaVwiLFxyXG4gICAgICAgIHB1Ymxpc2hlcjogcHVibGlzaGVyR2lvY28xLFxyXG4gICAgICAgIGdhbGxlcnk6IFtnaW9jbzIuY292ZXIsIGltYWdlR2FsbGVyeTIsIGltYWdlR2FsbGVyeTIsIGltYWdlR2FsbGVyeTNdLFxyXG4gICAgICAgIHRyYWRlR2FtZTogZ2lvY28yLFxyXG4gICAgICAgIHdpc2hMaXN0OiBbZ2lvY28yLCBnaW9jbzMsIGdpb2NvNF0sXHJcbiAgICAgICAgb3V0Y29tZTogXCJXSVBcIixcclxuICAgICAgICBwdWJsaWNhdGlvbkRhdGU6IFwiMjktMDEtMjAyM1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5zZXJ0aW9uMzogaW5zZXJ0aW9uID0ge1xyXG4gICAgICAgIGFwcHJvdmVkOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiBcInNjYW1iaW8gY29kZXN0b1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlNjYW1iaW8gc3VwZXJtYXJpbyB4a8OoIG1pIHNvbm8gc2Vra2F0byBhIGdpb2NhcmNpXCIsXHJcbiAgICAgICAgcHVibGlzaGVyOiBwdWJsaXNoZXJHaW9jbzEsXHJcbiAgICAgICAgZ2FsbGVyeTogW2dpb2NvMy5jb3ZlciwgaW1hZ2VHYWxsZXJ5MywgaW1hZ2VHYWxsZXJ5MiwgaW1hZ2VHYWxsZXJ5M10sXHJcbiAgICAgICAgdHJhZGVHYW1lOiBnaW9jbzMsXHJcbiAgICAgICAgd2lzaExpc3Q6IFtnaW9jbzIsIGdpb2NvMywgZ2lvY280XSxcclxuICAgICAgICBvdXRjb21lOiBcIldJUFwiLFxyXG4gICAgICAgIHB1YmxpY2F0aW9uRGF0ZTogXCIyOS0wMS0yMDIzXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbnNlcnRpb240OiBpbnNlcnRpb24gPSB7XHJcbiAgICAgICAgYXBwcm92ZWQ6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IFwiU2NhbWJpbyBwaXBvbG9cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTY2FtYmlvIHN1cGVybWFyaW8geGvDqCBtaSBzb25vIHNla2thdG8gYSBnaW9jYXJjaVwiLFxyXG4gICAgICAgIHB1Ymxpc2hlcjogcHVibGlzaGVyR2lvY28xLFxyXG4gICAgICAgIGdhbGxlcnk6IFtnaW9jbzQuY292ZXIsIGltYWdlR2FsbGVyeTEsIGltYWdlR2FsbGVyeTIsIGltYWdlR2FsbGVyeTNdLFxyXG4gICAgICAgIHRyYWRlR2FtZTogZ2lvY280LFxyXG4gICAgICAgIHdpc2hMaXN0OiBbZ2lvY28yLCBnaW9jbzMsIGdpb2NvNF0sXHJcbiAgICAgICAgb3V0Y29tZTogXCJXSVBcIixcclxuICAgICAgICBwdWJsaWNhdGlvbkRhdGU6IFwiMjktMDEtMjAyM1wiXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGxpc3QucHVzaChpbnNlcnRpb24xKTtcclxuICAgIGxpc3QucHVzaChpbnNlcnRpb24yKTtcclxuICAgIGxpc3QucHVzaChpbnNlcnRpb24zKTtcclxuICAgIGxpc3QucHVzaChpbnNlcnRpb240KTtcclxuXHJcbiAgICBcclxuICAgIC8qUVVFU1RPIEUnIExBIEZVTlpJT05FIEdJVVNUQSBOT04gRkFNTyBDSEUgU0JBR0xJQVRFISAqL1xyXG5cclxuICAgIC8qRmV0Y2ggYSBiYWNrZW5kIGNvbiB0dXR0aSBnbGkgYW5udW5jaSwgYWdnaW9ybmEgbGEgbGlzdGEgbGlzdCovXHJcbiAgICAvLyBsaXN0PVtdO1xyXG4gICAgLy8gZmV0Y2goJy9UaXBvQW5udW5jaUNoZW5lc28nKVxyXG4gICAgLy8gLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAvLyAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgLy8gICAgIGZvcihsZXQgZCBvZiBkYXRhKXtcclxuICAgIC8vICAgICAgICAgbGlzdC5wdXNoKGQpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhvbWUoKXtcclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuICAgIG1haW4uaW5uZXJIVE1MID0gaG9tZTtcclxuICAgXHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnRpb25zQ2FyZFwiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBhbm51bmNpO1xyXG4gICAgICAgIGNyZWF0ZVBhZ2UoKTtcclxuICAgIH07XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnRDYXJkXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGNyZWFBbm51bmNpbztcclxuICAgICAgICBjcmVhdGVJbnNlcnRpb25QYWdlKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQnV0dG9uVGl0bGVcIikub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBsZXQga2V5d29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoVGl0bGVcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICBpZihrZXl3b3JkLnZhbHVlICE9IFwiXCIpe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MID0gYW5udW5jaTtcclxuICAgICAgICAgICAgY3JlYXRlUGFnZSgpO1xyXG4gICAgICAgICAgICBzZWFyY2hCeVRpdGxlKGtleXdvcmQudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFRpdGxlXCIpLm9ua2V5ZG93biA9IChlKSA9PiB7XHJcbiAgICAgICAgbGV0IGtleXdvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFRpdGxlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgaWYoZS5rZXkgPT0gXCJFbnRlclwiICYmIGtleXdvcmQudmFsdWUhPSBcIlwiKXtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGFubnVuY2k7XHJcbiAgICAgICAgICAgIGNyZWF0ZVBhZ2UoKTtcclxuICAgICAgICAgICAgc2VhcmNoQnlUaXRsZShrZXl3b3JkLnZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbEluc2VydGlvbnMoKTtcclxuICAgIGNyZWF0ZUl0ZW1DYXJvdXNlbCgpO1xyXG5cclxuICAgIFxyXG5cclxufSBcclxuICAgIFxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVJdGVtQ2Fyb3VzZWwoKXtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgY2FySW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5uZXJDYXJvdXNlbEhvbWUnKTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgNCAmJiBpIDwgbGlzdC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBjbENhcm91c2VsSXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgaWYoaSA9PSAwKXtcclxuICAgICAgICAgICAgICAgIGNsQ2Fyb3VzZWxJdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Nhcm91c2VsLWl0ZW0gYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgY2xDYXJvdXNlbEl0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2Fyb3VzZWwtaXRlbScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgbGlzdFtpXS50cmFkZUdhbWUuY292ZXIubGluayk7XHJcbiAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ltZ0NhcmQnKTtcclxuICAgICAgICAgICAgbGV0IGNsQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjbENhcmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkIHRleHQtYmctc2Vjb25kYXJ5Jyk7XHJcbiAgICAgICAgICAgIGNsQ2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FubkNhcmQnKTtcclxuICAgICAgICAgICAgbGV0IGNhckJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY2FyQm9keS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQtYm9keScpO1xyXG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xyXG4gICAgICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQtdGl0bGUnKTtcclxuICAgICAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gbGlzdFtpXS50cmFkZUdhbWUubmFtZTtcclxuICAgICAgICAgICAgbGV0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGRlc2Muc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkLXRleHQnKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0W2ldLnRyYWRlR2FtZS5nZW5yZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZGVzYy5pbm5lckhUTUwgKz0gbGlzdFtpXS50cmFkZUdhbWUuZ2VucmVbaV0uZ2VucmUgKyBcIiBcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlc2MuaW5uZXJIVE1MICs9IFwiPGJyPlwiXHJcbiAgICAgICAgICAgICsgXCJBbm5vOiBcIiArIGxpc3RbaV0udHJhZGVHYW1lLnllYXIgKyBcIiBcIlxyXG4gICAgICAgICAgICArIFwiQ29uc29sZTogXCIgKyBsaXN0W2ldLnRyYWRlR2FtZS5jb25zb2xlLmNvbnNvbGUgKyBcIjxicj5cIlxyXG4gICAgICAgICAgICArXCJEZXNjcml6aW9uZTpcIjtcclxuICAgICAgICAgICAgbGV0IGdvQW5uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgICBnb0Fubi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBcIiNcIik7XHJcbiAgICAgICAgICAgIGdvQW5uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYnRuIGJ0bi1wcmltYXJ5Jyk7XHJcbiAgICAgICAgICAgIGdvQW5uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpLmlubmVySFRNTCA9IGFubnVuY2lvO1xyXG4gICAgICAgICAgICAgICAgZXhwYW5kSW5zZXJ0aW9uKGxpc3RbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdvQW5uLmlubmVySFRNTCA9ICdWYWkgYWxsIGFubnVuY2lvJztcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgIGNhcklubmVyLmFwcGVuZENoaWxkKGNsQ2Fyb3VzZWxJdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xDYXJvdXNlbEl0LmFwcGVuZENoaWxkKGNsQ2FyZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsQ2FyZC5hcHBlbmQoaW1nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xDYXJkLmFwcGVuZChjYXJCb2R5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhckJvZHkuYXBwZW5kKHRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhckJvZHkuYXBwZW5kKGRlc2MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyQm9keS5hcHBlbmQoZ29Bbm4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lO1xyXG5cclxuLypcclxuYXN5bmMgZnVuY3Rpb24gZ2V0dGl0bGUodGl0bGU6IHN0cmluZyk6e1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgpXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcblxyXG59XHJcbiovIiwiaW1wb3J0IG1vZGFsIGZyb20gJy4vbW9kYWwuaHRtbCdcclxuaW1wb3J0IGxvZ2luIGZyb20gJy4uL2xvZ2luL2xvZ2luLmh0bWwnXHJcbmltcG9ydCBsb2dpbkZvb3RlciBmcm9tICcuLi9sb2dpbi9sb2dpbkZvb3Rlci5odG1sJ1xyXG5pbXBvcnQgcmVnaXN0cmF6aW9uZSBmcm9tICcuLi9yZWdpc3RyYXppb25lL3JlZ2lzdHJhemlvbmUuaHRtbCdcclxuaW1wb3J0IHJlZ0Zvb3RlciBmcm9tICcuLi9yZWdpc3RyYXppb25lL3JlZ2lzdHJhemlvbmVGb290ZXIuaHRtbCdcclxuaW1wb3J0IGxvZ291dCBmcm9tICcuLi9sb2dvdXQvbG9nb3V0Lmh0bWwnXHJcbmltcG9ydCBwcm9maWxlIGZyb20gJy4uL3Byb2ZpbG9VdGVudGUvcHJvZmlsZS5odG1sJ1xyXG5pbXBvcnQgKiBhcyBuYXYgZnJvbSBcIi4uL25hdmJhci9uYXZiYXJcIjtcclxuaW1wb3J0IGxvZ2dlZCBmcm9tICcuLi9pbnRlcmZhY2VzL2xvZ2dlZCdcclxuaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSAnLi4vaG9tZS9ob21lJ1xyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW9kYWwoKXtcclxuICAgIGxldCBkaXZNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXZNb2RhbC5pbm5lckhUTUwgPSBtb2RhbDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpLmFwcGVuZENoaWxkKGRpdk1vZGFsKTtcclxuICAgIHNob3dMb2dJbk1vZGFsKCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luXCIpLm9uY2xpY2sgPSBzaG93TG9nSW5Nb2RhbDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbk91dEJ1dHRvblwiKS5vbmNsaWNrID0gc2hvd0xvZ091dE1vZGFsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93U2lnblVwTW9kYWwoKXtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbEJvZHlcIikuaW5uZXJIVE1MID0gcmVnaXN0cmF6aW9uZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbEZvb3RlclwiKS5pbm5lckhUTUwgPSByZWdGb290ZXI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyeXRvU2lnblVwXCIpLm9uY2xpY2sgPSB0cnlUb1NpZ25VcDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnblVwTG9naW5cIikub25jbGljayA9IHNob3dMb2dJbk1vZGFsO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lU2lnblVwXCIpLm9ua2V5dXAgPSB2YWxpZGF0ZUZvcm07XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1cm5hbWVTaWduVXBcIikub25rZXl1cCA9IHZhbGlkYXRlRm9ybTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcm5hbWVTaWduVXBcIikub25rZXl1cCA9IHZhbGlkYXRlRm9ybTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxTaWduVXBcIikub25rZXl1cCA9IHZhbGlkYXRlRm9ybTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmRTaWduVXBcIikub25rZXl1cCA9IHZhbGlkYXRlRm9ybTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uZmlybV9wYXNzd29yZFNpZ25VcFwiKS5vbmtleXVwID0gdmFsaWRhdGVGb3JtO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93TG9nSW5Nb2RhbCgpe1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteU1vZGFsQm9keVwiKS5pbm5lckhUTUwgPSBsb2dpbjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbEZvb3RlclwiKS5pbm5lckhUTUwgPSBsb2dpbkZvb3RlcjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5TaWduVXBcIikub25jbGljayA9IHNob3dTaWduVXBNb2RhbDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJ5VG9Mb2dcIikub25jbGljayA9IHRyeVRvTG9nSW47XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJuYW1lU2lnbkluXCIpLm9ua2V5ZG93biA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgdHJ5VG9Mb2dJbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmRTaWduSW5cIikub25rZXlkb3duID0gKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXkgPT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICB0cnlUb0xvZ0luKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzaG93TG9nT3V0TW9kYWwoKXtcclxuICAgIGxldCByZXN1bHQgOiBib29sZWFuPSBhd2FpdCB0cnlUb0xvZ091dCgpO1xyXG4gICAgaWYocmVzdWx0KXtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxCb2R5XCIpLmlubmVySFRNTCA9IGxvZ291dDtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxGb290ZXJcIikuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBjcmVhdGVIb21lKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRyeVRvU2lnblVwKCkge1xyXG4gICAgY29uc3QgdXNlciA9IHtcclxuICAgICAgICB1c2VybmFtZTogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcm5hbWVTaWduVXBcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgLFxyXG4gICAgICAgIHBhc3N3b3JkOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzd29yZFNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSxcclxuICAgICAgICBuYW1lOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLFxyXG4gICAgICAgIHN1cm5hbWU6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1cm5hbWVTaWduVXBcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcbiAgICAgICAgZW1haWw6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyKVxyXG4gICAgfVxyXG5cclxuICAgIGZldGNoKFwiL3VzZXJcIiwgcmVxdWVzdCkudGhlbigocmVzcG9uc2UpPT5yZXNwb25zZS5qc29uKCkpLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgaWYoZGF0YSl7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnblVwUmVzdWx0XCIpLmlubmVySFRNTD1cIlJlZ2lzdHJhdG8gY29uIHN1Y2Nlc3NvIVwiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyeXRvU2lnblVwXCIpLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduVXBSZXN1bHRcIikuaW5uZXJIVE1MPVwiT3BzLCBxdWFsY29zYSDDqCBhbmRhdG8gc3RvcnRvIVwiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyeXRvU2lnblVwXCIpLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRyeVRvTG9nSW4oKSB7XHJcbiAgICBjb25zdCBsb2dpbiA9IHtcclxuICAgICAgICB1c2VybmFtZTogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcm5hbWVTaWduSW5cIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkU2lnbkluXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShsb2dpbilcclxuICAgIH07XHJcbiAgICBsZXQgcmVzdWx0IDogYW55ID0gZmV0Y2goXCIvbG9naW5cIiwgcmVxdWVzdClcclxuICAgIC50aGVuKChyZXNwb25zZSk9PnJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKT0+e1xyXG4gICAgICAgIGlmKGRhdGEubG9nZ2VkKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5SZXN1bHRcIikuaW5uZXJIVE1MPVwiTG9nZ2F0byBjb24gc3VjY2Vzc28hXCI7XHJcbiAgICAgICAgICAgIG5hdi5zZXROYXYoZGF0YS5hY2NvdW50VHlwZSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJ5VG9Mb2dcIikuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luU2lnblVwXCIpLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICAgICAgY3JlYXRlSG9tZSgpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luUmVzdWx0XCIpLmlubmVySFRNTD1cIk9wcywgcXVhbGNvc2Egw6ggYW5kYXRvIHN0b3J0b1wiO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiB0cnlUb0xvZ091dCgpIDpQcm9taXNlPGJvb2xlYW4+e1xyXG4gICAgbGV0IHByb21pc2VSZXN1bHQgPSBmZXRjaChcIi9sb2dvdXRcIilcclxuICAgIC50aGVuKChyZXNwb25zZSk9PnJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKT0+e1xyXG4gICAgICAgIGlmKGRhdGEpe1xyXG4gICAgICAgICAgICBuYXYuc2V0TmF2KFwiR1VFU1RcIik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJ5VG9Mb2dcIikucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5TaWduVXBcIikucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRhfSk7XHJcbiAgICByZXR1cm4gcHJvbWlzZVJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVGb3JtKCl7XHJcbiAgICBsZXQgdXNlcm5hbWUgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VybmFtZVNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA7XHJcbiAgICBsZXQgcGFzc3dvcmQgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzd29yZFNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgIGxldCBuYW1lID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgIGxldCBzdXJuYW1lID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VybmFtZVNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgIGxldCBlbWFpbCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgbGV0IGNvbmZpcm1fcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbmZpcm1fcGFzc3dvcmRTaWduVXBcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbmZpcm1fcGFzc3dvcmQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJcIik7XHJcbiAgICBcclxuICAgIGlmKHVzZXJuYW1lPT1cIlwiIHx8IHBhc3N3b3JkPT1cIlwiIHx8bmFtZT09XCJcIiB8fCBzdXJuYW1lPT1cIlwiIHx8IGVtYWlsPT1cIlwiKXtcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cnl0b1NpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50ICkuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGlmIChwYXNzd29yZCAhPSBjb25maXJtX3Bhc3N3b3JkLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbmZpcm1fcGFzc3dvcmQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJib3JkZXItY29sb3I6IHJlZDtcIik7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbmZpcm1fcGFzc3dvcmQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJib3JkZXItY29sb3I6IGdyZWVuO1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBpZiAocGFzc3dvcmQgIT0gY29uZmlybV9wYXNzd29yZC52YWx1ZSkge1xyXG4gICAgICAgICAgICBjb25maXJtX3Bhc3N3b3JkLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYm9yZGVyLWNvbG9yOiByZWQ7XCIpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjb25maXJtX3Bhc3N3b3JkLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYm9yZGVyLWNvbG9yOiBncmVlbjtcIik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJ5dG9TaWduVXBcIikucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTW9kYWw7IiwiaW1wb3J0IG5hdiBmcm9tIFwiLi9uYXZiYXIuaHRtbFwiO1xyXG5pbXBvcnQgY3JlYXRlTW9kYWwgZnJvbSBcIi4uL21vZGFsL21vZGFsXCI7XHJcbmltcG9ydCBhbm51bmNpIGZyb20gXCIuLi9hbm51bmNpL2FubnVuY2kuaHRtbFwiO1xyXG5pbXBvcnQgZ2VzdGlvbmVhbm51bmNpIGZyb20gXCIuLi9hbm51bmNpL2dlc3Rpb25lYW5udW5jaS5odG1sXCI7XHJcbmltcG9ydCBjcmVhdGVQYWdlIGZyb20gXCIuLi9hbm51bmNpL2FubnVuY2lcIjtcclxuaW1wb3J0IGhvbWUgZnJvbSBcIi4uL2hvbWUvaG9tZS5odG1sXCI7XHJcbmltcG9ydCBjcmVhdGVJdGVtQ2Fyb3VzZWwgZnJvbSBcIi4uL2hvbWUvaG9tZVwiXHJcbmltcG9ydCBjcmVhdGVIb21lIGZyb20gXCIuLi9ob21lL2hvbWVcIjtcclxuaW1wb3J0IHByb2ZpbGUgZnJvbSBcIi4uL3Byb2ZpbG9VdGVudGUvcHJvZmlsZS5odG1sXCI7XHJcbmltcG9ydCBzaG93UHJvZmlsZSBmcm9tIFwiLi4vcHJvZmlsb1V0ZW50ZS9wcm9maWxlXCI7XHJcbmltcG9ydCBnZXN0aW9uZVV0ZW50aSBmcm9tIFwiLi4vZ2VzdGlvbmVVdGVudGkvZ2VzdGlvbmVVdGVudGkuaHRtbFwiO1xyXG5pbXBvcnQgZ2V0QWxsVXNlcnMgZnJvbSBcIi4uL2dlc3Rpb25lVXRlbnRpL2dlc3Rpb25lVXRlbnRpXCI7XHJcbmltcG9ydCBjcmVhdGVQYWdlMiBmcm9tIFwiLi4vYW5udW5jaS9nZXN0aW9uZWFubnVuY2lcIjtcclxuaW1wb3J0IGNyZWFBbm51bmNpbyBmcm9tIFwiLi4vY3JlYUFubnVuY2lvL2NyZWFBbm51bmNpby5odG1sXCJcclxuaW1wb3J0IHZpZGVvZ2lvY2hpIGZyb20gXCIuLi92aWRlb2dpb2NoaS92aWRlb2dpb2NoaS5odG1sXCJcclxuaW1wb3J0IGNyZWF0ZUluc2VydGlvblBhZ2UgZnJvbSBcIi4uL2NyZWFBbm51bmNpby9jcmVhQW5udW5jaW9cIlxyXG5pbXBvcnQgY3JlYXRlR2FtZVBhZ2UgZnJvbSBcIi4uL3ZpZGVvZ2lvY2hpL3ZpZGVvZ2lvY2hpXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xyXG4gICAgXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKS5pbm5lckhUTUwgPSBuYXY7XHJcbiAgICBjcmVhdGVNb2RhbCgpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dvXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgY3JlYXRlSG9tZSgpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lc1wiKS5vbmNsaWNrPSgpPT57XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUw9dmlkZW9naW9jaGk7IFxyXG4gICAgICBjcmVhdGVHYW1lUGFnZSgpOyBcclxuICAgIH07XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnRpb25zXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGFubnVuY2k7XHJcbiAgICAgICAgY3JlYXRlUGFnZSgpO1xyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkSW5zZXJ0aW9uXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGNyZWFBbm51bmNpbztcclxuICAgICAgICBjcmVhdGVJbnNlcnRpb25QYWdlKCk7XHJcbiAgICB9O1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNNYW5hZ2VtZW50XCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGdlc3Rpb25lYW5udW5jaTtcclxuICAgICAgICBjcmVhdGVQYWdlMigpO1xyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFuYWdlbWVudFwiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBnZXN0aW9uZVV0ZW50aTtcclxuICAgICAgICBnZXRBbGxVc2VycygpO1xyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZmlsZVwiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBwcm9maWxlO1xyXG4gICAgICAgIHNob3dQcm9maWxlKCk7XHJcbiAgICB9O1xyXG4gICAgZmV0Y2goXCIvd2hvSXNMb2dnZWRcIilcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgc2V0TmF2KGRhdGEpO1xyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldE5hdihhY2NvdW50VHlwZSA6IHN0cmluZykge1xyXG4gICAgY29uc3QgYnRuX2dlc3RVdGVudGkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hbmFnZW1lbnRcIik7XHJcbiAgICBjb25zdCBidG5faW5zTWFuYWdlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zTWFuYWdlbWVudFwiKTtcclxuICAgIGNvbnN0IGJ0bl9sb2dpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5cIik7XHJcbiAgICBjb25zdCBidG5fc2lnbk91dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbk91dEJ1dHRvblwiKTtcclxuICAgIGNvbnN0IGJ0bl9hZGRJbnNlcnRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEluc2VydGlvblwiKTtcclxuICAgIGNvbnN0IGJ1dHRvbl9wcm9maWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9maWxlXCIpO1xyXG4gICAgaWYoYWNjb3VudFR5cGU9PVwiQURNSU5cIil7XHJcbiAgICAgICAgYnRuX2dlc3RVdGVudGkucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGJ0bl9hZGRJbnNlcnRpb24uc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICBidG5faW5zTWFuYWdlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgYnRuX2xvZ2luLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgYnRuX3NpZ25PdXRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGJ1dHRvbl9wcm9maWxlLnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKVxyXG4gICAgfWVsc2UgaWYoYWNjb3VudFR5cGU9PVwiVVNFUlwiKXtcclxuICAgICAgICBidG5fZ2VzdFV0ZW50aS5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIGJ0bl9hZGRJbnNlcnRpb24ucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGJ0bl9pbnNNYW5hZ2VtZW50LnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgYnRuX2xvZ2luLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgYnRuX3NpZ25PdXRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGJ1dHRvbl9wcm9maWxlLnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgYnRuX2dlc3RVdGVudGkuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICBidG5fYWRkSW5zZXJ0aW9uLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgYnRuX2luc01hbmFnZW1lbnQuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICBidG5fbG9naW4ucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGJ0bl9zaWduT3V0QnV0dG9uLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgYnV0dG9uX3Byb2ZpbGUuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVOYXY7XHJcbiIsImltcG9ydCBwcm9maWxlIGZyb20gJy4vcHJvZmlsZS5odG1sJ1xyXG5cclxuXHJcbmxldCB0eXBlO1xyXG5sZXQgdXNlckluZm87XHJcbmxldCBhZG1pbkluZm87XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1Byb2ZpbGUoKXsgICBcclxuICAgIGZldGNoKFwiL3dob0lzTG9nZ2VkXCIpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEgPT0gXCJBRE1JTlwiKSB7XHJcbiAgICAgICAgICAgIHR5cGUgPSBcIkFETUlOXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhID09IFwiVVNFUlwiKSB7XHJcbiAgICAgICAgICAgIHR5cGUgPSBcIlVTRVJcIlxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHR5cGUgPSBcIkdVRVNUXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xyXG4gICAgICAgIG1haW4uaW5uZXJIVE1MID0gcHJvZmlsZTtcclxuICAgICAgICBjcmVhdGVQcm9maWxlKHR5cGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2lhbyBkYSBzaG93XCIpXHJcbiAgICB9KVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvZmlsZSh0eXBlOnN0cmluZyl7XHJcblxyXG4gICAgaWYgKHR5cGUgPT0gXCJBRE1JTlwiKSB7XHJcbiAgICAgICAgc2hvd0FkbWluUHJvZmlsZSgpO1xyXG5cclxuICAgIH0gZWxzZSBpZih0eXBlID09IFwiVVNFUlwiKSB7XHJcbiAgICAgICAgc2hvd1VzZXJQcm9maWxlKCk7XHJcbiAgICB9ZWxzZXtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93QWRtaW5Qcm9maWxlKCl7XHJcblxyXG4gICAgZmV0Y2goXCIvYWRtaW5JbmZvXCIpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgYWRtaW5JbmZvPWRhdGE7XHJcbiAgICAgICAgbGV0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVwcm9maWxlXCIpO1xyXG4gICAgICAgIGgxLmlubmVySFRNTD1cIkJFTlRPUk5BVE8gQU1NSU5JU1RSQVRPUkUgXCIrYWRtaW5JbmZvLnVzZXJuYW1lO1xyXG4gICAgICAgIHRpdGxlLmFwcGVuZChoMSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHlwcm9maWxlXCIpO1xyXG4gICAgICAgIGxldCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICBoMi5pbm5lckhUTUw9XCJFY2NvIHVuIHJpZXBpbG9nbyBkZWkgdHVvaSBkYXRpOiBcIlxyXG4gICAgICAgICsgXCIgPGJyPjxicj48YnI+IDxiPlVzZXJuYW1lPC9iPjogXCIrYWRtaW5JbmZvLnVzZXJuYW1lIFxyXG4gICAgICAgICsgXCIgPGJyPjxicj4gPGI+RW1haWw8L2I+OiBcIithZG1pbkluZm8uZW1haWwgXHJcbiAgICAgICAgKyBcIiA8YnI+PGJyPiA8Yj5Ob21lPC9iPjogXCIrYWRtaW5JbmZvLm5hbWVcclxuICAgICAgICArIFwiIDxicj48YnI+IDxiPkNvZ25vbWU8L2I+OiBcIithZG1pbkluZm8uc3VybmFtZVxyXG4gICAgICAgIGJvZHkuYXBwZW5kKGgyKVxyXG5cclxuICAgICAgICBsZXQgYnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9ucy1wcm9maWxlXCIpO1xyXG4gICAgICAgIGxldCBidG4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBidG4xLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJidG4gYnRuLXByaW1hcnkgbXktMVwiKTtcclxuICAgICAgICBidG4xLm9uY2xpY2s9KCk9PntcclxuICAgICAgICAgICAgbGV0IG9iaiA9IHtcclxuICAgICAgICAgICAgICAgICd1c2VybmFtZScgOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VybmFtZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICdlbWFpbCcgOiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCByZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9iailcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZmV0Y2goXCIvYWRtaW4vaW5mb1wiLCByZXF1ZXN0KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpPT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKT0+IFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJuYW1lXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlPVwiXCI7XHJcbiAgICAgICAgICAgICAgICBzaG93UHJvZmlsZSgpXHJcbiAgICAgICAgICAgIH0pICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ0bjEuaW5uZXJIVE1MPVwiQ2FtYmlhIFVzZXJuYW1lXCJcclxuICAgICAgICBidXR0b25zLmFwcGVuZChidG4xKVxyXG5cclxuICAgICAgICBsZXQgYnV0dG9uRW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbnMtcHJvZmlsZVwiKTtcclxuICAgICAgICBsZXQgYnRuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnRuMi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwiYnRuIGJ0bi1wcmltYXJ5ICAgbXktNFwiKTtcclxuICAgICAgICBidG4yLm9uY2xpY2s9KCk9PntcclxuICAgICAgICAgICAgbGV0IG9iaiA9IHtcclxuICAgICAgICAgICAgICAgICd1c2VybmFtZScgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgJ2VtYWlsJyA6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCByZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9iailcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZmV0Y2goXCIvYWRtaW4vaW5mb1wiLCByZXF1ZXN0KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpPT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKT0+IFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlPVwiXCI7XHJcbiAgICAgICAgICAgICAgICBzaG93UHJvZmlsZSgpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgYnRuMi5pbm5lckhUTUw9XCJDYW1iaWEgRW1haWxcIlxyXG4gICAgICAgIGJ1dHRvbnMuYXBwZW5kKGJ0bjIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBjcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3BcIik7XHJcbiAgICAgICAgbGV0IGJ0bjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ0bjMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG4gYnRuLXByaW1hcnlcIilcclxuICAgICAgICBidG4zLmlubmVySFRNTD1cIkNhbWJpYSBQYXNzd29yZFwiXHJcbiAgICAgICAgYnRuMy5vbmNsaWNrPSAoKT0+e1xyXG4gICAgICAgICAgICBsZXQgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgJ29sZFBhc3N3b3JkJyA6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9sZFBhc3N3b3JkXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgJ25ld1Bhc3N3b3JkJyA6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Bhc3N3b3JkXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCByZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9iailcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZmV0Y2goXCIvYWRtaW4vcHN3XCIsIHJlcXVlc3QpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSk9PnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpPT4gXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2xkUGFzc3dvcmRcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU9XCJcIjsgICAgICBcclxuICAgICAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Bhc3N3b3JkXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlPVwiXCI7ICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY3AuYXBwZW5kKGJ0bjMpO1xyXG5cclxuICAgIH0pXHJcbiAgIFxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93VXNlclByb2ZpbGUoKXtcclxuICAgIGZldGNoKFwiL3VzZXJJbmZvXCIpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgdXNlckluZm89ZGF0YTtcclxuICAgICAgICBsZXQgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZXByb2ZpbGVcIik7XHJcbiAgICAgICAgaDEuaW5uZXJIVE1MPVwiQkVOVE9STkFUTyBVVEVOVEUgXCIrIHVzZXJJbmZvLnVzZXJuYW1lO1xyXG4gICAgICAgIHRpdGxlLmFwcGVuZChoMSk7XHJcbiAgICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHlwcm9maWxlXCIpO1xyXG4gICAgICAgIGxldCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICBoMi5pbm5lckhUTUw9XCJFY2NvIHVuIHJpZXBpbG9nbyBkZWkgdHVvaSBkYXRpOiBcIlxyXG4gICAgICAgICsgXCIgPGJyPjxicj48YnI+IDxiPlVzZXJuYW1lPC9iPjogXCIrdXNlckluZm8udXNlcm5hbWUgXHJcbiAgICAgICAgKyBcIiA8YnI+PGJyPiA8Yj5FbWFpbDwvYj46IFwiK3VzZXJJbmZvLmVtYWlsIFxyXG4gICAgICAgICsgXCIgPGJyPjxicj48Yj5Ob21lPC9iPjogXCIrdXNlckluZm8ubmFtZVxyXG4gICAgICAgICsgXCIgPGJyPjxicj4gPGI+Q29nbm9tZTwvYj46IFwiK3VzZXJJbmZvLnN1cm5hbWVcclxuICAgICAgICBib2R5LmFwcGVuZChoMilcclxuXHJcbiAgICAgICAgbGV0IGJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbnMtcHJvZmlsZVwiKTtcclxuICAgICAgICBsZXQgYnRuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnRuMS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwiYnRuIGJ0bi1wcmltYXJ5IG15LTFcIik7XHJcbiAgICAgICAgYnRuMS5vbmNsaWNrPSgpPT57XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgJ3VzZXJuYW1lJyA6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJuYW1lXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgJ2VtYWlsJyA6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmZXRjaChcIi91c2VyL2luZm9cIiwgcmVxdWVzdClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKT0+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSk9PiBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VybmFtZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZT1cIlwiO1xyXG4gICAgICAgICAgICAgICAgc2hvd1Byb2ZpbGUoKVxyXG4gICAgICAgICAgICB9KSAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidG4xLmlubmVySFRNTD1cIkNhbWJpYSBVc2VybmFtZVwiXHJcbiAgICAgICAgYnV0dG9ucy5hcHBlbmQoYnRuMSlcclxuXHJcbiAgICAgICAgbGV0IGJ1dHRvbkVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b25zLXByb2ZpbGVcIik7XHJcbiAgICAgICAgbGV0IGJ0bjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ0bjIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcImJ0biBidG4tcHJpbWFyeSAgIG15LTRcIik7XHJcbiAgICAgICAgYnRuMi5vbmNsaWNrPSgpPT57XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgJ3VzZXJuYW1lJyA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAnZW1haWwnIDogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmZXRjaChcIi91c2VyL2luZm9cIiwgcmVxdWVzdClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKT0+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSk9PiBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZT1cIlwiO1xyXG4gICAgICAgICAgICAgICAgIHNob3dQcm9maWxlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ0bjIuaW5uZXJIVE1MPVwiQ2FtYmlhIEVtYWlsXCJcclxuICAgICAgICBidXR0b25zLmFwcGVuZChidG4yKTtcclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgIFxyXG4gICAgbGV0IGNwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcFwiKTtcclxuICAgIGxldCBidG4zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGJ0bjMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG4gYnRuLXByaW1hcnlcIilcclxuICAgIGJ0bjMuaW5uZXJIVE1MPVwiQ2FtYmlhIFBhc3N3b3JkXCJcclxuICAgIGJ0bjMub25jbGljaz0gKCk9PntcclxuICAgICAgICBsZXQgb2JqID0ge1xyXG4gICAgICAgICAgICAnb2xkUGFzc3dvcmQnIDogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2xkUGFzc3dvcmRcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcbiAgICAgICAgICAgICduZXdQYXNzd29yZCcgOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQYXNzd29yZFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBsZXQgcmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZmV0Y2goXCIvdXNlci9wc3dcIiwgcmVxdWVzdClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpPT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpPT4gXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2xkUGFzc3dvcmRcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU9XCJcIjsgICAgICBcclxuICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UGFzc3dvcmRcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU9XCJcIjsgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNwLmFwcGVuZChidG4zKTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hvd1Byb2ZpbGU7IiwiaW1wb3J0IGNyZWFWaWRlb2dpb2NvIGZyb20gXCIuL2NyZWFWaWRlb2dpb2NvLmh0bWxcIlxyXG5cclxubGV0IHJhZGlvOiBzdHJpbmc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVmlkZW9HYW1lUGFnZSgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBjcmVhVmlkZW9naW9jbztcclxuICAgIGdlbmVyYXRlR2VucmVMaXN0KCk7XHJcbiAgICBnZW5lcmF0ZUNvbnNvbGVMaXN0KCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0dlbnJlQnRuXCIpLm9uY2xpY2sgPSBjcmVhdGVHZW5yZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3Q29uc29sZUJ0blwiKS5vbmNsaWNrID0gY3JlYXRlQ29uc29sZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3VmlkZW9HYW1lQnRuXCIpLm9uY2xpY2sgPSBjcmVhdGVWaWRlb0dhbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlR2VucmVMaXN0KCkge1xyXG4gICAgbGV0IGdlbnJlTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2VucmVMaXN0XCIpO1xyXG4gICAgZ2VucmVMaXN0LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBmZXRjaChcIi9nZW5yZVwiKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJvbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYlwiKTtcclxuICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIik7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImdlbnJlXCIraSk7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm0tY2hlY2staW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBkYXRhW2ldLmdlbnJlKTtcclxuICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybS1jaGVjay1sYWJlbFwiKTtcclxuICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImdlbnJlXCIraSk7XHJcbiAgICAgICAgICAgICAgICBib2xkLmlubmVySFRNTD1cIlwiK2RhdGFbaV0uZ2VucmU7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5hcHBlbmQoYm9sZCk7XHJcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kKGlucHV0LCBsYWJlbCk7XHJcbiAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgbGV0IHNuaXBwZXQgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0IGdlbnJlc2NoZWNrXCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJnZW5yZSR7aX1cIiB2YWx1ZT1cIiR7ZGF0YVtpXS5nZW5yZX1cIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJnZW5yZSR7aX1cIj48Yj4ke2RhdGFbaV0uZ2VucmV9PC9iPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgICAgICAgIGdlbnJlTGlzdC5pbm5lckhUTUwgKz0gc25pcHBldDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQ29uc29sZUxpc3QoKSB7XHJcbiAgICBsZXQgY29uc29sZUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnNvbGVMaXN0XCIpO1xyXG4gICAgY29uc29sZUxpc3QuaW5uZXJIVE1MID0gXCI8YnI+PGJyPlwiO1xyXG4gICAgZmV0Y2goXCIvY29uc29sZVwiKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJvbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29uc29sZVwiICsgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImNvbnNvbGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb3JtLWNoZWNrLWlucHV0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBkYXRhW2ldLmNvbnNvbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0Lm9uY2xpY2sgPSAoKT0+eyBzZXRSYWRpbyhkYXRhW2ldLmNvbnNvbGUpfTtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm0tY2hlY2stbGFiZWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiY29uc29sZVwiICsgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9sZC5pbm5lckhUTUwgPSBcIlwiICsgZGF0YVtpXS5jb25zb2xlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLmFwcGVuZChib2xkKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXYuYXBwZW5kKGlucHV0LCBsYWJlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZUxpc3QuYXBwZW5kKGRpdik7XHJcbiAgICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmlyc3RTbmlwcGV0PWBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cInJhZGlvXCIgaWQ9XCJjb25zb2xlJHtpfVwiIG5hbWU9XCJjb25zb2xlXCIgdmFsdWU9XCIke2RhdGFbaV0uY29uc29sZX1cIiBvbmNsaWNrPVwiKCk9Pnsgc2V0UmFkaW8oJHtkYXRhW2ldLmNvbnNvbGV9KX1cIiBjaGVja2VkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiY29uc29sZSR7aX1cIj48Yj4ke2RhdGFbaV0uY29uc29sZX08L2I+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZUxpc3QuaW5uZXJIVE1MICs9IGZpcnN0U25pcHBldDtcclxuICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBib2xkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnNvbGVcIiArIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJjb25zb2xlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybS1jaGVjay1pbnB1dFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgZGF0YVtpXS5jb25zb2xlKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5vbmNsaWNrID0gKCk9Pnsgc2V0UmFkaW8oZGF0YVtpXS5jb25zb2xlKX07XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb3JtLWNoZWNrLWxhYmVsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImNvbnNvbGVcIiArIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvbGQuaW5uZXJIVE1MID0gXCJcIiArIGRhdGFbaV0uY29uc29sZTtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5hcHBlbmQoYm9sZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2LmFwcGVuZChpbnB1dCwgbGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGVMaXN0LmFwcGVuZChkaXYpO1xyXG4gICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc25pcHBldCA9IGBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cInJhZGlvXCIgaWQ9XCJjb25zb2xlJHtpfVwiIG5hbWU9XCJjb25zb2xlXCIgdmFsdWU9XCIke2RhdGFbaV0uY29uc29sZX1cIiBvbmNsaWNrPVwiKCk9Pnsgc2V0UmFkaW8oJHtkYXRhW2ldLmNvbnNvbGV9KX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImNvbnNvbGUke2l9XCI+PGI+JHtkYXRhW2ldLmNvbnNvbGV9PC9iPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGVMaXN0LmlubmVySFRNTCArPSBzbmlwcGV0O1xyXG4gICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVHZW5yZSgpIHtcclxuICAgIGxldCBuZXdHZW5yZSA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0dlbnJlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgbGV0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3R2VucmUpXHJcbiAgICB9XHJcbiAgICBmZXRjaChcIi9nZW5yZVwiLCByZXF1ZXN0KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdHZW5yZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZUdlbnJlTGlzdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbnNvbGUoKSB7XHJcbiAgICBsZXQgbmV3Q29uc29sZSA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0NvbnNvbGVcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICBsZXQgcmVxdWVzdCA9IHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdDb25zb2xlKVxyXG4gICAgfVxyXG4gICAgZmV0Y2goXCIvY29uc29sZVwiLCByZXF1ZXN0KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdDb25zb2xlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGdlbmVyYXRlQ29uc29sZUxpc3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVZpZGVvR2FtZSgpIHtcclxuXHJcbiAgICBsZXQgZ2VucmVzID0gKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJnZW5yZXNjaGVja1wiKSBhcyBIVE1MQ29sbGVjdGlvbk9mPEhUTUxJbnB1dEVsZW1lbnQ+KTtcclxuICAgIGxldCBjaGVja2VkR2VucmVzICA9IFtdO1xyXG4gICAgZm9yIChsZXQgZ2VucmUgb2YgZ2VucmVzKSB7XHJcbiAgICAgICAgaWYgKGdlbnJlLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgY2hlY2tlZEdlbnJlcy5wdXNoKGdlbnJlLnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG5ld1ZpZGVvZ2FtZSA9IHtcclxuICAgICAgICBuYW1lOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJWR25hbWVcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcbiAgICAgICAgZ2VucmU6IGNoZWNrZWRHZW5yZXMsXHJcbiAgICAgICAgeWVhcjogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiVkd5ZWFyXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLFxyXG4gICAgICAgIGNvbnNvbGU6IHJhZGlvLFxyXG4gICAgICAgIGNvdmVyOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJWR2NvdmVyXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCByZXF1ZXN0ID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld1ZpZGVvZ2FtZSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgZmV0Y2goXCIvdmlkZW9nYW1lc1wiLCByZXF1ZXN0KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKT0+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgaWYoZGF0YSl7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwidmlkZW9naW9jbyBpbnNlcml0b1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFJhZGlvKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHJhZGlvID0gdmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVZpZGVvR2FtZVBhZ2VcclxuXHJcblxyXG4iLCJpbXBvcnQgeyBkYXRhIH0gZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQgdmlkZW9nYW1lIGZyb20gXCIuLi9pbnRlcmZhY2VzL3ZpZGVvZ2FtZVwiO1xyXG5pbXBvcnQgY3JlYXRlVmlkZW9HYW1lUGFnZSBmcm9tIFwiLi9jcmVhVmlkZW9naW9jaGlcIjtcclxuaW1wb3J0IGNyZWF0ZUdhbWVWaXN1YWxpemF0aW9uIGZyb20gXCIuL3Zpc3VhbGl6emFWaWRlb2dpb2NvXCJcclxuXHJcbmxldCBnYW1lTGlzdDogdmlkZW9nYW1lW10gPSBbXTtcclxubGV0IGdhbWVWaWV3OiBudW1iZXIgPSA2O1xyXG5sZXQgdHlwZTogc3RyaW5nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdhbWVQYWdlKCkge1xyXG4gICAgZmV0Y2goXCIvd2hvSXNMb2dnZWRcIilcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSA9PSBcIkFETUlOXCIpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVmlkZW9nYW1lXCIpLnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVmlkZW9nYW1lXCIpLm9uY2xpY2sgPSBjcmVhdGVWaWRlb0dhbWVQYWdlO1xyXG4gICAgICAgICAgICAgICAgdHlwZSA9IFwiQURNSU5cIjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhID09IFwiVVNFUlwiKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFZpZGVvZ2FtZVwiKS5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgICAgICAgdHlwZSA9IFwiVVNFUlwiXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFZpZGVvZ2FtZVwiKS5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgICAgICAgdHlwZSA9IFwiR1VFU1RcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdldEFsbEdhbWVzKCk7IFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0QWxsR2FtZXMoKSB7XHJcbiAgICBcclxuICAgIGZldGNoKFwiL3ZpZGVvZ2FtZXNcIilcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IChyZXNwb25zZS5qc29uKCkpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGdhbWVMaXN0PVtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBnYW1lIG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGdhbWVMaXN0LnB1c2goZ2FtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIGNyZWF0ZUdhbWVQYWdpbmF0aW9uKCk7XHJcbiAgICAgICAgICAgICBzaG93R2FtZXMoMSk7XHJcbiAgICAgICAgfSlcclxuICAgXHJcbiAgICAgICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dHYW1lcyhpOiBudW1iZXIpIHtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJWaWRlb2dhbWVDb250ZW50XCIpO1xyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbGV0IHN0YXJ0ID0gKGkgLSAxKSAqIGdhbWVWaWV3O1xyXG4gICAgbGV0IHN0b3AgPSAoaSAqIGdhbWVWaWV3KSAtIDE7XHJcbiAgICBmb3IgKHN0YXJ0OyBzdGFydCA8PSBzdG9wOyBzdGFydCsrKSB7XHJcbiAgICAgICAgaWYgKHN0YXJ0ID49IGdhbWVMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29sLTQgdGV4dC1jZW50ZXJcIik7XHJcbiAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpXCIpO1xyXG4gICAgICAgIGNvbC5vbm1vdXNlb3ZlciA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb2wub25tb3VzZW91dCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGdhbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgICAgICBnYW1lVGl0bGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcIm15LTRcIilcclxuICAgICAgICBsZXQgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGltYWdlLnNyYyA9IGdhbWVMaXN0W3N0YXJ0XS5jb3Zlci5saW5rO1xyXG4gICAgICAgIGltYWdlLndpZHRoID0gMjAwO1xyXG4gICAgICAgIGltYWdlLmhlaWdodCA9IDIwMDtcclxuICAgICAgICBsZXQgZ2FtZSA9IGdhbWVMaXN0W3N0YXJ0XVxyXG4gICAgICAgIGltYWdlLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNyZWF0ZUdhbWVWaXN1YWxpemF0aW9uKGdhbWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdhbWVUaXRsZS5pbm5lckhUTUwgPSBcIjxiPlwiK2dhbWVMaXN0W3N0YXJ0XS5uYW1lK1wiPC9iPlwiO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbC5hcHBlbmQoZ2FtZVRpdGxlLCBpbWFnZSk7XHJcbiAgICAgICAgbGV0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgbGV0IGlkID1nYW1lTGlzdFtzdGFydF0uaWRcclxuICAgICAgICBpZiAodHlwZSA9PSBcIlVTRVJcIikge1xyXG4gICAgICAgICAgICBhZGRCdXR0b24uaW5uZXJIVE1MID0gXCJBZ2dpdW5naSBhbGxhIHR1YSBMaXN0YSFcIlxyXG4gICAgICAgICAgICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcIm15LTNcIilcclxuICAgICAgICAgICAgYWRkQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGZldGNoKFwiL3VzZXIvZ2FtZS9cIitpZClcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSk9PihyZXNwb25zZS5qc29uKCkpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZGF0YSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiVmlkZW9naW9jbyBhZ2dpdW50byFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiUG9zc2llZGkgZ2nDoCBxdWVzdG8gZ2l1b2NvIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb2wuYXBwZW5kKGFkZEJ1dHRvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKGNvbCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVHYW1lUGFnaW5hdGlvbigpIHtcclxuICAgIGxldCBzaXplOiBudW1iZXIgPSBnYW1lTGlzdC5sZW5ndGhcclxuICAgIGxldCB0YWJzOiBudW1iZXIgPSBNYXRoLmNlaWwoc2l6ZSAvIGdhbWVWaWV3KTtcclxuICAgIGxldCBwYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZXNWXCIpO1xyXG4gICAgcGFnZXMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRhYnM7IGkrKykge1xyXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBpZiAoaSA9PSAxKSB7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtIGFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIsIFwicGFnZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1saW5rXCIpO1xyXG4gICAgICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYWxsTGkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VzVlwiKS5jaGlsZHJlbjtcclxuICAgICAgICAgICAgZm9yIChsZXQgb25lTGkgb2YgYWxsTGkpIHtcclxuICAgICAgICAgICAgICAgIG9uZUxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgb25lTGkucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtIGFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIsIFwicGFnZVwiKTtcclxuICAgICAgICAgICAgc2hvd0dhbWVzKGkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgYnRuLmlubmVySFRNTCA9IFwiXCIgKyAoaSk7XHJcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYnRuKTtcclxuICAgICAgICBwYWdlcy5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlR2FtZVBhZ2U7IiwiaW1wb3J0IHZpZGVvZ2FtZSBmcm9tIFwiLi4vaW50ZXJmYWNlcy92aWRlb2dhbWVcIjtcclxuaW1wb3J0IHZpc3VhbGl6emFWaWRlb2dpb2NvIGZyb20gXCIuL3Zpc3VhbGl6emFWaWRlb2dpb2NvLmh0bWxcIjtcclxuaW1wb3J0IGNyZWF0ZUdhbWVQYWdlIGZyb20gXCIuL3ZpZGVvZ2lvY2hpXCI7XHJcbmltcG9ydCB2aWRlb2dpb2NoaSBmcm9tIFwiLi92aWRlb2dpb2NoaS5odG1sXCJcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR2FtZVZpc3VhbGl6YXRpb24oZ2FtZTp2aWRlb2dhbWUpe1xyXG4gICAgY29uc29sZS5sb2coZ2FtZSk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MPXZpc3VhbGl6emFWaWRlb2dpb2NvO1xyXG4gICAgc2V0YmFjaygpO1xyXG4gICAgc2V0UGFnZShnYW1lKVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZXRiYWNrKCl7XHJcbiAgICBsZXQgYmFjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFjay1nYW1lc1wiKVxyXG4gICAgYmFjay5vbmNsaWNrPSgpPT57XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTD12aWRlb2dpb2NoaVxyXG4gICAgICAgIGNyZWF0ZUdhbWVQYWdlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFBhZ2UoZ2FtZTp2aWRlb2dhbWUpe1xyXG4gICAgbGV0IGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVUaXRsZVwiKTtcclxuICAgIGxldCB0aXRsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICB0aXRsZS5pbm5lckhUTUw9Z2FtZS5uYW1lO1xyXG4gICAgaGVhZC5hcHBlbmQodGl0bGUpO1xyXG4gICAgaGVhZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwidGV4dC1jZW50ZXIgbWItNVwiKVxyXG4gICAgbGV0IHZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVJbWFnZVwiKTtcclxuICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgaW1nLnNyYz1nYW1lLmNvdmVyLmxpbms7XHJcbiAgICBpbWcud2lkdGg9NDAwO1xyXG4gICAgdmlldy5hcHBlbmQoaW1nKTtcclxuICAgIGxldCBpbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lSW5mb1wiKTtcclxuICAgIGxldCBnZW5lcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIilcclxuICAgIGdlbmVyZS5pbm5lckhUTUw9IFwiIEdFTkVSRS9JOiBcIjtcclxuICAgIGZvcihsZXQgaT0wOyBpPGdhbWUuZ2VucmUubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGdlbmVyZS5pbm5lckhUTUwgKz0gZ2FtZS5nZW5yZVtpXS5nZW5yZSArXCIgXCI7XHJcbiAgICB9IFxyXG4gICAgbGV0IGNvbnNvbGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgY29uc29sZS5pbm5lckhUTUw9IFwiIENPTlNPTEU6IFwiK2dhbWUuY29uc29sZS5jb25zb2xlO1xyXG4gICAgbGV0IHllYXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgeWVhci5pbm5lckhUTUw9XCIgQU5OTzogXCIrZ2FtZS55ZWFyXHJcbiAgICBpbmZvLmFwcGVuZChnZW5lcmUsY29uc29sZSx5ZWFyKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdhbWVWaXN1YWxpemF0aW9uIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3JlYXRlSG9tZSBmcm9tIFwiLi9ob21lL2hvbWVcIjtcclxuaW1wb3J0IGNyZWF0ZU5hdiBmcm9tIFwiLi9uYXZiYXIvbmF2YmFyXCI7XHJcbmltcG9ydCBjcmVhdGVGb3QgZnJvbSBcIi4vZm9vdGVyL2Zvb3RlclwiO1xyXG5cclxuXHJcbmNyZWF0ZU5hdigpO1xyXG5jcmVhdGVIb21lKCk7XHJcbmNyZWF0ZUZvdCgpO1xyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
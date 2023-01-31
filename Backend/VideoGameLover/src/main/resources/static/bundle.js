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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n<div style=\"display: flex;\">\r\n\r\n    <span style=\"margin-right: 40px\">\r\n        <button class=\"btn btn-primary\" id=\"selectAll\">Visualizza tutti</button>\r\n            </span> <!--funzione che prende tutti gli annunci e li schiaffa nel contenuto annunci-->\r\n                <span style=\"margin-right: 40px\" class=\"dropdown\">\r\n                    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                    Visualizza per Genere\r\n                    </button>\r\n                    <ul id=\"genres\" class=\"dropdown-menu\">\r\n                        <li id=\"PLATFORM\"><button class=\"dropdown-item\" type=\"button\">PLATFORM</button></li>\r\n                    </ul>\r\n                </span>\r\n            <span style=\"margin-right: 40px\" class=\"dropdown\">\r\n                <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                Visualizza per Anno\r\n                </button>\r\n                <ul id=\"years\" class=\"dropdown-menu\">\r\n                <li id=\"1985\"><button class=\"dropdown-item\" type=\"button\">1985</button></li>\r\n                </ul>\r\n            </span>\r\n    <div style=\"vertical-align: middle;\" class=\"col-md-3 mx-auto\">\r\n        <div class=\"input-group\">\r\n            <input class=\"form-control border-end-1 border rounded-pill\" type=\"search\" placeholder=\"cerca\" style=\"margin-right:20px\" id=\"searchTitle\">\r\n            <span class=\"input-group-append\">\r\n            <button id=\"searchButton\" class=\"btn btn-outline-secondary bg-white border-bottom-1 border rounded-pill ms-n5\" type=\"button\">\r\n                    trova\r\n            <i class=\"fa fa-search\"></i>\r\n            </button>\r\n            </span>\r\n        </div>\r\n    </div>\r\n\r\n      <span >\r\n        <button  id=\"addInsertion\" style=\"color:white\" class=\"btn btn-danger\">\r\n            <img src=\"./img/plus.png\" alt=\"plus\" style=\"width:25px\">\r\n            Inserisci Annuncio\r\n        </button>\r\n      </span>      \r\n             \r\n\r\n</div>\r\n\r\n<div id=\"remains\">\r\n    <div  id=\"insertionContent\" class=\"row\">\r\n\r\n    </div>\r\n    <ul class=\"list-group\" >\r\n        \r\n    </ul>    \r\n</div>\r\n\r\n<div>\r\n    <ul id=\"pages\" class=\"pagination pagination-sm my-2\">\r\n        \r\n    </ul>\r\n</div>\r\n\r\n\r\n\r\n");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div id=\"back\">\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <div class=\"bordocarosello\">\r\n            <div id=\"imageSlider\" class=\"carousel slide\" data-bs-ride=\"true\">\r\n                <div id=\"indicator\" class=\"carousel-indicators\">\r\n                </div>\r\n                <div id=\"inner\" class=\"carousel-inner\">\r\n                </div>\r\n                <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#imageSlider\" data-bs-slide=\"prev\">\r\n                    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n                    <span class=\"visually-hidden\">Precedente</span>\r\n                </button>\r\n                <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#imageSlider\" data-bs-slide=\"next\">\r\n                    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n                    <span class=\"visually-hidden\">Successiva</span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div id=\"givedGame\">\r\n                    <div class=\"card mb-3\" style=\"max-width: 540px;\">\r\n                        <div class=\"row g-0\">\r\n                            <div id=\"card-image\" class=\"col-md-4\">\r\n\r\n                            </div>\r\n                            <div class=\"col-md-8\">\r\n                                <div id=\"card-body\" class=\"card-body\">\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div id=\"insertion-description\" class=\"col-md-12\">\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"my-5 text-center\">\r\n    <h3><span id=\"insertion-creator\"></span> vorrebbe uno di questi giochi in cambio:</h3>\r\n</div>\r\n\r\n<div class=\"accordion row\" id=\"accordionExample\">\r\n    <div class=\"accordion-item col-md-4\">\r\n        <h2 class=\"accordion-header\" id=\"headingOne\">\r\n            <button id=\"btn-item-1\" class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\"\r\n                data-bs-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n\r\n            </button>\r\n        </h2>\r\n        <div id=\"collapseOne\" class=\"accordion-collapse collapse\" aria-labelledby=\"headingOne\"\r\n            data-bs-parent=\"#accordionExample\">\r\n            <div class=\"accordion-body\">\r\n                <div id=\"img-item-1\" class=\"card mx-auto\" style=\"width: 18rem;\">\r\n                    \r\n                    <div id=\"body-item-1\" class=\"card-body text-center\">\r\n                        \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"accordion-item col-md-4\">\r\n        <h2 class=\"accordion-header\" id=\"headingTwo\">\r\n            <button id=\"btn-item-2\" class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\"\r\n                data-bs-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\r\n\r\n            </button>\r\n        </h2>\r\n        <div id=\"collapseTwo\" class=\"accordion-collapse collapse\" aria-labelledby=\"headingTwo\"\r\n            data-bs-parent=\"#accordionExample\">\r\n            <div class=\"accordion-body\">\r\n                <div id=\"img-item-2\" class=\"card mx-auto\" style=\"width: 18rem;\">\r\n                    \r\n                    <div id=\"body-item-2\" class=\"card-body text-center\">\r\n                        \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"accordion-item col-md-4\">\r\n        <h2 class=\"accordion-header\" id=\"headingThree\">\r\n            <button id=\"btn-item-3\" class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\"\r\n                data-bs-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\r\n\r\n            </button>\r\n        </h2>\r\n        <div id=\"collapseThree\" class=\"accordion-collapse collapse\" aria-labelledby=\"headingThree\"\r\n            data-bs-parent=\"#accordionExample\">\r\n            <div class=\"accordion-body\">\r\n                <div id=\"img-item-3\" class=\"card mx-auto\" style=\"width: 18rem;\">\r\n                    \r\n                    <div id=\"body-item-3\" class=\"card-body text-center\">\r\n                        \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 text-center\">\r\n      <h2><b>Inserisci Annuncio</b></h2>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-4\">\r\n      <div class=\"mb-3\">\r\n        <label for=\"title\" class=\"form-label\">\r\n          <h3><b>Titolo Annuncio</b></h3>\r\n        </label>\r\n        <input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"Titolo Annuncio\">\r\n      </div>\r\n      <div class=\"mb-3\">\r\n        <label for=\"description\" class=\"form-label\">\r\n          <h3><b>Descrizione Videogioco</b></h3>\r\n        </label>\r\n        <textarea class=\"form-control\" id=\"description\" rows=\"3\" placeholder=\"Descrizione Annuncio\"></textarea>\r\n      </div>\r\n      <div>\r\n        <label for=\"tradeGame\" class=\"text-center\">\r\n          <h3><b>Trade-Game</b></h3>\r\n          <h5>Da quale tesorino ti vorresti separare?</h5>\r\n          <span class=\"dropdown text-center\">\r\n            <button class=\"btn btn-light dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n              Quanti bei giochini!\r\n            </button>\r\n            <ul id=\"tradeGame\" class=\"dropdown-menu\">\r\n            </ul>\r\n          </span>\r\n        </label>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"col-4\">\r\n      <div>\r\n        <label for=\"wishGames\" class=\"text-center\">\r\n          <h3><b>Wish-List</b></h3>\r\n          <h5>Che giochi vorresti ricevere in cambio del tuo tesorino?</h5>\r\n\r\n          <span class=\"dropdown text-center\">\r\n            <button class=\"btn btn-light dropdown-toggle\" type=\"button\"\r\n              data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n              Solo 3 Eh! Non bariamo!\r\n            </button>\r\n            <ul id=\"wishGames\" class=\"dropdown-menu\">\r\n            </ul>\r\n          </span>\r\n        </label>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-4\">\r\n      <div class=\"mb-3\">\r\n        <label for=\"gallery\" class=\"form-label\">\r\n          <h3><b>Immagini</b></h3>\r\n        </label>\r\n        <textarea class=\"form-control\" id=\"gallery\" rows=\"7\"\r\n          placeholder=\"Inserisci le url delle imagini dell'annuncio da inserire, ognuna divisa dalla virgola Es: http://imgurl/img.png,http://imgurl/img2.png\"></textarea>\r\n      </div>\r\n      <div class=\"mb-3\">\r\n        <ul id=\"selectedGames\">\r\n          \r\n        </ul>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"mb-3 mt-3 text-center\">\r\n      <button class=\"btn btn-primary\">Aggiungi</button>\r\n    </div>\r\n  </div>\r\n</div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<style>\r\n  .cardfooter {\r\n    margin-top: 10%;\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n\r\n  .footerlinks {\r\n    text-decoration-line: none;\r\n    -webkit-text-fill-color: black;\r\n  }\r\n\r\n  a:hover, a:active {\r\n    -webkit-text-fill-color: grey;\r\n  }\r\n\r\n  li {\r\n    display: inline;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n  }\r\n\r\n\r\n  body {\r\n    min-height: 100vh;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n\r\n\r\n  footer {\r\n    min-height: 50px;\r\n  }\r\n\r\n  /* The article fills all the space between header & footer */\r\n  body {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  div.container {\r\n    flex: 1;\r\n  }\r\n\r\n</style>\r\n\r\n<div class=\"cardfooter\">\r\n  <div class=\"card-header\">\r\n    <img src=\"./img/videogameloverfooter.png\" style=\"width:27%; padding: 2%;  opacity: 0.8;\" alt=\"\">\r\n  </div>\r\n  <div class=\"card-body\" style=\"padding-bottom: 1%;\">\r\n    <ul>\r\n      <li> <a href=\"#\" class=\"footerlinks\">Home</a> </li>\r\n      <li> <a href=\"#\" class=\"footerlinks\">Paolo</a> </li>\r\n      <li> <a href=\"#\" class=\"footerlinks\">Piero</a> </li>\r\n      <li> <a href=\"#\" class=\"footerlinks\">About Us</a> </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"card-footer text-muted\" style=\"padding-bottom: 1%; -webkit-text-fill-color: rgb(22, 22, 22);\">\r\n    <p> ©2023 Paolo Enterprise Inc. | Tutti i diritti riservati (a Pierino) </p>\r\n  </div>\r\n</div>\r\n<!--\r\n<style>\r\nbody {\r\n  display: grid;\r\n  grid-template-rows: 1fr 10rem auto;\r\n  grid-template-areas: \"main\" \".\" \"footer\";\r\n  overflow-x: hidden;\r\n  background: #F5F7FA;\r\n  min-height: 100vh;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\nbody .footer {\r\n  z-index: 1;\r\n  --footer-background:#ED5565;\r\n  display: grid;\r\n  position: relative;\r\n  grid-area: footer;\r\n  min-height: 12rem;\r\n}\r\nbody .footer .bubbles {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 1rem;\r\n  background: var(--footer-background);\r\n  filter: url(\"#blob\");\r\n}\r\nbody .footer .bubbles .bubble {\r\n  position: absolute;\r\n  left: var(--position, 50%);\r\n  background: var(--footer-background);\r\n  border-radius: 100%;\r\n  -webkit-animation: bubble-size var(--time, 4s) ease-in infinite var(--delay, 0s), bubble-move var(--time, 4s) ease-in infinite var(--delay, 0s);\r\n          animation: bubble-size var(--time, 4s) ease-in infinite var(--delay, 0s), bubble-move var(--time, 4s) ease-in infinite var(--delay, 0s);\r\n  transform: translate(-50%, 100%);\r\n}\r\nbody .footer .content {\r\n  z-index: 2;\r\n  display: grid;\r\n  grid-template-columns: 1fr auto;\r\n  grid-gap: 4rem;\r\n  padding: 2rem;\r\n  background: var(--footer-background);\r\n}\r\nbody .footer .content a, body .footer .content p {\r\n  color: #F5F7FA;\r\n  text-decoration: none;\r\n}\r\nbody .footer .content b {\r\n  color: white;\r\n}\r\nbody .footer .content p {\r\n  margin: 0;\r\n  font-size: 0.75rem;\r\n}\r\nbody .footer .content > div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\nbody .footer .content > div > div {\r\n  margin: 0.25rem 0;\r\n}\r\nbody .footer .content > div > div > * {\r\n  margin-right: 0.5rem;\r\n}\r\nbody .footer .content > div .image {\r\n  align-self: center;\r\n  width: 4rem;\r\n  height: 4rem;\r\n  margin: 0.25rem 0;\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n\r\n@-webkit-keyframes bubble-size {\r\n  0%, 75% {\r\n    width: var(--size, 4rem);\r\n    height: var(--size, 4rem);\r\n  }\r\n  100% {\r\n    width: 0rem;\r\n    height: 0rem;\r\n  }\r\n}\r\n\r\n@keyframes bubble-size {\r\n  0%, 75% {\r\n    width: var(--size, 4rem);\r\n    height: var(--size, 4rem);\r\n  }\r\n  100% {\r\n    width: 0rem;\r\n    height: 0rem;\r\n  }\r\n}\r\n@-webkit-keyframes bubble-move {\r\n  0% {\r\n    bottom: -4rem;\r\n  }\r\n  100% {\r\n    bottom: var(--distance, 10rem);\r\n  }\r\n}\r\n@keyframes bubble-move {\r\n  0% {\r\n    bottom: -4rem;\r\n  }\r\n  100% {\r\n    bottom: var(--distance, 10rem);\r\n  }\r\n}\r\n</style>\r\n\r\n<div class=\"main\"></div>\r\n<div class=\"footer\">\r\n  <div class=\"bubbles\">\r\n    <div class=\"bubble\" style=\"--size:2.6645230162851963rem; --distance:7.3041160367426174rem; --position:83.56368053338483%; --time:3.4956403096272295s; --delay:-2.773938196237702s;\"></div>\r\n    <div class=\"bubble\" style=\"--size:5.894149849838016rem; --distance:7.627974484300427rem; --position:93.36878188393642%; --time:3.7601486272838756s; --delay:-3.397102288403029s;\"></div>\r\n    <div class=\"bubble\" style=\"--size:2.798647106665685rem; --distance:9.200496817222525rem; --position:0.20775732698414195%; --time:2.2010960220058657s; --delay:-2.698948216464545s;\"></div>\r\n    <div class=\"bubble\" style=\"--size:4.359621926782294rem; --distance:7.46357993007419rem; --position:47.867831746850925%; --time:2.120820561270724s; --delay:-2.5141778492182336s;\"></div>\r\n    <div class=\"bubble\" style=\"--size:5.028352050978196rem; --distance:7.242720036832249rem; --position:30.69984615927396%; --time:3.2535955281062883s; --delay:-3.3554545325439715s;\"></div>\r\n    <div class=\"bubble\" style=\"--size:2.755978221857193rem; --distance:7.469972496926509rem; --position:10.238227020701139%; --time:2.647200152008366s; --delay:-3.5721594622496218s;\"></div>\r\n    <div class=\"bubble\" style=\"--size:5.0848128172087375rem; --distance:9.558554142584626rem; --position:94.51982057832215%; --time:3.7155558762173055s; --delay:-3.081006696757859s;\"></div>\r\n    <div class=\"bubble\" style=\"--size:3.537807560775958rem; --distance:9.421423529841928rem; --position:5.396274211709013%; --time:3.1787894556018856s; --delay:-3.446169905186775s;\"></div>\r\n    <div class=\"bubble\" style=\"--size:5.627731218600348rem; --distance:7.746463416075165rem; --position:10.928802493469531%; --time:2.56792593225669s; --delay:-3.404873101451986s;\"></div>\r\n    <div class=\"bubble\" style=\"--size:3.6949599219472313rem; --distance:9.181549586750107rem; --position:-4.589055563798976%; --time:3.7095220652888345s; --delay:-3.1295861315916067s;\"></div>\r\n    <div class=\"bubble\" style=\"--size:2.759264221067178rem; --distance:8.42688809955137rem; --position:28.046728293124502%; --time:3.2840961105236s; --delay:-2.366519874309387s;\"></div>\r\n    <div class=\"bubble\" style=\"--size:2.5743082435105684rem; --distance:9.430653962573853rem; --position:30.83974647173961%; --time:3.6865700176230707s; --delay:-3.619039606033297s;\"></div>\r\n  </div>\r\n  <div class=\"content\">\r\n    <div>\r\n      <div><b>Eldew</b><a href=\"#\">Secuce</a><a href=\"#\">Drupand</a><a href=\"#\">Oceash</a><a href=\"#\">Ugefe</a><a href=\"#\">Babed</a></div>\r\n      <div><b>Spotha</b><a href=\"#\">Miskasa</a><a href=\"#\">Agithe</a><a href=\"#\">Scesha</a><a href=\"#\">Lulle</a></div>\r\n      <div><b>Chashakib</b><a href=\"#\">Chogauw</a><a href=\"#\">Phachuled</a><a href=\"#\">Tiebeft</a><a href=\"#\">Ocid</a><a href=\"#\">Izom</a><a href=\"#\">Ort</a></div>\r\n      <div><b>Athod</b><a href=\"#\">Pamuz</a><a href=\"#\">Vapert</a><a href=\"#\">Neesk</a><a href=\"#\">Omemanen</a></div>\r\n    </div>\r\n    <div><a class=\"image\" href=\"https://codepen.io/z-\" target=\"_blank\" style=\"background-image: url(&quot;https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/happy.svg&quot;)\"></a>\r\n      <p>©2019 Not Really</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n<svg style=\" top:100vh\">\r\n  <defs>\r\n    <filter id=\"blob\">\r\n      <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"10\" result=\"blur\"></feGaussianBlur>\r\n      <feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9\" result=\"blob\"></feColorMatrix>\r\n      feComposite(in=\"SourceGraphic\" in2=\"blob\" operator=\"atop\") //After reviewing this after years I can't remember why I added this but it isn't necessary for the blob effect\r\n</filter>\r\n</defs>\r\n</svg>\r\n-->");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div id=\"bgaround\" class=\"text-center my-5\">\r\n    <img src=\"./img/videogamelover.png\" alt=\"not found\" class=\"headerImg mx-auto\" style=\"width: 50%; \" id=\"headerImg\">\r\n</div>\r\n\r\n<style>\r\n  .headerImg {\r\n    \r\n    border-radius: 40%;\r\n  }\r\n\r\n  #annCard {\r\n\r\n    width: 40%;\r\n    height: 500px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    align-self: center;\r\n  }\r\n\r\n  #imgCard {\r\n    height: 60%;\r\n    width:fit-content;\r\n    align-self: center;\r\n  }\r\n\r\n\r\n  .imgS {\r\n    width: 54px;\r\n    height: 42px;\r\n  }\r\n\r\n  body {\r\n    text-align: center;\r\n    font-weight: bold;\r\n    \r\n  }\r\n\r\n \r\n \r\n</style>\r\n\r\n<div>\r\n  <img src=\"./img/gamesearch.jpg\" style=\"width:30%\" alt=\"\">\r\n  <div>\r\n    <h1>\r\n      Il portale dei veri gamers.\r\n    </h1>\r\n    <h2>\r\n      Sei alla ricerca di un gioco, vecchio o nuovo che sia, ma non riesci a trovarlo? Noi abbiamo la soluzione per te...\r\n      Cerca tra centinaia di annunci il titolo che non trovavi più, mettiti in contatto con l'utente che lo sta vendendo, \r\n      e fai l'affare del secolo...\r\n    </h2>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container text-center\" style=\"margin-top: 10%; margin-bottom: 10%;\">\r\n  <div class=\"row\" style=\"margin-left:10%;margin-right:10%;\">\r\n    <div class=\"col\">\r\n      <div class=\"card text-bg-danger\" style=\"width: 18rem;height: 100%;\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Cerca</h5>\r\n          <p class=\"card-text\">Cerca il tuo gioco prefereito tra centinaia di annunci</p>\r\n          <hr>\r\n          <div class=\"input-group mb-3 form-control border rounded\" style=\"margin-top: 10px;\">\r\n            <input type=\"text\" class=\"form-control border-0\" id=\"searchTitle\" placeholder=\"Cerca\" aria-label=\"search\" aria-describedby=\"basic-addon2\">\r\n            <img class=\"ms-1 btn imgS\" src=\"./img/search.png\" alt=\"\">\r\n          </div> \r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\">\r\n      <div class=\"card text-bg-primary\" style=\"width: 18rem;height: 100%;\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Esplora</h5>\r\n          <p class=\"card-text\">Esplora miglialia di giochi tra gli annunci presenti</p>\r\n          <hr>\r\n          <button id=\"insertions\" class=\"btn btn-info\">Annunci</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\">\r\n      <div class=\"card text-bg-success\" style=\"width: 18rem;height: 100%;\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Vendi</h5>\r\n          <p class=\"card-text\">Hai un gioco di cui non te ne fai più nulla per le miliardi di volte che lo hai finito?\r\n            inserisci qui il tuo annuncio!\r\n          </p>\r\n          <hr>\r\n          <button id=\"insertions\" class=\"btn btn-light\">Inserisci Annuncio</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<h1>Ultimi annunci:</h1>\r\n<h2>Controlla qui gli ultimi annunci</h2>\r\n<div id=\"carouselExampleControls\" class=\"carousel slide\" data-bs-ride=\"carousel\">\r\n    <div id=\"innerCarouselHome\" class=\"carousel-inner\">\r\n       \r\n    </div>\r\n    <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#carouselExampleControls\" data-bs-slide=\"prev\">\r\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"visually-hidden\">Previous</span>\r\n    </button>\r\n    <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#carouselExampleControls\" data-bs-slide=\"next\">\r\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"visually-hidden\">Next</span>\r\n    </button>\r\n  </div>\r\n\r\n\r\n<h1>Chi siamo?</h1>\r\n<h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea adipisci architecto libero alias? Numquam atque beatae quis asperiores necessitatibus est quod voluptate eveniet excepturi molestias fugiat nostrum nihil, eligendi vero.</h2>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--navbar controller icon-->\r\n<button id=\"logo\" class=\"logo-button\"> <img class=\"logo\" src=\"./img/logo.png\" alt=\"logo\"></button>\r\n\r\n<nav>\r\n  <ul>\r\n    <!--navbar buttons-->\r\n    <!--y button-->\r\n    <button id=\"insertions\" class=\"button-one nav-button\">Annunci</button>\r\n    <!--x button-->\r\n    <button id=\"management\" class=\"button-two nav-button\">Gestione Utenti</button>\r\n    <!--a button-->\r\n    <button id=\"insManagement\" class=\"button-three nav-button\">Gestione Annunci</button>\r\n    <!--b button-->\r\n    <button id=\"login\" class=\"button-four nav-button\" data-bs-toggle=\"modal\"\r\n      data-bs-target=\"#myModal\">Login</button>\r\n    <!--b button-->\r\n    <button id=\"signOutButton\" class=\"button-four nav-button\" data-bs-toggle=\"modal\"\r\n    data-bs-target=\"#myModal\">Logout</button>\r\n\r\n    <button id=\"profile\" class=\"profile-button\">\r\n      <span class=\"position-absolute top-2 start-90 translate-middle p-2 bg-danger border border-light rounded-circle\">\r\n        <span class=\"visually-hidden\">New alerts</span>\r\n      </span>\r\n      <img class=\"logo profile\" src=\"./img/profile.png\" alt=\"logo\">\r\n    </button>\r\n  </ul>\r\n</nav>");

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

/***/ "./src/profiloUtente/showProfile.html":
/*!********************************************!*\
  !*** ./src/profiloUtente/showProfile.html ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<h1>TODO: mostrare tutte le info dell'utente</h1>\r\n");

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
/* harmony import */ var _annuncio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./annuncio */ "./src/annunci/annuncio.ts");
/* harmony import */ var _creaAnnuncio_creaAnnuncio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../creaAnnuncio/creaAnnuncio */ "./src/creaAnnuncio/creaAnnuncio.ts");


let list = [];
let view = 6;
function createPage() {
    document.getElementById("selectAll").onclick = searchByAll;
    assignFilters();
    (0,_creaAnnuncio_creaAnnuncio__WEBPACK_IMPORTED_MODULE_1__["default"])();
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
            (0,_annuncio__WEBPACK_IMPORTED_MODULE_0__["default"])(list[start]);
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
    /*Creo un pulsante per tornare alla list annunci e il titolo */
    let button = document.createElement("button");
    button.setAttribute("class", "btn btn-success");
    button.innerHTML = "Indietro";
    button.onclick = () => {
        document.getElementById("main").innerHTML = _annunci_html__WEBPACK_IMPORTED_MODULE_2__["default"];
        (0,_annunci__WEBPACK_IMPORTED_MODULE_1__["default"])();
    };
    let back = document.getElementById("back");
    back.append(button);
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
    desc.innerHTML = "Descrizione:";
    let insDesc = document.createElement("p");
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _creaAnnuncio_creaAnnuncio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../creaAnnuncio/creaAnnuncio */ "./src/creaAnnuncio/creaAnnuncio.ts");

let list = [];
let view = 5;
function createPage2() {
    document.getElementById("selectAll2").onclick = searchByAll2;
    assignFilters2();
    (0,_creaAnnuncio_creaAnnuncio__WEBPACK_IMPORTED_MODULE_0__["default"])();
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
    let searchTitle = document.getElementById("searchTitle");
    searchTitle.onkeydown = (e) => {
        if (e.key == 'Enter') {
            searchByTitle2(searchTitle.value);
        }
    };
    let searchButton = document.getElementById("searchButton2");
    searchButton.onclick = () => {
        searchByTitle2(searchTitle.value);
    };
    let categoryButton = document.getElementById("createCategory");
    categoryButton.onclick = () => {
        createCategory();
    };
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
        title: "Scambio Zelda",
        description: "Scambio zelda xkè mi sono sekkato a giocarci",
        publisher: publisherGioco1,
        gallery: [imageGallery1, imageGallery2, imageGallery3],
        tradeGame: gioco2,
        wishList: [gioco1, gioco3, gioco4],
        outcome: "WIP",
        publicationDate: "30-01-2023"
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
        let li = document.createElement("li");
        li.onclick = () => { addInsertionToList(list[start]); };
        li.setAttribute('class', 'list-group-item');
        //gli id devono essere diversi
        li.setAttribute('id', list[start].title);
        li.setAttribute('onmouseover', "setAttribute('class', 'list-group-item active')");
        li.setAttribute('onmouseout', "setAttribute('class', 'list-group-item')");
        let title = document.createElement("h2");
        let description = document.createElement("p");
        title.innerHTML = list[start].title;
        description.innerHTML = "" + list[start].tradeGame.name;
        for (let i = 0; i < list[start].tradeGame.genre.length; i++) {
            description.innerHTML += ", " + list[start].tradeGame.genre[i].genre + "";
        }
        description.innerHTML += ", " + list[start].tradeGame.year;
        description.innerHTML += ", " + list[start].tradeGame.console.console;
        li.appendChild(title);
        li.appendChild(description);
        content.append(li);
        console.log("ho appeso" + start);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPage2);
let checkedList = [];
function addInsertionToList(insertion) {
    /*TODO: Mettere l'inserzione in una lista, impostare il bottone
    blu e poi al click del bottone 'crea categoria' inserire la lista in
    una categoria e svuotare la lista */
    let isOnCheckedList = false;
    for (let element of checkedList) {
        if (insertion == element) {
            isOnCheckedList = true;
            checkedList.splice(checkedList.indexOf(element), 1);
        }
    }
    //gli id devono essere diversi dal titolo
    let idElement = `${insertion.title}`;
    if (isOnCheckedList) {
        document.getElementById(idElement).removeAttribute('class');
        document.getElementById(idElement).setAttribute('class', 'list-group-item');
        document.getElementById(idElement).setAttribute('onmouseover', "setAttribute('class', 'list-group-item active')");
        document.getElementById(idElement).setAttribute('onmouseout', "setAttribute('class', 'list-group-item')");
    }
    else {
        checkedList.push(insertion);
        document.getElementById(idElement).removeAttribute('onmouseover');
        document.getElementById(idElement).removeAttribute('onmouseout');
        document.getElementById(idElement).setAttribute('class', 'list-group-item active');
    }
}
function createCategory() {
    //TODO: inserisci gli elementi di checkedList in una categoria nel DB
    //Metodo da fare haha
    //Svuota checkedList e rimette i bottoni a posto
    for (let element of checkedList) {
        addInsertionToList(element);
    }
    checkedList = [];
}


/***/ }),

/***/ "./src/creaAnnuncio/creaAnnuncio.ts":
/*!******************************************!*\
  !*** ./src/creaAnnuncio/creaAnnuncio.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createInsertion": () => (/* binding */ createInsertion),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _creaAnnuncio_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creaAnnuncio.html */ "./src/creaAnnuncio/creaAnnuncio.html");

let fullList = [];
let userList = [];
let wishList = [];
let giocoDaScambiare;
let index = 0;
/*Cerco tutti i giochi */
/*function getAllGames(){
   fullList=[];
    fetch("/videogames")
    .then((response)=> response.json())
    .then((videogames)=>{
        for(let game of videogames){
            fullList.push(game);
        }
    })
}
  */ /*Cerco tutti i giochi posseduti dall'utente*/
/*function getUserGames(){
    userList=[];
    fetch("/videogames/user")
    .then((response)=> response.json())
    .then((videogames)=>{
        for(let game of videogames){
            userList.push(game);
        }
    })
}
*/
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
    let tradeGame = document.getElementById("tradeGame");
    tradeGame.innerHTML = "";
    for (let game of userList) {
        let li = document.createElement("li");
        li.setAttribute("class", "dropdown-item");
        li.innerHTML = game.name;
        li.onclick = () => {
            giocoDaScambiare = li.innerHTML;
        };
        tradeGame.append(li);
    }
    /*Crea la lista dei 3 giochi che l'utente vorrebbe scambiare */
    let wishGames = document.getElementById("wishGames");
    wishGames.innerHTML = "";
    for (let game of fullList) {
        let li = document.createElement("li");
        li.setAttribute("class", "dropdown-item");
        li.innerHTML = game.name;
        li.onclick = () => {
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
        wishGames.append(li);
    }
}
function createInsertion() {
    //getAllGames();
    //getUserGames();
    let btn = document.getElementById("addInsertion");
    btn.onclick = () => {
        document.getElementById("main").innerHTML = _creaAnnuncio_html__WEBPACK_IMPORTED_MODULE_0__["default"];
        createInsertionPage();
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createInsertion);


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
/* harmony import */ var _profiloUtente_showProfile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../profiloUtente/showProfile */ "./src/profiloUtente/showProfile.ts");

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
        btn_profile.onclick = _profiloUtente_showProfile__WEBPACK_IMPORTED_MODULE_0__["default"];
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
    main.innerHTML += _home_html__WEBPACK_IMPORTED_MODULE_0__["default"];
    let head = document.getElementsByTagName('head')[0];
    head.innerHTML += '<link rel="stylesheet" href="./home.css">';
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
}
function showLogOutModal() {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield tryToLogOut();
        if (result) {
            document.getElementById("myModalBody").innerHTML = _logout_logout_html__WEBPACK_IMPORTED_MODULE_5__["default"];
            document.getElementById("myModalFooter").innerHTML = "";
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
                _navbar_navbar__WEBPACK_IMPORTED_MODULE_6__.setNav("");
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
        console.log("ecchecazzo");
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
/* harmony import */ var _home_home_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../home/home.html */ "./src/home/home.html");
/* harmony import */ var _profiloUtente_profile_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../profiloUtente/profile.html */ "./src/profiloUtente/profile.html");
/* harmony import */ var _gestioneUtenti_gestioneUtenti_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../gestioneUtenti/gestioneUtenti.html */ "./src/gestioneUtenti/gestioneUtenti.html");
/* harmony import */ var _gestioneUtenti_gestioneUtenti__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../gestioneUtenti/gestioneUtenti */ "./src/gestioneUtenti/gestioneUtenti.ts");
/* harmony import */ var _annunci_gestioneannunci__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../annunci/gestioneannunci */ "./src/annunci/gestioneannunci.ts");










function createNav() {
    document.getElementById("header").innerHTML = _navbar_html__WEBPACK_IMPORTED_MODULE_0__["default"];
    (0,_modal_modal__WEBPACK_IMPORTED_MODULE_1__["default"])();
    document.getElementById("logo").onclick = () => {
        document.getElementById("main").innerHTML = _home_home_html__WEBPACK_IMPORTED_MODULE_5__["default"];
    };
    document.getElementById("insertions").onclick = () => {
        document.getElementById("main").innerHTML = _annunci_annunci_html__WEBPACK_IMPORTED_MODULE_2__["default"];
        (0,_annunci_annunci__WEBPACK_IMPORTED_MODULE_4__["default"])();
    };
    document.getElementById("insManagement").onclick = () => {
        document.getElementById("main").innerHTML = _annunci_gestioneannunci_html__WEBPACK_IMPORTED_MODULE_3__["default"];
        (0,_annunci_gestioneannunci__WEBPACK_IMPORTED_MODULE_9__["default"])();
    };
    document.getElementById("management").onclick = () => {
        document.getElementById("main").innerHTML = _gestioneUtenti_gestioneUtenti_html__WEBPACK_IMPORTED_MODULE_7__["default"];
        (0,_gestioneUtenti_gestioneUtenti__WEBPACK_IMPORTED_MODULE_8__["default"])();
    };
    document.getElementById("profile").onclick = () => {
        document.getElementById("main").innerHTML = _profiloUtente_profile_html__WEBPACK_IMPORTED_MODULE_6__["default"];
    };
    //TODO: account.TYPE
    setNav(" ");
}
function setNav(accountType) {
    const btn_gestUtenti = document.getElementById("management");
    const btn_insManagement = document.getElementById("insManagement");
    const btn_login = document.getElementById("login");
    const btn_signOutButton = document.getElementById("signOutButton");
    if (accountType == "ADMIN") {
        btn_gestUtenti.removeAttribute("hidden");
        btn_insManagement.removeAttribute("hidden");
        btn_login.setAttribute("hidden", "true");
        btn_signOutButton.removeAttribute("hidden");
    }
    else if (accountType == "USER") {
        btn_gestUtenti.setAttribute("hidden", "true");
        btn_insManagement.setAttribute("hidden", "true");
        btn_login.setAttribute("hidden", "true");
        btn_signOutButton.removeAttribute("hidden");
    }
    else {
        btn_gestUtenti.setAttribute("hidden", "true");
        btn_insManagement.setAttribute("hidden", "true");
        btn_login.removeAttribute("hidden");
        btn_signOutButton.setAttribute("hidden", "true");
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNav);


/***/ }),

/***/ "./src/profiloUtente/showProfile.ts":
/*!******************************************!*\
  !*** ./src/profiloUtente/showProfile.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "showUserProfile": () => (/* binding */ showUserProfile)
/* harmony export */ });
/* harmony import */ var _showProfile_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showProfile.html */ "./src/profiloUtente/showProfile.html");

function showUserProfile() {
    document.getElementById("main").innerHTML = _showProfile_html__WEBPACK_IMPORTED_MODULE_0__["default"];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showUserProfile);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TjlCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05xQztBQUNHO0FBQ0E7QUFHeEMsMERBQVMsRUFBRSxDQUFDO0FBQ1osc0RBQVUsRUFBRSxDQUFDO0FBQ2IsMERBQVMsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvYW5udW5jaS9hbm51bmNpLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvYW5udW5jaS9hbm51bmNpby5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2FubnVuY2kvZ2VzdGlvbmVhbm51bmNpLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvY3JlYUFubnVuY2lvL2NyZWFBbm51bmNpby5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2Zvb3Rlci9mb290ZXIuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9nZXN0aW9uZVV0ZW50aS9nZXN0aW9uZVV0ZW50aS5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2hvbWUvaG9tZS5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2xvZ2luL2xvZ2luLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvbG9naW4vbG9naW5Gb290ZXIuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9sb2dvdXQvbG9nb3V0Lmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvbW9kYWwvbW9kYWwuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9uYXZiYXIvbmF2YmFyLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvcHJvZmlsb1V0ZW50ZS9wcm9maWxlLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvcHJvZmlsb1V0ZW50ZS9zaG93UHJvZmlsZS5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL3JlZ2lzdHJhemlvbmUvcmVnaXN0cmF6aW9uZS5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL3JlZ2lzdHJhemlvbmUvcmVnaXN0cmF6aW9uZUZvb3Rlci5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2FubnVuY2kvYW5udW5jaS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9hbm51bmNpL2FubnVuY2lvLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2FubnVuY2kvZ2VzdGlvbmVhbm51bmNpLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2NyZWFBbm51bmNpby9jcmVhQW5udW5jaW8udHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvZm9vdGVyL2Zvb3Rlci50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9nZXN0aW9uZVV0ZW50aS9nZXN0aW9uZVV0ZW50aS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9ob21lL2hvbWUudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvbW9kYWwvbW9kYWwudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvbmF2YmFyL25hdmJhci50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9wcm9maWxvVXRlbnRlL3Nob3dQcm9maWxlLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJcXHJcXG48ZGl2IHN0eWxlPVxcXCJkaXNwbGF5OiBmbGV4O1xcXCI+XFxyXFxuXFxyXFxuICAgIDxzcGFuIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IDQwcHhcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBpZD1cXFwic2VsZWN0QWxsXFxcIj5WaXN1YWxpenphIHR1dHRpPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9zcGFuPiA8IS0tZnVuemlvbmUgY2hlIHByZW5kZSB0dXR0aSBnbGkgYW5udW5jaSBlIGxpIHNjaGlhZmZhIG5lbCBjb250ZW51dG8gYW5udW5jaS0tPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiA0MHB4XFxcIiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnkgZHJvcGRvd24tdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgVmlzdWFsaXp6YSBwZXIgR2VuZXJlXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx1bCBpZD1cXFwiZ2VucmVzXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVxcXCJQTEFURk9STVxcXCI+PGJ1dHRvbiBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj5QTEFURk9STTwvYnV0dG9uPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9XFxcIm1hcmdpbi1yaWdodDogNDBweFxcXCIgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnkgZHJvcGRvd24tdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBWaXN1YWxpenphIHBlciBBbm5vXFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8dWwgaWQ9XFxcInllYXJzXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSBpZD1cXFwiMTk4NVxcXCI+PGJ1dHRvbiBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj4xOTg1PC9idXR0b24+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgIDxkaXYgc3R5bGU9XFxcInZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxcIiBjbGFzcz1cXFwiY29sLW1kLTMgbXgtYXV0b1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgYm9yZGVyLWVuZC0xIGJvcmRlciByb3VuZGVkLXBpbGxcXFwiIHR5cGU9XFxcInNlYXJjaFxcXCIgcGxhY2Vob2xkZXI9XFxcImNlcmNhXFxcIiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OjIwcHhcXFwiIGlkPVxcXCJzZWFyY2hUaXRsZVxcXCI+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWFwcGVuZFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cXFwic2VhcmNoQnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBiZy13aGl0ZSBib3JkZXItYm90dG9tLTEgYm9yZGVyIHJvdW5kZWQtcGlsbCBtcy1uNVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIHRyb3ZhXFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXNlYXJjaFxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICA8c3BhbiA+XFxyXFxuICAgICAgICA8YnV0dG9uICBpZD1cXFwiYWRkSW5zZXJ0aW9uXFxcIiBzdHlsZT1cXFwiY29sb3I6d2hpdGVcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCI+XFxyXFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4vaW1nL3BsdXMucG5nXFxcIiBhbHQ9XFxcInBsdXNcXFwiIHN0eWxlPVxcXCJ3aWR0aDoyNXB4XFxcIj5cXHJcXG4gICAgICAgICAgICBJbnNlcmlzY2kgQW5udW5jaW9cXHJcXG4gICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgIDwvc3Bhbj4gICAgICBcXHJcXG4gICAgICAgICAgICAgXFxyXFxuXFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBpZD1cXFwicmVtYWluc1xcXCI+XFxyXFxuICAgIDxkaXYgIGlkPVxcXCJpbnNlcnRpb25Db250ZW50XFxcIiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDx1bCBjbGFzcz1cXFwibGlzdC1ncm91cFxcXCIgPlxcclxcbiAgICAgICAgXFxyXFxuICAgIDwvdWw+ICAgIFxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXY+XFxyXFxuICAgIDx1bCBpZD1cXFwicGFnZXNcXFwiIGNsYXNzPVxcXCJwYWdpbmF0aW9uIHBhZ2luYXRpb24tc20gbXktMlxcXCI+XFxyXFxuICAgICAgICBcXHJcXG4gICAgPC91bD5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgaWQ9XFxcImJhY2tcXFwiPlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImJvcmRvY2Fyb3NlbGxvXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGlkPVxcXCJpbWFnZVNsaWRlclxcXCIgY2xhc3M9XFxcImNhcm91c2VsIHNsaWRlXFxcIiBkYXRhLWJzLXJpZGU9XFxcInRydWVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJpbmRpY2F0b3JcXFwiIGNsYXNzPVxcXCJjYXJvdXNlbC1pbmRpY2F0b3JzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImlubmVyXFxcIiBjbGFzcz1cXFwiY2Fyb3VzZWwtaW5uZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2Fyb3VzZWwtY29udHJvbC1wcmV2XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdGFyZ2V0PVxcXCIjaW1hZ2VTbGlkZXJcXFwiIGRhdGEtYnMtc2xpZGU9XFxcInByZXZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+UHJlY2VkZW50ZTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhcm91c2VsLWNvbnRyb2wtbmV4dFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRhcmdldD1cXFwiI2ltYWdlU2xpZGVyXFxcIiBkYXRhLWJzLXNsaWRlPVxcXCJuZXh0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvblxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPlN1Y2Nlc3NpdmE8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImdpdmVkR2FtZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIG1iLTNcXFwiIHN0eWxlPVxcXCJtYXgtd2lkdGg6IDU0MHB4O1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93IGctMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImNhcmQtaW1hZ2VcXFwiIGNsYXNzPVxcXCJjb2wtbWQtNFxcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJjYXJkLWJvZHlcXFwiIGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgaWQ9XFxcImluc2VydGlvbi1kZXNjcmlwdGlvblxcXCIgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwibXktNSB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgIDxoMz48c3BhbiBpZD1cXFwiaW5zZXJ0aW9uLWNyZWF0b3JcXFwiPjwvc3Bhbj4gdm9ycmViYmUgdW5vIGRpIHF1ZXN0aSBnaW9jaGkgaW4gY2FtYmlvOjwvaDM+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiYWNjb3JkaW9uIHJvd1xcXCIgaWQ9XFxcImFjY29yZGlvbkV4YW1wbGVcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhY2NvcmRpb24taXRlbSBjb2wtbWQtNFxcXCI+XFxyXFxuICAgICAgICA8aDIgY2xhc3M9XFxcImFjY29yZGlvbi1oZWFkZXJcXFwiIGlkPVxcXCJoZWFkaW5nT25lXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJidG4taXRlbS0xXFxcIiBjbGFzcz1cXFwiYWNjb3JkaW9uLWJ1dHRvbiBjb2xsYXBzZWRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10b2dnbGU9XFxcImNvbGxhcHNlXFxcIlxcclxcbiAgICAgICAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cXFwiI2NvbGxhcHNlT25lXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJ0cnVlXFxcIiBhcmlhLWNvbnRyb2xzPVxcXCJjb2xsYXBzZU9uZVxcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICA8L2gyPlxcclxcbiAgICAgICAgPGRpdiBpZD1cXFwiY29sbGFwc2VPbmVcXFwiIGNsYXNzPVxcXCJhY2NvcmRpb24tY29sbGFwc2UgY29sbGFwc2VcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwiaGVhZGluZ09uZVxcXCJcXHJcXG4gICAgICAgICAgICBkYXRhLWJzLXBhcmVudD1cXFwiI2FjY29yZGlvbkV4YW1wbGVcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFjY29yZGlvbi1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiaW1nLWl0ZW0tMVxcXCIgY2xhc3M9XFxcImNhcmQgbXgtYXV0b1xcXCIgc3R5bGU9XFxcIndpZHRoOiAxOHJlbTtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJib2R5LWl0ZW0tMVxcXCIgY2xhc3M9XFxcImNhcmQtYm9keSB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImFjY29yZGlvbi1pdGVtIGNvbC1tZC00XFxcIj5cXHJcXG4gICAgICAgIDxoMiBjbGFzcz1cXFwiYWNjb3JkaW9uLWhlYWRlclxcXCIgaWQ9XFxcImhlYWRpbmdUd29cXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcImJ0bi1pdGVtLTJcXFwiIGNsYXNzPVxcXCJhY2NvcmRpb24tYnV0dG9uIGNvbGxhcHNlZFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiXFxyXFxuICAgICAgICAgICAgICAgIGRhdGEtYnMtdGFyZ2V0PVxcXCIjY29sbGFwc2VUd29cXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIiBhcmlhLWNvbnRyb2xzPVxcXCJjb2xsYXBzZVR3b1xcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICA8L2gyPlxcclxcbiAgICAgICAgPGRpdiBpZD1cXFwiY29sbGFwc2VUd29cXFwiIGNsYXNzPVxcXCJhY2NvcmRpb24tY29sbGFwc2UgY29sbGFwc2VcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwiaGVhZGluZ1R3b1xcXCJcXHJcXG4gICAgICAgICAgICBkYXRhLWJzLXBhcmVudD1cXFwiI2FjY29yZGlvbkV4YW1wbGVcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFjY29yZGlvbi1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiaW1nLWl0ZW0tMlxcXCIgY2xhc3M9XFxcImNhcmQgbXgtYXV0b1xcXCIgc3R5bGU9XFxcIndpZHRoOiAxOHJlbTtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJib2R5LWl0ZW0tMlxcXCIgY2xhc3M9XFxcImNhcmQtYm9keSB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImFjY29yZGlvbi1pdGVtIGNvbC1tZC00XFxcIj5cXHJcXG4gICAgICAgIDxoMiBjbGFzcz1cXFwiYWNjb3JkaW9uLWhlYWRlclxcXCIgaWQ9XFxcImhlYWRpbmdUaHJlZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cXFwiYnRuLWl0ZW0tM1xcXCIgY2xhc3M9XFxcImFjY29yZGlvbi1idXR0b24gY29sbGFwc2VkXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJjb2xsYXBzZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgZGF0YS1icy10YXJnZXQ9XFxcIiNjb2xsYXBzZVRocmVlXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCIgYXJpYS1jb250cm9scz1cXFwiY29sbGFwc2VUaHJlZVxcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICA8L2gyPlxcclxcbiAgICAgICAgPGRpdiBpZD1cXFwiY29sbGFwc2VUaHJlZVxcXCIgY2xhc3M9XFxcImFjY29yZGlvbi1jb2xsYXBzZSBjb2xsYXBzZVxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJoZWFkaW5nVGhyZWVcXFwiXFxyXFxuICAgICAgICAgICAgZGF0YS1icy1wYXJlbnQ9XFxcIiNhY2NvcmRpb25FeGFtcGxlXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhY2NvcmRpb24tYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImltZy1pdGVtLTNcXFwiIGNsYXNzPVxcXCJjYXJkIG14LWF1dG9cXFwiIHN0eWxlPVxcXCJ3aWR0aDogMThyZW07XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiYm9keS1pdGVtLTNcXFwiIGNsYXNzPVxcXCJjYXJkLWJvZHkgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBzdHlsZT1cXFwiZGlzcGxheTogZmxleDtcXFwiPlxcclxcblxcclxcbiAgICAgICAgPHNwYW4gc3R5bGU9XFxcIm1hcmdpbi1yaWdodDogNDBweFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBpZD1cXFwic2VsZWN0QWxsMlxcXCI+VmlzdWFsaXp6YSB0dXR0aTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L3NwYW4+IDwhLS1mdW56aW9uZSBjaGUgcHJlbmRlIHR1dHRpIGdsaSBhbm51bmNpIGUgbGkgc2NoaWFmZmEgbmVsIGNvbnRlbnV0byBhbm51bmNpLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiA0MHB4XFxcIiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5IGRyb3Bkb3duLXRvZ2dsZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBWaXN1YWxpenphIHBlciBHZW5lcmVcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XFxcImdlbnJlczJcXFwiIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVxcXCJQTEFURk9STVxcXCI+PGJ1dHRvbiBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj5QTEFURk9STTwvYnV0dG9uPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XFxcIm1hcmdpbi1yaWdodDogNDBweFxcXCIgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5IGRyb3Bkb3duLXRvZ2dsZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIFZpc3VhbGl6emEgcGVyIEFubm9cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVxcXCJ5ZWFyczJcXFwiIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cXFwiMTk4NVxcXCI+PGJ1dHRvbiBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj4xOTg1PC9idXR0b24+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgIDxkaXYgc3R5bGU9XFxcInZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxcIiBjbGFzcz1cXFwiY29sLW1kLTMgbXgtYXV0b1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbCBib3JkZXItZW5kLTEgYm9yZGVyIHJvdW5kZWQtcGlsbFxcXCIgdHlwZT1cXFwic2VhcmNoXFxcIiBwbGFjZWhvbGRlcj1cXFwiY2VyY2FcXFwiIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6MjBweFxcXCIgaWQ9XFxcInNlYXJjaFRpdGxlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWFwcGVuZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcInNlYXJjaEJ1dHRvbjJcXFwiIGNsYXNzPVxcXCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJnLXdoaXRlIGJvcmRlci1ib3R0b20tMSBib3JkZXIgcm91bmRlZC1waWxsIG1zLW41XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyb3ZhXFxyXFxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1zZWFyY2hcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICBcXHJcXG4gICAgICAgICAgPHNwYW4gPlxcclxcbiAgICAgICAgICAgIDwhLS0gQWxsZXJ0YSBNYXJ0ZWxsYXRhOiBzZSB0b2xnbyBpbCBib3R0b25lIHRvbGdvIHB1cmUgbGEgbGlzdGEsXFxyXFxuICAgICAgICAgICAgICAgIHF1aW5kaSBsJ2hvIG1lc3NvIGhpZGRlbi0tPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gaGlkZGVuIGlkPVxcXCJhZGRJbnNlcnRpb25cXFwiIHN0eWxlPVxcXCJjb2xvcjp3aGl0ZVxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4vaW1nL3BsdXMucG5nXFxcIiBhbHQ9XFxcInBsdXNcXFwiIHN0eWxlPVxcXCJ3aWR0aDoyNXB4XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgSW5zZXJpc2NpIEFubnVuY2lvXFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgIDwvc3Bhbj4gICAgICBcXHJcXG4gICAgICAgICAgICAgICAgIFxcclxcbiAgICBcXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxicj5cXHJcXG4gICAgPGRpdiBzdHlsZT1cXFwiZGlzcGxheTogaW5saW5lLWZsZXg7XFxcIj5cXHJcXG5cXHJcXG4gICAgICAgIDxzcGFuIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IDQwcHhcXFwiPiA8aDQ+IE5vbWUgQ2F0ZWdvcmlhOiA8L2g0PiA8L3NwYW4+XFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgIDxzcGFuIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IDQwcHhcXFwiPiA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbCBib3JkZXItZW5kLTEgYm9yZGVyIHJvdW5kZWQtcGlsbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcIkNhdGVnb3JpYVxcXCIgc3R5bGU9XFxcIm1hcmdpbi1yaWdodDoyMHB4XFxcIiBpZD1cXFwiY2F0ZWdvcnlOYW1lXFxcIj4gPC9zcGFuPlxcclxcblxcclxcbiAgICAgICAgPHNwYW4gc3R5bGU9XFxcIm1hcmdpbi1yaWdodDogNDBweFxcXCI+IDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgaWQ9XFxcImNyZWF0ZUNhdGVnb3J5XFxcIj5DcmVhIENhdGVnb3JpYTwvYnV0dG9uPiA8L3NwYW4+XFxyXFxuXFxyXFxuICAgICAgICA8c3BhbiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiA0MHB4XFxcIj4gPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIGlkPVxcXCJkZWxldGVFbGVtZW50c1xcXCI+RWxpbWluYSBBbm51bmNpPC9idXR0b24+IDwvc3Bhbj5cXHJcXG5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxicj5cXHJcXG4gICAgXFxyXFxuICAgIDxkaXYgaWQ9XFxcInJlbWFpbnNcXFwiPlxcclxcbiAgICAgICAgPHVsIGlkPVxcXCJpbnNlcnRpb25Db250ZW50MlxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXBcXFwiID5cXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgIDwvdWw+XFxyXFxuICAgICAgICBcXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXY+XFxyXFxuICAgICAgICA8dWwgaWQ9XFxcInBhZ2VzMlxcXCIgY2xhc3M9XFxcInBhZ2luYXRpb24gcGFnaW5hdGlvbi1zbSBteS0yXFxcIj5cXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgIDwvdWw+XFxyXFxuICAgIFxcclxcbiAgICA8L2Rpdj4gICAgXFxyXFxuXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLTEyIHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICA8aDI+PGI+SW5zZXJpc2NpIEFubnVuY2lvPC9iPjwvaDI+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuXFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNFxcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJ0aXRsZVxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPlxcclxcbiAgICAgICAgICA8aDM+PGI+VGl0b2xvIEFubnVuY2lvPC9iPjwvaDM+XFxyXFxuICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJ0aXRsZVxcXCIgcGxhY2Vob2xkZXI9XFxcIlRpdG9sbyBBbm51bmNpb1xcXCI+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJkZXNjcmlwdGlvblxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPlxcclxcbiAgICAgICAgICA8aDM+PGI+RGVzY3JpemlvbmUgVmlkZW9naW9jbzwvYj48L2gzPlxcclxcbiAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiZGVzY3JpcHRpb25cXFwiIHJvd3M9XFxcIjNcXFwiIHBsYWNlaG9sZGVyPVxcXCJEZXNjcml6aW9uZSBBbm51bmNpb1xcXCI+PC90ZXh0YXJlYT5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgICA8ZGl2PlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwidHJhZGVHYW1lXFxcIiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICA8aDM+PGI+VHJhZGUtR2FtZTwvYj48L2gzPlxcclxcbiAgICAgICAgICA8aDU+RGEgcXVhbGUgdGVzb3Jpbm8gdGkgdm9ycmVzdGkgc2VwYXJhcmU/PC9oNT5cXHJcXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRyb3Bkb3duIHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWxpZ2h0IGRyb3Bkb3duLXRvZ2dsZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIj5cXHJcXG4gICAgICAgICAgICAgIFF1YW50aSBiZWkgZ2lvY2hpbmkhXFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPHVsIGlkPVxcXCJ0cmFkZUdhbWVcXFwiIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXHJcXG4gICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLTRcXFwiPlxcclxcbiAgICAgIDxkaXY+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJ3aXNoR2FtZXNcXFwiIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgIDxoMz48Yj5XaXNoLUxpc3Q8L2I+PC9oMz5cXHJcXG4gICAgICAgICAgPGg1PkNoZSBnaW9jaGkgdm9ycmVzdGkgcmljZXZlcmUgaW4gY2FtYmlvIGRlbCB0dW8gdGVzb3Jpbm8/PC9oNT5cXHJcXG5cXHJcXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRyb3Bkb3duIHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWxpZ2h0IGRyb3Bkb3duLXRvZ2dsZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIlxcclxcbiAgICAgICAgICAgICAgZGF0YS1icy10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCI+XFxyXFxuICAgICAgICAgICAgICBTb2xvIDMgRWghIE5vbiBiYXJpYW1vIVxcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDx1bCBpZD1cXFwid2lzaEdhbWVzXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC00XFxcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImdhbGxlcnlcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5cXHJcXG4gICAgICAgICAgPGgzPjxiPkltbWFnaW5pPC9iPjwvaDM+XFxyXFxuICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgPHRleHRhcmVhIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJnYWxsZXJ5XFxcIiByb3dzPVxcXCI3XFxcIlxcclxcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiSW5zZXJpc2NpIGxlIHVybCBkZWxsZSBpbWFnaW5pIGRlbGwnYW5udW5jaW8gZGEgaW5zZXJpcmUsIG9nbnVuYSBkaXZpc2EgZGFsbGEgdmlyZ29sYSBFczogaHR0cDovL2ltZ3VybC9pbWcucG5nLGh0dHA6Ly9pbWd1cmwvaW1nMi5wbmdcXFwiPjwvdGV4dGFyZWE+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICA8dWwgaWQ9XFxcInNlbGVjdGVkR2FtZXNcXFwiPlxcclxcbiAgICAgICAgICBcXHJcXG4gICAgICAgIDwvdWw+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImNvbC0xMlxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1iLTMgbXQtMyB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5BZ2dpdW5naTwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPHN0eWxlPlxcclxcbiAgLmNhcmRmb290ZXIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb290ZXJsaW5rcyB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lO1xcclxcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogYmxhY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBhOmhvdmVyLCBhOmFjdGl2ZSB7XFxyXFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiBncmV5O1xcclxcbiAgfVxcclxcblxcclxcbiAgbGkge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gIGJvZHkge1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgZm9vdGVyIHtcXHJcXG4gICAgbWluLWhlaWdodDogNTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8qIFRoZSBhcnRpY2xlIGZpbGxzIGFsbCB0aGUgc3BhY2UgYmV0d2VlbiBoZWFkZXIgJiBmb290ZXIgKi9cXHJcXG4gIGJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgZGl2LmNvbnRhaW5lciB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICB9XFxyXFxuXFxyXFxuPC9zdHlsZT5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjYXJkZm9vdGVyXFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5cXHJcXG4gICAgPGltZyBzcmM9XFxcIi4vaW1nL3ZpZGVvZ2FtZWxvdmVyZm9vdGVyLnBuZ1xcXCIgc3R5bGU9XFxcIndpZHRoOjI3JTsgcGFkZGluZzogMiU7ICBvcGFjaXR5OiAwLjg7XFxcIiBhbHQ9XFxcIlxcXCI+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCIgc3R5bGU9XFxcInBhZGRpbmctYm90dG9tOiAxJTtcXFwiPlxcclxcbiAgICA8dWw+XFxyXFxuICAgICAgPGxpPiA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiZm9vdGVybGlua3NcXFwiPkhvbWU8L2E+IDwvbGk+XFxyXFxuICAgICAgPGxpPiA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiZm9vdGVybGlua3NcXFwiPlBhb2xvPC9hPiA8L2xpPlxcclxcbiAgICAgIDxsaT4gPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImZvb3RlcmxpbmtzXFxcIj5QaWVybzwvYT4gPC9saT5cXHJcXG4gICAgICA8bGk+IDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJmb290ZXJsaW5rc1xcXCI+QWJvdXQgVXM8L2E+IDwvbGk+XFxyXFxuICAgIDwvdWw+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImNhcmQtZm9vdGVyIHRleHQtbXV0ZWRcXFwiIHN0eWxlPVxcXCJwYWRkaW5nLWJvdHRvbTogMSU7IC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiByZ2IoMjIsIDIyLCAyMik7XFxcIj5cXHJcXG4gICAgPHA+IMKpMjAyMyBQYW9sbyBFbnRlcnByaXNlIEluYy4gfCBUdXR0aSBpIGRpcml0dGkgcmlzZXJ2YXRpIChhIFBpZXJpbm8pIDwvcD5cXHJcXG4gIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjwhLS1cXHJcXG48c3R5bGU+XFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTByZW0gYXV0bztcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJtYWluXFxcIiBcXFwiLlxcXCIgXFxcImZvb3RlclxcXCI7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kOiAjRjVGN0ZBO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbmJvZHkgLmZvb3RlciB7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgLS1mb290ZXItYmFja2dyb3VuZDojRUQ1NTY1O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xcclxcbiAgbWluLWhlaWdodDogMTJyZW07XFxyXFxufVxcclxcbmJvZHkgLmZvb3RlciAuYnViYmxlcyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBoZWlnaHQ6IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1mb290ZXItYmFja2dyb3VuZCk7XFxyXFxuICBmaWx0ZXI6IHVybChcXFwiI2Jsb2JcXFwiKTtcXHJcXG59XFxyXFxuYm9keSAuZm9vdGVyIC5idWJibGVzIC5idWJibGUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogdmFyKC0tcG9zaXRpb24sIDUwJSk7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1mb290ZXItYmFja2dyb3VuZCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IGJ1YmJsZS1zaXplIHZhcigtLXRpbWUsIDRzKSBlYXNlLWluIGluZmluaXRlIHZhcigtLWRlbGF5LCAwcyksIGJ1YmJsZS1tb3ZlIHZhcigtLXRpbWUsIDRzKSBlYXNlLWluIGluZmluaXRlIHZhcigtLWRlbGF5LCAwcyk7XFxyXFxuICAgICAgICAgIGFuaW1hdGlvbjogYnViYmxlLXNpemUgdmFyKC0tdGltZSwgNHMpIGVhc2UtaW4gaW5maW5pdGUgdmFyKC0tZGVsYXksIDBzKSwgYnViYmxlLW1vdmUgdmFyKC0tdGltZSwgNHMpIGVhc2UtaW4gaW5maW5pdGUgdmFyKC0tZGVsYXksIDBzKTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEwMCUpO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIgLmNvbnRlbnQge1xcclxcbiAgei1pbmRleDogMjtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcclxcbiAgZ3JpZC1nYXA6IDRyZW07XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tZm9vdGVyLWJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIgLmNvbnRlbnQgYSwgYm9keSAuZm9vdGVyIC5jb250ZW50IHAge1xcclxcbiAgY29sb3I6ICNGNUY3RkE7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbmJvZHkgLmZvb3RlciAuY29udGVudCBiIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuYm9keSAuZm9vdGVyIC5jb250ZW50IHAge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIgLmNvbnRlbnQgPiBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuYm9keSAuZm9vdGVyIC5jb250ZW50ID4gZGl2ID4gZGl2IHtcXHJcXG4gIG1hcmdpbjogMC4yNXJlbSAwO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIgLmNvbnRlbnQgPiBkaXYgPiBkaXYgPiAqIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIgLmNvbnRlbnQgPiBkaXYgLmltYWdlIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA0cmVtO1xcclxcbiAgaGVpZ2h0OiA0cmVtO1xcclxcbiAgbWFyZ2luOiAwLjI1cmVtIDA7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgYnViYmxlLXNpemUge1xcclxcbiAgMCUsIDc1JSB7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1zaXplLCA0cmVtKTtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1zaXplLCA0cmVtKTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICB3aWR0aDogMHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAwcmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGJ1YmJsZS1zaXplIHtcXHJcXG4gIDAlLCA3NSUge1xcclxcbiAgICB3aWR0aDogdmFyKC0tc2l6ZSwgNHJlbSk7XFxyXFxuICAgIGhlaWdodDogdmFyKC0tc2l6ZSwgNHJlbSk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgd2lkdGg6IDByZW07XFxyXFxuICAgIGhlaWdodDogMHJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIGJ1YmJsZS1tb3ZlIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgYm90dG9tOiAtNHJlbTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICBib3R0b206IHZhcigtLWRpc3RhbmNlLCAxMHJlbSk7XFxyXFxuICB9XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgYnViYmxlLW1vdmUge1xcclxcbiAgMCUge1xcclxcbiAgICBib3R0b206IC00cmVtO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIGJvdHRvbTogdmFyKC0tZGlzdGFuY2UsIDEwcmVtKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuPC9zdHlsZT5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJtYWluXFxcIj48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJmb290ZXJcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiYnViYmxlc1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZToyLjY2NDUyMzAxNjI4NTE5NjNyZW07IC0tZGlzdGFuY2U6Ny4zMDQxMTYwMzY3NDI2MTc0cmVtOyAtLXBvc2l0aW9uOjgzLjU2MzY4MDUzMzM4NDgzJTsgLS10aW1lOjMuNDk1NjQwMzA5NjI3MjI5NXM7IC0tZGVsYXk6LTIuNzczOTM4MTk2MjM3NzAycztcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6NS44OTQxNDk4NDk4MzgwMTZyZW07IC0tZGlzdGFuY2U6Ny42Mjc5NzQ0ODQzMDA0MjdyZW07IC0tcG9zaXRpb246OTMuMzY4NzgxODgzOTM2NDIlOyAtLXRpbWU6My43NjAxNDg2MjcyODM4NzU2czsgLS1kZWxheTotMy4zOTcxMDIyODg0MDMwMjlzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZToyLjc5ODY0NzEwNjY2NTY4NXJlbTsgLS1kaXN0YW5jZTo5LjIwMDQ5NjgxNzIyMjUyNXJlbTsgLS1wb3NpdGlvbjowLjIwNzc1NzMyNjk4NDE0MTk1JTsgLS10aW1lOjIuMjAxMDk2MDIyMDA1ODY1N3M7IC0tZGVsYXk6LTIuNjk4OTQ4MjE2NDY0NTQ1cztcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6NC4zNTk2MjE5MjY3ODIyOTRyZW07IC0tZGlzdGFuY2U6Ny40NjM1Nzk5MzAwNzQxOXJlbTsgLS1wb3NpdGlvbjo0Ny44Njc4MzE3NDY4NTA5MjUlOyAtLXRpbWU6Mi4xMjA4MjA1NjEyNzA3MjRzOyAtLWRlbGF5Oi0yLjUxNDE3Nzg0OTIxODIzMzZzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZTo1LjAyODM1MjA1MDk3ODE5NnJlbTsgLS1kaXN0YW5jZTo3LjI0MjcyMDAzNjgzMjI0OXJlbTsgLS1wb3NpdGlvbjozMC42OTk4NDYxNTkyNzM5NiU7IC0tdGltZTozLjI1MzU5NTUyODEwNjI4ODNzOyAtLWRlbGF5Oi0zLjM1NTQ1NDUzMjU0Mzk3MTVzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZToyLjc1NTk3ODIyMTg1NzE5M3JlbTsgLS1kaXN0YW5jZTo3LjQ2OTk3MjQ5NjkyNjUwOXJlbTsgLS1wb3NpdGlvbjoxMC4yMzgyMjcwMjA3MDExMzklOyAtLXRpbWU6Mi42NDcyMDAxNTIwMDgzNjZzOyAtLWRlbGF5Oi0zLjU3MjE1OTQ2MjI0OTYyMThzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZTo1LjA4NDgxMjgxNzIwODczNzVyZW07IC0tZGlzdGFuY2U6OS41NTg1NTQxNDI1ODQ2MjZyZW07IC0tcG9zaXRpb246OTQuNTE5ODIwNTc4MzIyMTUlOyAtLXRpbWU6My43MTU1NTU4NzYyMTczMDU1czsgLS1kZWxheTotMy4wODEwMDY2OTY3NTc4NTlzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZTozLjUzNzgwNzU2MDc3NTk1OHJlbTsgLS1kaXN0YW5jZTo5LjQyMTQyMzUyOTg0MTkyOHJlbTsgLS1wb3NpdGlvbjo1LjM5NjI3NDIxMTcwOTAxMyU7IC0tdGltZTozLjE3ODc4OTQ1NTYwMTg4NTZzOyAtLWRlbGF5Oi0zLjQ0NjE2OTkwNTE4Njc3NXM7XFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnViYmxlXFxcIiBzdHlsZT1cXFwiLS1zaXplOjUuNjI3NzMxMjE4NjAwMzQ4cmVtOyAtLWRpc3RhbmNlOjcuNzQ2NDYzNDE2MDc1MTY1cmVtOyAtLXBvc2l0aW9uOjEwLjkyODgwMjQ5MzQ2OTUzMSU7IC0tdGltZToyLjU2NzkyNTkzMjI1NjY5czsgLS1kZWxheTotMy40MDQ4NzMxMDE0NTE5ODZzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZTozLjY5NDk1OTkyMTk0NzIzMTNyZW07IC0tZGlzdGFuY2U6OS4xODE1NDk1ODY3NTAxMDdyZW07IC0tcG9zaXRpb246LTQuNTg5MDU1NTYzNzk4OTc2JTsgLS10aW1lOjMuNzA5NTIyMDY1Mjg4ODM0NXM7IC0tZGVsYXk6LTMuMTI5NTg2MTMxNTkxNjA2N3M7XFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnViYmxlXFxcIiBzdHlsZT1cXFwiLS1zaXplOjIuNzU5MjY0MjIxMDY3MTc4cmVtOyAtLWRpc3RhbmNlOjguNDI2ODg4MDk5NTUxMzdyZW07IC0tcG9zaXRpb246MjguMDQ2NzI4MjkzMTI0NTAyJTsgLS10aW1lOjMuMjg0MDk2MTEwNTIzNnM7IC0tZGVsYXk6LTIuMzY2NTE5ODc0MzA5Mzg3cztcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6Mi41NzQzMDgyNDM1MTA1Njg0cmVtOyAtLWRpc3RhbmNlOjkuNDMwNjUzOTYyNTczODUzcmVtOyAtLXBvc2l0aW9uOjMwLjgzOTc0NjQ3MTczOTYxJTsgLS10aW1lOjMuNjg2NTcwMDE3NjIzMDcwN3M7IC0tZGVsYXk6LTMuNjE5MDM5NjA2MDMzMjk3cztcXFwiPjwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXHJcXG4gICAgPGRpdj5cXHJcXG4gICAgICA8ZGl2PjxiPkVsZGV3PC9iPjxhIGhyZWY9XFxcIiNcXFwiPlNlY3VjZTwvYT48YSBocmVmPVxcXCIjXFxcIj5EcnVwYW5kPC9hPjxhIGhyZWY9XFxcIiNcXFwiPk9jZWFzaDwvYT48YSBocmVmPVxcXCIjXFxcIj5VZ2VmZTwvYT48YSBocmVmPVxcXCIjXFxcIj5CYWJlZDwvYT48L2Rpdj5cXHJcXG4gICAgICA8ZGl2PjxiPlNwb3RoYTwvYj48YSBocmVmPVxcXCIjXFxcIj5NaXNrYXNhPC9hPjxhIGhyZWY9XFxcIiNcXFwiPkFnaXRoZTwvYT48YSBocmVmPVxcXCIjXFxcIj5TY2VzaGE8L2E+PGEgaHJlZj1cXFwiI1xcXCI+THVsbGU8L2E+PC9kaXY+XFxyXFxuICAgICAgPGRpdj48Yj5DaGFzaGFraWI8L2I+PGEgaHJlZj1cXFwiI1xcXCI+Q2hvZ2F1dzwvYT48YSBocmVmPVxcXCIjXFxcIj5QaGFjaHVsZWQ8L2E+PGEgaHJlZj1cXFwiI1xcXCI+VGllYmVmdDwvYT48YSBocmVmPVxcXCIjXFxcIj5PY2lkPC9hPjxhIGhyZWY9XFxcIiNcXFwiPkl6b208L2E+PGEgaHJlZj1cXFwiI1xcXCI+T3J0PC9hPjwvZGl2PlxcclxcbiAgICAgIDxkaXY+PGI+QXRob2Q8L2I+PGEgaHJlZj1cXFwiI1xcXCI+UGFtdXo8L2E+PGEgaHJlZj1cXFwiI1xcXCI+VmFwZXJ0PC9hPjxhIGhyZWY9XFxcIiNcXFwiPk5lZXNrPC9hPjxhIGhyZWY9XFxcIiNcXFwiPk9tZW1hbmVuPC9hPjwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdj48YSBjbGFzcz1cXFwiaW1hZ2VcXFwiIGhyZWY9XFxcImh0dHBzOi8vY29kZXBlbi5pby96LVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJnF1b3Q7aHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTk5MDExL2hhcHB5LnN2ZyZxdW90OylcXFwiPjwvYT5cXHJcXG4gICAgICA8cD7CqTIwMTkgTm90IFJlYWxseTwvcD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48c3ZnIHN0eWxlPVxcXCIgdG9wOjEwMHZoXFxcIj5cXHJcXG4gIDxkZWZzPlxcclxcbiAgICA8ZmlsdGVyIGlkPVxcXCJibG9iXFxcIj5cXHJcXG4gICAgICA8ZmVHYXVzc2lhbkJsdXIgaW49XFxcIlNvdXJjZUdyYXBoaWNcXFwiIHN0ZERldmlhdGlvbj1cXFwiMTBcXFwiIHJlc3VsdD1cXFwiYmx1clxcXCI+PC9mZUdhdXNzaWFuQmx1cj5cXHJcXG4gICAgICA8ZmVDb2xvck1hdHJpeCBpbj1cXFwiYmx1clxcXCIgbW9kZT1cXFwibWF0cml4XFxcIiB2YWx1ZXM9XFxcIjEgMCAwIDAgMCAgMCAxIDAgMCAwICAwIDAgMSAwIDAgIDAgMCAwIDE5IC05XFxcIiByZXN1bHQ9XFxcImJsb2JcXFwiPjwvZmVDb2xvck1hdHJpeD5cXHJcXG4gICAgICBmZUNvbXBvc2l0ZShpbj1cXFwiU291cmNlR3JhcGhpY1xcXCIgaW4yPVxcXCJibG9iXFxcIiBvcGVyYXRvcj1cXFwiYXRvcFxcXCIpIC8vQWZ0ZXIgcmV2aWV3aW5nIHRoaXMgYWZ0ZXIgeWVhcnMgSSBjYW4ndCByZW1lbWJlciB3aHkgSSBhZGRlZCB0aGlzIGJ1dCBpdCBpc24ndCBuZWNlc3NhcnkgZm9yIHRoZSBibG9iIGVmZmVjdFxcclxcbjwvZmlsdGVyPlxcclxcbjwvZGVmcz5cXHJcXG48L3N2Zz5cXHJcXG4tLT5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxuYXYgYXJpYS1sYWJlbD1cXFwiLi4uXFxcIj5cXHJcXG4gICAgPGRpdj5cXHJcXG4gICAgICAgIDxoMSBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPkdlc3Rpc2NpIFV0ZW50aSBSZWdpc3RyYXRpPC9oMT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDx1bCBpZD1cXFwidXNlckxpc3RcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIFxcclxcbiAgICA8L3VsPlxcclxcbiAgICA8dWwgaWQ9XFxcInBhZ2luYXRpb25cXFwiIGNsYXNzPVxcXCJwYWdpbmF0aW9uIHBhZ2luYXRpb24tc20gbXktMlxcXCI+XFxyXFxuICAgICAgICBcXHJcXG4gICAgPC91bD5cXHJcXG48L25hdj5cXHJcXG5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgaWQ9XFxcImJnYXJvdW5kXFxcIiBjbGFzcz1cXFwidGV4dC1jZW50ZXIgbXktNVxcXCI+XFxyXFxuICAgIDxpbWcgc3JjPVxcXCIuL2ltZy92aWRlb2dhbWVsb3Zlci5wbmdcXFwiIGFsdD1cXFwibm90IGZvdW5kXFxcIiBjbGFzcz1cXFwiaGVhZGVySW1nIG14LWF1dG9cXFwiIHN0eWxlPVxcXCJ3aWR0aDogNTAlOyBcXFwiIGlkPVxcXCJoZWFkZXJJbWdcXFwiPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxzdHlsZT5cXHJcXG4gIC5oZWFkZXJJbWcge1xcclxcbiAgICBcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2FubkNhcmQge1xcclxcblxcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjaW1nQ2FyZCB7XFxyXFxuICAgIGhlaWdodDogNjAlO1xcclxcbiAgICB3aWR0aDpmaXQtY29udGVudDtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgLmltZ1Mge1xcclxcbiAgICB3aWR0aDogNTRweDtcXHJcXG4gICAgaGVpZ2h0OiA0MnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgYm9keSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIFxcclxcbiAgfVxcclxcblxcclxcbiBcXHJcXG4gXFxyXFxuPC9zdHlsZT5cXHJcXG5cXHJcXG48ZGl2PlxcclxcbiAgPGltZyBzcmM9XFxcIi4vaW1nL2dhbWVzZWFyY2guanBnXFxcIiBzdHlsZT1cXFwid2lkdGg6MzAlXFxcIiBhbHQ9XFxcIlxcXCI+XFxyXFxuICA8ZGl2PlxcclxcbiAgICA8aDE+XFxyXFxuICAgICAgSWwgcG9ydGFsZSBkZWkgdmVyaSBnYW1lcnMuXFxyXFxuICAgIDwvaDE+XFxyXFxuICAgIDxoMj5cXHJcXG4gICAgICBTZWkgYWxsYSByaWNlcmNhIGRpIHVuIGdpb2NvLCB2ZWNjaGlvIG8gbnVvdm8gY2hlIHNpYSwgbWEgbm9uIHJpZXNjaSBhIHRyb3ZhcmxvPyBOb2kgYWJiaWFtbyBsYSBzb2x1emlvbmUgcGVyIHRlLi4uXFxyXFxuICAgICAgQ2VyY2EgdHJhIGNlbnRpbmFpYSBkaSBhbm51bmNpIGlsIHRpdG9sbyBjaGUgbm9uIHRyb3ZhdmkgcGnDuSwgbWV0dGl0aSBpbiBjb250YXR0byBjb24gbCd1dGVudGUgY2hlIGxvIHN0YSB2ZW5kZW5kbywgXFxyXFxuICAgICAgZSBmYWkgbCdhZmZhcmUgZGVsIHNlY29sby4uLlxcclxcbiAgICA8L2gyPlxcclxcbiAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIHRleHQtY2VudGVyXFxcIiBzdHlsZT1cXFwibWFyZ2luLXRvcDogMTAlOyBtYXJnaW4tYm90dG9tOiAxMCU7XFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OjEwJTttYXJnaW4tcmlnaHQ6MTAlO1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbFxcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZCB0ZXh0LWJnLWRhbmdlclxcXCIgc3R5bGU9XFxcIndpZHRoOiAxOHJlbTtoZWlnaHQ6IDEwMCU7XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuICAgICAgICAgIDxoNSBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+Q2VyY2E8L2g1PlxcclxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj5DZXJjYSBpbCB0dW8gZ2lvY28gcHJlZmVyZWl0byB0cmEgY2VudGluYWlhIGRpIGFubnVuY2k8L3A+XFxyXFxuICAgICAgICAgIDxocj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgbWItMyBmb3JtLWNvbnRyb2wgYm9yZGVyIHJvdW5kZWRcXFwiIHN0eWxlPVxcXCJtYXJnaW4tdG9wOiAxMHB4O1xcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgYm9yZGVyLTBcXFwiIGlkPVxcXCJzZWFyY2hUaXRsZVxcXCIgcGxhY2Vob2xkZXI9XFxcIkNlcmNhXFxcIiBhcmlhLWxhYmVsPVxcXCJzZWFyY2hcXFwiIGFyaWEtZGVzY3JpYmVkYnk9XFxcImJhc2ljLWFkZG9uMlxcXCI+XFxyXFxuICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwibXMtMSBidG4gaW1nU1xcXCIgc3JjPVxcXCIuL2ltZy9zZWFyY2gucG5nXFxcIiBhbHQ9XFxcIlxcXCI+XFxyXFxuICAgICAgICAgIDwvZGl2PiBcXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sXFxcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIHRleHQtYmctcHJpbWFyeVxcXCIgc3R5bGU9XFxcIndpZHRoOiAxOHJlbTtoZWlnaHQ6IDEwMCU7XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuICAgICAgICAgIDxoNSBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+RXNwbG9yYTwvaDU+XFxyXFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPkVzcGxvcmEgbWlnbGlhbGlhIGRpIGdpb2NoaSB0cmEgZ2xpIGFubnVuY2kgcHJlc2VudGk8L3A+XFxyXFxuICAgICAgICAgIDxocj5cXHJcXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cXFwiaW5zZXJ0aW9uc1xcXCIgY2xhc3M9XFxcImJ0biBidG4taW5mb1xcXCI+QW5udW5jaTwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgdGV4dC1iZy1zdWNjZXNzXFxcIiBzdHlsZT1cXFwid2lkdGg6IDE4cmVtO2hlaWdodDogMTAwJTtcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgPGg1IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5WZW5kaTwvaDU+XFxyXFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPkhhaSB1biBnaW9jbyBkaSBjdWkgbm9uIHRlIG5lIGZhaSBwacO5IG51bGxhIHBlciBsZSBtaWxpYXJkaSBkaSB2b2x0ZSBjaGUgbG8gaGFpIGZpbml0bz9cXHJcXG4gICAgICAgICAgICBpbnNlcmlzY2kgcXVpIGlsIHR1byBhbm51bmNpbyFcXHJcXG4gICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgICA8aHI+XFxyXFxuICAgICAgICAgIDxidXR0b24gaWQ9XFxcImluc2VydGlvbnNcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxpZ2h0XFxcIj5JbnNlcmlzY2kgQW5udW5jaW88L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxoMT5VbHRpbWkgYW5udW5jaTo8L2gxPlxcclxcbjxoMj5Db250cm9sbGEgcXVpIGdsaSB1bHRpbWkgYW5udW5jaTwvaDI+XFxyXFxuPGRpdiBpZD1cXFwiY2Fyb3VzZWxFeGFtcGxlQ29udHJvbHNcXFwiIGNsYXNzPVxcXCJjYXJvdXNlbCBzbGlkZVxcXCIgZGF0YS1icy1yaWRlPVxcXCJjYXJvdXNlbFxcXCI+XFxyXFxuICAgIDxkaXYgaWQ9XFxcImlubmVyQ2Fyb3VzZWxIb21lXFxcIiBjbGFzcz1cXFwiY2Fyb3VzZWwtaW5uZXJcXFwiPlxcclxcbiAgICAgICBcXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxidXR0b24gY2xhc3M9XFxcImNhcm91c2VsLWNvbnRyb2wtcHJldlxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRhcmdldD1cXFwiI2Nhcm91c2VsRXhhbXBsZUNvbnRyb2xzXFxcIiBkYXRhLWJzLXNsaWRlPVxcXCJwcmV2XFxcIj5cXHJcXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+UHJldmlvdXM8L3NwYW4+XFxyXFxuICAgIDwvYnV0dG9uPlxcclxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYXJvdXNlbC1jb250cm9sLW5leHRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10YXJnZXQ9XFxcIiNjYXJvdXNlbEV4YW1wbGVDb250cm9sc1xcXCIgZGF0YS1icy1zbGlkZT1cXFwibmV4dFxcXCI+XFxyXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPk5leHQ8L3NwYW4+XFxyXFxuICAgIDwvYnV0dG9uPlxcclxcbiAgPC9kaXY+XFxyXFxuXFxyXFxuXFxyXFxuPGgxPkNoaSBzaWFtbz88L2gxPlxcclxcbjxoMj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRWEgYWRpcGlzY2kgYXJjaGl0ZWN0byBsaWJlcm8gYWxpYXM/IE51bXF1YW0gYXRxdWUgYmVhdGFlIHF1aXMgYXNwZXJpb3JlcyBuZWNlc3NpdGF0aWJ1cyBlc3QgcXVvZCB2b2x1cHRhdGUgZXZlbmlldCBleGNlcHR1cmkgbW9sZXN0aWFzIGZ1Z2lhdCBub3N0cnVtIG5paGlsLCBlbGlnZW5kaSB2ZXJvLjwvaDI+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgPGxhYmVsIGZvcj1cXFwidXNlcm5hbWVTaWduSW5cXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5OaWNrbmFtZTwvbGFiZWw+XFxyXFxuICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwidXNlcm5hbWVTaWduSW5cXFwiPlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICA8bGFiZWwgZm9yPVxcXCJwYXNzd29yZFNpZ25JblxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPlBhc3N3b3JkPC9sYWJlbD5cXHJcXG4gICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwicGFzc3dvcmRTaWduSW5cXFwiPlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcIm1iLTMgZm9ybS1jaGVja1xcXCI+XFxyXFxuICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIGlkPVxcXCJyZW1lbWJlck1lU2lnbkluXFxcIj5cXHJcXG4gICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWxhYmVsXFxcIiBmb3I9XFxcInJlbWVtYmVyTWVTaWduSW5cXFwiPlJpY29yZGFtaTwvbGFiZWw+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBpZD1cXFwibG9naW5SZXN1bHRcXFwiIGNsYXNzPVxcXCJteS0zXFxcIj5cXHJcXG5cXHJcXG48L2Rpdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxidXR0b24gaWQ9XFxcInRyeVRvTG9nXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiPkFjY2VkaTwvYnV0dG9uPlxcclxcbjxwPk5vbiBzZWkgYW5jb3JhIHJlZ2lzdHJhdG8/PC9wPlxcclxcbjxidXR0b24gaWQ9XFxcImxvZ2luU2lnblVwXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiPlJlZ2lzdHJhdGk8L2J1dHRvbj5cXHJcXG48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiBkYXRhLWJzLWRpc21pc3M9XFxcIm1vZGFsXFxcIj5DaGl1ZGk8L2J1dHRvbj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgY2xhc3M9XFxcInRleHQtY2VudGVyIG1iLTNcXFwiPlxcclxcbiAgICA8aDM+T2gsIGNpIGRpc3BpYWNlIGNoZSB2YWkgdmlhITxicj5Ub3JuYSBhIHRyb3ZhcmNpITwvaDM+XFxyXFxuICAgIDxpbWcgc3JjPVxcXCIuL2ltZy9mYWRGYWNlLnBuZ1xcXCIgd2lkdGg9XFxcIjEwMFxcXCIgYWx0PVxcXCJpbW1hZ2luZSB0cmlzdGVcXFwiPlxcclxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgaWQ9XFxcIm15TW9kYWxcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJzaWduSW5Nb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctY2VudGVyZWRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVxcXCJtb2RhbC10aXRsZSBmcy01XFxcIiBpZD1cXFwic2lnbkluTW9kYWxMYWJlbFxcXCI+TWluY2hpYSBKb2hubnkgQ2FycmFiYmFnZ2lvPC9oMT5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4tY2xvc2VcXFwiIGRhdGEtYnMtZGlzbWlzcz1cXFwibW9kYWxcXFwiIGFyaWEtbGFiZWw9XFxcIkNsb3NlXFxcIj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGlkPVxcXCJteU1vZGFsQm9keVxcXCIgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGlkPVxcXCJteU1vZGFsRm9vdGVyXFxcIiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8IS0tbmF2YmFyIGNvbnRyb2xsZXIgaWNvbi0tPlxcclxcbjxidXR0b24gaWQ9XFxcImxvZ29cXFwiIGNsYXNzPVxcXCJsb2dvLWJ1dHRvblxcXCI+IDxpbWcgY2xhc3M9XFxcImxvZ29cXFwiIHNyYz1cXFwiLi9pbWcvbG9nby5wbmdcXFwiIGFsdD1cXFwibG9nb1xcXCI+PC9idXR0b24+XFxyXFxuXFxyXFxuPG5hdj5cXHJcXG4gIDx1bD5cXHJcXG4gICAgPCEtLW5hdmJhciBidXR0b25zLS0+XFxyXFxuICAgIDwhLS15IGJ1dHRvbi0tPlxcclxcbiAgICA8YnV0dG9uIGlkPVxcXCJpbnNlcnRpb25zXFxcIiBjbGFzcz1cXFwiYnV0dG9uLW9uZSBuYXYtYnV0dG9uXFxcIj5Bbm51bmNpPC9idXR0b24+XFxyXFxuICAgIDwhLS14IGJ1dHRvbi0tPlxcclxcbiAgICA8YnV0dG9uIGlkPVxcXCJtYW5hZ2VtZW50XFxcIiBjbGFzcz1cXFwiYnV0dG9uLXR3byBuYXYtYnV0dG9uXFxcIj5HZXN0aW9uZSBVdGVudGk8L2J1dHRvbj5cXHJcXG4gICAgPCEtLWEgYnV0dG9uLS0+XFxyXFxuICAgIDxidXR0b24gaWQ9XFxcImluc01hbmFnZW1lbnRcXFwiIGNsYXNzPVxcXCJidXR0b24tdGhyZWUgbmF2LWJ1dHRvblxcXCI+R2VzdGlvbmUgQW5udW5jaTwvYnV0dG9uPlxcclxcbiAgICA8IS0tYiBidXR0b24tLT5cXHJcXG4gICAgPGJ1dHRvbiBpZD1cXFwibG9naW5cXFwiIGNsYXNzPVxcXCJidXR0b24tZm91ciBuYXYtYnV0dG9uXFxcIiBkYXRhLWJzLXRvZ2dsZT1cXFwibW9kYWxcXFwiXFxyXFxuICAgICAgZGF0YS1icy10YXJnZXQ9XFxcIiNteU1vZGFsXFxcIj5Mb2dpbjwvYnV0dG9uPlxcclxcbiAgICA8IS0tYiBidXR0b24tLT5cXHJcXG4gICAgPGJ1dHRvbiBpZD1cXFwic2lnbk91dEJ1dHRvblxcXCIgY2xhc3M9XFxcImJ1dHRvbi1mb3VyIG5hdi1idXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJtb2RhbFxcXCJcXHJcXG4gICAgZGF0YS1icy10YXJnZXQ9XFxcIiNteU1vZGFsXFxcIj5Mb2dvdXQ8L2J1dHRvbj5cXHJcXG5cXHJcXG4gICAgPGJ1dHRvbiBpZD1cXFwicHJvZmlsZVxcXCIgY2xhc3M9XFxcInByb2ZpbGUtYnV0dG9uXFxcIj5cXHJcXG4gICAgICA8c3BhbiBjbGFzcz1cXFwicG9zaXRpb24tYWJzb2x1dGUgdG9wLTIgc3RhcnQtOTAgdHJhbnNsYXRlLW1pZGRsZSBwLTIgYmctZGFuZ2VyIGJvcmRlciBib3JkZXItbGlnaHQgcm91bmRlZC1jaXJjbGVcXFwiPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+TmV3IGFsZXJ0czwvc3Bhbj5cXHJcXG4gICAgICA8L3NwYW4+XFxyXFxuICAgICAgPGltZyBjbGFzcz1cXFwibG9nbyBwcm9maWxlXFxcIiBzcmM9XFxcIi4vaW1nL3Byb2ZpbGUucG5nXFxcIiBhbHQ9XFxcImxvZ29cXFwiPlxcclxcbiAgICA8L2J1dHRvbj5cXHJcXG4gIDwvdWw+XFxyXFxuPC9uYXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8aDE+VE9ETzogbW9zdHJhcmUgdHV0dGUgbGUgaW5mbyBkZWxsJ3V0ZW50ZTwvaDE+XFxyXFxuPGgxPlRPRE86IGZvcm0gbyBhbHRybyBwZXIgY2FtYmlhcmUgbmlja25hbWUgZS9vIHBhc3N3b3JkIGVjYzwvaDE+XFxyXFxuPGgxPlRPRE86IHBvc3NpYmlsaXTDoCBkaSBzY2VnbGllcmUgaSBnaW9jaGkgY2hlIHNpIHBvc3NpZWRvbm88L2gxPlxcclxcblwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGgxPlRPRE86IG1vc3RyYXJlIHR1dHRlIGxlIGluZm8gZGVsbCd1dGVudGU8L2gxPlxcclxcblwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGZvcm0+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwibmFtZVNpZ25VcFxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPk5vbWU8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJuYW1lU2lnblVwXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwic3VybmFtZVNpZ25VcFxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPkNvZ25vbWU8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJzdXJuYW1lU2lnblVwXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwidXNlcm5hbWVTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5OaWNrbmFtZTwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInVzZXJuYW1lU2lnblVwXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiZW1haWxTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5FbWFpbDwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJlbWFpbFNpZ25VcFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcInBhc3N3b3JkU2lnblVwXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+UGFzc3dvcmQ8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwicGFzc3dvcmRTaWduVXBcXFwiIHJlcXVpcmVkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJjb25maXJtX3Bhc3N3b3JkU2lnblVwXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+Q29uZmVybWEgUGFzc3dvcmQ8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiY29uZmlybV9wYXNzd29yZFNpZ25VcFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGlkPVxcXCJzaWduVXBSZXN1bHRcXFwiIGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9mb3JtPlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGJ1dHRvbiBpZD1cXFwic2lnblVwTG9naW5cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+QWNjZWRpPC9idXR0b24+XFxyXFxuPGJ1dHRvbiBpZD1cXFwidHJ5dG9TaWduVXBcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgZGlzYWJsZWQ+UmVnaXN0cmF0aTwvYnV0dG9uPlxcclxcbjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIGRhdGEtYnMtZGlzbWlzcz1cXFwibW9kYWxcXFwiPkNoaXVkaTwvYnV0dG9uPlwiOyIsImltcG9ydCBhbm51bmNpIGZyb20gJy4vYW5udW5jaS5odG1sJ1xyXG5cclxuaW1wb3J0IGNyZWFBbm51bmNpbyBmcm9tICcuLi9jcmVhQW5udW5jaW8vY3JlYUFubnVuY2lvLmh0bWwnXHJcbmltcG9ydCBpbnNlcnRpb24gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnNlcnRpb24nO1xyXG5pbXBvcnQgZXhwYW5kSW5zZXJ0aW9uIGZyb20gJy4vYW5udW5jaW8nXHJcbmltcG9ydCBjcmVhdGVJbnNlcnRpb24gZnJvbSAnLi4vY3JlYUFubnVuY2lvL2NyZWFBbm51bmNpbydcclxuXHJcbmxldCBsaXN0OiBpbnNlcnRpb25bXSA9IFtdO1xyXG5sZXQgdmlldzogbnVtYmVyID0gNlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhZ2UoKSB7ICAgICAgIC8qSW5pemlhbGl6emEgdHV0dG8gY2nDsiBjaGUgc2VydmUgYWxsYSBwYWdpbmEgcGVyIGZ1bnppb25hcmUgKi9cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0QWxsXCIpLm9uY2xpY2sgPSBzZWFyY2hCeUFsbDtcclxuICAgIGFzc2lnbkZpbHRlcnMoKTtcclxuICAgIGNyZWF0ZUluc2VydGlvbigpO1xyXG4gICAgZ2V0QWxsSW5zZXJ0aW9ucygpO1xyXG4gICAgY3JlYXRlUGFnaW5hdGlvbigpO1xyXG4gICAgc2hvd1Jlc3VsdHMoMSk7XHJcblxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2VhcmNoQnlBbGwoKSB7ICAgICAgICAgICAgIC8qTGEgZnVuemlvbmEgZGVsIGJvdHRvbmUgY2hlIGNlcmNhIHR1dHRpIGdsaSBhbm51bmNpIHNlbnphIGZpbHRyaSovXHJcbiAgICBnZXRBbGxJbnNlcnRpb25zKCk7XHJcbiAgICBjcmVhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICBzaG93UmVzdWx0cygxKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGFzc2lnbkZpbHRlcnMoKSB7ICAgICAgICAgICAgIC8qQXNzZWduYSBsZSBmdW56aW9uaSBhaSBwdWxzYW50aSBuZWxsZSBkcm9wRG93bkxpc3QgZGEgcHJvdmFyZSovXHJcbiAgICBsZXQgZ2VuZXJpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZW5yZXNcIikuY2hpbGRyZW5cclxuICAgIGZvciAobGV0IGcgb2YgZ2VuZXJpKSB7XHJcbiAgICAgICAgKGcgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNlYXJjaEJ5R2VucmUoZy5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IGFubmkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInllYXJzXCIpLmNoaWxkcmVuXHJcbiAgICBmb3IgKGxldCBhIG9mIGFubmkpIHtcclxuICAgICAgICAoYSBhcyBIVE1MQnV0dG9uRWxlbWVudCkub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2VhcmNoQnlZZWFyKE51bWJlcigoYSBhcyBIVE1MQnV0dG9uRWxlbWVudCkuaWQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNlYXJjaFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hUaXRsZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgc2VhcmNoVGl0bGUub25rZXlkb3duID0gKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXkgPT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICBzZWFyY2hCeVRpdGxlKHNlYXJjaFRpdGxlLnZhbHVlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEJ1dHRvblwiKTtcclxuICAgIHNlYXJjaEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNlYXJjaEJ5VGl0bGUoc2VhcmNoVGl0bGUudmFsdWUpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZWFyY2hCeVRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcclxuICAgIGxldCBmaWx0ZXJlZExpc3QgPSBbXVxyXG4gICAgZm9yIChsZXQgZWxlbWVudCBvZiBsaXN0KSB7XHJcbiAgICAgICAgbGV0IHRpdG9sbyA9IGVsZW1lbnQudGl0bGU7XHJcbiAgICAgICAgbGV0IGdhbWVOYW1lID0gZWxlbWVudC50cmFkZUdhbWUubmFtZVxyXG4gICAgICAgIGlmICgodGl0b2xvLnRvVXBwZXJDYXNlKCkuaW5jbHVkZXModGl0bGUudG9VcHBlckNhc2UoKSkpXHJcbiAgICAgICAgICAgIHx8IChnYW1lTmFtZS50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKHRpdGxlLnRvVXBwZXJDYXNlKCkpKSkge1xyXG4gICAgICAgICAgICBmaWx0ZXJlZExpc3QucHVzaChlbGVtZW50KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxpc3QgPSBbXTtcclxuICAgIGxpc3QgPSBmaWx0ZXJlZExpc3RcclxuICAgIGNyZWF0ZVBhZ2luYXRpb24oKTtcclxuICAgIHNob3dSZXN1bHRzKDEpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2VhcmNoQnlHZW5yZShnZW5yZTogU3RyaW5nKSB7XHJcbiAgICBjb25zb2xlLmxvZyhnZW5yZSk7XHJcbiAgICBsZXQgZmlsdGVyZWRMaXN0ID0gW11cclxuICAgIGZvciAobGV0IGVsZW1lbnQgb2YgbGlzdCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC50cmFkZUdhbWUuZ2VucmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudHJhZGVHYW1lLmdlbnJlW2ldLmdlbnJlID09IGdlbnJlKSB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZExpc3QucHVzaChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGk9ZWxlbWVudC50cmFkZUdhbWUuZ2VucmUubGVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGlzdCA9IFtdO1xyXG4gICAgbGlzdCA9IGZpbHRlcmVkTGlzdFxyXG4gICAgY3JlYXRlUGFnaW5hdGlvbigpO1xyXG4gICAgc2hvd1Jlc3VsdHMoMSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlYXJjaEJ5WWVhcih5ZWFyOiBudW1iZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKHllYXIpO1xyXG4gICAgbGV0IGZpbHRlcmVkTGlzdCA9IFtdO1xyXG4gICAgZm9yIChsZXQgZWxlbWVudCBvZiBsaXN0KSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQudHJhZGVHYW1lLnllYXIgPT0geWVhcikge1xyXG4gICAgICAgICAgICBmaWx0ZXJlZExpc3QucHVzaChlbGVtZW50KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxpc3QgPSBbXTtcclxuICAgIGxpc3QgPSBmaWx0ZXJlZExpc3RcclxuICAgIGNyZWF0ZVBhZ2luYXRpb24oKTtcclxuICAgIHNob3dSZXN1bHRzKDEpO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEFsbEluc2VydGlvbnMoKSB7IC8qIFF1ZXN0YSDDqCBzb2xvIHVuYSBwcm92YSwgc2NvbW1lbnRhcmUgbGEgZmV0Y2ggcGnDuSBnacO5ICovXHJcbiAgICBsaXN0ID0gW107XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHaW9jbzEgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL2kuZXRzeXN0YXRpYy5jb20vNjI3NzgwNC9yL2lsLzdkZjAwZS82OTc1NDYzNDAvaWxfMTE0MHhOLjY5NzU0NjM0MF9maXZzLmpwZ1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHaW9jbzIgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL3d3dy5tb2J5Z2FtZXMuY29tL2ltYWdlcy9jb3ZlcnMvbC8xNDQ0NS10aGUtbGVnZW5kLW9mLXplbGRhLW5lcy1mcm9udC1jb3Zlci5qcGdcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlR2lvY28zID0ge1xyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvaXQvYi9iMy9Qb2slQzMlQTltb25fR2lhbGxvLnBuZ1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHaW9jbzQgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL21ldGFsZ2Vhci5mYW5kb20uY29tL2l0L3dpa2kvTWV0YWxfR2Vhcj9maWxlPU1ldGFsX0dlYXIuanBnXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdhbGxlcnkxID0ge1xyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvaXQvdGh1bWIvNy83Ny9QaWthY2h1LnBuZy8xMDI0cHgtUGlrYWNodS5wbmdcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlR2FsbGVyeTIgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL3d3dy5wbmdtYXJ0LmNvbS9maWxlcy8xMS9Gcm9nLU1lbWUtUE5HLUhELnBuZ1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHYWxsZXJ5MyA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vbWVkaWEubGljZG4uY29tL2Rtcy9pbWFnZS9ENTYzNUFRSHczRTV5WXlYVEx3L3Byb2ZpbGUtZnJhbWVkcGhvdG8tc2hyaW5rXzgwMF84MDAvMC8xNjQ0NTE4OTE4NjA2P2U9MTY3NTYyMDAwMCZ2PWJldGEmdD14MVJuWHFXc0RXQU9WUVVYR0Z1ak1vZFhaaGlHVVFKdTBhNkZBc1pOM0xvXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnaW9jbzEgPSB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmFtZTogXCJTdXBlck1hcmlvXCIsXHJcbiAgICAgICAgZ2VucmU6IFt7Z2VucmU6IFwiUExBVEZPUk1cIn1dLFxyXG4gICAgICAgIHllYXI6IDE5ODUsXHJcbiAgICAgICAgY29uc29sZToge2NvbnNvbGU6IFwiTkVTXCJ9LFxyXG4gICAgICAgIGNvdmVyOiBpbWFnZUdpb2NvMVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdpb2NvMiA9IHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBuYW1lOiBcIlRoZSBMZWdlbmQgb2YgWmVsZGFcIixcclxuICAgICAgICBnZW5yZTogW3tnZW5yZTogXCJBVlZFTlRVUkFcIn1dLFxyXG4gICAgICAgIHllYXI6IDE5ODYsXHJcbiAgICAgICAgY29uc29sZToge2NvbnNvbGU6IFwiTkVTXCJ9LFxyXG4gICAgICAgIGNvdmVyOiBpbWFnZUdpb2NvMlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdpb2NvMyA9IHtcclxuICAgICAgICBpZDogMyxcclxuICAgICAgICBuYW1lOiBcIlBva2Vtb24gR2lhbGxvXCIsXHJcbiAgICAgICAgZ2VucmU6IFt7Z2VucmU6IFwiR0RSXCJ9XSxcclxuICAgICAgICB5ZWFyOiAxOTk4LFxyXG4gICAgICAgIGNvbnNvbGU6IHtjb25zb2xlOiBcIkdBTUVfQk9ZX0NPTE9SXCJ9LFxyXG4gICAgICAgIGNvdmVyOiBpbWFnZUdpb2NvM1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdpb2NvNCA9IHtcclxuICAgICAgICBpZDogNCxcclxuICAgICAgICBuYW1lOiBcIk1ldGFsIEdlYXJcIixcclxuICAgICAgICBnZW5yZTogW3tnZW5yZTogXCJTVEVBTFRIXCJ9XSxcclxuICAgICAgICB5ZWFyOiAxOTg3LFxyXG4gICAgICAgIGNvbnNvbGU6IHtjb25zb2xlOiBcIk5FU1wifSxcclxuICAgICAgICBjb3ZlcjogaW1hZ2VHaW9jbzRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwdWJsaXNoZXJHaW9jbzEgPSB7XHJcbiAgICAgICAgdXNlcklkOiAxLFxyXG4gICAgICAgIHVzZXJuYW1lOiBcIlBpZXJvYWZmb25kb1wiLFxyXG4gICAgICAgIG5hbWU6IFwiUGllcmlub1wiLFxyXG4gICAgICAgIHN1cm5hbWU6IFwiQ2ljY2lub1wiLFxyXG4gICAgICAgIGVtYWlsOiBcInBpZXJpbm9jdW9yaWNpbm9AYW1vcmluby5jb21cIixcclxuICAgICAgICByYXRpbmc6IDY2NixcclxuICAgICAgICB2aWRlb2dhbWVzOiBbZ2lvY28xXVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGluc2VydGlvbjE6IGluc2VydGlvbiA9IHtcclxuICAgICAgICBhcHByb3ZlZDogdHJ1ZSxcclxuICAgICAgICB0aXRsZTogXCJTY2FtYmlvIFN1cGVyTWFyaW9cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTY2FtYmlvIHN1cGVybWFyaW8geGvDqCBtaSBzb25vIHNla2thdG8gYSBnaW9jYXJjaVwiLFxyXG4gICAgICAgIHB1Ymxpc2hlcjogcHVibGlzaGVyR2lvY28xLFxyXG4gICAgICAgIGdhbGxlcnk6IFtpbWFnZUdhbGxlcnkxLCBpbWFnZUdhbGxlcnkyLCBpbWFnZUdhbGxlcnkzXSxcclxuICAgICAgICB0cmFkZUdhbWU6IGdpb2NvMSxcclxuICAgICAgICB3aXNoTGlzdDogW2dpb2NvMiwgZ2lvY28zLCBnaW9jbzRdLFxyXG4gICAgICAgIG91dGNvbWU6IFwiV0lQXCIsXHJcbiAgICAgICAgcHVibGljYXRpb25EYXRlOiBcIjI5LTAxLTIwMjNcIlxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI3OyBpKyspIHtcclxuICAgICAgICBpZiAoaSAhPSAxNykge1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goaW5zZXJ0aW9uMSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goaW5zZXJ0aW9uMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLypRVUVTVE8gRScgTEEgRlVOWklPTkUgR0lVU1RBIE5PTiBGQU1PIENIRSBTQkFHTElBVEUhICovXHJcblxyXG4gICAgLypGZXRjaCBhIGJhY2tlbmQgY29uIHR1dHRpIGdsaSBhbm51bmNpLCBhZ2dpb3JuYSBsYSBsaXN0YSBsaXN0Ki9cclxuICAgIC8vIGxpc3Q9W107XHJcbiAgICAvLyBmZXRjaCgnL1RpcG9Bbm51bmNpQ2hlbmVzbycpXHJcbiAgICAvLyAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC8vIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAvLyAgICAgZm9yKGxldCBkIG9mIGRhdGEpe1xyXG4gICAgLy8gICAgICAgICBsaXN0LnB1c2goZCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSk7XHJcbn1cclxuXHJcbi8qZGEgcXVpIGluIHBvaSBsZSBmdW56aW9uaSBzZXJ2b25vIGEgXHJcbmNyZWFyZSBsYSBwYWdpbmEgdW5hIHZvbHRhIGNsaWNjYXRvICBcclxuc3VsIGJvdHRvbmUgYW5udW5jaSBlIGEgcmljYXJpY2FybGUqL1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUGFnaW5hdGlvbigpIHtcclxuICAgIGxldCBzaXplOiBudW1iZXIgPSBsaXN0Lmxlbmd0aFxyXG4gICAgbGV0IHRhYnM6IG51bWJlciA9IE1hdGguY2VpbChzaXplIC8gdmlldyk7XHJcbiAgICBsZXQgcGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VzXCIpO1xyXG4gICAgcGFnZXMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRhYnM7IGkrKykge1xyXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBpZiAoaSA9PSAxKSB7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtIGFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIsIFwicGFnZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1saW5rXCIpO1xyXG4gICAgICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYWxsTGkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VzXCIpLmNoaWxkcmVuO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBvbmVMaSBvZiBhbGxMaSkge1xyXG4gICAgICAgICAgICAgICAgb25lTGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWl0ZW1cIik7XHJcbiAgICAgICAgICAgICAgICBvbmVMaS5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWl0ZW0gYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIiwgXCJwYWdlXCIpO1xyXG4gICAgICAgICAgICBzaG93UmVzdWx0cyhpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGJ0bi5pbm5lckhUTUwgPSBcIlwiICsgKGkpO1xyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlc1wiKS5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dSZXN1bHRzKGk6IG51bWJlcikge1xyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc2VydGlvbkNvbnRlbnRcIik7XHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBsZXQgc3RhcnQgPSAoaSAtIDEpICogdmlldztcclxuICAgIGxldCBzdG9wID0gKGkgKiB2aWV3KSAtIDE7XHJcbiAgICBmb3IgKHN0YXJ0OyBzdGFydCA8PSBzdG9wOyBzdGFydCsrKSB7XHJcbiAgICAgICAgaWYgKHN0YXJ0ID49IGxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbGlzdFtzdGFydF0uYXBwcm92ZWQpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgbGV0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICBjb2wuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb2wtNCB0ZXh0LWNlbnRlclwiKTtcclxuICAgICAgICBjb2wuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMilcIik7XHJcbiAgICAgICAgY29sLm9ubW91c2VvdmVyPSgpPT57XHJcbiAgICAgICAgICAgIGNvbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29sLm9ubW91c2VvdXQ9KCk9PntcclxuICAgICAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29sLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGV4cGFuZEluc2VydGlvbihsaXN0W3N0YXJ0XSlcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICAgICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XHJcbiAgICAgICAgbGV0IGdhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XHJcbiAgICAgICAgbGV0IGdlbnJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xyXG4gICAgICAgIGxldCB5ZWFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xyXG4gICAgICAgIGxldCBjb25zb2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xyXG4gICAgICAgIGxldCB0cmFkZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XHJcbiAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gbGlzdFtzdGFydF0udHJhZGVHYW1lLmNvdmVyLmxpbms7XHJcbiAgICAgICAgaW1hZ2Uud2lkdGggPSAyMDA7XHJcbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gbGlzdFtzdGFydF0udGl0bGU7XHJcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gbGlzdFtzdGFydF0uZGVzY3JpcHRpb247XHJcbiAgICAgICAgZ2FtZS5pbm5lckhUTUwgPSBsaXN0W3N0YXJ0XS50cmFkZUdhbWUubmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IobGV0IGk9IDA7IGk8bGlzdFtzdGFydF0udHJhZGVHYW1lLmdlbnJlLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgZ2VucmUuaW5uZXJIVE1MICs9IGxpc3Rbc3RhcnRdLnRyYWRlR2FtZS5nZW5yZVtpXS5nZW5yZSArIFwiIFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB5ZWFyLmlubmVySFRNTCA9IFwiXCIgKyBsaXN0W3N0YXJ0XS50cmFkZUdhbWUueWVhcjtcclxuXHJcbiAgICAgICAgY29uc29sZS5pbm5lckhUTUwgPSBsaXN0W3N0YXJ0XS50cmFkZUdhbWUuY29uc29sZS5jb25zb2xlO1xyXG5cclxuICAgICAgICB0cmFkZXMuaW5uZXJIVE1MID0gXCJBY2NldHRlcmVpIFNjYW1iaW8gY29uOiBcIiArIGxpc3Rbc3RhcnRdLndpc2hMaXN0WzBdLm5hbWU7XHJcbiAgICAgICAgZGF0ZS5pbm5lckhUTUw9IGxpc3Rbc3RhcnRdLnB1YmxpY2F0aW9uRGF0ZTtcclxuICAgICAgICBjb2wuYXBwZW5kKHRpdGxlLGltYWdlLGRlc2NyaXB0aW9uLGdhbWUsZ2VucmUseWVhcixjb25zb2xlLHRyYWRlcyxkYXRlKVxyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKGNvbCk7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQYWdlXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgaW5zZXJ0aW9uIGZyb20gJy4uL2ludGVyZmFjZXMvaW5zZXJ0aW9uJztcclxuaW1wb3J0IGFubnVuY2lvIGZyb20gJy4vYW5udW5jaW8uaHRtbCdcclxuaW1wb3J0IGNyZWF0ZVBhZ2UgZnJvbSAnLi9hbm51bmNpJztcclxuaW1wb3J0IGFubnVuY2kgZnJvbSAnLi9hbm51bmNpLmh0bWwnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXhwYW5kSW5zZXJ0aW9uKGluc2VydGlvbjogaW5zZXJ0aW9uKSB7XHJcblxyXG4gICAgLypJbXBvc3RvIGxhIHBhZ2luYSBwcmluY2lwYWxlIGNvbiBpbCB0ZW1wbGF0ZSBkZWwgc2luZ29sbyBhbm51bmNpbyAqL1xyXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XHJcbiAgICBtYWluLmlubmVySFRNTCA9IGFubnVuY2lvO1xyXG5cclxuICAgIC8qQ3JlbyB1biBwdWxzYW50ZSBwZXIgdG9ybmFyZSBhbGxhIGxpc3QgYW5udW5jaSBlIGlsIHRpdG9sbyAqL1xyXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG4gYnRuLXN1Y2Nlc3NcIik7XHJcbiAgICBidXR0b24uaW5uZXJIVE1MID0gXCJJbmRpZXRyb1wiXHJcbiAgICBidXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MID0gYW5udW5jaTtcclxuICAgICAgICBjcmVhdGVQYWdlKCk7XHJcbiAgICB9XHJcbiAgICBsZXQgYmFjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja1wiKVxyXG4gICAgYmFjay5hcHBlbmQoYnV0dG9uKTtcclxuXHJcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBpbnNlcnRpb24udGl0bGU7XHJcbiAgICBiYWNrLmFwcGVuZCh0aXRsZSk7XHJcblxyXG5cclxuXHJcbiAgICAvKkltcG9zdG8gaWwgY2Fyb3NlbGxvIGRlbGxlIGltbWFnaW5pIHV0ZW50ZSAqL1xyXG4gICAgbGV0IGluZGljYXRvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5kaWNhdG9yXCIpXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluc2VydGlvbi5nYWxsZXJ5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImRhdGEtYnMtdGFyZ2V0XCIsIFwiI2ltYWdlU2xpZGVyXCIpO1xyXG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLXNsaWRlLXRvXCIsIFwiXCIgKyBpKTtcclxuICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIFwiU2xpZGUgXCIgKyAoaSArIDEpKTtcclxuICAgICAgICBpbmRpY2F0b3IuYXBwZW5kKGJ0bik7XHJcbiAgICB9XHJcbiAgICBsZXQgaW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlubmVyXCIpXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnNlcnRpb24uZ2FsbGVyeS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2Fyb3VzZWwtaXRlbSBhY3RpdmVcIilcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJvdXNlbC1pdGVtXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGltZy5zcmMgPSBpbnNlcnRpb24uZ2FsbGVyeVtpXS5saW5rO1xyXG4gICAgICAgIGltZy53aWR0aCA9IDQwMDtcclxuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkLWJsb2NrIHctMTAwXCIpO1xyXG4gICAgICAgIGltZy5hbHQgPSBcIkdhbGxlcnkgSW1hZ2VcIiArIChpICsgMSlcclxuICAgICAgICBkaXYuYXBwZW5kKGltZyk7XHJcbiAgICAgICAgaW5uZXIuYXBwZW5kKGRpdilcclxuICAgIH1cclxuICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgaW1nLnNyYyA9IGluc2VydGlvbi50cmFkZUdhbWUuY292ZXIubGluaztcclxuICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImltZy1mbHVpZCByb3VuZGVkLXN0YXJ0XCIpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmQtaW1hZ2VcIikuYXBwZW5kKGltZyk7XHJcbiAgICBsZXQgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICBoNC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcmQtdGl0bGVcIik7XHJcbiAgICBoNC5pbm5lckhUTUwgPSBpbnNlcnRpb24udHJhZGVHYW1lLm5hbWU7XHJcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcmQtdGV4dFwiKTtcclxuICAgIHAuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJmb250LXNpemU6IDEuNWVtO1wiKVxyXG4gICAgcC5pbm5lckhUTUwgPSBcIkdlbmVyZTogXCI7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluc2VydGlvbi50cmFkZUdhbWUuZ2VucmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBwLmlubmVySFRNTCArPSBpbnNlcnRpb24udHJhZGVHYW1lLmdlbnJlW2ldLmdlbnJlICsgXCIgXCJcclxuICAgIH1cclxuICAgIHAuaW5uZXJIVE1MICs9IFwiPGJyPlwiXHJcbiAgICAgICAgKyBcIkFubm86IFwiICsgaW5zZXJ0aW9uLnRyYWRlR2FtZS55ZWFyICsgXCI8YnI+XCJcclxuICAgICAgICArIFwiQ29uc29sZTogXCIgKyBpbnNlcnRpb24udHJhZGVHYW1lLmNvbnNvbGUuY29uc29sZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZC1ib2R5XCIpLmFwcGVuZChoNCwgcCk7XHJcbiAgICBsZXQgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGRlc2MuaW5uZXJIVE1MID0gXCJEZXNjcml6aW9uZTpcIlxyXG4gICAgbGV0IGluc0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGluc0Rlc2MuaW5uZXJIVE1MID0gaW5zZXJ0aW9uLmRlc2NyaXB0aW9uO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnRpb24tY3JlYXRvclwiKS5pbm5lckhUTUwgPSBpbnNlcnRpb24ucHVibGlzaGVyLnVzZXJuYW1lO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnRpb24tZGVzY3JpcHRpb25cIikuYXBwZW5kKGRlc2MsIGluc0Rlc2MpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1pdGVtLVwiICsgKGkgKyAxKSkuaW5uZXJIVE1MID0gaW5zZXJ0aW9uLndpc2hMaXN0W2ldLm5hbWU7XHJcbiAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgaW1nLnNyYyA9IGluc2VydGlvbi53aXNoTGlzdFtpXS5jb3Zlci5saW5rO1xyXG4gICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcmQtaW1nLXRvcFwiKVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nLWl0ZW0tXCIgKyAoaSArIDEpKS5hcHBlbmQoaW1nKTtcclxuICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHAuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJkLXRleHRcIik7XHJcbiAgICAgICAgcC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImZvbnQtc2l6ZTogMS41ZW07XCIpO1xyXG4gICAgICAgIHAuaW5uZXJIVE1MID0gXCJHZW5lcmU6IFwiO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5zZXJ0aW9uLnRyYWRlR2FtZS5nZW5yZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBwLmlubmVySFRNTCArPSBpbnNlcnRpb24udHJhZGVHYW1lLmdlbnJlW2ldLmdlbnJlICsgXCIgXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgcC5pbm5lckhUTUwgKz0gXCI8YnI+XCJcclxuICAgICAgICAgICAgKyBcIkFubm86IFwiICsgaW5zZXJ0aW9uLnRyYWRlR2FtZS55ZWFyICsgXCI8YnI+XCJcclxuICAgICAgICAgICAgKyBcIkNvbnNvbGU6IFwiICsgaW5zZXJ0aW9uLnRyYWRlR2FtZS5jb25zb2xlLmNvbnNvbGU7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2R5LWl0ZW0tXCIgKyAoaSArIDEpKS5hcHBlbmQocCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGV4cGFuZEluc2VydGlvbiIsImltcG9ydCBnZXN0aW9uZWFubnVuY2kgZnJvbSAnLi9nZXN0aW9uZWFubnVuY2kuaHRtbCdcclxuXHJcbmltcG9ydCBjcmVhQW5udW5jaW8gZnJvbSAnLi4vY3JlYUFubnVuY2lvL2NyZWFBbm51bmNpby5odG1sJ1xyXG5pbXBvcnQgaW5zZXJ0aW9uIGZyb20gJy4uL2ludGVyZmFjZXMvaW5zZXJ0aW9uJztcclxuaW1wb3J0IGV4cGFuZEluc2VydGlvbiBmcm9tICcuL2FubnVuY2lvJ1xyXG5pbXBvcnQgY3JlYXRlSW5zZXJ0aW9uIGZyb20gJy4uL2NyZWFBbm51bmNpby9jcmVhQW5udW5jaW8nXHJcblxyXG5sZXQgbGlzdDogaW5zZXJ0aW9uW10gPSBbXTtcclxubGV0IHZpZXc6IG51bWJlciA9IDVcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQYWdlMigpIHsgICAgICAgLypJbml6aWFsaXp6YSB0dXR0byBjacOyIGNoZSBzZXJ2ZSBhbGxhIHBhZ2luYSBwZXIgZnVuemlvbmFyZSAqL1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3RBbGwyXCIpLm9uY2xpY2sgPSBzZWFyY2hCeUFsbDI7XHJcbiAgICBhc3NpZ25GaWx0ZXJzMigpO1xyXG4gICAgY3JlYXRlSW5zZXJ0aW9uKCk7XHJcbiAgICBnZXRBbGxJbnNlcnRpb25zMigpO1xyXG4gICAgY3JlYXRlUGFnaW5hdGlvbjIoKTtcclxuICAgIHNob3dSZXN1bHRzMigxKTtcclxuXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZWFyY2hCeUFsbDIoKSB7ICAgICAgICAgICAgIC8qTGEgZnVuemlvbmEgZGVsIGJvdHRvbmUgY2hlIGNlcmNhIHR1dHRpIGdsaSBhbm51bmNpIHNlbnphIGZpbHRyaSovXHJcbiAgICBnZXRBbGxJbnNlcnRpb25zMigpO1xyXG4gICAgY3JlYXRlUGFnaW5hdGlvbjIoKTtcclxuICAgIHNob3dSZXN1bHRzMigxKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGFzc2lnbkZpbHRlcnMyKCkgeyAgICAgICAgICAgICAvKkFzc2VnbmEgbGUgZnVuemlvbmkgYWkgcHVsc2FudGkgbmVsbGUgZHJvcERvd25MaXN0IGRhIHByb3ZhcmUqL1xyXG4gICAgbGV0IGdlbmVyaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2VucmVzMlwiKS5jaGlsZHJlblxyXG4gICAgZm9yIChsZXQgZyBvZiBnZW5lcmkpIHtcclxuICAgICAgICAoZyBhcyBIVE1MQnV0dG9uRWxlbWVudCkub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2VhcmNoQnlHZW5yZTIoZy5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IGFubmkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInllYXJzMlwiKS5jaGlsZHJlblxyXG4gICAgZm9yIChsZXQgYSBvZiBhbm5pKSB7XHJcbiAgICAgICAgKGEgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNlYXJjaEJ5WWVhcjIoTnVtYmVyKChhIGFzIEhUTUxCdXR0b25FbGVtZW50KS5pZCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgc2VhcmNoVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFRpdGxlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBzZWFyY2hUaXRsZS5vbmtleWRvd24gPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIHNlYXJjaEJ5VGl0bGUyKHNlYXJjaFRpdGxlLnZhbHVlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEJ1dHRvbjJcIik7XHJcbiAgICBzZWFyY2hCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBzZWFyY2hCeVRpdGxlMihzZWFyY2hUaXRsZS52YWx1ZSlcclxuICAgIH1cclxuICAgIGxldCBjYXRlZ29yeUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlQ2F0ZWdvcnlcIik7XHJcbiAgICBjYXRlZ29yeUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGNyZWF0ZUNhdGVnb3J5KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZWFyY2hCeVRpdGxlMih0aXRsZTogc3RyaW5nKSB7XHJcbiAgICBsZXQgZmlsdGVyZWRMaXN0ID0gW11cclxuICAgIGZvciAobGV0IGVsZW1lbnQgb2YgbGlzdCkge1xyXG4gICAgICAgIGxldCB0aXRvbG8gPSBlbGVtZW50LnRpdGxlO1xyXG4gICAgICAgIGxldCBnYW1lTmFtZSA9IGVsZW1lbnQudHJhZGVHYW1lLm5hbWVcclxuICAgICAgICBpZiAoKHRpdG9sby50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKHRpdGxlLnRvVXBwZXJDYXNlKCkpKVxyXG4gICAgICAgICAgICB8fCAoZ2FtZU5hbWUudG9VcHBlckNhc2UoKS5pbmNsdWRlcyh0aXRsZS50b1VwcGVyQ2FzZSgpKSkpIHtcclxuICAgICAgICAgICAgZmlsdGVyZWRMaXN0LnB1c2goZWxlbWVudClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsaXN0ID0gW107XHJcbiAgICBsaXN0ID0gZmlsdGVyZWRMaXN0XHJcbiAgICBjcmVhdGVQYWdpbmF0aW9uMigpO1xyXG4gICAgc2hvd1Jlc3VsdHMyKDEpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2VhcmNoQnlHZW5yZTIoZ2VucmU6IFN0cmluZykge1xyXG4gICAgY29uc29sZS5sb2coZ2VucmUpO1xyXG4gICAgbGV0IGZpbHRlcmVkTGlzdCA9IFtdXHJcbiAgICBmb3IgKGxldCBlbGVtZW50IG9mIGxpc3QpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQudHJhZGVHYW1lLmdlbnJlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRyYWRlR2FtZS5nZW5yZVtpXS5nZW5yZSA9PSBnZW5yZSkge1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyZWRMaXN0LnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBpPWVsZW1lbnQudHJhZGVHYW1lLmdlbnJlLmxlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxpc3QgPSBbXTtcclxuICAgIGxpc3QgPSBmaWx0ZXJlZExpc3RcclxuICAgIGNyZWF0ZVBhZ2luYXRpb24yKCk7XHJcbiAgICBzaG93UmVzdWx0czIoMSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlYXJjaEJ5WWVhcjIoeWVhcjogbnVtYmVyKSB7XHJcbiAgICBjb25zb2xlLmxvZyh5ZWFyKTtcclxuICAgIGxldCBmaWx0ZXJlZExpc3QgPSBbXTtcclxuICAgIGZvciAobGV0IGVsZW1lbnQgb2YgbGlzdCkge1xyXG4gICAgICAgIGlmIChlbGVtZW50LnRyYWRlR2FtZS55ZWFyID09IHllYXIpIHtcclxuICAgICAgICAgICAgZmlsdGVyZWRMaXN0LnB1c2goZWxlbWVudClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsaXN0ID0gW107XHJcbiAgICBsaXN0ID0gZmlsdGVyZWRMaXN0XHJcbiAgICBjcmVhdGVQYWdpbmF0aW9uMigpO1xyXG4gICAgc2hvd1Jlc3VsdHMyKDEpO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEFsbEluc2VydGlvbnMyKCkgeyAvKiBRdWVzdGEgw6ggc29sbyB1bmEgcHJvdmEsIHNjb21tZW50YXJlIGxhIGZldGNoIHBpw7kgZ2nDuSAqL1xyXG4gICAgbGlzdCA9IFtdO1xyXG5cclxuICAgIGNvbnN0IGltYWdlR2lvY28xID0ge1xyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9pLmV0c3lzdGF0aWMuY29tLzYyNzc4MDQvci9pbC83ZGYwMGUvNjk3NTQ2MzQwL2lsXzExNDB4Ti42OTc1NDYzNDBfZml2cy5qcGdcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlR2lvY28yID0ge1xyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cubW9ieWdhbWVzLmNvbS9pbWFnZXMvY292ZXJzL2wvMTQ0NDUtdGhlLWxlZ2VuZC1vZi16ZWxkYS1uZXMtZnJvbnQtY292ZXIuanBnXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdpb2NvMyA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2l0L2IvYjMvUG9rJUMzJUE5bW9uX0dpYWxsby5wbmdcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlR2lvY280ID0ge1xyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9tZXRhbGdlYXIuZmFuZG9tLmNvbS9pdC93aWtpL01ldGFsX0dlYXI/ZmlsZT1NZXRhbF9HZWFyLmpwZ1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHYWxsZXJ5MSA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2l0L3RodW1iLzcvNzcvUGlrYWNodS5wbmcvMTAyNHB4LVBpa2FjaHUucG5nXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdhbGxlcnkyID0ge1xyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cucG5nbWFydC5jb20vZmlsZXMvMTEvRnJvZy1NZW1lLVBORy1IRC5wbmdcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlR2FsbGVyeTMgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL21lZGlhLmxpY2RuLmNvbS9kbXMvaW1hZ2UvRDU2MzVBUUh3M0U1eVl5WFRMdy9wcm9maWxlLWZyYW1lZHBob3RvLXNocmlua184MDBfODAwLzAvMTY0NDUxODkxODYwNj9lPTE2NzU2MjAwMDAmdj1iZXRhJnQ9eDFSblhxV3NEV0FPVlFVWEdGdWpNb2RYWmhpR1VRSnUwYTZGQXNaTjNMb1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2lvY28xID0ge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5hbWU6IFwiU3VwZXJNYXJpb1wiLFxyXG4gICAgICAgIGdlbnJlOiBbe2dlbnJlOiBcIlBMQVRGT1JNXCJ9XSxcclxuICAgICAgICB5ZWFyOiAxOTg1LFxyXG4gICAgICAgIGNvbnNvbGU6IHtjb25zb2xlOiBcIk5FU1wifSxcclxuICAgICAgICBjb3ZlcjogaW1hZ2VHaW9jbzFcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnaW9jbzIgPSB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogXCJUaGUgTGVnZW5kIG9mIFplbGRhXCIsXHJcbiAgICAgICAgZ2VucmU6IFt7Z2VucmU6IFwiQVZWRU5UVVJBXCJ9XSxcclxuICAgICAgICB5ZWFyOiAxOTg2LFxyXG4gICAgICAgIGNvbnNvbGU6IHtjb25zb2xlOiBcIk5FU1wifSxcclxuICAgICAgICBjb3ZlcjogaW1hZ2VHaW9jbzJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnaW9jbzMgPSB7XHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgbmFtZTogXCJQb2tlbW9uIEdpYWxsb1wiLFxyXG4gICAgICAgIGdlbnJlOiBbe2dlbnJlOiBcIkdEUlwifV0sXHJcbiAgICAgICAgeWVhcjogMTk5OCxcclxuICAgICAgICBjb25zb2xlOiB7Y29uc29sZTogXCJHQU1FX0JPWV9DT0xPUlwifSxcclxuICAgICAgICBjb3ZlcjogaW1hZ2VHaW9jbzNcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnaW9jbzQgPSB7XHJcbiAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgbmFtZTogXCJNZXRhbCBHZWFyXCIsXHJcbiAgICAgICAgZ2VucmU6IFt7Z2VucmU6IFwiU1RFQUxUSFwifV0sXHJcbiAgICAgICAgeWVhcjogMTk4NyxcclxuICAgICAgICBjb25zb2xlOiB7Y29uc29sZTogXCJORVNcIn0sXHJcbiAgICAgICAgY292ZXI6IGltYWdlR2lvY280XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHVibGlzaGVyR2lvY28xID0ge1xyXG4gICAgICAgIHVzZXJJZDogMSxcclxuICAgICAgICB1c2VybmFtZTogXCJQaWVyb2FmZm9uZG9cIixcclxuICAgICAgICBuYW1lOiBcIlBpZXJpbm9cIixcclxuICAgICAgICBzdXJuYW1lOiBcIkNpY2Npbm9cIixcclxuICAgICAgICBlbWFpbDogXCJwaWVyaW5vY3VvcmljaW5vQGFtb3Jpbm8uY29tXCIsXHJcbiAgICAgICAgcmF0aW5nOiA2NjYsXHJcbiAgICAgICAgdmlkZW9nYW1lczogW2dpb2NvMV1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbnNlcnRpb24xOiBpbnNlcnRpb24gPSB7XHJcbiAgICAgICAgYXBwcm92ZWQ6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IFwiU2NhbWJpbyBTdXBlck1hcmlvXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiU2NhbWJpbyBzdXBlcm1hcmlvIHhrw6ggbWkgc29ubyBzZWtrYXRvIGEgZ2lvY2FyY2lcIixcclxuICAgICAgICBwdWJsaXNoZXI6IHB1Ymxpc2hlckdpb2NvMSxcclxuICAgICAgICBnYWxsZXJ5OiBbaW1hZ2VHYWxsZXJ5MSwgaW1hZ2VHYWxsZXJ5MiwgaW1hZ2VHYWxsZXJ5M10sXHJcbiAgICAgICAgdHJhZGVHYW1lOiBnaW9jbzEsXHJcbiAgICAgICAgd2lzaExpc3Q6IFtnaW9jbzIsIGdpb2NvMywgZ2lvY280XSxcclxuICAgICAgICBvdXRjb21lOiBcIldJUFwiLFxyXG4gICAgICAgIHB1YmxpY2F0aW9uRGF0ZTogXCIyOS0wMS0yMDIzXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbnNlcnRpb24yOiBpbnNlcnRpb24gPSB7XHJcbiAgICAgICAgYXBwcm92ZWQ6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IFwiU2NhbWJpbyBaZWxkYVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlNjYW1iaW8gemVsZGEgeGvDqCBtaSBzb25vIHNla2thdG8gYSBnaW9jYXJjaVwiLFxyXG4gICAgICAgIHB1Ymxpc2hlcjogcHVibGlzaGVyR2lvY28xLFxyXG4gICAgICAgIGdhbGxlcnk6IFtpbWFnZUdhbGxlcnkxLCBpbWFnZUdhbGxlcnkyLCBpbWFnZUdhbGxlcnkzXSxcclxuICAgICAgICB0cmFkZUdhbWU6IGdpb2NvMixcclxuICAgICAgICB3aXNoTGlzdDogW2dpb2NvMSwgZ2lvY28zLCBnaW9jbzRdLFxyXG4gICAgICAgIG91dGNvbWU6IFwiV0lQXCIsXHJcbiAgICAgICAgcHVibGljYXRpb25EYXRlOiBcIjMwLTAxLTIwMjNcIlxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI3OyBpKyspIHtcclxuICAgICAgICBpZiAoaSAhPSAyKSB7XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChpbnNlcnRpb24xKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChpbnNlcnRpb24yKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKlFVRVNUTyBFJyBMQSBGVU5aSU9ORSBHSVVTVEEgTk9OIEZBTU8gQ0hFIFNCQUdMSUFURSEgKi9cclxuXHJcbiAgICAvKkZldGNoIGEgYmFja2VuZCBjb24gdHV0dGkgZ2xpIGFubnVuY2ksIGFnZ2lvcm5hIGxhIGxpc3RhIGxpc3QqL1xyXG4gICAgLy8gbGlzdD1bXTtcclxuICAgIC8vIGZldGNoKCcvVGlwb0FubnVuY2lDaGVuZXNvJylcclxuICAgIC8vIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLy8gLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIC8vICAgICBmb3IobGV0IGQgb2YgZGF0YSl7XHJcbiAgICAvLyAgICAgICAgIGxpc3QucHVzaChkKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9KTtcclxufVxyXG5cclxuLypkYSBxdWkgaW4gcG9pIGxlIGZ1bnppb25pIHNlcnZvbm8gYSBcclxuY3JlYXJlIGxhIHBhZ2luYSB1bmEgdm9sdGEgY2xpY2NhdG8gIFxyXG5zdWwgYm90dG9uZSBhbm51bmNpIGUgYSByaWNhcmljYXJsZSovXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQYWdpbmF0aW9uMigpIHtcclxuICAgIGxldCBzaXplOiBudW1iZXIgPSBsaXN0Lmxlbmd0aFxyXG4gICAgbGV0IHRhYnM6IG51bWJlciA9IE1hdGguY2VpbChzaXplIC8gdmlldyk7XHJcbiAgICBsZXQgcGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VzMlwiKTtcclxuICAgIHBhZ2VzLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0YWJzOyBpKyspIHtcclxuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgaWYgKGkgPT0gMSkge1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbSBhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiLCBcInBhZ2VcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWl0ZW1cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtbGlua1wiKTtcclxuICAgICAgICBidG4ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGFsbExpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlczJcIikuY2hpbGRyZW47XHJcbiAgICAgICAgICAgIGZvciAobGV0IG9uZUxpIG9mIGFsbExpKSB7XHJcbiAgICAgICAgICAgICAgICBvbmVMaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbVwiKTtcclxuICAgICAgICAgICAgICAgIG9uZUxpLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbSBhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiLCBcInBhZ2VcIik7XHJcbiAgICAgICAgICAgIHNob3dSZXN1bHRzMihpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGJ0bi5pbm5lckhUTUwgPSBcIlwiICsgKGkpO1xyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlczJcIikuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93UmVzdWx0czIoaTogbnVtYmVyKSB7XHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zZXJ0aW9uQ29udGVudDJcIik7XHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBsZXQgc3RhcnQgPSAoaSAtIDEpICogdmlldztcclxuICAgIGxldCBzdG9wID0gKGkgKiB2aWV3KSAtIDE7XHJcbiAgICBmb3IgKHN0YXJ0OyBzdGFydCA8PSBzdG9wOyBzdGFydCsrKSB7XHJcbiAgICAgICAgaWYgKHN0YXJ0ID49IGxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbGlzdFtzdGFydF0uYXBwcm92ZWQpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxyXG4gICAgICAgIGxpLm9uY2xpY2sgPSAoKSA9PiB7YWRkSW5zZXJ0aW9uVG9MaXN0KGxpc3Rbc3RhcnRdKX07XHJcbiAgICAgICAgbGkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsaXN0LWdyb3VwLWl0ZW0nKTtcclxuICAgICAgICAvL2dsaSBpZCBkZXZvbm8gZXNzZXJlIGRpdmVyc2lcclxuICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoJ2lkJywgbGlzdFtzdGFydF0udGl0bGUpO1xyXG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZSgnb25tb3VzZW92ZXInLCBcInNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGlzdC1ncm91cC1pdGVtIGFjdGl2ZScpXCIpO1xyXG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZSgnb25tb3VzZW91dCcsIFwic2V0QXR0cmlidXRlKCdjbGFzcycsICdsaXN0LWdyb3VwLWl0ZW0nKVwiKTtcclxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gbGlzdFtzdGFydF0udGl0bGU7XHJcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gXCJcIiArIGxpc3Rbc3RhcnRdLnRyYWRlR2FtZS5uYW1lO1xyXG4gICAgICAgIGZvcihsZXQgaT0gMDsgaTxsaXN0W3N0YXJ0XS50cmFkZUdhbWUuZ2VucmUubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgKz0gXCIsIFwiICsgbGlzdFtzdGFydF0udHJhZGVHYW1lLmdlbnJlW2ldLmdlbnJlICsgXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MICs9IFwiLCBcIiArIGxpc3Rbc3RhcnRdLnRyYWRlR2FtZS55ZWFyO1xyXG5cclxuICAgICAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgKz0gXCIsIFwiICsgbGlzdFtzdGFydF0udHJhZGVHYW1lLmNvbnNvbGUuY29uc29sZTtcclxuXHJcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZChsaSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaG8gYXBwZXNvXCIgKyBzdGFydCk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGFnZTJcclxuXHJcbmxldCBjaGVja2VkTGlzdDogaW5zZXJ0aW9uW10gPSBbXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRJbnNlcnRpb25Ub0xpc3QoaW5zZXJ0aW9uOiBpbnNlcnRpb24pe1xyXG5cclxuICAgIC8qVE9ETzogTWV0dGVyZSBsJ2luc2VyemlvbmUgaW4gdW5hIGxpc3RhLCBpbXBvc3RhcmUgaWwgYm90dG9uZVxyXG4gICAgYmx1IGUgcG9pIGFsIGNsaWNrIGRlbCBib3R0b25lICdjcmVhIGNhdGVnb3JpYScgaW5zZXJpcmUgbGEgbGlzdGEgaW5cclxuICAgIHVuYSBjYXRlZ29yaWEgZSBzdnVvdGFyZSBsYSBsaXN0YSAqL1xyXG5cclxuICAgIGxldCBpc09uQ2hlY2tlZExpc3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBmb3IobGV0IGVsZW1lbnQgb2YgY2hlY2tlZExpc3Qpe1xyXG4gICAgICAgIGlmKGluc2VydGlvbj09ZWxlbWVudCl7XHJcbiAgICAgICAgICAgIGlzT25DaGVja2VkTGlzdCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNoZWNrZWRMaXN0LnNwbGljZShjaGVja2VkTGlzdC5pbmRleE9mKGVsZW1lbnQpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9nbGkgaWQgZGV2b25vIGVzc2VyZSBkaXZlcnNpIGRhbCB0aXRvbG9cclxuXHJcbiAgICBsZXQgaWRFbGVtZW50ID0gYCR7aW5zZXJ0aW9uLnRpdGxlfWA7XHJcblxyXG4gICAgaWYoaXNPbkNoZWNrZWRMaXN0KXtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZEVsZW1lbnQpLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZEVsZW1lbnQpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGlzdC1ncm91cC1pdGVtJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWRFbGVtZW50KS5zZXRBdHRyaWJ1dGUoJ29ubW91c2VvdmVyJywgXCJzZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpc3QtZ3JvdXAtaXRlbSBhY3RpdmUnKVwiKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZEVsZW1lbnQpLnNldEF0dHJpYnV0ZSgnb25tb3VzZW91dCcsIFwic2V0QXR0cmlidXRlKCdjbGFzcycsICdsaXN0LWdyb3VwLWl0ZW0nKVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2hlY2tlZExpc3QucHVzaChpbnNlcnRpb24pO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkRWxlbWVudCkucmVtb3ZlQXR0cmlidXRlKCdvbm1vdXNlb3ZlcicpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkRWxlbWVudCkucmVtb3ZlQXR0cmlidXRlKCdvbm1vdXNlb3V0Jyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWRFbGVtZW50KS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpc3QtZ3JvdXAtaXRlbSBhY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYXRlZ29yeSgpe1xyXG5cclxuICAgIC8vVE9ETzogaW5zZXJpc2NpIGdsaSBlbGVtZW50aSBkaSBjaGVja2VkTGlzdCBpbiB1bmEgY2F0ZWdvcmlhIG5lbCBEQlxyXG5cclxuICAgIC8vTWV0b2RvIGRhIGZhcmUgaGFoYVxyXG5cclxuICAgIC8vU3Z1b3RhIGNoZWNrZWRMaXN0IGUgcmltZXR0ZSBpIGJvdHRvbmkgYSBwb3N0b1xyXG4gICAgZm9yKGxldCBlbGVtZW50IG9mIGNoZWNrZWRMaXN0KXtcclxuICAgICAgICBhZGRJbnNlcnRpb25Ub0xpc3QoZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tlZExpc3QgPSBbXTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IGNyZWFBbm51bmNpbyBmcm9tICcuL2NyZWFBbm51bmNpby5odG1sJ1xyXG5pbXBvcnQgYW5udW5jaSBmcm9tICcuL2FubnVuY2kuaHRtbCdcclxuaW1wb3J0IHZpZGVvZ2FtZSBmcm9tICcuLi9pbnRlcmZhY2VzL3ZpZGVvZ2FtZSc7XHJcblxyXG5sZXQgZnVsbExpc3Q6dmlkZW9nYW1lW109W11cclxubGV0IHVzZXJMaXN0OnZpZGVvZ2FtZVtdPVtdXHJcbmxldCB3aXNoTGlzdDpzdHJpbmdbXT1bXVxyXG5sZXQgZ2lvY29EYVNjYW1iaWFyZTogc3RyaW5nO1xyXG5sZXQgaW5kZXg9MDtcclxuXHJcbiAgICAvKkNlcmNvIHR1dHRpIGkgZ2lvY2hpICovXHJcbi8qZnVuY3Rpb24gZ2V0QWxsR2FtZXMoKXtcclxuICAgZnVsbExpc3Q9W107XHJcbiAgICBmZXRjaChcIi92aWRlb2dhbWVzXCIpXHJcbiAgICAudGhlbigocmVzcG9uc2UpPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKHZpZGVvZ2FtZXMpPT57XHJcbiAgICAgICAgZm9yKGxldCBnYW1lIG9mIHZpZGVvZ2FtZXMpe1xyXG4gICAgICAgICAgICBmdWxsTGlzdC5wdXNoKGdhbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuICAqLyAgIC8qQ2VyY28gdHV0dGkgaSBnaW9jaGkgcG9zc2VkdXRpIGRhbGwndXRlbnRlKi9cclxuLypmdW5jdGlvbiBnZXRVc2VyR2FtZXMoKXtcclxuICAgIHVzZXJMaXN0PVtdO1xyXG4gICAgZmV0Y2goXCIvdmlkZW9nYW1lcy91c2VyXCIpXHJcbiAgICAudGhlbigocmVzcG9uc2UpPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKHZpZGVvZ2FtZXMpPT57XHJcbiAgICAgICAgZm9yKGxldCBnYW1lIG9mIHZpZGVvZ2FtZXMpe1xyXG4gICAgICAgICAgICB1c2VyTGlzdC5wdXNoKGdhbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuKi9cclxuXHJcbi8qIE1vc3RyYSBpIGdpb2NoaSBzY2VsdGkgZGFsbCd1dGVudGUgcGVyIGxvIHNjYW1iaW8qL1xyXG5mdW5jdGlvbiBzaG93U2VsZWN0ZWRHYW1lcygpe1xyXG4gICAgbGV0IHNlbGVjdGVkR2FtZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdGVkR2FtZXNcIik7XHJcbiAgICBzZWxlY3RlZEdhbWVzLmlubmVySFRNTD1cIlwiO1xyXG4gICAgZm9yKGxldCBpPTA7IGk8d2lzaExpc3QubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBsaS5pbm5lckhUTUw9d2lzaExpc3RbaV07XHJcbiAgICAgICAgc2VsZWN0ZWRHYW1lcy5hcHBlbmQobGkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiAvKkNyZWEgbGEgbGlzdGEgZGVpIGdpb2NoaSBwb3NzZWR1dGkgZGFsbCd1dGVudGUgKi9cclxuZnVuY3Rpb24gY3JlYXRlSW5zZXJ0aW9uUGFnZSgpe1xyXG4gICAgbGV0IHRyYWRlR2FtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhZGVHYW1lXCIpO1xyXG4gICAgdHJhZGVHYW1lLmlubmVySFRNTD1cIlwiO1xyXG4gICAgZm9yKGxldCBnYW1lIG9mIHVzZXJMaXN0KXtcclxuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkcm9wZG93bi1pdGVtXCIpO1xyXG4gICAgICAgIGxpLmlubmVySFRNTD1nYW1lLm5hbWU7XHJcbiAgICAgICAgbGkub25jbGljaz0oKT0+e1xyXG4gICAgICAgICAgICBnaW9jb0RhU2NhbWJpYXJlPWxpLmlubmVySFRNTDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJhZGVHYW1lLmFwcGVuZChsaSk7XHJcbiAgICB9XHJcblxyXG4gICAgLypDcmVhIGxhIGxpc3RhIGRlaSAzIGdpb2NoaSBjaGUgbCd1dGVudGUgdm9ycmViYmUgc2NhbWJpYXJlICovXHJcbiAgICBsZXQgd2lzaEdhbWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aXNoR2FtZXNcIik7XHJcbiAgICB3aXNoR2FtZXMuaW5uZXJIVE1MPVwiXCI7XHJcbiAgICBmb3IobGV0IGdhbWUgb2YgZnVsbExpc3Qpe1xyXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRyb3Bkb3duLWl0ZW1cIik7XHJcbiAgICAgICAgbGkuaW5uZXJIVE1MPWdhbWUubmFtZTtcclxuICAgICAgICBsaS5vbmNsaWNrPSgpPT57ICAgIFxyXG4gICAgICAgICAgICBsZXQgdGVzdDpib29sZWFuPXRydWU7XHJcblxyXG4gICAgICAgICAgICBpZih3aXNoTGlzdC5sZW5ndGg9PTMpe1xyXG4gICAgICAgICAgICAgICAgd2lzaExpc3Q9W107XHJcbiAgICAgICAgICAgICAgICBpbmRleD0wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvcihsZXQgZWxlbWVudCBvZiB3aXNoTGlzdCl7XHJcbiAgICAgICAgICAgICAgICBpZihlbGVtZW50PT1saS5pbm5lckhUTUwpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRlc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih0ZXN0KXtcclxuICAgICAgICAgICAgICAgIHdpc2hMaXN0W2luZGV4XT1saS5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBzaG93U2VsZWN0ZWRHYW1lcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aXNoR2FtZXMuYXBwZW5kKGxpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUluc2VydGlvbigpe1xyXG4gICAgLy9nZXRBbGxHYW1lcygpO1xyXG4gICAgLy9nZXRVc2VyR2FtZXMoKTtcclxuICAgIFxyXG4gICAgbGV0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkSW5zZXJ0aW9uXCIpO1xyXG4gICAgYnRuLm9uY2xpY2s9KCk9PntcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MPWNyZWFBbm51bmNpbztcclxuICAgICAgICBjcmVhdGVJbnNlcnRpb25QYWdlKCk7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVJbnNlcnRpb247IiwiaW1wb3J0IGRpdiBmcm9tICcuL2Zvb3Rlci5odG1sJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb3QoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvb3RlclwiKS5pbm5lckhUTUwgPSBkaXY7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvdDsiLCJpbXBvcnQgZ2VzdGlvbmVVdGVudGkgZnJvbSAnLi9nZXN0aW9uZVV0ZW50aS5odG1sJ1xyXG5pbXBvcnQgdXNlckludCBmcm9tICcuLi9pbnRlcmZhY2VzL3VzZXInO1xyXG5pbXBvcnQgc2hvd1VzZXJQcm9maWxlIGZyb20gJy4uL3Byb2ZpbG9VdGVudGUvc2hvd1Byb2ZpbGUnO1xyXG5cclxubGV0IHVzZXJzOiB1c2VySW50W10gPSBbXTtcclxubGV0IHZpZXcgPSA1O1xyXG5cclxuZnVuY3Rpb24gc2hvd1VzZXJzKG51bTogbnVtYmVyKSB7XHJcbiAgICBsZXQgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlckxpc3RcIik7XHJcbiAgICBsaXN0LmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IChudW0gLSAxKSAqIHZpZXc7IGkgPCBudW0gKiB2aWV3OyBpKyspIHtcclxuICAgICAgICBpZiAoaSA+PSB1c2Vycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgbGV0IGJ0bl9wcm9maWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBidG5fcHJvZmlsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ0blwiKTtcclxuICAgICAgICBidG5fcHJvZmlsZS5vbmNsaWNrID0gc2hvd1VzZXJQcm9maWxlO1xyXG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGlzdC1ncm91cC1pdGVtJyk7XHJcbiAgICAgICAgbGkuc2V0QXR0cmlidXRlKCdvbm1vdXNlb3ZlcicsIFwic2V0QXR0cmlidXRlKCdjbGFzcycsICdsaXN0LWdyb3VwLWl0ZW0gYWN0aXZlJylcIik7XHJcbiAgICAgICAgbGkuc2V0QXR0cmlidXRlKCdvbm1vdXNlb3V0JywgXCJzZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpc3QtZ3JvdXAtaXRlbScpXCIpO1xyXG4gICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZsb2F0LWVuZFwiKTtcclxuICAgICAgICBsZXQgYnRuX2JhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgbGV0IGJ0bl9hZG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ0bl9iYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG4gYnRuLWRhbmdlciBidG4tc21cIik7XHJcbiAgICAgICAgYnRuX2FkbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ0biBidG4tc3VjY2VzcyBidG4tc21cIik7XHJcbiAgICAgICAgYnRuX2Jhbi5pbm5lckhUTUwgPSBcIkJhbm5hXCI7XHJcbiAgICAgICAgYnRuX2FkbS5pbm5lckhUTUwgPSBcIlJlbmRpIEFkbWluXCI7XHJcbiAgICAgICAgYnRuX2Jhbi5vbmNsaWNrID0gKCkgPT4geyBraWNrSGlzQXNzT3V0T2ZUaGlzU2l0ZSh1c2Vyc1tpXS51c2VySWQpfTtcclxuICAgICAgICBidG5fYWRtLm9uY2xpY2sgPSAoKSA9PiB7IG1ha2VIaW1BZG1pbih1c2Vyc1tpXS51c2VySWQpIH07XHJcbiAgICAgICAgc3Bhbi5hcHBlbmQoYnRuX2FkbSwgYnRuX2Jhbik7XHJcbiAgICAgICAgYnRuX3Byb2ZpbGUuaW5uZXJIVE1MID0gdXNlcnNbaV0udXNlcm5hbWUgKyBcIiB8IFwiICsgdXNlcnNbaV0ubmFtZSArIFwiIFwiICsgdXNlcnNbaV0uc3VybmFtZSArIFwiIHwgXCIgKyB1c2Vyc1tpXS5lbWFpbCArIFwiIHwgXCIgKyB1c2Vyc1tpXS5yYXRpbmcgKyBcIjxpIGNsYXNzPSdmYS1yZWd1bGFyIGZhLXN0YXInPjwvaT5cIjtcclxuICAgICAgICBsaS5hcHBlbmQoYnRuX3Byb2ZpbGUsIHNwYW4pO1xyXG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFVzZXJzKCk6IHZvaWQge1xyXG4gICAgZmV0Y2goXCIvdXNlclwiKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHVzZXJzID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGVsZW1lbnQgb2YgZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdXNlcnMucHVzaChlbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjcmVhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICAgICAgICAgIHNob3dVc2VycygxKTtcclxuICAgICAgICB9KTtcclxufVxyXG5cclxuLypcclxuPGxpIGNsYXNzPVwicGFnZS1pdGVtIGFjdGl2ZVwiIGFyaWEtY3VycmVudD1cInBhZ2VcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwYWdlLWxpbmtcIj4xPC9zcGFuPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwicGFnZS1pdGVtXCI+PGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBocmVmPVwiI1wiPjI8L2E+PC9saT5cclxuICAgICAgICA8bGkgY2xhc3M9XCJwYWdlLWl0ZW1cIj48YSBjbGFzcz1cInBhZ2UtbGlua1wiIGhyZWY9XCIjXCI+MzwvYT48L2xpPlxyXG4qL1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUGFnaW5hdGlvbigpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnaW5hdGlvblwiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbGV0IG51bWJlck9mUGFnZXMgPSBNYXRoLmNlaWwodXNlcnMubGVuZ3RoIC8gdmlldyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mUGFnZXM7IGkrKykge1xyXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtIGFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIsIFwicGFnZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1saW5rXCIpO1xyXG4gICAgICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYWxsTGkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2luYXRpb25cIikuY2hpbGRyZW47XHJcbiAgICAgICAgICAgIGZvciAobGV0IG9uZUxpIG9mIGFsbExpKSB7XHJcbiAgICAgICAgICAgICAgICBvbmVMaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbVwiKTtcclxuICAgICAgICAgICAgICAgIG9uZUxpLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbSBhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiLCBcInBhZ2VcIik7XHJcbiAgICAgICAgICAgIHNob3dVc2VycyhpICsgMSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBidG4uaW5uZXJIVE1MID0gXCJcIiArIChpICsgMSk7XHJcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYnRuKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2luYXRpb25cIikuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1ha2VIaW1BZG1pbihpZDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGlkKVxyXG4gICAgfVxyXG4gICAgZmV0Y2goXCIvYWRtaW5cIiwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGlkKVxyXG4gICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4geyBjb25zb2xlLmxvZyhcImFkbWluIGNyZWF0bz8gXCIgKyBkYXRhKTsgZ2V0QWxsVXNlcnMoKTsgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGtpY2tIaXNBc3NPdXRPZlRoaXNTaXRlKGlkOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpZClcclxuICAgIH1cclxuICAgIGZldGNoKFwiL3VzZXJcIiwgcmVxdWVzdClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4geyBjb25zb2xlLmxvZyhcInVzZXIgY2FuY2VsbGF0bz8gXCIgKyBkYXRhKTsgZ2V0QWxsVXNlcnMoKTsgfSk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRBbGxVc2VyczsiLCJpbXBvcnQgaG9tZSBmcm9tICcuL2hvbWUuaHRtbCdcclxuaW1wb3J0IGluc2VydGlvbiBmcm9tICcuLi9pbnRlcmZhY2VzL2luc2VydGlvbic7XHJcbi8vaW1wb3J0IGNyZWF0ZUluc2VydGlvbiBmcm9tICcuLi9jcmVhQW5udW5jaW8vY3JlYUFubnVuY2lvJztcclxuXHJcbmxldCBsaXN0OiBpbnNlcnRpb25bXSA9IFtdO1xyXG5cclxuZnVuY3Rpb24gZ2V0QWxsSW5zZXJ0aW9ucygpIHsgLyogUXVlc3RhIMOoIHNvbG8gdW5hIHByb3ZhLCBzY29tbWVudGFyZSBsYSBmZXRjaCBwacO5IGdpw7kgKi9cclxuICAgIGxpc3QgPSBbXTtcclxuXHJcbiAgICBjb25zdCBpbWFnZUdpb2NvMSA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vaS5ldHN5c3RhdGljLmNvbS82Mjc3ODA0L3IvaWwvN2RmMDBlLzY5NzU0NjM0MC9pbF8xMTQweE4uNjk3NTQ2MzQwX2ZpdnMuanBnXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdpb2NvMiA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vd3d3Lm1vYnlnYW1lcy5jb20vaW1hZ2VzL2NvdmVycy9sLzE0NDQ1LXRoZS1sZWdlbmQtb2YtemVsZGEtbmVzLWZyb250LWNvdmVyLmpwZ1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHaW9jbzMgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9pdC9iL2IzL1BvayVDMyVBOW1vbl9HaWFsbG8ucG5nXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdpb2NvNCA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vc3RhdGljLndpa2lhLm5vY29va2llLm5ldC9tZXRhbGdlYXIvaW1hZ2VzL2UvZTEvTWV0YWxfR2Vhci5qcGdcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlR2FsbGVyeTEgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9pdC90aHVtYi83Lzc3L1Bpa2FjaHUucG5nLzEwMjRweC1QaWthY2h1LnBuZ1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHYWxsZXJ5MiA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vd3d3LnBuZ21hcnQuY29tL2ZpbGVzLzExL0Zyb2ctTWVtZS1QTkctSEQucG5nXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdhbGxlcnkzID0ge1xyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9tZWRpYS5saWNkbi5jb20vZG1zL2ltYWdlL0Q1NjM1QVFIdzNFNXlZeVhUTHcvcHJvZmlsZS1mcmFtZWRwaG90by1zaHJpbmtfODAwXzgwMC8wLzE2NDQ1MTg5MTg2MDY/ZT0xNjc1NjIwMDAwJnY9YmV0YSZ0PXgxUm5YcVdzRFdBT1ZRVVhHRnVqTW9kWFpoaUdVUUp1MGE2RkFzWk4zTG9cIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdpb2NvMSA9IHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuYW1lOiBcIlN1cGVyTWFyaW9cIixcclxuICAgICAgICBnZW5yZTogW3tnZW5yZTogXCJQTEFURk9STVwifV0sXHJcbiAgICAgICAgeWVhcjogMTk4NSxcclxuICAgICAgICBjb25zb2xlOiB7Y29uc29sZTogXCJORVNcIn0sXHJcbiAgICAgICAgY292ZXI6IGltYWdlR2lvY28xXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2lvY28yID0ge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIG5hbWU6IFwiVGhlIExlZ2VuZCBvZiBaZWxkYVwiLFxyXG4gICAgICAgIGdlbnJlOiBbe2dlbnJlOiBcIkFWVkVOVFVSQVwifV0sXHJcbiAgICAgICAgeWVhcjogMTk4NixcclxuICAgICAgICBjb25zb2xlOiB7Y29uc29sZTogXCJORVNcIn0sXHJcbiAgICAgICAgY292ZXI6IGltYWdlR2lvY28yXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2lvY28zID0ge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIG5hbWU6IFwiUG9rZW1vbiBHaWFsbG9cIixcclxuICAgICAgICBnZW5yZTogW3tnZW5yZTogXCJHRFJcIn1dLFxyXG4gICAgICAgIHllYXI6IDE5OTgsXHJcbiAgICAgICAgY29uc29sZToge2NvbnNvbGU6IFwiR0FNRV9CT1lfQ09MT1JcIn0sXHJcbiAgICAgICAgY292ZXI6IGltYWdlR2lvY28zXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2lvY280ID0ge1xyXG4gICAgICAgIGlkOiA0LFxyXG4gICAgICAgIG5hbWU6IFwiTWV0YWwgR2VhclwiLFxyXG4gICAgICAgIGdlbnJlOiBbe2dlbnJlOiBcIlNURUFMVEhcIn1dLFxyXG4gICAgICAgIHllYXI6IDE5ODcsXHJcbiAgICAgICAgY29uc29sZToge2NvbnNvbGU6IFwiTkVTXCJ9LFxyXG4gICAgICAgIGNvdmVyOiBpbWFnZUdpb2NvNFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHB1Ymxpc2hlckdpb2NvMSA9IHtcclxuICAgICAgICB1c2VySWQ6IDEsXHJcbiAgICAgICAgdXNlcm5hbWU6IFwiUGllcm9hZmZvbmRvXCIsXHJcbiAgICAgICAgbmFtZTogXCJQaWVyaW5vXCIsXHJcbiAgICAgICAgc3VybmFtZTogXCJDaWNjaW5vXCIsXHJcbiAgICAgICAgZW1haWw6IFwicGllcmlub2N1b3JpY2lub0BhbW9yaW5vLmNvbVwiLFxyXG4gICAgICAgIHJhdGluZzogNjY2LFxyXG4gICAgICAgIHZpZGVvZ2FtZXM6IFtnaW9jbzFdXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5zZXJ0aW9uMTogaW5zZXJ0aW9uID0ge1xyXG4gICAgICAgIGFwcHJvdmVkOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiBcIlNjYW1iaW8gU3VwZXJNYXJpb1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlNjYW1iaW8gc3VwZXJtYXJpbyB4a8OoIG1pIHNvbm8gc2Vra2F0byBhIGdpb2NhcmNpXCIsXHJcbiAgICAgICAgcHVibGlzaGVyOiBwdWJsaXNoZXJHaW9jbzEsXHJcbiAgICAgICAgZ2FsbGVyeTogW2dpb2NvMS5jb3ZlciwgaW1hZ2VHYWxsZXJ5MSwgaW1hZ2VHYWxsZXJ5MiwgaW1hZ2VHYWxsZXJ5M10sXHJcbiAgICAgICAgdHJhZGVHYW1lOiBnaW9jbzEsXHJcbiAgICAgICAgd2lzaExpc3Q6IFtnaW9jbzIsIGdpb2NvMywgZ2lvY280XSxcclxuICAgICAgICBvdXRjb21lOiBcIldJUFwiLFxyXG4gICAgICAgIHB1YmxpY2F0aW9uRGF0ZTogXCIyOS0wMS0yMDIzXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbnNlcnRpb24yOiBpbnNlcnRpb24gPSB7XHJcbiAgICAgICAgYXBwcm92ZWQ6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IFwiU2NhbWJpbyBwYWNtYW5cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTY2FtYmlvIHN1cGVybWFyaW8geGvDqCBtaSBzb25vIHNla2thdG8gYSBnaW9jYXJjaVwiLFxyXG4gICAgICAgIHB1Ymxpc2hlcjogcHVibGlzaGVyR2lvY28xLFxyXG4gICAgICAgIGdhbGxlcnk6IFtnaW9jbzIuY292ZXIsIGltYWdlR2FsbGVyeTIsIGltYWdlR2FsbGVyeTIsIGltYWdlR2FsbGVyeTNdLFxyXG4gICAgICAgIHRyYWRlR2FtZTogZ2lvY28yLFxyXG4gICAgICAgIHdpc2hMaXN0OiBbZ2lvY28yLCBnaW9jbzMsIGdpb2NvNF0sXHJcbiAgICAgICAgb3V0Y29tZTogXCJXSVBcIixcclxuICAgICAgICBwdWJsaWNhdGlvbkRhdGU6IFwiMjktMDEtMjAyM1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5zZXJ0aW9uMzogaW5zZXJ0aW9uID0ge1xyXG4gICAgICAgIGFwcHJvdmVkOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiBcInNjYW1iaW8gY29kZXN0b1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlNjYW1iaW8gc3VwZXJtYXJpbyB4a8OoIG1pIHNvbm8gc2Vra2F0byBhIGdpb2NhcmNpXCIsXHJcbiAgICAgICAgcHVibGlzaGVyOiBwdWJsaXNoZXJHaW9jbzEsXHJcbiAgICAgICAgZ2FsbGVyeTogW2dpb2NvMy5jb3ZlciwgaW1hZ2VHYWxsZXJ5MywgaW1hZ2VHYWxsZXJ5MiwgaW1hZ2VHYWxsZXJ5M10sXHJcbiAgICAgICAgdHJhZGVHYW1lOiBnaW9jbzMsXHJcbiAgICAgICAgd2lzaExpc3Q6IFtnaW9jbzIsIGdpb2NvMywgZ2lvY280XSxcclxuICAgICAgICBvdXRjb21lOiBcIldJUFwiLFxyXG4gICAgICAgIHB1YmxpY2F0aW9uRGF0ZTogXCIyOS0wMS0yMDIzXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbnNlcnRpb240OiBpbnNlcnRpb24gPSB7XHJcbiAgICAgICAgYXBwcm92ZWQ6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IFwiU2NhbWJpbyBwaXBvbG9cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTY2FtYmlvIHN1cGVybWFyaW8geGvDqCBtaSBzb25vIHNla2thdG8gYSBnaW9jYXJjaVwiLFxyXG4gICAgICAgIHB1Ymxpc2hlcjogcHVibGlzaGVyR2lvY28xLFxyXG4gICAgICAgIGdhbGxlcnk6IFtnaW9jbzQuY292ZXIsIGltYWdlR2FsbGVyeTEsIGltYWdlR2FsbGVyeTIsIGltYWdlR2FsbGVyeTNdLFxyXG4gICAgICAgIHRyYWRlR2FtZTogZ2lvY280LFxyXG4gICAgICAgIHdpc2hMaXN0OiBbZ2lvY28yLCBnaW9jbzMsIGdpb2NvNF0sXHJcbiAgICAgICAgb3V0Y29tZTogXCJXSVBcIixcclxuICAgICAgICBwdWJsaWNhdGlvbkRhdGU6IFwiMjktMDEtMjAyM1wiXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGxpc3QucHVzaChpbnNlcnRpb24xKTtcclxuICAgIGxpc3QucHVzaChpbnNlcnRpb24yKTtcclxuICAgIGxpc3QucHVzaChpbnNlcnRpb24zKTtcclxuICAgIGxpc3QucHVzaChpbnNlcnRpb240KTtcclxuXHJcbiAgICBcclxuICAgIC8qUVVFU1RPIEUnIExBIEZVTlpJT05FIEdJVVNUQSBOT04gRkFNTyBDSEUgU0JBR0xJQVRFISAqL1xyXG5cclxuICAgIC8qRmV0Y2ggYSBiYWNrZW5kIGNvbiB0dXR0aSBnbGkgYW5udW5jaSwgYWdnaW9ybmEgbGEgbGlzdGEgbGlzdCovXHJcbiAgICAvLyBsaXN0PVtdO1xyXG4gICAgLy8gZmV0Y2goJy9UaXBvQW5udW5jaUNoZW5lc28nKVxyXG4gICAgLy8gLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAvLyAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgLy8gICAgIGZvcihsZXQgZCBvZiBkYXRhKXtcclxuICAgIC8vICAgICAgICAgbGlzdC5wdXNoKGQpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhvbWUoKXtcclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuICAgIG1haW4uaW5uZXJIVE1MICs9IGhvbWU7XHJcbiAgICBsZXQgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XHJcbiAgICBoZWFkLmlubmVySFRNTCArPSAnPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIuL2hvbWUuY3NzXCI+JztcclxuICAgIFxyXG4gICAgZ2V0QWxsSW5zZXJ0aW9ucygpO1xyXG4gICAgY3JlYXRlSXRlbUNhcm91c2VsKCk7XHJcbiAgICAgICAgXHJcbn1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVJdGVtQ2Fyb3VzZWwoKXtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGNhcklubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lubmVyQ2Fyb3VzZWxIb21lJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDQgJiYgaSA8IGxpc3QubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2xDYXJvdXNlbEl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGlmKGkgPT0gMCl7XHJcbiAgICAgICAgICAgICAgICBjbENhcm91c2VsSXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJvdXNlbC1pdGVtIGFjdGl2ZScpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGNsQ2Fyb3VzZWxJdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Nhcm91c2VsLWl0ZW0nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGxpc3RbaV0udHJhZGVHYW1lLmNvdmVyLmxpbmspO1xyXG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdpZCcsICdpbWdDYXJkJyk7XHJcbiAgICAgICAgICAgIGxldCBjbENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY2xDYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZCB0ZXh0LWJnLXNlY29uZGFyeScpO1xyXG4gICAgICAgICAgICBjbENhcmQuc2V0QXR0cmlidXRlKCdpZCcsICdhbm5DYXJkJyk7XHJcbiAgICAgICAgICAgIGxldCBjYXJCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNhckJvZHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkLWJvZHknKTtcclxuICAgICAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcclxuICAgICAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkLXRpdGxlJyk7XHJcbiAgICAgICAgICAgIHRpdGxlLmlubmVySFRNTCA9IGxpc3RbaV0udHJhZGVHYW1lLm5hbWU7XHJcbiAgICAgICAgICAgIGxldCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBkZXNjLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZC10ZXh0Jyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdFtpXS50cmFkZUdhbWUuZ2VucmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGRlc2MuaW5uZXJIVE1MICs9IGxpc3RbaV0udHJhZGVHYW1lLmdlbnJlW2ldLmdlbnJlICsgXCIgXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZXNjLmlubmVySFRNTCArPSBcIjxicj5cIlxyXG4gICAgICAgICAgICArIFwiQW5ubzogXCIgKyBsaXN0W2ldLnRyYWRlR2FtZS55ZWFyICsgXCIgXCJcclxuICAgICAgICAgICAgKyBcIkNvbnNvbGU6IFwiICsgbGlzdFtpXS50cmFkZUdhbWUuY29uc29sZS5jb25zb2xlICsgXCI8YnI+XCJcclxuICAgICAgICAgICAgK1wiRGVzY3JpemlvbmU6XCI7XHJcbiAgICAgICAgICAgIGxldCBnb0FubiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICAgICAgZ29Bbm4uc2V0QXR0cmlidXRlKCdocmVmJywgXCIjXCIpO1xyXG4gICAgICAgICAgICBnb0Fubi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2J0biBidG4tcHJpbWFyeScpO1xyXG4gICAgICAgICAgICBnb0Fubi5pbm5lckhUTUwgPSAnVmFpIGFsbCBhbm51bmNpbyc7XHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgICAgICBjYXJJbm5lci5hcHBlbmRDaGlsZChjbENhcm91c2VsSXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsQ2Fyb3VzZWxJdC5hcHBlbmRDaGlsZChjbENhcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbENhcmQuYXBwZW5kKGltZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsQ2FyZC5hcHBlbmQoY2FyQm9keSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJCb2R5LmFwcGVuZCh0aXRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJCb2R5LmFwcGVuZChkZXNjKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhckJvZHkuYXBwZW5kKGdvQW5uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWU7XHJcblxyXG4vKlxyXG5hc3luYyBmdW5jdGlvbiBnZXR0aXRsZSh0aXRsZTogc3RyaW5nKTp7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKClcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuXHJcbn1cclxuKi8iLCJpbXBvcnQgbW9kYWwgZnJvbSAnLi9tb2RhbC5odG1sJ1xyXG5pbXBvcnQgbG9naW4gZnJvbSAnLi4vbG9naW4vbG9naW4uaHRtbCdcclxuaW1wb3J0IGxvZ2luRm9vdGVyIGZyb20gJy4uL2xvZ2luL2xvZ2luRm9vdGVyLmh0bWwnXHJcbmltcG9ydCByZWdpc3RyYXppb25lIGZyb20gJy4uL3JlZ2lzdHJhemlvbmUvcmVnaXN0cmF6aW9uZS5odG1sJ1xyXG5pbXBvcnQgcmVnRm9vdGVyIGZyb20gJy4uL3JlZ2lzdHJhemlvbmUvcmVnaXN0cmF6aW9uZUZvb3Rlci5odG1sJ1xyXG5pbXBvcnQgbG9nb3V0IGZyb20gJy4uL2xvZ291dC9sb2dvdXQuaHRtbCdcclxuaW1wb3J0IHByb2ZpbGUgZnJvbSAnLi4vcHJvZmlsb1V0ZW50ZS9wcm9maWxlLmh0bWwnXHJcbmltcG9ydCAqIGFzIG5hdiBmcm9tIFwiLi4vbmF2YmFyL25hdmJhclwiO1xyXG5pbXBvcnQgbG9nZ2VkIGZyb20gJy4uL2ludGVyZmFjZXMvbG9nZ2VkJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vZGFsKCl7XHJcbiAgICBsZXQgZGl2TW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGl2TW9kYWwuaW5uZXJIVE1MID0gbW9kYWw7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKS5hcHBlbmRDaGlsZChkaXZNb2RhbCk7XHJcbiAgICBzaG93TG9nSW5Nb2RhbCgpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpblwiKS5vbmNsaWNrID0gc2hvd0xvZ0luTW9kYWw7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25PdXRCdXR0b25cIikub25jbGljayA9IHNob3dMb2dPdXRNb2RhbDtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1NpZ25VcE1vZGFsKCl7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxCb2R5XCIpLmlubmVySFRNTCA9IHJlZ2lzdHJhemlvbmU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxGb290ZXJcIikuaW5uZXJIVE1MID0gcmVnRm9vdGVyO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cnl0b1NpZ25VcFwiKS5vbmNsaWNrID0gdHJ5VG9TaWduVXA7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25VcExvZ2luXCIpLm9uY2xpY2sgPSBzaG93TG9nSW5Nb2RhbDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVNpZ25VcFwiKS5vbmtleXVwID0gdmFsaWRhdGVGb3JtO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdXJuYW1lU2lnblVwXCIpLm9ua2V5dXAgPSB2YWxpZGF0ZUZvcm07XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJuYW1lU2lnblVwXCIpLm9ua2V5dXAgPSB2YWxpZGF0ZUZvcm07XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsU2lnblVwXCIpLm9ua2V5dXAgPSB2YWxpZGF0ZUZvcm07XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkU2lnblVwXCIpLm9ua2V5dXAgPSB2YWxpZGF0ZUZvcm07XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbmZpcm1fcGFzc3dvcmRTaWduVXBcIikub25rZXl1cCA9IHZhbGlkYXRlRm9ybTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0xvZ0luTW9kYWwoKXtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbEJvZHlcIikuaW5uZXJIVE1MID0gbG9naW47XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxGb290ZXJcIikuaW5uZXJIVE1MID0gbG9naW5Gb290ZXI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luU2lnblVwXCIpLm9uY2xpY2sgPSBzaG93U2lnblVwTW9kYWw7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyeVRvTG9nXCIpLm9uY2xpY2sgPSB0cnlUb0xvZ0luO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzaG93TG9nT3V0TW9kYWwoKXtcclxuICAgIGxldCByZXN1bHQgOiBib29sZWFuPSBhd2FpdCB0cnlUb0xvZ091dCgpO1xyXG4gICAgaWYocmVzdWx0KXtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxCb2R5XCIpLmlubmVySFRNTCA9IGxvZ291dDtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxGb290ZXJcIikuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdHJ5VG9TaWduVXAoKSB7XHJcbiAgICBjb25zdCB1c2VyID0ge1xyXG4gICAgICAgIHVzZXJuYW1lOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VybmFtZVNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSAsXHJcbiAgICAgICAgcGFzc3dvcmQ6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLFxyXG4gICAgICAgIG5hbWU6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVTaWduVXBcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcbiAgICAgICAgc3VybmFtZTogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VybmFtZVNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSxcclxuICAgICAgICBlbWFpbDogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxTaWduVXBcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpXHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2goXCIvdXNlclwiLCByZXF1ZXN0KS50aGVuKChyZXNwb25zZSk9PnJlc3BvbnNlLmpzb24oKSkudGhlbigoZGF0YSk9PntcclxuICAgICAgICBpZihkYXRhKXtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduVXBSZXN1bHRcIikuaW5uZXJIVE1MPVwiUmVnaXN0cmF0byBjb24gc3VjY2Vzc28hXCI7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJ5dG9TaWduVXBcIikuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25VcFJlc3VsdFwiKS5pbm5lckhUTUw9XCJPcHMsIHF1YWxjb3NhIMOoIGFuZGF0byBzdG9ydG8hXCI7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJ5dG9TaWduVXBcIikucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxufVxyXG5cclxuZnVuY3Rpb24gdHJ5VG9Mb2dJbigpIHtcclxuICAgIGNvbnN0IGxvZ2luID0ge1xyXG4gICAgICAgIHVzZXJuYW1lOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VybmFtZVNpZ25JblwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSxcclxuICAgICAgICBwYXNzd29yZDogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmRTaWduSW5cIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXF1ZXN0ID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZScgOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGxvZ2luKVxyXG4gICAgfTtcclxuICAgIGxldCByZXN1bHQgOiBhbnkgPSBmZXRjaChcIi9sb2dpblwiLCByZXF1ZXN0KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKT0+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgaWYoZGF0YS5sb2dnZWQpe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luUmVzdWx0XCIpLmlubmVySFRNTD1cIkxvZ2dhdG8gY29uIHN1Y2Nlc3NvIVwiO1xyXG4gICAgICAgICAgICBuYXYuc2V0TmF2KGRhdGEuYWNjb3VudFR5cGUpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyeVRvTG9nXCIpLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpblNpZ25VcFwiKS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5SZXN1bHRcIikuaW5uZXJIVE1MPVwiT3BzLCBxdWFsY29zYSDDqCBhbmRhdG8gc3RvcnRvXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHRyeVRvTG9nT3V0KCkgOlByb21pc2U8Ym9vbGVhbj57XHJcbiAgICBsZXQgcHJvbWlzZVJlc3VsdCA9IGZldGNoKFwiL2xvZ291dFwiKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKT0+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgaWYoZGF0YSl7XHJcbiAgICAgICAgICAgIG5hdi5zZXROYXYoXCJcIik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJ5VG9Mb2dcIikucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5TaWduVXBcIikucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRhfSk7XHJcbiAgICByZXR1cm4gcHJvbWlzZVJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVGb3JtKCl7XHJcbiAgICBsZXQgdXNlcm5hbWUgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VybmFtZVNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA7XHJcbiAgICBsZXQgcGFzc3dvcmQgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzd29yZFNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgIGxldCBuYW1lID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgIGxldCBzdXJuYW1lID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VybmFtZVNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgIGxldCBlbWFpbCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgbGV0IGNvbmZpcm1fcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbmZpcm1fcGFzc3dvcmRTaWduVXBcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbmZpcm1fcGFzc3dvcmQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJcIik7XHJcbiAgICBcclxuICAgIGlmKHVzZXJuYW1lPT1cIlwiIHx8IHBhc3N3b3JkPT1cIlwiIHx8bmFtZT09XCJcIiB8fCBzdXJuYW1lPT1cIlwiIHx8IGVtYWlsPT1cIlwiKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVjY2hlY2F6em9cIik7XHJcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJ5dG9TaWduVXBcIikgYXMgSFRNTElucHV0RWxlbWVudCApLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBpZiAocGFzc3dvcmQgIT0gY29uZmlybV9wYXNzd29yZC52YWx1ZSkge1xyXG4gICAgICAgICAgICBjb25maXJtX3Bhc3N3b3JkLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYm9yZGVyLWNvbG9yOiByZWQ7XCIpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjb25maXJtX3Bhc3N3b3JkLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYm9yZGVyLWNvbG9yOiBncmVlbjtcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgaWYgKHBhc3N3b3JkICE9IGNvbmZpcm1fcGFzc3dvcmQudmFsdWUpIHtcclxuICAgICAgICAgICAgY29uZmlybV9wYXNzd29yZC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJvcmRlci1jb2xvcjogcmVkO1wiKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uZmlybV9wYXNzd29yZC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJvcmRlci1jb2xvcjogZ3JlZW47XCIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyeXRvU2lnblVwXCIpLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNb2RhbDsiLCJpbXBvcnQgbmF2IGZyb20gXCIuL25hdmJhci5odG1sXCI7XHJcbmltcG9ydCBjcmVhdGVNb2RhbCBmcm9tIFwiLi4vbW9kYWwvbW9kYWxcIjtcclxuaW1wb3J0IGFubnVuY2kgZnJvbSBcIi4uL2FubnVuY2kvYW5udW5jaS5odG1sXCI7XHJcbmltcG9ydCBnZXN0aW9uZWFubnVuY2kgZnJvbSBcIi4uL2FubnVuY2kvZ2VzdGlvbmVhbm51bmNpLmh0bWxcIjtcclxuaW1wb3J0IGNyZWF0ZVBhZ2UgZnJvbSBcIi4uL2FubnVuY2kvYW5udW5jaVwiO1xyXG5pbXBvcnQgaG9tZSBmcm9tIFwiLi4vaG9tZS9ob21lLmh0bWxcIjtcclxuaW1wb3J0IHByb2ZpbGUgZnJvbSBcIi4uL3Byb2ZpbG9VdGVudGUvcHJvZmlsZS5odG1sXCI7XHJcbmltcG9ydCBnZXN0aW9uZVV0ZW50aSBmcm9tIFwiLi4vZ2VzdGlvbmVVdGVudGkvZ2VzdGlvbmVVdGVudGkuaHRtbFwiO1xyXG5pbXBvcnQgZ2V0QWxsVXNlcnMgZnJvbSBcIi4uL2dlc3Rpb25lVXRlbnRpL2dlc3Rpb25lVXRlbnRpXCI7XHJcbmltcG9ydCBjcmVhdGVQYWdlMiBmcm9tIFwiLi4vYW5udW5jaS9nZXN0aW9uZWFubnVuY2lcIjtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIikuaW5uZXJIVE1MID0gbmF2O1xyXG4gICAgY3JlYXRlTW9kYWwoKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nb1wiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBob21lO1xyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zZXJ0aW9uc1wiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBhbm51bmNpO1xyXG4gICAgICAgIGNyZWF0ZVBhZ2UoKTtcclxuICAgIH07XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc01hbmFnZW1lbnRcIikub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MID0gZ2VzdGlvbmVhbm51bmNpO1xyXG4gICAgICAgIGNyZWF0ZVBhZ2UyKCk7XHJcbiAgICB9O1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYW5hZ2VtZW50XCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGdlc3Rpb25lVXRlbnRpO1xyXG4gICAgICAgIGdldEFsbFVzZXJzKCk7XHJcbiAgICB9O1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9maWxlXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IHByb2ZpbGU7XHJcbiAgICB9O1xyXG4gICAgLy9UT0RPOiBhY2NvdW50LlRZUEVcclxuICAgIHNldE5hdihcIiBcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXROYXYoYWNjb3VudFR5cGUgOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGJ0bl9nZXN0VXRlbnRpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYW5hZ2VtZW50XCIpO1xyXG4gICAgY29uc3QgYnRuX2luc01hbmFnZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc01hbmFnZW1lbnRcIik7XHJcbiAgICBjb25zdCBidG5fbG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luXCIpO1xyXG4gICAgY29uc3QgYnRuX3NpZ25PdXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25PdXRCdXR0b25cIik7XHJcbiAgICBpZihhY2NvdW50VHlwZT09XCJBRE1JTlwiKXtcclxuICAgICAgICBidG5fZ2VzdFV0ZW50aS5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgYnRuX2luc01hbmFnZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGJ0bl9sb2dpbi5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIGJ0bl9zaWduT3V0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKTtcclxuICAgIH1lbHNlIGlmKGFjY291bnRUeXBlPT1cIlVTRVJcIil7XHJcbiAgICAgICAgYnRuX2dlc3RVdGVudGkuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICBidG5faW5zTWFuYWdlbWVudC5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIGJ0bl9sb2dpbi5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIGJ0bl9zaWduT3V0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGJ0bl9nZXN0VXRlbnRpLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgYnRuX2luc01hbmFnZW1lbnQuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICBidG5fbG9naW4ucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGJ0bl9zaWduT3V0QnV0dG9uLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTmF2O1xyXG4iLCJpbXBvcnQgc2hvd1Byb2ZpbGUgZnJvbSBcIi4vc2hvd1Byb2ZpbGUuaHRtbFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dVc2VyUHJvZmlsZSgpe1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IHNob3dQcm9maWxlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaG93VXNlclByb2ZpbGUiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVIb21lIGZyb20gXCIuL2hvbWUvaG9tZVwiO1xyXG5pbXBvcnQgY3JlYXRlTmF2IGZyb20gXCIuL25hdmJhci9uYXZiYXJcIjtcclxuaW1wb3J0IGNyZWF0ZUZvdCBmcm9tIFwiLi9mb290ZXIvZm9vdGVyXCI7XHJcblxyXG5cclxuY3JlYXRlTmF2KCk7XHJcbmNyZWF0ZUhvbWUoKTtcclxuY3JlYXRlRm90KCk7XHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
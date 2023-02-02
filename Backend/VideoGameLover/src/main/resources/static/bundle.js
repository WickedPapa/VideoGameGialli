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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div id=\"bgaround\" class=\"text-center my-5\">\r\n    <img src=\"./img/videogamelover.png\" alt=\"not found\" class=\"headerImg mx-auto\" style=\"width: 50%; \" id=\"headerImg\">\r\n</div>\r\n\r\n<style>\r\n\r\n  .widgetIntro {\r\n    display: inline-block;\r\n  }\r\n\r\n  .widgetIntro-div{\r\n    text-align: left;\r\n    float: left;\r\n  }\r\n  \r\n  #annCard {\r\n\r\n    width: 40%;\r\n    height: 500px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    align-self: center;\r\n  }\r\n\r\n  #imgCard {\r\n    height: 60%;\r\n    width:fit-content;\r\n    align-self: center;\r\n  }\r\n\r\n\r\n  .imgS {\r\n    width: 54px;\r\n    height: 42px;\r\n  }\r\n\r\n  body {\r\n    text-align: center;\r\n    font-weight: bold;\r\n    font-family: 'Courier New', Courier, monospace;\r\n  }\r\n\r\n  .widgetPic {\r\n    width: auto;\r\n    height: 100%;\r\n  }\r\n\r\n  .picRight {\r\n    margin-right: 0px;\r\n  }\r\n\r\n  .picleft {\r\n    margin-left: 0px;\r\n  }\r\n\r\n  .sec {\r\n    margin-top: 10%;\r\n    margin-bottom: 10%;\r\n    width: 100%;\r\n    background-color: rgba(255, 255, 255, 0.5);\r\n    padding: auto;\r\n  }\r\n\r\n  .p {\r\n    padding: 0px;\r\n  }\r\n \r\n</style>\r\n\r\n<section class=\"p sec border border-success mb-2 border-opacity-50 rounded row aling-item-start\">\r\n  <div class=\"p col-4\">\r\n    <picture>\r\n      <img class=\"widgetPic picLeft rounded-start\" src=\"./img/gamesearch.jpeg\" style=\"width:100%\" alt=\"\">\r\n    </picture>\r\n  </div>\r\n  <div class=\"border-start border-3 border-primary col-8 text-start widgetText\">\r\n    <h1>\r\n      Il portale dei veri gamers.\r\n    </h1>\r\n    <h2>\r\n      Sei alla ricerca di un gioco, vecchio o nuovo che sia, ma non riesci a trovarlo? Noi abbiamo la soluzione per te...\r\n      Cerca tra centinaia di annunci il titolo che non trovavi più, mettiti in contatto con l'utente che lo sta vendendo, \r\n      e fai l'affare del secolo...\r\n    </h2>\r\n  </div>\r\n</section>\r\n\r\n<div class=\"container text-center\" style=\"margin-top: 10%; margin-bottom: 10%;\">\r\n  <div class=\"row\" style=\"margin-left:10%;margin-right:10%;\">\r\n    <div class=\"col\">\r\n      <div class=\"card text-bg-danger\" style=\"width: 18rem;height: 100%;\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Cerca</h5>\r\n          <p class=\"card-text\">Cerca il tuo gioco prefereito tra centinaia di annunci</p>\r\n          <hr>\r\n          <div class=\"input-group mb-3 form-control border rounded\" style=\"margin-top: 10px;\">\r\n            <input type=\"text\" class=\"form-control border-0\" id=\"searchTitle\" placeholder=\"Cerca\" aria-label=\"search\" aria-describedby=\"basic-addon2\">\r\n            <a id=\"searchButtonTitle\" href=\"#\"><img class=\"ms-1 btn imgS\" src=\"./img/search.png\" alt=\"\"></a>\r\n          </div> \r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\">\r\n      <div class=\"card text-bg-primary\" style=\"width: 18rem;height: 100%;\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Esplora</h5>\r\n          <p class=\"card-text\">Esplora miglialia di giochi tra gli annunci presenti</p>\r\n          <hr>\r\n          <a href=\"#\" id=\"insertionsCard\" class=\"btn btn-info\">Annunci</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\">\r\n      <div class=\"card text-bg-success\" style=\"width: 18rem;height: 100%;\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Scambia</h5>\r\n          <p class=\"card-text\">Hai un gioco di cui non te ne fai più nulla per le miliardi di volte che lo hai finito?\r\n            inserisci qui il tuo annuncio!\r\n          </p>\r\n          <hr>\r\n          <a href=\"#\" id=\"insertCard\" class=\"btn btn-light\">Inserisci Annuncio</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<section class=\"p sec border border-success mb-2 border-opacity-50 rounded row aling-item-start\">\r\n  <div class=\"border-end border-3 border-primary col-8 text-start widgetText\">\r\n    <h1>\r\n      Il portale dei veri gamers.\r\n    </h1>\r\n    <h2>\r\n      Sei alla ricerca di un gioco, vecchio o nuovo che sia, ma non riesci a trovarlo? Noi abbiamo la soluzione per te...\r\n      Cerca tra centinaia di annunci il titolo che non trovavi più, mettiti in contatto con l'utente che lo sta vendendo, \r\n      e fai l'affare del secolo...\r\n    </h2>\r\n  </div>\r\n  <div class=\"p col-4\">\r\n    <picture>\r\n      <img class=\"widgetPic picRight rounded-end\" src=\"./img/gametrade.png\" style=\"width:100%\" alt=\"\">\r\n    </picture>\r\n  </div>\r\n</section>\r\n\r\n<h1>Ultimi annunci:</h1>\r\n<h2>Controlla qui gli ultimi annunci</h2>\r\n<div id=\"carouselExampleControls\" class=\"carousel slide\" data-bs-ride=\"carousel\">\r\n    <div id=\"innerCarouselHome\" class=\"carousel-inner\">\r\n       \r\n    </div>\r\n    <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#carouselExampleControls\" data-bs-slide=\"prev\">\r\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"visually-hidden\">Previous</span>\r\n    </button>\r\n    <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#carouselExampleControls\" data-bs-slide=\"next\">\r\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"visually-hidden\">Next</span>\r\n    </button>\r\n  </div>\r\n\r\n<section class=\"p sec border border-success mb-2 border-opacity-50 rounded row aling-item-start\">\r\n  <div class=\"p col-4\">\r\n    <picture>\r\n      <img class=\"widgetPic picLeft rounded-start\" src=\"./img/Reunion.jpeg\" style=\"width:100%\" alt=\"\">\r\n    </picture>\r\n  </div>\r\n  <div class=\"border-start border-3 border-primary col-8 text-start widgetText\">\r\n    <h1>\r\n      Chi Siamo\r\n    </h1>\r\n    <h2>\r\n      Siamo un punto d'incontro per tutti quelli che si sono appassionati a quel mondo magico rinchiuso all'interno\r\n      di una cartuccia, disco o scheda, dandogli l'opportunità di poter ritrovare vecchi sogni, e scambiarli con alcuni nuovi.\r\n      L'opportunita di conoscere persone dello stesso parere, o opposto.\r\n    </h2>\r\n  </div>\r\n</section>");

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
    //createInsertion();
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
    let btn = document.getElementById("addInsertion2");
    btn.onclick = () => {
        document.getElementById("main").innerHTML = _creaAnnuncio_html__WEBPACK_IMPORTED_MODULE_0__["default"];
        createInsertionPage();
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
            });
        };
        btn2.innerHTML = "Cambia Email";
        buttons.append(btn2);
        document.getElementById("email").value = "";
        showProfile();
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
        createGamePagination();
        showGames(1);
    });
}
function getAllGames() {
    gameList = [];
    /* fetch("/videogames")
         .then((response) => (response.json()))
         .then((data) => {
             for (let game of data) {
                 gameList.push(game)
             }
         })
     */
    const imageGioco1 = {
        link: "https://i.etsystatic.com/6277804/r/il/7df00e/697546340/il_1140xN.697546340_fivs.jpg"
    };
    const gioco1 = {
        id: 1,
        name: "SuperMario",
        genre: [{ genre: "PLATFORM" }],
        year: 1985,
        console: { console: "NES" },
        cover: imageGioco1
    };
    for (let i = 0; i < 27; i++) {
        if (i != 17) {
            gameList.push(gioco1);
        }
        else {
            gameList.push(gioco1);
        }
    }
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
        col.onclick = () => {
            (0,_visualizzaVideogioco__WEBPACK_IMPORTED_MODULE_1__["default"])(gameList[start]);
        };
        let gameTitle = document.createElement("h3");
        gameTitle.setAttribute("class", "my-4");
        let image = document.createElement("img");
        image.src = gameList[start].cover.link;
        image.width = 200;
        gameTitle.innerHTML = gameList[start].name;
        col.append(gameTitle, image);
        let addButton = document.createElement("button");
        if (type == "USER") {
            addButton.innerHTML = "Aggiungi alla tua Lista!";
            addButton.onclick = () => {
                fetch("/user/game/" + gameList[start].id)
                    .then((response) => (response.json()))
                    .then((data) => {
                    console.log(data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnFDO0FBQ0c7QUFDQTtBQUd4QywwREFBUyxFQUFFLENBQUM7QUFDWixzREFBVSxFQUFFLENBQUM7QUFDYiwwREFBUyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9hbm51bmNpL2FubnVuY2kuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9hbm51bmNpL2FubnVuY2lvLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvYW5udW5jaS9nZXN0aW9uZWFubnVuY2kuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9jcmVhQW5udW5jaW8vY3JlYUFubnVuY2lvLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvZm9vdGVyL2Zvb3Rlci5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2dlc3Rpb25lVXRlbnRpL2dlc3Rpb25lVXRlbnRpLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvaG9tZS9ob21lLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvbG9naW4vbG9naW4uaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9sb2dpbi9sb2dpbkZvb3Rlci5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2xvZ291dC9sb2dvdXQuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9tb2RhbC9tb2RhbC5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL25hdmJhci9uYXZiYXIuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9wcm9maWxvVXRlbnRlL3Byb2ZpbGUuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9yZWdpc3RyYXppb25lL3JlZ2lzdHJhemlvbmUuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9yZWdpc3RyYXppb25lL3JlZ2lzdHJhemlvbmVGb290ZXIuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy92aWRlb2dpb2NoaS9jcmVhVmlkZW9naW9jby5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL3ZpZGVvZ2lvY2hpL3ZpZGVvZ2lvY2hpLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvdmlkZW9naW9jaGkvdmlzdWFsaXp6YVZpZGVvZ2lvY28uaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9hbm51bmNpL2FubnVuY2kudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvYW5udW5jaS9hbm51bmNpby50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9hbm51bmNpL2dlc3Rpb25lYW5udW5jaS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9jcmVhQW5udW5jaW8vY3JlYUFubnVuY2lvLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2Zvb3Rlci9mb290ZXIudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvZ2VzdGlvbmVVdGVudGkvZ2VzdGlvbmVVdGVudGkudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvaG9tZS9ob21lLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL21vZGFsL21vZGFsLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL25hdmJhci9uYXZiYXIudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvcHJvZmlsb1V0ZW50ZS9wcm9maWxlLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL3ZpZGVvZ2lvY2hpL2NyZWFWaWRlb2dpb2NoaS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy92aWRlb2dpb2NoaS92aWRlb2dpb2NoaS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy92aWRlb2dpb2NoaS92aXN1YWxpenphVmlkZW9naW9jby50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiXFxyXFxuPGRpdiBzdHlsZT1cXFwiZGlzcGxheTogZmxleDtcXFwiIGNsYXNzPVxcXCJteS01XFxcIj5cXHJcXG5cXHJcXG4gICAgPHNwYW4gc3R5bGU9XFxcIm1hcmdpbi1yaWdodDogNDBweFxcXCI+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIGlkPVxcXCJzZWxlY3RBbGxcXFwiPlZpc3VhbGl6emEgdHV0dGk8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L3NwYW4+IDwhLS1mdW56aW9uZSBjaGUgcHJlbmRlIHR1dHRpIGdsaSBhbm51bmNpIGUgbGkgc2NoaWFmZmEgbmVsIGNvbnRlbnV0byBhbm51bmNpLS0+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IDQwcHhcXFwiIGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeSBkcm9wZG93bi10b2dnbGVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICBWaXN1YWxpenphIHBlciBHZW5lcmVcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVxcXCJnZW5yZXNcXFwiIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XFxcIlBMQVRGT1JNXFxcIj48YnV0dG9uIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPlBMQVRGT1JNPC9idXR0b24+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiA0MHB4XFxcIiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeSBkcm9wZG93bi10b2dnbGVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIFZpc3VhbGl6emEgcGVyIEFubm9cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDx1bCBpZD1cXFwieWVhcnNcXFwiIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIGlkPVxcXCIxOTg1XFxcIj48YnV0dG9uIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPjE5ODU8L2J1dHRvbj48L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgPGRpdiBzdHlsZT1cXFwidmVydGljYWwtYWxpZ246IG1pZGRsZTtcXFwiIGNsYXNzPVxcXCJjb2wtbWQtMyBteC1hdXRvXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbCBib3JkZXItZW5kLTEgYm9yZGVyIHJvdW5kZWQtcGlsbFxcXCIgdHlwZT1cXFwic2VhcmNoXFxcIiBwbGFjZWhvbGRlcj1cXFwiY2VyY2FcXFwiIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6MjBweFxcXCIgaWQ9XFxcInNlYXJjaFRpdGxlXFxcIj5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYXBwZW5kXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJzZWFyY2hCdXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJnLXdoaXRlIGJvcmRlci1ib3R0b20tMSBib3JkZXIgcm91bmRlZC1waWxsIG1zLW41XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgdHJvdmFcXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtc2VhcmNoXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgIDxzcGFuID5cXHJcXG4gICAgICAgIDxidXR0b24gaWQ9XFxcImFkZEluc2VydGlvbjJcXFwiIHN0eWxlPVxcXCJjb2xvcjp3aGl0ZVxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi9pbWcvcGx1cy5wbmdcXFwiIGFsdD1cXFwicGx1c1xcXCIgc3R5bGU9XFxcIndpZHRoOjI1cHhcXFwiPlxcclxcbiAgICAgICAgICAgIEluc2VyaXNjaSBBbm51bmNpb1xcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgPC9zcGFuPiAgICAgIFxcclxcbiAgICAgICAgICAgICBcXHJcXG5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGlkPVxcXCJyZW1haW5zXFxcIj5cXHJcXG4gICAgPGRpdiAgaWQ9XFxcImluc2VydGlvbkNvbnRlbnRcXFwiIGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcblxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPHVsIGNsYXNzPVxcXCJsaXN0LWdyb3VwXFxcIiA+XFxyXFxuICAgICAgICBcXHJcXG4gICAgPC91bD4gICAgXFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdj5cXHJcXG4gICAgPHVsIGlkPVxcXCJwYWdlc1xcXCIgY2xhc3M9XFxcInBhZ2luYXRpb24gcGFnaW5hdGlvbi1zbSBteS0yXFxcIj5cXHJcXG4gICAgICAgIFxcclxcbiAgICA8L3VsPlxcclxcbjwvZGl2PlxcclxcblxcclxcblxcclxcblxcclxcblwiOyIsImV4cG9ydCBkZWZhdWx0IFwiICAgIDxkaXYgaWQ9XFxcImJhY2tcXFwiPlxcclxcbiAgICAgICAgPGltZyBpZD1cXFwiYmFja2dhbWVzXFxcIiBjbGFzcz1cXFwibXQtNCBidXR0b25ob3ZlciBtYi00XFxcIiB3aWR0aD0xMjAgc3JjPVxcXCIuL2ltZy9iYWNrLnBuZ1xcXCI+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgIDwhLS0gIC0tPlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcInJvd1xcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43KTtcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+XFxyXFxuICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgaWQ9XFxcImltYWdlU2xpZGVyXFxcIiBjbGFzcz1cXFwiY2Fyb3VzZWwgc2xpZGVcXFwiIGRhdGEtYnMtcmlkZT1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImluZGljYXRvclxcXCIgY2xhc3M9XFxcImNhcm91c2VsLWluZGljYXRvcnNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiaW5uZXJcXFwiIGNsYXNzPVxcXCJjYXJvdXNlbC1pbm5lclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYXJvdXNlbC1jb250cm9sLXByZXZcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10YXJnZXQ9XFxcIiNpbWFnZVNsaWRlclxcXCIgZGF0YS1icy1zbGlkZT1cXFwicHJldlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidmlzdWFsbHktaGlkZGVuXFxcIj5QcmVjZWRlbnRlPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2Fyb3VzZWwtY29udHJvbC1uZXh0XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdGFyZ2V0PVxcXCIjaW1hZ2VTbGlkZXJcXFwiIGRhdGEtYnMtc2xpZGU9XFxcIm5leHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+U3VjY2Vzc2l2YTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiZ2l2ZWRHYW1lXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgbWItM1xcXCIgc3R5bGU9XFxcIm1heC13aWR0aDogNTQwcHg7XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgZy0wXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiY2FyZC1pbWFnZVxcXCIgY2xhc3M9XFxcImNvbC1tZC00XFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC04XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImNhcmQtYm9keVxcXCIgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwiaW5zZXJ0aW9uLWRlc2NyaXB0aW9uXFxcIiBjbGFzcz1cXFwiZm9udC1zaXplOjIwcHggY29sb3I6d2hpdGUgY29sLW1kLTEyXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJteS01IHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgPGgzPjxzcGFuIGlkPVxcXCJpbnNlcnRpb24tY3JlYXRvclxcXCI+PC9zcGFuPiB2b3JyZWJiZSB1bm8gZGkgcXVlc3RpIGdpb2NoaSBpbiBjYW1iaW86PC9oMz5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJhY2NvcmRpb24gcm93XFxcIiBpZD1cXFwiYWNjb3JkaW9uRXhhbXBsZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImFjY29yZGlvbi1pdGVtIGNvbC1tZC00XFxcIj5cXHJcXG4gICAgICAgIDxoMiBjbGFzcz1cXFwiYWNjb3JkaW9uLWhlYWRlclxcXCIgaWQ9XFxcImhlYWRpbmdPbmVcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcImJ0bi1pdGVtLTFcXFwiIGNsYXNzPVxcXCJhY2NvcmRpb24tYnV0dG9uIGNvbGxhcHNlZFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiXFxyXFxuICAgICAgICAgICAgICAgIGRhdGEtYnMtdGFyZ2V0PVxcXCIjY29sbGFwc2VPbmVcXFwiIGFyaWEtZXhwYW5kZWQ9XFxcInRydWVcXFwiIGFyaWEtY29udHJvbHM9XFxcImNvbGxhcHNlT25lXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvaDI+XFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJjb2xsYXBzZU9uZVxcXCIgY2xhc3M9XFxcImFjY29yZGlvbi1jb2xsYXBzZSBjb2xsYXBzZVxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJoZWFkaW5nT25lXFxcIlxcclxcbiAgICAgICAgICAgIGRhdGEtYnMtcGFyZW50PVxcXCIjYWNjb3JkaW9uRXhhbXBsZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWNjb3JkaW9uLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJpbWctaXRlbS0xXFxcIiBjbGFzcz1cXFwiY2FyZCBteC1hdXRvXFxcIiBzdHlsZT1cXFwid2lkdGg6IDE4cmVtO1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImJvZHktaXRlbS0xXFxcIiBjbGFzcz1cXFwiY2FyZC1ib2R5IHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYWNjb3JkaW9uLWl0ZW0gY29sLW1kLTRcXFwiPlxcclxcbiAgICAgICAgPGgyIGNsYXNzPVxcXCJhY2NvcmRpb24taGVhZGVyXFxcIiBpZD1cXFwiaGVhZGluZ1R3b1xcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cXFwiYnRuLWl0ZW0tMlxcXCIgY2xhc3M9XFxcImFjY29yZGlvbi1idXR0b24gY29sbGFwc2VkXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJjb2xsYXBzZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgZGF0YS1icy10YXJnZXQ9XFxcIiNjb2xsYXBzZVR3b1xcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiIGFyaWEtY29udHJvbHM9XFxcImNvbGxhcHNlVHdvXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvaDI+XFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJjb2xsYXBzZVR3b1xcXCIgY2xhc3M9XFxcImFjY29yZGlvbi1jb2xsYXBzZSBjb2xsYXBzZVxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJoZWFkaW5nVHdvXFxcIlxcclxcbiAgICAgICAgICAgIGRhdGEtYnMtcGFyZW50PVxcXCIjYWNjb3JkaW9uRXhhbXBsZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWNjb3JkaW9uLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJpbWctaXRlbS0yXFxcIiBjbGFzcz1cXFwiY2FyZCBteC1hdXRvXFxcIiBzdHlsZT1cXFwid2lkdGg6IDE4cmVtO1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImJvZHktaXRlbS0yXFxcIiBjbGFzcz1cXFwiY2FyZC1ib2R5IHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYWNjb3JkaW9uLWl0ZW0gY29sLW1kLTRcXFwiPlxcclxcbiAgICAgICAgPGgyIGNsYXNzPVxcXCJhY2NvcmRpb24taGVhZGVyXFxcIiBpZD1cXFwiaGVhZGluZ1RocmVlXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJidG4taXRlbS0zXFxcIiBjbGFzcz1cXFwiYWNjb3JkaW9uLWJ1dHRvbiBjb2xsYXBzZWRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10b2dnbGU9XFxcImNvbGxhcHNlXFxcIlxcclxcbiAgICAgICAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cXFwiI2NvbGxhcHNlVGhyZWVcXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIiBhcmlhLWNvbnRyb2xzPVxcXCJjb2xsYXBzZVRocmVlXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvaDI+XFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJjb2xsYXBzZVRocmVlXFxcIiBjbGFzcz1cXFwiYWNjb3JkaW9uLWNvbGxhcHNlIGNvbGxhcHNlXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcImhlYWRpbmdUaHJlZVxcXCJcXHJcXG4gICAgICAgICAgICBkYXRhLWJzLXBhcmVudD1cXFwiI2FjY29yZGlvbkV4YW1wbGVcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFjY29yZGlvbi1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiaW1nLWl0ZW0tM1xcXCIgY2xhc3M9XFxcImNhcmQgbXgtYXV0b1xcXCIgc3R5bGU9XFxcIndpZHRoOiAxOHJlbTtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJib2R5LWl0ZW0tM1xcXCIgY2xhc3M9XFxcImNhcmQtYm9keSB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IHN0eWxlPVxcXCJkaXNwbGF5OiBmbGV4O1xcXCI+XFxyXFxuXFxyXFxuICAgICAgICA8c3BhbiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiA0MHB4XFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIGlkPVxcXCJzZWxlY3RBbGwyXFxcIj5WaXN1YWxpenphIHR1dHRpPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDwvc3Bhbj4gPCEtLWZ1bnppb25lIGNoZSBwcmVuZGUgdHV0dGkgZ2xpIGFubnVuY2kgZSBsaSBzY2hpYWZmYSBuZWwgY29udGVudXRvIGFubnVuY2ktLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IDQwcHhcXFwiIGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnkgZHJvcGRvd24tdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFZpc3VhbGl6emEgcGVyIEdlbmVyZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBpZD1cXFwiZ2VucmVzMlxcXCIgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XFxcIlBMQVRGT1JNXFxcIj48YnV0dG9uIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPlBMQVRGT1JNPC9idXR0b24+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiA0MHB4XFxcIiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnkgZHJvcGRvd24tdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgVmlzdWFsaXp6YSBwZXIgQW5ub1xcclxcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XFxcInllYXJzMlxcXCIgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVxcXCIxOTg1XFxcIj48YnV0dG9uIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPjE5ODU8L2J1dHRvbj48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgPGRpdiBzdHlsZT1cXFwidmVydGljYWwtYWxpZ246IG1pZGRsZTtcXFwiIGNsYXNzPVxcXCJjb2wtbWQtMyBteC1hdXRvXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGJvcmRlci1lbmQtMSBib3JkZXIgcm91bmRlZC1waWxsXFxcIiB0eXBlPVxcXCJzZWFyY2hcXFwiIHBsYWNlaG9sZGVyPVxcXCJjZXJjYVxcXCIgc3R5bGU9XFxcIm1hcmdpbi1yaWdodDoyMHB4XFxcIiBpZD1cXFwic2VhcmNoVGl0bGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYXBwZW5kXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cXFwic2VhcmNoQnV0dG9uMlxcXCIgY2xhc3M9XFxcImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgYmctd2hpdGUgYm9yZGVyLWJvdHRvbS0xIGJvcmRlciByb3VuZGVkLXBpbGwgbXMtbjVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJvdmFcXHJcXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXNlYXJjaFxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIFxcclxcbiAgICAgICAgICA8c3BhbiA+XFxyXFxuICAgICAgICAgICAgPCEtLSBBbGxlcnRhIE1hcnRlbGxhdGE6IHNlIHRvbGdvIGlsIGJvdHRvbmUgdG9sZ28gcHVyZSBsYSBsaXN0YSxcXHJcXG4gICAgICAgICAgICAgICAgcXVpbmRpIGwnaG8gbWVzc28gaGlkZGVuLS0+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBoaWRkZW4gaWQ9XFxcImFkZEluc2VydGlvblxcXCIgc3R5bGU9XFxcImNvbG9yOndoaXRlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi9pbWcvcGx1cy5wbmdcXFwiIGFsdD1cXFwicGx1c1xcXCIgc3R5bGU9XFxcIndpZHRoOjI1cHhcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBJbnNlcmlzY2kgQW5udW5jaW9cXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgPC9zcGFuPiAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgXFxyXFxuICAgIFxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGJyPlxcclxcbiAgICA8ZGl2IHN0eWxlPVxcXCJkaXNwbGF5OiBpbmxpbmUtZmxleDtcXFwiPlxcclxcblxcclxcbiAgICAgICAgPHNwYW4gc3R5bGU9XFxcIm1hcmdpbi1yaWdodDogNDBweFxcXCI+IDxoND4gTm9tZSBDYXRlZ29yaWE6IDwvaDQ+IDwvc3Bhbj5cXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgPHNwYW4gc3R5bGU9XFxcIm1hcmdpbi1yaWdodDogNDBweFxcXCI+IDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGJvcmRlci1lbmQtMSBib3JkZXIgcm91bmRlZC1waWxsXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwiQ2F0ZWdvcmlhXFxcIiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OjIwcHhcXFwiIGlkPVxcXCJjYXRlZ29yeU5hbWVcXFwiPiA8L3NwYW4+XFxyXFxuXFxyXFxuICAgICAgICA8c3BhbiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiA0MHB4XFxcIj4gPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBpZD1cXFwiY3JlYXRlQ2F0ZWdvcnlcXFwiPkNyZWEgQ2F0ZWdvcmlhPC9idXR0b24+IDwvc3Bhbj5cXHJcXG5cXHJcXG4gICAgICAgIDxzcGFuIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IDQwcHhcXFwiPiA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgaWQ9XFxcImRlbGV0ZUVsZW1lbnRzXFxcIj5FbGltaW5hIEFubnVuY2k8L2J1dHRvbj4gPC9zcGFuPlxcclxcblxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGJyPlxcclxcbiAgICBcXHJcXG4gICAgPGRpdiBpZD1cXFwicmVtYWluc1xcXCI+XFxyXFxuICAgICAgICA8dWwgaWQ9XFxcImluc2VydGlvbkNvbnRlbnQyXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cFxcXCIgPlxcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgICAgIFxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdj5cXHJcXG4gICAgICAgIDx1bCBpZD1cXFwicGFnZXMyXFxcIiBjbGFzcz1cXFwicGFnaW5hdGlvbiBwYWdpbmF0aW9uLXNtIG15LTJcXFwiPlxcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgXFxyXFxuICAgIDwvZGl2PiAgICBcXHJcXG5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtMTIgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgIDxoMj48Yj5JbnNlcmlzY2kgQW5udW5jaW88L2I+PC9oMj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC00XFxcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcInRpdGxlXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+XFxyXFxuICAgICAgICAgIDxoMz48Yj5UaXRvbG8gQW5udW5jaW88L2I+PC9oMz5cXHJcXG4gICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInRpdGxlXFxcIiBwbGFjZWhvbGRlcj1cXFwiVGl0b2xvIEFubnVuY2lvXFxcIj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImRlc2NyaXB0aW9uXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+XFxyXFxuICAgICAgICAgIDxoMz48Yj5EZXNjcml6aW9uZSBWaWRlb2dpb2NvPC9iPjwvaDM+XFxyXFxuICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgPHRleHRhcmVhIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJkZXNjcmlwdGlvblxcXCIgcm93cz1cXFwiM1xcXCIgcGxhY2Vob2xkZXI9XFxcIkRlc2NyaXppb25lIEFubnVuY2lvXFxcIj48L3RleHRhcmVhPlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgIDxkaXY+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJ0cmFkZUdhbWVcXFwiIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgIDxoMz48Yj5UcmFkZS1HYW1lPC9iPjwvaDM+XFxyXFxuICAgICAgICAgIDxoNT5EYSBxdWFsZSB0ZXNvcmlubyB0aSB2b3JyZXN0aSBzZXBhcmFyZT88L2g1PlxcclxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZHJvcGRvd24gdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tbGlnaHQgZHJvcGRvd24tdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgUXVhbnRpIGJlaSBnaW9jaGluaSFcXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8dWwgaWQ9XFxcInRyYWRlR2FtZVxcXCIgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNFxcXCI+XFxyXFxuICAgICAgPGRpdj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcIndpc2hHYW1lc1xcXCIgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgPGgzPjxiPldpc2gtTGlzdDwvYj48L2gzPlxcclxcbiAgICAgICAgICA8aDU+Q2hlIGdpb2NoaSB2b3JyZXN0aSByaWNldmVyZSBpbiBjYW1iaW8gZGVsIHR1byB0ZXNvcmlubz88L2g1PlxcclxcblxcclxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZHJvcGRvd24gdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tbGlnaHQgZHJvcGRvd24tdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiXFxyXFxuICAgICAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIj5cXHJcXG4gICAgICAgICAgICAgIFNvbG8gMyBFaCEgTm9uIGJhcmlhbW8hXFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPHVsIGlkPVxcXCJ3aXNoR2FtZXNcXFwiIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXHJcXG4gICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLTRcXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiZ2FsbGVyeVxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPlxcclxcbiAgICAgICAgICA8aDM+PGI+SW1tYWdpbmk8L2I+PC9oMz5cXHJcXG4gICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImdhbGxlcnlcXFwiIHJvd3M9XFxcIjdcXFwiXFxyXFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJJbnNlcmlzY2kgbGUgdXJsIGRlbGxlIGltYWdpbmkgZGVsbCdhbm51bmNpbyBkYSBpbnNlcmlyZSwgb2dudW5hIGRpdmlzYSBkYWxsYSB2aXJnb2xhIEVzOiBodHRwOi8vaW1ndXJsL2ltZy5wbmcsaHR0cDovL2ltZ3VybC9pbWcyLnBuZ1xcXCI+PC90ZXh0YXJlYT5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDx1bCBpZD1cXFwic2VsZWN0ZWRHYW1lc1xcXCI+XFxyXFxuICAgICAgICAgIFxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiY29sLTEyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibWItMyBtdC0zIHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPkFnZ2l1bmdpPC9idXR0b24+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8c3R5bGU+XFxyXFxuICAuY2FyZGZvb3RlciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZvb3RlcmxpbmtzIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XFxyXFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiBibGFjaztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBhOmhvdmVyLCBhOmFjdGl2ZSB7XFxyXFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiBncmV5O1xcclxcbiAgfVxcclxcblxcclxcbiAgbGkge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gIGJvZHkge1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgZm9vdGVyIHtcXHJcXG4gICAgbWluLWhlaWdodDogNTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8qIFRoZSBhcnRpY2xlIGZpbGxzIGFsbCB0aGUgc3BhY2UgYmV0d2VlbiBoZWFkZXIgJiBmb290ZXIgKi9cXHJcXG4gIGJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgZGl2LmNvbnRhaW5lciB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICB9XFxyXFxuXFxyXFxuPC9zdHlsZT5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjYXJkZm9vdGVyXFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5cXHJcXG4gICAgPGltZyBzcmM9XFxcIi4vaW1nL3ZpZGVvZ2FtZWxvdmVyZm9vdGVyLnBuZ1xcXCIgc3R5bGU9XFxcIndpZHRoOjI3JTsgcGFkZGluZzogMiU7ICBvcGFjaXR5OiAwLjg7XFxcIiBhbHQ9XFxcIlxcXCI+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCIgc3R5bGU9XFxcInBhZGRpbmctYm90dG9tOiAxJTtcXFwiPlxcclxcbiAgICA8dWw+XFxyXFxuICAgICAgPGxpPiA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiZm9vdGVybGlua3NcXFwiPkhvbWU8L2E+IDwvbGk+XFxyXFxuICAgICAgPGxpPiA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiZm9vdGVybGlua3NcXFwiPlBhb2xvPC9hPiA8L2xpPlxcclxcbiAgICAgIDxsaT4gPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImZvb3RlcmxpbmtzXFxcIj5QaWVybzwvYT4gPC9saT5cXHJcXG4gICAgICA8bGk+IDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJmb290ZXJsaW5rc1xcXCI+QWJvdXQgVXM8L2E+IDwvbGk+XFxyXFxuICAgIDwvdWw+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImNhcmQtZm9vdGVyIHRleHQtbXV0ZWRcXFwiIHN0eWxlPVxcXCJwYWRkaW5nLWJvdHRvbTogMSU7IC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiByZ2IoMjIsIDIyLCAyMik7XFxcIj5cXHJcXG4gICAgPHAgIGNsYXNzPVxcXCJmb290ZXJsaW5rc1xcXCI+IMKpMjAyMyBQYW9sbyBFbnRlcnByaXNlIEluYy4gfCBUdXR0aSBpIGRpcml0dGkgcmlzZXJ2YXRpIChhIFBpZXJpbm8pIDwvcD5cXHJcXG4gIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjwhLS1cXHJcXG48c3R5bGU+XFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTByZW0gYXV0bztcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJtYWluXFxcIiBcXFwiLlxcXCIgXFxcImZvb3RlclxcXCI7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kOiAjRjVGN0ZBO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbmJvZHkgLmZvb3RlciB7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgLS1mb290ZXItYmFja2dyb3VuZDojRUQ1NTY1O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xcclxcbiAgbWluLWhlaWdodDogMTJyZW07XFxyXFxufVxcclxcbmJvZHkgLmZvb3RlciAuYnViYmxlcyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBoZWlnaHQ6IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1mb290ZXItYmFja2dyb3VuZCk7XFxyXFxuICBmaWx0ZXI6IHVybChcXFwiI2Jsb2JcXFwiKTtcXHJcXG59XFxyXFxuYm9keSAuZm9vdGVyIC5idWJibGVzIC5idWJibGUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogdmFyKC0tcG9zaXRpb24sIDUwJSk7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1mb290ZXItYmFja2dyb3VuZCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IGJ1YmJsZS1zaXplIHZhcigtLXRpbWUsIDRzKSBlYXNlLWluIGluZmluaXRlIHZhcigtLWRlbGF5LCAwcyksIGJ1YmJsZS1tb3ZlIHZhcigtLXRpbWUsIDRzKSBlYXNlLWluIGluZmluaXRlIHZhcigtLWRlbGF5LCAwcyk7XFxyXFxuICAgICAgICAgIGFuaW1hdGlvbjogYnViYmxlLXNpemUgdmFyKC0tdGltZSwgNHMpIGVhc2UtaW4gaW5maW5pdGUgdmFyKC0tZGVsYXksIDBzKSwgYnViYmxlLW1vdmUgdmFyKC0tdGltZSwgNHMpIGVhc2UtaW4gaW5maW5pdGUgdmFyKC0tZGVsYXksIDBzKTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEwMCUpO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIgLmNvbnRlbnQge1xcclxcbiAgei1pbmRleDogMjtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcclxcbiAgZ3JpZC1nYXA6IDRyZW07XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tZm9vdGVyLWJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIgLmNvbnRlbnQgYSwgYm9keSAuZm9vdGVyIC5jb250ZW50IHAge1xcclxcbiAgY29sb3I6ICNGNUY3RkE7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbmJvZHkgLmZvb3RlciAuY29udGVudCBiIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuYm9keSAuZm9vdGVyIC5jb250ZW50IHAge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIgLmNvbnRlbnQgPiBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuYm9keSAuZm9vdGVyIC5jb250ZW50ID4gZGl2ID4gZGl2IHtcXHJcXG4gIG1hcmdpbjogMC4yNXJlbSAwO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIgLmNvbnRlbnQgPiBkaXYgPiBkaXYgPiAqIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIgLmNvbnRlbnQgPiBkaXYgLmltYWdlIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA0cmVtO1xcclxcbiAgaGVpZ2h0OiA0cmVtO1xcclxcbiAgbWFyZ2luOiAwLjI1cmVtIDA7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgYnViYmxlLXNpemUge1xcclxcbiAgMCUsIDc1JSB7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1zaXplLCA0cmVtKTtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1zaXplLCA0cmVtKTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICB3aWR0aDogMHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAwcmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGJ1YmJsZS1zaXplIHtcXHJcXG4gIDAlLCA3NSUge1xcclxcbiAgICB3aWR0aDogdmFyKC0tc2l6ZSwgNHJlbSk7XFxyXFxuICAgIGhlaWdodDogdmFyKC0tc2l6ZSwgNHJlbSk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgd2lkdGg6IDByZW07XFxyXFxuICAgIGhlaWdodDogMHJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIGJ1YmJsZS1tb3ZlIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgYm90dG9tOiAtNHJlbTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICBib3R0b206IHZhcigtLWRpc3RhbmNlLCAxMHJlbSk7XFxyXFxuICB9XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgYnViYmxlLW1vdmUge1xcclxcbiAgMCUge1xcclxcbiAgICBib3R0b206IC00cmVtO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIGJvdHRvbTogdmFyKC0tZGlzdGFuY2UsIDEwcmVtKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuPC9zdHlsZT5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJtYWluXFxcIj48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJmb290ZXJcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiYnViYmxlc1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZToyLjY2NDUyMzAxNjI4NTE5NjNyZW07IC0tZGlzdGFuY2U6Ny4zMDQxMTYwMzY3NDI2MTc0cmVtOyAtLXBvc2l0aW9uOjgzLjU2MzY4MDUzMzM4NDgzJTsgLS10aW1lOjMuNDk1NjQwMzA5NjI3MjI5NXM7IC0tZGVsYXk6LTIuNzczOTM4MTk2MjM3NzAycztcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6NS44OTQxNDk4NDk4MzgwMTZyZW07IC0tZGlzdGFuY2U6Ny42Mjc5NzQ0ODQzMDA0MjdyZW07IC0tcG9zaXRpb246OTMuMzY4NzgxODgzOTM2NDIlOyAtLXRpbWU6My43NjAxNDg2MjcyODM4NzU2czsgLS1kZWxheTotMy4zOTcxMDIyODg0MDMwMjlzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZToyLjc5ODY0NzEwNjY2NTY4NXJlbTsgLS1kaXN0YW5jZTo5LjIwMDQ5NjgxNzIyMjUyNXJlbTsgLS1wb3NpdGlvbjowLjIwNzc1NzMyNjk4NDE0MTk1JTsgLS10aW1lOjIuMjAxMDk2MDIyMDA1ODY1N3M7IC0tZGVsYXk6LTIuNjk4OTQ4MjE2NDY0NTQ1cztcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6NC4zNTk2MjE5MjY3ODIyOTRyZW07IC0tZGlzdGFuY2U6Ny40NjM1Nzk5MzAwNzQxOXJlbTsgLS1wb3NpdGlvbjo0Ny44Njc4MzE3NDY4NTA5MjUlOyAtLXRpbWU6Mi4xMjA4MjA1NjEyNzA3MjRzOyAtLWRlbGF5Oi0yLjUxNDE3Nzg0OTIxODIzMzZzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZTo1LjAyODM1MjA1MDk3ODE5NnJlbTsgLS1kaXN0YW5jZTo3LjI0MjcyMDAzNjgzMjI0OXJlbTsgLS1wb3NpdGlvbjozMC42OTk4NDYxNTkyNzM5NiU7IC0tdGltZTozLjI1MzU5NTUyODEwNjI4ODNzOyAtLWRlbGF5Oi0zLjM1NTQ1NDUzMjU0Mzk3MTVzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZToyLjc1NTk3ODIyMTg1NzE5M3JlbTsgLS1kaXN0YW5jZTo3LjQ2OTk3MjQ5NjkyNjUwOXJlbTsgLS1wb3NpdGlvbjoxMC4yMzgyMjcwMjA3MDExMzklOyAtLXRpbWU6Mi42NDcyMDAxNTIwMDgzNjZzOyAtLWRlbGF5Oi0zLjU3MjE1OTQ2MjI0OTYyMThzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZTo1LjA4NDgxMjgxNzIwODczNzVyZW07IC0tZGlzdGFuY2U6OS41NTg1NTQxNDI1ODQ2MjZyZW07IC0tcG9zaXRpb246OTQuNTE5ODIwNTc4MzIyMTUlOyAtLXRpbWU6My43MTU1NTU4NzYyMTczMDU1czsgLS1kZWxheTotMy4wODEwMDY2OTY3NTc4NTlzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZTozLjUzNzgwNzU2MDc3NTk1OHJlbTsgLS1kaXN0YW5jZTo5LjQyMTQyMzUyOTg0MTkyOHJlbTsgLS1wb3NpdGlvbjo1LjM5NjI3NDIxMTcwOTAxMyU7IC0tdGltZTozLjE3ODc4OTQ1NTYwMTg4NTZzOyAtLWRlbGF5Oi0zLjQ0NjE2OTkwNTE4Njc3NXM7XFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnViYmxlXFxcIiBzdHlsZT1cXFwiLS1zaXplOjUuNjI3NzMxMjE4NjAwMzQ4cmVtOyAtLWRpc3RhbmNlOjcuNzQ2NDYzNDE2MDc1MTY1cmVtOyAtLXBvc2l0aW9uOjEwLjkyODgwMjQ5MzQ2OTUzMSU7IC0tdGltZToyLjU2NzkyNTkzMjI1NjY5czsgLS1kZWxheTotMy40MDQ4NzMxMDE0NTE5ODZzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZTozLjY5NDk1OTkyMTk0NzIzMTNyZW07IC0tZGlzdGFuY2U6OS4xODE1NDk1ODY3NTAxMDdyZW07IC0tcG9zaXRpb246LTQuNTg5MDU1NTYzNzk4OTc2JTsgLS10aW1lOjMuNzA5NTIyMDY1Mjg4ODM0NXM7IC0tZGVsYXk6LTMuMTI5NTg2MTMxNTkxNjA2N3M7XFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnViYmxlXFxcIiBzdHlsZT1cXFwiLS1zaXplOjIuNzU5MjY0MjIxMDY3MTc4cmVtOyAtLWRpc3RhbmNlOjguNDI2ODg4MDk5NTUxMzdyZW07IC0tcG9zaXRpb246MjguMDQ2NzI4MjkzMTI0NTAyJTsgLS10aW1lOjMuMjg0MDk2MTEwNTIzNnM7IC0tZGVsYXk6LTIuMzY2NTE5ODc0MzA5Mzg3cztcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6Mi41NzQzMDgyNDM1MTA1Njg0cmVtOyAtLWRpc3RhbmNlOjkuNDMwNjUzOTYyNTczODUzcmVtOyAtLXBvc2l0aW9uOjMwLjgzOTc0NjQ3MTczOTYxJTsgLS10aW1lOjMuNjg2NTcwMDE3NjIzMDcwN3M7IC0tZGVsYXk6LTMuNjE5MDM5NjA2MDMzMjk3cztcXFwiPjwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXHJcXG4gICAgPGRpdj5cXHJcXG4gICAgICA8ZGl2PjxiPkVsZGV3PC9iPjxhIGhyZWY9XFxcIiNcXFwiPlNlY3VjZTwvYT48YSBocmVmPVxcXCIjXFxcIj5EcnVwYW5kPC9hPjxhIGhyZWY9XFxcIiNcXFwiPk9jZWFzaDwvYT48YSBocmVmPVxcXCIjXFxcIj5VZ2VmZTwvYT48YSBocmVmPVxcXCIjXFxcIj5CYWJlZDwvYT48L2Rpdj5cXHJcXG4gICAgICA8ZGl2PjxiPlNwb3RoYTwvYj48YSBocmVmPVxcXCIjXFxcIj5NaXNrYXNhPC9hPjxhIGhyZWY9XFxcIiNcXFwiPkFnaXRoZTwvYT48YSBocmVmPVxcXCIjXFxcIj5TY2VzaGE8L2E+PGEgaHJlZj1cXFwiI1xcXCI+THVsbGU8L2E+PC9kaXY+XFxyXFxuICAgICAgPGRpdj48Yj5DaGFzaGFraWI8L2I+PGEgaHJlZj1cXFwiI1xcXCI+Q2hvZ2F1dzwvYT48YSBocmVmPVxcXCIjXFxcIj5QaGFjaHVsZWQ8L2E+PGEgaHJlZj1cXFwiI1xcXCI+VGllYmVmdDwvYT48YSBocmVmPVxcXCIjXFxcIj5PY2lkPC9hPjxhIGhyZWY9XFxcIiNcXFwiPkl6b208L2E+PGEgaHJlZj1cXFwiI1xcXCI+T3J0PC9hPjwvZGl2PlxcclxcbiAgICAgIDxkaXY+PGI+QXRob2Q8L2I+PGEgaHJlZj1cXFwiI1xcXCI+UGFtdXo8L2E+PGEgaHJlZj1cXFwiI1xcXCI+VmFwZXJ0PC9hPjxhIGhyZWY9XFxcIiNcXFwiPk5lZXNrPC9hPjxhIGhyZWY9XFxcIiNcXFwiPk9tZW1hbmVuPC9hPjwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdj48YSBjbGFzcz1cXFwiaW1hZ2VcXFwiIGhyZWY9XFxcImh0dHBzOi8vY29kZXBlbi5pby96LVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJnF1b3Q7aHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTk5MDExL2hhcHB5LnN2ZyZxdW90OylcXFwiPjwvYT5cXHJcXG4gICAgICA8cD7CqTIwMTkgTm90IFJlYWxseTwvcD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48c3ZnIHN0eWxlPVxcXCIgdG9wOjEwMHZoXFxcIj5cXHJcXG4gIDxkZWZzPlxcclxcbiAgICA8ZmlsdGVyIGlkPVxcXCJibG9iXFxcIj5cXHJcXG4gICAgICA8ZmVHYXVzc2lhbkJsdXIgaW49XFxcIlNvdXJjZUdyYXBoaWNcXFwiIHN0ZERldmlhdGlvbj1cXFwiMTBcXFwiIHJlc3VsdD1cXFwiYmx1clxcXCI+PC9mZUdhdXNzaWFuQmx1cj5cXHJcXG4gICAgICA8ZmVDb2xvck1hdHJpeCBpbj1cXFwiYmx1clxcXCIgbW9kZT1cXFwibWF0cml4XFxcIiB2YWx1ZXM9XFxcIjEgMCAwIDAgMCAgMCAxIDAgMCAwICAwIDAgMSAwIDAgIDAgMCAwIDE5IC05XFxcIiByZXN1bHQ9XFxcImJsb2JcXFwiPjwvZmVDb2xvck1hdHJpeD5cXHJcXG4gICAgICBmZUNvbXBvc2l0ZShpbj1cXFwiU291cmNlR3JhcGhpY1xcXCIgaW4yPVxcXCJibG9iXFxcIiBvcGVyYXRvcj1cXFwiYXRvcFxcXCIpIC8vQWZ0ZXIgcmV2aWV3aW5nIHRoaXMgYWZ0ZXIgeWVhcnMgSSBjYW4ndCByZW1lbWJlciB3aHkgSSBhZGRlZCB0aGlzIGJ1dCBpdCBpc24ndCBuZWNlc3NhcnkgZm9yIHRoZSBibG9iIGVmZmVjdFxcclxcbjwvZmlsdGVyPlxcclxcbjwvZGVmcz5cXHJcXG48L3N2Zz5cXHJcXG4tLT5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxuYXYgYXJpYS1sYWJlbD1cXFwiLi4uXFxcIj5cXHJcXG4gICAgPGRpdj5cXHJcXG4gICAgICAgIDxoMSBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPkdlc3Rpc2NpIFV0ZW50aSBSZWdpc3RyYXRpPC9oMT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDx1bCBpZD1cXFwidXNlckxpc3RcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIFxcclxcbiAgICA8L3VsPlxcclxcbiAgICA8dWwgaWQ9XFxcInBhZ2luYXRpb25cXFwiIGNsYXNzPVxcXCJwYWdpbmF0aW9uIHBhZ2luYXRpb24tc20gbXktMlxcXCI+XFxyXFxuICAgICAgICBcXHJcXG4gICAgPC91bD5cXHJcXG48L25hdj5cXHJcXG5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgaWQ9XFxcImJnYXJvdW5kXFxcIiBjbGFzcz1cXFwidGV4dC1jZW50ZXIgbXktNVxcXCI+XFxyXFxuICAgIDxpbWcgc3JjPVxcXCIuL2ltZy92aWRlb2dhbWVsb3Zlci5wbmdcXFwiIGFsdD1cXFwibm90IGZvdW5kXFxcIiBjbGFzcz1cXFwiaGVhZGVySW1nIG14LWF1dG9cXFwiIHN0eWxlPVxcXCJ3aWR0aDogNTAlOyBcXFwiIGlkPVxcXCJoZWFkZXJJbWdcXFwiPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxzdHlsZT5cXHJcXG5cXHJcXG4gIC53aWRnZXRJbnRybyB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC53aWRnZXRJbnRyby1kaXZ7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAjYW5uQ2FyZCB7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNpbWdDYXJkIHtcXHJcXG4gICAgaGVpZ2h0OiA2MCU7XFxyXFxuICAgIHdpZHRoOmZpdC1jb250ZW50O1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuICAuaW1nUyB7XFxyXFxuICAgIHdpZHRoOiA1NHB4O1xcclxcbiAgICBoZWlnaHQ6IDQycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBib2R5IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC53aWRnZXRQaWMge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBpY1JpZ2h0IHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucGljbGVmdCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VjIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTAlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxyXFxuICAgIHBhZGRpbmc6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucCB7XFxyXFxuICAgIHBhZGRpbmc6IDBweDtcXHJcXG4gIH1cXHJcXG4gXFxyXFxuPC9zdHlsZT5cXHJcXG5cXHJcXG48c2VjdGlvbiBjbGFzcz1cXFwicCBzZWMgYm9yZGVyIGJvcmRlci1zdWNjZXNzIG1iLTIgYm9yZGVyLW9wYWNpdHktNTAgcm91bmRlZCByb3cgYWxpbmctaXRlbS1zdGFydFxcXCI+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJwIGNvbC00XFxcIj5cXHJcXG4gICAgPHBpY3R1cmU+XFxyXFxuICAgICAgPGltZyBjbGFzcz1cXFwid2lkZ2V0UGljIHBpY0xlZnQgcm91bmRlZC1zdGFydFxcXCIgc3JjPVxcXCIuL2ltZy9nYW1lc2VhcmNoLmpwZWdcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDAlXFxcIiBhbHQ9XFxcIlxcXCI+XFxyXFxuICAgIDwvcGljdHVyZT5cXHJcXG4gIDwvZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiYm9yZGVyLXN0YXJ0IGJvcmRlci0zIGJvcmRlci1wcmltYXJ5IGNvbC04IHRleHQtc3RhcnQgd2lkZ2V0VGV4dFxcXCI+XFxyXFxuICAgIDxoMT5cXHJcXG4gICAgICBJbCBwb3J0YWxlIGRlaSB2ZXJpIGdhbWVycy5cXHJcXG4gICAgPC9oMT5cXHJcXG4gICAgPGgyPlxcclxcbiAgICAgIFNlaSBhbGxhIHJpY2VyY2EgZGkgdW4gZ2lvY28sIHZlY2NoaW8gbyBudW92byBjaGUgc2lhLCBtYSBub24gcmllc2NpIGEgdHJvdmFybG8/IE5vaSBhYmJpYW1vIGxhIHNvbHV6aW9uZSBwZXIgdGUuLi5cXHJcXG4gICAgICBDZXJjYSB0cmEgY2VudGluYWlhIGRpIGFubnVuY2kgaWwgdGl0b2xvIGNoZSBub24gdHJvdmF2aSBwacO5LCBtZXR0aXRpIGluIGNvbnRhdHRvIGNvbiBsJ3V0ZW50ZSBjaGUgbG8gc3RhIHZlbmRlbmRvLCBcXHJcXG4gICAgICBlIGZhaSBsJ2FmZmFyZSBkZWwgc2Vjb2xvLi4uXFxyXFxuICAgIDwvaDI+XFxyXFxuICA8L2Rpdj5cXHJcXG48L3NlY3Rpb24+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIHRleHQtY2VudGVyXFxcIiBzdHlsZT1cXFwibWFyZ2luLXRvcDogMTAlOyBtYXJnaW4tYm90dG9tOiAxMCU7XFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OjEwJTttYXJnaW4tcmlnaHQ6MTAlO1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbFxcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZCB0ZXh0LWJnLWRhbmdlclxcXCIgc3R5bGU9XFxcIndpZHRoOiAxOHJlbTtoZWlnaHQ6IDEwMCU7XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuICAgICAgICAgIDxoNSBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+Q2VyY2E8L2g1PlxcclxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj5DZXJjYSBpbCB0dW8gZ2lvY28gcHJlZmVyZWl0byB0cmEgY2VudGluYWlhIGRpIGFubnVuY2k8L3A+XFxyXFxuICAgICAgICAgIDxocj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgbWItMyBmb3JtLWNvbnRyb2wgYm9yZGVyIHJvdW5kZWRcXFwiIHN0eWxlPVxcXCJtYXJnaW4tdG9wOiAxMHB4O1xcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgYm9yZGVyLTBcXFwiIGlkPVxcXCJzZWFyY2hUaXRsZVxcXCIgcGxhY2Vob2xkZXI9XFxcIkNlcmNhXFxcIiBhcmlhLWxhYmVsPVxcXCJzZWFyY2hcXFwiIGFyaWEtZGVzY3JpYmVkYnk9XFxcImJhc2ljLWFkZG9uMlxcXCI+XFxyXFxuICAgICAgICAgICAgPGEgaWQ9XFxcInNlYXJjaEJ1dHRvblRpdGxlXFxcIiBocmVmPVxcXCIjXFxcIj48aW1nIGNsYXNzPVxcXCJtcy0xIGJ0biBpbWdTXFxcIiBzcmM9XFxcIi4vaW1nL3NlYXJjaC5wbmdcXFwiIGFsdD1cXFwiXFxcIj48L2E+XFxyXFxuICAgICAgICAgIDwvZGl2PiBcXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sXFxcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIHRleHQtYmctcHJpbWFyeVxcXCIgc3R5bGU9XFxcIndpZHRoOiAxOHJlbTtoZWlnaHQ6IDEwMCU7XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuICAgICAgICAgIDxoNSBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+RXNwbG9yYTwvaDU+XFxyXFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPkVzcGxvcmEgbWlnbGlhbGlhIGRpIGdpb2NoaSB0cmEgZ2xpIGFubnVuY2kgcHJlc2VudGk8L3A+XFxyXFxuICAgICAgICAgIDxocj5cXHJcXG4gICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgaWQ9XFxcImluc2VydGlvbnNDYXJkXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvXFxcIj5Bbm51bmNpPC9hPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgdGV4dC1iZy1zdWNjZXNzXFxcIiBzdHlsZT1cXFwid2lkdGg6IDE4cmVtO2hlaWdodDogMTAwJTtcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgPGg1IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5TY2FtYmlhPC9oNT5cXHJcXG4gICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+SGFpIHVuIGdpb2NvIGRpIGN1aSBub24gdGUgbmUgZmFpIHBpw7kgbnVsbGEgcGVyIGxlIG1pbGlhcmRpIGRpIHZvbHRlIGNoZSBsbyBoYWkgZmluaXRvP1xcclxcbiAgICAgICAgICAgIGluc2VyaXNjaSBxdWkgaWwgdHVvIGFubnVuY2lvIVxcclxcbiAgICAgICAgICA8L3A+XFxyXFxuICAgICAgICAgIDxocj5cXHJcXG4gICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgaWQ9XFxcImluc2VydENhcmRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxpZ2h0XFxcIj5JbnNlcmlzY2kgQW5udW5jaW88L2E+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48c2VjdGlvbiBjbGFzcz1cXFwicCBzZWMgYm9yZGVyIGJvcmRlci1zdWNjZXNzIG1iLTIgYm9yZGVyLW9wYWNpdHktNTAgcm91bmRlZCByb3cgYWxpbmctaXRlbS1zdGFydFxcXCI+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJib3JkZXItZW5kIGJvcmRlci0zIGJvcmRlci1wcmltYXJ5IGNvbC04IHRleHQtc3RhcnQgd2lkZ2V0VGV4dFxcXCI+XFxyXFxuICAgIDxoMT5cXHJcXG4gICAgICBJbCBwb3J0YWxlIGRlaSB2ZXJpIGdhbWVycy5cXHJcXG4gICAgPC9oMT5cXHJcXG4gICAgPGgyPlxcclxcbiAgICAgIFNlaSBhbGxhIHJpY2VyY2EgZGkgdW4gZ2lvY28sIHZlY2NoaW8gbyBudW92byBjaGUgc2lhLCBtYSBub24gcmllc2NpIGEgdHJvdmFybG8/IE5vaSBhYmJpYW1vIGxhIHNvbHV6aW9uZSBwZXIgdGUuLi5cXHJcXG4gICAgICBDZXJjYSB0cmEgY2VudGluYWlhIGRpIGFubnVuY2kgaWwgdGl0b2xvIGNoZSBub24gdHJvdmF2aSBwacO5LCBtZXR0aXRpIGluIGNvbnRhdHRvIGNvbiBsJ3V0ZW50ZSBjaGUgbG8gc3RhIHZlbmRlbmRvLCBcXHJcXG4gICAgICBlIGZhaSBsJ2FmZmFyZSBkZWwgc2Vjb2xvLi4uXFxyXFxuICAgIDwvaDI+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcInAgY29sLTRcXFwiPlxcclxcbiAgICA8cGljdHVyZT5cXHJcXG4gICAgICA8aW1nIGNsYXNzPVxcXCJ3aWRnZXRQaWMgcGljUmlnaHQgcm91bmRlZC1lbmRcXFwiIHNyYz1cXFwiLi9pbWcvZ2FtZXRyYWRlLnBuZ1xcXCIgc3R5bGU9XFxcIndpZHRoOjEwMCVcXFwiIGFsdD1cXFwiXFxcIj5cXHJcXG4gICAgPC9waWN0dXJlPlxcclxcbiAgPC9kaXY+XFxyXFxuPC9zZWN0aW9uPlxcclxcblxcclxcbjxoMT5VbHRpbWkgYW5udW5jaTo8L2gxPlxcclxcbjxoMj5Db250cm9sbGEgcXVpIGdsaSB1bHRpbWkgYW5udW5jaTwvaDI+XFxyXFxuPGRpdiBpZD1cXFwiY2Fyb3VzZWxFeGFtcGxlQ29udHJvbHNcXFwiIGNsYXNzPVxcXCJjYXJvdXNlbCBzbGlkZVxcXCIgZGF0YS1icy1yaWRlPVxcXCJjYXJvdXNlbFxcXCI+XFxyXFxuICAgIDxkaXYgaWQ9XFxcImlubmVyQ2Fyb3VzZWxIb21lXFxcIiBjbGFzcz1cXFwiY2Fyb3VzZWwtaW5uZXJcXFwiPlxcclxcbiAgICAgICBcXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxidXR0b24gY2xhc3M9XFxcImNhcm91c2VsLWNvbnRyb2wtcHJldlxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRhcmdldD1cXFwiI2Nhcm91c2VsRXhhbXBsZUNvbnRyb2xzXFxcIiBkYXRhLWJzLXNsaWRlPVxcXCJwcmV2XFxcIj5cXHJcXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+UHJldmlvdXM8L3NwYW4+XFxyXFxuICAgIDwvYnV0dG9uPlxcclxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYXJvdXNlbC1jb250cm9sLW5leHRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10YXJnZXQ9XFxcIiNjYXJvdXNlbEV4YW1wbGVDb250cm9sc1xcXCIgZGF0YS1icy1zbGlkZT1cXFwibmV4dFxcXCI+XFxyXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPk5leHQ8L3NwYW4+XFxyXFxuICAgIDwvYnV0dG9uPlxcclxcbiAgPC9kaXY+XFxyXFxuXFxyXFxuPHNlY3Rpb24gY2xhc3M9XFxcInAgc2VjIGJvcmRlciBib3JkZXItc3VjY2VzcyBtYi0yIGJvcmRlci1vcGFjaXR5LTUwIHJvdW5kZWQgcm93IGFsaW5nLWl0ZW0tc3RhcnRcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwicCBjb2wtNFxcXCI+XFxyXFxuICAgIDxwaWN0dXJlPlxcclxcbiAgICAgIDxpbWcgY2xhc3M9XFxcIndpZGdldFBpYyBwaWNMZWZ0IHJvdW5kZWQtc3RhcnRcXFwiIHNyYz1cXFwiLi9pbWcvUmV1bmlvbi5qcGVnXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwJVxcXCIgYWx0PVxcXCJcXFwiPlxcclxcbiAgICA8L3BpY3R1cmU+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImJvcmRlci1zdGFydCBib3JkZXItMyBib3JkZXItcHJpbWFyeSBjb2wtOCB0ZXh0LXN0YXJ0IHdpZGdldFRleHRcXFwiPlxcclxcbiAgICA8aDE+XFxyXFxuICAgICAgQ2hpIFNpYW1vXFxyXFxuICAgIDwvaDE+XFxyXFxuICAgIDxoMj5cXHJcXG4gICAgICBTaWFtbyB1biBwdW50byBkJ2luY29udHJvIHBlciB0dXR0aSBxdWVsbGkgY2hlIHNpIHNvbm8gYXBwYXNzaW9uYXRpIGEgcXVlbCBtb25kbyBtYWdpY28gcmluY2hpdXNvIGFsbCdpbnRlcm5vXFxyXFxuICAgICAgZGkgdW5hIGNhcnR1Y2NpYSwgZGlzY28gbyBzY2hlZGEsIGRhbmRvZ2xpIGwnb3Bwb3J0dW5pdMOgIGRpIHBvdGVyIHJpdHJvdmFyZSB2ZWNjaGkgc29nbmksIGUgc2NhbWJpYXJsaSBjb24gYWxjdW5pIG51b3ZpLlxcclxcbiAgICAgIEwnb3Bwb3J0dW5pdGEgZGkgY29ub3NjZXJlIHBlcnNvbmUgZGVsbG8gc3Rlc3NvIHBhcmVyZSwgbyBvcHBvc3RvLlxcclxcbiAgICA8L2gyPlxcclxcbiAgPC9kaXY+XFxyXFxuPC9zZWN0aW9uPlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgIDxsYWJlbCBmb3I9XFxcInVzZXJuYW1lU2lnbkluXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+Tmlja25hbWU8L2xhYmVsPlxcclxcbiAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInVzZXJuYW1lU2lnbkluXFxcIj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgPGxhYmVsIGZvcj1cXFwicGFzc3dvcmRTaWduSW5cXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5QYXNzd29yZDwvbGFiZWw+XFxyXFxuICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInBhc3N3b3JkU2lnbkluXFxcIj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJtYi0zIGZvcm0tY2hlY2tcXFwiPlxcclxcbiAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWlucHV0XFxcIiBpZD1cXFwicmVtZW1iZXJNZVNpZ25JblxcXCI+XFxyXFxuICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJyZW1lbWJlck1lU2lnbkluXFxcIj5SaWNvcmRhbWk8L2xhYmVsPlxcclxcbjwvZGl2PlxcclxcbjxkaXYgaWQ9XFxcImxvZ2luUmVzdWx0XFxcIiBjbGFzcz1cXFwibXktM1xcXCI+XFxyXFxuXFxyXFxuPC9kaXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8YnV0dG9uIGlkPVxcXCJ0cnlUb0xvZ1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIj5BY2NlZGk8L2J1dHRvbj5cXHJcXG48cD5Ob24gc2VpIGFuY29yYSByZWdpc3RyYXRvPzwvcD5cXHJcXG48YnV0dG9uIGlkPVxcXCJsb2dpblNpZ25VcFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIj5SZWdpc3RyYXRpPC9idXR0b24+XFxyXFxuPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgZGF0YS1icy1kaXNtaXNzPVxcXCJtb2RhbFxcXCI+Q2hpdWRpPC9idXR0b24+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGNsYXNzPVxcXCJ0ZXh0LWNlbnRlciBtYi0zXFxcIj5cXHJcXG4gICAgPGgzPk9oLCBjaSBkaXNwaWFjZSBjaGUgdmFpIHZpYSE8YnI+VG9ybmEgYSB0cm92YXJjaSE8L2gzPlxcclxcbiAgICA8aW1nIHNyYz1cXFwiLi9pbWcvZmFkRmFjZS5wbmdcXFwiIHdpZHRoPVxcXCIxMDBcXFwiIGFsdD1cXFwiaW1tYWdpbmUgdHJpc3RlXFxcIj5cXHJcXG48L2Rpdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIGlkPVxcXCJteU1vZGFsXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwic2lnbkluTW9kYWxMYWJlbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLWNlbnRlcmVkXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cXFwibW9kYWwtdGl0bGUgZnMtNVxcXCIgaWQ9XFxcInNpZ25Jbk1vZGFsTGFiZWxcXFwiPk1pbmNoaWEgSm9obm55IENhcnJhYmJhZ2dpbzwvaDE+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuLWNsb3NlXFxcIiBkYXRhLWJzLWRpc21pc3M9XFxcIm1vZGFsXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCI+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwibXlNb2RhbEJvZHlcXFwiIGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwibXlNb2RhbEZvb3RlclxcXCIgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPCEtLW5hdmJhciBjb250cm9sbGVyIGljb24tLT5cXHJcXG48YnV0dG9uIGlkPVxcXCJsb2dvXFxcIiBjbGFzcz1cXFwibG9nby1idXR0b25cXFwiPiA8aW1nIGNsYXNzPVxcXCJsb2dvXFxcIiBzcmM9XFxcIi4vaW1nL2xvZ28ucG5nXFxcIiBhbHQ9XFxcImxvZ29cXFwiPjwvYnV0dG9uPlxcclxcbjxidXR0b24gaWQ9XFxcImdhbWVzXFxcIiBjbGFzcz1cXFwibG9nby1idXR0b24gYmFjay10cmFuc3BhcmVudFxcXCI+IDxpbWcgY2xhc3M9XFxcImxvZ29cXFwiIHNyYz1cXFwiLi9pbWcvam95c3RpY2soMSkucG5nXFxcIiBhbHQ9XFxcImxvZ29cXFwiPjwvYnV0dG9uPlxcclxcbjxuYXY+XFxyXFxuICA8dWw+XFxyXFxuICAgIDwhLS1uYXZiYXIgYnV0dG9ucy0tPlxcclxcbiAgICA8IS0tbmF2YmFyIGNvbnRyb2xsZXIgaWNvbi0tPlxcclxcbiAgICBcXHJcXG4gICAgPCEtLXkgYnV0dG9uLS0+XFxyXFxuICAgIDxidXR0b24gaWQ9XFxcImluc2VydGlvbnNcXFwiIGNsYXNzPVxcXCJidXR0b24tb25lIG5hdi1idXR0b25cXFwiPkFubnVuY2k8L2J1dHRvbj5cXHJcXG4gICAgPCEtLWEgYnV0dG9uLS0+XFxyXFxuICAgIDxidXR0b24gaWQ9XFxcImFkZEluc2VydGlvblxcXCIgY2xhc3M9XFxcImJ1dHRvbi10aHJlZSBuYXYtYnV0dG9uXFxcIj5DcmVhIEFubnVuY2lvPC9idXR0b24+XFxyXFxuICAgIDwhLS14IGJ1dHRvbi0tPlxcclxcbiAgICA8YnV0dG9uIGlkPVxcXCJtYW5hZ2VtZW50XFxcIiBjbGFzcz1cXFwiYnV0dG9uLXR3byBuYXYtYnV0dG9uXFxcIj5HZXN0aW9uZSBVdGVudGk8L2J1dHRvbj5cXHJcXG4gICAgPCEtLWEgYnV0dG9uLS0+XFxyXFxuICAgIDxidXR0b24gaWQ9XFxcImluc01hbmFnZW1lbnRcXFwiIGNsYXNzPVxcXCJidXR0b24tdGhyZWUgbmF2LWJ1dHRvblxcXCI+R2VzdGlvbmUgQW5udW5jaTwvYnV0dG9uPlxcclxcbiAgICA8IS0tYiBidXR0b24tLT5cXHJcXG4gICAgPGJ1dHRvbiBpZD1cXFwibG9naW5cXFwiIGNsYXNzPVxcXCJidXR0b24tZm91ciBuYXYtYnV0dG9uXFxcIiBkYXRhLWJzLXRvZ2dsZT1cXFwibW9kYWxcXFwiXFxyXFxuICAgICAgZGF0YS1icy10YXJnZXQ9XFxcIiNteU1vZGFsXFxcIj5Mb2dpbjwvYnV0dG9uPlxcclxcbiAgICA8IS0tYiBidXR0b24tLT5cXHJcXG4gICAgPGJ1dHRvbiBpZD1cXFwic2lnbk91dEJ1dHRvblxcXCIgY2xhc3M9XFxcImJ1dHRvbi1mb3VyIG5hdi1idXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJtb2RhbFxcXCJcXHJcXG4gICAgZGF0YS1icy10YXJnZXQ9XFxcIiNteU1vZGFsXFxcIj5Mb2dvdXQ8L2J1dHRvbj5cXHJcXG4gICAgPGJ1dHRvbiBpZD1cXFwicHJvZmlsZVxcXCIgY2xhc3M9XFxcInByb2ZpbGUtYnV0dG9uXFxcIj5cXHJcXG4gICAgICA8c3BhbiBjbGFzcz1cXFwicG9zaXRpb24tYWJzb2x1dGUgdG9wLTIgc3RhcnQtOTAgdHJhbnNsYXRlLW1pZGRsZSBwLTIgYmctZGFuZ2VyIGJvcmRlciBib3JkZXItbGlnaHQgcm91bmRlZC1jaXJjbGVcXFwiPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+TmV3IGFsZXJ0czwvc3Bhbj5cXHJcXG4gICAgICA8L3NwYW4+XFxyXFxuICAgICAgPGltZyBjbGFzcz1cXFwibG9nbyBwcm9maWxlXFxcIiBzcmM9XFxcIi4vaW1nL3Byb2ZpbGUucG5nXFxcIiBhbHQ9XFxcImxvZ29cXFwiPlxcclxcbiAgICA8L2J1dHRvbj5cXHJcXG4gIDwvdWw+XFxyXFxuXFxyXFxuICBcXHJcXG48L25hdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgY2xhc3M9XFxcInJvdyBtdC0yIG1iLTRcXFwiPlxcclxcbiAgICA8ZGl2IGlkPVxcXCJ0aXRsZXByb2ZpbGVcXFwiIGNsYXNzPVxcXCJjb2wtMTIgdGV4dC1jZW50ZXJcXFwiPlxcclxcblxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJyb3cgbXQtNSBtYi0yXFxcIj5cXHJcXG4gICAgPGRpdiBpZD1cXFwiYm9keXByb2ZpbGVcXFwiIGNsYXNzPVxcXCJjb2wtNiB0ZXh0LWVuZFxcXCI+XFxyXFxuXFxyXFxuXFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGlkPVxcXCJidXR0b25zLXByb2ZpbGVcXFwiIGNsYXNzPVxcXCJjb2wtMiB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICA8YnI+XFxyXFxuICAgICAgICA8YnI+XFxyXFxuICAgICAgICA8YnI+XFxyXFxuICAgICAgICA8YnI+XFxyXFxuICAgICAgICA8YnI+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcblxcclxcbiAgICA8ZGl2IGlkPVxcXCJpbnB1dC1wcm9maWxlXFxcIiBjbGFzcz1cXFwiY29sLTQgXFxcIj5cXHJcXG4gICAgICAgIDxicj5cXHJcXG4gICAgICAgIDxicj5cXHJcXG4gICAgICAgIDxicj5cXHJcXG4gICAgICAgIDxicj5cXHJcXG4gICAgICAgIDxicj5cXHJcXG4gICAgICAgIDxkaXYgIGNsYXNzPVxcXCJpbnB1dC1ncm91cCBtYi0zXFxcIiA+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtcHJlcGVuZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC10ZXh0XFxcIiBpZD1cXFwiYmFzaWMtYWRkb24xXFxcIj5Vc2VybmFtZTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XFxcInVzZXJuYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiVXNlcm5hbWVcXFwiIGFyaWEtbGFiZWw9XFxcIlVzZXJuYW1lXFxcIlxcclxcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVxcXCJiYXNpYy1hZGRvbjFcXFwiPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2ICBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgbWItMyBteS00XFxcIiA+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtcHJlcGVuZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC10ZXh0XFxcIiBpZD1cXFwiYmFzaWMtYWRkb24xXFxcIj5FbWFpbDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XFxcImVtYWlsXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW1haWxcXFwiIGFyaWEtbGFiZWw9XFxcIkVtYWlsXFxcIlxcclxcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVxcXCJiYXNpYy1hZGRvbjFcXFwiPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcInJvdyBtdC0yIG1iLTRcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtMTIgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgPGJyPlxcclxcbiAgICAgICAgPGJyPlxcclxcbiAgICAgICAgPGJyPlxcclxcbiAgICAgICAgPGgzPkNhbWJpbyBQYXNzd29yZDwvaDM+XFxyXFxuICAgICAgICA8YnI+XFxyXFxuICAgICAgICA8YnI+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNiB0ZXh0LWVuZFxcXCI+XFxyXFxuICAgICAgICA8ZGl2ICBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgbWItM1xcXCIgPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwLXByZXBlbmRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtdGV4dFxcXCIgaWQ9XFxcImJhc2ljLWFkZG9uMVxcXCI+VmVjY2hpYSBwYXNzd29yZDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XFxcIm9sZFBhc3N3b3JkXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIlZlY2NoaWFQYXNzd29yZFxcXCIgYXJpYS1sYWJlbD1cXFwiVmVjY2hpYVBhc3N3b3JkXFxcIlxcclxcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVxcXCJiYXNpYy1hZGRvbjFcXFwiPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNiB0ZXh0LXN0YXJ0XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgIGNsYXNzPVxcXCJpbnB1dC1ncm91cCBtYi0zXFxcIiA+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtcHJlcGVuZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC10ZXh0XFxcIiBpZD1cXFwiYmFzaWMtYWRkb24xXFxcIj5OdW92YSBQYXNzd29yZDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XFxcIm5ld1Bhc3N3b3JkXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIk51b3ZhUGFzc3dvcmRcXFwiIGFyaWEtbGFiZWw9XFxcIk51b3ZhUGFzc3dvcmRcXFwiXFxyXFxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XFxcImJhc2ljLWFkZG9uMVxcXCI+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgIGlkPVxcXCJjcFxcXCIgY2xhc3M9XFxcImNvbC0xMiB0ZXh0LWNlbnRlciBteS01XFxcIj5cXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgXFxyXFxuICAgICAgICBcXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8Zm9ybT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJuYW1lU2lnblVwXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+Tm9tZTwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcIm5hbWVTaWduVXBcXFwiIHJlcXVpcmVkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJzdXJuYW1lU2lnblVwXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+Q29nbm9tZTwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInN1cm5hbWVTaWduVXBcXFwiIHJlcXVpcmVkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJ1c2VybmFtZVNpZ25VcFxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPk5pY2tuYW1lPC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwidXNlcm5hbWVTaWduVXBcXFwiIHJlcXVpcmVkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJlbWFpbFNpZ25VcFxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPkVtYWlsPC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImVtYWlsU2lnblVwXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwicGFzc3dvcmRTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5QYXNzd29yZDwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJwYXNzd29yZFNpZ25VcFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImNvbmZpcm1fcGFzc3dvcmRTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5Db25mZXJtYSBQYXNzd29yZDwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJjb25maXJtX3Bhc3N3b3JkU2lnblVwXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgaWQ9XFxcInNpZ25VcFJlc3VsdFxcXCIgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcblxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Zvcm0+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8YnV0dG9uIGlkPVxcXCJzaWduVXBMb2dpblxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5BY2NlZGk8L2J1dHRvbj5cXHJcXG48YnV0dG9uIGlkPVxcXCJ0cnl0b1NpZ25VcFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiBkaXNhYmxlZD5SZWdpc3RyYXRpPC9idXR0b24+XFxyXFxuPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgZGF0YS1icy1kaXNtaXNzPVxcXCJtb2RhbFxcXCI+Q2hpdWRpPC9idXR0b24+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGlkPVxcXCJjcmVhdGVWR0NvbnRhaW5lclxcXCIgY2xhc3M9XFxcImNvbnRhaW5lciBteS01IGJhY2stc2VtaS10cmFuc3BhcmVudFxcXCIgc3R5bGU9XFxcImJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCByZ2IoMTcxLCAyMDksIDU3KTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHJnYigxNzEsIDIwOSwgNTcpO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCByZ2IoMTcxLCAyMDksIDU3KTtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZ2IoMTcxLCAyMDksIDU3KTtcXHJcXG4gICAgXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93IGFsaWduLWl0ZW1zLXN0YXJ0XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC00XFxcIiBzdHlsZT1cXFwiXFxyXFxuICAgICAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCByZ2IoMTcxLCAyMDksIDU3KTsgXFxyXFxuICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiKDE3MSwgMjA5LCA1Nyk7XFxyXFxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgIFxcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm15LTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+Q3JlYSBjb25zb2xlIGUgZ2VuZXJpPC9oMj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5ld0dlbnJlXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+PGI+TnVvdm8gR2VuZXJlPC9iPjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwibmV3R2VucmVcXFwiIHBsYWNlaG9sZGVyPVxcXCJJbnNlcmlzY2kgbnVvdm8gZ2VuZXJlXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJuZXdHZW5yZUJ0blxcXCIgY2xhc3M9XFxcImJ0biBtYi00IGJ1dHRvbi1ob3ZlclxcXCI+PGI+Q3JlYTwvYj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibmV3Q29uc29sZVxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPjxiPk51b3ZhIENvbnNvbGU8L2I+PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJuZXdDb25zb2xlXFxcIiBwbGFjZWhvbGRlcj1cXFwiSW5zZXJpc2NpIG51b3ZhIGNvbnNvbGVcXFwiPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcIm5ld0NvbnNvbGVCdG5cXFwiIGNsYXNzPVxcXCJidG4gbWItNCBidXR0b24taG92ZXJcXFwiPjxiPkNyZWE8L2I+PC9idXR0b24+XFxyXFxuXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC04XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJteS0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+SW5zZXJpc2NpIERhdGkgVmlkZW9naW9jbzwvaDI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWItNVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5hbWVcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj48Yj5UaXRvbG88L2I+PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJWR25hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJJbnNlcmlzY2kgaWwgdGl0b2xvIGRlbCBnaW9jb1xcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWItNVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInllYXJcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj48Yj5Bbm5vIGRpIFVzY2l0YTwvYj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiVkd5ZWFyXFxcIiBtaW49XFxcIjE5NzBcXFwiIG1heGxlbmd0aD1cXFwiMjAyM1xcXCIgcGxhY2Vob2xkZXI9XFxcIkluc2VyaXNjaSBsJ2Fubm8gZGkgdXNjaXRhXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtYi01XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIiBmb3I9XFxcImNvdmVyXFxcIj48Yj5MaW5rIGltbWFnaW5lPC9iPjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiVkdjb3ZlclxcXCIgcGxhY2Vob2xkZXI9XFxcIkluc2VyaXNjaSBpbCBsaW5rIGRlbGxhIGNvcGVydGluYVxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvdyBhbGlnbi1pdGVtcy1zdGFydFxcXCI+XFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC00XFxcIj5cXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICA8aDQgY2xhc3M9XFxcInRleHQtZW5kXFxcIj48Yj5TZWxlemlvbmEgY2F0ZWdvcmllOjwvYj48L2g0PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgIDxkaXYgaWQ9XFxcImdlbnJlTGlzdFxcXCIgY2xhc3M9XFxcImNvbC04XFxcIj5cXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICBcXHJcXG5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93IGFsaWduLWl0ZW1zLXN0YXJ0XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC00XFxcIj5cXHJcXG4gICAgICAgICAgICA8YnI+PGJyPlxcclxcbiAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwidGV4dC1lbmRcXFwiPjxiPlNlbGV6aW9uYSBjb25zb2xlOjwvYj48L2g0PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJjb25zb2xlTGlzdFxcXCIgY2xhc3M9XFxcImNvbC04XFxcIj5cXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGJ1dHRvbiBpZD1cXFwibmV3VmlkZW9HYW1lQnRuXFxcIiBjbGFzcz1cXFwiYnRuIG1iLTQgYnV0dG9uLWhvdmVyXFxcIj48Yj5DcmVhPC9iPjwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG48L2Rpdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgc3R5bGU9XFxcImRpc3BsYXk6IGZsZXg7XFxcIiBjbGFzcz1cXFwibXktNVxcXCI+XFxyXFxuXFxyXFxuICAgIDxzcGFuIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IDQwcHhcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBpZD1cXFwic2VsZWN0QWxsXFxcIj5WaXN1YWxpenphIHR1dHRpIGkgVmlkZW9nYW1lPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9zcGFuPiA8IS0tZnVuemlvbmUgY2hlIHByZW5kZSB0dXR0aSBnbGkgYW5udW5jaSBlIGxpIHNjaGlhZmZhIG5lbCBjb250ZW51dG8gYW5udW5jaS0tPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiA0MHB4XFxcIiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnkgZHJvcGRvd24tdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgVmlzdWFsaXp6YSBwZXIgR2VuZXJlXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx1bCBpZD1cXFwiZ2VucmVzXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVxcXCJQTEFURk9STVxcXCI+PGJ1dHRvbiBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj5QTEFURk9STTwvYnV0dG9uPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9XFxcIm1hcmdpbi1yaWdodDogNDBweFxcXCIgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnkgZHJvcGRvd24tdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBWaXN1YWxpenphIHBlciBBbm5vXFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8dWwgaWQ9XFxcInllYXJzXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSBpZD1cXFwiMTk4NVxcXCI+PGJ1dHRvbiBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj4xOTg1PC9idXR0b24+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgIDxkaXYgc3R5bGU9XFxcInZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxcIiBjbGFzcz1cXFwiY29sLW1kLTMgbXgtYXV0b1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgYm9yZGVyLWVuZC0xIGJvcmRlciByb3VuZGVkLXBpbGxcXFwiIHR5cGU9XFxcInNlYXJjaFxcXCIgcGxhY2Vob2xkZXI9XFxcImNlcmNhXFxcIiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OjIwcHhcXFwiIGlkPVxcXCJzZWFyY2hUaXRsZVxcXCI+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWFwcGVuZFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cXFwic2VhcmNoQnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBiZy13aGl0ZSBib3JkZXItYm90dG9tLTEgYm9yZGVyIHJvdW5kZWQtcGlsbCBtcy1uNVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIHRyb3ZhXFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXNlYXJjaFxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICA8c3BhbiA+XFxyXFxuICAgICAgICA8YnV0dG9uICBpZD1cXFwiYWRkVmlkZW9nYW1lXFxcIiBzdHlsZT1cXFwiY29sb3I6d2hpdGVcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiIGhpZGRlbj5cXHJcXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi9pbWcvcGx1cy5wbmdcXFwiIGFsdD1cXFwicGx1c1xcXCIgc3R5bGU9XFxcIndpZHRoOjI1cHhcXFwiPlxcclxcbiAgICAgICAgICAgIEluc2VyaXNjaSBWaWRlb2dhbWVcXHJcXG4gICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgIDwvc3Bhbj4gICAgICBcXHJcXG4gICAgICAgICAgICAgXFxyXFxuXFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdj5cXHJcXG4gICAgPGRpdiAgaWQ9XFxcIlZpZGVvZ2FtZUNvbnRlbnRcXFwiIGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcblxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2PlxcclxcbiAgICA8dWwgaWQ9XFxcInBhZ2VzVlxcXCIgY2xhc3M9XFxcInBhZ2luYXRpb24gcGFnaW5hdGlvbi1zbSBteS0yXFxcIj5cXHJcXG4gICAgICAgIFxcclxcbiAgICA8L3VsPlxcclxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiICAgICA8aW1nICBpZD1cXFwiYmFjay1nYW1lc1xcXCIgIGNsYXNzPVxcXCJtdC00IGJ1dHRvbmhvdmVyXFxcIiB3aWR0aD0xMjAgc3JjPVxcXCIuL2ltZy9iYWNrLnBuZ1xcXCI+XFxyXFxuXFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwicm93XFxcIiA+XFxyXFxuICAgIDxkaXYgaWQ9IFxcXCJnYW1lVGl0bGVcXFwiIGNsYXNzPVxcXCJjb2wtMTIgdGV4dC1jZW50ZXJcXFwiPlxcclxcblxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgPGRpdiBpZD1cXFwiZ2FtZUltYWdlXFxcIiBjbGFzcz1cXFwiY29sLTYgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICBcXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBpZD1cXFwiZ2FtZUluZm9cXFwiIGNsYXNzPVxcXCJjb2wtNiB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgIFxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICBcXHJcXG4gICAgICAgIDxkaXYgaWQ9XFxcImdhbWVJbmZvXFxcIiBjbGFzcz1cXFwiY29sLTYgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICBcXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICBcXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG4gICAgXFxyXFxuXCI7IiwiaW1wb3J0IGFubnVuY2kgZnJvbSAnLi9hbm51bmNpLmh0bWwnXHJcblxyXG5pbXBvcnQgY3JlYUFubnVuY2lvIGZyb20gJy4uL2NyZWFBbm51bmNpby9jcmVhQW5udW5jaW8uaHRtbCdcclxuaW1wb3J0IGluc2VydGlvbiBmcm9tICcuLi9pbnRlcmZhY2VzL2luc2VydGlvbic7XHJcbmltcG9ydCBleHBhbmRJbnNlcnRpb24gZnJvbSAnLi9hbm51bmNpbydcclxuaW1wb3J0IGNyZWF0ZUluc2VydGlvblBhZ2UgZnJvbSAnLi4vY3JlYUFubnVuY2lvL2NyZWFBbm51bmNpbydcclxuXHJcbmxldCBsaXN0OiBpbnNlcnRpb25bXSA9IFtdO1xyXG5sZXQgdmlldzogbnVtYmVyID0gNlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhZ2UoKSB7ICAgICAgIC8qSW5pemlhbGl6emEgdHV0dG8gY2nDsiBjaGUgc2VydmUgYWxsYSBwYWdpbmEgcGVyIGZ1bnppb25hcmUgKi9cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0QWxsXCIpLm9uY2xpY2sgPSBzZWFyY2hCeUFsbDtcclxuICAgIGFzc2lnbkZpbHRlcnMoKTtcclxuICAgIGxldCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEluc2VydGlvbjJcIik7XHJcbiAgICBidG4ub25jbGljaz0oKT0+e1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUw9Y3JlYUFubnVuY2lvO1xyXG4gICAgICAgIGNyZWF0ZUluc2VydGlvblBhZ2UoKTtcclxuICAgIH1cclxuICAgIC8vY3JlYXRlSW5zZXJ0aW9uKCk7XHJcbiAgICBnZXRBbGxJbnNlcnRpb25zKCk7XHJcbiAgICBjcmVhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICBzaG93UmVzdWx0cygxKTtcclxuXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZWFyY2hCeUFsbCgpIHsgICAgICAgICAgICAgLypMYSBmdW56aW9uYSBkZWwgYm90dG9uZSBjaGUgY2VyY2EgdHV0dGkgZ2xpIGFubnVuY2kgc2VuemEgZmlsdHJpKi9cclxuICAgIGdldEFsbEluc2VydGlvbnMoKTtcclxuICAgIGNyZWF0ZVBhZ2luYXRpb24oKTtcclxuICAgIHNob3dSZXN1bHRzKDEpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gYXNzaWduRmlsdGVycygpIHsgICAgICAgICAgICAgLypBc3NlZ25hIGxlIGZ1bnppb25pIGFpIHB1bHNhbnRpIG5lbGxlIGRyb3BEb3duTGlzdCBkYSBwcm92YXJlKi9cclxuICAgIGxldCBnZW5lcmkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdlbnJlc1wiKS5jaGlsZHJlblxyXG4gICAgZm9yIChsZXQgZyBvZiBnZW5lcmkpIHtcclxuICAgICAgICAoZyBhcyBIVE1MQnV0dG9uRWxlbWVudCkub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2VhcmNoQnlHZW5yZShnLmlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgYW5uaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieWVhcnNcIikuY2hpbGRyZW5cclxuICAgIGZvciAobGV0IGEgb2YgYW5uaSkge1xyXG4gICAgICAgIChhIGFzIEhUTUxCdXR0b25FbGVtZW50KS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzZWFyY2hCeVllYXIoTnVtYmVyKChhIGFzIEhUTUxCdXR0b25FbGVtZW50KS5pZCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgc2VhcmNoVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFRpdGxlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBzZWFyY2hUaXRsZS5vbmtleWRvd24gPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIHNlYXJjaEJ5VGl0bGUoc2VhcmNoVGl0bGUudmFsdWUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQnV0dG9uXCIpO1xyXG4gICAgc2VhcmNoQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc2VhcmNoQnlUaXRsZShzZWFyY2hUaXRsZS52YWx1ZSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hCeVRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcclxuICAgIGxldCBmaWx0ZXJlZExpc3QgPSBbXVxyXG4gICAgZm9yIChsZXQgZWxlbWVudCBvZiBsaXN0KSB7XHJcbiAgICAgICAgbGV0IHRpdG9sbyA9IGVsZW1lbnQudGl0bGU7XHJcbiAgICAgICAgbGV0IGdhbWVOYW1lID0gZWxlbWVudC50cmFkZUdhbWUubmFtZVxyXG4gICAgICAgIGlmICgodGl0b2xvLnRvVXBwZXJDYXNlKCkuaW5jbHVkZXModGl0bGUudG9VcHBlckNhc2UoKSkpXHJcbiAgICAgICAgICAgIHx8IChnYW1lTmFtZS50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKHRpdGxlLnRvVXBwZXJDYXNlKCkpKSkge1xyXG4gICAgICAgICAgICBmaWx0ZXJlZExpc3QucHVzaChlbGVtZW50KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxpc3QgPSBbXTtcclxuICAgIGxpc3QgPSBmaWx0ZXJlZExpc3RcclxuICAgIGNyZWF0ZVBhZ2luYXRpb24oKTtcclxuICAgIHNob3dSZXN1bHRzKDEpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2VhcmNoQnlHZW5yZShnZW5yZTogU3RyaW5nKSB7XHJcbiAgICBjb25zb2xlLmxvZyhnZW5yZSk7XHJcbiAgICBsZXQgZmlsdGVyZWRMaXN0ID0gW11cclxuICAgIGZvciAobGV0IGVsZW1lbnQgb2YgbGlzdCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC50cmFkZUdhbWUuZ2VucmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudHJhZGVHYW1lLmdlbnJlW2ldLmdlbnJlID09IGdlbnJlKSB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZExpc3QucHVzaChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGk9ZWxlbWVudC50cmFkZUdhbWUuZ2VucmUubGVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGlzdCA9IFtdO1xyXG4gICAgbGlzdCA9IGZpbHRlcmVkTGlzdFxyXG4gICAgY3JlYXRlUGFnaW5hdGlvbigpO1xyXG4gICAgc2hvd1Jlc3VsdHMoMSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlYXJjaEJ5WWVhcih5ZWFyOiBudW1iZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKHllYXIpO1xyXG4gICAgbGV0IGZpbHRlcmVkTGlzdCA9IFtdO1xyXG4gICAgZm9yIChsZXQgZWxlbWVudCBvZiBsaXN0KSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQudHJhZGVHYW1lLnllYXIgPT0geWVhcikge1xyXG4gICAgICAgICAgICBmaWx0ZXJlZExpc3QucHVzaChlbGVtZW50KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxpc3QgPSBbXTtcclxuICAgIGxpc3QgPSBmaWx0ZXJlZExpc3RcclxuICAgIGNyZWF0ZVBhZ2luYXRpb24oKTtcclxuICAgIHNob3dSZXN1bHRzKDEpO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEFsbEluc2VydGlvbnMoKSB7IC8qIFF1ZXN0YSDDqCBzb2xvIHVuYSBwcm92YSwgc2NvbW1lbnRhcmUgbGEgZmV0Y2ggcGnDuSBnacO5ICovXHJcbiAgICBsaXN0ID0gW107XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHaW9jbzEgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL2kuZXRzeXN0YXRpYy5jb20vNjI3NzgwNC9yL2lsLzdkZjAwZS82OTc1NDYzNDAvaWxfMTE0MHhOLjY5NzU0NjM0MF9maXZzLmpwZ1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHaW9jbzIgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL3d3dy5tb2J5Z2FtZXMuY29tL2ltYWdlcy9jb3ZlcnMvbC8xNDQ0NS10aGUtbGVnZW5kLW9mLXplbGRhLW5lcy1mcm9udC1jb3Zlci5qcGdcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlR2lvY28zID0ge1xyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvaXQvYi9iMy9Qb2slQzMlQTltb25fR2lhbGxvLnBuZ1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHaW9jbzQgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL21ldGFsZ2Vhci5mYW5kb20uY29tL2l0L3dpa2kvTWV0YWxfR2Vhcj9maWxlPU1ldGFsX0dlYXIuanBnXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdhbGxlcnkxID0ge1xyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvaXQvdGh1bWIvNy83Ny9QaWthY2h1LnBuZy8xMDI0cHgtUGlrYWNodS5wbmdcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlR2FsbGVyeTIgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL3d3dy5wbmdtYXJ0LmNvbS9maWxlcy8xMS9Gcm9nLU1lbWUtUE5HLUhELnBuZ1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHYWxsZXJ5MyA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vbWVkaWEubGljZG4uY29tL2Rtcy9pbWFnZS9ENTYzNUFRSHczRTV5WXlYVEx3L3Byb2ZpbGUtZnJhbWVkcGhvdG8tc2hyaW5rXzgwMF84MDAvMC8xNjQ0NTE4OTE4NjA2P2U9MTY3NTYyMDAwMCZ2PWJldGEmdD14MVJuWHFXc0RXQU9WUVVYR0Z1ak1vZFhaaGlHVVFKdTBhNkZBc1pOM0xvXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnaW9jbzEgPSB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmFtZTogXCJTdXBlck1hcmlvXCIsXHJcbiAgICAgICAgZ2VucmU6IFt7Z2VucmU6IFwiUExBVEZPUk1cIn1dLFxyXG4gICAgICAgIHllYXI6IDE5ODUsXHJcbiAgICAgICAgY29uc29sZToge2NvbnNvbGU6IFwiTkVTXCJ9LFxyXG4gICAgICAgIGNvdmVyOiBpbWFnZUdpb2NvMVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdpb2NvMiA9IHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBuYW1lOiBcIlRoZSBMZWdlbmQgb2YgWmVsZGFcIixcclxuICAgICAgICBnZW5yZTogW3tnZW5yZTogXCJBVlZFTlRVUkFcIn1dLFxyXG4gICAgICAgIHllYXI6IDE5ODYsXHJcbiAgICAgICAgY29uc29sZToge2NvbnNvbGU6IFwiTkVTXCJ9LFxyXG4gICAgICAgIGNvdmVyOiBpbWFnZUdpb2NvMlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdpb2NvMyA9IHtcclxuICAgICAgICBpZDogMyxcclxuICAgICAgICBuYW1lOiBcIlBva2Vtb24gR2lhbGxvXCIsXHJcbiAgICAgICAgZ2VucmU6IFt7Z2VucmU6IFwiR0RSXCJ9XSxcclxuICAgICAgICB5ZWFyOiAxOTk4LFxyXG4gICAgICAgIGNvbnNvbGU6IHtjb25zb2xlOiBcIkdBTUVfQk9ZX0NPTE9SXCJ9LFxyXG4gICAgICAgIGNvdmVyOiBpbWFnZUdpb2NvM1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdpb2NvNCA9IHtcclxuICAgICAgICBpZDogNCxcclxuICAgICAgICBuYW1lOiBcIk1ldGFsIEdlYXJcIixcclxuICAgICAgICBnZW5yZTogW3tnZW5yZTogXCJTVEVBTFRIXCJ9XSxcclxuICAgICAgICB5ZWFyOiAxOTg3LFxyXG4gICAgICAgIGNvbnNvbGU6IHtjb25zb2xlOiBcIk5FU1wifSxcclxuICAgICAgICBjb3ZlcjogaW1hZ2VHaW9jbzRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwdWJsaXNoZXJHaW9jbzEgPSB7XHJcbiAgICAgICAgdXNlcklkOiAxLFxyXG4gICAgICAgIHVzZXJuYW1lOiBcIlBpZXJvYWZmb25kb1wiLFxyXG4gICAgICAgIG5hbWU6IFwiUGllcmlub1wiLFxyXG4gICAgICAgIHN1cm5hbWU6IFwiQ2ljY2lub1wiLFxyXG4gICAgICAgIGVtYWlsOiBcInBpZXJpbm9jdW9yaWNpbm9AYW1vcmluby5jb21cIixcclxuICAgICAgICByYXRpbmc6IDY2NixcclxuICAgICAgICB2aWRlb2dhbWVzOiBbZ2lvY28xXVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGluc2VydGlvbjE6IGluc2VydGlvbiA9IHtcclxuICAgICAgICBhcHByb3ZlZDogdHJ1ZSxcclxuICAgICAgICB0aXRsZTogXCJTY2FtYmlvIFN1cGVyTWFyaW9cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTY2FtYmlvIHN1cGVybWFyaW8geGvDqCBtaSBzb25vIHNla2thdG8gYSBnaW9jYXJjaVwiLFxyXG4gICAgICAgIHB1Ymxpc2hlcjogcHVibGlzaGVyR2lvY28xLFxyXG4gICAgICAgIGdhbGxlcnk6IFtpbWFnZUdhbGxlcnkxLCBpbWFnZUdhbGxlcnkyLCBpbWFnZUdhbGxlcnkzXSxcclxuICAgICAgICB0cmFkZUdhbWU6IGdpb2NvMSxcclxuICAgICAgICB3aXNoTGlzdDogW2dpb2NvMiwgZ2lvY28zLCBnaW9jbzRdLFxyXG4gICAgICAgIG91dGNvbWU6IFwiV0lQXCIsXHJcbiAgICAgICAgcHVibGljYXRpb25EYXRlOiBcIjI5LTAxLTIwMjNcIlxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI3OyBpKyspIHtcclxuICAgICAgICBpZiAoaSAhPSAxNykge1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goaW5zZXJ0aW9uMSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goaW5zZXJ0aW9uMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLypRVUVTVE8gRScgTEEgRlVOWklPTkUgR0lVU1RBIE5PTiBGQU1PIENIRSBTQkFHTElBVEUhICovXHJcblxyXG4gICAgLypGZXRjaCBhIGJhY2tlbmQgY29uIHR1dHRpIGdsaSBhbm51bmNpLCBhZ2dpb3JuYSBsYSBsaXN0YSBsaXN0Ki9cclxuICAgIC8vIGxpc3Q9W107XHJcbiAgICAvLyBmZXRjaCgnL1RpcG9Bbm51bmNpQ2hlbmVzbycpXHJcbiAgICAvLyAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC8vIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAvLyAgICAgZm9yKGxldCBkIG9mIGRhdGEpe1xyXG4gICAgLy8gICAgICAgICBsaXN0LnB1c2goZCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSk7XHJcbn1cclxuXHJcbi8qZGEgcXVpIGluIHBvaSBsZSBmdW56aW9uaSBzZXJ2b25vIGEgXHJcbmNyZWFyZSBsYSBwYWdpbmEgdW5hIHZvbHRhIGNsaWNjYXRvICBcclxuc3VsIGJvdHRvbmUgYW5udW5jaSBlIGEgcmljYXJpY2FybGUqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhZ2luYXRpb24oKSB7XHJcbiAgICBsZXQgc2l6ZTogbnVtYmVyID0gbGlzdC5sZW5ndGhcclxuICAgIGxldCB0YWJzOiBudW1iZXIgPSBNYXRoLmNlaWwoc2l6ZSAvIHZpZXcpO1xyXG4gICAgbGV0IHBhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlc1wiKTtcclxuICAgIHBhZ2VzLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0YWJzOyBpKyspIHtcclxuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgaWYgKGkgPT0gMSkge1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbSBhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiLCBcInBhZ2VcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWl0ZW1cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtbGlua1wiKTtcclxuICAgICAgICBidG4ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGFsbExpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlc1wiKS5jaGlsZHJlbjtcclxuICAgICAgICAgICAgZm9yIChsZXQgb25lTGkgb2YgYWxsTGkpIHtcclxuICAgICAgICAgICAgICAgIG9uZUxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgb25lTGkucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtIGFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIsIFwicGFnZVwiKTtcclxuICAgICAgICAgICAgc2hvd1Jlc3VsdHMoaSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBidG4uaW5uZXJIVE1MID0gXCJcIiArIChpKTtcclxuICAgICAgICBsaS5hcHBlbmRDaGlsZChidG4pO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZXNcIikuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93UmVzdWx0cyhpOiBudW1iZXIpIHtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnRpb25Db250ZW50XCIpO1xyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbGV0IHN0YXJ0ID0gKGkgLSAxKSAqIHZpZXc7XHJcbiAgICBsZXQgc3RvcCA9IChpICogdmlldykgLSAxO1xyXG4gICAgZm9yIChzdGFydDsgc3RhcnQgPD0gc3RvcDsgc3RhcnQrKykge1xyXG4gICAgICAgIGlmIChzdGFydCA+PSBsaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWxpc3Rbc3RhcnRdLmFwcHJvdmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGxldCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29sLTQgdGV4dC1jZW50ZXJcIik7XHJcbiAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpXCIpO1xyXG4gICAgICAgIGNvbC5vbm1vdXNlb3Zlcj0oKT0+e1xyXG4gICAgICAgICAgICBjb2wuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNilcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbC5vbm1vdXNlb3V0PSgpPT57XHJcbiAgICAgICAgICAgIGNvbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBleHBhbmRJbnNlcnRpb24obGlzdFtzdGFydF0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgICAgIGxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xyXG4gICAgICAgIGxldCBnYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xyXG4gICAgICAgIGxldCBnZW5yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcclxuICAgICAgICBsZXQgeWVhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcclxuICAgICAgICBsZXQgY29uc29sZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcclxuICAgICAgICBsZXQgdHJhZGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xyXG4gICAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xyXG4gICAgICAgIGltYWdlLnNyYyA9IGxpc3Rbc3RhcnRdLnRyYWRlR2FtZS5jb3Zlci5saW5rO1xyXG4gICAgICAgIGltYWdlLndpZHRoID0gMjAwO1xyXG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9IGxpc3Rbc3RhcnRdLnRpdGxlO1xyXG4gICAgICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IGxpc3Rbc3RhcnRdLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgIGdhbWUuaW5uZXJIVE1MID0gbGlzdFtzdGFydF0udHJhZGVHYW1lLm5hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yKGxldCBpPSAwOyBpPGxpc3Rbc3RhcnRdLnRyYWRlR2FtZS5nZW5yZS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGdlbnJlLmlubmVySFRNTCArPSBsaXN0W3N0YXJ0XS50cmFkZUdhbWUuZ2VucmVbaV0uZ2VucmUgKyBcIiBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgeWVhci5pbm5lckhUTUwgPSBcIlwiICsgbGlzdFtzdGFydF0udHJhZGVHYW1lLnllYXI7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuaW5uZXJIVE1MID0gbGlzdFtzdGFydF0udHJhZGVHYW1lLmNvbnNvbGUuY29uc29sZTtcclxuXHJcbiAgICAgICAgdHJhZGVzLmlubmVySFRNTCA9IFwiQWNjZXR0ZXJlaSBTY2FtYmlvIGNvbjogXCIgKyBsaXN0W3N0YXJ0XS53aXNoTGlzdFswXS5uYW1lO1xyXG4gICAgICAgIGRhdGUuaW5uZXJIVE1MPSBsaXN0W3N0YXJ0XS5wdWJsaWNhdGlvbkRhdGU7XHJcbiAgICAgICAgY29sLmFwcGVuZCh0aXRsZSxpbWFnZSxkZXNjcmlwdGlvbixnYW1lLGdlbnJlLHllYXIsY29uc29sZSx0cmFkZXMsZGF0ZSlcclxuICAgICAgICBjb250ZW50LmFwcGVuZChjb2wpO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGFnZVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IGluc2VydGlvbiBmcm9tICcuLi9pbnRlcmZhY2VzL2luc2VydGlvbic7XHJcbmltcG9ydCBhbm51bmNpbyBmcm9tICcuL2FubnVuY2lvLmh0bWwnXHJcbmltcG9ydCBjcmVhdGVQYWdlIGZyb20gJy4vYW5udW5jaSc7XHJcbmltcG9ydCBhbm51bmNpIGZyb20gJy4vYW5udW5jaS5odG1sJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV4cGFuZEluc2VydGlvbihpbnNlcnRpb246IGluc2VydGlvbikge1xyXG5cclxuICAgIC8qSW1wb3N0byBsYSBwYWdpbmEgcHJpbmNpcGFsZSBjb24gaWwgdGVtcGxhdGUgZGVsIHNpbmdvbG8gYW5udW5jaW8gKi9cclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xyXG4gICAgbWFpbi5pbm5lckhUTUwgPSBhbm51bmNpbztcclxuXHJcbiAgICBcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dhbWVzXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGFubnVuY2k7XHJcbiAgICAgICAgY3JlYXRlUGFnZSgpO1xyXG4gICAgfVxyXG4gICAgbGV0IGJhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tcIilcclxuICAgIC8vYmFjay5hcHBlbmQoYnV0dG9uKTtcclxuXHJcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBpbnNlcnRpb24udGl0bGU7XHJcbiAgICBiYWNrLmFwcGVuZCh0aXRsZSk7XHJcblxyXG5cclxuXHJcbiAgICAvKkltcG9zdG8gaWwgY2Fyb3NlbGxvIGRlbGxlIGltbWFnaW5pIHV0ZW50ZSAqL1xyXG4gICAgbGV0IGluZGljYXRvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5kaWNhdG9yXCIpXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluc2VydGlvbi5nYWxsZXJ5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImRhdGEtYnMtdGFyZ2V0XCIsIFwiI2ltYWdlU2xpZGVyXCIpO1xyXG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLXNsaWRlLXRvXCIsIFwiXCIgKyBpKTtcclxuICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIFwiU2xpZGUgXCIgKyAoaSArIDEpKTtcclxuICAgICAgICBpbmRpY2F0b3IuYXBwZW5kKGJ0bik7XHJcbiAgICB9XHJcbiAgICBsZXQgaW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlubmVyXCIpXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnNlcnRpb24uZ2FsbGVyeS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2Fyb3VzZWwtaXRlbSBhY3RpdmVcIilcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJvdXNlbC1pdGVtXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGltZy5zcmMgPSBpbnNlcnRpb24uZ2FsbGVyeVtpXS5saW5rO1xyXG4gICAgICAgIGltZy53aWR0aCA9IDQwMDtcclxuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkLWJsb2NrIHctMTAwXCIpO1xyXG4gICAgICAgIGltZy5hbHQgPSBcIkdhbGxlcnkgSW1hZ2VcIiArIChpICsgMSlcclxuICAgICAgICBkaXYuYXBwZW5kKGltZyk7XHJcbiAgICAgICAgaW5uZXIuYXBwZW5kKGRpdilcclxuICAgIH1cclxuICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgaW1nLnNyYyA9IGluc2VydGlvbi50cmFkZUdhbWUuY292ZXIubGluaztcclxuICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImltZy1mbHVpZCByb3VuZGVkLXN0YXJ0XCIpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmQtaW1hZ2VcIikuYXBwZW5kKGltZyk7XHJcbiAgICBsZXQgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICBoNC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcmQtdGl0bGVcIik7XHJcbiAgICBoNC5pbm5lckhUTUwgPSBpbnNlcnRpb24udHJhZGVHYW1lLm5hbWU7XHJcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcmQtdGV4dFwiKTtcclxuICAgIHAuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJmb250LXNpemU6IDEuNWVtO1wiKVxyXG4gICAgcC5pbm5lckhUTUwgPSBcIkdlbmVyZTogXCI7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluc2VydGlvbi50cmFkZUdhbWUuZ2VucmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBwLmlubmVySFRNTCArPSBpbnNlcnRpb24udHJhZGVHYW1lLmdlbnJlW2ldLmdlbnJlICsgXCIgXCJcclxuICAgIH1cclxuICAgIHAuaW5uZXJIVE1MICs9IFwiPGJyPlwiXHJcbiAgICAgICAgKyBcIkFubm86IFwiICsgaW5zZXJ0aW9uLnRyYWRlR2FtZS55ZWFyICsgXCI8YnI+XCJcclxuICAgICAgICArIFwiQ29uc29sZTogXCIgKyBpbnNlcnRpb24udHJhZGVHYW1lLmNvbnNvbGUuY29uc29sZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZC1ib2R5XCIpLmFwcGVuZChoNCwgcCk7XHJcbiAgICBsZXQgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGRlc2Muc2V0QXR0cmlidXRlKFwic3R5bGVcIixcImNvbG9yOndoaXRlXCIpXHJcbiAgICBkZXNjLmlubmVySFRNTCA9IFwiRGVzY3JpemlvbmU6XCJcclxuICAgIGxldCBpbnNEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgaW5zRGVzYy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLFwiY29sb3I6d2hpdGVcIilcclxuICAgIGluc0Rlc2MuaW5uZXJIVE1MID0gaW5zZXJ0aW9uLmRlc2NyaXB0aW9uO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnRpb24tY3JlYXRvclwiKS5pbm5lckhUTUwgPSBpbnNlcnRpb24ucHVibGlzaGVyLnVzZXJuYW1lO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnRpb24tZGVzY3JpcHRpb25cIikuYXBwZW5kKGRlc2MsIGluc0Rlc2MpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1pdGVtLVwiICsgKGkgKyAxKSkuaW5uZXJIVE1MID0gaW5zZXJ0aW9uLndpc2hMaXN0W2ldLm5hbWU7XHJcbiAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgaW1nLnNyYyA9IGluc2VydGlvbi53aXNoTGlzdFtpXS5jb3Zlci5saW5rO1xyXG4gICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcmQtaW1nLXRvcFwiKVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nLWl0ZW0tXCIgKyAoaSArIDEpKS5hcHBlbmQoaW1nKTtcclxuICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHAuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJkLXRleHRcIik7XHJcbiAgICAgICAgcC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImZvbnQtc2l6ZTogMS41ZW07XCIpO1xyXG4gICAgICAgIHAuaW5uZXJIVE1MID0gXCJHZW5lcmU6IFwiO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5zZXJ0aW9uLnRyYWRlR2FtZS5nZW5yZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBwLmlubmVySFRNTCArPSBpbnNlcnRpb24udHJhZGVHYW1lLmdlbnJlW2ldLmdlbnJlICsgXCIgXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgcC5pbm5lckhUTUwgKz0gXCI8YnI+XCJcclxuICAgICAgICAgICAgKyBcIkFubm86IFwiICsgaW5zZXJ0aW9uLnRyYWRlR2FtZS55ZWFyICsgXCI8YnI+XCJcclxuICAgICAgICAgICAgKyBcIkNvbnNvbGU6IFwiICsgaW5zZXJ0aW9uLnRyYWRlR2FtZS5jb25zb2xlLmNvbnNvbGU7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2R5LWl0ZW0tXCIgKyAoaSArIDEpKS5hcHBlbmQocCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGV4cGFuZEluc2VydGlvbiIsImltcG9ydCBjcmVhQW5udW5jaW8gZnJvbSAnLi4vY3JlYUFubnVuY2lvL2NyZWFBbm51bmNpby5odG1sJ1xyXG5pbXBvcnQgaW5zZXJ0aW9uIGZyb20gJy4uL2ludGVyZmFjZXMvaW5zZXJ0aW9uJztcclxuaW1wb3J0IGV4cGFuZEluc2VydGlvbiBmcm9tICcuL2FubnVuY2lvJ1xyXG5pbXBvcnQgY3JlYXRlSW5zZXJ0aW9uUGFnZSBmcm9tICcuLi9jcmVhQW5udW5jaW8vY3JlYUFubnVuY2lvJ1xyXG5cclxubGV0IGxpc3Q6IGluc2VydGlvbltdID0gW107XHJcbmxldCB2aWV3OiBudW1iZXIgPSA2XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGFnZTIoKSB7ICAgICAgIC8qSW5pemlhbGl6emEgdHV0dG8gY2nDsiBjaGUgc2VydmUgYWxsYSBwYWdpbmEgcGVyIGZ1bnppb25hcmUgKi9cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0QWxsMlwiKS5vbmNsaWNrID0gc2VhcmNoQnlBbGwyO1xyXG4gICAgYXNzaWduRmlsdGVyczIoKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlQ2F0ZWdvcnlcIikub25jbGljayA9IGNyZWF0ZUNhdGVnb3J5O1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWxldGVFbGVtZW50c1wiKS5vbmNsaWNrID0gZGVsZXRlRWxlbWVudHM7XHJcbiAgICBsZXQgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRJbnNlcnRpb25cIik7XHJcbiAgICBidG4ub25jbGljaz0oKT0+e1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUw9Y3JlYUFubnVuY2lvO1xyXG4gICAgICAgIGNyZWF0ZUluc2VydGlvblBhZ2UoKTtcclxuICAgIH1cclxuICAgIC8vY3JlYXRlSW5zZXJ0aW9uKCk7XHJcbiAgICBnZXRBbGxJbnNlcnRpb25zMigpO1xyXG4gICAgY3JlYXRlUGFnaW5hdGlvbjIoKTtcclxuICAgIHNob3dSZXN1bHRzMigxKTtcclxuXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZWFyY2hCeUFsbDIoKSB7ICAgICAgICAgICAgIC8qTGEgZnVuemlvbmEgZGVsIGJvdHRvbmUgY2hlIGNlcmNhIHR1dHRpIGdsaSBhbm51bmNpIHNlbnphIGZpbHRyaSovXHJcbiAgICBnZXRBbGxJbnNlcnRpb25zMigpO1xyXG4gICAgY3JlYXRlUGFnaW5hdGlvbjIoKTtcclxuICAgIHNob3dSZXN1bHRzMigxKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGFzc2lnbkZpbHRlcnMyKCkgeyAgICAgICAgICAgICAvKkFzc2VnbmEgbGUgZnVuemlvbmkgYWkgcHVsc2FudGkgbmVsbGUgZHJvcERvd25MaXN0IGRhIHByb3ZhcmUqL1xyXG4gICAgbGV0IGdlbmVyaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2VucmVzMlwiKS5jaGlsZHJlblxyXG4gICAgZm9yIChsZXQgZyBvZiBnZW5lcmkpIHtcclxuICAgICAgICAoZyBhcyBIVE1MQnV0dG9uRWxlbWVudCkub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2VhcmNoQnlHZW5yZTIoZy5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IGFubmkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInllYXJzMlwiKS5jaGlsZHJlblxyXG4gICAgZm9yIChsZXQgYSBvZiBhbm5pKSB7XHJcbiAgICAgICAgKGEgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNlYXJjaEJ5WWVhcjIoTnVtYmVyKChhIGFzIEhUTUxCdXR0b25FbGVtZW50KS5pZCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKmxldCBzZWFyY2hUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoVGl0bGUyXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBzZWFyY2hUaXRsZS5vbmtleWRvd24gPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIHNlYXJjaEJ5VGl0bGUyKHNlYXJjaFRpdGxlLnZhbHVlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEJ1dHRvbjJcIik7XHJcbiAgICBzZWFyY2hCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBzZWFyY2hCeVRpdGxlMihzZWFyY2hUaXRsZS52YWx1ZSlcclxuICAgIH0qL1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2VhcmNoQnlUaXRsZTIodGl0bGU6IHN0cmluZykge1xyXG4gICAgbGV0IGZpbHRlcmVkTGlzdCA9IFtdXHJcbiAgICBmb3IgKGxldCBlbGVtZW50IG9mIGxpc3QpIHtcclxuICAgICAgICBsZXQgdGl0b2xvID0gZWxlbWVudC50aXRsZTtcclxuICAgICAgICBsZXQgZ2FtZU5hbWUgPSBlbGVtZW50LnRyYWRlR2FtZS5uYW1lXHJcbiAgICAgICAgaWYgKCh0aXRvbG8udG9VcHBlckNhc2UoKS5pbmNsdWRlcyh0aXRsZS50b1VwcGVyQ2FzZSgpKSlcclxuICAgICAgICAgICAgfHwgKGdhbWVOYW1lLnRvVXBwZXJDYXNlKCkuaW5jbHVkZXModGl0bGUudG9VcHBlckNhc2UoKSkpKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkTGlzdC5wdXNoKGVsZW1lbnQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGlzdCA9IFtdO1xyXG4gICAgbGlzdCA9IGZpbHRlcmVkTGlzdFxyXG4gICAgY3JlYXRlUGFnaW5hdGlvbjIoKTtcclxuICAgIHNob3dSZXN1bHRzMigxKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNlYXJjaEJ5R2VucmUyKGdlbnJlOiBTdHJpbmcpIHtcclxuICAgIGNvbnNvbGUubG9nKGdlbnJlKTtcclxuICAgIGxldCBmaWx0ZXJlZExpc3QgPSBbXVxyXG4gICAgZm9yIChsZXQgZWxlbWVudCBvZiBsaXN0KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LnRyYWRlR2FtZS5nZW5yZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC50cmFkZUdhbWUuZ2VucmVbaV0uZ2VucmUgPT0gZ2VucmUpIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcmVkTGlzdC5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgaT1lbGVtZW50LnRyYWRlR2FtZS5nZW5yZS5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsaXN0ID0gW107XHJcbiAgICBsaXN0ID0gZmlsdGVyZWRMaXN0XHJcbiAgICBjcmVhdGVQYWdpbmF0aW9uMigpO1xyXG4gICAgc2hvd1Jlc3VsdHMyKDEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZWFyY2hCeVllYXIyKHllYXI6IG51bWJlcikge1xyXG4gICAgY29uc29sZS5sb2coeWVhcik7XHJcbiAgICBsZXQgZmlsdGVyZWRMaXN0ID0gW107XHJcbiAgICBmb3IgKGxldCBlbGVtZW50IG9mIGxpc3QpIHtcclxuICAgICAgICBpZiAoZWxlbWVudC50cmFkZUdhbWUueWVhciA9PSB5ZWFyKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkTGlzdC5wdXNoKGVsZW1lbnQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGlzdCA9IFtdO1xyXG4gICAgbGlzdCA9IGZpbHRlcmVkTGlzdFxyXG4gICAgY3JlYXRlUGFnaW5hdGlvbjIoKTtcclxuICAgIHNob3dSZXN1bHRzMigxKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRBbGxJbnNlcnRpb25zMigpIHsgLyogUXVlc3RhIMOoIHNvbG8gdW5hIHByb3ZhLCBzY29tbWVudGFyZSBsYSBmZXRjaCBwacO5IGdpw7kgKi9cclxuICAgIGxpc3QgPSBbXTtcclxuXHJcbiAgICBjb25zdCBpbWFnZUdpb2NvMSA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vaS5ldHN5c3RhdGljLmNvbS82Mjc3ODA0L3IvaWwvN2RmMDBlLzY5NzU0NjM0MC9pbF8xMTQweE4uNjk3NTQ2MzQwX2ZpdnMuanBnXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdpb2NvMiA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vd3d3Lm1vYnlnYW1lcy5jb20vaW1hZ2VzL2NvdmVycy9sLzE0NDQ1LXRoZS1sZWdlbmQtb2YtemVsZGEtbmVzLWZyb250LWNvdmVyLmpwZ1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHaW9jbzMgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9pdC9iL2IzL1BvayVDMyVBOW1vbl9HaWFsbG8ucG5nXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdpb2NvNCA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vbWV0YWxnZWFyLmZhbmRvbS5jb20vaXQvd2lraS9NZXRhbF9HZWFyP2ZpbGU9TWV0YWxfR2Vhci5qcGdcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlR2FsbGVyeTEgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9pdC90aHVtYi83Lzc3L1Bpa2FjaHUucG5nLzEwMjRweC1QaWthY2h1LnBuZ1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHYWxsZXJ5MiA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vd3d3LnBuZ21hcnQuY29tL2ZpbGVzLzExL0Zyb2ctTWVtZS1QTkctSEQucG5nXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdhbGxlcnkzID0ge1xyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9tZWRpYS5saWNkbi5jb20vZG1zL2ltYWdlL0Q1NjM1QVFIdzNFNXlZeVhUTHcvcHJvZmlsZS1mcmFtZWRwaG90by1zaHJpbmtfODAwXzgwMC8wLzE2NDQ1MTg5MTg2MDY/ZT0xNjc1NjIwMDAwJnY9YmV0YSZ0PXgxUm5YcVdzRFdBT1ZRVVhHRnVqTW9kWFpoaUdVUUp1MGE2RkFzWk4zTG9cIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdpb2NvMSA9IHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuYW1lOiBcIlN1cGVyTWFyaW9cIixcclxuICAgICAgICBnZW5yZTogW3tnZW5yZTogXCJQTEFURk9STVwifV0sXHJcbiAgICAgICAgeWVhcjogMTk4NSxcclxuICAgICAgICBjb25zb2xlOiB7Y29uc29sZTogXCJORVNcIn0sXHJcbiAgICAgICAgY292ZXI6IGltYWdlR2lvY28xXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2lvY28yID0ge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIG5hbWU6IFwiVGhlIExlZ2VuZCBvZiBaZWxkYVwiLFxyXG4gICAgICAgIGdlbnJlOiBbe2dlbnJlOiBcIkFWVkVOVFVSQVwifV0sXHJcbiAgICAgICAgeWVhcjogMTk4NixcclxuICAgICAgICBjb25zb2xlOiB7Y29uc29sZTogXCJORVNcIn0sXHJcbiAgICAgICAgY292ZXI6IGltYWdlR2lvY28yXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2lvY28zID0ge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIG5hbWU6IFwiUG9rZW1vbiBHaWFsbG9cIixcclxuICAgICAgICBnZW5yZTogW3tnZW5yZTogXCJHRFJcIn1dLFxyXG4gICAgICAgIHllYXI6IDE5OTgsXHJcbiAgICAgICAgY29uc29sZToge2NvbnNvbGU6IFwiR0FNRV9CT1lfQ09MT1JcIn0sXHJcbiAgICAgICAgY292ZXI6IGltYWdlR2lvY28zXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2lvY280ID0ge1xyXG4gICAgICAgIGlkOiA0LFxyXG4gICAgICAgIG5hbWU6IFwiTWV0YWwgR2VhclwiLFxyXG4gICAgICAgIGdlbnJlOiBbe2dlbnJlOiBcIlNURUFMVEhcIn1dLFxyXG4gICAgICAgIHllYXI6IDE5ODcsXHJcbiAgICAgICAgY29uc29sZToge2NvbnNvbGU6IFwiTkVTXCJ9LFxyXG4gICAgICAgIGNvdmVyOiBpbWFnZUdpb2NvNFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHB1Ymxpc2hlckdpb2NvMSA9IHtcclxuICAgICAgICB1c2VySWQ6IDEsXHJcbiAgICAgICAgdXNlcm5hbWU6IFwiUGllcm9hZmZvbmRvXCIsXHJcbiAgICAgICAgbmFtZTogXCJQaWVyaW5vXCIsXHJcbiAgICAgICAgc3VybmFtZTogXCJDaWNjaW5vXCIsXHJcbiAgICAgICAgZW1haWw6IFwicGllcmlub2N1b3JpY2lub0BhbW9yaW5vLmNvbVwiLFxyXG4gICAgICAgIHJhdGluZzogNjY2LFxyXG4gICAgICAgIHZpZGVvZ2FtZXM6IFtnaW9jbzFdXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5zZXJ0aW9uMTogaW5zZXJ0aW9uID0ge1xyXG4gICAgICAgIGFwcHJvdmVkOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiBcIlNjYW1iaW8gU3VwZXJNYXJpb1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlNjYW1iaW8gc3VwZXJtYXJpbyB4a8OoIG1pIHNvbm8gc2Vra2F0byBhIGdpb2NhcmNpXCIsXHJcbiAgICAgICAgcHVibGlzaGVyOiBwdWJsaXNoZXJHaW9jbzEsXHJcbiAgICAgICAgZ2FsbGVyeTogW2ltYWdlR2FsbGVyeTEsIGltYWdlR2FsbGVyeTIsIGltYWdlR2FsbGVyeTNdLFxyXG4gICAgICAgIHRyYWRlR2FtZTogZ2lvY28xLFxyXG4gICAgICAgIHdpc2hMaXN0OiBbZ2lvY28yLCBnaW9jbzMsIGdpb2NvNF0sXHJcbiAgICAgICAgb3V0Y29tZTogXCJXSVBcIixcclxuICAgICAgICBwdWJsaWNhdGlvbkRhdGU6IFwiMjktMDEtMjAyM1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5zZXJ0aW9uMjogaW5zZXJ0aW9uID0ge1xyXG4gICAgICAgIGFwcHJvdmVkOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiBcIlNjYW1iaW8gU3VwZXJMdWlnaVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlNjYW1iaW8gc3VwZXJsdWlnaSBwZWNjaMOpIHNvbm8gcHJvXCIsXHJcbiAgICAgICAgcHVibGlzaGVyOiBwdWJsaXNoZXJHaW9jbzEsXHJcbiAgICAgICAgZ2FsbGVyeTogW2ltYWdlR2FsbGVyeTEsIGltYWdlR2FsbGVyeTIsIGltYWdlR2FsbGVyeTNdLFxyXG4gICAgICAgIHRyYWRlR2FtZTogZ2lvY28yLFxyXG4gICAgICAgIHdpc2hMaXN0OiBbZ2lvY28xLCBnaW9jbzMsIGdpb2NvNF0sXHJcbiAgICAgICAgb3V0Y29tZTogXCJXSVBcIixcclxuICAgICAgICBwdWJsaWNhdGlvbkRhdGU6IFwiMjktMDEtMjAyM1wiXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjc7IGkrKykge1xyXG4gICAgICAgIGlmIChpICE9IDIpIHtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKGluc2VydGlvbjEpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKGluc2VydGlvbjIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qUVVFU1RPIEUnIExBIEZVTlpJT05FIEdJVVNUQSBOT04gRkFNTyBDSEUgU0JBR0xJQVRFISAqL1xyXG5cclxuICAgIC8qRmV0Y2ggYSBiYWNrZW5kIGNvbiB0dXR0aSBnbGkgYW5udW5jaSwgYWdnaW9ybmEgbGEgbGlzdGEgbGlzdCovXHJcbiAgICAvLyBsaXN0PVtdO1xyXG4gICAgLy8gZmV0Y2goJy9UaXBvQW5udW5jaUNoZW5lc28nKVxyXG4gICAgLy8gLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAvLyAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgLy8gICAgIGZvcihsZXQgZCBvZiBkYXRhKXtcclxuICAgIC8vICAgICAgICAgbGlzdC5wdXNoKGQpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0pO1xyXG59XHJcblxyXG4vKmRhIHF1aSBpbiBwb2kgbGUgZnVuemlvbmkgc2Vydm9ubyBhIFxyXG5jcmVhcmUgbGEgcGFnaW5hIHVuYSB2b2x0YSBjbGljY2F0byAgXHJcbnN1bCBib3R0b25lIGFubnVuY2kgZSBhIHJpY2FyaWNhcmxlKi9cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVBhZ2luYXRpb24yKCkge1xyXG4gICAgbGV0IHNpemU6IG51bWJlciA9IGxpc3QubGVuZ3RoXHJcbiAgICBsZXQgdGFiczogbnVtYmVyID0gTWF0aC5jZWlsKHNpemUgLyB2aWV3KTtcclxuICAgIGxldCBwYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZXMyXCIpO1xyXG4gICAgcGFnZXMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRhYnM7IGkrKykge1xyXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBpZiAoaSA9PSAxKSB7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtIGFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIsIFwicGFnZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1saW5rXCIpO1xyXG4gICAgICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYWxsTGkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VzMlwiKS5jaGlsZHJlbjtcclxuICAgICAgICAgICAgZm9yIChsZXQgb25lTGkgb2YgYWxsTGkpIHtcclxuICAgICAgICAgICAgICAgIG9uZUxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgb25lTGkucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtIGFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIsIFwicGFnZVwiKTtcclxuICAgICAgICAgICAgc2hvd1Jlc3VsdHMyKGkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgYnRuLmlubmVySFRNTCA9IFwiXCIgKyAoaSk7XHJcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYnRuKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VzMlwiKS5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dSZXN1bHRzMihpOiBudW1iZXIpIHtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnRpb25Db250ZW50MlwiKTtcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGxldCBzdGFydCA9IChpIC0gMSkgKiB2aWV3O1xyXG4gICAgbGV0IHN0b3AgPSAoaSAqIHZpZXcpIC0gMTtcclxuICAgIGZvciAoc3RhcnQ7IHN0YXJ0IDw9IHN0b3A7IHN0YXJ0KyspIHtcclxuICAgICAgICBpZiAoc3RhcnQgPj0gbGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFsaXN0W3N0YXJ0XS5hcHByb3ZlZCkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBsZXQgY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIGxldCBqdWFuID0gXCJcIiArIHN0YXJ0O1xyXG4gICAgICAgIC8vSnVhbiDDqCBsJ2lkIGRlaSBib3R0b25pLCBzYXLDoCBsJ2lkIGRlbGxlIGluc2VyemlvbmkgcXVhbmRvIHNpIGltcGxlbWVudGVyYW5ubyBnbGkgYW5udW5jaSBkYWwgZGJcclxuICAgICAgICBsZXQgaXNPbkNoZWNrZWRMaXN0UmVzdWx0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGZvcihsZXQgZWxlbWVudCBvZiBjaGVja2VkTGlzdCl7XHJcbiAgICAgICAgICAgIGlmKGp1YW49PWVsZW1lbnQpe1xyXG4gICAgICAgICAgICAgICAgaXNPbkNoZWNrZWRMaXN0UmVzdWx0PXRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCAnbGlzdC1ncm91cC1pdGVtJyk7XHJcbiAgICAgICAgaWYoaXNPbkNoZWNrZWRMaXN0UmVzdWx0KXtcclxuICAgICAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKVwiKTtcclxuICAgICAgICAgICAgY29sLnNldEF0dHJpYnV0ZSgnb25tb3VzZW92ZXInLCAnc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNilcIiknKTtcclxuICAgICAgICAgICAgY29sLnNldEF0dHJpYnV0ZSgnb25tb3VzZW91dCcsICdzZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKVwiKScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb2wuc2V0QXR0cmlidXRlKFwiaWRcIiwganVhbik7XHJcblxyXG4gICAgICAgIGNvbC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBhZGRJbnNlcnRpb25Ub0xpc3QoanVhbilcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gbGlzdFtzdGFydF0udGl0bGU7XHJcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gXCJcIiArIGxpc3Rbc3RhcnRdLnRyYWRlR2FtZS5uYW1lO1xyXG4gICAgICAgIGZvcihsZXQgaT0gMDsgaTxsaXN0W3N0YXJ0XS50cmFkZUdhbWUuZ2VucmUubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgKz0gXCIsIFwiICsgbGlzdFtzdGFydF0udHJhZGVHYW1lLmdlbnJlW2ldLmdlbnJlICsgXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MICs9IFwiLCBcIiArIGxpc3Rbc3RhcnRdLnRyYWRlR2FtZS55ZWFyO1xyXG5cclxuICAgICAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgKz0gXCIsIFwiICsgbGlzdFtzdGFydF0udHJhZGVHYW1lLmNvbnNvbGUuY29uc29sZTtcclxuXHJcbiAgICAgICAgY29sLmFwcGVuZCh0aXRsZSxkZXNjcmlwdGlvbilcclxuICAgICAgICBjb250ZW50LmFwcGVuZChjb2wpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhjaGVja2VkTGlzdCk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQYWdlMlxyXG5cclxuXHJcbmxldCBjaGVja2VkTGlzdDogc3RyaW5nW10gPSBbXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRJbnNlcnRpb25Ub0xpc3QoaW5zOiBzdHJpbmcpe1xyXG5cclxuICAgIGxldCBpc09uQ2hlY2tlZExpc3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBmb3IobGV0IGVsZW1lbnQgb2YgY2hlY2tlZExpc3Qpe1xyXG4gICAgICAgIGlmKGlucz09ZWxlbWVudCl7XHJcbiAgICAgICAgICAgIGlzT25DaGVja2VkTGlzdCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNoZWNrZWRMaXN0LnNwbGljZShjaGVja2VkTGlzdC5pbmRleE9mKGVsZW1lbnQpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYoaXNPbkNoZWNrZWRMaXN0KXtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnMpLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucykuc2V0QXR0cmlidXRlKCdvbm1vdXNlb3ZlcicsICdzZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KVwiKScpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucykuc2V0QXR0cmlidXRlKCdvbm1vdXNlb3V0JywgJ3NldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpXCIpJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNoZWNrZWRMaXN0LnB1c2goaW5zKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnMpLnJlbW92ZUF0dHJpYnV0ZSgnb25tb3VzZW92ZXInKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnMpLnJlbW92ZUF0dHJpYnV0ZSgnb25tb3VzZW91dCcpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucykuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNilcIik7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2F0ZWdvcnkoKXtcclxuXHJcbiAgICAvL1RPRE86IGluc2VyaXNjaSBnbGkgZWxlbWVudGkgZGkgY2hlY2tlZExpc3QgaW4gdW5hIGNhdGVnb3JpYSBuZWwgREJcclxuXHJcbiAgICAvL1RPRE86IE1ldG9kbyBkYSBmYXJlIHBlciBpbnNlcmlyZSBnbGkgZWxlbWVudGkgbmVsIGRhdGFiYXNlIGhhaGFcclxuICAgIGNvbnNvbGUubG9nKFwiQ2F0ZWdvcmlhIGNyZWF0YSBwacO5IG8gbWVub1wiKTtcclxuXHJcbiAgICBjaGVja2VkTGlzdCA9IFtdO1xyXG5cclxuICAgIC8vUmVpbXBvc3RhIGxhIHBhZ2luYSBhIGNvbWUgc3RhdmEgcHJpbWFcclxuICAgIGdldEFsbEluc2VydGlvbnMyKCk7XHJcbiAgICBjcmVhdGVQYWdpbmF0aW9uMigpO1xyXG4gICAgc2hvd1Jlc3VsdHMyKDEpO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUVsZW1lbnRzKCl7XHJcblxyXG4gICAgLy9UT0RPOiBjYW5jZWxsYSBnbGkgZWxlbWVudGkgZGkgY2hlY2tlZExpc3QgZGFsIERCXHJcblxyXG4gICAgLy9UT0RPOiBNZXRvZG8gZGEgZmFyZSBwZXIgY2FuY2VsbGFyZSBnbGkgZWxlbWVudGkgZGFsIGRhdGFiYXNlXHJcbiAgICBjb25zb2xlLmxvZyhcIkVsZW1lbnRpIGNhbmNlbGxhdGkgcGnDuSBvIG1lbm9cIik7XHJcblxyXG4gICAgY2hlY2tlZExpc3QgPSBbXTtcclxuXHJcbiAgICAvL1JlaW1wb3N0YSBsYSBwYWdpbmEgYSBjb21lIHN0YXZhIHByaW1hXHJcbiAgICBnZXRBbGxJbnNlcnRpb25zMigpO1xyXG4gICAgY3JlYXRlUGFnaW5hdGlvbjIoKTtcclxuICAgIHNob3dSZXN1bHRzMigxKTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgY3JlYUFubnVuY2lvIGZyb20gJy4vY3JlYUFubnVuY2lvLmh0bWwnXHJcbmltcG9ydCBhbm51bmNpIGZyb20gJy4vYW5udW5jaS5odG1sJ1xyXG5pbXBvcnQgdmlkZW9nYW1lIGZyb20gJy4uL2ludGVyZmFjZXMvdmlkZW9nYW1lJztcclxuXHJcbmxldCBmdWxsTGlzdDp2aWRlb2dhbWVbXT1bXVxyXG5sZXQgdXNlckxpc3Q6dmlkZW9nYW1lW109W11cclxubGV0IHdpc2hMaXN0OnN0cmluZ1tdPVtdXHJcbmxldCBnaW9jb0RhU2NhbWJpYXJlOiBzdHJpbmc7XHJcbmxldCBpbmRleD0wO1xyXG5cclxuICAgIC8qQ2VyY28gdHV0dGkgaSBnaW9jaGkgKi9cclxuLypmdW5jdGlvbiBnZXRBbGxHYW1lcygpe1xyXG4gICBmdWxsTGlzdD1bXTtcclxuICAgIGZldGNoKFwiL3ZpZGVvZ2FtZXNcIilcclxuICAgIC50aGVuKChyZXNwb25zZSk9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigodmlkZW9nYW1lcyk9PntcclxuICAgICAgICBmb3IobGV0IGdhbWUgb2YgdmlkZW9nYW1lcyl7XHJcbiAgICAgICAgICAgIGZ1bGxMaXN0LnB1c2goZ2FtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG4gICovICAgLypDZXJjbyB0dXR0aSBpIGdpb2NoaSBwb3NzZWR1dGkgZGFsbCd1dGVudGUqL1xyXG4vKmZ1bmN0aW9uIGdldFVzZXJHYW1lcygpe1xyXG4gICAgdXNlckxpc3Q9W107XHJcbiAgICBmZXRjaChcIi92aWRlb2dhbWVzL3VzZXJcIilcclxuICAgIC50aGVuKChyZXNwb25zZSk9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigodmlkZW9nYW1lcyk9PntcclxuICAgICAgICBmb3IobGV0IGdhbWUgb2YgdmlkZW9nYW1lcyl7XHJcbiAgICAgICAgICAgIHVzZXJMaXN0LnB1c2goZ2FtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG4qL1xyXG5cclxuLyogTW9zdHJhIGkgZ2lvY2hpIHNjZWx0aSBkYWxsJ3V0ZW50ZSBwZXIgbG8gc2NhbWJpbyovXHJcbmZ1bmN0aW9uIHNob3dTZWxlY3RlZEdhbWVzKCl7XHJcbiAgICBsZXQgc2VsZWN0ZWRHYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0ZWRHYW1lc1wiKTtcclxuICAgIHNlbGVjdGVkR2FtZXMuaW5uZXJIVE1MPVwiXCI7XHJcbiAgICBmb3IobGV0IGk9MDsgaTx3aXNoTGlzdC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGxpLmlubmVySFRNTD13aXNoTGlzdFtpXTtcclxuICAgICAgICBzZWxlY3RlZEdhbWVzLmFwcGVuZChsaSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuIC8qQ3JlYSBsYSBsaXN0YSBkZWkgZ2lvY2hpIHBvc3NlZHV0aSBkYWxsJ3V0ZW50ZSAqL1xyXG4gZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUluc2VydGlvblBhZ2UoKXtcclxuICAgIGxldCB0cmFkZUdhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYWRlR2FtZVwiKTtcclxuICAgIHRyYWRlR2FtZS5pbm5lckhUTUw9XCJcIjtcclxuICAgIGZvcihsZXQgZ2FtZSBvZiB1c2VyTGlzdCl7XHJcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZHJvcGRvd24taXRlbVwiKTtcclxuICAgICAgICBsaS5pbm5lckhUTUw9Z2FtZS5uYW1lO1xyXG4gICAgICAgIGxpLm9uY2xpY2s9KCk9PntcclxuICAgICAgICAgICAgZ2lvY29EYVNjYW1iaWFyZT1saS5pbm5lckhUTUw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyYWRlR2FtZS5hcHBlbmQobGkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qQ3JlYSBsYSBsaXN0YSBkZWkgMyBnaW9jaGkgY2hlIGwndXRlbnRlIHZvcnJlYmJlIHNjYW1iaWFyZSAqL1xyXG4gICAgbGV0IHdpc2hHYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2lzaEdhbWVzXCIpO1xyXG4gICAgd2lzaEdhbWVzLmlubmVySFRNTD1cIlwiO1xyXG4gICAgZm9yKGxldCBnYW1lIG9mIGZ1bGxMaXN0KXtcclxuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkcm9wZG93bi1pdGVtXCIpO1xyXG4gICAgICAgIGxpLmlubmVySFRNTD1nYW1lLm5hbWU7XHJcbiAgICAgICAgbGkub25jbGljaz0oKT0+eyAgICBcclxuICAgICAgICAgICAgbGV0IHRlc3Q6Ym9vbGVhbj10cnVlO1xyXG5cclxuICAgICAgICAgICAgaWYod2lzaExpc3QubGVuZ3RoPT0zKXtcclxuICAgICAgICAgICAgICAgIHdpc2hMaXN0PVtdO1xyXG4gICAgICAgICAgICAgICAgaW5kZXg9MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IobGV0IGVsZW1lbnQgb2Ygd2lzaExpc3Qpe1xyXG4gICAgICAgICAgICAgICAgaWYoZWxlbWVudD09bGkuaW5uZXJIVE1MKXtcclxuICAgICAgICAgICAgICAgICAgICB0ZXN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYodGVzdCl7XHJcbiAgICAgICAgICAgICAgICB3aXNoTGlzdFtpbmRleF09bGkuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgc2hvd1NlbGVjdGVkR2FtZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2lzaEdhbWVzLmFwcGVuZChsaSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbiBmdW5jdGlvbiBjcmVhdGVJbnNlcnRpb24oKXtcclxuICAgIC8vZ2V0QWxsR2FtZXMoKTtcclxuICAgIC8vZ2V0VXNlckdhbWVzKCk7XHJcbiAgICBcclxuICAgIGxldCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEluc2VydGlvbjJcIik7XHJcbiAgICBidG4ub25jbGljaz0oKT0+e1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUw9Y3JlYUFubnVuY2lvO1xyXG4gICAgICAgIGNyZWF0ZUluc2VydGlvblBhZ2UoKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUluc2VydGlvblBhZ2U7IiwiaW1wb3J0IGRpdiBmcm9tICcuL2Zvb3Rlci5odG1sJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb3QoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvb3RlclwiKS5pbm5lckhUTUwgPSBkaXY7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvdDsiLCJpbXBvcnQgZ2VzdGlvbmVVdGVudGkgZnJvbSAnLi9nZXN0aW9uZVV0ZW50aS5odG1sJ1xyXG5pbXBvcnQgdXNlckludCBmcm9tICcuLi9pbnRlcmZhY2VzL3VzZXInO1xyXG5pbXBvcnQgc2hvd1Byb2ZpbGUgZnJvbSAnLi4vcHJvZmlsb1V0ZW50ZS9wcm9maWxlJztcclxuXHJcbmxldCB1c2VyczogdXNlckludFtdID0gW107XHJcbmxldCB2aWV3ID0gNTtcclxuXHJcbmZ1bmN0aW9uIHNob3dVc2VycyhudW06IG51bWJlcikge1xyXG4gICAgbGV0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJMaXN0XCIpO1xyXG4gICAgbGlzdC5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAobnVtIC0gMSkgKiB2aWV3OyBpIDwgbnVtICogdmlldzsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGkgPj0gdXNlcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGxldCBidG5fcHJvZmlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnRuX3Byb2ZpbGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG5cIik7XHJcbiAgICAgICAgYnRuX3Byb2ZpbGUub25jbGljayA9IHNob3dQcm9maWxlO1xyXG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGlzdC1ncm91cC1pdGVtJyk7XHJcbiAgICAgICAgbGkuc2V0QXR0cmlidXRlKCdvbm1vdXNlb3ZlcicsIFwic2V0QXR0cmlidXRlKCdjbGFzcycsICdsaXN0LWdyb3VwLWl0ZW0gYWN0aXZlJylcIik7XHJcbiAgICAgICAgbGkuc2V0QXR0cmlidXRlKCdvbm1vdXNlb3V0JywgXCJzZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpc3QtZ3JvdXAtaXRlbScpXCIpO1xyXG4gICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZsb2F0LWVuZFwiKTtcclxuICAgICAgICBsZXQgYnRuX2JhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgbGV0IGJ0bl9hZG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ0bl9iYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG4gYnRuLWRhbmdlciBidG4tc21cIik7XHJcbiAgICAgICAgYnRuX2FkbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ0biBidG4tc3VjY2VzcyBidG4tc21cIik7XHJcbiAgICAgICAgYnRuX2Jhbi5pbm5lckhUTUwgPSBcIkJhbm5hXCI7XHJcbiAgICAgICAgYnRuX2FkbS5pbm5lckhUTUwgPSBcIlJlbmRpIEFkbWluXCI7XHJcbiAgICAgICAgYnRuX2Jhbi5vbmNsaWNrID0gKCkgPT4geyBraWNrSGlzQXNzT3V0T2ZUaGlzU2l0ZSh1c2Vyc1tpXS51c2VySWQpfTtcclxuICAgICAgICBidG5fYWRtLm9uY2xpY2sgPSAoKSA9PiB7IG1ha2VIaW1BZG1pbih1c2Vyc1tpXS51c2VySWQpIH07XHJcbiAgICAgICAgc3Bhbi5hcHBlbmQoYnRuX2FkbSwgYnRuX2Jhbik7XHJcbiAgICAgICAgYnRuX3Byb2ZpbGUuaW5uZXJIVE1MID0gdXNlcnNbaV0udXNlcm5hbWUgKyBcIiB8IFwiICsgdXNlcnNbaV0ubmFtZSArIFwiIFwiICsgdXNlcnNbaV0uc3VybmFtZSArIFwiIHwgXCIgKyB1c2Vyc1tpXS5lbWFpbCArIFwiIHwgXCIgKyB1c2Vyc1tpXS5yYXRpbmcgKyBcIjxpIGNsYXNzPSdmYS1yZWd1bGFyIGZhLXN0YXInPjwvaT5cIjtcclxuICAgICAgICBsaS5hcHBlbmQoYnRuX3Byb2ZpbGUsIHNwYW4pO1xyXG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFVzZXJzKCk6IHZvaWQge1xyXG4gICAgZmV0Y2goXCIvdXNlclwiKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHVzZXJzID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGVsZW1lbnQgb2YgZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdXNlcnMucHVzaChlbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjcmVhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICAgICAgICAgIHNob3dVc2VycygxKTtcclxuICAgICAgICB9KTtcclxufVxyXG5cclxuLypcclxuPGxpIGNsYXNzPVwicGFnZS1pdGVtIGFjdGl2ZVwiIGFyaWEtY3VycmVudD1cInBhZ2VcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwYWdlLWxpbmtcIj4xPC9zcGFuPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwicGFnZS1pdGVtXCI+PGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBocmVmPVwiI1wiPjI8L2E+PC9saT5cclxuICAgICAgICA8bGkgY2xhc3M9XCJwYWdlLWl0ZW1cIj48YSBjbGFzcz1cInBhZ2UtbGlua1wiIGhyZWY9XCIjXCI+MzwvYT48L2xpPlxyXG4qL1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUGFnaW5hdGlvbigpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnaW5hdGlvblwiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbGV0IG51bWJlck9mUGFnZXMgPSBNYXRoLmNlaWwodXNlcnMubGVuZ3RoIC8gdmlldyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mUGFnZXM7IGkrKykge1xyXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtIGFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIsIFwicGFnZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1saW5rXCIpO1xyXG4gICAgICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYWxsTGkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2luYXRpb25cIikuY2hpbGRyZW47XHJcbiAgICAgICAgICAgIGZvciAobGV0IG9uZUxpIG9mIGFsbExpKSB7XHJcbiAgICAgICAgICAgICAgICBvbmVMaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbVwiKTtcclxuICAgICAgICAgICAgICAgIG9uZUxpLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbSBhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiLCBcInBhZ2VcIik7XHJcbiAgICAgICAgICAgIHNob3dVc2VycyhpICsgMSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBidG4uaW5uZXJIVE1MID0gXCJcIiArIChpICsgMSk7XHJcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYnRuKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2luYXRpb25cIikuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1ha2VIaW1BZG1pbihpZDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGlkKVxyXG4gICAgfVxyXG4gICAgZmV0Y2goXCIvYWRtaW5cIiwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGlkKVxyXG4gICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4geyBjb25zb2xlLmxvZyhcImFkbWluIGNyZWF0bz8gXCIgKyBkYXRhKTsgZ2V0QWxsVXNlcnMoKTsgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGtpY2tIaXNBc3NPdXRPZlRoaXNTaXRlKGlkOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpZClcclxuICAgIH1cclxuICAgIGZldGNoKFwiL3VzZXJcIiwgcmVxdWVzdClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4geyBjb25zb2xlLmxvZyhcInVzZXIgY2FuY2VsbGF0bz8gXCIgKyBkYXRhKTsgZ2V0QWxsVXNlcnMoKTsgfSk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRBbGxVc2VyczsiLCJpbXBvcnQgaG9tZSBmcm9tICcuL2hvbWUuaHRtbCdcclxuaW1wb3J0IHtpbnNlcnRpb259IGZyb20gJy4uL2ludGVyZmFjZXMvaW5zZXJ0aW9uJztcclxuaW1wb3J0IGFubnVuY2kgZnJvbSAnLi4vYW5udW5jaS9hbm51bmNpLmh0bWwnO1xyXG5pbXBvcnQgY3JlYXRlUGFnZSwgeyBzZWFyY2hCeVRpdGxlIH0gZnJvbSBcIi4uL2FubnVuY2kvYW5udW5jaVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVQYWdpbmF0aW9uIH0gZnJvbSAnLi4vYW5udW5jaS9hbm51bmNpJztcclxuaW1wb3J0IGNyZWFBbm51bmNpbyBmcm9tICcuLi9jcmVhQW5udW5jaW8vY3JlYUFubnVuY2lvLmh0bWwnXHJcbmltcG9ydCBjcmVhdGVJbnNlcnRpb25QYWdlIGZyb20gXCIuLi9jcmVhQW5udW5jaW8vY3JlYUFubnVuY2lvXCI7XHJcbmltcG9ydCBleHBhbmRJbnNlcnRpb24gZnJvbSAnLi4vYW5udW5jaS9hbm51bmNpbyc7XHJcbmltcG9ydCBhbm51bmNpbyBmcm9tICcuLi9hbm51bmNpL2FubnVuY2lvLmh0bWwnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vaW1wb3J0IGNyZWF0ZUluc2VydGlvbiBmcm9tICcuLi9jcmVhQW5udW5jaW8vY3JlYUFubnVuY2lvJztcclxuXHJcbmxldCBsaXN0OiBpbnNlcnRpb25bXSA9IFtdO1xyXG5cclxuZnVuY3Rpb24gZ2V0QWxsSW5zZXJ0aW9ucygpIHsgLyogUXVlc3RhIMOoIHNvbG8gdW5hIHByb3ZhLCBzY29tbWVudGFyZSBsYSBmZXRjaCBwacO5IGdpw7kgKi9cclxuICAgIGxpc3QgPSBbXTtcclxuXHJcbiAgICBjb25zdCBpbWFnZUdpb2NvMSA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vaS5ldHN5c3RhdGljLmNvbS82Mjc3ODA0L3IvaWwvN2RmMDBlLzY5NzU0NjM0MC9pbF8xMTQweE4uNjk3NTQ2MzQwX2ZpdnMuanBnXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdpb2NvMiA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vd3d3Lm1vYnlnYW1lcy5jb20vaW1hZ2VzL2NvdmVycy9sLzE0NDQ1LXRoZS1sZWdlbmQtb2YtemVsZGEtbmVzLWZyb250LWNvdmVyLmpwZ1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHaW9jbzMgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9pdC9iL2IzL1BvayVDMyVBOW1vbl9HaWFsbG8ucG5nXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdpb2NvNCA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vc3RhdGljLndpa2lhLm5vY29va2llLm5ldC9tZXRhbGdlYXIvaW1hZ2VzL2UvZTEvTWV0YWxfR2Vhci5qcGdcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlR2FsbGVyeTEgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9pdC90aHVtYi83Lzc3L1Bpa2FjaHUucG5nLzEwMjRweC1QaWthY2h1LnBuZ1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHYWxsZXJ5MiA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vd3d3LnBuZ21hcnQuY29tL2ZpbGVzLzExL0Zyb2ctTWVtZS1QTkctSEQucG5nXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdhbGxlcnkzID0ge1xyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9tZWRpYS5saWNkbi5jb20vZG1zL2ltYWdlL0Q1NjM1QVFIdzNFNXlZeVhUTHcvcHJvZmlsZS1mcmFtZWRwaG90by1zaHJpbmtfODAwXzgwMC8wLzE2NDQ1MTg5MTg2MDY/ZT0xNjc1NjIwMDAwJnY9YmV0YSZ0PXgxUm5YcVdzRFdBT1ZRVVhHRnVqTW9kWFpoaUdVUUp1MGE2RkFzWk4zTG9cIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdpb2NvMSA9IHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuYW1lOiBcIlN1cGVyTWFyaW9cIixcclxuICAgICAgICBnZW5yZTogW3tnZW5yZTogXCJQTEFURk9STVwifV0sXHJcbiAgICAgICAgeWVhcjogMTk4NSxcclxuICAgICAgICBjb25zb2xlOiB7Y29uc29sZTogXCJORVNcIn0sXHJcbiAgICAgICAgY292ZXI6IGltYWdlR2lvY28xXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2lvY28yID0ge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIG5hbWU6IFwiVGhlIExlZ2VuZCBvZiBaZWxkYVwiLFxyXG4gICAgICAgIGdlbnJlOiBbe2dlbnJlOiBcIkFWVkVOVFVSQVwifV0sXHJcbiAgICAgICAgeWVhcjogMTk4NixcclxuICAgICAgICBjb25zb2xlOiB7Y29uc29sZTogXCJORVNcIn0sXHJcbiAgICAgICAgY292ZXI6IGltYWdlR2lvY28yXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2lvY28zID0ge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIG5hbWU6IFwiUG9rZW1vbiBHaWFsbG9cIixcclxuICAgICAgICBnZW5yZTogW3tnZW5yZTogXCJHRFJcIn1dLFxyXG4gICAgICAgIHllYXI6IDE5OTgsXHJcbiAgICAgICAgY29uc29sZToge2NvbnNvbGU6IFwiR0FNRV9CT1lfQ09MT1JcIn0sXHJcbiAgICAgICAgY292ZXI6IGltYWdlR2lvY28zXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2lvY280ID0ge1xyXG4gICAgICAgIGlkOiA0LFxyXG4gICAgICAgIG5hbWU6IFwiTWV0YWwgR2VhclwiLFxyXG4gICAgICAgIGdlbnJlOiBbe2dlbnJlOiBcIlNURUFMVEhcIn1dLFxyXG4gICAgICAgIHllYXI6IDE5ODcsXHJcbiAgICAgICAgY29uc29sZToge2NvbnNvbGU6IFwiTkVTXCJ9LFxyXG4gICAgICAgIGNvdmVyOiBpbWFnZUdpb2NvNFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHB1Ymxpc2hlckdpb2NvMSA9IHtcclxuICAgICAgICB1c2VySWQ6IDEsXHJcbiAgICAgICAgdXNlcm5hbWU6IFwiUGllcm9hZmZvbmRvXCIsXHJcbiAgICAgICAgbmFtZTogXCJQaWVyaW5vXCIsXHJcbiAgICAgICAgc3VybmFtZTogXCJDaWNjaW5vXCIsXHJcbiAgICAgICAgZW1haWw6IFwicGllcmlub2N1b3JpY2lub0BhbW9yaW5vLmNvbVwiLFxyXG4gICAgICAgIHJhdGluZzogNjY2LFxyXG4gICAgICAgIHZpZGVvZ2FtZXM6IFtnaW9jbzFdXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5zZXJ0aW9uMTogaW5zZXJ0aW9uID0ge1xyXG4gICAgICAgIGFwcHJvdmVkOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiBcIlNjYW1iaW8gU3VwZXJNYXJpb1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlNjYW1iaW8gc3VwZXJtYXJpbyB4a8OoIG1pIHNvbm8gc2Vra2F0byBhIGdpb2NhcmNpXCIsXHJcbiAgICAgICAgcHVibGlzaGVyOiBwdWJsaXNoZXJHaW9jbzEsXHJcbiAgICAgICAgZ2FsbGVyeTogW2dpb2NvMS5jb3ZlciwgaW1hZ2VHYWxsZXJ5MSwgaW1hZ2VHYWxsZXJ5MiwgaW1hZ2VHYWxsZXJ5M10sXHJcbiAgICAgICAgdHJhZGVHYW1lOiBnaW9jbzEsXHJcbiAgICAgICAgd2lzaExpc3Q6IFtnaW9jbzIsIGdpb2NvMywgZ2lvY280XSxcclxuICAgICAgICBvdXRjb21lOiBcIldJUFwiLFxyXG4gICAgICAgIHB1YmxpY2F0aW9uRGF0ZTogXCIyOS0wMS0yMDIzXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbnNlcnRpb24yOiBpbnNlcnRpb24gPSB7XHJcbiAgICAgICAgYXBwcm92ZWQ6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IFwiU2NhbWJpbyBwYWNtYW5cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTY2FtYmlvIHN1cGVybWFyaW8geGvDqCBtaSBzb25vIHNla2thdG8gYSBnaW9jYXJjaVwiLFxyXG4gICAgICAgIHB1Ymxpc2hlcjogcHVibGlzaGVyR2lvY28xLFxyXG4gICAgICAgIGdhbGxlcnk6IFtnaW9jbzIuY292ZXIsIGltYWdlR2FsbGVyeTIsIGltYWdlR2FsbGVyeTIsIGltYWdlR2FsbGVyeTNdLFxyXG4gICAgICAgIHRyYWRlR2FtZTogZ2lvY28yLFxyXG4gICAgICAgIHdpc2hMaXN0OiBbZ2lvY28yLCBnaW9jbzMsIGdpb2NvNF0sXHJcbiAgICAgICAgb3V0Y29tZTogXCJXSVBcIixcclxuICAgICAgICBwdWJsaWNhdGlvbkRhdGU6IFwiMjktMDEtMjAyM1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5zZXJ0aW9uMzogaW5zZXJ0aW9uID0ge1xyXG4gICAgICAgIGFwcHJvdmVkOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiBcInNjYW1iaW8gY29kZXN0b1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlNjYW1iaW8gc3VwZXJtYXJpbyB4a8OoIG1pIHNvbm8gc2Vra2F0byBhIGdpb2NhcmNpXCIsXHJcbiAgICAgICAgcHVibGlzaGVyOiBwdWJsaXNoZXJHaW9jbzEsXHJcbiAgICAgICAgZ2FsbGVyeTogW2dpb2NvMy5jb3ZlciwgaW1hZ2VHYWxsZXJ5MywgaW1hZ2VHYWxsZXJ5MiwgaW1hZ2VHYWxsZXJ5M10sXHJcbiAgICAgICAgdHJhZGVHYW1lOiBnaW9jbzMsXHJcbiAgICAgICAgd2lzaExpc3Q6IFtnaW9jbzIsIGdpb2NvMywgZ2lvY280XSxcclxuICAgICAgICBvdXRjb21lOiBcIldJUFwiLFxyXG4gICAgICAgIHB1YmxpY2F0aW9uRGF0ZTogXCIyOS0wMS0yMDIzXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbnNlcnRpb240OiBpbnNlcnRpb24gPSB7XHJcbiAgICAgICAgYXBwcm92ZWQ6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IFwiU2NhbWJpbyBwaXBvbG9cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTY2FtYmlvIHN1cGVybWFyaW8geGvDqCBtaSBzb25vIHNla2thdG8gYSBnaW9jYXJjaVwiLFxyXG4gICAgICAgIHB1Ymxpc2hlcjogcHVibGlzaGVyR2lvY28xLFxyXG4gICAgICAgIGdhbGxlcnk6IFtnaW9jbzQuY292ZXIsIGltYWdlR2FsbGVyeTEsIGltYWdlR2FsbGVyeTIsIGltYWdlR2FsbGVyeTNdLFxyXG4gICAgICAgIHRyYWRlR2FtZTogZ2lvY280LFxyXG4gICAgICAgIHdpc2hMaXN0OiBbZ2lvY28yLCBnaW9jbzMsIGdpb2NvNF0sXHJcbiAgICAgICAgb3V0Y29tZTogXCJXSVBcIixcclxuICAgICAgICBwdWJsaWNhdGlvbkRhdGU6IFwiMjktMDEtMjAyM1wiXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGxpc3QucHVzaChpbnNlcnRpb24xKTtcclxuICAgIGxpc3QucHVzaChpbnNlcnRpb24yKTtcclxuICAgIGxpc3QucHVzaChpbnNlcnRpb24zKTtcclxuICAgIGxpc3QucHVzaChpbnNlcnRpb240KTtcclxuXHJcbiAgICBcclxuICAgIC8qUVVFU1RPIEUnIExBIEZVTlpJT05FIEdJVVNUQSBOT04gRkFNTyBDSEUgU0JBR0xJQVRFISAqL1xyXG5cclxuICAgIC8qRmV0Y2ggYSBiYWNrZW5kIGNvbiB0dXR0aSBnbGkgYW5udW5jaSwgYWdnaW9ybmEgbGEgbGlzdGEgbGlzdCovXHJcbiAgICAvLyBsaXN0PVtdO1xyXG4gICAgLy8gZmV0Y2goJy9UaXBvQW5udW5jaUNoZW5lc28nKVxyXG4gICAgLy8gLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAvLyAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgLy8gICAgIGZvcihsZXQgZCBvZiBkYXRhKXtcclxuICAgIC8vICAgICAgICAgbGlzdC5wdXNoKGQpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhvbWUoKXtcclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuICAgIG1haW4uaW5uZXJIVE1MID0gaG9tZTtcclxuICAgXHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnRpb25zQ2FyZFwiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBhbm51bmNpO1xyXG4gICAgICAgIGNyZWF0ZVBhZ2UoKTtcclxuICAgIH07XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnRDYXJkXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGNyZWFBbm51bmNpbztcclxuICAgICAgICBjcmVhdGVJbnNlcnRpb25QYWdlKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQnV0dG9uVGl0bGVcIikub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBsZXQga2V5d29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoVGl0bGVcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICBpZihrZXl3b3JkLnZhbHVlICE9IFwiXCIpe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MID0gYW5udW5jaTtcclxuICAgICAgICAgICAgY3JlYXRlUGFnZSgpO1xyXG4gICAgICAgICAgICBzZWFyY2hCeVRpdGxlKGtleXdvcmQudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFRpdGxlXCIpLm9ua2V5ZG93biA9IChlKSA9PiB7XHJcbiAgICAgICAgbGV0IGtleXdvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFRpdGxlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgaWYoZS5rZXkgPT0gXCJFbnRlclwiICYmIGtleXdvcmQudmFsdWUhPSBcIlwiKXtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGFubnVuY2k7XHJcbiAgICAgICAgICAgIGNyZWF0ZVBhZ2UoKTtcclxuICAgICAgICAgICAgc2VhcmNoQnlUaXRsZShrZXl3b3JkLnZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbEluc2VydGlvbnMoKTtcclxuICAgIGNyZWF0ZUl0ZW1DYXJvdXNlbCgpO1xyXG5cclxuICAgIFxyXG5cclxufSBcclxuICAgIFxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVJdGVtQ2Fyb3VzZWwoKXtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgY2FySW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5uZXJDYXJvdXNlbEhvbWUnKTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgNCAmJiBpIDwgbGlzdC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBjbENhcm91c2VsSXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgaWYoaSA9PSAwKXtcclxuICAgICAgICAgICAgICAgIGNsQ2Fyb3VzZWxJdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Nhcm91c2VsLWl0ZW0gYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgY2xDYXJvdXNlbEl0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2Fyb3VzZWwtaXRlbScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgbGlzdFtpXS50cmFkZUdhbWUuY292ZXIubGluayk7XHJcbiAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ltZ0NhcmQnKTtcclxuICAgICAgICAgICAgbGV0IGNsQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjbENhcmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkIHRleHQtYmctc2Vjb25kYXJ5Jyk7XHJcbiAgICAgICAgICAgIGNsQ2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FubkNhcmQnKTtcclxuICAgICAgICAgICAgbGV0IGNhckJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY2FyQm9keS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQtYm9keScpO1xyXG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xyXG4gICAgICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQtdGl0bGUnKTtcclxuICAgICAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gbGlzdFtpXS50cmFkZUdhbWUubmFtZTtcclxuICAgICAgICAgICAgbGV0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGRlc2Muc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkLXRleHQnKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0W2ldLnRyYWRlR2FtZS5nZW5yZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZGVzYy5pbm5lckhUTUwgKz0gbGlzdFtpXS50cmFkZUdhbWUuZ2VucmVbaV0uZ2VucmUgKyBcIiBcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlc2MuaW5uZXJIVE1MICs9IFwiPGJyPlwiXHJcbiAgICAgICAgICAgICsgXCJBbm5vOiBcIiArIGxpc3RbaV0udHJhZGVHYW1lLnllYXIgKyBcIiBcIlxyXG4gICAgICAgICAgICArIFwiQ29uc29sZTogXCIgKyBsaXN0W2ldLnRyYWRlR2FtZS5jb25zb2xlLmNvbnNvbGUgKyBcIjxicj5cIlxyXG4gICAgICAgICAgICArXCJEZXNjcml6aW9uZTpcIjtcclxuICAgICAgICAgICAgbGV0IGdvQW5uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgICBnb0Fubi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBcIiNcIik7XHJcbiAgICAgICAgICAgIGdvQW5uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYnRuIGJ0bi1wcmltYXJ5Jyk7XHJcbiAgICAgICAgICAgIGdvQW5uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpLmlubmVySFRNTCA9IGFubnVuY2lvO1xyXG4gICAgICAgICAgICAgICAgZXhwYW5kSW5zZXJ0aW9uKGxpc3RbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdvQW5uLmlubmVySFRNTCA9ICdWYWkgYWxsIGFubnVuY2lvJztcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgIGNhcklubmVyLmFwcGVuZENoaWxkKGNsQ2Fyb3VzZWxJdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xDYXJvdXNlbEl0LmFwcGVuZENoaWxkKGNsQ2FyZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsQ2FyZC5hcHBlbmQoaW1nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xDYXJkLmFwcGVuZChjYXJCb2R5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhckJvZHkuYXBwZW5kKHRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhckJvZHkuYXBwZW5kKGRlc2MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyQm9keS5hcHBlbmQoZ29Bbm4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lO1xyXG5cclxuLypcclxuYXN5bmMgZnVuY3Rpb24gZ2V0dGl0bGUodGl0bGU6IHN0cmluZyk6e1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgpXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcblxyXG59XHJcbiovIiwiaW1wb3J0IG1vZGFsIGZyb20gJy4vbW9kYWwuaHRtbCdcclxuaW1wb3J0IGxvZ2luIGZyb20gJy4uL2xvZ2luL2xvZ2luLmh0bWwnXHJcbmltcG9ydCBsb2dpbkZvb3RlciBmcm9tICcuLi9sb2dpbi9sb2dpbkZvb3Rlci5odG1sJ1xyXG5pbXBvcnQgcmVnaXN0cmF6aW9uZSBmcm9tICcuLi9yZWdpc3RyYXppb25lL3JlZ2lzdHJhemlvbmUuaHRtbCdcclxuaW1wb3J0IHJlZ0Zvb3RlciBmcm9tICcuLi9yZWdpc3RyYXppb25lL3JlZ2lzdHJhemlvbmVGb290ZXIuaHRtbCdcclxuaW1wb3J0IGxvZ291dCBmcm9tICcuLi9sb2dvdXQvbG9nb3V0Lmh0bWwnXHJcbmltcG9ydCBwcm9maWxlIGZyb20gJy4uL3Byb2ZpbG9VdGVudGUvcHJvZmlsZS5odG1sJ1xyXG5pbXBvcnQgKiBhcyBuYXYgZnJvbSBcIi4uL25hdmJhci9uYXZiYXJcIjtcclxuaW1wb3J0IGxvZ2dlZCBmcm9tICcuLi9pbnRlcmZhY2VzL2xvZ2dlZCdcclxuaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSAnLi4vaG9tZS9ob21lJ1xyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW9kYWwoKXtcclxuICAgIGxldCBkaXZNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXZNb2RhbC5pbm5lckhUTUwgPSBtb2RhbDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpLmFwcGVuZENoaWxkKGRpdk1vZGFsKTtcclxuICAgIHNob3dMb2dJbk1vZGFsKCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luXCIpLm9uY2xpY2sgPSBzaG93TG9nSW5Nb2RhbDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbk91dEJ1dHRvblwiKS5vbmNsaWNrID0gc2hvd0xvZ091dE1vZGFsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93U2lnblVwTW9kYWwoKXtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbEJvZHlcIikuaW5uZXJIVE1MID0gcmVnaXN0cmF6aW9uZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbEZvb3RlclwiKS5pbm5lckhUTUwgPSByZWdGb290ZXI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyeXRvU2lnblVwXCIpLm9uY2xpY2sgPSB0cnlUb1NpZ25VcDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnblVwTG9naW5cIikub25jbGljayA9IHNob3dMb2dJbk1vZGFsO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lU2lnblVwXCIpLm9ua2V5dXAgPSB2YWxpZGF0ZUZvcm07XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1cm5hbWVTaWduVXBcIikub25rZXl1cCA9IHZhbGlkYXRlRm9ybTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcm5hbWVTaWduVXBcIikub25rZXl1cCA9IHZhbGlkYXRlRm9ybTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxTaWduVXBcIikub25rZXl1cCA9IHZhbGlkYXRlRm9ybTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmRTaWduVXBcIikub25rZXl1cCA9IHZhbGlkYXRlRm9ybTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uZmlybV9wYXNzd29yZFNpZ25VcFwiKS5vbmtleXVwID0gdmFsaWRhdGVGb3JtO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93TG9nSW5Nb2RhbCgpe1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteU1vZGFsQm9keVwiKS5pbm5lckhUTUwgPSBsb2dpbjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbEZvb3RlclwiKS5pbm5lckhUTUwgPSBsb2dpbkZvb3RlcjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5TaWduVXBcIikub25jbGljayA9IHNob3dTaWduVXBNb2RhbDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJ5VG9Mb2dcIikub25jbGljayA9IHRyeVRvTG9nSW47XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNob3dMb2dPdXRNb2RhbCgpe1xyXG4gICAgbGV0IHJlc3VsdCA6IGJvb2xlYW49IGF3YWl0IHRyeVRvTG9nT3V0KCk7XHJcbiAgICBpZihyZXN1bHQpe1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbEJvZHlcIikuaW5uZXJIVE1MID0gbG9nb3V0O1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbEZvb3RlclwiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGNyZWF0ZUhvbWUoKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdHJ5VG9TaWduVXAoKSB7XHJcbiAgICBjb25zdCB1c2VyID0ge1xyXG4gICAgICAgIHVzZXJuYW1lOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VybmFtZVNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSAsXHJcbiAgICAgICAgcGFzc3dvcmQ6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLFxyXG4gICAgICAgIG5hbWU6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVTaWduVXBcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcbiAgICAgICAgc3VybmFtZTogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VybmFtZVNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSxcclxuICAgICAgICBlbWFpbDogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxTaWduVXBcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpXHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2goXCIvdXNlclwiLCByZXF1ZXN0KS50aGVuKChyZXNwb25zZSk9PnJlc3BvbnNlLmpzb24oKSkudGhlbigoZGF0YSk9PntcclxuICAgICAgICBpZihkYXRhKXtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduVXBSZXN1bHRcIikuaW5uZXJIVE1MPVwiUmVnaXN0cmF0byBjb24gc3VjY2Vzc28hXCI7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJ5dG9TaWduVXBcIikuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25VcFJlc3VsdFwiKS5pbm5lckhUTUw9XCJPcHMsIHF1YWxjb3NhIMOoIGFuZGF0byBzdG9ydG8hXCI7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJ5dG9TaWduVXBcIikucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxufVxyXG5cclxuZnVuY3Rpb24gdHJ5VG9Mb2dJbigpIHtcclxuICAgIGNvbnN0IGxvZ2luID0ge1xyXG4gICAgICAgIHVzZXJuYW1lOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VybmFtZVNpZ25JblwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSxcclxuICAgICAgICBwYXNzd29yZDogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmRTaWduSW5cIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXF1ZXN0ID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZScgOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGxvZ2luKVxyXG4gICAgfTtcclxuICAgIGxldCByZXN1bHQgOiBhbnkgPSBmZXRjaChcIi9sb2dpblwiLCByZXF1ZXN0KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKT0+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgaWYoZGF0YS5sb2dnZWQpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpblJlc3VsdFwiKS5pbm5lckhUTUw9XCJMb2dnYXRvIGNvbiBzdWNjZXNzbyFcIjtcclxuICAgICAgICAgICAgbmF2LnNldE5hdihkYXRhLmFjY291bnRUeXBlKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cnlUb0xvZ1wiKS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5TaWduVXBcIikuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgICBjcmVhdGVIb21lKCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5SZXN1bHRcIikuaW5uZXJIVE1MPVwiT3BzLCBxdWFsY29zYSDDqCBhbmRhdG8gc3RvcnRvXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHRyeVRvTG9nT3V0KCkgOlByb21pc2U8Ym9vbGVhbj57XHJcbiAgICBsZXQgcHJvbWlzZVJlc3VsdCA9IGZldGNoKFwiL2xvZ291dFwiKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKT0+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgaWYoZGF0YSl7XHJcbiAgICAgICAgICAgIG5hdi5zZXROYXYoXCJHVUVTVFwiKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cnlUb0xvZ1wiKS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpblNpZ25VcFwiKS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGF9KTtcclxuICAgIHJldHVybiBwcm9taXNlUmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUZvcm0oKXtcclxuICAgIGxldCB1c2VybmFtZSA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJuYW1lU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlIDtcclxuICAgIGxldCBwYXNzd29yZCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgbGV0IG5hbWUgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgbGV0IHN1cm5hbWUgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdXJuYW1lU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgbGV0IGVtYWlsID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxTaWduVXBcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICBsZXQgY29uZmlybV9wYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uZmlybV9wYXNzd29yZFNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uZmlybV9wYXNzd29yZC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIlwiKTtcclxuICAgIFxyXG4gICAgaWYodXNlcm5hbWU9PVwiXCIgfHwgcGFzc3dvcmQ9PVwiXCIgfHxuYW1lPT1cIlwiIHx8IHN1cm5hbWU9PVwiXCIgfHwgZW1haWw9PVwiXCIpe1xyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyeXRvU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQgKS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKHBhc3N3b3JkICE9IGNvbmZpcm1fcGFzc3dvcmQudmFsdWUpIHtcclxuICAgICAgICAgICAgY29uZmlybV9wYXNzd29yZC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJvcmRlci1jb2xvcjogcmVkO1wiKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uZmlybV9wYXNzd29yZC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJvcmRlci1jb2xvcjogZ3JlZW47XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICAgIGlmIChwYXNzd29yZCAhPSBjb25maXJtX3Bhc3N3b3JkLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbmZpcm1fcGFzc3dvcmQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJib3JkZXItY29sb3I6IHJlZDtcIik7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbmZpcm1fcGFzc3dvcmQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJib3JkZXItY29sb3I6IGdyZWVuO1wiKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cnl0b1NpZ25VcFwiKS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNb2RhbDsiLCJpbXBvcnQgbmF2IGZyb20gXCIuL25hdmJhci5odG1sXCI7XHJcbmltcG9ydCBjcmVhdGVNb2RhbCBmcm9tIFwiLi4vbW9kYWwvbW9kYWxcIjtcclxuaW1wb3J0IGFubnVuY2kgZnJvbSBcIi4uL2FubnVuY2kvYW5udW5jaS5odG1sXCI7XHJcbmltcG9ydCBnZXN0aW9uZWFubnVuY2kgZnJvbSBcIi4uL2FubnVuY2kvZ2VzdGlvbmVhbm51bmNpLmh0bWxcIjtcclxuaW1wb3J0IGNyZWF0ZVBhZ2UgZnJvbSBcIi4uL2FubnVuY2kvYW5udW5jaVwiO1xyXG5pbXBvcnQgaG9tZSBmcm9tIFwiLi4vaG9tZS9ob21lLmh0bWxcIjtcclxuaW1wb3J0IGNyZWF0ZUl0ZW1DYXJvdXNlbCBmcm9tIFwiLi4vaG9tZS9ob21lXCJcclxuaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSBcIi4uL2hvbWUvaG9tZVwiO1xyXG5pbXBvcnQgcHJvZmlsZSBmcm9tIFwiLi4vcHJvZmlsb1V0ZW50ZS9wcm9maWxlLmh0bWxcIjtcclxuaW1wb3J0IHNob3dQcm9maWxlIGZyb20gXCIuLi9wcm9maWxvVXRlbnRlL3Byb2ZpbGVcIjtcclxuaW1wb3J0IGdlc3Rpb25lVXRlbnRpIGZyb20gXCIuLi9nZXN0aW9uZVV0ZW50aS9nZXN0aW9uZVV0ZW50aS5odG1sXCI7XHJcbmltcG9ydCBnZXRBbGxVc2VycyBmcm9tIFwiLi4vZ2VzdGlvbmVVdGVudGkvZ2VzdGlvbmVVdGVudGlcIjtcclxuaW1wb3J0IGNyZWF0ZVBhZ2UyIGZyb20gXCIuLi9hbm51bmNpL2dlc3Rpb25lYW5udW5jaVwiO1xyXG5pbXBvcnQgY3JlYUFubnVuY2lvIGZyb20gXCIuLi9jcmVhQW5udW5jaW8vY3JlYUFubnVuY2lvLmh0bWxcIlxyXG5pbXBvcnQgdmlkZW9naW9jaGkgZnJvbSBcIi4uL3ZpZGVvZ2lvY2hpL3ZpZGVvZ2lvY2hpLmh0bWxcIlxyXG5pbXBvcnQgY3JlYXRlSW5zZXJ0aW9uUGFnZSBmcm9tIFwiLi4vY3JlYUFubnVuY2lvL2NyZWFBbm51bmNpb1wiXHJcbmltcG9ydCBjcmVhdGVHYW1lUGFnZSBmcm9tIFwiLi4vdmlkZW9naW9jaGkvdmlkZW9naW9jaGlcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOYXYoKSB7XHJcbiAgICBcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpLmlubmVySFRNTCA9IG5hdjtcclxuICAgIGNyZWF0ZU1vZGFsKCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ29cIikub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBjcmVhdGVIb21lKCk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVzXCIpLm9uY2xpY2s9KCk9PntcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTD12aWRlb2dpb2NoaTsgXHJcbiAgICAgIGNyZWF0ZUdhbWVQYWdlKCk7IFxyXG4gICAgfTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc2VydGlvbnNcIikub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MID0gYW5udW5jaTtcclxuICAgICAgICBjcmVhdGVQYWdlKCk7XHJcbiAgICB9O1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRJbnNlcnRpb25cIikub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MID0gY3JlYUFubnVuY2lvO1xyXG4gICAgICAgIGNyZWF0ZUluc2VydGlvblBhZ2UoKTtcclxuICAgIH07XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc01hbmFnZW1lbnRcIikub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MID0gZ2VzdGlvbmVhbm51bmNpO1xyXG4gICAgICAgIGNyZWF0ZVBhZ2UyKCk7XHJcbiAgICB9O1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYW5hZ2VtZW50XCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGdlc3Rpb25lVXRlbnRpO1xyXG4gICAgICAgIGdldEFsbFVzZXJzKCk7XHJcbiAgICB9O1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9maWxlXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IHByb2ZpbGU7XHJcbiAgICAgICAgc2hvd1Byb2ZpbGUoKTtcclxuICAgIH07XHJcbiAgICBmZXRjaChcIi93aG9Jc0xvZ2dlZFwiKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigoZGF0YSk9PntcclxuICAgICAgICBzZXROYXYoZGF0YSk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0TmF2KGFjY291bnRUeXBlIDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBidG5fZ2VzdFV0ZW50aSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFuYWdlbWVudFwiKTtcclxuICAgIGNvbnN0IGJ0bl9pbnNNYW5hZ2VtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNNYW5hZ2VtZW50XCIpO1xyXG4gICAgY29uc3QgYnRuX2xvZ2luID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpblwiKTtcclxuICAgIGNvbnN0IGJ0bl9zaWduT3V0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduT3V0QnV0dG9uXCIpO1xyXG4gICAgY29uc3QgYnRuX2FkZEluc2VydGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkSW5zZXJ0aW9uXCIpO1xyXG4gICAgY29uc3QgYnV0dG9uX3Byb2ZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2ZpbGVcIik7XHJcbiAgICBpZihhY2NvdW50VHlwZT09XCJBRE1JTlwiKXtcclxuICAgICAgICBidG5fZ2VzdFV0ZW50aS5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgYnRuX2FkZEluc2VydGlvbi5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIGJ0bl9pbnNNYW5hZ2VtZW50LnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKTtcclxuICAgICAgICBidG5fbG9naW4uc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICBidG5fc2lnbk91dEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgYnV0dG9uX3Byb2ZpbGUucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpXHJcbiAgICB9ZWxzZSBpZihhY2NvdW50VHlwZT09XCJVU0VSXCIpe1xyXG4gICAgICAgIGJ0bl9nZXN0VXRlbnRpLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgYnRuX2FkZEluc2VydGlvbi5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgYnRuX2luc01hbmFnZW1lbnQuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICBidG5fbG9naW4uc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICBidG5fc2lnbk91dEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgYnV0dG9uX3Byb2ZpbGUucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBidG5fZ2VzdFV0ZW50aS5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIGJ0bl9hZGRJbnNlcnRpb24uc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICBidG5faW5zTWFuYWdlbWVudC5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIGJ0bl9sb2dpbi5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgYnRuX3NpZ25PdXRCdXR0b24uc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICBidXR0b25fcHJvZmlsZS5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJ0cnVlXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU5hdjtcclxuIiwiaW1wb3J0IHByb2ZpbGUgZnJvbSAnLi9wcm9maWxlLmh0bWwnXHJcblxyXG5cclxubGV0IHR5cGU7XHJcbmxldCB1c2VySW5mbztcclxubGV0IGFkbWluSW5mbztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93UHJvZmlsZSgpeyAgIFxyXG4gICAgZmV0Y2goXCIvd2hvSXNMb2dnZWRcIilcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBpZiAoZGF0YSA9PSBcIkFETUlOXCIpIHtcclxuICAgICAgICAgICAgdHlwZSA9IFwiQURNSU5cIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGRhdGEgPT0gXCJVU0VSXCIpIHtcclxuICAgICAgICAgICAgdHlwZSA9IFwiVVNFUlwiXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdHlwZSA9IFwiR1VFU1RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XHJcbiAgICAgICAgbWFpbi5pbm5lckhUTUwgPSBwcm9maWxlO1xyXG4gICAgICAgIGNyZWF0ZVByb2ZpbGUodHlwZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjaWFvIGRhIHNob3dcIilcclxuICAgIH0pXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9maWxlKHR5cGU6c3RyaW5nKXtcclxuXHJcbiAgICBpZiAodHlwZSA9PSBcIkFETUlOXCIpIHtcclxuICAgICAgICBzaG93QWRtaW5Qcm9maWxlKCk7XHJcblxyXG4gICAgfSBlbHNlIGlmKHR5cGUgPT0gXCJVU0VSXCIpIHtcclxuICAgICAgICBzaG93VXNlclByb2ZpbGUoKTtcclxuICAgIH1lbHNle1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dBZG1pblByb2ZpbGUoKXtcclxuXHJcbiAgICBmZXRjaChcIi9hZG1pbkluZm9cIilcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBhZG1pbkluZm89ZGF0YTtcclxuICAgICAgICBsZXQgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZXByb2ZpbGVcIik7XHJcbiAgICAgICAgaDEuaW5uZXJIVE1MPVwiQkVOVE9STkFUTyBBTU1JTklTVFJBVE9SRSBcIithZG1pbkluZm8udXNlcm5hbWU7XHJcbiAgICAgICAgdGl0bGUuYXBwZW5kKGgxKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keXByb2ZpbGVcIik7XHJcbiAgICAgICAgbGV0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICAgIGgyLmlubmVySFRNTD1cIkVjY28gdW4gcmllcGlsb2dvIGRlaSB0dW9pIGRhdGk6IFwiXHJcbiAgICAgICAgKyBcIiA8YnI+PGJyPjxicj4gPGI+VXNlcm5hbWU8L2I+OiBcIithZG1pbkluZm8udXNlcm5hbWUgXHJcbiAgICAgICAgKyBcIiA8YnI+PGJyPiA8Yj5FbWFpbDwvYj46IFwiK2FkbWluSW5mby5lbWFpbCBcclxuICAgICAgICArIFwiIDxicj48YnI+IDxiPk5vbWU8L2I+OiBcIithZG1pbkluZm8ubmFtZVxyXG4gICAgICAgICsgXCIgPGJyPjxicj4gPGI+Q29nbm9tZTwvYj46IFwiK2FkbWluSW5mby5zdXJuYW1lXHJcbiAgICAgICAgYm9keS5hcHBlbmQoaDIpXHJcblxyXG4gICAgICAgIGxldCBidXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b25zLXByb2ZpbGVcIik7XHJcbiAgICAgICAgbGV0IGJ0bjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ0bjEuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcImJ0biBidG4tcHJpbWFyeSBteS0xXCIpO1xyXG4gICAgICAgIGJ0bjEub25jbGljaz0oKT0+e1xyXG4gICAgICAgICAgICBsZXQgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgJ3VzZXJuYW1lJyA6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJuYW1lXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgJ2VtYWlsJyA6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmZXRjaChcIi9hZG1pbi9pbmZvXCIsIHJlcXVlc3QpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSk9PnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpPT4gXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcm5hbWVcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU9XCJcIjtcclxuICAgICAgICAgICAgICAgIHNob3dQcm9maWxlKClcclxuICAgICAgICAgICAgfSkgICAgICAgICAgIFxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgYnRuMS5pbm5lckhUTUw9XCJDYW1iaWEgVXNlcm5hbWVcIlxyXG4gICAgICAgIGJ1dHRvbnMuYXBwZW5kKGJ0bjEpXHJcblxyXG4gICAgICAgIGxldCBidXR0b25FbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9ucy1wcm9maWxlXCIpO1xyXG4gICAgICAgIGxldCBidG4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBidG4yLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJidG4gYnRuLXByaW1hcnkgICBteS00XCIpO1xyXG4gICAgICAgIGJ0bjIub25jbGljaz0oKT0+e1xyXG4gICAgICAgICAgICBsZXQgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgJ3VzZXJuYW1lJyA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAnZW1haWwnIDogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmZXRjaChcIi9hZG1pbi9pbmZvXCIsIHJlcXVlc3QpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSk9PnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpPT4gXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU9XCJcIjtcclxuICAgICAgICAgICAgICAgIHNob3dQcm9maWxlKClcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBidG4yLmlubmVySFRNTD1cIkNhbWJpYSBFbWFpbFwiXHJcbiAgICAgICAgYnV0dG9ucy5hcHBlbmQoYnRuMik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGNwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcFwiKTtcclxuICAgICAgICBsZXQgYnRuMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnRuMy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ0biBidG4tcHJpbWFyeVwiKVxyXG4gICAgICAgIGJ0bjMuaW5uZXJIVE1MPVwiQ2FtYmlhIFBhc3N3b3JkXCJcclxuICAgICAgICBidG4zLm9uY2xpY2s9ICgpPT57XHJcbiAgICAgICAgICAgIGxldCBvYmogPSB7XHJcbiAgICAgICAgICAgICAgICAnb2xkUGFzc3dvcmQnIDogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2xkUGFzc3dvcmRcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAnbmV3UGFzc3dvcmQnIDogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UGFzc3dvcmRcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmZXRjaChcIi9hZG1pbi9wc3dcIiwgcmVxdWVzdClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKT0+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSk9PiBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvbGRQYXNzd29yZFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZT1cIlwiOyAgICAgIFxyXG4gICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UGFzc3dvcmRcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU9XCJcIjsgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjcC5hcHBlbmQoYnRuMyk7XHJcblxyXG4gICAgfSlcclxuICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dVc2VyUHJvZmlsZSgpe1xyXG4gICAgZmV0Y2goXCIvdXNlckluZm9cIilcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICB1c2VySW5mbz1kYXRhO1xyXG4gICAgICAgIGxldCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlcHJvZmlsZVwiKTtcclxuICAgICAgICBoMS5pbm5lckhUTUw9XCJCRU5UT1JOQVRPIFVURU5URSBcIisgdXNlckluZm8udXNlcm5hbWU7XHJcbiAgICAgICAgdGl0bGUuYXBwZW5kKGgxKTtcclxuICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keXByb2ZpbGVcIik7XHJcbiAgICAgICAgbGV0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICAgIGgyLmlubmVySFRNTD1cIkVjY28gdW4gcmllcGlsb2dvIGRlaSB0dW9pIGRhdGk6IFwiXHJcbiAgICAgICAgKyBcIiA8YnI+PGJyPjxicj4gPGI+VXNlcm5hbWU8L2I+OiBcIit1c2VySW5mby51c2VybmFtZSBcclxuICAgICAgICArIFwiIDxicj48YnI+IDxiPkVtYWlsPC9iPjogXCIrdXNlckluZm8uZW1haWwgXHJcbiAgICAgICAgKyBcIiA8YnI+PGJyPjxiPk5vbWU8L2I+OiBcIit1c2VySW5mby5uYW1lXHJcbiAgICAgICAgKyBcIiA8YnI+PGJyPiA8Yj5Db2dub21lPC9iPjogXCIrdXNlckluZm8uc3VybmFtZVxyXG4gICAgICAgIGJvZHkuYXBwZW5kKGgyKVxyXG5cclxuICAgICAgICBsZXQgYnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9ucy1wcm9maWxlXCIpO1xyXG4gICAgICAgIGxldCBidG4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBidG4xLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJidG4gYnRuLXByaW1hcnkgbXktMVwiKTtcclxuICAgICAgICBidG4xLm9uY2xpY2s9KCk9PntcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBvYmogPSB7XHJcbiAgICAgICAgICAgICAgICAndXNlcm5hbWUnIDogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcm5hbWVcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAnZW1haWwnIDogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgcmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvYmopXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZldGNoKFwiL3VzZXIvaW5mb1wiLCByZXF1ZXN0KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpPT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKT0+IFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJuYW1lXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlPVwiXCI7XHJcbiAgICAgICAgICAgICAgICBzaG93UHJvZmlsZSgpXHJcbiAgICAgICAgICAgIH0pICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ0bjEuaW5uZXJIVE1MPVwiQ2FtYmlhIFVzZXJuYW1lXCJcclxuICAgICAgICBidXR0b25zLmFwcGVuZChidG4xKVxyXG5cclxuICAgICAgICBsZXQgYnV0dG9uRW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbnMtcHJvZmlsZVwiKTtcclxuICAgICAgICBsZXQgYnRuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnRuMi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwiYnRuIGJ0bi1wcmltYXJ5ICAgbXktNFwiKTtcclxuICAgICAgICBidG4yLm9uY2xpY2s9KCk9PntcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBvYmogPSB7XHJcbiAgICAgICAgICAgICAgICAndXNlcm5hbWUnIDogXCJcIixcclxuICAgICAgICAgICAgICAgICdlbWFpbCcgOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgcmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvYmopXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZldGNoKFwiL3VzZXIvaW5mb1wiLCByZXF1ZXN0KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpPT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKT0+IFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgYnRuMi5pbm5lckhUTUw9XCJDYW1iaWEgRW1haWxcIlxyXG4gICAgICAgIGJ1dHRvbnMuYXBwZW5kKGJ0bjIpO1xyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlPVwiXCI7XHJcbiAgICAgICAgc2hvd1Byb2ZpbGUoKTtcclxuICAgIH0pXHJcbiAgIFxyXG4gICAgbGV0IGNwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcFwiKTtcclxuICAgIGxldCBidG4zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGJ0bjMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG4gYnRuLXByaW1hcnlcIilcclxuICAgIGJ0bjMuaW5uZXJIVE1MPVwiQ2FtYmlhIFBhc3N3b3JkXCJcclxuICAgIGJ0bjMub25jbGljaz0gKCk9PntcclxuICAgICAgICBsZXQgb2JqID0ge1xyXG4gICAgICAgICAgICAnb2xkUGFzc3dvcmQnIDogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2xkUGFzc3dvcmRcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcbiAgICAgICAgICAgICduZXdQYXNzd29yZCcgOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQYXNzd29yZFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBsZXQgcmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZmV0Y2goXCIvdXNlci9wc3dcIiwgcmVxdWVzdClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpPT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpPT4gXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2xkUGFzc3dvcmRcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU9XCJcIjsgICAgICBcclxuICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UGFzc3dvcmRcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU9XCJcIjsgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNwLmFwcGVuZChidG4zKTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hvd1Byb2ZpbGU7IiwiaW1wb3J0IGNyZWFWaWRlb2dpb2NvIGZyb20gXCIuL2NyZWFWaWRlb2dpb2NvLmh0bWxcIlxyXG5cclxubGV0IHJhZGlvOiBzdHJpbmc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVmlkZW9HYW1lUGFnZSgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBjcmVhVmlkZW9naW9jbztcclxuICAgIGdlbmVyYXRlR2VucmVMaXN0KCk7XHJcbiAgICBnZW5lcmF0ZUNvbnNvbGVMaXN0KCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0dlbnJlQnRuXCIpLm9uY2xpY2sgPSBjcmVhdGVHZW5yZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3Q29uc29sZUJ0blwiKS5vbmNsaWNrID0gY3JlYXRlQ29uc29sZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3VmlkZW9HYW1lQnRuXCIpLm9uY2xpY2sgPSBjcmVhdGVWaWRlb0dhbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlR2VucmVMaXN0KCkge1xyXG4gICAgbGV0IGdlbnJlTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2VucmVMaXN0XCIpO1xyXG4gICAgZ2VucmVMaXN0LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBmZXRjaChcIi9nZW5yZVwiKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJvbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYlwiKTtcclxuICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIik7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImdlbnJlXCIraSk7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm0tY2hlY2staW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBkYXRhW2ldLmdlbnJlKTtcclxuICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybS1jaGVjay1sYWJlbFwiKTtcclxuICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImdlbnJlXCIraSk7XHJcbiAgICAgICAgICAgICAgICBib2xkLmlubmVySFRNTD1cIlwiK2RhdGFbaV0uZ2VucmU7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5hcHBlbmQoYm9sZCk7XHJcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kKGlucHV0LCBsYWJlbCk7XHJcbiAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgbGV0IHNuaXBwZXQgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0IGdlbnJlc2NoZWNrXCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJnZW5yZSR7aX1cIiB2YWx1ZT1cIiR7ZGF0YVtpXS5nZW5yZX1cIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJnZW5yZSR7aX1cIj48Yj4ke2RhdGFbaV0uZ2VucmV9PC9iPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgICAgICAgIGdlbnJlTGlzdC5pbm5lckhUTUwgKz0gc25pcHBldDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQ29uc29sZUxpc3QoKSB7XHJcbiAgICBsZXQgY29uc29sZUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnNvbGVMaXN0XCIpO1xyXG4gICAgY29uc29sZUxpc3QuaW5uZXJIVE1MID0gXCI8YnI+PGJyPlwiO1xyXG4gICAgZmV0Y2goXCIvY29uc29sZVwiKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJvbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29uc29sZVwiICsgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImNvbnNvbGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb3JtLWNoZWNrLWlucHV0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBkYXRhW2ldLmNvbnNvbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0Lm9uY2xpY2sgPSAoKT0+eyBzZXRSYWRpbyhkYXRhW2ldLmNvbnNvbGUpfTtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm0tY2hlY2stbGFiZWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiY29uc29sZVwiICsgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9sZC5pbm5lckhUTUwgPSBcIlwiICsgZGF0YVtpXS5jb25zb2xlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLmFwcGVuZChib2xkKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXYuYXBwZW5kKGlucHV0LCBsYWJlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZUxpc3QuYXBwZW5kKGRpdik7XHJcbiAgICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmlyc3RTbmlwcGV0PWBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cInJhZGlvXCIgaWQ9XCJjb25zb2xlJHtpfVwiIG5hbWU9XCJjb25zb2xlXCIgdmFsdWU9XCIke2RhdGFbaV0uY29uc29sZX1cIiBvbmNsaWNrPVwiKCk9Pnsgc2V0UmFkaW8oJHtkYXRhW2ldLmNvbnNvbGV9KX1cIiBjaGVja2VkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiY29uc29sZSR7aX1cIj48Yj4ke2RhdGFbaV0uY29uc29sZX08L2I+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZUxpc3QuaW5uZXJIVE1MICs9IGZpcnN0U25pcHBldDtcclxuICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBib2xkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnNvbGVcIiArIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJjb25zb2xlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybS1jaGVjay1pbnB1dFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgZGF0YVtpXS5jb25zb2xlKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5vbmNsaWNrID0gKCk9Pnsgc2V0UmFkaW8oZGF0YVtpXS5jb25zb2xlKX07XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb3JtLWNoZWNrLWxhYmVsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImNvbnNvbGVcIiArIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvbGQuaW5uZXJIVE1MID0gXCJcIiArIGRhdGFbaV0uY29uc29sZTtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5hcHBlbmQoYm9sZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2LmFwcGVuZChpbnB1dCwgbGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGVMaXN0LmFwcGVuZChkaXYpO1xyXG4gICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc25pcHBldCA9IGBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cInJhZGlvXCIgaWQ9XCJjb25zb2xlJHtpfVwiIG5hbWU9XCJjb25zb2xlXCIgdmFsdWU9XCIke2RhdGFbaV0uY29uc29sZX1cIiBvbmNsaWNrPVwiKCk9Pnsgc2V0UmFkaW8oJHtkYXRhW2ldLmNvbnNvbGV9KX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImNvbnNvbGUke2l9XCI+PGI+JHtkYXRhW2ldLmNvbnNvbGV9PC9iPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGVMaXN0LmlubmVySFRNTCArPSBzbmlwcGV0O1xyXG4gICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVHZW5yZSgpIHtcclxuICAgIGxldCBuZXdHZW5yZSA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0dlbnJlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgbGV0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3R2VucmUpXHJcbiAgICB9XHJcbiAgICBmZXRjaChcIi9nZW5yZVwiLCByZXF1ZXN0KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdHZW5yZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZUdlbnJlTGlzdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbnNvbGUoKSB7XHJcbiAgICBsZXQgbmV3Q29uc29sZSA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0NvbnNvbGVcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICBsZXQgcmVxdWVzdCA9IHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdDb25zb2xlKVxyXG4gICAgfVxyXG4gICAgZmV0Y2goXCIvY29uc29sZVwiLCByZXF1ZXN0KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdDb25zb2xlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGdlbmVyYXRlQ29uc29sZUxpc3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVZpZGVvR2FtZSgpIHtcclxuXHJcbiAgICBsZXQgZ2VucmVzID0gKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJnZW5yZXNjaGVja1wiKSBhcyBIVE1MQ29sbGVjdGlvbk9mPEhUTUxJbnB1dEVsZW1lbnQ+KTtcclxuICAgIGxldCBjaGVja2VkR2VucmVzICA9IFtdO1xyXG4gICAgZm9yIChsZXQgZ2VucmUgb2YgZ2VucmVzKSB7XHJcbiAgICAgICAgaWYgKGdlbnJlLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgY2hlY2tlZEdlbnJlcy5wdXNoKGdlbnJlLnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG5ld1ZpZGVvZ2FtZSA9IHtcclxuICAgICAgICBuYW1lOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJWR25hbWVcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcbiAgICAgICAgZ2VucmU6IGNoZWNrZWRHZW5yZXMsXHJcbiAgICAgICAgeWVhcjogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiVkd5ZWFyXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLFxyXG4gICAgICAgIGNvbnNvbGU6IHJhZGlvLFxyXG4gICAgICAgIGNvdmVyOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJWR2NvdmVyXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCByZXF1ZXN0ID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld1ZpZGVvZ2FtZSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgZmV0Y2goXCIvdmlkZW9nYW1lc1wiLCByZXF1ZXN0KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKT0+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgaWYoZGF0YSl7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwidmlkZW9naW9jbyBpbnNlcml0b1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFJhZGlvKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHJhZGlvID0gdmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVZpZGVvR2FtZVBhZ2VcclxuXHJcblxyXG4iLCJpbXBvcnQgeyBkYXRhIH0gZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQgdmlkZW9nYW1lIGZyb20gXCIuLi9pbnRlcmZhY2VzL3ZpZGVvZ2FtZVwiO1xyXG5pbXBvcnQgY3JlYXRlVmlkZW9HYW1lUGFnZSBmcm9tIFwiLi9jcmVhVmlkZW9naW9jaGlcIjtcclxuaW1wb3J0IGNyZWF0ZUdhbWVWaXN1YWxpemF0aW9uIGZyb20gXCIuL3Zpc3VhbGl6emFWaWRlb2dpb2NvXCJcclxuXHJcbmxldCBnYW1lTGlzdDogdmlkZW9nYW1lW10gPSBbXTtcclxubGV0IGdhbWVWaWV3OiBudW1iZXIgPSA2O1xyXG5sZXQgdHlwZTogc3RyaW5nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdhbWVQYWdlKCkge1xyXG4gICAgZmV0Y2goXCIvd2hvSXNMb2dnZWRcIilcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSA9PSBcIkFETUlOXCIpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVmlkZW9nYW1lXCIpLnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVmlkZW9nYW1lXCIpLm9uY2xpY2sgPSBjcmVhdGVWaWRlb0dhbWVQYWdlO1xyXG4gICAgICAgICAgICAgICAgdHlwZSA9IFwiQURNSU5cIjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhID09IFwiVVNFUlwiKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFZpZGVvZ2FtZVwiKS5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgICAgICAgdHlwZSA9IFwiVVNFUlwiXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFZpZGVvZ2FtZVwiKS5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgICAgICAgdHlwZSA9IFwiR1VFU1RcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdldEFsbEdhbWVzKCk7IFxyXG4gICAgICAgICAgICBjcmVhdGVHYW1lUGFnaW5hdGlvbigpO1xyXG4gICAgICAgICAgICBzaG93R2FtZXMoMSk7XHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRBbGxHYW1lcygpIHtcclxuICAgIGdhbWVMaXN0PVtdO1xyXG4gICAvKiBmZXRjaChcIi92aWRlb2dhbWVzXCIpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiAocmVzcG9uc2UuanNvbigpKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBnYW1lIG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGdhbWVMaXN0LnB1c2goZ2FtZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAqL1xyXG5cclxuICAgICAgICBjb25zdCBpbWFnZUdpb2NvMSA9IHtcclxuICAgICAgICAgICAgbGluazogXCJodHRwczovL2kuZXRzeXN0YXRpYy5jb20vNjI3NzgwNC9yL2lsLzdkZjAwZS82OTc1NDYzNDAvaWxfMTE0MHhOLjY5NzU0NjM0MF9maXZzLmpwZ1wiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBnaW9jbzEgPSB7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICBuYW1lOiBcIlN1cGVyTWFyaW9cIixcclxuICAgICAgICAgICAgZ2VucmU6IFt7Z2VucmU6IFwiUExBVEZPUk1cIn1dLFxyXG4gICAgICAgICAgICB5ZWFyOiAxOTg1LFxyXG4gICAgICAgICAgICBjb25zb2xlOiB7Y29uc29sZTogXCJORVNcIn0sXHJcbiAgICAgICAgICAgIGNvdmVyOiBpbWFnZUdpb2NvMVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI3OyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgIT0gMTcpIHtcclxuICAgICAgICAgICAgICAgIGdhbWVMaXN0LnB1c2goZ2lvY28xKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZ2FtZUxpc3QucHVzaChnaW9jbzEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dHYW1lcyhpOiBudW1iZXIpIHtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJWaWRlb2dhbWVDb250ZW50XCIpO1xyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbGV0IHN0YXJ0ID0gKGkgLSAxKSAqIGdhbWVWaWV3O1xyXG4gICAgbGV0IHN0b3AgPSAoaSAqIGdhbWVWaWV3KSAtIDE7XHJcbiAgICBmb3IgKHN0YXJ0OyBzdGFydCA8PSBzdG9wOyBzdGFydCsrKSB7XHJcbiAgICAgICAgaWYgKHN0YXJ0ID49IGdhbWVMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29sLTQgdGV4dC1jZW50ZXJcIik7XHJcbiAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpXCIpO1xyXG4gICAgICAgIGNvbC5vbm1vdXNlb3ZlciA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb2wub25tb3VzZW91dCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29sLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNyZWF0ZUdhbWVWaXN1YWxpemF0aW9uKGdhbWVMaXN0W3N0YXJ0XSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGdhbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgICAgICBnYW1lVGl0bGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcIm15LTRcIilcclxuICAgICAgICBsZXQgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGltYWdlLnNyYyA9IGdhbWVMaXN0W3N0YXJ0XS5jb3Zlci5saW5rO1xyXG4gICAgICAgIGltYWdlLndpZHRoID0gMjAwO1xyXG4gICAgICAgIGdhbWVUaXRsZS5pbm5lckhUTUwgPSBnYW1lTGlzdFtzdGFydF0ubmFtZTtcclxuXHJcbiAgICAgICAgY29sLmFwcGVuZChnYW1lVGl0bGUsIGltYWdlKTtcclxuICAgICAgICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodHlwZSA9PSBcIlVTRVJcIikge1xyXG4gICAgICAgICAgICBhZGRCdXR0b24uaW5uZXJIVE1MID0gXCJBZ2dpdW5naSBhbGxhIHR1YSBMaXN0YSFcIlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYWRkQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGZldGNoKFwiL3VzZXIvZ2FtZS9cIitnYW1lTGlzdFtzdGFydF0uaWQpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpPT4ocmVzcG9uc2UuanNvbigpKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29sLmFwcGVuZChhZGRCdXR0b24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb250ZW50LmFwcGVuZChjb2wpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlR2FtZVBhZ2luYXRpb24oKSB7XHJcbiAgICBsZXQgc2l6ZTogbnVtYmVyID0gZ2FtZUxpc3QubGVuZ3RoXHJcbiAgICBsZXQgdGFiczogbnVtYmVyID0gTWF0aC5jZWlsKHNpemUgLyBnYW1lVmlldyk7XHJcbiAgICBsZXQgcGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VzVlwiKTtcclxuICAgIHBhZ2VzLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0YWJzOyBpKyspIHtcclxuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgaWYgKGkgPT0gMSkge1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbSBhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiLCBcInBhZ2VcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWl0ZW1cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtbGlua1wiKTtcclxuICAgICAgICBidG4ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGFsbExpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlc1ZcIikuY2hpbGRyZW47XHJcbiAgICAgICAgICAgIGZvciAobGV0IG9uZUxpIG9mIGFsbExpKSB7XHJcbiAgICAgICAgICAgICAgICBvbmVMaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbVwiKTtcclxuICAgICAgICAgICAgICAgIG9uZUxpLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbSBhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiLCBcInBhZ2VcIik7XHJcbiAgICAgICAgICAgIHNob3dHYW1lcyhpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGJ0bi5pbm5lckhUTUwgPSBcIlwiICsgKGkpO1xyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgICAgICAgcGFnZXMuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdhbWVQYWdlOyIsImltcG9ydCB2aWRlb2dhbWUgZnJvbSBcIi4uL2ludGVyZmFjZXMvdmlkZW9nYW1lXCI7XHJcbmltcG9ydCB2aXN1YWxpenphVmlkZW9naW9jbyBmcm9tIFwiLi92aXN1YWxpenphVmlkZW9naW9jby5odG1sXCI7XHJcbmltcG9ydCBjcmVhdGVHYW1lUGFnZSBmcm9tIFwiLi92aWRlb2dpb2NoaVwiO1xyXG5pbXBvcnQgdmlkZW9naW9jaGkgZnJvbSBcIi4vdmlkZW9naW9jaGkuaHRtbFwiXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdhbWVWaXN1YWxpemF0aW9uKGdhbWU6dmlkZW9nYW1lKXtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUw9dmlzdWFsaXp6YVZpZGVvZ2lvY287XHJcbiAgICBzZXRiYWNrKCk7XHJcbiAgICBzZXRQYWdlKGdhbWUpXHJcbiAgICBcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNldGJhY2soKXtcclxuICAgIGxldCBiYWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrLWdhbWVzXCIpXHJcbiAgICBiYWNrLm9uY2xpY2s9KCk9PntcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MPXZpZGVvZ2lvY2hpXHJcbiAgICAgICAgY3JlYXRlR2FtZVBhZ2UoKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0UGFnZShnYW1lOnZpZGVvZ2FtZSl7XHJcbiAgICBsZXQgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZVRpdGxlXCIpO1xyXG4gICAgbGV0IHRpdGxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIHRpdGxlLmlubmVySFRNTD1nYW1lLm5hbWU7XHJcbiAgICBoZWFkLmFwcGVuZCh0aXRsZSk7XHJcbiAgICBoZWFkLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJ0ZXh0LWNlbnRlciBtYi01XCIpXHJcbiAgICBsZXQgdmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZUltYWdlXCIpO1xyXG4gICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBpbWcuc3JjPWdhbWUuY292ZXIubGluaztcclxuICAgIGltZy53aWR0aD00MDA7XHJcbiAgICB2aWV3LmFwcGVuZChpbWcpO1xyXG4gICAgbGV0IGluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVJbmZvXCIpO1xyXG4gICAgbGV0IGdlbmVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKVxyXG4gICAgZ2VuZXJlLmlubmVySFRNTD0gXCIgR0VORVJFL0k6IFwiO1xyXG4gICAgZm9yKGxldCBpPTA7IGk8Z2FtZS5nZW5yZS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgZ2VuZXJlLmlubmVySFRNTCArPSBnYW1lLmdlbnJlW2ldLmdlbnJlICtcIiBcIjtcclxuICAgIH0gXHJcbiAgICBsZXQgY29uc29sZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBjb25zb2xlLmlubmVySFRNTD0gXCIgQ09OU09MRTogXCIrZ2FtZS5jb25zb2xlLmNvbnNvbGU7XHJcbiAgICBsZXQgeWVhcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICB5ZWFyLmlubmVySFRNTD1cIiBBTk5POiBcIitnYW1lLnllYXJcclxuICAgIGluZm8uYXBwZW5kKGdlbmVyZSxjb25zb2xlLHllYXIpO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlR2FtZVZpc3VhbGl6YXRpb24iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVIb21lIGZyb20gXCIuL2hvbWUvaG9tZVwiO1xyXG5pbXBvcnQgY3JlYXRlTmF2IGZyb20gXCIuL25hdmJhci9uYXZiYXJcIjtcclxuaW1wb3J0IGNyZWF0ZUZvdCBmcm9tIFwiLi9mb290ZXIvZm9vdGVyXCI7XHJcblxyXG5cclxuY3JlYXRlTmF2KCk7XHJcbmNyZWF0ZUhvbWUoKTtcclxuY3JlYXRlRm90KCk7XHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
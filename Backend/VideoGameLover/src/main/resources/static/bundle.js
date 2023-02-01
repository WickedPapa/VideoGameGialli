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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n<div style=\"display: flex;\">\r\n\r\n    <span style=\"margin-right: 40px\">\r\n        <button class=\"btn btn-primary\" id=\"selectAll\">Visualizza tutti</button>\r\n            </span> <!--funzione che prende tutti gli annunci e li schiaffa nel contenuto annunci-->\r\n                <span style=\"margin-right: 40px\" class=\"dropdown\">\r\n                    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                    Visualizza per Genere\r\n                    </button>\r\n                    <ul id=\"genres\" class=\"dropdown-menu\">\r\n                        <li id=\"PLATFORM\"><button class=\"dropdown-item\" type=\"button\">PLATFORM</button></li>\r\n                    </ul>\r\n                </span>\r\n            <span style=\"margin-right: 40px\" class=\"dropdown\">\r\n                <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                Visualizza per Anno\r\n                </button>\r\n                <ul id=\"years\" class=\"dropdown-menu\">\r\n                <li id=\"1985\"><button class=\"dropdown-item\" type=\"button\">1985</button></li>\r\n                </ul>\r\n            </span>\r\n    <div style=\"vertical-align: middle;\" class=\"col-md-3 mx-auto\">\r\n        <div class=\"input-group\">\r\n            <input class=\"form-control border-end-1 border rounded-pill\" type=\"search\" placeholder=\"cerca\" style=\"margin-right:20px\" id=\"searchTitle\">\r\n            <span class=\"input-group-append\">\r\n            <button id=\"searchButton\" class=\"btn btn-outline-secondary bg-white border-bottom-1 border rounded-pill ms-n5\" type=\"button\">\r\n                    trova\r\n            <i class=\"fa fa-search\"></i>\r\n            </button>\r\n            </span>\r\n        </div>\r\n    </div>\r\n\r\n      <span >\r\n        <button id=\"addInsertion2\" style=\"color:white\" class=\"btn btn-danger\">\r\n            <img src=\"./img/plus.png\" alt=\"plus\" style=\"width:25px\">\r\n            Inserisci Annuncio\r\n        </button>\r\n      </span>      \r\n             \r\n\r\n</div>\r\n\r\n<div id=\"remains\">\r\n    <div  id=\"insertionContent\" class=\"row\">\r\n\r\n    </div>\r\n    <ul class=\"list-group\" >\r\n        \r\n    </ul>    \r\n</div>\r\n\r\n<div>\r\n    <ul id=\"pages\" class=\"pagination pagination-sm my-2\">\r\n        \r\n    </ul>\r\n</div>\r\n\r\n\r\n\r\n");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div id=\"bgaround\" class=\"text-center my-5\">\r\n    <img src=\"./img/videogamelover.png\" alt=\"not found\" class=\"headerImg mx-auto\" style=\"width: 50%; \" id=\"headerImg\">\r\n</div>\r\n\r\n<style>\r\n\r\n  .widgetIntro {\r\n    display: inline-block;\r\n  }\r\n\r\n  .widgetIntro-div{\r\n    text-align: left;\r\n    float: left;\r\n  }\r\n  \r\n  #annCard {\r\n\r\n    width: 40%;\r\n    height: 500px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    align-self: center;\r\n  }\r\n\r\n  #imgCard {\r\n    height: 60%;\r\n    width:fit-content;\r\n    align-self: center;\r\n  }\r\n\r\n\r\n  .imgS {\r\n    width: 54px;\r\n    height: 42px;\r\n  }\r\n\r\n  body {\r\n    text-align: center;\r\n    font-weight: bold;\r\n    \r\n  }\r\n\r\n  .widgetPic {\r\n    width: auto;\r\n    height: 100%;\r\n  }\r\n\r\n  .picRight {\r\n    margin-right: 0px;\r\n  }\r\n\r\n  .picleft {\r\n    margin-left: 0px;\r\n  }\r\n\r\n  .sec {\r\n    margin: auto;\r\n    width: 100%;\r\n    background-color: white;\r\n    padding: auto;\r\n  }\r\n\r\n  .p {\r\n    padding: 0px;\r\n  }\r\n \r\n</style>\r\n\r\n<section class=\"p sec border border-success mb-2 border-opacity-50 rounded row aling-item-start\">\r\n  <div class=\"p col-4\">\r\n    <picture>\r\n      <img class=\"widgetPic picLeft rounded-start\" src=\"./img/gamesearch.jpg\" style=\"width:100%\" alt=\"\">\r\n    </picture>\r\n  </div>\r\n  <div class=\"border-start border-3 border-primary col-8 text-start widgetText\">\r\n    <h1>\r\n      Il portale dei veri gamers.\r\n    </h1>\r\n    <h2>\r\n      Sei alla ricerca di un gioco, vecchio o nuovo che sia, ma non riesci a trovarlo? Noi abbiamo la soluzione per te...\r\n      Cerca tra centinaia di annunci il titolo che non trovavi più, mettiti in contatto con l'utente che lo sta vendendo, \r\n      e fai l'affare del secolo...\r\n    </h2>\r\n  </div>\r\n</section>\r\n\r\n<div class=\"container text-center\" style=\"margin-top: 10%; margin-bottom: 10%;\">\r\n  <div class=\"row\" style=\"margin-left:10%;margin-right:10%;\">\r\n    <div class=\"col\">\r\n      <div class=\"card text-bg-danger\" style=\"width: 18rem;height: 100%;\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Cerca</h5>\r\n          <p class=\"card-text\">Cerca il tuo gioco prefereito tra centinaia di annunci</p>\r\n          <hr>\r\n          <div class=\"input-group mb-3 form-control border rounded\" style=\"margin-top: 10px;\">\r\n            <input type=\"text\" class=\"form-control border-0\" id=\"searchTitle\" placeholder=\"Cerca\" aria-label=\"search\" aria-describedby=\"basic-addon2\">\r\n            <a id=\"searchButtonTitle\" href=\"#\"><img class=\"ms-1 btn imgS\" src=\"./img/search.png\" alt=\"\"></a>\r\n          </div> \r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\">\r\n      <div class=\"card text-bg-primary\" style=\"width: 18rem;height: 100%;\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Esplora</h5>\r\n          <p class=\"card-text\">Esplora miglialia di giochi tra gli annunci presenti</p>\r\n          <hr>\r\n          <a href=\"#\" id=\"insertionsCard\" class=\"btn btn-info\">Annunci</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\">\r\n      <div class=\"card text-bg-success\" style=\"width: 18rem;height: 100%;\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Scambia</h5>\r\n          <p class=\"card-text\">Hai un gioco di cui non te ne fai più nulla per le miliardi di volte che lo hai finito?\r\n            inserisci qui il tuo annuncio!\r\n          </p>\r\n          <hr>\r\n          <a href=\"#\" id=\"insertCard\" class=\"btn btn-light\">Inserisci Annuncio</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<section class=\"row aling-item-start\">\r\n  <div class=\"col-8 text-start widgetText\">\r\n    <h1>\r\n      Il portale dei veri gamers.\r\n    </h1>\r\n    <h2>\r\n      Sei alla ricerca di un gioco, vecchio o nuovo che sia, ma non riesci a trovarlo? Noi abbiamo la soluzione per te...\r\n      Cerca tra centinaia di annunci il titolo che non trovavi più, mettiti in contatto con l'utente che lo sta vendendo, \r\n      e fai l'affare del secolo...\r\n    </h2>\r\n  </div>\r\n  <div class=\"col-4\">\r\n    <picture class=\"widgetPic\">\r\n      <img src=\"./img/gametrade.png\" style=\"width:100%\" alt=\"\">\r\n    </picture>\r\n  </div>\r\n</section>\r\n\r\n<h1>Ultimi annunci:</h1>\r\n<h2>Controlla qui gli ultimi annunci</h2>\r\n<div id=\"carouselExampleControls\" class=\"carousel slide\" data-bs-ride=\"carousel\">\r\n    <div id=\"innerCarouselHome\" class=\"carousel-inner\">\r\n       \r\n    </div>\r\n    <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#carouselExampleControls\" data-bs-slide=\"prev\">\r\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"visually-hidden\">Previous</span>\r\n    </button>\r\n    <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#carouselExampleControls\" data-bs-slide=\"next\">\r\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"visually-hidden\">Next</span>\r\n    </button>\r\n  </div>\r\n\r\n\r\n<h1>Chi siamo?</h1>\r\n<h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea adipisci architecto libero alias? Numquam atque beatae quis asperiores necessitatibus est quod voluptate eveniet excepturi molestias fugiat nostrum nihil, eligendi vero.</h2>");

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

/***/ "./src/videogiochi/creaVideogioco.html":
/*!*********************************************!*\
  !*** ./src/videogiochi/creaVideogioco.html ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div id=\"createVGContainer\" class=\"container my-5 back-semi-transparent\" style=\"border-radius: 10px;\r\n    border-top: 5px solid rgb(171, 209, 57);\r\n    border-bottom: 5px solid rgb(171, 209, 57);\r\n    border-right: 5px solid rgb(171, 209, 57);\r\n    border-left: 5px solid rgb(171, 209, 57);\r\n    \">\r\n    <div class=\"row align-items-start\">\r\n        <div class=\"col-4\" style=\"\r\n        border-right: 3px solid rgb(171, 209, 57); \r\n        border-bottom: 3px solid rgb(171, 209, 57);\r\n        border-bottom-right-radius: 10px;\r\n        \">\r\n\r\n            <div class=\"mb-3\">\r\n                <div class=\"my-3\">\r\n                    <h2 class=\"text-center\">Crea console e generi</h2>\r\n                </div>\r\n                <label for=\"newGenre\" class=\"form-label\"><b>Nuovo Genere</b></label>\r\n                <input type=\"text\" class=\"form-control\" id=\"newGenre\" placeholder=\"Inserisci nuovo genere\">\r\n            </div>\r\n            <button id=\"newGenreBtn\" class=\"btn mb-5 button-hover\"><b>Crea</b></button>\r\n            <div class=\"mb-3\">\r\n                <label for=\"newConsole\" class=\"form-label\"><b>Nuova Console</b></label>\r\n                <input type=\"text\" class=\"form-control\" id=\"newConsole\" placeholder=\"Inserisci nuova console\">\r\n            </div>\r\n            <button id=\"newConsoleBtn\" class=\"btn mb-5 button-hover\"><b>Crea</b></button>\r\n\r\n        </div>\r\n        <div class=\"col-8\">\r\n            <div class=\"my-3\">\r\n                <h2 class=\"text-center\">Inserisci Dati Videogioco</h2>\r\n            </div>\r\n            <div class=\"mb-5\">\r\n                <label for=\"name\" class=\"form-label\"><b>Titolo</b></label>\r\n                <input type=\"text\" class=\"form-control\" id=\"name\">\r\n            </div>\r\n            <div class=\"mb-5\">\r\n                <label for=\"year\" class=\"form-label\"><b>Anno di Uscita</b></label>\r\n                <input type=\"number\" class=\"form-control\" id=\"year\" min=\"1970\" maxlength=\"2023\">\r\n            </div>\r\n            <div class=\"mb-5\">\r\n                <label class=\"form-label\" for=\"cover\"><b>Link immagine</b></label>\r\n                <input type=\"text\" class=\"form-control\" id=\"cover\">\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"row align-items-start\">\r\n        <div class=\"col-4\">\r\n            <br>\r\n            <h4 class=\"text-end\"><b>Seleziona categorie:</b></h4>\r\n        </div>\r\n        <div class=\"col-8\">\r\n            <br>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\">\r\n                <label class=\"form-check-label\" for=\"inlineCheckbox1\"><b>ACTION</b></label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox2\" value=\"option2\">\r\n                <label class=\"form-check-label\" for=\"inlineCheckbox2\"><b>GDR</b></label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\">\r\n                <label class=\"form-check-label\" for=\"inlineCheckbox1\"><b>PLATFORM</b></label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox2\" value=\"option2\">\r\n                <label class=\"form-check-label\" for=\"inlineCheckbox2\"><b>STEALTH</b></label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\">\r\n                <label class=\"form-check-label\" for=\"inlineCheckbox1\"><b>ACTION</b></label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox2\" value=\"option2\">\r\n                <label class=\"form-check-label\" for=\"inlineCheckbox2\"><b>GDR</b></label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\">\r\n                <label class=\"form-check-label\" for=\"inlineCheckbox1\"><b>PLATFORM</b></label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox2\" value=\"option2\">\r\n                <label class=\"form-check-label\" for=\"inlineCheckbox2\"><b>STEALTH</b></label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\">\r\n                <label class=\"form-check-label\" for=\"inlineCheckbox1\"><b>ACTION</b></label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox2\" value=\"option2\">\r\n                <label class=\"form-check-label\" for=\"inlineCheckbox2\"><b>GDR</b></label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\">\r\n                <label class=\"form-check-label\" for=\"inlineCheckbox1\"><b>PLATFORM</b></label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox2\" value=\"option2\">\r\n                <label class=\"form-check-label\" for=\"inlineCheckbox2\"><b>STEALTH</b></label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\">\r\n                <label class=\"form-check-label\" for=\"inlineCheckbox1\"><b>ACTION</b></label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox2\" value=\"option2\">\r\n                <label class=\"form-check-label\" for=\"inlineCheckbox2\"><b>GDR</b></label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\">\r\n                <label class=\"form-check-label\" for=\"inlineCheckbox1\"><b>PLATFORM</b></label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox2\" value=\"option2\">\r\n                <label class=\"form-check-label\" for=\"inlineCheckbox2\"><b>STEALTH</b></label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\">\r\n                <label class=\"form-check-label\" for=\"inlineCheckbox1\"><b>ACTION</b></label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox2\" value=\"option2\">\r\n                <label class=\"form-check-label\" for=\"inlineCheckbox2\"><b>GDR</b></label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\">\r\n                <label class=\"form-check-label\" for=\"inlineCheckbox1\"><b>PLATFORM</b></label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox2\" value=\"option2\">\r\n                <label class=\"form-check-label\" for=\"inlineCheckbox2\"><b>STEALTH</b></label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\">\r\n                <label class=\"form-check-label\" for=\"inlineCheckbox1\"><b>ACTION</b></label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox2\" value=\"option2\">\r\n                <label class=\"form-check-label\" for=\"inlineCheckbox2\"><b>GDR</b></label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\">\r\n                <label class=\"form-check-label\" for=\"inlineCheckbox1\"><b>PLATFORM</b></label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox2\" value=\"option2\">\r\n                <label class=\"form-check-label\" for=\"inlineCheckbox2\"><b>STEALTH</b></label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\">\r\n                <label class=\"form-check-label\" for=\"inlineCheckbox1\"><b>ACTION</b></label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox2\" value=\"option2\">\r\n                <label class=\"form-check-label\" for=\"inlineCheckbox2\"><b>GDR</b></label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\">\r\n                <label class=\"form-check-label\" for=\"inlineCheckbox1\"><b>PLATFORM</b></label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox2\" value=\"option2\">\r\n                <label class=\"form-check-label\" for=\"inlineCheckbox2\"><b>STEALTH</b></label>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row align-items-start\">\r\n        <div class=\"col-4\">\r\n            <br><br>\r\n            <h4 class=\"text-end\"><b>Seleziona console:</b></h4>\r\n        </div>\r\n        <div class=\"col-8\">\r\n            <br><br>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\"\r\n                    checked>\r\n                <label class=\"form-check-label\" for=\"exampleRadios1\">\r\n                    <b>PS1</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"option2\">\r\n                <label class=\"form-check-label\" for=\"exampleRadios2\">\r\n                    <b>PS2</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios3\" value=\"option3\">\r\n                <label class=\"form-check-label\" for=\"exampleRadios3\">\r\n                    <b>PS3</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\"\r\n                    checked>\r\n                <label class=\"form-check-label\" for=\"exampleRadios1\">\r\n                    <b>PS1</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"option2\">\r\n                <label class=\"form-check-label\" for=\"exampleRadios2\">\r\n                    <b>PS2</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios3\" value=\"option3\">\r\n                <label class=\"form-check-label\" for=\"exampleRadios3\">\r\n                    <b>PS3</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\"\r\n                    checked>\r\n                <label class=\"form-check-label\" for=\"exampleRadios1\">\r\n                    <b>PS1</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"option2\">\r\n                <label class=\"form-check-label\" for=\"exampleRadios2\">\r\n                    <b>PS2</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios3\" value=\"option3\">\r\n                <label class=\"form-check-label\" for=\"exampleRadios3\">\r\n                    <b>PS3</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\"\r\n                    checked>\r\n                <label class=\"form-check-label\" for=\"exampleRadios1\">\r\n                    <b>PS4</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"option2\">\r\n                <label class=\"form-check-label\" for=\"exampleRadios2\">\r\n                    <b>PS5</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios3\" value=\"option3\">\r\n                <label class=\"form-check-label\" for=\"exampleRadios3\">\r\n                    <b>GAMEBOYCOLOR</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios3\" value=\"option3\">\r\n                <label class=\"form-check-label\" for=\"exampleRadios3\">\r\n                    <b>SUPERNINTENDO</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios3\" value=\"option3\">\r\n                <label class=\"form-check-label\" for=\"exampleRadios3\">\r\n                    <b>NES</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\"\r\n                    checked>\r\n                <label class=\"form-check-label\" for=\"exampleRadios1\">\r\n                    <b>PS1</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"option2\">\r\n                <label class=\"form-check-label\" for=\"exampleRadios2\">\r\n                    <b>PS2</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios3\" value=\"option3\">\r\n                <label class=\"form-check-label\" for=\"exampleRadios3\">\r\n                    <b>PS3</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\"\r\n                    checked>\r\n                <label class=\"form-check-label\" for=\"exampleRadios1\">\r\n                    <b>PS1</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"option2\">\r\n                <label class=\"form-check-label\" for=\"exampleRadios2\">\r\n                    <b>PS2</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios3\" value=\"option3\">\r\n                <label class=\"form-check-label\" for=\"exampleRadios3\">\r\n                    <b>PS3</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\"\r\n                    checked>\r\n                <label class=\"form-check-label\" for=\"exampleRadios1\">\r\n                    <b>PS1</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"option2\">\r\n                <label class=\"form-check-label\" for=\"exampleRadios2\">\r\n                    <b>PS2</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios3\" value=\"option3\">\r\n                <label class=\"form-check-label\" for=\"exampleRadios3\">\r\n                    <b>PS3</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\"\r\n                    checked>\r\n                <label class=\"form-check-label\" for=\"exampleRadios1\">\r\n                    <b>PS4</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"option2\">\r\n                <label class=\"form-check-label\" for=\"exampleRadios2\">\r\n                    <b>PS5</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios3\" value=\"option3\">\r\n                <label class=\"form-check-label\" for=\"exampleRadios3\">\r\n                    <b>GAMEBOYCOLOR</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios3\" value=\"option3\">\r\n                <label class=\"form-check-label\" for=\"exampleRadios3\">\r\n                    <b>SUPERNINTENDO</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios3\" value=\"option3\">\r\n                <label class=\"form-check-label\" for=\"exampleRadios3\">\r\n                    <b>NES</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\"\r\n                    checked>\r\n                <label class=\"form-check-label\" for=\"exampleRadios1\">\r\n                    <b>PS1</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"option2\">\r\n                <label class=\"form-check-label\" for=\"exampleRadios2\">\r\n                    <b>PS2</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios3\" value=\"option3\">\r\n                <label class=\"form-check-label\" for=\"exampleRadios3\">\r\n                    <b>PS3</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\"\r\n                    checked>\r\n                <label class=\"form-check-label\" for=\"exampleRadios1\">\r\n                    <b>PS1</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"option2\">\r\n                <label class=\"form-check-label\" for=\"exampleRadios2\">\r\n                    <b>PS2</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios3\" value=\"option3\">\r\n                <label class=\"form-check-label\" for=\"exampleRadios3\">\r\n                    <b>PS3</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\"\r\n                    checked>\r\n                <label class=\"form-check-label\" for=\"exampleRadios1\">\r\n                    <b>PS1</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"option2\">\r\n                <label class=\"form-check-label\" for=\"exampleRadios2\">\r\n                    <b>PS2</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios3\" value=\"option3\">\r\n                <label class=\"form-check-label\" for=\"exampleRadios3\">\r\n                    <b>PS3</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\"\r\n                    checked>\r\n                <label class=\"form-check-label\" for=\"exampleRadios1\">\r\n                    <b>PS4</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"option2\">\r\n                <label class=\"form-check-label\" for=\"exampleRadios2\">\r\n                    <b>PS5</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios3\" value=\"option3\">\r\n                <label class=\"form-check-label\" for=\"exampleRadios3\">\r\n                    <b>GAMEBOYCOLOR</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios3\" value=\"option3\">\r\n                <label class=\"form-check-label\" for=\"exampleRadios3\">\r\n                    <b>SUPERNINTENDO</b>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios3\" value=\"option3\">\r\n                <label class=\"form-check-label\" for=\"exampleRadios3\">\r\n                    <b>NES</b>\r\n                </label>\r\n            </div>\r\n            <div>\r\n                <button id=\"newVideoGameBtn\" class=\"btn my-4 button-hover\"><b>Aggiungi</b></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div style=\"display: flex;\">\r\n\r\n    <span style=\"margin-right: 40px\">\r\n        <button class=\"btn btn-primary\" id=\"selectAll\">Visualizza tutti i Videogame</button>\r\n            </span> <!--funzione che prende tutti gli annunci e li schiaffa nel contenuto annunci-->\r\n                <span style=\"margin-right: 40px\" class=\"dropdown\">\r\n                    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                    Visualizza per Genere\r\n                    </button>\r\n                    <ul id=\"genres\" class=\"dropdown-menu\">\r\n                        <li id=\"PLATFORM\"><button class=\"dropdown-item\" type=\"button\">PLATFORM</button></li>\r\n                    </ul>\r\n                </span>\r\n            <span style=\"margin-right: 40px\" class=\"dropdown\">\r\n                <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                Visualizza per Anno\r\n                </button>\r\n                <ul id=\"years\" class=\"dropdown-menu\">\r\n                <li id=\"1985\"><button class=\"dropdown-item\" type=\"button\">1985</button></li>\r\n                </ul>\r\n            </span>\r\n    <div style=\"vertical-align: middle;\" class=\"col-md-3 mx-auto\">\r\n        <div class=\"input-group\">\r\n            <input class=\"form-control border-end-1 border rounded-pill\" type=\"search\" placeholder=\"cerca\" style=\"margin-right:20px\" id=\"searchTitle\">\r\n            <span class=\"input-group-append\">\r\n            <button id=\"searchButton\" class=\"btn btn-outline-secondary bg-white border-bottom-1 border rounded-pill ms-n5\" type=\"button\">\r\n                    trova\r\n            <i class=\"fa fa-search\"></i>\r\n            </button>\r\n            </span>\r\n        </div>\r\n    </div>\r\n\r\n      <span >\r\n        <button  id=\"addVideogame\" style=\"color:white\" class=\"btn btn-warning\" hidden>\r\n            <img src=\"./img/plus.png\" alt=\"plus\" style=\"width:25px\">\r\n            Inserisci Videogame\r\n        </button>\r\n      </span>      \r\n             \r\n\r\n</div>\r\n\r\n<div>\r\n    <div  id=\"VideogameContent\" class=\"row\">\r\n\r\n    </div>\r\n</div>\r\n\r\n<div>\r\n    <ul id=\"pagesV\" class=\"pagination pagination-sm my-2\">\r\n        \r\n    </ul>\r\n</div>");

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
/* harmony import */ var _gestioneUtenti_gestioneUtenti_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../gestioneUtenti/gestioneUtenti.html */ "./src/gestioneUtenti/gestioneUtenti.html");
/* harmony import */ var _gestioneUtenti_gestioneUtenti__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../gestioneUtenti/gestioneUtenti */ "./src/gestioneUtenti/gestioneUtenti.ts");
/* harmony import */ var _annunci_gestioneannunci__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../annunci/gestioneannunci */ "./src/annunci/gestioneannunci.ts");
/* harmony import */ var _creaAnnuncio_creaAnnuncio_html__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../creaAnnuncio/creaAnnuncio.html */ "./src/creaAnnuncio/creaAnnuncio.html");
/* harmony import */ var _videogiochi_videogiochi_html__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../videogiochi/videogiochi.html */ "./src/videogiochi/videogiochi.html");
/* harmony import */ var _creaAnnuncio_creaAnnuncio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../creaAnnuncio/creaAnnuncio */ "./src/creaAnnuncio/creaAnnuncio.ts");
/* harmony import */ var _videogiochi_videogiochi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../videogiochi/videogiochi */ "./src/videogiochi/videogiochi.ts");














function createNav() {
    document.getElementById("header").innerHTML = _navbar_html__WEBPACK_IMPORTED_MODULE_0__["default"];
    (0,_modal_modal__WEBPACK_IMPORTED_MODULE_1__["default"])();
    document.getElementById("logo").onclick = () => {
        document.getElementById("main").innerHTML = "";
        (0,_home_home__WEBPACK_IMPORTED_MODULE_5__["default"])();
    };
    document.getElementById("games").onclick = () => {
        document.getElementById("main").innerHTML = _videogiochi_videogiochi_html__WEBPACK_IMPORTED_MODULE_11__["default"];
        (0,_videogiochi_videogiochi__WEBPACK_IMPORTED_MODULE_13__["default"])();
    };
    document.getElementById("insertions").onclick = () => {
        document.getElementById("main").innerHTML = _annunci_annunci_html__WEBPACK_IMPORTED_MODULE_2__["default"];
        (0,_annunci_annunci__WEBPACK_IMPORTED_MODULE_4__["default"])();
    };
    document.getElementById("addInsertion").onclick = () => {
        document.getElementById("main").innerHTML = _creaAnnuncio_creaAnnuncio_html__WEBPACK_IMPORTED_MODULE_10__["default"];
        (0,_creaAnnuncio_creaAnnuncio__WEBPACK_IMPORTED_MODULE_12__["default"])();
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
    if (accountType == "ADMIN") {
        btn_gestUtenti.removeAttribute("hidden");
        btn_addInsertion.setAttribute("hidden", "true");
        btn_insManagement.removeAttribute("hidden");
        btn_login.setAttribute("hidden", "true");
        btn_signOutButton.removeAttribute("hidden");
    }
    else if (accountType == "USER") {
        btn_gestUtenti.setAttribute("hidden", "true");
        btn_addInsertion.removeAttribute("hidden");
        btn_insManagement.setAttribute("hidden", "true");
        btn_login.setAttribute("hidden", "true");
        btn_signOutButton.removeAttribute("hidden");
    }
    else {
        btn_gestUtenti.setAttribute("hidden", "true");
        btn_addInsertion.setAttribute("hidden", "true");
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


/***/ }),

/***/ "./src/videogiochi/creaVideogiochi.ts":
/*!********************************************!*\
  !*** ./src/videogiochi/creaVideogiochi.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createVideoGame": () => (/* binding */ createVideoGame),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _creaVideogioco_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creaVideogioco.html */ "./src/videogiochi/creaVideogioco.html");

function createVideoGame() {
    document.getElementById("main").innerHTML = _creaVideogioco_html__WEBPACK_IMPORTED_MODULE_0__["default"];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createVideoGame);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUMsU0FBUyxHQUFDLElBQUksQ0FBQyxJQUFJO0lBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsQ0FBQztBQUVyQyxDQUFDO0FBRUQsaUVBQWUsdUJBQXVCOzs7Ozs7O1VDL0N0QztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOcUM7QUFDRztBQUNBO0FBR3hDLDBEQUFTLEVBQUUsQ0FBQztBQUNaLHNEQUFVLEVBQUUsQ0FBQztBQUNiLDBEQUFTLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2FubnVuY2kvYW5udW5jaS5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2FubnVuY2kvYW5udW5jaW8uaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9hbm51bmNpL2dlc3Rpb25lYW5udW5jaS5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2NyZWFBbm51bmNpby9jcmVhQW5udW5jaW8uaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9mb290ZXIvZm9vdGVyLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvZ2VzdGlvbmVVdGVudGkvZ2VzdGlvbmVVdGVudGkuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9ob21lL2hvbWUuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9sb2dpbi9sb2dpbi5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2xvZ2luL2xvZ2luRm9vdGVyLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvbG9nb3V0L2xvZ291dC5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL21vZGFsL21vZGFsLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvbmF2YmFyL25hdmJhci5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL3Byb2ZpbG9VdGVudGUvcHJvZmlsZS5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL3Byb2ZpbG9VdGVudGUvc2hvd1Byb2ZpbGUuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9yZWdpc3RyYXppb25lL3JlZ2lzdHJhemlvbmUuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9yZWdpc3RyYXppb25lL3JlZ2lzdHJhemlvbmVGb290ZXIuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy92aWRlb2dpb2NoaS9jcmVhVmlkZW9naW9jby5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL3ZpZGVvZ2lvY2hpL3ZpZGVvZ2lvY2hpLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvdmlkZW9naW9jaGkvdmlzdWFsaXp6YVZpZGVvZ2lvY28uaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9hbm51bmNpL2FubnVuY2kudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvYW5udW5jaS9hbm51bmNpby50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9hbm51bmNpL2dlc3Rpb25lYW5udW5jaS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9jcmVhQW5udW5jaW8vY3JlYUFubnVuY2lvLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2Zvb3Rlci9mb290ZXIudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvZ2VzdGlvbmVVdGVudGkvZ2VzdGlvbmVVdGVudGkudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvaG9tZS9ob21lLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL21vZGFsL21vZGFsLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL25hdmJhci9uYXZiYXIudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvcHJvZmlsb1V0ZW50ZS9zaG93UHJvZmlsZS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy92aWRlb2dpb2NoaS9jcmVhVmlkZW9naW9jaGkudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvdmlkZW9naW9jaGkvdmlkZW9naW9jaGkudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvdmlkZW9naW9jaGkvdmlzdWFsaXp6YVZpZGVvZ2lvY28udHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIlxcclxcbjxkaXYgc3R5bGU9XFxcImRpc3BsYXk6IGZsZXg7XFxcIj5cXHJcXG5cXHJcXG4gICAgPHNwYW4gc3R5bGU9XFxcIm1hcmdpbi1yaWdodDogNDBweFxcXCI+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIGlkPVxcXCJzZWxlY3RBbGxcXFwiPlZpc3VhbGl6emEgdHV0dGk8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L3NwYW4+IDwhLS1mdW56aW9uZSBjaGUgcHJlbmRlIHR1dHRpIGdsaSBhbm51bmNpIGUgbGkgc2NoaWFmZmEgbmVsIGNvbnRlbnV0byBhbm51bmNpLS0+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IDQwcHhcXFwiIGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeSBkcm9wZG93bi10b2dnbGVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICBWaXN1YWxpenphIHBlciBHZW5lcmVcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVxcXCJnZW5yZXNcXFwiIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XFxcIlBMQVRGT1JNXFxcIj48YnV0dG9uIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPlBMQVRGT1JNPC9idXR0b24+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiA0MHB4XFxcIiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeSBkcm9wZG93bi10b2dnbGVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIFZpc3VhbGl6emEgcGVyIEFubm9cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDx1bCBpZD1cXFwieWVhcnNcXFwiIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIGlkPVxcXCIxOTg1XFxcIj48YnV0dG9uIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPjE5ODU8L2J1dHRvbj48L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgPGRpdiBzdHlsZT1cXFwidmVydGljYWwtYWxpZ246IG1pZGRsZTtcXFwiIGNsYXNzPVxcXCJjb2wtbWQtMyBteC1hdXRvXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbCBib3JkZXItZW5kLTEgYm9yZGVyIHJvdW5kZWQtcGlsbFxcXCIgdHlwZT1cXFwic2VhcmNoXFxcIiBwbGFjZWhvbGRlcj1cXFwiY2VyY2FcXFwiIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6MjBweFxcXCIgaWQ9XFxcInNlYXJjaFRpdGxlXFxcIj5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYXBwZW5kXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJzZWFyY2hCdXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJnLXdoaXRlIGJvcmRlci1ib3R0b20tMSBib3JkZXIgcm91bmRlZC1waWxsIG1zLW41XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgdHJvdmFcXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtc2VhcmNoXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgIDxzcGFuID5cXHJcXG4gICAgICAgIDxidXR0b24gaWQ9XFxcImFkZEluc2VydGlvbjJcXFwiIHN0eWxlPVxcXCJjb2xvcjp3aGl0ZVxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi9pbWcvcGx1cy5wbmdcXFwiIGFsdD1cXFwicGx1c1xcXCIgc3R5bGU9XFxcIndpZHRoOjI1cHhcXFwiPlxcclxcbiAgICAgICAgICAgIEluc2VyaXNjaSBBbm51bmNpb1xcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgPC9zcGFuPiAgICAgIFxcclxcbiAgICAgICAgICAgICBcXHJcXG5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGlkPVxcXCJyZW1haW5zXFxcIj5cXHJcXG4gICAgPGRpdiAgaWQ9XFxcImluc2VydGlvbkNvbnRlbnRcXFwiIGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcblxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPHVsIGNsYXNzPVxcXCJsaXN0LWdyb3VwXFxcIiA+XFxyXFxuICAgICAgICBcXHJcXG4gICAgPC91bD4gICAgXFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdj5cXHJcXG4gICAgPHVsIGlkPVxcXCJwYWdlc1xcXCIgY2xhc3M9XFxcInBhZ2luYXRpb24gcGFnaW5hdGlvbi1zbSBteS0yXFxcIj5cXHJcXG4gICAgICAgIFxcclxcbiAgICA8L3VsPlxcclxcbjwvZGl2PlxcclxcblxcclxcblxcclxcblxcclxcblwiOyIsImV4cG9ydCBkZWZhdWx0IFwiICAgIDxkaXYgaWQ9XFxcImJhY2tcXFwiPlxcclxcbiAgICAgICAgPGltZyBpZD1cXFwiYmFja2dhbWVzXFxcIiBjbGFzcz1cXFwibXQtNCBidXR0b25ob3ZlciBtYi00XFxcIiB3aWR0aD0xMjAgc3JjPVxcXCIuL2ltZy9iYWNrLnBuZ1xcXCI+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgIDwhLS0gIC0tPlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcInJvd1xcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43KTtcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+XFxyXFxuICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgaWQ9XFxcImltYWdlU2xpZGVyXFxcIiBjbGFzcz1cXFwiY2Fyb3VzZWwgc2xpZGVcXFwiIGRhdGEtYnMtcmlkZT1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImluZGljYXRvclxcXCIgY2xhc3M9XFxcImNhcm91c2VsLWluZGljYXRvcnNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiaW5uZXJcXFwiIGNsYXNzPVxcXCJjYXJvdXNlbC1pbm5lclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYXJvdXNlbC1jb250cm9sLXByZXZcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10YXJnZXQ9XFxcIiNpbWFnZVNsaWRlclxcXCIgZGF0YS1icy1zbGlkZT1cXFwicHJldlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidmlzdWFsbHktaGlkZGVuXFxcIj5QcmVjZWRlbnRlPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2Fyb3VzZWwtY29udHJvbC1uZXh0XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdGFyZ2V0PVxcXCIjaW1hZ2VTbGlkZXJcXFwiIGRhdGEtYnMtc2xpZGU9XFxcIm5leHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+U3VjY2Vzc2l2YTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiZ2l2ZWRHYW1lXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgbWItM1xcXCIgc3R5bGU9XFxcIm1heC13aWR0aDogNTQwcHg7XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgZy0wXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiY2FyZC1pbWFnZVxcXCIgY2xhc3M9XFxcImNvbC1tZC00XFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC04XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImNhcmQtYm9keVxcXCIgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwiaW5zZXJ0aW9uLWRlc2NyaXB0aW9uXFxcIiBjbGFzcz1cXFwiZm9udC1zaXplOjIwcHggY29sb3I6d2hpdGUgY29sLW1kLTEyXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJteS01IHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgPGgzPjxzcGFuIGlkPVxcXCJpbnNlcnRpb24tY3JlYXRvclxcXCI+PC9zcGFuPiB2b3JyZWJiZSB1bm8gZGkgcXVlc3RpIGdpb2NoaSBpbiBjYW1iaW86PC9oMz5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJhY2NvcmRpb24gcm93XFxcIiBpZD1cXFwiYWNjb3JkaW9uRXhhbXBsZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImFjY29yZGlvbi1pdGVtIGNvbC1tZC00XFxcIj5cXHJcXG4gICAgICAgIDxoMiBjbGFzcz1cXFwiYWNjb3JkaW9uLWhlYWRlclxcXCIgaWQ9XFxcImhlYWRpbmdPbmVcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcImJ0bi1pdGVtLTFcXFwiIGNsYXNzPVxcXCJhY2NvcmRpb24tYnV0dG9uIGNvbGxhcHNlZFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiXFxyXFxuICAgICAgICAgICAgICAgIGRhdGEtYnMtdGFyZ2V0PVxcXCIjY29sbGFwc2VPbmVcXFwiIGFyaWEtZXhwYW5kZWQ9XFxcInRydWVcXFwiIGFyaWEtY29udHJvbHM9XFxcImNvbGxhcHNlT25lXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvaDI+XFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJjb2xsYXBzZU9uZVxcXCIgY2xhc3M9XFxcImFjY29yZGlvbi1jb2xsYXBzZSBjb2xsYXBzZVxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJoZWFkaW5nT25lXFxcIlxcclxcbiAgICAgICAgICAgIGRhdGEtYnMtcGFyZW50PVxcXCIjYWNjb3JkaW9uRXhhbXBsZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWNjb3JkaW9uLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJpbWctaXRlbS0xXFxcIiBjbGFzcz1cXFwiY2FyZCBteC1hdXRvXFxcIiBzdHlsZT1cXFwid2lkdGg6IDE4cmVtO1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImJvZHktaXRlbS0xXFxcIiBjbGFzcz1cXFwiY2FyZC1ib2R5IHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYWNjb3JkaW9uLWl0ZW0gY29sLW1kLTRcXFwiPlxcclxcbiAgICAgICAgPGgyIGNsYXNzPVxcXCJhY2NvcmRpb24taGVhZGVyXFxcIiBpZD1cXFwiaGVhZGluZ1R3b1xcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cXFwiYnRuLWl0ZW0tMlxcXCIgY2xhc3M9XFxcImFjY29yZGlvbi1idXR0b24gY29sbGFwc2VkXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJjb2xsYXBzZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgZGF0YS1icy10YXJnZXQ9XFxcIiNjb2xsYXBzZVR3b1xcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiIGFyaWEtY29udHJvbHM9XFxcImNvbGxhcHNlVHdvXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvaDI+XFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJjb2xsYXBzZVR3b1xcXCIgY2xhc3M9XFxcImFjY29yZGlvbi1jb2xsYXBzZSBjb2xsYXBzZVxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJoZWFkaW5nVHdvXFxcIlxcclxcbiAgICAgICAgICAgIGRhdGEtYnMtcGFyZW50PVxcXCIjYWNjb3JkaW9uRXhhbXBsZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWNjb3JkaW9uLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJpbWctaXRlbS0yXFxcIiBjbGFzcz1cXFwiY2FyZCBteC1hdXRvXFxcIiBzdHlsZT1cXFwid2lkdGg6IDE4cmVtO1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImJvZHktaXRlbS0yXFxcIiBjbGFzcz1cXFwiY2FyZC1ib2R5IHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYWNjb3JkaW9uLWl0ZW0gY29sLW1kLTRcXFwiPlxcclxcbiAgICAgICAgPGgyIGNsYXNzPVxcXCJhY2NvcmRpb24taGVhZGVyXFxcIiBpZD1cXFwiaGVhZGluZ1RocmVlXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJidG4taXRlbS0zXFxcIiBjbGFzcz1cXFwiYWNjb3JkaW9uLWJ1dHRvbiBjb2xsYXBzZWRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10b2dnbGU9XFxcImNvbGxhcHNlXFxcIlxcclxcbiAgICAgICAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cXFwiI2NvbGxhcHNlVGhyZWVcXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIiBhcmlhLWNvbnRyb2xzPVxcXCJjb2xsYXBzZVRocmVlXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvaDI+XFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJjb2xsYXBzZVRocmVlXFxcIiBjbGFzcz1cXFwiYWNjb3JkaW9uLWNvbGxhcHNlIGNvbGxhcHNlXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcImhlYWRpbmdUaHJlZVxcXCJcXHJcXG4gICAgICAgICAgICBkYXRhLWJzLXBhcmVudD1cXFwiI2FjY29yZGlvbkV4YW1wbGVcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFjY29yZGlvbi1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiaW1nLWl0ZW0tM1xcXCIgY2xhc3M9XFxcImNhcmQgbXgtYXV0b1xcXCIgc3R5bGU9XFxcIndpZHRoOiAxOHJlbTtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJib2R5LWl0ZW0tM1xcXCIgY2xhc3M9XFxcImNhcmQtYm9keSB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IHN0eWxlPVxcXCJkaXNwbGF5OiBmbGV4O1xcXCI+XFxyXFxuXFxyXFxuICAgICAgICA8c3BhbiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiA0MHB4XFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIGlkPVxcXCJzZWxlY3RBbGwyXFxcIj5WaXN1YWxpenphIHR1dHRpPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDwvc3Bhbj4gPCEtLWZ1bnppb25lIGNoZSBwcmVuZGUgdHV0dGkgZ2xpIGFubnVuY2kgZSBsaSBzY2hpYWZmYSBuZWwgY29udGVudXRvIGFubnVuY2ktLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IDQwcHhcXFwiIGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnkgZHJvcGRvd24tdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFZpc3VhbGl6emEgcGVyIEdlbmVyZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBpZD1cXFwiZ2VucmVzMlxcXCIgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XFxcIlBMQVRGT1JNXFxcIj48YnV0dG9uIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPlBMQVRGT1JNPC9idXR0b24+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiA0MHB4XFxcIiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnkgZHJvcGRvd24tdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgVmlzdWFsaXp6YSBwZXIgQW5ub1xcclxcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XFxcInllYXJzMlxcXCIgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVxcXCIxOTg1XFxcIj48YnV0dG9uIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPjE5ODU8L2J1dHRvbj48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgPGRpdiBzdHlsZT1cXFwidmVydGljYWwtYWxpZ246IG1pZGRsZTtcXFwiIGNsYXNzPVxcXCJjb2wtbWQtMyBteC1hdXRvXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGJvcmRlci1lbmQtMSBib3JkZXIgcm91bmRlZC1waWxsXFxcIiB0eXBlPVxcXCJzZWFyY2hcXFwiIHBsYWNlaG9sZGVyPVxcXCJjZXJjYVxcXCIgc3R5bGU9XFxcIm1hcmdpbi1yaWdodDoyMHB4XFxcIiBpZD1cXFwic2VhcmNoVGl0bGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYXBwZW5kXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cXFwic2VhcmNoQnV0dG9uMlxcXCIgY2xhc3M9XFxcImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgYmctd2hpdGUgYm9yZGVyLWJvdHRvbS0xIGJvcmRlciByb3VuZGVkLXBpbGwgbXMtbjVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJvdmFcXHJcXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXNlYXJjaFxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIFxcclxcbiAgICAgICAgICA8c3BhbiA+XFxyXFxuICAgICAgICAgICAgPCEtLSBBbGxlcnRhIE1hcnRlbGxhdGE6IHNlIHRvbGdvIGlsIGJvdHRvbmUgdG9sZ28gcHVyZSBsYSBsaXN0YSxcXHJcXG4gICAgICAgICAgICAgICAgcXVpbmRpIGwnaG8gbWVzc28gaGlkZGVuLS0+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBoaWRkZW4gaWQ9XFxcImFkZEluc2VydGlvblxcXCIgc3R5bGU9XFxcImNvbG9yOndoaXRlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi9pbWcvcGx1cy5wbmdcXFwiIGFsdD1cXFwicGx1c1xcXCIgc3R5bGU9XFxcIndpZHRoOjI1cHhcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBJbnNlcmlzY2kgQW5udW5jaW9cXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgPC9zcGFuPiAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgXFxyXFxuICAgIFxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGJyPlxcclxcbiAgICA8ZGl2IHN0eWxlPVxcXCJkaXNwbGF5OiBpbmxpbmUtZmxleDtcXFwiPlxcclxcblxcclxcbiAgICAgICAgPHNwYW4gc3R5bGU9XFxcIm1hcmdpbi1yaWdodDogNDBweFxcXCI+IDxoND4gTm9tZSBDYXRlZ29yaWE6IDwvaDQ+IDwvc3Bhbj5cXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgPHNwYW4gc3R5bGU9XFxcIm1hcmdpbi1yaWdodDogNDBweFxcXCI+IDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGJvcmRlci1lbmQtMSBib3JkZXIgcm91bmRlZC1waWxsXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwiQ2F0ZWdvcmlhXFxcIiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OjIwcHhcXFwiIGlkPVxcXCJjYXRlZ29yeU5hbWVcXFwiPiA8L3NwYW4+XFxyXFxuXFxyXFxuICAgICAgICA8c3BhbiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiA0MHB4XFxcIj4gPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBpZD1cXFwiY3JlYXRlQ2F0ZWdvcnlcXFwiPkNyZWEgQ2F0ZWdvcmlhPC9idXR0b24+IDwvc3Bhbj5cXHJcXG5cXHJcXG4gICAgICAgIDxzcGFuIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IDQwcHhcXFwiPiA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgaWQ9XFxcImRlbGV0ZUVsZW1lbnRzXFxcIj5FbGltaW5hIEFubnVuY2k8L2J1dHRvbj4gPC9zcGFuPlxcclxcblxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGJyPlxcclxcbiAgICBcXHJcXG4gICAgPGRpdiBpZD1cXFwicmVtYWluc1xcXCI+XFxyXFxuICAgICAgICA8dWwgaWQ9XFxcImluc2VydGlvbkNvbnRlbnQyXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cFxcXCIgPlxcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgICAgIFxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdj5cXHJcXG4gICAgICAgIDx1bCBpZD1cXFwicGFnZXMyXFxcIiBjbGFzcz1cXFwicGFnaW5hdGlvbiBwYWdpbmF0aW9uLXNtIG15LTJcXFwiPlxcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgXFxyXFxuICAgIDwvZGl2PiAgICBcXHJcXG5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtMTIgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgIDxoMj48Yj5JbnNlcmlzY2kgQW5udW5jaW88L2I+PC9oMj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC00XFxcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcInRpdGxlXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+XFxyXFxuICAgICAgICAgIDxoMz48Yj5UaXRvbG8gQW5udW5jaW88L2I+PC9oMz5cXHJcXG4gICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInRpdGxlXFxcIiBwbGFjZWhvbGRlcj1cXFwiVGl0b2xvIEFubnVuY2lvXFxcIj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImRlc2NyaXB0aW9uXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+XFxyXFxuICAgICAgICAgIDxoMz48Yj5EZXNjcml6aW9uZSBWaWRlb2dpb2NvPC9iPjwvaDM+XFxyXFxuICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgPHRleHRhcmVhIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJkZXNjcmlwdGlvblxcXCIgcm93cz1cXFwiM1xcXCIgcGxhY2Vob2xkZXI9XFxcIkRlc2NyaXppb25lIEFubnVuY2lvXFxcIj48L3RleHRhcmVhPlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgIDxkaXY+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJ0cmFkZUdhbWVcXFwiIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgIDxoMz48Yj5UcmFkZS1HYW1lPC9iPjwvaDM+XFxyXFxuICAgICAgICAgIDxoNT5EYSBxdWFsZSB0ZXNvcmlubyB0aSB2b3JyZXN0aSBzZXBhcmFyZT88L2g1PlxcclxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZHJvcGRvd24gdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tbGlnaHQgZHJvcGRvd24tdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgUXVhbnRpIGJlaSBnaW9jaGluaSFcXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8dWwgaWQ9XFxcInRyYWRlR2FtZVxcXCIgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNFxcXCI+XFxyXFxuICAgICAgPGRpdj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcIndpc2hHYW1lc1xcXCIgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgPGgzPjxiPldpc2gtTGlzdDwvYj48L2gzPlxcclxcbiAgICAgICAgICA8aDU+Q2hlIGdpb2NoaSB2b3JyZXN0aSByaWNldmVyZSBpbiBjYW1iaW8gZGVsIHR1byB0ZXNvcmlubz88L2g1PlxcclxcblxcclxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZHJvcGRvd24gdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tbGlnaHQgZHJvcGRvd24tdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiXFxyXFxuICAgICAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIj5cXHJcXG4gICAgICAgICAgICAgIFNvbG8gMyBFaCEgTm9uIGJhcmlhbW8hXFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPHVsIGlkPVxcXCJ3aXNoR2FtZXNcXFwiIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXHJcXG4gICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLTRcXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiZ2FsbGVyeVxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPlxcclxcbiAgICAgICAgICA8aDM+PGI+SW1tYWdpbmk8L2I+PC9oMz5cXHJcXG4gICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImdhbGxlcnlcXFwiIHJvd3M9XFxcIjdcXFwiXFxyXFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJJbnNlcmlzY2kgbGUgdXJsIGRlbGxlIGltYWdpbmkgZGVsbCdhbm51bmNpbyBkYSBpbnNlcmlyZSwgb2dudW5hIGRpdmlzYSBkYWxsYSB2aXJnb2xhIEVzOiBodHRwOi8vaW1ndXJsL2ltZy5wbmcsaHR0cDovL2ltZ3VybC9pbWcyLnBuZ1xcXCI+PC90ZXh0YXJlYT5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDx1bCBpZD1cXFwic2VsZWN0ZWRHYW1lc1xcXCI+XFxyXFxuICAgICAgICAgIFxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiY29sLTEyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibWItMyBtdC0zIHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPkFnZ2l1bmdpPC9idXR0b24+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8c3R5bGU+XFxyXFxuICAuY2FyZGZvb3RlciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZvb3RlcmxpbmtzIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XFxyXFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiBibGFjaztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBhOmhvdmVyLCBhOmFjdGl2ZSB7XFxyXFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiBncmV5O1xcclxcbiAgfVxcclxcblxcclxcbiAgbGkge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gIGJvZHkge1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgZm9vdGVyIHtcXHJcXG4gICAgbWluLWhlaWdodDogNTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8qIFRoZSBhcnRpY2xlIGZpbGxzIGFsbCB0aGUgc3BhY2UgYmV0d2VlbiBoZWFkZXIgJiBmb290ZXIgKi9cXHJcXG4gIGJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgZGl2LmNvbnRhaW5lciB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICB9XFxyXFxuXFxyXFxuPC9zdHlsZT5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjYXJkZm9vdGVyXFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5cXHJcXG4gICAgPGltZyBzcmM9XFxcIi4vaW1nL3ZpZGVvZ2FtZWxvdmVyZm9vdGVyLnBuZ1xcXCIgc3R5bGU9XFxcIndpZHRoOjI3JTsgcGFkZGluZzogMiU7ICBvcGFjaXR5OiAwLjg7XFxcIiBhbHQ9XFxcIlxcXCI+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCIgc3R5bGU9XFxcInBhZGRpbmctYm90dG9tOiAxJTtcXFwiPlxcclxcbiAgICA8dWw+XFxyXFxuICAgICAgPGxpPiA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiZm9vdGVybGlua3NcXFwiPkhvbWU8L2E+IDwvbGk+XFxyXFxuICAgICAgPGxpPiA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiZm9vdGVybGlua3NcXFwiPlBhb2xvPC9hPiA8L2xpPlxcclxcbiAgICAgIDxsaT4gPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImZvb3RlcmxpbmtzXFxcIj5QaWVybzwvYT4gPC9saT5cXHJcXG4gICAgICA8bGk+IDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJmb290ZXJsaW5rc1xcXCI+QWJvdXQgVXM8L2E+IDwvbGk+XFxyXFxuICAgIDwvdWw+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImNhcmQtZm9vdGVyIHRleHQtbXV0ZWRcXFwiIHN0eWxlPVxcXCJwYWRkaW5nLWJvdHRvbTogMSU7IC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiByZ2IoMjIsIDIyLCAyMik7XFxcIj5cXHJcXG4gICAgPHAgIGNsYXNzPVxcXCJmb290ZXJsaW5rc1xcXCI+IMKpMjAyMyBQYW9sbyBFbnRlcnByaXNlIEluYy4gfCBUdXR0aSBpIGRpcml0dGkgcmlzZXJ2YXRpIChhIFBpZXJpbm8pIDwvcD5cXHJcXG4gIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjwhLS1cXHJcXG48c3R5bGU+XFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTByZW0gYXV0bztcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJtYWluXFxcIiBcXFwiLlxcXCIgXFxcImZvb3RlclxcXCI7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kOiAjRjVGN0ZBO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbmJvZHkgLmZvb3RlciB7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgLS1mb290ZXItYmFja2dyb3VuZDojRUQ1NTY1O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xcclxcbiAgbWluLWhlaWdodDogMTJyZW07XFxyXFxufVxcclxcbmJvZHkgLmZvb3RlciAuYnViYmxlcyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBoZWlnaHQ6IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1mb290ZXItYmFja2dyb3VuZCk7XFxyXFxuICBmaWx0ZXI6IHVybChcXFwiI2Jsb2JcXFwiKTtcXHJcXG59XFxyXFxuYm9keSAuZm9vdGVyIC5idWJibGVzIC5idWJibGUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogdmFyKC0tcG9zaXRpb24sIDUwJSk7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1mb290ZXItYmFja2dyb3VuZCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IGJ1YmJsZS1zaXplIHZhcigtLXRpbWUsIDRzKSBlYXNlLWluIGluZmluaXRlIHZhcigtLWRlbGF5LCAwcyksIGJ1YmJsZS1tb3ZlIHZhcigtLXRpbWUsIDRzKSBlYXNlLWluIGluZmluaXRlIHZhcigtLWRlbGF5LCAwcyk7XFxyXFxuICAgICAgICAgIGFuaW1hdGlvbjogYnViYmxlLXNpemUgdmFyKC0tdGltZSwgNHMpIGVhc2UtaW4gaW5maW5pdGUgdmFyKC0tZGVsYXksIDBzKSwgYnViYmxlLW1vdmUgdmFyKC0tdGltZSwgNHMpIGVhc2UtaW4gaW5maW5pdGUgdmFyKC0tZGVsYXksIDBzKTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEwMCUpO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIgLmNvbnRlbnQge1xcclxcbiAgei1pbmRleDogMjtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcclxcbiAgZ3JpZC1nYXA6IDRyZW07XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tZm9vdGVyLWJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIgLmNvbnRlbnQgYSwgYm9keSAuZm9vdGVyIC5jb250ZW50IHAge1xcclxcbiAgY29sb3I6ICNGNUY3RkE7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbmJvZHkgLmZvb3RlciAuY29udGVudCBiIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuYm9keSAuZm9vdGVyIC5jb250ZW50IHAge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIgLmNvbnRlbnQgPiBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuYm9keSAuZm9vdGVyIC5jb250ZW50ID4gZGl2ID4gZGl2IHtcXHJcXG4gIG1hcmdpbjogMC4yNXJlbSAwO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIgLmNvbnRlbnQgPiBkaXYgPiBkaXYgPiAqIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIgLmNvbnRlbnQgPiBkaXYgLmltYWdlIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA0cmVtO1xcclxcbiAgaGVpZ2h0OiA0cmVtO1xcclxcbiAgbWFyZ2luOiAwLjI1cmVtIDA7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgYnViYmxlLXNpemUge1xcclxcbiAgMCUsIDc1JSB7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1zaXplLCA0cmVtKTtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1zaXplLCA0cmVtKTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICB3aWR0aDogMHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAwcmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGJ1YmJsZS1zaXplIHtcXHJcXG4gIDAlLCA3NSUge1xcclxcbiAgICB3aWR0aDogdmFyKC0tc2l6ZSwgNHJlbSk7XFxyXFxuICAgIGhlaWdodDogdmFyKC0tc2l6ZSwgNHJlbSk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgd2lkdGg6IDByZW07XFxyXFxuICAgIGhlaWdodDogMHJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIGJ1YmJsZS1tb3ZlIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgYm90dG9tOiAtNHJlbTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICBib3R0b206IHZhcigtLWRpc3RhbmNlLCAxMHJlbSk7XFxyXFxuICB9XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgYnViYmxlLW1vdmUge1xcclxcbiAgMCUge1xcclxcbiAgICBib3R0b206IC00cmVtO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIGJvdHRvbTogdmFyKC0tZGlzdGFuY2UsIDEwcmVtKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuPC9zdHlsZT5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJtYWluXFxcIj48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJmb290ZXJcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiYnViYmxlc1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZToyLjY2NDUyMzAxNjI4NTE5NjNyZW07IC0tZGlzdGFuY2U6Ny4zMDQxMTYwMzY3NDI2MTc0cmVtOyAtLXBvc2l0aW9uOjgzLjU2MzY4MDUzMzM4NDgzJTsgLS10aW1lOjMuNDk1NjQwMzA5NjI3MjI5NXM7IC0tZGVsYXk6LTIuNzczOTM4MTk2MjM3NzAycztcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6NS44OTQxNDk4NDk4MzgwMTZyZW07IC0tZGlzdGFuY2U6Ny42Mjc5NzQ0ODQzMDA0MjdyZW07IC0tcG9zaXRpb246OTMuMzY4NzgxODgzOTM2NDIlOyAtLXRpbWU6My43NjAxNDg2MjcyODM4NzU2czsgLS1kZWxheTotMy4zOTcxMDIyODg0MDMwMjlzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZToyLjc5ODY0NzEwNjY2NTY4NXJlbTsgLS1kaXN0YW5jZTo5LjIwMDQ5NjgxNzIyMjUyNXJlbTsgLS1wb3NpdGlvbjowLjIwNzc1NzMyNjk4NDE0MTk1JTsgLS10aW1lOjIuMjAxMDk2MDIyMDA1ODY1N3M7IC0tZGVsYXk6LTIuNjk4OTQ4MjE2NDY0NTQ1cztcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6NC4zNTk2MjE5MjY3ODIyOTRyZW07IC0tZGlzdGFuY2U6Ny40NjM1Nzk5MzAwNzQxOXJlbTsgLS1wb3NpdGlvbjo0Ny44Njc4MzE3NDY4NTA5MjUlOyAtLXRpbWU6Mi4xMjA4MjA1NjEyNzA3MjRzOyAtLWRlbGF5Oi0yLjUxNDE3Nzg0OTIxODIzMzZzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZTo1LjAyODM1MjA1MDk3ODE5NnJlbTsgLS1kaXN0YW5jZTo3LjI0MjcyMDAzNjgzMjI0OXJlbTsgLS1wb3NpdGlvbjozMC42OTk4NDYxNTkyNzM5NiU7IC0tdGltZTozLjI1MzU5NTUyODEwNjI4ODNzOyAtLWRlbGF5Oi0zLjM1NTQ1NDUzMjU0Mzk3MTVzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZToyLjc1NTk3ODIyMTg1NzE5M3JlbTsgLS1kaXN0YW5jZTo3LjQ2OTk3MjQ5NjkyNjUwOXJlbTsgLS1wb3NpdGlvbjoxMC4yMzgyMjcwMjA3MDExMzklOyAtLXRpbWU6Mi42NDcyMDAxNTIwMDgzNjZzOyAtLWRlbGF5Oi0zLjU3MjE1OTQ2MjI0OTYyMThzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZTo1LjA4NDgxMjgxNzIwODczNzVyZW07IC0tZGlzdGFuY2U6OS41NTg1NTQxNDI1ODQ2MjZyZW07IC0tcG9zaXRpb246OTQuNTE5ODIwNTc4MzIyMTUlOyAtLXRpbWU6My43MTU1NTU4NzYyMTczMDU1czsgLS1kZWxheTotMy4wODEwMDY2OTY3NTc4NTlzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZTozLjUzNzgwNzU2MDc3NTk1OHJlbTsgLS1kaXN0YW5jZTo5LjQyMTQyMzUyOTg0MTkyOHJlbTsgLS1wb3NpdGlvbjo1LjM5NjI3NDIxMTcwOTAxMyU7IC0tdGltZTozLjE3ODc4OTQ1NTYwMTg4NTZzOyAtLWRlbGF5Oi0zLjQ0NjE2OTkwNTE4Njc3NXM7XFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnViYmxlXFxcIiBzdHlsZT1cXFwiLS1zaXplOjUuNjI3NzMxMjE4NjAwMzQ4cmVtOyAtLWRpc3RhbmNlOjcuNzQ2NDYzNDE2MDc1MTY1cmVtOyAtLXBvc2l0aW9uOjEwLjkyODgwMjQ5MzQ2OTUzMSU7IC0tdGltZToyLjU2NzkyNTkzMjI1NjY5czsgLS1kZWxheTotMy40MDQ4NzMxMDE0NTE5ODZzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZTozLjY5NDk1OTkyMTk0NzIzMTNyZW07IC0tZGlzdGFuY2U6OS4xODE1NDk1ODY3NTAxMDdyZW07IC0tcG9zaXRpb246LTQuNTg5MDU1NTYzNzk4OTc2JTsgLS10aW1lOjMuNzA5NTIyMDY1Mjg4ODM0NXM7IC0tZGVsYXk6LTMuMTI5NTg2MTMxNTkxNjA2N3M7XFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnViYmxlXFxcIiBzdHlsZT1cXFwiLS1zaXplOjIuNzU5MjY0MjIxMDY3MTc4cmVtOyAtLWRpc3RhbmNlOjguNDI2ODg4MDk5NTUxMzdyZW07IC0tcG9zaXRpb246MjguMDQ2NzI4MjkzMTI0NTAyJTsgLS10aW1lOjMuMjg0MDk2MTEwNTIzNnM7IC0tZGVsYXk6LTIuMzY2NTE5ODc0MzA5Mzg3cztcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6Mi41NzQzMDgyNDM1MTA1Njg0cmVtOyAtLWRpc3RhbmNlOjkuNDMwNjUzOTYyNTczODUzcmVtOyAtLXBvc2l0aW9uOjMwLjgzOTc0NjQ3MTczOTYxJTsgLS10aW1lOjMuNjg2NTcwMDE3NjIzMDcwN3M7IC0tZGVsYXk6LTMuNjE5MDM5NjA2MDMzMjk3cztcXFwiPjwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXHJcXG4gICAgPGRpdj5cXHJcXG4gICAgICA8ZGl2PjxiPkVsZGV3PC9iPjxhIGhyZWY9XFxcIiNcXFwiPlNlY3VjZTwvYT48YSBocmVmPVxcXCIjXFxcIj5EcnVwYW5kPC9hPjxhIGhyZWY9XFxcIiNcXFwiPk9jZWFzaDwvYT48YSBocmVmPVxcXCIjXFxcIj5VZ2VmZTwvYT48YSBocmVmPVxcXCIjXFxcIj5CYWJlZDwvYT48L2Rpdj5cXHJcXG4gICAgICA8ZGl2PjxiPlNwb3RoYTwvYj48YSBocmVmPVxcXCIjXFxcIj5NaXNrYXNhPC9hPjxhIGhyZWY9XFxcIiNcXFwiPkFnaXRoZTwvYT48YSBocmVmPVxcXCIjXFxcIj5TY2VzaGE8L2E+PGEgaHJlZj1cXFwiI1xcXCI+THVsbGU8L2E+PC9kaXY+XFxyXFxuICAgICAgPGRpdj48Yj5DaGFzaGFraWI8L2I+PGEgaHJlZj1cXFwiI1xcXCI+Q2hvZ2F1dzwvYT48YSBocmVmPVxcXCIjXFxcIj5QaGFjaHVsZWQ8L2E+PGEgaHJlZj1cXFwiI1xcXCI+VGllYmVmdDwvYT48YSBocmVmPVxcXCIjXFxcIj5PY2lkPC9hPjxhIGhyZWY9XFxcIiNcXFwiPkl6b208L2E+PGEgaHJlZj1cXFwiI1xcXCI+T3J0PC9hPjwvZGl2PlxcclxcbiAgICAgIDxkaXY+PGI+QXRob2Q8L2I+PGEgaHJlZj1cXFwiI1xcXCI+UGFtdXo8L2E+PGEgaHJlZj1cXFwiI1xcXCI+VmFwZXJ0PC9hPjxhIGhyZWY9XFxcIiNcXFwiPk5lZXNrPC9hPjxhIGhyZWY9XFxcIiNcXFwiPk9tZW1hbmVuPC9hPjwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdj48YSBjbGFzcz1cXFwiaW1hZ2VcXFwiIGhyZWY9XFxcImh0dHBzOi8vY29kZXBlbi5pby96LVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJnF1b3Q7aHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTk5MDExL2hhcHB5LnN2ZyZxdW90OylcXFwiPjwvYT5cXHJcXG4gICAgICA8cD7CqTIwMTkgTm90IFJlYWxseTwvcD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48c3ZnIHN0eWxlPVxcXCIgdG9wOjEwMHZoXFxcIj5cXHJcXG4gIDxkZWZzPlxcclxcbiAgICA8ZmlsdGVyIGlkPVxcXCJibG9iXFxcIj5cXHJcXG4gICAgICA8ZmVHYXVzc2lhbkJsdXIgaW49XFxcIlNvdXJjZUdyYXBoaWNcXFwiIHN0ZERldmlhdGlvbj1cXFwiMTBcXFwiIHJlc3VsdD1cXFwiYmx1clxcXCI+PC9mZUdhdXNzaWFuQmx1cj5cXHJcXG4gICAgICA8ZmVDb2xvck1hdHJpeCBpbj1cXFwiYmx1clxcXCIgbW9kZT1cXFwibWF0cml4XFxcIiB2YWx1ZXM9XFxcIjEgMCAwIDAgMCAgMCAxIDAgMCAwICAwIDAgMSAwIDAgIDAgMCAwIDE5IC05XFxcIiByZXN1bHQ9XFxcImJsb2JcXFwiPjwvZmVDb2xvck1hdHJpeD5cXHJcXG4gICAgICBmZUNvbXBvc2l0ZShpbj1cXFwiU291cmNlR3JhcGhpY1xcXCIgaW4yPVxcXCJibG9iXFxcIiBvcGVyYXRvcj1cXFwiYXRvcFxcXCIpIC8vQWZ0ZXIgcmV2aWV3aW5nIHRoaXMgYWZ0ZXIgeWVhcnMgSSBjYW4ndCByZW1lbWJlciB3aHkgSSBhZGRlZCB0aGlzIGJ1dCBpdCBpc24ndCBuZWNlc3NhcnkgZm9yIHRoZSBibG9iIGVmZmVjdFxcclxcbjwvZmlsdGVyPlxcclxcbjwvZGVmcz5cXHJcXG48L3N2Zz5cXHJcXG4tLT5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxuYXYgYXJpYS1sYWJlbD1cXFwiLi4uXFxcIj5cXHJcXG4gICAgPGRpdj5cXHJcXG4gICAgICAgIDxoMSBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPkdlc3Rpc2NpIFV0ZW50aSBSZWdpc3RyYXRpPC9oMT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDx1bCBpZD1cXFwidXNlckxpc3RcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIFxcclxcbiAgICA8L3VsPlxcclxcbiAgICA8dWwgaWQ9XFxcInBhZ2luYXRpb25cXFwiIGNsYXNzPVxcXCJwYWdpbmF0aW9uIHBhZ2luYXRpb24tc20gbXktMlxcXCI+XFxyXFxuICAgICAgICBcXHJcXG4gICAgPC91bD5cXHJcXG48L25hdj5cXHJcXG5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgaWQ9XFxcImJnYXJvdW5kXFxcIiBjbGFzcz1cXFwidGV4dC1jZW50ZXIgbXktNVxcXCI+XFxyXFxuICAgIDxpbWcgc3JjPVxcXCIuL2ltZy92aWRlb2dhbWVsb3Zlci5wbmdcXFwiIGFsdD1cXFwibm90IGZvdW5kXFxcIiBjbGFzcz1cXFwiaGVhZGVySW1nIG14LWF1dG9cXFwiIHN0eWxlPVxcXCJ3aWR0aDogNTAlOyBcXFwiIGlkPVxcXCJoZWFkZXJJbWdcXFwiPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxzdHlsZT5cXHJcXG5cXHJcXG4gIC53aWRnZXRJbnRybyB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC53aWRnZXRJbnRyby1kaXZ7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAjYW5uQ2FyZCB7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNpbWdDYXJkIHtcXHJcXG4gICAgaGVpZ2h0OiA2MCU7XFxyXFxuICAgIHdpZHRoOmZpdC1jb250ZW50O1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuICAuaW1nUyB7XFxyXFxuICAgIHdpZHRoOiA1NHB4O1xcclxcbiAgICBoZWlnaHQ6IDQycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBib2R5IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuXFxyXFxuICAud2lkZ2V0UGljIHtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5waWNSaWdodCB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBpY2xlZnQge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlYyB7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnAge1xcclxcbiAgICBwYWRkaW5nOiAwcHg7XFxyXFxuICB9XFxyXFxuIFxcclxcbjwvc3R5bGU+XFxyXFxuXFxyXFxuPHNlY3Rpb24gY2xhc3M9XFxcInAgc2VjIGJvcmRlciBib3JkZXItc3VjY2VzcyBtYi0yIGJvcmRlci1vcGFjaXR5LTUwIHJvdW5kZWQgcm93IGFsaW5nLWl0ZW0tc3RhcnRcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwicCBjb2wtNFxcXCI+XFxyXFxuICAgIDxwaWN0dXJlPlxcclxcbiAgICAgIDxpbWcgY2xhc3M9XFxcIndpZGdldFBpYyBwaWNMZWZ0IHJvdW5kZWQtc3RhcnRcXFwiIHNyYz1cXFwiLi9pbWcvZ2FtZXNlYXJjaC5qcGdcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDAlXFxcIiBhbHQ9XFxcIlxcXCI+XFxyXFxuICAgIDwvcGljdHVyZT5cXHJcXG4gIDwvZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiYm9yZGVyLXN0YXJ0IGJvcmRlci0zIGJvcmRlci1wcmltYXJ5IGNvbC04IHRleHQtc3RhcnQgd2lkZ2V0VGV4dFxcXCI+XFxyXFxuICAgIDxoMT5cXHJcXG4gICAgICBJbCBwb3J0YWxlIGRlaSB2ZXJpIGdhbWVycy5cXHJcXG4gICAgPC9oMT5cXHJcXG4gICAgPGgyPlxcclxcbiAgICAgIFNlaSBhbGxhIHJpY2VyY2EgZGkgdW4gZ2lvY28sIHZlY2NoaW8gbyBudW92byBjaGUgc2lhLCBtYSBub24gcmllc2NpIGEgdHJvdmFybG8/IE5vaSBhYmJpYW1vIGxhIHNvbHV6aW9uZSBwZXIgdGUuLi5cXHJcXG4gICAgICBDZXJjYSB0cmEgY2VudGluYWlhIGRpIGFubnVuY2kgaWwgdGl0b2xvIGNoZSBub24gdHJvdmF2aSBwacO5LCBtZXR0aXRpIGluIGNvbnRhdHRvIGNvbiBsJ3V0ZW50ZSBjaGUgbG8gc3RhIHZlbmRlbmRvLCBcXHJcXG4gICAgICBlIGZhaSBsJ2FmZmFyZSBkZWwgc2Vjb2xvLi4uXFxyXFxuICAgIDwvaDI+XFxyXFxuICA8L2Rpdj5cXHJcXG48L3NlY3Rpb24+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIHRleHQtY2VudGVyXFxcIiBzdHlsZT1cXFwibWFyZ2luLXRvcDogMTAlOyBtYXJnaW4tYm90dG9tOiAxMCU7XFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OjEwJTttYXJnaW4tcmlnaHQ6MTAlO1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbFxcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZCB0ZXh0LWJnLWRhbmdlclxcXCIgc3R5bGU9XFxcIndpZHRoOiAxOHJlbTtoZWlnaHQ6IDEwMCU7XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuICAgICAgICAgIDxoNSBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+Q2VyY2E8L2g1PlxcclxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj5DZXJjYSBpbCB0dW8gZ2lvY28gcHJlZmVyZWl0byB0cmEgY2VudGluYWlhIGRpIGFubnVuY2k8L3A+XFxyXFxuICAgICAgICAgIDxocj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgbWItMyBmb3JtLWNvbnRyb2wgYm9yZGVyIHJvdW5kZWRcXFwiIHN0eWxlPVxcXCJtYXJnaW4tdG9wOiAxMHB4O1xcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgYm9yZGVyLTBcXFwiIGlkPVxcXCJzZWFyY2hUaXRsZVxcXCIgcGxhY2Vob2xkZXI9XFxcIkNlcmNhXFxcIiBhcmlhLWxhYmVsPVxcXCJzZWFyY2hcXFwiIGFyaWEtZGVzY3JpYmVkYnk9XFxcImJhc2ljLWFkZG9uMlxcXCI+XFxyXFxuICAgICAgICAgICAgPGEgaWQ9XFxcInNlYXJjaEJ1dHRvblRpdGxlXFxcIiBocmVmPVxcXCIjXFxcIj48aW1nIGNsYXNzPVxcXCJtcy0xIGJ0biBpbWdTXFxcIiBzcmM9XFxcIi4vaW1nL3NlYXJjaC5wbmdcXFwiIGFsdD1cXFwiXFxcIj48L2E+XFxyXFxuICAgICAgICAgIDwvZGl2PiBcXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sXFxcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIHRleHQtYmctcHJpbWFyeVxcXCIgc3R5bGU9XFxcIndpZHRoOiAxOHJlbTtoZWlnaHQ6IDEwMCU7XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuICAgICAgICAgIDxoNSBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+RXNwbG9yYTwvaDU+XFxyXFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPkVzcGxvcmEgbWlnbGlhbGlhIGRpIGdpb2NoaSB0cmEgZ2xpIGFubnVuY2kgcHJlc2VudGk8L3A+XFxyXFxuICAgICAgICAgIDxocj5cXHJcXG4gICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgaWQ9XFxcImluc2VydGlvbnNDYXJkXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvXFxcIj5Bbm51bmNpPC9hPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgdGV4dC1iZy1zdWNjZXNzXFxcIiBzdHlsZT1cXFwid2lkdGg6IDE4cmVtO2hlaWdodDogMTAwJTtcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgPGg1IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5TY2FtYmlhPC9oNT5cXHJcXG4gICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+SGFpIHVuIGdpb2NvIGRpIGN1aSBub24gdGUgbmUgZmFpIHBpw7kgbnVsbGEgcGVyIGxlIG1pbGlhcmRpIGRpIHZvbHRlIGNoZSBsbyBoYWkgZmluaXRvP1xcclxcbiAgICAgICAgICAgIGluc2VyaXNjaSBxdWkgaWwgdHVvIGFubnVuY2lvIVxcclxcbiAgICAgICAgICA8L3A+XFxyXFxuICAgICAgICAgIDxocj5cXHJcXG4gICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgaWQ9XFxcImluc2VydENhcmRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxpZ2h0XFxcIj5JbnNlcmlzY2kgQW5udW5jaW88L2E+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48c2VjdGlvbiBjbGFzcz1cXFwicm93IGFsaW5nLWl0ZW0tc3RhcnRcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiY29sLTggdGV4dC1zdGFydCB3aWRnZXRUZXh0XFxcIj5cXHJcXG4gICAgPGgxPlxcclxcbiAgICAgIElsIHBvcnRhbGUgZGVpIHZlcmkgZ2FtZXJzLlxcclxcbiAgICA8L2gxPlxcclxcbiAgICA8aDI+XFxyXFxuICAgICAgU2VpIGFsbGEgcmljZXJjYSBkaSB1biBnaW9jbywgdmVjY2hpbyBvIG51b3ZvIGNoZSBzaWEsIG1hIG5vbiByaWVzY2kgYSB0cm92YXJsbz8gTm9pIGFiYmlhbW8gbGEgc29sdXppb25lIHBlciB0ZS4uLlxcclxcbiAgICAgIENlcmNhIHRyYSBjZW50aW5haWEgZGkgYW5udW5jaSBpbCB0aXRvbG8gY2hlIG5vbiB0cm92YXZpIHBpw7ksIG1ldHRpdGkgaW4gY29udGF0dG8gY29uIGwndXRlbnRlIGNoZSBsbyBzdGEgdmVuZGVuZG8sIFxcclxcbiAgICAgIGUgZmFpIGwnYWZmYXJlIGRlbCBzZWNvbG8uLi5cXHJcXG4gICAgPC9oMj5cXHJcXG4gIDwvZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiY29sLTRcXFwiPlxcclxcbiAgICA8cGljdHVyZSBjbGFzcz1cXFwid2lkZ2V0UGljXFxcIj5cXHJcXG4gICAgICA8aW1nIHNyYz1cXFwiLi9pbWcvZ2FtZXRyYWRlLnBuZ1xcXCIgc3R5bGU9XFxcIndpZHRoOjEwMCVcXFwiIGFsdD1cXFwiXFxcIj5cXHJcXG4gICAgPC9waWN0dXJlPlxcclxcbiAgPC9kaXY+XFxyXFxuPC9zZWN0aW9uPlxcclxcblxcclxcbjxoMT5VbHRpbWkgYW5udW5jaTo8L2gxPlxcclxcbjxoMj5Db250cm9sbGEgcXVpIGdsaSB1bHRpbWkgYW5udW5jaTwvaDI+XFxyXFxuPGRpdiBpZD1cXFwiY2Fyb3VzZWxFeGFtcGxlQ29udHJvbHNcXFwiIGNsYXNzPVxcXCJjYXJvdXNlbCBzbGlkZVxcXCIgZGF0YS1icy1yaWRlPVxcXCJjYXJvdXNlbFxcXCI+XFxyXFxuICAgIDxkaXYgaWQ9XFxcImlubmVyQ2Fyb3VzZWxIb21lXFxcIiBjbGFzcz1cXFwiY2Fyb3VzZWwtaW5uZXJcXFwiPlxcclxcbiAgICAgICBcXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxidXR0b24gY2xhc3M9XFxcImNhcm91c2VsLWNvbnRyb2wtcHJldlxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRhcmdldD1cXFwiI2Nhcm91c2VsRXhhbXBsZUNvbnRyb2xzXFxcIiBkYXRhLWJzLXNsaWRlPVxcXCJwcmV2XFxcIj5cXHJcXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+UHJldmlvdXM8L3NwYW4+XFxyXFxuICAgIDwvYnV0dG9uPlxcclxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYXJvdXNlbC1jb250cm9sLW5leHRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10YXJnZXQ9XFxcIiNjYXJvdXNlbEV4YW1wbGVDb250cm9sc1xcXCIgZGF0YS1icy1zbGlkZT1cXFwibmV4dFxcXCI+XFxyXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPk5leHQ8L3NwYW4+XFxyXFxuICAgIDwvYnV0dG9uPlxcclxcbiAgPC9kaXY+XFxyXFxuXFxyXFxuXFxyXFxuPGgxPkNoaSBzaWFtbz88L2gxPlxcclxcbjxoMj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRWEgYWRpcGlzY2kgYXJjaGl0ZWN0byBsaWJlcm8gYWxpYXM/IE51bXF1YW0gYXRxdWUgYmVhdGFlIHF1aXMgYXNwZXJpb3JlcyBuZWNlc3NpdGF0aWJ1cyBlc3QgcXVvZCB2b2x1cHRhdGUgZXZlbmlldCBleGNlcHR1cmkgbW9sZXN0aWFzIGZ1Z2lhdCBub3N0cnVtIG5paGlsLCBlbGlnZW5kaSB2ZXJvLjwvaDI+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgPGxhYmVsIGZvcj1cXFwidXNlcm5hbWVTaWduSW5cXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5OaWNrbmFtZTwvbGFiZWw+XFxyXFxuICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwidXNlcm5hbWVTaWduSW5cXFwiPlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICA8bGFiZWwgZm9yPVxcXCJwYXNzd29yZFNpZ25JblxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPlBhc3N3b3JkPC9sYWJlbD5cXHJcXG4gICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwicGFzc3dvcmRTaWduSW5cXFwiPlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcIm1iLTMgZm9ybS1jaGVja1xcXCI+XFxyXFxuICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIGlkPVxcXCJyZW1lbWJlck1lU2lnbkluXFxcIj5cXHJcXG4gICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWxhYmVsXFxcIiBmb3I9XFxcInJlbWVtYmVyTWVTaWduSW5cXFwiPlJpY29yZGFtaTwvbGFiZWw+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBpZD1cXFwibG9naW5SZXN1bHRcXFwiIGNsYXNzPVxcXCJteS0zXFxcIj5cXHJcXG5cXHJcXG48L2Rpdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxidXR0b24gaWQ9XFxcInRyeVRvTG9nXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiPkFjY2VkaTwvYnV0dG9uPlxcclxcbjxwPk5vbiBzZWkgYW5jb3JhIHJlZ2lzdHJhdG8/PC9wPlxcclxcbjxidXR0b24gaWQ9XFxcImxvZ2luU2lnblVwXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiPlJlZ2lzdHJhdGk8L2J1dHRvbj5cXHJcXG48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiBkYXRhLWJzLWRpc21pc3M9XFxcIm1vZGFsXFxcIj5DaGl1ZGk8L2J1dHRvbj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgY2xhc3M9XFxcInRleHQtY2VudGVyIG1iLTNcXFwiPlxcclxcbiAgICA8aDM+T2gsIGNpIGRpc3BpYWNlIGNoZSB2YWkgdmlhITxicj5Ub3JuYSBhIHRyb3ZhcmNpITwvaDM+XFxyXFxuICAgIDxpbWcgc3JjPVxcXCIuL2ltZy9mYWRGYWNlLnBuZ1xcXCIgd2lkdGg9XFxcIjEwMFxcXCIgYWx0PVxcXCJpbW1hZ2luZSB0cmlzdGVcXFwiPlxcclxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgaWQ9XFxcIm15TW9kYWxcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJzaWduSW5Nb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctY2VudGVyZWRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVxcXCJtb2RhbC10aXRsZSBmcy01XFxcIiBpZD1cXFwic2lnbkluTW9kYWxMYWJlbFxcXCI+TWluY2hpYSBKb2hubnkgQ2FycmFiYmFnZ2lvPC9oMT5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4tY2xvc2VcXFwiIGRhdGEtYnMtZGlzbWlzcz1cXFwibW9kYWxcXFwiIGFyaWEtbGFiZWw9XFxcIkNsb3NlXFxcIj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGlkPVxcXCJteU1vZGFsQm9keVxcXCIgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGlkPVxcXCJteU1vZGFsRm9vdGVyXFxcIiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8IS0tbmF2YmFyIGNvbnRyb2xsZXIgaWNvbi0tPlxcclxcbjxidXR0b24gaWQ9XFxcImxvZ29cXFwiIGNsYXNzPVxcXCJsb2dvLWJ1dHRvblxcXCI+IDxpbWcgY2xhc3M9XFxcImxvZ29cXFwiIHNyYz1cXFwiLi9pbWcvbG9nby5wbmdcXFwiIGFsdD1cXFwibG9nb1xcXCI+PC9idXR0b24+XFxyXFxuPGJ1dHRvbiBpZD1cXFwiZ2FtZXNcXFwiIGNsYXNzPVxcXCJsb2dvLWJ1dHRvbiBiYWNrLXRyYW5zcGFyZW50XFxcIj4gPGltZyBjbGFzcz1cXFwibG9nb1xcXCIgc3JjPVxcXCIuL2ltZy9qb3lzdGljaygxKS5wbmdcXFwiIGFsdD1cXFwibG9nb1xcXCI+PC9idXR0b24+XFxyXFxuPG5hdj5cXHJcXG4gIDx1bD5cXHJcXG4gICAgPCEtLW5hdmJhciBidXR0b25zLS0+XFxyXFxuICAgIDwhLS1uYXZiYXIgY29udHJvbGxlciBpY29uLS0+XFxyXFxuICAgIFxcclxcbiAgICA8IS0teSBidXR0b24tLT5cXHJcXG4gICAgPGJ1dHRvbiBpZD1cXFwiaW5zZXJ0aW9uc1xcXCIgY2xhc3M9XFxcImJ1dHRvbi1vbmUgbmF2LWJ1dHRvblxcXCI+QW5udW5jaTwvYnV0dG9uPlxcclxcbiAgICA8IS0tYSBidXR0b24tLT5cXHJcXG4gICAgPGJ1dHRvbiBpZD1cXFwiYWRkSW5zZXJ0aW9uXFxcIiBjbGFzcz1cXFwiYnV0dG9uLXRocmVlIG5hdi1idXR0b25cXFwiPkNyZWEgQW5udW5jaW88L2J1dHRvbj5cXHJcXG4gICAgPCEtLXggYnV0dG9uLS0+XFxyXFxuICAgIDxidXR0b24gaWQ9XFxcIm1hbmFnZW1lbnRcXFwiIGNsYXNzPVxcXCJidXR0b24tdHdvIG5hdi1idXR0b25cXFwiPkdlc3Rpb25lIFV0ZW50aTwvYnV0dG9uPlxcclxcbiAgICA8IS0tYSBidXR0b24tLT5cXHJcXG4gICAgPGJ1dHRvbiBpZD1cXFwiaW5zTWFuYWdlbWVudFxcXCIgY2xhc3M9XFxcImJ1dHRvbi10aHJlZSBuYXYtYnV0dG9uXFxcIj5HZXN0aW9uZSBBbm51bmNpPC9idXR0b24+XFxyXFxuICAgIDwhLS1iIGJ1dHRvbi0tPlxcclxcbiAgICA8YnV0dG9uIGlkPVxcXCJsb2dpblxcXCIgY2xhc3M9XFxcImJ1dHRvbi1mb3VyIG5hdi1idXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJtb2RhbFxcXCJcXHJcXG4gICAgICBkYXRhLWJzLXRhcmdldD1cXFwiI215TW9kYWxcXFwiPkxvZ2luPC9idXR0b24+XFxyXFxuICAgIDwhLS1iIGJ1dHRvbi0tPlxcclxcbiAgICA8YnV0dG9uIGlkPVxcXCJzaWduT3V0QnV0dG9uXFxcIiBjbGFzcz1cXFwiYnV0dG9uLWZvdXIgbmF2LWJ1dHRvblxcXCIgZGF0YS1icy10b2dnbGU9XFxcIm1vZGFsXFxcIlxcclxcbiAgICBkYXRhLWJzLXRhcmdldD1cXFwiI215TW9kYWxcXFwiPkxvZ291dDwvYnV0dG9uPlxcclxcbiAgICA8YnV0dG9uIGlkPVxcXCJwcm9maWxlXFxcIiBjbGFzcz1cXFwicHJvZmlsZS1idXR0b25cXFwiPlxcclxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJwb3NpdGlvbi1hYnNvbHV0ZSB0b3AtMiBzdGFydC05MCB0cmFuc2xhdGUtbWlkZGxlIHAtMiBiZy1kYW5nZXIgYm9yZGVyIGJvcmRlci1saWdodCByb3VuZGVkLWNpcmNsZVxcXCI+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwidmlzdWFsbHktaGlkZGVuXFxcIj5OZXcgYWxlcnRzPC9zcGFuPlxcclxcbiAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICA8aW1nIGNsYXNzPVxcXCJsb2dvIHByb2ZpbGVcXFwiIHNyYz1cXFwiLi9pbWcvcHJvZmlsZS5wbmdcXFwiIGFsdD1cXFwibG9nb1xcXCI+XFxyXFxuICAgIDwvYnV0dG9uPlxcclxcbiAgPC91bD5cXHJcXG5cXHJcXG4gIFxcclxcbjwvbmF2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGgxPlRPRE86IG1vc3RyYXJlIHR1dHRlIGxlIGluZm8gZGVsbCd1dGVudGU8L2gxPlxcclxcbjxoMT5UT0RPOiBmb3JtIG8gYWx0cm8gcGVyIGNhbWJpYXJlIG5pY2tuYW1lIGUvbyBwYXNzd29yZCBlY2M8L2gxPlxcclxcbjxoMT5UT0RPOiBwb3NzaWJpbGl0w6AgZGkgc2NlZ2xpZXJlIGkgZ2lvY2hpIGNoZSBzaSBwb3NzaWVkb25vPC9oMT5cXHJcXG5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxoMT5UT0RPOiBtb3N0cmFyZSB0dXR0ZSBsZSBpbmZvIGRlbGwndXRlbnRlPC9oMT5cXHJcXG5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxmb3JtPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcIm5hbWVTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5Ob21lPC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwibmFtZVNpZ25VcFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcInN1cm5hbWVTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5Db2dub21lPC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwic3VybmFtZVNpZ25VcFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcInVzZXJuYW1lU2lnblVwXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+Tmlja25hbWU8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJ1c2VybmFtZVNpZ25VcFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImVtYWlsU2lnblVwXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+RW1haWw8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiZW1haWxTaWduVXBcXFwiIHJlcXVpcmVkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJwYXNzd29yZFNpZ25VcFxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPlBhc3N3b3JkPC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInBhc3N3b3JkU2lnblVwXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiY29uZmlybV9wYXNzd29yZFNpZ25VcFxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPkNvbmZlcm1hIFBhc3N3b3JkPC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImNvbmZpcm1fcGFzc3dvcmRTaWduVXBcXFwiIHJlcXVpcmVkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBpZD1cXFwic2lnblVwUmVzdWx0XFxcIiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuXFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZm9ybT5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxidXR0b24gaWQ9XFxcInNpZ25VcExvZ2luXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPkFjY2VkaTwvYnV0dG9uPlxcclxcbjxidXR0b24gaWQ9XFxcInRyeXRvU2lnblVwXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIGRpc2FibGVkPlJlZ2lzdHJhdGk8L2J1dHRvbj5cXHJcXG48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiBkYXRhLWJzLWRpc21pc3M9XFxcIm1vZGFsXFxcIj5DaGl1ZGk8L2J1dHRvbj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgaWQ9XFxcImNyZWF0ZVZHQ29udGFpbmVyXFxcIiBjbGFzcz1cXFwiY29udGFpbmVyIG15LTUgYmFjay1zZW1pLXRyYW5zcGFyZW50XFxcIiBzdHlsZT1cXFwiYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHJnYigxNzEsIDIwOSwgNTcpO1xcclxcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgcmdiKDE3MSwgMjA5LCA1Nyk7XFxyXFxuICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHJnYigxNzEsIDIwOSwgNTcpO1xcclxcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJnYigxNzEsIDIwOSwgNTcpO1xcclxcbiAgICBcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgYWxpZ24taXRlbXMtc3RhcnRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTRcXFwiIHN0eWxlPVxcXCJcXHJcXG4gICAgICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHJnYigxNzEsIDIwOSwgNTcpOyBcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2IoMTcxLCAyMDksIDU3KTtcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibXktM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5DcmVhIGNvbnNvbGUgZSBnZW5lcmk8L2gyPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibmV3R2VucmVcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj48Yj5OdW92byBHZW5lcmU8L2I+PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJuZXdHZW5yZVxcXCIgcGxhY2Vob2xkZXI9XFxcIkluc2VyaXNjaSBudW92byBnZW5lcmVcXFwiPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcIm5ld0dlbnJlQnRuXFxcIiBjbGFzcz1cXFwiYnRuIG1iLTUgYnV0dG9uLWhvdmVyXFxcIj48Yj5DcmVhPC9iPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJuZXdDb25zb2xlXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+PGI+TnVvdmEgQ29uc29sZTwvYj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcIm5ld0NvbnNvbGVcXFwiIHBsYWNlaG9sZGVyPVxcXCJJbnNlcmlzY2kgbnVvdmEgY29uc29sZVxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cXFwibmV3Q29uc29sZUJ0blxcXCIgY2xhc3M9XFxcImJ0biBtYi01IGJ1dHRvbi1ob3ZlclxcXCI+PGI+Q3JlYTwvYj48L2J1dHRvbj5cXHJcXG5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLThcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm15LTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5JbnNlcmlzY2kgRGF0aSBWaWRlb2dpb2NvPC9oMj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtYi01XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibmFtZVxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPjxiPlRpdG9sbzwvYj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcIm5hbWVcXFwiPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1iLTVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJ5ZWFyXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+PGI+QW5ubyBkaSBVc2NpdGE8L2I+PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInllYXJcXFwiIG1pbj1cXFwiMTk3MFxcXCIgbWF4bGVuZ3RoPVxcXCIyMDIzXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtYi01XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIiBmb3I9XFxcImNvdmVyXFxcIj48Yj5MaW5rIGltbWFnaW5lPC9iPjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiY292ZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgYWxpZ24taXRlbXMtc3RhcnRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTRcXFwiPlxcclxcbiAgICAgICAgICAgIDxicj5cXHJcXG4gICAgICAgICAgICA8aDQgY2xhc3M9XFxcInRleHQtZW5kXFxcIj48Yj5TZWxlemlvbmEgY2F0ZWdvcmllOjwvYj48L2g0PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtOFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJyPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBpZD1cXFwiaW5saW5lQ2hlY2tib3gxXFxcIiB2YWx1ZT1cXFwib3B0aW9uMVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJpbmxpbmVDaGVja2JveDFcXFwiPjxiPkFDVElPTjwvYj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBpZD1cXFwiaW5saW5lQ2hlY2tib3gyXFxcIiB2YWx1ZT1cXFwib3B0aW9uMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJpbmxpbmVDaGVja2JveDJcXFwiPjxiPkdEUjwvYj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBpZD1cXFwiaW5saW5lQ2hlY2tib3gxXFxcIiB2YWx1ZT1cXFwib3B0aW9uMVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJpbmxpbmVDaGVja2JveDFcXFwiPjxiPlBMQVRGT1JNPC9iPjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jaGVjay1pbnB1dFxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGlkPVxcXCJpbmxpbmVDaGVja2JveDJcXFwiIHZhbHVlPVxcXCJvcHRpb24yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWxhYmVsXFxcIiBmb3I9XFxcImlubGluZUNoZWNrYm94MlxcXCI+PGI+U1RFQUxUSDwvYj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBpZD1cXFwiaW5saW5lQ2hlY2tib3gxXFxcIiB2YWx1ZT1cXFwib3B0aW9uMVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJpbmxpbmVDaGVja2JveDFcXFwiPjxiPkFDVElPTjwvYj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBpZD1cXFwiaW5saW5lQ2hlY2tib3gyXFxcIiB2YWx1ZT1cXFwib3B0aW9uMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJpbmxpbmVDaGVja2JveDJcXFwiPjxiPkdEUjwvYj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBpZD1cXFwiaW5saW5lQ2hlY2tib3gxXFxcIiB2YWx1ZT1cXFwib3B0aW9uMVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJpbmxpbmVDaGVja2JveDFcXFwiPjxiPlBMQVRGT1JNPC9iPjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jaGVjay1pbnB1dFxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGlkPVxcXCJpbmxpbmVDaGVja2JveDJcXFwiIHZhbHVlPVxcXCJvcHRpb24yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWxhYmVsXFxcIiBmb3I9XFxcImlubGluZUNoZWNrYm94MlxcXCI+PGI+U1RFQUxUSDwvYj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBpZD1cXFwiaW5saW5lQ2hlY2tib3gxXFxcIiB2YWx1ZT1cXFwib3B0aW9uMVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJpbmxpbmVDaGVja2JveDFcXFwiPjxiPkFDVElPTjwvYj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBpZD1cXFwiaW5saW5lQ2hlY2tib3gyXFxcIiB2YWx1ZT1cXFwib3B0aW9uMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJpbmxpbmVDaGVja2JveDJcXFwiPjxiPkdEUjwvYj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBpZD1cXFwiaW5saW5lQ2hlY2tib3gxXFxcIiB2YWx1ZT1cXFwib3B0aW9uMVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJpbmxpbmVDaGVja2JveDFcXFwiPjxiPlBMQVRGT1JNPC9iPjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jaGVjay1pbnB1dFxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGlkPVxcXCJpbmxpbmVDaGVja2JveDJcXFwiIHZhbHVlPVxcXCJvcHRpb24yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWxhYmVsXFxcIiBmb3I9XFxcImlubGluZUNoZWNrYm94MlxcXCI+PGI+U1RFQUxUSDwvYj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBpZD1cXFwiaW5saW5lQ2hlY2tib3gxXFxcIiB2YWx1ZT1cXFwib3B0aW9uMVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJpbmxpbmVDaGVja2JveDFcXFwiPjxiPkFDVElPTjwvYj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBpZD1cXFwiaW5saW5lQ2hlY2tib3gyXFxcIiB2YWx1ZT1cXFwib3B0aW9uMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJpbmxpbmVDaGVja2JveDJcXFwiPjxiPkdEUjwvYj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBpZD1cXFwiaW5saW5lQ2hlY2tib3gxXFxcIiB2YWx1ZT1cXFwib3B0aW9uMVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJpbmxpbmVDaGVja2JveDFcXFwiPjxiPlBMQVRGT1JNPC9iPjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jaGVjay1pbnB1dFxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGlkPVxcXCJpbmxpbmVDaGVja2JveDJcXFwiIHZhbHVlPVxcXCJvcHRpb24yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWxhYmVsXFxcIiBmb3I9XFxcImlubGluZUNoZWNrYm94MlxcXCI+PGI+U1RFQUxUSDwvYj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBpZD1cXFwiaW5saW5lQ2hlY2tib3gxXFxcIiB2YWx1ZT1cXFwib3B0aW9uMVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJpbmxpbmVDaGVja2JveDFcXFwiPjxiPkFDVElPTjwvYj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBpZD1cXFwiaW5saW5lQ2hlY2tib3gyXFxcIiB2YWx1ZT1cXFwib3B0aW9uMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJpbmxpbmVDaGVja2JveDJcXFwiPjxiPkdEUjwvYj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBpZD1cXFwiaW5saW5lQ2hlY2tib3gxXFxcIiB2YWx1ZT1cXFwib3B0aW9uMVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJpbmxpbmVDaGVja2JveDFcXFwiPjxiPlBMQVRGT1JNPC9iPjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jaGVjay1pbnB1dFxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGlkPVxcXCJpbmxpbmVDaGVja2JveDJcXFwiIHZhbHVlPVxcXCJvcHRpb24yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWxhYmVsXFxcIiBmb3I9XFxcImlubGluZUNoZWNrYm94MlxcXCI+PGI+U1RFQUxUSDwvYj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBpZD1cXFwiaW5saW5lQ2hlY2tib3gxXFxcIiB2YWx1ZT1cXFwib3B0aW9uMVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJpbmxpbmVDaGVja2JveDFcXFwiPjxiPkFDVElPTjwvYj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBpZD1cXFwiaW5saW5lQ2hlY2tib3gyXFxcIiB2YWx1ZT1cXFwib3B0aW9uMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJpbmxpbmVDaGVja2JveDJcXFwiPjxiPkdEUjwvYj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBpZD1cXFwiaW5saW5lQ2hlY2tib3gxXFxcIiB2YWx1ZT1cXFwib3B0aW9uMVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJpbmxpbmVDaGVja2JveDFcXFwiPjxiPlBMQVRGT1JNPC9iPjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jaGVjay1pbnB1dFxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGlkPVxcXCJpbmxpbmVDaGVja2JveDJcXFwiIHZhbHVlPVxcXCJvcHRpb24yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWxhYmVsXFxcIiBmb3I9XFxcImlubGluZUNoZWNrYm94MlxcXCI+PGI+U1RFQUxUSDwvYj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBpZD1cXFwiaW5saW5lQ2hlY2tib3gxXFxcIiB2YWx1ZT1cXFwib3B0aW9uMVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJpbmxpbmVDaGVja2JveDFcXFwiPjxiPkFDVElPTjwvYj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBpZD1cXFwiaW5saW5lQ2hlY2tib3gyXFxcIiB2YWx1ZT1cXFwib3B0aW9uMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJpbmxpbmVDaGVja2JveDJcXFwiPjxiPkdEUjwvYj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBpZD1cXFwiaW5saW5lQ2hlY2tib3gxXFxcIiB2YWx1ZT1cXFwib3B0aW9uMVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJpbmxpbmVDaGVja2JveDFcXFwiPjxiPlBMQVRGT1JNPC9iPjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jaGVjay1pbnB1dFxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGlkPVxcXCJpbmxpbmVDaGVja2JveDJcXFwiIHZhbHVlPVxcXCJvcHRpb24yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWxhYmVsXFxcIiBmb3I9XFxcImlubGluZUNoZWNrYm94MlxcXCI+PGI+U1RFQUxUSDwvYj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgYWxpZ24taXRlbXMtc3RhcnRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTRcXFwiPlxcclxcbiAgICAgICAgICAgIDxicj48YnI+XFxyXFxuICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJ0ZXh0LWVuZFxcXCI+PGI+U2VsZXppb25hIGNvbnNvbGU6PC9iPjwvaDQ+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC04XFxcIj5cXHJcXG4gICAgICAgICAgICA8YnI+PGJyPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcInJhZGlvXFxcIiBuYW1lPVxcXCJleGFtcGxlUmFkaW9zXFxcIiBpZD1cXFwiZXhhbXBsZVJhZGlvczFcXFwiIHZhbHVlPVxcXCJvcHRpb24xXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWxhYmVsXFxcIiBmb3I9XFxcImV4YW1wbGVSYWRpb3MxXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxiPlBTMTwvYj5cXHJcXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNoZWNrLWlucHV0XFxcIiB0eXBlPVxcXCJyYWRpb1xcXCIgbmFtZT1cXFwiZXhhbXBsZVJhZGlvc1xcXCIgaWQ9XFxcImV4YW1wbGVSYWRpb3MyXFxcIiB2YWx1ZT1cXFwib3B0aW9uMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJleGFtcGxlUmFkaW9zMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8Yj5QUzI8L2I+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jaGVjay1pbnB1dFxcXCIgdHlwZT1cXFwicmFkaW9cXFwiIG5hbWU9XFxcImV4YW1wbGVSYWRpb3NcXFwiIGlkPVxcXCJleGFtcGxlUmFkaW9zM1xcXCIgdmFsdWU9XFxcIm9wdGlvbjNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY2hlY2stbGFiZWxcXFwiIGZvcj1cXFwiZXhhbXBsZVJhZGlvczNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGI+UFMzPC9iPlxcclxcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcInJhZGlvXFxcIiBuYW1lPVxcXCJleGFtcGxlUmFkaW9zXFxcIiBpZD1cXFwiZXhhbXBsZVJhZGlvczFcXFwiIHZhbHVlPVxcXCJvcHRpb24xXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWxhYmVsXFxcIiBmb3I9XFxcImV4YW1wbGVSYWRpb3MxXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxiPlBTMTwvYj5cXHJcXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNoZWNrLWlucHV0XFxcIiB0eXBlPVxcXCJyYWRpb1xcXCIgbmFtZT1cXFwiZXhhbXBsZVJhZGlvc1xcXCIgaWQ9XFxcImV4YW1wbGVSYWRpb3MyXFxcIiB2YWx1ZT1cXFwib3B0aW9uMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJleGFtcGxlUmFkaW9zMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8Yj5QUzI8L2I+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jaGVjay1pbnB1dFxcXCIgdHlwZT1cXFwicmFkaW9cXFwiIG5hbWU9XFxcImV4YW1wbGVSYWRpb3NcXFwiIGlkPVxcXCJleGFtcGxlUmFkaW9zM1xcXCIgdmFsdWU9XFxcIm9wdGlvbjNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY2hlY2stbGFiZWxcXFwiIGZvcj1cXFwiZXhhbXBsZVJhZGlvczNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGI+UFMzPC9iPlxcclxcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcInJhZGlvXFxcIiBuYW1lPVxcXCJleGFtcGxlUmFkaW9zXFxcIiBpZD1cXFwiZXhhbXBsZVJhZGlvczFcXFwiIHZhbHVlPVxcXCJvcHRpb24xXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWxhYmVsXFxcIiBmb3I9XFxcImV4YW1wbGVSYWRpb3MxXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxiPlBTMTwvYj5cXHJcXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNoZWNrLWlucHV0XFxcIiB0eXBlPVxcXCJyYWRpb1xcXCIgbmFtZT1cXFwiZXhhbXBsZVJhZGlvc1xcXCIgaWQ9XFxcImV4YW1wbGVSYWRpb3MyXFxcIiB2YWx1ZT1cXFwib3B0aW9uMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJleGFtcGxlUmFkaW9zMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8Yj5QUzI8L2I+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jaGVjay1pbnB1dFxcXCIgdHlwZT1cXFwicmFkaW9cXFwiIG5hbWU9XFxcImV4YW1wbGVSYWRpb3NcXFwiIGlkPVxcXCJleGFtcGxlUmFkaW9zM1xcXCIgdmFsdWU9XFxcIm9wdGlvbjNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY2hlY2stbGFiZWxcXFwiIGZvcj1cXFwiZXhhbXBsZVJhZGlvczNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGI+UFMzPC9iPlxcclxcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcInJhZGlvXFxcIiBuYW1lPVxcXCJleGFtcGxlUmFkaW9zXFxcIiBpZD1cXFwiZXhhbXBsZVJhZGlvczFcXFwiIHZhbHVlPVxcXCJvcHRpb24xXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWxhYmVsXFxcIiBmb3I9XFxcImV4YW1wbGVSYWRpb3MxXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxiPlBTNDwvYj5cXHJcXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNoZWNrLWlucHV0XFxcIiB0eXBlPVxcXCJyYWRpb1xcXCIgbmFtZT1cXFwiZXhhbXBsZVJhZGlvc1xcXCIgaWQ9XFxcImV4YW1wbGVSYWRpb3MyXFxcIiB2YWx1ZT1cXFwib3B0aW9uMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJleGFtcGxlUmFkaW9zMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8Yj5QUzU8L2I+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jaGVjay1pbnB1dFxcXCIgdHlwZT1cXFwicmFkaW9cXFwiIG5hbWU9XFxcImV4YW1wbGVSYWRpb3NcXFwiIGlkPVxcXCJleGFtcGxlUmFkaW9zM1xcXCIgdmFsdWU9XFxcIm9wdGlvbjNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY2hlY2stbGFiZWxcXFwiIGZvcj1cXFwiZXhhbXBsZVJhZGlvczNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGI+R0FNRUJPWUNPTE9SPC9iPlxcclxcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcInJhZGlvXFxcIiBuYW1lPVxcXCJleGFtcGxlUmFkaW9zXFxcIiBpZD1cXFwiZXhhbXBsZVJhZGlvczNcXFwiIHZhbHVlPVxcXCJvcHRpb24zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWxhYmVsXFxcIiBmb3I9XFxcImV4YW1wbGVSYWRpb3MzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxiPlNVUEVSTklOVEVORE88L2I+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jaGVjay1pbnB1dFxcXCIgdHlwZT1cXFwicmFkaW9cXFwiIG5hbWU9XFxcImV4YW1wbGVSYWRpb3NcXFwiIGlkPVxcXCJleGFtcGxlUmFkaW9zM1xcXCIgdmFsdWU9XFxcIm9wdGlvbjNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY2hlY2stbGFiZWxcXFwiIGZvcj1cXFwiZXhhbXBsZVJhZGlvczNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGI+TkVTPC9iPlxcclxcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcInJhZGlvXFxcIiBuYW1lPVxcXCJleGFtcGxlUmFkaW9zXFxcIiBpZD1cXFwiZXhhbXBsZVJhZGlvczFcXFwiIHZhbHVlPVxcXCJvcHRpb24xXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWxhYmVsXFxcIiBmb3I9XFxcImV4YW1wbGVSYWRpb3MxXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxiPlBTMTwvYj5cXHJcXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNoZWNrLWlucHV0XFxcIiB0eXBlPVxcXCJyYWRpb1xcXCIgbmFtZT1cXFwiZXhhbXBsZVJhZGlvc1xcXCIgaWQ9XFxcImV4YW1wbGVSYWRpb3MyXFxcIiB2YWx1ZT1cXFwib3B0aW9uMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJleGFtcGxlUmFkaW9zMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8Yj5QUzI8L2I+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jaGVjay1pbnB1dFxcXCIgdHlwZT1cXFwicmFkaW9cXFwiIG5hbWU9XFxcImV4YW1wbGVSYWRpb3NcXFwiIGlkPVxcXCJleGFtcGxlUmFkaW9zM1xcXCIgdmFsdWU9XFxcIm9wdGlvbjNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY2hlY2stbGFiZWxcXFwiIGZvcj1cXFwiZXhhbXBsZVJhZGlvczNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGI+UFMzPC9iPlxcclxcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcInJhZGlvXFxcIiBuYW1lPVxcXCJleGFtcGxlUmFkaW9zXFxcIiBpZD1cXFwiZXhhbXBsZVJhZGlvczFcXFwiIHZhbHVlPVxcXCJvcHRpb24xXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWxhYmVsXFxcIiBmb3I9XFxcImV4YW1wbGVSYWRpb3MxXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxiPlBTMTwvYj5cXHJcXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNoZWNrLWlucHV0XFxcIiB0eXBlPVxcXCJyYWRpb1xcXCIgbmFtZT1cXFwiZXhhbXBsZVJhZGlvc1xcXCIgaWQ9XFxcImV4YW1wbGVSYWRpb3MyXFxcIiB2YWx1ZT1cXFwib3B0aW9uMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJleGFtcGxlUmFkaW9zMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8Yj5QUzI8L2I+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jaGVjay1pbnB1dFxcXCIgdHlwZT1cXFwicmFkaW9cXFwiIG5hbWU9XFxcImV4YW1wbGVSYWRpb3NcXFwiIGlkPVxcXCJleGFtcGxlUmFkaW9zM1xcXCIgdmFsdWU9XFxcIm9wdGlvbjNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY2hlY2stbGFiZWxcXFwiIGZvcj1cXFwiZXhhbXBsZVJhZGlvczNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGI+UFMzPC9iPlxcclxcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcInJhZGlvXFxcIiBuYW1lPVxcXCJleGFtcGxlUmFkaW9zXFxcIiBpZD1cXFwiZXhhbXBsZVJhZGlvczFcXFwiIHZhbHVlPVxcXCJvcHRpb24xXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWxhYmVsXFxcIiBmb3I9XFxcImV4YW1wbGVSYWRpb3MxXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxiPlBTMTwvYj5cXHJcXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNoZWNrLWlucHV0XFxcIiB0eXBlPVxcXCJyYWRpb1xcXCIgbmFtZT1cXFwiZXhhbXBsZVJhZGlvc1xcXCIgaWQ9XFxcImV4YW1wbGVSYWRpb3MyXFxcIiB2YWx1ZT1cXFwib3B0aW9uMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJleGFtcGxlUmFkaW9zMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8Yj5QUzI8L2I+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jaGVjay1pbnB1dFxcXCIgdHlwZT1cXFwicmFkaW9cXFwiIG5hbWU9XFxcImV4YW1wbGVSYWRpb3NcXFwiIGlkPVxcXCJleGFtcGxlUmFkaW9zM1xcXCIgdmFsdWU9XFxcIm9wdGlvbjNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY2hlY2stbGFiZWxcXFwiIGZvcj1cXFwiZXhhbXBsZVJhZGlvczNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGI+UFMzPC9iPlxcclxcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcInJhZGlvXFxcIiBuYW1lPVxcXCJleGFtcGxlUmFkaW9zXFxcIiBpZD1cXFwiZXhhbXBsZVJhZGlvczFcXFwiIHZhbHVlPVxcXCJvcHRpb24xXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWxhYmVsXFxcIiBmb3I9XFxcImV4YW1wbGVSYWRpb3MxXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxiPlBTNDwvYj5cXHJcXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNoZWNrLWlucHV0XFxcIiB0eXBlPVxcXCJyYWRpb1xcXCIgbmFtZT1cXFwiZXhhbXBsZVJhZGlvc1xcXCIgaWQ9XFxcImV4YW1wbGVSYWRpb3MyXFxcIiB2YWx1ZT1cXFwib3B0aW9uMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJleGFtcGxlUmFkaW9zMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8Yj5QUzU8L2I+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jaGVjay1pbnB1dFxcXCIgdHlwZT1cXFwicmFkaW9cXFwiIG5hbWU9XFxcImV4YW1wbGVSYWRpb3NcXFwiIGlkPVxcXCJleGFtcGxlUmFkaW9zM1xcXCIgdmFsdWU9XFxcIm9wdGlvbjNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY2hlY2stbGFiZWxcXFwiIGZvcj1cXFwiZXhhbXBsZVJhZGlvczNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGI+R0FNRUJPWUNPTE9SPC9iPlxcclxcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcInJhZGlvXFxcIiBuYW1lPVxcXCJleGFtcGxlUmFkaW9zXFxcIiBpZD1cXFwiZXhhbXBsZVJhZGlvczNcXFwiIHZhbHVlPVxcXCJvcHRpb24zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWxhYmVsXFxcIiBmb3I9XFxcImV4YW1wbGVSYWRpb3MzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxiPlNVUEVSTklOVEVORE88L2I+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jaGVjay1pbnB1dFxcXCIgdHlwZT1cXFwicmFkaW9cXFwiIG5hbWU9XFxcImV4YW1wbGVSYWRpb3NcXFwiIGlkPVxcXCJleGFtcGxlUmFkaW9zM1xcXCIgdmFsdWU9XFxcIm9wdGlvbjNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY2hlY2stbGFiZWxcXFwiIGZvcj1cXFwiZXhhbXBsZVJhZGlvczNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGI+TkVTPC9iPlxcclxcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcInJhZGlvXFxcIiBuYW1lPVxcXCJleGFtcGxlUmFkaW9zXFxcIiBpZD1cXFwiZXhhbXBsZVJhZGlvczFcXFwiIHZhbHVlPVxcXCJvcHRpb24xXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWxhYmVsXFxcIiBmb3I9XFxcImV4YW1wbGVSYWRpb3MxXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxiPlBTMTwvYj5cXHJcXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNoZWNrLWlucHV0XFxcIiB0eXBlPVxcXCJyYWRpb1xcXCIgbmFtZT1cXFwiZXhhbXBsZVJhZGlvc1xcXCIgaWQ9XFxcImV4YW1wbGVSYWRpb3MyXFxcIiB2YWx1ZT1cXFwib3B0aW9uMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJleGFtcGxlUmFkaW9zMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8Yj5QUzI8L2I+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jaGVjay1pbnB1dFxcXCIgdHlwZT1cXFwicmFkaW9cXFwiIG5hbWU9XFxcImV4YW1wbGVSYWRpb3NcXFwiIGlkPVxcXCJleGFtcGxlUmFkaW9zM1xcXCIgdmFsdWU9XFxcIm9wdGlvbjNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY2hlY2stbGFiZWxcXFwiIGZvcj1cXFwiZXhhbXBsZVJhZGlvczNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGI+UFMzPC9iPlxcclxcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcInJhZGlvXFxcIiBuYW1lPVxcXCJleGFtcGxlUmFkaW9zXFxcIiBpZD1cXFwiZXhhbXBsZVJhZGlvczFcXFwiIHZhbHVlPVxcXCJvcHRpb24xXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWxhYmVsXFxcIiBmb3I9XFxcImV4YW1wbGVSYWRpb3MxXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxiPlBTMTwvYj5cXHJcXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNoZWNrLWlucHV0XFxcIiB0eXBlPVxcXCJyYWRpb1xcXCIgbmFtZT1cXFwiZXhhbXBsZVJhZGlvc1xcXCIgaWQ9XFxcImV4YW1wbGVSYWRpb3MyXFxcIiB2YWx1ZT1cXFwib3B0aW9uMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJleGFtcGxlUmFkaW9zMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8Yj5QUzI8L2I+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jaGVjay1pbnB1dFxcXCIgdHlwZT1cXFwicmFkaW9cXFwiIG5hbWU9XFxcImV4YW1wbGVSYWRpb3NcXFwiIGlkPVxcXCJleGFtcGxlUmFkaW9zM1xcXCIgdmFsdWU9XFxcIm9wdGlvbjNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY2hlY2stbGFiZWxcXFwiIGZvcj1cXFwiZXhhbXBsZVJhZGlvczNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGI+UFMzPC9iPlxcclxcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcInJhZGlvXFxcIiBuYW1lPVxcXCJleGFtcGxlUmFkaW9zXFxcIiBpZD1cXFwiZXhhbXBsZVJhZGlvczFcXFwiIHZhbHVlPVxcXCJvcHRpb24xXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWxhYmVsXFxcIiBmb3I9XFxcImV4YW1wbGVSYWRpb3MxXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxiPlBTMTwvYj5cXHJcXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNoZWNrLWlucHV0XFxcIiB0eXBlPVxcXCJyYWRpb1xcXCIgbmFtZT1cXFwiZXhhbXBsZVJhZGlvc1xcXCIgaWQ9XFxcImV4YW1wbGVSYWRpb3MyXFxcIiB2YWx1ZT1cXFwib3B0aW9uMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJleGFtcGxlUmFkaW9zMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8Yj5QUzI8L2I+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jaGVjay1pbnB1dFxcXCIgdHlwZT1cXFwicmFkaW9cXFwiIG5hbWU9XFxcImV4YW1wbGVSYWRpb3NcXFwiIGlkPVxcXCJleGFtcGxlUmFkaW9zM1xcXCIgdmFsdWU9XFxcIm9wdGlvbjNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY2hlY2stbGFiZWxcXFwiIGZvcj1cXFwiZXhhbXBsZVJhZGlvczNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGI+UFMzPC9iPlxcclxcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcInJhZGlvXFxcIiBuYW1lPVxcXCJleGFtcGxlUmFkaW9zXFxcIiBpZD1cXFwiZXhhbXBsZVJhZGlvczFcXFwiIHZhbHVlPVxcXCJvcHRpb24xXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWxhYmVsXFxcIiBmb3I9XFxcImV4YW1wbGVSYWRpb3MxXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxiPlBTNDwvYj5cXHJcXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNoZWNrLWlucHV0XFxcIiB0eXBlPVxcXCJyYWRpb1xcXCIgbmFtZT1cXFwiZXhhbXBsZVJhZGlvc1xcXCIgaWQ9XFxcImV4YW1wbGVSYWRpb3MyXFxcIiB2YWx1ZT1cXFwib3B0aW9uMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJleGFtcGxlUmFkaW9zMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8Yj5QUzU8L2I+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jaGVjay1pbnB1dFxcXCIgdHlwZT1cXFwicmFkaW9cXFwiIG5hbWU9XFxcImV4YW1wbGVSYWRpb3NcXFwiIGlkPVxcXCJleGFtcGxlUmFkaW9zM1xcXCIgdmFsdWU9XFxcIm9wdGlvbjNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY2hlY2stbGFiZWxcXFwiIGZvcj1cXFwiZXhhbXBsZVJhZGlvczNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGI+R0FNRUJPWUNPTE9SPC9iPlxcclxcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcInJhZGlvXFxcIiBuYW1lPVxcXCJleGFtcGxlUmFkaW9zXFxcIiBpZD1cXFwiZXhhbXBsZVJhZGlvczNcXFwiIHZhbHVlPVxcXCJvcHRpb24zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWxhYmVsXFxcIiBmb3I9XFxcImV4YW1wbGVSYWRpb3MzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxiPlNVUEVSTklOVEVORE88L2I+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jaGVjay1pbnB1dFxcXCIgdHlwZT1cXFwicmFkaW9cXFwiIG5hbWU9XFxcImV4YW1wbGVSYWRpb3NcXFwiIGlkPVxcXCJleGFtcGxlUmFkaW9zM1xcXCIgdmFsdWU9XFxcIm9wdGlvbjNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY2hlY2stbGFiZWxcXFwiIGZvcj1cXFwiZXhhbXBsZVJhZGlvczNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGI+TkVTPC9iPlxcclxcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcIm5ld1ZpZGVvR2FtZUJ0blxcXCIgY2xhc3M9XFxcImJ0biBteS00IGJ1dHRvbi1ob3ZlclxcXCI+PGI+QWdnaXVuZ2k8L2I+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuPC9kaXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IHN0eWxlPVxcXCJkaXNwbGF5OiBmbGV4O1xcXCI+XFxyXFxuXFxyXFxuICAgIDxzcGFuIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IDQwcHhcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBpZD1cXFwic2VsZWN0QWxsXFxcIj5WaXN1YWxpenphIHR1dHRpIGkgVmlkZW9nYW1lPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9zcGFuPiA8IS0tZnVuemlvbmUgY2hlIHByZW5kZSB0dXR0aSBnbGkgYW5udW5jaSBlIGxpIHNjaGlhZmZhIG5lbCBjb250ZW51dG8gYW5udW5jaS0tPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiA0MHB4XFxcIiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnkgZHJvcGRvd24tdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgVmlzdWFsaXp6YSBwZXIgR2VuZXJlXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx1bCBpZD1cXFwiZ2VucmVzXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVxcXCJQTEFURk9STVxcXCI+PGJ1dHRvbiBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj5QTEFURk9STTwvYnV0dG9uPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9XFxcIm1hcmdpbi1yaWdodDogNDBweFxcXCIgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnkgZHJvcGRvd24tdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBWaXN1YWxpenphIHBlciBBbm5vXFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8dWwgaWQ9XFxcInllYXJzXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSBpZD1cXFwiMTk4NVxcXCI+PGJ1dHRvbiBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj4xOTg1PC9idXR0b24+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgIDxkaXYgc3R5bGU9XFxcInZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxcIiBjbGFzcz1cXFwiY29sLW1kLTMgbXgtYXV0b1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgYm9yZGVyLWVuZC0xIGJvcmRlciByb3VuZGVkLXBpbGxcXFwiIHR5cGU9XFxcInNlYXJjaFxcXCIgcGxhY2Vob2xkZXI9XFxcImNlcmNhXFxcIiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OjIwcHhcXFwiIGlkPVxcXCJzZWFyY2hUaXRsZVxcXCI+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWFwcGVuZFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cXFwic2VhcmNoQnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBiZy13aGl0ZSBib3JkZXItYm90dG9tLTEgYm9yZGVyIHJvdW5kZWQtcGlsbCBtcy1uNVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIHRyb3ZhXFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXNlYXJjaFxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICA8c3BhbiA+XFxyXFxuICAgICAgICA8YnV0dG9uICBpZD1cXFwiYWRkVmlkZW9nYW1lXFxcIiBzdHlsZT1cXFwiY29sb3I6d2hpdGVcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiIGhpZGRlbj5cXHJcXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi9pbWcvcGx1cy5wbmdcXFwiIGFsdD1cXFwicGx1c1xcXCIgc3R5bGU9XFxcIndpZHRoOjI1cHhcXFwiPlxcclxcbiAgICAgICAgICAgIEluc2VyaXNjaSBWaWRlb2dhbWVcXHJcXG4gICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgIDwvc3Bhbj4gICAgICBcXHJcXG4gICAgICAgICAgICAgXFxyXFxuXFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdj5cXHJcXG4gICAgPGRpdiAgaWQ9XFxcIlZpZGVvZ2FtZUNvbnRlbnRcXFwiIGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcblxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2PlxcclxcbiAgICA8dWwgaWQ9XFxcInBhZ2VzVlxcXCIgY2xhc3M9XFxcInBhZ2luYXRpb24gcGFnaW5hdGlvbi1zbSBteS0yXFxcIj5cXHJcXG4gICAgICAgIFxcclxcbiAgICA8L3VsPlxcclxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiICAgICA8aW1nICBpZD1cXFwiYmFjay1nYW1lc1xcXCIgIGNsYXNzPVxcXCJtdC00IGJ1dHRvbmhvdmVyXFxcIiB3aWR0aD0xMjAgc3JjPVxcXCIuL2ltZy9iYWNrLnBuZ1xcXCI+XFxyXFxuXFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwicm93XFxcIiA+XFxyXFxuICAgIDxkaXYgaWQ9IFxcXCJnYW1lVGl0bGVcXFwiIGNsYXNzPVxcXCJjb2wtMTIgdGV4dC1jZW50ZXJcXFwiPlxcclxcblxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgPGRpdiBpZD1cXFwiZ2FtZUltYWdlXFxcIiBjbGFzcz1cXFwiY29sLTYgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICBcXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBpZD1cXFwiZ2FtZUluZm9cXFwiIGNsYXNzPVxcXCJjb2wtNiB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgIFxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICBcXHJcXG4gICAgICAgIDxkaXYgaWQ9XFxcImdhbWVJbmZvXFxcIiBjbGFzcz1cXFwiY29sLTYgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICBcXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICBcXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG4gICAgXFxyXFxuXCI7IiwiaW1wb3J0IGFubnVuY2kgZnJvbSAnLi9hbm51bmNpLmh0bWwnXHJcblxyXG5pbXBvcnQgY3JlYUFubnVuY2lvIGZyb20gJy4uL2NyZWFBbm51bmNpby9jcmVhQW5udW5jaW8uaHRtbCdcclxuaW1wb3J0IGluc2VydGlvbiBmcm9tICcuLi9pbnRlcmZhY2VzL2luc2VydGlvbic7XHJcbmltcG9ydCBleHBhbmRJbnNlcnRpb24gZnJvbSAnLi9hbm51bmNpbydcclxuaW1wb3J0IGNyZWF0ZUluc2VydGlvblBhZ2UgZnJvbSAnLi4vY3JlYUFubnVuY2lvL2NyZWFBbm51bmNpbydcclxuXHJcbmxldCBsaXN0OiBpbnNlcnRpb25bXSA9IFtdO1xyXG5sZXQgdmlldzogbnVtYmVyID0gNlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhZ2UoKSB7ICAgICAgIC8qSW5pemlhbGl6emEgdHV0dG8gY2nDsiBjaGUgc2VydmUgYWxsYSBwYWdpbmEgcGVyIGZ1bnppb25hcmUgKi9cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0QWxsXCIpLm9uY2xpY2sgPSBzZWFyY2hCeUFsbDtcclxuICAgIGFzc2lnbkZpbHRlcnMoKTtcclxuICAgIGxldCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEluc2VydGlvbjJcIik7XHJcbiAgICBidG4ub25jbGljaz0oKT0+e1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUw9Y3JlYUFubnVuY2lvO1xyXG4gICAgICAgIGNyZWF0ZUluc2VydGlvblBhZ2UoKTtcclxuICAgIH1cclxuICAgIC8vY3JlYXRlSW5zZXJ0aW9uKCk7XHJcbiAgICBnZXRBbGxJbnNlcnRpb25zKCk7XHJcbiAgICBjcmVhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICBzaG93UmVzdWx0cygxKTtcclxuXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZWFyY2hCeUFsbCgpIHsgICAgICAgICAgICAgLypMYSBmdW56aW9uYSBkZWwgYm90dG9uZSBjaGUgY2VyY2EgdHV0dGkgZ2xpIGFubnVuY2kgc2VuemEgZmlsdHJpKi9cclxuICAgIGdldEFsbEluc2VydGlvbnMoKTtcclxuICAgIGNyZWF0ZVBhZ2luYXRpb24oKTtcclxuICAgIHNob3dSZXN1bHRzKDEpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gYXNzaWduRmlsdGVycygpIHsgICAgICAgICAgICAgLypBc3NlZ25hIGxlIGZ1bnppb25pIGFpIHB1bHNhbnRpIG5lbGxlIGRyb3BEb3duTGlzdCBkYSBwcm92YXJlKi9cclxuICAgIGxldCBnZW5lcmkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdlbnJlc1wiKS5jaGlsZHJlblxyXG4gICAgZm9yIChsZXQgZyBvZiBnZW5lcmkpIHtcclxuICAgICAgICAoZyBhcyBIVE1MQnV0dG9uRWxlbWVudCkub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2VhcmNoQnlHZW5yZShnLmlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgYW5uaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieWVhcnNcIikuY2hpbGRyZW5cclxuICAgIGZvciAobGV0IGEgb2YgYW5uaSkge1xyXG4gICAgICAgIChhIGFzIEhUTUxCdXR0b25FbGVtZW50KS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzZWFyY2hCeVllYXIoTnVtYmVyKChhIGFzIEhUTUxCdXR0b25FbGVtZW50KS5pZCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgc2VhcmNoVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFRpdGxlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBzZWFyY2hUaXRsZS5vbmtleWRvd24gPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIHNlYXJjaEJ5VGl0bGUoc2VhcmNoVGl0bGUudmFsdWUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQnV0dG9uXCIpO1xyXG4gICAgc2VhcmNoQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc2VhcmNoQnlUaXRsZShzZWFyY2hUaXRsZS52YWx1ZSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hCeVRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcclxuICAgIGxldCBmaWx0ZXJlZExpc3QgPSBbXVxyXG4gICAgZm9yIChsZXQgZWxlbWVudCBvZiBsaXN0KSB7XHJcbiAgICAgICAgbGV0IHRpdG9sbyA9IGVsZW1lbnQudGl0bGU7XHJcbiAgICAgICAgbGV0IGdhbWVOYW1lID0gZWxlbWVudC50cmFkZUdhbWUubmFtZVxyXG4gICAgICAgIGlmICgodGl0b2xvLnRvVXBwZXJDYXNlKCkuaW5jbHVkZXModGl0bGUudG9VcHBlckNhc2UoKSkpXHJcbiAgICAgICAgICAgIHx8IChnYW1lTmFtZS50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKHRpdGxlLnRvVXBwZXJDYXNlKCkpKSkge1xyXG4gICAgICAgICAgICBmaWx0ZXJlZExpc3QucHVzaChlbGVtZW50KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxpc3QgPSBbXTtcclxuICAgIGxpc3QgPSBmaWx0ZXJlZExpc3RcclxuICAgIGNyZWF0ZVBhZ2luYXRpb24oKTtcclxuICAgIHNob3dSZXN1bHRzKDEpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2VhcmNoQnlHZW5yZShnZW5yZTogU3RyaW5nKSB7XHJcbiAgICBjb25zb2xlLmxvZyhnZW5yZSk7XHJcbiAgICBsZXQgZmlsdGVyZWRMaXN0ID0gW11cclxuICAgIGZvciAobGV0IGVsZW1lbnQgb2YgbGlzdCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC50cmFkZUdhbWUuZ2VucmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudHJhZGVHYW1lLmdlbnJlW2ldLmdlbnJlID09IGdlbnJlKSB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZExpc3QucHVzaChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGk9ZWxlbWVudC50cmFkZUdhbWUuZ2VucmUubGVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGlzdCA9IFtdO1xyXG4gICAgbGlzdCA9IGZpbHRlcmVkTGlzdFxyXG4gICAgY3JlYXRlUGFnaW5hdGlvbigpO1xyXG4gICAgc2hvd1Jlc3VsdHMoMSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlYXJjaEJ5WWVhcih5ZWFyOiBudW1iZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKHllYXIpO1xyXG4gICAgbGV0IGZpbHRlcmVkTGlzdCA9IFtdO1xyXG4gICAgZm9yIChsZXQgZWxlbWVudCBvZiBsaXN0KSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQudHJhZGVHYW1lLnllYXIgPT0geWVhcikge1xyXG4gICAgICAgICAgICBmaWx0ZXJlZExpc3QucHVzaChlbGVtZW50KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxpc3QgPSBbXTtcclxuICAgIGxpc3QgPSBmaWx0ZXJlZExpc3RcclxuICAgIGNyZWF0ZVBhZ2luYXRpb24oKTtcclxuICAgIHNob3dSZXN1bHRzKDEpO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEFsbEluc2VydGlvbnMoKSB7IC8qIFF1ZXN0YSDDqCBzb2xvIHVuYSBwcm92YSwgc2NvbW1lbnRhcmUgbGEgZmV0Y2ggcGnDuSBnacO5ICovXHJcbiAgICBsaXN0ID0gW107XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHaW9jbzEgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL2kuZXRzeXN0YXRpYy5jb20vNjI3NzgwNC9yL2lsLzdkZjAwZS82OTc1NDYzNDAvaWxfMTE0MHhOLjY5NzU0NjM0MF9maXZzLmpwZ1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHaW9jbzIgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL3d3dy5tb2J5Z2FtZXMuY29tL2ltYWdlcy9jb3ZlcnMvbC8xNDQ0NS10aGUtbGVnZW5kLW9mLXplbGRhLW5lcy1mcm9udC1jb3Zlci5qcGdcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlR2lvY28zID0ge1xyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvaXQvYi9iMy9Qb2slQzMlQTltb25fR2lhbGxvLnBuZ1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHaW9jbzQgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL21ldGFsZ2Vhci5mYW5kb20uY29tL2l0L3dpa2kvTWV0YWxfR2Vhcj9maWxlPU1ldGFsX0dlYXIuanBnXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdhbGxlcnkxID0ge1xyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvaXQvdGh1bWIvNy83Ny9QaWthY2h1LnBuZy8xMDI0cHgtUGlrYWNodS5wbmdcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlR2FsbGVyeTIgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL3d3dy5wbmdtYXJ0LmNvbS9maWxlcy8xMS9Gcm9nLU1lbWUtUE5HLUhELnBuZ1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHYWxsZXJ5MyA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vbWVkaWEubGljZG4uY29tL2Rtcy9pbWFnZS9ENTYzNUFRSHczRTV5WXlYVEx3L3Byb2ZpbGUtZnJhbWVkcGhvdG8tc2hyaW5rXzgwMF84MDAvMC8xNjQ0NTE4OTE4NjA2P2U9MTY3NTYyMDAwMCZ2PWJldGEmdD14MVJuWHFXc0RXQU9WUVVYR0Z1ak1vZFhaaGlHVVFKdTBhNkZBc1pOM0xvXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnaW9jbzEgPSB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmFtZTogXCJTdXBlck1hcmlvXCIsXHJcbiAgICAgICAgZ2VucmU6IFt7Z2VucmU6IFwiUExBVEZPUk1cIn1dLFxyXG4gICAgICAgIHllYXI6IDE5ODUsXHJcbiAgICAgICAgY29uc29sZToge2NvbnNvbGU6IFwiTkVTXCJ9LFxyXG4gICAgICAgIGNvdmVyOiBpbWFnZUdpb2NvMVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdpb2NvMiA9IHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBuYW1lOiBcIlRoZSBMZWdlbmQgb2YgWmVsZGFcIixcclxuICAgICAgICBnZW5yZTogW3tnZW5yZTogXCJBVlZFTlRVUkFcIn1dLFxyXG4gICAgICAgIHllYXI6IDE5ODYsXHJcbiAgICAgICAgY29uc29sZToge2NvbnNvbGU6IFwiTkVTXCJ9LFxyXG4gICAgICAgIGNvdmVyOiBpbWFnZUdpb2NvMlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdpb2NvMyA9IHtcclxuICAgICAgICBpZDogMyxcclxuICAgICAgICBuYW1lOiBcIlBva2Vtb24gR2lhbGxvXCIsXHJcbiAgICAgICAgZ2VucmU6IFt7Z2VucmU6IFwiR0RSXCJ9XSxcclxuICAgICAgICB5ZWFyOiAxOTk4LFxyXG4gICAgICAgIGNvbnNvbGU6IHtjb25zb2xlOiBcIkdBTUVfQk9ZX0NPTE9SXCJ9LFxyXG4gICAgICAgIGNvdmVyOiBpbWFnZUdpb2NvM1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdpb2NvNCA9IHtcclxuICAgICAgICBpZDogNCxcclxuICAgICAgICBuYW1lOiBcIk1ldGFsIEdlYXJcIixcclxuICAgICAgICBnZW5yZTogW3tnZW5yZTogXCJTVEVBTFRIXCJ9XSxcclxuICAgICAgICB5ZWFyOiAxOTg3LFxyXG4gICAgICAgIGNvbnNvbGU6IHtjb25zb2xlOiBcIk5FU1wifSxcclxuICAgICAgICBjb3ZlcjogaW1hZ2VHaW9jbzRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwdWJsaXNoZXJHaW9jbzEgPSB7XHJcbiAgICAgICAgdXNlcklkOiAxLFxyXG4gICAgICAgIHVzZXJuYW1lOiBcIlBpZXJvYWZmb25kb1wiLFxyXG4gICAgICAgIG5hbWU6IFwiUGllcmlub1wiLFxyXG4gICAgICAgIHN1cm5hbWU6IFwiQ2ljY2lub1wiLFxyXG4gICAgICAgIGVtYWlsOiBcInBpZXJpbm9jdW9yaWNpbm9AYW1vcmluby5jb21cIixcclxuICAgICAgICByYXRpbmc6IDY2NixcclxuICAgICAgICB2aWRlb2dhbWVzOiBbZ2lvY28xXVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGluc2VydGlvbjE6IGluc2VydGlvbiA9IHtcclxuICAgICAgICBhcHByb3ZlZDogdHJ1ZSxcclxuICAgICAgICB0aXRsZTogXCJTY2FtYmlvIFN1cGVyTWFyaW9cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTY2FtYmlvIHN1cGVybWFyaW8geGvDqCBtaSBzb25vIHNla2thdG8gYSBnaW9jYXJjaVwiLFxyXG4gICAgICAgIHB1Ymxpc2hlcjogcHVibGlzaGVyR2lvY28xLFxyXG4gICAgICAgIGdhbGxlcnk6IFtpbWFnZUdhbGxlcnkxLCBpbWFnZUdhbGxlcnkyLCBpbWFnZUdhbGxlcnkzXSxcclxuICAgICAgICB0cmFkZUdhbWU6IGdpb2NvMSxcclxuICAgICAgICB3aXNoTGlzdDogW2dpb2NvMiwgZ2lvY28zLCBnaW9jbzRdLFxyXG4gICAgICAgIG91dGNvbWU6IFwiV0lQXCIsXHJcbiAgICAgICAgcHVibGljYXRpb25EYXRlOiBcIjI5LTAxLTIwMjNcIlxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI3OyBpKyspIHtcclxuICAgICAgICBpZiAoaSAhPSAxNykge1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goaW5zZXJ0aW9uMSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goaW5zZXJ0aW9uMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLypRVUVTVE8gRScgTEEgRlVOWklPTkUgR0lVU1RBIE5PTiBGQU1PIENIRSBTQkFHTElBVEUhICovXHJcblxyXG4gICAgLypGZXRjaCBhIGJhY2tlbmQgY29uIHR1dHRpIGdsaSBhbm51bmNpLCBhZ2dpb3JuYSBsYSBsaXN0YSBsaXN0Ki9cclxuICAgIC8vIGxpc3Q9W107XHJcbiAgICAvLyBmZXRjaCgnL1RpcG9Bbm51bmNpQ2hlbmVzbycpXHJcbiAgICAvLyAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC8vIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAvLyAgICAgZm9yKGxldCBkIG9mIGRhdGEpe1xyXG4gICAgLy8gICAgICAgICBsaXN0LnB1c2goZCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSk7XHJcbn1cclxuXHJcbi8qZGEgcXVpIGluIHBvaSBsZSBmdW56aW9uaSBzZXJ2b25vIGEgXHJcbmNyZWFyZSBsYSBwYWdpbmEgdW5hIHZvbHRhIGNsaWNjYXRvICBcclxuc3VsIGJvdHRvbmUgYW5udW5jaSBlIGEgcmljYXJpY2FybGUqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhZ2luYXRpb24oKSB7XHJcbiAgICBsZXQgc2l6ZTogbnVtYmVyID0gbGlzdC5sZW5ndGhcclxuICAgIGxldCB0YWJzOiBudW1iZXIgPSBNYXRoLmNlaWwoc2l6ZSAvIHZpZXcpO1xyXG4gICAgbGV0IHBhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlc1wiKTtcclxuICAgIHBhZ2VzLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0YWJzOyBpKyspIHtcclxuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgaWYgKGkgPT0gMSkge1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbSBhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiLCBcInBhZ2VcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWl0ZW1cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtbGlua1wiKTtcclxuICAgICAgICBidG4ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGFsbExpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlc1wiKS5jaGlsZHJlbjtcclxuICAgICAgICAgICAgZm9yIChsZXQgb25lTGkgb2YgYWxsTGkpIHtcclxuICAgICAgICAgICAgICAgIG9uZUxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgb25lTGkucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtIGFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIsIFwicGFnZVwiKTtcclxuICAgICAgICAgICAgc2hvd1Jlc3VsdHMoaSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBidG4uaW5uZXJIVE1MID0gXCJcIiArIChpKTtcclxuICAgICAgICBsaS5hcHBlbmRDaGlsZChidG4pO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZXNcIikuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93UmVzdWx0cyhpOiBudW1iZXIpIHtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnRpb25Db250ZW50XCIpO1xyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbGV0IHN0YXJ0ID0gKGkgLSAxKSAqIHZpZXc7XHJcbiAgICBsZXQgc3RvcCA9IChpICogdmlldykgLSAxO1xyXG4gICAgZm9yIChzdGFydDsgc3RhcnQgPD0gc3RvcDsgc3RhcnQrKykge1xyXG4gICAgICAgIGlmIChzdGFydCA+PSBsaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWxpc3Rbc3RhcnRdLmFwcHJvdmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGxldCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29sLTQgdGV4dC1jZW50ZXJcIik7XHJcbiAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpXCIpO1xyXG4gICAgICAgIGNvbC5vbm1vdXNlb3Zlcj0oKT0+e1xyXG4gICAgICAgICAgICBjb2wuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNilcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbC5vbm1vdXNlb3V0PSgpPT57XHJcbiAgICAgICAgICAgIGNvbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBleHBhbmRJbnNlcnRpb24obGlzdFtzdGFydF0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgICAgIGxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xyXG4gICAgICAgIGxldCBnYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xyXG4gICAgICAgIGxldCBnZW5yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcclxuICAgICAgICBsZXQgeWVhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcclxuICAgICAgICBsZXQgY29uc29sZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcclxuICAgICAgICBsZXQgdHJhZGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xyXG4gICAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xyXG4gICAgICAgIGltYWdlLnNyYyA9IGxpc3Rbc3RhcnRdLnRyYWRlR2FtZS5jb3Zlci5saW5rO1xyXG4gICAgICAgIGltYWdlLndpZHRoID0gMjAwO1xyXG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9IGxpc3Rbc3RhcnRdLnRpdGxlO1xyXG4gICAgICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IGxpc3Rbc3RhcnRdLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgIGdhbWUuaW5uZXJIVE1MID0gbGlzdFtzdGFydF0udHJhZGVHYW1lLm5hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yKGxldCBpPSAwOyBpPGxpc3Rbc3RhcnRdLnRyYWRlR2FtZS5nZW5yZS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGdlbnJlLmlubmVySFRNTCArPSBsaXN0W3N0YXJ0XS50cmFkZUdhbWUuZ2VucmVbaV0uZ2VucmUgKyBcIiBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgeWVhci5pbm5lckhUTUwgPSBcIlwiICsgbGlzdFtzdGFydF0udHJhZGVHYW1lLnllYXI7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuaW5uZXJIVE1MID0gbGlzdFtzdGFydF0udHJhZGVHYW1lLmNvbnNvbGUuY29uc29sZTtcclxuXHJcbiAgICAgICAgdHJhZGVzLmlubmVySFRNTCA9IFwiQWNjZXR0ZXJlaSBTY2FtYmlvIGNvbjogXCIgKyBsaXN0W3N0YXJ0XS53aXNoTGlzdFswXS5uYW1lO1xyXG4gICAgICAgIGRhdGUuaW5uZXJIVE1MPSBsaXN0W3N0YXJ0XS5wdWJsaWNhdGlvbkRhdGU7XHJcbiAgICAgICAgY29sLmFwcGVuZCh0aXRsZSxpbWFnZSxkZXNjcmlwdGlvbixnYW1lLGdlbnJlLHllYXIsY29uc29sZSx0cmFkZXMsZGF0ZSlcclxuICAgICAgICBjb250ZW50LmFwcGVuZChjb2wpO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGFnZVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IGluc2VydGlvbiBmcm9tICcuLi9pbnRlcmZhY2VzL2luc2VydGlvbic7XHJcbmltcG9ydCBhbm51bmNpbyBmcm9tICcuL2FubnVuY2lvLmh0bWwnXHJcbmltcG9ydCBjcmVhdGVQYWdlIGZyb20gJy4vYW5udW5jaSc7XHJcbmltcG9ydCBhbm51bmNpIGZyb20gJy4vYW5udW5jaS5odG1sJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV4cGFuZEluc2VydGlvbihpbnNlcnRpb246IGluc2VydGlvbikge1xyXG5cclxuICAgIC8qSW1wb3N0byBsYSBwYWdpbmEgcHJpbmNpcGFsZSBjb24gaWwgdGVtcGxhdGUgZGVsIHNpbmdvbG8gYW5udW5jaW8gKi9cclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xyXG4gICAgbWFpbi5pbm5lckhUTUwgPSBhbm51bmNpbztcclxuXHJcbiAgICBcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dhbWVzXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGFubnVuY2k7XHJcbiAgICAgICAgY3JlYXRlUGFnZSgpO1xyXG4gICAgfVxyXG4gICAgbGV0IGJhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tcIilcclxuICAgIC8vYmFjay5hcHBlbmQoYnV0dG9uKTtcclxuXHJcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBpbnNlcnRpb24udGl0bGU7XHJcbiAgICBiYWNrLmFwcGVuZCh0aXRsZSk7XHJcblxyXG5cclxuXHJcbiAgICAvKkltcG9zdG8gaWwgY2Fyb3NlbGxvIGRlbGxlIGltbWFnaW5pIHV0ZW50ZSAqL1xyXG4gICAgbGV0IGluZGljYXRvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5kaWNhdG9yXCIpXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluc2VydGlvbi5nYWxsZXJ5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImRhdGEtYnMtdGFyZ2V0XCIsIFwiI2ltYWdlU2xpZGVyXCIpO1xyXG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLXNsaWRlLXRvXCIsIFwiXCIgKyBpKTtcclxuICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIFwiU2xpZGUgXCIgKyAoaSArIDEpKTtcclxuICAgICAgICBpbmRpY2F0b3IuYXBwZW5kKGJ0bik7XHJcbiAgICB9XHJcbiAgICBsZXQgaW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlubmVyXCIpXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnNlcnRpb24uZ2FsbGVyeS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2Fyb3VzZWwtaXRlbSBhY3RpdmVcIilcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJvdXNlbC1pdGVtXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGltZy5zcmMgPSBpbnNlcnRpb24uZ2FsbGVyeVtpXS5saW5rO1xyXG4gICAgICAgIGltZy53aWR0aCA9IDQwMDtcclxuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkLWJsb2NrIHctMTAwXCIpO1xyXG4gICAgICAgIGltZy5hbHQgPSBcIkdhbGxlcnkgSW1hZ2VcIiArIChpICsgMSlcclxuICAgICAgICBkaXYuYXBwZW5kKGltZyk7XHJcbiAgICAgICAgaW5uZXIuYXBwZW5kKGRpdilcclxuICAgIH1cclxuICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgaW1nLnNyYyA9IGluc2VydGlvbi50cmFkZUdhbWUuY292ZXIubGluaztcclxuICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImltZy1mbHVpZCByb3VuZGVkLXN0YXJ0XCIpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmQtaW1hZ2VcIikuYXBwZW5kKGltZyk7XHJcbiAgICBsZXQgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICBoNC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcmQtdGl0bGVcIik7XHJcbiAgICBoNC5pbm5lckhUTUwgPSBpbnNlcnRpb24udHJhZGVHYW1lLm5hbWU7XHJcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcmQtdGV4dFwiKTtcclxuICAgIHAuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJmb250LXNpemU6IDEuNWVtO1wiKVxyXG4gICAgcC5pbm5lckhUTUwgPSBcIkdlbmVyZTogXCI7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluc2VydGlvbi50cmFkZUdhbWUuZ2VucmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBwLmlubmVySFRNTCArPSBpbnNlcnRpb24udHJhZGVHYW1lLmdlbnJlW2ldLmdlbnJlICsgXCIgXCJcclxuICAgIH1cclxuICAgIHAuaW5uZXJIVE1MICs9IFwiPGJyPlwiXHJcbiAgICAgICAgKyBcIkFubm86IFwiICsgaW5zZXJ0aW9uLnRyYWRlR2FtZS55ZWFyICsgXCI8YnI+XCJcclxuICAgICAgICArIFwiQ29uc29sZTogXCIgKyBpbnNlcnRpb24udHJhZGVHYW1lLmNvbnNvbGUuY29uc29sZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZC1ib2R5XCIpLmFwcGVuZChoNCwgcCk7XHJcbiAgICBsZXQgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGRlc2Muc2V0QXR0cmlidXRlKFwic3R5bGVcIixcImNvbG9yOndoaXRlXCIpXHJcbiAgICBkZXNjLmlubmVySFRNTCA9IFwiRGVzY3JpemlvbmU6XCJcclxuICAgIGxldCBpbnNEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgaW5zRGVzYy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLFwiY29sb3I6d2hpdGVcIilcclxuICAgIGluc0Rlc2MuaW5uZXJIVE1MID0gaW5zZXJ0aW9uLmRlc2NyaXB0aW9uO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnRpb24tY3JlYXRvclwiKS5pbm5lckhUTUwgPSBpbnNlcnRpb24ucHVibGlzaGVyLnVzZXJuYW1lO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnRpb24tZGVzY3JpcHRpb25cIikuYXBwZW5kKGRlc2MsIGluc0Rlc2MpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1pdGVtLVwiICsgKGkgKyAxKSkuaW5uZXJIVE1MID0gaW5zZXJ0aW9uLndpc2hMaXN0W2ldLm5hbWU7XHJcbiAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgaW1nLnNyYyA9IGluc2VydGlvbi53aXNoTGlzdFtpXS5jb3Zlci5saW5rO1xyXG4gICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcmQtaW1nLXRvcFwiKVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nLWl0ZW0tXCIgKyAoaSArIDEpKS5hcHBlbmQoaW1nKTtcclxuICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHAuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJkLXRleHRcIik7XHJcbiAgICAgICAgcC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImZvbnQtc2l6ZTogMS41ZW07XCIpO1xyXG4gICAgICAgIHAuaW5uZXJIVE1MID0gXCJHZW5lcmU6IFwiO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5zZXJ0aW9uLnRyYWRlR2FtZS5nZW5yZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBwLmlubmVySFRNTCArPSBpbnNlcnRpb24udHJhZGVHYW1lLmdlbnJlW2ldLmdlbnJlICsgXCIgXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgcC5pbm5lckhUTUwgKz0gXCI8YnI+XCJcclxuICAgICAgICAgICAgKyBcIkFubm86IFwiICsgaW5zZXJ0aW9uLnRyYWRlR2FtZS55ZWFyICsgXCI8YnI+XCJcclxuICAgICAgICAgICAgKyBcIkNvbnNvbGU6IFwiICsgaW5zZXJ0aW9uLnRyYWRlR2FtZS5jb25zb2xlLmNvbnNvbGU7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2R5LWl0ZW0tXCIgKyAoaSArIDEpKS5hcHBlbmQocCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGV4cGFuZEluc2VydGlvbiIsImltcG9ydCBjcmVhQW5udW5jaW8gZnJvbSAnLi4vY3JlYUFubnVuY2lvL2NyZWFBbm51bmNpby5odG1sJ1xyXG5pbXBvcnQgaW5zZXJ0aW9uIGZyb20gJy4uL2ludGVyZmFjZXMvaW5zZXJ0aW9uJztcclxuaW1wb3J0IGV4cGFuZEluc2VydGlvbiBmcm9tICcuL2FubnVuY2lvJ1xyXG5pbXBvcnQgY3JlYXRlSW5zZXJ0aW9uUGFnZSBmcm9tICcuLi9jcmVhQW5udW5jaW8vY3JlYUFubnVuY2lvJ1xyXG5cclxubGV0IGxpc3Q6IGluc2VydGlvbltdID0gW107XHJcbmxldCB2aWV3OiBudW1iZXIgPSA2XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGFnZTIoKSB7ICAgICAgIC8qSW5pemlhbGl6emEgdHV0dG8gY2nDsiBjaGUgc2VydmUgYWxsYSBwYWdpbmEgcGVyIGZ1bnppb25hcmUgKi9cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0QWxsMlwiKS5vbmNsaWNrID0gc2VhcmNoQnlBbGwyO1xyXG4gICAgYXNzaWduRmlsdGVyczIoKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlQ2F0ZWdvcnlcIikub25jbGljayA9IGNyZWF0ZUNhdGVnb3J5O1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWxldGVFbGVtZW50c1wiKS5vbmNsaWNrID0gZGVsZXRlRWxlbWVudHM7XHJcbiAgICBsZXQgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRJbnNlcnRpb25cIik7XHJcbiAgICBidG4ub25jbGljaz0oKT0+e1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUw9Y3JlYUFubnVuY2lvO1xyXG4gICAgICAgIGNyZWF0ZUluc2VydGlvblBhZ2UoKTtcclxuICAgIH1cclxuICAgIC8vY3JlYXRlSW5zZXJ0aW9uKCk7XHJcbiAgICBnZXRBbGxJbnNlcnRpb25zMigpO1xyXG4gICAgY3JlYXRlUGFnaW5hdGlvbjIoKTtcclxuICAgIHNob3dSZXN1bHRzMigxKTtcclxuXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZWFyY2hCeUFsbDIoKSB7ICAgICAgICAgICAgIC8qTGEgZnVuemlvbmEgZGVsIGJvdHRvbmUgY2hlIGNlcmNhIHR1dHRpIGdsaSBhbm51bmNpIHNlbnphIGZpbHRyaSovXHJcbiAgICBnZXRBbGxJbnNlcnRpb25zMigpO1xyXG4gICAgY3JlYXRlUGFnaW5hdGlvbjIoKTtcclxuICAgIHNob3dSZXN1bHRzMigxKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGFzc2lnbkZpbHRlcnMyKCkgeyAgICAgICAgICAgICAvKkFzc2VnbmEgbGUgZnVuemlvbmkgYWkgcHVsc2FudGkgbmVsbGUgZHJvcERvd25MaXN0IGRhIHByb3ZhcmUqL1xyXG4gICAgbGV0IGdlbmVyaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2VucmVzMlwiKS5jaGlsZHJlblxyXG4gICAgZm9yIChsZXQgZyBvZiBnZW5lcmkpIHtcclxuICAgICAgICAoZyBhcyBIVE1MQnV0dG9uRWxlbWVudCkub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2VhcmNoQnlHZW5yZTIoZy5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IGFubmkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInllYXJzMlwiKS5jaGlsZHJlblxyXG4gICAgZm9yIChsZXQgYSBvZiBhbm5pKSB7XHJcbiAgICAgICAgKGEgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNlYXJjaEJ5WWVhcjIoTnVtYmVyKChhIGFzIEhUTUxCdXR0b25FbGVtZW50KS5pZCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKmxldCBzZWFyY2hUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoVGl0bGUyXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBzZWFyY2hUaXRsZS5vbmtleWRvd24gPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIHNlYXJjaEJ5VGl0bGUyKHNlYXJjaFRpdGxlLnZhbHVlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEJ1dHRvbjJcIik7XHJcbiAgICBzZWFyY2hCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBzZWFyY2hCeVRpdGxlMihzZWFyY2hUaXRsZS52YWx1ZSlcclxuICAgIH0qL1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2VhcmNoQnlUaXRsZTIodGl0bGU6IHN0cmluZykge1xyXG4gICAgbGV0IGZpbHRlcmVkTGlzdCA9IFtdXHJcbiAgICBmb3IgKGxldCBlbGVtZW50IG9mIGxpc3QpIHtcclxuICAgICAgICBsZXQgdGl0b2xvID0gZWxlbWVudC50aXRsZTtcclxuICAgICAgICBsZXQgZ2FtZU5hbWUgPSBlbGVtZW50LnRyYWRlR2FtZS5uYW1lXHJcbiAgICAgICAgaWYgKCh0aXRvbG8udG9VcHBlckNhc2UoKS5pbmNsdWRlcyh0aXRsZS50b1VwcGVyQ2FzZSgpKSlcclxuICAgICAgICAgICAgfHwgKGdhbWVOYW1lLnRvVXBwZXJDYXNlKCkuaW5jbHVkZXModGl0bGUudG9VcHBlckNhc2UoKSkpKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkTGlzdC5wdXNoKGVsZW1lbnQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGlzdCA9IFtdO1xyXG4gICAgbGlzdCA9IGZpbHRlcmVkTGlzdFxyXG4gICAgY3JlYXRlUGFnaW5hdGlvbjIoKTtcclxuICAgIHNob3dSZXN1bHRzMigxKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNlYXJjaEJ5R2VucmUyKGdlbnJlOiBTdHJpbmcpIHtcclxuICAgIGNvbnNvbGUubG9nKGdlbnJlKTtcclxuICAgIGxldCBmaWx0ZXJlZExpc3QgPSBbXVxyXG4gICAgZm9yIChsZXQgZWxlbWVudCBvZiBsaXN0KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LnRyYWRlR2FtZS5nZW5yZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC50cmFkZUdhbWUuZ2VucmVbaV0uZ2VucmUgPT0gZ2VucmUpIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcmVkTGlzdC5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgaT1lbGVtZW50LnRyYWRlR2FtZS5nZW5yZS5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsaXN0ID0gW107XHJcbiAgICBsaXN0ID0gZmlsdGVyZWRMaXN0XHJcbiAgICBjcmVhdGVQYWdpbmF0aW9uMigpO1xyXG4gICAgc2hvd1Jlc3VsdHMyKDEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZWFyY2hCeVllYXIyKHllYXI6IG51bWJlcikge1xyXG4gICAgY29uc29sZS5sb2coeWVhcik7XHJcbiAgICBsZXQgZmlsdGVyZWRMaXN0ID0gW107XHJcbiAgICBmb3IgKGxldCBlbGVtZW50IG9mIGxpc3QpIHtcclxuICAgICAgICBpZiAoZWxlbWVudC50cmFkZUdhbWUueWVhciA9PSB5ZWFyKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkTGlzdC5wdXNoKGVsZW1lbnQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGlzdCA9IFtdO1xyXG4gICAgbGlzdCA9IGZpbHRlcmVkTGlzdFxyXG4gICAgY3JlYXRlUGFnaW5hdGlvbjIoKTtcclxuICAgIHNob3dSZXN1bHRzMigxKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRBbGxJbnNlcnRpb25zMigpIHsgLyogUXVlc3RhIMOoIHNvbG8gdW5hIHByb3ZhLCBzY29tbWVudGFyZSBsYSBmZXRjaCBwacO5IGdpw7kgKi9cclxuICAgIGxpc3QgPSBbXTtcclxuXHJcbiAgICBjb25zdCBpbWFnZUdpb2NvMSA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vaS5ldHN5c3RhdGljLmNvbS82Mjc3ODA0L3IvaWwvN2RmMDBlLzY5NzU0NjM0MC9pbF8xMTQweE4uNjk3NTQ2MzQwX2ZpdnMuanBnXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdpb2NvMiA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vd3d3Lm1vYnlnYW1lcy5jb20vaW1hZ2VzL2NvdmVycy9sLzE0NDQ1LXRoZS1sZWdlbmQtb2YtemVsZGEtbmVzLWZyb250LWNvdmVyLmpwZ1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHaW9jbzMgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9pdC9iL2IzL1BvayVDMyVBOW1vbl9HaWFsbG8ucG5nXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdpb2NvNCA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vbWV0YWxnZWFyLmZhbmRvbS5jb20vaXQvd2lraS9NZXRhbF9HZWFyP2ZpbGU9TWV0YWxfR2Vhci5qcGdcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlR2FsbGVyeTEgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9pdC90aHVtYi83Lzc3L1Bpa2FjaHUucG5nLzEwMjRweC1QaWthY2h1LnBuZ1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHYWxsZXJ5MiA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vd3d3LnBuZ21hcnQuY29tL2ZpbGVzLzExL0Zyb2ctTWVtZS1QTkctSEQucG5nXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdhbGxlcnkzID0ge1xyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9tZWRpYS5saWNkbi5jb20vZG1zL2ltYWdlL0Q1NjM1QVFIdzNFNXlZeVhUTHcvcHJvZmlsZS1mcmFtZWRwaG90by1zaHJpbmtfODAwXzgwMC8wLzE2NDQ1MTg5MTg2MDY/ZT0xNjc1NjIwMDAwJnY9YmV0YSZ0PXgxUm5YcVdzRFdBT1ZRVVhHRnVqTW9kWFpoaUdVUUp1MGE2RkFzWk4zTG9cIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdpb2NvMSA9IHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuYW1lOiBcIlN1cGVyTWFyaW9cIixcclxuICAgICAgICBnZW5yZTogW3tnZW5yZTogXCJQTEFURk9STVwifV0sXHJcbiAgICAgICAgeWVhcjogMTk4NSxcclxuICAgICAgICBjb25zb2xlOiB7Y29uc29sZTogXCJORVNcIn0sXHJcbiAgICAgICAgY292ZXI6IGltYWdlR2lvY28xXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2lvY28yID0ge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIG5hbWU6IFwiVGhlIExlZ2VuZCBvZiBaZWxkYVwiLFxyXG4gICAgICAgIGdlbnJlOiBbe2dlbnJlOiBcIkFWVkVOVFVSQVwifV0sXHJcbiAgICAgICAgeWVhcjogMTk4NixcclxuICAgICAgICBjb25zb2xlOiB7Y29uc29sZTogXCJORVNcIn0sXHJcbiAgICAgICAgY292ZXI6IGltYWdlR2lvY28yXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2lvY28zID0ge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIG5hbWU6IFwiUG9rZW1vbiBHaWFsbG9cIixcclxuICAgICAgICBnZW5yZTogW3tnZW5yZTogXCJHRFJcIn1dLFxyXG4gICAgICAgIHllYXI6IDE5OTgsXHJcbiAgICAgICAgY29uc29sZToge2NvbnNvbGU6IFwiR0FNRV9CT1lfQ09MT1JcIn0sXHJcbiAgICAgICAgY292ZXI6IGltYWdlR2lvY28zXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2lvY280ID0ge1xyXG4gICAgICAgIGlkOiA0LFxyXG4gICAgICAgIG5hbWU6IFwiTWV0YWwgR2VhclwiLFxyXG4gICAgICAgIGdlbnJlOiBbe2dlbnJlOiBcIlNURUFMVEhcIn1dLFxyXG4gICAgICAgIHllYXI6IDE5ODcsXHJcbiAgICAgICAgY29uc29sZToge2NvbnNvbGU6IFwiTkVTXCJ9LFxyXG4gICAgICAgIGNvdmVyOiBpbWFnZUdpb2NvNFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHB1Ymxpc2hlckdpb2NvMSA9IHtcclxuICAgICAgICB1c2VySWQ6IDEsXHJcbiAgICAgICAgdXNlcm5hbWU6IFwiUGllcm9hZmZvbmRvXCIsXHJcbiAgICAgICAgbmFtZTogXCJQaWVyaW5vXCIsXHJcbiAgICAgICAgc3VybmFtZTogXCJDaWNjaW5vXCIsXHJcbiAgICAgICAgZW1haWw6IFwicGllcmlub2N1b3JpY2lub0BhbW9yaW5vLmNvbVwiLFxyXG4gICAgICAgIHJhdGluZzogNjY2LFxyXG4gICAgICAgIHZpZGVvZ2FtZXM6IFtnaW9jbzFdXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5zZXJ0aW9uMTogaW5zZXJ0aW9uID0ge1xyXG4gICAgICAgIGFwcHJvdmVkOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiBcIlNjYW1iaW8gU3VwZXJNYXJpb1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlNjYW1iaW8gc3VwZXJtYXJpbyB4a8OoIG1pIHNvbm8gc2Vra2F0byBhIGdpb2NhcmNpXCIsXHJcbiAgICAgICAgcHVibGlzaGVyOiBwdWJsaXNoZXJHaW9jbzEsXHJcbiAgICAgICAgZ2FsbGVyeTogW2ltYWdlR2FsbGVyeTEsIGltYWdlR2FsbGVyeTIsIGltYWdlR2FsbGVyeTNdLFxyXG4gICAgICAgIHRyYWRlR2FtZTogZ2lvY28xLFxyXG4gICAgICAgIHdpc2hMaXN0OiBbZ2lvY28yLCBnaW9jbzMsIGdpb2NvNF0sXHJcbiAgICAgICAgb3V0Y29tZTogXCJXSVBcIixcclxuICAgICAgICBwdWJsaWNhdGlvbkRhdGU6IFwiMjktMDEtMjAyM1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5zZXJ0aW9uMjogaW5zZXJ0aW9uID0ge1xyXG4gICAgICAgIGFwcHJvdmVkOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiBcIlNjYW1iaW8gU3VwZXJMdWlnaVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlNjYW1iaW8gc3VwZXJsdWlnaSBwZWNjaMOpIHNvbm8gcHJvXCIsXHJcbiAgICAgICAgcHVibGlzaGVyOiBwdWJsaXNoZXJHaW9jbzEsXHJcbiAgICAgICAgZ2FsbGVyeTogW2ltYWdlR2FsbGVyeTEsIGltYWdlR2FsbGVyeTIsIGltYWdlR2FsbGVyeTNdLFxyXG4gICAgICAgIHRyYWRlR2FtZTogZ2lvY28yLFxyXG4gICAgICAgIHdpc2hMaXN0OiBbZ2lvY28xLCBnaW9jbzMsIGdpb2NvNF0sXHJcbiAgICAgICAgb3V0Y29tZTogXCJXSVBcIixcclxuICAgICAgICBwdWJsaWNhdGlvbkRhdGU6IFwiMjktMDEtMjAyM1wiXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjc7IGkrKykge1xyXG4gICAgICAgIGlmIChpICE9IDIpIHtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKGluc2VydGlvbjEpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKGluc2VydGlvbjIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qUVVFU1RPIEUnIExBIEZVTlpJT05FIEdJVVNUQSBOT04gRkFNTyBDSEUgU0JBR0xJQVRFISAqL1xyXG5cclxuICAgIC8qRmV0Y2ggYSBiYWNrZW5kIGNvbiB0dXR0aSBnbGkgYW5udW5jaSwgYWdnaW9ybmEgbGEgbGlzdGEgbGlzdCovXHJcbiAgICAvLyBsaXN0PVtdO1xyXG4gICAgLy8gZmV0Y2goJy9UaXBvQW5udW5jaUNoZW5lc28nKVxyXG4gICAgLy8gLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAvLyAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgLy8gICAgIGZvcihsZXQgZCBvZiBkYXRhKXtcclxuICAgIC8vICAgICAgICAgbGlzdC5wdXNoKGQpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0pO1xyXG59XHJcblxyXG4vKmRhIHF1aSBpbiBwb2kgbGUgZnVuemlvbmkgc2Vydm9ubyBhIFxyXG5jcmVhcmUgbGEgcGFnaW5hIHVuYSB2b2x0YSBjbGljY2F0byAgXHJcbnN1bCBib3R0b25lIGFubnVuY2kgZSBhIHJpY2FyaWNhcmxlKi9cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVBhZ2luYXRpb24yKCkge1xyXG4gICAgbGV0IHNpemU6IG51bWJlciA9IGxpc3QubGVuZ3RoXHJcbiAgICBsZXQgdGFiczogbnVtYmVyID0gTWF0aC5jZWlsKHNpemUgLyB2aWV3KTtcclxuICAgIGxldCBwYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZXMyXCIpO1xyXG4gICAgcGFnZXMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRhYnM7IGkrKykge1xyXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBpZiAoaSA9PSAxKSB7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtIGFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIsIFwicGFnZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1saW5rXCIpO1xyXG4gICAgICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYWxsTGkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VzMlwiKS5jaGlsZHJlbjtcclxuICAgICAgICAgICAgZm9yIChsZXQgb25lTGkgb2YgYWxsTGkpIHtcclxuICAgICAgICAgICAgICAgIG9uZUxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgb25lTGkucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtIGFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIsIFwicGFnZVwiKTtcclxuICAgICAgICAgICAgc2hvd1Jlc3VsdHMyKGkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgYnRuLmlubmVySFRNTCA9IFwiXCIgKyAoaSk7XHJcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYnRuKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VzMlwiKS5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dSZXN1bHRzMihpOiBudW1iZXIpIHtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnRpb25Db250ZW50MlwiKTtcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGxldCBzdGFydCA9IChpIC0gMSkgKiB2aWV3O1xyXG4gICAgbGV0IHN0b3AgPSAoaSAqIHZpZXcpIC0gMTtcclxuICAgIGZvciAoc3RhcnQ7IHN0YXJ0IDw9IHN0b3A7IHN0YXJ0KyspIHtcclxuICAgICAgICBpZiAoc3RhcnQgPj0gbGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFsaXN0W3N0YXJ0XS5hcHByb3ZlZCkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBsZXQgY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIGxldCBqdWFuID0gXCJcIiArIHN0YXJ0O1xyXG4gICAgICAgIC8vSnVhbiDDqCBsJ2lkIGRlaSBib3R0b25pLCBzYXLDoCBsJ2lkIGRlbGxlIGluc2VyemlvbmkgcXVhbmRvIHNpIGltcGxlbWVudGVyYW5ubyBnbGkgYW5udW5jaSBkYWwgZGJcclxuICAgICAgICBsZXQgaXNPbkNoZWNrZWRMaXN0UmVzdWx0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGZvcihsZXQgZWxlbWVudCBvZiBjaGVja2VkTGlzdCl7XHJcbiAgICAgICAgICAgIGlmKGp1YW49PWVsZW1lbnQpe1xyXG4gICAgICAgICAgICAgICAgaXNPbkNoZWNrZWRMaXN0UmVzdWx0PXRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCAnbGlzdC1ncm91cC1pdGVtJyk7XHJcbiAgICAgICAgaWYoaXNPbkNoZWNrZWRMaXN0UmVzdWx0KXtcclxuICAgICAgICAgICAgY29sLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKVwiKTtcclxuICAgICAgICAgICAgY29sLnNldEF0dHJpYnV0ZSgnb25tb3VzZW92ZXInLCAnc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNilcIiknKTtcclxuICAgICAgICAgICAgY29sLnNldEF0dHJpYnV0ZSgnb25tb3VzZW91dCcsICdzZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKVwiKScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb2wuc2V0QXR0cmlidXRlKFwiaWRcIiwganVhbik7XHJcblxyXG4gICAgICAgIGNvbC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBhZGRJbnNlcnRpb25Ub0xpc3QoanVhbilcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gbGlzdFtzdGFydF0udGl0bGU7XHJcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gXCJcIiArIGxpc3Rbc3RhcnRdLnRyYWRlR2FtZS5uYW1lO1xyXG4gICAgICAgIGZvcihsZXQgaT0gMDsgaTxsaXN0W3N0YXJ0XS50cmFkZUdhbWUuZ2VucmUubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgKz0gXCIsIFwiICsgbGlzdFtzdGFydF0udHJhZGVHYW1lLmdlbnJlW2ldLmdlbnJlICsgXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MICs9IFwiLCBcIiArIGxpc3Rbc3RhcnRdLnRyYWRlR2FtZS55ZWFyO1xyXG5cclxuICAgICAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgKz0gXCIsIFwiICsgbGlzdFtzdGFydF0udHJhZGVHYW1lLmNvbnNvbGUuY29uc29sZTtcclxuXHJcbiAgICAgICAgY29sLmFwcGVuZCh0aXRsZSxkZXNjcmlwdGlvbilcclxuICAgICAgICBjb250ZW50LmFwcGVuZChjb2wpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhjaGVja2VkTGlzdCk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQYWdlMlxyXG5cclxuXHJcbmxldCBjaGVja2VkTGlzdDogc3RyaW5nW10gPSBbXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRJbnNlcnRpb25Ub0xpc3QoaW5zOiBzdHJpbmcpe1xyXG5cclxuICAgIGxldCBpc09uQ2hlY2tlZExpc3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBmb3IobGV0IGVsZW1lbnQgb2YgY2hlY2tlZExpc3Qpe1xyXG4gICAgICAgIGlmKGlucz09ZWxlbWVudCl7XHJcbiAgICAgICAgICAgIGlzT25DaGVja2VkTGlzdCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNoZWNrZWRMaXN0LnNwbGljZShjaGVja2VkTGlzdC5pbmRleE9mKGVsZW1lbnQpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYoaXNPbkNoZWNrZWRMaXN0KXtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnMpLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucykuc2V0QXR0cmlidXRlKCdvbm1vdXNlb3ZlcicsICdzZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KVwiKScpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucykuc2V0QXR0cmlidXRlKCdvbm1vdXNlb3V0JywgJ3NldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpXCIpJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNoZWNrZWRMaXN0LnB1c2goaW5zKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnMpLnJlbW92ZUF0dHJpYnV0ZSgnb25tb3VzZW92ZXInKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnMpLnJlbW92ZUF0dHJpYnV0ZSgnb25tb3VzZW91dCcpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucykuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNilcIik7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2F0ZWdvcnkoKXtcclxuXHJcbiAgICAvL1RPRE86IGluc2VyaXNjaSBnbGkgZWxlbWVudGkgZGkgY2hlY2tlZExpc3QgaW4gdW5hIGNhdGVnb3JpYSBuZWwgREJcclxuXHJcbiAgICAvL1RPRE86IE1ldG9kbyBkYSBmYXJlIHBlciBpbnNlcmlyZSBnbGkgZWxlbWVudGkgbmVsIGRhdGFiYXNlIGhhaGFcclxuICAgIGNvbnNvbGUubG9nKFwiQ2F0ZWdvcmlhIGNyZWF0YSBwacO5IG8gbWVub1wiKTtcclxuXHJcbiAgICBjaGVja2VkTGlzdCA9IFtdO1xyXG5cclxuICAgIC8vUmVpbXBvc3RhIGxhIHBhZ2luYSBhIGNvbWUgc3RhdmEgcHJpbWFcclxuICAgIGdldEFsbEluc2VydGlvbnMyKCk7XHJcbiAgICBjcmVhdGVQYWdpbmF0aW9uMigpO1xyXG4gICAgc2hvd1Jlc3VsdHMyKDEpO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUVsZW1lbnRzKCl7XHJcblxyXG4gICAgLy9UT0RPOiBjYW5jZWxsYSBnbGkgZWxlbWVudGkgZGkgY2hlY2tlZExpc3QgZGFsIERCXHJcblxyXG4gICAgLy9UT0RPOiBNZXRvZG8gZGEgZmFyZSBwZXIgY2FuY2VsbGFyZSBnbGkgZWxlbWVudGkgZGFsIGRhdGFiYXNlXHJcbiAgICBjb25zb2xlLmxvZyhcIkVsZW1lbnRpIGNhbmNlbGxhdGkgcGnDuSBvIG1lbm9cIik7XHJcblxyXG4gICAgY2hlY2tlZExpc3QgPSBbXTtcclxuXHJcbiAgICAvL1JlaW1wb3N0YSBsYSBwYWdpbmEgYSBjb21lIHN0YXZhIHByaW1hXHJcbiAgICBnZXRBbGxJbnNlcnRpb25zMigpO1xyXG4gICAgY3JlYXRlUGFnaW5hdGlvbjIoKTtcclxuICAgIHNob3dSZXN1bHRzMigxKTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgY3JlYUFubnVuY2lvIGZyb20gJy4vY3JlYUFubnVuY2lvLmh0bWwnXHJcbmltcG9ydCBhbm51bmNpIGZyb20gJy4vYW5udW5jaS5odG1sJ1xyXG5pbXBvcnQgdmlkZW9nYW1lIGZyb20gJy4uL2ludGVyZmFjZXMvdmlkZW9nYW1lJztcclxuXHJcbmxldCBmdWxsTGlzdDp2aWRlb2dhbWVbXT1bXVxyXG5sZXQgdXNlckxpc3Q6dmlkZW9nYW1lW109W11cclxubGV0IHdpc2hMaXN0OnN0cmluZ1tdPVtdXHJcbmxldCBnaW9jb0RhU2NhbWJpYXJlOiBzdHJpbmc7XHJcbmxldCBpbmRleD0wO1xyXG5cclxuICAgIC8qQ2VyY28gdHV0dGkgaSBnaW9jaGkgKi9cclxuLypmdW5jdGlvbiBnZXRBbGxHYW1lcygpe1xyXG4gICBmdWxsTGlzdD1bXTtcclxuICAgIGZldGNoKFwiL3ZpZGVvZ2FtZXNcIilcclxuICAgIC50aGVuKChyZXNwb25zZSk9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigodmlkZW9nYW1lcyk9PntcclxuICAgICAgICBmb3IobGV0IGdhbWUgb2YgdmlkZW9nYW1lcyl7XHJcbiAgICAgICAgICAgIGZ1bGxMaXN0LnB1c2goZ2FtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG4gICovICAgLypDZXJjbyB0dXR0aSBpIGdpb2NoaSBwb3NzZWR1dGkgZGFsbCd1dGVudGUqL1xyXG4vKmZ1bmN0aW9uIGdldFVzZXJHYW1lcygpe1xyXG4gICAgdXNlckxpc3Q9W107XHJcbiAgICBmZXRjaChcIi92aWRlb2dhbWVzL3VzZXJcIilcclxuICAgIC50aGVuKChyZXNwb25zZSk9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigodmlkZW9nYW1lcyk9PntcclxuICAgICAgICBmb3IobGV0IGdhbWUgb2YgdmlkZW9nYW1lcyl7XHJcbiAgICAgICAgICAgIHVzZXJMaXN0LnB1c2goZ2FtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG4qL1xyXG5cclxuLyogTW9zdHJhIGkgZ2lvY2hpIHNjZWx0aSBkYWxsJ3V0ZW50ZSBwZXIgbG8gc2NhbWJpbyovXHJcbmZ1bmN0aW9uIHNob3dTZWxlY3RlZEdhbWVzKCl7XHJcbiAgICBsZXQgc2VsZWN0ZWRHYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0ZWRHYW1lc1wiKTtcclxuICAgIHNlbGVjdGVkR2FtZXMuaW5uZXJIVE1MPVwiXCI7XHJcbiAgICBmb3IobGV0IGk9MDsgaTx3aXNoTGlzdC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGxpLmlubmVySFRNTD13aXNoTGlzdFtpXTtcclxuICAgICAgICBzZWxlY3RlZEdhbWVzLmFwcGVuZChsaSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuIC8qQ3JlYSBsYSBsaXN0YSBkZWkgZ2lvY2hpIHBvc3NlZHV0aSBkYWxsJ3V0ZW50ZSAqL1xyXG4gZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUluc2VydGlvblBhZ2UoKXtcclxuICAgIGxldCB0cmFkZUdhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYWRlR2FtZVwiKTtcclxuICAgIHRyYWRlR2FtZS5pbm5lckhUTUw9XCJcIjtcclxuICAgIGZvcihsZXQgZ2FtZSBvZiB1c2VyTGlzdCl7XHJcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZHJvcGRvd24taXRlbVwiKTtcclxuICAgICAgICBsaS5pbm5lckhUTUw9Z2FtZS5uYW1lO1xyXG4gICAgICAgIGxpLm9uY2xpY2s9KCk9PntcclxuICAgICAgICAgICAgZ2lvY29EYVNjYW1iaWFyZT1saS5pbm5lckhUTUw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyYWRlR2FtZS5hcHBlbmQobGkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qQ3JlYSBsYSBsaXN0YSBkZWkgMyBnaW9jaGkgY2hlIGwndXRlbnRlIHZvcnJlYmJlIHNjYW1iaWFyZSAqL1xyXG4gICAgbGV0IHdpc2hHYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2lzaEdhbWVzXCIpO1xyXG4gICAgd2lzaEdhbWVzLmlubmVySFRNTD1cIlwiO1xyXG4gICAgZm9yKGxldCBnYW1lIG9mIGZ1bGxMaXN0KXtcclxuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkcm9wZG93bi1pdGVtXCIpO1xyXG4gICAgICAgIGxpLmlubmVySFRNTD1nYW1lLm5hbWU7XHJcbiAgICAgICAgbGkub25jbGljaz0oKT0+eyAgICBcclxuICAgICAgICAgICAgbGV0IHRlc3Q6Ym9vbGVhbj10cnVlO1xyXG5cclxuICAgICAgICAgICAgaWYod2lzaExpc3QubGVuZ3RoPT0zKXtcclxuICAgICAgICAgICAgICAgIHdpc2hMaXN0PVtdO1xyXG4gICAgICAgICAgICAgICAgaW5kZXg9MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IobGV0IGVsZW1lbnQgb2Ygd2lzaExpc3Qpe1xyXG4gICAgICAgICAgICAgICAgaWYoZWxlbWVudD09bGkuaW5uZXJIVE1MKXtcclxuICAgICAgICAgICAgICAgICAgICB0ZXN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYodGVzdCl7XHJcbiAgICAgICAgICAgICAgICB3aXNoTGlzdFtpbmRleF09bGkuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgc2hvd1NlbGVjdGVkR2FtZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2lzaEdhbWVzLmFwcGVuZChsaSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbiBmdW5jdGlvbiBjcmVhdGVJbnNlcnRpb24oKXtcclxuICAgIC8vZ2V0QWxsR2FtZXMoKTtcclxuICAgIC8vZ2V0VXNlckdhbWVzKCk7XHJcbiAgICBcclxuICAgIGxldCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEluc2VydGlvbjJcIik7XHJcbiAgICBidG4ub25jbGljaz0oKT0+e1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUw9Y3JlYUFubnVuY2lvO1xyXG4gICAgICAgIGNyZWF0ZUluc2VydGlvblBhZ2UoKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUluc2VydGlvblBhZ2U7IiwiaW1wb3J0IGRpdiBmcm9tICcuL2Zvb3Rlci5odG1sJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb3QoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvb3RlclwiKS5pbm5lckhUTUwgPSBkaXY7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvdDsiLCJpbXBvcnQgZ2VzdGlvbmVVdGVudGkgZnJvbSAnLi9nZXN0aW9uZVV0ZW50aS5odG1sJ1xyXG5pbXBvcnQgdXNlckludCBmcm9tICcuLi9pbnRlcmZhY2VzL3VzZXInO1xyXG5pbXBvcnQgc2hvd1VzZXJQcm9maWxlIGZyb20gJy4uL3Byb2ZpbG9VdGVudGUvc2hvd1Byb2ZpbGUnO1xyXG5cclxubGV0IHVzZXJzOiB1c2VySW50W10gPSBbXTtcclxubGV0IHZpZXcgPSA1O1xyXG5cclxuZnVuY3Rpb24gc2hvd1VzZXJzKG51bTogbnVtYmVyKSB7XHJcbiAgICBsZXQgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlckxpc3RcIik7XHJcbiAgICBsaXN0LmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IChudW0gLSAxKSAqIHZpZXc7IGkgPCBudW0gKiB2aWV3OyBpKyspIHtcclxuICAgICAgICBpZiAoaSA+PSB1c2Vycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgbGV0IGJ0bl9wcm9maWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBidG5fcHJvZmlsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ0blwiKTtcclxuICAgICAgICBidG5fcHJvZmlsZS5vbmNsaWNrID0gc2hvd1VzZXJQcm9maWxlO1xyXG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGlzdC1ncm91cC1pdGVtJyk7XHJcbiAgICAgICAgbGkuc2V0QXR0cmlidXRlKCdvbm1vdXNlb3ZlcicsIFwic2V0QXR0cmlidXRlKCdjbGFzcycsICdsaXN0LWdyb3VwLWl0ZW0gYWN0aXZlJylcIik7XHJcbiAgICAgICAgbGkuc2V0QXR0cmlidXRlKCdvbm1vdXNlb3V0JywgXCJzZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpc3QtZ3JvdXAtaXRlbScpXCIpO1xyXG4gICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZsb2F0LWVuZFwiKTtcclxuICAgICAgICBsZXQgYnRuX2JhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgbGV0IGJ0bl9hZG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ0bl9iYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG4gYnRuLWRhbmdlciBidG4tc21cIik7XHJcbiAgICAgICAgYnRuX2FkbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ0biBidG4tc3VjY2VzcyBidG4tc21cIik7XHJcbiAgICAgICAgYnRuX2Jhbi5pbm5lckhUTUwgPSBcIkJhbm5hXCI7XHJcbiAgICAgICAgYnRuX2FkbS5pbm5lckhUTUwgPSBcIlJlbmRpIEFkbWluXCI7XHJcbiAgICAgICAgYnRuX2Jhbi5vbmNsaWNrID0gKCkgPT4geyBraWNrSGlzQXNzT3V0T2ZUaGlzU2l0ZSh1c2Vyc1tpXS51c2VySWQpfTtcclxuICAgICAgICBidG5fYWRtLm9uY2xpY2sgPSAoKSA9PiB7IG1ha2VIaW1BZG1pbih1c2Vyc1tpXS51c2VySWQpIH07XHJcbiAgICAgICAgc3Bhbi5hcHBlbmQoYnRuX2FkbSwgYnRuX2Jhbik7XHJcbiAgICAgICAgYnRuX3Byb2ZpbGUuaW5uZXJIVE1MID0gdXNlcnNbaV0udXNlcm5hbWUgKyBcIiB8IFwiICsgdXNlcnNbaV0ubmFtZSArIFwiIFwiICsgdXNlcnNbaV0uc3VybmFtZSArIFwiIHwgXCIgKyB1c2Vyc1tpXS5lbWFpbCArIFwiIHwgXCIgKyB1c2Vyc1tpXS5yYXRpbmcgKyBcIjxpIGNsYXNzPSdmYS1yZWd1bGFyIGZhLXN0YXInPjwvaT5cIjtcclxuICAgICAgICBsaS5hcHBlbmQoYnRuX3Byb2ZpbGUsIHNwYW4pO1xyXG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFVzZXJzKCk6IHZvaWQge1xyXG4gICAgZmV0Y2goXCIvdXNlclwiKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHVzZXJzID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGVsZW1lbnQgb2YgZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdXNlcnMucHVzaChlbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjcmVhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICAgICAgICAgIHNob3dVc2VycygxKTtcclxuICAgICAgICB9KTtcclxufVxyXG5cclxuLypcclxuPGxpIGNsYXNzPVwicGFnZS1pdGVtIGFjdGl2ZVwiIGFyaWEtY3VycmVudD1cInBhZ2VcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwYWdlLWxpbmtcIj4xPC9zcGFuPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwicGFnZS1pdGVtXCI+PGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBocmVmPVwiI1wiPjI8L2E+PC9saT5cclxuICAgICAgICA8bGkgY2xhc3M9XCJwYWdlLWl0ZW1cIj48YSBjbGFzcz1cInBhZ2UtbGlua1wiIGhyZWY9XCIjXCI+MzwvYT48L2xpPlxyXG4qL1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUGFnaW5hdGlvbigpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnaW5hdGlvblwiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbGV0IG51bWJlck9mUGFnZXMgPSBNYXRoLmNlaWwodXNlcnMubGVuZ3RoIC8gdmlldyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mUGFnZXM7IGkrKykge1xyXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtIGFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIsIFwicGFnZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1saW5rXCIpO1xyXG4gICAgICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYWxsTGkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2luYXRpb25cIikuY2hpbGRyZW47XHJcbiAgICAgICAgICAgIGZvciAobGV0IG9uZUxpIG9mIGFsbExpKSB7XHJcbiAgICAgICAgICAgICAgICBvbmVMaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbVwiKTtcclxuICAgICAgICAgICAgICAgIG9uZUxpLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbSBhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiLCBcInBhZ2VcIik7XHJcbiAgICAgICAgICAgIHNob3dVc2VycyhpICsgMSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBidG4uaW5uZXJIVE1MID0gXCJcIiArIChpICsgMSk7XHJcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYnRuKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2luYXRpb25cIikuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1ha2VIaW1BZG1pbihpZDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGlkKVxyXG4gICAgfVxyXG4gICAgZmV0Y2goXCIvYWRtaW5cIiwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGlkKVxyXG4gICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4geyBjb25zb2xlLmxvZyhcImFkbWluIGNyZWF0bz8gXCIgKyBkYXRhKTsgZ2V0QWxsVXNlcnMoKTsgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGtpY2tIaXNBc3NPdXRPZlRoaXNTaXRlKGlkOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpZClcclxuICAgIH1cclxuICAgIGZldGNoKFwiL3VzZXJcIiwgcmVxdWVzdClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4geyBjb25zb2xlLmxvZyhcInVzZXIgY2FuY2VsbGF0bz8gXCIgKyBkYXRhKTsgZ2V0QWxsVXNlcnMoKTsgfSk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRBbGxVc2VyczsiLCJpbXBvcnQgaG9tZSBmcm9tICcuL2hvbWUuaHRtbCdcclxuaW1wb3J0IHtpbnNlcnRpb259IGZyb20gJy4uL2ludGVyZmFjZXMvaW5zZXJ0aW9uJztcclxuaW1wb3J0IGFubnVuY2kgZnJvbSAnLi4vYW5udW5jaS9hbm51bmNpLmh0bWwnO1xyXG5pbXBvcnQgY3JlYXRlUGFnZSwgeyBzZWFyY2hCeVRpdGxlIH0gZnJvbSBcIi4uL2FubnVuY2kvYW5udW5jaVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVQYWdpbmF0aW9uIH0gZnJvbSAnLi4vYW5udW5jaS9hbm51bmNpJztcclxuaW1wb3J0IGNyZWFBbm51bmNpbyBmcm9tICcuLi9jcmVhQW5udW5jaW8vY3JlYUFubnVuY2lvLmh0bWwnXHJcbmltcG9ydCBjcmVhdGVJbnNlcnRpb25QYWdlIGZyb20gXCIuLi9jcmVhQW5udW5jaW8vY3JlYUFubnVuY2lvXCI7XHJcbmltcG9ydCBleHBhbmRJbnNlcnRpb24gZnJvbSAnLi4vYW5udW5jaS9hbm51bmNpbyc7XHJcbmltcG9ydCBhbm51bmNpbyBmcm9tICcuLi9hbm51bmNpL2FubnVuY2lvLmh0bWwnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vaW1wb3J0IGNyZWF0ZUluc2VydGlvbiBmcm9tICcuLi9jcmVhQW5udW5jaW8vY3JlYUFubnVuY2lvJztcclxuXHJcbmxldCBsaXN0OiBpbnNlcnRpb25bXSA9IFtdO1xyXG5cclxuZnVuY3Rpb24gZ2V0QWxsSW5zZXJ0aW9ucygpIHsgLyogUXVlc3RhIMOoIHNvbG8gdW5hIHByb3ZhLCBzY29tbWVudGFyZSBsYSBmZXRjaCBwacO5IGdpw7kgKi9cclxuICAgIGxpc3QgPSBbXTtcclxuXHJcbiAgICBjb25zdCBpbWFnZUdpb2NvMSA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vaS5ldHN5c3RhdGljLmNvbS82Mjc3ODA0L3IvaWwvN2RmMDBlLzY5NzU0NjM0MC9pbF8xMTQweE4uNjk3NTQ2MzQwX2ZpdnMuanBnXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdpb2NvMiA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vd3d3Lm1vYnlnYW1lcy5jb20vaW1hZ2VzL2NvdmVycy9sLzE0NDQ1LXRoZS1sZWdlbmQtb2YtemVsZGEtbmVzLWZyb250LWNvdmVyLmpwZ1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHaW9jbzMgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9pdC9iL2IzL1BvayVDMyVBOW1vbl9HaWFsbG8ucG5nXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdpb2NvNCA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vc3RhdGljLndpa2lhLm5vY29va2llLm5ldC9tZXRhbGdlYXIvaW1hZ2VzL2UvZTEvTWV0YWxfR2Vhci5qcGdcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlR2FsbGVyeTEgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9pdC90aHVtYi83Lzc3L1Bpa2FjaHUucG5nLzEwMjRweC1QaWthY2h1LnBuZ1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHYWxsZXJ5MiA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vd3d3LnBuZ21hcnQuY29tL2ZpbGVzLzExL0Zyb2ctTWVtZS1QTkctSEQucG5nXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdhbGxlcnkzID0ge1xyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9tZWRpYS5saWNkbi5jb20vZG1zL2ltYWdlL0Q1NjM1QVFIdzNFNXlZeVhUTHcvcHJvZmlsZS1mcmFtZWRwaG90by1zaHJpbmtfODAwXzgwMC8wLzE2NDQ1MTg5MTg2MDY/ZT0xNjc1NjIwMDAwJnY9YmV0YSZ0PXgxUm5YcVdzRFdBT1ZRVVhHRnVqTW9kWFpoaUdVUUp1MGE2RkFzWk4zTG9cIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdpb2NvMSA9IHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuYW1lOiBcIlN1cGVyTWFyaW9cIixcclxuICAgICAgICBnZW5yZTogW3tnZW5yZTogXCJQTEFURk9STVwifV0sXHJcbiAgICAgICAgeWVhcjogMTk4NSxcclxuICAgICAgICBjb25zb2xlOiB7Y29uc29sZTogXCJORVNcIn0sXHJcbiAgICAgICAgY292ZXI6IGltYWdlR2lvY28xXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2lvY28yID0ge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIG5hbWU6IFwiVGhlIExlZ2VuZCBvZiBaZWxkYVwiLFxyXG4gICAgICAgIGdlbnJlOiBbe2dlbnJlOiBcIkFWVkVOVFVSQVwifV0sXHJcbiAgICAgICAgeWVhcjogMTk4NixcclxuICAgICAgICBjb25zb2xlOiB7Y29uc29sZTogXCJORVNcIn0sXHJcbiAgICAgICAgY292ZXI6IGltYWdlR2lvY28yXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2lvY28zID0ge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIG5hbWU6IFwiUG9rZW1vbiBHaWFsbG9cIixcclxuICAgICAgICBnZW5yZTogW3tnZW5yZTogXCJHRFJcIn1dLFxyXG4gICAgICAgIHllYXI6IDE5OTgsXHJcbiAgICAgICAgY29uc29sZToge2NvbnNvbGU6IFwiR0FNRV9CT1lfQ09MT1JcIn0sXHJcbiAgICAgICAgY292ZXI6IGltYWdlR2lvY28zXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2lvY280ID0ge1xyXG4gICAgICAgIGlkOiA0LFxyXG4gICAgICAgIG5hbWU6IFwiTWV0YWwgR2VhclwiLFxyXG4gICAgICAgIGdlbnJlOiBbe2dlbnJlOiBcIlNURUFMVEhcIn1dLFxyXG4gICAgICAgIHllYXI6IDE5ODcsXHJcbiAgICAgICAgY29uc29sZToge2NvbnNvbGU6IFwiTkVTXCJ9LFxyXG4gICAgICAgIGNvdmVyOiBpbWFnZUdpb2NvNFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHB1Ymxpc2hlckdpb2NvMSA9IHtcclxuICAgICAgICB1c2VySWQ6IDEsXHJcbiAgICAgICAgdXNlcm5hbWU6IFwiUGllcm9hZmZvbmRvXCIsXHJcbiAgICAgICAgbmFtZTogXCJQaWVyaW5vXCIsXHJcbiAgICAgICAgc3VybmFtZTogXCJDaWNjaW5vXCIsXHJcbiAgICAgICAgZW1haWw6IFwicGllcmlub2N1b3JpY2lub0BhbW9yaW5vLmNvbVwiLFxyXG4gICAgICAgIHJhdGluZzogNjY2LFxyXG4gICAgICAgIHZpZGVvZ2FtZXM6IFtnaW9jbzFdXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5zZXJ0aW9uMTogaW5zZXJ0aW9uID0ge1xyXG4gICAgICAgIGFwcHJvdmVkOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiBcIlNjYW1iaW8gU3VwZXJNYXJpb1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlNjYW1iaW8gc3VwZXJtYXJpbyB4a8OoIG1pIHNvbm8gc2Vra2F0byBhIGdpb2NhcmNpXCIsXHJcbiAgICAgICAgcHVibGlzaGVyOiBwdWJsaXNoZXJHaW9jbzEsXHJcbiAgICAgICAgZ2FsbGVyeTogW2dpb2NvMS5jb3ZlciwgaW1hZ2VHYWxsZXJ5MSwgaW1hZ2VHYWxsZXJ5MiwgaW1hZ2VHYWxsZXJ5M10sXHJcbiAgICAgICAgdHJhZGVHYW1lOiBnaW9jbzEsXHJcbiAgICAgICAgd2lzaExpc3Q6IFtnaW9jbzIsIGdpb2NvMywgZ2lvY280XSxcclxuICAgICAgICBvdXRjb21lOiBcIldJUFwiLFxyXG4gICAgICAgIHB1YmxpY2F0aW9uRGF0ZTogXCIyOS0wMS0yMDIzXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbnNlcnRpb24yOiBpbnNlcnRpb24gPSB7XHJcbiAgICAgICAgYXBwcm92ZWQ6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IFwiU2NhbWJpbyBwYWNtYW5cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTY2FtYmlvIHN1cGVybWFyaW8geGvDqCBtaSBzb25vIHNla2thdG8gYSBnaW9jYXJjaVwiLFxyXG4gICAgICAgIHB1Ymxpc2hlcjogcHVibGlzaGVyR2lvY28xLFxyXG4gICAgICAgIGdhbGxlcnk6IFtnaW9jbzIuY292ZXIsIGltYWdlR2FsbGVyeTIsIGltYWdlR2FsbGVyeTIsIGltYWdlR2FsbGVyeTNdLFxyXG4gICAgICAgIHRyYWRlR2FtZTogZ2lvY28yLFxyXG4gICAgICAgIHdpc2hMaXN0OiBbZ2lvY28yLCBnaW9jbzMsIGdpb2NvNF0sXHJcbiAgICAgICAgb3V0Y29tZTogXCJXSVBcIixcclxuICAgICAgICBwdWJsaWNhdGlvbkRhdGU6IFwiMjktMDEtMjAyM1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5zZXJ0aW9uMzogaW5zZXJ0aW9uID0ge1xyXG4gICAgICAgIGFwcHJvdmVkOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiBcInNjYW1iaW8gY29kZXN0b1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlNjYW1iaW8gc3VwZXJtYXJpbyB4a8OoIG1pIHNvbm8gc2Vra2F0byBhIGdpb2NhcmNpXCIsXHJcbiAgICAgICAgcHVibGlzaGVyOiBwdWJsaXNoZXJHaW9jbzEsXHJcbiAgICAgICAgZ2FsbGVyeTogW2dpb2NvMy5jb3ZlciwgaW1hZ2VHYWxsZXJ5MywgaW1hZ2VHYWxsZXJ5MiwgaW1hZ2VHYWxsZXJ5M10sXHJcbiAgICAgICAgdHJhZGVHYW1lOiBnaW9jbzMsXHJcbiAgICAgICAgd2lzaExpc3Q6IFtnaW9jbzIsIGdpb2NvMywgZ2lvY280XSxcclxuICAgICAgICBvdXRjb21lOiBcIldJUFwiLFxyXG4gICAgICAgIHB1YmxpY2F0aW9uRGF0ZTogXCIyOS0wMS0yMDIzXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbnNlcnRpb240OiBpbnNlcnRpb24gPSB7XHJcbiAgICAgICAgYXBwcm92ZWQ6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IFwiU2NhbWJpbyBwaXBvbG9cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTY2FtYmlvIHN1cGVybWFyaW8geGvDqCBtaSBzb25vIHNla2thdG8gYSBnaW9jYXJjaVwiLFxyXG4gICAgICAgIHB1Ymxpc2hlcjogcHVibGlzaGVyR2lvY28xLFxyXG4gICAgICAgIGdhbGxlcnk6IFtnaW9jbzQuY292ZXIsIGltYWdlR2FsbGVyeTEsIGltYWdlR2FsbGVyeTIsIGltYWdlR2FsbGVyeTNdLFxyXG4gICAgICAgIHRyYWRlR2FtZTogZ2lvY280LFxyXG4gICAgICAgIHdpc2hMaXN0OiBbZ2lvY28yLCBnaW9jbzMsIGdpb2NvNF0sXHJcbiAgICAgICAgb3V0Y29tZTogXCJXSVBcIixcclxuICAgICAgICBwdWJsaWNhdGlvbkRhdGU6IFwiMjktMDEtMjAyM1wiXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGxpc3QucHVzaChpbnNlcnRpb24xKTtcclxuICAgIGxpc3QucHVzaChpbnNlcnRpb24yKTtcclxuICAgIGxpc3QucHVzaChpbnNlcnRpb24zKTtcclxuICAgIGxpc3QucHVzaChpbnNlcnRpb240KTtcclxuXHJcbiAgICBcclxuICAgIC8qUVVFU1RPIEUnIExBIEZVTlpJT05FIEdJVVNUQSBOT04gRkFNTyBDSEUgU0JBR0xJQVRFISAqL1xyXG5cclxuICAgIC8qRmV0Y2ggYSBiYWNrZW5kIGNvbiB0dXR0aSBnbGkgYW5udW5jaSwgYWdnaW9ybmEgbGEgbGlzdGEgbGlzdCovXHJcbiAgICAvLyBsaXN0PVtdO1xyXG4gICAgLy8gZmV0Y2goJy9UaXBvQW5udW5jaUNoZW5lc28nKVxyXG4gICAgLy8gLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAvLyAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgLy8gICAgIGZvcihsZXQgZCBvZiBkYXRhKXtcclxuICAgIC8vICAgICAgICAgbGlzdC5wdXNoKGQpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhvbWUoKXtcclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuICAgIG1haW4uaW5uZXJIVE1MID0gaG9tZTtcclxuICAgXHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnRpb25zQ2FyZFwiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBhbm51bmNpO1xyXG4gICAgICAgIGNyZWF0ZVBhZ2UoKTtcclxuICAgIH07XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnRDYXJkXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGNyZWFBbm51bmNpbztcclxuICAgICAgICBjcmVhdGVJbnNlcnRpb25QYWdlKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQnV0dG9uVGl0bGVcIikub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBsZXQga2V5d29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoVGl0bGVcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICBpZihrZXl3b3JkLnZhbHVlICE9IFwiXCIpe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MID0gYW5udW5jaTtcclxuICAgICAgICAgICAgY3JlYXRlUGFnZSgpO1xyXG4gICAgICAgICAgICBzZWFyY2hCeVRpdGxlKGtleXdvcmQudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFRpdGxlXCIpLm9ua2V5ZG93biA9IChlKSA9PiB7XHJcbiAgICAgICAgbGV0IGtleXdvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFRpdGxlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgaWYoZS5rZXkgPT0gXCJFbnRlclwiICYmIGtleXdvcmQudmFsdWUhPSBcIlwiKXtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGFubnVuY2k7XHJcbiAgICAgICAgICAgIGNyZWF0ZVBhZ2UoKTtcclxuICAgICAgICAgICAgc2VhcmNoQnlUaXRsZShrZXl3b3JkLnZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbEluc2VydGlvbnMoKTtcclxuICAgIGNyZWF0ZUl0ZW1DYXJvdXNlbCgpO1xyXG5cclxuICAgIFxyXG5cclxufSBcclxuICAgIFxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVJdGVtQ2Fyb3VzZWwoKXtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgY2FySW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5uZXJDYXJvdXNlbEhvbWUnKTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgNCAmJiBpIDwgbGlzdC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBjbENhcm91c2VsSXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgaWYoaSA9PSAwKXtcclxuICAgICAgICAgICAgICAgIGNsQ2Fyb3VzZWxJdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Nhcm91c2VsLWl0ZW0gYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgY2xDYXJvdXNlbEl0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2Fyb3VzZWwtaXRlbScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgbGlzdFtpXS50cmFkZUdhbWUuY292ZXIubGluayk7XHJcbiAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ltZ0NhcmQnKTtcclxuICAgICAgICAgICAgbGV0IGNsQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjbENhcmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkIHRleHQtYmctc2Vjb25kYXJ5Jyk7XHJcbiAgICAgICAgICAgIGNsQ2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FubkNhcmQnKTtcclxuICAgICAgICAgICAgbGV0IGNhckJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY2FyQm9keS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQtYm9keScpO1xyXG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xyXG4gICAgICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQtdGl0bGUnKTtcclxuICAgICAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gbGlzdFtpXS50cmFkZUdhbWUubmFtZTtcclxuICAgICAgICAgICAgbGV0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGRlc2Muc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkLXRleHQnKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0W2ldLnRyYWRlR2FtZS5nZW5yZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZGVzYy5pbm5lckhUTUwgKz0gbGlzdFtpXS50cmFkZUdhbWUuZ2VucmVbaV0uZ2VucmUgKyBcIiBcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlc2MuaW5uZXJIVE1MICs9IFwiPGJyPlwiXHJcbiAgICAgICAgICAgICsgXCJBbm5vOiBcIiArIGxpc3RbaV0udHJhZGVHYW1lLnllYXIgKyBcIiBcIlxyXG4gICAgICAgICAgICArIFwiQ29uc29sZTogXCIgKyBsaXN0W2ldLnRyYWRlR2FtZS5jb25zb2xlLmNvbnNvbGUgKyBcIjxicj5cIlxyXG4gICAgICAgICAgICArXCJEZXNjcml6aW9uZTpcIjtcclxuICAgICAgICAgICAgbGV0IGdvQW5uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgICBnb0Fubi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBcIiNcIik7XHJcbiAgICAgICAgICAgIGdvQW5uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYnRuIGJ0bi1wcmltYXJ5Jyk7XHJcbiAgICAgICAgICAgIGdvQW5uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpLmlubmVySFRNTCA9IGFubnVuY2lvO1xyXG4gICAgICAgICAgICAgICAgZXhwYW5kSW5zZXJ0aW9uKGxpc3RbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdvQW5uLmlubmVySFRNTCA9ICdWYWkgYWxsIGFubnVuY2lvJztcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgIGNhcklubmVyLmFwcGVuZENoaWxkKGNsQ2Fyb3VzZWxJdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xDYXJvdXNlbEl0LmFwcGVuZENoaWxkKGNsQ2FyZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsQ2FyZC5hcHBlbmQoaW1nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xDYXJkLmFwcGVuZChjYXJCb2R5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhckJvZHkuYXBwZW5kKHRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhckJvZHkuYXBwZW5kKGRlc2MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyQm9keS5hcHBlbmQoZ29Bbm4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lO1xyXG5cclxuLypcclxuYXN5bmMgZnVuY3Rpb24gZ2V0dGl0bGUodGl0bGU6IHN0cmluZyk6e1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgpXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcblxyXG59XHJcbiovIiwiaW1wb3J0IG1vZGFsIGZyb20gJy4vbW9kYWwuaHRtbCdcclxuaW1wb3J0IGxvZ2luIGZyb20gJy4uL2xvZ2luL2xvZ2luLmh0bWwnXHJcbmltcG9ydCBsb2dpbkZvb3RlciBmcm9tICcuLi9sb2dpbi9sb2dpbkZvb3Rlci5odG1sJ1xyXG5pbXBvcnQgcmVnaXN0cmF6aW9uZSBmcm9tICcuLi9yZWdpc3RyYXppb25lL3JlZ2lzdHJhemlvbmUuaHRtbCdcclxuaW1wb3J0IHJlZ0Zvb3RlciBmcm9tICcuLi9yZWdpc3RyYXppb25lL3JlZ2lzdHJhemlvbmVGb290ZXIuaHRtbCdcclxuaW1wb3J0IGxvZ291dCBmcm9tICcuLi9sb2dvdXQvbG9nb3V0Lmh0bWwnXHJcbmltcG9ydCBwcm9maWxlIGZyb20gJy4uL3Byb2ZpbG9VdGVudGUvcHJvZmlsZS5odG1sJ1xyXG5pbXBvcnQgKiBhcyBuYXYgZnJvbSBcIi4uL25hdmJhci9uYXZiYXJcIjtcclxuaW1wb3J0IGxvZ2dlZCBmcm9tICcuLi9pbnRlcmZhY2VzL2xvZ2dlZCdcclxuaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSAnLi4vaG9tZS9ob21lJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vZGFsKCl7XHJcbiAgICBsZXQgZGl2TW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGl2TW9kYWwuaW5uZXJIVE1MID0gbW9kYWw7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKS5hcHBlbmRDaGlsZChkaXZNb2RhbCk7XHJcbiAgICBzaG93TG9nSW5Nb2RhbCgpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpblwiKS5vbmNsaWNrID0gc2hvd0xvZ0luTW9kYWw7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25PdXRCdXR0b25cIikub25jbGljayA9IHNob3dMb2dPdXRNb2RhbDtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1NpZ25VcE1vZGFsKCl7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxCb2R5XCIpLmlubmVySFRNTCA9IHJlZ2lzdHJhemlvbmU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxGb290ZXJcIikuaW5uZXJIVE1MID0gcmVnRm9vdGVyO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cnl0b1NpZ25VcFwiKS5vbmNsaWNrID0gdHJ5VG9TaWduVXA7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25VcExvZ2luXCIpLm9uY2xpY2sgPSBzaG93TG9nSW5Nb2RhbDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVNpZ25VcFwiKS5vbmtleXVwID0gdmFsaWRhdGVGb3JtO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdXJuYW1lU2lnblVwXCIpLm9ua2V5dXAgPSB2YWxpZGF0ZUZvcm07XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJuYW1lU2lnblVwXCIpLm9ua2V5dXAgPSB2YWxpZGF0ZUZvcm07XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsU2lnblVwXCIpLm9ua2V5dXAgPSB2YWxpZGF0ZUZvcm07XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkU2lnblVwXCIpLm9ua2V5dXAgPSB2YWxpZGF0ZUZvcm07XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbmZpcm1fcGFzc3dvcmRTaWduVXBcIikub25rZXl1cCA9IHZhbGlkYXRlRm9ybTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0xvZ0luTW9kYWwoKXtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbEJvZHlcIikuaW5uZXJIVE1MID0gbG9naW47XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxGb290ZXJcIikuaW5uZXJIVE1MID0gbG9naW5Gb290ZXI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luU2lnblVwXCIpLm9uY2xpY2sgPSBzaG93U2lnblVwTW9kYWw7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyeVRvTG9nXCIpLm9uY2xpY2sgPSB0cnlUb0xvZ0luO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzaG93TG9nT3V0TW9kYWwoKXtcclxuICAgIGxldCByZXN1bHQgOiBib29sZWFuPSBhd2FpdCB0cnlUb0xvZ091dCgpO1xyXG4gICAgaWYocmVzdWx0KXtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxCb2R5XCIpLmlubmVySFRNTCA9IGxvZ291dDtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxGb290ZXJcIikuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBjcmVhdGVIb21lKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRyeVRvU2lnblVwKCkge1xyXG4gICAgY29uc3QgdXNlciA9IHtcclxuICAgICAgICB1c2VybmFtZTogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcm5hbWVTaWduVXBcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgLFxyXG4gICAgICAgIHBhc3N3b3JkOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzd29yZFNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSxcclxuICAgICAgICBuYW1lOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLFxyXG4gICAgICAgIHN1cm5hbWU6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1cm5hbWVTaWduVXBcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcbiAgICAgICAgZW1haWw6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyKVxyXG4gICAgfVxyXG5cclxuICAgIGZldGNoKFwiL3VzZXJcIiwgcmVxdWVzdCkudGhlbigocmVzcG9uc2UpPT5yZXNwb25zZS5qc29uKCkpLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgaWYoZGF0YSl7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnblVwUmVzdWx0XCIpLmlubmVySFRNTD1cIlJlZ2lzdHJhdG8gY29uIHN1Y2Nlc3NvIVwiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyeXRvU2lnblVwXCIpLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduVXBSZXN1bHRcIikuaW5uZXJIVE1MPVwiT3BzLCBxdWFsY29zYSDDqCBhbmRhdG8gc3RvcnRvIVwiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyeXRvU2lnblVwXCIpLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRyeVRvTG9nSW4oKSB7XHJcbiAgICBjb25zdCBsb2dpbiA9IHtcclxuICAgICAgICB1c2VybmFtZTogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcm5hbWVTaWduSW5cIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkU2lnbkluXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShsb2dpbilcclxuICAgIH07XHJcbiAgICBsZXQgcmVzdWx0IDogYW55ID0gZmV0Y2goXCIvbG9naW5cIiwgcmVxdWVzdClcclxuICAgIC50aGVuKChyZXNwb25zZSk9PnJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKT0+e1xyXG4gICAgICAgIGlmKGRhdGEubG9nZ2VkKXtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpblJlc3VsdFwiKS5pbm5lckhUTUw9XCJMb2dnYXRvIGNvbiBzdWNjZXNzbyFcIjtcclxuICAgICAgICAgICAgbmF2LnNldE5hdihkYXRhLmFjY291bnRUeXBlKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cnlUb0xvZ1wiKS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5TaWduVXBcIikuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgICBjcmVhdGVIb21lKCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5SZXN1bHRcIikuaW5uZXJIVE1MPVwiT3BzLCBxdWFsY29zYSDDqCBhbmRhdG8gc3RvcnRvXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHRyeVRvTG9nT3V0KCkgOlByb21pc2U8Ym9vbGVhbj57XHJcbiAgICBsZXQgcHJvbWlzZVJlc3VsdCA9IGZldGNoKFwiL2xvZ291dFwiKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKT0+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgaWYoZGF0YSl7XHJcbiAgICAgICAgICAgIG5hdi5zZXROYXYoXCJHVUVTVFwiKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cnlUb0xvZ1wiKS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpblNpZ25VcFwiKS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGF9KTtcclxuICAgIHJldHVybiBwcm9taXNlUmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUZvcm0oKXtcclxuICAgIGxldCB1c2VybmFtZSA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJuYW1lU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlIDtcclxuICAgIGxldCBwYXNzd29yZCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgbGV0IG5hbWUgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgbGV0IHN1cm5hbWUgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdXJuYW1lU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgbGV0IGVtYWlsID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxTaWduVXBcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICBsZXQgY29uZmlybV9wYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uZmlybV9wYXNzd29yZFNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uZmlybV9wYXNzd29yZC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIlwiKTtcclxuICAgIFxyXG4gICAgaWYodXNlcm5hbWU9PVwiXCIgfHwgcGFzc3dvcmQ9PVwiXCIgfHxuYW1lPT1cIlwiIHx8IHN1cm5hbWU9PVwiXCIgfHwgZW1haWw9PVwiXCIpe1xyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyeXRvU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQgKS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKHBhc3N3b3JkICE9IGNvbmZpcm1fcGFzc3dvcmQudmFsdWUpIHtcclxuICAgICAgICAgICAgY29uZmlybV9wYXNzd29yZC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJvcmRlci1jb2xvcjogcmVkO1wiKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uZmlybV9wYXNzd29yZC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJvcmRlci1jb2xvcjogZ3JlZW47XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICAgIGlmIChwYXNzd29yZCAhPSBjb25maXJtX3Bhc3N3b3JkLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbmZpcm1fcGFzc3dvcmQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJib3JkZXItY29sb3I6IHJlZDtcIik7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbmZpcm1fcGFzc3dvcmQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJib3JkZXItY29sb3I6IGdyZWVuO1wiKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cnl0b1NpZ25VcFwiKS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTW9kYWw7IiwiaW1wb3J0IG5hdiBmcm9tIFwiLi9uYXZiYXIuaHRtbFwiO1xyXG5pbXBvcnQgY3JlYXRlTW9kYWwgZnJvbSBcIi4uL21vZGFsL21vZGFsXCI7XHJcbmltcG9ydCBhbm51bmNpIGZyb20gXCIuLi9hbm51bmNpL2FubnVuY2kuaHRtbFwiO1xyXG5pbXBvcnQgZ2VzdGlvbmVhbm51bmNpIGZyb20gXCIuLi9hbm51bmNpL2dlc3Rpb25lYW5udW5jaS5odG1sXCI7XHJcbmltcG9ydCBjcmVhdGVQYWdlIGZyb20gXCIuLi9hbm51bmNpL2FubnVuY2lcIjtcclxuaW1wb3J0IGhvbWUgZnJvbSBcIi4uL2hvbWUvaG9tZS5odG1sXCI7XHJcbmltcG9ydCBjcmVhdGVJdGVtQ2Fyb3VzZWwgZnJvbSBcIi4uL2hvbWUvaG9tZVwiXHJcbmltcG9ydCBjcmVhdGVIb21lIGZyb20gXCIuLi9ob21lL2hvbWVcIjtcclxuaW1wb3J0IHByb2ZpbGUgZnJvbSBcIi4uL3Byb2ZpbG9VdGVudGUvcHJvZmlsZS5odG1sXCI7XHJcbmltcG9ydCBnZXN0aW9uZVV0ZW50aSBmcm9tIFwiLi4vZ2VzdGlvbmVVdGVudGkvZ2VzdGlvbmVVdGVudGkuaHRtbFwiO1xyXG5pbXBvcnQgZ2V0QWxsVXNlcnMgZnJvbSBcIi4uL2dlc3Rpb25lVXRlbnRpL2dlc3Rpb25lVXRlbnRpXCI7XHJcbmltcG9ydCBjcmVhdGVQYWdlMiBmcm9tIFwiLi4vYW5udW5jaS9nZXN0aW9uZWFubnVuY2lcIjtcclxuaW1wb3J0IGNyZWFBbm51bmNpbyBmcm9tIFwiLi4vY3JlYUFubnVuY2lvL2NyZWFBbm51bmNpby5odG1sXCJcclxuaW1wb3J0IHZpZGVvZ2lvY2hpIGZyb20gXCIuLi92aWRlb2dpb2NoaS92aWRlb2dpb2NoaS5odG1sXCJcclxuaW1wb3J0IGNyZWF0ZUluc2VydGlvblBhZ2UgZnJvbSBcIi4uL2NyZWFBbm51bmNpby9jcmVhQW5udW5jaW9cIlxyXG5pbXBvcnQgY3JlYXRlR2FtZVBhZ2UgZnJvbSBcIi4uL3ZpZGVvZ2lvY2hpL3ZpZGVvZ2lvY2hpXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xyXG4gICAgXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKS5pbm5lckhUTUwgPSBuYXY7XHJcbiAgICBjcmVhdGVNb2RhbCgpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dvXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgY3JlYXRlSG9tZSgpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lc1wiKS5vbmNsaWNrPSgpPT57XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUw9dmlkZW9naW9jaGk7IFxyXG4gICAgICBjcmVhdGVHYW1lUGFnZSgpOyBcclxuICAgIH07XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnRpb25zXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGFubnVuY2k7XHJcbiAgICAgICAgY3JlYXRlUGFnZSgpO1xyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkSW5zZXJ0aW9uXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGNyZWFBbm51bmNpbztcclxuICAgICAgICBjcmVhdGVJbnNlcnRpb25QYWdlKCk7XHJcbiAgICB9O1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNNYW5hZ2VtZW50XCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGdlc3Rpb25lYW5udW5jaTtcclxuICAgICAgICBjcmVhdGVQYWdlMigpO1xyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFuYWdlbWVudFwiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBnZXN0aW9uZVV0ZW50aTtcclxuICAgICAgICBnZXRBbGxVc2VycygpO1xyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZmlsZVwiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBwcm9maWxlO1xyXG4gICAgfTtcclxuICAgIGZldGNoKFwiL3dob0lzTG9nZ2VkXCIpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKT0+e1xyXG4gICAgICAgIHNldE5hdihkYXRhKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXROYXYoYWNjb3VudFR5cGUgOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGJ0bl9nZXN0VXRlbnRpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYW5hZ2VtZW50XCIpO1xyXG4gICAgY29uc3QgYnRuX2luc01hbmFnZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc01hbmFnZW1lbnRcIik7XHJcbiAgICBjb25zdCBidG5fbG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luXCIpO1xyXG4gICAgY29uc3QgYnRuX3NpZ25PdXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25PdXRCdXR0b25cIik7XHJcbiAgICBjb25zdCBidG5fYWRkSW5zZXJ0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRJbnNlcnRpb25cIik7XHJcbiAgICBpZihhY2NvdW50VHlwZT09XCJBRE1JTlwiKXtcclxuICAgICAgICBidG5fZ2VzdFV0ZW50aS5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgYnRuX2FkZEluc2VydGlvbi5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIGJ0bl9pbnNNYW5hZ2VtZW50LnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKTtcclxuICAgICAgICBidG5fbG9naW4uc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICBidG5fc2lnbk91dEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIik7XHJcbiAgICB9ZWxzZSBpZihhY2NvdW50VHlwZT09XCJVU0VSXCIpe1xyXG4gICAgICAgIGJ0bl9nZXN0VXRlbnRpLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgYnRuX2FkZEluc2VydGlvbi5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgYnRuX2luc01hbmFnZW1lbnQuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICBidG5fbG9naW4uc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICBidG5fc2lnbk91dEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIik7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBidG5fZ2VzdFV0ZW50aS5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIGJ0bl9hZGRJbnNlcnRpb24uc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICBidG5faW5zTWFuYWdlbWVudC5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIGJ0bl9sb2dpbi5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgYnRuX3NpZ25PdXRCdXR0b24uc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVOYXY7XHJcbiIsImltcG9ydCBzaG93UHJvZmlsZSBmcm9tIFwiLi9zaG93UHJvZmlsZS5odG1sXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1VzZXJQcm9maWxlKCl7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MID0gc2hvd1Byb2ZpbGU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNob3dVc2VyUHJvZmlsZSIsImltcG9ydCBjcmVhVmlkZW9naW9jbyBmcm9tIFwiLi9jcmVhVmlkZW9naW9jby5odG1sXCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWaWRlb0dhbWUoKXtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBjcmVhVmlkZW9naW9jbztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVmlkZW9HYW1lIiwiaW1wb3J0IHsgZGF0YSB9IGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IHZpZGVvZ2FtZSBmcm9tIFwiLi4vaW50ZXJmYWNlcy92aWRlb2dhbWVcIjtcclxuaW1wb3J0IGNyZWF0ZVZpZGVvR2FtZSBmcm9tIFwiLi9jcmVhVmlkZW9naW9jaGlcIjtcclxuaW1wb3J0IGNyZWF0ZUdhbWVWaXN1YWxpemF0aW9uIGZyb20gXCIuL3Zpc3VhbGl6emFWaWRlb2dpb2NvXCJcclxuXHJcbmxldCBnYW1lTGlzdDogdmlkZW9nYW1lW10gPSBbXTtcclxubGV0IGdhbWVWaWV3OiBudW1iZXIgPSA2O1xyXG5sZXQgdHlwZTogc3RyaW5nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdhbWVQYWdlKCkge1xyXG4gICAgZmV0Y2goXCIvd2hvSXNMb2dnZWRcIilcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSA9PSBcIkFETUlOXCIpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVmlkZW9nYW1lXCIpLnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVmlkZW9nYW1lXCIpLm9uY2xpY2sgPSBjcmVhdGVWaWRlb0dhbWU7XHJcbiAgICAgICAgICAgICAgICB0eXBlID0gXCJBRE1JTlwiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEgPT0gXCJVU0VSXCIpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVmlkZW9nYW1lXCIpLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgICAgICB0eXBlID0gXCJVU0VSXCJcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVmlkZW9nYW1lXCIpLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgICAgICB0eXBlID0gXCJHVUVTVFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZ2V0QWxsR2FtZXMoKTsgXHJcbiAgICAgICAgICAgIGNyZWF0ZUdhbWVQYWdpbmF0aW9uKCk7XHJcbiAgICAgICAgICAgIHNob3dHYW1lcygxKTtcclxuICAgICAgICB9KVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEFsbEdhbWVzKCkge1xyXG4gICAgZ2FtZUxpc3Q9W107XHJcbiAgIC8qIGZldGNoKFwiL3ZpZGVvZ2FtZXNcIilcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IChyZXNwb25zZS5qc29uKCkpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGdhbWUgb2YgZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgZ2FtZUxpc3QucHVzaChnYW1lKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICovXHJcblxyXG4gICAgICAgIGNvbnN0IGltYWdlR2lvY28xID0ge1xyXG4gICAgICAgICAgICBsaW5rOiBcImh0dHBzOi8vaS5ldHN5c3RhdGljLmNvbS82Mjc3ODA0L3IvaWwvN2RmMDBlLzY5NzU0NjM0MC9pbF8xMTQweE4uNjk3NTQ2MzQwX2ZpdnMuanBnXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGdpb2NvMSA9IHtcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiU3VwZXJNYXJpb1wiLFxyXG4gICAgICAgICAgICBnZW5yZTogW3tnZW5yZTogXCJQTEFURk9STVwifV0sXHJcbiAgICAgICAgICAgIHllYXI6IDE5ODUsXHJcbiAgICAgICAgICAgIGNvbnNvbGU6IHtjb25zb2xlOiBcIk5FU1wifSxcclxuICAgICAgICAgICAgY292ZXI6IGltYWdlR2lvY28xXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjc7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaSAhPSAxNykge1xyXG4gICAgICAgICAgICAgICAgZ2FtZUxpc3QucHVzaChnaW9jbzEpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBnYW1lTGlzdC5wdXNoKGdpb2NvMSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0dhbWVzKGk6IG51bWJlcikge1xyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlZpZGVvZ2FtZUNvbnRlbnRcIik7XHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBsZXQgc3RhcnQgPSAoaSAtIDEpICogZ2FtZVZpZXc7XHJcbiAgICBsZXQgc3RvcCA9IChpICogZ2FtZVZpZXcpIC0gMTtcclxuICAgIGZvciAoc3RhcnQ7IHN0YXJ0IDw9IHN0b3A7IHN0YXJ0KyspIHtcclxuICAgICAgICBpZiAoc3RhcnQgPj0gZ2FtZUxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICBjb2wuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb2wtNCB0ZXh0LWNlbnRlclwiKTtcclxuICAgICAgICBjb2wuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMilcIik7XHJcbiAgICAgICAgY29sLm9ubW91c2VvdmVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb2wuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNilcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbC5vbm1vdXNlb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb2wuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMilcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb2wub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgY3JlYXRlR2FtZVZpc3VhbGl6YXRpb24oZ2FtZUxpc3Rbc3RhcnRdKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBsZXQgZ2FtZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgICAgIGdhbWVUaXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwibXktNFwiKVxyXG4gICAgICAgIGxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gZ2FtZUxpc3Rbc3RhcnRdLmNvdmVyLmxpbms7XHJcbiAgICAgICAgaW1hZ2Uud2lkdGggPSAyMDA7XHJcbiAgICAgICAgZ2FtZVRpdGxlLmlubmVySFRNTCA9IGdhbWVMaXN0W3N0YXJ0XS5uYW1lO1xyXG5cclxuICAgICAgICBjb2wuYXBwZW5kKGdhbWVUaXRsZSwgaW1hZ2UpO1xyXG4gICAgICAgIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0eXBlID09IFwiVVNFUlwiKSB7XHJcbiAgICAgICAgICAgIGFkZEJ1dHRvbi5pbm5lckhUTUwgPSBcIkFnZ2l1bmdpIGFsbGEgdHVhIExpc3RhIVwiXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBhZGRCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZmV0Y2goXCIvdXNlci9nYW1lL1wiK2dhbWVMaXN0W3N0YXJ0XS5pZClcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSk9PihyZXNwb25zZS5qc29uKCkpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb2wuYXBwZW5kKGFkZEJ1dHRvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKGNvbCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVHYW1lUGFnaW5hdGlvbigpIHtcclxuICAgIGxldCBzaXplOiBudW1iZXIgPSBnYW1lTGlzdC5sZW5ndGhcclxuICAgIGxldCB0YWJzOiBudW1iZXIgPSBNYXRoLmNlaWwoc2l6ZSAvIGdhbWVWaWV3KTtcclxuICAgIGxldCBwYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZXNWXCIpO1xyXG4gICAgcGFnZXMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRhYnM7IGkrKykge1xyXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBpZiAoaSA9PSAxKSB7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtIGFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIsIFwicGFnZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1saW5rXCIpO1xyXG4gICAgICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYWxsTGkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VzVlwiKS5jaGlsZHJlbjtcclxuICAgICAgICAgICAgZm9yIChsZXQgb25lTGkgb2YgYWxsTGkpIHtcclxuICAgICAgICAgICAgICAgIG9uZUxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgb25lTGkucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtIGFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIsIFwicGFnZVwiKTtcclxuICAgICAgICAgICAgc2hvd0dhbWVzKGkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgYnRuLmlubmVySFRNTCA9IFwiXCIgKyAoaSk7XHJcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYnRuKTtcclxuICAgICAgICBwYWdlcy5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlR2FtZVBhZ2U7IiwiaW1wb3J0IHZpZGVvZ2FtZSBmcm9tIFwiLi4vaW50ZXJmYWNlcy92aWRlb2dhbWVcIjtcclxuaW1wb3J0IHZpc3VhbGl6emFWaWRlb2dpb2NvIGZyb20gXCIuL3Zpc3VhbGl6emFWaWRlb2dpb2NvLmh0bWxcIjtcclxuaW1wb3J0IGNyZWF0ZUdhbWVQYWdlIGZyb20gXCIuL3ZpZGVvZ2lvY2hpXCI7XHJcbmltcG9ydCB2aWRlb2dpb2NoaSBmcm9tIFwiLi92aWRlb2dpb2NoaS5odG1sXCJcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR2FtZVZpc3VhbGl6YXRpb24oZ2FtZTp2aWRlb2dhbWUpe1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTD12aXN1YWxpenphVmlkZW9naW9jbztcclxuICAgIHNldGJhY2soKTtcclxuICAgIHNldFBhZ2UoZ2FtZSlcclxuICAgIFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0YmFjaygpe1xyXG4gICAgbGV0IGJhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2stZ2FtZXNcIilcclxuICAgIGJhY2sub25jbGljaz0oKT0+e1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUw9dmlkZW9naW9jaGlcclxuICAgICAgICBjcmVhdGVHYW1lUGFnZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRQYWdlKGdhbWU6dmlkZW9nYW1lKXtcclxuICAgIGxldCBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lVGl0bGVcIik7XHJcbiAgICBsZXQgdGl0bGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgdGl0bGUuaW5uZXJIVE1MPWdhbWUubmFtZTtcclxuICAgIGhlYWQuYXBwZW5kKHRpdGxlKTtcclxuICAgIGhlYWQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInRleHQtY2VudGVyIG1iLTVcIilcclxuICAgIGxldCB2aWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lSW1hZ2VcIik7XHJcbiAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGltZy5zcmM9Z2FtZS5jb3Zlci5saW5rO1xyXG4gICAgaW1nLndpZHRoPTQwMDtcclxuICAgIHZpZXcuYXBwZW5kKGltZyk7XHJcbiAgICBsZXQgaW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZUluZm9cIik7XHJcbiAgICBsZXQgZ2VuZXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpXHJcbiAgICBnZW5lcmUuaW5uZXJIVE1MPSBcIiBHRU5FUkUvSTogXCI7XHJcbiAgICBmb3IobGV0IGk9MDsgaTxnYW1lLmdlbnJlLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBnZW5lcmUuaW5uZXJIVE1MICs9IGdhbWUuZ2VucmVbaV0uZ2VucmUgK1wiIFwiO1xyXG4gICAgfSBcclxuICAgIGxldCBjb25zb2xlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGNvbnNvbGUuaW5uZXJIVE1MPSBcIiBDT05TT0xFOiBcIitnYW1lLmNvbnNvbGUuY29uc29sZTtcclxuICAgIGxldCB5ZWFyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIHllYXIuaW5uZXJIVE1MPVwiIEFOTk86IFwiK2dhbWUueWVhclxyXG4gICAgaW5mby5hcHBlbmQoZ2VuZXJlLGNvbnNvbGUseWVhcik7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHYW1lVmlzdWFsaXphdGlvbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSBcIi4vaG9tZS9ob21lXCI7XHJcbmltcG9ydCBjcmVhdGVOYXYgZnJvbSBcIi4vbmF2YmFyL25hdmJhclwiO1xyXG5pbXBvcnQgY3JlYXRlRm90IGZyb20gXCIuL2Zvb3Rlci9mb290ZXJcIjtcclxuXHJcblxyXG5jcmVhdGVOYXYoKTtcclxuY3JlYXRlSG9tZSgpO1xyXG5jcmVhdGVGb3QoKTtcclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
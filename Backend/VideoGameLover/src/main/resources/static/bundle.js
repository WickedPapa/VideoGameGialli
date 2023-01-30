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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n<div style=\"display: flex;\">\r\n\r\n    <span style=\"margin-right: 40px\">\r\n        <button class=\"btn btn-primary\" id=\"selectAll\">Visualizza tutti</button>\r\n            </span> <!--funzione che prende tutti gli annunci e li schiaffa nel contenuto annunci-->\r\n                <span style=\"margin-right: 40px\" class=\"dropdown\">\r\n                    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                    Visualizza per Genere\r\n                    </button>\r\n                    <ul id=\"genres\" class=\"dropdown-menu\">\r\n                        <li id=\"PLATFORM\"><button class=\"dropdown-item\" type=\"button\">PLATFORM</button></li>\r\n                    </ul>\r\n                </span>\r\n            <span style=\"margin-right: 40px\" class=\"dropdown\">\r\n                <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                Visualizza per Anno\r\n                </button>\r\n                <ul id=\"years\" class=\"dropdown-menu\">\r\n                <li id=\"1985\"><button class=\"dropdown-item\" type=\"button\">1985</button></li>\r\n                </ul>\r\n            </span>\r\n    <div style=\"vertical-align: middle;\" class=\"col-md-3 mx-auto\">\r\n        <div class=\"input-group\">\r\n            <input class=\"form-control border-end-1 border rounded-pill\" type=\"search\" placeholder=\"cerca\" style=\"margin-right:20px\" id=\"searchTitle\">\r\n            <span class=\"input-group-append\">\r\n            <button id=\"searchButton\" class=\"btn btn-outline-secondary bg-white border-bottom-1 border rounded-pill ms-n5\" type=\"button\">\r\n                    trova\r\n            <i class=\"fa fa-search\"></i>\r\n            </button>\r\n            </span>\r\n        </div>\r\n    </div>\r\n\r\n      <span >\r\n        <button  id=\"addInsertion\" style=\"color:white\" class=\"btn btn-danger\">\r\n            <img src=\"./img/plus.png\" alt=\"plus\" style=\"width:25px\">\r\n            Inserisci Annuncio\r\n        </button>\r\n      </span>      \r\n             \r\n\r\n</div>\r\n\r\n<div id=\"remains\">\r\n    <ul id=\"insertionContent\" class=\"list-group\" >\r\n        \r\n    </ul>\r\n    \r\n</div>\r\n<div>\r\n    <ul id=\"pages\" class=\"pagination pagination-sm my-2\">\r\n        \r\n    </ul>\r\n\r\n</div>\r\n\r\n\r\n\r\n");

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

/***/ "./src/footer/footer.html":
/*!********************************!*\
  !*** ./src/footer/footer.html ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<style>\r\n  .cardfooter {\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n\r\n  li {\r\n    display: inline;\r\n    padding-right: 10px;\r\n    padding-left: 10px;\r\n  }\r\n\r\n\r\n  body {\r\n    min-height: 100vh;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n\r\n\r\n  footer {\r\n    min-height: 50px;\r\n  }\r\n\r\n  /* The article fills all the space between header & footer */\r\n  body {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  div.container {\r\n    flex: 1;\r\n  }\r\n</style>\r\n\r\n<div class=\"cardfooter\">\r\n  <div class=\"card-header\">\r\n    <h3 class=\"card-title\">VideoGame Lover</h3>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <p class=\"card-text\">Testo Aggiuntivo Se Volete</p>\r\n    <ul>\r\n      <li> <a href=\"#\" class=\"btn btn-primary\">Home</a> </li>\r\n      <li> <a href=\"#\" class=\"btn btn-primary\">Paolo</a> </li>\r\n      <li> <a href=\"#\" class=\"btn btn-primary\">Piero</a> </li>\r\n      <li> <a href=\"#\" class=\"btn btn-primary\">About Us</a> </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"card-footer text-muted\">\r\n    <p> ©2023 Paolo Enterprise Inc. | Tutti i diritti riservati (a Pierino) </p>\r\n  </div>\r\n</div>\r\n<!--\r\n<style>\r\nbody {\r\n  display: grid;\r\n  grid-template-rows: 1fr 10rem auto;\r\n  grid-template-areas: \"main\" \".\" \"footer\";\r\n  overflow-x: hidden;\r\n  background: #F5F7FA;\r\n  min-height: 100vh;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\nbody .footer {\r\n  z-index: 1;\r\n  --footer-background:#ED5565;\r\n  display: grid;\r\n  position: relative;\r\n  grid-area: footer;\r\n  min-height: 12rem;\r\n}\r\nbody .footer .bubbles {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 1rem;\r\n  background: var(--footer-background);\r\n  filter: url(\"#blob\");\r\n}\r\nbody .footer .bubbles .bubble {\r\n  position: absolute;\r\n  left: var(--position, 50%);\r\n  background: var(--footer-background);\r\n  border-radius: 100%;\r\n  -webkit-animation: bubble-size var(--time, 4s) ease-in infinite var(--delay, 0s), bubble-move var(--time, 4s) ease-in infinite var(--delay, 0s);\r\n          animation: bubble-size var(--time, 4s) ease-in infinite var(--delay, 0s), bubble-move var(--time, 4s) ease-in infinite var(--delay, 0s);\r\n  transform: translate(-50%, 100%);\r\n}\r\nbody .footer .content {\r\n  z-index: 2;\r\n  display: grid;\r\n  grid-template-columns: 1fr auto;\r\n  grid-gap: 4rem;\r\n  padding: 2rem;\r\n  background: var(--footer-background);\r\n}\r\nbody .footer .content a, body .footer .content p {\r\n  color: #F5F7FA;\r\n  text-decoration: none;\r\n}\r\nbody .footer .content b {\r\n  color: white;\r\n}\r\nbody .footer .content p {\r\n  margin: 0;\r\n  font-size: 0.75rem;\r\n}\r\nbody .footer .content > div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\nbody .footer .content > div > div {\r\n  margin: 0.25rem 0;\r\n}\r\nbody .footer .content > div > div > * {\r\n  margin-right: 0.5rem;\r\n}\r\nbody .footer .content > div .image {\r\n  align-self: center;\r\n  width: 4rem;\r\n  height: 4rem;\r\n  margin: 0.25rem 0;\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n\r\n@-webkit-keyframes bubble-size {\r\n  0%, 75% {\r\n    width: var(--size, 4rem);\r\n    height: var(--size, 4rem);\r\n  }\r\n  100% {\r\n    width: 0rem;\r\n    height: 0rem;\r\n  }\r\n}\r\n\r\n@keyframes bubble-size {\r\n  0%, 75% {\r\n    width: var(--size, 4rem);\r\n    height: var(--size, 4rem);\r\n  }\r\n  100% {\r\n    width: 0rem;\r\n    height: 0rem;\r\n  }\r\n}\r\n@-webkit-keyframes bubble-move {\r\n  0% {\r\n    bottom: -4rem;\r\n  }\r\n  100% {\r\n    bottom: var(--distance, 10rem);\r\n  }\r\n}\r\n@keyframes bubble-move {\r\n  0% {\r\n    bottom: -4rem;\r\n  }\r\n  100% {\r\n    bottom: var(--distance, 10rem);\r\n  }\r\n}\r\n</style>\r\n\r\n<div class=\"main\"></div>\r\n<div class=\"footer\">\r\n  <div class=\"bubbles\">\r\n    <div class=\"bubble\" style=\"--size:2.6645230162851963rem; --distance:7.3041160367426174rem; --position:83.56368053338483%; --time:3.4956403096272295s; --delay:-2.773938196237702s;\"></div>\r\n    <div class=\"bubble\" style=\"--size:5.894149849838016rem; --distance:7.627974484300427rem; --position:93.36878188393642%; --time:3.7601486272838756s; --delay:-3.397102288403029s;\"></div>\r\n    <div class=\"bubble\" style=\"--size:2.798647106665685rem; --distance:9.200496817222525rem; --position:0.20775732698414195%; --time:2.2010960220058657s; --delay:-2.698948216464545s;\"></div>\r\n    <div class=\"bubble\" style=\"--size:4.359621926782294rem; --distance:7.46357993007419rem; --position:47.867831746850925%; --time:2.120820561270724s; --delay:-2.5141778492182336s;\"></div>\r\n    <div class=\"bubble\" style=\"--size:5.028352050978196rem; --distance:7.242720036832249rem; --position:30.69984615927396%; --time:3.2535955281062883s; --delay:-3.3554545325439715s;\"></div>\r\n    <div class=\"bubble\" style=\"--size:2.755978221857193rem; --distance:7.469972496926509rem; --position:10.238227020701139%; --time:2.647200152008366s; --delay:-3.5721594622496218s;\"></div>\r\n    <div class=\"bubble\" style=\"--size:5.0848128172087375rem; --distance:9.558554142584626rem; --position:94.51982057832215%; --time:3.7155558762173055s; --delay:-3.081006696757859s;\"></div>\r\n    <div class=\"bubble\" style=\"--size:3.537807560775958rem; --distance:9.421423529841928rem; --position:5.396274211709013%; --time:3.1787894556018856s; --delay:-3.446169905186775s;\"></div>\r\n    <div class=\"bubble\" style=\"--size:5.627731218600348rem; --distance:7.746463416075165rem; --position:10.928802493469531%; --time:2.56792593225669s; --delay:-3.404873101451986s;\"></div>\r\n    <div class=\"bubble\" style=\"--size:3.6949599219472313rem; --distance:9.181549586750107rem; --position:-4.589055563798976%; --time:3.7095220652888345s; --delay:-3.1295861315916067s;\"></div>\r\n    <div class=\"bubble\" style=\"--size:2.759264221067178rem; --distance:8.42688809955137rem; --position:28.046728293124502%; --time:3.2840961105236s; --delay:-2.366519874309387s;\"></div>\r\n    <div class=\"bubble\" style=\"--size:2.5743082435105684rem; --distance:9.430653962573853rem; --position:30.83974647173961%; --time:3.6865700176230707s; --delay:-3.619039606033297s;\"></div>\r\n  </div>\r\n  <div class=\"content\">\r\n    <div>\r\n      <div><b>Eldew</b><a href=\"#\">Secuce</a><a href=\"#\">Drupand</a><a href=\"#\">Oceash</a><a href=\"#\">Ugefe</a><a href=\"#\">Babed</a></div>\r\n      <div><b>Spotha</b><a href=\"#\">Miskasa</a><a href=\"#\">Agithe</a><a href=\"#\">Scesha</a><a href=\"#\">Lulle</a></div>\r\n      <div><b>Chashakib</b><a href=\"#\">Chogauw</a><a href=\"#\">Phachuled</a><a href=\"#\">Tiebeft</a><a href=\"#\">Ocid</a><a href=\"#\">Izom</a><a href=\"#\">Ort</a></div>\r\n      <div><b>Athod</b><a href=\"#\">Pamuz</a><a href=\"#\">Vapert</a><a href=\"#\">Neesk</a><a href=\"#\">Omemanen</a></div>\r\n    </div>\r\n    <div><a class=\"image\" href=\"https://codepen.io/z-\" target=\"_blank\" style=\"background-image: url(&quot;https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/happy.svg&quot;)\"></a>\r\n      <p>©2019 Not Really</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n<svg style=\" top:100vh\">\r\n  <defs>\r\n    <filter id=\"blob\">\r\n      <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"10\" result=\"blur\"></feGaussianBlur>\r\n      <feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9\" result=\"blob\"></feColorMatrix>\r\n      feComposite(in=\"SourceGraphic\" in2=\"blob\" operator=\"atop\") //After reviewing this after years I can't remember why I added this but it isn't necessary for the blob effect\r\n</filter>\r\n</defs>\r\n</svg>\r\n-->");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div id=\"bgaround\" class=\"text-center my-5\">\r\n    <img src=\"./img/videogamelover.png\" alt=\"not found\" class=\"headerImg mx-auto\" style=\"width: 50%; \" id=\"headerImg\">\r\n</div>\r\n\r\n<style>\r\n  .headerImg {\r\n    \r\n    border-radius: 40%;\r\n  }\r\n\r\n  .imgS {\r\n    width: 54px;\r\n    height: 42px;\r\n  }\r\n\r\n  body {\r\n    text-align: center;\r\n  }\r\n</style>\r\n\r\n<div>\r\n  <h1>\r\n    Il portale dei veri gamers.\r\n  </h1>\r\n  <h2>\r\n    Sei alla ricerca di un gioco, vecchio o nuovo che sia, ma non riesci a trovarlo? Noi abbiamo la soluzione per te...\r\n    Cerca tra centinaia di annunci il titolo che non trovavi più, mettiti in contatto con l'utente che lo sta vendendo, \r\n    e fai l'affare del secolo...\r\n  </h2>\r\n</div>\r\n\r\n<div class=\"container text-center\" style=\"margin-top: 10%; margin-bottom: 10%;\">\r\n  <div class=\"row\" style=\"margin-left:10%;margin-right:10%;\">\r\n    <div class=\"col\">\r\n      <div class=\"card text-bg-danger\" style=\"width: 18rem;height: 100%;\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Cerca</h5>\r\n          <p class=\"card-text\">Cerca il tuo gioco prefereito tra centinaia di annunci</p>\r\n          <hr>\r\n          <div class=\"input-group mb-3 form-control border rounded\" style=\"margin-top: 10px;\">\r\n            <input type=\"text\" class=\"form-control border-0\" id=\"searchTitle\" placeholder=\"Cerca\" aria-label=\"search\" aria-describedby=\"basic-addon2\">\r\n            <img class=\"ms-1 btn imgS\" src=\"./img/search.png\" alt=\"\">\r\n          </div> \r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\">\r\n      <div class=\"card text-bg-primary\" style=\"width: 18rem;height: 100%;\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Esplora</h5>\r\n          <p class=\"card-text\">Esplora miglialia di giochi tra gli annunci presenti</p>\r\n          <hr>\r\n          <button id=\"insertions\" class=\"btn btn-info\">Annunci</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\">\r\n      <div class=\"card text-bg-success\" style=\"width: 18rem;height: 100%;\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Vendi</h5>\r\n          <p class=\"card-text\">Hai un gioco di cui non te ne fai più nulla per le miliardi di volte che lo hai finito?\r\n            inserisci qui il tuo annuncio!\r\n          </p>\r\n          <hr>\r\n          <button id=\"insertions\" class=\"btn btn-light\">Inserisci Annuncio</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<h1>Ultimi annunci:</h1>\r\n<h2>Controlla qui gli ultimi annunci</h2>\r\n<div id=\"carouselExampleControls\" class=\"carousel slide\" data-bs-ride=\"carousel\">\r\n    <div class=\"carousel-inner\">\r\n      <div class=\"carousel-item active\">\r\n        \r\n        <div class=\"card text-bg-secondary\" style=\"margin: 20%;\">\r\n            <img src=\"...\" class=\"card-img-top\" alt=\"...\">\r\n            <div class=\"card-body\">\r\n              <h5 id=\"title\" class=\"card-title\">Card title</h5>\r\n              <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n              <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n            </div>\r\n          </div>\r\n\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        \r\n        <div class=\"card text-bg-secondary\" style=\"margin: 20%;\">\r\n            <img src=\"...\" class=\"card-img-top\" alt=\"...\">\r\n            <div class=\"card-body\">\r\n              <h5 id=\"title\" class=\"card-title\">Card title</h5>\r\n              <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n              <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n            </div>\r\n          </div>\r\n\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        \r\n        <div class=\"card text-bg-secondary\" style=\"margin: 20%;\">\r\n            <img src=\"...\" class=\"card-img-top\" alt=\"...\">\r\n            <div class=\"card-body\">\r\n              <h5 id=\"title\" class=\"card-title\">Card title</h5>\r\n              <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n              <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n            </div>\r\n          </div>\r\n\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        \r\n        <div class=\"card text-bg-secondary\" style=\"margin: 20%;\">\r\n            <img id=\"carImg\" src=\"...\" class=\"card-img-top\" alt=\"...\">\r\n            <div class=\"card-body\">\r\n              <h5 id=\"cartitle\" class=\"card-title\">Card title</h5>\r\n              <p id=\"carTxt\" class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n              <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n            </div>\r\n          </div>\r\n\r\n      </div>\r\n    </div>\r\n    <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#carouselExampleControls\" data-bs-slide=\"prev\">\r\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"visually-hidden\">Previous</span>\r\n    </button>\r\n    <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#carouselExampleControls\" data-bs-slide=\"next\">\r\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"visually-hidden\">Next</span>\r\n    </button>\r\n  </div>\r\n\r\n\r\n<h1>Chi siamo?</h1>\r\n<h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea adipisci architecto libero alias? Numquam atque beatae quis asperiores necessitatibus est quod voluptate eveniet excepturi molestias fugiat nostrum nihil, eligendi vero.</h2>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<button id=\"signUpLogin\" type=\"button\" class=\"btn btn-primary\">Accedi</button>\r\n<button id=\"trytoSignUp\" type=\"button\" class=\"btn btn-success\" data-bs-dismiss=\"modal\" disabled>Registrati</button>\r\n<button type=\"button\" class=\"btn btn-danger\" data-bs-dismiss=\"modal\">Chiudi</button>");

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
        if (element.tradeGame.genre == genre) {
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
        genre: "PLATFORM",
        year: 1985,
        console: "NES",
        cover: imageGioco1
    };
    const gioco2 = {
        id: 2,
        name: "The Legend of Zelda",
        genre: "AVVENTURA",
        year: 1986,
        console: "NES",
        cover: imageGioco2
    };
    const gioco3 = {
        id: 3,
        name: "Pokemon Giallo",
        genre: "GDR",
        year: 1998,
        console: "GAME_BOY_COLOR",
        cover: imageGioco3
    };
    const gioco4 = {
        id: 4,
        name: "Metal Gear",
        genre: "STEALTH",
        year: 1987,
        console: "NES",
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
        let li = document.createElement("li");
        li.onclick = () => {
            (0,_annuncio__WEBPACK_IMPORTED_MODULE_0__["default"])(list[start]);
        };
        li.setAttribute('class', 'list-group-item');
        li.setAttribute('onmouseover', "setAttribute('class', 'list-group-item active')");
        li.setAttribute('onmouseout', "setAttribute('class', 'list-group-item')");
        let title = document.createElement("h1");
        let image = document.createElement("img");
        let description = document.createElement("p");
        let game = document.createElement("p");
        let genre = document.createElement("p");
        let year = document.createElement("p");
        let console = document.createElement("p");
        let trades = document.createElement("p");
        image.src = list[start].tradeGame.cover.link;
        image.width = 200;
        title.innerHTML = list[start].title;
        description.innerHTML = list[start].description;
        game.innerHTML = list[start].tradeGame.name;
        genre.innerHTML = list[start].tradeGame.genre;
        year.innerHTML = "" + list[start].tradeGame.year;
        console.innerHTML = list[start].tradeGame.console;
        trades.innerHTML = "Accetterei Scambio con: " + list[start].wishList[0].name;
        li.appendChild(title);
        li.appendChild(image);
        li.appendChild(description);
        li.appendChild(game);
        li.appendChild(genre);
        li.appendChild(year);
        li.appendChild(console);
        li.appendChild(trades);
        content.append(li);
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
    p.innerHTML =
        "Genere: " + insertion.tradeGame.genre + "<br>"
            + "Anno: " + insertion.tradeGame.year + "<br>"
            + "Console: " + insertion.tradeGame.console;
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
        p.innerHTML =
            "Genere: " + insertion.wishList[i].genre + "<br>"
                + "Anno: " + insertion.wishList[i].year + "<br>"
                + "Console: " + insertion.wishList[i].console;
        document.getElementById("body-item-" + (i + 1)).append(p);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (expandInsertion);


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

function createHome() {
    let main = document.getElementById('main');
    main.innerHTML += _home_html__WEBPACK_IMPORTED_MODULE_0__["default"];
    let head = document.getElementsByTagName('head')[0];
    head.innerHTML += '<link rel="stylesheet" href="./home.css">';
    function createItemCarousel(insertion) {
        let carInner = document.getElementsByClassName("carousel-inner")[0];
        for (let i = 0; i < insertion.gallery.length; i++) {
            let clCarouselIt = document.createElement('div');
            if (i == 0) {
                clCarouselIt.setAttribute('class', 'carousel-item active');
            }
            else {
                clCarouselIt.setAttribute('class', 'carousel-item');
            }
            let img = document.createElement('img');
            img.setAttribute('src', insertion.gallery[i].link);
            let clCard = document.createElement('div');
            clCard.setAttribute('class', 'card text-bg-secondary');
            let carBody = document.createElement('div');
            carBody.setAttribute('class', 'card-body');
            let title = document.getElementById('title');
            title.setAttribute('class', 'card-title');
            title.innerHTML = insertion.tradeGame.name;
            carInner.appendChild(clCarouselIt);
            clCarouselIt.appendChild(clCard);
            clCard.appendChild(img);
            clCard.appendChild(carBody);
            carBody.appendChild(title);
        }
    }
    let clCard;
    let title = document.getElementById('carTitle');
    let image = document.getElementById('carImage');
    let text = document.getElementById('carText');
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
/* harmony import */ var _profiloUtente_profile_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../profiloUtente/profile.html */ "./src/profiloUtente/profile.html");







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
    document.getElementById("passwordSignUp").onkeyup = validatePassword;
    document.getElementById("confirm_passwordSignUp").onkeyup = validatePassword;
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
    /*
    if (!validatePassword2()) {
        return;
    }
    */
    console.log("e facciamola sta fecci");
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
    fetch("/user", request).then((response) => response.json()).then((data) => console.log(data));
    //$("#myModal").modal("toggle");
    document.getElementById("main").innerHTML = _profiloUtente_profile_html__WEBPACK_IMPORTED_MODULE_6__["default"];
}
function tryToLogIn() {
    //TODO
}
function tryToLogOut() {
    //TODO
}
function validatePassword() {
    console.log("ciao da validate2");
    let password = document.getElementById("passwordSignUp");
    let confirm_password = document.getElementById("confirm_passwordSignUp");
    confirm_password.setAttribute("style", "");
    if (password.value != confirm_password.value) {
        console.log("ciao dall'if");
        confirm_password.setAttribute("style", "border-color: red;");
        document.getElementById("trytoSignUp").disabled = true;
    }
    else {
        confirm_password.setAttribute("style", "border-color: green;");
        document.getElementById("trytoSignUp").removeAttribute("disabled");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05xQztBQUNHO0FBQ0E7QUFJeEMsMERBQVMsRUFBRSxDQUFDO0FBQ1osc0RBQVUsRUFBRSxDQUFDO0FBQ2IsMERBQVMsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvYW5udW5jaS9hbm51bmNpLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvYW5udW5jaS9hbm51bmNpby5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2Zvb3Rlci9mb290ZXIuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9nZXN0aW9uZVV0ZW50aS9nZXN0aW9uZVV0ZW50aS5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2hvbWUvaG9tZS5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2xvZ2luL2xvZ2luLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvbG9naW4vbG9naW5Gb290ZXIuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9sb2dvdXQvbG9nb3V0Lmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvbW9kYWwvbW9kYWwuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9uYXZiYXIvbmF2YmFyLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvcHJvZmlsb1V0ZW50ZS9wcm9maWxlLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvcHJvZmlsb1V0ZW50ZS9zaG93UHJvZmlsZS5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL3JlZ2lzdHJhemlvbmUvcmVnaXN0cmF6aW9uZS5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL3JlZ2lzdHJhemlvbmUvcmVnaXN0cmF6aW9uZUZvb3Rlci5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2FubnVuY2kvYW5udW5jaS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9hbm51bmNpL2FubnVuY2lvLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2Zvb3Rlci9mb290ZXIudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvZ2VzdGlvbmVVdGVudGkvZ2VzdGlvbmVVdGVudGkudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvaG9tZS9ob21lLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL21vZGFsL21vZGFsLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL25hdmJhci9uYXZiYXIudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvcHJvZmlsb1V0ZW50ZS9zaG93UHJvZmlsZS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiXFxyXFxuPGRpdiBzdHlsZT1cXFwiZGlzcGxheTogZmxleDtcXFwiPlxcclxcblxcclxcbiAgICA8c3BhbiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiA0MHB4XFxcIj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgaWQ9XFxcInNlbGVjdEFsbFxcXCI+VmlzdWFsaXp6YSB0dXR0aTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvc3Bhbj4gPCEtLWZ1bnppb25lIGNoZSBwcmVuZGUgdHV0dGkgZ2xpIGFubnVuY2kgZSBsaSBzY2hpYWZmYSBuZWwgY29udGVudXRvIGFubnVuY2ktLT5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XFxcIm1hcmdpbi1yaWdodDogNDBweFxcXCIgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5IGRyb3Bkb3duLXRvZ2dsZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIFZpc3VhbGl6emEgcGVyIEdlbmVyZVxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XFxcImdlbnJlc1xcXCIgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cXFwiUExBVEZPUk1cXFwiPjxidXR0b24gY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+UExBVEZPUk08L2J1dHRvbj48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IDQwcHhcXFwiIGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5IGRyb3Bkb3duLXRvZ2dsZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgVmlzdWFsaXp6YSBwZXIgQW5ub1xcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPHVsIGlkPVxcXCJ5ZWFyc1xcXCIgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgaWQ9XFxcIjE5ODVcXFwiPjxidXR0b24gY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+MTk4NTwvYnV0dG9uPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICA8ZGl2IHN0eWxlPVxcXCJ2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcXCIgY2xhc3M9XFxcImNvbC1tZC0zIG14LWF1dG9cXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGJvcmRlci1lbmQtMSBib3JkZXIgcm91bmRlZC1waWxsXFxcIiB0eXBlPVxcXCJzZWFyY2hcXFwiIHBsYWNlaG9sZGVyPVxcXCJjZXJjYVxcXCIgc3R5bGU9XFxcIm1hcmdpbi1yaWdodDoyMHB4XFxcIiBpZD1cXFwic2VhcmNoVGl0bGVcXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hcHBlbmRcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcInNlYXJjaEJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgYmctd2hpdGUgYm9yZGVyLWJvdHRvbS0xIGJvcmRlciByb3VuZGVkLXBpbGwgbXMtbjVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICB0cm92YVxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1zZWFyY2hcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgPHNwYW4gPlxcclxcbiAgICAgICAgPGJ1dHRvbiAgaWQ9XFxcImFkZEluc2VydGlvblxcXCIgc3R5bGU9XFxcImNvbG9yOndoaXRlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIuL2ltZy9wbHVzLnBuZ1xcXCIgYWx0PVxcXCJwbHVzXFxcIiBzdHlsZT1cXFwid2lkdGg6MjVweFxcXCI+XFxyXFxuICAgICAgICAgICAgSW5zZXJpc2NpIEFubnVuY2lvXFxyXFxuICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICA8L3NwYW4+ICAgICAgXFxyXFxuICAgICAgICAgICAgIFxcclxcblxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgaWQ9XFxcInJlbWFpbnNcXFwiPlxcclxcbiAgICA8dWwgaWQ9XFxcImluc2VydGlvbkNvbnRlbnRcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwXFxcIiA+XFxyXFxuICAgICAgICBcXHJcXG4gICAgPC91bD5cXHJcXG4gICAgXFxyXFxuPC9kaXY+XFxyXFxuPGRpdj5cXHJcXG4gICAgPHVsIGlkPVxcXCJwYWdlc1xcXCIgY2xhc3M9XFxcInBhZ2luYXRpb24gcGFnaW5hdGlvbi1zbSBteS0yXFxcIj5cXHJcXG4gICAgICAgIFxcclxcbiAgICA8L3VsPlxcclxcblxcclxcbjwvZGl2PlxcclxcblxcclxcblxcclxcblxcclxcblwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBpZD1cXFwiYmFja1xcXCI+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTZcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm9yZG9jYXJvc2VsbG9cXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgaWQ9XFxcImltYWdlU2xpZGVyXFxcIiBjbGFzcz1cXFwiY2Fyb3VzZWwgc2xpZGVcXFwiIGRhdGEtYnMtcmlkZT1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImluZGljYXRvclxcXCIgY2xhc3M9XFxcImNhcm91c2VsLWluZGljYXRvcnNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiaW5uZXJcXFwiIGNsYXNzPVxcXCJjYXJvdXNlbC1pbm5lclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYXJvdXNlbC1jb250cm9sLXByZXZcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10YXJnZXQ9XFxcIiNpbWFnZVNsaWRlclxcXCIgZGF0YS1icy1zbGlkZT1cXFwicHJldlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidmlzdWFsbHktaGlkZGVuXFxcIj5QcmVjZWRlbnRlPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2Fyb3VzZWwtY29udHJvbC1uZXh0XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdGFyZ2V0PVxcXCIjaW1hZ2VTbGlkZXJcXFwiIGRhdGEtYnMtc2xpZGU9XFxcIm5leHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+U3VjY2Vzc2l2YTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiZ2l2ZWRHYW1lXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgbWItM1xcXCIgc3R5bGU9XFxcIm1heC13aWR0aDogNTQwcHg7XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgZy0wXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiY2FyZC1pbWFnZVxcXCIgY2xhc3M9XFxcImNvbC1tZC00XFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC04XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImNhcmQtYm9keVxcXCIgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwiaW5zZXJ0aW9uLWRlc2NyaXB0aW9uXFxcIiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJteS01IHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgPGgzPjxzcGFuIGlkPVxcXCJpbnNlcnRpb24tY3JlYXRvclxcXCI+PC9zcGFuPiB2b3JyZWJiZSB1bm8gZGkgcXVlc3RpIGdpb2NoaSBpbiBjYW1iaW86PC9oMz5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJhY2NvcmRpb24gcm93XFxcIiBpZD1cXFwiYWNjb3JkaW9uRXhhbXBsZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImFjY29yZGlvbi1pdGVtIGNvbC1tZC00XFxcIj5cXHJcXG4gICAgICAgIDxoMiBjbGFzcz1cXFwiYWNjb3JkaW9uLWhlYWRlclxcXCIgaWQ9XFxcImhlYWRpbmdPbmVcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcImJ0bi1pdGVtLTFcXFwiIGNsYXNzPVxcXCJhY2NvcmRpb24tYnV0dG9uIGNvbGxhcHNlZFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiXFxyXFxuICAgICAgICAgICAgICAgIGRhdGEtYnMtdGFyZ2V0PVxcXCIjY29sbGFwc2VPbmVcXFwiIGFyaWEtZXhwYW5kZWQ9XFxcInRydWVcXFwiIGFyaWEtY29udHJvbHM9XFxcImNvbGxhcHNlT25lXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvaDI+XFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJjb2xsYXBzZU9uZVxcXCIgY2xhc3M9XFxcImFjY29yZGlvbi1jb2xsYXBzZSBjb2xsYXBzZVxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJoZWFkaW5nT25lXFxcIlxcclxcbiAgICAgICAgICAgIGRhdGEtYnMtcGFyZW50PVxcXCIjYWNjb3JkaW9uRXhhbXBsZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWNjb3JkaW9uLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJpbWctaXRlbS0xXFxcIiBjbGFzcz1cXFwiY2FyZCBteC1hdXRvXFxcIiBzdHlsZT1cXFwid2lkdGg6IDE4cmVtO1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImJvZHktaXRlbS0xXFxcIiBjbGFzcz1cXFwiY2FyZC1ib2R5IHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYWNjb3JkaW9uLWl0ZW0gY29sLW1kLTRcXFwiPlxcclxcbiAgICAgICAgPGgyIGNsYXNzPVxcXCJhY2NvcmRpb24taGVhZGVyXFxcIiBpZD1cXFwiaGVhZGluZ1R3b1xcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cXFwiYnRuLWl0ZW0tMlxcXCIgY2xhc3M9XFxcImFjY29yZGlvbi1idXR0b24gY29sbGFwc2VkXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJjb2xsYXBzZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgZGF0YS1icy10YXJnZXQ9XFxcIiNjb2xsYXBzZVR3b1xcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiIGFyaWEtY29udHJvbHM9XFxcImNvbGxhcHNlVHdvXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvaDI+XFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJjb2xsYXBzZVR3b1xcXCIgY2xhc3M9XFxcImFjY29yZGlvbi1jb2xsYXBzZSBjb2xsYXBzZVxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJoZWFkaW5nVHdvXFxcIlxcclxcbiAgICAgICAgICAgIGRhdGEtYnMtcGFyZW50PVxcXCIjYWNjb3JkaW9uRXhhbXBsZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWNjb3JkaW9uLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJpbWctaXRlbS0yXFxcIiBjbGFzcz1cXFwiY2FyZCBteC1hdXRvXFxcIiBzdHlsZT1cXFwid2lkdGg6IDE4cmVtO1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImJvZHktaXRlbS0yXFxcIiBjbGFzcz1cXFwiY2FyZC1ib2R5IHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYWNjb3JkaW9uLWl0ZW0gY29sLW1kLTRcXFwiPlxcclxcbiAgICAgICAgPGgyIGNsYXNzPVxcXCJhY2NvcmRpb24taGVhZGVyXFxcIiBpZD1cXFwiaGVhZGluZ1RocmVlXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJidG4taXRlbS0zXFxcIiBjbGFzcz1cXFwiYWNjb3JkaW9uLWJ1dHRvbiBjb2xsYXBzZWRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10b2dnbGU9XFxcImNvbGxhcHNlXFxcIlxcclxcbiAgICAgICAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cXFwiI2NvbGxhcHNlVGhyZWVcXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIiBhcmlhLWNvbnRyb2xzPVxcXCJjb2xsYXBzZVRocmVlXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvaDI+XFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJjb2xsYXBzZVRocmVlXFxcIiBjbGFzcz1cXFwiYWNjb3JkaW9uLWNvbGxhcHNlIGNvbGxhcHNlXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcImhlYWRpbmdUaHJlZVxcXCJcXHJcXG4gICAgICAgICAgICBkYXRhLWJzLXBhcmVudD1cXFwiI2FjY29yZGlvbkV4YW1wbGVcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFjY29yZGlvbi1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiaW1nLWl0ZW0tM1xcXCIgY2xhc3M9XFxcImNhcmQgbXgtYXV0b1xcXCIgc3R5bGU9XFxcIndpZHRoOiAxOHJlbTtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJib2R5LWl0ZW0tM1xcXCIgY2xhc3M9XFxcImNhcmQtYm9keSB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8c3R5bGU+XFxyXFxuICAuY2FyZGZvb3RlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGxpIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuICBib2R5IHtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gIGZvb3RlciB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvKiBUaGUgYXJ0aWNsZSBmaWxscyBhbGwgdGhlIHNwYWNlIGJldHdlZW4gaGVhZGVyICYgZm9vdGVyICovXFxyXFxuICBib2R5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGRpdi5jb250YWluZXIge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgfVxcclxcbjwvc3R5bGU+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiY2FyZGZvb3RlclxcXCI+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCI+XFxyXFxuICAgIDxoMyBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+VmlkZW9HYW1lIExvdmVyPC9oMz5cXHJcXG4gIDwvZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXHJcXG4gICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+VGVzdG8gQWdnaXVudGl2byBTZSBWb2xldGU8L3A+XFxyXFxuICAgIDx1bD5cXHJcXG4gICAgICA8bGk+IDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPkhvbWU8L2E+IDwvbGk+XFxyXFxuICAgICAgPGxpPiA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5QYW9sbzwvYT4gPC9saT5cXHJcXG4gICAgICA8bGk+IDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPlBpZXJvPC9hPiA8L2xpPlxcclxcbiAgICAgIDxsaT4gPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+QWJvdXQgVXM8L2E+IDwvbGk+XFxyXFxuICAgIDwvdWw+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImNhcmQtZm9vdGVyIHRleHQtbXV0ZWRcXFwiPlxcclxcbiAgICA8cD4gwqkyMDIzIFBhb2xvIEVudGVycHJpc2UgSW5jLiB8IFR1dHRpIGkgZGlyaXR0aSByaXNlcnZhdGkgKGEgUGllcmlubykgPC9wPlxcclxcbiAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPCEtLVxcclxcbjxzdHlsZT5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMHJlbSBhdXRvO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIm1haW5cXFwiIFxcXCIuXFxcIiBcXFwiZm9vdGVyXFxcIjtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQ6ICNGNUY3RkE7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuYm9keSAuZm9vdGVyIHtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICAtLWZvb3Rlci1iYWNrZ3JvdW5kOiNFRDU1NjU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XFxyXFxuICBtaW4taGVpZ2h0OiAxMnJlbTtcXHJcXG59XFxyXFxuYm9keSAuZm9vdGVyIC5idWJibGVzIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGhlaWdodDogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWZvb3Rlci1iYWNrZ3JvdW5kKTtcXHJcXG4gIGZpbHRlcjogdXJsKFxcXCIjYmxvYlxcXCIpO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIgLmJ1YmJsZXMgLmJ1YmJsZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiB2YXIoLS1wb3NpdGlvbiwgNTAlKTtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWZvb3Rlci1iYWNrZ3JvdW5kKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogYnViYmxlLXNpemUgdmFyKC0tdGltZSwgNHMpIGVhc2UtaW4gaW5maW5pdGUgdmFyKC0tZGVsYXksIDBzKSwgYnViYmxlLW1vdmUgdmFyKC0tdGltZSwgNHMpIGVhc2UtaW4gaW5maW5pdGUgdmFyKC0tZGVsYXksIDBzKTtcXHJcXG4gICAgICAgICAgYW5pbWF0aW9uOiBidWJibGUtc2l6ZSB2YXIoLS10aW1lLCA0cykgZWFzZS1pbiBpbmZpbml0ZSB2YXIoLS1kZWxheSwgMHMpLCBidWJibGUtbW92ZSB2YXIoLS10aW1lLCA0cykgZWFzZS1pbiBpbmZpbml0ZSB2YXIoLS1kZWxheSwgMHMpO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMTAwJSk7XFxyXFxufVxcclxcbmJvZHkgLmZvb3RlciAuY29udGVudCB7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxyXFxuICBncmlkLWdhcDogNHJlbTtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1mb290ZXItYmFja2dyb3VuZCk7XFxyXFxufVxcclxcbmJvZHkgLmZvb3RlciAuY29udGVudCBhLCBib2R5IC5mb290ZXIgLmNvbnRlbnQgcCB7XFxyXFxuICBjb2xvcjogI0Y1RjdGQTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuYm9keSAuZm9vdGVyIC5jb250ZW50IGIge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIgLmNvbnRlbnQgcCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LXNpemU6IDAuNzVyZW07XFxyXFxufVxcclxcbmJvZHkgLmZvb3RlciAuY29udGVudCA+IGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIgLmNvbnRlbnQgPiBkaXYgPiBkaXYge1xcclxcbiAgbWFyZ2luOiAwLjI1cmVtIDA7XFxyXFxufVxcclxcbmJvZHkgLmZvb3RlciAuY29udGVudCA+IGRpdiA+IGRpdiA+ICoge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxyXFxufVxcclxcbmJvZHkgLmZvb3RlciAuY29udGVudCA+IGRpdiAuaW1hZ2Uge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDRyZW07XFxyXFxuICBoZWlnaHQ6IDRyZW07XFxyXFxuICBtYXJnaW46IDAuMjVyZW0gMDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbkAtd2Via2l0LWtleWZyYW1lcyBidWJibGUtc2l6ZSB7XFxyXFxuICAwJSwgNzUlIHtcXHJcXG4gICAgd2lkdGg6IHZhcigtLXNpemUsIDRyZW0pO1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLXNpemUsIDRyZW0pO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHdpZHRoOiAwcmVtO1xcclxcbiAgICBoZWlnaHQ6IDByZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYnViYmxlLXNpemUge1xcclxcbiAgMCUsIDc1JSB7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1zaXplLCA0cmVtKTtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1zaXplLCA0cmVtKTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICB3aWR0aDogMHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAwcmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgYnViYmxlLW1vdmUge1xcclxcbiAgMCUge1xcclxcbiAgICBib3R0b206IC00cmVtO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIGJvdHRvbTogdmFyKC0tZGlzdGFuY2UsIDEwcmVtKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQGtleWZyYW1lcyBidWJibGUtbW92ZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGJvdHRvbTogLTRyZW07XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgYm90dG9tOiB2YXIoLS1kaXN0YW5jZSwgMTByZW0pO1xcclxcbiAgfVxcclxcbn1cXHJcXG48L3N0eWxlPlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcIm1haW5cXFwiPjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcImZvb3RlclxcXCI+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJidWJibGVzXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnViYmxlXFxcIiBzdHlsZT1cXFwiLS1zaXplOjIuNjY0NTIzMDE2Mjg1MTk2M3JlbTsgLS1kaXN0YW5jZTo3LjMwNDExNjAzNjc0MjYxNzRyZW07IC0tcG9zaXRpb246ODMuNTYzNjgwNTMzMzg0ODMlOyAtLXRpbWU6My40OTU2NDAzMDk2MjcyMjk1czsgLS1kZWxheTotMi43NzM5MzgxOTYyMzc3MDJzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZTo1Ljg5NDE0OTg0OTgzODAxNnJlbTsgLS1kaXN0YW5jZTo3LjYyNzk3NDQ4NDMwMDQyN3JlbTsgLS1wb3NpdGlvbjo5My4zNjg3ODE4ODM5MzY0MiU7IC0tdGltZTozLjc2MDE0ODYyNzI4Mzg3NTZzOyAtLWRlbGF5Oi0zLjM5NzEwMjI4ODQwMzAyOXM7XFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnViYmxlXFxcIiBzdHlsZT1cXFwiLS1zaXplOjIuNzk4NjQ3MTA2NjY1Njg1cmVtOyAtLWRpc3RhbmNlOjkuMjAwNDk2ODE3MjIyNTI1cmVtOyAtLXBvc2l0aW9uOjAuMjA3NzU3MzI2OTg0MTQxOTUlOyAtLXRpbWU6Mi4yMDEwOTYwMjIwMDU4NjU3czsgLS1kZWxheTotMi42OTg5NDgyMTY0NjQ1NDVzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZTo0LjM1OTYyMTkyNjc4MjI5NHJlbTsgLS1kaXN0YW5jZTo3LjQ2MzU3OTkzMDA3NDE5cmVtOyAtLXBvc2l0aW9uOjQ3Ljg2NzgzMTc0Njg1MDkyNSU7IC0tdGltZToyLjEyMDgyMDU2MTI3MDcyNHM7IC0tZGVsYXk6LTIuNTE0MTc3ODQ5MjE4MjMzNnM7XFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnViYmxlXFxcIiBzdHlsZT1cXFwiLS1zaXplOjUuMDI4MzUyMDUwOTc4MTk2cmVtOyAtLWRpc3RhbmNlOjcuMjQyNzIwMDM2ODMyMjQ5cmVtOyAtLXBvc2l0aW9uOjMwLjY5OTg0NjE1OTI3Mzk2JTsgLS10aW1lOjMuMjUzNTk1NTI4MTA2Mjg4M3M7IC0tZGVsYXk6LTMuMzU1NDU0NTMyNTQzOTcxNXM7XFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnViYmxlXFxcIiBzdHlsZT1cXFwiLS1zaXplOjIuNzU1OTc4MjIxODU3MTkzcmVtOyAtLWRpc3RhbmNlOjcuNDY5OTcyNDk2OTI2NTA5cmVtOyAtLXBvc2l0aW9uOjEwLjIzODIyNzAyMDcwMTEzOSU7IC0tdGltZToyLjY0NzIwMDE1MjAwODM2NnM7IC0tZGVsYXk6LTMuNTcyMTU5NDYyMjQ5NjIxOHM7XFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnViYmxlXFxcIiBzdHlsZT1cXFwiLS1zaXplOjUuMDg0ODEyODE3MjA4NzM3NXJlbTsgLS1kaXN0YW5jZTo5LjU1ODU1NDE0MjU4NDYyNnJlbTsgLS1wb3NpdGlvbjo5NC41MTk4MjA1NzgzMjIxNSU7IC0tdGltZTozLjcxNTU1NTg3NjIxNzMwNTVzOyAtLWRlbGF5Oi0zLjA4MTAwNjY5Njc1Nzg1OXM7XFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnViYmxlXFxcIiBzdHlsZT1cXFwiLS1zaXplOjMuNTM3ODA3NTYwNzc1OTU4cmVtOyAtLWRpc3RhbmNlOjkuNDIxNDIzNTI5ODQxOTI4cmVtOyAtLXBvc2l0aW9uOjUuMzk2Mjc0MjExNzA5MDEzJTsgLS10aW1lOjMuMTc4Nzg5NDU1NjAxODg1NnM7IC0tZGVsYXk6LTMuNDQ2MTY5OTA1MTg2Nzc1cztcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6NS42Mjc3MzEyMTg2MDAzNDhyZW07IC0tZGlzdGFuY2U6Ny43NDY0NjM0MTYwNzUxNjVyZW07IC0tcG9zaXRpb246MTAuOTI4ODAyNDkzNDY5NTMxJTsgLS10aW1lOjIuNTY3OTI1OTMyMjU2NjlzOyAtLWRlbGF5Oi0zLjQwNDg3MzEwMTQ1MTk4NnM7XFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnViYmxlXFxcIiBzdHlsZT1cXFwiLS1zaXplOjMuNjk0OTU5OTIxOTQ3MjMxM3JlbTsgLS1kaXN0YW5jZTo5LjE4MTU0OTU4Njc1MDEwN3JlbTsgLS1wb3NpdGlvbjotNC41ODkwNTU1NjM3OTg5NzYlOyAtLXRpbWU6My43MDk1MjIwNjUyODg4MzQ1czsgLS1kZWxheTotMy4xMjk1ODYxMzE1OTE2MDY3cztcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6Mi43NTkyNjQyMjEwNjcxNzhyZW07IC0tZGlzdGFuY2U6OC40MjY4ODgwOTk1NTEzN3JlbTsgLS1wb3NpdGlvbjoyOC4wNDY3MjgyOTMxMjQ1MDIlOyAtLXRpbWU6My4yODQwOTYxMTA1MjM2czsgLS1kZWxheTotMi4zNjY1MTk4NzQzMDkzODdzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZToyLjU3NDMwODI0MzUxMDU2ODRyZW07IC0tZGlzdGFuY2U6OS40MzA2NTM5NjI1NzM4NTNyZW07IC0tcG9zaXRpb246MzAuODM5NzQ2NDcxNzM5NjElOyAtLXRpbWU6My42ODY1NzAwMTc2MjMwNzA3czsgLS1kZWxheTotMy42MTkwMzk2MDYwMzMyOTdzO1xcXCI+PC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcclxcbiAgICA8ZGl2PlxcclxcbiAgICAgIDxkaXY+PGI+RWxkZXc8L2I+PGEgaHJlZj1cXFwiI1xcXCI+U2VjdWNlPC9hPjxhIGhyZWY9XFxcIiNcXFwiPkRydXBhbmQ8L2E+PGEgaHJlZj1cXFwiI1xcXCI+T2NlYXNoPC9hPjxhIGhyZWY9XFxcIiNcXFwiPlVnZWZlPC9hPjxhIGhyZWY9XFxcIiNcXFwiPkJhYmVkPC9hPjwvZGl2PlxcclxcbiAgICAgIDxkaXY+PGI+U3BvdGhhPC9iPjxhIGhyZWY9XFxcIiNcXFwiPk1pc2thc2E8L2E+PGEgaHJlZj1cXFwiI1xcXCI+QWdpdGhlPC9hPjxhIGhyZWY9XFxcIiNcXFwiPlNjZXNoYTwvYT48YSBocmVmPVxcXCIjXFxcIj5MdWxsZTwvYT48L2Rpdj5cXHJcXG4gICAgICA8ZGl2PjxiPkNoYXNoYWtpYjwvYj48YSBocmVmPVxcXCIjXFxcIj5DaG9nYXV3PC9hPjxhIGhyZWY9XFxcIiNcXFwiPlBoYWNodWxlZDwvYT48YSBocmVmPVxcXCIjXFxcIj5UaWViZWZ0PC9hPjxhIGhyZWY9XFxcIiNcXFwiPk9jaWQ8L2E+PGEgaHJlZj1cXFwiI1xcXCI+SXpvbTwvYT48YSBocmVmPVxcXCIjXFxcIj5PcnQ8L2E+PC9kaXY+XFxyXFxuICAgICAgPGRpdj48Yj5BdGhvZDwvYj48YSBocmVmPVxcXCIjXFxcIj5QYW11ejwvYT48YSBocmVmPVxcXCIjXFxcIj5WYXBlcnQ8L2E+PGEgaHJlZj1cXFwiI1xcXCI+TmVlc2s8L2E+PGEgaHJlZj1cXFwiI1xcXCI+T21lbWFuZW48L2E+PC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2PjxhIGNsYXNzPVxcXCJpbWFnZVxcXCIgaHJlZj1cXFwiaHR0cHM6Ly9jb2RlcGVuLmlvL3otXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtaW1hZ2U6IHVybCgmcXVvdDtodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xOTkwMTEvaGFwcHkuc3ZnJnF1b3Q7KVxcXCI+PC9hPlxcclxcbiAgICAgIDxwPsKpMjAxOSBOb3QgUmVhbGx5PC9wPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbjwvZGl2Plxcclxcbjxzdmcgc3R5bGU9XFxcIiB0b3A6MTAwdmhcXFwiPlxcclxcbiAgPGRlZnM+XFxyXFxuICAgIDxmaWx0ZXIgaWQ9XFxcImJsb2JcXFwiPlxcclxcbiAgICAgIDxmZUdhdXNzaWFuQmx1ciBpbj1cXFwiU291cmNlR3JhcGhpY1xcXCIgc3RkRGV2aWF0aW9uPVxcXCIxMFxcXCIgcmVzdWx0PVxcXCJibHVyXFxcIj48L2ZlR2F1c3NpYW5CbHVyPlxcclxcbiAgICAgIDxmZUNvbG9yTWF0cml4IGluPVxcXCJibHVyXFxcIiBtb2RlPVxcXCJtYXRyaXhcXFwiIHZhbHVlcz1cXFwiMSAwIDAgMCAwICAwIDEgMCAwIDAgIDAgMCAxIDAgMCAgMCAwIDAgMTkgLTlcXFwiIHJlc3VsdD1cXFwiYmxvYlxcXCI+PC9mZUNvbG9yTWF0cml4PlxcclxcbiAgICAgIGZlQ29tcG9zaXRlKGluPVxcXCJTb3VyY2VHcmFwaGljXFxcIiBpbjI9XFxcImJsb2JcXFwiIG9wZXJhdG9yPVxcXCJhdG9wXFxcIikgLy9BZnRlciByZXZpZXdpbmcgdGhpcyBhZnRlciB5ZWFycyBJIGNhbid0IHJlbWVtYmVyIHdoeSBJIGFkZGVkIHRoaXMgYnV0IGl0IGlzbid0IG5lY2Vzc2FyeSBmb3IgdGhlIGJsb2IgZWZmZWN0XFxyXFxuPC9maWx0ZXI+XFxyXFxuPC9kZWZzPlxcclxcbjwvc3ZnPlxcclxcbi0tPlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPG5hdiBhcmlhLWxhYmVsPVxcXCIuLi5cXFwiPlxcclxcbiAgICA8ZGl2PlxcclxcbiAgICAgICAgPGgxIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+R2VzdGlzY2kgVXRlbnRpIFJlZ2lzdHJhdGk8L2gxPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPHVsIGlkPVxcXCJ1c2VyTGlzdFxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgXFxyXFxuICAgIDwvdWw+XFxyXFxuICAgIDx1bCBpZD1cXFwicGFnaW5hdGlvblxcXCIgY2xhc3M9XFxcInBhZ2luYXRpb24gcGFnaW5hdGlvbi1zbSBteS0yXFxcIj5cXHJcXG4gICAgICAgIFxcclxcbiAgICA8L3VsPlxcclxcbjwvbmF2PlxcclxcblwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBpZD1cXFwiYmdhcm91bmRcXFwiIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlciBteS01XFxcIj5cXHJcXG4gICAgPGltZyBzcmM9XFxcIi4vaW1nL3ZpZGVvZ2FtZWxvdmVyLnBuZ1xcXCIgYWx0PVxcXCJub3QgZm91bmRcXFwiIGNsYXNzPVxcXCJoZWFkZXJJbWcgbXgtYXV0b1xcXCIgc3R5bGU9XFxcIndpZHRoOiA1MCU7IFxcXCIgaWQ9XFxcImhlYWRlckltZ1xcXCI+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPHN0eWxlPlxcclxcbiAgLmhlYWRlckltZyB7XFxyXFxuICAgIFxcclxcbiAgICBib3JkZXItcmFkaXVzOiA0MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaW1nUyB7XFxyXFxuICAgIHdpZHRoOiA1NHB4O1xcclxcbiAgICBoZWlnaHQ6IDQycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBib2R5IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcbjwvc3R5bGU+XFxyXFxuXFxyXFxuPGRpdj5cXHJcXG4gIDxoMT5cXHJcXG4gICAgSWwgcG9ydGFsZSBkZWkgdmVyaSBnYW1lcnMuXFxyXFxuICA8L2gxPlxcclxcbiAgPGgyPlxcclxcbiAgICBTZWkgYWxsYSByaWNlcmNhIGRpIHVuIGdpb2NvLCB2ZWNjaGlvIG8gbnVvdm8gY2hlIHNpYSwgbWEgbm9uIHJpZXNjaSBhIHRyb3ZhcmxvPyBOb2kgYWJiaWFtbyBsYSBzb2x1emlvbmUgcGVyIHRlLi4uXFxyXFxuICAgIENlcmNhIHRyYSBjZW50aW5haWEgZGkgYW5udW5jaSBpbCB0aXRvbG8gY2hlIG5vbiB0cm92YXZpIHBpw7ksIG1ldHRpdGkgaW4gY29udGF0dG8gY29uIGwndXRlbnRlIGNoZSBsbyBzdGEgdmVuZGVuZG8sIFxcclxcbiAgICBlIGZhaSBsJ2FmZmFyZSBkZWwgc2Vjb2xvLi4uXFxyXFxuICA8L2gyPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciB0ZXh0LWNlbnRlclxcXCIgc3R5bGU9XFxcIm1hcmdpbi10b3A6IDEwJTsgbWFyZ2luLWJvdHRvbTogMTAlO1xcXCI+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIHN0eWxlPVxcXCJtYXJnaW4tbGVmdDoxMCU7bWFyZ2luLXJpZ2h0OjEwJTtcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgdGV4dC1iZy1kYW5nZXJcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMThyZW07aGVpZ2h0OiAxMDAlO1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICA8aDUgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPkNlcmNhPC9oNT5cXHJcXG4gICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+Q2VyY2EgaWwgdHVvIGdpb2NvIHByZWZlcmVpdG8gdHJhIGNlbnRpbmFpYSBkaSBhbm51bmNpPC9wPlxcclxcbiAgICAgICAgICA8aHI+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwIG1iLTMgZm9ybS1jb250cm9sIGJvcmRlciByb3VuZGVkXFxcIiBzdHlsZT1cXFwibWFyZ2luLXRvcDogMTBweDtcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGJvcmRlci0wXFxcIiBpZD1cXFwic2VhcmNoVGl0bGVcXFwiIHBsYWNlaG9sZGVyPVxcXCJDZXJjYVxcXCIgYXJpYS1sYWJlbD1cXFwic2VhcmNoXFxcIiBhcmlhLWRlc2NyaWJlZGJ5PVxcXCJiYXNpYy1hZGRvbjJcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcIm1zLTEgYnRuIGltZ1NcXFwiIHNyYz1cXFwiLi9pbWcvc2VhcmNoLnBuZ1xcXCIgYWx0PVxcXCJcXFwiPlxcclxcbiAgICAgICAgICA8L2Rpdj4gXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbFxcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZCB0ZXh0LWJnLXByaW1hcnlcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMThyZW07aGVpZ2h0OiAxMDAlO1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICA8aDUgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPkVzcGxvcmE8L2g1PlxcclxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj5Fc3Bsb3JhIG1pZ2xpYWxpYSBkaSBnaW9jaGkgdHJhIGdsaSBhbm51bmNpIHByZXNlbnRpPC9wPlxcclxcbiAgICAgICAgICA8aHI+XFxyXFxuICAgICAgICAgIDxidXR0b24gaWQ9XFxcImluc2VydGlvbnNcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWluZm9cXFwiPkFubnVuY2k8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sXFxcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIHRleHQtYmctc3VjY2Vzc1xcXCIgc3R5bGU9XFxcIndpZHRoOiAxOHJlbTtoZWlnaHQ6IDEwMCU7XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuICAgICAgICAgIDxoNSBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+VmVuZGk8L2g1PlxcclxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj5IYWkgdW4gZ2lvY28gZGkgY3VpIG5vbiB0ZSBuZSBmYWkgcGnDuSBudWxsYSBwZXIgbGUgbWlsaWFyZGkgZGkgdm9sdGUgY2hlIGxvIGhhaSBmaW5pdG8/XFxyXFxuICAgICAgICAgICAgaW5zZXJpc2NpIHF1aSBpbCB0dW8gYW5udW5jaW8hXFxyXFxuICAgICAgICAgIDwvcD5cXHJcXG4gICAgICAgICAgPGhyPlxcclxcbiAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJpbnNlcnRpb25zXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1saWdodFxcXCI+SW5zZXJpc2NpIEFubnVuY2lvPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48aDE+VWx0aW1pIGFubnVuY2k6PC9oMT5cXHJcXG48aDI+Q29udHJvbGxhIHF1aSBnbGkgdWx0aW1pIGFubnVuY2k8L2gyPlxcclxcbjxkaXYgaWQ9XFxcImNhcm91c2VsRXhhbXBsZUNvbnRyb2xzXFxcIiBjbGFzcz1cXFwiY2Fyb3VzZWwgc2xpZGVcXFwiIGRhdGEtYnMtcmlkZT1cXFwiY2Fyb3VzZWxcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYXJvdXNlbC1pbm5lclxcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2Fyb3VzZWwtaXRlbSBhY3RpdmVcXFwiPlxcclxcbiAgICAgICAgXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIHRleHQtYmctc2Vjb25kYXJ5XFxcIiBzdHlsZT1cXFwibWFyZ2luOiAyMCU7XFxcIj5cXHJcXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi4uXFxcIiBjbGFzcz1cXFwiY2FyZC1pbWctdG9wXFxcIiBhbHQ9XFxcIi4uLlxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxoNSBpZD1cXFwidGl0bGVcXFwiIGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5DYXJkIHRpdGxlPC9oNT5cXHJcXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPlNvbWUgcXVpY2sgZXhhbXBsZSB0ZXh0IHRvIGJ1aWxkIG9uIHRoZSBjYXJkIHRpdGxlIGFuZCBtYWtlIHVwIHRoZSBidWxrIG9mIHRoZSBjYXJkJ3MgY29udGVudC48L3A+XFxyXFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5HbyBzb21ld2hlcmU8L2E+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcm91c2VsLWl0ZW1cXFwiPlxcclxcbiAgICAgICAgXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIHRleHQtYmctc2Vjb25kYXJ5XFxcIiBzdHlsZT1cXFwibWFyZ2luOiAyMCU7XFxcIj5cXHJcXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi4uXFxcIiBjbGFzcz1cXFwiY2FyZC1pbWctdG9wXFxcIiBhbHQ9XFxcIi4uLlxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxoNSBpZD1cXFwidGl0bGVcXFwiIGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5DYXJkIHRpdGxlPC9oNT5cXHJcXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPlNvbWUgcXVpY2sgZXhhbXBsZSB0ZXh0IHRvIGJ1aWxkIG9uIHRoZSBjYXJkIHRpdGxlIGFuZCBtYWtlIHVwIHRoZSBidWxrIG9mIHRoZSBjYXJkJ3MgY29udGVudC48L3A+XFxyXFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5HbyBzb21ld2hlcmU8L2E+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcm91c2VsLWl0ZW1cXFwiPlxcclxcbiAgICAgICAgXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIHRleHQtYmctc2Vjb25kYXJ5XFxcIiBzdHlsZT1cXFwibWFyZ2luOiAyMCU7XFxcIj5cXHJcXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi4uXFxcIiBjbGFzcz1cXFwiY2FyZC1pbWctdG9wXFxcIiBhbHQ9XFxcIi4uLlxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxoNSBpZD1cXFwidGl0bGVcXFwiIGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5DYXJkIHRpdGxlPC9oNT5cXHJcXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPlNvbWUgcXVpY2sgZXhhbXBsZSB0ZXh0IHRvIGJ1aWxkIG9uIHRoZSBjYXJkIHRpdGxlIGFuZCBtYWtlIHVwIHRoZSBidWxrIG9mIHRoZSBjYXJkJ3MgY29udGVudC48L3A+XFxyXFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5HbyBzb21ld2hlcmU8L2E+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcm91c2VsLWl0ZW1cXFwiPlxcclxcbiAgICAgICAgXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIHRleHQtYmctc2Vjb25kYXJ5XFxcIiBzdHlsZT1cXFwibWFyZ2luOiAyMCU7XFxcIj5cXHJcXG4gICAgICAgICAgICA8aW1nIGlkPVxcXCJjYXJJbWdcXFwiIHNyYz1cXFwiLi4uXFxcIiBjbGFzcz1cXFwiY2FyZC1pbWctdG9wXFxcIiBhbHQ9XFxcIi4uLlxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxoNSBpZD1cXFwiY2FydGl0bGVcXFwiIGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5DYXJkIHRpdGxlPC9oNT5cXHJcXG4gICAgICAgICAgICAgIDxwIGlkPVxcXCJjYXJUeHRcXFwiIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPlNvbWUgcXVpY2sgZXhhbXBsZSB0ZXh0IHRvIGJ1aWxkIG9uIHRoZSBjYXJkIHRpdGxlIGFuZCBtYWtlIHVwIHRoZSBidWxrIG9mIHRoZSBjYXJkJ3MgY29udGVudC48L3A+XFxyXFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5HbyBzb21ld2hlcmU8L2E+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2Fyb3VzZWwtY29udHJvbC1wcmV2XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdGFyZ2V0PVxcXCIjY2Fyb3VzZWxFeGFtcGxlQ29udHJvbHNcXFwiIGRhdGEtYnMtc2xpZGU9XFxcInByZXZcXFwiPlxcclxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvblxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICA8c3BhbiBjbGFzcz1cXFwidmlzdWFsbHktaGlkZGVuXFxcIj5QcmV2aW91czwvc3Bhbj5cXHJcXG4gICAgPC9idXR0b24+XFxyXFxuICAgIDxidXR0b24gY2xhc3M9XFxcImNhcm91c2VsLWNvbnRyb2wtbmV4dFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRhcmdldD1cXFwiI2Nhcm91c2VsRXhhbXBsZUNvbnRyb2xzXFxcIiBkYXRhLWJzLXNsaWRlPVxcXCJuZXh0XFxcIj5cXHJcXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb25cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+TmV4dDwvc3Bhbj5cXHJcXG4gICAgPC9idXR0b24+XFxyXFxuICA8L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG48aDE+Q2hpIHNpYW1vPzwvaDE+XFxyXFxuPGgyPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBFYSBhZGlwaXNjaSBhcmNoaXRlY3RvIGxpYmVybyBhbGlhcz8gTnVtcXVhbSBhdHF1ZSBiZWF0YWUgcXVpcyBhc3BlcmlvcmVzIG5lY2Vzc2l0YXRpYnVzIGVzdCBxdW9kIHZvbHVwdGF0ZSBldmVuaWV0IGV4Y2VwdHVyaSBtb2xlc3RpYXMgZnVnaWF0IG5vc3RydW0gbmloaWwsIGVsaWdlbmRpIHZlcm8uPC9oMj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICA8bGFiZWwgZm9yPVxcXCJ1c2VybmFtZVNpZ25JblxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPk5pY2tuYW1lPC9sYWJlbD5cXHJcXG4gICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJ1c2VybmFtZVNpZ25JblxcXCI+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgIDxsYWJlbCBmb3I9XFxcInBhc3N3b3JkU2lnbkluXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+UGFzc3dvcmQ8L2xhYmVsPlxcclxcbiAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJwYXNzd29yZFNpZ25JblxcXCI+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwibWItMyBmb3JtLWNoZWNrXFxcIj5cXHJcXG4gICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBjbGFzcz1cXFwiZm9ybS1jaGVjay1pbnB1dFxcXCIgaWQ9XFxcInJlbWVtYmVyTWVTaWduSW5cXFwiPlxcclxcbiAgICA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY2hlY2stbGFiZWxcXFwiIGZvcj1cXFwicmVtZW1iZXJNZVNpZ25JblxcXCI+Umljb3JkYW1pPC9sYWJlbD5cXHJcXG48L2Rpdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIj5BY2NlZGk8L2J1dHRvbj5cXHJcXG48cD5Ob24gc2VpIGFuY29yYSByZWdpc3RyYXRvPzwvcD5cXHJcXG48YnV0dG9uIGlkPVxcXCJsb2dpblNpZ25VcFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIj5SZWdpc3RyYXRpPC9idXR0b24+XFxyXFxuPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgZGF0YS1icy1kaXNtaXNzPVxcXCJtb2RhbFxcXCI+Q2hpdWRpPC9idXR0b24+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGNsYXNzPVxcXCJ0ZXh0LWNlbnRlciBtYi0zXFxcIj5cXHJcXG4gICAgPGgzPk9oLCBjaSBkaXNwaWFjZSBjaGUgdmFpIHZpYSE8YnI+VG9ybmEgYSB0cm92YXJjaSE8L2gzPlxcclxcbiAgICA8aW1nIHNyYz1cXFwiLi9pbWcvZmFkRmFjZS5wbmdcXFwiIHdpZHRoPVxcXCIxMDBcXFwiIGFsdD1cXFwiaW1tYWdpbmUgdHJpc3RlXFxcIj5cXHJcXG48L2Rpdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIGlkPVxcXCJteU1vZGFsXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwic2lnbkluTW9kYWxMYWJlbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLWNlbnRlcmVkXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cXFwibW9kYWwtdGl0bGUgZnMtNVxcXCIgaWQ9XFxcInNpZ25Jbk1vZGFsTGFiZWxcXFwiPk1pbmNoaWEgSm9obm55IENhcnJhYmJhZ2dpbzwvaDE+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuLWNsb3NlXFxcIiBkYXRhLWJzLWRpc21pc3M9XFxcIm1vZGFsXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCI+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwibXlNb2RhbEJvZHlcXFwiIGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwibXlNb2RhbEZvb3RlclxcXCIgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPCEtLW5hdmJhciBjb250cm9sbGVyIGljb24tLT5cXHJcXG48YnV0dG9uIGlkPVxcXCJsb2dvXFxcIiBjbGFzcz1cXFwibG9nby1idXR0b25cXFwiPiA8aW1nIGNsYXNzPVxcXCJsb2dvXFxcIiBzcmM9XFxcIi4vaW1nL3Byb2ZpbGUucG5nXFxcIiBhbHQ9XFxcImxvZ29cXFwiPjwvYnV0dG9uPlxcclxcblxcclxcbjxuYXY+XFxyXFxuICA8dWw+XFxyXFxuICAgIDwhLS1uYXZiYXIgYnV0dG9ucy0tPlxcclxcbiAgICA8IS0teSBidXR0b24tLT5cXHJcXG4gICAgPGJ1dHRvbiBpZD1cXFwiaW5zZXJ0aW9uc1xcXCIgY2xhc3M9XFxcImJ1dHRvbi1vbmUgbmF2LWJ1dHRvblxcXCI+QW5udW5jaTwvYnV0dG9uPlxcclxcbiAgICA8IS0teCBidXR0b24tLT5cXHJcXG4gICAgPGJ1dHRvbiBpZD1cXFwibWFuYWdlbWVudFxcXCIgY2xhc3M9XFxcImJ1dHRvbi10d28gbmF2LWJ1dHRvblxcXCI+R2VzdGlvbmUgVXRlbnRpPC9idXR0b24+XFxyXFxuICAgIDwhLS1hIGJ1dHRvbi0tPlxcclxcbiAgICA8YnV0dG9uIGlkPVxcXCJiaG9cXFwiIGNsYXNzPVxcXCJidXR0b24tdGhyZWUgbmF2LWJ1dHRvblxcXCI+dGVtcCBidXR0b248L2J1dHRvbj5cXHJcXG4gICAgPCEtLWIgYnV0dG9uLS0+XFxyXFxuICAgIDxidXR0b24gaWQ9XFxcImxvZ2luXFxcIiBjbGFzcz1cXFwiYnV0dG9uLWZvdXIgbmF2LWJ1dHRvblxcXCIgZGF0YS1icy10b2dnbGU9XFxcIm1vZGFsXFxcIlxcclxcbiAgICAgIGRhdGEtYnMtdGFyZ2V0PVxcXCIjbXlNb2RhbFxcXCI+TG9naW48L2J1dHRvbj5cXHJcXG4gICAgPCEtLWIgYnV0dG9uLS0+XFxyXFxuICAgIDxidXR0b24gaWQ9XFxcInNpZ25PdXRCdXR0b25cXFwiIGNsYXNzPVxcXCJidXR0b24tZm91ciBuYXYtYnV0dG9uXFxcIiBkYXRhLWJzLXRvZ2dsZT1cXFwibW9kYWxcXFwiXFxyXFxuICAgIGRhdGEtYnMtdGFyZ2V0PVxcXCIjbXlNb2RhbFxcXCI+TG9nb3V0PC9idXR0b24+XFxyXFxuXFxyXFxuICAgIDxidXR0b24gaWQ9XFxcInByb2ZpbGVcXFwiIGNsYXNzPVxcXCJwcm9maWxlLWJ1dHRvblxcXCI+XFxyXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcInBvc2l0aW9uLWFic29sdXRlIHRvcC0yIHN0YXJ0LTkwIHRyYW5zbGF0ZS1taWRkbGUgcC0yIGJnLWRhbmdlciBib3JkZXIgYm9yZGVyLWxpZ2h0IHJvdW5kZWQtY2lyY2xlXFxcIj5cXHJcXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPk5ldyBhbGVydHM8L3NwYW4+XFxyXFxuICAgICAgPC9zcGFuPlxcclxcbiAgICAgIDxpbWcgY2xhc3M9XFxcImxvZ28gcHJvZmlsZVxcXCIgc3JjPVxcXCIuL2ltZy9wcm9maWxlLnBuZ1xcXCIgYWx0PVxcXCJsb2dvXFxcIj5cXHJcXG4gICAgPC9idXR0b24+XFxyXFxuICA8L3VsPlxcclxcbjwvbmF2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGgxPlRPRE86IG1vc3RyYXJlIHR1dHRlIGxlIGluZm8gZGVsbCd1dGVudGU8L2gxPlxcclxcbjxoMT5UT0RPOiBmb3JtIG8gYWx0cm8gcGVyIGNhbWJpYXJlIG5pY2tuYW1lIGUvbyBwYXNzd29yZCBlY2M8L2gxPlxcclxcbjxoMT5UT0RPOiBwb3NzaWJpbGl0w6AgZGkgc2NlZ2xpZXJlIGkgZ2lvY2hpIGNoZSBzaSBwb3NzaWVkb25vPC9oMT5cXHJcXG5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxoMT5UT0RPOiBtb3N0cmFyZSB0dXR0ZSBsZSBpbmZvIGRlbGwndXRlbnRlPC9oMT5cXHJcXG5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxmb3JtPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcIm5hbWVTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5Ob21lPC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwibmFtZVNpZ25VcFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcInN1cm5hbWVTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5Db2dub21lPC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwic3VybmFtZVNpZ25VcFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcInVzZXJuYW1lU2lnblVwXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+Tmlja25hbWU8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJ1c2VybmFtZVNpZ25VcFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImVtYWlsU2lnblVwXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+RW1haWw8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiZW1haWxTaWduVXBcXFwiIHJlcXVpcmVkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJwYXNzd29yZFNpZ25VcFxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPlBhc3N3b3JkPC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInBhc3N3b3JkU2lnblVwXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiY29uZmlybV9wYXNzd29yZFNpZ25VcFxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPkNvbmZlcm1hIFBhc3N3b3JkPC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImNvbmZpcm1fcGFzc3dvcmRTaWduVXBcXFwiIHJlcXVpcmVkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Zvcm0+XFxyXFxuPCEtLSBcXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiBpZD1cXFwic2lnblVwTW9kYWxcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJzaWduVXBNb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctY2VudGVyZWRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCIgaWQ9XFxcInNpZ25VcE1vZGFsTGFiZWxcXFwiPlJlZ2lzdHJhemlvbmU8L2g1PlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0bi1jbG9zZVxcXCIgZGF0YS1icy1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgYXJpYS1sYWJlbD1cXFwiQ2xvc2VcXFwiPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8Zm9ybT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5hbWVTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5Ob21lPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcIm5hbWVTaWduVXBcXFwiIHJlcXVpcmVkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJzdXJuYW1lU2lnblVwXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+Q29nbm9tZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJzdXJuYW1lU2lnblVwXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwidXNlcm5hbWVTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5OaWNrbmFtZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJ1c2VybmFtZVNpZ25VcFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImVtYWlsU2lnblVwXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+RW1haWw8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImVtYWlsU2lnblVwXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwicGFzc3dvcmRTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5QYXNzd29yZDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwicGFzc3dvcmRTaWduVXBcXFwiIHJlcXVpcmVkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJjb25maXJtX3Bhc3N3b3JkU2lnblVwXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+Q29uZmVybWEgUGFzc3dvcmQ8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImNvbmZpcm1fcGFzc3dvcmRTaWduVXBcXFwiIHJlcXVpcmVkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgaWQ9XFxcInN1Ym1pdFNpZ25VcFxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCI+UmVnaXN0cmF0aTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgZGF0YS1icy1kaXNtaXNzPVxcXCJtb2RhbFxcXCI+Q2hpdWRpPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuIC0tPlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGJ1dHRvbiBpZD1cXFwic2lnblVwTG9naW5cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+QWNjZWRpPC9idXR0b24+XFxyXFxuPGJ1dHRvbiBpZD1cXFwidHJ5dG9TaWduVXBcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgZGF0YS1icy1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgZGlzYWJsZWQ+UmVnaXN0cmF0aTwvYnV0dG9uPlxcclxcbjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIGRhdGEtYnMtZGlzbWlzcz1cXFwibW9kYWxcXFwiPkNoaXVkaTwvYnV0dG9uPlwiOyIsImltcG9ydCBhbm51bmNpIGZyb20gJy4vYW5udW5jaS5odG1sJ1xyXG5cclxuaW1wb3J0IGNyZWFBbm51bmNpbyBmcm9tICcuLi9jcmVhQW5udW5jaW8vY3JlYUFubnVuY2lvLmh0bWwnXHJcbmltcG9ydCBpbnNlcnRpb24gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnNlcnRpb24nO1xyXG5pbXBvcnQgZXhwYW5kSW5zZXJ0aW9uIGZyb20gJy4vYW5udW5jaW8nXHJcblxyXG5sZXQgbGlzdDogaW5zZXJ0aW9uW10gPSBbXTtcclxubGV0IHZpZXc6IG51bWJlciA9IDVcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQYWdlKCkgeyAgICAgICAvKkluaXppYWxpenphIHR1dHRvIGNpw7IgY2hlIHNlcnZlIGFsbGEgcGFnaW5hIHBlciBmdW56aW9uYXJlICovXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdEFsbFwiKS5vbmNsaWNrID0gc2VhcmNoQnlBbGw7XHJcbiAgICBhc3NpZ25GaWx0ZXJzKCk7XHJcblxyXG4gICAgZ2V0QWxsSW5zZXJ0aW9ucygpO1xyXG4gICAgY3JlYXRlUGFnaW5hdGlvbigpO1xyXG4gICAgc2hvd1Jlc3VsdHMoMSk7XHJcblxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2VhcmNoQnlBbGwoKSB7ICAgICAgICAgICAgIC8qTGEgZnVuemlvbmEgZGVsIGJvdHRvbmUgY2hlIGNlcmNhIHR1dHRpIGdsaSBhbm51bmNpIHNlbnphIGZpbHRyaSovXHJcbiAgICBnZXRBbGxJbnNlcnRpb25zKCk7XHJcbiAgICBjcmVhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICBzaG93UmVzdWx0cygxKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGFzc2lnbkZpbHRlcnMoKSB7ICAgICAgICAgICAgIC8qQXNzZWduYSBsZSBmdW56aW9uaSBhaSBwdWxzYW50aSBuZWxsZSBkcm9wRG93bkxpc3QgZGEgcHJvdmFyZSovXHJcbiAgICBsZXQgZ2VuZXJpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZW5yZXNcIikuY2hpbGRyZW5cclxuICAgIGZvciAobGV0IGcgb2YgZ2VuZXJpKSB7XHJcbiAgICAgICAgKGcgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNlYXJjaEJ5R2VucmUoZy5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IGFubmkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInllYXJzXCIpLmNoaWxkcmVuXHJcbiAgICBmb3IgKGxldCBhIG9mIGFubmkpIHtcclxuICAgICAgICAoYSBhcyBIVE1MQnV0dG9uRWxlbWVudCkub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2VhcmNoQnlZZWFyKE51bWJlcigoYSBhcyBIVE1MQnV0dG9uRWxlbWVudCkuaWQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNlYXJjaFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hUaXRsZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgc2VhcmNoVGl0bGUub25rZXlkb3duID0gKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXkgPT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICBzZWFyY2hCeVRpdGxlKHNlYXJjaFRpdGxlLnZhbHVlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEJ1dHRvblwiKTtcclxuICAgIHNlYXJjaEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNlYXJjaEJ5VGl0bGUoc2VhcmNoVGl0bGUudmFsdWUpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZWFyY2hCeVRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcclxuICAgIGxldCBmaWx0ZXJlZExpc3QgPSBbXVxyXG4gICAgZm9yIChsZXQgZWxlbWVudCBvZiBsaXN0KSB7XHJcbiAgICAgICAgbGV0IHRpdG9sbyA9IGVsZW1lbnQudGl0bGU7XHJcbiAgICAgICAgbGV0IGdhbWVOYW1lID0gZWxlbWVudC50cmFkZUdhbWUubmFtZVxyXG4gICAgICAgIGlmICgodGl0b2xvLnRvVXBwZXJDYXNlKCkuaW5jbHVkZXModGl0bGUudG9VcHBlckNhc2UoKSkpXHJcbiAgICAgICAgICAgIHx8IChnYW1lTmFtZS50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKHRpdGxlLnRvVXBwZXJDYXNlKCkpKSkge1xyXG4gICAgICAgICAgICBmaWx0ZXJlZExpc3QucHVzaChlbGVtZW50KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxpc3QgPSBbXTtcclxuICAgIGxpc3QgPSBmaWx0ZXJlZExpc3RcclxuICAgIGNyZWF0ZVBhZ2luYXRpb24oKTtcclxuICAgIHNob3dSZXN1bHRzKDEpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2VhcmNoQnlHZW5yZShnZW5yZTogU3RyaW5nKSB7XHJcbiAgICBjb25zb2xlLmxvZyhnZW5yZSk7XHJcbiAgICBsZXQgZmlsdGVyZWRMaXN0ID0gW11cclxuICAgIGZvciAobGV0IGVsZW1lbnQgb2YgbGlzdCkge1xyXG4gICAgICAgIGlmIChlbGVtZW50LnRyYWRlR2FtZS5nZW5yZSA9PSBnZW5yZSkge1xyXG4gICAgICAgICAgICBmaWx0ZXJlZExpc3QucHVzaChlbGVtZW50KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxpc3QgPSBbXTtcclxuICAgIGxpc3QgPSBmaWx0ZXJlZExpc3RcclxuICAgIGNyZWF0ZVBhZ2luYXRpb24oKTtcclxuICAgIHNob3dSZXN1bHRzKDEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZWFyY2hCeVllYXIoeWVhcjogbnVtYmVyKSB7XHJcbiAgICBjb25zb2xlLmxvZyh5ZWFyKTtcclxuICAgIGxldCBmaWx0ZXJlZExpc3QgPSBbXTtcclxuICAgIGZvciAobGV0IGVsZW1lbnQgb2YgbGlzdCkge1xyXG4gICAgICAgIGlmIChlbGVtZW50LnRyYWRlR2FtZS55ZWFyID09IHllYXIpIHtcclxuICAgICAgICAgICAgZmlsdGVyZWRMaXN0LnB1c2goZWxlbWVudClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsaXN0ID0gW107XHJcbiAgICBsaXN0ID0gZmlsdGVyZWRMaXN0XHJcbiAgICBjcmVhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICBzaG93UmVzdWx0cygxKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRBbGxJbnNlcnRpb25zKCkgeyAvKiBRdWVzdGEgw6ggc29sbyB1bmEgcHJvdmEsIHNjb21tZW50YXJlIGxhIGZldGNoIHBpw7kgZ2nDuSAqL1xyXG4gICAgbGlzdCA9IFtdO1xyXG5cclxuICAgIGNvbnN0IGltYWdlR2lvY28xID0ge1xyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9pLmV0c3lzdGF0aWMuY29tLzYyNzc4MDQvci9pbC83ZGYwMGUvNjk3NTQ2MzQwL2lsXzExNDB4Ti42OTc1NDYzNDBfZml2cy5qcGdcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlR2lvY28yID0ge1xyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cubW9ieWdhbWVzLmNvbS9pbWFnZXMvY292ZXJzL2wvMTQ0NDUtdGhlLWxlZ2VuZC1vZi16ZWxkYS1uZXMtZnJvbnQtY292ZXIuanBnXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdpb2NvMyA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2l0L2IvYjMvUG9rJUMzJUE5bW9uX0dpYWxsby5wbmdcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlR2lvY280ID0ge1xyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9tZXRhbGdlYXIuZmFuZG9tLmNvbS9pdC93aWtpL01ldGFsX0dlYXI/ZmlsZT1NZXRhbF9HZWFyLmpwZ1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHYWxsZXJ5MSA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2l0L3RodW1iLzcvNzcvUGlrYWNodS5wbmcvMTAyNHB4LVBpa2FjaHUucG5nXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdhbGxlcnkyID0ge1xyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cucG5nbWFydC5jb20vZmlsZXMvMTEvRnJvZy1NZW1lLVBORy1IRC5wbmdcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlR2FsbGVyeTMgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL21lZGlhLmxpY2RuLmNvbS9kbXMvaW1hZ2UvRDU2MzVBUUh3M0U1eVl5WFRMdy9wcm9maWxlLWZyYW1lZHBob3RvLXNocmlua184MDBfODAwLzAvMTY0NDUxODkxODYwNj9lPTE2NzU2MjAwMDAmdj1iZXRhJnQ9eDFSblhxV3NEV0FPVlFVWEdGdWpNb2RYWmhpR1VRSnUwYTZGQXNaTjNMb1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2lvY28xID0ge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5hbWU6IFwiU3VwZXJNYXJpb1wiLFxyXG4gICAgICAgIGdlbnJlOiBcIlBMQVRGT1JNXCIsXHJcbiAgICAgICAgeWVhcjogMTk4NSxcclxuICAgICAgICBjb25zb2xlOiBcIk5FU1wiLFxyXG4gICAgICAgIGNvdmVyOiBpbWFnZUdpb2NvMVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdpb2NvMiA9IHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBuYW1lOiBcIlRoZSBMZWdlbmQgb2YgWmVsZGFcIixcclxuICAgICAgICBnZW5yZTogXCJBVlZFTlRVUkFcIixcclxuICAgICAgICB5ZWFyOiAxOTg2LFxyXG4gICAgICAgIGNvbnNvbGU6IFwiTkVTXCIsXHJcbiAgICAgICAgY292ZXI6IGltYWdlR2lvY28yXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2lvY28zID0ge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIG5hbWU6IFwiUG9rZW1vbiBHaWFsbG9cIixcclxuICAgICAgICBnZW5yZTogXCJHRFJcIixcclxuICAgICAgICB5ZWFyOiAxOTk4LFxyXG4gICAgICAgIGNvbnNvbGU6IFwiR0FNRV9CT1lfQ09MT1JcIixcclxuICAgICAgICBjb3ZlcjogaW1hZ2VHaW9jbzNcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnaW9jbzQgPSB7XHJcbiAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgbmFtZTogXCJNZXRhbCBHZWFyXCIsXHJcbiAgICAgICAgZ2VucmU6IFwiU1RFQUxUSFwiLFxyXG4gICAgICAgIHllYXI6IDE5ODcsXHJcbiAgICAgICAgY29uc29sZTogXCJORVNcIixcclxuICAgICAgICBjb3ZlcjogaW1hZ2VHaW9jbzRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwdWJsaXNoZXJHaW9jbzEgPSB7XHJcbiAgICAgICAgdXNlcklkOiAxLFxyXG4gICAgICAgIHVzZXJuYW1lOiBcIlBpZXJvYWZmb25kb1wiLFxyXG4gICAgICAgIG5hbWU6IFwiUGllcmlub1wiLFxyXG4gICAgICAgIHN1cm5hbWU6IFwiQ2ljY2lub1wiLFxyXG4gICAgICAgIGVtYWlsOiBcInBpZXJpbm9jdW9yaWNpbm9AYW1vcmluby5jb21cIixcclxuICAgICAgICByYXRpbmc6IDY2NixcclxuICAgICAgICB2aWRlb2dhbWVzOiBbZ2lvY28xXVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGluc2VydGlvbjE6IGluc2VydGlvbiA9IHtcclxuICAgICAgICBhcHByb3ZlZDogdHJ1ZSxcclxuICAgICAgICB0aXRsZTogXCJTY2FtYmlvIFN1cGVyTWFyaW9cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTY2FtYmlvIHN1cGVybWFyaW8geGvDqCBtaSBzb25vIHNla2thdG8gYSBnaW9jYXJjaVwiLFxyXG4gICAgICAgIHB1Ymxpc2hlcjogcHVibGlzaGVyR2lvY28xLFxyXG4gICAgICAgIGdhbGxlcnk6IFtpbWFnZUdhbGxlcnkxLCBpbWFnZUdhbGxlcnkyLCBpbWFnZUdhbGxlcnkzXSxcclxuICAgICAgICB0cmFkZUdhbWU6IGdpb2NvMSxcclxuICAgICAgICB3aXNoTGlzdDogW2dpb2NvMiwgZ2lvY28zLCBnaW9jbzRdLFxyXG4gICAgICAgIG91dGNvbWU6IFwiV0lQXCIsXHJcbiAgICAgICAgcHVibGljYXRpb25EYXRlOiBcIjI5LTAxLTIwMjNcIlxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI3OyBpKyspIHtcclxuICAgICAgICBpZiAoaSAhPSAxNykge1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goaW5zZXJ0aW9uMSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goaW5zZXJ0aW9uMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLypRVUVTVE8gRScgTEEgRlVOWklPTkUgR0lVU1RBIE5PTiBGQU1PIENIRSBTQkFHTElBVEUhICovXHJcblxyXG4gICAgLypGZXRjaCBhIGJhY2tlbmQgY29uIHR1dHRpIGdsaSBhbm51bmNpLCBhZ2dpb3JuYSBsYSBsaXN0YSBsaXN0Ki9cclxuICAgIC8vIGxpc3Q9W107XHJcbiAgICAvLyBmZXRjaCgnL1RpcG9Bbm51bmNpQ2hlbmVzbycpXHJcbiAgICAvLyAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC8vIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAvLyAgICAgZm9yKGxldCBkIG9mIGRhdGEpe1xyXG4gICAgLy8gICAgICAgICBsaXN0LnB1c2goZCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSk7XHJcbn1cclxuXHJcbi8qZGEgcXVpIGluIHBvaSBsZSBmdW56aW9uaSBzZXJ2b25vIGEgXHJcbmNyZWFyZSBsYSBwYWdpbmEgdW5hIHZvbHRhIGNsaWNjYXRvICBcclxuc3VsIGJvdHRvbmUgYW5udW5jaSBlIGEgcmljYXJpY2FybGUqL1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUGFnaW5hdGlvbigpIHtcclxuICAgIGxldCBzaXplOiBudW1iZXIgPSBsaXN0Lmxlbmd0aFxyXG4gICAgbGV0IHRhYnM6IG51bWJlciA9IE1hdGguY2VpbChzaXplIC8gdmlldyk7XHJcbiAgICBsZXQgcGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VzXCIpO1xyXG4gICAgcGFnZXMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRhYnM7IGkrKykge1xyXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBpZiAoaSA9PSAxKSB7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtIGFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIsIFwicGFnZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1saW5rXCIpO1xyXG4gICAgICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYWxsTGkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VzXCIpLmNoaWxkcmVuO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBvbmVMaSBvZiBhbGxMaSkge1xyXG4gICAgICAgICAgICAgICAgb25lTGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWl0ZW1cIik7XHJcbiAgICAgICAgICAgICAgICBvbmVMaS5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWl0ZW0gYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIiwgXCJwYWdlXCIpO1xyXG4gICAgICAgICAgICBzaG93UmVzdWx0cyhpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGJ0bi5pbm5lckhUTUwgPSBcIlwiICsgKGkpO1xyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlc1wiKS5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dSZXN1bHRzKGk6IG51bWJlcikge1xyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc2VydGlvbkNvbnRlbnRcIik7XHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBsZXQgc3RhcnQgPSAoaSAtIDEpICogdmlldztcclxuICAgIGxldCBzdG9wID0gKGkgKiB2aWV3KSAtIDE7XHJcbiAgICBmb3IgKHN0YXJ0OyBzdGFydCA8PSBzdG9wOyBzdGFydCsrKSB7XHJcbiAgICAgICAgaWYgKHN0YXJ0ID49IGxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbGlzdFtzdGFydF0uYXBwcm92ZWQpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxyXG4gICAgICAgIGxpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGV4cGFuZEluc2VydGlvbihsaXN0W3N0YXJ0XSlcclxuICAgICAgICB9XHJcbiAgICAgICAgbGkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsaXN0LWdyb3VwLWl0ZW0nKTtcclxuICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoJ29ubW91c2VvdmVyJywgXCJzZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpc3QtZ3JvdXAtaXRlbSBhY3RpdmUnKVwiKTtcclxuICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoJ29ubW91c2VvdXQnLCBcInNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGlzdC1ncm91cC1pdGVtJylcIik7XHJcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgICAgIGxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgbGV0IGdhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBsZXQgZ2VucmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBsZXQgeWVhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIGxldCBjb25zb2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgbGV0IHRyYWRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIGltYWdlLnNyYyA9IGxpc3Rbc3RhcnRdLnRyYWRlR2FtZS5jb3Zlci5saW5rO1xyXG4gICAgICAgIGltYWdlLndpZHRoID0gMjAwO1xyXG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9IGxpc3Rbc3RhcnRdLnRpdGxlO1xyXG4gICAgICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IGxpc3Rbc3RhcnRdLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgIGdhbWUuaW5uZXJIVE1MID0gbGlzdFtzdGFydF0udHJhZGVHYW1lLm5hbWU7XHJcbiAgICAgICAgZ2VucmUuaW5uZXJIVE1MID0gbGlzdFtzdGFydF0udHJhZGVHYW1lLmdlbnJlO1xyXG4gICAgICAgIHllYXIuaW5uZXJIVE1MID0gXCJcIiArIGxpc3Rbc3RhcnRdLnRyYWRlR2FtZS55ZWFyO1xyXG4gICAgICAgIGNvbnNvbGUuaW5uZXJIVE1MID0gbGlzdFtzdGFydF0udHJhZGVHYW1lLmNvbnNvbGU7XHJcbiAgICAgICAgdHJhZGVzLmlubmVySFRNTCA9IFwiQWNjZXR0ZXJlaSBTY2FtYmlvIGNvbjogXCIgKyBsaXN0W3N0YXJ0XS53aXNoTGlzdFswXS5uYW1lO1xyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgICAgICBsaS5hcHBlbmRDaGlsZChpbWFnZSk7XHJcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGdhbWUpO1xyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGdlbnJlKTtcclxuICAgICAgICBsaS5hcHBlbmRDaGlsZCh5ZWFyKTtcclxuICAgICAgICBsaS5hcHBlbmRDaGlsZChjb25zb2xlKTtcclxuICAgICAgICBsaS5hcHBlbmRDaGlsZCh0cmFkZXMpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKGxpKTtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBhZ2VcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBpbnNlcnRpb24gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnNlcnRpb24nO1xyXG5pbXBvcnQgYW5udW5jaW8gZnJvbSAnLi9hbm51bmNpby5odG1sJ1xyXG5pbXBvcnQgY3JlYXRlUGFnZSBmcm9tICcuL2FubnVuY2knO1xyXG5pbXBvcnQgYW5udW5jaSBmcm9tICcuL2FubnVuY2kuaHRtbCdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHBhbmRJbnNlcnRpb24oaW5zZXJ0aW9uOiBpbnNlcnRpb24pIHtcclxuXHJcbiAgICAvKkltcG9zdG8gbGEgcGFnaW5hIHByaW5jaXBhbGUgY29uIGlsIHRlbXBsYXRlIGRlbCBzaW5nb2xvIGFubnVuY2lvICovXHJcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcclxuICAgIG1haW4uaW5uZXJIVE1MID0gYW5udW5jaW87XHJcblxyXG4gICAgLypDcmVvIHVuIHB1bHNhbnRlIHBlciB0b3JuYXJlIGFsbGEgbGlzdCBhbm51bmNpIGUgaWwgdGl0b2xvICovXHJcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ0biBidG4tc3VjY2Vzc1wiKTtcclxuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIkluZGlldHJvXCJcclxuICAgIGJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBhbm51bmNpO1xyXG4gICAgICAgIGNyZWF0ZVBhZ2UoKTtcclxuICAgIH1cclxuICAgIGxldCBiYWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrXCIpXHJcbiAgICBiYWNrLmFwcGVuZChidXR0b24pO1xyXG5cclxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIHRpdGxlLmlubmVySFRNTCA9IGluc2VydGlvbi50aXRsZTtcclxuICAgIGJhY2suYXBwZW5kKHRpdGxlKTtcclxuXHJcblxyXG5cclxuICAgIC8qSW1wb3N0byBpbCBjYXJvc2VsbG8gZGVsbGUgaW1tYWdpbmkgdXRlbnRlICovXHJcbiAgICBsZXQgaW5kaWNhdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmRpY2F0b3JcIilcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5zZXJ0aW9uLmdhbGxlcnkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiZGF0YS1icy10YXJnZXRcIiwgXCIjaW1hZ2VTbGlkZXJcIik7XHJcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImRhdGEtYnMtc2xpZGUtdG9cIiwgXCJcIiArIGkpO1xyXG4gICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgXCJTbGlkZSBcIiArIChpICsgMSkpO1xyXG4gICAgICAgIGluZGljYXRvci5hcHBlbmQoYnRuKTtcclxuICAgIH1cclxuICAgIGxldCBpbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5uZXJcIilcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluc2VydGlvbi5nYWxsZXJ5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJvdXNlbC1pdGVtIGFjdGl2ZVwiKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcm91c2VsLWl0ZW1cIilcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgaW1nLnNyYyA9IGluc2VydGlvbi5nYWxsZXJ5W2ldLmxpbms7XHJcbiAgICAgICAgaW1nLndpZHRoID0gNDAwO1xyXG4gICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImQtYmxvY2sgdy0xMDBcIik7XHJcbiAgICAgICAgaW1nLmFsdCA9IFwiR2FsbGVyeSBJbWFnZVwiICsgKGkgKyAxKVxyXG4gICAgICAgIGRpdi5hcHBlbmQoaW1nKTtcclxuICAgICAgICBpbm5lci5hcHBlbmQoZGl2KVxyXG4gICAgfVxyXG4gICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBpbWcuc3JjID0gaW5zZXJ0aW9uLnRyYWRlR2FtZS5jb3Zlci5saW5rO1xyXG4gICAgaW1nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW1nLWZsdWlkIHJvdW5kZWQtc3RhcnRcIilcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZC1pbWFnZVwiKS5hcHBlbmQoaW1nKTtcclxuICAgIGxldCBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICAgIGg0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2FyZC10aXRsZVwiKTtcclxuICAgIGg0LmlubmVySFRNTCA9IGluc2VydGlvbi50cmFkZUdhbWUubmFtZTtcclxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2FyZC10ZXh0XCIpO1xyXG4gICAgcC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImZvbnQtc2l6ZTogMS41ZW07XCIpXHJcbiAgICBwLmlubmVySFRNTCA9XHJcbiAgICAgICAgXCJHZW5lcmU6IFwiICsgaW5zZXJ0aW9uLnRyYWRlR2FtZS5nZW5yZSArIFwiPGJyPlwiXHJcbiAgICAgICAgKyBcIkFubm86IFwiICsgaW5zZXJ0aW9uLnRyYWRlR2FtZS55ZWFyICsgXCI8YnI+XCJcclxuICAgICAgICArIFwiQ29uc29sZTogXCIgKyBpbnNlcnRpb24udHJhZGVHYW1lLmNvbnNvbGU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmQtYm9keVwiKS5hcHBlbmQoaDQsIHApO1xyXG4gICAgbGV0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBkZXNjLmlubmVySFRNTCA9IFwiRGVzY3JpemlvbmU6XCJcclxuICAgIGxldCBpbnNEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBpbnNEZXNjLmlubmVySFRNTCA9IGluc2VydGlvbi5kZXNjcmlwdGlvbjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zZXJ0aW9uLWNyZWF0b3JcIikuaW5uZXJIVE1MID0gaW5zZXJ0aW9uLnB1Ymxpc2hlci51c2VybmFtZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zZXJ0aW9uLWRlc2NyaXB0aW9uXCIpLmFwcGVuZChkZXNjLCBpbnNEZXNjKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4taXRlbS1cIiArIChpICsgMSkpLmlubmVySFRNTCA9IGluc2VydGlvbi53aXNoTGlzdFtpXS5uYW1lO1xyXG4gICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGltZy5zcmMgPSBpbnNlcnRpb24ud2lzaExpc3RbaV0uY292ZXIubGluaztcclxuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJkLWltZy10b3BcIilcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltZy1pdGVtLVwiKyhpKzEpKS5hcHBlbmQoaW1nKTtcclxuICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHAuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJkLXRleHRcIik7XHJcbiAgICAgICAgcC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImZvbnQtc2l6ZTogMS41ZW07XCIpO1xyXG4gICAgICAgIHAuaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgXCJHZW5lcmU6IFwiICsgaW5zZXJ0aW9uLndpc2hMaXN0W2ldLmdlbnJlICsgXCI8YnI+XCJcclxuICAgICAgICAgICAgKyBcIkFubm86IFwiICsgaW5zZXJ0aW9uLndpc2hMaXN0W2ldLnllYXIgKyBcIjxicj5cIlxyXG4gICAgICAgICAgICArIFwiQ29uc29sZTogXCIgKyBpbnNlcnRpb24ud2lzaExpc3RbaV0uY29uc29sZTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHktaXRlbS1cIisoaSsxKSkuYXBwZW5kKHApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBleHBhbmRJbnNlcnRpb24iLCJpbXBvcnQgZGl2IGZyb20gJy4vZm9vdGVyLmh0bWwnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvdCgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9vdGVyXCIpLmlubmVySFRNTCA9IGRpdjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm90OyIsImltcG9ydCBnZXN0aW9uZVV0ZW50aSBmcm9tICcuL2dlc3Rpb25lVXRlbnRpLmh0bWwnXHJcbmltcG9ydCB1c2VySW50IGZyb20gJy4uL2ludGVyZmFjZXMvdXNlcic7XHJcbmltcG9ydCBzaG93VXNlclByb2ZpbGUgZnJvbSAnLi4vcHJvZmlsb1V0ZW50ZS9zaG93UHJvZmlsZSc7XHJcblxyXG5sZXQgdXNlcnM6IHVzZXJJbnRbXSA9IFtdO1xyXG5sZXQgdmlldyA9IDU7XHJcblxyXG5mdW5jdGlvbiBzaG93VXNlcnMobnVtOiBudW1iZXIpIHtcclxuICAgIGxldCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyTGlzdFwiKTtcclxuICAgIGxpc3QuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gKG51bSAtIDEpICogdmlldzsgaSA8IG51bSAqIHZpZXc7IGkrKykge1xyXG4gICAgICAgIGlmIChpID49IHVzZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBsZXQgYnRuX3Byb2ZpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ0bl9wcm9maWxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnRuXCIpO1xyXG4gICAgICAgIGJ0bl9wcm9maWxlLm9uY2xpY2sgPSBzaG93VXNlclByb2ZpbGU7XHJcbiAgICAgICAgbGkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsaXN0LWdyb3VwLWl0ZW0nKTtcclxuICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoJ29ubW91c2VvdmVyJywgXCJzZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpc3QtZ3JvdXAtaXRlbSBhY3RpdmUnKVwiKTtcclxuICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoJ29ubW91c2VvdXQnLCBcInNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGlzdC1ncm91cC1pdGVtJylcIik7XHJcbiAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZmxvYXQtZW5kXCIpO1xyXG4gICAgICAgIGxldCBidG5fYmFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBsZXQgYnRuX2FkbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnRuX2Jhbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVwiKTtcclxuICAgICAgICBidG5fYWRtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbVwiKTtcclxuICAgICAgICBidG5fYmFuLmlubmVySFRNTCA9IFwiQmFubmFcIjtcclxuICAgICAgICBidG5fYWRtLmlubmVySFRNTCA9IFwiUmVuZGkgQWRtaW5cIjtcclxuICAgICAgICBidG5fYmFuLm9uY2xpY2sgPSAoKSA9PiB7IGtpY2tIaXNBc3NPdXRPZlRoaXNTaXRlKHVzZXJzW2ldLnVzZXJJZCl9O1xyXG4gICAgICAgIGJ0bl9hZG0ub25jbGljayA9ICgpID0+IHsgbWFrZUhpbUFkbWluKHVzZXJzW2ldLnVzZXJJZCkgfTtcclxuICAgICAgICBzcGFuLmFwcGVuZChidG5fYWRtLCBidG5fYmFuKTtcclxuICAgICAgICBidG5fcHJvZmlsZS5pbm5lckhUTUwgPSB1c2Vyc1tpXS51c2VybmFtZSArIFwiIHwgXCIgKyB1c2Vyc1tpXS5uYW1lICsgXCIgXCIgKyB1c2Vyc1tpXS5zdXJuYW1lICsgXCIgfCBcIiArIHVzZXJzW2ldLmVtYWlsICsgXCIgfCBcIiArIHVzZXJzW2ldLnJhdGluZyArIFwiPGkgY2xhc3M9J2ZhLXJlZ3VsYXIgZmEtc3Rhcic+PC9pPlwiO1xyXG4gICAgICAgIGxpLmFwcGVuZChidG5fcHJvZmlsZSwgc3Bhbik7XHJcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsVXNlcnMoKTogdm9pZCB7XHJcbiAgICBmZXRjaChcIi91c2VyXCIpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdXNlcnMgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgZWxlbWVudCBvZiBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB1c2Vycy5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNyZWF0ZVBhZ2luYXRpb24oKTtcclxuICAgICAgICAgICAgc2hvd1VzZXJzKDEpO1xyXG4gICAgICAgIH0pO1xyXG59XHJcblxyXG4vKlxyXG48bGkgY2xhc3M9XCJwYWdlLWl0ZW0gYWN0aXZlXCIgYXJpYS1jdXJyZW50PVwicGFnZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBhZ2UtbGlua1wiPjE8L3NwYW4+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3M9XCJwYWdlLWl0ZW1cIj48YSBjbGFzcz1cInBhZ2UtbGlua1wiIGhyZWY9XCIjXCI+MjwvYT48L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cInBhZ2UtaXRlbVwiPjxhIGNsYXNzPVwicGFnZS1saW5rXCIgaHJlZj1cIiNcIj4zPC9hPjwvbGk+XHJcbiovXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQYWdpbmF0aW9uKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdpbmF0aW9uXCIpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBsZXQgbnVtYmVyT2ZQYWdlcyA9IE1hdGguY2VpbCh1c2Vycy5sZW5ndGggLyB2aWV3KTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZQYWdlczsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWl0ZW0gYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIiwgXCJwYWdlXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWxpbmtcIik7XHJcbiAgICAgICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBhbGxMaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnaW5hdGlvblwiKS5jaGlsZHJlbjtcclxuICAgICAgICAgICAgZm9yIChsZXQgb25lTGkgb2YgYWxsTGkpIHtcclxuICAgICAgICAgICAgICAgIG9uZUxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgb25lTGkucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtIGFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIsIFwicGFnZVwiKTtcclxuICAgICAgICAgICAgc2hvd1VzZXJzKGkgKyAxKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGJ0bi5pbm5lckhUTUwgPSBcIlwiICsgKGkgKyAxKTtcclxuICAgICAgICBsaS5hcHBlbmRDaGlsZChidG4pO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnaW5hdGlvblwiKS5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gbWFrZUhpbUFkbWluKGlkOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaWQpXHJcbiAgICB9XHJcbiAgICBmZXRjaChcIi9hZG1pblwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaWQpXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7IGNvbnNvbGUubG9nKFwiYWRtaW4gY3JlYXRvPyBcIiArIGRhdGEpOyBnZXRBbGxVc2VycygpOyB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24ga2lja0hpc0Fzc091dE9mVGhpc1NpdGUoaWQ6IG51bWJlcikge1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGlkKVxyXG4gICAgfVxyXG4gICAgZmV0Y2goXCIvdXNlclwiLCByZXF1ZXN0KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7IGNvbnNvbGUubG9nKFwidXNlciBjYW5jZWxsYXRvPyBcIiArIGRhdGEpOyBnZXRBbGxVc2VycygpOyB9KTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldEFsbFVzZXJzOyIsImltcG9ydCBob21lIGZyb20gJy4vaG9tZS5odG1sJ1xyXG5pbXBvcnQgaW5zZXJ0aW9uIGZyb20gJy4uL2ludGVyZmFjZXMvaW5zZXJ0aW9uJztcclxuaW1wb3J0IGNyZWF0ZUluc2VydGlvbiBmcm9tICcuLi9jcmVhQW5udW5jaW8vY3JlYUFubnVuY2lvJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIb21lKCl7XHJcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XHJcbiAgICBtYWluLmlubmVySFRNTCArPSBob21lO1xyXG4gICAgbGV0IGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xyXG4gICAgaGVhZC5pbm5lckhUTUwgKz0gJzxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLi9ob21lLmNzc1wiPic7XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlSXRlbUNhcm91c2VsKGluc2VydGlvbjppbnNlcnRpb24pe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBjYXJJbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYXJvdXNlbC1pbm5lclwiKVswXTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgaW5zZXJ0aW9uLmdhbGxlcnkubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2xDYXJvdXNlbEl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGlmKGkgPT0gMCl7XHJcbiAgICAgICAgICAgICAgICBjbENhcm91c2VsSXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJvdXNlbC1pdGVtIGFjdGl2ZScpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGNsQ2Fyb3VzZWxJdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Nhcm91c2VsLWl0ZW0nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBpbnNlcnRpb24uZ2FsbGVyeVtpXS5saW5rKTtcclxuICAgICAgICAgICAgbGV0IGNsQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjbENhcmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkIHRleHQtYmctc2Vjb25kYXJ5Jyk7XHJcbiAgICAgICAgICAgIGxldCBjYXJCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNhckJvZHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkLWJvZHknKTtcclxuICAgICAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XHJcbiAgICAgICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZC10aXRsZScpO1xyXG4gICAgICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSBpbnNlcnRpb24udHJhZGVHYW1lLm5hbWU7XHJcblxyXG5cclxuICAgICAgICAgICAgY2FySW5uZXIuYXBwZW5kQ2hpbGQoY2xDYXJvdXNlbEl0KTtcclxuICAgICAgICAgICAgICAgIGNsQ2Fyb3VzZWxJdC5hcHBlbmRDaGlsZChjbENhcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsQ2FyZC5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsQ2FyZC5hcHBlbmRDaGlsZChjYXJCb2R5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyQm9keS5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgbGV0IGNsQ2FyZFxyXG5cclxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyVGl0bGUnKTtcclxuICAgICAgICBsZXQgaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FySW1hZ2UnKTtcclxuICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJUZXh0Jyk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZTtcclxuXHJcbi8qXHJcbmFzeW5jIGZ1bmN0aW9uIGdldHRpdGxlKHRpdGxlOiBzdHJpbmcpOntcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goKVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG5cclxufVxyXG4qLyIsImltcG9ydCBtb2RhbCBmcm9tICcuL21vZGFsLmh0bWwnXHJcbmltcG9ydCBsb2dpbiBmcm9tICcuLi9sb2dpbi9sb2dpbi5odG1sJ1xyXG5pbXBvcnQgbG9naW5Gb290ZXIgZnJvbSAnLi4vbG9naW4vbG9naW5Gb290ZXIuaHRtbCdcclxuaW1wb3J0IHJlZ2lzdHJhemlvbmUgZnJvbSAnLi4vcmVnaXN0cmF6aW9uZS9yZWdpc3RyYXppb25lLmh0bWwnXHJcbmltcG9ydCByZWdGb290ZXIgZnJvbSAnLi4vcmVnaXN0cmF6aW9uZS9yZWdpc3RyYXppb25lRm9vdGVyLmh0bWwnXHJcbmltcG9ydCBsb2dvdXQgZnJvbSAnLi4vbG9nb3V0L2xvZ291dC5odG1sJ1xyXG5pbXBvcnQgcHJvZmlsZSBmcm9tICcuLi9wcm9maWxvVXRlbnRlL3Byb2ZpbGUuaHRtbCdcclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW9kYWwoKXtcclxuICAgIGxldCBkaXZNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXZNb2RhbC5pbm5lckhUTUwgPSBtb2RhbDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpLmFwcGVuZENoaWxkKGRpdk1vZGFsKTtcclxuICAgIHNob3dMb2dJbk1vZGFsKCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luXCIpLm9uY2xpY2sgPSBzaG93TG9nSW5Nb2RhbDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbk91dEJ1dHRvblwiKS5vbmNsaWNrID0gc2hvd0xvZ091dE1vZGFsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93U2lnblVwTW9kYWwoKXtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbEJvZHlcIikuaW5uZXJIVE1MID0gcmVnaXN0cmF6aW9uZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbEZvb3RlclwiKS5pbm5lckhUTUwgPSByZWdGb290ZXI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyeXRvU2lnblVwXCIpLm9uY2xpY2sgPSB0cnlUb1NpZ25VcDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnblVwTG9naW5cIikub25jbGljayA9IHNob3dMb2dJbk1vZGFsO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzd29yZFNpZ25VcFwiKS5vbmtleXVwID0gdmFsaWRhdGVQYXNzd29yZDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uZmlybV9wYXNzd29yZFNpZ25VcFwiKS5vbmtleXVwID0gdmFsaWRhdGVQYXNzd29yZDtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0xvZ0luTW9kYWwoKXtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbEJvZHlcIikuaW5uZXJIVE1MID0gbG9naW47XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxGb290ZXJcIikuaW5uZXJIVE1MID0gbG9naW5Gb290ZXI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luU2lnblVwXCIpLm9uY2xpY2sgPSBzaG93U2lnblVwTW9kYWw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dMb2dPdXRNb2RhbCgpe1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteU1vZGFsQm9keVwiKS5pbm5lckhUTUwgPSBsb2dvdXQ7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxGb290ZXJcIikuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIC8vVE9ETzogY2hhbmdlTmF2QmFyXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRyeVRvU2lnblVwKCkge1xyXG4gICAgLypcclxuICAgIGlmICghdmFsaWRhdGVQYXNzd29yZDIoKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgICovXHJcbiAgICBjb25zb2xlLmxvZyhcImUgZmFjY2lhbW9sYSBzdGEgZmVjY2lcIik7XHJcbiAgICBjb25zdCB1c2VyID0ge1xyXG4gICAgICAgIHVzZXJuYW1lOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VybmFtZVNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSAsXHJcbiAgICAgICAgcGFzc3dvcmQ6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLFxyXG4gICAgICAgIG5hbWU6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVTaWduVXBcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcbiAgICAgICAgc3VybmFtZTogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VybmFtZVNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSxcclxuICAgICAgICBlbWFpbDogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxTaWduVXBcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpXHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2goXCIvdXNlclwiLCByZXF1ZXN0KS50aGVuKChyZXNwb25zZSk9PnJlc3BvbnNlLmpzb24oKSkudGhlbigoZGF0YSk9PmNvbnNvbGUubG9nKGRhdGEpKTtcclxuICAgIC8vJChcIiNteU1vZGFsXCIpLm1vZGFsKFwidG9nZ2xlXCIpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IHByb2ZpbGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRyeVRvTG9nSW4oKSB7XHJcbiAgICAvL1RPRE9cclxufVxyXG5cclxuZnVuY3Rpb24gdHJ5VG9Mb2dPdXQoKSB7XHJcbiAgICAvL1RPRE9cclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVQYXNzd29yZCgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKFwiY2lhbyBkYSB2YWxpZGF0ZTJcIik7XHJcbiAgICBsZXQgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBsZXQgY29uZmlybV9wYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uZmlybV9wYXNzd29yZFNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uZmlybV9wYXNzd29yZC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIlwiKTtcclxuICAgIGlmIChwYXNzd29yZC52YWx1ZSAhPSBjb25maXJtX3Bhc3N3b3JkLnZhbHVlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjaWFvIGRhbGwnaWZcIik7XHJcbiAgICAgICAgY29uZmlybV9wYXNzd29yZC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJvcmRlci1jb2xvcjogcmVkO1wiKTtcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cnl0b1NpZ25VcFwiKSBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgY29uZmlybV9wYXNzd29yZC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJvcmRlci1jb2xvcjogZ3JlZW47XCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJ5dG9TaWduVXBcIikucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNb2RhbDsiLCJpbXBvcnQgbmF2IGZyb20gXCIuL25hdmJhci5odG1sXCI7XHJcbmltcG9ydCBjcmVhdGVNb2RhbCBmcm9tIFwiLi4vbW9kYWwvbW9kYWxcIjtcclxuaW1wb3J0IGFubnVuY2kgZnJvbSBcIi4uL2FubnVuY2kvYW5udW5jaS5odG1sXCI7XHJcbmltcG9ydCBjcmVhdGVQYWdlIGZyb20gXCIuLi9hbm51bmNpL2FubnVuY2lcIjtcclxuaW1wb3J0IGhvbWUgZnJvbSBcIi4uL2hvbWUvaG9tZS5odG1sXCI7XHJcbmltcG9ydCBwcm9maWxlIGZyb20gXCIuLi9wcm9maWxvVXRlbnRlL3Byb2ZpbGUuaHRtbFwiO1xyXG5pbXBvcnQgZ2VzdGlvbmVVdGVudGkgZnJvbSBcIi4uL2dlc3Rpb25lVXRlbnRpL2dlc3Rpb25lVXRlbnRpLmh0bWxcIjtcclxuaW1wb3J0IGdldEFsbFVzZXJzIGZyb20gXCIuLi9nZXN0aW9uZVV0ZW50aS9nZXN0aW9uZVV0ZW50aVwiO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOYXYoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKS5pbm5lckhUTUwgPSBuYXY7XHJcbiAgICBjcmVhdGVNb2RhbCgpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dvXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGhvbWU7XHJcbiAgICB9O1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnRpb25zXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGFubnVuY2k7XHJcbiAgICAgICAgY3JlYXRlUGFnZSgpO1xyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFuYWdlbWVudFwiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBnZXN0aW9uZVV0ZW50aTtcclxuICAgICAgICBnZXRBbGxVc2VycygpO1xyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZmlsZVwiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBwcm9maWxlO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldE5hdigpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpLmlubmVySFRNTCA9IG5hdjtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVOYXY7XHJcbiIsImltcG9ydCBzaG93UHJvZmlsZSBmcm9tIFwiLi9zaG93UHJvZmlsZS5odG1sXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1VzZXJQcm9maWxlKCl7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MID0gc2hvd1Byb2ZpbGU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNob3dVc2VyUHJvZmlsZSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSBcIi4vaG9tZS9ob21lXCI7XHJcbmltcG9ydCBjcmVhdGVOYXYgZnJvbSBcIi4vbmF2YmFyL25hdmJhclwiO1xyXG5pbXBvcnQgY3JlYXRlRm90IGZyb20gXCIuL2Zvb3Rlci9mb290ZXJcIjtcclxuaW1wb3J0IGFkZEluc2VydGlvbiBmcm9tIFwiLi9jcmVhQW5udW5jaW8vY3JlYUFubnVuY2lvXCI7XHJcblxyXG5cclxuY3JlYXRlTmF2KCk7XHJcbmNyZWF0ZUhvbWUoKTtcclxuY3JlYXRlRm90KCk7XHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
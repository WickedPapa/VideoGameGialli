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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div>\r\n    <img src=\"./img/videogamelover.png\" alt=\"not found\" class=\"headerImg\" style=\"width: 100%;\" id=\"headerImg\">\r\n\r\n</div>\r\n\r\n<h1>Ultimi annunci:</h1>\r\n<h2>Controlla qui gli ultimi annunci</h2>\r\n<div id=\"carouselExampleControls\" class=\"carousel slide\" data-bs-ride=\"carousel\">\r\n    <div class=\"carousel-inner\">\r\n      <div class=\"carousel-item active\">\r\n        \r\n        <div class=\"card\" style=\"margin: 20%;\">\r\n            <img src=\"...\" class=\"card-img-top\" alt=\"...\">\r\n            <div class=\"card-body\">\r\n              <h5 id=\"title1\" class=\"card-title\">Card title</h5>\r\n              <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n              <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n            </div>\r\n          </div>\r\n\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        \r\n        <div class=\"card\" style=\"margin: 20%;\">\r\n            <img src=\"...\" class=\"card-img-top\" alt=\"...\">\r\n            <div class=\"card-body\">\r\n              <h5 id=\"title2\" class=\"card-title\">Card title</h5>\r\n              <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n              <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n            </div>\r\n          </div>\r\n\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        \r\n        <div class=\"card\" style=\"margin: 20%;\">\r\n            <img src=\"...\" class=\"card-img-top\" alt=\"...\">\r\n            <div class=\"card-body\">\r\n              <h5 id=\"title3\" class=\"card-title\">Card title</h5>\r\n              <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n              <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n            </div>\r\n          </div>\r\n\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        \r\n        <div class=\"card\" style=\"margin: 20%;\">\r\n            <img src=\"...\" class=\"card-img-top\" alt=\"...\">\r\n            <div class=\"card-body\">\r\n              <h5 id=\"title4\" class=\"card-title\">Card title</h5>\r\n              <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n              <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n            </div>\r\n          </div>\r\n\r\n      </div>\r\n    </div>\r\n    <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#carouselExampleControls\" data-bs-slide=\"prev\">\r\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"visually-hidden\">Previous</span>\r\n    </button>\r\n    <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#carouselExampleControls\" data-bs-slide=\"next\">\r\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"visually-hidden\">Next</span>\r\n    </button>\r\n  </div>\r\n\r\n\r\n<h1>Chi siamo?</h1>\r\n<h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea adipisci architecto libero alias? Numquam atque beatae quis asperiores necessitatibus est quod voluptate eveniet excepturi molestias fugiat nostrum nihil, eligendi vero.</h2>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<button id=\"signUpLogin\" type=\"button\" class=\"btn btn-primary\">Accedi</button>\r\n<button type=\"button\" class=\"btn btn-success\" data-bs-dismiss=\"modal\">Registrati</button>\r\n<button type=\"button\" class=\"btn btn-danger\" data-bs-dismiss=\"modal\">Chiudi</button>");

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
        li.onclick = _profiloUtente_showProfile__WEBPACK_IMPORTED_MODULE_0__["default"];
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
        li.innerHTML = users[i].username + " | " + users[i].name + " " + users[i].surname + " | " + users[i].email + " | " + users[i].rating + "<i class='fa-regular fa-star'></i>";
        li.appendChild(span);
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
        body: JSON.stringify({ id: id })
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
        body: JSON.stringify({ id: id })
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
    //fetch("/account");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWUsZ0NBQWdDLCt4Q0FBK3hDLHFuQ0FBcW5DOzs7Ozs7Ozs7Ozs7OztBQ0FuOEUsaUVBQWUsaXpDQUFpekMseWhEQUF5aEQscTVCQUFxNUIsKzVCQUErNUIsZ1FBQWdROzs7Ozs7Ozs7Ozs7OztBQ0E3NEosaUVBQWUsMkJBQTJCLDZDQUE2QyxvQkFBb0IsMkJBQTJCLE9BQU8sY0FBYyx3QkFBd0IsNEJBQTRCLDJCQUEyQixPQUFPLG9CQUFvQiwwQkFBMEIsa0JBQWtCLG1CQUFtQixPQUFPLHNCQUFzQix5QkFBeUIsT0FBTyxtRkFBbUYsc0JBQXNCLCtCQUErQixPQUFPLHlCQUF5QixnQkFBZ0IsT0FBTyw4dEJBQTh0QixvQkFBb0IseUNBQXlDLHFEQUFxRCx5QkFBeUIsMEJBQTBCLHdCQUF3Qiw2Q0FBNkMsS0FBSyxrQkFBa0IsaUJBQWlCLGtDQUFrQyxvQkFBb0IseUJBQXlCLHdCQUF3Qix3QkFBd0IsS0FBSywyQkFBMkIseUJBQXlCLGFBQWEsY0FBYyxlQUFlLG1CQUFtQiwyQ0FBMkMsNkJBQTZCLEtBQUssbUNBQW1DLHlCQUF5QixpQ0FBaUMsMkNBQTJDLDBCQUEwQixzSkFBc0osc0pBQXNKLHVDQUF1QyxLQUFLLDJCQUEyQixpQkFBaUIsb0JBQW9CLHNDQUFzQyxxQkFBcUIsb0JBQW9CLDJDQUEyQyxLQUFLLHNEQUFzRCxxQkFBcUIsNEJBQTRCLEtBQUssNkJBQTZCLG1CQUFtQixLQUFLLDZCQUE2QixnQkFBZ0IseUJBQXlCLEtBQUssaUNBQWlDLG9CQUFvQiw2QkFBNkIsOEJBQThCLEtBQUssdUNBQXVDLHdCQUF3QixLQUFLLDJDQUEyQywyQkFBMkIsS0FBSyx3Q0FBd0MseUJBQXlCLGtCQUFrQixtQkFBbUIsd0JBQXdCLDZCQUE2QixrQ0FBa0MsS0FBSyx3Q0FBd0MsZUFBZSxpQ0FBaUMsa0NBQWtDLE9BQU8sWUFBWSxvQkFBb0IscUJBQXFCLE9BQU8sS0FBSyxnQ0FBZ0MsZUFBZSxpQ0FBaUMsa0NBQWtDLE9BQU8sWUFBWSxvQkFBb0IscUJBQXFCLE9BQU8sS0FBSyxvQ0FBb0MsVUFBVSxzQkFBc0IsT0FBTyxZQUFZLHVDQUF1QyxPQUFPLEtBQUssNEJBQTRCLFVBQVUsc0JBQXNCLE9BQU8sWUFBWSx1Q0FBdUMsT0FBTyxLQUFLLHlLQUF5SyxrQ0FBa0MsK0JBQStCLDRCQUE0Qiw0QkFBNEIsNEVBQTRFLGlDQUFpQywrQkFBK0IsNEJBQTRCLDRCQUE0Qiw0RUFBNEUsaUNBQWlDLGlDQUFpQyw0QkFBNEIsNEJBQTRCLDRFQUE0RSxnQ0FBZ0MsZ0NBQWdDLDJCQUEyQiw2QkFBNkIsNEVBQTRFLGlDQUFpQywrQkFBK0IsNEJBQTRCLDZCQUE2Qiw0RUFBNEUsaUNBQWlDLGdDQUFnQywyQkFBMkIsNkJBQTZCLDZFQUE2RSxpQ0FBaUMsK0JBQStCLDRCQUE0Qiw0QkFBNEIsNEVBQTRFLGlDQUFpQywrQkFBK0IsNEJBQTRCLDRCQUE0Qiw0RUFBNEUsaUNBQWlDLGdDQUFnQywwQkFBMEIsNEJBQTRCLDZFQUE2RSxpQ0FBaUMsZ0NBQWdDLDRCQUE0Qiw2QkFBNkIsNEVBQTRFLGdDQUFnQyxnQ0FBZ0MseUJBQXlCLDRCQUE0Qiw2RUFBNkUsaUNBQWlDLCtCQUErQiw0QkFBNEIsNEJBQTRCLGd4QkFBZ3hCLG1FQUFtRSx3bUJBQXdtQjs7Ozs7Ozs7Ozs7Ozs7QUNBbnJQLGlFQUFlLGlUQUFpVDs7Ozs7Ozs7Ozs7Ozs7QUNBaFUsaUVBQWUsOEdBQThHLDhWQUE4VixrakJBQWtqQixrakJBQWtqQixrakJBQWtqQixnekNBQWd6Qzs7Ozs7Ozs7Ozs7Ozs7QUNBajZHLGlFQUFlLHFrQkFBcWtCOzs7Ozs7Ozs7Ozs7OztBQ0FwbEIsaUVBQWUsa1NBQWtTOzs7Ozs7Ozs7Ozs7OztBQ0FqVCxpRUFBZSwyTEFBMkw7Ozs7Ozs7Ozs7Ozs7O0FDQTFNLGlFQUFlLHl2QkFBeXZCOzs7Ozs7Ozs7Ozs7OztBQ0F4d0IsaUVBQWUsMnNDQUEyc0M7Ozs7Ozs7Ozs7Ozs7O0FDQTF0QyxpRUFBZSxtTUFBbU07Ozs7Ozs7Ozs7Ozs7O0FDQWxOLGlFQUFlLHVEQUF1RDs7Ozs7Ozs7Ozs7Ozs7QUNBdEUsaUVBQWUsd3pIQUF3ekg7Ozs7Ozs7Ozs7Ozs7O0FDQXYwSCxpRUFBZSx1UkFBdVI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNJOVA7QUFFeEMsSUFBSSxJQUFJLEdBQWdCLEVBQUUsQ0FBQztBQUMzQixJQUFJLElBQUksR0FBVyxDQUFDO0FBRWIsU0FBUyxVQUFVO0lBQ3RCLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztJQUMzRCxhQUFhLEVBQUUsQ0FBQztJQUVoQixnQkFBZ0IsRUFBRSxDQUFDO0lBQ25CLGdCQUFnQixFQUFFLENBQUM7SUFDbkIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRW5CLENBQUM7QUFHRCxTQUFTLFdBQVc7SUFDaEIsZ0JBQWdCLEVBQUUsQ0FBQztJQUNuQixnQkFBZ0IsRUFBRSxDQUFDO0lBQ25CLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuQixDQUFDO0FBR0QsU0FBUyxhQUFhO0lBQ2xCLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUTtJQUN2RCxLQUFLLElBQUksQ0FBQyxJQUFJLE1BQU0sRUFBRTtRQUNqQixDQUF1QixDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7WUFDcEMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixDQUFDO0tBQ0o7SUFDRCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVE7SUFDcEQsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7UUFDZixDQUF1QixDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7WUFDcEMsWUFBWSxDQUFDLE1BQU0sQ0FBRSxDQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEQsQ0FBQztLQUNKO0lBRUQsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQXFCLENBQUM7SUFDN0UsV0FBVyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQzFCLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxPQUFPLEVBQUU7WUFDbEIsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7U0FDbkM7SUFDTCxDQUFDO0lBQ0QsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMzRCxZQUFZLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtRQUN4QixhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztJQUNwQyxDQUFDO0FBQ0wsQ0FBQztBQUdELFNBQVMsYUFBYSxDQUFDLEtBQWE7SUFDaEMsSUFBSSxZQUFZLEdBQUcsRUFBRTtJQUNyQixLQUFLLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtRQUN0QixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzNCLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtRQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztlQUNqRCxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUMzRCxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUM3QjtLQUNKO0lBQ0QsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUNWLElBQUksR0FBRyxZQUFZO0lBQ25CLGdCQUFnQixFQUFFLENBQUM7SUFDbkIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25CLENBQUM7QUFHRCxTQUFTLGFBQWEsQ0FBQyxLQUFhO0lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkIsSUFBSSxZQUFZLEdBQUcsRUFBRTtJQUNyQixLQUFLLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtRQUN0QixJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxJQUFJLEtBQUssRUFBRTtZQUNsQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUM3QjtLQUNKO0lBQ0QsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUNWLElBQUksR0FBRyxZQUFZO0lBQ25CLGdCQUFnQixFQUFFLENBQUM7SUFDbkIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25CLENBQUM7QUFFRCxTQUFTLFlBQVksQ0FBQyxJQUFZO0lBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLEtBQUssSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO1FBQ3RCLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ2hDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQzdCO0tBQ0o7SUFDRCxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ1YsSUFBSSxHQUFHLFlBQVk7SUFDbkIsZ0JBQWdCLEVBQUUsQ0FBQztJQUNuQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkIsQ0FBQztBQUlELFNBQVMsZ0JBQWdCO0lBQ3JCLElBQUksR0FBRyxFQUFFLENBQUM7SUFFVixNQUFNLFdBQVcsR0FBRztRQUNoQixJQUFJLEVBQUUscUZBQXFGO0tBQzlGO0lBRUQsTUFBTSxXQUFXLEdBQUc7UUFDaEIsSUFBSSxFQUFFLHlGQUF5RjtLQUNsRztJQUVELE1BQU0sV0FBVyxHQUFHO1FBQ2hCLElBQUksRUFBRSx3RUFBd0U7S0FDakY7SUFFRCxNQUFNLFdBQVcsR0FBRztRQUNoQixJQUFJLEVBQUUscUVBQXFFO0tBQzlFO0lBRUQsTUFBTSxhQUFhLEdBQUc7UUFDbEIsSUFBSSxFQUFFLHFGQUFxRjtLQUM5RjtJQUVELE1BQU0sYUFBYSxHQUFHO1FBQ2xCLElBQUksRUFBRSx1REFBdUQ7S0FDaEU7SUFFRCxNQUFNLGFBQWEsR0FBRztRQUNsQixJQUFJLEVBQUUsNEtBQTRLO0tBQ3JMO0lBRUQsTUFBTSxNQUFNLEdBQUc7UUFDWCxFQUFFLEVBQUUsQ0FBQztRQUNMLElBQUksRUFBRSxZQUFZO1FBQ2xCLEtBQUssRUFBRSxVQUFVO1FBQ2pCLElBQUksRUFBRSxJQUFJO1FBQ1YsT0FBTyxFQUFFLEtBQUs7UUFDZCxLQUFLLEVBQUUsV0FBVztLQUNyQjtJQUVELE1BQU0sTUFBTSxHQUFHO1FBQ1gsRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUscUJBQXFCO1FBQzNCLEtBQUssRUFBRSxXQUFXO1FBQ2xCLElBQUksRUFBRSxJQUFJO1FBQ1YsT0FBTyxFQUFFLEtBQUs7UUFDZCxLQUFLLEVBQUUsV0FBVztLQUNyQjtJQUVELE1BQU0sTUFBTSxHQUFHO1FBQ1gsRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCLEtBQUssRUFBRSxLQUFLO1FBQ1osSUFBSSxFQUFFLElBQUk7UUFDVixPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLEtBQUssRUFBRSxXQUFXO0tBQ3JCO0lBRUQsTUFBTSxNQUFNLEdBQUc7UUFDWCxFQUFFLEVBQUUsQ0FBQztRQUNMLElBQUksRUFBRSxZQUFZO1FBQ2xCLEtBQUssRUFBRSxTQUFTO1FBQ2hCLElBQUksRUFBRSxJQUFJO1FBQ1YsT0FBTyxFQUFFLEtBQUs7UUFDZCxLQUFLLEVBQUUsV0FBVztLQUNyQjtJQUVELE1BQU0sZUFBZSxHQUFHO1FBQ3BCLE1BQU0sRUFBRSxDQUFDO1FBQ1QsUUFBUSxFQUFFLGNBQWM7UUFDeEIsSUFBSSxFQUFFLFNBQVM7UUFDZixPQUFPLEVBQUUsU0FBUztRQUNsQixLQUFLLEVBQUUsOEJBQThCO1FBQ3JDLE1BQU0sRUFBRSxHQUFHO1FBQ1gsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDO0tBQ3ZCO0lBRUQsTUFBTSxVQUFVLEdBQWM7UUFDMUIsUUFBUSxFQUFFLElBQUk7UUFDZCxLQUFLLEVBQUUsb0JBQW9CO1FBQzNCLFdBQVcsRUFBRSxtREFBbUQ7UUFDaEUsU0FBUyxFQUFFLGVBQWU7UUFDMUIsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxhQUFhLENBQUM7UUFDdEQsU0FBUyxFQUFFLE1BQU07UUFDakIsUUFBUSxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDbEMsT0FBTyxFQUFFLEtBQUs7UUFDZCxlQUFlLEVBQUUsWUFBWTtLQUNoQztJQUdELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDekIsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDeEI7YUFBTTtZQUNILElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3hCO0tBQ0o7SUFFRCx5REFBeUQ7SUFFekQsaUVBQWlFO0lBQ2pFLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsdUNBQXVDO0lBQ3ZDLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLFFBQVE7SUFDUixNQUFNO0FBQ1YsQ0FBQztBQUVEOztxQ0FFcUM7QUFFckMsU0FBUyxnQkFBZ0I7SUFDckIsSUFBSSxJQUFJLEdBQVcsSUFBSSxDQUFDLE1BQU07SUFDOUIsSUFBSSxJQUFJLEdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDMUMsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QyxLQUFLLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUNyQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzVCLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1IsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUM3QyxFQUFFLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ0gsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDekM7UUFDRCxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFO1lBQ2YsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDdEQsS0FBSyxJQUFJLEtBQUssSUFBSSxLQUFLLEVBQUU7Z0JBQ3JCLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO2dCQUN6QyxLQUFLLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQ3pDO1lBQ0QsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUM3QyxFQUFFLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN4QyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDO1FBQ0YsR0FBRyxDQUFDLFNBQVMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ3BEO0FBQ0wsQ0FBQztBQUVELFNBQVMsV0FBVyxDQUFDLENBQVM7SUFDMUIsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzFELE9BQU8sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUMzQixJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUIsS0FBSyxLQUFLLEVBQUUsS0FBSyxJQUFJLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUNoQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3RCLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQ3ZCLFNBQVM7U0FDWjtRQUNELElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1FBQ3JDLEVBQUUsQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFO1lBQ2QscURBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUNELEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDNUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsaURBQWlELENBQUMsQ0FBQztRQUNsRixFQUFFLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSwwQ0FBMEMsQ0FBQyxDQUFDO1FBQzFFLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQyxJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUMsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QyxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztRQUM3QyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNsQixLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDcEMsV0FBVyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDO1FBQ2hELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDNUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztRQUM5QyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztRQUNqRCxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxTQUFTLEdBQUcsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDN0UsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QixFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLEVBQUUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDNUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQixFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4QixFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7S0FFdEI7QUFDTCxDQUFDO0FBRUQsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hTYTtBQUNIO0FBQ0M7QUFFN0IsU0FBUyxlQUFlLENBQUMsU0FBb0I7SUFFaEQsc0VBQXNFO0lBQ3RFLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxzREFBUSxDQUFDO0lBRTFCLCtEQUErRDtJQUMvRCxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDaEQsTUFBTSxDQUFDLFNBQVMsR0FBRyxVQUFVO0lBQzdCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFO1FBQ2xCLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxHQUFHLHFEQUFPLENBQUM7UUFDcEQsb0RBQVUsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFDRCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztJQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXBCLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsS0FBSyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO0lBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFJbkIsK0NBQStDO0lBQy9DLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDO0lBQ3BELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMvQyxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDbkQsR0FBRyxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1IsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDcEMsR0FBRyxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDNUM7UUFDRCxHQUFHLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3pCO0lBQ0QsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7SUFFNUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQy9DLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1IsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsc0JBQXNCLENBQUM7U0FDcEQ7YUFBTTtZQUNILEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQztTQUM3QztRQUNELElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsR0FBRyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNwQyxHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNoQixHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztRQUMzQyxHQUFHLENBQUMsR0FBRyxHQUFHLGVBQWUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQixLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztLQUNwQjtJQUNELElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsR0FBRyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDekMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUseUJBQXlCLENBQUM7SUFDcEQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEQsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztJQUN2QyxFQUFFLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO0lBQ3hDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsbUJBQW1CLENBQUM7SUFDNUMsQ0FBQyxDQUFDLFNBQVM7UUFDUCxVQUFVLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsTUFBTTtjQUM3QyxRQUFRLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsTUFBTTtjQUM1QyxXQUFXLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7SUFDaEQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25ELElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFjO0lBQy9CLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDO0lBQzFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7SUFDdEYsUUFBUSxDQUFDLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN4QixRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN0RixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQzNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQztRQUN6QyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsR0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLFNBQVM7WUFDUCxVQUFVLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsTUFBTTtrQkFDL0MsUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLE1BQU07a0JBQzlDLFdBQVcsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUNsRCxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksR0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN6RDtBQUNMLENBQUM7QUFFRCxpRUFBZSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hHRTtBQUV6QixTQUFTLFNBQVM7SUFDckIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEdBQUcsb0RBQUcsQ0FBQztBQUN0RCxDQUFDO0FBRUQsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0prQztBQUUzRCxJQUFJLEtBQUssR0FBYyxFQUFFLENBQUM7QUFDMUIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBRWIsU0FBUyxTQUFTLENBQUMsR0FBVztJQUMxQixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBRXBCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2hELElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDbkIsT0FBTztTQUNWO1FBQ0QsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxFQUFFLENBQUMsT0FBTyxHQUFHLGtFQUFlLENBQUM7UUFDN0IsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUM1QyxFQUFFLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxpREFBaUQsQ0FBQyxDQUFDO1FBQ2xGLEVBQUUsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLDBDQUEwQyxDQUFDLENBQUM7UUFDMUUsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztRQUN4QyxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9DLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0MsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztRQUN2RCxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3hELE9BQU8sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFLEdBQUcsdUJBQXVCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFDLENBQUM7UUFDcEUsT0FBTyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUUsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM5QixFQUFFLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsb0NBQW9DLENBQUM7UUFDNUssRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ3hCO0FBRUwsQ0FBQztBQUVNLFNBQVMsV0FBVztJQUN2QixLQUFLLENBQUMsT0FBTyxDQUFDO1NBQ1QsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDbkMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDWCxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsS0FBSyxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7WUFDdEIsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN2QjtRQUNELGdCQUFnQixFQUFFLENBQUM7UUFDbkIsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLENBQUMsQ0FBQyxDQUFDO0FBQ1gsQ0FBQztBQUVEOzs7Ozs7RUFNRTtBQUVGLFNBQVMsZ0JBQWdCO0lBQ3JCLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUNyRCxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDbkQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNwQyxJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNSLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLENBQUM7WUFDN0MsRUFBRSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDM0M7YUFBTTtZQUNILEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztRQUN2QyxHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtZQUNmLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQzNELEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxFQUFFO2dCQUNyQixLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztnQkFDekMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUN6QztZQUNELEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLENBQUM7WUFDN0MsRUFBRSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDeEMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUM7UUFDRixHQUFHLENBQUMsU0FBUyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ3pEO0FBR0wsQ0FBQztBQUVELFNBQVMsWUFBWSxDQUFDLEVBQVU7SUFDNUIsTUFBTSxPQUFPLEdBQUc7UUFDWixNQUFNLEVBQUUsTUFBTTtRQUNkLE9BQU8sRUFBRTtZQUNMLGNBQWMsRUFBRSxrQkFBa0I7U0FDckM7UUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7S0FDM0I7SUFDRCxLQUFLLENBQUMsUUFBUSxFQUFFO1FBQ1osTUFBTSxFQUFFLE1BQU07UUFDZCxPQUFPLEVBQUU7WUFDTCxjQUFjLEVBQUUsa0JBQWtCO1NBQ3JDO1FBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFDLENBQUM7S0FDakMsQ0FBQztTQUNHLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ25DLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEYsQ0FBQztBQUVELFNBQVMsdUJBQXVCLENBQUMsRUFBVTtJQUN2QyxNQUFNLE9BQU8sR0FBRztRQUNaLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLE9BQU8sRUFBRTtZQUNMLGNBQWMsRUFBRSxrQkFBa0I7U0FDckM7UUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUMsQ0FBQztLQUNqQztJQUNELEtBQUssQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO1NBQ2xCLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ25DLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFckYsQ0FBQztBQUVELGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSEc7QUFFdkIsU0FBUyxVQUFVO0lBQ3RCLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0MsSUFBSSxDQUFDLFNBQVMsSUFBSSxrREFBSSxDQUFDO0lBQ3ZCLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxJQUFJLENBQUMsU0FBUyxJQUFJLDJDQUEyQyxDQUFDO0FBQ2xFLENBQUM7QUFFRCxpRUFBZSxVQUFVLEVBQUM7QUFFMUI7Ozs7Ozs7RUFPRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCOEI7QUFDTztBQUNZO0FBQ1k7QUFDRTtBQUN2QjtBQUtuQyxTQUFTLFdBQVc7SUFDdkIsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QyxRQUFRLENBQUMsU0FBUyxHQUFHLG1EQUFLLENBQUM7SUFDM0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0QsY0FBYyxFQUFFLENBQUM7SUFDakIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO0lBQzFELFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQztBQUN2RSxDQUFDO0FBRUQsU0FBUyxlQUFlO0lBQ3BCLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxHQUFHLHlFQUFhLENBQUM7SUFDakUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxTQUFTLEdBQUcsK0VBQVMsQ0FBQztJQUMvRCxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7QUFDcEUsQ0FBQztBQUVELFNBQVMsY0FBYztJQUNuQixRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsR0FBRyx5REFBSyxDQUFDO0lBQ3pELFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUyxHQUFHLCtEQUFXLENBQUM7SUFDakUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDO0FBQ3JFLENBQUM7QUFFRCxTQUFTLGVBQWU7SUFDcEIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLEdBQUcsMkRBQU0sQ0FBQztJQUMxRCxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDeEQsb0JBQW9CO0FBQ3hCLENBQUM7QUFFRCxTQUFTLFdBQVc7SUFDaEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUU7UUFDdEIsT0FBTztLQUNWO0lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3RDLE1BQU0sSUFBSSxHQUFHO1FBQ1QsUUFBUSxFQUFFLEVBQUU7UUFDWixRQUFRLEVBQUUsRUFBRTtRQUNaLElBQUksRUFBRSxFQUFFO1FBQ1IsT0FBTyxFQUFFLEVBQUU7UUFDWCxLQUFLLEVBQUUsRUFBRTtLQUNaO0lBRUQsb0JBQW9CO0FBQ3hCLENBQUM7QUFFRCxTQUFTLFVBQVU7SUFDZixNQUFNO0FBQ1YsQ0FBQztBQUVELFNBQVMsV0FBVztJQUNoQixNQUFNO0FBQ1YsQ0FBQztBQUVELFNBQVMsZ0JBQWdCO0lBQ3JCLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQXFCLENBQUM7SUFDN0UsSUFBSSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLHdCQUF3QixDQUFxQixDQUFDO0lBQzdGLElBQUksUUFBUSxDQUFDLEtBQUssSUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUU7UUFDMUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsdUJBQXVCLENBQUMsQ0FBQztLQUMvRDtTQUFNO1FBQ0gsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDMUM7QUFDTCxDQUFDO0FBRUQsU0FBUyxpQkFBaUI7SUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2pDLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQXFCLENBQUM7SUFDN0UsSUFBSSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLHdCQUF3QixDQUFxQixDQUFDO0lBQzdGLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDM0MsSUFBSSxRQUFRLENBQUMsS0FBSyxJQUFJLGdCQUFnQixDQUFDLEtBQUssRUFBRTtRQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVCLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUM3RCxPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFHRCxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRks7QUFDUztBQUNLO0FBQ0Y7QUFDUDtBQUNlO0FBQ2U7QUFDUjtBQUdwRCxTQUFTLFNBQVM7SUFDckIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEdBQUcsb0RBQUcsQ0FBQztJQUNsRCx3REFBVyxFQUFFLENBQUM7SUFDZCxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7UUFDM0MsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEdBQUcsdURBQUksQ0FBQztJQUNyRCxDQUFDLENBQUM7SUFDRixRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7UUFDakQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEdBQUcsNkRBQU8sQ0FBQztRQUNwRCw0REFBVSxFQUFFLENBQUM7SUFDakIsQ0FBQyxDQUFDO0lBQ0YsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFO1FBQ2pELFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxHQUFHLDJFQUFjLENBQUM7UUFDM0QsMEVBQVcsRUFBRSxDQUFDO0lBQ2xCLENBQUMsQ0FBQztJQUNGLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtRQUM5QyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsR0FBRyxtRUFBTyxDQUFDO0lBQ3hELENBQUMsQ0FBQztBQUNOLENBQUM7QUFFTSxTQUFTLE1BQU07SUFDbEIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEdBQUcsb0RBQUcsQ0FBQztBQUN0RCxDQUFDO0FBSUQsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25Db0I7QUFFdEMsU0FBUyxlQUFlO0lBQzNCLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxHQUFHLHlEQUFXLENBQUM7QUFDNUQsQ0FBQztBQUVELGlFQUFlLGVBQWU7Ozs7Ozs7VUNOOUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnFDO0FBQ0U7QUFDQTtBQUd2QywwREFBUyxFQUFFLENBQUM7QUFDWixzREFBVSxFQUFFLENBQUM7QUFDYiwwREFBUyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9hbm51bmNpL2FubnVuY2kuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9hbm51bmNpL2FubnVuY2lvLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvZm9vdGVyL2Zvb3Rlci5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2dlc3Rpb25lVXRlbnRpL2dlc3Rpb25lVXRlbnRpLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvaG9tZS9ob21lLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvbG9naW4vbG9naW4uaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9sb2dpbi9sb2dpbkZvb3Rlci5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2xvZ291dC9sb2dvdXQuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9tb2RhbC9tb2RhbC5odG1sIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL25hdmJhci9uYXZiYXIuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9wcm9maWxvVXRlbnRlL3Byb2ZpbGUuaHRtbCIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9wcm9maWxvVXRlbnRlL3Nob3dQcm9maWxlLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvcmVnaXN0cmF6aW9uZS9yZWdpc3RyYXppb25lLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvcmVnaXN0cmF6aW9uZS9yZWdpc3RyYXppb25lRm9vdGVyLmh0bWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvYW5udW5jaS9hbm51bmNpLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzLy4vc3JjL2FubnVuY2kvYW5udW5jaW8udHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvZm9vdGVyL2Zvb3Rlci50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9nZXN0aW9uZVV0ZW50aS9nZXN0aW9uZVV0ZW50aS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9ob21lL2hvbWUudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvbW9kYWwvbW9kYWwudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvbmF2YmFyL25hdmJhci50cyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy8uL3NyYy9wcm9maWxvVXRlbnRlL3Nob3dQcm9maWxlLnRzIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mcm9udGVuZG5vZGVqcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Zyb250ZW5kbm9kZWpzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZnJvbnRlbmRub2RlanMvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJcXHJcXG48ZGl2IHN0eWxlPVxcXCJkaXNwbGF5OiBmbGV4O1xcXCI+XFxyXFxuXFxyXFxuICAgIDxzcGFuIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IDQwcHhcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBpZD1cXFwic2VsZWN0QWxsXFxcIj5WaXN1YWxpenphIHR1dHRpPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9zcGFuPiA8IS0tZnVuemlvbmUgY2hlIHByZW5kZSB0dXR0aSBnbGkgYW5udW5jaSBlIGxpIHNjaGlhZmZhIG5lbCBjb250ZW51dG8gYW5udW5jaS0tPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiA0MHB4XFxcIiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnkgZHJvcGRvd24tdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgVmlzdWFsaXp6YSBwZXIgR2VuZXJlXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx1bCBpZD1cXFwiZ2VucmVzXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVxcXCJQTEFURk9STVxcXCI+PGJ1dHRvbiBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj5QTEFURk9STTwvYnV0dG9uPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9XFxcIm1hcmdpbi1yaWdodDogNDBweFxcXCIgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnkgZHJvcGRvd24tdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBWaXN1YWxpenphIHBlciBBbm5vXFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8dWwgaWQ9XFxcInllYXJzXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSBpZD1cXFwiMTk4NVxcXCI+PGJ1dHRvbiBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj4xOTg1PC9idXR0b24+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgIDxkaXYgc3R5bGU9XFxcInZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxcIiBjbGFzcz1cXFwiY29sLW1kLTMgbXgtYXV0b1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgYm9yZGVyLWVuZC0xIGJvcmRlciByb3VuZGVkLXBpbGxcXFwiIHR5cGU9XFxcInNlYXJjaFxcXCIgcGxhY2Vob2xkZXI9XFxcImNlcmNhXFxcIiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OjIwcHhcXFwiIGlkPVxcXCJzZWFyY2hUaXRsZVxcXCI+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWFwcGVuZFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cXFwic2VhcmNoQnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBiZy13aGl0ZSBib3JkZXItYm90dG9tLTEgYm9yZGVyIHJvdW5kZWQtcGlsbCBtcy1uNVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIHRyb3ZhXFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXNlYXJjaFxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICA8c3BhbiA+XFxyXFxuICAgICAgICA8YnV0dG9uICBpZD1cXFwiYWRkSW5zZXJ0aW9uXFxcIiBzdHlsZT1cXFwiY29sb3I6d2hpdGVcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCI+XFxyXFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4vaW1nL3BsdXMucG5nXFxcIiBhbHQ9XFxcInBsdXNcXFwiIHN0eWxlPVxcXCJ3aWR0aDoyNXB4XFxcIj5cXHJcXG4gICAgICAgICAgICBJbnNlcmlzY2kgQW5udW5jaW9cXHJcXG4gICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgIDwvc3Bhbj4gICAgICBcXHJcXG4gICAgICAgICAgICAgXFxyXFxuXFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBpZD1cXFwicmVtYWluc1xcXCI+XFxyXFxuICAgIDx1bCBpZD1cXFwiaW5zZXJ0aW9uQ29udGVudFxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXBcXFwiID5cXHJcXG4gICAgICAgIFxcclxcbiAgICA8L3VsPlxcclxcbiAgICBcXHJcXG48L2Rpdj5cXHJcXG48ZGl2PlxcclxcbiAgICA8dWwgaWQ9XFxcInBhZ2VzXFxcIiBjbGFzcz1cXFwicGFnaW5hdGlvbiBwYWdpbmF0aW9uLXNtIG15LTJcXFwiPlxcclxcbiAgICAgICAgXFxyXFxuICAgIDwvdWw+XFxyXFxuXFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGlkPVxcXCJiYWNrXFxcIj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3Jkb2Nhcm9zZWxsb1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwiaW1hZ2VTbGlkZXJcXFwiIGNsYXNzPVxcXCJjYXJvdXNlbCBzbGlkZVxcXCIgZGF0YS1icy1yaWRlPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiaW5kaWNhdG9yXFxcIiBjbGFzcz1cXFwiY2Fyb3VzZWwtaW5kaWNhdG9yc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJpbm5lclxcXCIgY2xhc3M9XFxcImNhcm91c2VsLWlubmVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhcm91c2VsLWNvbnRyb2wtcHJldlxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRhcmdldD1cXFwiI2ltYWdlU2xpZGVyXFxcIiBkYXRhLWJzLXNsaWRlPVxcXCJwcmV2XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvblxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPlByZWNlZGVudGU8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYXJvdXNlbC1jb250cm9sLW5leHRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10YXJnZXQ9XFxcIiNpbWFnZVNsaWRlclxcXCIgZGF0YS1icy1zbGlkZT1cXFwibmV4dFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb25cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidmlzdWFsbHktaGlkZGVuXFxcIj5TdWNjZXNzaXZhPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTZcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJnaXZlZEdhbWVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZCBtYi0zXFxcIiBzdHlsZT1cXFwibWF4LXdpZHRoOiA1NDBweDtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBnLTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJjYXJkLWltYWdlXFxcIiBjbGFzcz1cXFwiY29sLW1kLTRcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLThcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiY2FyZC1ib2R5XFxcIiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGlkPVxcXCJpbnNlcnRpb24tZGVzY3JpcHRpb25cXFwiIGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcIm15LTUgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICA8aDM+PHNwYW4gaWQ9XFxcImluc2VydGlvbi1jcmVhdG9yXFxcIj48L3NwYW4+IHZvcnJlYmJlIHVubyBkaSBxdWVzdGkgZ2lvY2hpIGluIGNhbWJpbzo8L2gzPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImFjY29yZGlvbiByb3dcXFwiIGlkPVxcXCJhY2NvcmRpb25FeGFtcGxlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYWNjb3JkaW9uLWl0ZW0gY29sLW1kLTRcXFwiPlxcclxcbiAgICAgICAgPGgyIGNsYXNzPVxcXCJhY2NvcmRpb24taGVhZGVyXFxcIiBpZD1cXFwiaGVhZGluZ09uZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cXFwiYnRuLWl0ZW0tMVxcXCIgY2xhc3M9XFxcImFjY29yZGlvbi1idXR0b24gY29sbGFwc2VkXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJjb2xsYXBzZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgZGF0YS1icy10YXJnZXQ9XFxcIiNjb2xsYXBzZU9uZVxcXCIgYXJpYS1leHBhbmRlZD1cXFwidHJ1ZVxcXCIgYXJpYS1jb250cm9scz1cXFwiY29sbGFwc2VPbmVcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9oMj5cXHJcXG4gICAgICAgIDxkaXYgaWQ9XFxcImNvbGxhcHNlT25lXFxcIiBjbGFzcz1cXFwiYWNjb3JkaW9uLWNvbGxhcHNlIGNvbGxhcHNlXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcImhlYWRpbmdPbmVcXFwiXFxyXFxuICAgICAgICAgICAgZGF0YS1icy1wYXJlbnQ9XFxcIiNhY2NvcmRpb25FeGFtcGxlXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhY2NvcmRpb24tYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImltZy1pdGVtLTFcXFwiIGNsYXNzPVxcXCJjYXJkIG14LWF1dG9cXFwiIHN0eWxlPVxcXCJ3aWR0aDogMThyZW07XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiYm9keS1pdGVtLTFcXFwiIGNsYXNzPVxcXCJjYXJkLWJvZHkgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhY2NvcmRpb24taXRlbSBjb2wtbWQtNFxcXCI+XFxyXFxuICAgICAgICA8aDIgY2xhc3M9XFxcImFjY29yZGlvbi1oZWFkZXJcXFwiIGlkPVxcXCJoZWFkaW5nVHdvXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJidG4taXRlbS0yXFxcIiBjbGFzcz1cXFwiYWNjb3JkaW9uLWJ1dHRvbiBjb2xsYXBzZWRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10b2dnbGU9XFxcImNvbGxhcHNlXFxcIlxcclxcbiAgICAgICAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cXFwiI2NvbGxhcHNlVHdvXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCIgYXJpYS1jb250cm9scz1cXFwiY29sbGFwc2VUd29cXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9oMj5cXHJcXG4gICAgICAgIDxkaXYgaWQ9XFxcImNvbGxhcHNlVHdvXFxcIiBjbGFzcz1cXFwiYWNjb3JkaW9uLWNvbGxhcHNlIGNvbGxhcHNlXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcImhlYWRpbmdUd29cXFwiXFxyXFxuICAgICAgICAgICAgZGF0YS1icy1wYXJlbnQ9XFxcIiNhY2NvcmRpb25FeGFtcGxlXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhY2NvcmRpb24tYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImltZy1pdGVtLTJcXFwiIGNsYXNzPVxcXCJjYXJkIG14LWF1dG9cXFwiIHN0eWxlPVxcXCJ3aWR0aDogMThyZW07XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiYm9keS1pdGVtLTJcXFwiIGNsYXNzPVxcXCJjYXJkLWJvZHkgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhY2NvcmRpb24taXRlbSBjb2wtbWQtNFxcXCI+XFxyXFxuICAgICAgICA8aDIgY2xhc3M9XFxcImFjY29yZGlvbi1oZWFkZXJcXFwiIGlkPVxcXCJoZWFkaW5nVGhyZWVcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcImJ0bi1pdGVtLTNcXFwiIGNsYXNzPVxcXCJhY2NvcmRpb24tYnV0dG9uIGNvbGxhcHNlZFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJzLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiXFxyXFxuICAgICAgICAgICAgICAgIGRhdGEtYnMtdGFyZ2V0PVxcXCIjY29sbGFwc2VUaHJlZVxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiIGFyaWEtY29udHJvbHM9XFxcImNvbGxhcHNlVGhyZWVcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9oMj5cXHJcXG4gICAgICAgIDxkaXYgaWQ9XFxcImNvbGxhcHNlVGhyZWVcXFwiIGNsYXNzPVxcXCJhY2NvcmRpb24tY29sbGFwc2UgY29sbGFwc2VcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwiaGVhZGluZ1RocmVlXFxcIlxcclxcbiAgICAgICAgICAgIGRhdGEtYnMtcGFyZW50PVxcXCIjYWNjb3JkaW9uRXhhbXBsZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWNjb3JkaW9uLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJpbWctaXRlbS0zXFxcIiBjbGFzcz1cXFwiY2FyZCBteC1hdXRvXFxcIiBzdHlsZT1cXFwid2lkdGg6IDE4cmVtO1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImJvZHktaXRlbS0zXFxcIiBjbGFzcz1cXFwiY2FyZC1ib2R5IHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxzdHlsZT5cXHJcXG4gIC5jYXJkZm9vdGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgbGkge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gIGJvZHkge1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgZm9vdGVyIHtcXHJcXG4gICAgbWluLWhlaWdodDogNTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8qIFRoZSBhcnRpY2xlIGZpbGxzIGFsbCB0aGUgc3BhY2UgYmV0d2VlbiBoZWFkZXIgJiBmb290ZXIgKi9cXHJcXG4gIGJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgZGl2LmNvbnRhaW5lciB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICB9XFxyXFxuPC9zdHlsZT5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjYXJkZm9vdGVyXFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5cXHJcXG4gICAgPGgzIGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5WaWRlb0dhbWUgTG92ZXI8L2gzPlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcclxcbiAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj5UZXN0byBBZ2dpdW50aXZvIFNlIFZvbGV0ZTwvcD5cXHJcXG4gICAgPHVsPlxcclxcbiAgICAgIDxsaT4gPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+SG9tZTwvYT4gPC9saT5cXHJcXG4gICAgICA8bGk+IDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPlBhb2xvPC9hPiA8L2xpPlxcclxcbiAgICAgIDxsaT4gPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+UGllcm88L2E+IDwvbGk+XFxyXFxuICAgICAgPGxpPiA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5BYm91dCBVczwvYT4gPC9saT5cXHJcXG4gICAgPC91bD5cXHJcXG4gIDwvZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiY2FyZC1mb290ZXIgdGV4dC1tdXRlZFxcXCI+XFxyXFxuICAgIDxwPiDCqTIwMjMgUGFvbG8gRW50ZXJwcmlzZSBJbmMuIHwgVHV0dGkgaSBkaXJpdHRpIHJpc2VydmF0aSAoYSBQaWVyaW5vKSA8L3A+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48IS0tXFxyXFxuPHN0eWxlPlxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwcmVtIGF1dG87XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwibWFpblxcXCIgXFxcIi5cXFwiIFxcXCJmb290ZXJcXFwiO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZDogI0Y1RjdGQTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIge1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIC0tZm9vdGVyLWJhY2tncm91bmQ6I0VENTU2NTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBncmlkLWFyZWE6IGZvb3RlcjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEycmVtO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIgLmJ1YmJsZXMge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgaGVpZ2h0OiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tZm9vdGVyLWJhY2tncm91bmQpO1xcclxcbiAgZmlsdGVyOiB1cmwoXFxcIiNibG9iXFxcIik7XFxyXFxufVxcclxcbmJvZHkgLmZvb3RlciAuYnViYmxlcyAuYnViYmxlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IHZhcigtLXBvc2l0aW9uLCA1MCUpO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tZm9vdGVyLWJhY2tncm91bmQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBidWJibGUtc2l6ZSB2YXIoLS10aW1lLCA0cykgZWFzZS1pbiBpbmZpbml0ZSB2YXIoLS1kZWxheSwgMHMpLCBidWJibGUtbW92ZSB2YXIoLS10aW1lLCA0cykgZWFzZS1pbiBpbmZpbml0ZSB2YXIoLS1kZWxheSwgMHMpO1xcclxcbiAgICAgICAgICBhbmltYXRpb246IGJ1YmJsZS1zaXplIHZhcigtLXRpbWUsIDRzKSBlYXNlLWluIGluZmluaXRlIHZhcigtLWRlbGF5LCAwcyksIGJ1YmJsZS1tb3ZlIHZhcigtLXRpbWUsIDRzKSBlYXNlLWluIGluZmluaXRlIHZhcigtLWRlbGF5LCAwcyk7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAxMDAlKTtcXHJcXG59XFxyXFxuYm9keSAuZm9vdGVyIC5jb250ZW50IHtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXHJcXG4gIGdyaWQtZ2FwOiA0cmVtO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWZvb3Rlci1iYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuYm9keSAuZm9vdGVyIC5jb250ZW50IGEsIGJvZHkgLmZvb3RlciAuY29udGVudCBwIHtcXHJcXG4gIGNvbG9yOiAjRjVGN0ZBO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5ib2R5IC5mb290ZXIgLmNvbnRlbnQgYiB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbmJvZHkgLmZvb3RlciAuY29udGVudCBwIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXHJcXG59XFxyXFxuYm9keSAuZm9vdGVyIC5jb250ZW50ID4gZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbmJvZHkgLmZvb3RlciAuY29udGVudCA+IGRpdiA+IGRpdiB7XFxyXFxuICBtYXJnaW46IDAuMjVyZW0gMDtcXHJcXG59XFxyXFxuYm9keSAuZm9vdGVyIC5jb250ZW50ID4gZGl2ID4gZGl2ID4gKiB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXHJcXG59XFxyXFxuYm9keSAuZm9vdGVyIC5jb250ZW50ID4gZGl2IC5pbWFnZSB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogNHJlbTtcXHJcXG4gIGhlaWdodDogNHJlbTtcXHJcXG4gIG1hcmdpbjogMC4yNXJlbSAwO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIGJ1YmJsZS1zaXplIHtcXHJcXG4gIDAlLCA3NSUge1xcclxcbiAgICB3aWR0aDogdmFyKC0tc2l6ZSwgNHJlbSk7XFxyXFxuICAgIGhlaWdodDogdmFyKC0tc2l6ZSwgNHJlbSk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgd2lkdGg6IDByZW07XFxyXFxuICAgIGhlaWdodDogMHJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBidWJibGUtc2l6ZSB7XFxyXFxuICAwJSwgNzUlIHtcXHJcXG4gICAgd2lkdGg6IHZhcigtLXNpemUsIDRyZW0pO1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLXNpemUsIDRyZW0pO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHdpZHRoOiAwcmVtO1xcclxcbiAgICBoZWlnaHQ6IDByZW07XFxyXFxuICB9XFxyXFxufVxcclxcbkAtd2Via2l0LWtleWZyYW1lcyBidWJibGUtbW92ZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGJvdHRvbTogLTRyZW07XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgYm90dG9tOiB2YXIoLS1kaXN0YW5jZSwgMTByZW0pO1xcclxcbiAgfVxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGJ1YmJsZS1tb3ZlIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgYm90dG9tOiAtNHJlbTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICBib3R0b206IHZhcigtLWRpc3RhbmNlLCAxMHJlbSk7XFxyXFxuICB9XFxyXFxufVxcclxcbjwvc3R5bGU+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwibWFpblxcXCI+PC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwiZm9vdGVyXFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImJ1YmJsZXNcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6Mi42NjQ1MjMwMTYyODUxOTYzcmVtOyAtLWRpc3RhbmNlOjcuMzA0MTE2MDM2NzQyNjE3NHJlbTsgLS1wb3NpdGlvbjo4My41NjM2ODA1MzMzODQ4MyU7IC0tdGltZTozLjQ5NTY0MDMwOTYyNzIyOTVzOyAtLWRlbGF5Oi0yLjc3MzkzODE5NjIzNzcwMnM7XFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnViYmxlXFxcIiBzdHlsZT1cXFwiLS1zaXplOjUuODk0MTQ5ODQ5ODM4MDE2cmVtOyAtLWRpc3RhbmNlOjcuNjI3OTc0NDg0MzAwNDI3cmVtOyAtLXBvc2l0aW9uOjkzLjM2ODc4MTg4MzkzNjQyJTsgLS10aW1lOjMuNzYwMTQ4NjI3MjgzODc1NnM7IC0tZGVsYXk6LTMuMzk3MTAyMjg4NDAzMDI5cztcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6Mi43OTg2NDcxMDY2NjU2ODVyZW07IC0tZGlzdGFuY2U6OS4yMDA0OTY4MTcyMjI1MjVyZW07IC0tcG9zaXRpb246MC4yMDc3NTczMjY5ODQxNDE5NSU7IC0tdGltZToyLjIwMTA5NjAyMjAwNTg2NTdzOyAtLWRlbGF5Oi0yLjY5ODk0ODIxNjQ2NDU0NXM7XFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnViYmxlXFxcIiBzdHlsZT1cXFwiLS1zaXplOjQuMzU5NjIxOTI2NzgyMjk0cmVtOyAtLWRpc3RhbmNlOjcuNDYzNTc5OTMwMDc0MTlyZW07IC0tcG9zaXRpb246NDcuODY3ODMxNzQ2ODUwOTI1JTsgLS10aW1lOjIuMTIwODIwNTYxMjcwNzI0czsgLS1kZWxheTotMi41MTQxNzc4NDkyMTgyMzM2cztcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6NS4wMjgzNTIwNTA5NzgxOTZyZW07IC0tZGlzdGFuY2U6Ny4yNDI3MjAwMzY4MzIyNDlyZW07IC0tcG9zaXRpb246MzAuNjk5ODQ2MTU5MjczOTYlOyAtLXRpbWU6My4yNTM1OTU1MjgxMDYyODgzczsgLS1kZWxheTotMy4zNTU0NTQ1MzI1NDM5NzE1cztcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6Mi43NTU5NzgyMjE4NTcxOTNyZW07IC0tZGlzdGFuY2U6Ny40Njk5NzI0OTY5MjY1MDlyZW07IC0tcG9zaXRpb246MTAuMjM4MjI3MDIwNzAxMTM5JTsgLS10aW1lOjIuNjQ3MjAwMTUyMDA4MzY2czsgLS1kZWxheTotMy41NzIxNTk0NjIyNDk2MjE4cztcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6NS4wODQ4MTI4MTcyMDg3Mzc1cmVtOyAtLWRpc3RhbmNlOjkuNTU4NTU0MTQyNTg0NjI2cmVtOyAtLXBvc2l0aW9uOjk0LjUxOTgyMDU3ODMyMjE1JTsgLS10aW1lOjMuNzE1NTU1ODc2MjE3MzA1NXM7IC0tZGVsYXk6LTMuMDgxMDA2Njk2NzU3ODU5cztcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6My41Mzc4MDc1NjA3NzU5NThyZW07IC0tZGlzdGFuY2U6OS40MjE0MjM1Mjk4NDE5MjhyZW07IC0tcG9zaXRpb246NS4zOTYyNzQyMTE3MDkwMTMlOyAtLXRpbWU6My4xNzg3ODk0NTU2MDE4ODU2czsgLS1kZWxheTotMy40NDYxNjk5MDUxODY3NzVzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZTo1LjYyNzczMTIxODYwMDM0OHJlbTsgLS1kaXN0YW5jZTo3Ljc0NjQ2MzQxNjA3NTE2NXJlbTsgLS1wb3NpdGlvbjoxMC45Mjg4MDI0OTM0Njk1MzElOyAtLXRpbWU6Mi41Njc5MjU5MzIyNTY2OXM7IC0tZGVsYXk6LTMuNDA0ODczMTAxNDUxOTg2cztcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidWJibGVcXFwiIHN0eWxlPVxcXCItLXNpemU6My42OTQ5NTk5MjE5NDcyMzEzcmVtOyAtLWRpc3RhbmNlOjkuMTgxNTQ5NTg2NzUwMTA3cmVtOyAtLXBvc2l0aW9uOi00LjU4OTA1NTU2Mzc5ODk3NiU7IC0tdGltZTozLjcwOTUyMjA2NTI4ODgzNDVzOyAtLWRlbGF5Oi0zLjEyOTU4NjEzMTU5MTYwNjdzO1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1YmJsZVxcXCIgc3R5bGU9XFxcIi0tc2l6ZToyLjc1OTI2NDIyMTA2NzE3OHJlbTsgLS1kaXN0YW5jZTo4LjQyNjg4ODA5OTU1MTM3cmVtOyAtLXBvc2l0aW9uOjI4LjA0NjcyODI5MzEyNDUwMiU7IC0tdGltZTozLjI4NDA5NjExMDUyMzZzOyAtLWRlbGF5Oi0yLjM2NjUxOTg3NDMwOTM4N3M7XFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnViYmxlXFxcIiBzdHlsZT1cXFwiLS1zaXplOjIuNTc0MzA4MjQzNTEwNTY4NHJlbTsgLS1kaXN0YW5jZTo5LjQzMDY1Mzk2MjU3Mzg1M3JlbTsgLS1wb3NpdGlvbjozMC44Mzk3NDY0NzE3Mzk2MSU7IC0tdGltZTozLjY4NjU3MDAxNzYyMzA3MDdzOyAtLWRlbGF5Oi0zLjYxOTAzOTYwNjAzMzI5N3M7XFxcIj48L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxyXFxuICAgIDxkaXY+XFxyXFxuICAgICAgPGRpdj48Yj5FbGRldzwvYj48YSBocmVmPVxcXCIjXFxcIj5TZWN1Y2U8L2E+PGEgaHJlZj1cXFwiI1xcXCI+RHJ1cGFuZDwvYT48YSBocmVmPVxcXCIjXFxcIj5PY2Vhc2g8L2E+PGEgaHJlZj1cXFwiI1xcXCI+VWdlZmU8L2E+PGEgaHJlZj1cXFwiI1xcXCI+QmFiZWQ8L2E+PC9kaXY+XFxyXFxuICAgICAgPGRpdj48Yj5TcG90aGE8L2I+PGEgaHJlZj1cXFwiI1xcXCI+TWlza2FzYTwvYT48YSBocmVmPVxcXCIjXFxcIj5BZ2l0aGU8L2E+PGEgaHJlZj1cXFwiI1xcXCI+U2Nlc2hhPC9hPjxhIGhyZWY9XFxcIiNcXFwiPkx1bGxlPC9hPjwvZGl2PlxcclxcbiAgICAgIDxkaXY+PGI+Q2hhc2hha2liPC9iPjxhIGhyZWY9XFxcIiNcXFwiPkNob2dhdXc8L2E+PGEgaHJlZj1cXFwiI1xcXCI+UGhhY2h1bGVkPC9hPjxhIGhyZWY9XFxcIiNcXFwiPlRpZWJlZnQ8L2E+PGEgaHJlZj1cXFwiI1xcXCI+T2NpZDwvYT48YSBocmVmPVxcXCIjXFxcIj5Jem9tPC9hPjxhIGhyZWY9XFxcIiNcXFwiPk9ydDwvYT48L2Rpdj5cXHJcXG4gICAgICA8ZGl2PjxiPkF0aG9kPC9iPjxhIGhyZWY9XFxcIiNcXFwiPlBhbXV6PC9hPjxhIGhyZWY9XFxcIiNcXFwiPlZhcGVydDwvYT48YSBocmVmPVxcXCIjXFxcIj5OZWVzazwvYT48YSBocmVmPVxcXCIjXFxcIj5PbWVtYW5lbjwvYT48L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXY+PGEgY2xhc3M9XFxcImltYWdlXFxcIiBocmVmPVxcXCJodHRwczovL2NvZGVwZW4uaW8vei1cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCZxdW90O2h0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE5OTAxMS9oYXBweS5zdmcmcXVvdDspXFxcIj48L2E+XFxyXFxuICAgICAgPHA+wqkyMDE5IE5vdCBSZWFsbHk8L3A+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPHN2ZyBzdHlsZT1cXFwiIHRvcDoxMDB2aFxcXCI+XFxyXFxuICA8ZGVmcz5cXHJcXG4gICAgPGZpbHRlciBpZD1cXFwiYmxvYlxcXCI+XFxyXFxuICAgICAgPGZlR2F1c3NpYW5CbHVyIGluPVxcXCJTb3VyY2VHcmFwaGljXFxcIiBzdGREZXZpYXRpb249XFxcIjEwXFxcIiByZXN1bHQ9XFxcImJsdXJcXFwiPjwvZmVHYXVzc2lhbkJsdXI+XFxyXFxuICAgICAgPGZlQ29sb3JNYXRyaXggaW49XFxcImJsdXJcXFwiIG1vZGU9XFxcIm1hdHJpeFxcXCIgdmFsdWVzPVxcXCIxIDAgMCAwIDAgIDAgMSAwIDAgMCAgMCAwIDEgMCAwICAwIDAgMCAxOSAtOVxcXCIgcmVzdWx0PVxcXCJibG9iXFxcIj48L2ZlQ29sb3JNYXRyaXg+XFxyXFxuICAgICAgZmVDb21wb3NpdGUoaW49XFxcIlNvdXJjZUdyYXBoaWNcXFwiIGluMj1cXFwiYmxvYlxcXCIgb3BlcmF0b3I9XFxcImF0b3BcXFwiKSAvL0FmdGVyIHJldmlld2luZyB0aGlzIGFmdGVyIHllYXJzIEkgY2FuJ3QgcmVtZW1iZXIgd2h5IEkgYWRkZWQgdGhpcyBidXQgaXQgaXNuJ3QgbmVjZXNzYXJ5IGZvciB0aGUgYmxvYiBlZmZlY3RcXHJcXG48L2ZpbHRlcj5cXHJcXG48L2RlZnM+XFxyXFxuPC9zdmc+XFxyXFxuLS0+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8bmF2IGFyaWEtbGFiZWw9XFxcIi4uLlxcXCI+XFxyXFxuICAgIDxkaXY+XFxyXFxuICAgICAgICA8aDEgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5HZXN0aXNjaSBVdGVudGkgUmVnaXN0cmF0aTwvaDE+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8dWwgaWQ9XFxcInVzZXJMaXN0XFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cFxcXCI+XFxyXFxuICAgICAgICBcXHJcXG4gICAgPC91bD5cXHJcXG4gICAgPHVsIGlkPVxcXCJwYWdpbmF0aW9uXFxcIiBjbGFzcz1cXFwicGFnaW5hdGlvbiBwYWdpbmF0aW9uLXNtIG15LTJcXFwiPlxcclxcbiAgICAgICAgXFxyXFxuICAgIDwvdWw+XFxyXFxuPC9uYXY+XFxyXFxuXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2PlxcclxcbiAgICA8aW1nIHNyYz1cXFwiLi9pbWcvdmlkZW9nYW1lbG92ZXIucG5nXFxcIiBhbHQ9XFxcIm5vdCBmb3VuZFxcXCIgY2xhc3M9XFxcImhlYWRlckltZ1xcXCIgc3R5bGU9XFxcIndpZHRoOiAxMDAlO1xcXCIgaWQ9XFxcImhlYWRlckltZ1xcXCI+XFxyXFxuXFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGgxPlVsdGltaSBhbm51bmNpOjwvaDE+XFxyXFxuPGgyPkNvbnRyb2xsYSBxdWkgZ2xpIHVsdGltaSBhbm51bmNpPC9oMj5cXHJcXG48ZGl2IGlkPVxcXCJjYXJvdXNlbEV4YW1wbGVDb250cm9sc1xcXCIgY2xhc3M9XFxcImNhcm91c2VsIHNsaWRlXFxcIiBkYXRhLWJzLXJpZGU9XFxcImNhcm91c2VsXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY2Fyb3VzZWwtaW5uZXJcXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcm91c2VsLWl0ZW0gYWN0aXZlXFxcIj5cXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCIgc3R5bGU9XFxcIm1hcmdpbjogMjAlO1xcXCI+XFxyXFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4uLlxcXCIgY2xhc3M9XFxcImNhcmQtaW1nLXRvcFxcXCIgYWx0PVxcXCIuLi5cXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICA8aDUgaWQ9XFxcInRpdGxlMVxcXCIgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPkNhcmQgdGl0bGU8L2g1PlxcclxcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+U29tZSBxdWljayBleGFtcGxlIHRleHQgdG8gYnVpbGQgb24gdGhlIGNhcmQgdGl0bGUgYW5kIG1ha2UgdXAgdGhlIGJ1bGsgb2YgdGhlIGNhcmQncyBjb250ZW50LjwvcD5cXHJcXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPkdvIHNvbWV3aGVyZTwvYT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2Fyb3VzZWwtaXRlbVxcXCI+XFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiIHN0eWxlPVxcXCJtYXJnaW46IDIwJTtcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIuLi5cXFwiIGNsYXNzPVxcXCJjYXJkLWltZy10b3BcXFwiIGFsdD1cXFwiLi4uXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgPGg1IGlkPVxcXCJ0aXRsZTJcXFwiIGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5DYXJkIHRpdGxlPC9oNT5cXHJcXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPlNvbWUgcXVpY2sgZXhhbXBsZSB0ZXh0IHRvIGJ1aWxkIG9uIHRoZSBjYXJkIHRpdGxlIGFuZCBtYWtlIHVwIHRoZSBidWxrIG9mIHRoZSBjYXJkJ3MgY29udGVudC48L3A+XFxyXFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5HbyBzb21ld2hlcmU8L2E+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcm91c2VsLWl0ZW1cXFwiPlxcclxcbiAgICAgICAgXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIiBzdHlsZT1cXFwibWFyZ2luOiAyMCU7XFxcIj5cXHJcXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi4uXFxcIiBjbGFzcz1cXFwiY2FyZC1pbWctdG9wXFxcIiBhbHQ9XFxcIi4uLlxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxoNSBpZD1cXFwidGl0bGUzXFxcIiBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+Q2FyZCB0aXRsZTwvaDU+XFxyXFxuICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj5Tb21lIHF1aWNrIGV4YW1wbGUgdGV4dCB0byBidWlsZCBvbiB0aGUgY2FyZCB0aXRsZSBhbmQgbWFrZSB1cCB0aGUgYnVsayBvZiB0aGUgY2FyZCdzIGNvbnRlbnQuPC9wPlxcclxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+R28gc29tZXdoZXJlPC9hPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJvdXNlbC1pdGVtXFxcIj5cXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCIgc3R5bGU9XFxcIm1hcmdpbjogMjAlO1xcXCI+XFxyXFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4uLlxcXCIgY2xhc3M9XFxcImNhcmQtaW1nLXRvcFxcXCIgYWx0PVxcXCIuLi5cXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICA8aDUgaWQ9XFxcInRpdGxlNFxcXCIgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPkNhcmQgdGl0bGU8L2g1PlxcclxcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+U29tZSBxdWljayBleGFtcGxlIHRleHQgdG8gYnVpbGQgb24gdGhlIGNhcmQgdGl0bGUgYW5kIG1ha2UgdXAgdGhlIGJ1bGsgb2YgdGhlIGNhcmQncyBjb250ZW50LjwvcD5cXHJcXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPkdvIHNvbWV3aGVyZTwvYT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYXJvdXNlbC1jb250cm9sLXByZXZcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1icy10YXJnZXQ9XFxcIiNjYXJvdXNlbEV4YW1wbGVDb250cm9sc1xcXCIgZGF0YS1icy1zbGlkZT1cXFwicHJldlxcXCI+XFxyXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPlByZXZpb3VzPC9zcGFuPlxcclxcbiAgICA8L2J1dHRvbj5cXHJcXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2Fyb3VzZWwtY29udHJvbC1uZXh0XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYnMtdGFyZ2V0PVxcXCIjY2Fyb3VzZWxFeGFtcGxlQ29udHJvbHNcXFwiIGRhdGEtYnMtc2xpZGU9XFxcIm5leHRcXFwiPlxcclxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvblxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICA8c3BhbiBjbGFzcz1cXFwidmlzdWFsbHktaGlkZGVuXFxcIj5OZXh0PC9zcGFuPlxcclxcbiAgICA8L2J1dHRvbj5cXHJcXG4gIDwvZGl2PlxcclxcblxcclxcblxcclxcbjxoMT5DaGkgc2lhbW8/PC9oMT5cXHJcXG48aDI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0LCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEVhIGFkaXBpc2NpIGFyY2hpdGVjdG8gbGliZXJvIGFsaWFzPyBOdW1xdWFtIGF0cXVlIGJlYXRhZSBxdWlzIGFzcGVyaW9yZXMgbmVjZXNzaXRhdGlidXMgZXN0IHF1b2Qgdm9sdXB0YXRlIGV2ZW5pZXQgZXhjZXB0dXJpIG1vbGVzdGlhcyBmdWdpYXQgbm9zdHJ1bSBuaWhpbCwgZWxpZ2VuZGkgdmVyby48L2gyPlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgIDxsYWJlbCBmb3I9XFxcInVzZXJuYW1lU2lnbkluXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+Tmlja25hbWU8L2xhYmVsPlxcclxcbiAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInVzZXJuYW1lU2lnbkluXFxcIj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgPGxhYmVsIGZvcj1cXFwicGFzc3dvcmRTaWduSW5cXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5QYXNzd29yZDwvbGFiZWw+XFxyXFxuICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInBhc3N3b3JkU2lnbkluXFxcIj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJtYi0zIGZvcm0tY2hlY2tcXFwiPlxcclxcbiAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWlucHV0XFxcIiBpZD1cXFwicmVtZW1iZXJNZVNpZ25JblxcXCI+XFxyXFxuICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJyZW1lbWJlck1lU2lnbkluXFxcIj5SaWNvcmRhbWk8L2xhYmVsPlxcclxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiPkFjY2VkaTwvYnV0dG9uPlxcclxcbjxwPk5vbiBzZWkgYW5jb3JhIHJlZ2lzdHJhdG8/PC9wPlxcclxcbjxidXR0b24gaWQ9XFxcImxvZ2luU2lnblVwXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiPlJlZ2lzdHJhdGk8L2J1dHRvbj5cXHJcXG48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiBkYXRhLWJzLWRpc21pc3M9XFxcIm1vZGFsXFxcIj5DaGl1ZGk8L2J1dHRvbj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgY2xhc3M9XFxcInRleHQtY2VudGVyIG1iLTNcXFwiPlxcclxcbiAgICA8aDM+T2gsIGNpIGRpc3BpYWNlIGNoZSB2YWkgdmlhITxicj5Ub3JuYSBhIHRyb3ZhcmNpITwvaDM+XFxyXFxuICAgIDxpbWcgc3JjPVxcXCIuL2ltZy9mYWRGYWNlLnBuZ1xcXCIgd2lkdGg9XFxcIjEwMFxcXCIgYWx0PVxcXCJpbW1hZ2luZSB0cmlzdGVcXFwiPlxcclxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgaWQ9XFxcIm15TW9kYWxcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJzaWduSW5Nb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctY2VudGVyZWRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVxcXCJtb2RhbC10aXRsZSBmcy01XFxcIiBpZD1cXFwic2lnbkluTW9kYWxMYWJlbFxcXCI+TWluY2hpYSBKb2hubnkgQ2FycmFiYmFnZ2lvPC9oMT5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4tY2xvc2VcXFwiIGRhdGEtYnMtZGlzbWlzcz1cXFwibW9kYWxcXFwiIGFyaWEtbGFiZWw9XFxcIkNsb3NlXFxcIj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGlkPVxcXCJteU1vZGFsQm9keVxcXCIgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGlkPVxcXCJteU1vZGFsRm9vdGVyXFxcIiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8IS0tbmF2YmFyIGNvbnRyb2xsZXIgaWNvbi0tPlxcclxcbjxidXR0b24gaWQ9XFxcImxvZ29cXFwiIGNsYXNzPVxcXCJsb2dvLWJ1dHRvblxcXCI+IDxpbWcgY2xhc3M9XFxcImxvZ29cXFwiIHNyYz1cXFwiLi9pbWcvcHJvZmlsZS5wbmdcXFwiIGFsdD1cXFwibG9nb1xcXCI+PC9idXR0b24+XFxyXFxuXFxyXFxuPG5hdj5cXHJcXG4gIDx1bD5cXHJcXG4gICAgPCEtLW5hdmJhciBidXR0b25zLS0+XFxyXFxuICAgIDwhLS15IGJ1dHRvbi0tPlxcclxcbiAgICA8YnV0dG9uIGlkPVxcXCJpbnNlcnRpb25zXFxcIiBjbGFzcz1cXFwiYnV0dG9uLW9uZSBuYXYtYnV0dG9uXFxcIj5Bbm51bmNpPC9idXR0b24+XFxyXFxuICAgIDwhLS14IGJ1dHRvbi0tPlxcclxcbiAgICA8YnV0dG9uIGlkPVxcXCJtYW5hZ2VtZW50XFxcIiBjbGFzcz1cXFwiYnV0dG9uLXR3byBuYXYtYnV0dG9uXFxcIj5HZXN0aW9uZSBVdGVudGk8L2J1dHRvbj5cXHJcXG4gICAgPCEtLWEgYnV0dG9uLS0+XFxyXFxuICAgIDxidXR0b24gaWQ9XFxcImJob1xcXCIgY2xhc3M9XFxcImJ1dHRvbi10aHJlZSBuYXYtYnV0dG9uXFxcIj50ZW1wIGJ1dHRvbjwvYnV0dG9uPlxcclxcbiAgICA8IS0tYiBidXR0b24tLT5cXHJcXG4gICAgPGJ1dHRvbiBpZD1cXFwibG9naW5cXFwiIGNsYXNzPVxcXCJidXR0b24tZm91ciBuYXYtYnV0dG9uXFxcIiBkYXRhLWJzLXRvZ2dsZT1cXFwibW9kYWxcXFwiXFxyXFxuICAgICAgZGF0YS1icy10YXJnZXQ9XFxcIiNteU1vZGFsXFxcIj5Mb2dpbjwvYnV0dG9uPlxcclxcbiAgICA8IS0tYiBidXR0b24tLT5cXHJcXG4gICAgPGJ1dHRvbiBpZD1cXFwic2lnbk91dEJ1dHRvblxcXCIgY2xhc3M9XFxcImJ1dHRvbi1mb3VyIG5hdi1idXR0b25cXFwiIGRhdGEtYnMtdG9nZ2xlPVxcXCJtb2RhbFxcXCJcXHJcXG4gICAgZGF0YS1icy10YXJnZXQ9XFxcIiNteU1vZGFsXFxcIj5Mb2dvdXQ8L2J1dHRvbj5cXHJcXG5cXHJcXG4gICAgPGJ1dHRvbiBpZD1cXFwicHJvZmlsZVxcXCIgY2xhc3M9XFxcInByb2ZpbGUtYnV0dG9uXFxcIj5cXHJcXG4gICAgICA8c3BhbiBjbGFzcz1cXFwicG9zaXRpb24tYWJzb2x1dGUgdG9wLTIgc3RhcnQtOTAgdHJhbnNsYXRlLW1pZGRsZSBwLTIgYmctZGFuZ2VyIGJvcmRlciBib3JkZXItbGlnaHQgcm91bmRlZC1jaXJjbGVcXFwiPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+TmV3IGFsZXJ0czwvc3Bhbj5cXHJcXG4gICAgICA8L3NwYW4+XFxyXFxuICAgICAgPGltZyBjbGFzcz1cXFwibG9nbyBwcm9maWxlXFxcIiBzcmM9XFxcIi4vaW1nL3Byb2ZpbGUucG5nXFxcIiBhbHQ9XFxcImxvZ29cXFwiPlxcclxcbiAgICA8L2J1dHRvbj5cXHJcXG4gIDwvdWw+XFxyXFxuPC9uYXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8aDE+VE9ETzogbW9zdHJhcmUgdHV0dGUgbGUgaW5mbyBkZWxsJ3V0ZW50ZTwvaDE+XFxyXFxuPGgxPlRPRE86IGZvcm0gbyBhbHRybyBwZXIgY2FtYmlhcmUgbmlja25hbWUgZS9vIHBhc3N3b3JkIGVjYzwvaDE+XFxyXFxuPGgxPlRPRE86IHBvc3NpYmlsaXTDoCBkaSBzY2VnbGllcmUgaSBnaW9jaGkgY2hlIHNpIHBvc3NpZWRvbm88L2gxPlxcclxcblwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGgxPlRPRE86IG1vc3RyYXJlIHR1dHRlIGxlIGluZm8gZGVsbCd1dGVudGU8L2gxPlxcclxcblwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGZvcm0+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwibmFtZVNpZ25VcFxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPk5vbWU8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJuYW1lU2lnblVwXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwic3VybmFtZVNpZ25VcFxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPkNvZ25vbWU8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJzdXJuYW1lU2lnblVwXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwidXNlcm5hbWVTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5OaWNrbmFtZTwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInVzZXJuYW1lU2lnblVwXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiZW1haWxTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5FbWFpbDwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJlbWFpbFNpZ25VcFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcInBhc3N3b3JkU2lnblVwXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+UGFzc3dvcmQ8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwicGFzc3dvcmRTaWduVXBcXFwiIHJlcXVpcmVkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJjb25maXJtX3Bhc3N3b3JkU2lnblVwXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+Q29uZmVybWEgUGFzc3dvcmQ8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiY29uZmlybV9wYXNzd29yZFNpZ25VcFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZm9ybT5cXHJcXG48IS0tIFxcclxcblxcclxcblxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIGlkPVxcXCJzaWduVXBNb2RhbFxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcInNpZ25VcE1vZGFsTGFiZWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1jZW50ZXJlZFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIiBpZD1cXFwic2lnblVwTW9kYWxMYWJlbFxcXCI+UmVnaXN0cmF6aW9uZTwvaDU+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuLWNsb3NlXFxcIiBkYXRhLWJzLWRpc21pc3M9XFxcIm1vZGFsXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCI+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxmb3JtPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibmFtZVNpZ25VcFxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPk5vbWU8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwibmFtZVNpZ25VcFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInN1cm5hbWVTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5Db2dub21lPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInN1cm5hbWVTaWduVXBcXFwiIHJlcXVpcmVkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJ1c2VybmFtZVNpZ25VcFxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPk5pY2tuYW1lPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInVzZXJuYW1lU2lnblVwXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWItM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiZW1haWxTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5FbWFpbDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiZW1haWxTaWduVXBcXFwiIHJlcXVpcmVkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtYi0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJwYXNzd29yZFNpZ25VcFxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPlBhc3N3b3JkPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJwYXNzd29yZFNpZ25VcFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImNvbmZpcm1fcGFzc3dvcmRTaWduVXBcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5Db25mZXJtYSBQYXNzd29yZDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiY29uZmlybV9wYXNzd29yZFNpZ25VcFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBpZD1cXFwic3VibWl0U2lnblVwXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIj5SZWdpc3RyYXRpPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDwvZm9ybT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiBkYXRhLWJzLWRpc21pc3M9XFxcIm1vZGFsXFxcIj5DaGl1ZGk8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG4gLS0+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8YnV0dG9uIGlkPVxcXCJzaWduVXBMb2dpblxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5BY2NlZGk8L2J1dHRvbj5cXHJcXG48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgZGF0YS1icy1kaXNtaXNzPVxcXCJtb2RhbFxcXCI+UmVnaXN0cmF0aTwvYnV0dG9uPlxcclxcbjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIGRhdGEtYnMtZGlzbWlzcz1cXFwibW9kYWxcXFwiPkNoaXVkaTwvYnV0dG9uPlwiOyIsImltcG9ydCBhbm51bmNpIGZyb20gJy4vYW5udW5jaS5odG1sJ1xyXG5cclxuaW1wb3J0IGNyZWFBbm51bmNpbyBmcm9tICcuLi9jcmVhQW5udW5jaW8vY3JlYUFubnVuY2lvLmh0bWwnXHJcbmltcG9ydCBpbnNlcnRpb24gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnNlcnRpb24nO1xyXG5pbXBvcnQgZXhwYW5kSW5zZXJ0aW9uIGZyb20gJy4vYW5udW5jaW8nXHJcblxyXG5sZXQgbGlzdDogaW5zZXJ0aW9uW10gPSBbXTtcclxubGV0IHZpZXc6IG51bWJlciA9IDVcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQYWdlKCkgeyAgICAgICAvKkluaXppYWxpenphIHR1dHRvIGNpw7IgY2hlIHNlcnZlIGFsbGEgcGFnaW5hIHBlciBmdW56aW9uYXJlICovXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdEFsbFwiKS5vbmNsaWNrID0gc2VhcmNoQnlBbGw7XHJcbiAgICBhc3NpZ25GaWx0ZXJzKCk7XHJcblxyXG4gICAgZ2V0QWxsSW5zZXJ0aW9ucygpO1xyXG4gICAgY3JlYXRlUGFnaW5hdGlvbigpO1xyXG4gICAgc2hvd1Jlc3VsdHMoMSk7XHJcblxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2VhcmNoQnlBbGwoKSB7ICAgICAgICAgICAgIC8qTGEgZnVuemlvbmEgZGVsIGJvdHRvbmUgY2hlIGNlcmNhIHR1dHRpIGdsaSBhbm51bmNpIHNlbnphIGZpbHRyaSovXHJcbiAgICBnZXRBbGxJbnNlcnRpb25zKCk7XHJcbiAgICBjcmVhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICBzaG93UmVzdWx0cygxKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGFzc2lnbkZpbHRlcnMoKSB7ICAgICAgICAgICAgIC8qQXNzZWduYSBsZSBmdW56aW9uaSBhaSBwdWxzYW50aSBuZWxsZSBkcm9wRG93bkxpc3QgZGEgcHJvdmFyZSovXHJcbiAgICBsZXQgZ2VuZXJpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZW5yZXNcIikuY2hpbGRyZW5cclxuICAgIGZvciAobGV0IGcgb2YgZ2VuZXJpKSB7XHJcbiAgICAgICAgKGcgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNlYXJjaEJ5R2VucmUoZy5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IGFubmkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInllYXJzXCIpLmNoaWxkcmVuXHJcbiAgICBmb3IgKGxldCBhIG9mIGFubmkpIHtcclxuICAgICAgICAoYSBhcyBIVE1MQnV0dG9uRWxlbWVudCkub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2VhcmNoQnlZZWFyKE51bWJlcigoYSBhcyBIVE1MQnV0dG9uRWxlbWVudCkuaWQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNlYXJjaFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hUaXRsZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgc2VhcmNoVGl0bGUub25rZXlkb3duID0gKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXkgPT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICBzZWFyY2hCeVRpdGxlKHNlYXJjaFRpdGxlLnZhbHVlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEJ1dHRvblwiKTtcclxuICAgIHNlYXJjaEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNlYXJjaEJ5VGl0bGUoc2VhcmNoVGl0bGUudmFsdWUpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZWFyY2hCeVRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcclxuICAgIGxldCBmaWx0ZXJlZExpc3QgPSBbXVxyXG4gICAgZm9yIChsZXQgZWxlbWVudCBvZiBsaXN0KSB7XHJcbiAgICAgICAgbGV0IHRpdG9sbyA9IGVsZW1lbnQudGl0bGU7XHJcbiAgICAgICAgbGV0IGdhbWVOYW1lID0gZWxlbWVudC50cmFkZUdhbWUubmFtZVxyXG4gICAgICAgIGlmICgodGl0b2xvLnRvVXBwZXJDYXNlKCkuaW5jbHVkZXModGl0bGUudG9VcHBlckNhc2UoKSkpXHJcbiAgICAgICAgICAgIHx8IChnYW1lTmFtZS50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKHRpdGxlLnRvVXBwZXJDYXNlKCkpKSkge1xyXG4gICAgICAgICAgICBmaWx0ZXJlZExpc3QucHVzaChlbGVtZW50KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxpc3QgPSBbXTtcclxuICAgIGxpc3QgPSBmaWx0ZXJlZExpc3RcclxuICAgIGNyZWF0ZVBhZ2luYXRpb24oKTtcclxuICAgIHNob3dSZXN1bHRzKDEpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2VhcmNoQnlHZW5yZShnZW5yZTogU3RyaW5nKSB7XHJcbiAgICBjb25zb2xlLmxvZyhnZW5yZSk7XHJcbiAgICBsZXQgZmlsdGVyZWRMaXN0ID0gW11cclxuICAgIGZvciAobGV0IGVsZW1lbnQgb2YgbGlzdCkge1xyXG4gICAgICAgIGlmIChlbGVtZW50LnRyYWRlR2FtZS5nZW5yZSA9PSBnZW5yZSkge1xyXG4gICAgICAgICAgICBmaWx0ZXJlZExpc3QucHVzaChlbGVtZW50KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxpc3QgPSBbXTtcclxuICAgIGxpc3QgPSBmaWx0ZXJlZExpc3RcclxuICAgIGNyZWF0ZVBhZ2luYXRpb24oKTtcclxuICAgIHNob3dSZXN1bHRzKDEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZWFyY2hCeVllYXIoeWVhcjogbnVtYmVyKSB7XHJcbiAgICBjb25zb2xlLmxvZyh5ZWFyKTtcclxuICAgIGxldCBmaWx0ZXJlZExpc3QgPSBbXTtcclxuICAgIGZvciAobGV0IGVsZW1lbnQgb2YgbGlzdCkge1xyXG4gICAgICAgIGlmIChlbGVtZW50LnRyYWRlR2FtZS55ZWFyID09IHllYXIpIHtcclxuICAgICAgICAgICAgZmlsdGVyZWRMaXN0LnB1c2goZWxlbWVudClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsaXN0ID0gW107XHJcbiAgICBsaXN0ID0gZmlsdGVyZWRMaXN0XHJcbiAgICBjcmVhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICBzaG93UmVzdWx0cygxKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRBbGxJbnNlcnRpb25zKCkgeyAvKiBRdWVzdGEgw6ggc29sbyB1bmEgcHJvdmEsIHNjb21tZW50YXJlIGxhIGZldGNoIHBpw7kgZ2nDuSAqL1xyXG4gICAgbGlzdCA9IFtdO1xyXG5cclxuICAgIGNvbnN0IGltYWdlR2lvY28xID0ge1xyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9pLmV0c3lzdGF0aWMuY29tLzYyNzc4MDQvci9pbC83ZGYwMGUvNjk3NTQ2MzQwL2lsXzExNDB4Ti42OTc1NDYzNDBfZml2cy5qcGdcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlR2lvY28yID0ge1xyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cubW9ieWdhbWVzLmNvbS9pbWFnZXMvY292ZXJzL2wvMTQ0NDUtdGhlLWxlZ2VuZC1vZi16ZWxkYS1uZXMtZnJvbnQtY292ZXIuanBnXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdpb2NvMyA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2l0L2IvYjMvUG9rJUMzJUE5bW9uX0dpYWxsby5wbmdcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlR2lvY280ID0ge1xyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9tZXRhbGdlYXIuZmFuZG9tLmNvbS9pdC93aWtpL01ldGFsX0dlYXI/ZmlsZT1NZXRhbF9HZWFyLmpwZ1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VHYWxsZXJ5MSA9IHtcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2l0L3RodW1iLzcvNzcvUGlrYWNodS5wbmcvMTAyNHB4LVBpa2FjaHUucG5nXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUdhbGxlcnkyID0ge1xyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cucG5nbWFydC5jb20vZmlsZXMvMTEvRnJvZy1NZW1lLVBORy1IRC5wbmdcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlR2FsbGVyeTMgPSB7XHJcbiAgICAgICAgbGluazogXCJodHRwczovL21lZGlhLmxpY2RuLmNvbS9kbXMvaW1hZ2UvRDU2MzVBUUh3M0U1eVl5WFRMdy9wcm9maWxlLWZyYW1lZHBob3RvLXNocmlua184MDBfODAwLzAvMTY0NDUxODkxODYwNj9lPTE2NzU2MjAwMDAmdj1iZXRhJnQ9eDFSblhxV3NEV0FPVlFVWEdGdWpNb2RYWmhpR1VRSnUwYTZGQXNaTjNMb1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2lvY28xID0ge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5hbWU6IFwiU3VwZXJNYXJpb1wiLFxyXG4gICAgICAgIGdlbnJlOiBcIlBMQVRGT1JNXCIsXHJcbiAgICAgICAgeWVhcjogMTk4NSxcclxuICAgICAgICBjb25zb2xlOiBcIk5FU1wiLFxyXG4gICAgICAgIGNvdmVyOiBpbWFnZUdpb2NvMVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdpb2NvMiA9IHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBuYW1lOiBcIlRoZSBMZWdlbmQgb2YgWmVsZGFcIixcclxuICAgICAgICBnZW5yZTogXCJBVlZFTlRVUkFcIixcclxuICAgICAgICB5ZWFyOiAxOTg2LFxyXG4gICAgICAgIGNvbnNvbGU6IFwiTkVTXCIsXHJcbiAgICAgICAgY292ZXI6IGltYWdlR2lvY28yXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2lvY28zID0ge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIG5hbWU6IFwiUG9rZW1vbiBHaWFsbG9cIixcclxuICAgICAgICBnZW5yZTogXCJHRFJcIixcclxuICAgICAgICB5ZWFyOiAxOTk4LFxyXG4gICAgICAgIGNvbnNvbGU6IFwiR0FNRV9CT1lfQ09MT1JcIixcclxuICAgICAgICBjb3ZlcjogaW1hZ2VHaW9jbzNcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnaW9jbzQgPSB7XHJcbiAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgbmFtZTogXCJNZXRhbCBHZWFyXCIsXHJcbiAgICAgICAgZ2VucmU6IFwiU1RFQUxUSFwiLFxyXG4gICAgICAgIHllYXI6IDE5ODcsXHJcbiAgICAgICAgY29uc29sZTogXCJORVNcIixcclxuICAgICAgICBjb3ZlcjogaW1hZ2VHaW9jbzRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwdWJsaXNoZXJHaW9jbzEgPSB7XHJcbiAgICAgICAgdXNlcklkOiAxLFxyXG4gICAgICAgIHVzZXJuYW1lOiBcIlBpZXJvYWZmb25kb1wiLFxyXG4gICAgICAgIG5hbWU6IFwiUGllcmlub1wiLFxyXG4gICAgICAgIHN1cm5hbWU6IFwiQ2ljY2lub1wiLFxyXG4gICAgICAgIGVtYWlsOiBcInBpZXJpbm9jdW9yaWNpbm9AYW1vcmluby5jb21cIixcclxuICAgICAgICByYXRpbmc6IDY2NixcclxuICAgICAgICB2aWRlb2dhbWVzOiBbZ2lvY28xXVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGluc2VydGlvbjE6IGluc2VydGlvbiA9IHtcclxuICAgICAgICBhcHByb3ZlZDogdHJ1ZSxcclxuICAgICAgICB0aXRsZTogXCJTY2FtYmlvIFN1cGVyTWFyaW9cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTY2FtYmlvIHN1cGVybWFyaW8geGvDqCBtaSBzb25vIHNla2thdG8gYSBnaW9jYXJjaVwiLFxyXG4gICAgICAgIHB1Ymxpc2hlcjogcHVibGlzaGVyR2lvY28xLFxyXG4gICAgICAgIGdhbGxlcnk6IFtpbWFnZUdhbGxlcnkxLCBpbWFnZUdhbGxlcnkyLCBpbWFnZUdhbGxlcnkzXSxcclxuICAgICAgICB0cmFkZUdhbWU6IGdpb2NvMSxcclxuICAgICAgICB3aXNoTGlzdDogW2dpb2NvMiwgZ2lvY28zLCBnaW9jbzRdLFxyXG4gICAgICAgIG91dGNvbWU6IFwiV0lQXCIsXHJcbiAgICAgICAgcHVibGljYXRpb25EYXRlOiBcIjI5LTAxLTIwMjNcIlxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI3OyBpKyspIHtcclxuICAgICAgICBpZiAoaSAhPSAxNykge1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goaW5zZXJ0aW9uMSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goaW5zZXJ0aW9uMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLypRVUVTVE8gRScgTEEgRlVOWklPTkUgR0lVU1RBIE5PTiBGQU1PIENIRSBTQkFHTElBVEUhICovXHJcblxyXG4gICAgLypGZXRjaCBhIGJhY2tlbmQgY29uIHR1dHRpIGdsaSBhbm51bmNpLCBhZ2dpb3JuYSBsYSBsaXN0YSBsaXN0Ki9cclxuICAgIC8vIGxpc3Q9W107XHJcbiAgICAvLyBmZXRjaCgnL1RpcG9Bbm51bmNpQ2hlbmVzbycpXHJcbiAgICAvLyAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC8vIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAvLyAgICAgZm9yKGxldCBkIG9mIGRhdGEpe1xyXG4gICAgLy8gICAgICAgICBsaXN0LnB1c2goZCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSk7XHJcbn1cclxuXHJcbi8qZGEgcXVpIGluIHBvaSBsZSBmdW56aW9uaSBzZXJ2b25vIGEgXHJcbmNyZWFyZSBsYSBwYWdpbmEgdW5hIHZvbHRhIGNsaWNjYXRvICBcclxuc3VsIGJvdHRvbmUgYW5udW5jaSBlIGEgcmljYXJpY2FybGUqL1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUGFnaW5hdGlvbigpIHtcclxuICAgIGxldCBzaXplOiBudW1iZXIgPSBsaXN0Lmxlbmd0aFxyXG4gICAgbGV0IHRhYnM6IG51bWJlciA9IE1hdGguY2VpbChzaXplIC8gdmlldyk7XHJcbiAgICBsZXQgcGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VzXCIpO1xyXG4gICAgcGFnZXMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRhYnM7IGkrKykge1xyXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBpZiAoaSA9PSAxKSB7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1pdGVtIGFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIsIFwicGFnZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZS1saW5rXCIpO1xyXG4gICAgICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYWxsTGkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VzXCIpLmNoaWxkcmVuO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBvbmVMaSBvZiBhbGxMaSkge1xyXG4gICAgICAgICAgICAgICAgb25lTGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWl0ZW1cIik7XHJcbiAgICAgICAgICAgICAgICBvbmVMaS5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWl0ZW0gYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIiwgXCJwYWdlXCIpO1xyXG4gICAgICAgICAgICBzaG93UmVzdWx0cyhpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGJ0bi5pbm5lckhUTUwgPSBcIlwiICsgKGkpO1xyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlc1wiKS5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dSZXN1bHRzKGk6IG51bWJlcikge1xyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc2VydGlvbkNvbnRlbnRcIik7XHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBsZXQgc3RhcnQgPSAoaSAtIDEpICogdmlldztcclxuICAgIGxldCBzdG9wID0gKGkgKiB2aWV3KSAtIDE7XHJcbiAgICBmb3IgKHN0YXJ0OyBzdGFydCA8PSBzdG9wOyBzdGFydCsrKSB7XHJcbiAgICAgICAgaWYgKHN0YXJ0ID49IGxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbGlzdFtzdGFydF0uYXBwcm92ZWQpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxyXG4gICAgICAgIGxpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGV4cGFuZEluc2VydGlvbihsaXN0W3N0YXJ0XSlcclxuICAgICAgICB9XHJcbiAgICAgICAgbGkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsaXN0LWdyb3VwLWl0ZW0nKTtcclxuICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoJ29ubW91c2VvdmVyJywgXCJzZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpc3QtZ3JvdXAtaXRlbSBhY3RpdmUnKVwiKTtcclxuICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoJ29ubW91c2VvdXQnLCBcInNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGlzdC1ncm91cC1pdGVtJylcIik7XHJcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgICAgIGxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgbGV0IGdhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBsZXQgZ2VucmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBsZXQgeWVhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIGxldCBjb25zb2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgbGV0IHRyYWRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIGltYWdlLnNyYyA9IGxpc3Rbc3RhcnRdLnRyYWRlR2FtZS5jb3Zlci5saW5rO1xyXG4gICAgICAgIGltYWdlLndpZHRoID0gMjAwO1xyXG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9IGxpc3Rbc3RhcnRdLnRpdGxlO1xyXG4gICAgICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IGxpc3Rbc3RhcnRdLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgIGdhbWUuaW5uZXJIVE1MID0gbGlzdFtzdGFydF0udHJhZGVHYW1lLm5hbWU7XHJcbiAgICAgICAgZ2VucmUuaW5uZXJIVE1MID0gbGlzdFtzdGFydF0udHJhZGVHYW1lLmdlbnJlO1xyXG4gICAgICAgIHllYXIuaW5uZXJIVE1MID0gXCJcIiArIGxpc3Rbc3RhcnRdLnRyYWRlR2FtZS55ZWFyO1xyXG4gICAgICAgIGNvbnNvbGUuaW5uZXJIVE1MID0gbGlzdFtzdGFydF0udHJhZGVHYW1lLmNvbnNvbGU7XHJcbiAgICAgICAgdHJhZGVzLmlubmVySFRNTCA9IFwiQWNjZXR0ZXJlaSBTY2FtYmlvIGNvbjogXCIgKyBsaXN0W3N0YXJ0XS53aXNoTGlzdFswXS5uYW1lO1xyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgICAgICBsaS5hcHBlbmRDaGlsZChpbWFnZSk7XHJcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGdhbWUpO1xyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGdlbnJlKTtcclxuICAgICAgICBsaS5hcHBlbmRDaGlsZCh5ZWFyKTtcclxuICAgICAgICBsaS5hcHBlbmRDaGlsZChjb25zb2xlKTtcclxuICAgICAgICBsaS5hcHBlbmRDaGlsZCh0cmFkZXMpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKGxpKTtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBhZ2VcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBpbnNlcnRpb24gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnNlcnRpb24nO1xyXG5pbXBvcnQgYW5udW5jaW8gZnJvbSAnLi9hbm51bmNpby5odG1sJ1xyXG5pbXBvcnQgY3JlYXRlUGFnZSBmcm9tICcuL2FubnVuY2knO1xyXG5pbXBvcnQgYW5udW5jaSBmcm9tICcuL2FubnVuY2kuaHRtbCdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHBhbmRJbnNlcnRpb24oaW5zZXJ0aW9uOiBpbnNlcnRpb24pIHtcclxuXHJcbiAgICAvKkltcG9zdG8gbGEgcGFnaW5hIHByaW5jaXBhbGUgY29uIGlsIHRlbXBsYXRlIGRlbCBzaW5nb2xvIGFubnVuY2lvICovXHJcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcclxuICAgIG1haW4uaW5uZXJIVE1MID0gYW5udW5jaW87XHJcblxyXG4gICAgLypDcmVvIHVuIHB1bHNhbnRlIHBlciB0b3JuYXJlIGFsbGEgbGlzdCBhbm51bmNpIGUgaWwgdGl0b2xvICovXHJcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ0biBidG4tc3VjY2Vzc1wiKTtcclxuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIkluZGlldHJvXCJcclxuICAgIGJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBhbm51bmNpO1xyXG4gICAgICAgIGNyZWF0ZVBhZ2UoKTtcclxuICAgIH1cclxuICAgIGxldCBiYWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrXCIpXHJcbiAgICBiYWNrLmFwcGVuZChidXR0b24pO1xyXG5cclxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIHRpdGxlLmlubmVySFRNTCA9IGluc2VydGlvbi50aXRsZTtcclxuICAgIGJhY2suYXBwZW5kKHRpdGxlKTtcclxuXHJcblxyXG5cclxuICAgIC8qSW1wb3N0byBpbCBjYXJvc2VsbG8gZGVsbGUgaW1tYWdpbmkgdXRlbnRlICovXHJcbiAgICBsZXQgaW5kaWNhdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmRpY2F0b3JcIilcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5zZXJ0aW9uLmdhbGxlcnkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiZGF0YS1icy10YXJnZXRcIiwgXCIjaW1hZ2VTbGlkZXJcIik7XHJcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImRhdGEtYnMtc2xpZGUtdG9cIiwgXCJcIiArIGkpO1xyXG4gICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgXCJTbGlkZSBcIiArIChpICsgMSkpO1xyXG4gICAgICAgIGluZGljYXRvci5hcHBlbmQoYnRuKTtcclxuICAgIH1cclxuICAgIGxldCBpbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5uZXJcIilcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluc2VydGlvbi5nYWxsZXJ5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJvdXNlbC1pdGVtIGFjdGl2ZVwiKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcm91c2VsLWl0ZW1cIilcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgaW1nLnNyYyA9IGluc2VydGlvbi5nYWxsZXJ5W2ldLmxpbms7XHJcbiAgICAgICAgaW1nLndpZHRoID0gNDAwO1xyXG4gICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImQtYmxvY2sgdy0xMDBcIik7XHJcbiAgICAgICAgaW1nLmFsdCA9IFwiR2FsbGVyeSBJbWFnZVwiICsgKGkgKyAxKVxyXG4gICAgICAgIGRpdi5hcHBlbmQoaW1nKTtcclxuICAgICAgICBpbm5lci5hcHBlbmQoZGl2KVxyXG4gICAgfVxyXG4gICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBpbWcuc3JjID0gaW5zZXJ0aW9uLnRyYWRlR2FtZS5jb3Zlci5saW5rO1xyXG4gICAgaW1nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW1nLWZsdWlkIHJvdW5kZWQtc3RhcnRcIilcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZC1pbWFnZVwiKS5hcHBlbmQoaW1nKTtcclxuICAgIGxldCBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICAgIGg0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2FyZC10aXRsZVwiKTtcclxuICAgIGg0LmlubmVySFRNTCA9IGluc2VydGlvbi50cmFkZUdhbWUubmFtZTtcclxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2FyZC10ZXh0XCIpO1xyXG4gICAgcC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImZvbnQtc2l6ZTogMS41ZW07XCIpXHJcbiAgICBwLmlubmVySFRNTCA9XHJcbiAgICAgICAgXCJHZW5lcmU6IFwiICsgaW5zZXJ0aW9uLnRyYWRlR2FtZS5nZW5yZSArIFwiPGJyPlwiXHJcbiAgICAgICAgKyBcIkFubm86IFwiICsgaW5zZXJ0aW9uLnRyYWRlR2FtZS55ZWFyICsgXCI8YnI+XCJcclxuICAgICAgICArIFwiQ29uc29sZTogXCIgKyBpbnNlcnRpb24udHJhZGVHYW1lLmNvbnNvbGU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmQtYm9keVwiKS5hcHBlbmQoaDQsIHApO1xyXG4gICAgbGV0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBkZXNjLmlubmVySFRNTCA9IFwiRGVzY3JpemlvbmU6XCJcclxuICAgIGxldCBpbnNEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBpbnNEZXNjLmlubmVySFRNTCA9IGluc2VydGlvbi5kZXNjcmlwdGlvbjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zZXJ0aW9uLWNyZWF0b3JcIikuaW5uZXJIVE1MID0gaW5zZXJ0aW9uLnB1Ymxpc2hlci51c2VybmFtZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zZXJ0aW9uLWRlc2NyaXB0aW9uXCIpLmFwcGVuZChkZXNjLCBpbnNEZXNjKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4taXRlbS1cIiArIChpICsgMSkpLmlubmVySFRNTCA9IGluc2VydGlvbi53aXNoTGlzdFtpXS5uYW1lO1xyXG4gICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGltZy5zcmMgPSBpbnNlcnRpb24ud2lzaExpc3RbaV0uY292ZXIubGluaztcclxuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJkLWltZy10b3BcIilcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltZy1pdGVtLVwiKyhpKzEpKS5hcHBlbmQoaW1nKTtcclxuICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHAuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJkLXRleHRcIik7XHJcbiAgICAgICAgcC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImZvbnQtc2l6ZTogMS41ZW07XCIpO1xyXG4gICAgICAgIHAuaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgXCJHZW5lcmU6IFwiICsgaW5zZXJ0aW9uLndpc2hMaXN0W2ldLmdlbnJlICsgXCI8YnI+XCJcclxuICAgICAgICAgICAgKyBcIkFubm86IFwiICsgaW5zZXJ0aW9uLndpc2hMaXN0W2ldLnllYXIgKyBcIjxicj5cIlxyXG4gICAgICAgICAgICArIFwiQ29uc29sZTogXCIgKyBpbnNlcnRpb24ud2lzaExpc3RbaV0uY29uc29sZTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHktaXRlbS1cIisoaSsxKSkuYXBwZW5kKHApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBleHBhbmRJbnNlcnRpb24iLCJpbXBvcnQgZGl2IGZyb20gJy4vZm9vdGVyLmh0bWwnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvdCgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9vdGVyXCIpLmlubmVySFRNTCA9IGRpdjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm90OyIsImltcG9ydCBnZXN0aW9uZVV0ZW50aSBmcm9tICcuL2dlc3Rpb25lVXRlbnRpLmh0bWwnXHJcbmltcG9ydCB1c2VySW50IGZyb20gJy4uL2ludGVyZmFjZXMvdXNlcic7XHJcbmltcG9ydCBzaG93VXNlclByb2ZpbGUgZnJvbSAnLi4vcHJvZmlsb1V0ZW50ZS9zaG93UHJvZmlsZSc7XHJcblxyXG5sZXQgdXNlcnM6IHVzZXJJbnRbXSA9IFtdO1xyXG5sZXQgdmlldyA9IDU7XHJcblxyXG5mdW5jdGlvbiBzaG93VXNlcnMobnVtOiBudW1iZXIpIHtcclxuICAgIGxldCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyTGlzdFwiKTtcclxuICAgIGxpc3QuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gKG51bSAtIDEpICogdmlldzsgaSA8IG51bSAqIHZpZXc7IGkrKykge1xyXG4gICAgICAgIGlmIChpID49IHVzZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBsaS5vbmNsaWNrID0gc2hvd1VzZXJQcm9maWxlO1xyXG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGlzdC1ncm91cC1pdGVtJyk7XHJcbiAgICAgICAgbGkuc2V0QXR0cmlidXRlKCdvbm1vdXNlb3ZlcicsIFwic2V0QXR0cmlidXRlKCdjbGFzcycsICdsaXN0LWdyb3VwLWl0ZW0gYWN0aXZlJylcIik7XHJcbiAgICAgICAgbGkuc2V0QXR0cmlidXRlKCdvbm1vdXNlb3V0JywgXCJzZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpc3QtZ3JvdXAtaXRlbScpXCIpO1xyXG4gICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZsb2F0LWVuZFwiKTtcclxuICAgICAgICBsZXQgYnRuX2JhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgbGV0IGJ0bl9hZG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ0bl9iYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG4gYnRuLWRhbmdlciBidG4tc21cIik7XHJcbiAgICAgICAgYnRuX2FkbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ0biBidG4tc3VjY2VzcyBidG4tc21cIik7XHJcbiAgICAgICAgYnRuX2Jhbi5pbm5lckhUTUwgPSBcIkJhbm5hXCI7XHJcbiAgICAgICAgYnRuX2FkbS5pbm5lckhUTUwgPSBcIlJlbmRpIEFkbWluXCI7XHJcbiAgICAgICAgYnRuX2Jhbi5vbmNsaWNrID0gKCkgPT4geyBraWNrSGlzQXNzT3V0T2ZUaGlzU2l0ZSh1c2Vyc1tpXS51c2VySWQpfTtcclxuICAgICAgICBidG5fYWRtLm9uY2xpY2sgPSAoKSA9PiB7IG1ha2VIaW1BZG1pbih1c2Vyc1tpXS51c2VySWQpIH07XHJcbiAgICAgICAgc3Bhbi5hcHBlbmQoYnRuX2FkbSwgYnRuX2Jhbik7XHJcbiAgICAgICAgbGkuaW5uZXJIVE1MID0gdXNlcnNbaV0udXNlcm5hbWUgKyBcIiB8IFwiICsgdXNlcnNbaV0ubmFtZSArIFwiIFwiICsgdXNlcnNbaV0uc3VybmFtZSArIFwiIHwgXCIgKyB1c2Vyc1tpXS5lbWFpbCArIFwiIHwgXCIgKyB1c2Vyc1tpXS5yYXRpbmcgKyBcIjxpIGNsYXNzPSdmYS1yZWd1bGFyIGZhLXN0YXInPjwvaT5cIjtcclxuICAgICAgICBsaS5hcHBlbmRDaGlsZChzcGFuKTtcclxuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxVc2VycygpOiB2b2lkIHtcclxuICAgIGZldGNoKFwiL3VzZXJcIilcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB1c2VycyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBlbGVtZW50IG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHVzZXJzLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3JlYXRlUGFnaW5hdGlvbigpO1xyXG4gICAgICAgICAgICBzaG93VXNlcnMoMSk7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbi8qXHJcbjxsaSBjbGFzcz1cInBhZ2UtaXRlbSBhY3RpdmVcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicGFnZS1saW5rXCI+MTwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cInBhZ2UtaXRlbVwiPjxhIGNsYXNzPVwicGFnZS1saW5rXCIgaHJlZj1cIiNcIj4yPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwicGFnZS1pdGVtXCI+PGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBocmVmPVwiI1wiPjM8L2E+PC9saT5cclxuKi9cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVBhZ2luYXRpb24oKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2luYXRpb25cIikuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGxldCBudW1iZXJPZlBhZ2VzID0gTWF0aC5jZWlsKHVzZXJzLmxlbmd0aCAvIHZpZXcpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJPZlBhZ2VzOyBpKyspIHtcclxuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtaXRlbSBhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiLCBcInBhZ2VcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWl0ZW1cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhZ2UtbGlua1wiKTtcclxuICAgICAgICBidG4ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGFsbExpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdpbmF0aW9uXCIpLmNoaWxkcmVuO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBvbmVMaSBvZiBhbGxMaSkge1xyXG4gICAgICAgICAgICAgICAgb25lTGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWl0ZW1cIik7XHJcbiAgICAgICAgICAgICAgICBvbmVMaS5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlLWl0ZW0gYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIiwgXCJwYWdlXCIpO1xyXG4gICAgICAgICAgICBzaG93VXNlcnMoaSArIDEpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgYnRuLmlubmVySFRNTCA9IFwiXCIgKyAoaSArIDEpO1xyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdpbmF0aW9uXCIpLmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlSGltQWRtaW4oaWQ6IG51bWJlcikge1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpZClcclxuICAgIH1cclxuICAgIGZldGNoKFwiL2FkbWluXCIsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7aWQ6IGlkfSlcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHsgY29uc29sZS5sb2coXCJhZG1pbiBjcmVhdG8/IFwiICsgZGF0YSk7IGdldEFsbFVzZXJzKCk7IH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBraWNrSGlzQXNzT3V0T2ZUaGlzU2l0ZShpZDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe2lkOiBpZH0pXHJcbiAgICB9XHJcbiAgICBmZXRjaChcIi91c2VyXCIsIHJlcXVlc3QpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHsgY29uc29sZS5sb2coXCJ1c2VyIGNhbmNlbGxhdG8/IFwiICsgZGF0YSk7IGdldEFsbFVzZXJzKCk7IH0pO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0QWxsVXNlcnM7IiwiaW1wb3J0IGhvbWUgZnJvbSAnLi9ob21lLmh0bWwnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSG9tZSgpe1xyXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xyXG4gICAgbWFpbi5pbm5lckhUTUwgKz0gaG9tZTtcclxuICAgIGxldCBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcclxuICAgIGhlYWQuaW5uZXJIVE1MICs9ICc8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi4vaG9tZS5jc3NcIj4nO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lO1xyXG5cclxuLypcclxuYXN5bmMgZnVuY3Rpb24gZ2V0dGl0bGUodGl0bGU6IHN0cmluZyk6e1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgpXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcblxyXG59XHJcbiovIiwiaW1wb3J0IG1vZGFsIGZyb20gJy4vbW9kYWwuaHRtbCdcclxuaW1wb3J0IGxvZ2luIGZyb20gJy4uL2xvZ2luL2xvZ2luLmh0bWwnXHJcbmltcG9ydCBsb2dpbkZvb3RlciBmcm9tICcuLi9sb2dpbi9sb2dpbkZvb3Rlci5odG1sJ1xyXG5pbXBvcnQgcmVnaXN0cmF6aW9uZSBmcm9tICcuLi9yZWdpc3RyYXppb25lL3JlZ2lzdHJhemlvbmUuaHRtbCdcclxuaW1wb3J0IHJlZ0Zvb3RlciBmcm9tICcuLi9yZWdpc3RyYXppb25lL3JlZ2lzdHJhemlvbmVGb290ZXIuaHRtbCdcclxuaW1wb3J0IGxvZ291dCBmcm9tICcuLi9sb2dvdXQvbG9nb3V0Lmh0bWwnXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW9kYWwoKXtcclxuICAgIGxldCBkaXZNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXZNb2RhbC5pbm5lckhUTUwgPSBtb2RhbDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpLmFwcGVuZENoaWxkKGRpdk1vZGFsKTtcclxuICAgIHNob3dMb2dJbk1vZGFsKCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luXCIpLm9uY2xpY2sgPSBzaG93TG9nSW5Nb2RhbDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbk91dEJ1dHRvblwiKS5vbmNsaWNrID0gc2hvd0xvZ091dE1vZGFsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93U2lnblVwTW9kYWwoKXtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbEJvZHlcIikuaW5uZXJIVE1MID0gcmVnaXN0cmF6aW9uZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbEZvb3RlclwiKS5pbm5lckhUTUwgPSByZWdGb290ZXI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25VcExvZ2luXCIpLm9uY2xpY2sgPSBzaG93TG9nSW5Nb2RhbDsgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dMb2dJbk1vZGFsKCl7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxCb2R5XCIpLmlubmVySFRNTCA9IGxvZ2luO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteU1vZGFsRm9vdGVyXCIpLmlubmVySFRNTCA9IGxvZ2luRm9vdGVyO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpblNpZ25VcFwiKS5vbmNsaWNrID0gc2hvd1NpZ25VcE1vZGFsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93TG9nT3V0TW9kYWwoKXtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbEJvZHlcIikuaW5uZXJIVE1MID0gbG9nb3V0O1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteU1vZGFsRm9vdGVyXCIpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAvL1RPRE86IGNoYW5nZU5hdkJhclxyXG59XHJcblxyXG5mdW5jdGlvbiB0cnlUb1NpZ25VcCgpIHtcclxuICAgIGlmICghdmFsaWRhdGVQYXNzd29yZDIoKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKFwiZSBmYWNjaWFtb2xhIHN0YSBmZWNjaVwiKTtcclxuICAgIGNvbnN0IHVzZXIgPSB7XHJcbiAgICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBzdXJuYW1lOiBcIlwiLFxyXG4gICAgICAgIGVtYWlsOiBcIlwiXHJcbiAgICB9XHJcblxyXG4gICAgLy9mZXRjaChcIi9hY2NvdW50XCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0cnlUb0xvZ0luKCkge1xyXG4gICAgLy9UT0RPXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRyeVRvTG9nT3V0KCkge1xyXG4gICAgLy9UT0RPXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlUGFzc3dvcmQoKSB7XHJcbiAgICBsZXQgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkU2lnblVwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBsZXQgY29uZmlybV9wYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uZmlybV9wYXNzd29yZFNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgaWYgKHBhc3N3b3JkLnZhbHVlICE9IGNvbmZpcm1fcGFzc3dvcmQudmFsdWUpIHtcclxuICAgICAgICBjb25maXJtX3Bhc3N3b3JkLnNldEN1c3RvbVZhbGlkaXR5KFwiUGFzc3dvcmRzIERvbid0IE1hdGNoXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25maXJtX3Bhc3N3b3JkLnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVQYXNzd29yZDIoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNpYW8gZGEgdmFsaWRhdGUyXCIpO1xyXG4gICAgbGV0IHBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzd29yZFNpZ25VcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgbGV0IGNvbmZpcm1fcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbmZpcm1fcGFzc3dvcmRTaWduVXBcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbmZpcm1fcGFzc3dvcmQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJcIik7XHJcbiAgICBpZiAocGFzc3dvcmQudmFsdWUgIT0gY29uZmlybV9wYXNzd29yZC52YWx1ZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2lhbyBkYWxsJ2lmXCIpO1xyXG4gICAgICAgIGNvbmZpcm1fcGFzc3dvcmQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJib3JkZXItY29sb3I6IHJlZDtcIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNb2RhbDsiLCJpbXBvcnQgbmF2IGZyb20gXCIuL25hdmJhci5odG1sXCI7XHJcbmltcG9ydCBjcmVhdGVNb2RhbCBmcm9tIFwiLi4vbW9kYWwvbW9kYWxcIjtcclxuaW1wb3J0IGFubnVuY2kgZnJvbSBcIi4uL2FubnVuY2kvYW5udW5jaS5odG1sXCI7XHJcbmltcG9ydCBjcmVhdGVQYWdlIGZyb20gXCIuLi9hbm51bmNpL2FubnVuY2lcIjtcclxuaW1wb3J0IGhvbWUgZnJvbSBcIi4uL2hvbWUvaG9tZS5odG1sXCI7XHJcbmltcG9ydCBwcm9maWxlIGZyb20gXCIuLi9wcm9maWxvVXRlbnRlL3Byb2ZpbGUuaHRtbFwiO1xyXG5pbXBvcnQgZ2VzdGlvbmVVdGVudGkgZnJvbSBcIi4uL2dlc3Rpb25lVXRlbnRpL2dlc3Rpb25lVXRlbnRpLmh0bWxcIjtcclxuaW1wb3J0IGdldEFsbFVzZXJzIGZyb20gXCIuLi9nZXN0aW9uZVV0ZW50aS9nZXN0aW9uZVV0ZW50aVwiO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOYXYoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKS5pbm5lckhUTUwgPSBuYXY7XHJcbiAgICBjcmVhdGVNb2RhbCgpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dvXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGhvbWU7XHJcbiAgICB9O1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnRpb25zXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGFubnVuY2k7XHJcbiAgICAgICAgY3JlYXRlUGFnZSgpO1xyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFuYWdlbWVudFwiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBnZXN0aW9uZVV0ZW50aTtcclxuICAgICAgICBnZXRBbGxVc2VycygpO1xyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZmlsZVwiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBwcm9maWxlO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldE5hdigpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpLmlubmVySFRNTCA9IG5hdjtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVOYXY7XHJcbiIsImltcG9ydCBzaG93UHJvZmlsZSBmcm9tIFwiLi9zaG93UHJvZmlsZS5odG1sXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1VzZXJQcm9maWxlKCl7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MID0gc2hvd1Byb2ZpbGU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNob3dVc2VyUHJvZmlsZSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSBcIi4vaG9tZS9ob21lXCI7XHJcbmltcG9ydCBjcmVhdGVOYXYgZnJvbSBcIi4vbmF2YmFyL25hdmJhclwiXHJcbmltcG9ydCBjcmVhdGVGb3QgZnJvbSBcIi4vZm9vdGVyL2Zvb3RlclwiXHJcblxyXG5cclxuY3JlYXRlTmF2KCk7XHJcbmNyZWF0ZUhvbWUoKTtcclxuY3JlYXRlRm90KCk7XHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
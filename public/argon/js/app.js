/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// This example adds a marker to indicate the position of Bondi Beach in Sydney,
// Colombia.
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {
      lat: 10.993315,
      lng: -74.806905
    }
  });
  var amarillo = "{{asset('images/marcadores/marcadorAmarillo.png')}}";
  var verde = "{{asset('images/marcadores/marcadorVerde.png')}}";
  var morado = "{{asset('images/marcadores/marcadorMorado.png')}}";
  var anaranjado = "{{asset('images/marcadores/marcadorAnaranjado.png')}}";
  var rojo = "{{asset('images/marcadores/marcadorRojo.png')}}";
  var contentStringMorado = "<div class=\"container-fluid\">\n            <div class=\"row justify-content-center align-items-center mt-4\">\n                <div class=\"card-deck flex-row flex-nowrap mb-3\">\n                  <div class=\"card\">\n                    <div class=\"card-body pb-1\">\n                      <h5 class=\"card-title text-center m-0 mb-0\">Nivel iv </h5>\n                      <h5 class=\"card-title text-center m-0 mb-1\">Emegencia:  <b style=\"background-color: #760a91\" class=\"text-white text-uppercase\">&nbsp;Purp\xFAra&nbsp;</b></h5>\n                        <table class=\"table-sm text-center table-bordered table table-hover table-responsive p-0 m-0\" style=\"font-size: 12px;\">\n                          <thead>\n                            <tr style=\"background-color: #760a91\" class=\"text-white\" >\n                              <th scope=\"col\" colspan=\"6\">CONTAMINANTES</th>\n                            </tr>\n                          </thead>\n                          <tbody class=\"text-center\">\n                            <tr>\n                              <th class=\"p-1 m-1\">Pm10</th>\n                              <th class=\"p-1 m-1\">Pm2.5</th>\n                              <th class=\"p-1 m-1\">O3</th>\n                              <th class=\"p-1 m-1\">SO2</th>\n                              <th class=\"p-1 m-1\">NO2</th>\n                              <th class=\"p-1 m-1\">CO</th>\n                            </tr>\n                            <tr>\n                              <td class=\"p-1 m-1\">>=355</td>\n                              <td class=\"p-1 m-1\">>=151</td>\n                              <td class=\"p-1 m-1\">>=208</td>\n                              <td class=\"p-1 m-1\">>=798</td>\n                              <td class=\"p-1 m-1\">>=1.222</td>\n                              <td class=\"p-1 m-1\">>=17.688</td>\n                            </tr>\n                          </tbody>\n                        </table>\n                      <a class=\"justify-content-center align-items-center text-center\">\n                      <h5 class=\"card-title text-center m-0 mb-0\"><small>\n                      <button style=\"background-color: #760a91\" class=\"text-center text-white btn btn-sm btnDetail mt-3 mb-1\"><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> Detalles</button>\n                      \n                      <h5>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>";
  var contentStringVerde = "<div class=\"container-fluid\">\n            <div class=\"row justify-content-center align-items-center mt-4\">\n                <div class=\"card-deck flex-row flex-nowrap mb-3\">\n                  <div class=\"card\">\n                    <div class=\"card-body pb-1\">\n                      <h5 class=\"card-title text-center m-0 mb-0\">Nivel iv </h5>\n                      <h5 class=\"card-title text-center m-0 mb-1\">Emegencia:  <b class=\"text-success text-uppercase\">&nbsp;Verde&nbsp;</b></h5>\n                        <table class=\"table-sm text-center table-bordered table table-hover table-responsive p-0 m-0\" style=\"font-size: 12px;\">\n                          <thead>\n                            <tr class=\"text-white bg-success\">\n                              <th scope=\"col\" colspan=\"6\">CONTAMINANTES</th>\n                            </tr>\n                          </thead>\n                          <tbody class=\"text-center\">\n                            <tr>\n                              <th class=\"p-1 m-1\">Pm10</th>\n                              <th class=\"p-1 m-1\">Pm2.5</th>\n                              <th class=\"p-1 m-1\">O3</th>\n                              <th class=\"p-1 m-1\">SO2</th>\n                              <th class=\"p-1 m-1\">NO2</th>\n                              <th class=\"p-1 m-1\">CO</th>\n                            </tr>\n                            <tr>\n                              <td class=\"p-1 m-1\">>=355</td>\n                              <td class=\"p-1 m-1\">>=151</td>\n                              <td class=\"p-1 m-1\">>=208</td>\n                              <td class=\"p-1 m-1\">>=798</td>\n                              <td class=\"p-1 m-1\">>=1.222</td>\n                              <td class=\"p-1 m-1\">>=17.688</td>\n                            </tr>\n                          </tbody>\n                        </table>\n                      <a class=\"justify-content-center align-items-center text-center\">\n                      <h5 class=\"card-title text-center m-0 mb-0\"><small>\n                      <button class=\"text-center text-white btn-success btn btn-sm btnDetail mt-3 mb-1\"><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> Detalles</button>\n                      \n                      <h5>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>";
  var contentStringAmarillo = "<div class=\"container-fluid\">\n            <div class=\"row justify-content-center align-items-center mt-4\">\n                <div class=\"card-deck flex-row flex-nowrap mb-3\">\n                  <div class=\"card\">\n                    <div class=\"card-body pb-1\">\n                      <h5 class=\"card-title text-center m-0 mb-0\">Nivel iv </h5>\n                      <h5 class=\"card-title text-center m-0 mb-1\">Emegencia:  <b style=\"background-color: #F8F800\" class=\"text-white text-uppercase\">&nbsp;Amarillo&nbsp;</b></h5>\n                        <table class=\"table-sm text-center table-bordered table table-hover table-responsive p-0 m-0\" style=\"font-size: 12px;\">\n                          <thead>\n                            <tr style=\"background-color: #F8F800\" class=\"text-white\" >\n                              <th scope=\"col\" colspan=\"6\">CONTAMINANTES</th>\n                            </tr>\n                          </thead>\n                          <tbody class=\"text-center\">\n                            <tr>\n                              <th class=\"p-1 m-1\">Pm10</th>\n                              <th class=\"p-1 m-1\">Pm2.5</th>\n                              <th class=\"p-1 m-1\">O3</th>\n                              <th class=\"p-1 m-1\">SO2</th>\n                              <th class=\"p-1 m-1\">NO2</th>\n                              <th class=\"p-1 m-1\">CO</th>\n                            </tr>\n                            <tr>\n                              <td class=\"p-1 m-1\">>=355</td>\n                              <td class=\"p-1 m-1\">>=151</td>\n                              <td class=\"p-1 m-1\">>=208</td>\n                              <td class=\"p-1 m-1\">>=798</td>\n                              <td class=\"p-1 m-1\">>=1.222</td>\n                              <td class=\"p-1 m-1\">>=17.688</td>\n                            </tr>\n                          </tbody>\n                        </table>\n                      <a class=\"justify-content-center align-items-center text-center\">\n                      <h5 class=\"card-title text-center m-0 mb-0\"><small>\n                      <button style=\"background-color: #F8F800\" class=\"text-center text-white btn btn-sm btnDetail mt-3 mb-1\"><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> Detalles</button>\n                      \n                      <h5>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>";
  var contentStringAnaranjado = "<div class=\"container-fluid\">\n            <div class=\"row justify-content-center align-items-center mt-4\">\n                <div class=\"card-deck flex-row flex-nowrap mb-3\">\n                  <div class=\"card\">\n                    <div class=\"card-body pb-1\">\n                      <h5 class=\"card-title text-center m-0 mb-0\">Nivel iv </h5>\n                      <h5 class=\"card-title text-center m-0 mb-1\">Emegencia:  <b style=\"background-color: #FF5900\" class=\"text-white text-uppercase\">&nbsp;Anaranjado&nbsp;</b></h5>\n                        <table class=\"table-sm text-center table-bordered table table-hover table-responsive p-0 m-0\" style=\"font-size: 12px;\">\n                          <thead>\n                            <tr style=\"background-color: #FF5900\" class=\"text-white\" >\n                              <th scope=\"col\" colspan=\"6\">CONTAMINANTES</th>\n                            </tr>\n                          </thead>\n                          <tbody class=\"text-center\">\n                            <tr>\n                              <th class=\"p-1 m-1\">Pm10</th>\n                              <th class=\"p-1 m-1\">Pm2.5</th>\n                              <th class=\"p-1 m-1\">O3</th>\n                              <th class=\"p-1 m-1\">SO2</th>\n                              <th class=\"p-1 m-1\">NO2</th>\n                              <th class=\"p-1 m-1\">CO</th>\n                            </tr>\n                            <tr>\n                              <td class=\"p-1 m-1\">>=355</td>\n                              <td class=\"p-1 m-1\">>=151</td>\n                              <td class=\"p-1 m-1\">>=208</td>\n                              <td class=\"p-1 m-1\">>=798</td>\n                              <td class=\"p-1 m-1\">>=1.222</td>\n                              <td class=\"p-1 m-1\">>=17.688</td>\n                            </tr>\n                          </tbody>\n                        </table>\n                      <a class=\"justify-content-center align-items-center text-center\">\n                      <h5 class=\"card-title text-center m-0 mb-0\"><small>\n                      <button style=\"background-color: #FF5900\" class=\"text-center text-white btn btn-sm btnDetail mt-3 mb-1\"><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> Detalles</button>\n                      \n                      <h5>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>";
  var contentStringRojo = "<div class=\"container-fluid\">\n            <div class=\"row justify-content-center align-items-center mt-4\">\n                <div class=\"card-deck flex-row flex-nowrap mb-3\">\n                  <div class=\"card\">\n                    <div class=\"card-body pb-1\">\n                      <h5 class=\"card-title text-center m-0 mb-0\">Nivel iv </h5>\n                      <h5 class=\"card-title text-center m-0 mb-1\">Emegencia:  <b style=\"background-color:#EB0000\" class=\"text-white text-uppercase\">&nbsp;Rojo&nbsp;</b></h5>\n                        <table class=\"table-sm text-center table-bordered table table-hover table-responsive p-0 m-0\" style=\"font-size: 12px;\">\n                          <thead>\n                            <tr style=\"background-color: #EB0000\" class=\"text-white\" >\n                              <th scope=\"col\" colspan=\"6\">CONTAMINANTES</th>\n                            </tr>\n                          </thead>\n                          <tbody class=\"text-center\">\n                            <tr>\n                              <th class=\"p-1 m-1\">Pm10</th>\n                              <th class=\"p-1 m-1\">Pm2.5</th>\n                              <th class=\"p-1 m-1\">O3</th>\n                              <th class=\"p-1 m-1\">SO2</th>\n                              <th class=\"p-1 m-1\">NO2</th>\n                              <th class=\"p-1 m-1\">CO</th>\n                            </tr>\n                            <tr>\n                              <td class=\"p-1 m-1\">>=355</td>\n                              <td class=\"p-1 m-1\">>=151</td>\n                              <td class=\"p-1 m-1\">>=208</td>\n                              <td class=\"p-1 m-1\">>=798</td>\n                              <td class=\"p-1 m-1\">>=1.222</td>\n                              <td class=\"p-1 m-1\">>=17.688</td>\n                            </tr>\n                          </tbody>\n                        </table>\n                      <a class=\"justify-content-center align-items-center text-center\">\n                      <h5 class=\"card-title text-center m-0 mb-0\"><small>\n                      <button style=\"background-color: #EB0000\" class=\"text-center text-white btn btn-sm btnDetail mt-3 mb-1\"><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> Detalles</button>\n                      \n                      <h5>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>";
  var infowindowVerde = new google.maps.InfoWindow({
    content: contentStringVerde
  });
  var infowindowAmarillo = new google.maps.InfoWindow({
    content: contentStringAmarillo
  });
  var infowindowAnaranjado = new google.maps.InfoWindow({
    content: contentStringAnaranjado
  });
  var infowindowRojo = new google.maps.InfoWindow({
    content: contentStringRojo
  });
  var infowindowMorado = new google.maps.InfoWindow({
    content: contentStringMorado
  });
  var marker1 = new google.maps.Marker({
    position: {
      lat: 10.985900,
      lng: -74.817377
    },
    map: map,
    icon: amarillo
  });
  var marker2 = new google.maps.Marker({
    position: {
      lat: 11.010503,
      lng: -74.821668
    },
    map: map,
    icon: verde
  });
  var marker3 = new google.maps.Marker({
    position: {
      lat: 11.010503,
      lng: -74.797464
    },
    map: map,
    icon: anaranjado
  });
  var marker4 = new google.maps.Marker({
    position: {
      lat: 10.993315,
      lng: -74.806905
    },
    map: map,
    icon: rojo
  });
  var marker5 = new google.maps.Marker({
    position: {
      lat: 10.982193,
      lng: -74.779611
    },
    map: map,
    icon: verde
  });
  var marker6 = new google.maps.Marker({
    position: {
      lat: 10.964682,
      lng: -74.811197
    },
    map: map,
    icon: verde
  });
  var marker7 = new google.maps.Marker({
    position: {
      lat: 10.976969,
      lng: -74.795576
    },
    map: map,
    icon: verde
  });
  var marker8 = new google.maps.Marker({
    position: {
      lat: 11.000898,
      lng: -74.836259
    },
    map: map,
    icon: verde
  });
  var marker9 = new google.maps.Marker({
    position: {
      lat: 11.020781,
      lng: -74.821668
    },
    map: map,
    icon: verde
  });
  var marker10 = new google.maps.Marker({
    position: {
      lat: 10.956775,
      lng: -74.762537
    },
    map: map,
    icon: morado
  });
  marker1.addListener('click', function () {
    infowindowAmarillo.open(map, marker1);
    map.setCenter(marker1.getPosition());
    map.setZoom(17);
  });
  marker2.addListener('click', function () {
    infowindowVerde.open(map, marker2);
    map.setCenter(marker2.getPosition());
    map.setZoom(17);
  });
  marker3.addListener('click', function () {
    infowindowAnaranjado.open(map, marker3);
    map.setCenter(marker3.getPosition());
    map.setZoom(17);
  });
  marker4.addListener('click', function () {
    infowindowRojo.open(map, marker4);
    map.setCenter(marker4.getPosition());
    map.setZoom(17);
  });
  marker5.addListener('click', function () {
    infowindowVerde.open(map, marker5);
    map.setCenter(marker5.getPosition());
    map.setZoom(17);
  });
  marker6.addListener('click', function () {
    infowindowVerde.open(map, marker6);
    map.setCenter(marker6.getPosition());
    map.setZoom(17);
  });
  marker7.addListener('click', function () {
    infowindowVerde.open(map, marker7);
    map.setCenter(marker7.getPosition());
    map.setZoom(17);
  });
  marker8.addListener('click', function () {
    infowindowVerde.open(map, marker8);
    map.setCenter(marker8.getPosition());
    map.setZoom(17);
  });
  marker9.addListener('click', function () {
    infowindowVerde.open(map, marker9);
    map.setCenter(marker9.getPosition());
    map.setZoom(17);
  });
  marker10.addListener('click', function () {
    infowindowMorado.open(map, marker10);
    map.setCenter(marker10.getPosition());
    map.setZoom(17);
  });
  $("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });
  $('body').on('click', '.btnDetail', function () {
    $('#detail-tab').tab('show');
    $('#respuesta').html('Ventana de comandos. <br> Escribe "Help" para ver la lista de comandos disponibles.');
    $('#modalOptions').modal();
  });
  $('#commands-tab').on('shown.bs.tab', function () {
    $('.inputUser').focus();
  });
  $('.selectCity').on('change', function () {
    var latitud = $(this).children("option:selected").data("lat");
    var longitud = $(this).children("option:selected").data("long"); // alert(latitud + ' - ' + longitud);

    var cityMap = new google.maps.LatLng(latitud, longitud);
    map.panTo(cityMap);
    map.setZoom(15);
  });
  var map01 = new google.maps.Map(document.getElementById('map01'), {
    center: {
      lat: 10.985900,
      lng: -74.817377
    },
    zoom: 18,
    mapTypeId: 'roadmap',
    disableDefaultUI: true,
    gestureHandling: 'none',
    zoomControl: false
  });
  var marker01 = new google.maps.Marker({
    position: {
      lat: 10.985900,
      lng: -74.817377
    },
    map: map01,
    icon: amarillo
  });
  var map02 = new google.maps.Map(document.getElementById('map02'), {
    center: {
      lat: 11.010503,
      lng: -74.821668
    },
    zoom: 18,
    mapTypeId: 'roadmap',
    disableDefaultUI: true,
    gestureHandling: 'none',
    zoomControl: false
  });
  var marker02 = new google.maps.Marker({
    position: {
      lat: 11.010503,
      lng: -74.821668
    },
    map: map02,
    icon: verde
  });
  var map03 = new google.maps.Map(document.getElementById('map03'), {
    center: {
      lat: 11.010503,
      lng: -74.797464
    },
    zoom: 18,
    mapTypeId: 'roadmap',
    disableDefaultUI: true,
    gestureHandling: 'none',
    zoomControl: false
  });
  var marker03 = new google.maps.Marker({
    position: {
      lat: 11.010503,
      lng: -74.797464
    },
    map: map03,
    icon: anaranjado
  });
  var map04 = new google.maps.Map(document.getElementById('map04'), {
    center: {
      lat: 10.993315,
      lng: -74.806905
    },
    zoom: 18,
    mapTypeId: 'roadmap',
    disableDefaultUI: true,
    gestureHandling: 'none',
    zoomControl: false
  });
  var marker04 = new google.maps.Marker({
    position: {
      lat: 10.993315,
      lng: -74.806905
    },
    map: map04,
    icon: rojo
  });
  var map05 = new google.maps.Map(document.getElementById('map05'), {
    center: {
      lat: 10.982193,
      lng: -74.779611
    },
    zoom: 18,
    mapTypeId: 'roadmap',
    disableDefaultUI: true,
    gestureHandling: 'none',
    zoomControl: false
  });
  var marker05 = new google.maps.Marker({
    position: {
      lat: 10.982193,
      lng: -74.779611
    },
    map: map05,
    icon: verde
  });
  var map06 = new google.maps.Map(document.getElementById('map06'), {
    center: {
      lat: 10.964682,
      lng: -74.811197
    },
    zoom: 18,
    mapTypeId: 'roadmap',
    disableDefaultUI: true,
    gestureHandling: 'none',
    zoomControl: false
  });
  var marker06 = new google.maps.Marker({
    position: {
      lat: 10.964682,
      lng: -74.811197
    },
    map: map06,
    icon: verde
  });
  var map07 = new google.maps.Map(document.getElementById('map07'), {
    center: {
      lat: 10.976969,
      lng: -74.795576
    },
    zoom: 18,
    mapTypeId: 'roadmap',
    disableDefaultUI: true,
    gestureHandling: 'none',
    zoomControl: false
  });
  var marker07 = new google.maps.Marker({
    position: {
      lat: 10.976969,
      lng: -74.795576
    },
    map: map07,
    icon: verde
  });
  var map08 = new google.maps.Map(document.getElementById('map08'), {
    center: {
      lat: 11.000898,
      lng: -74.836259
    },
    zoom: 18,
    mapTypeId: 'roadmap',
    disableDefaultUI: true,
    gestureHandling: 'none',
    zoomControl: false
  });
  var marker08 = new google.maps.Marker({
    position: {
      lat: 11.000898,
      lng: -74.836259
    },
    map: map08,
    icon: verde
  });
  var map09 = new google.maps.Map(document.getElementById('map09'), {
    center: {
      lat: 11.020781,
      lng: -74.821668
    },
    zoom: 18,
    mapTypeId: 'roadmap',
    disableDefaultUI: true,
    gestureHandling: 'none',
    zoomControl: false
  });
  var marker09 = new google.maps.Marker({
    position: {
      lat: 11.020781,
      lng: -74.821668
    },
    map: map09,
    icon: verde
  });
  var map010 = new google.maps.Map(document.getElementById('map010'), {
    center: {
      lat: 10.956775,
      lng: -74.762537
    },
    zoom: 18,
    mapTypeId: 'roadmap',
    disableDefaultUI: true,
    gestureHandling: 'none',
    zoomControl: false
  });
  var marker010 = new google.maps.Marker({
    position: {
      lat: 10.956775,
      lng: -74.762537
    },
    map: map010,
    icon: morado
  });
}

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\xampp\htdocs\airq\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\xampp\htdocs\airq\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp64\www\ls-review\src\main.ts */"zUnb");


/***/ }),

/***/ "5ZPe":
/*!**********************************************!*\
  !*** ./src/app/_services/account.service.ts ***!
  \**********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _dicebear_avatars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dicebear/avatars */ "tB1i");
/* harmony import */ var _dicebear_avatars__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dicebear_avatars__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dicebear_pixel_art__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dicebear/pixel-art */ "y6Nm");
/* harmony import */ var _dicebear_pixel_art__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dicebear_pixel_art__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _webSocket_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./webSocket.service */ "myrj");
/* harmony import */ var _fileUpload_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fileUpload.service */ "cYUA");










class AccountService {
    constructor(router, http, wsService, FileUploadService) {
        this.router = router;
        this.http = http;
        this.wsService = wsService;
        this.FileUploadService = FileUploadService;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }
    get userValue() {
        return this.userSubject.value;
    }
    connect(user) {
        this.wsService.connect(user);
    }
    login(username, password) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/users/authenticate`, { username, password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(user => {
            this.FileUploadService.getAvatar(user.id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
                .subscribe(avatar => {
                const svgAvatar = Object(_dicebear_avatars__WEBPACK_IMPORTED_MODULE_2__["createAvatar"])(_dicebear_pixel_art__WEBPACK_IMPORTED_MODULE_3__, {
                    seed: user.username,
                    backgroundColor: '#868889',
                });
                if (avatar != '') {
                    user['avatar'] = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + avatar;
                }
                else {
                    user['avatar'] = '';
                    user['svg'] = svgAvatar;
                }
                this.FileUploadService.getCover(user.id)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
                    .subscribe(cover => {
                    if (cover != '') {
                        user['cover'] = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + cover;
                    }
                    else {
                        user['cover'] = '';
                    }
                    this.connect(user);
                    localStorage.setItem('user', JSON.stringify(user));
                    this.userSubject.next(user);
                });
            });
            return user;
        }));
    }
    logout() {
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/auth/login']);
        this.wsService.disconnect();
    }
    register(user) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/users/register`, user);
    }
    getAll() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/users`);
    }
    getById(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/users/${id}`);
    }
    getByUsername(username) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/users/username/${username}`);
    }
    getByIdForTopic(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/users/topic/${id}`);
    }
    update(id, params) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/users/${id}`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(x => {
            if (id == this.userValue.id) {
                const user = Object.assign(Object.assign({}, this.userValue), params);
                localStorage.setItem('user', JSON.stringify(user));
                // publish updated user to subscribers
                this.userSubject.next(user);
            }
            return x;
        }));
    }
    delete(id) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/users/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(x => {
            if (id == this.userValue.id) {
                this.logout();
            }
            return x;
        }));
    }
    createCharacter(params) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/characters/create`, params);
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_webSocket_service__WEBPACK_IMPORTED_MODULE_8__["webSocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_fileUpload_service__WEBPACK_IMPORTED_MODULE_9__["FileUploadService"])); };
AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true,
  apiUrl: 'https://ls-review-backend.herokuapp.com/api',
  wsUrl: 'https://ls-review-backend.herokuapp.com'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "ByK8":
/*!******************************************!*\
  !*** ./src/app/_helpers/fake-backend.ts ***!
  \******************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




// array in local storage for registered users
const usersKey = 'freesz';
let users = JSON.parse(localStorage.getItem(usersKey)) || [];
class FakeBackendInterceptor {
    intercept(request, next) {
        const { url, method, headers, body } = request;
        return handleRoute();
        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/users/register') && method === 'POST':
                    return register();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                case url.match(/\/users\/\d+$/) && method === 'GET':
                    return getUserById();
                case url.match(/\/users\/\d+$/) && method === 'PUT':
                    return updateUser();
                case url.match(/\/users\/\d+$/) && method === 'DELETE':
                    return deleteUser();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }
        // route functions
        function authenticate() {
            const { username, password } = body;
            const user = users.find(x => x.username === username && x.password === password);
            if (!user)
                return error('Username or password is incorrect');
            return ok(Object.assign(Object.assign({}, basicDetails(user)), { token: 'fake-jwt-token' }));
        }
        function register() {
            const user = body;
            if (users.find(x => x.username === user.username)) {
                return error('Username "' + user.username + '" is already taken');
            }
            user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
            users.push(user);
            localStorage.setItem(usersKey, JSON.stringify(users));
            return ok();
        }
        function getUsers() {
            if (!isLoggedIn())
                return unauthorized();
            return ok(users.map(x => basicDetails(x)));
        }
        function getUserById() {
            if (!isLoggedIn())
                return unauthorized();
            const user = users.find(x => x.id === idFromUrl());
            return ok(basicDetails(user));
        }
        function updateUser() {
            if (!isLoggedIn())
                return unauthorized();
            let params = body;
            let user = users.find(x => x.id === idFromUrl());
            // only update password if entered
            if (!params.password) {
                delete params.password;
            }
            // update and save user
            Object.assign(user, params);
            localStorage.setItem(usersKey, JSON.stringify(users));
            return ok();
        }
        function deleteUser() {
            if (!isLoggedIn())
                return unauthorized();
            users = users.filter(x => x.id !== idFromUrl());
            localStorage.setItem(usersKey, JSON.stringify(users));
            return ok();
        }
        // helper functions
        function ok(body) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({ status: 200, body }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(500)); // delay observable to simulate server api call
        }
        function error(message) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])({ error: { message } })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["materialize"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["dematerialize"])()); // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648);
        }
        function unauthorized() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])({ status: 401, error: { message: 'Unauthorized' } })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["materialize"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["dematerialize"])());
        }
        function basicDetails(user) {
            const { id, username, firstName, lastName } = user;
            return { id, username, firstName, lastName };
        }
        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }
        function idFromUrl() {
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        }
    }
}
FakeBackendInterceptor.ɵfac = function FakeBackendInterceptor_Factory(t) { return new (t || FakeBackendInterceptor)(); };
FakeBackendInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: FakeBackendInterceptor, factory: FakeBackendInterceptor.ɵfac });
const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "CREj":
/*!********************************************!*\
  !*** ./src/app/_services/forum.service.ts ***!
  \********************************************/
/*! exports provided: forumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forumService", function() { return forumService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _webSocket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./webSocket.service */ "myrj");







class forumService {
    constructor(router, http, wsService) {
        this.router = router;
        this.http = http;
        this.wsService = wsService;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
        this.messageTopic = wsService
            .topicObserve()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            return response;
        }));
    }
    getAllCats() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/forums/categories`);
    }
    getTopics(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/forums/topics/forum/${id}`);
    }
    getPosts(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/forums/posts/topic/${id}`);
    }
    getAllforumParent() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/forums`);
    }
    post(id, subject) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/forums/posts/f/${id}`, subject);
    }
    respondTopic(id, message) {
        this.messageTopic.next({ id: id, message: message });
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/forums/posts/t/${id}`, message);
    }
}
forumService.ɵfac = function forumService_Factory(t) { return new (t || forumService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_webSocket_service__WEBPACK_IMPORTED_MODULE_6__["webSocketService"])); };
forumService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: forumService, factory: forumService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Dgtq":
/*!**********************************!*\
  !*** ./src/app/_models/alert.ts ***!
  \**********************************/
/*! exports provided: Alert, AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
class Alert {
    constructor(init) {
        Object.assign(this, init);
    }
}
var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "EOgx":
/*!********************************************!*\
  !*** ./src/app/web-gl/engine/ChunkType.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ChunkType = {
    CHUNK_NAOBJECT: 0x0,
    CHUNK_STRUCT: 0x1,
    CHUNK_STRING: 0x2,
    CHUNK_EXTENSION: 0x3,
    CHUNK_CAMERA: 0x5,
    CHUNK_TEXTURE: 0x6,
    CHUNK_MATERIAL: 0x7,
    CHUNK_MATERIALLIST: 0x8,
    CHUNK_ATOMICSECT: 0x9,
    CHUNK_PLANESECT: 0xA,
    CHUNK_WORLD: 0xB,
    CHUNK_SPLINE: 0xC,
    CHUNK_MATRIX: 0xD,
    CHUNK_FRAMELIST: 0xE,
    CHUNK_GEOMETRY: 0xF,
    CHUNK_CLUMP: 0x10,
    CHUNK_LIGHT: 0x12,
    CHUNK_UNICODESTRING: 0x13,
    CHUNK_ATOMIC: 0x14,
    CHUNK_TEXTURENATIVE: 0x15,
    CHUNK_TEXDICTIONARY: 0x16,
    CHUNK_ANIMDATABASE: 0x17,
    CHUNK_IMAGE: 0x18,
    CHUNK_SKINANIMATION: 0x19,
    CHUNK_GEOMETRYLIST: 0x1A,
    CHUNK_ANIMANIMATION: 0x1B,
    CHUNK_HANIMANIMATION: 0x1B,
    CHUNK_TEAM: 0x1C,
    CHUNK_CROWD: 0x1D,
    CHUNK_RIGHTTORENDER: 0x1F,
    CHUNK_MTEFFECTNATIVE: 0x20,
    CHUNK_MTEFFECTDICT: 0x21,
    CHUNK_TEAMDICTIONARY: 0x22,
    CHUNK_PITEXDICTIONARY: 0x23,
    CHUNK_TOC: 0x24,
    CHUNK_PRTSTDGLOBALDATA: 0x25,
    CHUNK_ALTPIPE: 0x26,
    CHUNK_PIPEDS: 0x27,
    CHUNK_PATCHMESH: 0x28,
    CHUNK_CHUNKGROUPSTART: 0x29,
    CHUNK_CHUNKGROUPEND: 0x2A,
    CHUNK_UVANIMDICT: 0x2B,
    CHUNK_COLLTREE: 0x2C,
    CHUNK_ENVIRONMENT: 0x2D,
    CHUNK_COREPLUGINIDMAX: 0x2E,

    CHUNK_MORPH: 0x105,
    CHUNK_SKYMIPMAP: 0x110,
    CHUNK_SKIN: 0x116,
    CHUNK_PARTICLES: 0x118,
    CHUNK_HANIM: 0x11E,
    CHUNK_MATERIALEFFECTS: 0x120,
    CHUNK_PDSPLG: 0x131,
    CHUNK_ADCPLG: 0x134,
    CHUNK_UVANIMPLG: 0x135,
    CHUNK_BINMESH: 0x50E,
    CHUNK_NATIVEDATA: 0x510,
    CHUNK_VERTEXFORMAT: 0x510,

    CHUNK_PIPELINESET: 0x253F2F3,
    CHUNK_SPECULARMAT: 0x253F2F6,
    CHUNK_2DFX: 0x253F2F8,
    CHUNK_NIGHTVERTEXCOLOR: 0x253F2F9,
    CHUNK_COLLISIONMODEL: 0x253F2FA,
    CHUNK_REFLECTIONMAT: 0x253F2FC,
    CHUNK_MESHEXTENSION: 0x253F2FD,
    CHUNK_FRAME: 0x253F2FE
};

/* harmony default export */ __webpack_exports__["default"] = (ChunkType);

/***/ }),

/***/ "GBWz":
/*!********************************************!*\
  !*** ./src/app/_services/utils.service.ts ***!
  \********************************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class UtilsService {
    constructor() {
    }
    format_date(date, complet = false) {
        let getDate = new Date(parseInt(date));
        let months = ['Janv', 'Févr', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc'];
        let today = new Date(Date.now());
        let prefix = '';
        let year = getDate.getFullYear();
        let month = months[getDate.getMonth()];
        let monthNum = getDate.getMonth() < 10 ? '0' + getDate.getMonth() : getDate.getMonth();
        let day = getDate.getDate();
        let hour = getDate.getHours();
        let min = getDate.getMinutes();
        let formattedDate = day + ' ' + month + ' ' + year + ' à ' + hour + ':' + min;
        if (!complet) {
            formattedDate = day + '/' + monthNum + '/' + year;
        }
        if (day == today.getDate() - 1) {
            prefix = 'Hier à ';
        }
        else if (day == today.getDate()) {
            prefix = 'Aujourd\'hui à ';
        }
        prefix = '';
        if (prefix != '') {
            formattedDate = prefix + '' + hour + ':' + min;
        }
        return formattedDate;
    }
    TextSub(text, length) {
        if (text == null) {
            return '';
        }
        if (text.length <= length) {
            return text;
        }
        text = text.substring(0, length);
        let last = text.lastIndexOf(" ");
        text = text.substring(0, last);
        return text + '...';
    }
    hideEmail(email) {
        return email.replace(/(.{2})(.*)(?=@)/, function (gp1, gp2, gp3) {
            for (let i = 0; i < gp3.length; i++) {
                gp2 += "*";
            }
            return gp2;
        });
    }
    hideInput(input) {
        let x = '****';
        if (length)
            for (let i = 0; i < input.length; i++) {
                x += '*';
            }
        return x;
    }
}
UtilsService.ɵfac = function UtilsService_Factory(t) { return new (t || UtilsService)(); };
UtilsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtilsService, factory: UtilsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "H1Kj":
/*!*********************************************!*\
  !*** ./src/app/_services/bbcode.service.ts ***!
  \*********************************************/
/*! exports provided: bbcodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bbcodeService", function() { return bbcodeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class bbcodeService {
    constructor(router) {
        this.router = router;
    }
    simpleInsert(bbcode) {
        return { prefix: bbcode, suffix: bbcode };
    }
    optionInsert(optionShema) {
        return { prefix: optionShema.bbcode, suffix: optionShema.bbcode, option: { value: optionShema.value, list: optionShema.list } };
    }
    formatBBcodeEditor(text, selection, data) {
        console.log(data);
        let format = '[' + data.prefix + '][' + data.suffix + ']';
        if (selection)
            format = text.replace(selection, '[' + data.prefix + ']' + selection + '[' + data.suffix + ']');
        else
            format = text + '[' + data.prefix + '][' + data.suffix + ']';
        switch (data.prefix) {
            case 'list':
                format = text + '[' + data.prefix + '=' + data.option.value + ']\n';
                for (let i = 0; i < data.option.list.length; i++) {
                    format += '[*]' + data.option.list[i].value + '[*]\n';
                }
                format += '[' + data.suffix + ']';
                break;
        }
        return format;
    }
}
bbcodeService.ɵfac = function bbcodeService_Factory(t) { return new (t || bbcodeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
bbcodeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: bbcodeService, factory: bbcodeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "J9tS":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AccountService, AlertService, forumService, characterService, webSocketService, chatService, bbcodeService, FileUploadService, UtilsService, ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.service */ "5ZPe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return _account_service__WEBPACK_IMPORTED_MODULE_0__["AccountService"]; });

/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ "f5O9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]; });

/* harmony import */ var _forum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forum.service */ "CREj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forumService", function() { return _forum_service__WEBPACK_IMPORTED_MODULE_2__["forumService"]; });

/* harmony import */ var _character_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./character.service */ "kZRN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "characterService", function() { return _character_service__WEBPACK_IMPORTED_MODULE_3__["characterService"]; });

/* harmony import */ var _webSocket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./webSocket.service */ "myrj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webSocketService", function() { return _webSocket_service__WEBPACK_IMPORTED_MODULE_4__["webSocketService"]; });

/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat.service */ "vJCe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chatService", function() { return _chat_service__WEBPACK_IMPORTED_MODULE_5__["chatService"]; });

/* harmony import */ var _bbcode_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bbcode.service */ "H1Kj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bbcodeService", function() { return _bbcode_service__WEBPACK_IMPORTED_MODULE_6__["bbcodeService"]; });

/* harmony import */ var _fileUpload_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fileUpload.service */ "cYUA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileUploadService", function() { return _fileUpload_service__WEBPACK_IMPORTED_MODULE_7__["FileUploadService"]; });

/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils.service */ "GBWz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return _utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"]; });

/* harmony import */ var _validation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./validation.service */ "xW6b");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return _validation_service__WEBPACK_IMPORTED_MODULE_9__["ValidationService"]; });













/***/ }),

/***/ "QO4U":
/*!*****************************************!*\
  !*** ./src/app/web-gl/engine/Loader.ts ***!
  \*****************************************/
/*! exports provided: showModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showModel", function() { return showModel; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "Womt");
/* harmony import */ var _Reader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reader.js */ "mbvT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class showModel {
    load(url, onLoad, onProgress, onError) {
        var self = this;
        this.manager = three__WEBPACK_IMPORTED_MODULE_0__["DefaultLoadingManager"];
        this.name = url;
        this.name = this.name.split('/').pop().split('.dff')[0]; // returns 'two'
        var loader = new three__WEBPACK_IMPORTED_MODULE_0__["FileLoader"](this.manager);
        loader.setResponseType('arraybuffer');
        loader.load(url, function (file) {
            onLoad(self.read(file));
        }, onProgress, onError);
    }
    setPath(value) {
        this.path = value;
        return this;
    }
    read(arraybuffer) {
        var reader = new _Reader_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
        var group = new three__WEBPACK_IMPORTED_MODULE_0__["Group"]();
        var clump = reader.parse(arraybuffer);
        var model = {};
        var meshes = [];
        clump.RWGeometryList.forEach(function (rwGeometry) {
            var geometry = new three__WEBPACK_IMPORTED_MODULE_0__["BufferGeometry"]();
            var triangleGroups = [];
            rwGeometry.triangles.forEach(function (triangle) {
                if (triangleGroups[triangle.materialId] === undefined)
                    triangleGroups[triangle.materialId] = [];
                triangleGroups[triangle.materialId].push([triangle.vertex1, triangle.vertex2, triangle.vertex3]);
            });
            var triangleCount = Object.keys(triangleGroups).reduce((sum, key) => (sum + triangleGroups[key].length), 0);
            var positionBuffer = new three__WEBPACK_IMPORTED_MODULE_0__["BufferAttribute"](new Float32Array(triangleCount * 3 * 3), 3);
            var normalBuffer = rwGeometry.morphTargets[0].hasNormals && new three__WEBPACK_IMPORTED_MODULE_0__["BufferAttribute"](new Float32Array(triangleCount * 3 * 3), 3, true);
            var colorBuffer = rwGeometry.prelitcolor && new three__WEBPACK_IMPORTED_MODULE_0__["BufferAttribute"](new Uint8Array(triangleCount * 3 * 3), 3, true);
            var uvBuffer = rwGeometry.texCoords && new three__WEBPACK_IMPORTED_MODULE_0__["BufferAttribute"](new Float32Array(triangleCount * 3 * 2), 2, true);
            var vertexPos = 0;
            const newVertexIndices = {};
            for (const materialIndex of Object.keys(triangleGroups)) {
                const faces = triangleGroups[materialIndex];
                geometry.addGroup(vertexPos, faces.length * 3, Number(materialIndex));
                for (const indices of faces) {
                    for (const index of indices) {
                        var vertex = rwGeometry.morphTargets[0].vertices[index];
                        positionBuffer.setXYZ(vertexPos, vertex.x, vertex.y, vertex.z);
                        newVertexIndices[index] = newVertexIndices[index] || [];
                        newVertexIndices[index].push(vertexPos);
                        if (normalBuffer) {
                            var normal = rwGeometry.morphTargets[0].normals[index];
                            normalBuffer.setXYZ(vertexPos, normal.x, normal.y, normal.z);
                        }
                        if (uvBuffer) {
                            var uv = rwGeometry.texCoords[0][index];
                            uvBuffer.setXY(vertexPos, uv.u, 1 - uv.v);
                        }
                        if (colorBuffer) {
                            throw "DFFLoader: Not implemented 3";
                            // todo
                            //const color = parseInt(rwGeometry.prelitcolor[index], 16);
                            //colorBuffer.setXYZ(vertexPos,
                            //    Math.min(((color & 0xFF0000) >> 8 * 2) * ColorCoefficent, 255),
                            //    Math.min(((color & 0x00FF00) >> 8 * 1) * ColorCoefficent, 255),
                            //    Math.min(((color & 0x0000FF) >> 8 * 0) * ColorCoefficent, 255),
                            //);
                        }
                        vertexPos += 1;
                    }
                }
            }
            geometry.dynamic = false;
            geometry.setAttribute('position', positionBuffer);
            if (normalBuffer)
                geometry.setAttribute('normal', normalBuffer, true);
            else
                geometry.computeFaceNormals();
            if (colorBuffer)
                geometry.setAttribute('color', colorBuffer, true);
            if (uvBuffer)
                geometry.setAttribute('uv', uvBuffer);
            geometry.computeBoundingSphere();
            var materials = rwGeometry.RWMaterialList.map(function (material) {
                var result = new three__WEBPACK_IMPORTED_MODULE_0__["MeshStandardMaterial"]({
                    vertexColors: colorBuffer ? three__WEBPACK_IMPORTED_MODULE_0__["VertexColors"] : three__WEBPACK_IMPORTED_MODULE_0__["NoColors"],
                    roughness: material.RWMaterial.diffuse
                });
                if (material.RWMaterial.isTextured) {
                    var loader = new three__WEBPACK_IMPORTED_MODULE_0__["TextureLoader"]();
                    if (this.path)
                        loader.setPath(this.path);
                    if (material.RWMaterial.RWTexture.name) {
                        result.map = loader.load('./assets/models/skins/texture/' + this.name + '/' + material.RWMaterial.RWTexture.name + ".png", () => {
                            material.needsUpdate = true;
                            // material.map.sourceFile = url;
                        });
                        result.map.wrapS = three__WEBPACK_IMPORTED_MODULE_0__["RepeatWrapping"];
                        result.map.wrapT = three__WEBPACK_IMPORTED_MODULE_0__["RepeatWrapping"];
                    }
                    if (material.RWMaterial.RWTexture.maskName) {
                        result.alphaMap = loader.load('./assets/models/skins/texture/' + this.name + '/' + material.RWMaterial.RWTexture.maskName + ".png", () => {
                            result.needsUpdate = true;
                            // result.map.sourceFile = url;
                        });
                        result.alphaMap.wrapS = three__WEBPACK_IMPORTED_MODULE_0__["RepeatWrapping"];
                        result.alphaMap.wrapT = three__WEBPACK_IMPORTED_MODULE_0__["RepeatWrapping"];
                        result.transparent = true;
                        result.alphaTest = 0.05;
                    }
                }
                return result;
            }, this);
            if (rwGeometry.RWExtension.CHUNK_SKIN) {
                var skinExtension = rwGeometry.RWExtension.CHUNK_SKIN;
                var indicesBuffer = new three__WEBPACK_IMPORTED_MODULE_0__["Float32BufferAttribute"](positionBuffer.count * 4, 4);
                var weightsBuffer = new three__WEBPACK_IMPORTED_MODULE_0__["Float32BufferAttribute"](positionBuffer.count * 4, 4);
                for (var index = 0; index < rwGeometry.numVertices; index++) {
                    newVertexIndices[index].forEach(function (newIndex) {
                        indicesBuffer.setXYZW(newIndex, skinExtension.vertexBoneIndices[index].x, skinExtension.vertexBoneIndices[index].y, skinExtension.vertexBoneIndices[index].z, skinExtension.vertexBoneIndices[index].w);
                        weightsBuffer.setXYZW(newIndex, skinExtension.vertexBoneWeights[index].x, skinExtension.vertexBoneWeights[index].y, skinExtension.vertexBoneWeights[index].z, skinExtension.vertexBoneWeights[index].w);
                    });
                }
                geometry.setAttribute('skinIndex', indicesBuffer);
                geometry.setAttribute('skinWeight', weightsBuffer);
            }
            meshes.push({ geometry: geometry, materials: materials });
        }, this);
        clump.RWAtomicList.forEach(function (atomic) {
            var geometry = meshes[atomic.geometryIndex].geometry;
            var materials = meshes[atomic.geometryIndex].materials;
            var nodelist = new Array(clump.RWFrameList.length);
            var nodeInfo = null;
            var parentNode = null;
            clump.RWFrameList.forEach(function (frame, i) {
                var rwFrame = frame.RWFrame;
                var bone = new three__WEBPACK_IMPORTED_MODULE_0__["Bone"]();
                bone.name = frame.RWExtension.CHUNK_FRAME;
                var transform = new three__WEBPACK_IMPORTED_MODULE_0__["Matrix4"]();
                transform.set(rwFrame.rotationMatrix[0], rwFrame.rotationMatrix[3], rwFrame.rotationMatrix[6], rwFrame.position[0], rwFrame.rotationMatrix[1], rwFrame.rotationMatrix[4], rwFrame.rotationMatrix[7], rwFrame.position[1], rwFrame.rotationMatrix[2], rwFrame.rotationMatrix[5], rwFrame.rotationMatrix[8], rwFrame.position[2], 0, 0, 0, 1);
                bone.applyMatrix4(transform);
                if (rwFrame.parentIndex >= 0)
                    nodelist[rwFrame.parentIndex].add(bone);
                var hAnim = frame.RWExtension.CHUNK_HANIM;
                if (hAnim) {
                    bone.nodeId = hAnim.nodeId;
                    bone.nodeIndex = i;
                    if (hAnim.numNodes > 0) {
                        parentNode = bone;
                        nodeInfo = hAnim.nodes.map(function (node, idx) {
                            return {
                                id: node.nodeId,
                                index: idx,
                                flags: node.flags,
                                frame: null
                            };
                        });
                    }
                }
                nodelist[i] = bone;
            });
            if (nodeInfo) {
                var bones = new Array(nodeInfo.length);
                function findUnattachedById(node, id) {
                    if (!node)
                        return null;
                    if (node.nodeId >= 0 && node.nodeId == id && getIndex(node) == -1)
                        return node;
                    return findUnattachedById(node.children[0], id) || findUnattachedById(nodelist[node.nodeIndex + 1], id);
                }
                function getIndex(node) {
                    for (var i = 0; i < nodeInfo.length; i++) {
                        if (nodeInfo[i].node == node)
                            return i;
                    }
                    return -1;
                }
                // attach by index
                for (var i = 0; i < nodeInfo.length; i++) {
                    nodeInfo[i].node = findUnattachedById(parentNode, nodeInfo[i].id);
                    bones[i] = nodeInfo[i].node;
                }
                meshes[atomic.geometryIndex].skeleton = new three__WEBPACK_IMPORTED_MODULE_0__["Skeleton"](bones);
            }
        });
        meshes.forEach(function (meshData) {
            var mesh;
            if (meshData.skeleton) {
                meshData.materials.forEach(function (material) {
                    material.skinning = true;
                });
                mesh = new three__WEBPACK_IMPORTED_MODULE_0__["SkinnedMesh"](meshData.geometry, meshData.materials);
                mesh.add(meshData.skeleton.bones[0]);
                mesh.bind(meshData.skeleton);
            }
            else {
                mesh = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](meshData.geometry, meshData.materials);
            }
            mesh.rotation.set(0, Math.PI, Math.PI / 2);
            group.add(mesh);
        });
        return group;
    }
}
showModel.ɵfac = function showModel_Factory(t) { return new (t || showModel)(); };
showModel.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: showModel, factory: showModel.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "QXFv":
/*!***********************************************************!*\
  !*** ./src/app/module/section/header/header.component.ts ***!
  \***********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services */ "J9tS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _helpers_safe_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_helpers/safe-html */ "hbwU");





const _c0 = ["dropdown"];
function HeaderComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Espace membre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_17_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_17_img_1_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.dropClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r2.user.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HeaderComponent_li_17_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_17_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.dropClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r3.user.svg), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function HeaderComponent_li_17_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cr\u00E9dit en compte");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Derni\u00E8re connexion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Hier \u00E0 16:20");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Forum");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Les messages post\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Mon profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Messagerie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Param\u00E8tre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Johson Ford");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Argent en total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "b", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "556 222 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Derni\u00E8re connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Aujourd'hui \u00E0 13:10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Level 30 (5/60)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.user.donut);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.user.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/user/", ctx_r4.user.username, "");
} }
function HeaderComponent_li_17_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_li_17_img_1_Template, 2, 1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_li_17_div_2_Template, 3, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_17_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "D\u00E9connexion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_li_17_div_5_Template, 60, 3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.user.avatar != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.user.avatar == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showDrop);
} }
class HeaderComponent {
    constructor(AccountService, router, UtilsService, renderer) {
        this.AccountService = AccountService;
        this.router = router;
        this.UtilsService = UtilsService;
        this.renderer = renderer;
        this.loadingSkeleton = false;
        this.getUser = null;
        this.showDrop = false;
        this.href = "";
        this.centerContent = ['register', 'login'];
        this.AccountService.user.subscribe(x => this.user = x);
        /*this.renderer.listen('window', 'click',(e:Event) => {
          if(this.showDrop == true) {
            if(e.target != this.dropdown) {
              this.showDrop = true;
            }
          }
        });*/
    }
    dropClick() {
        if (this.showDrop == false) {
            this.showDrop = true;
            //this.user.register = this.UtilsService.format_date(this.user.register);
        }
        else {
            this.showDrop = false;
        }
    }
    logout() {
        this.AccountService.logout();
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.loadingSkeleton = true;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["UtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dropdown = _t.first);
    } }, decls: 18, vars: 2, consts: [["routerLink", "./", "src", "./assets/img/logo.png", 1, "logo"], [1, "main"], [1, "navigation"], [1, "itemNav", "active"], ["routerLink", "/", 1, "navLink"], [1, "itemNav"], ["routerLink", "/forum", 1, "navLink"], ["routerLink", "/users", 1, "navLink"], ["routerLink", "/shop", 1, "navLink"], ["class", "itemNav user", 4, "ngIf"], ["class", "itemNav user logged", 4, "ngIf"], [1, "itemNav", "user"], ["routerLink", "/auth/login", 1, "navLink"], [1, "itemNav", "user", "logged"], ["class", "avatar", 3, "src", "click", 4, "ngIf"], ["class", "avatar avatarSvg", 3, "innerHTML", "click", 4, "ngIf"], ["href", "", 1, "navLink", 3, "click"], ["class", "navDropdown", 4, "ngIf"], [1, "avatar", 3, "src", "click"], ["clickdrop", ""], [1, "avatar", "avatarSvg", 3, "innerHTML", "click"], [1, "navDropdown"], ["dropdown", ""], [1, "userNav", "stats"], [1, "navShowStats"], [1, "--dropFlex"], ["src", "./assets/img/design/donut.png"], [1, "navList"], [1, "userNav", "navigate"], [3, "routerLink"], [1, "fad", "fa-user-circle"], ["routerLink", "/messaging"], [1, "fad", "fa-envelope"], ["routerLink", "/settings"], [1, "fad", "fa-sliders-h"], [1, "userNav", "characters"], [1, "nav_characterBox", 2, "background-image", "url('./assets/img/skin/1/2.png')"], [1, "nav_characterStats"], [1, "fad", "fa-sack-dollar"], [1, "showProgress"], [1, "progressLevel"], [1, "progressLevel", "--progressed", 2, "width", "30%"], ["href", "#", 1, "gestCharaLink"], [1, "fas", "fa-user-edit"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Accueil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Forum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Membres");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Boutique");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HeaderComponent_li_16_Template, 3, 0, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HeaderComponent_li_17_Template, 6, 3, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_helpers_safe_html__WEBPACK_IMPORTED_MODULE_4__["Safe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50Lmxlc3MifQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_services */ "J9tS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-loading-bar/core */ "lPP5");
/* harmony import */ var _module_section_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/section/header/header.component */ "QXFv");
/* harmony import */ var _module_section_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module/section/alert/alert.component */ "lm+o");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _module_section_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./module/section/footer/footer.component */ "YWMd");








function AppComponent_app_footer_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-footer");
} }
class AppComponent {
    constructor(accountService, router) {
        this.accountService = accountService;
        this.router = router;
        this.title = 'ls-review';
        this.show_footer = true;
        this.href = "";
        this.centerContent = ['messaging', 'register', 'login', 'settings', 'character'];
        this.accountService.user.subscribe(x => this.user = x);
        if (this.user) {
            this.accountService.connect(this.user);
        }
        this.router.events.subscribe((url) => {
            this.href = url.url;
            if (this.href != undefined) {
                const self = this;
                this.centerContent.forEach(function (item) {
                    if (self.href.includes(item)) {
                        self.show_footer = false;
                    }
                });
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 2, consts: [["color", "#ed4245", 3, "includeSpinner"], [4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-loading-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_app_footer_4_Template, 1, 0, "app-footer", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("includeSpinner", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show_footer);
    } }, directives: [_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_3__["LoadingBarComponent"], _module_section_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _module_section_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__["AlertComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _module_section_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50Lmxlc3MifQ== */", "@mainColor: #202225;\n\t@secondColor: #fff;"] });


/***/ }),

/***/ "Tkne":
/*!****************************************************!*\
  !*** ./src/app/web-gl/engine/showModel.service.ts ***!
  \****************************************************/
/*! exports provided: showModels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showModels", function() { return showModels; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "Womt");
/* harmony import */ var three_examples_jsm_helpers_RectAreaLightHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/helpers/RectAreaLightHelper.js */ "LcA8");
/* harmony import */ var three_examples_jsm_libs_dat_gui_module_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/libs/dat.gui.module.js */ "udgZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Loader */ "QO4U");





class showModels {
    constructor(ngZone, showModel) {
        this.ngZone = ngZone;
        this.showModel = showModel;
        this.lights = [];
        this.frameId = null;
    }
    ngOnDestroy() {
        if (this.frameId != null) {
            cancelAnimationFrame(this.frameId);
        }
    }
    createScene(canvas, models) {
        this.canvas = canvas.nativeElement;
        this.models = models;
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__["WebGLRenderer"]({
            canvas: this.canvas,
            alpha: true,
            antialias: true // smooth edges
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.clock = new three__WEBPACK_IMPORTED_MODULE_0__["Clock"]();
        // create the scene
        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__["Scene"]();
        this.camera = new three__WEBPACK_IMPORTED_MODULE_0__["PerspectiveCamera"](75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.set(2, 0.2, -1.5);
        this.camera.lookAt(-10, 0, 0);
        this.scene.add(this.camera);
        //const controls = new OrbitControls( this.camera, this.canvas);
        const spotLight = new three__WEBPACK_IMPORTED_MODULE_0__["SpotLight"](0xffffff, 1);
        spotLight.position.set(4.7, 2, 0);
        spotLight.angle = Math.PI / 5;
        spotLight.penumbra = 0.5;
        spotLight.decay = 2;
        spotLight.distance = 50;
        spotLight.castShadow = true;
        spotLight.shadow.mapSize.width = 512;
        spotLight.shadow.mapSize.height = 512;
        spotLight.shadow.camera.near = 10;
        spotLight.shadow.camera.far = 200;
        spotLight.shadow.focus = 1;
        this.scene.add(spotLight);
        const rectLight1 = new three__WEBPACK_IMPORTED_MODULE_0__["RectAreaLight"](0x202225, 10, 2, 3);
        rectLight1.position.set(-2, 0, 5);
        rectLight1.rotation.y = -Math.PI / 2;
        this.scene.add(rectLight1);
        const rectLight2 = new three__WEBPACK_IMPORTED_MODULE_0__["RectAreaLight"](0x202225, 10, 2, 3);
        rectLight2.position.set(-2, 0, 0);
        rectLight2.rotation.y = -Math.PI / 2;
        this.scene.add(rectLight2);
        const rectLight3 = new three__WEBPACK_IMPORTED_MODULE_0__["RectAreaLight"](0x202225, 10, 2, 3);
        rectLight3.position.set(-2, 0, -5);
        rectLight3.rotation.y = -Math.PI / 2;
        this.scene.add(rectLight3);
        this.scene.add(new three_examples_jsm_helpers_RectAreaLightHelper_js__WEBPACK_IMPORTED_MODULE_1__["RectAreaLightHelper"](rectLight1));
        this.scene.add(new three_examples_jsm_helpers_RectAreaLightHelper_js__WEBPACK_IMPORTED_MODULE_1__["RectAreaLightHelper"](rectLight2));
        this.scene.add(new three_examples_jsm_helpers_RectAreaLightHelper_js__WEBPACK_IMPORTED_MODULE_1__["RectAreaLightHelper"](rectLight3));
        for (var i = 0; i < 5; i++) {
            const roundPointGeo = new three__WEBPACK_IMPORTED_MODULE_0__["SphereGeometry"](0.5, 16, 8);
            const roundPoint = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](roundPointGeo, new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]({ color: 0xffffff }));
            roundPoint.scale.x = roundPoint.scale.y = roundPoint.scale.z = 0.03;
            //console.log(roundPoint.scale);
            let light = new three__WEBPACK_IMPORTED_MODULE_0__["PointLight"](0xffffff, 0.5, 2);
            this.lights.push(light);
            this.lights[i].add(roundPoint);
            this.scene.add(this.lights[i]);
        }
        const geoFloor = new three__WEBPACK_IMPORTED_MODULE_0__["BoxGeometry"](5, 0.3, 20);
        const matStdFloor = new three__WEBPACK_IMPORTED_MODULE_0__["MeshStandardMaterial"]({ color: 0x808080, roughness: 0.1, metalness: 0 });
        const mshStdFloor = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](geoFloor, matStdFloor);
        mshStdFloor.position.y = -1.2;
        this.scene.add(mshStdFloor);
        const geoWall = new three__WEBPACK_IMPORTED_MODULE_0__["BoxGeometry"](5, 0.3, 30);
        const matStdWall = new three__WEBPACK_IMPORTED_MODULE_0__["MeshStandardMaterial"]({ color: 0x4a4e54 });
        const mshStdWall = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](geoWall, matStdWall);
        mshStdWall.position.x = -5;
        mshStdWall.rotation.z = -Math.PI / 2;
        this.scene.add(mshStdWall);
    }
    setModel(skinModel) {
        const loader = this.showModel;
        this.scene.remove(this.model);
        loader.load(
        // resource URL
        './assets/models/skins/model/' + skinModel + '.dff', 
        // called when the resource is loaded
        (model) => {
            this.model = model;
            this.scene.add(this.model);
            this.model.position.y = 0;
            this.model.rotation.y = 1;
            //this.scene.add(this.model);
            const self = this;
            for (let i = 0; i < this.model.children[0].skeleton.bones.length; i++) {
                let name = this.model.children[0].skeleton.bones[i].name;
                if (name == 'Pelvis' || name == 'Spine' || name == 'Spine1' || name == 'Neck' || name == 'Head') {
                    this.model.children[0].skeleton.bones[i].name = '_' + name;
                }
                else {
                    this.model.children[0].skeleton.bones[i].name = name.replace(/\s/g, '_');
                }
                if (i >= 10 && i <= 13) {
                    this.model.children[0].skeleton.bones[i].name = '_' + this.model.children[0].skeleton.bones[i].name;
                }
                if (i >= 16 && i <= 19) {
                    this.model.children[0].skeleton.bones[i].name = '_' + this.model.children[0].skeleton.bones[i].name;
                }
                if (i >= 24) {
                    this.model.children[0].skeleton.bones[i].name = '_' + this.model.children[0].skeleton.bones[i].name;
                }
            }
            console.log(this.model);
            this.mixer = new three__WEBPACK_IMPORTED_MODULE_0__["AnimationMixer"](this.model);
            // instantiate a loader
            const loader = new three__WEBPACK_IMPORTED_MODULE_0__["AnimationLoader"]();
            // load a resource
            loader.load(
            // resource URL
            './assets/animation/chat.json', 
            // onLoad callback
            (animations) => {
                for (let i = 0; i < animations[0].tracks[0].values.length; i++) {
                    console.log(animations[0].tracks[0].values[i]);
                }
                //const action = this.mixer.clipAction( animations[0] ); // play the first animation
                //action.play();
            }, 
            // onProgress callback
            function (xhr) {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            }, 
            // onError callback
            function (err) {
                console.log('An error happened');
            });
            this.scene.add(this.model);
        }, 
        // called while loading is progressing
        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        }, 
        // called when loading has errors
        function (error) {
            console.log('An error happened');
        });
    }
    createPanel() {
        const panel = new three_examples_jsm_libs_dat_gui_module_js__WEBPACK_IMPORTED_MODULE_2__["GUI"]({ width: 310 });
        const folder3 = panel.addFolder("L clavicle");
        folder3.add(this.lights[0].position, 'x').min(-40).max(40).step(0.0000001);
        folder3.add(this.lights[0].position, 'y').min(-40).max(40).step(0.0000001);
        folder3.add(this.lights[0].position, 'z').min(-40).max(40).step(0.0000001);
    }
    animate() {
        // We have to run this outside angular zones,
        // because it could trigger heavy changeDetection cycles.
        this.ngZone.runOutsideAngular(() => {
            if (document.readyState !== 'loading') {
                this.render();
            }
            else {
                window.addEventListener('DOMContentLoaded', () => {
                    this.render();
                });
            }
            window.addEventListener('resize', () => {
                this.resize();
            });
        });
    }
    render() {
        this.frameId = requestAnimationFrame(() => {
            this.render();
        });
        if (this.model) {
            if (this.mixer) {
                const delta = this.clock.getDelta();
                this.mixer.update(delta);
            }
        }
        const time = Date.now() * 0.0005;
        this.lights[0].position.x = Math.sin(time * 0.7) * 0.5;
        this.lights[0].position.y = Math.cos(time * 0.3) * 1;
        this.lights[0].position.z = Math.cos(time * 0.5) * 0.5;
        this.lights[1].position.x = Math.sin(time * 0.5) * 0.5;
        this.lights[1].position.y = Math.sin(time * 0.7) * 1;
        this.lights[1].position.z = Math.cos(time * 0.3) * 0.5;
        this.lights[2].position.x = Math.sin(time * 0.3) * 0.5;
        this.lights[2].position.y = Math.cos(time * 0.7) * 1;
        this.lights[2].position.z = Math.sin(time * 0.5) * 0.5;
        this.lights[3].position.x = Math.sin(time * 0.5) * 0.5;
        this.lights[3].position.y = Math.cos(time * 0.3) * 1;
        this.lights[3].position.z = Math.sin(time * 0.7) * 0.5;
        this.lights[4].position.x = Math.cos(time * 0.7) * 0.5;
        this.lights[4].position.y = Math.sin(time * 0.5) * 1;
        this.lights[4].position.z = Math.cos(time * 0.3) * 0.5;
        this.renderer.render(this.scene, this.camera);
    }
    resize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    }
}
showModels.ɵfac = function showModels_Factory(t) { return new (t || showModels)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_Loader__WEBPACK_IMPORTED_MODULE_4__["showModel"])); };
showModels.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: showModels, factory: showModels.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "XgRA":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: AuthGuard, ErrorInterceptor, JwtInterceptor, FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "p3Fh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });

/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.interceptor */ "nSnL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_1__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt.interceptor */ "jfvi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__["JwtInterceptor"]; });

/* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fake-backend */ "ByK8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_3__["FakeBackendInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_3__["fakeBackendProvider"]; });







/***/ }),

/***/ "Y5L3":
/*!***********************************************!*\
  !*** ./src/app/module/shop/shop.component.ts ***!
  \***********************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ShopComponent {
    constructor() { }
    ngOnInit() {
    }
}
ShopComponent.ɵfac = function ShopComponent_Factory(t) { return new (t || ShopComponent)(); };
ShopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShopComponent, selectors: [["app-shop"]], decls: 170, vars: 0, consts: [[1, "shop_wrapper"], [1, "shopNav"], ["href", ""], [1, "fas", "fa-donate"], [1, "fas", "fa-store"], [1, "shopHeader"], [1, "_flexArea"], ["href", "#", 1, "purchaseButton"], [1, "price"], ["src", "./assets/img/design/donut.png"], ["src", "./assets/shop/storage/head/png-0.png", 1, "png"], [1, "shopBestArticle"], [2, "--article-background", "url('./assets/shop/storage/article/0.jpg')"], [1, "articleHover"], [1, "shopCatNav"], [1, "active"], [1, "fas", "fa-box-open"], [1, "fas", "fa-layer-group"], [1, "fas", "fa-tree"], [1, "fas", "fa-palette"], [1, "shopArticle"], [2, "--article-background", "url('./assets/shop/storage/article/1.jpg')"], [2, "--article-background", "url('./assets/shop/storage/article/2.jpg')"], [2, "--article-background", "url('./assets/shop/storage/article/3.jpg')"], [2, "--article-background", "url('./assets/shop/storage/article/4.jpg')"], [2, "--article-background", "url('./assets/shop/storage/article/5.png')"], [2, "--article-background", "url('./assets/shop/storage/article/6.webp')"]], template: function ShopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Recharger des donuts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Le march\u00E9 des donuts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Profitez du pack maison maintenant !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim nibh sit amet enim hendrerit, eu tempus turpis pulvinar. Duis turpis ex, hendrerit vel risus sed, vehicula mollis arcu. Aliquam tortor felis, convallis quis malesuada id, fringilla et eros. Pellentesque mattis varius ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean non arcu posuere, commodo lectus rutrum, venenatis augue. Nam vel elit auctor, laoreet nunc in, gravida tortor. Praesent volutpat tristique pellentesque. Proin ullamcorper sagittis leo. Nullam aliquet scelerisque metus, non posuere tortor elementum sed. Morbi ullamcorper malesuada lectus, vitae facilisis odio. Praesent ornare lacus tincidunt risus commodo lacinia. Cras quis quam sed neque blandit tempus. Etiam non quam imperdiet, rutrum libero eget, pellentesque mi. Aliquam erat volutpat. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Commander");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Prix :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " 20 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "article", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Un article pour la boutique");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim nibh sit amet enim hendrerit, eu tempus turpis pulvinar. Duis turpis ex, hendrerit vel risus sed, vehicula mollis arcu. Aliquam tortor felis, convallis quis malesuada id, fringilla et eros. Pellentesque mattis varius ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean non arcu posuere, commodo lectus rutrum, venenatis augue. Nam vel elit auctor, laoreet nunc in, gravida tortor. Praesent volutpat tristique pellentesque. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Commander");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "article", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Un article pour la boutique");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim nibh sit amet enim hendrerit, eu tempus turpis pulvinar. Duis turpis ex, hendrerit vel risus sed, vehicula mollis arcu. Aliquam tortor felis, convallis quis malesuada id, fringilla et eros. Pellentesque mattis varius ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean non arcu posuere, commodo lectus rutrum, venenatis augue. Nam vel elit auctor, laoreet nunc in, gravida tortor. Praesent volutpat tristique pellentesque. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Commander");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "article", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Un article pour la boutique");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim nibh sit amet enim hendrerit, eu tempus turpis pulvinar. Duis turpis ex, hendrerit vel risus sed, vehicula mollis arcu. Aliquam tortor felis, convallis quis malesuada id, fringilla et eros. Pellentesque mattis varius ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean non arcu posuere, commodo lectus rutrum, venenatis augue. Nam vel elit auctor, laoreet nunc in, gravida tortor. Praesent volutpat tristique pellentesque. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Commander");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "nav", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Les packs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Les Mapping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Les Objets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Les Skins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "section", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "article", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Test pour l'article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "30 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim nibh sit amet enim hendrerit, eu tempus turpis pulvinar. Duis turpis ex, hendrerit vel risus sed, vehicula mollis arcu. Aliquam tortor felis, convallis quis malesuada id, fringilla et eros. Pellentesque mattis varius ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean non arcu posuere, commodo lectus rutrum, venenatis augue. Nam vel elit auctor, laoreet nunc in, gravida tortor. Praesent volutpat tristique pellentesque. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Commander");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "article", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Test pour l'article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "30 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim nibh sit amet enim hendrerit, eu tempus turpis pulvinar. Duis turpis ex, hendrerit vel risus sed, vehicula mollis arcu. Aliquam tortor felis, convallis quis malesuada id, fringilla et eros. Pellentesque mattis varius ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean non arcu posuere, commodo lectus rutrum, venenatis augue. Nam vel elit auctor, laoreet nunc in, gravida tortor. Praesent volutpat tristique pellentesque. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Commander");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "article", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Test pour l'article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "30 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim nibh sit amet enim hendrerit, eu tempus turpis pulvinar. Duis turpis ex, hendrerit vel risus sed, vehicula mollis arcu. Aliquam tortor felis, convallis quis malesuada id, fringilla et eros. Pellentesque mattis varius ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean non arcu posuere, commodo lectus rutrum, venenatis augue. Nam vel elit auctor, laoreet nunc in, gravida tortor. Praesent volutpat tristique pellentesque. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Commander");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "article", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Test pour l'article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "30 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim nibh sit amet enim hendrerit, eu tempus turpis pulvinar. Duis turpis ex, hendrerit vel risus sed, vehicula mollis arcu. Aliquam tortor felis, convallis quis malesuada id, fringilla et eros. Pellentesque mattis varius ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean non arcu posuere, commodo lectus rutrum, venenatis augue. Nam vel elit auctor, laoreet nunc in, gravida tortor. Praesent volutpat tristique pellentesque. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Commander");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "article", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Test pour l'article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "30 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim nibh sit amet enim hendrerit, eu tempus turpis pulvinar. Duis turpis ex, hendrerit vel risus sed, vehicula mollis arcu. Aliquam tortor felis, convallis quis malesuada id, fringilla et eros. Pellentesque mattis varius ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean non arcu posuere, commodo lectus rutrum, venenatis augue. Nam vel elit auctor, laoreet nunc in, gravida tortor. Praesent volutpat tristique pellentesque. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Commander");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "article", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Test pour l'article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "30 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim nibh sit amet enim hendrerit, eu tempus turpis pulvinar. Duis turpis ex, hendrerit vel risus sed, vehicula mollis arcu. Aliquam tortor felis, convallis quis malesuada id, fringilla et eros. Pellentesque mattis varius ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean non arcu posuere, commodo lectus rutrum, venenatis augue. Nam vel elit auctor, laoreet nunc in, gravida tortor. Praesent volutpat tristique pellentesque. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Commander");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "article", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Test pour l'article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "30 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim nibh sit amet enim hendrerit, eu tempus turpis pulvinar. Duis turpis ex, hendrerit vel risus sed, vehicula mollis arcu. Aliquam tortor felis, convallis quis malesuada id, fringilla et eros. Pellentesque mattis varius ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean non arcu posuere, commodo lectus rutrum, venenatis augue. Nam vel elit auctor, laoreet nunc in, gravida tortor. Praesent volutpat tristique pellentesque. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Commander");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "article", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Test pour l'article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "30 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim nibh sit amet enim hendrerit, eu tempus turpis pulvinar. Duis turpis ex, hendrerit vel risus sed, vehicula mollis arcu. Aliquam tortor felis, convallis quis malesuada id, fringilla et eros. Pellentesque mattis varius ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean non arcu posuere, commodo lectus rutrum, venenatis augue. Nam vel elit auctor, laoreet nunc in, gravida tortor. Praesent volutpat tristique pellentesque. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Commander");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "article", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Test pour l'article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "30 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim nibh sit amet enim hendrerit, eu tempus turpis pulvinar. Duis turpis ex, hendrerit vel risus sed, vehicula mollis arcu. Aliquam tortor felis, convallis quis malesuada id, fringilla et eros. Pellentesque mattis varius ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean non arcu posuere, commodo lectus rutrum, venenatis augue. Nam vel elit auctor, laoreet nunc in, gravida tortor. Praesent volutpat tristique pellentesque. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Commander");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["/* Global var and function \n------------------*/\n/* Shop global \n------------------*/\nbody {\n  background-image: var(--shopBackground);\n  background-repeat: no-repeat;\n  background-position: center top;\n  background-size: 1300px;\n}\n.shop_wrapper {\n  position: relative;\n  top: 130px;\n  margin: 0 auto;\n  padding-left: 80px;\n}\n.shop_wrapper a.purchaseButton {\n  display: inline-block;\n  font-size: 15px;\n  text-decoration: none;\n  background: rgba(237, 66, 69, 0.5);\n  color: #fff;\n  padding: 5px 20px;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px, inset rgba(255, 255, 255, 0.2) 0px 1px 0px;\n  border-radius: 4px;\n}\narticle {\n  overflow: hidden;\n  background-image: var(--article-background);\n  background-repeat: no-repeat;\n  cursor: pointer;\n  background-size: cover;\n}\narticle .articleHover {\n  position: relative;\n  left: -9000px;\n  width: 100%;\n  height: 100%;\n  padding: 10px 10px 50px 10px;\n  background: rgba(32, 34, 37, 0.5);\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n  overflow-x: auto;\n  transition: left 300ms ease-in-out;\n}\narticle .articleHover h3 {\n  margin-bottom: 10px;\n  font-size: 25px;\n}\narticle .articleHover p {\n  font-size: 100%;\n  margin-bottom: 10px;\n}\narticle:hover .articleHover {\n  left: 0;\n}\n/* Shop navigation \n------------------*/\nnav.shopCatNav {\n  background: #2c2f33;\n  margin: 30px 10px;\n  padding: 5px;\n  text-align: center;\n  border: 1px solid rgba(183, 187, 192, 0.1);\n  border-radius: 30px;\n}\nnav.shopCatNav ul li {\n  margin: 0 40px;\n}\nnav.shopCatNav ul li a {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #808791;\n  font-weight: bold;\n  text-transform: uppercase;\n  font-family: Montserrat;\n  padding: 10px 30px;\n  border: 1px solid rgba(183, 187, 192, 0.02);\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);\n  background: #383b40 linear-gradient(160deg, #383b40, #43484e);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"@color1\", endColorstr=\"@color2\", GradientType=1);\n  border-radius: 30px;\n}\nnav.shopCatNav ul li a i {\n  margin-right: 10px;\n}\nnav.shopCatNav ul li.active a {\n  background: #eb2b2e;\n  color: #fff;\n}\nnav.shopNav {\n  position: fixed;\n  left: 0;\n  top: 70px;\n  width: 80px;\n  height: 100vh;\n  background: rgba(183, 187, 192, 0.2);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\nnav.shopNav ul {\n  position: absolute;\n  top: 40%;\n}\nnav.shopNav ul li a {\n  display: block;\n  text-align: center;\n  width: 100%;\n  color: #d9d9d9;\n  background: #ed4245;\n  padding: 5px;\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);\n}\nnav.shopNav ul li a span {\n  display: block;\n  text-transform: uppercase;\n  font-size: 12px;\n}\nnav.shopNav ul li a i {\n  font-size: 25px;\n  margin-bottom: 10px;\n}\n/* Shop section \n------------------*/\nsection.shopHeader {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n}\nsection.shopHeader img.png {\n  width: 500px;\n}\nsection.shopHeader h2 {\n  font-size: 30px;\n  margin-bottom: 10px;\n}\nsection.shopHeader a.purchaseButton {\n  margin: 10px 0;\n  font-size: 20px;\n  padding: 10px 50px;\n}\nsection.shopHeader span.price {\n  font-size: 30px;\n  margin-left: 20px;\n}\nsection.shopHeader span.price b {\n  text-transform: uppercase;\n  font-size: 20px;\n  color: #808080;\n}\nsection.shopHeader ._flexArea {\n  width: 50%;\n}\nsection.shopBestArticle {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(7, 1fr);\n  grid-gap: 5px;\n  height: 400px;\n  padding: 0 10px;\n}\nsection.shopBestArticle article {\n  grid-column: 3 / 5;\n  height: 100%;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px, inset rgba(255, 255, 255, 0.2) 0px 1px 0px;\n}\nsection.shopBestArticle article:first-child {\n  grid-column: 1 / 3;\n  grid-row: 1 / 8;\n}\nsection.shopBestArticle article:nth-child(2n) {\n  grid-row: 1 / 5;\n}\nsection.shopBestArticle article:nth-child(3n) {\n  grid-row: 5 / 8;\n}\nsection.shopArticle {\n  display: flex;\n  flex-flow: row wrap;\n  width: 100%;\n}\nsection.shopArticle article {\n  position: relative;\n  flex: auto;\n  margin: 5px;\n  width: 300px;\n  height: 300px;\n}\nsection.shopArticle article h3 {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  padding: 30px;\n  background: rgba(32, 34, 37, 0) linear-gradient(0deg, rgba(32, 34, 37, 0.9) 20%, rgba(32, 34, 37, 0) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"@color1\", endColorstr=\"@color2\", GradientType=1);\n}\nsection.shopArticle article span.price {\n  display: inline-block;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  padding: 10px;\n  font-size: 25px;\n  background: rgba(32, 34, 37, 0) linear-gradient(260deg, rgba(32, 34, 37, 0.9) 20%, rgba(32, 34, 37, 0) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"@color1\", endColorstr=\"@color2\", GradientType=1);\n}\nsection.shopArticle article span.price img {\n  width: 20px;\n}\nsection.shopArticle article:nth-child(even) {\n  width: 250px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3AuY29tcG9uZW50Lmxlc3MiLCIuLlxcLi5cXC4uXFx2YXJpYWJsZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO21CQUNtQjtBQUNuQjttQkFDbUI7QUFJbkI7RUFDQyx1Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSx1QkFBQTtBQUZEO0FBS0E7RUFDQyxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFIRDtBQURBO0VBTUUscUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQ3NDRSxrQ0FBQTtFQUNBLDBCQUFBO0VBNkJILHNGQUFBO0VBbENBLGtCQUFBO0FEN0JEO0FBRUE7RUFDQyxnQkFBQTtFQUNBLDJDQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VDbURHLHNCQUFBO0FEL0NKO0FBUkE7RUFPRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsaUNBQUE7RUNtQkUsa0NBQUE7RUFDQSwwQkFBQTtFRGxCRixnQkFBQTtFQzBCRCxrQ0FBQTtBRGhCRDtBQXhCQTtFQWlCRyxtQkFBQTtFQUNBLGVBQUE7QUFVSDtBQTVCQTtFQXFCRyxlQUFBO0VBQ0EsbUJBQUE7QUFVSDtBQVBDO0VBRUUsT0FBQTtBQVFIO0FBQ0E7bUJBQ21CO0FBRmxCO0VBQ0MsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VDYkQsbUJBQUE7QURtQkQ7QUFYQztFQVNHLGNBQUE7QUFLSjtBQWRDO0VBV0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtFQzFDRyw0Q0FBQTtFQWZQLDZEQUFBO0VBQ0Esa0hBQUE7RUE2QkEsbUJBQUE7QUR5Q0Q7QUFqQ0M7RUF3Qkssa0JBQUE7QUFZTjtBQVRJO0VBRUUsbUJBQUE7RUFDQSxXQUFBO0FBVU47QUFKQztFQUNDLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUM5Q0Usa0NBQUE7RUFDQSwwQkFBQTtBRHFESjtBQWRDO0VBU0Usa0JBQUE7RUFDQSxRQUFBO0FBUUg7QUFsQkM7RUFhSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQzdFRyw0Q0FBQTtBRHVGUjtBQTVCQztFQXFCSyxjQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBVU47QUFqQ0M7RUEwQkssZUFBQTtFQUNBLG1CQUFBO0FBVU47QUFDQTttQkFDbUI7QUFEbEI7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FBR0Y7QUFOQztFQUtFLFlBQUE7QUFJSDtBQVRDO0VBUUUsZUFBQTtFQUNBLG1CQUFBO0FBSUg7QUFiQztFQVlFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFJSDtBQWxCQztFQWlCRSxlQUFBO0VBQ0EsaUJBQUE7QUFJSDtBQXRCQztFQW9CRyx5QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBS0o7QUEzQkM7RUEwQkUsVUFBQTtBQUlIO0FBREM7RUFDQyxhQUFBO0VBQ0EscUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUdGO0FBVEM7RUFRUSxrQkFBQTtFQUNBLFlBQUE7RUN0RlIsc0ZBQUE7QUQ2RkQ7QUFMUztFQUNMLGtCQUFBO0VBQ0EsZUFBQTtBQU9KO0FBTFM7RUFDQyxlQUFBO0FBT1Y7QUFMUztFQUNDLGVBQUE7QUFPVjtBQUhDO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUtGO0FBUkM7RUFLRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFNSDtBQWZDO0VBV0csa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUNsTEgsMEdBQUE7RUFDQSxrSEFBQTtBRDRMRDtBQXpCQztFQWtCRyxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQzNMSCw0R0FBQTtFQUNBLGtIQUFBO0FEd01EO0FBckNDO0VBMEJJLFdBQUE7QUFjTDtBQVhHO0VBQ0MsWUFBQTtBQWFKIiwiZmlsZSI6InNob3AuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHbG9iYWwgdmFyIGFuZCBmdW5jdGlvbiBcbi0tLS0tLS0tLS0tLS0tLS0tLSovXG5AaW1wb3J0IChyZWZlcmVuY2UpIFwiLi4vLi4vLi4vc3R5bGVzLmxlc3NcIjtcbkBhc3NldHNGcm9tSGVyZTogXCIuLi8uQHtwYXRoQXNzZXRzfVwiO1xuXG4vKiBTaG9wIGdsb2JhbCBcbi0tLS0tLS0tLS0tLS0tLS0tLSovXG5ib2R5IHtcblx0YmFja2dyb3VuZC1pbWFnZTogdmFyKC0tc2hvcEJhY2tncm91bmQpO1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuXHRiYWNrZ3JvdW5kLXNpemU6IDEzMDBweDtcbn1cblxuLnNob3Bfd3JhcHBlciB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dG9wOiAxMzBweDtcblx0bWFyZ2luOiAwIGF1dG87XG5cdHBhZGRpbmctbGVmdDogODBweDtcblx0YS5wdXJjaGFzZUJ1dHRvbiB7XG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdGZvbnQtc2l6ZTogMTVweDtcblx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0YmFja2dyb3VuZDogZmFkZShAYnV0dG9uQ29sb3JQcmltLCA1MCk7XG5cdFx0Y29sb3I6IEBzZWNvbmRDb2xvcjtcblx0XHRwYWRkaW5nOiA1cHggMjBweDtcblx0XHQuYmFja2JsdXIoNHB4KTtcblx0XHQuc2hhZG93LWdsb3NzKCk7XG5cdFx0LmJvcmRlcnJhZGl1cyg0cHgpO1xuXHR9XG59XG5cbmFydGljbGUge1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1hcnRpY2xlLWJhY2tncm91bmQpO1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdC5jb3ZlcigpO1xuXHQuYXJ0aWNsZUhvdmVyIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0bGVmdDogLTkwMDBweDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0cGFkZGluZzogMTBweCAxMHB4IDUwcHggMTBweDtcblx0XHRiYWNrZ3JvdW5kOiBmYWRlKEBtYWluQ29sb3IsIDUwKTtcblx0XHQuYmFja2JsdXIoNnB4KTtcblx0XHRvdmVyZmxvdy14OiBhdXRvO1xuXHRcdC50cmFuc2l0aW9uKGxlZnQsIDMwMG1zLCBlYXNlLWluLW91dCk7XG5cdFx0aDMge1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0XHRcdGZvbnQtc2l6ZTogMjVweDtcblx0XHR9XG5cdFx0cCB7XG5cdFx0XHRmb250LXNpemU6ICAxMDAlO1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0XHR9XG5cdH1cblx0Jjpob3ZlciB7XG5cdFx0LmFydGljbGVIb3ZlciB7XG5cdFx0XHRsZWZ0OiAwO1xuXHRcdH1cblx0fVxufVxuXG4vKiBTaG9wIG5hdmlnYXRpb24gXG4tLS0tLS0tLS0tLS0tLS0tLS0qL1xubmF2IHtcblx0Ji5zaG9wQ2F0TmF2IHtcblx0XHRiYWNrZ3JvdW5kOiBsaWdodGVuKEBtYWluQ29sb3IsIDUpO1xuXHRcdG1hcmdpbjogMzBweCAxMHB4O1xuXHRcdHBhZGRpbmc6IDVweDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgZmFkZShsaWdodGVuKEBtYWluQ29sb3IsIDYwKSwgMTApO1xuXHRcdC5ib3JkZXJyYWRpdXMoMzBweCk7XG5cdFx0dWwge1xuXHRcdFx0bGkge1xuXHRcdFx0XHRtYXJnaW46IDAgNDBweDtcblx0XHRcdFx0YSB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRjb2xvcjogbGlnaHRlbihAbWFpbkNvbG9yLCA0MCk7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0XHRmb250LWZhbWlseTogTW9udHNlcnJhdDtcblx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4IDMwcHg7XG5cdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgZmFkZShsaWdodGVuKEBtYWluQ29sb3IsIDYwKSwgMik7XG5cdFx0XHRcdFx0LmJveC1zaGFkb3coMCAwIDZweCByZ2JhKDAsMCwwLDAuMiksIHRydWUpO1xuXHRcdFx0XHRcdC5ncmFkaWVudExpbmVhcihsaWdodGVuKEBtYWluQ29sb3IsIDEwKSwgMTYwZGVnLCBsaWdodGVuKEBtYWluQ29sb3IsIDEwKSwgbGlnaHRlbihAbWFpbkNvbG9yLCAxNSkpO1xuXHRcdFx0XHRcdC5ib3JkZXJyYWRpdXMoMzBweCk7XG5cdFx0XHRcdFx0aSB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdCYuYWN0aXZlIHtcblx0XHRcdFx0XHRhIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IGRhcmtlbihAYnV0dG9uQ29sb3JQcmltLCA1KTtcblx0XHRcdFx0XHRcdGNvbG9yOiBAc2Vjb25kQ29sb3I7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdCYuc2hvcE5hdiB7XG5cdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdGxlZnQ6IDA7XG5cdFx0dG9wOiA3MHB4O1xuXHRcdHdpZHRoOiA4MHB4O1xuXHRcdGhlaWdodDogMTAwdmg7XG5cdFx0YmFja2dyb3VuZDogZmFkZShsaWdodGVuKEBtYWluQ29sb3IsIDYwKSwgMjApO1xuXHRcdC5iYWNrYmx1cig0cHgpO1xuXHRcdHVsIHtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHRvcDogNDAlO1xuXHRcdFx0bGkge1xuXHRcdFx0XHRhIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0Y29sb3I6IGRhcmtlbihAc2Vjb25kQ29sb3IsIDE1KTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBAYnV0dG9uQ29sb3JQcmltO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDVweDtcblx0XHRcdFx0XHQuYm94LXNoYWRvdygwIDAgNnB4IHJnYmEoMCwwLDAsMC41KSwgdHJ1ZSk7XG5cdFx0XHRcdFx0c3BhbiB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGkge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyNXB4O1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLyogU2hvcCBzZWN0aW9uIFxuLS0tLS0tLS0tLS0tLS0tLS0tKi9cbnNlY3Rpb24ge1xuXHQmLnNob3BIZWFkZXIge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0aW1nLnBuZyB7XG5cdFx0XHR3aWR0aDogNTAwcHg7XG5cdFx0fVxuXHRcdGgyIHtcblx0XHRcdGZvbnQtc2l6ZTogMzBweDtcblx0XHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdFx0fVxuXHRcdGEucHVyY2hhc2VCdXR0b24ge1xuXHRcdFx0bWFyZ2luOiAxMHB4IDA7XG5cdFx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0XHRwYWRkaW5nOiAxMHB4IDUwcHg7XG5cdFx0fVxuXHRcdHNwYW4ucHJpY2Uge1xuXHRcdFx0Zm9udC1zaXplOiAzMHB4O1xuXHRcdFx0bWFyZ2luLWxlZnQ6IDIwcHg7XG5cdFx0XHRiIHtcblx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdFx0XHRjb2xvcjogZGFya2VuKEBzZWNvbmRDb2xvciwgNTApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQuX2ZsZXhBcmVhIHtcblx0XHRcdHdpZHRoOiA1MCU7XG5cdFx0fVxuXHR9XG5cdCYuc2hvcEJlc3RBcnRpY2xlIHtcblx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG5cdFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNywgMWZyKTtcblx0XHRncmlkLWdhcDogNXB4O1xuXHRcdGhlaWdodDogNDAwcHg7XG5cdFx0cGFkZGluZzogMCAxMHB4O1xuICAgICAgICBhcnRpY2xlIHtcbiAgICAgICAgXHRncmlkLWNvbHVtbjogMyBlKFwiL1wiKSA1O1xuICAgICAgICBcdGhlaWdodDogMTAwJTtcbiAgICAgICAgXHQuc2hhZG93LWdsb3NzKCk7XG4gICAgICAgIFx0JjpmaXJzdC1jaGlsZCB7XG5cdFx0XHRcdGdyaWQtY29sdW1uOiAxIGUoXCIvXCIpIDM7XG5cdFx0XHRcdGdyaWQtcm93OiAxIGUoXCIvXCIpIDg7XG4gICAgICAgIFx0fVxuICAgICAgICBcdCY6bnRoLWNoaWxkKDJuKSB7XG4gICAgICAgIFx0XHRncmlkLXJvdzogMSBlKFwiL1wiKSA1O1xuICAgICAgICBcdH1cbiAgICAgICAgXHQmOm50aC1jaGlsZCgzbikge1xuICAgICAgICBcdFx0Z3JpZC1yb3c6IDUgZShcIi9cIikgODtcbiAgICAgICAgXHR9XG4gICAgICAgIH1cblx0fVxuXHQmLnNob3BBcnRpY2xlIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZmxvdzogcm93IHdyYXA7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0YXJ0aWNsZSB7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRmbGV4OiBhdXRvO1xuXHRcdFx0bWFyZ2luOiA1cHg7XG5cdFx0XHR3aWR0aDogMzAwcHg7XG5cdFx0XHRoZWlnaHQ6IDMwMHB4O1xuXHRcdFx0aDMge1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdGJvdHRvbTogMDtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdHBhZGRpbmc6IDMwcHg7XG5cdFx0XHRcdC5ncmFkaWVudExpbmVhcihmYWRlKEBtYWluQ29sb3IsIDApLCAwZGVnLCBmYWRlKEBtYWluQ29sb3IsIDkwKSAyMCUsIGZhZGUoQG1haW5Db2xvciwgMCkgMTAwJSk7XG5cdFx0XHR9XG5cdFx0XHRzcGFuLnByaWNlIHtcblx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdHRvcDogMHB4O1xuXHRcdFx0XHRyaWdodDogMHB4O1xuXHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdFx0XHRmb250LXNpemU6IDI1cHg7XG5cdFx0XHRcdC5ncmFkaWVudExpbmVhcihmYWRlKEBtYWluQ29sb3IsIDApLCAyNjBkZWcsIGZhZGUoQG1haW5Db2xvciwgOTApIDIwJSwgZmFkZShAbWFpbkNvbG9yLCAwKSAxMDAlKTtcblx0XHRcdFx0aW1nIHtcblx0XHRcdFx0XHR3aWR0aDogMjBweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0JjpudGgtY2hpbGQoZXZlbikge1xuXHRcdFx0XHR3aWR0aDogMjUwcHg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59IiwiLyogVmFycyBcbi0tLS0tLS0tLS0tLS0tLS0tLSovXG5AcGF0aEFzc2V0czogXCIuL2Fzc2V0c1wiO1xuQGZhLWZvbnQtcGF0aDogXCJAe3BhdGhBc3NldHN9L2ljb24vd2ViZm9udHNcIjtcbkBwYXRoRm9udDogXCJAe3BhdGhBc3NldHN9L2ZvbnRzXCI7XG5cbkBtYWluQ29sb3I6ICMyMDIyMjU7XG5Ac2Vjb25kQ29sb3I6ICNmZmY7XG5cbkBidXR0b25Db2xvclByaW06ICNlZDQyNDU7XG5AbGlua0NvbG9yUHJpbTogIzM0ODRlNTtcblxuQGRvbmF0b3JDb2xvcjogIzFkOGFlMjtcblxuQG1heC13aWR0aDogMjUwMHB4O1xuQG1heC13aWR0aC1jb250ZW50OiAxNTAwcHg7XG5AYmxpbmtDb2xvcjogIzM4YTUxNztcblxuLyogRXh0ZXJuYWwgc3R5bGVzaGVldCBcbi0tLS0tLS0tLS0tLS0tLS0tLSovXG4vL0BpbXBvcnQgXCJAe3BhdGhGb250fS9pY29uL2FsbC5jc3NcIjtcblxuXG5cbi8qIENvcmUgZnVuY3Rpb25zIFxuLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5ncmFkaWVudExpbmVhcihAYmFja2dyb3VuZCwgQGRlZywgQGNvbG9yMSwgQGNvbG9yMikge1xuXHRiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZCAtbW96LWxpbmVhci1ncmFkaWVudChAZGVnLCBAY29sb3IxLCBAY29sb3IyKTtcblx0YmFja2dyb3VuZDogQGJhY2tncm91bmQgLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoQGRlZywgQGNvbG9yMSwgQGNvbG9yMik7XG5cdGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kIGxpbmVhci1ncmFkaWVudChAZGVnLCBAY29sb3IxLCBAY29sb3IyKTtcblx0ZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj1cIkBjb2xvcjFcIixlbmRDb2xvcnN0cj1cIkBjb2xvcjJcIixHcmFkaWVudFR5cGU9MSk7XG59XG5cbi5ncmFkaWVudExpbmVhckltZyhAYmFja2dyb3VuZCwgQGRlZywgQGNvbG9yMSwgQGNvbG9yMiwgQHVybCkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBiYWNrZ3JvdW5kO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChAdXJsKSwgLW1vei1saW5lYXItZ3JhZGllbnQoQGRlZywgQGNvbG9yMSwgQGNvbG9yMik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKEB1cmwpLCAtd2Via2l0LWxpbmVhci1ncmFkaWVudChAZGVnLCBAY29sb3IxLCBAY29sb3IyKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoQHVybCksIGxpbmVhci1ncmFkaWVudChAZGVnLCBAY29sb3IxLCBAY29sb3IyKTtcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPVwiQGNvbG9yMVwiLGVuZENvbG9yc3RyPVwiQGNvbG9yMlwiLEdyYWRpZW50VHlwZT0xKTtcbn1cblxuLmJveC1zaGFkb3coQHNoYWRvdywgQGluc2V0OmZhbHNlKSB7XG4gICAgJiB3aGVuIChAaW5zZXQgPSB0cnVlKSB7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzppbnNldCBAc2hhZG93O1xuICAgICAgICBib3gtc2hhZG93Omluc2V0IEBzaGFkb3c7XG4gICAgfVxuICAgICYgd2hlbiAoQGluc2V0ID0gZmFsc2UpIHtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBAc2hhZG93O1xuICAgICAgICBib3gtc2hhZG93OiBAc2hhZG93O1xuICAgIH1cbn1cblxuLmJveC1zaXppbmcoQHBhcmFtKSB7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBAcGFyYW07XG4gICAgYm94LXNpemluZzogQHBhcmFtO1xufVxuXG4uYm9yZGVycmFkaXVzKEBkZWdyZWUpIHtcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiBAZGVncmVlO1xuXHRib3JkZXItcmFkaXVzOiBAZGVncmVlO1xufVxuXG4uYmFja2JsdXIoQGJsdXIpIHtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cihAYmx1cik7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKEBibHVyKTtcbn1cblxuLnRyYW5zaXRpb24oQHR5cGUsIEB0aW1lLCBAZWFzaW5nKSB7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogQHR5cGUgQHRpbWUgQGVhc2luZztcblx0LW1vei10cmFuc2l0aW9uOiBAdHlwZSBAdGltZSBAZWFzaW5nO1xuXHQtbXMtdHJhbnNpdGlvbjogQHR5cGUgQHRpbWUgQGVhc2luZztcblx0LW8tdHJhbnNpdGlvbjogQHR5cGUgQHRpbWUgQGVhc2luZztcblx0dHJhbnNpdGlvbjogQHR5cGUgQHRpbWUgQGVhc2luZztcbn1cblxuLnRyYW5zZm9ybShAdHlwZSkge1xuICAgIC1tb3otdHJhbnNmb3JtOiBAdHlwZTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogQHR5cGU7XG4gICAgLW8tdHJhbnNmb3JtOiBAdHlwZTtcbiAgICAtbXMtdHJhbnNmb3JtOiBAdHlwZTtcbiAgICB0cmFuc2Zvcm06IEB0eXBlO1xufVxuXG4uY292ZXIge1xuXHQtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnNoYWRvdy1nbG9zcyB7XG5cdC1tb3otYm94LXNoYWRvdzogcmdiYSgwLDAsMCwwLjEpIDBweCAxcHggM3B4LCBpbnNldCByZ2JhKDI1NSwyNTUsMjU1LDAuMikgMHB4IDFweCAwcHg7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogcmdiYSgwLDAsMCwwLjEpIDBweCAxcHggM3B4LCBpbnNldCByZ2JhKDI1NSwyNTUsMjU1LDAuMikgMHB4IDFweCAwcHg7XG5cdGJveC1zaGFkb3c6IHJnYmEoMCwwLDAsMC4xKSAwcHggMXB4IDNweCwgaW5zZXQgcmdiYSgyNTUsMjU1LDI1NSwwLjIpIDBweCAxcHggMHB4O1xufVxuXG4uYnV0dG9uQ1NTIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWRlY29yYXRpb246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMjBweCAwO1xuICAgIGJhY2tncm91bmQ6IGZhZGUoQGJ1dHRvbkNvbG9yUHJpbSwgMjAlKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGVuKEBidXR0b25Db2xvclByaW0sIDEwKTtcbiAgICBjb2xvcjogQHNlY29uZENvbG9yO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAuYmFja2JsdXIoNHB4KTtcbiAgICAudHJhbnNpdGlvbihiYWNrZ3JvdW5kLCAzMDBtcywgZWFzZS1pbi1vdXQpO1xuICAgIC5ib3JkZXJyYWRpdXMoM3B4KTtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogZmFkZShAYnV0dG9uQ29sb3JQcmltLCA1MCUpO1xuICAgIH1cbn0iXX0= */", "\n\t:root {\n\t\t--shopBackground: url('./assets/shop/storage/head/0.png');\n\t}\n"], encapsulation: 2 });


/***/ }),

/***/ "YWMd":
/*!***********************************************************!*\
  !*** ./src/app/module/section/footer/footer.component.ts ***!
  \***********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 33, vars: 0, consts: [["src", "./assets/img/logo.png"], [1, "copyright"], ["href", "#"], ["href", ""]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "A new place to roleplay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Nous sommes un serveur sur la platforme multi-joueur SA:MP, bas\u00E9 sur Grand Theft Auto San Andreas. los-santos.review et son contenu ne sont pas affili\u00E9s \u00E0 Rockstar Games, Rockstar North ou Take-Two Interactive Software Inc. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00A9 2021-2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Los Santos:Review - Tous droits r\u00E9serv\u00E9s.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Lien utile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Forum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Boutique");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "R\u00E9seau social IC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Termes et conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "contact@los-santos.review");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50Lmxlc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_helpers */ "XgRA");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _module_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./module/home/home.component */ "deic");
/* harmony import */ var _module_section_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./module/section/header/header.component */ "QXFv");
/* harmony import */ var _module_section_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./module/section/footer/footer.component */ "YWMd");
/* harmony import */ var _module_section_alert_alert_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./module/section/alert/alert.component */ "lm+o");
/* harmony import */ var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-loading-bar/router */ "F34d");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared.module */ "d2mR");
/* harmony import */ var _module_shop_shop_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./module/shop/shop.component */ "Y5L3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_5__["JwtInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_5__["ErrorInterceptor"], multi: true },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_11__["LoadingBarRouterModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_12__["sharedModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _module_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _module_section_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
        _module_section_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
        _module_section_alert_alert_component__WEBPACK_IMPORTED_MODULE_10__["AlertComponent"],
        _module_shop_shop_component__WEBPACK_IMPORTED_MODULE_13__["ShopComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_11__["LoadingBarRouterModule"],
        _shared_module__WEBPACK_IMPORTED_MODULE_12__["sharedModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]] }); })();


/***/ }),

/***/ "aEBj":
/*!***********************************************************!*\
  !*** ./src/app/web-gl/engine/showModelAccount.service.ts ***!
  \***********************************************************/
/*! exports provided: showModelsAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showModelsAccount", function() { return showModelsAccount; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "Womt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loader */ "QO4U");



class showModelsAccount {
    constructor(ngZone, showModel) {
        this.ngZone = ngZone;
        this.showModel = showModel;
        this.lights = [];
        this.frameId = null;
    }
    ngOnDestroy() {
        if (this.frameId != null) {
            cancelAnimationFrame(this.frameId);
        }
    }
    createScene(canvas, models) {
        this.canvas = canvas.nativeElement;
        this.models = models;
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__["WebGLRenderer"]({
            canvas: this.canvas,
            alpha: true,
            antialias: true // smooth edges
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.clock = new three__WEBPACK_IMPORTED_MODULE_0__["Clock"]();
        // create the scene
        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__["Scene"]();
        this.camera = new three__WEBPACK_IMPORTED_MODULE_0__["PerspectiveCamera"](75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.set(1.5, 0.5, 0);
        this.camera.lookAt(0, 0, 0);
        this.scene.add(this.camera);
        //const controls = new OrbitControls( this.camera, this.canvas);
        const spotLight = new three__WEBPACK_IMPORTED_MODULE_0__["SpotLight"](0xffffff, 1);
        spotLight.position.set(9.7, 2, 0);
        spotLight.angle = Math.PI / 5;
        spotLight.penumbra = 0.5;
        spotLight.decay = 2;
        spotLight.distance = 350;
        spotLight.castShadow = true;
        spotLight.shadow.mapSize.width = 512;
        spotLight.shadow.mapSize.height = 512;
        spotLight.shadow.camera.near = 10;
        spotLight.shadow.camera.far = 200;
        spotLight.shadow.focus = 1;
        this.scene.add(spotLight);
        for (var i = 0; i < 5; i++) {
            const roundPointGeo = new three__WEBPACK_IMPORTED_MODULE_0__["SphereGeometry"](0.5, 16, 8);
            const roundPoint = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](roundPointGeo, new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]({ color: 0xffffff }));
            roundPoint.scale.x = roundPoint.scale.y = roundPoint.scale.z = 0.03;
            //console.log(roundPoint.scale);
            let light = new three__WEBPACK_IMPORTED_MODULE_0__["PointLight"](0xffffff, 0.5, 2);
            this.lights.push(light);
            this.lights[i].add(roundPoint);
            this.scene.add(this.lights[i]);
        }
        const geoWall = new three__WEBPACK_IMPORTED_MODULE_0__["BoxGeometry"](20, 0.3, 5);
        const matStdWall = new three__WEBPACK_IMPORTED_MODULE_0__["MeshPhongMaterial"]({ color: 0xed4245, transparent: true, opacity: 0.5 });
        const mshStdWall = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](geoWall, matStdWall);
        mshStdWall.position.x = -5;
        mshStdWall.rotation.z = -Math.PI / 2;
        this.scene.add(mshStdWall);
        const loader = this.showModel;
        loader.load(
        // resource URL
        './assets/models/skins/andre/andre.dff', 
        // called when the resource is loaded
        (model) => {
            this.model = model;
            this.model.position.y = -0.2;
            this.scene.add(this.model);
        }, 
        // called while loading is progressing
        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        }, 
        // called when loading has errors
        function (error) {
            console.log('An error happened');
        });
    }
    animate() {
        // We have to run this outside angular zones,
        // because it could trigger heavy changeDetection cycles.
        this.ngZone.runOutsideAngular(() => {
            if (document.readyState !== 'loading') {
                this.render();
            }
            else {
                window.addEventListener('DOMContentLoaded', () => {
                    this.render();
                });
            }
            window.addEventListener('resize', () => {
                this.resize();
            });
        });
    }
    render() {
        this.frameId = requestAnimationFrame(() => {
            this.render();
        });
        const time = Date.now() * 0.0005;
        this.lights[0].position.x = Math.sin(time * 0.7) * 0.5;
        this.lights[0].position.y = Math.cos(time * 0.3) * 1;
        this.lights[0].position.z = Math.cos(time * 0.5) * 0.5;
        this.lights[1].position.x = Math.sin(time * 0.5) * 0.5;
        this.lights[1].position.y = Math.sin(time * 0.7) * 1;
        this.lights[1].position.z = Math.cos(time * 0.3) * 0.5;
        this.lights[2].position.x = Math.sin(time * 0.3) * 0.5;
        this.lights[2].position.y = Math.cos(time * 0.7) * 1;
        this.lights[2].position.z = Math.sin(time * 0.5) * 0.5;
        this.lights[3].position.x = Math.sin(time * 0.5) * 0.5;
        this.lights[3].position.y = Math.cos(time * 0.3) * 1;
        this.lights[3].position.z = Math.sin(time * 0.7) * 0.5;
        this.lights[4].position.x = Math.cos(time * 0.7) * 0.5;
        this.lights[4].position.y = Math.sin(time * 0.5) * 1;
        this.lights[4].position.z = Math.cos(time * 0.3) * 0.5;
        this.renderer.render(this.scene, this.camera);
    }
    resize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    }
}
showModelsAccount.ɵfac = function showModelsAccount_Factory(t) { return new (t || showModelsAccount)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_Loader__WEBPACK_IMPORTED_MODULE_2__["showModel"])); };
showModelsAccount.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: showModelsAccount, factory: showModelsAccount.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "bQw+":
/*!****************************************************!*\
  !*** ./src/app/web-gl/engine/engineGta.service.ts ***!
  \****************************************************/
/*! exports provided: EngineServiceGta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineServiceGta", function() { return EngineServiceGta; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "Womt");
/* harmony import */ var three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader.js */ "NK00");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class EngineServiceGta {
    constructor(ngZone) {
        this.ngZone = ngZone;
        this.frameId = null;
    }
    ngOnDestroy() {
        if (this.frameId != null) {
            cancelAnimationFrame(this.frameId);
        }
    }
    createScene(canvas, models) {
        this.canvas = canvas.nativeElement;
        this.models = models;
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__["WebGLRenderer"]({
            canvas: this.canvas,
            alpha: true,
            antialias: true // smooth edges
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.clock = new three__WEBPACK_IMPORTED_MODULE_0__["Clock"]();
        // create the scene
        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__["Scene"]();
        this.camera = new three__WEBPACK_IMPORTED_MODULE_0__["PerspectiveCamera"](75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.set(2, 1, 0.5);
        this.camera.rotation.x = 0;
        this.camera.rotation.y = 2;
        this.camera.rotation.z = 0;
        this.scene.add(this.camera);
        //const controls = new OrbitControls( this.camera, this.canvas);
        // soft white light
        const light = new three__WEBPACK_IMPORTED_MODULE_0__["PointLight"](0xffffff, 3, 500);
        light.position.set(1, 0, 0);
        this.scene.add(light);
        let testscene = this.scene;
        const loader = new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_1__["GLTFLoader"]();
        loader.load(
        // resource URL
        './assets/models/gta/scene.gltf', 
        // called when the resource is loaded
        (gltf) => {
            gltf.scene.position.z = 0;
            gltf.scene.position.x = 0;
            gltf.scene.position.y = 0;
            this.model = gltf.scene;
            if (this.model) {
                this.model.rotation.y += 1.5;
            }
            //gltf.scene.children[1].skeleton.bones.splice(31, 1);
            const animations = gltf.animations;
            this.mixer = new three__WEBPACK_IMPORTED_MODULE_0__["AnimationMixer"](this.model);
            const action = this.mixer.clipAction(animations[0]); // play the first animation
            action.play();
            testscene.add(this.model);
        }, 
        // called while loading is progressing
        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        }, 
        // called when loading has errors
        function (error) {
            console.log('An error happened');
        });
    }
    animate() {
        // We have to run this outside angular zones,
        // because it could trigger heavy changeDetection cycles.
        this.ngZone.runOutsideAngular(() => {
            if (document.readyState !== 'loading') {
                this.render();
            }
            else {
                window.addEventListener('DOMContentLoaded', () => {
                    this.render();
                });
            }
            window.addEventListener('resize', () => {
                this.resize();
            });
        });
    }
    render() {
        this.frameId = requestAnimationFrame(() => {
            this.render();
        });
        if (this.model) {
            const delta = this.clock.getDelta();
            this.mixer.update(delta);
        }
        this.renderer.render(this.scene, this.camera);
    }
    resize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    }
}
EngineServiceGta.ɵfac = function EngineServiceGta_Factory(t) { return new (t || EngineServiceGta)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"])); };
EngineServiceGta.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: EngineServiceGta, factory: EngineServiceGta.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "cYUA":
/*!*************************************************!*\
  !*** ./src/app/_services/fileUpload.service.ts ***!
  \*************************************************/
/*! exports provided: FileUploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadService", function() { return FileUploadService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class FileUploadService {
    constructor(http) {
        this.http = http;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }
    upload(file, userid) {
        const formData = new FormData();
        formData.append("file", file, file.name);
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/users/image/upload/avatar/${userid}`, formData);
    }
    getAvatar(userid) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/users/image/avatar/${userid}`);
    }
    getCover(userid) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/users/image/cover/${userid}`);
    }
}
FileUploadService.ɵfac = function FileUploadService_Factory(t) { return new (t || FileUploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
FileUploadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: FileUploadService, factory: FileUploadService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "d2mR":
/*!**********************************!*\
  !*** ./src/app/shared.module.ts ***!
  \**********************************/
/*! exports provided: sharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sharedModule", function() { return sharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _web_gl_web_gl_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-gl/web-gl.component */ "hau+");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-skeleton-loader */ "xJkR");
/* harmony import */ var _helpers_safe_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_helpers/safe-html */ "hbwU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class sharedModule {
}
sharedModule.ɵfac = function sharedModule_Factory(t) { return new (t || sharedModule)(); };
sharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: sharedModule });
sharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_2__["NgxSkeletonLoaderModule"]
        ], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_2__["NgxSkeletonLoaderModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](sharedModule, { declarations: [_web_gl_web_gl_component__WEBPACK_IMPORTED_MODULE_1__["WebGLComponent"],
        _helpers_safe_html__WEBPACK_IMPORTED_MODULE_3__["Safe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_2__["NgxSkeletonLoaderModule"]], exports: [_web_gl_web_gl_component__WEBPACK_IMPORTED_MODULE_1__["WebGLComponent"],
        ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_2__["NgxSkeletonLoaderModule"],
        _helpers_safe_html__WEBPACK_IMPORTED_MODULE_3__["Safe"]] }); })();


/***/ }),

/***/ "deic":
/*!***********************************************!*\
  !*** ./src/app/module/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _web_gl_web_gl_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../web-gl/web-gl.component */ "hau+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function HomeComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_h1_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "A new place");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " to roleplay");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget fringilla est. Praesent velit nunc, pulvinar malesuada venenatis vel, lobortis viverra augue. Quisque id consequat justo. Phasellus aliquam hendrerit nisl, non sodales mi feugiat at. Etiam bibendum diam urna. Donec sagittis felis ut iaculis egestas. Maecenas malesuada quam in porttitor placerat. Maecenas quis vestibulum libero.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Acc\u00E8s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "au serveur");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "RedRoleplay 2.2 DL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "1.1.2.56:80");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "90");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "/150");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor() {
        this.loadingSkeleton = false;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.loadingSkeleton = true;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 103, vars: 8, consts: [[1, "home", "main"], [1, "top_right"], ["models", "gta"], [1, "top_social"], [4, "ngIf"], [1, "top_pin"], ["href", "#", "class", "register", 4, "ngIf"], ["class", "server", 4, "ngIf"], [1, "home", "present"], ["viewBox", "0 0 1261 200", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "svgBackground"], ["d", "M 0 200 L 272 9 L 272 0 L 0 0 Z", "stroke-width", "0"], ["d", "M 271 9 L 1089 73 L 1089 0 L 271 0 Z", "stroke-width", "0"], ["d", "M 1088 73 L 1261 0 L 1261 0 L 1088 0 Z", "stroke-width", "0"], [1, "first"], [1, "homeContent", "first"], [1, "viewUs"], [1, "view_exemple"], ["src", "./assets/img/design/home/map_0.png"], ["src", "./assets/img/design/home/map_1.png"], ["src", "./assets/img/design/home/map_2.png"], ["src", "./assets/img/design/home/map_3.png"], ["viewBox", "0 0 1261 200", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "svgBackground", "second"], ["d", "M 0 200 L 641 110 L 641 0 L 0 0 Z", "stroke-width", "0"], ["d", "M 640 110 L 1261 200 L 1261 0 L 640 0 Z", "stroke-width", "0"], [1, "homeContent"], [1, "download", "text"], [1, "download", "link"], ["href", "#"], [1, "fas", "fa-chevron-right"], ["viewBox", "0 0 1261 200", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "svgBackground", "bottom"], ["d", "M 0 0 C 228.5 0 228.5 90 457 90 L 457 90 L 457 0 L 0 0 Z", "stroke-width", "0"], ["d", "M 456 90 C 648 90 648 38 840 38 L 840 38 L 840 0 L 456 0 Z", "stroke-width", "0"], ["d", "M 839 38 C 957.5 38 957.5 76 1076 76 L 1076 76 L 1076 0 L 839 0 Z", "stroke-width", "0"], ["d", "M 1075 76 C 1168 76 1168 0 1261 0 L 1261 0 L 1261 0 L 1075 0 Z", "stroke-width", "0"], [1, "home", "present", "announce-wrap"], [1, "announce"], [1, "lastes"], [2, "--announce-background", "url('./assets/shop/storage/article/0.jpg')"], [2, "--announce-background", "url('./assets/shop/storage/article/1.jpg')"], [2, "--announce-background", "url('./assets/shop/storage/article/2.jpg')"], [1, "all"], [2, "--announce-background", "url('./assets/shop/storage/article/3.jpg')"], [2, "--announce-background", "url('./assets/shop/storage/article/4.jpg')"], [2, "--announce-background", "url('./assets/shop/storage/article/5.png')"], ["viewBox", "0 0 1261 200", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "svgBackground", "bottom", "last"], ["d", "M 0 45 L 641 110 L 641 0 L 0 0 Z", "stroke-width", "0"], [1, "fab", "fa-discord"], [1, "fab", "fa-youtube"], [1, "fab", "fa-facebook"], [1, "fab", "fa-twitter"], ["href", "#", 1, "register"], [1, "fas", "fa-arrow-right"], [1, "server"], [1, "blink"], [1, "ip"], [1, "connected"], [1, "player"], [1, "progress"], [1, "progress", "-progressed", 2, "width", "30%"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-web-gl", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_li_5_Template, 3, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_li_6_Template, 3, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_li_7_Template, 3, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_li_8_Template, 3, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_h1_10_Template, 4, 0, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_p_11_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_a_12_Template, 5, 0, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HomeComponent_div_13_Template, 13, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "LS:R c'est aussi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Un tr\u00E8s large catalogue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Vous pouvez d\u00E9s maintenant t\u00E9l\u00E9charger tous les fichiers n\u00E9cessaires pour se connecter dans le jeu. Bien s\u00FBr il ne faut pas oublier de s'incrire et de cr\u00E9er un personnage. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "T\u00E9l\u00E9charger gta:sa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Version ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "2.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "T\u00E9l\u00E9charger sa:mp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Version 0.3DL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "3.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "T\u00E9l\u00E9charger le cache");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Ou juste se tu peux te connecter dans le jeu et \u00E7a se fera automatiquement ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "svg", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "section", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Les annonces ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Les derni\u00E8res nouveaut\u00E9s de LS:R");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "ul", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Notre nouveau site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Notre nouveau site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Notre nouveau site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "ul", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Notre nouveau site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Notre nouveau site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Notre nouveau site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "svg", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "path", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingSkeleton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingSkeleton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingSkeleton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingSkeleton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingSkeleton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingSkeleton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingSkeleton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingSkeleton);
    } }, directives: [_web_gl_web_gl_component__WEBPACK_IMPORTED_MODULE_1__["WebGLComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5sZXNzIn0= */"] });


/***/ }),

/***/ "f5O9":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_models */ "nPby");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AlertService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.defaultId = 'default-alert';
    }
    // enable subscribing to alerts observable
    onAlert(id = this.defaultId) {
        return this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(x => x && x.id === id));
    }
    // convenience methods
    success(message, options) {
        this.alert(new _models__WEBPACK_IMPORTED_MODULE_2__["Alert"](Object.assign(Object.assign({}, options), { type: _models__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Success, message })));
    }
    error(message, options) {
        this.alert(new _models__WEBPACK_IMPORTED_MODULE_2__["Alert"](Object.assign(Object.assign({}, options), { type: _models__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Error, message })));
    }
    info(message, options) {
        this.alert(new _models__WEBPACK_IMPORTED_MODULE_2__["Alert"](Object.assign(Object.assign({}, options), { type: _models__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Info, message })));
    }
    warn(message, options) {
        this.alert(new _models__WEBPACK_IMPORTED_MODULE_2__["Alert"](Object.assign(Object.assign({}, options), { type: _models__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Warning, message })));
    }
    // main alert method    
    alert(alert) {
        alert.id = alert.id || this.defaultId;
        this.subject.next(alert);
    }
    // clear alerts
    clear(id = this.defaultId) {
        this.subject.next(new _models__WEBPACK_IMPORTED_MODULE_2__["Alert"]({ id }));
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "hau+":
/*!********************************************!*\
  !*** ./src/app/web-gl/web-gl.component.ts ***!
  \********************************************/
/*! exports provided: WebGLComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLComponent", function() { return WebGLComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _engine_engineGta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engine/engineGta.service */ "bQw+");
/* harmony import */ var _engine_showModel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engine/showModel.service */ "Tkne");
/* harmony import */ var _engine_showModelAccount_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./engine/showModelAccount.service */ "aEBj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = ["rendererCanvas"];
const _c1 = function (a0) { return { "registerCanvas": a0 }; };
class WebGLComponent {
    constructor(engServ, showModel, showModelAccount) {
        this.engServ = engServ;
        this.showModel = showModel;
        this.showModelAccount = showModelAccount;
    }
    ngOnInit() {
        if (this.models == 'gta') {
            this.engServ.createScene(this.rendererCanvas, this.models);
            this.engServ.animate();
        }
        else if (this.models == 'skins') {
            this.showModel.createScene(this.rendererCanvas, this.models);
            this.showModel.animate();
        }
        else if (this.models == 'skinsAccount') {
            this.showModelAccount.createScene(this.rendererCanvas, this.models);
            this.showModelAccount.animate();
        }
    }
}
WebGLComponent.ɵfac = function WebGLComponent_Factory(t) { return new (t || WebGLComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_engine_engineGta_service__WEBPACK_IMPORTED_MODULE_1__["EngineServiceGta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_engine_showModel_service__WEBPACK_IMPORTED_MODULE_2__["showModels"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_engine_showModelAccount_service__WEBPACK_IMPORTED_MODULE_3__["showModelsAccount"])); };
WebGLComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WebGLComponent, selectors: [["app-web-gl"]], viewQuery: function WebGLComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rendererCanvas = _t.first);
    } }, inputs: { models: "models", skinModel: "skinModel" }, decls: 3, vars: 3, consts: [[1, "engine-wrapper"], ["id", "renderCanvas", 3, "ngClass"], ["rendererCanvas", ""]], template: function WebGLComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx.models == "skins"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWItZ2wuY29tcG9uZW50Lmxlc3MifQ== */"] });


/***/ }),

/***/ "hbwU":
/*!***************************************!*\
  !*** ./src/app/_helpers/safe-html.ts ***!
  \***************************************/
/*! exports provided: Safe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Safe", function() { return Safe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");


class Safe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
        // return this.sanitizer.bypassSecurityTrustHtml(html);
        // return this.sanitizer.bypassSecurityTrustScript(html);
        // return this.sanitizer.bypassSecurityTrustUrl(html);
        // return this.sanitizer.bypassSecurityTrustResourceUrl(html);
    }
}
Safe.ɵfac = function Safe_Factory(t) { return new (t || Safe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
Safe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safeHtml", type: Safe, pure: true });


/***/ }),

/***/ "jZhJ":
/*!*********************************!*\
  !*** ./src/app/_models/user.ts ***!
  \*********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
}


/***/ }),

/***/ "jfvi":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "J9tS");



class JwtInterceptor {
    constructor(accountService) {
        this.accountService = accountService;
    }
    intercept(request, next) {
        // add auth header with jwt if user is logged in and request is to the api url
        const user = this.accountService.userValue;
        const isLoggedIn = user && user.token;
        const isApiUrl = request.url.startsWith(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${user.token}`
                }
            });
        }
        return next.handle(request);
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"])); };
JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });


/***/ }),

/***/ "kZRN":
/*!************************************************!*\
  !*** ./src/app/_services/character.service.ts ***!
  \************************************************/
/*! exports provided: characterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "characterService", function() { return characterService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class characterService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }
    create(params) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/characters/create`, params);
    }
    getSkins(params) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/characters/skins/${params}`);
    }
}
characterService.ɵfac = function characterService_Factory(t) { return new (t || characterService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
characterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: characterService, factory: characterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "lm+o":
/*!*********************************************************!*\
  !*** ./src/app/module/section/alert/alert.component.ts ***!
  \*********************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_models */ "nPby");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_services */ "J9tS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function AlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AlertComponent_div_0_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const alert_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.removeAlert(alert_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r0.cssClass(alert_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", alert_r1.message, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
class AlertComponent {
    constructor(router, alertService) {
        this.router = router;
        this.alertService = alertService;
        this.id = 'default-alert';
        this.fade = true;
        this.alerts = [];
    }
    ngOnInit() {
        // subscribe to new alert notifications
        this.alertSubscription = this.alertService.onAlert(this.id)
            .subscribe(alert => {
            // clear alerts when an empty alert is received
            if (!alert.message) {
                // filter out alerts without 'keepAfterRouteChange' flag
                this.alerts = this.alerts.filter(x => x.keepAfterRouteChange);
                // remove 'keepAfterRouteChange' flag on the rest
                this.alerts.forEach(x => delete x.keepAfterRouteChange);
                return;
            }
            // add alert to array
            this.alerts.push(alert);
            // auto close alert if required
            if (alert.autoClose) {
                setTimeout(() => this.removeAlert(alert), 3000);
            }
        });
        // clear alerts on location change
        this.routeSubscription = this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationStart"]) {
                this.alertService.clear(this.id);
            }
        });
    }
    ngOnDestroy() {
        // unsubscribe to avoid memory leaks
        this.alertSubscription.unsubscribe();
        this.routeSubscription.unsubscribe();
    }
    removeAlert(alert) {
        // check if already removed to prevent error on auto close
        if (!this.alerts.includes(alert))
            return;
        if (this.fade) {
            // fade out alert
            alert.fade = true;
            // remove alert after faded out
            setTimeout(() => {
                this.alerts = this.alerts.filter(x => x !== alert);
            }, 250);
        }
        else {
            // remove alert
            this.alerts = this.alerts.filter(x => x !== alert);
        }
    }
    cssClass(alert) {
        if (!alert)
            return;
        const classes = ['alert'];
        const alertTypeClass = {
            [_models__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Success]: 'alert success',
            [_models__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Error]: 'alert danger',
            [_models__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Info]: 'alert info',
            [_models__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Warning]: 'alert warning'
        };
        classes.push(alertTypeClass[alert.type]);
        if (alert.fade) {
            classes.push('fade');
        }
        return classes.join(' ');
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["AlertService"])); };
AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["alert"]], inputs: { id: "id", fade: "fade" }, decls: 1, vars: 1, consts: [[3, "class", 4, "ngFor", "ngForOf"], [1, "close", 3, "click"], [1, "fas", "fa-times"], [3, "innerHTML"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AlertComponent_div_0_Template, 4, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.alerts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], encapsulation: 2 });


/***/ }),

/***/ "mbvT":
/*!*****************************************!*\
  !*** ./src/app/web-gl/engine/Reader.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChunkType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChunkType.js */ "EOgx");
﻿

var GeometryFlag = {
    rwTRISTRIP: 0x00000001,
    rwPOSITIONS: 0x00000002,
    rwTEXTURED: 0x00000004,
    rwPRELIT: 0x00000008,
    rwNORMALS: 0x00000010,
    rwLIGHT: 0x00000020,
    rwMODULATE_MATERIAL_COLOR: 0x00000040,
    rwTEXTURED2: 0x00000080,
    rwNATIVE: 0x01000000,
    rwNATIVE_INSTANCE: 0x02000000,
    rwFLAGS_MASK: 0x000000FF,
    rwNATIVE_FLAGS_MASK: 0x0F000000
};

function DFFReader() { };

DFFReader.prototype = {
    constructor: DFFReader.prototype,

    parse: function (arraybuffer) {
        this.data = new DataView(arraybuffer);
        this.position = 0;

        while (this.position < arraybuffer.byteLength) {
            var clump = this.readChunk(_ChunkType_js__WEBPACK_IMPORTED_MODULE_0__["default"].CHUNK_CLUMP);
            if (clump) return clump;
        }

        return null;
    },

    readHeader: function (parent) {
        var header = {};
        var position = this.position;

        header.type = this.readUInt32();
        header.name = this.getChunkName(header.type);
        header.length = this.readUInt32();
        header.build = this.readUInt32();
        header.version;

        if (header.build & 0xFFFF0000)
            header.version = ((header.build >> 14) & 0x3FF00) | ((header.build >> 16) & 0x3F) | 0x30000;
        else
            header.version = header.build << 8;

        if (parent !== undefined)
            header.parent = parent;

        return header;
    },

    getChunkName: function (type) {
        for (var i in _ChunkType_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
            if (_ChunkType_js__WEBPACK_IMPORTED_MODULE_0__["default"][i] == type) return i;
        }
        return 'CHUNK_UNKNOWN';
    },

    readInt32: function () {
        var v = this.data.getInt32(this.position, true);
        this.position += 4;
        return v;
    },

    readUInt32: function () {
        var v = this.data.getUint32(this.position, true);
        this.position += 4;
        return v;
    },

    readUInt16: function () {
        var v = this.data.getUint16(this.position, true);
        this.position += 2;
        return v;
    },

    readUInt8: function () {
        var v = this.data.getUint8(this.position, true);
        this.position += 1;
        return v;
    },

    readFloat32: function () {
        var v = this.data.getFloat32(this.position, true);
        this.position += 4;
        return v;
    },

    readString: function (length) {
        var v = '';
        var val = -1;
        var end = this.position + length;

        while (this.position < end) {
            var val = this.data.getUint8(this.position++, true);
            if (val == 0) {
                this.position = end;
                break;
            }
            v += String.fromCharCode(val);
        }

        return v.trim();
    },

    readChunk: function (type, parent) {
        var position = this.position;
        var header = this.readHeader(parent);

        if (type != header.type) {
            if (type != _ChunkType_js__WEBPACK_IMPORTED_MODULE_0__["default"].CHUNK_CLUMP) console.error("DFFLoader: Chunk \"" + this.getChunkName(type) + "\" not found at position " + position);
            this.position += header.length;
            return null;
        }

        position = this.position;
        var chunk = this.readData(header);

        if (this.position < position + header.length) {
            console.warn("DFFLoader: Chunk " + header.name + " not readed to end");
            this.position = position + header.length;
        } else if (this.position > position + header.length) {
            throw "DFFLoader: Offset is outside the bounds of the chunk " + header.name;
        }
        return chunk;
    },

    readData: function (chunkHeader) {
        var data = null;
        switch (chunkHeader.type) {
            case _ChunkType_js__WEBPACK_IMPORTED_MODULE_0__["default"].CHUNK_CLUMP:
                var header = this.readHeader();
                var numAtomics = this.readUInt32();
                var numLights = 0;
                var numCameras = 0;
                
                if (header.length == 0xC) {
                    numLights = this.readUInt32();
                    numCameras = this.readUInt32();
                }

                data = {};
                data.RWFrameList = this.readChunk(_ChunkType_js__WEBPACK_IMPORTED_MODULE_0__["default"].CHUNK_FRAMELIST);
                data.RWGeometryList = this.readChunk(_ChunkType_js__WEBPACK_IMPORTED_MODULE_0__["default"].CHUNK_GEOMETRYLIST);

                data.RWAtomicList = new Array(numAtomics);
                for (var i = 0; i < numAtomics; i++) {
                    data.RWAtomicList[i] = this.readChunk(_ChunkType_js__WEBPACK_IMPORTED_MODULE_0__["default"].CHUNK_ATOMIC);
                }

                this.readExtension(data);
                break;
            case _ChunkType_js__WEBPACK_IMPORTED_MODULE_0__["default"].CHUNK_FRAMELIST:
                var header = this.readHeader();
                var numFrames = this.readUInt32();

                data = new Array(numFrames);
                for (var i = 0; i < numFrames; i++) {
                    var frame = {};

                    frame.rotationMatrix = [
                        this.readFloat32(),
                        this.readFloat32(),
                        this.readFloat32(),
                        this.readFloat32(),
                        this.readFloat32(),
                        this.readFloat32(),
                        this.readFloat32(),
                        this.readFloat32(),
                        this.readFloat32()
                    ];

                    frame.position = [
                        this.readFloat32(),
                        this.readFloat32(),
                        this.readFloat32()
                    ];

                    frame.parentIndex = this.readInt32();
                    frame.flags = this.readUInt32();

                    data[i] = { RWFrame: frame };
                }

                for (var i = 0; i < numFrames; i++) {
                    this.readExtension(data[i]);
                }
                break;
            case _ChunkType_js__WEBPACK_IMPORTED_MODULE_0__["default"].CHUNK_GEOMETRYLIST:
                var header = this.readHeader();
                var numGeometries = this.readUInt32();
                data = new Array(numGeometries);
                for (var i = 0; i < numGeometries; i++) {
                    data[i] = this.readChunk(_ChunkType_js__WEBPACK_IMPORTED_MODULE_0__["default"].CHUNK_GEOMETRY);
                }
                break;
            case _ChunkType_js__WEBPACK_IMPORTED_MODULE_0__["default"].CHUNK_GEOMETRY:
                var header = this.readHeader();

                data = {};
                data.format = this.readUInt32();
                data.numTriangles = this.readUInt32();
                data.numVertices = this.readUInt32();
                data.numMorphTargets = this.readUInt32();

                var numUVs = (data.format & 0x000FF000) >> 16;
                if (data.format & GeometryFlag.rwTEXTURED) numUVs = 1;

                if (header.version < 0x34000) {
                    data.ambient = this.readFloat32();
                    data.specular = this.readFloat32();
                    data.diffuse = this.readFloat32();
                }

                if ((data.format & GeometryFlag.rwNATIVE) == 0) {
                    if (data.format & GeometryFlag.rwPRELIT) {
                        data.prelitcolor = new Array(data.numVertices);
                        for (var i = 0; i < data.numVertices; i++) {
                            data.prelitcolor[i] = {
                                r: this.readUInt8(),
                                g: this.readUInt8(),
                                b: this.readUInt8(),
                                a: this.readUInt8()
                            };
                        }
                    }

                    if (data.format & (GeometryFlag.rwTEXTURED | GeometryFlag.rwTEXTURED2)) {
                        data.texCoords = new Array(numUVs);
                        for (var i = 0; i < numUVs; i++) {
                            data.texCoords[i] = new Array(data.numVertices);
                            for (var j = 0; j < data.numVertices; j++) {
                                data.texCoords[i][j] = {
                                    u: this.readFloat32(),
                                    v: this.readFloat32()
                                };
                            }
                        }
                    }

                    // faces
                    data.triangles = new Array(data.numTriangles);
                    for (var i = 0; i < data.numTriangles; i++) {
                        data.triangles[i] = {
                            vertex2: this.readUInt16(),
                            vertex1: this.readUInt16(),
                            materialId: this.readUInt16(),
                            vertex3: this.readUInt16()
                        };
                    }
                }

                data.morphTargets = new Array(data.numMorphTargets);
                for (var i = 0; i < data.numMorphTargets; i++) {
                    data.morphTargets[i] = {
                        boundingSphere: {
                            x: this.readFloat32(),
                            y: this.readFloat32(),
                            z: this.readFloat32(),
                            radius: this.readFloat32()
                        },
                        hasVertices: this.readUInt32(),
                        hasNormals: this.readUInt32()
                    };

                    if (data.morphTargets[i].hasVertices) {
                        data.morphTargets[i].vertices = new Array(data.numVertices);
                        for (var j = 0; j < data.numVertices; j++) {
                            data.morphTargets[i].vertices[j] = {
                                x: this.readFloat32(),
                                y: this.readFloat32(),
                                z: this.readFloat32()
                            };
                        }
                    }

                    if (data.morphTargets[i].hasNormals) {
                        data.morphTargets[i].normals = new Array(data.numVertices);
                        for (var j = 0; j < data.numVertices; j++) {
                            data.morphTargets[i].normals[j] = {
                                x: this.readFloat32(),
                                y: this.readFloat32(),
                                z: this.readFloat32()
                            };
                        }
                    }
                }

                data.RWMaterialList = this.readChunk(_ChunkType_js__WEBPACK_IMPORTED_MODULE_0__["default"].CHUNK_MATERIALLIST);
                this.readExtension(data);
                break;
            case _ChunkType_js__WEBPACK_IMPORTED_MODULE_0__["default"].CHUNK_MATERIALLIST:
                var header = this.readHeader();
                var numMaterials = this.readUInt32();
                data = new Array(numMaterials);

                for (var i = 0; i < numMaterials; i++) {
                    data[i] = {
                        id: this.readUInt32()
                    };
                }
                for (var i = 0; i < numMaterials; i++) {
                    data[i].RWMaterial = this.readChunk(_ChunkType_js__WEBPACK_IMPORTED_MODULE_0__["default"].CHUNK_MATERIAL);
                }
                break;
            case _ChunkType_js__WEBPACK_IMPORTED_MODULE_0__["default"].CHUNK_MATERIAL:
                var header = this.readHeader();
                data = {};
                data.flags = this.readUInt32();
                data.color = {
                    r: this.readUInt8(),
                    g: this.readUInt8(),
                    b: this.readUInt8(),
                    a: this.readUInt8()
                };
                this.readUInt32(); // unused
                data.isTextured = this.readUInt32();
                if (header.version > 0x30400) {
                    data.ambient = this.readFloat32();
                    data.specular = this.readFloat32();
                    data.diffuse = this.readFloat32();
                }

                if (data.isTextured)
                    data.RWTexture = this.readChunk(_ChunkType_js__WEBPACK_IMPORTED_MODULE_0__["default"].CHUNK_TEXTURE);

                this.readExtension(data);
                break;
            case _ChunkType_js__WEBPACK_IMPORTED_MODULE_0__["default"].CHUNK_TEXTURE:
                var header = this.readHeader();
                data = {};
                data.filterFlags = this.readUInt16();
                this.readUInt16(); // unused
                data.name = this.readChunk(_ChunkType_js__WEBPACK_IMPORTED_MODULE_0__["default"].CHUNK_STRING);
                data.maskName = this.readChunk(_ChunkType_js__WEBPACK_IMPORTED_MODULE_0__["default"].CHUNK_STRING);
                this.readExtension(data);
                break;
            case _ChunkType_js__WEBPACK_IMPORTED_MODULE_0__["default"].CHUNK_STRING:
                data = this.readString(chunkHeader.length);
                break;
            case _ChunkType_js__WEBPACK_IMPORTED_MODULE_0__["default"].CHUNK_ATOMIC:
                var header = this.readHeader();
                data = {};
                data.frameIndex = this.readUInt32();
                data.geometryIndex = this.readUInt32();
                data.flags = this.readUInt32();
                this.readUInt32(); // unused
                this.readExtension(data);
                break;
            case _ChunkType_js__WEBPACK_IMPORTED_MODULE_0__["default"].CHUNK_EXTENSION:
                data = {};
                var chunkEnd = this.position + chunkHeader.length;
                while (this.position < chunkEnd) {
                    var header = this.readHeader();
                    var extension = {};
                    var position = this.position;
                    switch (header.type) {
                        case _ChunkType_js__WEBPACK_IMPORTED_MODULE_0__["default"].CHUNK_HANIM:
                            extension.hAnimVersion = this.readUInt32();
                            extension.nodeId = this.readUInt32();
                            extension.numNodes = this.readUInt32();
                            if (extension.numNodes) {
                                extension.flags = this.readUInt32();
                                extension.keyFrameSize = this.readUInt32();
                                extension.nodes = new Array(extension.numNodes);
                                for (var i = 0; i < extension.numNodes; i++) {
                                    extension.nodes[i] = {
                                        nodeId: this.readUInt32(),
                                        nodeIndex: this.readUInt32(),
                                        flags: this.readUInt32(),
                                    };
                                }
                            }
                            break;
                        case _ChunkType_js__WEBPACK_IMPORTED_MODULE_0__["default"].CHUNK_FRAME:
                            extension = this.readString(header.length);
                            break;
                        case _ChunkType_js__WEBPACK_IMPORTED_MODULE_0__["default"].CHUNK_BINMESH:
                            extension.faceType = this.readUInt32(); // index ?
                            var numSplits = this.readUInt32();
                            extension.numIndices = this.readUInt32();
                            extension.splits = new Array(numSplits);
                            var hasData = header.length > 12 + numSplits * 8;
                            for (var i = 0; i < numSplits; i++) {
                                var numIndices = this.readUInt32();
                                extension.splits[i] = {};
                                extension.splits[i].matIndex = this.readUInt32();
                                if (hasData) {
                                    extension.splits[i].indices = new Array(numIndices);
                                    for (var j = 0; j < numIndices; j++)
                                        extension.splits[i].indices[j] = this.readUInt32();
                                }
                            }
                            break;
                        case _ChunkType_js__WEBPACK_IMPORTED_MODULE_0__["default"].CHUNK_SKIN:
                            extension.numBones = this.readUInt8();
                            extension.numUsedBones = this.readUInt8(); // specialIndexCount
                            extension.maxWeightsPerVertex = this.readUInt8();
                            extension.padding = this.readUInt8(); // unused
                            extension.bonesUsed = new Array(extension.numUsedBones); //specialIndices
                            for (var i = 0; i < extension.numUsedBones; i++) {
                                extension.bonesUsed[i] = this.readUInt8();
                            }
                            extension.vertexBoneIndices = new Array(chunkHeader.parent.numVertices);
                            for (var i = 0; i < chunkHeader.parent.numVertices; i++) {
                                extension.vertexBoneIndices[i] = {
                                    x: this.readUInt8(),
                                    y: this.readUInt8(),
                                    z: this.readUInt8(),
                                    w: this.readUInt8()
                                };
                            }
                            extension.vertexBoneWeights = new Array(chunkHeader.parent.numVertices);
                            for (var i = 0; i < chunkHeader.parent.numVertices; i++) {
                                extension.vertexBoneWeights[i] = {
                                    x: this.readFloat32(),
                                    y: this.readFloat32(),
                                    z: this.readFloat32(),
                                    w: this.readFloat32()
                                };
                            }
                            extension.skinToBoneMatrix = new Array(extension.numBones);
                            for (var i = 0; i < extension.numBones; i++) {
                                if (extension.numUsedBones == 0) // todo - and version < 3.7.0.0
                                    this.position += 4; // skip 0xDEADDEAD
                                extension.skinToBoneMatrix[i] = new Array(16);
                                for (var j = 0; j < 16; j++) {
                                    extension.skinToBoneMatrix[i] = this.readFloat32();
                                }
                            }

                            // skip some zeroes
                            if (extension.numUsedBones != 0)
                                this.position += 0x0C;

                            break;
                        case _ChunkType_js__WEBPACK_IMPORTED_MODULE_0__["default"].CHUNK_MESHEXTENSION:
                            var magicNumber = this.readUInt32();
                            if (magicNumber == 0) break;
                            throw "DFFLoader: Not implemented";
                            break;
                        default:
                            this.position += header.length;
                            console.warn("DFFLoader: Skipped " + header.name + " extension");
                            break;
                    }

                    if (this.position < position + header.length)
                        console.warn("DFFLoader: Extension " + header.name + " not readed to end");

                    if (data[header.name])
                        console.error('DFFLoader: Rewrite of extension ' + header.name);

                    data[header.name] = extension;
                }
                break;
            default:
                throw "DFFLoader: Not implemented";
                break;
        }

        return data;
    },

    readExtension: function (chunk) {
        chunk.RWExtension = this.readChunk(_ChunkType_js__WEBPACK_IMPORTED_MODULE_0__["default"].CHUNK_EXTENSION, chunk);
    }
};

/* harmony default export */ __webpack_exports__["default"] = (DFFReader);

/***/ }),

/***/ "myrj":
/*!************************************************!*\
  !*** ./src/app/_services/webSocket.service.ts ***!
  \************************************************/
/*! exports provided: webSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webSocketService", function() { return webSocketService; });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class webSocketService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }
    connect(user) {
        this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_0__["io"])(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].wsUrl, { autoConnect: false });
        this.socket.auth = { id: user.id, username: user.username };
        this.socket.connect();
    }
    disconnect() {
        this.socket.disconnect();
    }
    ObserveMessage() {
        let observable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](observer => {
            this.socket.on('message', (data) => {
                console.log("Received message from Websocket Server");
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        });
        let observer = {
            next: (data) => {
                this.socket.emit('message', JSON.stringify(data));
            },
        };
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"].create(observer, observable);
    }
    checkOnline() {
        let observable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](observer => {
            this.socket.on('logged', (data) => {
                console.log("Received connected list from Websocket Server" + data.logged);
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        });
        let observer = {
            next: (data) => {
                this.socket.emit('check-connection', JSON.stringify(data));
            },
        };
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"].create(observer, observable);
    }
    connectedList() {
        let observable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](observer => {
            this.socket.on('connected-list', (data) => {
                console.log("Received connected list from Websocket Server");
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        });
        let observer = {
            next: (data) => {
                this.socket.emit('get-connected-list');
            },
        };
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"].create(observer, observable);
    }
    topicObserve() {
        let observable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](observer => {
            this.socket.on('message-topic', (data) => {
                console.log("Received message for topic from Websocket Server");
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        });
        let observer = {
            next: (data) => {
                this.socket.emit('message-topic', JSON.stringify(data));
            },
        };
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"].create(observer, observable);
    }
}
webSocketService.ɵfac = function webSocketService_Factory(t) { return new (t || webSocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
webSocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: webSocketService, factory: webSocketService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "nPby":
/*!**********************************!*\
  !*** ./src/app/_models/index.ts ***!
  \**********************************/
/*! exports provided: Alert, AlertType, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert */ "Dgtq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return _alert__WEBPACK_IMPORTED_MODULE_0__["Alert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return _alert__WEBPACK_IMPORTED_MODULE_0__["AlertType"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "jZhJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user__WEBPACK_IMPORTED_MODULE_1__["User"]; });





/***/ }),

/***/ "nSnL":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "J9tS");




class ErrorInterceptor {
    constructor(accountService) {
        this.accountService = accountService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            var _a;
            if ([401, 403].includes(err.status) && this.accountService.userValue) {
                // auto logout if 401 or 403 response returned from api
                this.accountService.logout();
            }
            const error = ((_a = err.error) === null || _a === void 0 ? void 0 : _a.message) || err.statusText;
            console.error(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_3__["AccountService"])); };
ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });


/***/ }),

/***/ "p3Fh":
/*!****************************************!*\
  !*** ./src/app/_helpers/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "J9tS");



class AuthGuard {
    constructor(router, accountService) {
        this.router = router;
        this.accountService = accountService;
    }
    canActivate(route, state) {
        const user = this.accountService.userValue;
        if (user) {
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vJCe":
/*!*******************************************!*\
  !*** ./src/app/_services/chat.service.ts ***!
  \*******************************************/
/*! exports provided: chatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chatService", function() { return chatService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _webSocket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./webSocket.service */ "myrj");







class chatService {
    constructor(router, http, wsService) {
        this.router = router;
        this.http = http;
        this.wsService = wsService;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
        this.messages = wsService
            .ObserveMessage()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            return response;
        }));
        this.connected = wsService
            .checkOnline()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            return response;
        }));
        this.connected_list = wsService
            .connectedList()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            return response;
        }));
    }
    sendMsg(msg) {
        this.messages.next(msg);
    }
    getPm(from, to) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/messaging/to/${to}/from/${from}`);
    }
    socketConnected(id) {
        this.connected.next(id);
    }
    getConnectedList() {
        this.connected_list.next();
    }
    fetchLast(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/messaging/last/${id}`);
    }
}
chatService.ɵfac = function chatService_Factory(t) { return new (t || chatService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_webSocket_service__WEBPACK_IMPORTED_MODULE_6__["webSocketService"])); };
chatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: chatService, factory: chatService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _module_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/home/home.component */ "deic");
/* harmony import */ var _module_shop_shop_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/shop/shop.component */ "Y5L3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const authModule = () => __webpack_require__.e(/*! import() | module-auth-auth-module */ "module-auth-auth-module").then(__webpack_require__.bind(null, /*! ./module/auth/auth.module */ "O62x")).then(x => x.AuthModule);
const forumModule = () => __webpack_require__.e(/*! import() | module-forum-forum-module */ "module-forum-forum-module").then(__webpack_require__.bind(null, /*! ./module/forum/forum.module */ "RTsx")).then(x => x.ForumModule);
const AccountModule = () => __webpack_require__.e(/*! import() | module-account-account-module */ "module-account-account-module").then(__webpack_require__.bind(null, /*! ./module/account/account.module */ "5RcP")).then(x => x.AccountModule);
const MessagingModule = () => __webpack_require__.e(/*! import() | module-messaging-messaging-module */ "module-messaging-messaging-module").then(__webpack_require__.bind(null, /*! ./module/messaging/messaging.module */ "MnW9")).then(x => x.MessagingModule);
const routes = [
    { path: '', component: _module_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'auth', loadChildren: authModule },
    { path: 'forum', loadChildren: forumModule },
    { path: 'shop', component: _module_shop_shop_component__WEBPACK_IMPORTED_MODULE_2__["ShopComponent"] },
    { path: 'messaging', loadChildren: MessagingModule },
    { path: '', loadChildren: AccountModule },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xW6b":
/*!*************************************************!*\
  !*** ./src/app/_services/validation.service.ts ***!
  \*************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class ValidationService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }
    getApplication() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/validation/application`);
    }
    getQuestions() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/validation/questions`);
    }
    checkQuestion(id, answer) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/validation/question/check`, { id: id, answer: answer });
    }
    sendValidation(params) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/validation/send`, params);
    }
}
ValidationService.ɵfac = function ValidationService_Factory(t) { return new (t || ValidationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
ValidationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ValidationService, factory: ValidationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
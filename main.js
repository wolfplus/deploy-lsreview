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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class AccountService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }
    get userValue() {
        return this.userSubject.value;
    }
    login(username, password) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/users/authenticate`, { username, password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            this.userSubject.next(user);
            return user;
        }));
    }
    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/account/login']);
    }
    register(user) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/users/register`, user);
    }
    getAll() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/users`);
    }
    getById(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/users/${id}`);
    }
    update(id, params) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/users/${id}`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(x => {
            // update stored user if the logged in user updated their own record
            if (id == this.userValue.id) {
                // update local storage
                const user = Object.assign(Object.assign({}, this.userValue), params);
                localStorage.setItem('user', JSON.stringify(user));
                // publish updated user to subscribers
                this.userSubject.next(user);
            }
            return x;
        }));
    }
    delete(id) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/users/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(x => {
            // auto logout if the logged in user deleted their own record
            if (id == this.userValue.id) {
                this.logout();
            }
            return x;
        }));
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });


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
    production: false,
    apiUrl: 'http://localhost:4000'
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

/***/ "FyoX":
/*!********************************************************!*\
  !*** ./src/app/model/section/alert/alert.component.ts ***!
  \********************************************************/
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

/***/ "J9tS":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AccountService, AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.service */ "5ZPe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return _account_service__WEBPACK_IMPORTED_MODULE_0__["AccountService"]; });

/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ "f5O9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]; });





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
                        result.map = loader.load('./assets/models/skins/' + this.name + '/' + material.RWMaterial.RWTexture.name + ".png", () => {
                            material.needsUpdate = true;
                            // material.map.sourceFile = url;
                        });
                        result.map.wrapS = three__WEBPACK_IMPORTED_MODULE_0__["RepeatWrapping"];
                        result.map.wrapT = three__WEBPACK_IMPORTED_MODULE_0__["RepeatWrapping"];
                    }
                    if (material.RWMaterial.RWTexture.maskName) {
                        result.alphaMap = loader.load('./assets/models/skins/' + this.name + '/' + material.RWMaterial.RWTexture.maskName + ".png", () => {
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
                //console.log('ici'+bones[1])
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
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-loading-bar/core */ "lPP5");
/* harmony import */ var _model_section_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/section/header/header.component */ "mKRc");
/* harmony import */ var _model_section_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/section/alert/alert.component */ "FyoX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _model_section_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/section/footer/footer.component */ "iy6P");







class AppComponent {
    constructor(accountService) {
        this.accountService = accountService;
        this.title = 'ls-review';
        this.accountService.user.subscribe(x => this.user = x);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["AccountService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 1, consts: [["color", "#ed4245", 3, "includeSpinner"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-loading-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("includeSpinner", false);
    } }, directives: [_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_2__["LoadingBarComponent"], _model_section_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _model_section_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _model_section_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50Lmxlc3MifQ== */"] });


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
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "RyHr");
/* harmony import */ var three_examples_jsm_helpers_RectAreaLightHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/helpers/RectAreaLightHelper.js */ "LcA8");
/* harmony import */ var three_examples_jsm_libs_dat_gui_module_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/libs/dat.gui.module.js */ "udgZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Loader */ "QO4U");






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
        const controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__["OrbitControls"](this.camera, this.canvas);
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
        this.scene.add(new three_examples_jsm_helpers_RectAreaLightHelper_js__WEBPACK_IMPORTED_MODULE_2__["RectAreaLightHelper"](rectLight1));
        this.scene.add(new three_examples_jsm_helpers_RectAreaLightHelper_js__WEBPACK_IMPORTED_MODULE_2__["RectAreaLightHelper"](rectLight2));
        this.scene.add(new three_examples_jsm_helpers_RectAreaLightHelper_js__WEBPACK_IMPORTED_MODULE_2__["RectAreaLightHelper"](rectLight3));
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
        const loader = this.showModel;
        loader.load(
        // resource URL
        './assets/models/skins/andre/andre.dff', 
        // called when the resource is loaded
        (model) => {
            this.model = model;
            //model.children[0].children[0].position.vector3 = {20, 20, 20};
            //model.children[1].children[0].position.y = 20;
            //model.children[0].skeleton.bones[9].rotation.y = 0.1;
            //console.log(model.children[0].skeleton);
            this.model.position.y = 0;
            this.model.rotation.y = 1;
            this.scene.add(this.model);
            //this.createPanel();
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
        const panel = new three_examples_jsm_libs_dat_gui_module_js__WEBPACK_IMPORTED_MODULE_3__["GUI"]({ width: 310 });
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
showModels.ɵfac = function showModels_Factory(t) { return new (t || showModels)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_Loader__WEBPACK_IMPORTED_MODULE_5__["showModel"])); };
showModels.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: showModels, factory: showModels.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _model_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./model/home/home.component */ "feRq");
/* harmony import */ var _model_section_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./model/section/header/header.component */ "mKRc");
/* harmony import */ var _model_section_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./model/section/footer/footer.component */ "iy6P");
/* harmony import */ var _model_section_alert_alert_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./model/section/alert/alert.component */ "FyoX");
/* harmony import */ var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-loading-bar/router */ "F34d");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-skeleton-loader */ "xJkR");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared.module */ "d2mR");
/* harmony import */ var _model_shop_shop_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./model/shop/shop.component */ "Zufv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");

















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_5__["JwtInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_5__["ErrorInterceptor"], multi: true },
        _helpers__WEBPACK_IMPORTED_MODULE_5__["fakeBackendProvider"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_11__["LoadingBarRouterModule"],
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_12__["NgxSkeletonLoaderModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_13__["sharedModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _model_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _model_section_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
        _model_section_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
        _model_section_alert_alert_component__WEBPACK_IMPORTED_MODULE_10__["AlertComponent"],
        _model_shop_shop_component__WEBPACK_IMPORTED_MODULE_14__["ShopComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_11__["LoadingBarRouterModule"],
        ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_12__["NgxSkeletonLoaderModule"],
        _shared_module__WEBPACK_IMPORTED_MODULE_13__["sharedModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]] }); })();


/***/ }),

/***/ "Zufv":
/*!**********************************************!*\
  !*** ./src/app/model/shop/shop.component.ts ***!
  \**********************************************/
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
    } }, styles: ["/* Global var and function \n------------------*/\n/* Shop global \n------------------*/\nbody {\n  background-image: var(--shopBackground);\n  background-repeat: no-repeat;\n  background-position: center top;\n  background-size: 1300px;\n}\n.shop_wrapper {\n  position: relative;\n  top: 130px;\n  margin: 0 auto;\n  padding-left: 80px;\n}\n.shop_wrapper a.purchaseButton {\n  display: inline-block;\n  font-size: 15px;\n  text-decoration: none;\n  background: rgba(237, 66, 69, 0.5);\n  color: #fff;\n  padding: 5px 20px;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px, inset rgba(255, 255, 255, 0.2) 0px 1px 0px;\n  border-radius: 4px;\n}\narticle {\n  overflow: hidden;\n  background-image: var(--article-background);\n  background-repeat: no-repeat;\n  cursor: pointer;\n  background-size: cover;\n}\narticle .articleHover {\n  position: relative;\n  left: -9000px;\n  width: 100%;\n  height: 100%;\n  padding: 10px 10px 50px 10px;\n  background: rgba(32, 34, 37, 0.5);\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n  overflow-x: auto;\n  transition: left 300ms ease-in-out;\n}\narticle .articleHover h3 {\n  margin-bottom: 10px;\n  font-size: 25px;\n}\narticle .articleHover p {\n  font-size: 100%;\n  margin-bottom: 10px;\n}\narticle:hover .articleHover {\n  left: 0;\n}\n/* Shop navigation \n------------------*/\nnav.shopCatNav {\n  background: #2c2f33;\n  margin: 30px 10px;\n  padding: 5px;\n  text-align: center;\n  border: 1px solid rgba(183, 187, 192, 0.1);\n  border-radius: 30px;\n}\nnav.shopCatNav ul li {\n  margin: 0 40px;\n}\nnav.shopCatNav ul li a {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #808791;\n  font-weight: bold;\n  text-transform: uppercase;\n  font-family: Montserrat;\n  padding: 10px 30px;\n  border: 1px solid rgba(183, 187, 192, 0.02);\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);\n  background: #383b40 linear-gradient(160deg, #383b40, #43484e);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"@color1\", endColorstr=\"@color2\", GradientType=1);\n  border-radius: 30px;\n}\nnav.shopCatNav ul li a i {\n  margin-right: 10px;\n}\nnav.shopCatNav ul li.active a {\n  background: #eb2b2e;\n  color: #fff;\n}\nnav.shopNav {\n  position: fixed;\n  left: 0;\n  top: 70px;\n  width: 80px;\n  height: 100vh;\n  background: rgba(183, 187, 192, 0.2);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\nnav.shopNav ul {\n  position: absolute;\n  top: 40%;\n}\nnav.shopNav ul li a {\n  display: block;\n  text-align: center;\n  width: 100%;\n  color: #d9d9d9;\n  background: #ed4245;\n  padding: 5px;\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);\n}\nnav.shopNav ul li a span {\n  display: block;\n  text-transform: uppercase;\n  font-size: 12px;\n}\nnav.shopNav ul li a i {\n  font-size: 25px;\n  margin-bottom: 10px;\n}\n/* Shop section \n------------------*/\nsection.shopHeader {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n}\nsection.shopHeader img.png {\n  width: 500px;\n}\nsection.shopHeader h2 {\n  font-size: 30px;\n  margin-bottom: 10px;\n}\nsection.shopHeader a.purchaseButton {\n  margin: 10px 0;\n  font-size: 20px;\n  padding: 10px 50px;\n}\nsection.shopHeader span.price {\n  font-size: 30px;\n  margin-left: 20px;\n}\nsection.shopHeader span.price b {\n  text-transform: uppercase;\n  font-size: 20px;\n  color: #808080;\n}\nsection.shopHeader ._flexArea {\n  width: 50%;\n}\nsection.shopBestArticle {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(7, 1fr);\n  grid-gap: 5px;\n  height: 400px;\n  padding: 0 10px;\n}\nsection.shopBestArticle article {\n  grid-column: 3 / 5;\n  height: 100%;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px, inset rgba(255, 255, 255, 0.2) 0px 1px 0px;\n}\nsection.shopBestArticle article:first-child {\n  grid-column: 1 / 3;\n  grid-row: 1 / 8;\n}\nsection.shopBestArticle article:nth-child(2n) {\n  grid-row: 1 / 5;\n}\nsection.shopBestArticle article:nth-child(3n) {\n  grid-row: 5 / 8;\n}\nsection.shopArticle {\n  display: flex;\n  flex-flow: row wrap;\n  width: 100%;\n}\nsection.shopArticle article {\n  position: relative;\n  flex: auto;\n  margin: 5px;\n  width: 300px;\n  height: 300px;\n}\nsection.shopArticle article h3 {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  padding: 30px;\n  background: rgba(32, 34, 37, 0) linear-gradient(0deg, rgba(32, 34, 37, 0.9) 20%, rgba(32, 34, 37, 0) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"@color1\", endColorstr=\"@color2\", GradientType=1);\n}\nsection.shopArticle article span.price {\n  display: inline-block;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  padding: 10px;\n  font-size: 25px;\n  background: rgba(32, 34, 37, 0) linear-gradient(260deg, rgba(32, 34, 37, 0.9) 20%, rgba(32, 34, 37, 0) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"@color1\", endColorstr=\"@color2\", GradientType=1);\n}\nsection.shopArticle article span.price img {\n  width: 20px;\n}\nsection.shopArticle article:nth-child(even) {\n  width: 250px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3AuY29tcG9uZW50Lmxlc3MiLCIuLlxcLi5cXC4uXFxzdHlsZXMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTttQkFDbUI7QUFDbkI7bUJBQ21CO0FBSW5CO0VBQ0MsdUNBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsdUJBQUE7QUFGRDtBQUtBO0VBQ0Msa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBSEQ7QUFEQTtFQU1FLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUNrQ0Usa0NBQUE7RUFDQSwwQkFBQTtFQTZCSCxzRkFBQTtFQWxDQSxrQkFBQTtBRHpCRDtBQUVBO0VBQ0MsZ0JBQUE7RUFDQSwyQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQytDRyxzQkFBQTtBRDNDSjtBQVJBO0VBT0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGlDQUFBO0VDZUUsa0NBQUE7RUFDQSwwQkFBQTtFRGRGLGdCQUFBO0VDc0JELGtDQUFBO0FEWkQ7QUF4QkE7RUFpQkcsbUJBQUE7RUFDQSxlQUFBO0FBVUg7QUE1QkE7RUFxQkcsZUFBQTtFQUNBLG1CQUFBO0FBVUg7QUFQQztFQUVFLE9BQUE7QUFRSDtBQUNBO21CQUNtQjtBQUZsQjtFQUNDLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQ2pCRCxtQkFBQTtBRHVCRDtBQVhDO0VBU0csY0FBQTtBQUtKO0FBZEM7RUFXSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0VDOUNHLDRDQUFBO0VBZlAsNkRBQUE7RUFDQSxrSEFBQTtFQTZCQSxtQkFBQTtBRDZDRDtBQWpDQztFQXdCSyxrQkFBQTtBQVlOO0FBVEk7RUFFRSxtQkFBQTtFQUNBLFdBQUE7QUFVTjtBQUpDO0VBQ0MsZUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQ2xERSxrQ0FBQTtFQUNBLDBCQUFBO0FEeURKO0FBZEM7RUFTRSxrQkFBQTtFQUNBLFFBQUE7QUFRSDtBQWxCQztFQWFJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VDakZHLDRDQUFBO0FEMkZSO0FBNUJDO0VBcUJLLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFVTjtBQWpDQztFQTBCSyxlQUFBO0VBQ0EsbUJBQUE7QUFVTjtBQUNBO21CQUNtQjtBQURsQjtFQUNDLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUFHRjtBQU5DO0VBS0UsWUFBQTtBQUlIO0FBVEM7RUFRRSxlQUFBO0VBQ0EsbUJBQUE7QUFJSDtBQWJDO0VBWUUsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUlIO0FBbEJDO0VBaUJFLGVBQUE7RUFDQSxpQkFBQTtBQUlIO0FBdEJDO0VBb0JHLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFLSjtBQTNCQztFQTBCRSxVQUFBO0FBSUg7QUFEQztFQUNDLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBR0Y7QUFUQztFQVFRLGtCQUFBO0VBQ0EsWUFBQTtFQzFGUixzRkFBQTtBRGlHRDtBQUxTO0VBQ0wsa0JBQUE7RUFDQSxlQUFBO0FBT0o7QUFMUztFQUNDLGVBQUE7QUFPVjtBQUxTO0VBQ0MsZUFBQTtBQU9WO0FBSEM7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBS0Y7QUFSQztFQUtFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQU1IO0FBZkM7RUFXRyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQ3RMSCwwR0FBQTtFQUNBLGtIQUFBO0FEZ01EO0FBekJDO0VBa0JHLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VDL0xILDRHQUFBO0VBQ0Esa0hBQUE7QUQ0TUQ7QUFyQ0M7RUEwQkksV0FBQTtBQWNMO0FBWEc7RUFDQyxZQUFBO0FBYUoiLCJmaWxlIjoic2hvcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdsb2JhbCB2YXIgYW5kIGZ1bmN0aW9uIFxuLS0tLS0tLS0tLS0tLS0tLS0tKi9cbkBpbXBvcnQgKHJlZmVyZW5jZSkgXCIuLi8uLi8uLi9zdHlsZXMubGVzc1wiO1xuQGFzc2V0c0Zyb21IZXJlOiBcIi4uLy5Ae3BhdGhBc3NldHN9XCI7XG5cbi8qIFNob3AgZ2xvYmFsIFxuLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmJvZHkge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1zaG9wQmFja2dyb3VuZCk7XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XG5cdGJhY2tncm91bmQtc2l6ZTogMTMwMHB4O1xufVxuXG4uc2hvcF93cmFwcGVyIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR0b3A6IDEzMHB4O1xuXHRtYXJnaW46IDAgYXV0bztcblx0cGFkZGluZy1sZWZ0OiA4MHB4O1xuXHRhLnB1cmNoYXNlQnV0dG9uIHtcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0Zm9udC1zaXplOiAxNXB4O1xuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRiYWNrZ3JvdW5kOiBmYWRlKEBidXR0b25Db2xvclByaW0sIDUwKTtcblx0XHRjb2xvcjogQHNlY29uZENvbG9yO1xuXHRcdHBhZGRpbmc6IDVweCAyMHB4O1xuXHRcdC5iYWNrYmx1cig0cHgpO1xuXHRcdC5zaGFkb3ctZ2xvc3MoKTtcblx0XHQuYm9yZGVycmFkaXVzKDRweCk7XG5cdH1cbn1cblxuYXJ0aWNsZSB7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWFydGljbGUtYmFja2dyb3VuZCk7XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0LmNvdmVyKCk7XG5cdC5hcnRpY2xlSG92ZXIge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRsZWZ0OiAtOTAwMHB4O1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogMTAwJTtcblx0XHRwYWRkaW5nOiAxMHB4IDEwcHggNTBweCAxMHB4O1xuXHRcdGJhY2tncm91bmQ6IGZhZGUoQG1haW5Db2xvciwgNTApO1xuXHRcdC5iYWNrYmx1cig2cHgpO1xuXHRcdG92ZXJmbG93LXg6IGF1dG87XG5cdFx0LnRyYW5zaXRpb24obGVmdCwgMzAwbXMsIGVhc2UtaW4tb3V0KTtcblx0XHRoMyB7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHRcdFx0Zm9udC1zaXplOiAyNXB4O1xuXHRcdH1cblx0XHRwIHtcblx0XHRcdGZvbnQtc2l6ZTogIDEwMCU7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHRcdH1cblx0fVxuXHQmOmhvdmVyIHtcblx0XHQuYXJ0aWNsZUhvdmVyIHtcblx0XHRcdGxlZnQ6IDA7XG5cdFx0fVxuXHR9XG59XG5cbi8qIFNob3AgbmF2aWdhdGlvbiBcbi0tLS0tLS0tLS0tLS0tLS0tLSovXG5uYXYge1xuXHQmLnNob3BDYXROYXYge1xuXHRcdGJhY2tncm91bmQ6IGxpZ2h0ZW4oQG1haW5Db2xvciwgNSk7XG5cdFx0bWFyZ2luOiAzMHB4IDEwcHg7XG5cdFx0cGFkZGluZzogNXB4O1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRib3JkZXI6IDFweCBzb2xpZCBmYWRlKGxpZ2h0ZW4oQG1haW5Db2xvciwgNjApLCAxMCk7XG5cdFx0LmJvcmRlcnJhZGl1cygzMHB4KTtcblx0XHR1bCB7XG5cdFx0XHRsaSB7XG5cdFx0XHRcdG1hcmdpbjogMCA0MHB4O1xuXHRcdFx0XHRhIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdGNvbG9yOiBsaWdodGVuKEBtYWluQ29sb3IsIDQwKTtcblx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuXHRcdFx0XHRcdHBhZGRpbmc6IDEwcHggMzBweDtcblx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCBmYWRlKGxpZ2h0ZW4oQG1haW5Db2xvciwgNjApLCAyKTtcblx0XHRcdFx0XHQuYm94LXNoYWRvdygwIDAgNnB4IHJnYmEoMCwwLDAsMC4yKSwgdHJ1ZSk7XG5cdFx0XHRcdFx0LmdyYWRpZW50TGluZWFyKGxpZ2h0ZW4oQG1haW5Db2xvciwgMTApLCAxNjBkZWcsIGxpZ2h0ZW4oQG1haW5Db2xvciwgMTApLCBsaWdodGVuKEBtYWluQ29sb3IsIDE1KSk7XG5cdFx0XHRcdFx0LmJvcmRlcnJhZGl1cygzMHB4KTtcblx0XHRcdFx0XHRpIHtcblx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMTBweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Ji5hY3RpdmUge1xuXHRcdFx0XHRcdGEge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogZGFya2VuKEBidXR0b25Db2xvclByaW0sIDUpO1xuXHRcdFx0XHRcdFx0Y29sb3I6IEBzZWNvbmRDb2xvcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ji5zaG9wTmF2IHtcblx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0bGVmdDogMDtcblx0XHR0b3A6IDcwcHg7XG5cdFx0d2lkdGg6IDgwcHg7XG5cdFx0aGVpZ2h0OiAxMDB2aDtcblx0XHRiYWNrZ3JvdW5kOiBmYWRlKGxpZ2h0ZW4oQG1haW5Db2xvciwgNjApLCAyMCk7XG5cdFx0LmJhY2tibHVyKDRweCk7XG5cdFx0dWwge1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0dG9wOiA0MCU7XG5cdFx0XHRsaSB7XG5cdFx0XHRcdGEge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRjb2xvcjogZGFya2VuKEBzZWNvbmRDb2xvciwgMTUpO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IEBidXR0b25Db2xvclByaW07XG5cdFx0XHRcdFx0cGFkZGluZzogNXB4O1xuXHRcdFx0XHRcdC5ib3gtc2hhZG93KDAgMCA2cHggcmdiYSgwLDAsMCwwLjUpLCB0cnVlKTtcblx0XHRcdFx0XHRzcGFuIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aSB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDI1cHg7XG5cdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4vKiBTaG9wIHNlY3Rpb24gXG4tLS0tLS0tLS0tLS0tLS0tLS0qL1xuc2VjdGlvbiB7XG5cdCYuc2hvcEhlYWRlciB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0cGFkZGluZzogMTBweDtcblx0XHRpbWcucG5nIHtcblx0XHRcdHdpZHRoOiA1MDBweDtcblx0XHR9XG5cdFx0aDIge1xuXHRcdFx0Zm9udC1zaXplOiAzMHB4O1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0XHR9XG5cdFx0YS5wdXJjaGFzZUJ1dHRvbiB7XG5cdFx0XHRtYXJnaW46IDEwcHggMDtcblx0XHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdHBhZGRpbmc6IDEwcHggNTBweDtcblx0XHR9XG5cdFx0c3Bhbi5wcmljZSB7XG5cdFx0XHRmb250LXNpemU6IDMwcHg7XG5cdFx0XHRtYXJnaW4tbGVmdDogMjBweDtcblx0XHRcdGIge1xuXHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0XHRcdGNvbG9yOiBkYXJrZW4oQHNlY29uZENvbG9yLCA1MCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC5fZmxleEFyZWEge1xuXHRcdFx0d2lkdGg6IDUwJTtcblx0XHR9XG5cdH1cblx0Ji5zaG9wQmVzdEFydGljbGUge1xuXHRcdGRpc3BsYXk6IGdyaWQ7XG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcblx0XHRncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg3LCAxZnIpO1xuXHRcdGdyaWQtZ2FwOiA1cHg7XG5cdFx0aGVpZ2h0OiA0MDBweDtcblx0XHRwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgIGFydGljbGUge1xuICAgICAgICBcdGdyaWQtY29sdW1uOiAzIGUoXCIvXCIpIDU7XG4gICAgICAgIFx0aGVpZ2h0OiAxMDAlO1xuICAgICAgICBcdC5zaGFkb3ctZ2xvc3MoKTtcbiAgICAgICAgXHQmOmZpcnN0LWNoaWxkIHtcblx0XHRcdFx0Z3JpZC1jb2x1bW46IDEgZShcIi9cIikgMztcblx0XHRcdFx0Z3JpZC1yb3c6IDEgZShcIi9cIikgODtcbiAgICAgICAgXHR9XG4gICAgICAgIFx0JjpudGgtY2hpbGQoMm4pIHtcbiAgICAgICAgXHRcdGdyaWQtcm93OiAxIGUoXCIvXCIpIDU7XG4gICAgICAgIFx0fVxuICAgICAgICBcdCY6bnRoLWNoaWxkKDNuKSB7XG4gICAgICAgIFx0XHRncmlkLXJvdzogNSBlKFwiL1wiKSA4O1xuICAgICAgICBcdH1cbiAgICAgICAgfVxuXHR9XG5cdCYuc2hvcEFydGljbGUge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1mbG93OiByb3cgd3JhcDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRhcnRpY2xlIHtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdGZsZXg6IGF1dG87XG5cdFx0XHRtYXJnaW46IDVweDtcblx0XHRcdHdpZHRoOiAzMDBweDtcblx0XHRcdGhlaWdodDogMzAwcHg7XG5cdFx0XHRoMyB7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0cGFkZGluZzogMzBweDtcblx0XHRcdFx0LmdyYWRpZW50TGluZWFyKGZhZGUoQG1haW5Db2xvciwgMCksIDBkZWcsIGZhZGUoQG1haW5Db2xvciwgOTApIDIwJSwgZmFkZShAbWFpbkNvbG9yLCAwKSAxMDAlKTtcblx0XHRcdH1cblx0XHRcdHNwYW4ucHJpY2Uge1xuXHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0dG9wOiAwcHg7XG5cdFx0XHRcdHJpZ2h0OiAwcHg7XG5cdFx0XHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMjVweDtcblx0XHRcdFx0LmdyYWRpZW50TGluZWFyKGZhZGUoQG1haW5Db2xvciwgMCksIDI2MGRlZywgZmFkZShAbWFpbkNvbG9yLCA5MCkgMjAlLCBmYWRlKEBtYWluQ29sb3IsIDApIDEwMCUpO1xuXHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdHdpZHRoOiAyMHB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQmOm50aC1jaGlsZChldmVuKSB7XG5cdFx0XHRcdHdpZHRoOiAyNTBweDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0iLCIvKiBWYXJzIFxuLS0tLS0tLS0tLS0tLS0tLS0tKi9cbkBwYXRoQXNzZXRzOiBcIi4vYXNzZXRzXCI7XG5AcGF0aEZvbnQ6IFwiQHtwYXRoQXNzZXRzfS9mb250c1wiO1xuXG5AbWFpbkNvbG9yOiAjMjAyMjI1O1xuQHNlY29uZENvbG9yOiAjZmZmO1xuXG5AYnV0dG9uQ29sb3JQcmltOiAjZWQ0MjQ1O1xuQGxpbmtDb2xvclByaW06ICMzNDg0ZTU7XG5cbkBtYXgtd2lkdGg6IDE1MDBweDtcbkBibGlua0NvbG9yOiAjMzhhNTE3O1xuXG4vKiBFeHRlcm5hbCBzdHlsZXNoZWV0IFxuLS0tLS0tLS0tLS0tLS0tLS0tKi9cbkBpbXBvcnQgXCJAe3BhdGhGb250fS9pY29uL2FsbC5taW4uY3NzXCI7XG5cblxuXG4vKiBDb3JlIGZ1bmN0aW9ucyBcbi0tLS0tLS0tLS0tLS0tLS0tLSovXG4uZ3JhZGllbnRMaW5lYXIoQGJhY2tncm91bmQsIEBkZWcsIEBjb2xvcjEsIEBjb2xvcjIpIHtcblx0YmFja2dyb3VuZDogQGJhY2tncm91bmQgLW1vei1saW5lYXItZ3JhZGllbnQoQGRlZywgQGNvbG9yMSwgQGNvbG9yMik7XG5cdGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kIC13ZWJraXQtbGluZWFyLWdyYWRpZW50KEBkZWcsIEBjb2xvcjEsIEBjb2xvcjIpO1xuXHRiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZCBsaW5lYXItZ3JhZGllbnQoQGRlZywgQGNvbG9yMSwgQGNvbG9yMik7XG5cdGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9XCJAY29sb3IxXCIsZW5kQ29sb3JzdHI9XCJAY29sb3IyXCIsR3JhZGllbnRUeXBlPTEpO1xufVxuXG4uZ3JhZGllbnRMaW5lYXJJbWcoQGJhY2tncm91bmQsIEBkZWcsIEBjb2xvcjEsIEBjb2xvcjIsIEB1cmwpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYmFja2dyb3VuZDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoQHVybCksIC1tb3otbGluZWFyLWdyYWRpZW50KEBkZWcsIEBjb2xvcjEsIEBjb2xvcjIpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChAdXJsKSwgLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoQGRlZywgQGNvbG9yMSwgQGNvbG9yMik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKEB1cmwpLCBsaW5lYXItZ3JhZGllbnQoQGRlZywgQGNvbG9yMSwgQGNvbG9yMik7XG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj1cIkBjb2xvcjFcIixlbmRDb2xvcnN0cj1cIkBjb2xvcjJcIixHcmFkaWVudFR5cGU9MSk7XG59XG5cbi5ib3gtc2hhZG93KEBzaGFkb3csIEBpbnNldDpmYWxzZSkge1xuICAgICYgd2hlbiAoQGluc2V0ID0gdHJ1ZSkge1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgQHNoYWRvdztcbiAgICAgICAgYm94LXNoYWRvdzppbnNldCBAc2hhZG93O1xuICAgIH1cbiAgICAmIHdoZW4gKEBpbnNldCA9IGZhbHNlKSB7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogQHNoYWRvdztcbiAgICAgICAgYm94LXNoYWRvdzogQHNoYWRvdztcbiAgICB9XG59XG5cbi5ib3gtc2l6aW5nKEBwYXJhbSkge1xuICAgIC13ZWJraXQtYm94LXNpemluZzogQHBhcmFtO1xuICAgIGJveC1zaXppbmc6IEBwYXJhbTtcbn1cblxuLmJvcmRlcnJhZGl1cyhAZGVncmVlKSB7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogQGRlZ3JlZTtcblx0Ym9yZGVyLXJhZGl1czogQGRlZ3JlZTtcbn1cblxuLmJhY2tibHVyKEBibHVyKSB7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoQGJsdXIpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cihAYmx1cik7XG59XG5cbi50cmFuc2l0aW9uKEB0eXBlLCBAdGltZSwgQGVhc2luZykge1xuXHQtd2Via2l0LXRyYW5zaXRpb246IEB0eXBlIEB0aW1lIEBlYXNpbmc7XG5cdC1tb3otdHJhbnNpdGlvbjogQHR5cGUgQHRpbWUgQGVhc2luZztcblx0LW1zLXRyYW5zaXRpb246IEB0eXBlIEB0aW1lIEBlYXNpbmc7XG5cdC1vLXRyYW5zaXRpb246IEB0eXBlIEB0aW1lIEBlYXNpbmc7XG5cdHRyYW5zaXRpb246IEB0eXBlIEB0aW1lIEBlYXNpbmc7XG59XG5cbi50cmFuc2Zvcm0oQHR5cGUpIHtcbiAgICAtbW96LXRyYW5zZm9ybTogQHR5cGU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IEB0eXBlO1xuICAgIC1vLXRyYW5zZm9ybTogQHR5cGU7XG4gICAgLW1zLXRyYW5zZm9ybTogQHR5cGU7XG4gICAgdHJhbnNmb3JtOiBAdHlwZTtcbn1cblxuLmNvdmVyIHtcblx0LXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5zaGFkb3ctZ2xvc3Mge1xuXHQtbW96LWJveC1zaGFkb3c6IHJnYmEoMCwwLDAsMC4xKSAwcHggMXB4IDNweCwgaW5zZXQgcmdiYSgyNTUsMjU1LDI1NSwwLjIpIDBweCAxcHggMHB4O1xuXHQtd2Via2l0LWJveC1zaGFkb3c6IHJnYmEoMCwwLDAsMC4xKSAwcHggMXB4IDNweCwgaW5zZXQgcmdiYSgyNTUsMjU1LDI1NSwwLjIpIDBweCAxcHggMHB4O1xuXHRib3gtc2hhZG93OiByZ2JhKDAsMCwwLDAuMSkgMHB4IDFweCAzcHgsIGluc2V0IHJnYmEoMjU1LDI1NSwyNTUsMC4yKSAwcHggMXB4IDBweDtcbn1cblxuLyogRm9udHMgXG4tLS0tLS0tLS0tLS0tLS0tLS0qL1xuQGZvbnQtZmFjZXtcblx0Zm9udC1mYW1pbHk6IHNmIGRpc3BsYXk7XG5cdHNyYzp1cmwoJ0B7cGF0aEZvbnR9L3NmIGRpc3BsYXkvc2YgZGlzcGxheS53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG59XG5cbkBmb250LWZhY2V7XG5cdGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuXHRzcmM6dXJsKCdAe3BhdGhGb250fS9tb250c2VycmF0L01vbnRzZXJyYXQtQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG59XG5cbkBmb250LWZhY2V7XG5cdGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuXHRzcmM6dXJsKCdAe3BhdGhGb250fS9wb3BwaW5zL3BvcHBpbnMtdjE1LWxhdGluLXJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpLFxuICAgIHVybCgnQHtwYXRoRm9udH0vcG9wcGlucy9wb3BwaW5zLXYxNS1sYXRpbi1yZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xufVxuXG4vKiBBbmltYXRpb25cbi0tLS0tLS0tLS0tLS0tLS0tLSovXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcbiAgICAwJSxcbiAgICAxMDAlLFxuICAgIDI0LjklLFxuICAgIDc1LjElIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMjUlLFxuICAgIDc1JSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG5cbi8qIEdsb2JhbCBcbi0tLS0tLS0tLS0tLS0tLS0tLSovXG4qIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICAuYm94LXNpemluZyhib3JkZXItYm94KTtcbiAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgfVxuICAgIGEge1xuICAgICAgICBjb2xvcjogQGxpbmtDb2xvclByaW07XG4gICAgfVxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbihAbWFpbkNvbG9yLCAyMCk7XG4gICAgICAgIC5ib3JkZXJyYWRpdXMoMTBweCk7XG4gICAgICAgIC5ib3gtc2hhZG93KDAgMCA2cHggcmdiYSgwLDAsMCwwLjMpLCB0cnVlKTtcbiAgICB9XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICB3aWR0aDogOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbnZpc2liZWw7XG4gICAgfVxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbihAbWFpbkNvbG9yLCA1KTtcbiAgICAgICAgLmJvcmRlcnJhZGl1cygxMHB4KTtcbiAgICAgICAgLmJveC1zaGFkb3coMCAwIDZweCByZ2JhKDAsMCwwLDAuMyksIHRydWUpO1xuICAgIH1cbn1cblxuLmNscjphZnRlciB7XG4gICAgY29udGVudDpcIlwiO1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgY2xlYXI6Ym90aDtcbn1cblxuYm9keSB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYmFja2dyb3VuZDogQG1haW5Db2xvcjtcbiAgICBjb2xvcjogQHNlY29uZENvbG9yO1xuICAgIGZvbnQ6IDE2cHggXCJzZiBkaXNwbGF5XCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xufVxuXG4ud3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC13aWR0aDogQG1heC13aWR0aDtcbn1cblxuLl9kaXNwbGF5RmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbm5hdiB7XG4gICAgdWwge1xuICAgICAgICBsaSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5lbmdpbmUtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0IDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY2FudmFzIHtcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICYucmVnaXN0ZXJDYW52YXMge1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50b29saXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAuX1Rvb2xpcCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLnNob3dUb29saXAge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICB0b3A6IDgwcHg7XG4gICAgICAgICAgICBsZWZ0OiAtNDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiBAbWFpbkNvbG9yO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBAc2Vjb25kQ29sb3I7XG4gICAgICAgICAgICAuYm9yZGVycmFkaXVzKDRweCk7XG4gICAgICAgICAgICAuc2Vjb25kVG9vbGlwIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogbGlnaHRlbihAbWFpbkNvbG9yLCA0MCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOjphZnRlcntcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTA7XG4gICAgICAgICAgICAgICAgY29udGVudDogJyAnO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSA1cHgpO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkIEBzZWNvbmRDb2xvcjtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IEBzZWNvbmRDb2xvciB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCBAc2Vjb25kQ29sb3I7XG4gICAgICAgICAgICAgICAgLnRyYW5zZm9ybShyb3RhdGUoNDVkZWcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuX1Rvb2xpcEJpbmQ6aG92ZXIgKyAuc2hvd1Rvb2xpcCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0b3A6IDUwcHg7XG4gICAgfVxufVxuXG4udGFibGlzdCB7XG4gICAgLnRhYmxpc3RXaW5kb3cge1xuICAgICAgICAmOm5vdCguYWN0aXZlZCkge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAudGFibGlzdEJ1dHRvbiB7XG4gICAgICAgIGEge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgY29sb3I6IGxpZ2h0ZW4oQG1haW5Db2xvciwgNDApO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogZmFkZShsaWdodGVuKEBtYWluQ29sb3IsIDIwKSwgMjApO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZmFkZShsaWdodGVuKEBtYWluQ29sb3IsIDQwKSwgMik7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gICAgICAgICAgICAudHJhbnNpdGlvbihiYWNrZ3JvdW5kLCAzMDBtcywgZWFzZS1pbi1vdXQpO1xuICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGZhZGUobGlnaHRlbihAbWFpbkNvbG9yLCA2MCksIDIwKTtcbiAgICAgICAgICAgICAgICAuYm94LXNoYWRvdygwIDAgMTBweCAwIHJnYmEoMCwwLDAsMC4yKSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBmYWRlKGxpZ2h0ZW4oQG1haW5Db2xvciwgNTApLCAyMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5hbGVydCB7XG4gICAgQGNvbG9yQmFzZUFsZXJ0OiBsaWdodGVuKEBtYWluQ29sb3IsIDIwKTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAzMHB4O1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIHotaW5kZXg6IDU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiBmYWRlKEBjb2xvckJhc2VBbGVydCwgNzApO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0ZW4oQGNvbG9yQmFzZUFsZXJ0LCAyMCk7XG4gICAgLmJvcmRlcnJhZGl1cyg0cHgpO1xuICAgIC5iYWNrYmx1cig0cHgpO1xuICAgIC5zaGFkb3ctZ2xvc3MoKTtcbiAgICAmLnN1Y2Nlc3Mge1xuICAgICAgICBAY29sb3JCYXNlQWxlcnQ6ICMzNzhlMjY7XG4gICAgICAgIGJhY2tncm91bmQ6IGZhZGUoQGNvbG9yQmFzZUFsZXJ0LCA3MCk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0ZW4oQGNvbG9yQmFzZUFsZXJ0LCAyMCk7XG4gICAgfVxuICAgICYuZGFuZ2VyIHtcbiAgICAgICAgQGNvbG9yQmFzZUFsZXJ0OiAjYmExODE4O1xuICAgICAgICBiYWNrZ3JvdW5kOiBmYWRlKEBjb2xvckJhc2VBbGVydCwgNzApO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGVuKEBjb2xvckJhc2VBbGVydCwgMjApO1xuICAgIH1cbiAgICAmLmluZm8ge1xuICAgICAgICBAY29sb3JCYXNlQWxlcnQ6ICNjOWMwMGU7XG4gICAgICAgIGJhY2tncm91bmQ6IGZhZGUoQGNvbG9yQmFzZUFsZXJ0LCA3MCk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0ZW4oQGNvbG9yQmFzZUFsZXJ0LCAyMCk7XG4gICAgfVxuICAgICYud2FybmluZyB7XG4gICAgICAgIEBjb2xvckJhc2VBbGVydDogI2JhN2MxODtcbiAgICAgICAgYmFja2dyb3VuZDogZmFkZShAY29sb3JCYXNlQWxlcnQsIDcwKTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRlbihAY29sb3JCYXNlQWxlcnQsIDIwKTtcbiAgICB9XG4gICAgYS5jbG9zZSB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBjb2xvcjogQGJ1dHRvbkNvbG9yUHJpbTtcbiAgICB9XG59XG5cbi8qIEhlYWRlciBcbi0tLS0tLS0tLS0tLS0tLS0tLSovXG5oZWFkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbmF2IHtcbiAgICAgICAgJi5tYWluIHtcbiAgICAgICAgICAgIGZsZXg6IDIgMSBhdXRvO1xuICAgICAgICAgICAgdWwubmF2aWdhdGlvbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAgICAgICAgICAgICBsaS5pdGVtTmF2IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGEubmF2TGluayB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGRhcmtlbihAc2Vjb25kQ29sb3IsIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAudHJhbnNpdGlvbihhbGwsIDMwMG1zLCBlYXNlLWluLW91dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyOm5vdChuYXYubWFpbiB1bCBsaS5hY3RpdmUgYSwgbmF2Lm1haW4gdWwgbGkudXNlciBhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0ZW4oQG1haW5Db2xvciwgMzApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDMwcHggc29saWQgZGFya2VuKEBzZWNvbmRDb2xvciwgMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDMwcHggc29saWQgZGFya2VuKEBzZWNvbmRDb2xvciwgMTApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICYudXNlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGEubmF2TGluayB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgZGFya2VuKEBzZWNvbmRDb2xvciwgMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKGFsbCwgMzAwbXMsIGVhc2UtaW4tb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYm9yZGVycmFkaXVzKDIwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oQHNlY29uZENvbG9yLCAxMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBsaWdodGVuKEBtYWluQ29sb3IsIDMwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAmLmxvZ2dlZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcuYXZhdGFye1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJvcmRlcnJhZGl1cyg1MCUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5uYXZEcm9wZG93biB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQERyb3duRG93bkNvbG9yOiBsaWdodGVuKEBtYWluQ29sb3IsIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEsIDFmcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMTYwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IEBEcm93bkRvd25Db2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogQG1haW5Db2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYm9yZGVycmFkaXVzKDRweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdWwudXNlck5hdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJi5zdGF0cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IDEgZShcIi9cIikgMSBlKFwiL1wiKSAyIGUoXCIvXCIpIDQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBsaWdodGVuKEBEcm93bkRvd25Db2xvciwgMjApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGkubmF2U2hvd1N0YXRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0ZW4oQERyb3duRG93bkNvbG9yLCA2MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpub3QoJjpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGVuKEBEcm93bkRvd25Db2xvciwgNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVsLm5hdkxpc3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLm5hdmlnYXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogMSBlKFwiL1wiKSA0IGUoXCIvXCIpIDIgZShcIi9cIikgNjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyNHB4IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRlbihARHJvd25Eb3duQ29sb3IsIDIwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0ZW4oQERyb3duRG93bkNvbG9yLCA1MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5ib3gtc2hhZG93KC0xMnB4IC04cHggNDBweCByZ2JhKDcwLCA3MCwgNzAsIDAuNyksIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudHJhbnNpdGlvbihhbGwsIDMwMG1zLCBlYXNlLWluLW91dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRlbihARHJvd25Eb3duQ29sb3IsIDUwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBsaWdodGVuKEBEcm93bkRvd25Db2xvciwgMjApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJvcmRlcnJhZGl1cygwIDRweCAwIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYuY2hhcmFjdGVycyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IDIgZShcIi9cIikgMSBlKFwiL1wiKSAzIGUoXCIvXCIpIDY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaS5uYXZfY2hhcmFjdGVyQm94IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbihARHJvd25Eb3duQ29sb3IsIDMwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzMHB4IC0yMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5ib3gtc2hhZG93KC0xMnB4IC04cHggNDBweCByZ2JhKDcwLCA3MCwgNzAsIDAuNyksIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVsLm5hdl9jaGFyYWN0ZXJTdGF0cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0ZW4oQERyb3duRG93bkNvbG9yLCA1MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDJkMTNhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYuc2hvd1Byb2dyZXNzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJvZ3Jlc3NMZXZlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oQERyb3duRG93bkNvbG9yLCA1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJvcmRlcnJhZGl1cyg1cHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLi0tcHJvZ3Jlc3NlZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKEBEcm93bkRvd25Db2xvciwgMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGg1IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBsaWdodGVuKEBEcm93bkRvd25Db2xvciwgNjApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2VzdENoYXJhTGluayB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDsgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZmFkZShAYnV0dG9uQ29sb3JQcmltLCAyMCUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRlbihAYnV0dG9uQ29sb3JQcmltLCAxMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogQHNlY29uZENvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJhY2tibHVyKDRweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudHJhbnNpdGlvbihiYWNrZ3JvdW5kLCAzMDBtcywgZWFzZS1pbi1vdXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJvcmRlcnJhZGl1cygzcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZmFkZShAYnV0dG9uQ29sb3JQcmltLCA1MCUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5ib3JkZXJyYWRpdXMoMCAwIDRweCA0cHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogbGlnaHRlbihARHJvd25Eb3duQ29sb3IsIDQwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLS1kcm9wRmxleCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxNzhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogQERyb3duRG93bkNvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudHJhbnNmb3JtKHJvdGF0ZSg0NWRlZykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpbWcubG9nbyB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgIH1cbn1cblxuLyogU2VjdGlvbnNcbi0tLS0tLS0tLS0tLS0tLS0tLSovXG5zZWN0aW9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgJi5ob21lIHtcbiAgICAgICAgaGVpZ2h0OiAxNTB2aDtcbiAgICAgICAgJi5tYWluIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ0B7cGF0aEFzc2V0c30vaW1nL2JsYWNrL3NlY3Rpb25zL2hvbWUvaGVhZGVyLnBuZycpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAudG9wX3JpZ2h0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdAe3BhdGhBc3NldHN9L2ltZy9kZXNpZ24vaGVhZGVyX3JpZ2h0MS5wbmcnKTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRvcF9zb2NpYWwge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDM1JTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAxJTtcbiAgICAgICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMzVweCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKEBzZWNvbmRDb2xvciwgMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLmJvcmRlcnJhZGl1cyg0cHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oYWxsLCAzMDBtcywgZWFzZS1pbi1vdXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBsaWdodGVuKEBtYWluQ29sb3IsIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oQG1haW5Db2xvciwgMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogQHNlY29uZENvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50b3BfcGluIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAzMCU7XG4gICAgICAgICAgICAgICAgbGVmdDogNyU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IEBzZWNvbmRDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrZW4oQHNlY29uZENvbG9yLCAxMCk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYS5yZWdpc3RlciB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBAbWFpbkNvbG9yO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oQHNlY29uZENvbG9yLCAxMCk7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNDBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICAudHJhbnNpdGlvbihhbGwsIDMwMG1zLCBlYXNlLWluLW91dCk7XG4gICAgICAgICAgICAgICAgICAgIC5ib3JkZXJyYWRpdXMoMzBweCk7XG4gICAgICAgICAgICAgICAgICAgIC5zaGFkb3ctZ2xvc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oQG1haW5Db2xvciwgMzApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGRhcmtlbihAc2Vjb25kQ29sb3IsIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNDBweCAxMHB4IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGl2LnNlcnZlciB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIC5iYWNrYmx1cigxMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgLnNoYWRvdy1nbG9zcygpO1xuICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogbGlnaHRlbihAbWFpbkNvbG9yLCA0MCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICYuaXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGRhcmtlbihAc2Vjb25kQ29sb3IsIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICYucGxheWVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrZW4oQHNlY29uZENvbG9yLCAxMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrZW4oQHNlY29uZENvbG9yLCAzMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGl2LmJsaW5rIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogQGJsaW5rQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IDFzIGluZmluaXRlIGJsaW5rOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgLmJveC1zaGFkb3coMCAwIDE1cHggMCBAYmxpbmtDb2xvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAuYm9yZGVycmFkaXVzKDUwJSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnByb2dyZXNzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRlbihAbWFpbkNvbG9yLCAyMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAuYm9yZGVycmFkaXVzKDMwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJi4tcHJvZ3Jlc3NlZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRlbihAbWFpbkNvbG9yLCA0MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNvbm5lY3RlZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNDBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLnByZXNlbnRhdGlvbiB7XG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1MHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTdweDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC0yMHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZGFya2VuKEBzZWNvbmRDb2xvciwgMjApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5vYmplY3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgIGdhcDogMjBweCA1MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAzMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAudmlld19leGVtcGxlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKEBtYWluQ29sb3IsIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMzBweCA0NXB4O1xuICAgICAgICAgICAgICAgICAgICAuYm9yZGVycmFkaXVzKDRweCk7XG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5hdXRoLXdyYXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDgwcHg7XG4gICAgei1pbmRleDogMztcbiAgICAmLnJlZ2lzdGVyUGFnZSB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgLnJlZ2lzdGVyLWluZm8ge1xuICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgfVxuICAgICAgICAubm8tYXZhdGFyIHtcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgLmJvcmRlcnJhZGl1cyg1MCUpO1xuICAgICAgICB9XG4gICAgICAgIC5zdGVwcy1yZWdpc3RlciB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgIG9sIHtcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGxpZ2h0ZW4oQG1haW5Db2xvciwgNDApO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogbGlnaHRlbihAbWFpbkNvbG9yLCAzMCk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgYiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNwYW46bm90KC5zdGVwTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogbGlnaHRlbihAbWFpbkNvbG9yLCA1MCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3Bhbi5zdGVwTnVtYmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogLTM1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oQG1haW5Db2xvciwgNDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IEBzZWNvbmRDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ib3JkZXJyYWRpdXMoNTAlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAmLnBhc3NlZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiLCBzcGFuOm5vdCguc3RlcE51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4uc3RlcE51bWJlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogQGJ1dHRvbkNvbG9yUHJpbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKEBtYWluQ29sb3IsIDgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ib3gtc2hhZG93KDAgMCAxMHB4IDAgZmFkZShAYnV0dG9uQ29sb3JQcmltLCA1MCksIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Bhbi5zdGVwTnVtYmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBAYnV0dG9uQ29sb3JQcmltO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICY6bm90KCY6bGFzdC1jaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgJi5DaGFyYWN0ZXJTaG93IHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cbn1cblxuLnNraW5QaWNrIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIHotaW5kZXg6IDI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiBAbWF4LXdpZHRoO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC5zY3JvbGxTa2luIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgICAgICAgLnNraW5BcmVhIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGJvdHRvbTogLTYwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTYwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIC5za2luV3JhcCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogOTAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgICAgICAgICAgICAgLnNraW5TaGFkb3cge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oQG1haW5Db2xvciwgNTApO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4NSU7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgLnRyYW5zZm9ybShza2V3WCgtMjBkZWcpKTtcbiAgICAgICAgICAgICAgICAgICAgLnNoYWRvdy1nbG9zcygpO1xuICAgICAgICAgICAgICAgICAgICAudHJhbnNpdGlvbihiYWNrZ3JvdW5kLCAzMDBtcywgZWFzZS1pbi1vdXQpO1xuICAgICAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBmYWRlKCNlYWJhMGIsIDUwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ib3gtc2hhZG93KDAgMCAxMHB4IDFweCBmYWRlKCNlYWJhMGIsIDUwKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBmYWRlKCNlYWJhMGIsIDUwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oQG1haW5Db2xvciwgMjApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC01MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0yMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmFuc2Zvcm0oc2tld1goMjBkZWcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMTZweCAxNnB4IDIwcHggQG1haW5Db2xvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAmLnNoYWRvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMjQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNjcm9sbCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAtMTBweDtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgaGVpZ2h0OiAxMjAlO1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgIC5ib3gtc2hhZG93KDEycHggMCAxNXB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjgpIGUoXCIsXCIpIC0xMnB4IDAgMTVweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC44KSk7XG4gICAgICAgIC5iYWNrYmx1cig0cHgpO1xuICAgICAgICBpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNDUlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgY29sb3I6IEBtYWluQ29sb3I7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAudHJhbnNpdGlvbihvcGFjaXR5LCAzMDBtcywgZWFzZS1pbi1vdXQpO1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYubGVmdCB7XG4gICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLnJpZ2h0IHtcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2FyZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oQG1haW5Db2xvciwgMTApO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnQHtwYXRoQXNzZXRzfS9pbWcvYmxhY2svc2VjdGlvbnMvYXV0aC9jYXJkLnBuZycpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCAtMzAwcHg7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIC5ib3JkZXJyYWRpdXMoM3B4KTtcbiAgICAuY292ZXIoKTtcbiAgICAuY2FyZC1oZWFkZXIge1xuICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IC0xMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICBjb2xvcjogZGFya2VuKEBzZWNvbmRDb2xvciwgMTApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGEubGlua1Bhc3NfcmVjIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgICAuY2hlY2stcmVnaXN0ZXIge1xuICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiBAYnV0dG9uQ29sb3JQcmltO1xuICAgICAgICB9XG4gICAgfVxuICAgICYucmVnaXN0ZXJDYXJkIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG59XG5cbmZvcm0ge1xuICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgLmRpc3BsYXlNdWx0aXBsZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgLm1haW4ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5nZW5kZXJXaWR0aCB7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLml0ZW1NdWx0aXBsZTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5wcm9maWxlLXBpYyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBjb2xvcjogZGFya2VuKEBzZWNvbmRDb2xvciwgMjApO1xuICAgICAgICB9XG4gICAgICAgIC5pbnZhbGlkLWZlZWRiYWNrIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IHNxdWFyZTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0ZW4oQGJ1dHRvbkNvbG9yUHJpbSwgNSk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmNpcmNsZUNob29zZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgJi5za2luQ2hvb3NlIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRlbihAbWFpbkNvbG9yLCA1MCk7XG4gICAgICAgICAgICAgICAgLmJvcmRlcnJhZGl1cyg1MCUpO1xuICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKG9wYWNpdHksIDMwMG1zLCBlYXNlLWluLW91dCk7XG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJi53aGl0ZSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZGU1Yzk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICYuYmxhY2sge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYjI3YjUyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYuc2V4Q2hvb3NlIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKEBzZWNvbmRDb2xvciwgMTApO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogQG1haW5Db2xvcjtcbiAgICAgICAgICAgICAgICAuYm9yZGVycmFkaXVzKDRweCk7XG4gICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oYmFja2dyb3VuZCwgMzAwbXMsIGVhc2UtaW4tb3V0KTtcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKEBzZWNvbmRDb2xvciwgMzApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY2lyY2xlVGV4dCB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtNHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmxhYmVsLWZpbGUge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGNvbG9yOiBAbGlua0NvbG9yUHJpbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIH1cbiAgICAubGFiZWwtZmlsZTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiBkYXJrZW4oQGxpbmtDb2xvclByaW0sIDIwKTtcbiAgICB9XG5cbiAgICAuaW5wdXQtZmlsZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgc2VsZWN0IHtcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgY29sb3I6IGRhcmtlbihAc2Vjb25kQ29sb3IsIDEwKTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIEBtYWluQ29sb3I7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oQG1haW5Db2xvciwgMjApO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBuTWpBd0p5Qm9aV2xuYUhROUp6SXdNQ2NnWm1sc2JEMGlJekF3TURBd01DSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2RtVnljMmx2YmowaU1TNHhJaUIyYVdWM1FtOTRQU0l3SURBZ01qUWdNalFpSUhnOUlqQndlQ0lnZVQwaU1IQjRJajQ4Y0dGMGFDQm1hV3hzUFNJak1EQXdNREF3SWlCa1BTSk5NVElnTVRoc0xURXhMakF4T1MweE1XZ3lNaTR3TXpoNklpOCtQQzl6ZG1jKyk7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogLjhlbTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gLjRlbSkgY2VudGVyO1xuICAgICAgICAuYm9yZGVycmFkaXVzKDRweCk7XG4gICAgfVxuXG4gICAgdGV4dGFyZWEge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogbGlnaHRlbihAbWFpbkNvbG9yLCAyMCk7XG4gICAgICAgIGNvbG9yOiBkYXJrZW4oQHNlY29uZENvbG9yLCAxMCk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIEBtYWluQ29sb3I7XG4gICAgfVxuXG4gICAgaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKEBtYWluQ29sb3IsIDIwKTtcbiAgICAgICAgY29sb3I6IGRhcmtlbihAc2Vjb25kQ29sb3IsIDEwKTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgQG1haW5Db2xvcjtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgLmJvcmRlcnJhZGl1cyg0cHgpO1xuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgJi5pcy1pbnZhbGlkIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0ZW4oQGJ1dHRvbkNvbG9yUHJpbSwgNSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgYmFja2dyb3VuZDogZmFkZShAYnV0dG9uQ29sb3JQcmltLCAyMCUpO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGVuKEBidXR0b25Db2xvclByaW0sIDEwKTtcbiAgICAgICAgY29sb3I6IEBzZWNvbmRDb2xvcjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAuYmFja2JsdXIoNHB4KTtcbiAgICAgICAgLnRyYW5zaXRpb24oYmFja2dyb3VuZCwgMzAwbXMsIGVhc2UtaW4tb3V0KTtcbiAgICAgICAgLmJvcmRlcnJhZGl1cygzcHgpO1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGZhZGUoQGJ1dHRvbkNvbG9yUHJpbSwgNTAlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */", "\n\t:root {\n\t\t--shopBackground: url('./assets/shop/storage/head/0.png');\n\t}\n"], encapsulation: 2 });


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
        // const controls = new OrbitControls( this.camera, this.canvas);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class sharedModule {
}
sharedModule.ɵfac = function sharedModule_Factory(t) { return new (t || sharedModule)(); };
sharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: sharedModule });
sharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](sharedModule, { declarations: [_web_gl_web_gl_component__WEBPACK_IMPORTED_MODULE_1__["WebGLComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_web_gl_web_gl_component__WEBPACK_IMPORTED_MODULE_1__["WebGLComponent"]] }); })();


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

/***/ "feRq":
/*!**********************************************!*\
  !*** ./src/app/model/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _web_gl_web_gl_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../web-gl/web-gl.component */ "hau+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-skeleton-loader */ "xJkR");




const _c0 = function () { return { display: "block", width: "40px", height: "40px", background: "#4b4f56", margin: "35px 0", "border-radius": "4px" }; };
function HomeComponent_ngx_skeleton_loader_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-skeleton-loader", 17);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function HomeComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return { width: "450px", height: "30px", background: "#4b4f56" }; };
function HomeComponent_ngx_skeleton_loader_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-skeleton-loader", 23);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
function HomeComponent_h1_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "A new place");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " to roleplay");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function () { return { width: "600px", height: "150px", background: "#4b4f56" }; };
function HomeComponent_ngx_skeleton_loader_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-skeleton-loader", 23);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
} }
function HomeComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget fringilla est. Praesent velit nunc, pulvinar malesuada venenatis vel, lobortis viverra augue. Quisque id consequat justo. Phasellus aliquam hendrerit nisl, non sodales mi feugiat at. Etiam bibendum diam urna. Donec sagittis felis ut iaculis egestas. Maecenas malesuada quam in porttitor placerat. Maecenas quis vestibulum libero.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c3 = function () { return { width: "300px", height: "40px", background: "#4b4f56", "border-radius": "30px" }; };
function HomeComponent_ngx_skeleton_loader_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-skeleton-loader", 23);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c3));
} }
function HomeComponent_a_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Acc\u00E8s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "au serveur");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "RedRoleplay 2.2 DL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "1.1.2.56:80");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "90");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "/150");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 32);
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
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 32, vars: 12, consts: [[1, "home", "main"], [1, "top_right"], ["models", "gta"], [1, "top_social"], ["count", "4", "animation", "pulse", 3, "theme", 4, "ngIf"], [4, "ngIf"], [1, "top_pin"], ["count", "1", "animation", "pulse", 3, "theme", 4, "ngIf"], ["href", "#", "class", "register", 4, "ngIf"], ["class", "server", 4, "ngIf"], [1, "home", "presentation"], [1, "object"], [1, "view_exemple"], ["src", "./assets/img/black/sections/home/object/0.jpg"], ["src", "./assets/img/black/sections/home/object/2.jpg"], ["src", "./assets/img/black/sections/home/object/3.jpg"], ["src", "./assets/img/black/sections/home/object/4.jpg"], ["count", "4", "animation", "pulse", 3, "theme"], ["href", "#"], [1, "fab", "fa-discord"], [1, "fab", "fa-youtube"], [1, "fab", "fa-facebook"], [1, "fab", "fa-twitter"], ["count", "1", "animation", "pulse", 3, "theme"], ["href", "#", 1, "register"], [1, "fas", "fa-arrow-right"], [1, "server"], [1, "blink"], [1, "ip"], [1, "connected"], [1, "player"], [1, "progress"], [1, "progress", "-progressed", 2, "width", "30%"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-web-gl", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_ngx_skeleton_loader_5_Template, 1, 2, "ngx-skeleton-loader", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_li_6_Template, 3, 0, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_li_7_Template, 3, 0, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_li_8_Template, 3, 0, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_li_9_Template, 3, 0, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_ngx_skeleton_loader_11_Template, 1, 2, "ngx-skeleton-loader", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_h1_12_Template, 4, 0, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HomeComponent_ngx_skeleton_loader_13_Template, 1, 2, "ngx-skeleton-loader", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_p_14_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomeComponent_ngx_skeleton_loader_15_Template, 1, 2, "ngx-skeleton-loader", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HomeComponent_a_16_Template, 5, 0, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HomeComponent_div_17_Template, 13, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "LS:R c'est aussi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Un tr\u00E8s large catalogue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loadingSkeleton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingSkeleton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingSkeleton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingSkeleton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingSkeleton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loadingSkeleton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingSkeleton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loadingSkeleton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingSkeleton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loadingSkeleton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingSkeleton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingSkeleton);
    } }, directives: [_web_gl_web_gl_component__WEBPACK_IMPORTED_MODULE_1__["WebGLComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_3__["NgxSkeletonLoaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5sZXNzIn0= */"] });


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
    } }, inputs: { models: "models" }, decls: 3, vars: 3, consts: [[1, "engine-wrapper"], ["id", "renderCanvas", 3, "ngClass"], ["rendererCanvas", ""]], template: function WebGLComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx.models == "skins"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWItZ2wuY29tcG9uZW50Lmxlc3MifQ== */"] });


/***/ }),

/***/ "iy6P":
/*!**********************************************************!*\
  !*** ./src/app/model/section/footer/footer.component.ts ***!
  \**********************************************************/
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
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 0, vars: 0, template: function FooterComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50Lmxlc3MifQ== */"] });


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

/***/ "mKRc":
/*!**********************************************************!*\
  !*** ./src/app/model/section/header/header.component.ts ***!
  \**********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services */ "J9tS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-skeleton-loader */ "xJkR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = ["dropdown_user"];
const _c1 = ["navigation_user"];
const _c2 = function () { return { height: "30px", width: "100px", background: "#4b4f56", margin: "25px 10px 0px 10px" }; };
function HeaderComponent_ngx_skeleton_loader_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-skeleton-loader", 10);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
} }
function HeaderComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Accueil");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Forum");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Membres");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Boutique");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c3 = function () { return { width: "200px", "height": "30px", float: "right", background: "#4b4f56", "border-radius": "20px", margin: "25px 10px 0px 10px" }; };
function HeaderComponent_ngx_skeleton_loader_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-skeleton-loader", 16);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c3));
} }
const _c4 = function () { return { float: "right", "margin-top": "20px", background: "#4b4f56" }; };
function HeaderComponent_ngx_skeleton_loader_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-skeleton-loader", 17);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c4));
} }
function HeaderComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Espace membre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_12_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.dropClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_12_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "D\u00E9connexion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cr\u00E9dit en compte");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Derni\u00E8re connexion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Hier \u00E0 16:20");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Forum");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Les sujets post\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "32");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Les messages post\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "32");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Mon profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Messagerie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Param\u00E8tre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ul", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ul", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Johson Ford");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Argent en total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "b", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "556 222 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Derni\u00E8re connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Aujourd'hui \u00E0 13:10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Level 30 (5/60)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(accountService) {
        this.accountService = accountService;
        this.loadingSkeleton = false;
        this.accountService.user.subscribe(x => this.user = x);
    }
    dropClick() {
        if (this.navDrop.nativeElement.style.display == 'none') {
            this.navDrop.nativeElement.style.display = 'grid';
            this.navUser.nativeElement.style.border = '2px solid #fff';
        }
        else {
            this.navDrop.nativeElement.style.display = 'none';
            this.navUser.nativeElement.style.border = 'none';
        }
    }
    clickout(event) {
        if (this.user) {
            if (!this.navDrop.nativeElement.contains(event.target) && !this.navUser.nativeElement.contains(event.target)) {
                if (this.navDrop.nativeElement.style.display == 'grid') {
                    this.navDrop.nativeElement.style.display = 'none';
                    this.navUser.nativeElement.style.border = 'none';
                }
            }
        }
    }
    logout() {
        this.accountService.logout();
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.loadingSkeleton = true;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["AccountService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.navDrop = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.navUser = _t.first);
    } }, hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_click_HostBindingHandler($event) { return ctx.clickout($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 13, vars: 9, consts: [["src", "./assets/img/logo.png", 1, "logo"], [1, "main"], [1, "navigation"], ["count", "4", "animation", "pulse", 3, "theme", 4, "ngIf"], ["class", "itemNav active", 4, "ngIf"], ["class", "itemNav", 4, "ngIf"], ["count", "1", "animation", "pulse", 3, "theme", 4, "ngIf"], ["count", "1", "appearance", "circle", "animation", "pulse", 3, "theme", 4, "ngIf"], ["class", "itemNav user", 4, "ngIf"], ["class", "itemNav user logged", 4, "ngIf"], ["count", "4", "animation", "pulse", 3, "theme"], [1, "itemNav", "active"], ["routerLink", "/", 1, "navLink"], [1, "itemNav"], ["routerLink", "/forum", 1, "navLink"], ["href", "#", 1, "navLink"], ["count", "1", "animation", "pulse", 3, "theme"], ["count", "1", "appearance", "circle", "animation", "pulse", 3, "theme"], [1, "itemNav", "user"], ["routerLink", "/auth/login", 1, "navLink"], [1, "itemNav", "user", "logged"], ["src", "./assets/storage/avatars/2.png", 1, "avatar", 3, "click"], ["navigation_user", ""], ["href", "", 1, "navLink", 3, "click"], [1, "navDropdown", 2, "display", "none"], ["dropdown_user", ""], [1, "userNav", "stats"], [1, "navShowStats"], [1, "--dropFlex"], ["src", "./assets/img/design/donut.png"], [1, "navList"], [1, "userNav", "navigate"], ["href", ""], [1, "fad", "fa-user-circle"], [1, "fad", "fa-envelope"], [1, "fad", "fa-sliders-h"], [1, "userNav", "characters"], [1, "nav_characterBox", 2, "background-image", "url('./assets/img/skin/1/2.png')"], [1, "nav_characterStats"], [1, "fad", "fa-sack-dollar"], [1, "showProgress"], [1, "progressLevel"], [1, "progressLevel", "--progressed", 2, "width", "30%"], ["href", "#", 1, "gestCharaLink"], [1, "fas", "fa-user-edit"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_ngx_skeleton_loader_4_Template, 1, 2, "ngx-skeleton-loader", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_li_5_Template, 3, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_li_6_Template, 3, 0, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_li_7_Template, 3, 0, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_li_8_Template, 3, 0, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_ngx_skeleton_loader_9_Template, 1, 2, "ngx-skeleton-loader", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_ngx_skeleton_loader_10_Template, 1, 2, "ngx-skeleton-loader", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderComponent_li_11_Template, 3, 0, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HeaderComponent_li_12_Template, 70, 0, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loadingSkeleton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingSkeleton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingSkeleton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingSkeleton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingSkeleton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loadingSkeleton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loadingSkeleton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.user && ctx.loadingSkeleton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user && ctx.loadingSkeleton);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_3__["NgxSkeletonLoaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50Lmxlc3MifQ== */"] });


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
/* harmony import */ var _model_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/home/home.component */ "feRq");
/* harmony import */ var _model_shop_shop_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/shop/shop.component */ "Zufv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const authModule = () => __webpack_require__.e(/*! import() | model-auth-auth-module */ "model-auth-auth-module").then(__webpack_require__.bind(null, /*! ./model/auth/auth.module */ "YVj2")).then(x => x.AuthModule);
const forumModule = () => __webpack_require__.e(/*! import() | model-forum-forum-module */ "model-forum-forum-module").then(__webpack_require__.bind(null, /*! ./model/forum/forum.module */ "Eb2s")).then(x => x.ForumModule);
const AccountModule = () => __webpack_require__.e(/*! import() | model-account-account-module */ "model-account-account-module").then(__webpack_require__.bind(null, /*! ./model/account/account.module */ "gbcn")).then(x => x.AccountModule);
const routes = [
    { path: '', component: _model_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'auth', loadChildren: authModule },
    { path: 'forum', loadChildren: forumModule },
    { path: 'shop', component: _model_shop_shop_component__WEBPACK_IMPORTED_MODULE_2__["ShopComponent"] },
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
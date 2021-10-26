(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["module-messaging-messaging-module"],{

/***/ "MnW9":
/*!******************************************************!*\
  !*** ./src/app/module/messaging/messaging.module.ts ***!
  \******************************************************/
/*! exports provided: MessagingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingModule", function() { return MessagingModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _messaging_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messaging-routing.module */ "SV3s");
/* harmony import */ var _messaging_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messaging.component */ "tNAh");
/* harmony import */ var _message_box_messageBox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message-box/messageBox.component */ "hYMq");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "d2mR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class MessagingModule {
}
MessagingModule.ɵfac = function MessagingModule_Factory(t) { return new (t || MessagingModule)(); };
MessagingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: MessagingModule });
MessagingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
            _messaging_routing_module__WEBPACK_IMPORTED_MODULE_2__["MessagingRoutingModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_5__["sharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MessagingModule, { declarations: [_messaging_component__WEBPACK_IMPORTED_MODULE_3__["MessagingComponent"],
        _message_box_messageBox_component__WEBPACK_IMPORTED_MODULE_4__["MessageBoxComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
        _messaging_routing_module__WEBPACK_IMPORTED_MODULE_2__["MessagingRoutingModule"],
        _shared_module__WEBPACK_IMPORTED_MODULE_5__["sharedModule"]] }); })();


/***/ }),

/***/ "SV3s":
/*!**************************************************************!*\
  !*** ./src/app/module/messaging/messaging-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: MessagingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingRoutingModule", function() { return MessagingRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _messaging_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messaging.component */ "tNAh");
/* harmony import */ var _message_box_messageBox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message-box/messageBox.component */ "hYMq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: '', component: _messaging_component__WEBPACK_IMPORTED_MODULE_1__["MessagingComponent"],
        children: [
            { path: ':id', component: _message_box_messageBox_component__WEBPACK_IMPORTED_MODULE_2__["MessageBoxComponent"] }
        ]
    }
];
class MessagingRoutingModule {
}
MessagingRoutingModule.ɵfac = function MessagingRoutingModule_Factory(t) { return new (t || MessagingRoutingModule)(); };
MessagingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MessagingRoutingModule });
MessagingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MessagingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "hYMq":
/*!**********************************************************************!*\
  !*** ./src/app/module/messaging/message-box/messageBox.component.ts ***!
  \**********************************************************************/
/*! exports provided: MessageBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageBoxComponent", function() { return MessageBoxComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _dicebear_avatars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dicebear/avatars */ "tB1i");
/* harmony import */ var _dicebear_avatars__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dicebear_avatars__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _dicebear_pixel_art__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dicebear/pixel-art */ "y6Nm");
/* harmony import */ var _dicebear_pixel_art__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dicebear_pixel_art__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../_services */ "J9tS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _helpers_safe_html__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../_helpers/safe-html */ "hbwU");











const _c0 = ["chat_box"];
function MessageBoxComponent_li_2_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    const message_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", message_r2.from_user.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function MessageBoxComponent_li_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "safeHtml");
} if (rf & 2) {
    const message_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, message_r2.from_user.svg), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
} }
function MessageBoxComponent_li_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Mod\u00E9rateur");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Hier \u00E0 13:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](message_r2.from_user.username);
} }
const _c1 = function (a0) { return { "space": a0 }; };
function MessageBoxComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, MessageBoxComponent_li_2_img_2_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, MessageBoxComponent_li_2_div_3_Template, 2, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, MessageBoxComponent_li_2_div_5_Template, 7, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c1, !message_r2.sameSender));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !message_r2.sameSender && message_r2.from_user.avatar != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !message_r2.sameSender && message_r2.from_user.avatar == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !message_r2.sameSender);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", message_r2.text, " ");
} }
class MessageBoxComponent {
    constructor(route, AccountService, formBuilder, router, chat, FileUploadService) {
        this.route = route;
        this.AccountService = AccountService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.chat = chat;
        this.FileUploadService = FileUploadService;
        this.href = "";
        this.dialog = null;
        this.beforemessageId = [];
        this.sameSender = false;
    }
    ngOnInit() {
        this.messagingID = this.route.snapshot.params['id'];
        this.AccountService.user.subscribe(x => this.user = x);
        this.href = this.router.url;
        this.form = this.formBuilder.group({
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
        this.chat.getPm(this.messagingID, this.user.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(message => {
            this.dialog = message;
            for (let i = 0; i < this.dialog.messages.length; i++) {
                let sameSender = false;
                if (this.beforemessageId[this.beforemessageId.length - 1] == this.dialog.messages[i].from) {
                    sameSender = true;
                }
                else {
                    sameSender = false;
                }
                this.beforemessageId.push(this.dialog.messages[i].from);
                this.dialog.messages[i]['sameSender'] = sameSender;
                this.FileUploadService.getAvatar(this.dialog.messages[i].from_user.id)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
                    .subscribe(avatar => {
                    const svgAvatar = Object(_dicebear_avatars__WEBPACK_IMPORTED_MODULE_3__["createAvatar"])(_dicebear_pixel_art__WEBPACK_IMPORTED_MODULE_4__, {
                        seed: this.dialog.messages[i].from_user.username,
                        backgroundColor: '#868889',
                    });
                    if (avatar != '') {
                        this.dialog.messages[i].from_user['avatar'] = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + avatar;
                    }
                    else {
                        this.dialog.messages[i].from_user['avatar'] = '';
                        this.dialog.messages[i].from_user['svg'] = svgAvatar;
                    }
                    this.chat_box.nativeElement.scrollTop = this.chat_box.nativeElement.scrollHeight;
                });
            }
        });
        this.chat.messages.subscribe(msg => {
            let sameSender = false;
            if (this.beforemessageId[this.beforemessageId.length - 1] == msg.from) {
                sameSender = true;
            }
            else {
                sameSender = false;
            }
            this.beforemessageId.push(msg.from);
            msg['sameSender'] = sameSender;
            this.AccountService.getById(msg.from)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
                .subscribe(user => {
                this.FileUploadService.getAvatar(user.id)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
                    .subscribe(avatar => {
                    const svgAvatar = Object(_dicebear_avatars__WEBPACK_IMPORTED_MODULE_3__["createAvatar"])(_dicebear_pixel_art__WEBPACK_IMPORTED_MODULE_4__, {
                        seed: user.username,
                        backgroundColor: '#868889',
                    });
                    if (avatar != '') {
                        user['avatar'] = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + avatar;
                    }
                    else {
                        user['avatar'] = '';
                        user['svg'] = svgAvatar;
                    }
                });
                msg['from_user'] = user;
            });
            this.dialog.messages.push(msg);
            this.chat_box.nativeElement.scrollTop = this.chat_box.nativeElement.scrollHeight;
        });
    }
    get f() { return this.form.controls; }
    onSubmit() {
        let text = this.form.get('message').value;
        let sameSender = false;
        this.chat.sendMsg({ text: text, to: this.messagingID, from: this.user.id, dialog: this.dialog.id });
        this.f['message'].setValue('');
        if (this.dialog.messages[this.dialog.messages.length - 1].from_user.id == this.user.id) {
            sameSender = true;
        }
        else {
            sameSender = false;
        }
        this.dialog.messages.push({ text: text, from_user: this.user, sameSender: sameSender });
        setTimeout(() => { this.chat_box.nativeElement.scrollTop = this.chat_box.nativeElement.scrollHeight; }, 50);
    }
}
MessageBoxComponent.ɵfac = function MessageBoxComponent_Factory(t) { return new (t || MessageBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["chatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["FileUploadService"])); };
MessageBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: MessageBoxComponent, selectors: [["app-MessageBox"]], viewQuery: function MessageBoxComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.chat_box = _t.first);
    } }, decls: 5, vars: 2, consts: [[1, "messages"], ["chat_box", ""], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "formGroup", "ngSubmit"], ["type", "text", "placeholder", "Envoyer un message", "formControlName", "message"], [3, "ngClass"], [1, "useravatar"], ["class", "useravatar", 3, "src", 4, "ngIf"], ["class", "useravatar avatarSvg", 3, "innerHTML", 4, "ngIf"], [1, "msg-content"], ["class", "heading", 4, "ngIf"], [1, "useravatar", 3, "src"], [1, "useravatar", "avatarSvg", 3, "innerHTML"], [1, "heading"], [1, "username"], [1, "time"]], template: function MessageBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ol", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, MessageBoxComponent_li_2_Template, 8, 7, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function MessageBoxComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.dialog == null ? null : ctx.dialog.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], pipes: [_helpers_safe_html__WEBPACK_IMPORTED_MODULE_9__["Safe"]], encapsulation: 2 });


/***/ }),

/***/ "tNAh":
/*!*********************************************************!*\
  !*** ./src/app/module/messaging/messaging.component.ts ***!
  \*********************************************************/
/*! exports provided: MessagingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingComponent", function() { return MessagingComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _dicebear_avatars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dicebear/avatars */ "tB1i");
/* harmony import */ var _dicebear_avatars__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dicebear_avatars__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dicebear_pixel_art__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dicebear/pixel-art */ "y6Nm");
/* harmony import */ var _dicebear_pixel_art__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dicebear_pixel_art__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_services */ "J9tS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _helpers_safe_html__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../_helpers/safe-html */ "hbwU");










function MessagingComponent_li_8_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 13);
} if (rf & 2) {
    const fetchUser_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", fetchUser_r2.user.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function MessagingComponent_li_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "safeHtml");
} if (rf & 2) {
    const fetchUser_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, fetchUser_r2.user.svg), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
const _c0 = function (a0, a1) { return { "online": a0, "offline": a1 }; };
function MessagingComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MessagingComponent_li_8_img_1_Template, 1, 1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MessagingComponent_li_8_div_2_Template, 2, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Mod\u00E9rateur");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fetchUser_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "./", fetchUser_r2.user.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", fetchUser_r2.user.avatar != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", fetchUser_r2.user.avatar == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", fetchUser_r2.user == null ? null : fetchUser_r2.user.username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](5, _c0, fetchUser_r2.connected, !fetchUser_r2.connected));
} }
function MessagingComponent_ng_container_10_li_5_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 13);
} if (rf & 2) {
    const online_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", online_r9.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function MessagingComponent_ng_container_10_li_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "safeHtml");
} if (rf & 2) {
    const online_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, online_r9.svg), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function MessagingComponent_ng_container_10_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MessagingComponent_ng_container_10_li_5_img_1_Template, 1, 1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MessagingComponent_ng_container_10_li_5_div_2_Template, 2, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Mod\u00E9rateur");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " John Doe ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " John Doe ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const online_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "./", online_r9.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", online_r9.avatar != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", online_r9.avatar == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", online_r9.username, " ");
} }
function MessagingComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Liste des utilisateurs connect\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, MessagingComponent_ng_container_10_li_5_Template, 14, 4, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.connected_list);
} }
class MessagingComponent {
    constructor(route, AccountService, formBuilder, router, chat, FileUploadService) {
        this.route = route;
        this.AccountService = AccountService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.chat = chat;
        this.FileUploadService = FileUploadService;
        this.href = "";
        this.messages = [];
        this.messagingID = 0;
        this.fetchLast = null;
        this.connected_list = null;
        this.AccountService.user.subscribe(x => this.user = x);
        this.router.events.subscribe((url) => this.href = url.url);
        this.chat.getConnectedList();
    }
    ngOnInit() {
        this.chat.fetchLast(this.user.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])())
            .subscribe(fetch => {
            this.fetchLast = fetch;
            for (let i = 0; i < this.fetchLast.length; i++) {
                if (this.fetchLast[i].dialog_user1.id != this.user.id) {
                    this.fetchLast[i]['user'] = this.fetchLast[i].dialog_user1;
                }
                else {
                    this.fetchLast[i]['user'] = this.fetchLast[i].dialog_user2;
                }
                this.FileUploadService.getAvatar(this.fetchLast[i]['user'].id)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])())
                    .subscribe(avatar => {
                    const svgAvatar = Object(_dicebear_avatars__WEBPACK_IMPORTED_MODULE_2__["createAvatar"])(_dicebear_pixel_art__WEBPACK_IMPORTED_MODULE_3__, {
                        seed: this.fetchLast[i].user.username,
                        backgroundColor: '#868889',
                    });
                    if (avatar != '') {
                        this.fetchLast[i].user['avatar'] = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + avatar;
                    }
                    else {
                        this.fetchLast[i].user['avatar'] = '';
                        this.fetchLast[i].user['svg'] = svgAvatar;
                    }
                });
                this.fetchLast[i]['connected'] = false;
                this.chat.socketConnected(this.fetchLast[i]['user'].id);
            }
        });
        this.chat.connected.subscribe(online => {
            let objIndex = this.fetchLast.findIndex((obj => obj.user.id == online.id));
            if (objIndex != -1) {
                this.fetchLast[objIndex].connected = online.logged;
            }
        });
        this.chat.connected_list.subscribe(connected => {
            this.connected_list = connected;
            for (let i = 0; i < this.connected_list.length; i++) {
                if (this.connected_list[i] == this.user.id) {
                    this.connected_list.splice(i, 1);
                }
                else {
                    this.AccountService.getById(this.connected_list[i])
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])())
                        .subscribe(userInfo => {
                        this.FileUploadService.getAvatar(userInfo.id)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])())
                            .subscribe(avatar => {
                            const svgAvatar = Object(_dicebear_avatars__WEBPACK_IMPORTED_MODULE_2__["createAvatar"])(_dicebear_pixel_art__WEBPACK_IMPORTED_MODULE_3__, {
                                seed: userInfo.username,
                                backgroundColor: '#868889',
                            });
                            if (avatar != '') {
                                userInfo['avatar'] = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + avatar;
                            }
                            else {
                                userInfo['avatar'] = '';
                                userInfo['svg'] = svgAvatar;
                            }
                        });
                        this.connected_list[i] = userInfo;
                    });
                }
            }
        });
    }
    ngAfterViewInit() {
    }
}
MessagingComponent.ɵfac = function MessagingComponent_Factory(t) { return new (t || MessagingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_6__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_6__["chatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_6__["FileUploadService"])); };
MessagingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MessagingComponent, selectors: [["app-messaging"]], decls: 12, vars: 2, consts: [[1, "messaging-wrap"], [1, "message-section"], [1, "users"], [1, "search"], ["type", "text", "placeholder", "@Un pseudo"], [3, "routerLink", 4, "ngFor", "ngForOf"], [1, "message-box"], [4, "ngIf"], [3, "routerLink"], ["class", "avatar", 3, "src", 4, "ngIf"], ["class", "avatar avatarSvg", 3, "innerHTML", 4, "ngIf"], [1, "username"], [1, "statut", 3, "ngClass"], [1, "avatar", 3, "src"], [1, "avatar", "avatarSvg", 3, "innerHTML"], [1, "connected-list"], ["class", "users", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "users", 3, "routerLink"], [1, "characters"], [1, "characterContainer", 2, "background-image", "url('./assets/img/skin/1/2.png')"]], template: function MessagingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, MessagingComponent_li_8_Template, 8, 8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, MessagingComponent_ng_container_10_Template, 6, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.fetchLast);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.href == "/messaging");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]], pipes: [_helpers_safe_html__WEBPACK_IMPORTED_MODULE_9__["Safe"]], styles: ["/* Messaging var and function \n------------------*/\n/* Forum global \n------------------*/\n.messaging-wrap {\n  width: 100%;\n}\n/* Messaging section \n------------------*/\nsection.message-section {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-gap: 0px;\n  height: 100vh;\n  width: 100%;\n  padding-top: 100px;\n}\nsection.message-section .users {\n  background: #202225;\n  box-shadow: inset 0 0 30px 0px rgba(0, 0, 0, 0.5);\n}\nsection.message-section .users ul li {\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin-bottom: 5px;\n  cursor: pointer;\n  padding: 10px;\n}\nsection.message-section .users ul li.search {\n  background: rgba(155, 161, 169, 0.5);\n  cursor: default;\n}\nsection.message-section .users ul li.search form {\n  width: 100%;\n}\nsection.message-section .users ul li img {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\nsection.message-section .users ul li .statut {\n  position: absolute;\n  left: 45px;\n  bottom: 3px;\n  border: 5px solid #202225;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n}\nsection.message-section .users ul li .statut.online {\n  background: #38a517;\n}\nsection.message-section .users ul li:hover {\n  background: rgba(155, 161, 169, 0.5);\n}\nsection.message-section .message-box {\n  position: relative;\n  padding: 10px;\n  background: #43484e;\n}\nsection.message-section .message-box ol.messages {\n  height: 75vh;\n  overflow-x: auto;\n}\nsection.message-section .message-box ol.messages li {\n  display: grid;\n  grid-template-columns: 0.3fr 6fr;\n  grid-gap: 10px;\n  align-items: center;\n}\nsection.message-section .message-box ol.messages li.space:not(:first-child) {\n  margin-top: 20px;\n}\nsection.message-section .message-box ol.messages li .useravatar {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\nsection.message-section .message-box ol.messages li .useravatar svg {\n  border-radius: 50%;\n}\nsection.message-section .message-box ol.messages li .msg-content .heading {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n}\nsection.message-section .message-box ol.messages li .msg-content .heading span.username {\n  font-size: 14px;\n  margin-left: 0;\n}\nsection.message-section .message-box ol.messages li .msg-content .heading span.username b {\n  top: 0;\n}\nsection.message-section .message-box ol.messages li .msg-content .heading span.time {\n  margin-left: 20px;\n  font-size: 13px;\n  font-family: Poppins;\n  color: #737a85;\n}\nsection.message-section .message-box ol.messages li .msg-content p {\n  font-family: Poppins;\n}\nsection.message-section .message-box .connected-list {\n  padding: 10px;\n  border-radius: 4px;\n  box-shadow: inset 0 0 30px 0px rgba(0, 0, 0, 0.5);\n}\nsection.message-section .message-box .connected-list h1 {\n  padding: 10px;\n  text-transform: uppercase;\n}\nsection.message-section .message-box .connected-list ul li.users {\n  display: inline-flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 48%;\n  height: 36px;\n  cursor: pointer;\n  background: #202225;\n  margin: 5px;\n  padding: 5px;\n  overflow: hidden;\n  transition: opacity 300ms ease-in-out;\n  box-shadow: inset 0 0 30px 0px rgba(0, 0, 0, 0.5);\n  border-radius: 30px;\n}\nsection.message-section .message-box .connected-list ul li.users h2 {\n  color: #9ba1a9;\n}\nsection.message-section .message-box .connected-list ul li.users h2 span {\n  font-size: 12px;\n}\nsection.message-section .message-box .connected-list ul li.users ol {\n  width: 62%;\n}\nsection.message-section .message-box .connected-list ul li.users ol li.characters {\n  position: relative;\n  right: -10px;\n  width: 50%;\n  display: inline-block;\n  background-color: #808791;\n  transform: skewX(-20deg);\n}\nsection.message-section .message-box .connected-list ul li.users ol li.characters .characterContainer {\n  padding: 20px;\n  background-position: right -231px top -35px;\n  background-repeat: no-repeat;\n  background-size: 550px;\n  transform: skewX(20deg);\n}\nsection.message-section .message-box .connected-list ul li.users ol li.characters.only {\n  width: 100%;\n}\nsection.message-section .message-box .connected-list ul li.users ol li.characters:last-child {\n  background-color: #ed4245;\n}\nsection.message-section .message-box .connected-list ul li.users:hover {\n  opacity: 0.5;\n}\nsection.message-section .message-box .connected-list ul li.users .avatar {\n  width: 30px;\n  border-radius: 50%;\n}\nsection.message-section .message-box .connected-list ul li.users .avatar svg {\n  border-radius: 50%;\n}\nsection.message-section .message-box form {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\nsection.message-section .message-box form textarea {\n  height: 100px;\n  border-radius: 0;\n}\nsection.message-section span.username {\n  display: inline-block;\n  margin-left: 5px;\n  font-family: Montserrat;\n}\nsection.message-section span.username b {\n  display: block;\n  position: relative;\n  top: -5px;\n  text-transform: uppercase;\n  font-family: arial;\n  color: #808791;\n}\nsection.message-section .users,\nsection.message-section .message-box {\n  width: 100%;\n  height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2luZy5jb21wb25lbnQubGVzcyIsIi4uXFwuLlxcLi5cXHZhcmlhYmxlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7bUJBQ21CO0FBQ25CO21CQUNtQjtBQUtuQjtFQUNDLFdBQUE7QUFIRDtBQUNBO21CQUNtQjtBQVNsQjtFQUNDLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBUEY7QUFDQztFQVFFLG1CQUFBO0VDbUJLLGlEQUFBO0FEdkJSO0FBSkM7RUFZSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFMTDtBQU1LO0VBQ0Msb0NBQUE7RUFDQSxlQUFBO0FBSk47QUFFSztFQUlFLFdBQUE7QUFIUDtBQW5CQztFQTRCSyxXQUFBO0VBQ0EsWUFBQTtFQ2FMLGtCQUFBO0FEakJEO0FBekJDO0VBaUNLLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VDSUwsa0JBQUE7QURQRDtBQUtNO0VBQ0MsbUJBQUE7QUFIUDtBQU1LO0VBQ0Msb0NBQUE7QUFKTjtBQXpDQztFQW1ERSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQVBIO0FBOUNDO0VBdURHLFlBQUE7RUFDQSxnQkFBQTtBQU5KO0FBbERDO0VBMERJLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUxMO0FBT007RUFDQyxnQkFBQTtBQUxQO0FBM0RDO0VBb0VLLFdBQUE7RUFDQSxZQUFBO0VDM0JMLGtCQUFBO0FEdUJEO0FBakVDO0VDMENBLGtCQUFBO0FEMkJEO0FBckVDO0VBNkVNLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FBTFA7QUFPUTtFQUNDLGVBQUE7RUFDQSxjQUFBO0FBTFQ7QUFHUTtFQUlFLE1BQUE7QUFKVjtBQU9RO0VBQ0MsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FBTFQ7QUF2RkM7RUFpR00sb0JBQUE7QUFQUDtBQTFGQztFQXVHRyxhQUFBO0VDN0RILGtCQUFBO0VBZk8saURBQUE7QURzRVI7QUFqR0M7RUEyR0ksYUFBQTtFQUNBLHlCQUFBO0FBUEw7QUFyR0M7RUFnSEssb0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VDbEVMLHFDQUFBO0VBNUJPLGlEQUFBO0VBZVAsbUJBQUE7QURnRkQ7QUExSEM7RUE4SE0sY0FBQTtBQURQO0FBN0hDO0VBZ0lPLGVBQUE7QUFBUjtBQWhJQztFQW9JTSxVQUFBO0FBRFA7QUFuSUM7RUFzSU8sa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUMzRUosd0JBQUE7QURnRko7QUEvSUM7RUE2SVEsYUFBQTtFQUNBLDJDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQ2pGTCx1QkFBQTtBRDJGSjtBQVBRO0VBQ0MsV0FBQTtBQVNUO0FBUFE7RUFDQyx5QkFBQTtBQVNUO0FBTE07RUFDQyxZQUFBO0FBT1A7QUFuS0M7RUErSk0sV0FBQTtFQ3JITixrQkFBQTtBRDhIRDtBQXhLQztFQzBDQSxrQkFBQTtBRGtJRDtBQTVLQztFQXlLRyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQU1KO0FBbExDO0VBOEtJLGFBQUE7RUNwSUosZ0JBQUE7QUQ2SUQ7QUF2TEM7RUFvTEUscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBTUg7QUE1TEM7RUF3TEcsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBT0o7QUFwTUM7O0VBaU1FLFdBQUE7RUFDQSxZQUFBO0FBT0giLCJmaWxlIjoibWVzc2FnaW5nLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTWVzc2FnaW5nIHZhciBhbmQgZnVuY3Rpb24gXG4tLS0tLS0tLS0tLS0tLS0tLS0qL1xuQGltcG9ydCAocmVmZXJlbmNlKSBcIi4uLy4uLy4uL3ZhcmlhYmxlLmxlc3NcIjtcbkBhc3NldHNGcm9tSGVyZTogXCIuLi8uLi8uQHtwYXRoQXNzZXRzfVwiO1xuXG5cbi8qIEZvcnVtIGdsb2JhbCBcbi0tLS0tLS0tLS0tLS0tLS0tLSovXG4ubWVzc2FnaW5nLXdyYXAge1xuXHR3aWR0aDogMTAwJTtcbn1cblxuXG5cbi8qIE1lc3NhZ2luZyBzZWN0aW9uIFxuLS0tLS0tLS0tLS0tLS0tLS0tKi9cbnNlY3Rpb24ge1xuXHQmLm1lc3NhZ2Utc2VjdGlvbiB7XG5cdFx0ZGlzcGxheTogZ3JpZDtcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XG5cdFx0Z3JpZC1nYXA6IDBweDtcblx0XHRoZWlnaHQ6IDEwMHZoO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdHBhZGRpbmctdG9wOiAxMDBweDtcblx0XHQudXNlcnMge1xuXHRcdFx0YmFja2dyb3VuZDogQG1haW5Db2xvcjtcblx0XHRcdC5ib3gtc2hhZG93KDAgMCAzMHB4IDBweCByZ2JhKDAsMCwwLDAuNSksIHRydWUpO1xuXHRcdFx0dWwge1xuXHRcdFx0XHRsaSB7XG5cdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiA1cHg7XG5cdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0XHRcdFx0Ji5zZWFyY2gge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogZmFkZShsaWdodGVuKEBtYWluQ29sb3IsIDUwKSwgNTApO1xuXHRcdFx0XHRcdFx0Y3Vyc29yOiBkZWZhdWx0O1xuXHRcdFx0XHRcdFx0Zm9ybSB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aW1nIHtcblx0XHRcdFx0XHRcdHdpZHRoOiA1MHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiA1MHB4O1xuXHRcdFx0XHRcdFx0LmJvcmRlcnJhZGl1cyg1MCUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuc3RhdHV0IHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdGxlZnQ6IDQ1cHg7XG5cdFx0XHRcdFx0XHRib3R0b206IDNweDtcblx0XHRcdFx0XHRcdGJvcmRlcjogNXB4IHNvbGlkIEBtYWluQ29sb3I7XG5cdFx0XHRcdFx0XHR3aWR0aDogMjBweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMjBweDtcblx0XHRcdFx0XHRcdC5ib3JkZXJyYWRpdXMoNTAlKTtcblx0XHRcdFx0XHRcdCYub25saW5lIHtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogQGJsaW5rQ29sb3I7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogZmFkZShsaWdodGVuKEBtYWluQ29sb3IsIDUwKSwgNTApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQubWVzc2FnZS1ib3gge1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0cGFkZGluZzogMTBweDtcblx0XHRcdGJhY2tncm91bmQ6IGxpZ2h0ZW4oQG1haW5Db2xvciwgMTUpO1xuXHRcdFx0b2wubWVzc2FnZXMge1xuXHRcdFx0XHRoZWlnaHQ6IDc1dmg7XG5cdFx0XHRcdG92ZXJmbG93LXg6IGF1dG87XG5cdFx0XHRcdGxpIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdFx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4zZnIgNmZyO1xuXHRcdFx0XHRcdGdyaWQtZ2FwOiAxMHB4O1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0Ji5zcGFjZSB7XG5cdFx0XHRcdFx0XHQmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMjBweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnVzZXJhdmF0YXIge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDUwcHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDUwcHg7XG5cdFx0XHRcdFx0XHQuYm9yZGVycmFkaXVzKDUwJSk7XG5cdFx0XHRcdFx0XHRzdmcge1xuXHRcdFx0XHRcdFx0XHQuYm9yZGVycmFkaXVzKDUwJSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5tc2ctY29udGVudCB7XG5cdFx0XHRcdFx0XHQuaGVhZGluZyB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdFx0XHRzcGFuIHtcblx0XHRcdFx0XHRcdFx0XHQmLnVzZXJuYW1lIHtcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xuXHRcdFx0XHRcdFx0XHRcdFx0YiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0Ji50aW1lIHtcblx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAyMHB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFBvcHBpbnM7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogbGlnaHRlbihAbWFpbkNvbG9yLCAzNSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRwIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFBvcHBpbnM7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQuY29ubmVjdGVkLWxpc3Qge1xuXHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdFx0XHQuYm9yZGVycmFkaXVzKDRweCk7XG5cdFx0XHRcdC5ib3gtc2hhZG93KDAgMCAzMHB4IDBweCByZ2JhKDAsMCwwLDAuNSksIHRydWUpO1xuXHRcdFx0XHRoMSB7XG5cdFx0XHRcdFx0cGFkZGluZzogMTBweDtcblx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHVsIHtcblx0XHRcdFx0XHRsaS51c2VycyB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0XHR3aWR0aDogNDglO1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAzNnB4O1xuXHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogQG1haW5Db2xvcjtcblx0XHRcdFx0XHRcdG1hcmdpbjogNXB4O1xuXHRcdFx0XHRcdFx0cGFkZGluZzogNXB4O1xuXHRcdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0XHRcdC50cmFuc2l0aW9uKG9wYWNpdHksIDMwMG1zLCBlYXNlLWluLW91dCk7XG5cdFx0XHRcdFx0XHQuYm94LXNoYWRvdygwIDAgMzBweCAwcHggcmdiYSgwLDAsMCwwLjUpLCB0cnVlKTtcblx0XHRcdFx0XHRcdC5ib3JkZXJyYWRpdXMoMzBweCk7XG5cdFx0XHRcdFx0XHRoMiB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiBsaWdodGVuKEBtYWluQ29sb3IsIDUwKTtcblx0XHRcdFx0XHRcdFx0c3BhbiB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRvbCB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA2MiU7XG5cdFx0XHRcdFx0XHRcdGxpLmNoYXJhY3RlcnMge1xuXHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdFx0XHRyaWdodDogLTEwcHg7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDUwJTtcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbihAbWFpbkNvbG9yLCA0MCk7XG5cdFx0XHRcdFx0XHRcdFx0LnRyYW5zZm9ybShza2V3WCgtMjBkZWcpKTtcblx0XHRcdFx0XHRcdFx0XHQuY2hhcmFjdGVyQ29udGFpbmVyIHtcblx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDIwcHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAtMjMxcHggdG9wIC0zNXB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogNTUwcHg7XG5cdFx0XHRcdFx0XHRcdFx0XHQudHJhbnNmb3JtKHNrZXdYKDIwZGVnKSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdCYub25seSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0JjpsYXN0LWNoaWxkIHtcblx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IEBidXR0b25Db2xvclByaW07XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdFx0b3BhY2l0eTogMC41O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmF2YXRhciB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAzMHB4O1xuXHRcdFx0XHRcdFx0XHQuYm9yZGVycmFkaXVzKDUwJSk7XG5cdFx0XHRcdFx0XHRcdHN2ZyB7XG5cdFx0XHRcdFx0XHRcdFx0LmJvcmRlcnJhZGl1cyg1MCUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRmb3JtIHtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRib3R0b206IDA7XG5cdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHR0ZXh0YXJlYSB7XG5cdFx0XHRcdFx0aGVpZ2h0OiAxMDBweDtcblx0XHRcdFx0XHQuYm9yZGVycmFkaXVzKDApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHNwYW4udXNlcm5hbWUge1xuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0bWFyZ2luLWxlZnQ6IDVweDtcblx0XHRcdGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuXHRcdFx0YiB7XG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdHRvcDogLTVweDtcblx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0Zm9udC1mYW1pbHk6IGFyaWFsO1xuXHRcdFx0XHRjb2xvcjogbGlnaHRlbihAbWFpbkNvbG9yLCA0MCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC51c2VycywgLm1lc3NhZ2UtYm94IHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdH1cblx0fVxufSIsIi8qIFZhcnMgXG4tLS0tLS0tLS0tLS0tLS0tLS0qL1xuQHBhdGhBc3NldHM6IFwiLi9hc3NldHNcIjtcbkBmYS1mb250LXBhdGg6IFwiQHtwYXRoQXNzZXRzfS9pY29uL3dlYmZvbnRzXCI7XG5AcGF0aEZvbnQ6IFwiQHtwYXRoQXNzZXRzfS9mb250c1wiO1xuXG5AbWFpbkNvbG9yOiAjMjAyMjI1O1xuQHNlY29uZENvbG9yOiAjZmZmO1xuXG5AYnV0dG9uQ29sb3JQcmltOiAjZWQ0MjQ1O1xuQGxpbmtDb2xvclByaW06ICMzNDg0ZTU7XG5cbkBkb25hdG9yQ29sb3I6ICMxZDhhZTI7XG5cbkBtYXgtd2lkdGg6IDI1MDBweDtcbkBtYXgtd2lkdGgtY29udGVudDogMTUwMHB4O1xuQGJsaW5rQ29sb3I6ICMzOGE1MTc7XG5cbi8qIEV4dGVybmFsIHN0eWxlc2hlZXQgXG4tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLy9AaW1wb3J0IFwiQHtwYXRoRm9udH0vaWNvbi9hbGwuY3NzXCI7XG5cblxuXG4vKiBDb3JlIGZ1bmN0aW9ucyBcbi0tLS0tLS0tLS0tLS0tLS0tLSovXG4uZ3JhZGllbnRMaW5lYXIoQGJhY2tncm91bmQsIEBkZWcsIEBjb2xvcjEsIEBjb2xvcjIpIHtcblx0YmFja2dyb3VuZDogQGJhY2tncm91bmQgLW1vei1saW5lYXItZ3JhZGllbnQoQGRlZywgQGNvbG9yMSwgQGNvbG9yMik7XG5cdGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kIC13ZWJraXQtbGluZWFyLWdyYWRpZW50KEBkZWcsIEBjb2xvcjEsIEBjb2xvcjIpO1xuXHRiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZCBsaW5lYXItZ3JhZGllbnQoQGRlZywgQGNvbG9yMSwgQGNvbG9yMik7XG5cdGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9XCJAY29sb3IxXCIsZW5kQ29sb3JzdHI9XCJAY29sb3IyXCIsR3JhZGllbnRUeXBlPTEpO1xufVxuXG4uZ3JhZGllbnRMaW5lYXJJbWcoQGJhY2tncm91bmQsIEBkZWcsIEBjb2xvcjEsIEBjb2xvcjIsIEB1cmwpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYmFja2dyb3VuZDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoQHVybCksIC1tb3otbGluZWFyLWdyYWRpZW50KEBkZWcsIEBjb2xvcjEsIEBjb2xvcjIpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChAdXJsKSwgLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoQGRlZywgQGNvbG9yMSwgQGNvbG9yMik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKEB1cmwpLCBsaW5lYXItZ3JhZGllbnQoQGRlZywgQGNvbG9yMSwgQGNvbG9yMik7XG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj1cIkBjb2xvcjFcIixlbmRDb2xvcnN0cj1cIkBjb2xvcjJcIixHcmFkaWVudFR5cGU9MSk7XG59XG5cbi5ib3gtc2hhZG93KEBzaGFkb3csIEBpbnNldDpmYWxzZSkge1xuICAgICYgd2hlbiAoQGluc2V0ID0gdHJ1ZSkge1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgQHNoYWRvdztcbiAgICAgICAgYm94LXNoYWRvdzppbnNldCBAc2hhZG93O1xuICAgIH1cbiAgICAmIHdoZW4gKEBpbnNldCA9IGZhbHNlKSB7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogQHNoYWRvdztcbiAgICAgICAgYm94LXNoYWRvdzogQHNoYWRvdztcbiAgICB9XG59XG5cbi5ib3gtc2l6aW5nKEBwYXJhbSkge1xuICAgIC13ZWJraXQtYm94LXNpemluZzogQHBhcmFtO1xuICAgIGJveC1zaXppbmc6IEBwYXJhbTtcbn1cblxuLmJvcmRlcnJhZGl1cyhAZGVncmVlKSB7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogQGRlZ3JlZTtcblx0Ym9yZGVyLXJhZGl1czogQGRlZ3JlZTtcbn1cblxuLmJhY2tibHVyKEBibHVyKSB7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoQGJsdXIpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cihAYmx1cik7XG59XG5cbi50cmFuc2l0aW9uKEB0eXBlLCBAdGltZSwgQGVhc2luZykge1xuXHQtd2Via2l0LXRyYW5zaXRpb246IEB0eXBlIEB0aW1lIEBlYXNpbmc7XG5cdC1tb3otdHJhbnNpdGlvbjogQHR5cGUgQHRpbWUgQGVhc2luZztcblx0LW1zLXRyYW5zaXRpb246IEB0eXBlIEB0aW1lIEBlYXNpbmc7XG5cdC1vLXRyYW5zaXRpb246IEB0eXBlIEB0aW1lIEBlYXNpbmc7XG5cdHRyYW5zaXRpb246IEB0eXBlIEB0aW1lIEBlYXNpbmc7XG59XG5cbi50cmFuc2Zvcm0oQHR5cGUpIHtcbiAgICAtbW96LXRyYW5zZm9ybTogQHR5cGU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IEB0eXBlO1xuICAgIC1vLXRyYW5zZm9ybTogQHR5cGU7XG4gICAgLW1zLXRyYW5zZm9ybTogQHR5cGU7XG4gICAgdHJhbnNmb3JtOiBAdHlwZTtcbn1cblxuLmNvdmVyIHtcblx0LXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5zaGFkb3ctZ2xvc3Mge1xuXHQtbW96LWJveC1zaGFkb3c6IHJnYmEoMCwwLDAsMC4xKSAwcHggMXB4IDNweCwgaW5zZXQgcmdiYSgyNTUsMjU1LDI1NSwwLjIpIDBweCAxcHggMHB4O1xuXHQtd2Via2l0LWJveC1zaGFkb3c6IHJnYmEoMCwwLDAsMC4xKSAwcHggMXB4IDNweCwgaW5zZXQgcmdiYSgyNTUsMjU1LDI1NSwwLjIpIDBweCAxcHggMHB4O1xuXHRib3gtc2hhZG93OiByZ2JhKDAsMCwwLDAuMSkgMHB4IDFweCAzcHgsIGluc2V0IHJnYmEoMjU1LDI1NSwyNTUsMC4yKSAwcHggMXB4IDBweDtcbn1cblxuLmJ1dHRvbkNTUyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBiYWNrZ3JvdW5kOiBmYWRlKEBidXR0b25Db2xvclByaW0sIDIwJSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRlbihAYnV0dG9uQ29sb3JQcmltLCAxMCk7XG4gICAgY29sb3I6IEBzZWNvbmRDb2xvcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLmJhY2tibHVyKDRweCk7XG4gICAgLnRyYW5zaXRpb24oYmFja2dyb3VuZCwgMzAwbXMsIGVhc2UtaW4tb3V0KTtcbiAgICAuYm9yZGVycmFkaXVzKDNweCk7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IGZhZGUoQGJ1dHRvbkNvbG9yUHJpbSwgNTAlKTtcbiAgICB9XG59Il19 */"], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=module-messaging-messaging-module.js.map
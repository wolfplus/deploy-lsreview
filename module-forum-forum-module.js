(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["module-forum-forum-module"],{

/***/ "5yi1":
/*!**************************************************************!*\
  !*** ./src/app/module/forum/post/editor/editor.component.ts ***!
  \**************************************************************/
/*! exports provided: editorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editorComponent", function() { return editorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../_services */ "J9tS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function editorComponent_li_54_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function editorComponent_li_54_Template_input_keyup_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.listEditElem(i_r4, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function editorComponent_li_54_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.listRemoveElem(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", list_r3.value);
} }
function editorComponent_tr_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tableHeader_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tableHeader_r8.value);
} }
function editorComponent_tr_97_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function editorComponent_tr_97_td_1_Template_td_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const iColumn_r14 = ctx.index; const i_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.setTableValue(i_r11, iColumn_r14, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tableColumn_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tableColumn_r13.value);
} }
function editorComponent_tr_97_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, editorComponent_tr_97_td_1_Template, 2, 1, "td", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function editorComponent_tr_97_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const i_r11 = ctx.index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.addColumnTable(i_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Ajouter une colonne");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r11 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.tableLines[i_r11].columns);
} }
class editorComponent {
    constructor(renderer, bbcodeService, route, router, formBuilder) {
        this.renderer = renderer;
        this.bbcodeService = bbcodeService;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.editor = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fontSize_number = '5';
        this.fontColor_code = '#e66465';
        this.tableBorder_color = '0';
        this.tableBackground_color = '0';
        this.tableHeader_color = '0';
        this.borderColor_code = '#e66465';
        this.boxBackground_color = '#e66465';
        this.boxBackground_img = '';
        this.listType = '0';
        this.borderWidth = '2';
        this.listShow = [];
        this.tableHeaders = [];
        this.tableLines = [];
        this.renderer.listen('window', 'click', (e) => {
            const textarea = document.querySelector('textarea');
            const dropDowns = document.querySelectorAll('.showList');
            for (let i = 0; i < dropDowns.length; i++) {
                if (dropDowns[i].classList.contains('show')) {
                    if (e.target == textarea) {
                        dropDowns[i].classList.remove('show');
                    }
                }
            }
        });
    }
    ngOnInit() {
    }
    emiteBBcode(data) {
        this.editor.emit(data);
    }
    optionBBcode(option, e) {
        e.preventDefault();
        let optionShema = {
            bbcode: '',
            value: '',
            list: []
        };
        switch (option) {
            case 'setSize':
                optionShema = {
                    bbcode: 'size',
                    value: this.fontSize_number,
                    list: []
                };
                break;
            case 'setColor':
                optionShema = {
                    bbcode: 'color',
                    value: this.fontColor_code,
                    list: []
                };
                break;
            case 'setHighlight':
                optionShema = {
                    bbcode: 'highlight',
                    value: this.fontColor_code,
                    list: []
                };
                break;
            case 'createList':
                optionShema = {
                    bbcode: 'list',
                    value: this.listType,
                    list: this.listShow
                };
                break;
            case 'setBorder':
                optionShema = {
                    bbcode: 'border',
                    value: this.borderColor_code,
                    list: [this.borderWidth]
                };
                break;
            case 'createTable':
                let tableOption = {
                    border_color: this.tableBorder_color,
                    background_color: this.tableBackground_color,
                    header_color: this.tableHeader_color,
                    header: this.tableHeaders,
                    lines: this.tableLines
                };
                optionShema = {
                    bbcode: 'table',
                    value: 'none',
                    list: [tableOption]
                };
                break;
            case 'createBox':
                optionShema = {
                    bbcode: 'box',
                    value: this.boxBackground_color,
                    list: [this.boxBackground_img]
                };
                break;
        }
        this.emiteBBcode(this.bbcodeService.optionInsert(optionShema));
        // pas la peine de me juger
        setTimeout(() => { this.hideDrop(); }, 50);
    }
    insert(bbcode) {
        this.hideDrop();
        switch (bbcode) {
            case 'b':
            case 'i':
            case 's':
            case 'u':
            case 'left':
            case 'right':
            case 'center':
            case 'justify':
            case 'quote':
            case 'spoiler':
            case 'h1':
                this.emiteBBcode(this.bbcodeService.simpleInsert(bbcode));
                break;
            case 'font':
                this.font();
                break;
            case 'size':
                this.showDrop('.fontSize');
                break;
            case 'color':
                this.showDrop('.fontColor');
                break;
            case 'highlight':
                this.showDrop('.fontHighlight');
                break;
            case 'list':
                this.showDrop('.list');
                break;
            case 'border':
                this.showDrop('.border');
                break;
            case 'table':
                this.showDrop('.table');
                break;
            case 'box':
                this.showDrop('.box');
                break;
        }
    }
    hideDrop() {
        const dropDowns = document.querySelectorAll('.showList');
        for (let i = 0; i < dropDowns.length; i++) {
            if (dropDowns[i].classList.contains('show')) {
                dropDowns[i].classList.remove('show');
            }
        }
    }
    showDrop(name) {
        const dropDown = document.querySelector(name);
        dropDown.classList.add('show');
    }
    validator(option) {
        if (option == 'size') {
            if (this.fontSize_number < '2')
                this.fontSize_number = '2';
            else if (this.fontSize_number > '20')
                this.fontSize_number = '20';
        }
    }
    font() {
        const fontList = [
            { font: 'arial' },
            { font: 'Montserrat' },
            { font: 'Poppins' },
            { font: 'sf display' },
            { font: 'Georgia' },
            { font: 'Impact' },
            { font: 'Times new roman' },
            { font: 'Verdana' },
        ];
        const dropDown = document.querySelector('.fontList');
        dropDown.classList.add('show');
        const list = document.querySelector('.fontList ul');
        for (let i = 0; i < fontList.length; i++) {
            const li = document.createElement('li');
            const name = document.createElement('b');
            const exemple = document.createElement('span');
            li.append(fontList[i].font, name);
            li.append('/me Sort l\'arme de sa poche', exemple);
            li.innerHTML = '<b>' + fontList[i].font + '</b> <span style="font-family: ' + fontList[i].font + ';">/me Sort l\'arme de sa poche</span>';
            list.append(li);
        }
    }
    listAddElem() {
        this.listShow.push({ value: '' });
    }
    listRemoveElem(index) {
        this.listShow.splice(index, 1);
    }
    listEditElem(index, e) {
        this.listShow[index].value = e.target.value;
    }
    addLineTable() {
        this.tableLines.push({ columns: [{ value: 'Votre contenu ici' }] });
        console.log(this.tableLines);
    }
    addHeaderTable() {
        this.tableHeaders.push({ value: 'Une entête ici' });
    }
    addColumnTable(i) {
        this.tableLines[i].columns.push({ value: 'Votre contenu ici' });
    }
    setTableValue(i, iColumn, event) {
        const target = event.target || event.srcElement || event.currentTarget;
        this.tableLines[i].columns[iColumn].value = target.innerText;
    }
}
editorComponent.ɵfac = function editorComponent_Factory(t) { return new (t || editorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["bbcodeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"])); };
editorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: editorComponent, selectors: [["component-editor"]], outputs: { editor: "editor" }, decls: 159, vars: 14, consts: [[1, "toolbar"], [1, "sectionEditor", "font"], [1, "bbcode", 3, "click"], [1, "fas", "fa-bold"], [1, "fas", "fa-italic"], [1, "fas", "fa-strikethrough"], [1, "fas", "fa-underline"], [1, "fas", "fa-font"], [1, "showList", "fontList"], [1, "fas", "fa-font-case"], [1, "showList", "fontSize"], ["type", "number", "value", "5", "min", "2", "max", "20", 3, "ngModel", "keyup", "ngModelChange"], [1, "small", 3, "click"], [1, "sectionEditor", "color"], [1, "fas", "fa-highlighter"], [1, "showList", "fontHighlight"], ["type", "color", "value", "#e66465", 3, "ngModel", "change", "ngModelChange"], [1, "fas", "fa-palette"], [1, "showList", "fontColor"], [1, "sectionEditor", "disp"], [1, "fas", "fa-align-left"], [1, "fas", "fa-align-justify"], [1, "fas", "fa-align-center"], [1, "fas", "fa-align-right"], [1, "sectionEditor", "paragraph"], [1, "fas", "fa-heading"], [1, "fas", "fa-quote-left"], [1, "fas", "fa-list"], [1, "showList", "list"], [1, "groupeList"], [4, "ngFor", "ngForOf"], [1, "actionElement", "addElement", 3, "click"], [1, "groupeListType"], ["for", "listType"], ["name", "listType", 3, "ngModel", "ngModelChange"], ["value", "0", "selected", ""], ["value", "1"], ["value", "2"], [3, "click"], [1, "sectionEditor", "grid"], [1, "fas", "fa-border-all"], [1, "showList", "border"], [1, "groupeItem"], ["for", "borderColor"], ["type", "color", "value", "#e66465", "name", "borderColor", 3, "ngModel", "ngModelChange"], ["for", "borderWidth"], ["type", "number", "value", "2", "name", "borderWidth", 3, "ngModel", "ngModelChange"], [1, "fas", "fa-table"], [1, "showList", "table"], [1, "tablePreview"], [1, "bbcode"], [1, "tableAction"], [1, "actionElement", 3, "click"], [1, "tableStyle"], ["type", "color", "value", "#4f545c", 3, "ngModel", "ngModelChange"], ["type", "color", "value", "#e66465", 3, "ngModel", "ngModelChange"], ["type", "color", "value", "#737a85", 3, "ngModel", "ngModelChange"], [1, "fas", "fa-stop"], [1, "showList", "box"], ["for", "boxColor"], ["type", "color", "name", "boxColor", "value", "#e66465", 3, "ngModel", "ngModelChange"], [1, "or"], ["for", "boxImg"], ["type", "text", "placeholder", "www.rockstargames.com/image.png", "name", "boxImg", 3, "ngModel", "ngModelChange"], [1, "fas", "fa-eye-slash"], [1, "sectionEditor", "box"], [1, "fas", "fa-users"], [1, "fas", "fa-id-badge"], [1, "fas", "fa-gavel"], [1, "sectionEditor", "multimedia"], [1, "fas", "fa-image"], [1, "fas", "fa-video"], [1, "sectionEditor", "other"], [1, "fas", "fa-smile-beam"], [1, "fas", "fa-link"], ["type", "text", 3, "value", "keyup"], [1, "removeElement", 3, "click"], [1, "fas", "fa-minus"], ["colspan", "2", "contenteditable", "true"], ["contenteditable", "true", 3, "keyup", 4, "ngFor", "ngForOf"], ["contenteditable", "true", 3, "keyup"]], template: function editorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Font");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function editorComponent_Template_li_click_5_listener() { return ctx.insert("b"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function editorComponent_Template_li_click_7_listener() { return ctx.insert("i"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function editorComponent_Template_li_click_9_listener() { return ctx.insert("s"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function editorComponent_Template_li_click_11_listener() { return ctx.insert("u"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function editorComponent_Template_li_click_13_listener() { return ctx.insert("font"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function editorComponent_Template_li_click_17_listener() { return ctx.insert("size"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function editorComponent_Template_input_keyup_20_listener() { return ctx.validator("size"); })("ngModelChange", function editorComponent_Template_input_ngModelChange_20_listener($event) { return ctx.fontSize_number = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function editorComponent_Template_button_click_21_listener($event) { return ctx.optionBBcode("setSize", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Valider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function editorComponent_Template_li_click_24_listener() { return ctx.insert("highlight"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function editorComponent_Template_input_change_27_listener($event) { return ctx.optionBBcode("setHighlight", $event); })("ngModelChange", function editorComponent_Template_input_ngModelChange_27_listener($event) { return ctx.fontColor_code = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function editorComponent_Template_li_click_28_listener() { return ctx.insert("color"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function editorComponent_Template_input_change_31_listener($event) { return ctx.optionBBcode("setColor", $event); })("ngModelChange", function editorComponent_Template_input_ngModelChange_31_listener($event) { return ctx.fontColor_code = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Paragraphe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function editorComponent_Template_li_click_36_listener() { return ctx.insert("left"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function editorComponent_Template_li_click_38_listener() { return ctx.insert("justify"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function editorComponent_Template_li_click_40_listener() { return ctx.insert("center"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function editorComponent_Template_li_click_42_listener() { return ctx.insert("right"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function editorComponent_Template_li_click_45_listener() { return ctx.insert("h1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function editorComponent_Template_li_click_47_listener() { return ctx.insert("quote"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function editorComponent_Template_li_click_49_listener() { return ctx.insert("list"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, editorComponent_li_54_Template, 4, 1, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function editorComponent_Template_span_click_55_listener() { return ctx.listAddElem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Ajouter un \u00E9l\u00E9ment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Style de la liste");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "select", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function editorComponent_Template_select_ngModelChange_62_listener($event) { return ctx.listType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "* * * *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "1. 2. 3. 4.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\u2022 \u2022 \u2022 \u2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function editorComponent_Template_button_click_69_listener($event) { return ctx.optionBBcode("createList", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Valider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Ins\u00E9rer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "ul", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function editorComponent_Template_li_click_75_listener() { return ctx.insert("border"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Couleur de la bordure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function editorComponent_Template_input_ngModelChange_81_listener($event) { return ctx.borderColor_code = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Taille de la bordure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function editorComponent_Template_input_ngModelChange_85_listener($event) { return ctx.borderWidth = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function editorComponent_Template_button_click_86_listener($event) { return ctx.optionBBcode("setBorder", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Valider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function editorComponent_Template_li_click_88_listener() { return ctx.insert("table"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "table", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, editorComponent_tr_95_Template, 3, 1, "tr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, editorComponent_tr_97_Template, 6, 1, "tr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function editorComponent_Template_span_click_99_listener() { return ctx.addLineTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Ajouter une ligne");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function editorComponent_Template_span_click_103_listener() { return ctx.addHeaderTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Ajouter une ent\u00EAte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Couleur des bordures");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function editorComponent_Template_input_ngModelChange_110_listener($event) { return ctx.tableBorder_color = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Couleur de fond");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function editorComponent_Template_input_ngModelChange_113_listener($event) { return ctx.tableBackground_color = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Couleur de l'ent\u00EAte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function editorComponent_Template_input_ngModelChange_116_listener($event) { return ctx.tableHeader_color = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function editorComponent_Template_button_click_117_listener($event) { return ctx.optionBBcode("createTable", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Valider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function editorComponent_Template_li_click_119_listener() { return ctx.insert("box"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "label", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Une couleur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function editorComponent_Template_input_ngModelChange_125_listener($event) { return ctx.boxBackground_color = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Ou");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Une image (lien)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function editorComponent_Template_input_ngModelChange_131_listener($event) { return ctx.boxBackground_img = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function editorComponent_Template_button_click_132_listener($event) { return ctx.optionBBcode("createBox", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Valider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function editorComponent_Template_li_click_134_listener() { return ctx.insert("spoiler"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "ul", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function editorComponent_Template_li_click_137_listener() { return ctx.insert("color"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function editorComponent_Template_li_click_139_listener() { return ctx.insert("color"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function editorComponent_Template_li_click_141_listener() { return ctx.insert("color"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Multim\u00E9dia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "ul", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function editorComponent_Template_li_click_147_listener() { return ctx.insert("img"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function editorComponent_Template_li_click_149_listener() { return ctx.insert("video"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Autre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "ul", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function editorComponent_Template_li_click_155_listener() { return ctx.insert("smiley"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function editorComponent_Template_li_click_157_listener() { return ctx.insert("a"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "i", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fontSize_number);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fontColor_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fontColor_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.listType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.borderColor_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.borderWidth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tableHeaders);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tableLines);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tableBorder_color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tableBackground_color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tableHeader_color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.boxBackground_color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.boxBackground_img);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_z"]], encapsulation: 2 });


/***/ }),

/***/ "89V0":
/*!*****************************************************!*\
  !*** ./src/app/module/forum/post/post.component.ts ***!
  \*****************************************************/
/*! exports provided: postComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postComponent", function() { return postComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_services */ "J9tS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor/editor.component */ "5yi1");
/* harmony import */ var _sections_crumbs_forum_crumbs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sections/crumbs/forum.crumbs.component */ "gRqr");









function postComponent_app_forumCrumbs_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-forumCrumbs");
} }
function postComponent_div_4_i_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 16);
} }
function postComponent_div_4_div_10_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Vous devez mettre un titre ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function postComponent_div_4_div_10_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Vous devez mettre un message ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function postComponent_div_4_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, postComponent_div_4_div_10_li_2_Template, 2, 0, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, postComponent_div_4_div_10_li_3_Template, 2, 0, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.f.title.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.f.message.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function postComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Titre de votre sujet");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, postComponent_div_4_i_8_Template, 1, 0, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Poster un nouveau sujet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, postComponent_div_4_div_10_Template, 4, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, ctx_r1.submitted && ctx_r1.f.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.submitted && (ctx_r1.f.title.errors || ctx_r1.f.message.errors));
} }
function postComponent_label_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function postComponent_div_9_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 16);
} }
function postComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, postComponent_div_9_i_2_Template, 1, 0, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " R\u00E9pondre au sujet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.loading);
} }
const _c1 = function (a0) { return { "topicPost": a0 }; };
class postComponent {
    constructor(route, bbcodeService, router, formBuilder, forumService, alertService) {
        this.route = route;
        this.bbcodeService = bbcodeService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.forumService = forumService;
        this.alertService = alertService;
        this.model = 'post';
        this.submitted = false;
        this.loading = false;
        this.thisID = 0;
        this.textSelected = '';
    }
    ngOnInit() {
        this.thisID = this.route.snapshot.params['id'];
        if (this.model == 'post') {
            this.form = this.formBuilder.group({
                title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
                message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            });
        }
        else {
            this.form = this.formBuilder.group({
                message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            });
        }
    }
    get f() { return this.form.controls; }
    bbcode(data) {
        const edit = this.bbcodeService.formatBBcodeEditor(this.form.get('message').value, this.textSelected, data);
        //edit = edit.replace(this.textSelected, '['+data.prefix+']'+this.textSelected+'['+data.suffix+']');
        this.f['message'].setValue(edit);
    }
    showSelectedText(get) {
        this.textSelected = window.getSelection().toString();
    }
    onSubmit() {
        this.submitted = true;
        this.loading = true;
        if (this.form.invalid) {
            return;
        }
        if (this.model == 'post') {
            this.forumService.post(this.thisID, this.form.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
                .subscribe({
                next: (topic) => {
                    this.alertService.success('Le sujet est posté avec succès', { keepAfterRouteChange: true, autoClose: true });
                    this.router.navigate(['../../../topic/' + topic], { relativeTo: this.route });
                    this.loading = false;
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
        }
        else {
            this.forumService.respondTopic(this.thisID, this.form.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
                .subscribe({
                next: (topic) => {
                    this.f['message'].setValue('');
                    this.alertService.success('Le message est posté avec succès', { keepAfterRouteChange: true, autoClose: true });
                    this.loading = false;
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
        }
    }
}
postComponent.ɵfac = function postComponent_Factory(t) { return new (t || postComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["bbcodeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["forumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"])); };
postComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: postComponent, selectors: [["app-post"]], inputs: { model: "model" }, decls: 10, vars: 11, consts: [[1, "post_wrapper", 3, "ngClass"], [4, "ngIf"], [1, "post"], [3, "formGroup", "ngSubmit"], ["class", "form-group", 4, "ngIf"], [1, "form-group"], ["for", "message", 4, "ngIf"], [3, "editor"], ["formControlName", "message", 3, "ngClass", "mouseup"], ["class", "form-group button", 4, "ngIf"], [1, "displayMultiple"], [1, "itemMultiple"], ["for", "title"], ["type", "text", "formControlName", "title", 3, "ngClass"], ["class", "fas fa-circle-notch fa-spin", 4, "ngIf"], ["class", "invalid-feedback", 4, "ngIf"], [1, "fas", "fa-circle-notch", "fa-spin"], [1, "invalid-feedback"], ["for", "message"], [1, "form-group", "button"]], template: function postComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, postComponent_app_forumCrumbs_1_Template, 1, 0, "app-forumCrumbs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function postComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, postComponent_div_4_Template, 11, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, postComponent_label_6_Template, 2, 0, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "component-editor", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("editor", function postComponent_Template_component_editor_editor_7_listener($event) { return ctx.bbcode($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseup", function postComponent_Template_textarea_mouseup_8_listener($event) { return ctx.showSelectedText($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, postComponent_div_9_Template, 4, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c1, ctx.model == "topic"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.model == "post");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.model == "post");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.model == "post");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c0, ctx.submitted && ctx.f.message.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.model == "topic");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _editor_editor_component__WEBPACK_IMPORTED_MODULE_6__["editorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _sections_crumbs_forum_crumbs_component__WEBPACK_IMPORTED_MODULE_7__["ForumCrumbsComponent"]], encapsulation: 2 });


/***/ }),

/***/ "HQbV":
/*!*************************************************************************!*\
  !*** ./src/app/module/forum/forum_skeleton/forum.skeleton.component.ts ***!
  \*************************************************************************/
/*! exports provided: ForumSkeletonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumSkeletonComponent", function() { return ForumSkeletonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function ForumSkeletonComponent_ng_container_0_ol_1_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 4);
} }
function ForumSkeletonComponent_ng_container_0_ol_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ol", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ForumSkeletonComponent_ng_container_0_ol_1_li_9_Template, 1, 0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.createRange(3));
} }
function ForumSkeletonComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForumSkeletonComponent_ng_container_0_ol_1_Template, 18, 1, "ol", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.createRange(5));
} }
const _c0 = function (a0) { return { "width": a0 }; };
function ForumSkeletonComponent_ng_container_1_div_1_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 30);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r8.getrandom()));
} }
function ForumSkeletonComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ForumSkeletonComponent_ng_container_1_div_1_span_12_Template, 1, 3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.createRange(50));
} }
function ForumSkeletonComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForumSkeletonComponent_ng_container_1_div_1_Template, 13, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.createRange(5));
} }
class ForumSkeletonComponent {
    constructor() { }
    createRange(number) {
        return new Array(number);
    }
    getrandom() {
        const random = Math.floor(Math.random() * (250 - 50 + 1) + 50);
        return random + 'px';
    }
}
ForumSkeletonComponent.ɵfac = function ForumSkeletonComponent_Factory(t) { return new (t || ForumSkeletonComponent)(); };
ForumSkeletonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForumSkeletonComponent, selectors: [["app-skeleton"]], inputs: { model: "model" }, decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "cats", 4, "ngFor", "ngForOf"], [1, "cats"], [1, "forumsList"], [1, "skeleton"], [1, "catsforum"], [1, "forumsDisp", "skeleton"], [1, "forums", "icon", "skeleton"], [1, "forums", "main"], [1, "subforums", "skeleton"], ["class", "skeleton", 4, "ngFor", "ngForOf"], [1, "forums", "stats", "skeleton"], [1, "forums", "last", "skeleton"], [1, "author", "avatar", "skeleton"], [1, "authorMargin", "skeleton"], [1, "author", "lastSub", "skeleton"], [1, "author", "time", "skeleton"], ["class", "topic", 4, "ngFor", "ngForOf"], [1, "topic"], [1, "users"], [1, "leftStats"], [1, "avatar-username"], [1, "username"], [1, "skeleton", "--text", "--darker"], [1, "avaPic", "skeleton", "--inline", "--darker"], [1, "customTitle", "skeleton", "--text", "--darker"], [1, "content"], [1, "header-topic"], [1, "messageInside", "skeleton"], ["class", "skeleton --text --radius", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "skeleton", "--text", "--radius", 3, "ngStyle"]], template: function ForumSkeletonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ForumSkeletonComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForumSkeletonComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.model == "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.model == "topic");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: ["/* Forum var and function \n----------------------------*/\n/* Skeleton\n----------------------------*/\n/* Forum section \n------------------*/\nsection.forum.main ol.cats li.forumsList h2.skeleton {\n  width: 100%;\n  height: 30px !important;\n}\nsection.forum.main ol.cats li.forumsList ol.catsforum li.forumsDisp .forums.main h4.skeleton {\n  width: 250px;\n  height: 15px;\n  margin-bottom: 5px;\n}\nsection.forum.main ol.cats li.forumsList ol.catsforum li.forumsDisp .forums.main ul.subforums.skeleton {\n  background-image: none !important;\n  width: 102%;\n}\nsection.forum.main ol.cats li.forumsList ol.catsforum li.forumsDisp .forums.main ul.subforums.skeleton li {\n  display: inline-block !important;\n  width: 100px;\n  height: 15px;\n}\nsection.forum.main ol.cats li.forumsList ol.catsforum li.forumsDisp .forums.icon.skeleton {\n  width: 50px !important;\n  height: 50px !important;\n  border-radius: 50%;\n}\nsection.forum.main ol.cats li.forumsList ol.catsforum li.forumsDisp .forums.stats.skeleton {\n  width: 70px;\n  height: 50px;\n}\nsection.forum.main ol.cats li.forumsList ol.catsforum li.forumsDisp .forums.last .authorMargin.skeleton {\n  margin-top: 10px !important;\n  background-image: none !important;\n}\nsection.forum.main ol.cats li.forumsList ol.catsforum li.forumsDisp .forums.last .author.avatar.skeleton {\n  width: 50px !important;\n  height: 50px;\n}\nsection.forum.main ol.cats li.forumsList ol.catsforum li.forumsDisp .forums.last .author.skeleton {\n  display: inline-block !important;\n  width: 100px !important;\n  height: 15px;\n}\nsection.forum.main ol.cats li.forumsList ol.catsforum li.forumsDisp .forums.last.skeleton {\n  width: 20% !important;\n  background-image: none !important;\n}\n/* Topic section \n------------------*/\n.topic section.content .messageInside.skeleton {\n  display: flex;\n  flex-flow: row wrap;\n  background-image: none !important;\n}\n.topic section.content .messageInside.skeleton span {\n  flex: auto;\n  margin-right: 5px;\n  margin-bottom: 5px;\n}\n.topic section.content .header-topic .skeleton {\n  width: 300px;\n}\n.topic section.users ul.leftStats li.avatar-username span.username .skeleton {\n  width: 150px;\n}\n.topic section.users ul.leftStats li.avatar-username .avaPic.skeleton {\n  width: 150px;\n  height: 150px;\n}\n.topic section.users ul.leftStats li.miscList.skeleton {\n  width: 200px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcnVtLnNrZWxldG9uLmNvbXBvbmVudC5sZXNzIiwiLi5cXC4uXFwuLlxcLi5cXHZhcmlhYmxlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7NkJBQzZCO0FBQzdCOzZCQUM2QjtBQUM3QjttQkFDbUI7QUFXYjtFQUNDLFdBQUE7RUFDQSx1QkFBQTtBQVRQO0FBaUJVO0VBQ0MsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQWZYO0FBbUJVO0VBQ0MsaUNBQUE7RUFDQSxXQUFBO0FBakJYO0FBZVU7RUFJRSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBaEJaO0FBc0JTO0VBQ0Msc0JBQUE7RUFDQSx1QkFBQTtFQ1lULGtCQUFBO0FEOUJEO0FBdUJTO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUFyQlY7QUEwQlU7RUFDQywyQkFBQTtFQUNBLGlDQUFBO0FBeEJYO0FBNkJXO0VBQ0Msc0JBQUE7RUFDQSxZQUFBO0FBM0JaO0FBOEJVO0VBQ0MsZ0NBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUE1Qlg7QUErQlM7RUFDQyxxQkFBQTtFQUNBLGlDQUFBO0FBN0JWO0FBQ0E7bUJBQ21CO0FBNkNmO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7QUEzQ0w7QUF3Q0k7RUFLRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQTFDTjtBQWlDRTtFQWVHLFlBQUE7QUE3Q0w7QUFzREs7RUFLRyxZQUFBO0FBeERSO0FBNERPO0VBQ0MsWUFBQTtFQUNBLGFBQUE7QUExRFI7QUErRE07RUFDQyxZQUFBO0FBN0RQIiwiZmlsZSI6ImZvcnVtLnNrZWxldG9uLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRm9ydW0gdmFyIGFuZCBmdW5jdGlvbiBcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuQGltcG9ydCAocmVmZXJlbmNlKSBcIi4uLy4uLy4uLy4uL3ZhcmlhYmxlLmxlc3NcIjtcblxuXG4vKiBTa2VsZXRvblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi8qIEZvcnVtIHNlY3Rpb24gXG4tLS0tLS0tLS0tLS0tLS0tLS0qL1xuc2VjdGlvbiB7XG5cdCYuZm9ydW0ge1xuXHRcdCYubWFpbiB7XG5cdFx0XHRvbC5jYXRzIHtcblx0XHRcdFx0bGkuZm9ydW1zTGlzdCB7XG5cdFx0XHRcdFx0aDIge1xuXHRcdFx0XHRcdFx0Ji5za2VsZXRvbiB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0b2wuY2F0c2ZvcnVtIHtcblx0XHRcdFx0XHRcdGxpLmZvcnVtc0Rpc3Age1xuXHRcdFx0XHRcdFx0XHQuZm9ydW1zIHtcblx0XHRcdFx0XHRcdFx0XHQmLm1haW4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0aDQge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQmLnNrZWxldG9uIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMjUwcHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAxNXB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDVweDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0dWwuc3ViZm9ydW1zIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ji5za2VsZXRvbiB7IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMTAyJTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsaSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDBweDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMTVweDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0Ji5pY29uIHtcblx0XHRcdFx0XHRcdFx0XHRcdCYuc2tlbGV0b24ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogNTBweCAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0LmJvcmRlcnJhZGl1cyg1MCUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQmLnN0YXRzIHtcblx0XHRcdFx0XHRcdFx0XHRcdCYuc2tlbGV0b24ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogNzBweDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA1MHB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQmLmxhc3Qge1xuXHRcdFx0XHRcdFx0XHRcdFx0LmF1dGhvck1hcmdpbiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCYuc2tlbGV0b24ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdC5hdXRob3Ige1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQmLmF2YXRhciB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ji5za2VsZXRvbiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogNTBweCAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA1MHB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQmLnNrZWxldG9uIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwcHggIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDE1cHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdCYuc2tlbGV0b24ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMjAlICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLyogVG9waWMgc2VjdGlvbiBcbi0tLS0tLS0tLS0tLS0tLS0tLSovXG4udG9waWMge1xuXHRzZWN0aW9uIHtcblx0XHQmLmNvbnRlbnQge1xuXHRcdFx0Lm1lc3NhZ2VJbnNpZGUge1xuXHRcdFx0XHQmLnNrZWxldG9uIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGZsZXgtZmxvdzogcm93IHdyYXA7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdHNwYW4ge1xuXHRcdFx0XHRcdFx0ZmxleDogYXV0bztcblx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogNXB4O1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogNXB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0LmhlYWRlci10b3BpYyB7XG5cdFx0XHRcdC5za2VsZXRvbiB7XG5cdFx0XHRcdFx0d2lkdGg6IDMwMHB4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGEuZHJvcFRvcGljIHtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQmLnVzZXJzIHtcblx0XHRcdHVsLmxlZnRTdGF0cyB7XG5cdFx0XHRcdGxpIHtcblx0XHRcdFx0XHQmLmF2YXRhci11c2VybmFtZSB7XG5cdFx0XHRcdFx0XHRzcGFuLnVzZXJuYW1lIHtcblx0XHRcdFx0XHRcdFx0Yi50aXRsZSB7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0LnNrZWxldG9uIHtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMTUwcHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5hdmFQaWMge1xuXHRcdFx0XHRcdFx0XHQmLnNrZWxldG9uIHtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMTUwcHg7XG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAxNTBweDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQmLm1pc2NMaXN0IHtcblx0XHRcdFx0XHRcdCYuc2tlbGV0b24ge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMjAwcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRiIHtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHNwYW4ge1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQmLmN1c3RvbVRpdGxlIHtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Ji50b3BpY19mb290ZXIge1xuXHRcdFx0LnN0YXR1dCB7XG5cdFx0XHRcdHNwYW4ub25saW5lIHtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufSIsIi8qIFZhcnMgXG4tLS0tLS0tLS0tLS0tLS0tLS0qL1xuQHBhdGhBc3NldHM6IFwiLi9hc3NldHNcIjtcbkBmYS1mb250LXBhdGg6IFwiQHtwYXRoQXNzZXRzfS9pY29uL3dlYmZvbnRzXCI7XG5AcGF0aEZvbnQ6IFwiQHtwYXRoQXNzZXRzfS9mb250c1wiO1xuXG5AbWFpbkNvbG9yOiAjMjAyMjI1O1xuQHNlY29uZENvbG9yOiAjZmZmO1xuXG5AYnV0dG9uQ29sb3JQcmltOiAjZWQ0MjQ1O1xuQGxpbmtDb2xvclByaW06ICMzNDg0ZTU7XG5cbkBkb25hdG9yQ29sb3I6ICMxZDhhZTI7XG5cbkBtYXgtd2lkdGg6IDI1MDBweDtcbkBtYXgtd2lkdGgtY29udGVudDogMTUwMHB4O1xuQGJsaW5rQ29sb3I6ICMzOGE1MTc7XG5cbi8qIEV4dGVybmFsIHN0eWxlc2hlZXQgXG4tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLy9AaW1wb3J0IFwiQHtwYXRoRm9udH0vaWNvbi9hbGwuY3NzXCI7XG5cblxuXG4vKiBDb3JlIGZ1bmN0aW9ucyBcbi0tLS0tLS0tLS0tLS0tLS0tLSovXG4uZ3JhZGllbnRMaW5lYXIoQGJhY2tncm91bmQsIEBkZWcsIEBjb2xvcjEsIEBjb2xvcjIpIHtcblx0YmFja2dyb3VuZDogQGJhY2tncm91bmQgLW1vei1saW5lYXItZ3JhZGllbnQoQGRlZywgQGNvbG9yMSwgQGNvbG9yMik7XG5cdGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kIC13ZWJraXQtbGluZWFyLWdyYWRpZW50KEBkZWcsIEBjb2xvcjEsIEBjb2xvcjIpO1xuXHRiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZCBsaW5lYXItZ3JhZGllbnQoQGRlZywgQGNvbG9yMSwgQGNvbG9yMik7XG5cdGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9XCJAY29sb3IxXCIsZW5kQ29sb3JzdHI9XCJAY29sb3IyXCIsR3JhZGllbnRUeXBlPTEpO1xufVxuXG4uZ3JhZGllbnRMaW5lYXJJbWcoQGJhY2tncm91bmQsIEBkZWcsIEBjb2xvcjEsIEBjb2xvcjIsIEB1cmwpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYmFja2dyb3VuZDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoQHVybCksIC1tb3otbGluZWFyLWdyYWRpZW50KEBkZWcsIEBjb2xvcjEsIEBjb2xvcjIpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChAdXJsKSwgLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoQGRlZywgQGNvbG9yMSwgQGNvbG9yMik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKEB1cmwpLCBsaW5lYXItZ3JhZGllbnQoQGRlZywgQGNvbG9yMSwgQGNvbG9yMik7XG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj1cIkBjb2xvcjFcIixlbmRDb2xvcnN0cj1cIkBjb2xvcjJcIixHcmFkaWVudFR5cGU9MSk7XG59XG5cbi5ib3gtc2hhZG93KEBzaGFkb3csIEBpbnNldDpmYWxzZSkge1xuICAgICYgd2hlbiAoQGluc2V0ID0gdHJ1ZSkge1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgQHNoYWRvdztcbiAgICAgICAgYm94LXNoYWRvdzppbnNldCBAc2hhZG93O1xuICAgIH1cbiAgICAmIHdoZW4gKEBpbnNldCA9IGZhbHNlKSB7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogQHNoYWRvdztcbiAgICAgICAgYm94LXNoYWRvdzogQHNoYWRvdztcbiAgICB9XG59XG5cbi5ib3gtc2l6aW5nKEBwYXJhbSkge1xuICAgIC13ZWJraXQtYm94LXNpemluZzogQHBhcmFtO1xuICAgIGJveC1zaXppbmc6IEBwYXJhbTtcbn1cblxuLmJvcmRlcnJhZGl1cyhAZGVncmVlKSB7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogQGRlZ3JlZTtcblx0Ym9yZGVyLXJhZGl1czogQGRlZ3JlZTtcbn1cblxuLmJhY2tibHVyKEBibHVyKSB7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoQGJsdXIpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cihAYmx1cik7XG59XG5cbi50cmFuc2l0aW9uKEB0eXBlLCBAdGltZSwgQGVhc2luZykge1xuXHQtd2Via2l0LXRyYW5zaXRpb246IEB0eXBlIEB0aW1lIEBlYXNpbmc7XG5cdC1tb3otdHJhbnNpdGlvbjogQHR5cGUgQHRpbWUgQGVhc2luZztcblx0LW1zLXRyYW5zaXRpb246IEB0eXBlIEB0aW1lIEBlYXNpbmc7XG5cdC1vLXRyYW5zaXRpb246IEB0eXBlIEB0aW1lIEBlYXNpbmc7XG5cdHRyYW5zaXRpb246IEB0eXBlIEB0aW1lIEBlYXNpbmc7XG59XG5cbi50cmFuc2Zvcm0oQHR5cGUpIHtcbiAgICAtbW96LXRyYW5zZm9ybTogQHR5cGU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IEB0eXBlO1xuICAgIC1vLXRyYW5zZm9ybTogQHR5cGU7XG4gICAgLW1zLXRyYW5zZm9ybTogQHR5cGU7XG4gICAgdHJhbnNmb3JtOiBAdHlwZTtcbn1cblxuLmNvdmVyIHtcblx0LXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5zaGFkb3ctZ2xvc3Mge1xuXHQtbW96LWJveC1zaGFkb3c6IHJnYmEoMCwwLDAsMC4xKSAwcHggMXB4IDNweCwgaW5zZXQgcmdiYSgyNTUsMjU1LDI1NSwwLjIpIDBweCAxcHggMHB4O1xuXHQtd2Via2l0LWJveC1zaGFkb3c6IHJnYmEoMCwwLDAsMC4xKSAwcHggMXB4IDNweCwgaW5zZXQgcmdiYSgyNTUsMjU1LDI1NSwwLjIpIDBweCAxcHggMHB4O1xuXHRib3gtc2hhZG93OiByZ2JhKDAsMCwwLDAuMSkgMHB4IDFweCAzcHgsIGluc2V0IHJnYmEoMjU1LDI1NSwyNTUsMC4yKSAwcHggMXB4IDBweDtcbn1cblxuLmJ1dHRvbkNTUyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBiYWNrZ3JvdW5kOiBmYWRlKEBidXR0b25Db2xvclByaW0sIDIwJSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRlbihAYnV0dG9uQ29sb3JQcmltLCAxMCk7XG4gICAgY29sb3I6IEBzZWNvbmRDb2xvcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLmJhY2tibHVyKDRweCk7XG4gICAgLnRyYW5zaXRpb24oYmFja2dyb3VuZCwgMzAwbXMsIGVhc2UtaW4tb3V0KTtcbiAgICAuYm9yZGVycmFkaXVzKDNweCk7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IGZhZGUoQGJ1dHRvbkNvbG9yUHJpbSwgNTAlKTtcbiAgICB9XG59Il19 */"], encapsulation: 2 });


/***/ }),

/***/ "K7IZ":
/*!*********************************************************!*\
  !*** ./src/app/module/forum/forums/forums.component.ts ***!
  \*********************************************************/
/*! exports provided: ForumsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumsComponent", function() { return ForumsComponent; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _dicebear_avatars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dicebear/avatars */ "tB1i");
/* harmony import */ var _dicebear_avatars__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dicebear_avatars__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dicebear_pixel_art__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dicebear/pixel-art */ "y6Nm");
/* harmony import */ var _dicebear_pixel_art__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dicebear_pixel_art__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_services */ "J9tS");
/* harmony import */ var _sections_crumbs_forum_crumbs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sections/crumbs/forum.crumbs.component */ "gRqr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _helpers_safe_html__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../_helpers/safe-html */ "hbwU");










function ForumsComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ForumsComponent_ol_15_img_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 27);
} if (rf & 2) {
    const topic_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", topic_r2.last_user.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function ForumsComponent_ol_15_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "safeHtml");
} if (rf & 2) {
    const topic_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, topic_r2.last_user.svg), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function ForumsComponent_ol_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ol", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Par ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Messages ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " Vues ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, ForumsComponent_ol_15_img_22_Template, 1, 1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, ForumsComponent_ol_15_div_23_Template, 2, 3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "ul", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const topic_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "/forum/topic/", topic_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](topic_r2.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](topic_r2.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", topic_r2.posted, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](topic_r2.num_posts);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](topic_r2.num_views);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", topic_r2.last_user.avatar != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", topic_r2.last_user.avatar == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](topic_r2.last_user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](topic_r2.last_post);
} }
class ForumsComponent {
    constructor(route, forumService, FileUploadService, UtilsService) {
        this.route = route;
        this.forumService = forumService;
        this.FileUploadService = FileUploadService;
        this.UtilsService = UtilsService;
        this.forumid = 0;
        this.topics = null;
        this.loading = true;
        this.apiurl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl;
    }
    ngOnInit() {
        this.forumid = this.route.snapshot.params['id'];
        this.forumService.getTopics(this.forumid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(topics => {
            this.loading = false;
            this.topics = topics;
            console.log(this.topics);
            for (let i = 0; i < this.topics.length; i++) {
                this.FileUploadService.getAvatar(this.topics[i].last_user.id)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
                    .subscribe(avatar => {
                    const svgAvatar = Object(_dicebear_avatars__WEBPACK_IMPORTED_MODULE_2__["createAvatar"])(_dicebear_pixel_art__WEBPACK_IMPORTED_MODULE_3__, {
                        seed: this.topics[i].last_user.username,
                        backgroundColor: '#868889',
                    });
                    console.log(this.topics[i].last_user.username);
                    console.log(svgAvatar);
                    if (avatar != '') {
                        this.topics[i].last_user['avatar'] = this.apiurl + avatar;
                    }
                    else {
                        this.topics[i].last_user['avatar'] = '';
                        this.topics[i].last_user['svg'] = svgAvatar;
                    }
                });
            }
        });
    }
    createRange(number) {
        return new Array(number);
    }
}
ForumsComponent.ɵfac = function ForumsComponent_Factory(t) { return new (t || ForumsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_6__["forumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_6__["FileUploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_6__["UtilsService"])); };
ForumsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ForumsComponent, selectors: [["app-forums"]], decls: 16, vars: 3, consts: [[1, "viewforum_wrapper"], [1, "viewForum"], [1, "head_forum"], [1, "createTopic", 3, "routerLink"], [1, "fas", "fa-plus"], ["class", "loading", 4, "ngIf"], [1, "list_topic"], ["class", "getListTopic", 4, "ngFor", "ngForOf"], [1, "loading"], [1, "fas", "fa-circle-notch", "fa-spin"], [1, "getListTopic"], [1, "getRowTopic", "icon"], [1, "fas", "fa-comment-alt"], [1, "getRowTopic", "title"], [3, "routerLink"], [1, "author"], ["href", ""], [1, "getRowTopic", "numPosts"], [1, "getRowTopic", "numViews"], [1, "getRowTopic", "last"], ["href", "but"], ["class", "avatar", 3, "src", 4, "ngIf"], ["class", "avatar avatarSvg", 3, "innerHTML", 4, "ngIf"], [1, "getLastPost"], [1, "lastPost", "username"], ["href", "flut"], [1, "lastPost", "time"], [1, "avatar", 3, "src"], [1, "avatar", "avatarSvg", 3, "innerHTML"]], template: function ForumsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-forumCrumbs");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Notre premier forums");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Un petit message de description pour voir si c'est bon ou pas");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Cr\u00E9er un no");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "uveau sujet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ForumsComponent_div_13_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, ForumsComponent_ol_15_Template, 30, 10, "ol", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "/forum/post/f/", ctx.forumid, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.topics);
    } }, directives: [_sections_crumbs_forum_crumbs_component__WEBPACK_IMPORTED_MODULE_7__["ForumCrumbsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]], pipes: [_helpers_safe_html__WEBPACK_IMPORTED_MODULE_9__["Safe"]], encapsulation: 2 });


/***/ }),

/***/ "RPZ3":
/*!*************************************************!*\
  !*** ./src/app/module/forum/forum.component.ts ***!
  \*************************************************/
/*! exports provided: ForumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumComponent", function() { return ForumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_forum_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/forum.home.component */ "o7z0");




function ForumComponent_app_forumHome_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-forumHome");
} }
function ForumComponent_router_outlet_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
} }
class ForumComponent {
    constructor(router) {
        this.router = router;
        this.href = "";
        this.router.events.subscribe((url) => this.href = url.url);
    }
    ngOnInit() {
    }
}
ForumComponent.ɵfac = function ForumComponent_Factory(t) { return new (t || ForumComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ForumComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForumComponent, selectors: [["app-forum"]], decls: 2, vars: 2, consts: [[4, "ngIf"]], template: function ForumComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ForumComponent_app_forumHome_0_Template, 1, 0, "app-forumHome", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForumComponent_router_outlet_1_Template, 1, 0, "router-outlet", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.href == "/forum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.href != "/forum");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _home_forum_home_component__WEBPACK_IMPORTED_MODULE_3__["ForumHomeComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["/* Forum var and function \n------------------*/\n/* Forum animation \n------------------*/\n@keyframes showResponse {\n  0% {\n    left: -99999px;\n  }\n  50% {\n    left: 0;\n    transform: scale(0.5);\n  }\n  69% {\n    transform: scale(1);\n  }\n  70%,\n  80%,\n  90%,\n  100% {\n    left: 2%;\n  }\n  75%,\n  85%,\n  95% {\n    left: 3%;\n  }\n}\n@keyframes showDrop {\n  0% {\n    transform: scale(0.5);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n/* Forum global \n------------------*/\n.forum_wrapper,\n.topic_wrapper,\n.viewforum_wrapper,\n.post_wrapper {\n  background: url('_-_-_-assets-img-black-sections-forum-bg_.png');\n  background-repeat: no-repeat;\n  background-position: center top;\n  background-size: 1300px;\n  padding-top: 130px;\n  scroll-behavior: smooth;\n}\n.post_wrapper.topicPost {\n  padding-top: 0;\n  background: none;\n}\n.post_wrapper.topicPost section form {\n  width: 100%;\n}\n.post_wrapper.topicPost section form .form-group {\n  margin-bottom: 0px;\n}\n.post_wrapper.topicPost section form .form-group.button {\n  width: 90%;\n  margin: 0 auto;\n}\n.forum_wrapper {\n  display: grid;\n  grid-template-columns: 3fr 1.2fr;\n  grid-gap: 40px;\n}\n.loading {\n  font-size: 80px;\n  opacity: 0.5;\n  padding: 15% 0;\n  text-align: center;\n}\n.toolbar {\n  display: flex;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.toolbar ol {\n  display: inline-block;\n  margin: 5px;\n  width: 100%;\n  padding: 0 20px;\n}\n.toolbar ol:not(:first-child) {\n  border-left: 1px solid rgba(255, 255, 255, 0.1);\n}\n.toolbar ol h4 {\n  margin-left: 5px;\n  font-family: Montserrat;\n  text-transform: uppercase;\n  font-size: 15px;\n}\n.toolbar ol ul.sectionEditor {\n  display: inline-flex;\n  justify-content: space-between;\n  background: #676d77;\n  border-radius: 30px;\n  margin: 5px;\n}\n.toolbar ol ul.sectionEditor li.bbcode {\n  position: relative;\n  cursor: pointer;\n  color: #383b40;\n  padding: 5px 10px;\n  transition: background 300ms ease-in-out;\n}\n.toolbar ol ul.sectionEditor li.bbcode:first-child {\n  border-radius: 30px 0 0 30px;\n}\n.toolbar ol ul.sectionEditor li.bbcode:last-child {\n  border-radius: 0 30px 30px 0;\n}\n.toolbar ol ul.sectionEditor li.bbcode:hover {\n  background: #ed4245;\n}\n.toolbar ol ul.sectionEditor li.bbcode .showList {\n  position: absolute;\n  top: 30px;\n  left: 0;\n  z-index: 4;\n  display: none;\n  width: 300px;\n  height: 200px;\n  background: #a9aeb5;\n  padding: 5px;\n  transform: scale(1);\n  border-radius: 4px;\n  box-shadow: inset 0 0 15px 0px rgba(0, 0, 0, 0.3);\n}\n.toolbar ol ul.sectionEditor li.bbcode .showList.fontList ul {\n  height: 100%;\n  overflow-x: auto;\n}\n.toolbar ol ul.sectionEditor li.bbcode .showList.fontList ul li {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 0;\n}\n.toolbar ol ul.sectionEditor li.bbcode .showList.fontList ul li:not(:last-child) {\n  border-bottom: 1px solid #8e949d;\n}\n.toolbar ol ul.sectionEditor li.bbcode .showList.fontList ul li b {\n  display: inline-block;\n  text-transform: uppercase;\n  padding-right: 5px;\n}\n.toolbar ol ul.sectionEditor li.bbcode .showList.fontList ul li span {\n  font-size: 11px;\n}\n.toolbar ol ul.sectionEditor li.bbcode .showList.fontSize {\n  align-items: center;\n  width: 150px;\n  height: 50px;\n  padding: 0;\n}\n.toolbar ol ul.sectionEditor li.bbcode .showList.fontColor,\n.toolbar ol ul.sectionEditor li.bbcode .showList.fontHighlight {\n  width: 100px;\n  height: 60px;\n  padding: 0;\n}\n.toolbar ol ul.sectionEditor li.bbcode .showList.fontColor input[type=\"color\"],\n.toolbar ol ul.sectionEditor li.bbcode .showList.fontHighlight input[type=\"color\"] {\n  width: 100%;\n  height: 100%;\n  border: none;\n  background: transparent;\n}\n.toolbar ol ul.sectionEditor li.bbcode .showList.list,\n.toolbar ol ul.sectionEditor li.bbcode .showList.table {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n  border-radius: 0;\n}\n.toolbar ol ul.sectionEditor li.bbcode .showList.list ul,\n.toolbar ol ul.sectionEditor li.bbcode .showList.table ul {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 90%;\n  height: 70%;\n  margin: auto;\n  background: #a9aeb5;\n  border-radius: 4px;\n  box-shadow: inset 0 0 15px 0px rgba(0, 0, 0, 0.3);\n}\n.toolbar ol ul.sectionEditor li.bbcode .showList.list ul .groupeList,\n.toolbar ol ul.sectionEditor li.bbcode .showList.table ul .groupeList {\n  width: 70%;\n  height: 95%;\n  padding: 0 10px;\n  overflow-x: auto;\n}\n.toolbar ol ul.sectionEditor li.bbcode .showList.list ul .groupeList li,\n.toolbar ol ul.sectionEditor li.bbcode .showList.table ul .groupeList li {\n  position: relative;\n}\n.toolbar ol ul.sectionEditor li.bbcode .showList.list ul .groupeList li:not(:last-child),\n.toolbar ol ul.sectionEditor li.bbcode .showList.table ul .groupeList li:not(:last-child) {\n  margin-bottom: 5px;\n}\n.toolbar ol ul.sectionEditor li.bbcode .showList.list ul .groupeList li .removeElement,\n.toolbar ol ul.sectionEditor li.bbcode .showList.table ul .groupeList li .removeElement {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n  z-index: 3;\n  color: #ed4245;\n}\n.toolbar ol ul.sectionEditor li.bbcode .showList.list ul .groupeListType,\n.toolbar ol ul.sectionEditor li.bbcode .showList.table ul .groupeListType {\n  width: 15%;\n  padding: 0 10px;\n}\n.toolbar ol ul.sectionEditor li.bbcode .showList.list button,\n.toolbar ol ul.sectionEditor li.bbcode .showList.table button {\n  width: 100px;\n  top: 0;\n}\n.toolbar ol ul.sectionEditor li.bbcode .showList.table {\n  height: 405px;\n}\n.toolbar ol ul.sectionEditor li.bbcode .showList.table ul {\n  height: 85%;\n  padding: 15px;\n}\n.toolbar ol ul.sectionEditor li.bbcode .showList.table ul table.bbcode .actionElement {\n  position: relative;\n  top: 4px;\n  left: 5px;\n}\n.toolbar ol ul.sectionEditor li.bbcode .showList.border {\n  width: 400px;\n  height: 100px;\n}\n.toolbar ol ul.sectionEditor li.bbcode .showList.box {\n  width: 430px;\n  height: 60px;\n}\n.toolbar ol ul.sectionEditor li.bbcode .showList.box .groupeItem {\n  margin-right: 10px;\n}\n.toolbar ol ul.sectionEditor li.bbcode .showList.box .groupeItem:last-child {\n  width: 100%;\n}\n.toolbar ol ul.sectionEditor li.bbcode .showList.box span.or {\n  display: inline-block;\n  margin-right: 10px;\n  font-size: 40px;\n  color: #4f545c;\n}\n.toolbar ol ul.sectionEditor li.bbcode .showList.box button {\n  width: 30%;\n}\n.toolbar ol ul.sectionEditor li.bbcode .showList .actionElement {\n  display: block;\n  cusor: pointer;\n}\n.toolbar ol ul.sectionEditor li.bbcode .showList .actionElement:hover {\n  color: #ed4245;\n}\n.toolbar ol ul.sectionEditor li.bbcode .showList button {\n  top: 0;\n}\n.toolbar ol ul.sectionEditor li.bbcode .showList button.small {\n  height: 100%;\n  margin: 0;\n}\n.toolbar ol ul.sectionEditor li.bbcode .showList input[type='number'] {\n  background: transparent;\n  width: 50%;\n  border: none;\n  font-size: 25px;\n  padding-left: 10px;\n}\n.toolbar ol ul.sectionEditor li.bbcode .showList input[type='number']:focus {\n  outline: none;\n}\n.toolbar ol ul.sectionEditor li.bbcode .showList.show {\n  display: block;\n  animation: 0.5s showDrop ease-in-out;\n}\n.toolbar ol ul.sectionEditor li.bbcode .showList.show.fontSize,\n.toolbar ol ul.sectionEditor li.bbcode .showList.show.list,\n.toolbar ol ul.sectionEditor li.bbcode .showList.show.border,\n.toolbar ol ul.sectionEditor li.bbcode .showList.show.table,\n.toolbar ol ul.sectionEditor li.bbcode .showList.show.box {\n  display: flex !important;\n}\n.toolbar ol ul.sectionEditor li.bbcode .showList::after {\n  z-index: 20;\n  content: ' ';\n  position: absolute;\n  top: -5px;\n  left: 12px;\n  border: 5px solid #a9aeb5;\n  border-color: #a9aeb5 transparent transparent #a9aeb5;\n  transform: rotate(45deg);\n}\ntable.bbcode {\n  border-collapse: collapse;\n}\ntable.bbcode thead {\n  background: #737a85;\n  text-align: center;\n}\ntable.bbcode thead td {\n  color: #fff;\n}\ntable.bbcode tbody td {\n  padding: 5px;\n}\ntable.bbcode thead td,\ntable.bbcode tbody td {\n  border: 1px solid #4f545c;\n}\n/* Forum section \n------------------*/\nsection.forum.main {\n  margin: 20px;\n}\nsection.forum.main ol.cats {\n  margin-bottom: 20px;\n}\nsection.forum.main ol.cats li.forumsList {\n  background: rgba(79, 84, 92, 0.2);\n}\nsection.forum.main ol.cats li.forumsList h2 {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  background-image: url('forum_cat.png');\n  background-position: right;\n  background-repeat: no-repeat;\n  background-color: rgba(56, 59, 64, 0.2);\n  border: 1px solid rgba(183, 187, 192, 0.05);\n  font-family: Poppins;\n  font-size: 20px;\n  color: #b7bbc0;\n  text-transform: uppercase;\n  padding: 8px;\n  border-radius: 4px 4px 0 0;\n}\nsection.forum.main ol.cats li.forumsList h2 i {\n  cursor: pointer;\n}\nsection.forum.main ol.cats li.forumsList ol.catsforum li.forumsDisp {\n  display: flex;\n  align-items: center;\n  width: auto;\n  justify-content: space-around;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\nsection.forum.main ol.cats li.forumsList ol.catsforum li.forumsDisp:nth-child(odd) {\n  background: #383b40;\n}\nsection.forum.main ol.cats li.forumsList ol.catsforum li.forumsDisp:not(section.forum.main ol.cats li.forumsList ol.catsforum li.forumsDisp:last-child) {\n  border-bottom: 1px solid rgba(183, 187, 192, 0.05);\n}\nsection.forum.main ol.cats li.forumsList ol.catsforum li.forumsDisp .forums {\n  padding: 10px 0;\n}\nsection.forum.main ol.cats li.forumsList ol.catsforum li.forumsDisp .forums.main {\n  width: 25%;\n}\nsection.forum.main ol.cats li.forumsList ol.catsforum li.forumsDisp .forums.main h4 a {\n  color: #b7bbc0;\n  font-size: 20px;\n  text-decoration: none;\n}\nsection.forum.main ol.cats li.forumsList ol.catsforum li.forumsDisp .forums.main p {\n  color: #cccccc;\n}\nsection.forum.main ol.cats li.forumsList ol.catsforum li.forumsDisp .forums.main ul.subforums {\n  margin-bottom: 5px;\n}\nsection.forum.main ol.cats li.forumsList ol.catsforum li.forumsDisp .forums.main ul.subforums li {\n  display: inline;\n  margin-right: 10px;\n}\nsection.forum.main ol.cats li.forumsList ol.catsforum li.forumsDisp .forums.main ul.subforums li a {\n  color: #808791;\n  font-size: 13px;\n  text-decoration: none;\n}\nsection.forum.main ol.cats li.forumsList ol.catsforum li.forumsDisp .forums.icon {\n  background-repeat: no-repeat;\n  background-position: 10px 20px;\n  width: 80px;\n  height: 80px;\n  font-size: 40px;\n  text-align: center;\n  padding-top: 20px;\n}\nsection.forum.main ol.cats li.forumsList ol.catsforum li.forumsDisp .forums.icon.old {\n  background-image: url('old.png');\n  opacity: 0.4;\n}\nsection.forum.main ol.cats li.forumsList ol.catsforum li.forumsDisp .forums.icon.new {\n  background-image: url('new.png');\n}\nsection.forum.main ol.cats li.forumsList ol.catsforum li.forumsDisp .forums.stats {\n  padding: 0 40px;\n  font-size: 13px;\n  text-align: right;\n}\nsection.forum.main ol.cats li.forumsList ol.catsforum li.forumsDisp .forums.stats b {\n  font-size: 18px;\n  display: block;\n  font-weight: normal;\n  color: #cccccc;\n}\nsection.forum.main ol.cats li.forumsList ol.catsforum li.forumsDisp .forums.last {\n  float: right;\n  width: 35%;\n}\nsection.forum.main ol.cats li.forumsList ol.catsforum li.forumsDisp .forums.last .author {\n  width: 300px;\n  display: block;\n}\nsection.forum.main ol.cats li.forumsList ol.catsforum li.forumsDisp .forums.last .author.avatar {\n  float: left;\n  margin-right: 10px;\n  width: 60px;\n  border-radius: 50%;\n}\nsection.forum.main ol.cats li.forumsList ol.catsforum li.forumsDisp .forums.last .author.avatar svg {\n  border-radius: 50%;\n}\nsection.forum.main ol.cats li.forumsList ol.catsforum li.forumsDisp .forums.last .author.lastSub {\n  color: #808791;\n  text-decoration: none;\n}\nsection.forum.main ol.cats li.forumsList ol.catsforum li.forumsDisp .forums.last .author.time {\n  color: #cccccc;\n}\nsection.forum.sidebar {\n  padding: 20px;\n}\nsection.forum.sidebar ul li.sidebarList {\n  background: rgba(79, 84, 92, 0.2);\n  border-radius: 4px;\n  margin-bottom: 10px;\n}\nsection.forum.sidebar ul li.sidebarList h2 {\n  background-color: rgba(56, 59, 64, 0.2);\n  border: 1px solid rgba(183, 187, 192, 0.05);\n  font-family: Poppins;\n  font-size: 20px;\n  color: #b7bbc0;\n  padding: 8px;\n  text-transform: uppercase;\n  border-radius: 4px 4px 0 0;\n}\nsection.forum.sidebar ul li.sidebarList ol li {\n  display: block;\n  padding: 6px;\n}\nsection.forum.sidebar ul li.sidebarList ol li:nth-child(odd) {\n  background: #383b40;\n}\nsection.forum.sidebar ul li.sidebarList ol li:nth-child(even) {\n  background: #2c2f33;\n}\nsection.forum.sidebar ul li.sidebarList ol li a.lastPosts {\n  color: #808791;\n  text-decoration: none;\n  font-size: 16px;\n}\nsection.forum.sidebar ul li.sidebarList ol li span.Lastauth {\n  color: #cccccc;\n}\nsection.forum.sidebar ul li.sidebarList ol li span.Lastauth a {\n  color: #808791;\n  text-decoration: none;\n}\nsection.forum.sidebar ul li.sidebarList ol li:not(section.forum.sidebar ul li.sidebarList ol li:last-child) {\n  border-bottom: 1px solid rgba(86, 92, 100, 0.3);\n}\nsection.viewForum .list_topic ol.getListTopic {\n  background: #4f545c;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #43484e;\n  box-shadow: inset 0 0 15px 0px rgba(0, 0, 0, 0.1);\n}\nsection.viewForum .list_topic ol.getListTopic:after {\n  position: absolute;\n  content: ' ';\n  width: 300px;\n  height: 50px;\n  background: #676d77;\n}\nsection.viewForum .list_topic ol.getListTopic:before {\n  position: absolute;\n  left: 280px;\n  content: ' ';\n  width: 50px;\n  height: 50px;\n  background: #676d77;\n  transform: skewX(15deg);\n}\nsection.viewForum .list_topic ol.getListTopic li.getRowTopic {\n  position: relative;\n  z-index: 2;\n  padding: 5px 10px;\n}\nsection.viewForum .list_topic ol.getListTopic li.getRowTopic.icon {\n  position: relative;\n  width: 5%;\n}\nsection.viewForum .list_topic ol.getListTopic li.getRowTopic.icon i {\n  font-size: 35px;\n  color: #9ba1a9;\n}\nsection.viewForum .list_topic ol.getListTopic li.getRowTopic.title {\n  width: 50%;\n}\nsection.viewForum .list_topic ol.getListTopic li.getRowTopic.title h3 a {\n  font-family: Poppins;\n  font-size: 13px;\n  text-decoration: none;\n  color: #b7bbc0;\n}\nsection.viewForum .list_topic ol.getListTopic li.getRowTopic.title h3 a:hover {\n  color: #ed4245;\n}\nsection.viewForum .list_topic ol.getListTopic li.getRowTopic.title span.author {\n  font-size: 13px;\n  color: #383b40;\n}\nsection.viewForum .list_topic ol.getListTopic li.getRowTopic.title span.author a {\n  color: #b7bbc0;\n  text-decoration: none;\n}\nsection.viewForum .list_topic ol.getListTopic li.getRowTopic.numPosts,\nsection.viewForum .list_topic ol.getListTopic li.getRowTopic.numViews {\n  width: 20%;\n}\nsection.viewForum .list_topic ol.getListTopic li.getRowTopic.numPosts b,\nsection.viewForum .list_topic ol.getListTopic li.getRowTopic.numViews b {\n  display: block;\n  color: #9ba1a9;\n}\nsection.viewForum .list_topic ol.getListTopic li.getRowTopic.last {\n  width: 25%;\n}\nsection.viewForum .list_topic ol.getListTopic li.getRowTopic.last .avatar {\n  float: left;\n  margin-right: 10px;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\nsection.viewForum .list_topic ol.getListTopic li.getRowTopic.last .avatar svg {\n  border-radius: 50%;\n}\nsection.viewForum .list_topic ol.getListTopic li.getRowTopic.last a {\n  text-decoration: none;\n  transition: opacity 300ms ease-in-out;\n}\nsection.viewForum .list_topic ol.getListTopic li.getRowTopic.last a:hover {\n  opacity: 0.5;\n}\nsection.viewForum .list_topic ol.getListTopic li.getRowTopic.last ul.getLastPost {\n  margin-top: 5px;\n}\nsection.viewForum .list_topic ol.getListTopic li.getRowTopic.last ul.getLastPost li.lastPost.username a {\n  text-decoration: none;\n  color: #b7bbc0;\n}\nsection.viewForum .list_topic ol.getListTopic li.getRowTopic.last ul.getLastPost li.lastPost.username a:hover {\n  color: #2c2f33;\n}\nsection.viewForum .list_topic ol.getListTopic li.getRowTopic.last ul.getLastPost li.lastPost.time {\n  color: #b7bbc0;\n}\nsection.viewForum .list_topic ol.getListTopic li.getRowTopic .locked {\n  position: absolute;\n  top: 30px;\n  right: 10px;\n  margin-right: 10px;\n  padding: 5px 10px;\n  background: #ed4245;\n  font-size: 11px;\n  border-radius: 30px;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px, inset rgba(255, 255, 255, 0.2) 0px 1px 0px;\n}\nsection.viewForum .head_forum {\n  position: relative;\n  width: 95%;\n  margin: 20px auto;\n}\nsection.viewForum .head_forum h1 {\n  text-transform: uppercase;\n  color: #676d77;\n}\nsection.viewForum .head_forum p {\n  color: #b7bbc0;\n}\nsection.viewForum .head_forum a.createTopic {\n  position: absolute;\n  right: -10px;\n  top: 10px;\n  padding: 10px 30px;\n  background: rgba(237, 66, 69, 0.5);\n  color: #fff;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-family: Montserrat;\n  border-radius: 4px;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  transition: background 300ms ease-in-out;\n}\nsection.viewForum .head_forum a.createTopic b {\n  color: #d9d9d9;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n}\nsection.viewForum .head_forum a.createTopic i {\n  margin-right: 10px;\n}\nsection.viewForum .head_forum a.createTopic:hover {\n  background: rgba(237, 66, 69, 0.8);\n}\nsection.bread-crumbs {\n  margin: 20px 0;\n}\nsection.bread-crumbs ol li {\n  display: inline-block;\n}\nsection.bread-crumbs ol li a {\n  z-index: 2;\n  display: inline-block;\n  padding: 5px 30px;\n  position: relative;\n  text-decoration: none;\n  color: #b7bbc0;\n  font-size: 19px;\n}\nsection.bread-crumbs ol li a:before,\nsection.bread-crumbs ol li a:after {\n  position: absolute;\n  right: 0;\n  border: 0px solid #5b6169;\n  border-width: 0 1px 0 0;\n  height: 50%;\n  width: 100%;\n  content: ' ';\n  transition: background 300ms ease-in-out;\n}\nsection.bread-crumbs ol li a:before {\n  top: 0;\n  transform: skewX(30deg);\n}\nsection.bread-crumbs ol li a:after {\n  bottom: 0;\n  transform: skewX(-30deg);\n}\nsection.bread-crumbs ol li a:hover:before,\nsection.bread-crumbs ol li a:hover:after {\n  background: rgba(183, 187, 192, 0.5);\n}\nsection.bread-crumbs ol li:last-child {\n  margin-left: 10px;\n  color: #676d77;\n  font-size: 19px;\n}\nsection.post form {\n  width: 90%;\n  margin: 0 auto;\n}\nsection.post form label {\n  display: block;\n}\nsection.post form input[type=\"text\"] {\n  padding: 0 5px;\n  height: 30px;\n  font-size: 20px;\n}\nsection.post form textarea {\n  height: 300px;\n  font-size: 18px;\n}\nsection.post form textarea:focus {\n  outline: none;\n}\nsection.post form button {\n  position: relative;\n  top: -6px;\n  padding: 7px 10px;\n}\nsection.post form .displayMultiple {\n  justify-content: space-between;\n}\nsection.post form .displayMultiple .itemMultiple:first-child {\n  width: 80%;\n}\nsection.post form .displayMultiple .itemMultiple:last-child {\n  width: 20%;\n}\n/* Topic section \n------------------*/\n.topic {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-gap: 0px;\n  margin: 0 10px;\n  background: #383b40;\n  border-bottom: 1px solid #808791;\n}\n.topic section.content {\n  grid-column: 2 / 6;\n  grid-row: 1;\n  color: #b7bbc0;\n}\n.topic section.content .messageInside {\n  padding: 10px;\n}\n.topic section.content .header-topic {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-position: right center;\n  background-repeat: no-repeat;\n  padding: 5px;\n  height: 35px;\n  color: #202225;\n  margin-bottom: 5px;\n  font-size: 14px;\n  font-family: Poppins;\n  background-color: #676d77;\n  background-image: url('header-topic.png'), linear-gradient(180deg, #b7bbc0, #a9aeb5);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"@color1\", endColorstr=\"@color2\", GradientType=1);\n}\n.topic section.content .header-topic a.dropTopic {\n  margin-right: 10px;\n  font-size: 18px;\n  color: #202225;\n}\n.topic section.users {\n  background-image: url('topic-left.png');\n  background-size: 300px;\n  background-repeat: no-repeat;\n  background-position: right top;\n  background-color: #b7bbc0;\n  grid-column: 1;\n  grid-row: 1;\n}\n.topic section.users ul.leftStats {\n  text-align: center;\n}\n.topic section.users ul.leftStats li {\n  color: #4f545c;\n}\n.topic section.users ul.leftStats li.avatar-username {\n  position: relative;\n}\n.topic section.users ul.leftStats li.avatar-username span.username {\n  display: block;\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  padding: 5px;\n  color: #202225;\n  font-size: 18px;\n  font-family: Montserrat;\n  font-weight: bold;\n  background: rgba(128, 135, 145, 0.7);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  box-shadow: 0 5px 10px 1px rgba(0, 0, 0, 0.2);\n}\n.topic section.users ul.leftStats li.avatar-username span.username b.title {\n  font-size: 10px;\n  text-transform: uppercase;\n}\n.topic section.users ul.leftStats li.avatar-username .avaPic {\n  display: inline-block;\n  margin-top: 5px;\n  width: 150px;\n}\n.topic section.users ul.leftStats li.miscList {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 5px;\n  border-left: 10px solid #676d77;\n  border-right: 10px solid #676d77;\n}\n.topic section.users ul.leftStats li.miscList span {\n  display: inline-block;\n  font-size: 13px;\n}\n.topic section.users ul.leftStats li.customTitle {\n  text-transform: uppercase;\n  margin-bottom: 20px;\n}\n.topic section.topic_footer {\n  display: flex;\n  background: #b7bbc0;\n  grid-column: 1 / 6;\n  grid-row: 3;\n}\n.topic section.topic_footer .statut {\n  padding: 5px;\n}\n.topic section.topic_footer .statut span.online {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  background: #43c41b;\n  box-shadow: 0 0 15px 0 #47d21d;\n  border-radius: 50%;\n}\n.topic.pushed {\n  position: relative;\n  animation: 0.5s showResponse ease-in-out;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcnVtLmNvbXBvbmVudC5sZXNzIiwiLi5cXC4uXFwuLlxcdmFyaWFibGUubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTttQkFDbUI7QUFDbkI7bUJBQ21CO0FBS25CO0VBQ0k7SUFDSSxjQUFBO0VBSE47RUFLRTtJQUNJLE9BQUE7SUNtRUoscUJBQUE7RURqRUY7RUFDRTtJQ2dFQSxtQkFBQTtFRDFERjtFQUhFOzs7O0lBQ0ksUUFBQTtFQVFOO0VBTkU7OztJQUNJLFFBQUE7RUFVTjtBQUNGO0FBUEE7RUFDSTtJQ29EQSxxQkFBQTtFRHRDRjtFQVhFO0lDaURBLG1CQUFBO0VEL0JGO0FBQ0Y7QUFDQTttQkFDbUI7QUFkbkI7Ozs7RUFDQyxnRUFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFtQkQ7QUFmQztFQUNDLGNBQUE7RUFDQSxnQkFBQTtBQWlCRjtBQW5CQztFQUtHLFdBQUE7QUFpQko7QUF0QkM7RUFPSSxrQkFBQTtBQWtCTDtBQWpCSztFQUNDLFVBQUE7RUFDQSxjQUFBO0FBbUJOO0FBWEE7RUFDQyxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0FBYUQ7QUFWQTtFQUNDLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBWUQ7QUFUQTtFQUNDLGFBQUE7RUNqQkcsa0NBQUE7RUFDQSwwQkFBQTtBRDZCSjtBQWRBO0VBSUUscUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFhRjtBQVpFO0VBQ0MsK0NBQUE7QUFjSDtBQXZCQTtFQVlHLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFjSDtBQTdCQTtFQWtCRyxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUN4Q0YsbUJBQUE7RUQwQ0UsV0FBQTtBQWVIO0FBckNBO0VBd0JJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQ2xDSCx3Q0FBQTtBRHVERDtBQW5CSTtFQ2pESCw0QkFBQTtBRHdFRDtBQXBCSTtFQ3BESCw0QkFBQTtBRDRFRDtBQXJCSTtFQUNDLG1CQUFBO0FBdUJMO0FBM0RBO0VBd0NLLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VDL0NELG1CQUFBO0VBckJILGtCQUFBO0VBZk8saURBQUE7QURrSFI7QUEzQks7RUFFRSxZQUFBO0VBQ0EsZ0JBQUE7QUE0QlA7QUEvQks7RUFLRyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUE2QlI7QUE1QlE7RUFDQyxnQ0FBQTtBQThCVDtBQXhDSztFQWFJLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQThCVDtBQTdDSztFQWtCSSxlQUFBO0FBOEJUO0FBekJLO0VBQ0MsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUEyQk47QUF6Qks7O0VBQ0MsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBNEJOO0FBL0JLOztFQUtFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBOEJQO0FBM0JLOztFQUNDLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUNsSEYsa0NBQUE7RUFDQSwwQkFBQTtFQUxILGdCQUFBO0FEd0pEO0FBeENLOztFQVVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUNoSU4sa0JBQUE7RUFmTyxpREFBQTtBRHFMUjtBQXRESzs7RUFvQkcsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFzQ1I7QUE3REs7O0VBeUJJLGtCQUFBO0FBd0NUO0FBdkNTOztFQUNDLGtCQUFBO0FBMENWO0FBckVLOztFQThCSyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUEyQ1Y7QUE3RUs7O0VBdUNHLFVBQUE7RUFDQSxlQUFBO0FBMENSO0FBbEZLOztFQTRDRSxZQUFBO0VBQ0EsTUFBQTtBQTBDUDtBQXZDSztFQUNDLGFBQUE7QUF5Q047QUExQ0s7RUFHRSxXQUFBO0VBQ0EsYUFBQTtBQTBDUDtBQTlDSztFQVVJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUF1Q1Q7QUFsQ0s7RUFDQyxZQUFBO0VBQ0EsYUFBQTtBQW9DTjtBQWxDSztFQUNDLFlBQUE7RUFDQSxZQUFBO0FBb0NOO0FBdENLO0VBSUUsa0JBQUE7QUFxQ1A7QUFwQ087RUFDQyxXQUFBO0FBc0NSO0FBNUNLO0VBVUUscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBcUNQO0FBbERLO0VBZ0JFLFVBQUE7QUFxQ1A7QUF0TkE7RUFxTE0sY0FBQTtFQUNBLGNBQUE7QUFvQ047QUFuQ007RUFDQyxjQUFBO0FBcUNQO0FBN05BO0VBNExNLE1BQUE7QUFvQ047QUFuQ007RUFDQyxZQUFBO0VBQ0EsU0FBQTtBQXFDUDtBQXBPQTtFQW1NTSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBb0NOO0FBbkNNO0VBQ0MsYUFBQTtBQXFDUDtBQWxDSztFQUNDLGNBQUE7RUFDQSxvQ0FBQTtBQW9DTjtBQW5DTTs7Ozs7RUFDQyx3QkFBQTtBQXlDUDtBQXRDYztFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EscURBQUE7RUN6TmQsd0JBQUE7QURzUUo7QUFyQ0E7RUFDQyx5QkFBQTtBQXVDRDtBQXhDQTtFQUdFLG1CQUFBO0VBQ0Esa0JBQUE7QUF3Q0Y7QUE1Q0E7RUFNRyxXQUFBO0FBeUNIO0FBL0NBO0VBV0csWUFBQTtBQXVDSDtBQWxEQTs7RUFnQkcseUJBQUE7QUFzQ0g7QUFDQTttQkFDbUI7QUE5QmpCO0VBQ0MsWUFBQTtBQWdDSDtBQWpDRTtFQUdFLG1CQUFBO0FBaUNKO0FBcENFO0VBS0csaUNBQUE7QUFrQ0w7QUF2Q0U7RUFPSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLHNDQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLHVDQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VDblNMLDBCQUFBO0FEd1VEO0FBeERFO0VBc0JLLGVBQUE7QUFxQ1A7QUEzREU7RUEyQkssYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VDMVNILGtDQUFBO0VBQ0EsMEJBQUE7QUQ4VUo7QUFuQ087RUFDQyxtQkFBQTtBQXFDUjtBQW5DTztFQUNDLGtEQUFBO0FBcUNSO0FBekVFO0VBdUNNLGVBQUE7QUFxQ1I7QUFwQ1E7RUFDQyxVQUFBO0FBc0NUO0FBdkNRO0VBSUcsY0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQXNDWDtBQTVDUTtFQVNFLGNBQUE7QUFzQ1Y7QUEvQ1E7RUFZRSxrQkFBQTtBQXNDVjtBQWxEUTtFQWNHLGVBQUE7RUFDQSxrQkFBQTtBQXVDWDtBQXREUTtFQWlCSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBd0NaO0FBbkNRO0VBQ0MsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFxQ1Q7QUFwQ1M7RUFDQyxnQ0FBQTtFQUNBLFlBQUE7QUFzQ1Y7QUFwQ1M7RUFDQyxnQ0FBQTtBQXNDVjtBQW5DUTtFQUNDLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFxQ1Q7QUF4Q1E7RUFLRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQXNDVjtBQW5DUTtFQUNDLFlBQUE7RUFDQSxVQUFBO0FBcUNUO0FBdkNRO0VBSUUsWUFBQTtFQUNBLGNBQUE7QUFzQ1Y7QUFyQ1U7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VDcFhWLGtCQUFBO0FENlpEO0FBNUNVO0VDalhULGtCQUFBO0FEaWFEO0FBdkNVO0VBQ0MsY0FBQTtFQUNBLHFCQUFBO0FBeUNYO0FBdkNVO0VBQ0MsY0FBQTtBQXlDWDtBQS9CRTtFQUNDLGFBQUE7QUFpQ0g7QUFsQ0U7RUFJRyxpQ0FBQTtFQzdZSixrQkFBQTtFRCtZSSxtQkFBQTtBQWtDTDtBQXhDRTtFQVFJLHVDQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VDdlpMLDBCQUFBO0FENGJEO0FBbkRFO0VBbUJLLGNBQUE7RUFDQSxZQUFBO0FBbUNQO0FBbENPO0VBQ0MsbUJBQUE7QUFvQ1I7QUFsQ087RUFDQyxtQkFBQTtBQW9DUjtBQTdERTtFQTRCTSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBb0NSO0FBbEVFO0VBaUNNLGNBQUE7QUFvQ1I7QUFyRUU7RUFtQ08sY0FBQTtFQUNBLHFCQUFBO0FBcUNUO0FBbENPO0VBQ0MsK0NBQUE7QUFvQ1I7QUE1QkM7RUFHRyxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUMvY0ksaURBQUE7QUQ2ZVI7QUE1Qkk7RUFDQyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBOEJMO0FBNUJJO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUMxYkQsdUJBQUE7QUQ2ZEo7QUF6REM7RUEwQkksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFrQ0w7QUFqQ0s7RUFDQyxrQkFBQTtFQUNBLFNBQUE7QUFtQ047QUFyQ0s7RUFJRSxlQUFBO0VBQ0EsY0FBQTtBQW9DUDtBQWpDSztFQUNDLFVBQUE7QUFtQ047QUFwQ0s7RUFJRyxvQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFtQ1I7QUFsQ1E7RUFDQyxjQUFBO0FBb0NUO0FBN0NLO0VBY0UsZUFBQTtFQUNBLGNBQUE7QUFrQ1A7QUFqREs7RUFpQkcsY0FBQTtFQUNBLHFCQUFBO0FBbUNSO0FBL0JLOztFQUNDLFVBQUE7QUFrQ047QUFuQ0s7O0VBR0UsY0FBQTtFQUNBLGNBQUE7QUFvQ1A7QUFqQ0s7RUFDQyxVQUFBO0FBbUNOO0FBcENLO0VBR0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUNqZ0JOLGtCQUFBO0FEdWlCRDtBQTVDSztFQzNmSixrQkFBQTtBRDJpQkQ7QUFoREs7RUFhRSxxQkFBQTtFQzNmTixxQ0FBQTtBRHNpQkQ7QUF6Q087RUFDQyxZQUFBO0FBMkNSO0FBM0RLO0VBb0JFLGVBQUE7QUEwQ1A7QUF4Q1E7RUFFRSxxQkFBQTtFQUNBLGNBQUE7QUF5Q1Y7QUF4Q1U7RUFDQyxjQUFBO0FBMENYO0FBdENRO0VBQ0MsY0FBQTtBQXdDVDtBQTFJQztFQXdHSyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQ3ZpQkwsbUJBQUE7RUFrQ0Esc0ZBQUE7QUQraUJEO0FBeEpDO0VBc0hFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBcUNIO0FBN0pDO0VBMEhHLHlCQUFBO0VBQ0EsY0FBQTtBQXNDSjtBQWpLQztFQThIRyxjQUFBO0FBc0NKO0FBcEtDO0VBaUlHLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQ2xrQkgsa0JBQUE7RUFJRyxrQ0FBQTtFQUNBLDBCQUFBO0VBUUgsd0NBQUE7QURvbUJEO0FBeExDO0VBOElJLGNBQUE7RUFDQSxpREFBQTtBQTZDTDtBQTVMQztFQWtKSSxrQkFBQTtBQTZDTDtBQTNDSTtFQUNDLGtDQUFBO0FBNkNMO0FBeENDO0VBQ0MsY0FBQTtBQTBDRjtBQTNDQztFQUtHLHFCQUFBO0FBeUNKO0FBOUNDO0VBUUksVUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUF5Q0w7QUF4Q0s7O0VBQ0Msa0JBQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQzVsQkwsd0NBQUE7QUQ0b0JEO0FBN0NLO0VBQ0MsTUFBQTtFQ3hsQkYsdUJBQUE7QUQ0b0JKO0FBakRLO0VBQ0MsU0FBQTtFQzVsQkYsd0JBQUE7QURvcEJKO0FBcERNOztFQUNDLG9DQUFBO0FBdURQO0FBbkRJO0VBQ0MsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQXFETDtBQWhEQztFQUVFLFVBQUE7RUFDQSxjQUFBO0FBaURIO0FBcERDO0VBS0csY0FBQTtBQWtESjtBQXZEQztFQVFHLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQWtESjtBQTVEQztFQWFHLGFBQUE7RUFDQSxlQUFBO0FBa0RKO0FBakRJO0VBQ0MsYUFBQTtBQW1ETDtBQW5FQztFQW9CRyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQWtESjtBQXhFQztFQXlCRyw4QkFBQTtBQWtESjtBQWhESztFQUNDLFVBQUE7QUFrRE47QUFoREs7RUFDQyxVQUFBO0FBa0ROO0FBQ0E7bUJBQ21CO0FBMUNuQjtFQUNDLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQTRDRDtBQTFDRTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUE0Q0g7QUEvQ0U7RUFLRSxhQUFBO0FBNkNKO0FBbERFO0VBUUUsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUM5dEJBLHlCQUFBO0VBR0Esb0ZBQUE7RUFDQSxrSEFBQTtBRDR3Qko7QUFwRUU7RUFxQkcsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQWtETDtBQTlDRTtFQUNDLHVDQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQWdESDtBQXZERTtFQVNFLGtCQUFBO0FBaURKO0FBMURFO0VBV0csY0FBQTtBQWtETDtBQWpESztFQUNDLGtCQUFBO0FBbUROO0FBcERLO0VBR0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUNsdUJILGtDQUFBO0VBQ0EsMEJBQUE7RUFoQkksNkNBQUE7QUR5eUJSO0FBcEVLO0VBZ0JHLGVBQUE7RUFDQSx5QkFBQTtBQXVEUjtBQXhFSztFQXFCRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBc0RQO0FBbkRLO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUFxRE47QUExREs7RUFTRSxxQkFBQTtFQUNBLGVBQUE7QUFvRFA7QUFqREs7RUFDQyx5QkFBQTtFQUNBLG1CQUFBO0FBbUROO0FBOUNFO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBZ0RIO0FBcERFO0VBTUUsWUFBQTtBQWlESjtBQXZERTtFQVFHLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQzl4QkcsOEJBQUE7RUFXUCxrQkFBQTtBRHkwQkQ7QUEvQ0M7RUFDQyxrQkFBQTtFQUNBLHdDQUFBO0FBaURGIiwiZmlsZSI6ImZvcnVtLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRm9ydW0gdmFyIGFuZCBmdW5jdGlvbiBcbi0tLS0tLS0tLS0tLS0tLS0tLSovXG5AaW1wb3J0IChyZWZlcmVuY2UpIFwiLi4vLi4vLi4vdmFyaWFibGUubGVzc1wiO1xuQGFzc2V0c0Zyb21IZXJlOiBcIi4uLy4uLy5Ae3BhdGhBc3NldHN9XCI7XG5cblxuLyogRm9ydW0gYW5pbWF0aW9uIFxuLS0tLS0tLS0tLS0tLS0tLS0tKi9cbkBrZXlmcmFtZXMgc2hvd1Jlc3BvbnNlIHtcbiAgICAwJSB7XG4gICAgICAgIGxlZnQ6IC05OTk5OXB4O1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAudHJhbnNmb3JtKHNjYWxlKDAuNSkpO1xuICAgIH1cbiAgICA2OSUge1xuICAgICAgICAudHJhbnNmb3JtKHNjYWxlKDEpKTtcbiAgICB9XG4gICAgNzAlLCA4MCUsIDkwJSwgMTAwJSB7XG4gICAgICAgIGxlZnQ6IDIlO1xuICAgIH1cbiAgICA3NSUsIDg1JSwgOTUlIHtcbiAgICAgICAgbGVmdDogMyU7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNob3dEcm9wIHtcbiAgICAwJSB7XG4gICAgICAgIC50cmFuc2Zvcm0oc2NhbGUoMC41KSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAudHJhbnNmb3JtKHNjYWxlKDEpKTtcbiAgICB9XG59XG5cbi8qIEZvcnVtIGdsb2JhbCBcbi0tLS0tLS0tLS0tLS0tLS0tLSovXG4uZm9ydW1fd3JhcHBlciwgLnRvcGljX3dyYXBwZXIsIC52aWV3Zm9ydW1fd3JhcHBlciwgLnBvc3Rfd3JhcHBlciB7XG5cdGJhY2tncm91bmQ6IHVybCgnQHthc3NldHNGcm9tSGVyZX0vaW1nL2JsYWNrL3NlY3Rpb25zL2ZvcnVtL2JnXy5wbmcnKTtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcblx0YmFja2dyb3VuZC1zaXplOiAxMzAwcHg7XG5cdHBhZGRpbmctdG9wOiAxMzBweDtcblx0c2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbi5wb3N0X3dyYXBwZXIge1xuXHQmLnRvcGljUG9zdCB7XG5cdFx0cGFkZGluZy10b3A6IDA7XG5cdFx0YmFja2dyb3VuZDogbm9uZTtcblx0XHRzZWN0aW9uIHtcblx0XHRcdGZvcm0ge1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0LmZvcm0tZ3JvdXAge1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDBweDtcblx0XHRcdFx0XHQmLmJ1dHRvbiB7XG5cdFx0XHRcdFx0XHR3aWR0aDogOTAlO1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi5mb3J1bV93cmFwcGVyIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMS4yZnI7XG5cdGdyaWQtZ2FwOiA0MHB4O1xufVxuXG4ubG9hZGluZyB7XG5cdGZvbnQtc2l6ZTogODBweDtcblx0b3BhY2l0eTogMC41O1xuXHRwYWRkaW5nOiAxNSUgMDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udG9vbGJhciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdC5iYWNrYmx1cig0cHgpO1xuXHRvbCB7XG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdG1hcmdpbjogNXB4O1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdHBhZGRpbmc6IDAgMjBweDtcblx0XHQmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcblx0XHRcdGJvcmRlci1sZWZ0OiAxcHggc29saWQgZmFkZShAc2Vjb25kQ29sb3IsIDEwKTtcblx0XHR9XG5cdFx0aDQge1xuXHRcdFx0bWFyZ2luLWxlZnQ6IDVweDtcblx0XHRcdGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuXHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdGZvbnQtc2l6ZTogMTVweDtcblx0XHR9XG5cdFx0dWwuc2VjdGlvbkVkaXRvciB7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdGJhY2tncm91bmQ6IGxpZ2h0ZW4oQG1haW5Db2xvciwgMzApO1xuXHRcdFx0LmJvcmRlcnJhZGl1cygzMHB4KTtcblx0XHRcdG1hcmdpbjogNXB4O1xuXHRcdFx0bGkuYmJjb2RlIHtcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdGNvbG9yOiBsaWdodGVuKEBtYWluQ29sb3IsIDEwKTtcblx0XHRcdFx0cGFkZGluZzogNXB4IDEwcHg7XG5cdFx0XHRcdC50cmFuc2l0aW9uKGJhY2tncm91bmQsIDMwMG1zLCBlYXNlLWluLW91dCk7XG5cdFx0XHRcdCY6Zmlyc3QtY2hpbGQge1xuXHRcdFx0XHRcdC5ib3JkZXJyYWRpdXMoMzBweCAwIDAgMzBweCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0JjpsYXN0LWNoaWxkIHtcblx0XHRcdFx0XHQuYm9yZGVycmFkaXVzKDAgMzBweCAzMHB4IDApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IEBidXR0b25Db2xvclByaW07XG5cdFx0XHRcdH1cblx0XHRcdFx0LnNob3dMaXN0IHtcblx0XHRcdFx0XHRAc2hvd0xpc3RDb2xvcjogbGlnaHRlbihAbWFpbkNvbG9yLCA1NSk7XG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdHRvcDogMzBweDtcblx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdHotaW5kZXg6IDQ7XG5cdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdFx0XHR3aWR0aDogMzAwcHg7XG5cdFx0XHRcdFx0aGVpZ2h0OiAyMDBweDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBAc2hvd0xpc3RDb2xvcjtcblx0XHRcdFx0XHRwYWRkaW5nOiA1cHg7XG5cdFx0XHRcdFx0LnRyYW5zZm9ybShzY2FsZSgxKSk7XG5cdFx0XHRcdFx0LmJvcmRlcnJhZGl1cyg0cHgpO1xuXHRcdFx0XHRcdC5ib3gtc2hhZG93KDAgMCAxNXB4IDBweCByZ2JhKDAsMCwwLDAuMyksIHRydWUpO1xuXHRcdFx0XHRcdCYuZm9udExpc3Qge1xuXHRcdFx0XHRcdFx0dWwge1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdG92ZXJmbG93LXg6IGF1dG87XG5cdFx0XHRcdFx0XHRcdGxpIHtcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDVweCAwO1xuXHRcdFx0XHRcdFx0XHRcdCY6bm90KDpsYXN0LWNoaWxkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRlbihAbWFpbkNvbG9yLCA0NSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGIge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDVweDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0c3BhbiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDExcHg7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCYuZm9udFNpemUge1xuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRcdHdpZHRoOiAxNTBweDtcblx0XHRcdFx0XHRcdGhlaWdodDogNTBweDtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCYuZm9udENvbG9yLCAmLmZvbnRIaWdobGlnaHQge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiA2MHB4O1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMDtcblx0XHRcdFx0XHRcdGlucHV0W3R5cGU9XCJjb2xvclwiXSB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCYubGlzdCwgJi50YWJsZSB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0XHRcdFx0XHRcdC5iYWNrYmx1cig1cHgpO1xuXHRcdFx0XHRcdFx0LmJvcmRlcnJhZGl1cygwKTtcblx0XHRcdFx0XHRcdHVsIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogOTAlO1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDcwJTtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBAc2hvd0xpc3RDb2xvcjtcblx0XHRcdFx0XHRcdFx0LmJvcmRlcnJhZGl1cyg0cHgpO1xuXHRcdFx0XHRcdFx0XHQuYm94LXNoYWRvdygwIDAgMTVweCAwcHggcmdiYSgwLDAsMCwwLjMpLCB0cnVlKTtcblx0XHRcdFx0XHRcdFx0Lmdyb3VwZUxpc3Qge1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiA3MCU7XG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA5NSU7XG5cdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogMCAxMHB4O1xuXHRcdFx0XHRcdFx0XHRcdG92ZXJmbG93LXg6IGF1dG87XG5cdFx0XHRcdFx0XHRcdFx0bGkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0XHRcdFx0Jjpub3QoOmxhc3QtY2hpbGQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogNXB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0LnJlbW92ZUVsZW1lbnQge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRvcDogNXB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyaWdodDogMTBweDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ei1pbmRleDogMztcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6IEBidXR0b25Db2xvclByaW07XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC5ncm91cGVMaXN0VHlwZSB7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDE1JTtcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDEwcHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJ1dHRvbiB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDBweDtcblx0XHRcdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQmLnRhYmxlIHtcblx0XHRcdFx0XHRcdGhlaWdodDogNDA1cHg7XG5cdFx0XHRcdFx0XHR1bCB7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogODUlO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAxNXB4O1xuXHRcdFx0XHRcdFx0XHQudGFibGVBY3Rpb24ge1xuXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0dGFibGUuYmJjb2RlIHtcblx0XHRcdFx0XHRcdFx0XHQuYWN0aW9uRWxlbWVudCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHRcdFx0XHR0b3A6IDRweDtcblx0XHRcdFx0XHRcdFx0XHRcdGxlZnQ6IDVweDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ji5ib3JkZXIge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDQwMHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDBweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ji5ib3gge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDQzMHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiA2MHB4O1xuXHRcdFx0XHRcdFx0Lmdyb3VwZUl0ZW0ge1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdFx0XHRcdFx0XHRcdCY6bGFzdC1jaGlsZCB7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHNwYW4ub3Ige1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMTBweDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiA0MHB4O1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogbGlnaHRlbihAbWFpbkNvbG9yLCAyMCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRidXR0b24ge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMzAlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuYWN0aW9uRWxlbWVudCB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdGN1c29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiBAYnV0dG9uQ29sb3JQcmltO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRidXR0b24ge1xuXHRcdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdFx0Ji5zbWFsbCB7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpbnB1dFt0eXBlPSdudW1iZXInXSB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0XHRcdFx0XHRcdHdpZHRoOiA1MCU7XG5cdFx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDI1cHg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDEwcHg7XG5cdFx0XHRcdFx0XHQmOmZvY3VzIHtcblx0XHRcdFx0XHRcdFx0b3V0bGluZTogbm9uZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ji5zaG93IHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0YW5pbWF0aW9uOiAwLjVzIHNob3dEcm9wIGVhc2UtaW4tb3V0O1xuXHRcdFx0XHRcdFx0Ji5mb250U2l6ZSwgJi5saXN0LCAmLmJvcmRlciwgJi50YWJsZSwgJi5ib3gge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdCAgICAgICAgICAgICY6OmFmdGVye1xuXHRcdCAgICAgICAgICAgICAgICB6LWluZGV4OiAyMDtcblx0XHQgICAgICAgICAgICAgICAgY29udGVudDogJyAnO1xuXHRcdCAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0ICAgICAgICAgICAgICAgIHRvcDogLTVweDtcblx0XHQgICAgICAgICAgICAgICAgbGVmdDogMTJweDtcblx0XHQgICAgICAgICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgQHNob3dMaXN0Q29sb3I7XG5cdFx0ICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogQHNob3dMaXN0Q29sb3IgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgQHNob3dMaXN0Q29sb3I7XG5cdFx0ICAgICAgICAgICAgICAgIC50cmFuc2Zvcm0ocm90YXRlKDQ1ZGVnKSk7XG5cdFx0ICAgICAgICAgICAgfVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG50YWJsZS5iYmNvZGUge1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHR0aGVhZCB7XG5cdFx0YmFja2dyb3VuZDogbGlnaHRlbihAbWFpbkNvbG9yLCAzNSk7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdHRkIHtcblx0XHRcdGNvbG9yOiBAc2Vjb25kQ29sb3I7XG5cdFx0fVxuXHR9XG5cdHRib2R5IHtcblx0XHR0ZCB7XG5cdFx0XHRwYWRkaW5nOiA1cHg7XG5cdFx0fVxuXHR9XG5cdHRoZWFkLCB0Ym9keSB7XG5cdFx0dGQge1xuXHRcdFx0Ym9yZGVyOiAxcHggc29saWQgbGlnaHRlbihAbWFpbkNvbG9yLCAyMCk7XG5cdFx0fVxuXHR9XG59XG5cblxuLyogRm9ydW0gc2VjdGlvbiBcbi0tLS0tLS0tLS0tLS0tLS0tLSovXG5zZWN0aW9uIHtcblx0Ji5mb3J1bSB7XG5cdFx0Ji5tYWluIHtcblx0XHRcdG1hcmdpbjogMjBweDtcblx0XHRcdG9sLmNhdHMge1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHRcdFx0XHRsaS5mb3J1bXNMaXN0IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBmYWRlKGxpZ2h0ZW4oQG1haW5Db2xvciwgMjApLCAyMCk7XG5cdFx0XHRcdFx0aDIge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnQHthc3NldHNGcm9tSGVyZX0vaW1nL2Rlc2lnbi9mb3J1bV9jYXQucG5nJyk7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBmYWRlKGxpZ2h0ZW4oQG1haW5Db2xvciwgMTApLCAyMCk7XG5cdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCBmYWRlKGxpZ2h0ZW4oQG1haW5Db2xvciwgNjApLCA1KTtcblx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdFx0XHRcdFx0Y29sb3I6IGxpZ2h0ZW4oQG1haW5Db2xvciwgNjApO1xuXHRcdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDhweDtcblx0XHRcdFx0XHRcdC5ib3JkZXJyYWRpdXMoNHB4IDRweCAwIDApO1xuXHRcdFx0XHRcdFx0aSB7XG5cdFx0XHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0b2wuY2F0c2ZvcnVtIHtcblx0XHRcdFx0XHRcdGxpLmZvcnVtc0Rpc3Age1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogYXV0bztcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cdFx0XHRcdFx0XHRcdC5iYWNrYmx1cig0cHgpO1xuXHRcdFx0XHRcdFx0XHQmOm50aC1jaGlsZChvZGQpIHtcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBsaWdodGVuKEBtYWluQ29sb3IsIDEwKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQmOm5vdCgmOmxhc3QtY2hpbGQpIHtcblx0XHRcdFx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgZmFkZShsaWdodGVuKEBtYWluQ29sb3IsIDYwKSwgNSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0LmZvcnVtcyB7XG5cdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogMTBweCAwO1xuXHRcdFx0XHRcdFx0XHRcdCYubWFpbiB7XG5cdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMjUlO1xuXHRcdFx0XHRcdFx0XHRcdFx0aDQge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRhIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogbGlnaHRlbihAbWFpbkNvbG9yLCA2MCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdHAge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogZGFya2VuKEBzZWNvbmRDb2xvciwgMjApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0dWwuc3ViZm9ydW1zIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogNXB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRsaSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMTBweDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiBsaWdodGVuKEBtYWluQ29sb3IsIDQwKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0Ji5pY29uIHtcblx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMHB4IDIwcHg7XG5cdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogODBweDtcblx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogODBweDtcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogNDBweDtcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAyMHB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0Ji5vbGQge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ0B7YXNzZXRzRnJvbUhlcmV9L2ltZy9kZXNpZ24vZm9ydW1faWNvbi9vbGQucG5nJyk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDAuNDtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdCYubmV3IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCdAe2Fzc2V0c0Zyb21IZXJlfS9pbWcvZGVzaWduL2ZvcnVtX2ljb24vbmV3LnBuZycpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQmLnN0YXRzIHtcblx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgNDBweDtcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IHJpZ2h0O1xuXHRcdFx0XHRcdFx0XHRcdFx0YiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiBkYXJrZW4oQHNlY29uZENvbG9yLCAyMCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdCYubGFzdCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRmbG9hdDogcmlnaHQ7XG5cdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMzUlO1xuXHRcdFx0XHRcdFx0XHRcdFx0LmF1dGhvciB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAzMDBweDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCYuYXZhdGFyIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmbG9hdDogbGVmdDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDYwcHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LmJvcmRlcnJhZGl1cyg1MCUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN2ZyB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuYm9yZGVycmFkaXVzKDUwJSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCYubGFzdFN1YiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6IGxpZ2h0ZW4oQG1haW5Db2xvciwgNDApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQmLnRpbWUge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiBkYXJrZW4oQHNlY29uZENvbG9yLCAyMCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Ji5zaWRlYmFyIHtcblx0XHRcdHBhZGRpbmc6IDIwcHg7XG5cdFx0XHR1bCB7XG5cdFx0XHRcdGxpLnNpZGViYXJMaXN0IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBmYWRlKGxpZ2h0ZW4oQG1haW5Db2xvciwgMjApLCAyMCk7XG5cdFx0XHRcdFx0LmJvcmRlcnJhZGl1cyg0cHgpO1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdFx0XHRcdFx0aDIge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogZmFkZShsaWdodGVuKEBtYWluQ29sb3IsIDEwKSwgMjApO1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgZmFkZShsaWdodGVuKEBtYWluQ29sb3IsIDYwKSwgNSk7XG5cdFx0XHRcdFx0XHRmb250LWZhbWlseTogUG9wcGlucztcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdFx0XHRcdGNvbG9yOiBsaWdodGVuKEBtYWluQ29sb3IsIDYwKTtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDhweDtcblx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0XHQuYm9yZGVycmFkaXVzKDRweCA0cHggMCAwKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0b2wge1xuXHRcdFx0XHRcdFx0bGkge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogNnB4O1xuXHRcdFx0XHRcdFx0XHQmOm50aC1jaGlsZChvZGQpIHtcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBsaWdodGVuKEBtYWluQ29sb3IsIDEwKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQmOm50aC1jaGlsZChldmVuKSB7XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogbGlnaHRlbihAbWFpbkNvbG9yLCA1KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRhLmxhc3RQb3N0cyB7XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6IGxpZ2h0ZW4oQG1haW5Db2xvciwgNDApO1xuXHRcdFx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0c3Bhbi5MYXN0YXV0aCB7XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6IGRhcmtlbihAc2Vjb25kQ29sb3IsIDIwKTtcblx0XHRcdFx0XHRcdFx0XHRhIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiBsaWdodGVuKEBtYWluQ29sb3IsIDQwKTtcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Jjpub3QoJjpsYXN0LWNoaWxkKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGZhZGUobGlnaHRlbihAbWFpbkNvbG9yLCAyMyksIDMwKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQmLnZpZXdGb3J1bSB7XG5cdFx0Lmxpc3RfdG9waWMge1xuXHRcdFx0b2wuZ2V0TGlzdFRvcGljIHtcblx0XHRcdFx0YmFja2dyb3VuZDogbGlnaHRlbihAbWFpbkNvbG9yLCAyMCk7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0ZW4oQG1haW5Db2xvciwgMTUpO1xuXHRcdFx0XHQuYm94LXNoYWRvdygwIDAgMTVweCAwcHggcmdiYSgwLDAsMCwwLjEpLCB0cnVlKTtcblx0XHRcdFx0JjphZnRlciB7XG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdGNvbnRlbnQ6ICcgJztcblx0XHRcdFx0XHR3aWR0aDogMzAwcHg7XG5cdFx0XHRcdFx0aGVpZ2h0OiA1MHB4O1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IGxpZ2h0ZW4oQG1haW5Db2xvciwgMzApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0bGVmdDogMjgwcHg7XG5cdFx0XHRcdFx0Y29udGVudDogJyAnO1xuXHRcdFx0XHRcdHdpZHRoOiA1MHB4O1xuXHRcdFx0XHRcdGhlaWdodDogNTBweDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBsaWdodGVuKEBtYWluQ29sb3IsIDMwKTtcblx0XHRcdFx0XHQudHJhbnNmb3JtKHNrZXdYKDE1ZGVnKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGkuZ2V0Um93VG9waWMge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHR6LWluZGV4OiAyO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDVweCAxMHB4O1xuXHRcdFx0XHRcdCYuaWNvbiB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHR3aWR0aDogNSU7XG5cdFx0XHRcdFx0XHRpIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAzNXB4O1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogbGlnaHRlbihAbWFpbkNvbG9yLCA1MCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCYudGl0bGUge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDUwJTtcblx0XHRcdFx0XHRcdGgzIHtcblx0XHRcdFx0XHRcdFx0YSB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFBvcHBpbnM7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdFx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogbGlnaHRlbihAbWFpbkNvbG9yLCA2MCk7XG5cdFx0XHRcdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogQGJ1dHRvbkNvbG9yUHJpbTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHNwYW4uYXV0aG9yIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogbGlnaHRlbihAbWFpbkNvbG9yLCAxMCk7XG5cdFx0XHRcdFx0XHRcdGEge1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiBsaWdodGVuKEBtYWluQ29sb3IsIDYwKTtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ji5udW1Qb3N0cywgJi5udW1WaWV3cyB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMjAlO1xuXHRcdFx0XHRcdFx0YiB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogbGlnaHRlbihAbWFpbkNvbG9yLCA1MCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCYubGFzdCB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMjUlO1xuXHRcdFx0XHRcdFx0LmF2YXRhciB7XG5cdFx0XHRcdFx0XHRcdGZsb2F0OiBsZWZ0O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA1MHB4O1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDUwcHg7XG5cdFx0XHRcdFx0XHRcdC5ib3JkZXJyYWRpdXMoNTAlKTtcblx0XHRcdFx0XHRcdFx0c3ZnIHtcblx0XHRcdFx0XHRcdFx0XHQuYm9yZGVycmFkaXVzKDUwJSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGEge1xuXHRcdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdFx0XHRcdC50cmFuc2l0aW9uKG9wYWNpdHksIDMwMG1zLCBlYXNlLWluLW91dCk7XG5cdFx0XHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDAuNTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dWwuZ2V0TGFzdFBvc3Qge1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiA1cHg7XG5cdFx0XHRcdFx0XHRcdGxpLmxhc3RQb3N0IHtcblx0XHRcdFx0XHRcdFx0XHQmLnVzZXJuYW1lIHtcblx0XHRcdFx0XHRcdFx0XHRcdGEge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiBsaWdodGVuKEBtYWluQ29sb3IsIDYwKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6IGxpZ2h0ZW4oQG1haW5Db2xvciwgNSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0Ji50aW1lIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiBsaWdodGVuKEBtYWluQ29sb3IsIDYwKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmxvY2tlZCB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHR0b3A6IDMwcHg7XG5cdFx0XHRcdFx0XHRyaWdodDogMTBweDtcblx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMTBweDtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDVweCAxMHB4O1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogQGJ1dHRvbkNvbG9yUHJpbTtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTFweDtcblx0XHRcdFx0XHRcdC5ib3JkZXJyYWRpdXMoMzBweCk7XG5cdFx0XHRcdFx0XHQuc2hhZG93LWdsb3NzKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC5oZWFkX2ZvcnVtIHtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdHdpZHRoOiA5NSU7XG5cdFx0XHRtYXJnaW46IDIwcHggYXV0bztcblx0XHRcdGgxIHtcblx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0Y29sb3I6IGxpZ2h0ZW4oQG1haW5Db2xvciwgMzApO1xuXHRcdFx0fVxuXHRcdFx0cCB7XG5cdFx0XHRcdGNvbG9yOiBsaWdodGVuKEBtYWluQ29sb3IsIDYwKTtcblx0XHRcdH1cblx0XHRcdGEuY3JlYXRlVG9waWMge1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdHJpZ2h0OiAtMTBweDtcblx0XHRcdFx0dG9wOiAxMHB4O1xuXHRcdFx0XHRwYWRkaW5nOiAxMHB4IDMwcHg7XG5cdFx0XHRcdGJhY2tncm91bmQ6IGZhZGUoQGJ1dHRvbkNvbG9yUHJpbSwgNTApO1xuXHRcdFx0XHRjb2xvcjogQHNlY29uZENvbG9yO1xuXHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuXHRcdFx0XHQuYm9yZGVycmFkaXVzKDRweCk7XG5cdFx0XHRcdC5iYWNrYmx1cig0cHgpO1xuXHRcdFx0XHQudHJhbnNpdGlvbihiYWNrZ3JvdW5kLCAzMDBtcywgZWFzZS1pbi1vdXQpO1xuXHRcdFx0XHRiIHtcblx0XHRcdFx0XHRjb2xvcjogZGFya2VuKEBzZWNvbmRDb2xvciwgMTUpO1xuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBmYWRlKEBzZWNvbmRDb2xvciwgMjApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGkge1xuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMTBweDtcblx0XHRcdFx0fVxuXHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBmYWRlKEBidXR0b25Db2xvclByaW0sIDgwKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQmLmJyZWFkLWNydW1icyB7XG5cdFx0bWFyZ2luOiAyMHB4IDA7XG5cdFx0Ly8uZ3JhZGllbnRMaW5lYXIoZmFkZShAbWFpbkNvbG9yLCAwKSwgNjBkZWcsIGZhZGUobGlnaHRlbihAbWFpbkNvbG9yLCA1MCksIDUwKSAyMCUsIGZhZGUobGlnaHRlbihAbWFpbkNvbG9yLCAzMCksIDMwKSAxMDAlKTtcblx0XHRvbCB7XG5cdFx0XHRsaSB7XG5cdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0YSB7XG5cdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdHotaW5kZXg6IDI7XG5cdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDVweCAzMHB4O1xuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdFx0Y29sb3I6IGxpZ2h0ZW4oQG1haW5Db2xvciwgNjApO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTlweDtcblx0XHRcdFx0XHQmOmJlZm9yZSwgJjphZnRlciB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRcdGJvcmRlcjogMHB4IHNvbGlkIGxpZ2h0ZW4oQG1haW5Db2xvciwgMjUpO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXdpZHRoOiAwIDFweCAwIDA7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDUwJTtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0Y29udGVudDogJyAnO1xuXHRcdFx0XHRcdFx0LnRyYW5zaXRpb24oYmFja2dyb3VuZCwgMzAwbXMsIGVhc2UtaW4tb3V0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0JjpiZWZvcmUge1xuXHRcdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdFx0LnRyYW5zZm9ybShza2V3WCgzMGRlZykpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0XHRcdGJvdHRvbTogMDtcblx0XHRcdFx0XHRcdC50cmFuc2Zvcm0oc2tld1goLTMwZGVnKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0JjpiZWZvcmUsICY6YWZ0ZXIge1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBmYWRlKGxpZ2h0ZW4oQG1haW5Db2xvciwgNjApLCA1MCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdCY6bGFzdC1jaGlsZCB7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDEwcHg7XG5cdFx0XHRcdFx0Y29sb3I6IGxpZ2h0ZW4oQG1haW5Db2xvciwgMzApO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTlweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQmLnBvc3Qge1xuXHRcdGZvcm0ge1xuXHRcdFx0d2lkdGg6IDkwJTtcblx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0bGFiZWwge1xuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdH1cblx0XHRcdGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcblx0XHRcdFx0cGFkZGluZzogMCA1cHg7XG5cdFx0XHRcdGhlaWdodDogMzBweDtcblx0XHRcdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdFx0fVxuXHRcdFx0dGV4dGFyZWEge1xuXHRcdFx0XHRoZWlnaHQ6IDMwMHB4O1xuXHRcdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRcdCY6Zm9jdXMge1xuXHRcdFx0XHRcdG91dGxpbmU6IG5vbmU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGJ1dHRvbiB7XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0dG9wOiAtNnB4O1xuXHRcdFx0XHRwYWRkaW5nOiA3cHggMTBweDtcblx0XHRcdH1cblx0XHRcdC5kaXNwbGF5TXVsdGlwbGUge1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdC5pdGVtTXVsdGlwbGUge1xuXHRcdFx0XHRcdCY6Zmlyc3QtY2hpbGQge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDgwJTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0JjpsYXN0LWNoaWxkIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAyMCU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi8qIFRvcGljIHNlY3Rpb24gXG4tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLnRvcGljIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcblx0Z3JpZC1nYXA6IDBweDtcblx0bWFyZ2luOiAwIDEwcHg7XG5cdGJhY2tncm91bmQ6IGxpZ2h0ZW4oQG1haW5Db2xvciwgMTApO1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRlbihAbWFpbkNvbG9yLCA0MCk7XG5cdHNlY3Rpb24ge1xuXHRcdCYuY29udGVudCB7XG5cdFx0XHRncmlkLWNvbHVtbjogMiBlKFwiL1wiKSA2O1xuXHRcdFx0Z3JpZC1yb3c6IDE7XG5cdFx0XHRjb2xvcjogbGlnaHRlbihAbWFpbkNvbG9yLCA2MCk7XG5cdFx0XHQubWVzc2FnZUluc2lkZSB7XG5cdFx0XHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0XHR9XG5cdFx0XHQuaGVhZGVyLXRvcGljIHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7XG5cdFx0XHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdFx0XHRcdHBhZGRpbmc6IDVweDtcblx0XHRcdFx0aGVpZ2h0OiAzNXB4O1xuXHRcdFx0XHRjb2xvcjogQG1haW5Db2xvcjtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogNXB4O1xuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuXHRcdFx0XHQuZ3JhZGllbnRMaW5lYXJJbWcobGlnaHRlbihAbWFpbkNvbG9yLCAzMCksIDE4MGRlZywgbGlnaHRlbihAbWFpbkNvbG9yLCA2MCksIGxpZ2h0ZW4oQG1haW5Db2xvciwgNTUpLCAnQHtwYXRoQXNzZXRzfS9pbWcvZGVzaWduL2hlYWRlci10b3BpYy5wbmcnKTtcblx0XHRcdFx0YS5kcm9wVG9waWMge1xuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMTBweDtcblx0XHRcdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRcdFx0Y29sb3I6IEBtYWluQ29sb3I7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Ji51c2VycyB7XG5cdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ0B7YXNzZXRzRnJvbUhlcmV9L2ltZy9kZXNpZ24vdG9waWMtbGVmdC5wbmcnKTtcblx0XHRcdGJhY2tncm91bmQtc2l6ZTogMzAwcHg7XG5cdFx0XHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgdG9wO1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbihAbWFpbkNvbG9yLCA2MCk7XG5cdFx0XHRncmlkLWNvbHVtbjogMTtcblx0XHRcdGdyaWQtcm93OiAxO1xuXHRcdFx0dWwubGVmdFN0YXRzIHtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRsaSB7XG5cdFx0XHRcdFx0Y29sb3I6IGxpZ2h0ZW4oQG1haW5Db2xvciwgMjApO1xuXHRcdFx0XHRcdCYuYXZhdGFyLXVzZXJuYW1lIHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdHNwYW4udXNlcm5hbWUge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0XHR6LWluZGV4OiAxO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogNXB4O1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogQG1haW5Db2xvcjtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogTW9udHNlcnJhdDtcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IGZhZGUobGlnaHRlbihAbWFpbkNvbG9yLCA0MCksIDcwKTtcblx0XHRcdFx0XHRcdFx0LmJhY2tibHVyKDRweCk7XG5cdFx0XHRcdFx0XHRcdC5ib3gtc2hhZG93KDAgNXB4IDEwcHggMXB4IHJnYmEoMCwwLDAsMC4yKSk7XG5cdFx0XHRcdFx0XHRcdGIudGl0bGUge1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTBweDtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuYXZhUGljIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiA1cHg7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxNTBweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ji5taXNjTGlzdCB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMCA1cHg7XG5cdFx0XHRcdFx0XHRib3JkZXItbGVmdDogMTBweCBzb2xpZCBsaWdodGVuKEBtYWluQ29sb3IsIDMwKTtcblx0XHRcdFx0XHRcdGJvcmRlci1yaWdodDogMTBweCBzb2xpZCBsaWdodGVuKEBtYWluQ29sb3IsIDMwKTtcblx0XHRcdFx0XHRcdGIge1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c3BhbiB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQmLmN1c3RvbVRpdGxlIHtcblx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQmLnRvcGljX2Zvb3RlciB7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0YmFja2dyb3VuZDogbGlnaHRlbihAbWFpbkNvbG9yLCA2MCk7XG5cdFx0XHRncmlkLWNvbHVtbjogMSBlKFwiL1wiKSA2O1xuXHRcdFx0Z3JpZC1yb3c6IDM7XG5cdFx0XHQuc3RhdHV0IHtcblx0XHRcdFx0cGFkZGluZzogNXB4O1xuXHRcdFx0XHRzcGFuLm9ubGluZSB7XG5cdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdHdpZHRoOiAxMHB4O1xuXHRcdFx0XHRcdGhlaWdodDogMTBweDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBsaWdodGVuKEBibGlua0NvbG9yLCA3KTtcblx0XHRcdFx0XHQuYm94LXNoYWRvdygwIDAgMTVweCAwIGxpZ2h0ZW4oQGJsaW5rQ29sb3IsIDEwKSk7XG5cdFx0XHRcdFx0LmJvcmRlcnJhZGl1cyg1MCUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdCYucHVzaGVkIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0YW5pbWF0aW9uOiAwLjVzIHNob3dSZXNwb25zZSBlYXNlLWluLW91dDtcblx0fVx0XG59IiwiLyogVmFycyBcbi0tLS0tLS0tLS0tLS0tLS0tLSovXG5AcGF0aEFzc2V0czogXCIuL2Fzc2V0c1wiO1xuQGZhLWZvbnQtcGF0aDogXCJAe3BhdGhBc3NldHN9L2ljb24vd2ViZm9udHNcIjtcbkBwYXRoRm9udDogXCJAe3BhdGhBc3NldHN9L2ZvbnRzXCI7XG5cbkBtYWluQ29sb3I6ICMyMDIyMjU7XG5Ac2Vjb25kQ29sb3I6ICNmZmY7XG5cbkBidXR0b25Db2xvclByaW06ICNlZDQyNDU7XG5AbGlua0NvbG9yUHJpbTogIzM0ODRlNTtcblxuQGRvbmF0b3JDb2xvcjogIzFkOGFlMjtcblxuQG1heC13aWR0aDogMjUwMHB4O1xuQG1heC13aWR0aC1jb250ZW50OiAxNTAwcHg7XG5AYmxpbmtDb2xvcjogIzM4YTUxNztcblxuLyogRXh0ZXJuYWwgc3R5bGVzaGVldCBcbi0tLS0tLS0tLS0tLS0tLS0tLSovXG4vL0BpbXBvcnQgXCJAe3BhdGhGb250fS9pY29uL2FsbC5jc3NcIjtcblxuXG5cbi8qIENvcmUgZnVuY3Rpb25zIFxuLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5ncmFkaWVudExpbmVhcihAYmFja2dyb3VuZCwgQGRlZywgQGNvbG9yMSwgQGNvbG9yMikge1xuXHRiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZCAtbW96LWxpbmVhci1ncmFkaWVudChAZGVnLCBAY29sb3IxLCBAY29sb3IyKTtcblx0YmFja2dyb3VuZDogQGJhY2tncm91bmQgLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoQGRlZywgQGNvbG9yMSwgQGNvbG9yMik7XG5cdGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kIGxpbmVhci1ncmFkaWVudChAZGVnLCBAY29sb3IxLCBAY29sb3IyKTtcblx0ZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj1cIkBjb2xvcjFcIixlbmRDb2xvcnN0cj1cIkBjb2xvcjJcIixHcmFkaWVudFR5cGU9MSk7XG59XG5cbi5ncmFkaWVudExpbmVhckltZyhAYmFja2dyb3VuZCwgQGRlZywgQGNvbG9yMSwgQGNvbG9yMiwgQHVybCkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBiYWNrZ3JvdW5kO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChAdXJsKSwgLW1vei1saW5lYXItZ3JhZGllbnQoQGRlZywgQGNvbG9yMSwgQGNvbG9yMik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKEB1cmwpLCAtd2Via2l0LWxpbmVhci1ncmFkaWVudChAZGVnLCBAY29sb3IxLCBAY29sb3IyKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoQHVybCksIGxpbmVhci1ncmFkaWVudChAZGVnLCBAY29sb3IxLCBAY29sb3IyKTtcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPVwiQGNvbG9yMVwiLGVuZENvbG9yc3RyPVwiQGNvbG9yMlwiLEdyYWRpZW50VHlwZT0xKTtcbn1cblxuLmJveC1zaGFkb3coQHNoYWRvdywgQGluc2V0OmZhbHNlKSB7XG4gICAgJiB3aGVuIChAaW5zZXQgPSB0cnVlKSB7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzppbnNldCBAc2hhZG93O1xuICAgICAgICBib3gtc2hhZG93Omluc2V0IEBzaGFkb3c7XG4gICAgfVxuICAgICYgd2hlbiAoQGluc2V0ID0gZmFsc2UpIHtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBAc2hhZG93O1xuICAgICAgICBib3gtc2hhZG93OiBAc2hhZG93O1xuICAgIH1cbn1cblxuLmJveC1zaXppbmcoQHBhcmFtKSB7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBAcGFyYW07XG4gICAgYm94LXNpemluZzogQHBhcmFtO1xufVxuXG4uYm9yZGVycmFkaXVzKEBkZWdyZWUpIHtcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiBAZGVncmVlO1xuXHRib3JkZXItcmFkaXVzOiBAZGVncmVlO1xufVxuXG4uYmFja2JsdXIoQGJsdXIpIHtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cihAYmx1cik7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKEBibHVyKTtcbn1cblxuLnRyYW5zaXRpb24oQHR5cGUsIEB0aW1lLCBAZWFzaW5nKSB7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogQHR5cGUgQHRpbWUgQGVhc2luZztcblx0LW1vei10cmFuc2l0aW9uOiBAdHlwZSBAdGltZSBAZWFzaW5nO1xuXHQtbXMtdHJhbnNpdGlvbjogQHR5cGUgQHRpbWUgQGVhc2luZztcblx0LW8tdHJhbnNpdGlvbjogQHR5cGUgQHRpbWUgQGVhc2luZztcblx0dHJhbnNpdGlvbjogQHR5cGUgQHRpbWUgQGVhc2luZztcbn1cblxuLnRyYW5zZm9ybShAdHlwZSkge1xuICAgIC1tb3otdHJhbnNmb3JtOiBAdHlwZTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogQHR5cGU7XG4gICAgLW8tdHJhbnNmb3JtOiBAdHlwZTtcbiAgICAtbXMtdHJhbnNmb3JtOiBAdHlwZTtcbiAgICB0cmFuc2Zvcm06IEB0eXBlO1xufVxuXG4uY292ZXIge1xuXHQtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnNoYWRvdy1nbG9zcyB7XG5cdC1tb3otYm94LXNoYWRvdzogcmdiYSgwLDAsMCwwLjEpIDBweCAxcHggM3B4LCBpbnNldCByZ2JhKDI1NSwyNTUsMjU1LDAuMikgMHB4IDFweCAwcHg7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogcmdiYSgwLDAsMCwwLjEpIDBweCAxcHggM3B4LCBpbnNldCByZ2JhKDI1NSwyNTUsMjU1LDAuMikgMHB4IDFweCAwcHg7XG5cdGJveC1zaGFkb3c6IHJnYmEoMCwwLDAsMC4xKSAwcHggMXB4IDNweCwgaW5zZXQgcmdiYSgyNTUsMjU1LDI1NSwwLjIpIDBweCAxcHggMHB4O1xufVxuXG4uYnV0dG9uQ1NTIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWRlY29yYXRpb246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMjBweCAwO1xuICAgIGJhY2tncm91bmQ6IGZhZGUoQGJ1dHRvbkNvbG9yUHJpbSwgMjAlKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGVuKEBidXR0b25Db2xvclByaW0sIDEwKTtcbiAgICBjb2xvcjogQHNlY29uZENvbG9yO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAuYmFja2JsdXIoNHB4KTtcbiAgICAudHJhbnNpdGlvbihiYWNrZ3JvdW5kLCAzMDBtcywgZWFzZS1pbi1vdXQpO1xuICAgIC5ib3JkZXJyYWRpdXMoM3B4KTtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogZmFkZShAYnV0dG9uQ29sb3JQcmltLCA1MCUpO1xuICAgIH1cbn0iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ "RTsx":
/*!**********************************************!*\
  !*** ./src/app/module/forum/forum.module.ts ***!
  \**********************************************/
/*! exports provided: ForumModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumModule", function() { return ForumModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _forum_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forum-routing.module */ "hUg4");
/* harmony import */ var _forum_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forum.component */ "RPZ3");
/* harmony import */ var _home_forum_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/forum.home.component */ "o7z0");
/* harmony import */ var _sections_sidebar_forum_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/sidebar/forum.sidebar.component */ "WWLG");
/* harmony import */ var _sections_crumbs_forum_crumbs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/crumbs/forum.crumbs.component */ "gRqr");
/* harmony import */ var _post_editor_editor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post/editor/editor.component */ "5yi1");
/* harmony import */ var _topic_topic_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./topic/topic.component */ "rKFy");
/* harmony import */ var _forums_forums_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forums/forums.component */ "K7IZ");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./post/post.component */ "89V0");
/* harmony import */ var _forum_skeleton_forum_skeleton_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forum_skeleton/forum.skeleton.component */ "HQbV");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared.module */ "d2mR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














class ForumModule {
}
ForumModule.ɵfac = function ForumModule_Factory(t) { return new (t || ForumModule)(); };
ForumModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: ForumModule });
ForumModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
            _forum_routing_module__WEBPACK_IMPORTED_MODULE_2__["ForumRoutingModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_12__["sharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](ForumModule, { declarations: [_forum_component__WEBPACK_IMPORTED_MODULE_3__["ForumComponent"],
        _home_forum_home_component__WEBPACK_IMPORTED_MODULE_4__["ForumHomeComponent"],
        _sections_sidebar_forum_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["ForumSidebarComponent"],
        _sections_crumbs_forum_crumbs_component__WEBPACK_IMPORTED_MODULE_6__["ForumCrumbsComponent"],
        _topic_topic_component__WEBPACK_IMPORTED_MODULE_8__["TopicComponent"],
        _forums_forums_component__WEBPACK_IMPORTED_MODULE_9__["ForumsComponent"],
        _post_post_component__WEBPACK_IMPORTED_MODULE_10__["postComponent"],
        _post_editor_editor_component__WEBPACK_IMPORTED_MODULE_7__["editorComponent"],
        _forum_skeleton_forum_skeleton_component__WEBPACK_IMPORTED_MODULE_11__["ForumSkeletonComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
        _forum_routing_module__WEBPACK_IMPORTED_MODULE_2__["ForumRoutingModule"],
        _shared_module__WEBPACK_IMPORTED_MODULE_12__["sharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"]] }); })();


/***/ }),

/***/ "WWLG":
/*!**************************************************************************!*\
  !*** ./src/app/module/forum/sections/sidebar/forum.sidebar.component.ts ***!
  \**************************************************************************/
/*! exports provided: ForumSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumSidebarComponent", function() { return ForumSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ForumSidebarComponent {
    constructor() { }
    ngOnInit() {
    }
}
ForumSidebarComponent.ɵfac = function ForumSidebarComponent_Factory(t) { return new (t || ForumSidebarComponent)(); };
ForumSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForumSidebarComponent, selectors: [["app-forumSidebar"]], decls: 55, vars: 0, consts: [[1, "forum", "sidebar"], [1, "sidebarList"], ["href", "", 1, "lastPosts"], [1, "Lastauth"], ["href", "#"]], template: function ForumSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Voir les derniers postes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Un poste que je viens de post...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Post\u00E9 aujourd'hui par ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Guz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Un poste que je viens de post...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Post\u00E9 aujourd'hui par ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Guz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Un poste que je viens de post...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Post\u00E9 aujourd'hui par ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Guz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Les meilleurs membres");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Un poste que je viens de post...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Post\u00E9 aujourd'hui par ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Guz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Un poste que je viens de post...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Post\u00E9 aujourd'hui par ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Guz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Un poste que je viens de post...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Post\u00E9 aujourd'hui par ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Guz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "gRqr":
/*!************************************************************************!*\
  !*** ./src/app/module/forum/sections/crumbs/forum.crumbs.component.ts ***!
  \************************************************************************/
/*! exports provided: ForumCrumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumCrumbsComponent", function() { return ForumCrumbsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ForumCrumbsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ForumCrumbsComponent.ɵfac = function ForumCrumbsComponent_Factory(t) { return new (t || ForumCrumbsComponent)(); };
ForumCrumbsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForumCrumbsComponent, selectors: [["app-forumCrumbs"]], decls: 10, vars: 0, consts: [[1, "bread-crumbs"], ["href", ""]], template: function ForumCrumbsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Accueil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Forum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Notre premier forums ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "hUg4":
/*!******************************************************!*\
  !*** ./src/app/module/forum/forum-routing.module.ts ***!
  \******************************************************/
/*! exports provided: ForumRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumRoutingModule", function() { return ForumRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _forum_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forum.component */ "RPZ3");
/* harmony import */ var _topic_topic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topic/topic.component */ "rKFy");
/* harmony import */ var _forums_forums_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forums/forums.component */ "K7IZ");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post/post.component */ "89V0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    {
        path: '', component: _forum_component__WEBPACK_IMPORTED_MODULE_1__["ForumComponent"],
        children: [
            { path: 'topic/:id', component: _topic_topic_component__WEBPACK_IMPORTED_MODULE_2__["TopicComponent"] },
            { path: 'view/:id', component: _forums_forums_component__WEBPACK_IMPORTED_MODULE_3__["ForumsComponent"] },
            { path: 'post/:type/:id', component: _post_post_component__WEBPACK_IMPORTED_MODULE_4__["postComponent"] },
        ]
    }
];
class ForumRoutingModule {
}
ForumRoutingModule.ɵfac = function ForumRoutingModule_Factory(t) { return new (t || ForumRoutingModule)(); };
ForumRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ForumRoutingModule });
ForumRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ForumRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "o7z0":
/*!***********************************************************!*\
  !*** ./src/app/module/forum/home/forum.home.component.ts ***!
  \***********************************************************/
/*! exports provided: ForumHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumHomeComponent", function() { return ForumHomeComponent; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _dicebear_avatars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dicebear/avatars */ "tB1i");
/* harmony import */ var _dicebear_avatars__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dicebear_avatars__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dicebear_pixel_art__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dicebear/pixel-art */ "y6Nm");
/* harmony import */ var _dicebear_pixel_art__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dicebear_pixel_art__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_services */ "J9tS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sections_sidebar_forum_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sections/sidebar/forum.sidebar.component */ "WWLG");
/* harmony import */ var _forum_skeleton_forum_skeleton_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../forum_skeleton/forum.skeleton.component */ "HQbV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _helpers_safe_html__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../_helpers/safe-html */ "hbwU");











function ForumHomeComponent_app_skeleton_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-skeleton", 4);
} }
function ForumHomeComponent_ol_3_li_1_li_5_div_24_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 25);
} if (rf & 2) {
    const forum_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", forum_r6.user.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function ForumHomeComponent_ol_3_li_1_li_5_div_24_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "safeHtml");
} if (rf & 2) {
    const forum_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, forum_r6.user.svg), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function ForumHomeComponent_ol_3_li_1_li_5_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ForumHomeComponent_ol_3_li_1_li_5_div_24_img_1_Template, 1, 1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ForumHomeComponent_ol_3_li_1_li_5_div_24_div_2_Template, 2, 3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const forum_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", forum_r6.user.avatar != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", forum_r6.user.avatar == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "topic/", forum_r6.post.topic.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("fragment", forum_r6.post.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](forum_r6.post.topic.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "/topic/", forum_r6.post.topic.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", forum_r6.user.username, " ", forum_r6.post.posted, "");
} }
function ForumHomeComponent_ol_3_li_1_li_5_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Aucun message");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "--");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ForumHomeComponent_ol_3_li_1_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Un sous forum");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Un sous forum");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " Sujets ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Messages ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, ForumHomeComponent_ol_3_li_1_li_5_div_24_Template, 10, 8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, ForumHomeComponent_ol_3_li_1_li_5_div_25_Template, 7, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const forum_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "/forum/view/", forum_r6.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](forum_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](forum_r6.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](forum_r6.num_topic);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](forum_r6.num_posts);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", forum_r6.last_post_id != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", forum_r6.last_post_id == 0);
} }
function ForumHomeComponent_ol_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ol", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ForumHomeComponent_ol_3_li_1_li_5_Template, 26, 7, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const categorie_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", categorie_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.categories[i_r4].forums);
} }
function ForumHomeComponent_ol_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ol", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ForumHomeComponent_ol_3_li_1_Template, 6, 2, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.categories);
} }
class ForumHomeComponent {
    constructor(forumService, FileUploadService, UtilsService) {
        this.forumService = forumService;
        this.FileUploadService = FileUploadService;
        this.UtilsService = UtilsService;
        this.categories = null;
        this.forums = null;
        this.loast_poster = null;
        this.loading = true;
        this.apiurl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl;
    }
    ngOnInit() {
        this.forumService.getAllCats()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(categories => {
            this.categories = categories;
            for (let index = 0; index < this.categories.length; index++) {
                for (let i = 0; i < this.categories[index].forums.length; i++) {
                    this.FileUploadService.getAvatar(this.categories[index].forums[i].user.id)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
                        .subscribe(avatar => {
                        const svgAvatar = Object(_dicebear_avatars__WEBPACK_IMPORTED_MODULE_2__["createAvatar"])(_dicebear_pixel_art__WEBPACK_IMPORTED_MODULE_3__, {
                            seed: this.categories[index].forums[i].user.username,
                            backgroundColor: '#868889',
                        });
                        if (avatar != '') {
                            this.categories[index].forums[i].user['avatar'] = this.apiurl + avatar;
                        }
                        else {
                            this.categories[index].forums[i].user['avatar'] = '';
                            this.categories[index].forums[i].user['svg'] = svgAvatar;
                        }
                        this.loading = false;
                    });
                }
            }
            console.log(this.categories);
        });
    }
}
ForumHomeComponent.ɵfac = function ForumHomeComponent_Factory(t) { return new (t || ForumHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_5__["forumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_5__["FileUploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_5__["UtilsService"])); };
ForumHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ForumHomeComponent, selectors: [["app-forumHome"]], decls: 5, vars: 2, consts: [[1, "forum_wrapper"], [1, "forum", "main"], ["model", "home", 4, "ngIf"], ["class", "cats", 4, "ngIf"], ["model", "home"], [1, "cats"], ["class", "forumsList", 4, "ngFor", "ngForOf"], [1, "forumsList"], [1, "fas", "fa-minus-square"], [1, "catsforum"], ["class", "forumsDisp", 4, "ngFor", "ngForOf"], [1, "forumsDisp"], [1, "forums", "icon", "old"], [1, "forums", "main"], [3, "routerLink"], [1, "subforums"], ["href", "#"], [1, "forums", "stats"], ["class", "forums last", 4, "ngIf"], [1, "forums", "last"], ["class", "author avatar", 3, "src", 4, "ngIf"], ["class", "author avatar avatarSvg", 3, "innerHTML", 4, "ngIf"], [1, "authorMargin"], [1, "author", "lastSub", 3, "routerLink", "fragment"], [1, "author", "time", 3, "routerLink"], [1, "author", "avatar", 3, "src"], [1, "author", "avatar", "avatarSvg", 3, "innerHTML"], ["src", "./assets/img/design/no-avatar.png", 1, "author", "avatar"]], template: function ForumHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ForumHomeComponent_app_skeleton_2_Template, 1, 0, "app-skeleton", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ForumHomeComponent_ol_3_Template, 2, 1, "ol", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-forumSidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _sections_sidebar_forum_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["ForumSidebarComponent"], _forum_skeleton_forum_skeleton_component__WEBPACK_IMPORTED_MODULE_8__["ForumSkeletonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"]], pipes: [_helpers_safe_html__WEBPACK_IMPORTED_MODULE_10__["Safe"]], encapsulation: 2 });


/***/ }),

/***/ "rKFy":
/*!*******************************************************!*\
  !*** ./src/app/module/forum/topic/topic.component.ts ***!
  \*******************************************************/
/*! exports provided: TopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicComponent", function() { return TopicComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _dicebear_avatars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dicebear/avatars */ "tB1i");
/* harmony import */ var _dicebear_avatars__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dicebear_avatars__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dicebear_pixel_art__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dicebear/pixel-art */ "y6Nm");
/* harmony import */ var _dicebear_pixel_art__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dicebear_pixel_art__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_services */ "J9tS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../post/post.component */ "89V0");
/* harmony import */ var _forum_skeleton_forum_skeleton_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../forum_skeleton/forum.skeleton.component */ "HQbV");
/* harmony import */ var _helpers_safe_html__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../_helpers/safe-html */ "hbwU");











function TopicComponent_app_skeleton_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-skeleton", 3);
} }
function TopicComponent_ng_container_2_div_1_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 24);
} if (rf & 2) {
    const post_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", post_r3.user == null ? null : post_r3.user.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function TopicComponent_ng_container_2_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "safeHtml");
} if (rf & 2) {
    const post_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, post_r3.user == null ? null : post_r3.user.svg), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
const _c0 = function (a0) { return { "pushed": a0 }; };
function TopicComponent_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "b", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Mod\u00E9rateur");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, TopicComponent_ng_container_2_div_1_img_8_Template, 1, 1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, TopicComponent_ng_container_2_div_1_div_9_Template, 2, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Inscription");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "section", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "section", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, " En ligne");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("id", post_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c0, post_r3.pushed));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", post_r3.user == null ? null : post_r3.user.username, " \u2022 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (post_r3.user == null ? null : post_r3.user.avatar) != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (post_r3.user == null ? null : post_r3.user.avatar) == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", post_r3.user == null ? null : post_r3.user.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](post_r3.user == null ? null : post_r3.user.register);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](post_r3.user == null ? null : post_r3.user.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Post\u00E9(e) ", post_r3.posted, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", post_r3.message, " ");
} }
function TopicComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TopicComponent_ng_container_2_div_1_Template, 34, 12, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.posts);
} }
class TopicComponent {
    constructor(route, forumService, AccountService, FileUploadService, UtilsService) {
        this.route = route;
        this.forumService = forumService;
        this.AccountService = AccountService;
        this.FileUploadService = FileUploadService;
        this.UtilsService = UtilsService;
        this.topicid = 0;
        this.posts = null;
        this.loading = true;
        this.apiurl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        this.AccountService.user.subscribe(x => this.user = x);
    }
    ngOnInit() {
        this.topicid = this.route.snapshot.params['id'];
        this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
        this.forumService.messageTopic.subscribe(msg => {
            let message = JSON.parse(msg);
            this.posts.push({ message: message.message.message, user: this.user, pushed: true });
        });
    }
    ngAfterViewInit() {
        this.forumService.getPosts(this.topicid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])())
            .subscribe(posts => {
            this.posts = posts;
            for (let i = 0; i < this.posts.length; i++) {
                this.posts[i].posted = this.UtilsService.format_date(this.posts[i].posted);
                this.posts[i].user.register = this.UtilsService.format_date(this.posts[i].user.register);
                this.FileUploadService.getAvatar(this.posts[i].user.id)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])())
                    .subscribe(avatar => {
                    const svgAvatar = Object(_dicebear_avatars__WEBPACK_IMPORTED_MODULE_2__["createAvatar"])(_dicebear_pixel_art__WEBPACK_IMPORTED_MODULE_3__, {
                        seed: this.posts[i].user.username,
                        backgroundColor: '#868889',
                    });
                    if (avatar != '') {
                        this.posts[i].user['avatar'] = this.apiurl + avatar;
                    }
                    else {
                        this.posts[i].user['avatar'] = '';
                        this.posts[i].user['svg'] = svgAvatar;
                    }
                });
                this.posts[i]['pushed'] = false;
            }
            try {
                document.querySelector('#' + this.fragment).scrollIntoView();
            }
            catch (e) { }
            this.loading = false;
        });
    }
}
TopicComponent.ɵfac = function TopicComponent_Factory(t) { return new (t || TopicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_6__["forumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_6__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_6__["FileUploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_6__["UtilsService"])); };
TopicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TopicComponent, selectors: [["app-topic"]], decls: 4, vars: 2, consts: [[1, "topic_wrapper"], ["model", "topic", 4, "ngIf"], [4, "ngIf"], ["model", "topic"], ["class", "topic", 3, "id", "ngClass", 4, "ngFor", "ngForOf"], [1, "topic", 3, "id", "ngClass"], [1, "users"], [1, "leftStats"], [1, "avatar-username"], [1, "username"], [1, "title"], ["class", "avaPic", 3, "src", 4, "ngIf"], ["class", "avaPic avatarSvg", 3, "innerHTML", 4, "ngIf"], [1, "customTitle"], [1, "miscList", "register"], [1, "miscList", "message"], [1, "content"], [1, "header-topic"], ["href", "", 1, "dropTopic"], [1, "fas", "fa-ellipsis-h"], [1, "messageInside"], [1, "topic_footer"], [1, "statut"], [1, "online"], [1, "avaPic", 3, "src"], [1, "avaPic", "avatarSvg", 3, "innerHTML"]], template: function TopicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TopicComponent_app_skeleton_1_Template, 1, 0, "app-skeleton", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TopicComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-post", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _post_post_component__WEBPACK_IMPORTED_MODULE_8__["postComponent"], _forum_skeleton_forum_skeleton_component__WEBPACK_IMPORTED_MODULE_9__["ForumSkeletonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]], pipes: [_helpers_safe_html__WEBPACK_IMPORTED_MODULE_10__["Safe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3BpYy5jb21wb25lbnQubGVzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=module-forum-forum-module.js.map
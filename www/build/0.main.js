webpackJsonp([0],{

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(264);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadModule", function() { return UploadModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UploadModule = (function () {
    function UploadModule() {
    }
    return UploadModule;
}());
UploadModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__upload__["a" /* Upload */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__upload__["a" /* Upload */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__upload__["a" /* Upload */]
        ]
    })
], UploadModule);

//# sourceMappingURL=upload.module.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_service__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Upload; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Upload = (function () {
    function Upload(authService, dataService) {
        this.authService = authService;
        this.dataService = dataService;
        this.user = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser;
    }
    Upload.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Upload');
    };
    Upload.prototype.fileChange = function (event) {
        var _this = this;
        this.files = event.target.files;
        var _loop_1 = function (file) {
            reader = new FileReader();
            reader.onload = function (e) { return _this.processFile(file, reader.result); };
            reader.readAsText(file, 'UTF-8');
        };
        var reader;
        for (var _i = 0, _a = this.files; _i < _a.length; _i++) {
            var file = _a[_i];
            _loop_1(file);
        }
    };
    Upload.prototype.processFile = function (file, readerResult) {
        var _this = this;
        var textFileAsBlob = new Blob([readerResult]);
        var metadata = {
            contentType: 'text/xml',
            desc: 'some XML',
            lastModified: file.lastModified,
            originalName: file.name
        };
        var _a = this.dataService.upload(textFileAsBlob, metadata), uploadTask = _a.uploadTask, done = _a.done;
        uploadTask.on('state_changed', function (snapshot) {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            _this.progress = percent.toFixed(2);
        });
        done.then(function (url) {
            _this.state = 'upload complete';
            console.log('uploading done then url', url);
        });
    };
    Upload.prototype.logout = function () {
        this.authService.logout();
    };
    return Upload;
}());
Upload = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-upload',template:/*ion-inline-start:"/Users/Paco-Anders/project/pry/src/pages/upload/upload.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>upload</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div *ngIf="user">\n    hi\n    {{ user.displayName }}\n  </div>\n\n  <!-- upload input -->\n\n  <input\n    #input\n    type="file"\n    (change)="fileChange($event)"\n    />\n\n  <!-- upload progress -->\n\n  <div *ngIf="100 > progress > 0">\n    <p>progress {{ progress }} %</p>\n    <spinner class="middle center"></spinner>\n  </div>\n\n  <!-- upload done -->\n\n  <div *ngIf="progress >= 100">\n    <p>{{ state }} </p>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Paco-Anders/project/pry/src/pages/upload/upload.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_data_service__["a" /* DataService */]])
], Upload);

//# sourceMappingURL=upload.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map
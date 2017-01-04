"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var HttpLeitorUtilService = (function () {
    function HttpLeitorUtilService() {
        this.API_URL = 'http://172.29.0.30:8087/pontows/webresources/relogio';
    }
    HttpLeitorUtilService.prototype.url = function (path) {
        return this.API_URL;
    };
    HttpLeitorUtilService.prototype.headers = function () {
        var headersParams = { 'Content-Type': 'application/json' };
        var headers = new http_1.Headers(headersParams);
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    HttpLeitorUtilService.prototype.extrairDados = function (response) {
        var data = response.json();
        return data || {};
    };
    HttpLeitorUtilService.prototype.processarErros = function (erro) {
        return Observable_1.Observable.throw('Erro acessando servidor remoto.');
    };
    return HttpLeitorUtilService;
}());
HttpLeitorUtilService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], HttpLeitorUtilService);
exports.HttpLeitorUtilService = HttpLeitorUtilService;
//# sourceMappingURL=http-leitor-util-service.js.map
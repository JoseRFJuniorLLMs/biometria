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
var http_leitor_util_service_1 = require("./http-leitor-util-service");
var LeitorService = (function () {
    function LeitorService(http, httpUtilLeitor, jsonp) {
        this.http = http;
        this.httpUtilLeitor = httpUtilLeitor;
        this.jsonp = jsonp;
        this.path = 'leitores';
    }
    LeitorService.prototype.litarTodos = function () {
        return this.http.get(this.httpUtilLeitor.url(this.path), this.httpUtilLeitor.headers())
            .map(this.httpUtilLeitor.extrairDados)
            .catch(this.httpUtilLeitor.processarErros);
    };
    LeitorService.prototype.cadastrar = function (leitor) {
        var params = JSON.stringify(leitor);
        return this.http.post(this.httpUtilLeitor.url(this.path), params, this.httpUtilLeitor.headers())
            .map(this.httpUtilLeitor.extrairDados)
            .catch(this.httpUtilLeitor.processarErros);
    };
    LeitorService.prototype.atualizar = function (leitor) {
        var params = JSON.stringify(leitor);
        return this.http.put(this.httpUtilLeitor.url(this.path), params, this.httpUtilLeitor.headers())
            .map(this.httpUtilLeitor.extrairDados)
            .catch(this.httpUtilLeitor.processarErros);
    };
    LeitorService.prototype.excluir = function (id) {
        return this.http.delete(this.httpUtilLeitor.url(this.path + '/' + id), this.httpUtilLeitor.headers())
            .map(this.httpUtilLeitor.extrairDados)
            .catch(this.httpUtilLeitor.processarErros);
    };
    LeitorService.prototype.buscarPorId = function (id) {
        return this.http.get(this.httpUtilLeitor.url(this.path + '/' + id), this.httpUtilLeitor.headers())
            .map(this.httpUtilLeitor.extrairDados)
            .catch(this.httpUtilLeitor.processarErros);
    };
    return LeitorService;
}());
LeitorService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, http_leitor_util_service_1.HttpLeitorUtilService, Object])
], LeitorService);
exports.LeitorService = LeitorService;
//# sourceMappingURL=leitor-service.js.map
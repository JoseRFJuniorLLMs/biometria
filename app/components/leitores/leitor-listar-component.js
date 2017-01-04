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
var leitor_services_1 = require("../.././services/leitor-services");
var router_1 = require("@angular/router");
var modal_util_component_1 = require("../utils/modal-util-component");
var LeitorListarComponent = (function () {
    function LeitorListarComponent(leitorServices) {
        this.leitorServices = leitorServices;
    }
    LeitorListarComponent.prototype.listarTodos = function () {
        var _this = this;
        this.leitorServices.listarTodos()
            .subscribe(function (leitores) { return _this.leitores = leitores; }, function (error) { return _this.msgErro = error; });
    };
    LeitorListarComponent.prototype.ngOnInit = function () {
        this.listarTodos();
    };
    LeitorListarComponent.prototype.excluir = function (id) {
        this.idExcluir = id;
    };
    LeitorListarComponent.prototype.onExcluir = function () {
        var _this = this;
        this.leitorServices.excluir(this.idExcluir)
            .subscribe(function (data) { return _this.listarTodos(); }, function (error) { return _this.msgErro = error; });
        this.idExcluir = -1;
    };
    return LeitorListarComponent;
}());
LeitorListarComponent = __decorate([
    core_1.Component({
        selector: 'leitor-listar',
        templateUrl: 'app/views/leitores/listar.html',
        providers: [leitor_services_1.LeitorServices],
        directives: [router_1.ROUTER_DIRECTIVES, modal_util_component_1.ModalUtilComponent]
    }),
    __metadata("design:paramtypes", [leitor_services_1.LeitorServices])
], LeitorListarComponent);
exports.LeitorListarComponent = LeitorListarComponent;
//# sourceMappingURL=leitor-listar-component.js.map
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
var aluno_service_1 = require("../.././services/aluno-service");
var router_1 = require("@angular/router");
var modal_util_component_1 = require("../utils/modal-util-component");
var AlunoListarComponent = (function () {
    function AlunoListarComponent(alunoService) {
        this.alunoService = alunoService;
    }
    AlunoListarComponent.prototype.listarTodos = function () {
        var _this = this;
        this.alunoService.listarTodos()
            .subscribe(function (alunos) { return _this.alunos = alunos; }, function (error) { return _this.msgErro = error; });
    };
    AlunoListarComponent.prototype.ngOnInit = function () {
        this.listarTodos();
    };
    AlunoListarComponent.prototype.excluir = function (id) {
        this.idExcluir = id;
    };
    AlunoListarComponent.prototype.onExcluir = function () {
        var _this = this;
        this.alunoService.excluir(this.idExcluir)
            .subscribe(function (data) { return _this.listarTodos(); }, function (error) { return _this.msgErro = error; });
        this.idExcluir = -1;
    };
    return AlunoListarComponent;
}());
AlunoListarComponent = __decorate([
    core_1.Component({
        selector: 'aluno-listar',
        templateUrl: 'app/views/alunos/listar.html',
        providers: [aluno_service_1.AlunoService],
        directives: [router_1.ROUTER_DIRECTIVES, modal_util_component_1.ModalUtilComponent]
    }),
    __metadata("design:paramtypes", [aluno_service_1.AlunoService])
], AlunoListarComponent);
exports.AlunoListarComponent = AlunoListarComponent;
//# sourceMappingURL=aluno-listar-component.js.map
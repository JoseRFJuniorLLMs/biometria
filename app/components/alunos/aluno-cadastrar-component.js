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
var aluno_1 = require("../.././models/aluno");
var aluno_service_1 = require("../.././services/aluno-service");
var router_1 = require("@angular/router");
var AlunoCadastrarComponent = (function () {
    function AlunoCadastrarComponent(router, alunoService) {
        this.router = router;
        this.alunoService = alunoService;
    }
    AlunoCadastrarComponent.prototype.ngOnInit = function () {
        this.aluno = new aluno_1.Aluno();
    };
    AlunoCadastrarComponent.prototype.cadastrar = function () {
        var _this = this;
        this.alunoService.cadastrar(this.aluno)
            .subscribe(function (aluno) { return _this.router.navigate(['/aluno-listar']); }, function (error) { return _this.msgErro = error; });
    };
    return AlunoCadastrarComponent;
}());
AlunoCadastrarComponent = __decorate([
    core_1.Component({
        selector: 'aluno-cadastrar',
        templateUrl: 'app/views/alunos/cadastrar.html',
        providers: [aluno_service_1.AlunoService],
        directives: [router_1.ROUTER_DIRECTIVES]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        aluno_service_1.AlunoService])
], AlunoCadastrarComponent);
exports.AlunoCadastrarComponent = AlunoCadastrarComponent;
//# sourceMappingURL=aluno-cadastrar-component.js.map
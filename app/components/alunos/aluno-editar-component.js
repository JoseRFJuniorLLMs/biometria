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
var AlunoEditarComponent = (function () {
    function AlunoEditarComponent(route, router, alunoService) {
        this.route = route;
        this.router = router;
        this.alunoService = alunoService;
    }
    AlunoEditarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = +this.route.snapshot.params['id'];
        this.aluno = new aluno_1.Aluno();
        this.alunoService.buscarPorId(this.id)
            .subscribe(function (aluno) { return _this.aluno = aluno; }, function (error) { return _this.msgErro = error; });
    };
    AlunoEditarComponent.prototype.atualizar = function () {
        var _this = this;
        this.alunoService.atualizar(this.aluno)
            .subscribe(function (aluno) { return _this.router.navigate(['/aluno-listar']); }, function (error) { return _this.msgErro = error; });
    };
    return AlunoEditarComponent;
}());
AlunoEditarComponent = __decorate([
    core_1.Component({
        selector: 'aluno-editar',
        templateUrl: 'app/views/alunos/editar.html',
        providers: [aluno_service_1.AlunoService],
        directives: [router_1.ROUTER_DIRECTIVES]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        aluno_service_1.AlunoService])
], AlunoEditarComponent);
exports.AlunoEditarComponent = AlunoEditarComponent;
//# sourceMappingURL=aluno-editar-component.js.map
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
var leitor_1 = require("../.././models/leitor");
var leitor_service_1 = require("../.././services/leitor-service");
var router_1 = require("@angular/router");
var LeitorCadastrarComponent = (function () {
    function LeitorCadastrarComponent(router, leitorService) {
        this.router = router;
        this.leitorService = leitorService;
    }
    LeitorCadastrarComponent.prototype.ngOnInit = function () {
        this.leitor = new leitor_1.Leitor();
    };
    LeitorCadastrarComponent.prototype.cadastrar = function () {
        var _this = this;
        this.leitorService.cadastrar(this.leitor)
            .subscribe(function (leitor) { return _this.router.navigate(['/leitor-listar']); }, function (error) { return _this.msgErro = error; });
    };
    return LeitorCadastrarComponent;
}());
LeitorCadastrarComponent = __decorate([
    core_1.Component({
        selector: 'leitor-cadastrar',
        templateUrl: 'app/views/leitores/cadastrar.html',
        providers: [leitor_service_1.LeitorService],
        directives: [router_1.ROUTER_DIRECTIVES]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        leitor_service_1.LeitorService])
], LeitorCadastrarComponent);
exports.LeitorCadastrarComponent = LeitorCadastrarComponent;
//# sourceMappingURL=leitor-cadastrar-component.js.map
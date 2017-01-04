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
var ModalUtilComponent = (function () {
    function ModalUtilComponent() {
        this.onConfirm = new core_1.EventEmitter();
    }
    ModalUtilComponent.prototype.confirmar = function () {
        this.onConfirm.emit(true);
    };
    return ModalUtilComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ModalUtilComponent.prototype, "id", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ModalUtilComponent.prototype, "titulo", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ModalUtilComponent.prototype, "descricao", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ModalUtilComponent.prototype, "onConfirm", void 0);
ModalUtilComponent = __decorate([
    core_1.Component({
        selector: 'modal-util',
        template: "\n\t\t<div class=\"modal fade\" [id]=\"id\" tabindex=\"-1\" \n\t\t\trole=\"dialog\" aria-labelledby=\"modalLabel\">\n\t\t  <div class=\"modal-dialog\" role=\"document\">\n\t\t    <div class=\"modal-content\">\n\t\t      <div class=\"modal-header\">\n\t\t        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" \n\t\t        \taria-label=\"Fechar\"><span aria-hidden=\"true\">&times;</span></button>\n\t\t        <h4 class=\"modal-title\" id=\"modalLabel\">{{ titulo }}</h4>\n\t\t      </div>\n\t\t      <div class=\"modal-body\">\n\t\t        {{ descricao }}\n\t\t      </div>\n\t\t      <div class=\"modal-footer\">\n\t\t        <button type=\"button\" class=\"btn btn-default\" \n\t\t        \tdata-dismiss=\"modal\">N\u00E3o</button>\n\t\t        <button type=\"button\" class=\"btn btn-primary\"\n\t\t        \tdata-dismiss=\"modal\"\n\t\t        \t(click)=\"confirmar()\">Sim</button>\n\t\t      </div>\n\t\t    </div>\n\t\t  </div>\n\t\t</div>"
    }),
    __metadata("design:paramtypes", [])
], ModalUtilComponent);
exports.ModalUtilComponent = ModalUtilComponent;
//# sourceMappingURL=modal-util-component.js.map
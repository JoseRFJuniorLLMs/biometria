"use strict";
var router_1 = require("@angular/router");
var alunos_routes_1 = require("./components/alunos/alunos-routes");
var login_routes_1 = require("./components/autenticacao/login-routes");
var leitores_routes_1 = require("./components/leitores/leitores-routes");
var login_routes_2 = require("./components/autenticacao/login-routes");
exports.routes = alunos_routes_1.AlunosRoutes.concat(login_routes_1.LoginRoutes, leitores_routes_1.LeitoresRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes),
    login_routes_2.AUTH_PROVIDERS
];
//# sourceMappingURL=app-routes.js.map
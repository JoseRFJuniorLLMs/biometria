"use strict";
var leitor_listar_component_1 = require("./leitor-listar-component");
var leitor_cadastrar_component_1 = require("./leitor-cadastrar-component");
var leitor_editar_component_1 = require("./leitor-editar-component");
var leitor_visualizar_component_1 = require("./leitor-visualizar-component");
var login_guard_1 = require("../../login-guard");
exports.LeitoresRoutes = [
    {
        path: 'leitor-listar',
        component: leitor_listar_component_1.LeitorListarComponent,
        canActivate: [login_guard_1.LoginGuard]
    },
    {
        path: 'leitor-cadastrar',
        component: leitor_cadastrar_component_1.LeitorCadastrarComponent,
        canActivate: [login_guard_1.LoginGuard]
    },
    {
        path: 'leitor-editar/:id',
        component: leitor_editar_component_1.LeitorEditarComponent,
        canActivate: [login_guard_1.LoginGuard]
    },
    {
        path: 'leitor-visualizar/:id',
        component: leitor_visualizar_component_1.LeitorVisualizarComponent,
        canActivate: [login_guard_1.LoginGuard]
    },
    {
        path: '',
        redirectTo: '/leitor-listar',
        terminal: true
    }
];
//# sourceMappingURL=leitores-routes.js.map
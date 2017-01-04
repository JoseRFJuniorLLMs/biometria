"use strict";
var aluno_listar_component_1 = require("./aluno-listar-component");
var aluno_cadastrar_component_1 = require("./aluno-cadastrar-component");
var aluno_editar_component_1 = require("./aluno-editar-component");
var aluno_visualizar_component_1 = require("./aluno-visualizar-component");
var login_guard_1 = require("../../login-guard");
exports.AlunosRoutes = [
    {
        path: 'aluno-listar',
        component: aluno_listar_component_1.AlunoListarComponent,
        canActivate: [login_guard_1.LoginGuard]
    },
    {
        path: 'aluno-cadastrar',
        component: aluno_cadastrar_component_1.AlunoCadastrarComponent,
        canActivate: [login_guard_1.LoginGuard]
    },
    {
        path: 'aluno-editar/:id',
        component: aluno_editar_component_1.AlunoEditarComponent,
        canActivate: [login_guard_1.LoginGuard]
    },
    {
        path: 'aluno-visualizar/:id',
        component: aluno_visualizar_component_1.AlunoVisualizarComponent,
        canActivate: [login_guard_1.LoginGuard]
    },
    {
        path: '',
        redirectTo: '/aluno-listar',
        terminal: true
    }
];
//# sourceMappingURL=alunos-routes.js.map
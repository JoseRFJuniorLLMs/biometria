import { RouterConfig } from '@angular/router'; 
import { AlunoListarComponent } from './aluno-listar-component';
import { AlunoCadastrarComponent } from './aluno-cadastrar-component';
import { AlunoEditarComponent } from './aluno-editar-component';
import { AlunoVisualizarComponent } from './aluno-visualizar-component';
import { LoginGuard } from '../../login-guard';

export const AlunosRoutes: RouterConfig = [
	{ 
		path: 'aluno-listar', 
		component: AlunoListarComponent, 
		canActivate: [ LoginGuard ] 
	}, 
	{ 
		path: 'aluno-cadastrar', 
		component: AlunoCadastrarComponent, 
		canActivate: [ LoginGuard ] 
	}, 
	{ 
		path: 'aluno-editar/:id', 
		component: AlunoEditarComponent, 
		canActivate: [ LoginGuard ] 
	},
	{ 
		path: 'aluno-visualizar/:id', 
		component: AlunoVisualizarComponent, 
		canActivate: [ LoginGuard ] 
	},
	{ 
		path: '', 
		redirectTo: '/aluno-listar', 
		terminal: true 
	}
];
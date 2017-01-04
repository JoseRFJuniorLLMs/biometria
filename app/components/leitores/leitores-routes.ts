import { RouterConfig } from '@angular/router'; 
import { LeitorListarComponent } from './leitor-listar-component';
import { LeitorCadastrarComponent } from './leitor-cadastrar-component';
import { LeitorEditarComponent } from './leitor-editar-component';
import { LeitorVisualizarComponent } from './leitor-visualizar-component';
import { LoginGuard } from '../../login-guard';


export const LeitoresRoutes: RouterConfig = [
	{ 
		path: 'leitor-listar', 
		component: LeitorListarComponent, 
		canActivate: [ LoginGuard ] 
	}, 
	{ 
		path: 'leitor-cadastrar', 
		component: LeitorCadastrarComponent, 
		canActivate: [ LoginGuard ] 
	}, 
	{ 
		path: 'leitor-editar/:id', 
		component: LeitorEditarComponent, 
		canActivate: [ LoginGuard ] 
	},
	{ 
		path: 'leitor-visualizar/:id', 
		component: LeitorVisualizarComponent, 
		canActivate: [ LoginGuard ] 
	},
	{ 
		path: '', 
		redirectTo: '/leitor-listar', 
		terminal: true 
	}
];
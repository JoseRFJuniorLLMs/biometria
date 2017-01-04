import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login-service';
import { Login } from '../../models/login';

@Component({
	selector: 'login',
	templateUrl: `app/components/autenticacao/login.html`,
	//templateUrl: `app/views/leitores/listar.html`,
	providers: [ LoginService ]
})
export class LoginComponent {

	private usuario: string;
	private senha: string;
	private msgErro: string;

	constructor(private router: Router, private loginService: LoginService) {
	}

	logar() {
		this.loginService.logar(this.usuario, this.senha)
			.subscribe(
                login => this.processarLogin(login),
                error => this.msgErro = error);
	}

	processarLogin(login: Login) {
		localStorage['token'] = login.id;
		this.router.navigate(['/aluno-listar']);
	}
}
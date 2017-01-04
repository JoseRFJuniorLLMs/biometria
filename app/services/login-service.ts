import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Login } from '../models/login';
import { HttpUtilService } from './http-util-service';

@Injectable()
export class LoginService {

	private loginUrl:string = 'Users/login';
	private logoutUrl:string = '';

	constructor(private http: Http, private httpUtil: HttpUtilService) {
	}

	logar(usuario:string, senha:string): Observable<Login> {
		let params = JSON.stringify(
			{ "username": usuario, "password": senha });
		
		return this.http.post(this.httpUtil.url(this.loginUrl), params, 
						this.httpUtil.headers())
	                .map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
	}

	sair() {
		delete localStorage['token'];
	}

	logado() {
		return localStorage['token'];
	}
}
import { Injectable } from '@angular/core';
import { Aluno } from '../models/aluno';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpUtilService } from './http-util-service';

@Injectable()
export class AlunoService {

	private path = 'alunos';

	constructor(private http: Http, private httpUtil: HttpUtilService) {
	}

	listarTodos(): Observable<Aluno[]> {

		return this.http.get(this.httpUtil.url(this.path), this.httpUtil.headers())
	                .map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
	}

	cadastrar(aluno: Aluno): Observable<Aluno> {
		let params = JSON.stringify(aluno);

    	return this.http.post(this.httpUtil.url(this.path), params, 
    					this.httpUtil.headers())
      				.map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros); 
	}

    atualizar(aluno: Aluno) {
		let params = JSON.stringify(aluno);

		return this.http.put(
			   this.httpUtil.url(this.path + '/' + aluno.id),params,
			   this.httpUtil.headers()
)
					 .map(this.httpUtil.extrairDados)
				     .catch(this.httpUtil.processarErros);
}

	excluir(id: number) {

		return this.http.delete(this.httpUtil.url(this.path + '/' + id), 
						this.httpUtil.headers())
	                .map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
	}

	buscarPorId(id: number): Observable<Aluno> {

		return this.http.get(this.httpUtil.url(this.path + '/' + id), 
						this.httpUtil.headers())
	                .map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
	}
}
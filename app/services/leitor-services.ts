import { Injectable } from '@angular/core';
import { Leitor } from '../models/leitor';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpUtilLeitorService } from './http-util-leitor-service';
import {Jsonp, URLSearchParams} from '@angular/http';

@Injectable()
export class LeitorServices {

	private path = 'leitores';

	constructor(private http: Http, private httpUtil: HttpUtilLeitorService, private jsonp: Jsonp) {
	}

	listarTodos(): Observable<Leitor[]> {

		return this.http.get(this.httpUtil.url(this.path), this.httpUtil.headers())
	                .map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
	}

	cadastrar(leitor: Leitor): Observable<Leitor> {
		let params = JSON.stringify(leitor);

    	return this.http.post(this.httpUtil.url(this.path), params, 
    					this.httpUtil.headers())
      				.map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros); 
	}

	atualizar(leitor: Leitor) {
		let params = JSON.stringify(leitor);

    	return this.http.put(this.httpUtil.url(this.path), params, 
    					this.httpUtil.headers())
      				.map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
	}

	excluir(id: number) {

		return this.http.delete(this.httpUtil.url(this.path + '/' + id), 
						this.httpUtil.headers())
	                .map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
	}

	buscarPorId(id: number): Observable<Leitor> {

		return this.http.get(this.httpUtil.url(this.path + '/' + id), 
						this.httpUtil.headers())
	                .map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
	}
	search (mac: string) {

    let wikiUrl = 'http://172.29.0.30:8087/pontows/webresources/relogio';

    var params = new URLSearchParams();
    params.set('search', mac); // the user's search value
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');

    // TODO: Add error handling
    return this.jsonp
               .get(wikiUrl, { search: params })
               .map(request => <string[]> request.json()[1]);
  }
}
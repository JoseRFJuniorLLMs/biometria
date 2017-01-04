import { Injectable } from '@angular/core';
import { Leitor } from '../models/leitor';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { URLSearchParams, Jsonp } from '@angular/http';

import { HttpLeitorUtilService } from './http-leitor-util-service';
import { Ng2TableModule } from 'ng2-table/ng2-table';


@Injectable()
export class LeitorService {

    private path = 'leitores';
	
    constructor(private http: Http, private httpUtilLeitor: HttpLeitorUtilService, private jsonp: Jsonp){
    }

    litarTodos(): Observable<Leitor[]>{
        return this.http.get(this.httpUtilLeitor.url(this.path), 
               this.httpUtilLeitor.headers())
               .map(this.httpUtilLeitor.extrairDados)
               .catch(this.httpUtilLeitor.processarErros);
    }
	cadastrar(leitor: Leitor): Observable<Leitor> {
		let params = JSON.stringify(leitor);

    	return this.http.post(this.httpUtilLeitor.url(this.path), params, 
    					this.httpUtilLeitor.headers())
      				.map(this.httpUtilLeitor.extrairDados)
	                .catch(this.httpUtilLeitor.processarErros); 
	}

	atualizar(leitor: Leitor) {
		let params = JSON.stringify(leitor);

    	return this.http.put(this.httpUtilLeitor.url(this.path), params, 
    					this.httpUtilLeitor.headers())
      				.map(this.httpUtilLeitor.extrairDados)
	                .catch(this.httpUtilLeitor.processarErros);
	}

	excluir(id: number) {

		return this.http.delete(this.httpUtilLeitor.url(this.path + '/' + id), 
						this.httpUtilLeitor.headers())
	                .map(this.httpUtilLeitor.extrairDados)
	                .catch(this.httpUtilLeitor.processarErros);
	}

	buscarPorId(id: number): Observable<Leitor> {

		return this.http.get(this.httpUtilLeitor.url(this.path + '/' + id), 
						this.httpUtilLeitor.headers())
	                .map(this.httpUtilLeitor.extrairDados)
	                .catch(this.httpUtilLeitor.processarErros);
	}

  search (mac: string) {

	let wikiUrl =  'http://172.29.0.30:8087/pontows/webresources/relogio';

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


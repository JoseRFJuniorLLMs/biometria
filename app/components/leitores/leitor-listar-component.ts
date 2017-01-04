import { Component } from '@angular/core';
import { Leitor } from '../.././models/leitor';
import { LeitorServices } from '../.././services/leitor-services';
import { OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ModalUtilComponent } from '../utils/modal-util-component';
import {JSONP_PROVIDERS}  from '@angular/http';
import {Observable}       from 'rxjs/Observable';

@Component({
	selector: 'leitor-listar',
	templateUrl: 'app/views/leitores/listar.html',
	providers: [ LeitorServices, JSONP_PROVIDERS ],
	directives: [ ROUTER_DIRECTIVES, ModalUtilComponent ]
})
export class LeitorListarComponent implements OnInit {

	private leitores: Leitor[];
	private idExcluir: number;
	private msgErro: string;
	
	leitoress: Observable<string[]>;

	constructor(private leitorServices: LeitorServices) {
	} 

	
    search (mac: string) {
    this.leitoress = this.leitorServices.search(mac);

  }

	listarTodos() {
		this.leitorServices.listarTodos()
				.subscribe(
                	leitores => this.leitores = leitores,
                	error  => this.msgErro = error);
	}
	

	ngOnInit() {
		this.listarTodos();
	}

	excluir(id: number) {
 		this.idExcluir = id;
 	}

 	onExcluir() {
 		this.leitorServices.excluir(this.idExcluir)
 			.subscribe(
                	data  => this.listarTodos(),
                	error => this.msgErro = error);
 		this.idExcluir = -1;
 	}
}
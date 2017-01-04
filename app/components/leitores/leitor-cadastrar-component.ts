import { Component } from '@angular/core';
import { Leitor } from '../.././models/leitor';
import { LeitorService } from '../.././services/leitor-service';
import { OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	selector: 'leitor-cadastrar',
	templateUrl: 'app/views/leitores/cadastrar.html',
	providers: [ LeitorService ],
	directives: [ ROUTER_DIRECTIVES ]
})
export class LeitorCadastrarComponent implements OnInit {

	private leitor: Leitor;
	private msgErro:string;

	constructor(private router: Router, 
		private leitorService: LeitorService) {
	}

	ngOnInit() {
		this.leitor = new Leitor();
	}

	cadastrar() {
		this.leitorService.cadastrar(this.leitor)
			.subscribe(
                	leitor => this.router.navigate(['/leitor-listar']),
                	error => this.msgErro = error);
		
	}
}
import { Component } from '@angular/core';
import { Leitor } from '../.././models/leitor';
import { LeitorService } from '../.././services/leitor-service';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router'; 

@Component({
	selector: 'leitor-editar',
	templateUrl: 'app/views/alunos/editar.html',
	providers: [ LeitorService ],
	directives: [ ROUTER_DIRECTIVES ]
})
export class LeitorEditarComponent implements OnInit {

	private id: number;
	private leitor: Leitor;
	private msgErro: string;

	constructor(
		private route: ActivatedRoute, 
		private router: Router, 
		private leitorService: LeitorService) {
	}

	ngOnInit() {
		this.id = +this.route.snapshot.params['id'];
		this.leitor = new Leitor();
		this.leitorService.buscarPorId(this.id)
			.subscribe(
                	leitor => this.leitor = leitor,
                	error => this.msgErro = error);
	}

	atualizar() {
		this.leitorService.atualizar(this.leitor)
			.subscribe(
                	leitor => this.router.navigate(['/leitor-listar']),
                	error => this.msgErro = error);
	}
}
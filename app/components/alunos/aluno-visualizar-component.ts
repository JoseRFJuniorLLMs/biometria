import { Component } from '@angular/core';
import { Aluno } from '../.././models/aluno';
import { AlunoService } from '../.././services/aluno-service';
import { OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'aluno-visualizar',
	templateUrl: 'app/views/alunos/visualizar.html',
	providers: [ AlunoService ],
	directives: [ ROUTER_DIRECTIVES ]
})
export class AlunoVisualizarComponent implements OnInit {

	private id: number;
	private aluno: Aluno;
	private msgErro: string;

	constructor(
		private route: ActivatedRoute, 
		private alunoService: AlunoService) {
	}

	ngOnInit() {
		this.id = +this.route.snapshot.params['id'];
		this.aluno = new Aluno();
		this.alunoService.buscarPorId(this.id)
			.subscribe(
                	aluno => this.aluno = aluno,
                	error => this.msgErro = error);
	}
}
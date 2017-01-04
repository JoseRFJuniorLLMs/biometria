import { Component } from '@angular/core';
import { Aluno } from '../.././models/aluno';
import { AlunoService } from '../.././services/aluno-service';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router'; 

@Component({
	selector: 'aluno-editar',
	templateUrl: 'app/views/alunos/editar.html',
	providers: [ AlunoService ],
	directives: [ ROUTER_DIRECTIVES ]
})
export class AlunoEditarComponent implements OnInit {

	private id: number;
	private aluno: Aluno;
	private msgErro: string;

	constructor(
		private route: ActivatedRoute, 
		private router: Router, 
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

	atualizar() {
		this.alunoService.atualizar(this.aluno)
			.subscribe(
                	aluno => this.router.navigate(['/aluno-listar']),
                	error => this.msgErro = error);
	}
}
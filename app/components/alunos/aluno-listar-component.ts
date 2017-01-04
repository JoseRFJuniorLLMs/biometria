import { Component } from '@angular/core';
import { Aluno } from '../.././models/aluno';
import { AlunoService } from '../.././services/aluno-service';
import { OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ModalUtilComponent } from '../utils/modal-util-component';

@Component({
	selector: 'aluno-listar',
	templateUrl: 'app/views/alunos/listar.html',
	providers: [ AlunoService ],
	directives: [ ROUTER_DIRECTIVES, ModalUtilComponent ]
})
export class AlunoListarComponent implements OnInit {

	private alunos: Aluno[];
	private idExcluir: number;
	private msgErro: string;

	constructor(private alunoService: AlunoService) {
	} 

	listarTodos() {
		this.alunoService.listarTodos()
				.subscribe(
                	alunos => this.alunos = alunos,
                	error  => this.msgErro = error);
	}

	ngOnInit() {
		this.listarTodos();
	}

	excluir(id: number) {
 		this.idExcluir = id;
 	}

 	onExcluir() {
 		this.alunoService.excluir(this.idExcluir)
 			.subscribe(
                	data  => this.listarTodos(),
                	error => this.msgErro = error);
 		this.idExcluir = -1;
 	}
}
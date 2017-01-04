import { Component } from '@angular/core';
import { Leitor } from '../.././models/leitor';
import { LeitorService } from '../.././services/leitor-service';
import { OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'leitor-visualizar',
	templateUrl: 'app/views/leitores/visualizar.html',
	providers: [ LeitorService ],
	directives: [ ROUTER_DIRECTIVES ]
})
export class LeitorVisualizarComponent implements OnInit {

	private id: number;
	private leitor: Leitor;
	private msgErro: string;

	constructor(
		private route: ActivatedRoute, 
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
}
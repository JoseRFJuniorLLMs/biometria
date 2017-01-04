import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'modal-util',
	template: `
		<div class="modal fade" [id]="id" tabindex="-1" 
			role="dialog" aria-labelledby="modalLabel">
		  <div class="modal-dialog" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal" 
		        	aria-label="Fechar"><span aria-hidden="true">&times;</span></button>
		        <h4 class="modal-title" id="modalLabel">{{ titulo }}</h4>
		      </div>
		      <div class="modal-body">
		        {{ descricao }}
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-default" 
		        	data-dismiss="modal">Não</button>
		        <button type="button" class="btn btn-primary"
		        	data-dismiss="modal"
		        	(click)="confirmar()">Sim</button>
		      </div>
		    </div>
		  </div>
		</div>`
})
export class ModalUtilComponent {

	@Input() id: string;
	@Input() titulo: string;
	@Input() descricao: string;
	@Output() onConfirm: EventEmitter<boolean> = new EventEmitter<boolean>();

	confirmar() {
		this.onConfirm.emit(true);
	}
}
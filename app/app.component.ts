import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import './rxjs-operators';

@Component({
  selector: 'meu-app',
  templateUrl: 'app/views/menu/menu.html',

	directives: [ ROUTER_DIRECTIVES ]
})
export class AppComponent {
}
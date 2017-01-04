import { CanActivate }    from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from './services/login-service';
import { Router } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {
  
	constructor(private loginService: LoginService, private router: Router){
	}

  	canActivate() {
  		if (this.loginService.logado()) {
  			return true;
  		}
  		this.router.navigate(['/login']);
  	}
}
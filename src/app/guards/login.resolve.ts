import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class LoginResolver implements Resolve<any> {
	
	constructor(private router : Router) {}
	// If someone redirect to login page and user is already login then redirect to home page
	resolve(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) {
		if (!localStorage['auth-token']) 
			return true;
		this.router.navigate(['']);
	}
}
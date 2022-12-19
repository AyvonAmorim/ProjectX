import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
	UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { TokenSend } from '../models/auth';
import { AuthService } from 'src/app/Shared/services/auth.service';

@Injectable({
	providedIn: 'root',
})
export class AuthGuard implements CanActivate {
	public tokenSend: TokenSend;
	public tokenStatus: string;

	constructor(public router: Router, public authService: AuthService) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		this.tokenSend = new TokenSend();

		const token = localStorage.getItem('token');
    

		this.tokenSend.token = token;
		this.authService.verifyToken(this.tokenSend).subscribe(
			(data) => {
			},
			(error) => {
				localStorage.removeItem('token');
			  this.router.navigate(['login']);
			}
		);


    const EndToken = localStorage.getItem('token')
		if (EndToken) {
			return true;
		} else {
			this.router.navigate(['login']);
			return false;
		}
	}
}

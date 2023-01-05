import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
	UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Shared/services/auth.service';
import { TokenSend } from '../models/auth-models';
import { Decoded } from '../models/jwt-models';
import jwt_decode from 'jwt-decode';

@Injectable({
	providedIn: 'root',
})
export class AuthUserGuard implements CanActivate {
	public tokenSend: TokenSend;
	public tokenStatus: string;
	public decode: Decoded;

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
		this.decode = new Decoded();

		const token = localStorage.getItem('token');

		this.tokenSend.token = token;
		this.authService.verifyToken(this.tokenSend).subscribe(
			(data) => {
				this.decode = jwt_decode(token);

				if (this.decode.AdmAccess === true) {
					this.router.navigate(['client']);
				}
			},
			(error) => {
				localStorage.removeItem('token');
				localStorage.removeItem('selectedOption');
				this.router.navigate(['login']);
			}
		);

		const EndToken = localStorage.getItem('token');
		if (EndToken) {
			return true;
		} else {
			this.router.navigate(['login']);
			return false;
		}
	}
}

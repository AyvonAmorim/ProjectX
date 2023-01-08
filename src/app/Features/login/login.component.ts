import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Shared/services/auth.service';
import { RequestLogin, TokenSend } from '../../Core/models/auth-models';
import { AlertService } from 'src/app/Shared/services/alert.service';
import { JwtService } from '../../Shared/services/jwt.service';
import { ActiveFarms } from 'src/app/Core/models/farm-models';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent {
	public requestLogin: RequestLogin;
	public tokenSend: TokenSend;
	public decoded: any;

	constructor(
		private authService: AuthService,
		private router: Router,
		public alertService: AlertService,
		public jwtService: JwtService
	) {}

	ngOnInit(): void {
		this.requestLogin = new RequestLogin();
		this.tokenSend = new TokenSend();
	}

	pressEnter() {
		this.doLogin();
	}

	public doLogin(): void {
		this.authService.doLogin(this.requestLogin).subscribe(
			(token) => {
				this.tokenSend.token = token.token;
				this.decoded = this.jwtService.Decode(this.tokenSend.token);

				this.authService.verifyToken(this.tokenSend).subscribe(
					(verify) => {
						if (verify.message === 'valid') {
							localStorage.setItem('token', token.token);
							localStorage.setItem('selectedOption', this.decoded.ActiveFarms[0]);
							this.router.navigate(['client']);
						} else {
							console.log('token Não valido');
						}
					},
					(error) => {
						console.error(error.error.message);
					}
				);
			},
			(error) => {
				this.alertService.error('Senha ou Login incorretos', '');
			}
		);
	}
}

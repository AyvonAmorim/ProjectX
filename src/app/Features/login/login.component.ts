import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Shared/services/auth.service';
import { RequestLogin, TokenSend } from '../../Core/models/auth';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent {
	public requestLogin: RequestLogin;
	public tokenSend: TokenSend;

	constructor(private authService: AuthService, private router: Router) {}

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

				this.authService.verifyToken(this.tokenSend).subscribe(
					(verify) => {
						if(verify.message === 'valid'){
              
              localStorage.setItem('token',token.token);

              this.router.navigate(['client'])
            }
            else{
              console.log('token Não valido')
            }
					},
					(error) => {
						console.error(error.error.message);
					}
				);
			},
			(error) => {
				console.error(error.error.message);
			}
		);
	}

  
}

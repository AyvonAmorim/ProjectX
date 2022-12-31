import { Component } from '@angular/core';
import { Decoded } from 'src/app/Core/models/jwt-models';
import  jwt_decode  from 'jwt-decode';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent {
  public decode: Decoded;
	public Nome: string;
	public ImgPerfilUrl: string;

  ngOnInit(): void {
		this.decode = new Decoded();
		const token = localStorage.getItem('token');
		this.decode = jwt_decode(token);
		const Nome = this.UpperCase(this.decode.nome);
		const Sobrenome = this.UpperCase(this.decode.sobrenome);

		this.Nome = Nome + ' ' + Sobrenome;

		this.ImgPerfilUrl = 'http://localhost:3000/' + this.decode.ImgPerfil;
	}

  UpperCase(string: string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
}

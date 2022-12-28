import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Decoded } from '../../models/jwt-models';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
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

import { Component } from '@angular/core';
import { Decoded } from 'src/app/Core/models/jwt-models';
import jwt_decode from 'jwt-decode';
import { UserService } from '../../../../Shared/services/user.service';

@Component({
	selector: 'app-user-navbar',
	templateUrl: './user-navbar.component.html',
	styleUrls: ['./user-navbar.component.css'],
})
export class UserNavbarComponent {
	public decode: Decoded;
	public Nome: string;
	public ImgPerfilUrl: string;
	public farmList: any;
	public selectedOption: string

	constructor(private userService: UserService) {
		this.selectedOption = localStorage.getItem("selectedOption")
	}

	ngOnInit(): void {
		this.decode = new Decoded();
		const token = localStorage.getItem('token');
		this.decode = jwt_decode(token);
		const Nome = this.UpperCase(this.decode.nome);
		const Sobrenome = this.UpperCase(this.decode.sobrenome);

		this.Nome = Nome + ' ' + Sobrenome;

		this.getFarmList();
		this.ImgPerfilUrl = 'http://localhost:3000/' + this.decode.ImgPerfil;
	}

	UpperCase(string: string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	public getFarmList() {
		this.userService.getListAccess(this.decode.id).subscribe((data) => {
			this.farmList = data;
		});
	}

	public onChange(event: any) {
		localStorage.setItem("selectedOption", event.target.value)
	}
}

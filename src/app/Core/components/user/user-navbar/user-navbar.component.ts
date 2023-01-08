import { Component } from '@angular/core';
import { UserService } from '../../../../Shared/services/user.service';
import { JwtService } from '../../../../Shared/services/jwt.service';

@Component({
	selector: 'app-user-navbar',
	templateUrl: './user-navbar.component.html',
	styleUrls: ['./user-navbar.component.css'],
})
export class UserNavbarComponent {
	public decode: any;
	public CompleteName: string;
	public ImgPerfilUrl: string;
	public farmList: any;
	public selectedOption: string

	constructor(private userService: UserService, private jwtService: JwtService) {
		this.selectedOption = localStorage.getItem("selectedOption")
	}

	ngOnInit(): void {
		const token = localStorage.getItem('token');
		this.decode = this.jwtService.Decode(token);
		const Nome = this.UpperCase(this.decode.nome);
		const Sobrenome = this.UpperCase(this.decode.sobrenome);
		this.CompleteName = Nome + ' ' + Sobrenome;
		this.ImgPerfilUrl = 'http://localhost:3000/' + this.decode.ImgPerfil;

		this.getFarmList();
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
		window.location.reload()
	}
}

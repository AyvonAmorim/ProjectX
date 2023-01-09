import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateRetiroComponent } from './create-retiro/create-retiro.component';
import { RetiroService } from 'src/app/Shared/services/retiro.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-retiro',
	templateUrl: './retiro.component.html',
	styleUrls: ['./retiro.component.css'],
})
export class RetiroComponent {
	public listOfRetiro: any;
	public Decoded: any;

	constructor(
		public dialog: MatDialog,
		private retiroService: RetiroService,
		private router: Router
	) {}

	ngOnInit() {
		this.getRetiroList();
	}

	public createRetiro() {
		const dialogRef = this.dialog.open(CreateRetiroComponent, {
			width: '500px',
			height: 'auto',
		});
		dialogRef.afterClosed().subscribe((result) => {});
	}

	private getRetiroList() {
		this.retiroService
			.RetiroList(localStorage.getItem('selectedOption'))
			.subscribe((response) => {
				const preToken = response.headers.get('Authorization');
				const token = preToken && preToken.split(' ')[1];
				localStorage.setItem('token', token);

				this.listOfRetiro = response.body;
			});
	}

	public OpenPasto(_id: string) {
		this.router.navigate(['user/pastos', { id: _id }]);
	}
}

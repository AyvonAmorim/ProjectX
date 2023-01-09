import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CreatePastoComponent } from './create-pasto/create-pasto.component';

@Component({
	selector: 'app-pastos',
	templateUrl: './pastos.component.html',
	styleUrls: ['./pastos.component.css'],
})
export class PastosComponent {
	public _id: string;
	public CreateButtonStatus: any;

	constructor(private router: ActivatedRoute, public dialog: MatDialog) {}

	ngOnInit() {
		this._id = this.VerifyIdOrPublic();

		if (this._id) {
			this.CreateButtonStatus = false;
		} else {
			this.CreateButtonStatus = true;
		}
	}

	private VerifyIdOrPublic() {
		if (this.router.snapshot.paramMap.get('id')) {
			return this.router.snapshot.paramMap.get('id');
		} else {
			return null;
		}
	}

	public OpenCreateRetiro() {
		const dialogRef = this.dialog.open(CreatePastoComponent, {
			data: this.router.snapshot.paramMap.get('id'),
			width: '500px',
			height: 'auto',
		});
		dialogRef.afterClosed().subscribe((result) => {});
	}
}

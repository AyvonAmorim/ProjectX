import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CreatePastoComponent } from './create-pasto/create-pasto.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { PastoService } from 'src/app/Shared/services/pasto.service';
import { ResponseListPasto } from 'src/app/Core/models/pasto-models';

@Component({
	selector: 'app-pastos',
	templateUrl: './pastos.component.html',
	styleUrls: ['./pastos.component.css'],
})
export class PastosComponent {
	public _id: string;
	public CreateButtonStatus: any;
	dataSource = new MatTableDataSource<ResponseListPasto>(null);
	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;

	displayedColumns = ['PastoName', '_id'];

	constructor(
		private router: ActivatedRoute,
		public dialog: MatDialog,
		public pastoService: PastoService
	) {}

	ngOnInit() {
		this._id = this.VerifyIdOrPublic();

		if (this._id) {
			this.CreateButtonStatus = false;
			this.getListPastoByRetiro(this._id);
		} else {
			this.CreateButtonStatus = true;
			this.getListPastoByFarm(localStorage.getItem('selectedOption'));
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

	private getListPastoByRetiro(retiro_id: string) {
		this.pastoService.getListByRetiro(retiro_id).subscribe((response: any) => {
			const preToken = response.headers.get('Authorization');
			const token = preToken && preToken.split(' ')[1];
			localStorage.setItem('token', token);
			this.dataSource = new MatTableDataSource<ResponseListPasto>(
				response.body
			);
			this.dataSource.sort = this.sort;
			this.dataSource.paginator = this.paginator;
		});
	}

	private getListPastoByFarm(farm_id: string) {
		this.pastoService.getListByFarm(farm_id).subscribe((response: any) => {
			const preToken = response.headers.get('Authorization');
			const token = preToken && preToken.split(' ')[1];
			localStorage.setItem('token', token);
			this.dataSource = new MatTableDataSource<ResponseListPasto>(
				response.body
			);
			this.dataSource.sort = this.sort;
			this.dataSource.paginator = this.paginator;
		});
	}

	public UpperCase(string: string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
}

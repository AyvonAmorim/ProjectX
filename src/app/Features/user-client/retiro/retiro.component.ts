import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateRetiroComponent } from './create-retiro/create-retiro.component';

@Component({
  selector: 'app-retiro',
  templateUrl: './retiro.component.html',
  styleUrls: ['./retiro.component.css']
})
export class RetiroComponent {

  constructor(public dialog: MatDialog) {}

  

  public createRetiro() {
    const dialogRef = this.dialog.open(CreateRetiroComponent, {
			width: '500px',
			height: 'auto',
		});
		dialogRef.afterClosed().subscribe((result) => {

		});
  }

}

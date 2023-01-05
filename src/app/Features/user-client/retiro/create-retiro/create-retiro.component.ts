import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-retiro',
  templateUrl: './create-retiro.component.html',
  styleUrls: ['./create-retiro.component.css']
})
export class CreateRetiroComponent {

  constructor(public dialogRef: MatDialogRef<CreateRetiroComponent>) {}

}

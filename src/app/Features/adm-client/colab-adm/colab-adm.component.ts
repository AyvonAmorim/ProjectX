import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateColabAdmComponent } from './create-colab-adm/create-colab-adm.component';

@Component({
  selector: 'app-colab-adm',
  templateUrl: './colab-adm.component.html',
  styleUrls: ['./colab-adm.component.css']
})
export class ColabAdmComponent {

  constructor(public dialog: MatDialog) {}

  public createColab() {
    const dialogRef = this.dialog.open(CreateColabAdmComponent, {
      width: '350px',
			height: 'auto',
    });
  }
}

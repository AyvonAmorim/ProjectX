import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Decoded } from 'src/app/Core/models/jwt-models';
import jwt_decode from 'jwt-decode';
import { CreateFarm } from 'src/app/Core/models/farm-models';
import { FarmService } from '../../../../Shared/services/farm.service';
import { AlertService } from '../../../../Shared/services/alert.service';


@Component({
  selector: 'app-create-farm-adm',
  templateUrl: './create-farm-adm.component.html',
  styleUrls: ['./create-farm-adm.component.css'],
})
export class CreateFarmAdmComponent {
  public decoded : Decoded;
  public createFarm: CreateFarm; 

  constructor (public dialogRef: MatDialogRef<CreateFarmAdmComponent>, private farmService: FarmService, private alertService: AlertService) {}

  ngOnInit(): void {
    this.createFarm = new CreateFarm();
    this.decoded = new Decoded();

    const token = localStorage.getItem('token');
		this.decoded = jwt_decode(token);

    this.createFarm.client_id = this.decoded.client_id;

  }

  doCreate(): void {

    if(!this.createFarm.name) {
      console.error('CAMPO RETIRO VAZIO')
    } else {
      this.farmService.createFarm(this.createFarm).subscribe(
        (data) => {
          this,this.dialogRef.close();
          this.alertService.success('Fazenda ' + data.name, 'criado com sucesso')
        },
        (error) => {
          this.alertService.error(error.error.message, '');
        }
      )
    }
  }

  close(): void {
		this.dialogRef.close();
	}

}

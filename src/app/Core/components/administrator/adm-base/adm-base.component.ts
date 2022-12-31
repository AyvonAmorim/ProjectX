import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adm-base',
  templateUrl: './adm-base.component.html',
  styleUrls: ['./adm-base.component.css']
})
export class AdmBaseComponent {

  constructor(private router: Router) {}

  logout() {
		localStorage.removeItem('token');
    window.location.reload()
	}

}

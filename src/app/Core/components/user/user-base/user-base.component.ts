import { Component } from '@angular/core';

@Component({
  selector: 'app-user-base',
  templateUrl: './user-base.component.html',
  styleUrls: ['./user-base.component.css']
})
export class UserBaseComponent {

  logout() {
		localStorage.removeItem('token');
    localStorage.removeItem('selectedOption');
    localStorage.removeItem('client_id');
    localStorage.removeItem('user_id');
    localStorage.removeItem('nome');
    localStorage.removeItem('sobrenome');
    window.location.reload();
	}

}

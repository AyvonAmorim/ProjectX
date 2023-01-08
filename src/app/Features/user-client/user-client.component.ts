import { Component } from '@angular/core';

@Component({
  selector: 'app-user-client',
  templateUrl: './user-client.component.html',
  styleUrls: ['./user-client.component.css']
})
export class UserClientComponent {

  ngOnInit() {
		const token = localStorage.getItem('token');
		console.log(token)
	}

}

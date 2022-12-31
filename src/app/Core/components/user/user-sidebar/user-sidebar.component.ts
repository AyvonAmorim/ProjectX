import { Component } from '@angular/core';
import { faTractor, faGear } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent {
  faTractor = faTractor
  faGear = faGear
}

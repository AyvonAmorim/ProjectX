import { Component } from '@angular/core';
import { faTractor, faGear } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-adm-sidebar',
  templateUrl: './adm-sidebar.component.html',
  styleUrls: ['./adm-sidebar.component.css']
})
export class AdmSidebarComponent {
  faTractor = faTractor
  faGear = faGear
}

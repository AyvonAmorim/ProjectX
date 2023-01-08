import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-pastos',
	templateUrl: './pastos.component.html',
	styleUrls: ['./pastos.component.css'],
})
export class PastosComponent {
	public _id: string;
  public CreateButtonStatus: any

	constructor(private router: ActivatedRoute) {}

	ngOnInit() {
		this._id = this.VerifyIdOrPublic();

    if(this._id){
      this.CreateButtonStatus = false;
    } else{
      this.CreateButtonStatus = true;
    }
	}

	private VerifyIdOrPublic() {
		if (this.router.snapshot.paramMap.get('id')) {
			return this.router.snapshot.paramMap.get('id');
		} else {
			return null;
		}
	}
}

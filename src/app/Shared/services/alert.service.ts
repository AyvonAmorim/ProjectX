import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
	providedIn: 'root',
})
export class AlertService {
	constructor(private _location: Location) {}

	public success(message: string, title: string): void {
		this.showAlert(title, message, 'success');
	}

  public successReload(message: string, title: string): void {
		this.showAlertReload(title, message, 'success');
	}

	public error(message: string, title: string): void {
		this.showAlert(title, message, 'error');
	}

	public warning(message: string, title: string): void {
		this.showAlert(title, message, 'warning');
	}

	private showAlert(title: string, message: string, icon: SweetAlertIcon): void {
		Swal.fire({
			title: title,
			icon,
			text: message,
		});
	}

	private showAlertReload(
		title: string,
		message: string,
		icon: SweetAlertIcon
	): void {
		Swal.fire({
			title: title,
			icon,
			text: message,
			confirmButtonColor: 'LightSeaGreen',
		}).then((result) => {
			if (result.isConfirmed) {
        window.location.reload()
			}
		});
	}
}

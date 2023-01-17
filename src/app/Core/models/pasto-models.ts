export class PastoCreate {
	public PastoName: string;
	public client_id: string;
	public farm_id: string;
	public retiro_id: string;
}

export class ResponseCreatePasto {
	public message: string;
	public name: string;
}

export class ResponseListPasto {
	public _id: string;
	public PastoName: string;
}
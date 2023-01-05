export class CreateUser {
	public nome: string;
	public sobrenome: string;
	public email: string;
	public senha: string;
	public AdmAccess = false;
	public client_id: string;
	public img: File;
}

export class ResponseCreateUser {
	public message: string;
	public user: string;
}

export class UserNoAdmList {
    public _id: string;
    public nome: string;
	public sobrenome: string;
	public ImgPerfil: string;
}

export class UpdateAdmList {
	public user_id: string;
	public ActiveFarms= [''];
}

export class BaseResponse {
	public message: string;
}

export class AccessListForSelect {
	public _id: string;
	public FarmName: string;
}
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
    public user: string
}
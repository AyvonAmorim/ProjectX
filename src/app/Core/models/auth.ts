export class RequestLogin {
    public login: string;
    public senha: string;
}

export class ResponseLogin {
    public message: string;
    public token: string;
}

export class TokenSend {
    public token: string;
}

export class ValidTokenResponse {
    public message: string;
}
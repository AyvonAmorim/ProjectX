
export class FarmList {
    public FarmName: string;
    public _id : string;
}
export class CreateFarm {
    public name: string;
    public client_id : string;
}
export class ResponseCreateFarm {
    public message: string;
    public name: string;
}
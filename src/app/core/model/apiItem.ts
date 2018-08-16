export class ApiItem {
    private url: string;
    private headers: any;

    constructor(url: string, headers: any) {
        this.url = url;
        this.headers = headers;
    }

    public getUrl(): string {
        return this.url;
    }

    public getHeaders(): any {
        return this.headers;
    }

    public toString(): string {
        return 'url: ' + this.url + ' headers: ' + JSON.stringify(this.headers);
    }
}

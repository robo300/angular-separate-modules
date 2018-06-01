export class Dog {

    constructor(public status: string, public message: string) {
    }

    public getStatus(): string {
        return this.status;
    }

    public getMessage(): string {
        return this.message;
    }


}

import {AbstractApiCall} from '../core/pkg/abstractApiCall';

export class Queue {

    private queue: Array<AbstractApiCall> = [];
    private busy = false;

    constructor() {
      console.log('queue constructor');
    }

    public push(item: AbstractApiCall): void {
        this.queue.push(item);
    }

    public getFirst(): AbstractApiCall {
      return this.queue[0];
    }

    public print(): void {
        for (let i = 0; i < this.getQueue().length; i++) {
            console.log(this.getQueue().length);
        }
    }

    public getQueue(): Array<AbstractApiCall> {
        return this.queue;
    }

    public getSize(): number {
        return this.queue.length;
    }

    public removeFirst(): void {
      this.queue.splice(0, 1);
    }

    public setBusy(): void {
      this.busy = true;
    }

    public setNotBusy(): void {
      this.busy = false;
    }

    public isBusy(): boolean {
      return this.busy;
    }
}

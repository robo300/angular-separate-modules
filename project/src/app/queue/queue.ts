import { RequestDelegateParams } from './../requestDelegateParams';
import { Data3 } from './../models/data3';
import { Injectable } from '@angular/core';

export class Queue {

    queue: Array<RequestDelegateParams> = [];

    constructor() {
        console.log('queue constructor');
    }

    public push(item: RequestDelegateParams): void {
        this.queue.push(item);
    }

    public pop(item: RequestDelegateParams): void {
        const itemIndex = this.queue.indexOf(item, 0);
        if (itemIndex > -1) {
            this.queue.splice(itemIndex, 1);
        }
    }

    public print(): void {
        console.log(this.getQueue());
    }

    public getQueue(): Array<RequestDelegateParams> {
        return this.queue;
    }
}

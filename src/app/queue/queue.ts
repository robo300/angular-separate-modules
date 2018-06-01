import { IObserver } from './../observable/IObserver';
import { IObservable } from './../observable/IObservable';
import { Injectable } from '@angular/core';

export class Queue implements IObservable {

    public queue: Array<string> = [];
    public observers: IObserver[] = [];

    registerObserver(observer: IObserver) {
        this.observers.push(observer);
    }
    removeObserver(observer: IObserver) {
        for (let i = 0; i < this.observers.length; i++) {
            if (this.observers[i] === observer) {
                this.observers.splice(i, 1);
            }
        }
    }
    notifyObservers() {
        for (let i = 0; i < this.observers.length; i++) {
            this.observers[i].receiveNotification(this.print());
        }
    }

    constructor() {
        console.log('queue constructor');
    }

    public push(item: string): void {
        this.queue.push(item);
        this.notifyObservers();
    }

    public getFirst(): string {
        const first = this.queue[0];
        this.queue.splice(0, 1);
        return first;
    }

    public print(): void {
        console.log(this.getQueue());
    }

    public getQueue(): Array<string> {
        return this.queue;
    }
}

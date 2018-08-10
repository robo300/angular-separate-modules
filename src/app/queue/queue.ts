import { IObserver } from './../observable/IObserver';
import { IObservable } from './../observable/IObservable';
import { Injectable } from '@angular/core';
import { ApiItem } from '../model/apiItem';
import { AbstractApiCall } from '../pkg/abstractApiCall';

export class Queue implements IObservable {

    private queue: Array<AbstractApiCall> = [];
    public observers: IObserver[] = [];
    private busy = false;

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
            this.observers[i].receiveNotification(null);
        }
    }

    constructor() {
      console.log('queue constructor');
    }

    public push(item: AbstractApiCall): void {
        this.queue.push(item);
        this.notifyObservers();
    }

    public getFirst(): AbstractApiCall {
        const first = this.queue[0];
        return first;
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

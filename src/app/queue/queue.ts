import { IObserver } from './../observable/IObserver';
import { IObservable } from './../observable/IObservable';
import { Injectable } from '@angular/core';
import { ApiItem } from '../model/apiItem';
import { AbstractApiCall } from '../pkg/abstractApiCall';

export class Queue implements IObservable {

    private queue: Array<AbstractApiCall> = [];
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
            // this.observers[i].receiveNotification(this.print());
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
        this.queue.splice(0, 1);
        return first;
    }

    public print(): void {
        for (let i = 0; i < this.getQueue().length; i++) {
            console.log(JSON.stringify(i));
        }
    }

    public getQueue(): Array<AbstractApiCall> {
        return this.queue;
    }

    public getSize(): number {
        return this.queue.length;
    }
}

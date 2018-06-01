import { IObserver } from './IObserver';

export interface IObservable {
    registerObserver(observer: IObserver);
    removeObserver(observer: IObserver);
    notifyObservers();
}

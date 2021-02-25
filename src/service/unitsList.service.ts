import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUnitsList } from '../interface/unitsList/iUnitsList.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()

export class UnitsListService { 
    api = 'assets/api/unitsList.json';
    unitsList$: Observable<Array<IUnitsList>>;
    behaviorSubjectUpdateUnitsList$: BehaviorSubject<Array<IUnitsList>>;

    constructor(private httpClient: HttpClient){
        this.behaviorSubjectUpdateUnitsList$ = <BehaviorSubject<Array<IUnitsList>>> new BehaviorSubject([]);
        this.unitsList$ = this.behaviorSubjectUpdateUnitsList$.asObservable()
        this.subscribeUnitsList()
    }

    getUnitsList = () => {
        return this.httpClient.get<Array<IUnitsList>>(this.api);
    }

    subscribeUnitsList = () => {
        this.getUnitsList().subscribe(
            unitsList => this.behaviorSubjectUpdateUnitsList$.next(unitsList)
        )
    }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUnitsList } from '../interface/unitsList/iUnitsList.interface';

@Injectable()

export class UnitsListService { 
    api = 'assets/api/unitsList.json';

    constructor(private httpClient: HttpClient){}

    getUnitsList = () => {
        return this.httpClient.get<Array<IUnitsList>>(this.api);
    }
}
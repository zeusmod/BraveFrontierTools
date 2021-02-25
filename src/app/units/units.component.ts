import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { UnitsListService } from '../../service/unitsList.service';
import { IUnitsList } from '../../interface/unitsList/iUnitsList.interface';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})

export class UnitsComponent implements OnInit {

   unitsList$: Observable<Array<IUnitsList>>;
   searchApi$: Observable<Array<IUnitsList>>;
   levelSearch$: Observable<Array<IUnitsList>> = this.unitsListService.getUnitsList();
   behaviorSubjectUpdateUnitsList$: BehaviorSubject<Array<IUnitsList>>;
   observableResult: Array<IUnitsList>;

  constructor(private unitsListService: UnitsListService) { 
    this.behaviorSubjectUpdateUnitsList$ = <BehaviorSubject<Array<IUnitsList>>> new BehaviorSubject([]);
    this.unitsList$ = this.behaviorSubjectUpdateUnitsList$.asObservable();
  }

  ngOnInit(): void {
    this.displayUnitsList();
  }

  displayUnitsList = () => {
    const unitsList$: Observable<Array<IUnitsList>> = this.unitsListService.getUnitsList().pipe(
      map((unitsList) => unitsList) 
    )
      unitsList$.subscribe(
        unitsList => {
          return this.behaviorSubjectUpdateUnitsList$.next(unitsList)
        }
      )
  }

  /*OnUnitListFilter = (unitsList$: Observable<Array<IUnitsList>>) => {
     this.exemple$ = unitsList$.pipe(
      switchMap((newUnitsList) => {
        return this.updateArray$.pipe(
          map((previousUnitsList) => { 
            if(JSON.stringify(previousUnitsList) === JSON.stringify(newUnitsList)) {
        
                if(this.newArray.length !== 0) {

                  return newUnitsList;

                } else {

                  return newUnitsList;
                }

            } else {
              this.newArray = newUnitsList;
              console.log(this.newArray)
              return this.newArray
            }
          })
        )
      })
    )
      return this.exemple$
  }*/
  
  globalObservable = (observable$: Observable<Array<IUnitsList>>)  => {
     observable$.subscribe (
      observable => {
        this.observableResult = observable;
      }
     )

    if(this.observableResult !== undefined) {
       this.observableResult.filter((res) => {
         console.log(res)
       })
     return this.observableResult
    }

  }

  resultSearchTextFieldEvent = ($event: any) => {

    this.unitsList$ = this.behaviorSubjectUpdateUnitsList$
    this.unitsList$ = this.unitsList$.pipe (
      map(searchTextField => searchTextField.filter((res) => { 
       
          return res.name.includes($event.search)
        }))
     )
  }

  searchByLevelEvent = ($event: string[]) => {
 
      const levelSearch$ = this.levelSearch$.pipe(
       
        map(levelsearch => levelsearch.filter((res) => $event.includes(res.level)))
      )
      levelSearch$.subscribe(
        levelSearch => this.behaviorSubjectUpdateUnitsList$.next(levelSearch)
      )
  }
}

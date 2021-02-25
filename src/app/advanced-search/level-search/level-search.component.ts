import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-level-search',
  templateUrl: './level-search.component.html',
  styleUrls: ['./level-search.component.scss']
})
export class LevelSearchComponent implements OnInit, OnChanges {

  @Input() levelsearch$: Observable<Array<any>>;
  @Output() levelSearchResult$ = new EventEmitter<any[]>();
  @Input() newSearch$: Observable<Array<any>>;

  levelListResult: any[] = []

  constructor() { }

  ngOnInit(): void {
  
  }

  ngOnChanges(simpleChanges: SimpleChanges) {

  }

  levelList: any[] = [
    {name: '1 étoile', state: false, icon: "★"},
    {name: '2 étoiles', state: true, icon: "★★"},
    {name: '3 étoiles', state: true, icon: "★★★"},
    {name: '4 étoiles', state: true, icon: "★★★★"},
    {name: '5 étoiles', state: true, icon: "★★★★★"},
    {name: '6 étoiles', state: false, icon: "★★★★★★"},
    {name: '7 étoiles', state: false, icon: "★★★★★★★"},
    {name: 'Omni', state: false, icon: "★★★★★★★★"}
  ] 

  displayLevelList(): any[] {
    return this.levelList;
  }
 
  //change the state of filter by level current 
  selectedLevel(level: any) {
     level.state = !level.state;
   
     this.levelList.reduce((levels: any[] = [], levelChange: any = {}) => {
 
      if(levelChange.state === true) {
        
         levels.push(levelChange.icon)

        this.levelListResult = levels
        this.levelSearchResult$.emit(levels)
     
      }  
      return levels
    }, [])

    this.checkeStateLevel(this.levelList);
  }

   // checked if all the value with state are false
   checkeStateLevel = (arrayList: any[]) => {
    let checker = arr => arr.every(v => v.state === false);

    let checkerResult = checker(arrayList)
  
    if(checkerResult === true) {

      return this.levelSearchResult$.emit([])
    }
  }

/*  filterByLevel(levelList: any[]) {
    if(this.newSearch$ !== undefined) {
    }
    const levelsearch$: Observable<Array<IUnitsList>> = this.levelsearch$.pipe(
      map(levelsearch => levelsearch.filter((res) => levelList.includes(res.level)))
    )
  }*/
}

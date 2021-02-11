import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { UnitsListService } from '../../service/unitsList.service';
import { IUnitsList } from '../../interface/unitsList/iUnitsList.interface';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})

export class UnitsComponent implements OnInit {
  unitsListResult$: Observable<Array<IUnitsList>>;
  @Input() unitsList$: Observable<Array<IUnitsList>>;


  constructor(private unitsListService: UnitsListService) { }

  ngOnInit(): void {
    this.displayUnitsList();
  }

  displayUnitsList = () => {
    const unitsList$: Observable<Array<IUnitsList>> = this.unitsListService.getUnitsList().pipe(
      map((unitsList) => unitsList) 
    )
      unitsList$.subscribe(
        unitsListResult => {
          return unitsListResult
        }
      )
      this.unitsListResult$ = unitsList$;
      this.unitsList$ = unitsList$;
  }

  resultSearchTextFieldEvent = ($event: Observable<Array<IUnitsList>>) => {
    this.unitsListResult$ = $event;
  }
}

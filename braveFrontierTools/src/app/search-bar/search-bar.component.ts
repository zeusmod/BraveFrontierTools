import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UnitsListService } from '../../service/unitsList.service';
import { IUnitsList } from '../../interface/unitsList/iUnitsList.interface';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit {
  rForm: FormGroup
  @Input() searchTextField$: Observable<Array<any>>; 
  @Output() resultSearchTextField$ = new EventEmitter <Observable<Array<any>>>();

  constructor(private fb: FormBuilder) {
    this.displaySearchBar();
   }
  
  ngOnInit(): void {
    this.searchApi();
  }

  displaySearchBar = () => {
    this.rForm = this.fb.group({
      "search":[ '',[Validators.required, Validators.maxLength(100)]]
    })
  }
  
  searchApi = () => {
    this.rForm.valueChanges.subscribe(
      val => {
        const searchApi$: Observable<Array<IUnitsList>> = this.searchTextField$.pipe(
        map(searchTextField => searchTextField.filter((res) =>{ 
            return res.name.includes(val.search)
          }))
        )
        this.resultSearchTextField$.emit(searchApi$);
      }
    )
  }
}

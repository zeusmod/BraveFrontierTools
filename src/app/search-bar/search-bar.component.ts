import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit {
  rForm: FormGroup

  @Input() searchTextField$: Observable<Array<any>>; 
  @Output() resultSearchTextField$ = new EventEmitter<any>();
  @Input() newResultSearch$: Observable<Array<any>>;

  searchApi$: Observable<Array<any>>;
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
   
        /*this.searchApi$ = this.searchTextField$.pipe (
          map(searchTextField => searchTextField.filter((res) => { 
              return res.name.includes(val.search)
            }))
         )*/
        
        this.resultSearchTextField$.emit(val);
/*
        this.searchTextField$.subscribe(
          searchApi => console.log(searchApi)
        )*/
      }
    )
  }
 /* ngOnChanges(changes: SimpleChanges) {
  
    for(const c in changes) {
      changes[c].currentValue.subscribe(
        ch => console.log(ch)
      )
    }


 }*/
}

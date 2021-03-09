import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elements-search',
  templateUrl: './elements-search.component.html',
  styleUrls: ['./elements-search.component.scss']
})
export class ElementsSearchComponent implements OnInit {
test = 0;
radioStatus = null;
  constructor() { }

  ngOnInit(): void {
    this.elementName()
  }

  elementsList: any[] = [
    {name: 'Feu', state: true, elementPicture: 'checkbox-custom-fire'},
    {name: 'Eau', state: true, elementPicture: 'checkbox-custom-water'},
    {name: 'Terre', state: true, elementPicture: 'checkbox-custom-earth'},
    {name: 'Foudre', state: true, elementPicture: 'checkbox-custom-lightning'},
    {name: 'Lumière', state: true, elementPicture: 'checkbox-custom-light'},
    {name: 'Ténèbre', state: true, elementPicture: 'checkbox-custom-dark'}
  ] 

  displayElementList = (): any[] => {
    return this.elementsList;
  }

  elementName = () => {
    this.elementsList.filter((res) => {
      console.log(res.name)
      return this.radioStatus = res.name;
    })
  }

  selectedElement = (event, el) => {
   /* event.preventDefault();
    console.log(el.value)
      if(this.radioStatus && this.radioStatus === el.value) {
        el.checked = !el.checked
        console.log(el.checked)
        this.radioStatus = null;
      } else {
        this.radioStatus = el.value;
      //  el.checked = true
    
      }*/
  }



}

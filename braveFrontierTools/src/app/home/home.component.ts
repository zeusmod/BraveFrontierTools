import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dungeonBattle: boolean;

  constructor() { }

  ngOnInit(): void {
   
  }

 onMouseEnter() {
    this.dungeonBattle = true;
  }

 onMouseLeave() {
    this.dungeonBattle = false;
  }

}

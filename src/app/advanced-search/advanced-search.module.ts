import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UnitsListService } from '../../service/unitsList.service';
import { MaterialModule } from '../../shared/material-module/material.module';

import { AdvancedSearchComponent } from './advanced-search.component';
import { LevelSearchComponent } from './level-search/level-search.component';

@NgModule({
  declarations: [
    AdvancedSearchComponent,
    LevelSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [UnitsListService],
  bootstrap: [AdvancedSearchComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CharacterSelectionComponent } from './character-selection/character-selection.component';
import { CharacterSelectionDisplayComponent } from './character-selection/character-selection-display/character-selection-display.component';


@NgModule({
  declarations: [
    AppComponent,
    CharacterSelectionComponent,
    CharacterSelectionDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

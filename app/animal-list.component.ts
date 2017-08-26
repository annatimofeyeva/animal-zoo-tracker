import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
      <ul class="list-group">
     <h4><li class="list-group item" *ngFor="let currentAnimal of childAnimalList | maturity:filterByMaturity"><em>Species:</em> {{currentAnimal.species}};  <em>Name: </em>{{currentAnimal.species}};  <em>Age: </em>{{currentAnimal.age}};   <em>Caretakers: </em> {{currentAnimal.caretakers}}<button  class="pull-right"  (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button></li></h4>
   </ul>
  <select (change)="onChange($event.target.value)">
      <option value="allAnimals">All Animals</option>
      <option value="youngAnimals">Young Animals</option>
      <option value="matureAnimals" selected="selected">Mature Animals</option>
  </select>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  isActive = true;



filterByMaturity: string = "matureAnimals";

  editButtonHasBeenClicked(animalToEdit: Animal) {
      this.clickSender.emit(animalToEdit);
    }

    onChange(optionFromMenu) {
    this.filterByMaturity = optionFromMenu;
  }
}

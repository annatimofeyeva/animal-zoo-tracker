import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <ul class="list-group">
   <li class="list-group-item" (click)="isUpdate(currentAnimal)" *ngFor="let currentAnimal of childAnimalList">Species: {{currentAnimal.species}};  Name: {{currentAnimal.species}};  Age: {{currentAnimal.age}};   Caretakers:  {{currentAnimal.caretakers}} <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button></li>
 </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  isUpdate(clickedAnimal: Animal) {
        if(clickedAnimal.update === true) {
          alert("This animal is updated");
        } else {
          alert("This animal is not updated");
        }
      }
}

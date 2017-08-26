import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div>
      <div *ngIf="childSelectedAnimal">
        <h3>{{childSelectedAnimal.name}} the {{childSelectedAnimal.species}}</h3>
        <div>
          <h3><em>Edit Animal</em></h3>
          <label>Enter Animal Species:</label>
               <input [(ngModel)]="childSelectedAnimal.species">
               <br>
               <label>Enter Animal Name:</label>
               <input [(ngModel)]="childSelectedAnimal.name">
               <br>
               <label>Enter Animal Age:</label>
               <input type="number" name="age" [(ngModel)]="childSelectedAnimal.age">
               <br>
               <label>Enter Animal Location:</label>
               <input [(ngModel)]="childSelectedAnimal.location">
               <br>
               <label>Enter Animal Caretakers:</label>
               <input type="number" name="caretakers" [(ngModel)]="childSelectedAnimal.caretakers">
               <br>
               <br>
          <button (click)="doneButtonClicked()">Done</button>
        </div>
      </div>
    </div>
  `
})

  export class EditAnimalComponent {
    @Input() childSelectedAnimal: Animal;
    @Output() doneButtonClickedSender = new EventEmitter();

    doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

  }

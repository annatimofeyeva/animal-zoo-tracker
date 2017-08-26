import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';



@Component({
  selector: 'new-animal',
  template: `
    <div class="well">
    <h1><em>New Animal</em></h1>
    <br>
    <br>
   <div>
     <label>Enter Animal Species:</label>
     <input #newSpecies>
   </div>
   <div>
     <label>Enter Animal name:</label>
     <input #newName>
   </div>
   <div>
     <label>Enter Animal Age:</label>
     <input #newAge>
   </div>
   <div>
     <label>Enter Animal Diet:</label>
     <input #newDiet>
   </div>
   <div>
     <label>Enter Animal Location:</label>
     <input #newLocation>
   </div>
   <div>
     <label>Enter Animal Caretakers:</label>
     <input #newCaretakers>
   </div>
   <div>
    <label>Animal Sex:</label>
    <select #newSex>
      <option [value]="1"> Male </option>
      <option [value]="2"> Female </option>
    </select>
    </div>
   <div>
     <label>Enter Animal Likes:</label>
     <input #newLikes>
   </div>
   <div>
     <label>Enter Animal Dislikes:</label>
     <input #newDislikes>
     <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newLikes.value=''; newDislikes.value='';">Add</button>
   </div>
  </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
      var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
      this.newAnimalSender.emit(newAnimalToAdd);
    }
}

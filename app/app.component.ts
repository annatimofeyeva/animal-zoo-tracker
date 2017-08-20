import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
      <h1>Zoo Animal's List: </h1>
      <h3>Last Update:  {{month}}/{{day}}/{{year}}</h3>
      <h3>{{currentList}}</h3>
      <ul class="list-group">
       <li class="list-group-item" (click)="isUpdate(currentAnimal)" *ngFor="let currentAnimal of animals">Species: {{currentAnimal.species}};  Name: {{currentAnimal.species}};  Age: {{currentAnimal.age}};   Caretakers:  {{currentAnimal.caretakers}} <button (click)="editAnimal(currentAnimal)">Edit!</button></li>
     </ul>
     <hr>
   <div *ngIf="selectedAnimal">
           <div>
            <h3>Editing Animal: </h3>
             <h3>{{selectedAnimal.species}}</h3>
             <h3>Edit Animal</h3>
             <label>Enter Animal Species:</label>
             <input [(ngModel)]="selectedAnimal.species">
             <br>
             <label>Enter Animal Name:</label>
             <input [(ngModel)]="selectedAnimal.name">
             <br>
             <label>Enter Animal Age:</label>
             <input type="number" name="age" [(ngModel)]="selectedAnimal.age">
             <br>
             <label>Enter Animal Location:</label>
             <input [(ngModel)]="selectedAnimal.location">
             <br>
             <label>Enter Animal Caretakers:</label>
             <input type="number" name="caretakers" [(ngModel)]="selectedAnimal.caretakers">
             <br>
           </div>
             <button (click)="finishedEditing()">Done</button>
       </div>
  </div>
  `
})

export class AppComponent {
  currentList: string = 'Zoo Animals:';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  animals: Animal[] = [
  new Animal("Arctic Fox", "Moon", 2, "Carnivore", "Northern Trail", 5, "Female", "Cool shade", "Loud noises"),
  new Animal("Ocelot", "Prince", 4, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Laying in the sunshine", "Toys that are not rope-based"),
  new Animal("Northwest Black Tailed Deer", "Tinkerbell", 8, "Herbivore", "Northern Trail", 2, "Female", "Delicate roots and leaves", "Loud Noises")
];
selectedAnimal: Animal = this.animals[0];

editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

isUpdate(clickedAnimal: Animal) {
      if(clickedAnimal.update === true) {
        alert("This animal is updated");
      } else {
        alert("This animal is not updated");
      }
    }
}

export class Animal{

public update: boolean = false;
constructor(public species: string, public  name: string, public age: number, public diet: string, public location: string, public caretakers: number, public sex: string, public likes: string, public dislikes: string){}
}

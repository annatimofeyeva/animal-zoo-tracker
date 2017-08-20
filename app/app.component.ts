import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <br>
    <h1>List of Zoo's Animals:</h1><br>
    <h2>Last update: {{month}}/{{day}}/{{year}}</h2>
<br>
<br>
<ul>
  <li [class]="priorityColor(currentAnimal)" (click)="isDone(currentAnimal)" *ngFor="let currentAnimal of animals">{{currentAnimal.species}},   {{currentAnimal.name}},   {{currentAnimal.age}},   {{currentAnimal.location}},   {{currentAnimal.caretakers}} <button  (click)="editAnimal(currentAnimal)">Edit!</button></li>
</ul>
<hr>
<div *ngIf="selectedAnimal">
        <div>
          <h3>{{selectedAnimal.species}}</h3>
          <p>Animal Complete? {{selectedAnimal.done}}</p>
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
          <input [(ngModel)]="selectedAnimal.caretakers">
          <br>
        </div>
          <button (click)="finishedEditing()">Done</button>
    </div>
  </div>
  `
})

export class AppComponent {
  currentAnimal: string = 'Arctic Fox';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  animals: Animal[] = [
    new Animal("Arctic Fox", "Moon", 2, "Carnivore", "Northern Trail", 5, "Female", "Cool shade", "Loud noises"),
    new Animal("Ocelot", "Prince", 4, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Laying in the sunshine", "Toys that are not rope-based"),
    new Animal("Northwest Black Tailed Deer", "Tinkerbell", 8, "Herbivore", "Northern Trail", 2, "Female", "Delicate roots and leaves", "Loud Noises")
  ];
   selectedAnimal = null;

   editAnimal(clickedAnimal) {
      this.selectedAnimal = clickedAnimal;
    }

    isDone(clickedAnimal: Animal) {
        if(clickedAnimal.done === true) {
          alert("This animal is done!");
        } else {
          alert("This animal is not updated.");
        }
      }

    finishedEditing() {
      this.selectedAnimal = null;
  }

   editTask(clickedAnimal) {
      this.selectedAnimal = clickedAnimal;
    }

    priorityColor(currentAnimal){
    if (currentAnimal.diet === 'Carnivore'){
      return "bg-warning";
    } else if (currentAnimal.diet === 'Herbivore'){
      return "bg-info";
    }
  }
}

export class Animal {
  public done: boolean = false;
  constructor(public species: string, public  name: string, public age: number, public diet: string, public location: string, public caretakers: number, public sex: string, public likes: string, public dislikes: string){}
}

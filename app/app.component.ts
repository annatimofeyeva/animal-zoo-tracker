import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <br>
    <h1>List of Zoo's Animals. Last update: {{month}}/{{day}}/{{year}}</h1>
<br>
<ul>
  <li [class]="priorityColor(currentAnimal)" (click)="isDone(currentAnimal)" *ngFor="let currentAnimal of animals">{{currentAnimal.species}}, {{currentAnimal.name}} <button (click)="editAnimal(currentAnimal)">Edit!</button></li>
</ul>
<hr>
        <div>
          <h3>{{selectedAnimal.species}}</h3>
          <p>Animal Complete? {{selectedAnimal.done}}</p>
          <h3>Edit Animal</h3>
          <label>Enter Animal Species:</label>
          <input [(ngModel)]="selectedAnimal.species">
          <label>Change Animal Location:</label>
          <br>
          <input type="radio" [(ngModel)]="selectedAnimal.diet" [value]="Carnivore">Carnivore<br>
          <input type="radio" [(ngModel)]="selectedAnimal.diet" [value]="Herbivore">Herbivore<br>
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
   selectedAnimal: Animal = this.animals[0];

   editAnimal(clickedAnimal) {
      this.selectedAnimal = clickedAnimal;
    }

    isDone(clickedAnimal: Animal) {
        if(clickedAnimal.done === true) {
          alert("This animal is done!");
        } else {
          alert("This animal is not done.");
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

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <br>
    <h1>List of Zoo Animals. Last update: {{month}}/{{day}}/{{year}}</h1>
<br>
<br>
<br>

  <table style="width:100%">
  <tr>
      <th>Species</th>
      <th>Name</th>
      <th>Age</th>
      <th>Diet</th>
      <th>Location</th>
      <th>Caretakers</th>
      <th>Sex</th>
      <th>Likes</th>
      <th>dislikes</th>
  </tr>
    <tr>
    <span class="badge"><td>{{firstAnimal.species}}</td></span>
      <td>{{firstAnimal.name}}</td>
      <td>{{firstAnimal.age}}</td>
      <td>{{firstAnimal.diet}}</td>
      <td>{{firstAnimal.location}}</td>
      <td>{{firstAnimal.caretakers}}</td>
      <td>{{firstAnimal.sex}}</td>
      <td>{{firstAnimal.location}}</td>
      <td>{{firstAnimal.dislikes}}</td>
  </tr>
    <tr>
      <td>{{secondAnimal.species}}</td>
      <td>{{secondAnimal.name}}</td>
      <td>{{secondAnimal.age}}</td>
      <td>{{secondAnimal.diet}}</td>
      <td>{{secondAnimal.location}}</td>
      <td>{{secondAnimal.caretakers}}</td>
      <td>{{secondAnimal.sex}}</td>
      <td>{{secondAnimal.location}}</td>
      <td>{{secondAnimal.dislikes}}</td>
    </tr>
    <tr>
      <td>{{thirdAnimal.species}}</td>
      <td>{{thirdAnimal.name}}</td>
      <td>{{thirdAnimal.age}}</td>
      <td>{{thirdAnimal.diet}}</td>
      <td>{{thirdAnimal.location}}</td>
      <td>{{thirdAnimal.caretakers}}</td>
      <td>{{thirdAnimal.sex}}</td>
      <td>{{thirdAnimal.location}}</td>
      <td>{{thirdAnimal.dislikes}}</td>
    </tr>
    </table>
  `
})

export class AppComponent {
  currentAnimal: string = 'Arctic Fox';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  firstAnimal: Animal = new Animal ("Arctic Fox", "Moon", 2, "Carnivore", "Northern Trail", 5, "Female", "Cool shade", "Loud noises");
  secondAnimal: Animal = new Animal ("Ocelot", "Prince", 4, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Laying in the sunshine", "Toys that are not rope-based");
  thirdAnimal: Animal = new Animal ("Northwest Black Tailed Deer", "Tinkerbell", 8, "Herbivore", "Northern Trail", 2, "Female", "Delicate roots and leaves", "Loud Noises");
}

export class Animal {
  constructor(public species: string, public  name: string, public age: number, public diet: string, public location: string, public caretakers: number, public sex: string, public likes: string, public dislikes: string){}
}

import { Component, ViewChild } from "@angular/core";

interface Person {
  name: string;
  favorites: Favorite[];
}

interface Favorite {
  id: number;
  name: string;
}

@Component({
  selector: "app-dynamics",
  templateUrl: "./dynamics.component.html",
  styles: [],
})
export class DynamicsComponent {
  newFavorite: string = "";

  person: Person = {
    name: "Gabriel",
    favorites: [
      { id: 1, name: "Metal Gear" },
      { id: 2, name: "Commado" },
    ],
  };

  save() {
    console.log(this.person);
  }

  delete(index: number) {
    this.person.favorites.splice(index, 1);
  }
  addGame() {
    console.log(this.newFavorite);
    const newGame = {
      id: this.person.favorites.length + 1,
      name: this.newFavorite,
    };
    this.person.favorites.push(newGame);
    this.newFavorite = "";
  }
}

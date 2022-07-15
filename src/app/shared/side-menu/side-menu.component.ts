import { Component } from "@angular/core";

interface MenuItem {
  text: string;
  route: string;
}

@Component({
  selector: "app-side-menu",
  templateUrl: "./side-menu.component.html",
  styles: [],
})
export class SideMenuComponent {
  templateMenu: MenuItem[] = [
    {
      text: "Basics",
      route: "./template/basics",
    },
    {
      text: "Dyamics",
      route: "./template/dynamics",
    },
    {
      text: "Switches",
      route: "./template/switches",
    },
  ];
  reactiveMenu: MenuItem[] = [
    {
      text: "Basics",
      route: "./reactive/basics",
    },
    {
      text: "Dyamics",
      route: "./reactive/dynamics",
    },
    {
      text: "Switches",
      route: "./reactive/switches",
    },
  ];
}

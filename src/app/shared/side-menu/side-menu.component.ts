import { Component } from "@angular/core";

interface MenuItem {
  text: string;
  route: string;
}

@Component({
  selector: "app-side-menu",
  templateUrl: "./side-menu.component.html",
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class SideMenuComponent {
  templateMenu: MenuItem[] = [
    {
      text: "Basics",
      route: "./template/basics",
    },
    {
      text: "Dyamic",
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
      text: "Dyamic",
      route: "./reactive/dynamics",
    },
    {
      text: "Switches",
      route: "./reactive/switches",
    },
  ];
  authMenu: MenuItem[] = [
    {
      text: "Register",
      route: "./auth/register",
    },
    {
      text: "Login",
      route: "./auth/login",
    },
  ];
}

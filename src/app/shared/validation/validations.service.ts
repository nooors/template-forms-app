import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class ValidationsService {
  firstLastNamePattern: string = "([a-zA-Z]+) ([a-zA-Z]+)";
  emailPattern: string = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}";
  cannotBeNoors(control: FormControl) {
    const value: string = control.value?.trim().toLowerCase();
    if (value === "nooors") {
      return {
        noNooors: true,
      };
    }
    return null; // no errors
  }

  constructor() {}
}

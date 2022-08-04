import { ValidationsService } from "./../../../shared/validation/validations.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styles: [],
})
export class RegisterComponent implements OnInit {
  // TODO: TEMPORAL -> mooved to a service
  // firstLastNamePattern: string = "([a-zA-Z]+) ([a-zA-Z]+)";
  // emailPattern: string = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}";
  // cannotBeNoors(control: FormControl) {
  //   const value: string = control.value?.trim().toLowerCase();
  //   if (value === "nooors") {
  //     return {
  //       noNooors: true,
  //     };
  //   }
  //   return null; // no errors
  // }

  myForm: FormGroup = this.fb.group({
    name: [
      "Perico Palotes",
      [
        Validators.required,
        Validators.pattern(this.valSrv.firstLastNamePattern),
      ],
    ],
    email: [
      "perico@palotes.com",
      [Validators.required, Validators.pattern(this.valSrv.emailPattern)],
    ],
    userName: ["Palotismos", [Validators.required, this.valSrv.cannotBeNoors]],
    password: ["", [Validators.required, Validators.minLength(6)]],
    confirmPassword: ["", [Validators.required]],
  });

  constructor(private fb: FormBuilder, private valSrv: ValidationsService) {}

  ngOnInit(): void {}

  fieldIsNotValid(field: string) {
    return this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched;
  }

  formSubmit() {
    console.log(this.myForm.value);
    this.myForm.markAllAsTouched();
  }
}

import { Component } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-dynamics",
  templateUrl: "./dynamics.component.html",
  styles: [],
})
export class DynamicsComponent {
  myForm: FormGroup = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(3)]],
    favorites: this.fb.array(
      [
        ["Metal Gear", Validators.required],
        ["Death Stranding", Validators.required],
      ],
      Validators.required,
    ),
  });

  newFavorite: FormControl = this.fb.control("", Validators.required);

  get favoritesArr() {
    return this.myForm.get("favorites") as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  fieldIsValid(field: string) {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  addFavorite() {
    if (this.newFavorite.invalid) {
      return;
    }

    // this.favoritosArr.push( new FormControl( this.nuevoFavorito.value, Validators.required ) );
    this.favoritesArr.push(
      this.fb.control(this.newFavorite.value, Validators.required),
    );

    this.newFavorite.reset();
  }

  delete(i: number) {
    this.favoritesArr.removeAt(i);
  }

  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    // imprimir el valor del formulario, sólo si es válido
    // Print the form value, only if it is valid
    console.log(this.myForm.value);
  }
}

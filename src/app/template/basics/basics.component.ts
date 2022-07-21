import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-basics",
  templateUrl: "./basics.component.html",
  styles: [],
})
export class BasicsComponent implements OnInit {
  @ViewChild("myForm") myForm!: NgForm;

  // Default form value we bind it to NgModel
  initForm = {
    product: "RTX 4080ti",
    price: 10,
    stock: 10,
  };

  constructor() {}

  ngOnInit(): void {}

  validName(): boolean {
    return (
      this.myForm?.controls["product"]?.invalid &&
      this.myForm?.controls["product"]?.touched
    );
  }

  validPrice(): boolean {
    return (
      this.myForm?.controls["price"]?.touched &&
      this.myForm?.controls["price"]?.value < 0
    );
  }

  // save( myForm: NgForm )
  // We need the argument because before @ViewChild we don't have any reference to the form
  // save(myForm: NgForm) {
  save() {
    // Now we have a form reference throught @ViewChild, so myForm is a propertie of the class
    console.log(this.myForm);
    console.log("Correct post");

    // Clear he form and set initial values
    this.myForm.resetForm({
      product: "Something",
      price: 0,
      stock: 0,
    });
  }
}

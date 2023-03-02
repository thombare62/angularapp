import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.css"],
})
export class ReactiveFormComponent implements OnInit {
  myReactiveForm: FormGroup;
  submitted = false;
  formData: any;
  constructor() {
    this.createForm();
  }
  ngOnInit() {

  }

  createForm() {
    this.myReactiveForm = new FormGroup({
     
      'email': new FormControl(null, [Validators.required, Validators.email]  ),
      'subscriptions': new FormControl('Advanced'),
      'password': new FormControl(null, [Validators.required]),
      'date': new FormControl(null,[Validators.required, ])
    });
  }

  OnSubmit() {
    alert(`Form is submitted successfully.`);
    console.log(`My Reactive Form`, this.myReactiveForm);
    this.submitted = true;
    if (this.myReactiveForm.invalid) {
      return;
    }
    this.formData = this.myReactiveForm.value;
  }
}
